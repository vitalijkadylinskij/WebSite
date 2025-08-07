import NewsSection from "@/components/news-section/news-section";
import ShopDevicesSection from "@/components/shop-divice-section/shop-devices-section";
import ConnectSection from "@/components/connect-section/connect-section";
import ActionsSection from "@/components/actions-section/actions-section";
import LeadershipSection from "@/components/leadership-section/leadership-section";
import GenerativeAISection from "@/components/generative-ai-section/generative-ai-section";
import TrustedClientsSection from "@/components/trusted-clients-section/trusted-clients-section";
import LanguageSwitcher from "@/components/language-switcher";

export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
      <GenerativeAISection />
      <div className="max-w-[80%]">
        <NewsSection />
        <ShopDevicesSection />
        <ConnectSection />
        <ActionsSection />
        <LeadershipSection />
      </div>
      <TrustedClientsSection />
    </main>
  );
}
