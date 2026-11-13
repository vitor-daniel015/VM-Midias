<?php

declare(strict_types=1);

date_default_timezone_set('America/Sao_Paulo');
set_time_limit(55);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, max-age=0');
header('X-Content-Type-Options: nosniff');

function vm_reply(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

$configPath = __DIR__ . '/api/.news-config.php';
if (!is_file($configPath)) {
    vm_reply(503, ['error' => 'A busca manual ainda não foi configurada no servidor.']);
}

$config = require $configPath;
$supabaseUrl = rtrim((string) ($config['supabase_url'] ?? ''), '/');
$serviceRoleKey = trim((string) ($config['service_role_key'] ?? ''));
if ($supabaseUrl === '' || $serviceRoleKey === '') {
    vm_reply(503, ['error' => 'A busca manual está temporariamente indisponível.']);
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'GET' && ($_GET['health'] ?? '') === '1') {
    vm_reply(200, ['ok' => true, 'configured' => true]);
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    header('Allow: POST');
    vm_reply(405, ['error' => 'Use o botão do painel para iniciar a busca.']);
}

function vm_authorization_header(): string
{
    $value = (string) ($_SERVER['HTTP_AUTHORIZATION'] ?? '');
    if ($value !== '') {
        return $value;
    }
    if (function_exists('getallheaders')) {
        foreach (getallheaders() as $name => $headerValue) {
            if (strcasecmp((string) $name, 'Authorization') === 0) {
                return (string) $headerValue;
            }
        }
    }
    return '';
}

$authorization = vm_authorization_header();
if (!preg_match('/^Bearer\s+([A-Za-z0-9._-]+)$/i', $authorization, $tokenMatch)) {
    vm_reply(401, ['error' => 'Entre novamente no painel administrativo.']);
}
$accessToken = $tokenMatch[1];

function vm_request(string $method, string $url, array $headers = [], ?string $body = null, int $timeout = 20): array
{
    $handle = curl_init($url);
    curl_setopt_array($handle, [
        CURLOPT_CUSTOMREQUEST => $method,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_MAXREDIRS => 6,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_TIMEOUT => $timeout,
        CURLOPT_ENCODING => '',
        CURLOPT_HTTPHEADER => $headers,
        CURLOPT_USERAGENT => 'VM-Midias-News/1.1 (+https://vmmidias.com.br)',
    ]);
    if ($body !== null) {
        curl_setopt($handle, CURLOPT_POSTFIELDS, $body);
    }
    $responseBody = curl_exec($handle);
    $status = (int) curl_getinfo($handle, CURLINFO_RESPONSE_CODE);
    $effectiveUrl = (string) curl_getinfo($handle, CURLINFO_EFFECTIVE_URL);
    $error = curl_error($handle);
    curl_close($handle);
    return [
        'ok' => $responseBody !== false && $status >= 200 && $status < 300,
        'status' => $status,
        'body' => $responseBody === false ? '' : (string) $responseBody,
        'url' => $effectiveUrl,
        'error' => $error,
    ];
}

function vm_supabase_headers(string $apiKey, string $authorization, array $extra = []): array
{
    return array_merge([
        'apikey: ' . $apiKey,
        'Authorization: Bearer ' . $authorization,
    ], $extra);
}

$userResponse = vm_request(
    'GET',
    $supabaseUrl . '/auth/v1/user',
    vm_supabase_headers($serviceRoleKey, $accessToken),
    null,
    12,
);
$user = json_decode($userResponse['body'], true);
if (!$userResponse['ok'] || !is_array($user) || empty($user['id'])) {
    vm_reply(401, ['error' => 'Sua sessão expirou. Entre novamente.']);
}

$adminResponse = vm_request(
    'POST',
    $supabaseUrl . '/rest/v1/rpc/is_vm_admin',
    vm_supabase_headers($serviceRoleKey, $accessToken, ['Content-Type: application/json']),
    '{}',
    12,
);
if (!$adminResponse['ok'] || json_decode($adminResponse['body'], true) !== true) {
    vm_reply(403, ['error' => 'Somente administradores podem iniciar esta busca.']);
}

$lockPath = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'vm-news-refresh-' . hash('sha256', (string) $user['id']) . '.lock';
$lock = fopen($lockPath, 'c+');
if ($lock === false || !flock($lock, LOCK_EX | LOCK_NB)) {
    vm_reply(429, ['error' => 'Uma busca já está em andamento. Aguarde um instante.']);
}
$lastRun = (int) trim((string) stream_get_contents($lock));
if ($lastRun > 0 && time() - $lastRun < 45) {
    flock($lock, LOCK_UN);
    fclose($lock);
    vm_reply(429, ['error' => 'Aguarde um minuto antes de buscar novamente.']);
}
ftruncate($lock, 0);
rewind($lock);
fwrite($lock, (string) time());
fflush($lock);
register_shutdown_function(static function () use ($lock): void {
    flock($lock, LOCK_UN);
    fclose($lock);
});

function vm_plain(?string $value): string
{
    $decoded = preg_replace('/<!\[CDATA\[|\]\]>/i', '', (string) $value) ?? '';
    for ($pass = 0; $pass < 3; $pass++) {
        $previous = $decoded;
        $decoded = html_entity_decode($decoded, ENT_QUOTES | ENT_HTML5, 'UTF-8');
        if ($decoded === $previous) {
            break;
        }
    }
    $decoded = preg_replace('/<script\b[^>]*>[\s\S]*?<\/script>/i', ' ', $decoded) ?? $decoded;
    $decoded = preg_replace('/<style\b[^>]*>[\s\S]*?<\/style>/i', ' ', $decoded) ?? $decoded;
    $decoded = strip_tags($decoded);
    return trim(preg_replace('/\s+/u', ' ', $decoded) ?? $decoded);
}

function vm_limit(string $value, int $length): string
{
    return function_exists('mb_substr') ? mb_substr($value, 0, $length) : substr($value, 0, $length);
}

function vm_starts_with(string $value, string $prefix): bool
{
    return $prefix === '' || strncmp($value, $prefix, strlen($prefix)) === 0;
}

function vm_contains(string $value, string $fragment): bool
{
    return $fragment === '' || strpos($value, $fragment) !== false;
}

function vm_normalized(string $value): string
{
    $ascii = function_exists('iconv') ? iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', $value) : $value;
    return strtolower((string) ($ascii === false ? $value : $ascii));
}

function vm_tag(string $block, array $names): string
{
    foreach ($names as $name) {
        $escaped = preg_quote($name, '/');
        if (preg_match('/<' . $escaped . '(?:\s[^>]*)?>([\s\S]*?)<\/' . $escaped . '>/i', $block, $match)) {
            return (string) $match[1];
        }
    }
    return '';
}

function vm_attribute(string $block, array $tagNames, string $attributeName): string
{
    foreach ($tagNames as $name) {
        $tag = preg_quote($name, '/');
        $attribute = preg_quote($attributeName, '/');
        if (preg_match('/<' . $tag . '\b[^>]*\b' . $attribute . '\s*=\s*["\']([^"\']+)["\'][^>]*>/i', $block, $match)) {
            return html_entity_decode((string) $match[1], ENT_QUOTES | ENT_HTML5, 'UTF-8');
        }
    }
    return '';
}

function vm_low_value_news(string $title, string $summary): bool
{
    $normalizedTitle = vm_normalized($title);
    $value = vm_normalized($title . ' ' . $summary);
    $program = '/\b(jornal|telejornal|eptv|sptv|bom dia|jornal hoje|jornal nacional|jornal do almoco|jornal anhanguera|link vanguarda|jac\s?1|mg\s?1|rj\s?1|df\s?1|globonews)\b/';
    return preg_match('/^videos?\s*:/', $normalizedTitle) === 1
        || (preg_match('/\b(assista|acompanhe|veja)\b/', $value) === 1 && preg_match('/\b(videos?|jornal|edicao)\b/', $value) === 1)
        || (preg_match($program, $value) === 1 && preg_match('/\b(ao vivo|esta no ar|agora no ar|integra|edicao|segunda|terca|quarta|quinta|sexta|sabado|domingo)\b/', $value) === 1)
        || preg_match('/^ao vivo\s*:/', $normalizedTitle) === 1;
}

function vm_usable_image(?string $value): bool
{
    $url = trim((string) $value);
    if (!preg_match('/^https?:\/\//i', $url)) {
        return false;
    }
    return preg_match('/(?:logo-30-anos|share-30-anos|favicon|spacer|pixel|placeholder|sem[-_ ]imagem|\/logo(?:[-_.\/]|$)|lh3\.googleusercontent\.com\/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc)/i', $url) !== 1;
}

function vm_article_image(string $block, string $description): string
{
    $image = vm_attribute($block, ['media:content', 'media:thumbnail'], 'url');
    if ($image === '') {
        $enclosure = vm_attribute($block, ['enclosure'], 'url');
        $enclosureTag = preg_match('/<enclosure\b[^>]*>/i', $block, $tagMatch) ? $tagMatch[0] : '';
        if ($enclosure !== '' && (preg_match('/\btype=["\']image\//i', $enclosureTag) || preg_match('/\.(?:avif|gif|jpe?g|png|webp)(?:[?#]|$)/i', $enclosure))) {
            $image = $enclosure;
        }
    }
    if ($image === '') {
        $html = html_entity_decode($description, ENT_QUOTES | ENT_HTML5, 'UTF-8');
        if (preg_match('/<img\b[^>]*\bsrc\s*=\s*["\']?([^"\'\s>]+)/i', $html, $imageMatch)) {
            $image = html_entity_decode($imageMatch[1], ENT_QUOTES | ENT_HTML5, 'UTF-8');
        }
    }
    return vm_usable_image($image) ? $image : '';
}

function vm_parse_feed(string $xml, array $source, int $cutoffTimestamp): array
{
    if (!preg_match_all('/<(?:item|entry)\b[\s\S]*?<\/(?:item|entry)>/i', $xml, $matches)) {
        return [];
    }
    $articles = [];
    $isGoogle = vm_starts_with((string) $source['url'], 'https://news.google.com/');
    foreach ($matches[0] as $block) {
        $title = vm_plain(vm_tag($block, ['title']));
        if ($isGoogle) {
            $title = trim((string) preg_replace('/\s+-\s+[^–—-]{2,80}$/u', '', $title));
        }
        $description = vm_tag($block, ['description', 'content:encoded', 'summary', 'content']);
        $summary = vm_limit(vm_plain($description), 420);
        if ($title === '' || vm_low_value_news($title, $summary)) {
            continue;
        }
        $rawDate = vm_plain(vm_tag($block, ['pubDate', 'published', 'updated', 'dc:date']));
        $publishedTimestamp = $rawDate === '' ? false : strtotime($rawDate);
        if ($publishedTimestamp === false || $publishedTimestamp < $cutoffTimestamp || $publishedTimestamp > time() + 300) {
            continue;
        }
        $link = vm_plain(vm_tag($block, ['link']));
        if ($link === '') {
            $link = vm_attribute($block, ['link'], 'href');
        }
        if (!filter_var($link, FILTER_VALIDATE_URL)) {
            continue;
        }
        $guid = vm_plain(vm_tag($block, ['guid', 'id']));
        $identity = $guid !== '' ? $guid : $link;
        $articles[] = [
            'external_id' => hash('sha256', $source['name'] . '|' . $identity),
            'title' => $title,
            'summary' => $summary !== '' ? $summary : null,
            'source_name' => $source['name'],
            'category' => $source['category'],
            'image_url' => vm_article_image($block, $description) ?: null,
            'article_url' => $link,
            'published_at' => gmdate('c', $publishedTimestamp),
        ];
        if (count($articles) >= 18) {
            break;
        }
    }
    return $articles;
}

function vm_fetch_many(array $urls, int $timeout = 14, string $accept = 'application/rss+xml, application/xml, text/xml, */*'): array
{
    $multi = curl_multi_init();
    $handles = [];
    foreach (array_values($urls) as $index => $url) {
        $handle = curl_init($url);
        curl_setopt_array($handle, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_MAXREDIRS => 6,
            CURLOPT_CONNECTTIMEOUT => 5,
            CURLOPT_TIMEOUT => $timeout,
            CURLOPT_ENCODING => '',
            CURLOPT_HTTPHEADER => ['Accept: ' . $accept],
            CURLOPT_USERAGENT => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/140 Safari/537.36',
        ]);
        curl_multi_add_handle($multi, $handle);
        $handles[$index] = $handle;
    }
    do {
        $status = curl_multi_exec($multi, $running);
        if ($running > 0) {
            $selected = curl_multi_select($multi, 1.0);
            if ($selected === -1) {
                usleep(100000);
            }
        }
    } while ($running > 0 && $status === CURLM_OK);

    $results = [];
    foreach ($handles as $index => $handle) {
        $body = curl_multi_getcontent($handle);
        $httpStatus = (int) curl_getinfo($handle, CURLINFO_RESPONSE_CODE);
        $results[$index] = [
            'ok' => $body !== false && $httpStatus >= 200 && $httpStatus < 300,
            'body' => $body === false ? '' : (string) $body,
            'url' => (string) curl_getinfo($handle, CURLINFO_EFFECTIVE_URL),
        ];
        curl_multi_remove_handle($multi, $handle);
        curl_close($handle);
    }
    curl_multi_close($multi);
    return $results;
}

