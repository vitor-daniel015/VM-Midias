import { ArrowLeft, ShieldCheck } from "lucide-react";
import { useEffect } from "react";
import { PrivacyPolicyContent } from "../components/PrivacyPolicyContent";
import { VMLogo } from "../components/VMLogo";

export function PrivacyPolicyPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Política de Privacidade | VM MÍDIAS";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#030406] text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#030406]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-5xl items-center justify-between px-5 sm:px-8">
          <a href="/" aria-label="Voltar ao site da VM MÍDIAS">
            <VMLogo size="sm" />
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/58 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Voltar ao site</span>
          </a>
        </div>
      </header>

      <main className="px-5 py-12 sm:px-8 sm:py-16">
        <article className="brand-panel mx-auto max-w-4xl rounded-2xl p-6 sm:p-10 lg:p-12">
          <header className="mb-8 flex items-start gap-4 border-b border-white/10 pb-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#f40b36]/25 bg-[#f40b36]/10 text-[#ff3155]">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff3155]">
                Transparência e LGPD
              </p>
              <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Política de Privacidade
              </h1>
              <p className="mt-2 text-xs text-white/40">
                Atualizada em 24 de setembro de 2026.
              </p>
            </div>
          </header>

          <PrivacyPolicyContent />
        </article>
      </main>
    </div>
  );
}
