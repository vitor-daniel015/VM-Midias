import React, { useState } from 'react';
import {
  ShoppingCart,
  Utensils,
  Landmark,
  Dumbbell,
  Store,
  HeartPulse,
  MapPin,
  ArrowRight,
  Tv,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const WhereItAppearsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    siteConfig.networkCategories[0]?.id || 'supermercados'
  );

  const iconMap: Record<string, React.ElementType> = {
    ShoppingCart,
    Utensils,
    Landmark,
    Dumbbell,
    Store,
    HeartPulse,
  };

  const activeCategoryData =
    siteConfig.networkCategories.find((c) => c.id === selectedCategory) ||
    siteConfig.networkCategories[0];

  return (
    <section
      id="onde-estamos"
      className="relative py-24 bg-[#000000] border-b border-[#1C1C26] overflow-hidden"
    >
      {/* Background glow and subtle dot grid */}
      <div className="absolute inset-0 bg-led-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#F8032D]/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15151F] border border-[#262636] text-[#A9ACB3] text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F8032D]"></span>
              <span>Cobertura Estratégica</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase">
              ONDE SUA MARCA{' '}
              <span className="text-[#F8032D] text-led-glow">APARECE.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#A9ACB3] mt-3">
              Telas instaladas em locais estratégicos e de circulação.
            </p>
          </div>

          <a
            href="#mapa-capela"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#15151F] hover:bg-[#1E1E2B] border border-[#2A2A3A] hover:border-[#F8032D]/50 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all self-start md:self-auto shrink-0"
          >
            <span>VER TODOS OS PONTOS</span>
            <ArrowRight className="w-4 h-4 text-[#F8032D]" />
          </a>
        </div>

        {/* Categories Grid Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {siteConfig.networkCategories.map((cat) => {
            const Icon = iconMap[cat.iconName] || Store;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#181822] border-[#F8032D] shadow-led-subtle scale-[1.02]'
                    : 'bg-[#0E0E14] border-[#1E1E2A] hover:border-[#333344] hover:bg-[#14141D]'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${
                    isSelected
                      ? 'bg-[#F8032D] text-white'
                      : 'bg-[#1C1C26] text-[#A9ACB3]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-snug">
                    {cat.name}
                  </div>
                  <div className="text-[11px] text-[#A9ACB3] truncate mt-0.5">
                    {cat.locationScope}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card for the Selected Category */}
        <div className="bg-[#0F0F16] border border-[#22222E] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Detail Info */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F8032D]/10 border border-[#F8032D]/30 text-[#F8032D] text-xs font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeCategoryData.highlight}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase">
                {activeCategoryData.name} em Capela do Alto
              </h3>

              <p className="text-base text-gray-300 leading-relaxed">
                {activeCategoryData.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#15151E] border border-[#22222E]">
                  <CheckCircle2 className="w-4 h-4 text-[#F8032D] shrink-0" />
                  <span className="text-xs text-gray-200 font-medium">
                    Exibição em ponto de circulação diária
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#15151E] border border-[#22222E]">
                  <CheckCircle2 className="w-4 h-4 text-[#F8032D] shrink-0" />
                  <span className="text-xs text-gray-200 font-medium">
                    Tela vertical posicionada no ângulo de visão
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F8032D] hover:bg-[#B80024] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-led-sm"
                >
                  <span>Anunciar nesta categoria</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Visual Screen Environment Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/3] bg-[#14141E] rounded-xl border border-[#262638] p-5 flex flex-col items-center justify-center text-center shadow-inner overflow-hidden">
                {/* Decorative background ambient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                <div className="relative z-20 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#1D1D2C] border-2 border-[#F8032D] flex items-center justify-center text-[#F8032D] mb-4 shadow-led-sm animate-led-pulse">
                    <Tv className="w-8 h-8" />
                  </div>

                  <div className="text-base font-black text-white uppercase tracking-wider mb-1">
                    Telas VM MÍDIAS
                  </div>
                  <div className="text-xs text-[#A9ACB3] max-w-[220px]">
                    Instalação homologada com sinal contínuo e alta fidelidade de cores
                  </div>
                  <div className="mt-4 px-3 py-1 rounded-full bg-[#1F1F2B] border border-[#303042] text-[11px] font-mono text-gray-300">
                    Capela do Alto • Rede Ativa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAP SECTION (Section Map requirement) */}
        <div
          id="mapa-capela"
          className="relative bg-[#0A0A0E] border border-[#20202E] rounded-2xl p-6 sm:p-10 shadow-2xl overflow-hidden"
        >
          {/* Subtle network lines in map background */}
          <div className="absolute inset-0 bg-led-grid-dense opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181824] border border-[#2B2B3D] text-[#F8032D] text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Rede de Telas • Capela do Alto</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
              NOSSA CIDADE, MAIS CONECTADA.
            </h3>

            {/* Condition check from briefing:
                "Não criar pontos fictícios. Se nenhum endereço real estiver cadastrado, exibir apenas: 'Nossa rede está crescendo em Capela do Alto.'" */}
            {siteConfig.realPoints && siteConfig.realPoints.length > 0 ? (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                {siteConfig.realPoints.map((point) => (
                  <div
                    key={point.id}
                    className="p-4 rounded-xl bg-[#111118] border border-[#252535]"
                  >
                    <div className="text-sm font-bold text-white">{point.name}</div>
                    <div className="text-xs text-[#F8032D]">{point.category}</div>
                    <div className="text-xs text-gray-400 mt-1">{point.neighborhood}</div>
                    <div className="text-xs text-gray-400 mt-2">{point.description}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-6 p-8 rounded-xl bg-[#101017] border border-[#222230] max-w-xl mx-auto">
                <div className="w-12 h-12 rounded-full bg-[#F8032D]/10 border border-[#F8032D]/30 flex items-center justify-center text-[#F8032D] mx-auto mb-4 animate-pulse">
                  <MapPin className="w-6 h-6" />
                </div>
                <p className="text-lg font-bold text-white mb-2">
                  Nossa rede está crescendo em Capela do Alto.
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Estamos em constante expansão mapeando os melhores corredores comerciais e pontos de circulação. Novos endereços são ativados periodicamente.
                </p>

                <div className="mt-6 pt-4 border-t border-[#1C1C26] flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#F8032D] hover:bg-[#B80024] text-white text-xs font-bold uppercase tracking-wider shadow-led-sm transition-all"
                  >
                    <span>Consultar pontos disponíveis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
