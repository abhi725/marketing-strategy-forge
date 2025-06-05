
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, Users, TrendingUp } from 'lucide-react';

const SwanSuiteUrgency = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#FF6B6B] to-red-500 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
            <Clock className="w-4 h-4 mr-2" />
            Limited Time Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[Poppins]">
            Get 3 Months Free When You Sign Up Today
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join 500+ brands who switched last month. This offer expires soon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center space-y-2">
            <Users className="w-8 h-8 text-white" />
            <div className="text-2xl font-bold">42</div>
            <div className="text-sm text-red-100">Spots left at $99/mo</div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <TrendingUp className="w-8 h-8 text-white" />
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm text-red-100">Brands switched last month</div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Clock className="w-8 h-8 text-white" />
            <div className="text-2xl font-bold">5 min</div>
            <div className="text-sm text-red-100">Average setup time</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button asChild size="lg" className="bg-white text-[#FF6B6B] hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            <Link to="/contact">Claim Your 3 Free Months</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-[#FF6B6B] px-8 py-4 text-lg font-semibold">
            <Link to="#demo">Watch Demo First</Link>
          </Button>
        </div>

        <div className="space-y-2 text-sm text-red-100">
          <p>🔒 Risk-free: 7-day free trial • No credit card required</p>
          <p>💰 Money-back guarantee • SOC 2 compliant</p>
        </div>
      </div>
    </section>
  );
};

export default SwanSuiteUrgency;
