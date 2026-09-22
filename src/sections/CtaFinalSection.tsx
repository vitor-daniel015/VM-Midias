import React from 'react';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { VMLogo } from '../components/VMLogo';
import { BrandButton, BrandEyebrow } from '../components/BrandUI';

export const CtaFinalSection: React.FC = () => {
  return (
    <section className="relative py-28 lg:py-40 bg-[#000000] border-b border-white/10 overflow-hidden">
      {/* LED matrix background and heavy center spotlight */}
      <div className="absolute inset-0 bg-indoor-space opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />
      <div className="absolute inset-0 bg-led-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#F8032D]/15 via-[#F8032D]/30 to-[#F8032D]/15 blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Subtle Brand Watermark */}
        <div className="mb-6 flex justify-center">
          <VMLogo size="sm" glow={true} />
        </div>

        {/* Eyebrow */}
        <BrandEyebrow align="center" className="mb-6">Oportunidade limitada de ponto</BrandEyebrow>

        {/* Headline */}
        <h2 className="text-[clamp(2.8rem,6vw,6.5rem)] font-black text-white tracking-[-0.055em] leading-[0.94] uppercase mb-7">
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
          <BrandButton id="cta-final-button" href="#contato" className="w-full sm:w-auto sm:px-10 sm:min-h-16">
            Quero colocar minha marca em destaque
          </BrandButton>
        </div>
      </div>
    </section>
  );
};
