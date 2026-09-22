import React from "react";
import { Eye, Clock, Target } from "lucide-react";

const benefits = [
  {
    id: "visibilidade",
    number: "01",
    title: "Mais visibilidade",
    text: "Sua marca onde as pessoas estão, em telas posicionadas nos pontos de maior circulação da cidade.",
    icon: Eye,
  },
  {
    id: "lembranca",
    number: "02",
    title: "Mais lembrança",
    text: "Presença frequente gera reconhecimento e coloca sua empresa em primeiro lugar na decisão de compra.",
    icon: Clock,
  },
  {
    id: "oportunidades",
    number: "03",
    title: "Mais oportunidades",
    text: "Sua empresa aparece para novos consumidores no momento em que eles estão receptivos à sua mensagem.",
    icon: Target,
  },
];

export const BenefitsSection: React.FC = () => (
  <section
    id="beneficios"
    className="relative bg-[#06070a] border-b border-white/10 overflow-hidden"
  >
    <div
      className="absolute inset-0 bg-led-grid opacity-20"
      aria-hidden="true"
    />
    <div className="relative max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/10">
        {benefits.map(({ id, number, title, text, icon: Icon }) => (
          <article
            key={id}
            className="group relative py-8 md:px-7 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 md:border-r last:border-0 border-white/10"
          >
            <div className="flex items-start gap-5">
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-full border-2 border-[#ff143f] flex items-center justify-center text-[#ff143f] group-hover:bg-[#ff143f] group-hover:text-white transition-all shadow-[0_0_24px_rgba(248,3,45,0.2)]">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="block mt-3 text-[10px] font-black tracking-[0.25em] text-[#51545e] text-center">
                  {number}
                </span>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight text-white">
                  {title}
                </h3>
                <span className="block w-10 h-[3px] bg-[#ff143f] my-4 shadow-[0_0_12px_#f8032d]" />
                <p className="text-sm text-[#aeb0b8] leading-relaxed max-w-sm">
                  {text}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
