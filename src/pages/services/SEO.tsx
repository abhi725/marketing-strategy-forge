
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Globe, Search, TrendingUp, FileSearch, MapPin, Link as LinkIcon, BarChart } from 'lucide-react';

const SEO = () => {
  const services = [
    {
      icon: FileSearch,
      title: 'Technical SEO',
      description: 'Optimize your website\'s technical foundation for better search engine crawling and indexing.',
      features: ['Site Speed Optimization', 'Mobile Responsiveness', 'Schema Markup', 'XML Sitemaps']
    },
    {
      icon: Search,
      title: 'Keyword Research & Strategy',
      description: 'Comprehensive keyword research to target the right terms for your business.',
      features: ['Competitor Analysis', 'Long-tail Keywords', 'Search Intent Analysis', 'Keyword Mapping']
    },
    {
      icon: LinkIcon,
      title: 'Link Building',
      description: 'Build high-quality backlinks to improve your domain authority and search rankings.',
      features: ['Guest Posting', 'Resource Link Building', 'Broken Link Building', 'Digital PR']
    },
    {
      icon: MapPin,
      title: 'Local SEO',
      description: 'Optimize your online presence for local searches and Google My Business.',
      features: ['Google My Business', 'Local Citations', 'Review Management', 'Local Content']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Organic Traffic',
      description: 'Drive more qualified visitors to your website through improved search rankings.'
    },
    {
      icon: BarChart,
      title: 'Better ROI',
      description: 'SEO provides long-term results and better ROI compared to paid advertising.'
    },
    {
      icon: Globe,
      title: 'Enhanced Online Visibility',
      description: 'Increase your brand\'s visibility across all search engines and local directories.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-600 text-white mb-6">
              <Globe className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              SEO Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive search engine optimization that improves your visibility and drives 
              organic traffic to your website through proven SEO strategies.
            </p>
            <Button asChild size="lg" className="marketing-gradient text-white">
              <Link to="/contact">Boost Your Rankings</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our SEO Services
            </h2>
            <p className="text-lg text-gray-600">
              Complete SEO solutions to dominate search engine results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-50 text-green-600 mr-4">
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
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
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
              Why SEO Matters for Your Business
            </h2>
            <p className="text-lg text-gray-600">
              Long-term growth through organic search optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white mb-6">
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

      {/* SEO Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our SEO Process
            </h2>
            <p className="text-lg text-gray-600">
              A systematic approach to improving your search rankings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                phase: 'Phase 1',
                title: 'SEO Audit & Analysis', 
                description: 'Comprehensive analysis of your current SEO performance and competitor research.',
                duration: '1-2 weeks'
              },
              { 
                phase: 'Phase 2',
                title: 'Strategy & Implementation', 
                description: 'Develop and implement a customized SEO strategy based on audit findings.',
                duration: '2-4 weeks'
              },
              { 
                phase: 'Phase 3',
                title: 'Monitoring & Optimization', 
                description: 'Continuous monitoring and optimization to improve rankings and traffic.',
                duration: 'Ongoing'
              }
            ].map((phase, index) => (
              <Card key={phase.phase} className="text-center">
                <CardHeader>
                  <div className="text-sm text-green-600 font-semibold mb-2">{phase.phase}</div>
                  <CardTitle className="text-lg font-bold text-gray-900">{phase.title}</CardTitle>
                  <div className="text-sm text-gray-500">{phase.duration}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{phase.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's optimize your website for better rankings and increased organic traffic.
          </p>
          <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            <Link to="/contact">Get Your Free SEO Audit</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SEO;
