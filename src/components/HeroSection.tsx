
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            {/* Headline Options */}
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                🚀 Trusted by 500+ Growing Businesses
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Stop Losing Customers to{' '}
                <span className="text-blue-600">Poor Digital Marketing</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              SwanDigitals transforms struggling businesses into digital success stories. 
              Get more leads, higher conversions, and measurable ROI in just 90 days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                <Link to="/contact">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-gray-300 px-8 py-4 text-lg font-semibold">
                <Link to="/site-audit">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="text-sm text-gray-500">
              ✓ No setup fees • ✓ 14-day free trial • ✓ Cancel anytime
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-500">Marketing Dashboard</div>
                  <div className="text-green-600 text-sm font-medium">↗ +47% Growth</div>
                </div>
                <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold">
                  Live Analytics Preview
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">150%</div>
                    <div className="text-xs text-gray-500">ROI Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">89%</div>
                    <div className="text-xs text-gray-500">Lead Quality</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">3.2x</div>
                    <div className="text-xs text-gray-500">Conversion Rate</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
