# Solicitações de arte — Supabase

1. Abra o projeto da VM no Supabase.
2. Entre em **SQL Editor**.
3. Execute o arquivo `migrations/202609240001_create_art_requests.sql`.
4. Envie um pedido de teste em `/solicitar-arte`.
5. Confira o registro em **Table Editor → art_requests**.

## Segurança

A chave publicável utilizada no site só recebe permissão de `INSERT`. Ela não
consegue listar, alterar ou apagar solicitações. Para o n8n consultar e atualizar
pedidos, use a `service_role key` em uma credencial privada do n8n. Essa chave de
servidor nunca deve ser adicionada ao site, ao GitHub ou a variáveis iniciadas com
`VITE_`.

## Consulta sugerida para o n8n

```http
GET /rest/v1/art_requests?status=eq.novo&order=created_at.asc
```

Depois que o fluxo assumir o pedido, atualize o status para `em_analise` para
evitar processamento duplicado.
