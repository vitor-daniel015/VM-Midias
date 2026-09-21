import React, { useState, useEffect } from 'react';
import { VMLogo } from './VMLogo';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface HeaderProps {
  onOpenContactModal?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Onde Estamos', href: '#onde-estamos' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Planos', href: '#planos' },
    { label: 'Cases', href: '#cases' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#000000]/90 backdrop-blur-md border-b border-[#22222E]/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo VM MÍDIAS */}
          <a
            href="#inicio"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8032D] rounded-md"
            aria-label="VM MÍDIAS - Ir para o início"
          >
            <VMLogo size="sm" />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-navigation"
            className="hidden lg:flex items-center space-x-7"
            aria-label="Navegação Principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#A9ACB3] hover:text-[#FFFFFF] transition-colors relative py-1 group focus:outline-none focus-visible:text-white"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F8032D] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              id="header-cta-button"
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#F8032D] hover:bg-[#B80024] text-white text-sm font-bold tracking-wide transition-all duration-200 shadow-led-sm hover:shadow-led focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>ANUNCIE AGORA</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="#contato"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F8032D] text-white text-xs font-bold uppercase tracking-wider"
            >
              <span>Anuncie</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#15151B] border border-[#22222E] text-white hover:text-[#F8032D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8032D]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden fixed inset-x-0 top-[61px] bg-[#0A0A0E]/98 backdrop-blur-xl border-b border-[#22222E] shadow-2xl transition-all animate-in slide-in-from-top duration-200"
        >
          <div className="px-5 pt-4 pb-6 space-y-3">
            <div className="text-xs uppercase tracking-wider text-[#A9ACB3] font-semibold mb-2">
              Navegação
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-base font-medium text-gray-200 hover:text-white hover:bg-[#15151B] border border-transparent hover:border-[#22222E] transition-all"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#F8032D]">→</span>
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-[#22222E] flex flex-col gap-2.5">
              <a
                href="#contato"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#F8032D] text-white text-sm font-bold shadow-led-sm"
              >
                <span>ANUNCIE AGORA</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${siteConfig.company.whatsappRaw}?text=${encodeURIComponent(
                  'Olá! Vi o site da VM MÍDIAS e gostaria de saber como colocar minha empresa em destaque nas telas.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#15151B] hover:bg-[#1C1C24] border border-[#22222E] text-white text-sm font-medium"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Falar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
