import React, { useState, useEffect } from 'react';
import { VMLogo } from './VMLogo';
import { Sparkles, Radio, Clock, MapPin, Eye, Users } from 'lucide-react';

interface DigitalScreenMockupProps {
  locationLabel?: string;
  category?: string;
  interactive?: boolean;
}

export const DigitalScreenMockup: React.FC<DigitalScreenMockupProps> = ({
  locationLabel = 'Ponto Central • Capela do Alto',
  category = 'Supermercados e Conveniências',
  interactive = true,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [time, setTime] = useState('14:35');

  const slides = [
    {
      badge: 'DOOH QUE CONECTA PESSOAS',
      title: 'SUA MARCA EM TODA A CIDADE',
      subtitle: 'Presença diária nos pontos de maior circulação',
      tagline: 'VISIBILIDADE • CLIENTES • RESULTADOS',
      advertiser: 'VM MÍDIAS • REDE CAPELA DO ALTO',
      highlightColor: '#F8032D',
    },
    {
      badge: 'ALTA ATENÇÃO EM FILA DE ESPERA',
      title: 'QUEM NÃO É VISTO NÃO É LEMBRADO',
      subtitle: 'Telas posicionadas estrategicamente na linha de visão',
      tagline: 'SEU PÚBLICO LOCAL NO MOMENTO CERTO',
      advertiser: 'COMÉRCIO & SERVIÇOS LOCAIS',
      highlightColor: '#FFFFFF',
    },
    {
      badge: 'FREQUÊNCIA E RECONHECIMENTO',
      title: 'MAIS CLIENTES PARA O SEU NEGÓCIO',
      subtitle: 'Planos a partir de R$ 139/mês para empresas da região',
      tagline: 'CAPELA DO ALTO MAIS CONECTADA',
      advertiser: 'ANUNCIE: WWW.VMMIDIAS.COM.BR',
      highlightColor: '#F8032D',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    const updateClock = () => {
      const now = new Date();
      setTime(
        `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
      );
    };
    updateClock();
    const clockInterval = setInterval(updateClock, 30000);

    return () => {
      clearInterval(interval);
      clearInterval(clockInterval);
    };
  }, [slides.length]);

  const current = slides[activeSlide];

  return (
    <div
      id="dooh-digital-screen-container"
      className="relative flex flex-col items-center select-none"
    >
      {/* Ambient Red LED Halo / Backlight Effect */}
      <div
        className="absolute -inset-4 bg-gradient-to-tr from-[#F8032D]/20 via-[#F8032D]/35 to-transparent blur-2xl rounded-3xl -z-10 pointer-events-none transition-all duration-700"
        aria-hidden="true"
      />

      {/* Vertical DOOH Screen Structure */}
      <div className="relative w-[300px] sm:w-[340px] md:w-[370px] aspect-[9/16] max-h-[580px] bg-[#0A0A0E] rounded-2xl p-2.5 sm:p-3 border-2 border-[#252532] shadow-2xl shadow-black ring-1 ring-[#F8032D]/40 flex flex-col justify-between overflow-hidden">
        {/* Subtle Glass Reflection diagonal */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-30"
          aria-hidden="true"
        />

        {/* Digital Screen Display Area */}
        <div className="relative w-full h-full bg-[#0D0D13] rounded-xl overflow-hidden flex flex-col justify-between border border-[#1E1E28] p-4 sm:p-5">
          {/* Subtle LED Matrix Dot Pattern Texture */}
          <div
            className="absolute inset-0 bg-led-grid-dense opacity-40 pointer-events-none z-10"
            aria-hidden="true"
          />

          {/* Micro Scanline lines */}
          <div
            className="absolute inset-0 bg-digital-lines opacity-25 pointer-events-none z-10"
            aria-hidden="true"
          />

          {/* Screen Top Status Bar */}
          <div className="relative z-20 flex items-center justify-between text-[11px] font-semibold text-[#A9ACB3] border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-1.5 text-white">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F8032D] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F8032D]"></span>
              </span>
              <span className="font-mono font-bold tracking-wider text-[10px] text-red-400">
                AO VIVO
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[10px] text-gray-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-[#F8032D]" />
                Capela do Alto
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-2.5 h-2.5" />
                {time}
              </span>
            </div>
          </div>

          {/* Screen Center Visual Content - Animated Slide */}
          <div className="relative z-20 my-auto flex flex-col items-center text-center py-2 transition-all duration-500">
            {/* VM Logo inside screen */}
            <div className="mb-4">
              <VMLogo size="sm" glow={false} />
            </div>

            {/* Red pill badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F8032D]/20 border border-[#F8032D]/40 text-[#F8032D] text-[10px] font-bold uppercase tracking-wider mb-3 animate-pulse">
              <Sparkles className="w-2.5 h-2.5" />
              <span>{current.badge}</span>
            </div>

            {/* Dynamic Headline */}
            <h4
              className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-tight mb-2 drop-shadow-md"
              style={{ color: current.highlightColor }}
            >
              {current.title}
            </h4>

            <p className="text-xs text-gray-300 font-medium max-w-[260px] leading-relaxed mb-4">
              {current.subtitle}
            </p>

            {/* High impact LED Banner Inside Screen */}
            <div className="w-full bg-[#15151F] border border-[#F8032D]/40 rounded-lg py-2 px-3 shadow-inner">
              <div className="text-[10px] font-extrabold text-[#F8032D] tracking-widest uppercase">
                {current.tagline}
              </div>
            </div>
          </div>

          {/* Screen Bottom Ticker & Slide Indicators */}
          <div className="relative z-20 pt-3 border-t border-white/10 flex flex-col gap-2">
            <div className="flex items-center justify-between text-[10px] text-[#A9ACB3]">
              <span className="font-semibold truncate max-w-[200px]">
                {current.advertiser}
              </span>

              {/* Slide Indicators */}
              <div className="flex items-center gap-1">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeSlide === idx ? 'w-5 bg-[#F8032D]' : 'w-1.5 bg-gray-600'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Screen Bezel Branding & Status LED */}
        <div className="pt-2 pb-0.5 px-2 flex items-center justify-between">
          <div className="text-[9px] font-extrabold tracking-widest text-zinc-500 uppercase">
            VM MÍDIAS DOOH DISPLAY
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[8px] text-zinc-500 font-mono">4K ULTRA</span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
          </div>
        </div>
      </div>

      {/* Screen Stand Base */}
      <div className="w-24 h-5 bg-[#181822] border-x border-b border-[#2B2B38] rounded-b-md shadow-lg" />
      <div className="w-44 h-2 bg-[#22222E] rounded-full shadow-xl shadow-black/80" />

      {/* Ambient Floor Reflection */}
      <div className="w-52 h-4 bg-gradient-to-r from-transparent via-[#F8032D]/20 to-transparent blur-md mt-1" />

      {/* Context Badge Under Mockup */}
      {interactive && (
        <div className="mt-3 flex items-center gap-2 px-3 py-1 rounded-full bg-[#111116] border border-[#22222E] text-xs text-gray-400">
          <Radio className="w-3 h-3 text-[#F8032D] animate-ping" />
          <span>Simulação em tempo real da transmissão</span>
        </div>
      )}
    </div>
  );
};
