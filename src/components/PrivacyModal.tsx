import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="privacy-policy-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#111116] border border-[#22222E] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto">
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
            <h3 id="privacy-modal-title" className="text-xl font-black text-white">
              Política de Privacidade & LGPD
            </h3>
            <p className="text-xs text-gray-400">
              {siteConfig.company.name} • Atualizado em 2026
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="text-sm text-gray-300 space-y-4 leading-relaxed">
          <p>
            A <strong>{siteConfig.company.name}</strong> valoriza a transparência e a privacidade de seus anunciantes, parceiros e visitantes deste site oficial ({siteConfig.company.domain}), em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
          </p>

          <h4 className="font-bold text-white text-base pt-2">1. Coleta de Dados no Formulário</h4>
          <p>
            Coletamos apenas as informações voluntariamente fornecidas através dos nossos formulários de contato e canais de WhatsApp: nome, nome da empresa, WhatsApp/telefone, e-mail, segmento de atuação e plano de interesse.
          </p>

          <h4 className="font-bold text-white text-base pt-2">2. Finalidade do Tratamento</h4>
          <p>
            Os dados coletados são utilizados estritamente para:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-400">
            <li>Apresentar propostas comerciais e orçamentos para veiculação de anúncios na rede de telas;</li>
            <li>Esclarecer dúvidas sobre os planos START e DESTAQUE;</li>
            <li>Formalizar contratos de veiculação e suporte técnico operacional em Capela do Alto - SP.</li>
          </ul>

          <h4 className="font-bold text-white text-base pt-2">3. Compartilhamento e Segurança</h4>
          <p>
            A {siteConfig.company.name} não comercializa, não aluga e não repassa informações de contato a terceiros para fins de marketing. Seus dados são armazenados de maneira segura e acessados exclusivamente por nossa equipe comercial.
          </p>

          <h4 className="font-bold text-white text-base pt-2">4. Cookies e Rastreamento</h4>
          <p>
            Este site não utiliza cookies invasivos de terceiros que exijam banners intrusivos. Empregamos apenas recursos técnicos essenciais para a navegação fluida, preservação de preferências e envio seguro de formulários.
          </p>

          <h4 className="font-bold text-white text-base pt-2">5. Seus Direitos</h4>
          <p>
            Você pode solicitar a qualquer momento a confirmação, atualização ou exclusão de seus dados de nossa base de contatos comerciais através do e-mail <strong>{siteConfig.company.email}</strong> ou pelo WhatsApp oficial.
          </p>
        </div>

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
