import React from "react";
import { siteConfig } from "../data/siteConfig";
import { SectionHeading, BrandButton } from "../components/BrandUI";

export const HowItWorksSection: React.FC = () => (
  <section
    id="como-funciona"
    className="border-b border-white/10 bg-[#030406] py-24 lg:py-32"
  >
    <div className="mx-auto grid max-w-[1500px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-32">
          <SectionHeading
            eyebrow="Do planejamento ao resultado"
            title="Como"
            accent="funciona"
            description="Simples, rápido e sem burocracia."
            align="left"
          />
          <div className="mt-8">
            <BrandButton href="#contato">Começar agora</BrandButton>
          </div>
        </div>
      </div>

      <div className="relative lg:col-span-7 lg:pl-12">
        <div
          className="absolute bottom-8 left-[19px] top-8 w-px bg-white/12 lg:left-[67px]"
          aria-hidden="true"
        />
        <div className="space-y-0">
          {siteConfig.howItWorksSteps.map((item, index) => (
            <article
              key={item.step}
              className="group relative grid grid-cols-[40px_1fr] gap-5 border-b border-white/10 py-8 first:pt-0 last:border-b-0 lg:grid-cols-[56px_1fr] lg:gap-8 lg:py-11"
            >
              <div className="relative z-10 flex h-10 w-10 items-center justify-center border border-white/20 bg-[#030406] text-xs font-black text-white transition-colors group-hover:border-[#f40b36] group-hover:text-[#f40b36] lg:h-14 lg:w-14">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-semibold text-white/75">
                  {item.description}
                </p>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">
                  {item.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);
