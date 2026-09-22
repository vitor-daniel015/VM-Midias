import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./sections/HeroSection";
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
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <WhereItAppearsSection />
        <HowItWorksSection />
        <PlansSection onSelectPlan={handleSelectPlan} />
        <WhyAdvertiseSection />
        <FaqSection />
        <CtaFinalSection />
        <ContactSection
          selectedPlanName={selectedPlanName}
          selectedPlanCycle={selectedPlanCycle}
        />
      </main>

      <Footer onOpenPrivacyModal={() => setPrivacyModalOpen(true)} />
      <WhatsAppButton />
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
