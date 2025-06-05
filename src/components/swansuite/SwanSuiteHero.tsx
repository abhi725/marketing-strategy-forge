
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const SwanSuiteHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                🚀 Trusted by 500+ Brands
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-[Poppins]">
                Finally—All Your Marketing Tools in{' '}
                <span className="text-[#2F80ED]">One Place</span>
                <br />
                <span className="text-gray-600">(No More Tab Hell)</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Run ads, track leads, and automate chats from a single dashboard. 
              10x faster. Zero chaos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                asChild 
                size="lg" 
                className="bg-[#2F80ED] hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
              >
                <Link to="/contact">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 px-8 py-4 text-lg font-semibold"
              >
                <Link to="#demo">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>
            
            <div className="text-sm text-gray-500">
              ✓ 7-day free trial • ✓ No credit card needed • ✓ Cancel anytime
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-500">SwanSuite Dashboard</div>
                  <div className="text-green-600 text-sm font-medium">↗ Live Data</div>
                </div>
                
                {/* Google Ads + CRM Side by Side */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-lg p-4 text-white">
                    <div className="text-xs font-medium mb-2">Google Ads</div>
                    <div className="text-lg font-bold">$2,450</div>
                    <div className="text-xs opacity-90">Revenue Today</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg p-4 text-white">
                    <div className="text-xs font-medium mb-2">CRM Leads</div>
                    <div className="text-lg font-bold">47</div>
                    <div className="text-xs opacity-90">New This Week</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#2F80ED] to-blue-600 rounded-lg p-4 text-white">
                  <div className="text-xs font-medium mb-2">AI Chatbot</div>
                  <div className="text-sm">"How can I help you today?" 💬</div>
                  <div className="text-xs opacity-90 mt-1">89% Customer Satisfaction</div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <div className="font-bold text-[#2F80ED]">250%</div>
                    <div className="text-gray-500">ROI Boost</div>
                  </div>
                  <div>
                    <div className="font-bold text-green-600">92%</div>
                    <div className="text-gray-500">Time Saved</div>
                  </div>
                  <div>
                    <div className="font-bold text-purple-600">5.2x</div>
                    <div className="text-gray-500">Lead Quality</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#2F80ED] rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#FF6B6B] rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwanSuiteHero;
