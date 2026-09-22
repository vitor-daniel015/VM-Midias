import React from "react";
import { BrandButton, BrandEyebrow } from "../components/BrandUI";
import { HeroVideo } from "../components/HeroVideo";
import { siteConfig } from "../data/siteConfig";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-black lg:h-[100svh]"
    >
      <div
        className="absolute inset-0 bg-hero-city hero-photo-motion"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,3,5,0.98)_0%,rgba(2,3,5,0.93)_34%,rgba(2,3,5,0.56)_60%,rgba(2,3,5,0.06)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,3,5,0.94)_0%,transparent_36%,rgba(2,3,5,0.38)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 vm-noise opacity-[0.06] mix-blend-screen"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1500px] items-center px-5 pb-10 pt-[104px] sm:px-8 lg:h-full lg:min-h-0 lg:px-12 lg:pb-6 lg:pt-[96px]">
        <div className="grid w-full items-center gap-7 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-x-12 lg:gap-y-6">
          <div className="order-1 lg:col-span-7 lg:row-start-1 lg:self-end">
            <BrandEyebrow>VM Mídias · Capela do Alto</BrandEyebrow>

            <h1 className="max-w-[820px] text-[clamp(2.8rem,12vw,4.6rem)] font-black uppercase leading-[0.88] tracking-[-0.065em] text-white lg:text-[clamp(4rem,5.5vw,6.2rem)]">
              Seu negócio já é bom
              <span className="mt-3 block text-[#ff143f] text-led-glow">
                Agora ele precisa aparecer.
              </span>
            </h1>
          </div>

          <div className="order-2 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1">
            <HeroVideo
              src={siteConfig.company.heroVideoUrl}
              poster="/images/generated/vm-indoor-space.webp"
            />
          </div>

          <div className="order-3 lg:col-span-7 lg:row-start-2 lg:self-start">
            <p className="max-w-2xl text-base leading-relaxed text-[#d0d1d6] sm:text-xl lg:text-lg xl:text-xl">
              Publicidade em telas estratégicas de Capela do Alto para sua
              empresa ser vista, lembrada e escolhida.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <BrandButton id="hero-primary-cta" href="#contato">
                Colocar minha marca em destaque
              </BrandButton>
              <BrandButton
                id="hero-secondary-cta"
                href="#planos"
                variant="outline"
              >
                Conhecer os planos
              </BrandButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
