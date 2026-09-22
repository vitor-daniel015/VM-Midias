import React, { useState, useEffect } from "react";
import { VMLogo } from "./VMLogo";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { WhatsAppIcon } from "./WhatsAppIcon";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const sectionIds = [
      "inicio",
      "onde-estamos",
      "como-funciona",
      "planos",
      "contato",
    ];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0, 0.15, 0.35] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Onde Estamos", href: "#onde-estamos" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Planos", href: "#planos" },
    { label: "Contato", href: "#contato" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="main-header"
        className="fixed left-0 top-0 z-50 h-[72px] w-full border-b border-white/10 bg-[#030406]/96 shadow-2xl shadow-black/40 backdrop-blur-xl lg:h-[84px]"
      >
        <div className="mx-auto h-full max-w-[1500px] px-4 sm:px-8 lg:px-12">
          <div className="flex h-full items-center justify-between">
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
                  aria-current={
                    activeSection === link.href.slice(1) ? "page" : undefined
                  }
                  className={`text-[13px] font-bold transition-colors relative py-2 group focus:outline-none focus-visible:text-white ${activeSection === link.href.slice(1) ? "text-white" : "text-[#94979f] hover:text-white"}`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#F8032D] transition-all duration-300 group-hover:w-full ${activeSection === link.href.slice(1) ? "w-full" : "w-0"}`}
                  />
                </a>
              ))}
            </nav>

            {/* Desktop Action Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                id="header-cta-button"
                href="#contato"
                className="group inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-[#f40b36] px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d90a31] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>ANUNCIE AGORA</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="#contato"
                onClick={handleLinkClick}
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
                aria-controls="mobile-navigation-drawer"
                aria-label={
                  mobileMenuOpen
                    ? "Fechar menu de navegação"
                    : "Abrir menu de navegação"
                }
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-x-0 bottom-0 top-[72px] z-[45] overflow-y-auto bg-[#050609] lg:hidden"
        >
          <div className="flex min-h-full flex-col px-5 pb-[max(24px,env(safe-area-inset-bottom))] pt-6 sm:px-8">
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/38">
              Navegação
            </div>
            <nav
              aria-label="Navegação móvel"
              className="border-t border-white/10"
            >
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  aria-current={
                    activeSection === link.href.slice(1) ? "page" : undefined
                  }
                  className={`group flex min-h-14 items-center gap-4 border-b border-white/10 px-1 text-base font-bold transition-colors ${activeSection === link.href.slice(1) ? "text-white" : "text-white/65 hover:text-white"}`}
                >
                  <span
                    className={`text-[10px] tabular-nums ${activeSection === link.href.slice(1) ? "text-[#f40b36]" : "text-white/25"}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{link.label}</span>
                  <ArrowRight
                    className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${activeSection === link.href.slice(1) ? "text-[#f40b36]" : "text-white/25"}`}
                  />
                </a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3 border-t border-white/10 pt-5">
              <a
                href="#contato"
                onClick={handleLinkClick}
                className="flex min-h-14 w-full items-center justify-center gap-2 rounded-md bg-[#F8032D] py-3 text-sm font-black text-white"
              >
                <span>ANUNCIE AGORA</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${siteConfig.company.whatsappRaw}?text=${encodeURIComponent(
                  "Olá! Vi o site da VM MÍDIAS e gostaria de saber como colocar minha empresa em destaque nas telas.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-white/12 bg-white/[0.035] py-2.5 text-sm font-bold text-white"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span>Falar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
