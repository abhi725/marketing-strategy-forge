
import { Shield, Award, Users, Clock } from 'lucide-react';

const TrustBadgesSection = () => {
  const badges = [
    {
      icon: Shield,
      text: "PCI-Compliant Security"
    },
    {
      icon: Award,
      text: "Google Premier Partner"
    },
    {
      icon: Users,
      text: "500+ Happy Clients"
    },
    {
      icon: Clock,
      text: "24/7 Support Available"
    }
  ];

  return (
    <section className="py-8 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div key={index} className="flex items-center space-x-2 text-gray-600">
                <IconComponent className="w-5 h-5" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
