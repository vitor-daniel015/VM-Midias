import React, { useState } from "react";
import { BrandEyebrow } from "../components/BrandUI";
import { siteConfig } from "../data/siteConfig";
import type { Supporter } from "../types";

const SupporterLogo: React.FC<{ supporter: Supporter }> = ({ supporter }) => {
  const [logoUnavailable, setLogoUnavailable] = useState(false);
  const initials = supporter.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <div className="flex aspect-[4/3] items-center justify-center border-b border-white/10 bg-black/35 p-6 sm:p-8">
      {logoUnavailable ? (
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full border border-[#f40b36]/45 bg-[#f40b36]/10 text-2xl font-black tracking-tight text-white"
          aria-hidden="true"
        >
          {initials}
        </div>
      ) : (
        <img
          src={supporter.logoUrl}
          alt={`Logo ${supporter.name}`}
          className="h-full max-h-28 w-full object-contain"
          onError={() => setLogoUnavailable(true)}
        />
      )}
    </div>
  );
};

export const WhereItAppearsSection: React.FC = () => {
  return (
    <section
      id="onde-estamos"
      className="relative overflow-hidden border-b border-white/10 bg-[#06070a] py-24 lg:py-32"
    >
      <div
        className="absolute inset-0 bg-indoor-space bg-cover bg-center opacity-[0.08]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#06070a]/80 via-[#06070a]/95 to-[#06070a]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="mb-12 max-w-5xl">
          <BrandEyebrow>Rede de apoiadores</BrandEyebrow>
          <h2 className="brand-section-title">
            Comércios que já estão com a{" "}
            <span className="text-[#f40b36]">VM Mídias.</span>
          </h2>
          <p className="brand-section-copy max-w-3xl">
            Empresas locais que apoiam a nossa rede e fortalecem a mídia indoor
            em Capela do Alto.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
          {siteConfig.supporters.map((supporter) => (
            <article
              key={supporter.id}
              className="overflow-hidden border border-white/10 bg-[#0b0d10]/90"
            >
              <SupporterLogo supporter={supporter} />
              <div className="min-h-28 p-4 sm:p-5">
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#f40b36] sm:text-[10px]">
                  Apoiador VM Mídias
                </p>
                <h3 className="mt-2 text-sm font-black leading-snug text-white sm:text-base">
                  {supporter.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
