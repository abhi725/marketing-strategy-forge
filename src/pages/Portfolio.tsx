
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExternalLink, TrendingUp, Users, DollarSign, BarChart3, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const caseStudies = [
    {
      id: 1,
      client: "TechStart Solutions",
      industry: "SaaS",
      challenge: "New B2B SaaS company struggling to generate qualified leads with a limited budget",
      solution: "Implemented targeted SEO strategy, content marketing, and PPC campaigns focused on high-intent keywords",
      results: {
        leadIncrease: "300%",
        roiImprovement: "250%",
        timeFrame: "3 months"
      },
      metrics: [
        { label: "Organic Traffic", value: "+450%", icon: TrendingUp },
        { label: "Qualified Leads", value: "+300%", icon: Users },
        { label: "Cost Per Lead", value: "-60%", icon: DollarSign },
        { label: "Conversion Rate", value: "+180%", icon: BarChart3 }
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=entropy&auto=format",
      featured: true
    },
    {
      id: 2,
      client: "GreenLeaf Industries",
      industry: "Manufacturing",
      challenge: "Traditional manufacturer needed to establish digital presence and reach new markets",
      solution: "Complete digital transformation including website redesign, SEO, and targeted advertising",
      results: {
        leadIncrease: "400%",
        roiImprovement: "320%",
        timeFrame: "6 months"
      },
      metrics: [
        { label: "Website Traffic", value: "+400%", icon: TrendingUp },
        { label: "Lead Quality", value: "+250%", icon: Users },
        { label: "Revenue Growth", value: "+320%", icon: DollarSign },
        { label: "Market Reach", value: "+500%", icon: BarChart3 }
      ],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=entropy&auto=format"
    },
    {
      id: 3,
      client: "HealthPro Clinic",
      industry: "Healthcare",
      challenge: "Local healthcare practice wanted to expand patient base while maintaining trust and compliance",
      solution: "Local SEO optimization, reputation management, and HIPAA-compliant digital marketing strategies",
      results: {
        leadIncrease: "200%",
        roiImprovement: "180%",
        timeFrame: "4 months"
      },
      metrics: [
        { label: "Local Visibility", value: "+300%", icon: TrendingUp },
        { label: "New Patients", value: "+200%", icon: Users },
        { label: "Appointment Bookings", value: "+250%", icon: DollarSign },
        { label: "Online Reviews", value: "+400%", icon: BarChart3 }
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=entropy&auto=format"
    },
    {
      id: 4,
      client: "EcoHome Solutions",
      industry: "Real Estate",
      challenge: "Real estate company needed to differentiate in competitive market and improve lead quality",
      solution: "Comprehensive content strategy, social media marketing, and conversion optimization",
      results: {
        leadIncrease: "350%",
        roiImprovement: "280%",
        timeFrame: "5 months"
      },
      metrics: [
        { label: "Property Views", value: "+350%", icon: TrendingUp },
        { label: "Qualified Buyers", value: "+280%", icon: Users },
        { label: "Sales Volume", value: "+300%", icon: DollarSign },
        { label: "Market Share", value: "+150%", icon: BarChart3 }
      ],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=entropy&auto=format"
    },
    {
      id: 5,
      client: "FitLife Gym Chain",
      industry: "Fitness",
      challenge: "Gym chain needed to recover membership levels post-pandemic and attract younger demographics",
      solution: "Social media advertising, influencer partnerships, and community engagement campaigns",
      results: {
        leadIncrease: "280%",
        roiImprovement: "220%",
        timeFrame: "4 months"
      },
      metrics: [
        { label: "Membership Signups", value: "+280%", icon: TrendingUp },
        { label: "Young Adult Members", value: "+450%", icon: Users },
        { label: "Revenue Recovery", value: "+220%", icon: DollarSign },
        { label: "Social Engagement", value: "+600%", icon: BarChart3 }
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=entropy&auto=format"
    },
    {
      id: 6,
      client: "Luxury Auto Dealer",
      industry: "Automotive",
      challenge: "High-end car dealership wanted to attract affluent customers and increase showroom visits",
      solution: "Premium content marketing, targeted PPC, and sophisticated lead nurturing campaigns",
      results: {
        leadIncrease: "150%",
        roiImprovement: "200%",
        timeFrame: "6 months"
      },
      metrics: [
        { label: "Showroom Visits", value: "+150%", icon: TrendingUp },
        { label: "High-Value Leads", value: "+200%", icon: Users },
        { label: "Sales Value", value: "+180%", icon: DollarSign },
        { label: "Brand Awareness", value: "+300%", icon: BarChart3 }
      ],
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop&crop=entropy&auto=format"
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real results from real businesses. See how SwanDigitals has helped companies 
            across industries achieve measurable growth through strategic digital marketing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">250%</div>
              <div className="text-gray-600">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$50M+</div>
              <div className="text-gray-600">Client Revenue Generated</div>
            </div>
          </div>
        </div>

        {/* Featured Case Study */}
        {caseStudies.filter(study => study.featured).map((study) => (
          <Card key={study.id} className="mb-16 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-blue-600">{study.industry}</Badge>
                  <Badge variant="outline">Featured Case Study</Badge>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {study.client}
                </h2>
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Challenge:</h3>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Solution:</h3>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {study.metrics.map((metric, index) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="font-bold text-lg text-gray-900">{metric.value}</div>
                          <div className="text-sm text-gray-600">{metric.label}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Button className="w-fit bg-blue-600 hover:bg-blue-700">
                  View Full Case Study
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="aspect-square lg:aspect-auto">
                <img 
                  src={study.image} 
                  alt={study.client}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        ))}

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.filter(study => !study.featured).map((study) => (
            <Card key={study.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.client}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">{study.industry}</Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {study.client}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {study.challenge}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 bg-blue-50 rounded">
                    <div className="font-bold text-blue-600">{study.results.leadIncrease}</div>
                    <div className="text-xs text-gray-600">Lead Increase</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded">
                    <div className="font-bold text-green-600">{study.results.roiImprovement}</div>
                    <div className="text-xs text-gray-600">ROI Growth</div>
                  </div>
                </div>
                <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700 w-full justify-between">
                  View Case Study <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            See how we can help your business achieve similar results. 
            Get your free strategy audit and custom growth plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">Get Your Free Audit</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Portfolio;
