
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, MessageSquare, Users, Globe, Activity } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: MessageSquare,
      title: 'Content Marketing',
      description: 'Strategic content that engages your audience and drives conversions through compelling storytelling and valuable insights.',
      link: '/services/content-marketing',
      color: 'text-blue-600'
    },
    {
      icon: BarChart,
      title: 'Digital Advertising',
      description: 'Data-driven PPC and paid media campaigns that maximize your ROI and reach the right customers at the right time.',
      link: '/services/digital-advertising',
      color: 'text-purple-600'
    },
    {
      icon: Globe,
      title: 'SEO Services',
      description: 'Comprehensive search engine optimization that improves your visibility and drives organic traffic to your website.',
      link: '/services/seo',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Build meaningful connections with your audience across all major social platforms through strategic content and engagement.',
      link: '/services/social-media',
      color: 'text-pink-600'
    },
    {
      icon: Activity,
      title: 'Community Management',
      description: 'Foster loyal communities around your brand with expert moderation, engagement strategies, and reputation management.',
      link: '/services/community-management',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Digital Marketing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to accelerate your business growth and establish your brand as an industry leader.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.title} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 ${service.color} mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button asChild variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="marketing-gradient text-white px-8 py-4 text-lg font-semibold">
            <Link to="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
