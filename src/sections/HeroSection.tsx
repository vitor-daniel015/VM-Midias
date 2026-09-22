import React from 'react';
import { Eye, MapPin, TrendingUp, Users } from 'lucide-react';
import { BrandButton, BrandEyebrow } from '../components/BrandUI';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-black flex flex-col justify-end"
    >
      <div className="absolute inset-0 bg-hero-city hero-photo-motion" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,3,5,0.98)_0%,rgba(2,3,5,0.93)_34%,rgba(2,3,5,0.56)_60%,rgba(2,3,5,0.06)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,3,5,0.94)_0%,transparent_36%,rgba(2,3,5,0.38)_100%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 vm-noise opacity-[0.06] mix-blend-screen" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 pt-32 lg:pt-40 pb-8 lg:pb-12">
        <div className="max-w-[860px] py-10 lg:py-20">
          <BrandEyebrow>VM Mídias · Capela do Alto</BrandEyebrow>

          <h1 className="max-w-[840px] text-[clamp(3rem,7.2vw,7rem)] font-black tracking-[-0.065em] leading-[0.88] uppercase text-white">
            Seu negócio já é bom.
            <span className="block mt-3 text-[#ff143f] text-led-glow">
              Agora ele precisa aparecer.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base sm:text-xl lg:text-2xl text-[#d0d1d6] leading-relaxed">
            Publicidade em telas estratégicas de Capela do Alto para sua empresa ser vista, lembrada e escolhida.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <BrandButton id="hero-primary-cta" href="#contato">
              Colocar minha marca em destaque
            </BrandButton>
            <BrandButton id="hero-secondary-cta" href="#planos" variant="outline">
              Conhecer os planos
            </BrandButton>
          </div>
        </div>
      </div>
    </section>
  );
};
