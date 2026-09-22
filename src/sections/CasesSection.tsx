import React from 'react';
import { Sparkles, ArrowRight, Building2, MapPin, TrendingUp, Users, Star } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { SectionHeading } from '../components/BrandUI';

export const CasesSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    MapPin,
    TrendingUp,
    Users,
    Star,
  };

  // Filter metrics that have real values configured (hide if empty as strictly instructed)
  const activeMetrics = siteConfig.metrics.filter(
    (m) => m.value && m.value.trim().length > 0
  );

  return (
    <section
      id="cases"
      className="relative py-24 lg:py-32 bg-[#08090d] border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeading
          eyebrow="Credibilidade local"
          title="Marcas que já"
          accent="confiam na VM Mídias"
          description="Negócios locais em destaque na nossa rede de telas em Capela do Alto."
          className="mb-16 lg:mb-20"
        />

        {/* Conditional Cases Display:
            Strict briefing rule: "NÃO INVENTAR CLIENTES. Caso ainda não existam cases cadastrados, não mostrar depoimentos falsos. Pode exibir: 'Em breve, novos cases da nossa rede.'" */}
        {siteConfig.realCases && siteConfig.realCases.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {siteConfig.realCases.map((c) => (
              <div
                key={c.id}
                className="p-6 rounded-2xl bg-[#111117] border border-[#22222E] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    {c.logoUrl ? (
                      <img
                        src={c.logoUrl}
                        alt={c.companyName}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-[#1D1D2C] flex items-center justify-center text-[#F8032D] font-bold">
                        <Building2 className="w-6 h-6" />
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-white text-base">{c.companyName}</h4>
                      <p className="text-xs text-[#F8032D]">{c.segment}</p>
                    </div>
                  </div>
                  {c.testimonial && (
                    <p className="text-xs text-gray-300 italic mb-4">
                      "{c.testimonial}"
                    </p>
                  )}
                  {c.results && (
                    <div className="text-xs text-gray-400">
                      <strong>Resultado:</strong> {c.results}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative mb-16 overflow-hidden border-y border-white/10 py-14 lg:py-20">
            <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-indoor-space bg-cover bg-center opacity-20 lg:block" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090d] via-[#08090d]/95 to-[#08090d]/50" />
            <div className="relative max-w-3xl">
              <p className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-[#F8032D]">Próximos capítulos</p>
              <h3 className="max-w-2xl text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">Em breve, novos cases da nossa rede.</h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/58">A VM MÍDIAS está ativando as primeiras cotas fundadoras de anunciantes em Capela do Alto. Garanta a prioridade da sua empresa nos pontos de maior audiência da cidade antes dos concorrentes.</p>
              <a href="#contato" className="group mt-8 inline-flex items-center gap-2.5 border-b border-white/25 pb-2 text-xs font-black uppercase tracking-[0.14em] text-white transition-colors hover:border-[#F8032D] hover:text-[#F8032D]">
                <span>Quero que minha marca também apareça</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        )}

        {/* METRICS DISPLAY
            Strict briefing rule:
            "Preparar cards de métricas para: Pontos ativos, Marcas anunciantes, Impactos mensais, Clientes satisfeitos.
             PORÉM: NUNCA inventar os números. Todas as métricas deverão vir de um arquivo/configuração ou CMS. Se o valor não existir, esconder a métrica." */}
        {activeMetrics.length > 0 && (
          <div className="pt-8 border-t border-[#1C1C26]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {activeMetrics.map((m) => {
                const Icon = iconMap[m.iconName] || Sparkles;
                return (
                  <div
                    key={m.id}
                    className="p-6 rounded-2xl bg-[#111117] border border-[#20202E] text-center"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#181824] flex items-center justify-center text-[#F8032D] mx-auto mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      {m.value}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-300 mt-1">
                      {m.label}
                    </div>
                    <div className="text-[11px] text-gray-500 mt-0.5">
                      {m.sublabel}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
