
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Download, BookOpen, Play, FileText, Calculator, CheckSquare } from 'lucide-react';

const Resources = () => {
  const resourceCategories = [
    {
      title: "Free Tools & Calculators",
      icon: Calculator,
      description: "Interactive tools to help you plan and optimize your marketing",
      resources: [
        {
          title: "ROI Calculator",
          description: "Calculate your potential return on digital marketing investment",
          type: "tool",
          link: "/tools/roi-calculator"
        },
        {
          title: "SEO Audit Tool", 
          description: "Get a comprehensive analysis of your website's SEO performance",
          type: "tool",
          link: "/site-audit"
        },
        {
          title: "Social Media Scheduler",
          description: "Plan and schedule your social media content calendar",
          type: "tool",
          link: "/tools/social-scheduler"
        }
      ]
    },
    {
      title: "Free Guides & Ebooks",
      icon: BookOpen,
      description: "Comprehensive guides to help you master digital marketing",
      resources: [
        {
          title: "Complete SEO Guide 2025",
          description: "Step-by-step guide to ranking higher on Google",
          type: "ebook",
          pages: "47 pages",
          downloadLink: "/downloads/seo-guide-2025.pdf"
        },
        {
          title: "PPC Optimization Playbook",
          description: "Proven strategies to reduce costs and increase conversions",
          type: "ebook", 
          pages: "32 pages",
          downloadLink: "/downloads/ppc-playbook.pdf"
        },
        {
          title: "Content Marketing Blueprint",
          description: "Create content that drives traffic and converts visitors",
          type: "ebook",
          pages: "38 pages", 
          downloadLink: "/downloads/content-blueprint.pdf"
        }
      ]
    },
    {
      title: "Video Tutorials",
      icon: Play,
      description: "Learn digital marketing through our expert video content",
      resources: [
        {
          title: "Google Analytics 4 Setup",
          description: "Complete walkthrough of GA4 configuration and tracking",
          type: "video",
          duration: "25 min",
          videoLink: "https://youtube.com/watch?v=example1"
        },
        {
          title: "Facebook Ads Mastery",
          description: "Advanced targeting and optimization strategies",
          type: "video",
          duration: "42 min",
          videoLink: "https://youtube.com/watch?v=example2"
        },
        {
          title: "Email Marketing Automation",
          description: "Build effective drip campaigns and nurture sequences",
          type: "video",
          duration: "33 min",
          videoLink: "https://youtube.com/watch?v=example3"
        }
      ]
    },
    {
      title: "Templates & Checklists",
      icon: CheckSquare,
      description: "Ready-to-use templates to streamline your marketing efforts",
      resources: [
        {
          title: "Content Calendar Template",
          description: "Plan your content strategy for the entire year",
          type: "template",
          format: "Google Sheets",
          downloadLink: "/downloads/content-calendar.xlsx"
        },
        {
          title: "SEO Audit Checklist", 
          description: "47-point checklist to audit any website",
          type: "checklist",
          format: "PDF",
          downloadLink: "/downloads/seo-checklist.pdf"
        },
        {
          title: "Campaign Launch Checklist",
          description: "Ensure nothing is missed before going live",
          type: "checklist",
          format: "PDF",
          downloadLink: "/downloads/campaign-checklist.pdf"
        }
      ]
    }
  ];

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'ebook': return FileText;
      case 'video': return Play;
      case 'template': return FileText;
      case 'checklist': return CheckSquare;
      case 'tool': return Calculator;
      default: return FileText;
    }
  };

  const getResourceBadgeColor = (type: string) => {
    switch (type) {
      case 'ebook': return 'bg-blue-100 text-blue-800';
      case 'video': return 'bg-red-100 text-red-800';
      case 'template': return 'bg-green-100 text-green-800';
      case 'checklist': return 'bg-purple-100 text-purple-800';
      case 'tool': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Free Marketing Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Access our library of free tools, guides, templates, and tutorials to 
            accelerate your digital marketing success. All resources are created by our expert team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Free Resources</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">10K+</div>
              <div className="text-sm text-gray-600">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Access</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Free</div>
            </div>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="space-y-16">
          {resourceCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div key={categoryIndex}>
                <div className="flex items-center mb-8">
                  <CategoryIcon className="w-8 h-8 text-blue-600 mr-4" />
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                    <p className="text-gray-600 mt-2">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, resourceIndex) => {
                    const ResourceIcon = getResourceIcon(resource.type);
                    return (
                      <Card key={resourceIndex} className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                          <ResourceIcon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                          <Badge className={getResourceBadgeColor(resource.type)}>
                            {resource.type}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {resource.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {resource.description}
                        </p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-sm text-gray-500">
                            {resource.pages && <span>{resource.pages}</span>}
                            {resource.duration && <span>{resource.duration}</span>}
                            {resource.format && <span>{resource.format}</span>}
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          {resource.downloadLink && (
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 flex-1">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                          )}
                          {resource.link && (
                            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 flex-1">
                              <Link to={resource.link}>
                                Use Tool
                              </Link>
                            </Button>
                          )}
                          {resource.videoLink && (
                            <Button size="sm" variant="outline" className="flex-1">
                              <Play className="w-4 h-4 mr-2" />
                              Watch
                            </Button>
                          )}
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Get New Resources First</h2>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Be the first to access our newest marketing tools, guides, and templates. 
            Join 5,000+ marketers who get our weekly resource updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-gray-900 flex-1"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-blue-200">
            ✓ Instant access to exclusive resources • ✓ Weekly updates • ✓ Unsubscribe anytime
          </p>
        </Card>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Personalized Help?
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            While our free resources are powerful, sometimes you need expert guidance 
            tailored to your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
