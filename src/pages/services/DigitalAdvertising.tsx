
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BarChart, Target, TrendingUp, MousePointer, DollarSign, Users, Activity } from 'lucide-react';

const DigitalAdvertising = () => {
  const services = [
    {
      icon: Target,
      title: 'Google Ads Management',
      description: 'Expert Google Ads campaigns that drive qualified traffic and maximize your advertising ROI.',
      features: ['Search Campaigns', 'Display Network', 'Shopping Ads', 'YouTube Advertising']
    },
    {
      icon: Users,
      title: 'Social Media Advertising',
      description: 'Targeted social media campaigns across Facebook, Instagram, LinkedIn, and other platforms.',
      features: ['Facebook & Instagram Ads', 'LinkedIn Advertising', 'Twitter Ads', 'TikTok Marketing']
    },
    {
      icon: MousePointer,
      title: 'Retargeting Campaigns',
      description: 'Re-engage website visitors and past customers with strategic retargeting campaigns.',
      features: ['Website Retargeting', 'Email Retargeting', 'Dynamic Product Ads', 'Cross-Platform Tracking']
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Increased ROI',
      description: 'Data-driven optimization ensures every dollar spent generates maximum return.'
    },
    {
      icon: TrendingUp,
      title: 'Rapid Growth',
      description: 'Scale your business quickly with targeted advertising campaigns.'
    },
    {
      icon: Activity,
      title: 'Real-Time Analytics',
      description: 'Track performance in real-time and make data-driven decisions.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-600 text-white mb-6">
              <BarChart className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Advertising Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Data-driven PPC and paid media campaigns that maximize your ROI and reach the right 
              customers at the right time with precision targeting.
            </p>
            <Button asChild size="lg" className="marketing-gradient text-white">
              <Link to="/contact">Launch Your Campaigns</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Advertising Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive paid advertising solutions across all major platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-50 text-purple-600 mb-4 mx-auto">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <ul className="text-sm text-gray-500 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Digital Advertising
            </h2>
            <p className="text-lg text-gray-600">
              Drive measurable results with expert campaign management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 text-white mb-6">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Digital Advertising Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: '300%', label: 'Average ROI Increase' },
              { stat: '150%', label: 'Lead Generation Growth' },
              { stat: '45%', label: 'Cost Per Click Reduction' },
              { stat: '200+', label: 'Successful Campaigns' }
            ].map((item, index) => (
              <div key={item.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">{item.stat}</div>
                <div className="text-gray-600 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Scale Your Business with Paid Advertising?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create high-converting ad campaigns that drive real business growth.
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            <Link to="/contact">Get Your Free Ad Account Audit</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default DigitalAdvertising;
