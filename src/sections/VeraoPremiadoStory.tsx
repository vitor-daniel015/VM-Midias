import { useEffect, type CSSProperties } from "react";
import {
  CalendarDays, Download, Gift, Mic2, MonitorPlay, Play, Radio, Sparkles,
  Store, Sun, Tag, Ticket, Trophy,
} from "lucide-react";
import { PROPOSAL_URL } from "../data/veraoPremiado";

type StoryProps = { onJoin: () => void };

const benefits = [
  [Ticket, "Kit promocional", "1.000 cupons, cartaz e identificação oficial."],
  [Radio, "Rádio Braba", "Sua marca ganha voz na FM 104,9."],
  [MonitorPlay, "Tela VM Mídias", "Vídeo Motion de 20s com exibição diária."],
  [Trophy, "Premiação coletiva", "Seu comércio participa da ação da cidade."],
] as const;

export function VeraoPremiadoStory({ onJoin }: StoryProps) {
  useEffect(() => {
    document.body.classList.add("vp-motion-allowed");
    const revealItems = [...document.querySelectorAll<HTMLElement>("[data-vp-reveal]")];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { rootMargin: "0px 0px -10%", threshold: 0.14 },
    );
    revealItems.forEach((item) => observer.observe(item));

    const parallaxItems = [...document.querySelectorAll<HTMLElement>("[data-vp-parallax]")];
    const scenes = [...document.querySelectorAll<HTMLElement>(".vp-story-scene")];
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    const update = () => {
      frame = 0;
      const center = window.innerHeight / 2;
      scenes.forEach((scene) => {
        const rect = scene.getBoundingClientRect();
        const progress = Math.max(-1, Math.min(1, (center - (rect.top + rect.height / 2)) / window.innerHeight));
        scene.style.setProperty("--vp-scene-y", `${(progress * 90).toFixed(1)}px`);
        scene.style.setProperty("--vp-scene-x", `${(pointerX * 34).toFixed(1)}px`);
        scene.classList.toggle("is-scene-active", rect.top < window.innerHeight * 0.72 && rect.bottom > window.innerHeight * 0.28);
      });
      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
        const depth = Number(item.dataset.vpParallax || 0.08);
        const scrollY = Math.max(-220, Math.min(220, (center - (rect.top + rect.height / 2)) * depth * 1.35));
        const mouseX = pointerX * depth * 190;
        const mouseY = pointerY * depth * 110;
        item.style.setProperty("--vp-parallax-x", `${mouseX.toFixed(1)}px`);
        item.style.setProperty("--vp-parallax-y", `${(scrollY + mouseY).toFixed(1)}px`);
      });
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const onPointerMove = (event: PointerEvent) => {
      pointerX = (event.clientX / window.innerWidth) - 0.5;
      pointerY = (event.clientY / window.innerHeight) - 0.5;
      requestUpdate();
    };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      document.body.classList.remove("vp-motion-allowed");
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("pointermove", onPointerMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="vp-story">
      <nav className="vp-story-rail" aria-label="Seções da proposta">
        {Array.from({ length: 7 }, (_, index) => (
          <a key={index} href={`#proposta-${index + 1}`} aria-label={`Ir para a seção ${index + 1}`} />
        ))}
      </nav>

      <section id="proposta-1" className="vp-story-scene vp-story-hero">
        <div className="vp-hero-sky" data-vp-parallax="0.045" />
        <div className="vp-sun-glow" data-vp-parallax="0.12" />
        <div className="vp-scene-shell vp-hero-grid">
          <div className="vp-story-copy" data-vp-reveal>
            <div className="vp-kicker"><Sun /> O verão que faz o comércio brilhar</div>
            <h1>Verão<br /><em>Premiado</em><span>2027</span></h1>
            <p className="vp-lead">Sua marca no centro da campanha que conecta Capela do Alto, Rádio Braba FM e as telas da VM Mídias.</p>
            <div className="vp-hero-actions">
              <button onClick={onJoin} className="vp-primary-cta">Quero participar</button>
              <a href={PROPOSAL_URL} target="_blank" className="vp-secondary-cta"><Download /> Ver proposta</a>
            </div>
            <div className="vp-hero-facts">
              <span><CalendarDays /> 02 jan. a 27 fev. 2027</span>
              <span><Gift /> Moto elétrica Smart Wheel</span>
            </div>
          </div>
          <div className="vp-art-stage vp-hero-assets" data-vp-reveal>
            <div className="vp-orbit vp-orbit-one" />
            <div className="vp-orbit vp-orbit-two" />
            <img data-vp-parallax="0.2" src="/images/verao-premiado/logo-cutout-v2.png" alt="Verão Premiado da VM Mídias" className="vp-logo-cutout vp-logo-hero" />
            <img data-vp-parallax="0.32" src="/images/verao-premiado/moto-cutout-v2.png" alt="Moto elétrica Smart Wheel, prêmio principal previsto" className="vp-moto-cutout vp-moto-hero" />
            <div className="vp-floating-badge vp-badge-prize"><Trophy /><strong>Prêmio principal</strong><span>Smart Wheel</span></div>
            <div className="vp-floating-badge vp-badge-local"><Store /><strong>Campanha local</strong><span>Capela do Alto</span></div>
          </div>
        </div>
        <div className="vp-marquee" aria-hidden="true"><div>VIBRANTE · PROMOCIONAL · PREMIADA · VERÃO · CONFIANÇA · COMÉRCIO LOCAL · VIBRANTE · PROMOCIONAL · PREMIADA · VERÃO ·</div></div>
      </section>

      <section id="proposta-2" className="vp-story-scene vp-scene-two">
        <div className="vp-scene-shell vp-split-grid">
          <div className="vp-art-wrap" data-vp-reveal>
            <span className="vp-scene-label">Uma única cota</span>
            <div className="vp-benefit-orbit">
              <div className="vp-orbit-ring vp-ring-one" data-vp-parallax="0.12" />
              <div className="vp-orbit-ring vp-ring-two" data-vp-parallax="0.2" />
              <div className="vp-orbit-core" data-vp-parallax="0.28"><Sun /><strong>4</strong><span>benefícios</span></div>
              {benefits.map(([Icon, title], index) => <div key={title} className={`vp-orbit-item vp-orbit-item-${index + 1}`} data-vp-parallax={String(0.15 + index * 0.04)}><Icon /><span>{title}</span></div>)}
            </div>
          </div>
          <div className="vp-story-copy" data-vp-reveal>
            <div className="vp-kicker"><Sparkles /> Mais presença para sua marca</div>
            <h2>Uma campanha.<br /><em>Quatro frentes.</em></h2>
            <p>Um pacote pensado para colocar seu comércio em contato com clientes dentro da loja, no rádio, nas telas e na premiação coletiva.</p>
            <div className="vp-benefit-grid">
              {benefits.map(([Icon, title, description], index) => (
                <article key={title} style={{ "--vp-delay": `${index * 90}ms` } as CSSProperties} data-vp-reveal>
                  <Icon /><div><strong>{title}</strong><span>{description}</span></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proposta-3" className="vp-story-scene vp-scene-three">
        <div className="vp-coupon-shape vp-coupon-one" data-vp-parallax="0.13">CUPOM</div>
        <div className="vp-coupon-shape vp-coupon-two" data-vp-parallax="0.2">SORTEIO</div>
        <div className="vp-scene-shell vp-split-grid vp-reverse">
          <div className="vp-story-copy" data-vp-reveal>
            <div className="vp-kicker"><Ticket /> Kit promocional exclusivo</div>
            <div className="vp-display-number">1.000</div>
            <h2>motivos para o cliente <em>lembrar de você.</em></h2>
            <p>Seu estabelecimento recebe materiais prontos para divulgar a campanha, envolver o público e transformar participação em presença de marca.</p>
            <ul className="vp-feature-list"><li>Cupons promocionais</li><li>Cartaz com sua logomarca</li><li>Identificação oficial de participante</li></ul>
          </div>
          <div className="vp-art-wrap" data-vp-reveal>
            <div className="vp-coupon-stack" aria-label="Exemplo conceitual dos cupons promocionais">
              {["Cliente premiado", "Comércio em destaque", "Boa sorte!"].map((label, index) => <article key={label} className={`vp-coupon-card vp-coupon-card-${index + 1}`} data-vp-parallax={String(0.18 + index * 0.06)}><div><Sun /><span>Verão Premiado</span></div><strong>Cupom de sorteio</strong><p>{label}</p><i /></article>)}
              <div className="vp-coupon-seal" data-vp-parallax="0.34"><Ticket /><b>1.000</b><span>cupons</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="proposta-4" className="vp-story-scene vp-scene-four">
        <div className="vp-radio-grid" aria-hidden="true" />
        <div className="vp-scene-shell vp-split-grid">
          <div className="vp-art-wrap" data-vp-reveal>
            <div className="vp-radio-stage">
              <div className="vp-radio-halo" data-vp-parallax="0.1" />
              <div className="vp-studio-screen" data-vp-parallax="0.18"><span>NO AR</span><strong>104,9</strong><small>Rádio Braba FM</small></div>
              <div className="vp-microphone" data-vp-parallax="0.3"><div><Mic2 /></div><i /><span /></div>
              <div className="vp-waveform" aria-hidden="true">{Array.from({ length: 24 }, (_, index) => <i key={index} style={{ "--wave": `${18 + (index * 17) % 62}px`, "--vp-delay": `${index * 45}ms` } as CSSProperties} />)}</div>
            </div>
          </div>
          <div className="vp-story-copy" data-vp-reveal>
            <div className="vp-kicker"><Radio /> Rádio Braba FM 104,9</div>
            <h2>Sua marca também <em>ganha voz.</em></h2>
            <p>Durante o período da campanha, seu estabelecimento entra na programação da rádio com uma mensagem produzida a partir do seu briefing.</p>
            <div className="vp-quote-card"><span>“</span><p>Você conta o que deseja divulgar. A equipe transforma a ideia em uma mensagem clara para o público regional.</p></div>
            <small>Frequência e horários das inserções definidos em contrato.</small>
          </div>
        </div>
      </section>

      <section id="proposta-5" className="vp-story-scene vp-scene-five">
        <div className="vp-screen-glow" data-vp-parallax="0.08" />
        <div className="vp-scene-shell vp-split-grid vp-reverse">
          <div className="vp-story-copy" data-vp-reveal>
            <div className="vp-kicker"><MonitorPlay /> Publicidade nas telas VM Mídias</div>
            <h2>Onde a cidade passa, <em>sua marca aparece.</em></h2>
            <p>Escolha uma das telas cadastradas para exibir um vídeo Motion produzido para o seu comércio durante o período contratado.</p>
            <div className="vp-stat-row"><div><strong>01</strong><span>tela à escolha</span></div><div><strong>20s</strong><span>vídeo Motion</span></div><div><strong>Diária</strong><span>exibição</span></div></div>
          </div>
          <div className="vp-art-wrap" data-vp-reveal>
            <div className="vp-screen-stage">
              <div className="vp-digital-screen" data-vp-parallax="0.18"><div className="vp-screen-content"><img src="/images/verao-premiado/logo-cutout-v2.png" alt="Verão Premiado 2027" /><span><Play /> Motion de 20 segundos</span></div><i /></div>
              <div className="vp-screen-card vp-screen-card-one" data-vp-parallax="0.34"><Store /><span>Comércio local</span></div>
              <div className="vp-screen-card vp-screen-card-two" data-vp-parallax="0.26"><MonitorPlay /><span>Exibição diária</span></div>
              <div className="vp-screen-card vp-screen-card-three" data-vp-parallax="0.4"><Sparkles /><span>Alta visibilidade</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="proposta-6" className="vp-story-scene vp-scene-six">
        <div className="vp-gift-orb vp-orb-one" data-vp-parallax="0.16">R$ 100</div>
        <div className="vp-gift-orb vp-orb-two" data-vp-parallax="0.1"><Gift /></div>
        <div className="vp-scene-shell vp-split-grid">
          <div className="vp-art-wrap" data-vp-reveal>
            <div className="vp-prize-stage">
              <div className="vp-prize-sun" data-vp-parallax="0.12" />
              <img data-vp-parallax="0.3" src="/images/verao-premiado/moto-cutout-v2.png" alt="Moto elétrica Smart Wheel" className="vp-moto-cutout vp-moto-prize" />
              <div className="vp-prize-ribbon" data-vp-parallax="0.42"><Trophy /><strong>Prêmio principal previsto</strong></div>
            </div>
          </div>
          <div className="vp-story-copy" data-vp-reveal>
            <div className="vp-kicker"><Trophy /> Premiação coletiva</div>
            <h2>Quando o comércio participa junto, <em>toda a cidade ganha destaque.</em></h2>
            <p>Cada participante contribui com R$ 100 em produtos ou serviços. Os itens são definidos e formalizados conforme o regulamento aprovado.</p>
            <div className="vp-prize-card"><span>Prêmio principal previsto</span><strong>Moto elétrica<br />Smart Wheel</strong></div>
          </div>
        </div>
      </section>

      <section id="proposta-7" className="vp-story-scene vp-scene-seven">
        <div className="vp-final-rays" data-vp-parallax="0.04" />
        <div className="vp-scene-shell vp-final-grid">
          <div className="vp-story-copy" data-vp-reveal>
            <div className="vp-kicker"><Sparkles /> Sua marca em destaque neste verão</div>
            <h2>Uma cota que cabe no negócio e <em>aparece na cidade.</em></h2>
            <div className="vp-price-cards"><article><span>À vista</span><strong>R$ 250<small>,00</small></strong></article><b>ou</b><article><span>Parcelado</span><strong>2x R$ 150<small>,00</small></strong><small>Total: R$ 300,00</small></article></div>
            <p className="vp-contribution-note"><Gift /> + R$ 100 em produtos ou serviços para a premiação coletiva.</p>
            <button onClick={onJoin} className="vp-primary-cta vp-final-cta">Quero colocar meu comércio em destaque</button>
            <small>Campanha sujeita à autorização dos órgãos competentes e às condições do regulamento oficial.</small>
          </div>
          <div className="vp-art-wrap" data-vp-reveal>
            <div className="vp-finale-stage">
              <img data-vp-parallax="0.2" src="/images/verao-premiado/logo-cutout-v2.png" alt="Verão Premiado da VM Mídias" className="vp-logo-cutout vp-logo-final" />
              <div className="vp-finale-gift vp-finale-gift-one" data-vp-parallax="0.38"><Gift /></div>
              <div className="vp-finale-gift vp-finale-gift-two" data-vp-parallax="0.27"><Trophy /></div>
              <div className="vp-finale-gift vp-finale-gift-three" data-vp-parallax="0.46"><Tag /></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
