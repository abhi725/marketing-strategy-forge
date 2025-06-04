
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare, FileText, Video, Image, BarChart, Users, Target } from 'lucide-react';

const ContentMarketing = () => {
  const services = [
    {
      icon: FileText,
      title: 'Blog Writing & SEO Content',
      description: 'High-quality, SEO-optimized blog posts that establish thought leadership and drive organic traffic.',
      features: ['Keyword Research', 'SEO Optimization', 'Industry Expertise', 'Content Calendar']
    },
    {
      icon: Video,
      title: 'Video Content Creation',
      description: 'Engaging video content for social media, websites, and advertising campaigns.',
      features: ['Script Writing', 'Video Production', 'Post-Production', 'Platform Optimization']
    },
    {
      icon: Image,
      title: 'Visual Content & Infographics',
      description: 'Eye-catching infographics and visual content that simplify complex information.',
      features: ['Data Visualization', 'Brand Consistency', 'Social Media Graphics', 'Interactive Content']
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Increased Brand Awareness',
      description: 'Build recognition and establish your brand as an industry authority.'
    },
    {
      icon: Users,
      title: 'Audience Engagement',
      description: 'Create meaningful connections with your target audience through valuable content.'
    },
    {
      icon: BarChart,
      title: 'Lead Generation',
      description: 'Convert content consumers into qualified leads for your business.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 text-white mb-6">
              <MessageSquare className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Content Marketing Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Strategic content that engages your audience, builds trust, and drives conversions through 
              compelling storytelling and valuable insights.
            </p>
            <Button asChild size="lg" className="marketing-gradient text-white">
              <Link to="/contact">Start Your Content Strategy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Content Marketing Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive content solutions tailored to your business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-4 mx-auto">
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
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
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
              Why Content Marketing Works
            </h2>
            <p className="text-lg text-gray-600">
              Drive real business results with strategic content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-6">
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Content Marketing Process
            </h2>
            <p className="text-lg text-gray-600">
              A proven methodology that delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Strategy Development', description: 'We analyze your audience and create a comprehensive content strategy.' },
              { step: '02', title: 'Content Creation', description: 'Our expert team creates high-quality, engaging content tailored to your brand.' },
              { step: '03', title: 'Distribution', description: 'We distribute your content across the most effective channels for maximum reach.' },
              { step: '04', title: 'Optimization', description: 'We continuously analyze performance and optimize for better results.' }
            ].map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-lg font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create content that drives real business results for your brand.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link to="/contact">Get Your Free Content Audit</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ContentMarketing;
