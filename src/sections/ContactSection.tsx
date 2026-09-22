import React, { useEffect, useState } from "react";
import { AlertCircle, ArrowUpRight, MapPin } from "lucide-react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { BrandEyebrow } from "../components/BrandUI";
import { siteConfig } from "../data/siteConfig";
import { PlanCycle } from "../types";

interface ContactSectionProps {
  selectedPlanName?: string;
  selectedPlanCycle?: PlanCycle;
}

interface SimpleContactForm {
  nome: string;
  empresa: string;
  plano: string;
  mensagem: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedPlanName,
  selectedPlanCycle,
}) => {
  const [formData, setFormData] = useState<SimpleContactForm>({
    nome: "",
    empresa: "",
    plano: "PLANO DESTAQUE (Mais Escolhido)",
    mensagem: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof SimpleContactForm, string>>
  >({});

  useEffect(() => {
    if (!selectedPlanName) return;
    setFormData((current) => ({
      ...current,
      plano:
        selectedPlanName.toUpperCase() === "START"
          ? "PLANO START (05 locais)"
          : "PLANO DESTAQUE (Mais Escolhido)",
    }));
  }, [selectedPlanName, selectedPlanCycle]);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const field = event.target.name as keyof SimpleContactForm;
    setFormData((current) => ({ ...current, [field]: event.target.value }));
    if (errors[field])
      setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof SimpleContactForm, string>> = {};
    if (!formData.nome.trim()) nextErrors.nome = "Informe seu nome.";
    if (!formData.mensagem.trim())
      nextErrors.mensagem = "Escreva uma mensagem para continuar.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const message = [
      "*CONTATO PELO SITE — VM MÍDIAS*",
      "",
      `*Nome:* ${formData.nome.trim()}`,
      formData.empresa.trim() ? `*Empresa:* ${formData.empresa.trim()}` : "",
      `*Interesse:* ${formData.plano}${selectedPlanCycle ? ` — ${selectedPlanCycle}` : ""}`,
      `*Mensagem:* ${formData.mensagem.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${siteConfig.company.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const fieldClass =
    "w-full border-0 border-b border-white/20 bg-transparent px-0 py-3.5 text-base text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#f40b36] focus:ring-0";

  const planOptions = [
    {
      value: "PLANO DESTAQUE (Mais Escolhido)",
      label: "Destaque",
      detail: "10 locais",
    },
    { value: "PLANO START (05 locais)", label: "Start", detail: "5 locais" },
    {
      value: "PAINÉIS DE LED (Sob Medida)",
      label: "Painel de LED",
      detail: "sob medida",
    },
    {
      value: "OUTRO / TIRAR DÚVIDAS",
      label: "Tenho dúvidas",
      detail: "quero orientação",
    },
  ];

  return (
    <section
      id="contato"
      className="border-b border-white/10 bg-[#08090d] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <BrandEyebrow>Contato direto</BrandEyebrow>
            <h2 className="brand-section-title !text-[clamp(3.4rem,7vw,7rem)]">
              Vamos
              <br />
              conversar.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-white/58">
              Conte o que sua marca precisa. Ao enviar, abriremos o WhatsApp da
              VM Mídias com a mensagem pronta.
            </p>

            <div className="mt-10 border-y border-white/10">
              <a
                href={`https://wa.me/${siteConfig.company.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border-b border-white/10 py-5"
              >
                <span className="flex h-10 w-10 items-center justify-center border border-white/12 text-[#f40b36]">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <span className="flex-1">
                  <span className="block text-xs uppercase tracking-[0.16em] text-white/38">
                    WhatsApp comercial
                  </span>
                  <span className="mt-1 block font-bold text-white">
                    {siteConfig.company.whatsappFormatted}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-white/35 transition-colors group-hover:text-[#25D366]" />
              </a>
              <div className="flex items-center gap-4 py-5">
                <span className="flex h-10 w-10 items-center justify-center border border-white/12 text-[#f40b36]">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-white/38">
                    Atendimento local
                  </span>
                  <span className="mt-1 block font-bold text-white">
                    {siteConfig.company.locationShort}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-10">
            <div className="mb-8 flex items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f40b36]">
                  Mensagem rápida
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
                  Fale direto com nosso time
                </h3>
              </div>
              <WhatsAppIcon className="hidden h-8 w-8 sm:block" />
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="form-nome"
                    className="text-xs font-bold uppercase tracking-[0.14em] text-white/58"
                  >
                    Seu nome
                  </label>
                  <input
                    id="form-nome"
                    name="nome"
                    type="text"
                    autoComplete="name"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Como podemos chamar você?"
                    className={`${fieldClass} ${errors.nome ? "!border-red-500" : ""}`}
                    aria-invalid={Boolean(errors.nome)}
                  />
                  {errors.nome && (
                    <p className="mt-2 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.nome}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="form-empresa"
                    className="text-xs font-bold uppercase tracking-[0.14em] text-white/58"
                  >
                    Empresa{" "}
                    <span className="font-normal normal-case text-white/30"></span>
                  </label>
                  <input
                    id="form-empresa"
                    name="empresa"
                    type="text"
                    autoComplete="organization"
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Nome do seu negócio"
                    className={fieldClass}
                  />
                </div>
              </div>

              <fieldset>
                <legend className="text-xs font-bold uppercase tracking-[0.14em] text-white/58">
                  Qual é o seu interesse?
                </legend>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {planOptions.map((option) => {
                    const selected = formData.plano === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          setFormData((current) => ({
                            ...current,
                            plano: option.value,
                          }))
                        }
                        aria-pressed={selected}
                        className={`min-h-16 rounded-md border px-3 py-3 text-left transition-colors ${selected ? "border-[#f40b36] bg-[#f40b36]/10" : "border-white/12 bg-white/[0.025] hover:border-white/28"}`}
                      >
                        <span
                          className={`block text-sm font-black ${selected ? "text-white" : "text-white/68"}`}
                        >
                          {option.label}
                        </span>
                        <span className="mt-0.5 block text-[10px] uppercase tracking-wider text-white/32">
                          {option.detail}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div>
                <label
                  htmlFor="form-mensagem"
                  className="text-xs font-bold uppercase tracking-[0.14em] text-white/58"
                >
                  Sua mensagem
                </label>
                <textarea
                  id="form-mensagem"
                  name="mensagem"
                  rows={4}
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Conte brevemente o que você quer divulgar..."
                  className={`${fieldClass} resize-y ${errors.mensagem ? "!border-red-500" : ""}`}
                  aria-invalid={Boolean(errors.mensagem)}
                />
                {errors.mensagem && (
                  <p className="mt-2 flex items-center gap-1 text-xs text-red-400">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.mensagem}
                  </p>
                )}
              </div>

              <button
                id="contact-submit-button"
                type="submit"
                className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-md bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#041108] transition-colors hover:bg-[#38e478] sm:w-auto sm:min-w-72"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Enviar pelo WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
