import React, { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./sections/HeroSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { WhereItAppearsSection } from "./sections/WhereItAppearsSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { PlansSection } from "./sections/PlansSection";
import { WhyAdvertiseSection } from "./sections/WhyAdvertiseSection";
import { FaqSection } from "./sections/FaqSection";
import { CtaFinalSection } from "./sections/CtaFinalSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { PrivacyModal } from "./components/PrivacyModal";
import { PlanCycle } from "./types";

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState<string>("DESTAQUE");
  const [selectedPlanCycle, setSelectedPlanCycle] =
    useState<PlanCycle>("anual");

  const handleSelectPlan = (planName: string, cycle: PlanCycle) => {
    setSelectedPlanName(planName);
    setSelectedPlanCycle(cycle);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#F8032D] selection:text-white flex flex-col">
      {/* 01 HEADER */}
      <Header />

      <main className="flex-grow">
        {/* 02 HERO */}
        <HeroSection />

        {/* 03 PROVA RÁPIDA / BENEFÍCIOS */}
        <BenefitsSection />

        {/* 04 ONDE SUA MARCA APARECE + MAPA */}
        <WhereItAppearsSection />

        {/* 06 COMO FUNCIONA */}
        <HowItWorksSection />

        {/* 07 PLANOS (START e DESTAQUE) */}
        <PlansSection onSelectPlan={handleSelectPlan} />

        {/* 08 POR QUE ANUNCIAR COM A VM MÍDIAS */}
        <WhyAdvertiseSection />

        {/* 10 FAQ */}
        <FaqSection />

        {/* 11 CTA FINAL */}
        <CtaFinalSection />

        {/* 12 CONTATO */}
        <ContactSection
          selectedPlanName={selectedPlanName}
          selectedPlanCycle={selectedPlanCycle}
        />
      </main>

      {/* 13 FOOTER */}
      <Footer onOpenPrivacyModal={() => setPrivacyModalOpen(true)} />

      {/* Floating WhatsApp Action Widget */}
      <WhatsAppButton />

      {/* Privacy Policy & LGPD Modal */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
