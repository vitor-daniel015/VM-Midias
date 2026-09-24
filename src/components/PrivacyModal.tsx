import React from "react";
import { X, ShieldCheck } from "lucide-react";
import { PrivacyPolicyContent } from "./PrivacyPolicyContent";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="privacy-policy-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#111116] border border-[#22222E] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#1A1A24] transition-colors"
          aria-label="Fechar Política de Privacidade"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#22222E]">
          <div className="p-2.5 rounded-lg bg-[#F8032D]/10 text-[#F8032D] border border-[#F8032D]/20">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3
              id="privacy-modal-title"
              className="text-xl font-black text-white"
            >
              Política de Privacidade & LGPD
            </h3>
            <p className="text-xs text-gray-400">
              Atualizado em 24 de setembro de 2026.
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <PrivacyPolicyContent />

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-[#22222E] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-[#F8032D] hover:bg-[#B80024] text-white font-bold text-sm shadow-led-sm transition-all"
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
