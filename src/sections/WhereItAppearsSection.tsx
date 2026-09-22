import React, { useState } from "react";
import {
  ShoppingCart,
  Utensils,
  Landmark,
  Dumbbell,
  Store,
  HeartPulse,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { BrandButton, BrandEyebrow } from "../components/BrandUI";
import { siteConfig } from "../data/siteConfig";

export const WhereItAppearsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    siteConfig.networkCategories[0]?.id || "supermercados",
  );
  const iconMap: Record<string, React.ElementType> = {
    ShoppingCart,
    Utensils,
    Landmark,
    Dumbbell,
    Store,
    HeartPulse,
  };
  const activeCategory =
    siteConfig.networkCategories.find(
      (category) => category.id === selectedCategory,
    ) || siteConfig.networkCategories[0];

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
          <BrandEyebrow>Cobertura estratégica</BrandEyebrow>
          <h2 className="brand-section-title">
            Onde sua marca <span className="text-[#f40b36]">aparece.</span>
          </h2>
          <p className="brand-section-copy max-w-3xl">
            Sua campanha presente em ambientes comerciais que fazem parte da
            rotina de Capela do Alto.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3">
          {siteConfig.networkCategories.map((category) => {
            const Icon = iconMap[category.iconName] || Store;
            const active = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                aria-pressed={active}
                className={`group relative min-h-40 border p-4 text-center transition-all duration-200 sm:min-h-48 sm:p-6 ${active ? "border-[#f40b36] bg-[#121318]" : "border-white/15 bg-[#0b0d10]/85 hover:border-white/35 hover:bg-[#111318]"}`}
              >
                <Icon
                  className={`mx-auto h-8 w-8 transition-colors sm:h-10 sm:w-10 ${active ? "text-[#f40b36]" : "text-white/78 group-hover:text-white"}`}
                  strokeWidth={1.7}
                />
                <span className="mt-5 block text-sm font-black text-white sm:text-lg">
                  {category.name}
                </span>
                <span className="mt-1.5 block text-[10px] uppercase tracking-[0.12em] text-white/38 sm:text-xs">
                  {category.locationScope}
                </span>
                {active && (
                  <span className="absolute inset-x-4 bottom-0 h-0.5 bg-[#f40b36]" />
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-3 grid border border-white/10 bg-[#0d0f13] lg:grid-cols-12">
          <div className="p-6 sm:p-8 lg:col-span-8 lg:p-10">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f40b36]">
              {activeCategory.highlight}
            </p>
            <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
              {activeCategory.name} em Capela do Alto
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58">
              {activeCategory.description}
            </p>
          </div>
          <div className="flex items-center border-t border-white/10 p-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:p-10">
            <BrandButton href="#contato" className="w-full">
              Anunciar nesta categoria
            </BrandButton>
          </div>
        </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {siteConfig.realPoints.map((point) => (
                <article key={point.id} className="bg-[#06070a] p-6">
                  <MapPin className="mb-5 h-5 w-5 text-[#f40b36]" />
                  <h3 className="font-bold text-white">{point.name}</h3>
                  <p className="mt-1 text-xs text-[#f40b36]">
                    {point.category}
                  </p>
                  <p className="mt-3 text-sm text-white/50">
                    {point.neighborhood}
                  </p>
                  <p className="mt-2 text-sm text-white/50">
                    {point.description}
                  </p>
                </article>
              ))}
            </div>
      </div>
    </section>
  );
};
