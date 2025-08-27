import ShopDevicesSection from "@/components/shop-divice-section/shop-devices-section";
import PortfolioSection from "@/components/portfolio-section/portfolio-section";
import AiInnovationSection from "@/components/ai-innovation-section/ai-innovation-section";
import GenerativeAISection from "@/components/generative-ai-section/generative-ai-section";
import TrustedClientsSection from "@/components/trusted-clients-section/trusted-clients-section";
import TechnologiesSection from "@/components/technologies-section/technologies-section";
import { ServicesSection } from "@/components/service-section/services-section";
import HomePageLayout from "@/app/AppLayouts/homePage-layout";

export default function HomePage() {
  return (
    <HomePageLayout>
      <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
        <GenerativeAISection />
        <div className="max-w-[80%]">
          <ShopDevicesSection />
          <TechnologiesSection />
          <PortfolioSection />
          <AiInnovationSection />
          <ServicesSection />
        </div>
        <TrustedClientsSection />
      </main>
    </HomePageLayout>
  );
}
