import React, { useState } from 'react';
import { Check, Star, ArrowRight, Video, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { PlanCycle } from '../types';

interface PlansSectionProps {
  onSelectPlan?: (planName: string, cycle: PlanCycle) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onSelectPlan }) => {
  const [activeCycle, setActiveCycle] = useState<PlanCycle>('anual');

  const startPlan = siteConfig.plans.find((p) => p.id === 'start')!;
  const destaquePlan = siteConfig.plans.find((p) => p.id === 'destaque')!;

  const handlePlanClick = (planName: string) => {
    if (onSelectPlan) {
      onSelectPlan(planName, activeCycle);
    }
    // Also smooth scroll to contact
    const contactElement = document.getElementById('contato');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getWhatsAppLink = (planName: string) => {
    const cycleLabel =
      activeCycle === 'anual'
        ? 'Anual (12 meses)'
        : activeCycle === 'semestral'
        ? 'Semestral (6 meses)'
        : 'Mensal (sem fidelidade)';

    const msg = `Olá! Vi o site da VM MÍDIAS e tenho interesse no Plano ${planName} no formato ${cycleLabel}. Gostaria de receber mais informações para colocar minha empresa em destaque.`;
    return `https://wa.me/${siteConfig.company.whatsappRaw}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section
      id="planos"
      className="relative py-24 bg-[#09090D] border-b border-[#1C1C26] overflow-hidden"
    >
      {/* Red ambient spotlights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#F8032D]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#15151F] border border-[#262636] text-[#A9ACB3] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F8032D]"></span>
            <span>Investimento Inteligente</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase">
            PLANOS PARA SUA{' '}
            <span className="text-[#F8032D] text-led-glow">MARCA APARECER.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A9ACB3] mt-3 max-w-2xl mx-auto">
            Mais visibilidade, presença e resultado para a sua empresa em telas estratégicas de Capela do Alto.
          </p>

          {/* Billing Cycle Toggle Pills */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-[#111117] border border-[#242434] shadow-inner">
            <button
              type="button"
              onClick={() => setActiveCycle('mensal')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCycle === 'mensal'
                  ? 'bg-[#1F1F2C] text-white shadow-md border border-[#3A3A4E]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Mensal
            </button>

            <button
              type="button"
              onClick={() => setActiveCycle('semestral')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCycle === 'semestral'
                  ? 'bg-[#1F1F2C] text-white shadow-md border border-[#3A3A4E]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Semestral (6 meses)
            </button>

            <button
              type="button"
              onClick={() => setActiveCycle('anual')}
              className={`relative px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                activeCycle === 'anual'
                  ? 'bg-[#F8032D] text-white shadow-led-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Anual (12 meses)</span>
              <span className="hidden sm:inline-block text-[9px] font-black uppercase tracking-tight px-1.5 py-0.5 rounded bg-black/40 text-red-200">
                Mais Econômico
              </span>
            </button>
          </div>
        </div>

        {/* 2 Main Plans: START and DESTAQUE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* PLANO START */}
          <div className="relative rounded-3xl bg-[#111116] border border-[#22222E] p-8 sm:p-10 shadow-2xl flex flex-col justify-between transition-all duration-300 hover:border-[#38384C]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#F8032D]">
                    {startPlan.type}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase mt-1">
                    PLANO {startPlan.name}
                  </h3>
                </div>

                <div className="px-3 py-1.5 rounded-lg bg-[#181824] border border-[#2A2A3C] text-xs font-bold text-gray-300">
                  05 Locais
                </div>
              </div>

              <p className="text-sm font-semibold text-gray-300 mb-6">
                {startPlan.coverage}
              </p>

              {/* Price display according to active cycle */}
              <div className="p-6 rounded-2xl bg-[#0D0D12] border border-[#1E1E28] mb-6">
                <div className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">
                  {activeCycle === 'anual'
                    ? 'Contrato de 12 meses (Anual)'
                    : activeCycle === 'semestral'
                    ? 'Contrato de 06 meses (Semestral)'
                    : 'Sem fidelidade (Mensal)'}
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-extrabold text-gray-400">R$</span>
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    {startPlan.prices[activeCycle].price}
                  </span>
                  <span className="text-sm text-gray-400 font-semibold">
                    {startPlan.prices[activeCycle].period}
                  </span>
                </div>

                <div className="mt-2 text-xs text-gray-400 flex items-center gap-2">
                  <span>{startPlan.prices[activeCycle].note}</span>
                  {activeCycle === 'anual' && (
                    <span className="px-2 py-0.5 rounded bg-[#F8032D]/20 text-[#F8032D] font-bold text-[10px] uppercase">
                      Melhor Custo-Benefício
                    </span>
                  )}
                </div>
              </div>

              {/* Breakdown of all 3 cycles */}
              <div className="space-y-2 mb-8 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Valores em todos os períodos:
                </div>
                <div className="flex justify-between items-center text-xs p-2.5 rounded-lg bg-[#15151F] border border-[#20202E]">
                  <span className="text-gray-300">Mensal (sem fidelidade)</span>
                  <span className="font-bold text-white">R$ 179,00 / mês</span>
                </div>
                <div className="flex justify-between items-center text-xs p-2.5 rounded-lg bg-[#15151F] border border-[#20202E]">
                  <span className="text-gray-300">Semestral (6 meses)</span>
                  <span className="font-bold text-white">R$ 159,00 / mês</span>
                </div>
                <div className="flex justify-between items-center text-xs p-2.5 rounded-lg bg-[#181826] border border-[#F8032D]/40">
                  <span className="text-red-200 font-medium">Anual (12 meses)</span>
                  <span className="font-black text-[#F8032D]">R$ 139,00 / mês</span>
                </div>
              </div>

              {/* Features list */}
              <div className="space-y-3 mb-8">
                {startPlan.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-gray-300">
                    <Check className="w-4 h-4 text-[#F8032D] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Optional Video Service (Visually Separated) */}
              <div className="p-4 rounded-xl bg-[#0B0B10] border border-[#222230] mb-8">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-300 mb-1">
                  <Video className="w-3.5 h-3.5 text-[#F8032D]" />
                  <span>Serviço Opcional: Criação de Vídeo Animado</span>
                </div>
                <p className="text-[11px] text-gray-400 mb-2">
                  Animação profissional dinâmica para sua peça publicitária.
                </p>
                <div className="grid grid-cols-3 gap-2 text-[10px] text-center font-mono">
                  <div className="p-1.5 rounded bg-[#14141E]">
                    <div className="text-gray-400">Mensal</div>
                    <div className="font-bold text-white">R$ 100</div>
                  </div>
                  <div className="p-1.5 rounded bg-[#14141E]">
                    <div className="text-gray-400">Semestral</div>
                    <div className="font-bold text-white">R$ 75</div>
                  </div>
                  <div className="p-1.5 rounded bg-[#161624] border border-[#F8032D]/30">
                    <div className="text-red-300">Anual</div>
                    <div className="font-bold text-[#F8032D]">R$ 50</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => handlePlanClick('START')}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#1C1C28] hover:bg-[#252535] text-white font-bold text-sm uppercase tracking-wider transition-all border border-[#2F2F40] hover:border-white"
              >
                <span>QUERO ESTE PLANO</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppLink('START')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs text-gray-400 hover:text-white transition-colors"
              >
                <span>Falar sobre o START pelo WhatsApp →</span>
              </a>
            </div>
          </div>

          {/* PLANO DESTAQUE (MAIS ESCOLHIDO) */}
          <div className="relative rounded-3xl bg-[#13131A] border-2 border-[#F8032D] p-8 sm:p-10 shadow-2xl shadow-red-950/40 flex flex-col justify-between transition-all duration-300 scale-[1.02]">
            {/* "Mais Escolhido" Floating Badge */}
            <div className="absolute -top-4 right-8 px-4 py-1.5 rounded-full bg-[#F8032D] text-white font-black text-xs uppercase tracking-wider shadow-led-sm flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-white" />
              <span>MAIS ESCOLHIDO</span>
            </div>

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#F8032D]">
                    {destaquePlan.type}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase mt-1">
                    PLANO {destaquePlan.name}
                  </h3>
                </div>

                <div className="px-3 py-1.5 rounded-lg bg-[#F8032D]/20 border border-[#F8032D]/40 text-xs font-black text-red-200">
                  09 Locais + 01 Bônus
                </div>
              </div>

              <p className="text-sm font-semibold text-gray-200 mb-6">
                {destaquePlan.coverage}
              </p>

              {/* Price display according to active cycle */}
              <div className="p-6 rounded-2xl bg-[#0D0D13] border border-[#F8032D]/40 mb-6 shadow-inner">
                <div className="text-xs uppercase tracking-wider text-red-200 font-bold mb-1">
                  {activeCycle === 'anual'
                    ? 'Contrato de 12 meses (Anual)'
                    : activeCycle === 'semestral'
                    ? 'Contrato de 06 meses (Semestral)'
                    : 'Sem fidelidade (Mensal)'}
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-extrabold text-[#F8032D]">R$</span>
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    {destaquePlan.prices[activeCycle].price}
                  </span>
                  <span className="text-sm text-gray-400 font-semibold">
                    {destaquePlan.prices[activeCycle].period}
                  </span>
                </div>

                <div className="mt-2 text-xs text-gray-300 flex items-center gap-2">
                  <span>{destaquePlan.prices[activeCycle].note}</span>
                  {activeCycle === 'anual' && (
                    <span className="px-2 py-0.5 rounded bg-[#F8032D] text-white font-bold text-[10px] uppercase shadow-sm">
                      Melhor Custo-Benefício
                    </span>
                  )}
                </div>
              </div>

              {/* Breakdown of all 3 cycles */}
              <div className="space-y-2 mb-8 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Valores em todos os períodos:
                </div>
                <div className="flex justify-between items-center text-xs p-2.5 rounded-lg bg-[#181822] border border-[#272736]">
                  <span className="text-gray-300">Mensal (sem fidelidade)</span>
                  <span className="font-bold text-white">R$ 259,00 / mês</span>
                </div>
                <div className="flex justify-between items-center text-xs p-2.5 rounded-lg bg-[#181822] border border-[#272736]">
                  <span className="text-gray-300">Semestral (6 meses)</span>
                  <span className="font-bold text-white">R$ 237,00 / mês</span>
                </div>
                <div className="flex justify-between items-center text-xs p-2.5 rounded-lg bg-[#20151C] border border-[#F8032D]">
                  <span className="text-red-200 font-semibold">Anual (12 meses)</span>
                  <span className="font-black text-[#F8032D]">R$ 217,00 / mês</span>
                </div>
              </div>

              {/* Features list */}
              <div className="space-y-3 mb-8">
                {destaquePlan.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-gray-200">
                    <Check className="w-4 h-4 text-[#F8032D] shrink-0 mt-0.5" />
                    <span className="font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Optional Video Service (Visually Separated) */}
              <div className="p-4 rounded-xl bg-[#0B0B10] border border-[#2A2A38] mb-8">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-300 mb-1">
                  <Video className="w-3.5 h-3.5 text-[#F8032D]" />
                  <span>Serviço Opcional: Criação de Vídeo Animado</span>
                </div>
                <p className="text-[11px] text-gray-400 mb-2">
                  Animação profissional dinâmica para sua peça publicitária.
                </p>
                <div className="grid grid-cols-3 gap-2 text-[10px] text-center font-mono">
                  <div className="p-1.5 rounded bg-[#14141E]">
                    <div className="text-gray-400">Mensal</div>
                    <div className="font-bold text-white">R$ 100</div>
                  </div>
                  <div className="p-1.5 rounded bg-[#14141E]">
                    <div className="text-gray-400">Semestral</div>
                    <div className="font-bold text-white">R$ 75</div>
                  </div>
                  <div className="p-1.5 rounded bg-[#161624] border border-[#F8032D]/30">
                    <div className="text-red-300">Anual</div>
                    <div className="font-bold text-[#F8032D]">R$ 50</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => handlePlanClick('DESTAQUE')}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#F8032D] hover:bg-[#B80024] text-white font-black text-sm uppercase tracking-wider transition-all shadow-led hover:shadow-[0_0_35px_rgba(248,3,45,0.7)]"
              >
                <span>QUERO ESTE PLANO</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppLink('DESTAQUE')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs text-red-300 hover:text-white transition-colors"
              >
                <span>Falar sobre o DESTAQUE pelo WhatsApp →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
