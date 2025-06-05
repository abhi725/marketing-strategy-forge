
import { Bot, MapPin, MessageCircle, BarChart, Globe, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SwanSuiteFeaturesGrid = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI Ad Writer',
      benefit: 'Generate high-converting ads in 1 click',
      description: 'Our AI analyzes your best performers and creates new ad variations automatically.',
      color: 'text-[#2F80ED]'
    },
    {
      icon: MapPin,
      title: 'Local SEO Wizard',
      benefit: 'Rank #1 for "near me" searches',
      description: 'Optimize your Google My Business and local citations with zero manual work.',
      color: 'text-green-600'
    },
    {
      icon: MessageCircle,
      title: 'Auto-Chatbot',
      benefit: 'Answer customer queries 24/7',
      description: 'Intelligent chatbot that qualifies leads and books appointments while you sleep.',
      color: 'text-purple-600'
    },
    {
      icon: BarChart,
      title: 'Smart CRM',
      benefit: 'Auto-tag and nurture leads',
      description: 'Automatically organize leads by source, behavior, and buying intent.',
      color: 'text-[#FF6B6B]'
    },
    {
      icon: Globe,
      title: 'Multi-Channel Ads',
      benefit: 'Google + Facebook + LinkedIn unified',
      description: 'Manage all your ad campaigns from one dashboard with cross-platform insights.',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      benefit: 'Real-time updates for your team',
      description: 'Share dashboards, assign tasks, and track performance across your entire team.',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[Poppins]">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop paying for 5+ separate tools. SwanSuite replaces your entire marketing stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={feature.title} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 ${feature.color} mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 font-[Poppins]">{feature.title}</CardTitle>
                  <p className={`text-sm font-semibold ${feature.color} italic`}>{feature.benefit}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 text-[#2F80ED] rounded-full text-sm font-medium">
            ⚡ Setup takes less than 5 minutes
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwanSuiteFeaturesGrid;
