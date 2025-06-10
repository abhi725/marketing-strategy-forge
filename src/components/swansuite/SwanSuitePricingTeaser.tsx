
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Lock, ArrowRight } from 'lucide-react';

const SwanSuitePricingTeaser = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const monthlyPrice = 299;
  const annualPrice = Math.round(monthlyPrice * 0.8); // 20% off
  const displayPrice = isAnnual ? annualPrice : monthlyPrice;
  const savings = isAnnual ? monthlyPrice - annualPrice : 0;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[Poppins]">
            Enterprise Power at Startup Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get all the tools Fortune 500 companies use, at a fraction of the cost
          </p>
        </div>

        {/* Animated Price Toggle */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className={`text-lg font-medium transition-colors ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#2F80ED] focus:ring-offset-2 ${
                isAnnual ? 'bg-[#2F80ED]' : 'bg-gray-300'
              }`}
              role="switch"
              aria-checked={isAnnual}
              aria-label="Toggle between monthly and annual pricing"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium transition-colors ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full animate-fade-in">
                Save 20%
              </span>
            )}
          </div>

          <div className="text-center">
            <div className="text-5xl font-bold text-[#2F80ED] mb-2 transition-all duration-300">
              ${displayPrice}
              <span className="text-2xl text-gray-500 font-normal">
                /{isAnnual ? 'mo' : 'month'}
              </span>
            </div>
            {isAnnual && (
              <div className="text-green-600 font-medium animate-fade-in">
                Save ${savings * 12}/year
              </div>
            )}
            <p className="text-gray-600 mt-4">
              Everything you need to scale your agency
            </p>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-[#2F80ED] rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
            <span className="text-gray-700 font-medium">Multi-platform ads</span>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-[#2F80ED] rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
            <span className="text-gray-700 font-medium">AI-powered CRM</span>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-[#2F80ED] rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
            <span className="text-gray-700 font-medium">White-label ready</span>
          </div>
        </div>

        {/* CTA with Lock Animation */}
        <Button asChild size="lg" className="bg-[#2F80ED] hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold group">
          <Link to="#pricing" className="flex items-center">
            <Lock className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            See Full Pricing
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>

        <p className="text-sm text-gray-500 mt-4">
          7-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default SwanSuitePricingTeaser;
