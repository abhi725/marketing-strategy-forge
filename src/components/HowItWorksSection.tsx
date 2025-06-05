
import { UserPlus, BarChart, TrendingUp } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      number: "01",
      title: "Free Strategy Audit",
      description: "We analyze your current digital presence and identify growth opportunities with a comprehensive audit.",
      color: "bg-blue-600"
    },
    {
      icon: BarChart,
      number: "02", 
      title: "Custom Strategy Development",
      description: "Our experts create a tailored digital marketing strategy based on your goals, industry, and target audience.",
      color: "bg-purple-600"
    },
    {
      icon: TrendingUp,
      number: "03",
      title: "Execute & Optimize",
      description: "We implement campaigns, monitor performance, and continuously optimize for maximum ROI and growth.",
      color: "bg-green-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How SwanDigitals Transforms Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our proven 3-step process has helped 500+ businesses achieve predictable growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className="relative text-center">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 right-0 w-full h-0.5 bg-gray-200 transform translate-x-1/2 z-0"></div>
                )}
                
                <div className="relative z-10">
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-600">{step.number}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 text-blue-800 rounded-full text-sm font-medium">
            ⚡ Most clients see results within 30-60 days
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
