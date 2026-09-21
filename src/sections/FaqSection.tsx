import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative py-24 bg-[#000000] border-b border-[#1C1C26] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#15151F] border border-[#262636] text-[#A9ACB3] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F8032D]"></span>
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase">
            PERGUNTAS{' '}
            <span className="text-[#F8032D] text-led-glow">FREQUENTES</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A9ACB3] mt-3">
            Tudo o que você precisa saber antes de colocar sua marca nas telas.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#121219] border-[#F8032D]/50 shadow-led-subtle'
                    : 'bg-[#0E0E14] border-[#20202E] hover:border-[#303042]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8032D]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>

                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#F8032D] text-white rotate-180 shadow-sm'
                        : 'bg-[#1A1A24] text-gray-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 text-sm text-gray-300 leading-relaxed border-t border-[#1C1C28] pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Strip */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#101017] border border-[#20202E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#F8032D]/10 text-[#F8032D] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Ficou com alguma dúvida específica?</div>
              <div className="text-xs text-gray-400">Nossa equipe atende rapidamente pelo WhatsApp.</div>
            </div>
          </div>

          <a
            href={`https://wa.me/${siteConfig.company.whatsappRaw}?text=${encodeURIComponent(
              'Olá! Estava lendo o FAQ no site da VM MÍDIAS e gostaria de tirar uma dúvida sobre os anúncios.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#181824] hover:bg-[#202030] text-white border border-[#2A2A3C] text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>Conversar Agora</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F8032D]" />
          </a>
        </div>
      </div>
    </section>
  );
};
