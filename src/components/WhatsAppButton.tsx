import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface WhatsAppButtonProps {
  customMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ customMessage }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMessage =
    customMessage ||
    'Olá! Vi o site da VM MÍDIAS e gostaria de saber como colocar minha empresa em destaque nas telas.';

  const whatsappUrl = `https://wa.me/${siteConfig.company.whatsappRaw}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto"
    >
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-[#111116] border border-[#22222E] rounded-xl p-3.5 shadow-2xl shadow-black text-xs text-gray-200 animate-in fade-in slide-in-from-bottom-2 duration-200 relative">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-bold text-white mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Atendimento VM MÍDIAS
          </div>
          <p className="text-gray-300">
            Dúvidas sobre os planos START e DESTAQUE? Fale diretamente conosco pelo WhatsApp.
          </p>
        </div>
      )}

      {/* Main WhatsApp Floating Action Button */}
      <a
        id="floating-whatsapp-button"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/60 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
        aria-label="Falar com a VM MÍDIAS no WhatsApp"
      >
        {/* Radar ping animation */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-60" />

        <MessageSquare className="w-7 h-7 fill-white/20 transition-transform group-hover:scale-110" />

        {/* Online Status Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0A0A0E]" />
      </a>
    </div>
  );
};