function vm_html_attribute(string $tag, string $name): string
{
    $escaped = preg_quote($name, '/');
    if (preg_match('/\b' . $escaped . '\s*=\s*(["\'])(.*?)\1/is', $tag, $match)) {
        return html_entity_decode($match[2], ENT_QUOTES | ENT_HTML5, 'UTF-8');
    }
    return '';
}

function vm_absolute_url(string $value, string $baseUrl): string
{
    if (preg_match('/^https?:\/\//i', $value)) {
        return $value;
    }
    $base = parse_url($baseUrl);
    if (!is_array($base) || empty($base['host'])) {
        return '';
    }
    $scheme = $base['scheme'] ?? 'https';
    if (vm_starts_with($value, '//')) {
        return $scheme . ':' . $value;
    }
    if (vm_starts_with($value, '/')) {
        return $scheme . '://' . $base['host'] . $value;
    }
    $path = isset($base['path']) ? dirname($base['path']) : '';
    return $scheme . '://' . $base['host'] . rtrim($path, '/') . '/' . ltrim($value, '/');
}

function vm_page_metadata(string $html, string $baseUrl): array
{
    $metadata = ['title' => '', 'summary' => '', 'image_url' => ''];
    if (!preg_match_all('/<meta\b[^>]*>/i', $html, $matches)) {
        return $metadata;
    }
    foreach ($matches[0] as $tag) {
        $key = strtolower(vm_html_attribute($tag, 'property') ?: vm_html_attribute($tag, 'name'));
        if (!in_array($key, ['og:title', 'og:description', 'og:image', 'twitter:image', 'twitter:image:src'], true)) {
            continue;
        }
        $content = vm_html_attribute($tag, 'content');
        if ($content === '') {
            continue;
        }
        if (in_array($key, ['og:image', 'twitter:image', 'twitter:image:src'], true)) {
            $image = vm_absolute_url($content, $baseUrl);
            if ($metadata['image_url'] === '' && vm_usable_image($image)) {
                $metadata['image_url'] = $image;
            }
        } elseif ($key === 'og:title' && $metadata['title'] === '') {
            $metadata['title'] = vm_plain($content);
        } elseif ($key === 'og:description' && $metadata['summary'] === '') {
            $metadata['summary'] = vm_limit(vm_plain($content), 420);
        }
    }
    return $metadata;
}

