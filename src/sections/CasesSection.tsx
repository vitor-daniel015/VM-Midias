import React from 'react';
import { Sparkles, ArrowRight, Building2, MapPin, TrendingUp, Users, Star } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

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
      className="relative py-24 bg-[#09090D] border-b border-[#1C1C26] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#15151F] border border-[#262636] text-[#A9ACB3] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F8032D]"></span>
            <span>Credibilidade Local</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase">
            MARCAS QUE JÁ{' '}
            <span className="text-[#F8032D] text-led-glow">CONFIAM NA VM MÍDIAS</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A9ACB3] mt-3">
            Negócios locais em destaque na nossa rede de telas em Capela do Alto.
          </p>
        </div>

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
          /* Honest, elegant empty-state container as mandated */
          <div className="max-w-2xl mx-auto p-10 rounded-3xl bg-[#101017] border border-[#222230] text-center shadow-2xl mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F8032D]/10 blur-3xl pointer-events-none" />

            <div className="w-14 h-14 rounded-2xl bg-[#181824] border border-[#2A2A3E] flex items-center justify-center text-[#F8032D] mx-auto mb-5 shadow-inner">
              <Sparkles className="w-7 h-7 animate-pulse" />
            </div>

            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
              Em breve, novos cases da nossa rede.
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed max-w-lg mx-auto mb-8">
              A VM MÍDIAS está ativando as primeiras cotas fundadoras de anunciantes em Capela do Alto. Garanta a prioridade da sua empresa nos pontos de maior audiência da cidade antes dos concorrentes.
            </p>

            <a
              href="#contato"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#F8032D] hover:bg-[#B80024] text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-led-sm hover:shadow-led transition-all"
            >
              <span>QUERO QUE MINHA MARCA TAMBÉM APAREÇA</span>
              <ArrowRight className="w-4 h-4" />
            </a>
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
