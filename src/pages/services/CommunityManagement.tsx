
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Activity, Shield, MessageSquare, Users, Clock, Star, AlertTriangle } from 'lucide-react';

const CommunityManagement = () => {
  const services = [
    {
      icon: Users,
      title: 'Community Building',
      description: 'Create and nurture thriving communities around your brand across multiple platforms.',
      features: ['Platform Setup', 'Member Onboarding', 'Community Guidelines', 'Growth Strategies']
    },
    {
      icon: MessageSquare,
      title: 'Engagement Management',
      description: 'Foster meaningful interactions and maintain active, engaged community participation.',
      features: ['Daily Engagement', 'Content Moderation', 'Discussion Facilitation', 'Member Support']
    },
    {
      icon: Shield,
      title: 'Reputation Management',
      description: 'Protect and enhance your brand reputation through proactive community management.',
      features: ['Review Monitoring', 'Crisis Response', 'Brand Protection', 'Sentiment Analysis']
    },
    {
      icon: AlertTriangle,
      title: 'Crisis Management',
      description: 'Handle challenging situations and negative feedback with professional crisis management.',
      features: ['Rapid Response', 'Escalation Protocols', 'Damage Control', 'Recovery Strategies']
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Brand Loyalty',
      description: 'Build stronger relationships and increase customer loyalty through community engagement.'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Round-the-clock community monitoring ensures no important interaction is missed.'
    },
    {
      icon: Activity,
      title: 'Increased Engagement',
      description: 'Drive higher engagement rates and more meaningful customer interactions.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-600 text-white mb-6">
              <Activity className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Community Management
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Foster loyal communities around your brand with expert moderation, engagement strategies, 
              and professional reputation management across all platforms.
            </p>
            <Button asChild size="lg" className="marketing-gradient text-white">
              <Link to="/contact">Build Your Community</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Community Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Complete community management solutions for stronger brand relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-50 text-orange-600 mr-4">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <ul className="text-sm text-gray-500 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
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
              Why Community Management Matters
            </h2>
            <p className="text-lg text-gray-600">
              Build stronger relationships and protect your brand reputation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-600 text-white mb-6">
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

      {/* Community Management Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Community Management Approach
            </h2>
            <p className="text-lg text-gray-600">
              A strategic approach to building and managing online communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: '01',
                title: 'Community Audit', 
                description: 'Analyze your current community presence and identify opportunities for growth.',
              },
              { 
                step: '02',
                title: 'Strategy Development', 
                description: 'Create a comprehensive community management strategy aligned with your goals.',
              },
              { 
                step: '03',
                title: 'Implementation', 
                description: 'Execute daily community management activities and engagement strategies.',
              },
              { 
                step: '04',
                title: 'Optimization', 
                description: 'Continuously optimize based on community feedback and performance metrics.',
              }
            ].map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-600 text-white text-lg font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included in Our Service
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Daily community monitoring',
              'Content moderation',
              'Member engagement',
              'Crisis response planning',
              'Monthly performance reports',
              'Reputation monitoring',
              'Community growth strategies',
              'Brand voice consistency',
              'Escalation management'
            ].map((feature, index) => (
              <div key={feature} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-4"></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build a Thriving Community?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create and manage a community that drives brand loyalty and business growth.
          </p>
          <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            <Link to="/contact">Start Community Management</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CommunityManagement;