$now = new DateTimeImmutable('now', new DateTimeZone('America/Sao_Paulo'));
$todayStart = $now->setTime(0, 0, 0)->getTimestamp();
$rollingCutoff = $now->sub(new DateInterval('PT24H'))->getTimestamp();
$cutoffTimestamp = max($todayStart, $rollingCutoff);
$cutoffIso = gmdate('c', $cutoffTimestamp);

$serviceHeaders = vm_supabase_headers($serviceRoleKey, $serviceRoleKey);
vm_request(
    'DELETE',
    $supabaseUrl . '/rest/v1/news_articles?published_at=lt.' . rawurlencode($cutoffIso),
    array_merge($serviceHeaders, ['Prefer: return=minimal']),
    null,
    15,
);

$existingResponse = vm_request(
    'GET',
    $supabaseUrl . '/rest/v1/news_articles?select=external_id,title,article_url&published_at=gte.' . rawurlencode($cutoffIso) . '&limit=1000',
    $serviceHeaders,
    null,
    15,
);
if (!$existingResponse['ok']) {
    vm_reply(502, ['error' => 'Não foi possível consultar a fila atual de notícias.']);
}
$existingRows = json_decode($existingResponse['body'], true);
$existingTitles = [];
$existingUrls = [];
foreach (is_array($existingRows) ? $existingRows : [] as $row) {
    $existingTitles[vm_normalized((string) ($row['title'] ?? ''))] = true;
    if (!empty($row['article_url'])) {
        $existingUrls[(string) $row['article_url']] = true;
    }
}

