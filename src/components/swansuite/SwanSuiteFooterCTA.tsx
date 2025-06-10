
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Calendar, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const SwanSuiteFooterCTA = () => {
  const [signupsLeft, setSignupsLeft] = useState(23); // Mock countdown
  const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 32 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        let newMinutes = prev.minutes - 1;
        let newHours = prev.hours;
        
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours = newHours > 0 ? newHours - 1 : 47; // Reset cycle
        }
        
        return { hours: newHours, minutes: newMinutes };
      });
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Risk Reversal Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center px-6 py-3 bg-green-100 border border-green-200 rounded-full">
            <Shield className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-800 font-semibold">90-Day Money-Back Guarantee</span>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[Poppins]">
            Ready to Escape Marketing Tool Hell?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join 12,000+ agencies using SwanSuite to 10x their marketing efficiency.
            Start your free trial today—no credit card needed.
          </p>
        </div>

        {/* Scarcity Element */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Clock className="w-5 h-5 text-orange-600" />
            <span className="text-orange-800 font-semibold">Limited Time Offer</span>
          </div>
          <div className="text-2xl font-bold text-orange-900 mb-2">
            Free Onboarding for First {signupsLeft} Signups
          </div>
          <div className="text-sm text-orange-700">
            Only {timeLeft.hours}h {timeLeft.minutes}m left at this price
          </div>
          <div className="w-full bg-orange-200 rounded-full h-2 mt-3">
            <div 
              className="bg-orange-600 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${(signupsLeft / 50) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {/* Primary CTA */}
          <Button asChild size="lg" className="bg-[#2F80ED] hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold group">
            <Link to="/contact" className="flex items-center">
              Start Free Trial—No Credit Card Needed
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          {/* Secondary CTA */}
          <Button asChild variant="outline" size="lg" className="border-2 border-[#2F80ED] text-[#2F80ED] hover:bg-[#2F80ED] hover:text-white px-8 py-4 text-lg font-semibold group">
            <Link to="/contact" className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Book Demo
            </Link>
          </Button>
        </div>

        {/* Trust Indicators */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-xs">✓</span>
              </div>
              <span>"SwanSuite replaced 6 tools and saved us $800/month"</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xs">✓</span>
              </div>
              <span>"Finally, a platform that actually works"</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-xs">✓</span>
              </div>
              <span>"Cut our ops costs by 40%"</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwanSuiteFooterCTA;
