
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="flex justify-center items-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
            <span className="text-gray-600 ml-2">Rated 4.9/5 by 200+ clients</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of businesses that have accelerated their growth with SwanDigitals. 
            Start your free trial today and see results within 30 days.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
            <Link to="/contact">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-2 border-gray-300 px-8 py-4 text-lg font-semibold">
            <Link to="/services">See Pricing</Link>
          </Button>
        </div>

        <div className="text-sm text-gray-500 space-y-2">
          <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
          <p>✓ 90-day money-back guarantee • ✓ PCI-compliant security</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