$googleBase = 'https://news.google.com/rss/search?q=';
$googleLocale = '&hl=pt-BR&gl=BR&ceid=BR:pt-419';
$sources = [
    ['name' => 'G1 Campinas', 'category' => 'Regional', 'url' => 'https://g1.globo.com/dynamo/sp/campinas-regiao/rss2.xml'],
    ['name' => 'G1 Piracicaba', 'category' => 'Regional', 'url' => 'https://g1.globo.com/dynamo/sp/piracicaba-regiao/rss2.xml'],
    ['name' => 'Agência Brasil', 'category' => 'Brasil', 'url' => 'https://agenciabrasil.ebc.com.br/rss/ultimasnoticias/feed.xml'],
    ['name' => 'CNN Brasil', 'category' => 'Brasil', 'url' => 'https://www.cnnbrasil.com.br/feed/'],
    ['name' => 'Notícias Sorocaba', 'category' => 'Regional', 'url' => $googleBase . rawurlencode('Sorocaba when:1d') . $googleLocale],
    ['name' => 'Notícias da região', 'category' => 'Regional', 'url' => $googleBase . rawurlencode('(Iperó OR "Araçoiaba da Serra" OR Tatuí OR Boituva) when:1d') . $googleLocale],
    ['name' => 'São Paulo agora', 'category' => 'São Paulo', 'url' => $googleBase . rawurlencode('São Paulo notícias when:1d') . $googleLocale],
    ['name' => 'Brasil agora', 'category' => 'Brasil', 'url' => $googleBase . rawurlencode('Brasil notícias when:1d') . $googleLocale],
    ['name' => 'Economia agora', 'category' => 'Economia', 'url' => $googleBase . rawurlencode('economia Brasil when:1d') . $googleLocale],
    ['name' => 'Futebol agora', 'category' => 'Futebol', 'url' => $googleBase . rawurlencode('futebol brasileiro when:1d') . $googleLocale],
];

