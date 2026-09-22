import React, { useState } from "react";
import { ArrowRight, Check, Star, Video } from "lucide-react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { SectionHeading } from "../components/BrandUI";
import { siteConfig } from "../data/siteConfig";
import { PlanCycle, PlanItem } from "../types";

interface PlansSectionProps {
  onSelectPlan?: (planName: string, cycle: PlanCycle) => void;
}

const cycles: Array<{ id: PlanCycle; label: string; shortLabel: string }> = [
  { id: "mensal", label: "Mensal", shortLabel: "Mensal" },
  { id: "semestral", label: "Semestral", shortLabel: "6 meses" },
  { id: "anual", label: "Anual", shortLabel: "12 meses" },
];

export const PlansSection: React.FC<PlansSectionProps> = ({ onSelectPlan }) => {
  const [activeCycle, setActiveCycle] = useState<PlanCycle>("anual");

  const handlePlanClick = (plan: PlanItem) => {
    onSelectPlan?.(plan.name, activeCycle);
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const getWhatsAppLink = (plan: PlanItem) => {
    const cycle = cycles.find((item) => item.id === activeCycle)?.label;
    const message = `Olá! Tenho interesse no Plano ${plan.name}, período ${cycle}. Gostaria de receber mais informações.`;
    return `https://wa.me/${siteConfig.company.whatsappRaw}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="planos"
      className="border-b border-white/10 bg-[#08090d] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Planos VM Mídias"
          title="Escolha sua"
          accent="presença"
          description="Dois planos claros. Você escolhe a cobertura e o período ideal para o seu negócio."
          className="mb-9"
        />

        <div className="mx-auto mb-10 flex max-w-xl rounded-lg border border-white/10 bg-[#0d0f13] p-1.5">
          {cycles.map((cycle) => (
            <button
              key={cycle.id}
              type="button"
              onClick={() => setActiveCycle(cycle.id)}
              aria-pressed={activeCycle === cycle.id}
              className={`relative flex min-h-12 flex-1 flex-col items-center justify-center rounded-md px-2 text-center transition-colors ${activeCycle === cycle.id ? "bg-[#f40b36] text-white" : "text-white/52 hover:bg-white/[0.04] hover:text-white"}`}
            >
              <span className="text-xs font-black uppercase tracking-[0.1em]">
                {cycle.shortLabel}
              </span>
              {cycle.id === "anual" && (
                <span
                  className={`mt-0.5 text-[9px] font-bold uppercase ${activeCycle === "anual" ? "text-white/75" : "text-[#f40b36]"}`}
                >
                  melhor valor
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="mx-auto grid max-w-6xl overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2 lg:gap-px">
          {siteConfig.plans.map((plan) => {
            const featured = plan.id === "destaque";
            const price = plan.prices[activeCycle];
            const visibleFeatures = plan.features.slice(0, 4);

            return (
              <article
                key={plan.id}
                className={`relative flex flex-col bg-[#0d0f13] p-7 sm:p-10 lg:p-12 ${featured ? "border-t-4 border-[#f40b36] lg:border-t-0 lg:border-l-4" : ""}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f40b36]">
                      {plan.type}
                    </p>
                    <h3 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                      Plano {plan.name}
                    </h3>
                  </div>
                  {featured && (
                    <span className="flex shrink-0 items-center gap-1 bg-[#f40b36] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-wider text-white">
                      <Star className="h-3 w-3 fill-current" /> Mais escolhido
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm font-semibold text-white/62">
                  {plan.coverage}
                </p>

                <div className="my-8 border-y border-white/10 py-7">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/38">
                    {price.note}
                  </p>
                  <div className="mt-2 flex items-end gap-2">
                    <span className="mb-2 text-sm font-black text-[#f40b36]">
                      R$
                    </span>
                    <span className="text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl">
                      {price.price}
                    </span>
                    <span className="mb-2 text-sm text-white/45">
                      {price.period}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {visibleFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex gap-3 text-sm leading-6 text-white/70"
                    >
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[#f40b36]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5 text-xs text-white/48">
                  <Video className="h-4 w-4 shrink-0 text-[#f40b36]" />
                  <span>
                    Vídeo animado opcional por {plan.optionalVideo[activeCycle]}
                  </span>
                </div>

                <div className="mt-auto pt-8">
                  <button
                    type="button"
                    onClick={() => handlePlanClick(plan)}
                    className={`group flex min-h-14 w-full items-center justify-center gap-2 rounded-md px-5 text-sm font-black uppercase tracking-[0.1em] transition-colors ${featured ? "bg-[#f40b36] text-white hover:bg-[#d90a31]" : "border border-white/18 bg-white/[0.04] text-white hover:bg-white/[0.08]"}`}
                  >
                    Escolher {plan.name}{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <a
                    href={getWhatsAppLink(plan)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-white/42 transition-colors hover:text-[#25D366]"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Tirar dúvidas pelo
                    WhatsApp
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-white/35">
          A criação da arte estática está incluída. Valores e cobertura
          correspondem ao período selecionado acima.
        </p>
      </div>
    </section>
  );
};
