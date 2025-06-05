
import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';

const TrustBadgesSection = () => {
  const badges = [
    {
      icon: Shield,
      text: "SOC 2 Compliant",
      description: "Enterprise-grade security"
    },
    {
      icon: Award,
      text: "Google Premier Partner",
      description: "Certified expertise"
    },
    {
      icon: Users,
      text: "500+ Happy Clients",
      description: "Proven track record"
    },
    {
      icon: Clock,
      text: "24/7 Support",
      description: "Always here to help"
    },
    {
      icon: CheckCircle,
      text: "99.9% Uptime SLA",
      description: "Reliable service"
    },
    {
      icon: Star,
      text: "4.9/5 Rating",
      description: "Client satisfaction"
    }
  ];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Trusted by Leading Businesses
          </h2>
          <p className="text-gray-600">
            Join hundreds of companies that trust SwanDigitals with their growth
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div key={index} className="text-center group hover:scale-105 transition-transform">
                <div className="flex flex-col items-center space-y-3 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                    <IconComponent className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">{badge.text}</div>
                    <div className="text-xs text-gray-500">{badge.description}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" 
                alt="Google Partner"
                className="w-6 h-6"
              />
              <span className="text-sm text-gray-600 font-medium">Google Partner</span>
            </div>
            <div className="flex items-center space-x-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png" 
                alt="Meta Business Partner"
                className="w-6 h-6"
              />
              <span className="text-sm text-gray-600 font-medium">Meta Business Partner</span>
            </div>
            <div className="flex items-center space-x-2">
              <img 
                src="https://cdn.worldvectorlogo.com/logos/hubspot.svg" 
                alt="HubSpot Certified"
                className="w-6 h-6"
              />
              <span className="text-sm text-gray-600 font-medium">HubSpot Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
