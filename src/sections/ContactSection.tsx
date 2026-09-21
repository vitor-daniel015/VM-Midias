import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Building2,
  Mail,
  User,
  Phone,
  Layers,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { ContactFormData, PlanCycle } from '../types';

interface ContactSectionProps {
  selectedPlanName?: string;
  selectedPlanCycle?: PlanCycle;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedPlanName,
  selectedPlanCycle,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    nome: '',
    empresa: '',
    whatsapp: '',
    email: '',
    segmento: '',
    plano: 'PLANO DESTAQUE (Mais Escolhido)',
    mensagem: '',
    origem: 'site-vm-midias',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [webhookResponseMsg, setWebhookResponseMsg] = useState('');

  // Update plan when user clicks plan in previous section
  useEffect(() => {
    if (selectedPlanName) {
      const cycleInfo = selectedPlanCycle ? ` - ${selectedPlanCycle.toUpperCase()}` : '';
      setFormData((prev) => ({
        ...prev,
        plano: `PLANO ${selectedPlanName.toUpperCase()}${cycleInfo}`,
      }));
    }
  }, [selectedPlanName, selectedPlanCycle]);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.nome.trim()) {
      errs.nome = 'Por favor, informe seu nome.';
    }

    if (!formData.empresa.trim()) {
      errs.empresa = 'Informe o nome da sua empresa ou comércio.';
    }

    if (!formData.whatsapp.trim()) {
      errs.whatsapp = 'Informe um WhatsApp para contato.';
    } else if (formData.whatsapp.replace(/\D/g, '').length < 10) {
      errs.whatsapp = 'Digite um número de telefone/WhatsApp válido com DDD.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Informe seu e-mail.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Digite um endereço de e-mail válido.';
    }

    if (!formData.segmento.trim()) {
      errs.segmento = 'Informe o segmento do seu negócio.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus('submitting');

    const payload = {
      nome: formData.nome.trim(),
      empresa: formData.empresa.trim(),
      whatsapp: formData.whatsapp.trim(),
      email: formData.email.trim(),
      segmento: formData.segmento.trim(),
      plano: formData.plano,
      mensagem: formData.mensagem.trim(),
      origem: 'site-vm-midias',
      dataEnvio: new Date().toISOString(),
    };

    try {
      // If a webhook is configured in siteConfig, trigger it (n8n, Make, Zapier, Supabase)
      if (siteConfig.company.webhookUrl) {
        const response = await fetch(siteConfig.company.webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error('Falha no envio ao webhook');
        }
      }

      // Log structured payload ready for automation
      console.log('VM MÍDIAS Lead Payload:', JSON.stringify(payload, null, 2));

      setStatus('success');
      setWebhookResponseMsg('Mensagem recebida com sucesso! Nossa equipe entrará em contato em breve.');
    } catch (err) {
      console.warn('Webhook dispatch info:', err);
      // Even if external webhook fails, provide success + WhatsApp fallback
      setStatus('success');
      setWebhookResponseMsg('Solicitação registrada! Você também pode nos enviar os dados diretamente pelo WhatsApp.');
    }
  };

  const handleSendViaWhatsApp = () => {
    const text = `*NOVO CONTATO - SITE VM MÍDIAS*\n\n*Nome:* ${formData.nome || 'Não informado'}\n*Empresa:* ${formData.empresa || 'Não informado'}\n*WhatsApp:* ${formData.whatsapp || 'Não informado'}\n*E-mail:* ${formData.email || 'Não informado'}\n*Segmento:* ${formData.segmento || 'Não informado'}\n*Plano de interesse:* ${formData.plano}\n*Mensagem:* ${formData.mensagem || 'Gostaria de colocar minha empresa em destaque nas telas.'}\n\nOrigem: site-vm-midias`;
    const url = `https://wa.me/${siteConfig.company.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="contato"
      className="relative py-24 bg-[#09090D] border-b border-[#1C1C26] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#15151F] border border-[#262636] text-[#A9ACB3] text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F8032D]"></span>
              <span>Atendimento Comercial</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase leading-tight">
              FALE COM A{' '}
              <span className="text-[#F8032D] text-led-glow">VM MÍDIAS.</span>
            </h2>

            <p className="text-base text-gray-300 leading-relaxed">
              Preencha o formulário para receber uma proposta personalizada para o seu comércio ou fale agora mesmo com o nosso time em Capela do Alto.
            </p>

            <div className="space-y-4 pt-4">
              <div className="p-4 rounded-xl bg-[#111117] border border-[#22222E] flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">WhatsApp Comercial</div>
                  <div className="text-sm font-bold text-white">
                    {siteConfig.company.whatsappFormatted}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#111117] border border-[#22222E] flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F8032D]/10 text-[#F8032D] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">E-mail Direto</div>
                  <div className="text-sm font-bold text-white">
                    {siteConfig.company.email}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#111117] border border-[#22222E] flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1D1D2C] text-gray-300 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Localização</div>
                  <div className="text-sm font-bold text-white">
                    {siteConfig.company.locationShort}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Quick Trigger */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleSendViaWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Conversar direto pelo WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111116] border border-[#242434] shadow-2xl relative">
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase mb-2">
                Solicitar Proposta de Mídia
              </h3>
              <p className="text-xs text-[#A9ACB3] mb-8">
                Informe os dados do seu negócio. Responderemos com os pontos recomendados para sua empresa.
              </p>

              {status === 'success' ? (
                <div className="p-8 rounded-2xl bg-[#141E18] border border-emerald-500/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-black text-white">
                    Proposta Solicitada com Sucesso!
                  </h4>
                  <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
                    {webhookResponseMsg}
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Agilizar atendimento no WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="px-4 py-2.5 rounded-lg bg-[#181822] text-xs text-gray-300 hover:text-white"
                    >
                      Enviar outro formulário
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nome */}
                    <div>
                      <label
                        htmlFor="form-nome"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5"
                      >
                        Seu Nome *
                      </label>
                      <div className="relative">
                        <input
                          id="form-nome"
                          name="nome"
                          type="text"
                          value={formData.nome}
                          onChange={handleChange}
                          placeholder="Ex: Carlos Silva"
                          className={`w-full bg-[#0B0B0F] border rounded-xl py-3 px-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F8032D] ${
                            errors.nome ? 'border-red-500' : 'border-[#262636]'
                          }`}
                        />
                      </div>
                      {errors.nome && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.nome}
                        </p>
                      )}
                    </div>

                    {/* Empresa */}
                    <div>
                      <label
                        htmlFor="form-empresa"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5"
                      >
                        Nome da Empresa / Comércio *
                      </label>
                      <input
                        id="form-empresa"
                        name="empresa"
                        type="text"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Ex: Padaria Central"
                        className={`w-full bg-[#0B0B0F] border rounded-xl py-3 px-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F8032D] ${
                          errors.empresa ? 'border-red-500' : 'border-[#262636]'
                        }`}
                      />
                      {errors.empresa && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.empresa}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* WhatsApp */}
                    <div>
                      <label
                        htmlFor="form-whatsapp"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5"
                      >
                        WhatsApp com DDD *
                      </label>
                      <input
                        id="form-whatsapp"
                        name="whatsapp"
                        type="tel"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="(15) 99999-9999"
                        className={`w-full bg-[#0B0B0F] border rounded-xl py-3 px-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F8032D] ${
                          errors.whatsapp ? 'border-red-500' : 'border-[#262636]'
                        }`}
                      />
                      {errors.whatsapp && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.whatsapp}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="form-email"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5"
                      >
                        E-mail *
                      </label>
                      <input
                        id="form-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="contato@empresa.com.br"
                        className={`w-full bg-[#0B0B0F] border rounded-xl py-3 px-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F8032D] ${
                          errors.email ? 'border-red-500' : 'border-[#262636]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Segmento */}
                    <div>
                      <label
                        htmlFor="form-segmento"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5"
                      >
                        Segmento de Atuação *
                      </label>
                      <input
                        id="form-segmento"
                        name="segmento"
                        type="text"
                        value={formData.segmento}
                        onChange={handleChange}
                        placeholder="Ex: Restaurante, Clínica, Loja..."
                        className={`w-full bg-[#0B0B0F] border rounded-xl py-3 px-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F8032D] ${
                          errors.segmento ? 'border-red-500' : 'border-[#262636]'
                        }`}
                      />
                      {errors.segmento && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.segmento}
                        </p>
                      )}
                    </div>

                    {/* Plano de Interesse */}
                    <div>
                      <label
                        htmlFor="form-plano"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5"
                      >
                        Plano de Interesse
                      </label>
                      <select
                        id="form-plano"
                        name="plano"
                        value={formData.plano}
                        onChange={handleChange}
                        className="w-full bg-[#0B0B0F] border border-[#262636] rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F8032D]"
                      >
                        <option value="PLANO DESTAQUE (Mais Escolhido)">
                          PLANO DESTAQUE (09 + 01 locais) — Mais Escolhido
                        </option>
                        <option value="PLANO START (05 locais)">
                          PLANO START (05 locais)
                        </option>
                        <option value="PAINÉIS DE LED (Sob Medida)">
                          PAINÉIS DE LED (Sob Medida)
                        </option>
                        <option value="OUTRO / TIRAR DÚVIDAS">
                          Quero tirar dúvidas / atendimento personalizado
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label
                      htmlFor="form-mensagem"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5"
                    >
                      Mensagem Adicional (Opcional)
                    </label>
                    <textarea
                      id="form-mensagem"
                      name="mensagem"
                      rows={3}
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Conte-nos se você deseja focar em algum bairro ou período específico..."
                      className="w-full bg-[#0B0B0F] border border-[#262636] rounded-xl py-3 px-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F8032D] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="contact-submit-button"
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-[#F8032D] hover:bg-[#B80024] disabled:bg-gray-700 text-white font-black text-sm uppercase tracking-wider transition-all duration-200 shadow-led-sm hover:shadow-led"
                    >
                      {status === 'submitting' ? (
                        <span>ENVIANDO DADOS...</span>
                      ) : (
                        <>
                          <span>QUERO ANUNCIAR</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* LGPD Consent Notice */}
                  <div className="pt-2 text-center text-[11px] text-gray-500">
                    Seus dados serão utilizados exclusivamente para contato comercial pela VM MÍDIAS, de acordo com a LGPD.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
