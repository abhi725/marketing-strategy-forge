
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield } from 'lucide-react';

const SwanSuiteFooterCTA = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[Poppins]">
            Ready to Escape Marketing Tool Hell?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join 500+ businesses using SwanSuite to 10x their marketing efficiency.
            Start your free trial today—no credit card needed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button asChild size="lg" className="bg-[#2F80ED] hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
            <Link to="/contact">
              Start Free Trial—No Credit Card Needed
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span>✓ 7-day free trial</span>
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <Shield className="w-4 h-4" />
            <span>SOC 2 compliant • 99.9% uptime • 24/7 support</span>
          </div>
          
          <p className="text-sm text-gray-500 italic">
            "SwanSuite replaced 6 tools and saved us $800/month" - Marketing Director
          </p>
        </div>
      </div>
    </section>
  );
};

export default SwanSuiteFooterCTA;
