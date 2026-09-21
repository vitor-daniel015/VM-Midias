import React from 'react';
import { Tv, Grid, Sparkles, Check, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const SolutionsSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Tv,
    Grid,
    Sparkles,
  };

  return (
    <section
      id="solucoes"
      className="relative py-24 bg-[#09090D] border-b border-[#1C1C26] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#F8032D]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#15151F] border border-[#262636] text-[#A9ACB3] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F8032D]"></span>
            <span>Soluções Completas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase">
            SOLUÇÕES{' '}
            <span className="text-[#F8032D] text-led-glow">VM MÍDIAS</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A9ACB3] mt-3 max-w-2xl mx-auto">
            Soluções para sua marca ser vista, lembrada e reconhecida.
          </p>
        </div>

        {/* 3 Main Solutions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.solutions.map((sol) => {
            const Icon = iconMap[sol.iconName] || Tv;

            return (
              <div
                key={sol.id}
                className="group relative rounded-2xl bg-[#111116] border border-[#20202E] hover:border-[#F8032D] p-8 transition-all duration-300 shadow-xl hover:shadow-card-hover flex flex-col justify-between"
              >
                {/* Subtle top indicator glow on card hover */}
                <div className="absolute -top-px left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#F8032D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#181824] border border-[#28283C] group-hover:border-[#F8032D]/60 flex items-center justify-center text-[#F8032D] shadow-inner transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#161622] border border-[#262638] text-gray-300 group-hover:text-red-300 transition-colors">
                      {sol.badge}
                    </span>
                  </div>

                  <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#F8032D] mb-1.5">
                    {sol.subtitle}
                  </div>

                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-red-50 transition-colors">
                    {sol.title}
                  </h3>

                  <p className="text-sm text-[#A9ACB3] leading-relaxed mb-6">
                    {sol.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#1E1E2A]">
                    {sol.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-[#F8032D] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-[#1C1C26]">
                  <a
                    href="#planos"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider group-hover:text-[#F8032D] transition-colors"
                  >
                    <span>Ver opções e planos</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
