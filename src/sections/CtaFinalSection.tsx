import React from 'react';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { VMLogo } from '../components/VMLogo';

export const CtaFinalSection: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#000000] border-b border-[#1C1C26] overflow-hidden">
      {/* LED matrix background and heavy center spotlight */}
      <div className="absolute inset-0 bg-led-grid opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#F8032D]/15 via-[#F8032D]/30 to-[#F8032D]/15 blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Subtle Brand Watermark */}
        <div className="mb-6 flex justify-center">
          <VMLogo size="sm" glow={true} />
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181824] border border-[#2B2B3C] text-[#F8032D] text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Oportunidade Limitada de Ponto</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] uppercase mb-6">
          SUA MARCA PODE SER{' '}
          <br className="hidden sm:inline" />
          <span className="text-[#F8032D] text-led-glow">
            A PRÓXIMA A APARECER.
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-base sm:text-xl text-[#A9ACB3] max-w-2xl mx-auto leading-relaxed mb-10">
          Coloque sua empresa nos pontos onde Capela do Alto realmente circula. Garanta frequência, visibilidade e resultados reais.
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="cta-final-button"
            href="#contato"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-[#F8032D] hover:bg-[#B80024] text-white text-sm sm:text-base font-black uppercase tracking-wider transition-all duration-300 shadow-led hover:shadow-[0_0_40px_rgba(248,3,45,0.7)] hover:scale-105"
          >
            <span>QUERO COLOCAR MINHA MARCA EM DESTAQUE</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Micro badge footer */}
        <div className="mt-8 flex items-center justify-center gap-4 text-xs text-gray-500 font-mono">
          <span className="flex items-center gap-1.5 text-gray-400">
            <MapPin className="w-3 h-3 text-[#F8032D]" />
            Capela do Alto — SP
          </span>
          <span>•</span>
          <span>Atendimento Imediato</span>
          <span>•</span>
          <span>Sem Burocracia</span>
        </div>
      </div>
    </section>
  );
};