$feedResults = vm_fetch_many(array_column($sources, 'url'));
$candidates = [];
$seenTitles = $existingTitles;
$seenUrls = $existingUrls;
$failedSources = 0;
$freshFound = 0;
foreach ($sources as $index => $source) {
    $feed = $feedResults[$index] ?? ['ok' => false, 'body' => ''];
    if (!$feed['ok']) {
        $failedSources++;
        continue;
    }
    $articles = vm_parse_feed($feed['body'], $source, $cutoffTimestamp);
    $freshFound += count($articles);
    foreach ($articles as $article) {
        $titleKey = vm_normalized($article['title']);
        $urlKey = (string) $article['article_url'];
        if ($titleKey === '' || isset($seenTitles[$titleKey]) || isset($seenUrls[$urlKey])) {
            continue;
        }
        $seenTitles[$titleKey] = true;
        $seenUrls[$urlKey] = true;
        $candidates[] = $article;
        if (count($candidates) >= 48) {
            break 2;
        }
    }
}

$metadataIndexes = [];
$metadataUrls = [];
foreach ($candidates as $index => $article) {
    if (!vm_usable_image($article['image_url'])) {
        $metadataIndexes[] = $index;
        $metadataUrls[] = $article['article_url'];
        if (count($metadataUrls) >= 32) {
            break;
        }
    }
}
if ($metadataUrls !== []) {
    $pageResults = vm_fetch_many($metadataUrls, 12, 'text/html,application/xhtml+xml');
    foreach ($pageResults as $resultIndex => $page) {
        if (!$page['ok']) {
            continue;
        }
        $candidateIndex = $metadataIndexes[$resultIndex];
        $metadata = vm_page_metadata($page['body'], $page['url'] ?: $candidates[$candidateIndex]['article_url']);
        if ($metadata['image_url'] !== '') {
            $candidates[$candidateIndex]['image_url'] = $metadata['image_url'];
        }
        if (empty($candidates[$candidateIndex]['summary']) && $metadata['summary'] !== '') {
            $candidates[$candidateIndex]['summary'] = $metadata['summary'];
        }
        if (!vm_contains((string) $page['url'], 'news.google.com')) {
            $candidates[$candidateIndex]['article_url'] = $page['url'];
        }
    }
}

$records = array_values(array_filter($candidates, static function (array $article) use ($cutoffTimestamp): bool {
    $published = strtotime((string) $article['published_at']);
    return $published !== false
        && $published >= $cutoffTimestamp
        && $published >= time() - 86400
        && vm_usable_image($article['image_url']);
}));
$records = array_slice($records, 0, 30);

$added = 0;
if ($records !== []) {
    $insertResponse = vm_request(
        'POST',
        $supabaseUrl . '/rest/v1/news_articles?on_conflict=external_id',
        array_merge($serviceHeaders, [
            'Content-Type: application/json',
            'Prefer: resolution=ignore-duplicates,missing=default,return=representation',
        ]),
        json_encode($records, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
        20,
    );
    if (!$insertResponse['ok']) {
        vm_reply(502, ['error' => 'As fontes responderam, mas não foi possível salvar as novas notícias.']);
    }
    $insertedRows = json_decode($insertResponse['body'], true);
    $added = is_array($insertedRows) ? count($insertedRows) : 0;
}

vm_reply(200, [
    'found' => $freshFound,
    'added' => $added,
    'skipped' => max(0, $freshFound - $added),
    'failed_sources' => $failedSources,
    'validity_hours' => 24,
]);

