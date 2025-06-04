
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BarChart, MessageSquare, Users, Globe, Activity, Target, TrendingUp, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: 'Content Marketing',
      description: 'Strategic content that engages your audience and drives conversions through compelling storytelling and valuable insights.',
      features: ['Blog Writing', 'Video Content', 'Infographics', 'Content Strategy'],
      link: '/services/content-marketing',
      color: 'text-blue-600'
    },
    {
      icon: BarChart,
      title: 'Digital Advertising',
      description: 'Data-driven PPC and paid media campaigns that maximize your ROI and reach the right customers at the right time.',
      features: ['Google Ads', 'Facebook Ads', 'Display Advertising', 'Retargeting'],
      link: '/services/digital-advertising',
      color: 'text-purple-600'
    },
    {
      icon: Globe,
      title: 'SEO Services',
      description: 'Comprehensive search engine optimization that improves your visibility and drives organic traffic to your website.',
      features: ['Technical SEO', 'Keyword Research', 'Link Building', 'Local SEO'],
      link: '/services/seo',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Build meaningful connections with your audience across all major social platforms through strategic content and engagement.',
      features: ['Strategy Development', 'Content Creation', 'Community Building', 'Analytics'],
      link: '/services/social-media',
      color: 'text-pink-600'
    },
    {
      icon: Activity,
      title: 'Community Management',
      description: 'Foster loyal communities around your brand with expert moderation, engagement strategies, and reputation management.',
      features: ['Community Building', 'Reputation Management', 'Engagement Strategy', 'Crisis Management'],
      link: '/services/community-management',
      color: 'text-orange-600'
    }
  ];

  const additionalServices = [
    {
      icon: Target,
      title: 'Marketing Strategy',
      description: 'Comprehensive marketing strategies tailored to your business goals.',
      color: 'text-red-600'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to optimize your marketing performance.',
      color: 'text-indigo-600'
    },
    {
      icon: Zap,
      title: 'Conversion Optimization',
      description: 'Optimize your website and campaigns for maximum conversions.',
      color: 'text-yellow-600'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Digital Marketing <span className="text-transparent bg-clip-text marketing-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive digital marketing solutions designed to accelerate your business growth and establish your brand as an industry leader.
          </p>
          <Button asChild size="lg" className="marketing-gradient text-white">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Services
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to dominate your digital market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
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
                    <ul className="text-sm text-gray-500 mb-6 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature}>• {feature}</li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Link to={service.link}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600">
              Specialized solutions to complement your marketing strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 ${service.color} mb-4 mx-auto`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our proven strategies can accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
