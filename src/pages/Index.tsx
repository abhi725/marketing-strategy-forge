
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import SocialProofSection from '@/components/SocialProofSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ServicesOverview from '@/components/ServicesOverview';
import TrustBadgesSection from '@/components/TrustBadgesSection';
import UrgencyOfferSection from '@/components/UrgencyOfferSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustBadgesSection />
      <ProblemSolutionSection />
      <SocialProofSection />
      <HowItWorksSection />
      <ServicesOverview />
      <UrgencyOfferSection />
      <FAQSection />
      <FinalCTASection />
    </Layout>
  );
};

export default Index;
