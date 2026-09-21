import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section
      id="como-funciona"
      className="relative py-24 bg-[#000000] border-b border-[#1C1C26] overflow-hidden"
    >
      {/* Background Matrix */}
      <div className="absolute inset-0 bg-led-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#15151F] border border-[#262636] text-[#A9ACB3] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F8032D]"></span>
            <span>Passo a Passo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase">
            COMO{' '}
            <span className="text-[#F8032D] text-led-glow">FUNCIONA.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A9ACB3] mt-3">
            Simples, rápido e sem burocracia.
          </p>
        </div>

        {/* Steps Flow (Horizontal on Desktop, Vertical on Mobile) */}
        <div className="relative">
          {/* Connecting Red Line (Desktop only) */}
          <div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-12 bg-gradient-to-r from-[#F8032D]/20 via-[#F8032D] to-[#F8032D]/20 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {siteConfig.howItWorksSteps.map((item, index) => (
              <div
                key={item.step}
                className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-[#0F0F16] border border-[#20202E] hover:border-[#F8032D]/60 transition-all duration-300 shadow-xl hover:shadow-card-hover"
              >
                {/* Numbered Circle with Red Glow */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#161622] border-2 border-[#F8032D] flex items-center justify-center text-white font-black text-xl shadow-led-sm group-hover:scale-110 group-hover:bg-[#F8032D] transition-all duration-300">
                    <span>{item.step}</span>
                  </div>
                  {/* Outer pulse circle */}
                  <span className="absolute -inset-1 rounded-full border border-[#F8032D]/30 animate-ping opacity-40 pointer-events-none" />
                </div>

                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2 group-hover:text-red-50 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-semibold text-gray-300 mb-2 leading-snug">
                  {item.description}
                </p>

                <p className="text-xs text-[#A9ACB3] leading-relaxed">
                  {item.detail}
                </p>

                {/* Step arrow indicator for mobile */}
                {index < 3 && (
                  <div className="lg:hidden mt-4 text-[#F8032D]">
                    <span className="text-xl">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Action strip below steps */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-[#12121A] border border-[#242434] shadow-inner">
            <span className="text-xs sm:text-sm text-gray-300 font-medium">
              Sua campanha no ar em até 48 horas após a aprovação da arte.
            </span>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#F8032D] hover:bg-[#B80024] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-led-sm"
            >
              <span>Começar agora</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
