import React from 'react';
import { Tv, Grid, Sparkles, Check, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { SectionHeading } from '../components/BrandUI';

export const SolutionsSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = { Tv, Grid, Sparkles };

  return (
    <section id="solucoes" className="border-b border-white/10 bg-[#08090d] py-24 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <SectionHeading eyebrow="Soluções completas" title="Soluções" accent="VM Mídias" description="Soluções para sua marca ser vista, lembrada e reconhecida." align="left" className="mb-14 lg:mb-20" />

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2">
          {siteConfig.solutions.map((solution, index) => {
            const Icon = iconMap[solution.iconName] || Tv;
            const isFeature = index === 0;
            return (
              <article key={solution.id} className={`group relative overflow-hidden bg-[#0d0f13] p-7 sm:p-10 ${isFeature ? 'lg:row-span-2 lg:min-h-[720px] lg:p-14' : 'lg:min-h-[360px]'}`}>
                {isFeature && (
                  <>
                    <div className="absolute inset-0 bg-indoor-space bg-cover bg-center opacity-28 transition-transform duration-700 group-hover:scale-[1.02]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f13] via-[#0d0f13]/90 to-[#0d0f13]/45" />
                  </>
                )}
                <div className={`relative flex h-full flex-col ${isFeature ? 'justify-end' : 'justify-between'}`}>
                  <div>
                    <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
                      <span className="text-xs font-bold tabular-nums text-[#f40b36]">0{index + 1}</span>
                      <Icon className="h-6 w-6 text-white/55 transition-colors group-hover:text-[#f40b36]" />
                    </div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">{solution.subtitle} · {solution.badge}</p>
                    <h3 className={`mt-3 font-black tracking-[-0.04em] text-white ${isFeature ? 'text-4xl sm:text-5xl' : 'text-2xl sm:text-3xl'}`}>{solution.title}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">{solution.description}</p>
                    <div className={`mt-7 grid gap-3 ${isFeature ? 'sm:grid-cols-2' : ''}`}>
                      {solution.highlights.map((item) => (
                        <span key={item} className="flex gap-2 text-xs leading-5 text-white/72"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#f40b36]" />{item}</span>
                      ))}
                    </div>
                  </div>
                  <a href="#planos" className="mt-9 inline-flex w-fit items-center gap-2 border-b border-white/25 pb-2 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#f40b36] hover:text-[#f40b36]">
                    Ver opções e planos <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
