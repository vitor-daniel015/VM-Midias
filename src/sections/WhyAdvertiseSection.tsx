import React from "react";
import {
  CalendarCheck,
  MapPin,
  Repeat,
  Coins,
  Palette,
  Headphones,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { SectionHeading } from "../components/BrandUI";

export const WhyAdvertiseSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    CalendarCheck,
    MapPin,
    Repeat,
    Coins,
    Palette,
    Headphones,
  };

  return (
    <section
      id="por-que-anunciar"
      className="border-b border-white/10 bg-[#030406] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Vantagens VM Mídias"
          title="Por que anunciar"
          accent="com a VM Mídias"
          description="Mais que mídia, resultados de visibilidade e autoridade para o seu negócio."
          align="left"
          className="mb-14 lg:mb-20"
        />
        <div className="grid border-t border-white/10 md:grid-cols-2">
          {siteConfig.whyAdvertise.map((item, index) => {
            const Icon = iconMap[item.iconName] || Sparkles;
            return (
              <article
                key={item.id}
                className={`group grid grid-cols-[32px_1fr] gap-4 border-b border-white/10 py-7 md:px-8 md:py-10 ${index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}
              >
                <span className="pt-1 text-[10px] font-bold tabular-nums text-white/28">
                  0{index + 1}
                </span>
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <Icon className="h-5 w-5 text-[#f40b36]" />
                    <span className="h-px w-8 bg-white/12 transition-all duration-300 group-hover:w-16 group-hover:bg-[#f40b36]" />
                  </div>
                  <h3 className="text-xl font-black tracking-[-0.02em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/52">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
