import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import OverviewSection from '@/components/OverviewSection';
import SchoolCasesSection from '@/components/SchoolCasesSection';
import ImprovementAreasSection from '@/components/ImprovementAreasSection';
import UXImprovementsSection from '@/components/UXImprovementsSection';
import FutureDirectionSection from '@/components/FutureDirectionSection';
import Footer from '@/components/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function Home() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <Header />
        <HeroSection />
        <OverviewSection />
        <SchoolCasesSection />
        <ImprovementAreasSection />
        <UXImprovementsSection />
        <FutureDirectionSection />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}