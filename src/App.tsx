import { useState } from "react";
import { Route, Routes } from "react-router-dom";
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
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { AdminRequestsPage } from "./pages/AdminRequestsPage";
import {
  BusinessDetailPage,
  BusinessDirectoryPage,
  BusinessRegistrationPage,
} from "./pages/BusinessPortalPage";

export default function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminRequestsPage />} />
      <Route path="/admin/solicitacoes" element={<AdminRequestsPage />} />
      <Route path="/solicitar-video" element={<BusinessDirectoryPage />} />
      <Route path="/solicitar-video/novo-negocio" element={<BusinessRegistrationPage />} />
      <Route path="/solicitar-video/negocio/:businessId" element={<BusinessDetailPage />} />
      <Route path="/solicitar-video/novo-comercio" element={<BusinessRegistrationPage />} />
      <Route path="/solicitar-video/comercio/:businessId" element={<BusinessDetailPage />} />
      <Route path="/solicitar-video/novo-cliente" element={<BusinessRegistrationPage />} />
      <Route path="/solicitar-video/cliente-atual" element={<BusinessDirectoryPage />} />
      <Route path="/solicitar-arte" element={<BusinessDirectoryPage />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

function HomePage() {
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
