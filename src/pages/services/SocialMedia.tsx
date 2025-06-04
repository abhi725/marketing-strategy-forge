
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Heart, MessageCircle, Share2, BarChart, Camera, Calendar } from 'lucide-react';

const SocialMedia = () => {
  const services = [
    {
      icon: Calendar,
      title: 'Strategy Development',
      description: 'Comprehensive social media strategies tailored to your brand and audience.',
      features: ['Platform Selection', 'Content Planning', 'Audience Analysis', 'Goal Setting']
    },
    {
      icon: Camera,
      title: 'Content Creation',
      description: 'Engaging visual and written content that resonates with your target audience.',
      features: ['Graphic Design', 'Video Content', 'Copywriting', 'Brand Consistency']
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Build and nurture an engaged community around your brand across all platforms.',
      features: ['Audience Engagement', 'Follower Growth', 'Community Management', 'Influencer Outreach']
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Track performance and optimize your social media presence based on data insights.',
      features: ['Performance Tracking', 'ROI Analysis', 'Competitor Monitoring', 'Monthly Reports']
    }
  ];

  const platforms = [
    { name: 'Facebook', icon: '📘', description: 'Build community and drive engagement' },
    { name: 'Instagram', icon: '📷', description: 'Visual storytelling and brand awareness' },
    { name: 'LinkedIn', icon: '💼', description: 'B2B networking and thought leadership' },
    { name: 'Twitter', icon: '🐦', description: 'Real-time engagement and customer service' },
    { name: 'TikTok', icon: '🎵', description: 'Creative content for younger audiences' },
    { name: 'YouTube', icon: '📹', description: 'Video content and educational material' }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Brand Awareness',
      description: 'Increase visibility and recognition across social platforms.'
    },
    {
      icon: MessageCircle,
      title: 'Customer Engagement',
      description: 'Build meaningful relationships with your audience.'
    },
    {
      icon: Share2,
      title: 'Lead Generation',
      description: 'Convert social media followers into qualified leads.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-pink-600 text-white mb-6">
              <Users className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Social Media Marketing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Build meaningful connections with your audience across all major social platforms 
              through strategic content creation and community engagement.
            </p>
            <Button asChild size="lg" className="marketing-gradient text-white">
              <Link to="/contact">Grow Your Social Presence</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Social Media Services
            </h2>
            <p className="text-lg text-gray-600">
              Complete social media management to grow your online presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-50 text-pink-600 mr-4">
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
                          <span className="w-2 h-2 bg-pink-600 rounded-full mr-3"></span>
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

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platforms We Manage
            </h2>
            <p className="text-lg text-gray-600">
              Expert management across all major social media platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <Card key={platform.name} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-4xl mb-2">{platform.icon}</div>
                  <CardTitle className="text-lg font-bold text-gray-900">{platform.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{platform.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Social Media Marketing
            </h2>
            <p className="text-lg text-gray-600">
              Drive real business results through social media
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-600 text-white mb-6">
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

      {/* CTA Section */}
      <section className="py-20 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Social Media Presence?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create a social media strategy that engages your audience and drives results.
          </p>
          <Button asChild size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
            <Link to="/contact">Start Your Social Strategy</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SocialMedia;
