import React from 'react';
import {
  CalendarCheck,
  MapPin,
  Repeat,
  Coins,
  Palette,
  Headphones,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

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
      className="relative py-24 bg-[#000000] border-b border-[#1C1C26] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-led-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#15151F] border border-[#262636] text-[#A9ACB3] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F8032D]"></span>
            <span>Vantagens Reais</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase">
            POR QUE ANUNCIAR{' '}
            <span className="text-[#F8032D] text-led-glow">COM A VM MÍDIAS</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A9ACB3] mt-3">
            Mais que mídia, resultados de visibilidade e autoridade para o seu negócio.
          </p>
        </div>

        {/* 2x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.whyAdvertise.map((item) => {
            const Icon = iconMap[item.iconName] || Sparkles;

            return (
              <div
                key={item.id}
                className="group relative p-7 rounded-2xl bg-[#0F0F16] border border-[#20202E] hover:border-[#F8032D]/60 transition-all duration-300 shadow-lg hover:shadow-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#161622] border border-[#28283A] group-hover:border-[#F8032D]/50 flex items-center justify-center text-[#F8032D] mb-5 shadow-inner transition-colors">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2 group-hover:text-red-50 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
