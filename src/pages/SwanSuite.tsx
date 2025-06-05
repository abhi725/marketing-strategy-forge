
import Layout from '@/components/Layout';
import SwanSuiteHero from '@/components/swansuite/SwanSuiteHero';
import SwanSuitePainSolution from '@/components/swansuite/SwanSuitePainSolution';
import SwanSuiteSocialProof from '@/components/swansuite/SwanSuiteSocialProof';
import SwanSuiteFeaturesGrid from '@/components/swansuite/SwanSuiteFeaturesGrid';
import SwanSuiteDemoVideo from '@/components/swansuite/SwanSuiteDemoVideo';
import SwanSuitePricing from '@/components/swansuite/SwanSuitePricing';
import SwanSuiteUrgency from '@/components/swansuite/SwanSuiteUrgency';
import SwanSuiteFAQ from '@/components/swansuite/SwanSuiteFAQ';
import SwanSuiteFooterCTA from '@/components/swansuite/SwanSuiteFooterCTA';

const SwanSuite = () => {
  return (
    <Layout>
      <SwanSuiteHero />
      <SwanSuitePainSolution />
      <SwanSuiteSocialProof />
      <SwanSuiteFeaturesGrid />
      <SwanSuiteDemoVideo />
      <SwanSuitePricing />
      <SwanSuiteUrgency />
      <SwanSuiteFAQ />
      <SwanSuiteFooterCTA />
    </Layout>
  );
};

export default SwanSuite;
