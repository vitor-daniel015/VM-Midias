import React from 'react';
import { ArrowRight, Eye, Users, TrendingUp, Sparkles, MapPin } from 'lucide-react';
import { DigitalScreenMockup } from '../components/DigitalScreenMockup';
import { siteConfig } from '../data/siteConfig';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-black flex flex-col justify-between"
    >
      {/* Background Matrix/Grid with Top Spotlight Glow */}
      <div
        className="absolute inset-0 bg-led-grid opacity-60 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#F8032D]/15 via-[#F8032D]/5 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column (approx 55% / 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Small Brand Pill / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15151F] border border-[#262636] text-[#A9ACB3] text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F8032D] shadow-[0_0_8px_#F8032D] animate-pulse"></span>
              <span className="text-white font-extrabold tracking-widest">{siteConfig.company.name}</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-300">Capela do Alto — SP</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[64px] font-black text-white tracking-tight leading-[1.08] mb-6 uppercase">
              SEU NEGÓCIO JÁ É BOM.{' '}
              <br className="hidden sm:inline" />
              <span className="text-[#F8032D] text-led-glow block mt-1">
                AGORA ELE PRECISA APARECER.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#A9ACB3] font-normal leading-relaxed max-w-2xl mb-8">
              Publicidade em telas estratégicas de Capela do Alto para sua empresa ser vista, lembrada e escolhida.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                id="hero-primary-cta"
                href="#contato"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#F8032D] hover:bg-[#B80024] text-white text-base font-black uppercase tracking-wider transition-all duration-300 shadow-led hover:shadow-[0_0_35px_rgba(248,3,45,0.6)] hover:scale-[1.02] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#F8032D]"
              >
                <span>COLOCAR MINHA MARCA EM DESTAQUE</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                id="hero-secondary-cta"
                href="#planos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#111116] hover:bg-[#1A1A22] text-white border border-[#252533] hover:border-[#F8032D]/50 text-sm font-bold uppercase tracking-wider transition-all"
              >
                <span>CONHECER OS PLANOS</span>
              </a>
            </div>

            {/* 3 Micro-Proof Badges Below CTA */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-4 border-t border-[#1C1C26]">
              {/* Badge 1 */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0E0E14] border border-[#1C1C26]">
                <div className="w-10 h-10 rounded-lg bg-[#F8032D]/10 border border-[#F8032D]/30 flex items-center justify-center text-[#F8032D] shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-white uppercase tracking-wide">
                    Mais visibilidade
                  </div>
                  <div className="text-[11px] text-[#A9ACB3]">
                    Sua marca onde importa
                  </div>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0E0E14] border border-[#1C1C26]">
                <div className="w-10 h-10 rounded-lg bg-[#F8032D]/10 border border-[#F8032D]/30 flex items-center justify-center text-[#F8032D] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-white uppercase tracking-wide">
                    Novos clientes
                  </div>
                  <div className="text-[11px] text-[#A9ACB3]">
                    Com o público certo
                  </div>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0E0E14] border border-[#1C1C26]">
                <div className="w-10 h-10 rounded-lg bg-[#F8032D]/10 border border-[#F8032D]/30 flex items-center justify-center text-[#F8032D] shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-white uppercase tracking-wide">
                    Resultados reais
                  </div>
                  <div className="text-[11px] text-[#A9ACB3]">
                    Reconhecimento & vendas
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Column (approx 45% / 5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <DigitalScreenMockup />
          </div>
        </div>
      </div>

      {/* Bottom Ticker Line */}
      <div className="relative w-full mt-12 py-3 bg-[#0D0D13] border-y border-[#1C1C26] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-[#A9ACB3]">
          <div className="flex items-center gap-2 text-white">
            <MapPin className="w-3.5 h-3.5 text-[#F8032D]" />
            <span>Capela do Alto — SP</span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[#F8032D]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-white">PUBLICIDADE QUE MOVIMENTA NEGÓCIOS</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-white font-black">VM MÍDIAS</span>
            <span>•</span>
            <span>PRESENTE NO SEU DIA A DIA</span>
          </div>
        </div>
      </div>
    </section>
  );
};
