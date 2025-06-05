
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle } from 'lucide-react';

const UrgencyOfferSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
            <Clock className="w-4 h-4 mr-2" />
            Limited Time Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join 5,000+ Businesses Growing with SwanDigitals
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your free 14-day trial today - No setup fees, no contracts, cancel anytime
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-300" />
            <span>Full access to all features</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-300" />
            <span>Personal account manager</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-300" />
            <span>24/7 priority support</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            <Link to="/contact">Start Your Free Trial</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>

        <p className="text-sm text-blue-200 mt-4">
          ⚡ Setup takes less than 5 minutes • No credit card required
        </p>
      </div>
    </section>
  );
};

export default UrgencyOfferSection;
