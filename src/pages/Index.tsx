import StickyHeader from "@/components/landing/StickyHeader";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ModulesSection from "@/components/landing/ModulesSection";
import SpecialistSection from "@/components/landing/SpecialistSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import OfferSection from "@/components/landing/OfferSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import FloatingWhatsApp from "@/components/landing/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      <HeroSection />
      <BenefitsSection />
      <ModulesSection />
      <SpecialistSection />
      <SocialProofSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
