import React from 'react';
import { VMLogo } from './VMLogo';
import { siteConfig } from '../data/siteConfig';
import { MapPin, Mail, Instagram, Globe, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  onOpenPrivacyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0A0A0E] border-t border-[#1C1C26] text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1E1E2A]">
          {/* Col 1: Brand & Positioning */}
          <div className="space-y-4">
            <a href="#inicio" className="inline-block" aria-label="VM MÍDIAS">
              <VMLogo size="md" />
            </a>
            <p className="text-xs text-[#F8032D] font-extrabold uppercase tracking-widest">
              {siteConfig.company.tagline}
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Rede de telas digitais e mídia indoor estratégica em Capela do Alto. Visibilidade constante e frequência que transformam marcas locais em referências.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#15151F] border border-[#232330] flex items-center justify-center text-gray-400 hover:text-[#F8032D] hover:border-[#F8032D]/40 transition-all"
                aria-label="Instagram da VM MÍDIAS"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.company.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#15151F] border border-[#232330] flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                aria-label="WhatsApp da VM MÍDIAS"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.company.email}`}
                className="w-9 h-9 rounded-lg bg-[#15151F] border border-[#232330] flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all"
                aria-label="E-mail da VM MÍDIAS"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#onde-estamos" className="hover:text-white transition-colors">
                  Onde Estamos
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-white transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-white transition-colors">
                  Cases & Clientes
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Localização & Atendimento */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
              Presença Local
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F8032D] shrink-0 mt-0.5" />
                <span>{siteConfig.company.locationShort} — Brasil</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                <span>{siteConfig.company.domain}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                <span>{siteConfig.company.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Atendimento comercial via WhatsApp</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Chamada Rápida */}
          <div className="space-y-3 bg-[#111117] p-5 rounded-xl border border-[#22222E]">
            <h4 className="text-sm font-bold text-white">
              Pronto para anunciar?
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Consulte a disponibilidade de pontos para o seu segmento em Capela do Alto.
            </p>
            <a
              href="#contato"
              className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-[#F8032D] hover:bg-[#B80024] text-white text-xs font-bold uppercase tracking-wider shadow-led-sm transition-all"
            >
              Anunciar Agora
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 {siteConfig.company.name}. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacyModal}
              className="text-gray-400 hover:text-white transition-colors underline underline-offset-4"
            >
              Política de Privacidade (LGPD)
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-gray-400 hover:text-[#F8032D] transition-colors"
              aria-label="Voltar ao topo da página"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
