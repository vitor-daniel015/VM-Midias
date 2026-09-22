import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { SectionHeading } from "../components/BrandUI";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative py-24 lg:py-32 bg-[#030406] border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeading
          eyebrow="Tire suas dúvidas"
          title="Perguntas"
          accent="frequentes"
          description="Tudo o que você precisa saber antes de colocar sua marca nas telas."
          className="mb-16"
        />

        {/* Accordion List */}
        <div className="border-t border-white/10">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden border-b border-white/10 transition-colors duration-200 hover:bg-white/[0.025]"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8032D]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center border border-white/15 transition-all duration-300 ${isOpen ? "rotate-180 border-[#F8032D] text-[#F8032D]" : "text-gray-400"}`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="max-w-3xl pb-7 pr-12 text-sm leading-relaxed text-gray-300 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Strip */}
        <div className="mt-12 border-l-2 border-[#F8032D] bg-white/[0.025] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 text-[#F8032D] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Ficou com alguma dúvida específica?
              </div>
              <div className="text-xs text-gray-400">
                Nossa equipe atende rapidamente pelo WhatsApp.
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/${siteConfig.company.whatsappRaw}?text=${encodeURIComponent(
              "Olá! Estava lendo o FAQ no site da VM MÍDIAS e gostaria de tirar uma dúvida sobre os anúncios.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md hover:bg-white/[0.04] text-white border border-white/15 text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>Conversar Agora</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F8032D]" />
          </a>
        </div>
      </div>
    </section>
  );
};
