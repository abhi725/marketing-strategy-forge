
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Transform Your Digital Presence,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Amplify Your Growth
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            We craft bespoke digital strategies that connect you with your audience, 
            drive engagement, and accelerate your business objectives through data-driven excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button asChild size="lg" className="marketing-gradient text-white px-8 py-4 text-lg font-semibold">
              <Link to="/contact">Get Your Free Strategy Audit</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-gray-300 px-8 py-4 text-lg font-semibold">
              <Link to="/about">Learn Our Story</Link>
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600">Successful Campaigns</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-gray-600">Average ROI Increase</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-400 to-purple-600 rounded-full opacity-10 -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-400 to-blue-600 rounded-full opacity-10 translate-y-24 -translate-x-24"></div>
    </section>
  );
};

export default HeroSection;
