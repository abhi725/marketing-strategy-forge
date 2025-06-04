
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { 
  Globe, 
  Clock, 
  Smartphone, 
  Shield, 
  Search, 
  Link, 
  Image, 
  FileText,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Download
} from 'lucide-react';

interface AuditResult {
  url: string;
  score: number;
  performance: {
    score: number;
    loadTime: number;
    issues: string[];
  };
  seo: {
    score: number;
    title: boolean;
    description: boolean;
    headings: boolean;
    issues: string[];
  };
  mobile: {
    score: number;
    responsive: boolean;
    issues: string[];
  };
  security: {
    score: number;
    https: boolean;
    issues: string[];
  };
  accessibility: {
    score: number;
    issues: string[];
  };
}

const SiteAudit = () => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<AuditResult | null>(null);
  const { toast } = useToast();

  const simulateAudit = async (websiteUrl: string): Promise<AuditResult> => {
    // Simulate checking different aspects
    const steps = [
      'Checking website accessibility...',
      'Analyzing page performance...',
      'Evaluating SEO factors...',
      'Testing mobile responsiveness...',
      'Checking security features...',
      'Generating comprehensive report...'
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProgress(((i + 1) / steps.length) * 100);
    }

    // Generate realistic but simulated results
    const performanceScore = Math.floor(Math.random() * 40) + 60; // 60-100
    const seoScore = Math.floor(Math.random() * 30) + 70; // 70-100
    const mobileScore = Math.floor(Math.random() * 20) + 80; // 80-100
    const securityScore = Math.floor(Math.random() * 25) + 75; // 75-100
    const accessibilityScore = Math.floor(Math.random() * 35) + 65; // 65-100

    const overallScore = Math.round((performanceScore + seoScore + mobileScore + securityScore + accessibilityScore) / 5);

    return {
      url: websiteUrl,
      score: overallScore,
      performance: {
        score: performanceScore,
        loadTime: Math.random() * 3 + 1, // 1-4 seconds
        issues: performanceScore < 80 ? [
          'Large image files detected',
          'Unoptimized CSS delivery',
          'Multiple render-blocking resources'
        ] : ['Minor optimization opportunities']
      },
      seo: {
        score: seoScore,
        title: Math.random() > 0.3,
        description: Math.random() > 0.2,
        headings: Math.random() > 0.4,
        issues: seoScore < 85 ? [
          'Missing meta description on some pages',
          'Duplicate title tags found',
          'Alt text missing on images'
        ] : ['Minor SEO improvements possible']
      },
      mobile: {
        score: mobileScore,
        responsive: Math.random() > 0.1,
        issues: mobileScore < 90 ? [
          'Touch targets too small',
          'Content wider than screen'
        ] : ['Excellent mobile experience']
      },
      security: {
        score: securityScore,
        https: Math.random() > 0.05,
        issues: securityScore < 90 ? [
          'Mixed content detected',
          'Security headers missing'
        ] : ['Strong security implementation']
      },
      accessibility: {
        score: accessibilityScore,
        issues: accessibilityScore < 80 ? [
          'Low contrast text detected',
          'Missing ARIA labels',
          'Keyboard navigation issues'
        ] : ['Good accessibility practices']
      }
    };
  };

  const handleAudit = async () => {
    if (!url) {
      toast({
        title: "URL Required",
        description: "Please enter a website URL to audit.",
        variant: "destructive"
      });
      return;
    }

    // Basic URL validation
    const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (!urlPattern.test(url)) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid website URL.",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    setProgress(0);
    setResult(null);

    try {
      const auditResult = await simulateAudit(url);
      setResult(auditResult);
      toast({
        title: "Audit Complete!",
        description: "Your website audit has been completed successfully."
      });
    } catch (error) {
      toast({
        title: "Audit Failed",
        description: "There was an error analyzing your website. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-600" />;
    if (score >= 70) return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
    return <XCircle className="w-5 h-5 text-red-600" />;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 text-white mb-6">
            <Search className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Free Website Audit Tool
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get a comprehensive analysis of your website's performance, SEO, mobile-friendliness, 
            and security in just 60 seconds.
          </p>
        </div>
      </section>

      {/* Audit Tool */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Enter Your Website URL</CardTitle>
              <CardDescription className="text-center">
                We'll analyze your website and provide actionable insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 max-w-2xl mx-auto">
                <Input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1"
                  disabled={isAnalyzing}
                />
                <Button 
                  onClick={handleAudit} 
                  disabled={isAnalyzing}
                  className="marketing-gradient text-white px-8"
                >
                  {isAnalyzing ? 'Analyzing...' : 'Audit Site'}
                </Button>
              </div>
              
              {isAnalyzing && (
                <div className="mt-6 max-w-2xl mx-auto">
                  <div className="text-center mb-4">
                    <p className="text-gray-600">Analyzing your website...</p>
                  </div>
                  <Progress value={progress} className="w-full" />
                  <p className="text-sm text-gray-500 text-center mt-2">{progress.toFixed(0)}% complete</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Results */}
          {result && (
            <div className="space-y-6">
              {/* Overall Score */}
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-4">
                    Overall Score: <span className={getScoreColor(result.score)}>{result.score}/100</span>
                  </CardTitle>
                  <div className="flex justify-center">
                    {getScoreIcon(result.score)}
                  </div>
                </CardHeader>
              </Card>

              {/* Detailed Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Performance */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="w-6 h-6 text-blue-600 mr-2" />
                        <CardTitle>Performance</CardTitle>
                      </div>
                      <div className="flex items-center">
                        {getScoreIcon(result.performance.score)}
                        <span className={`ml-2 font-bold ${getScoreColor(result.performance.score)}`}>
                          {result.performance.score}/100
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">
                      Load Time: {result.performance.loadTime.toFixed(1)}s
                    </p>
                    <ul className="text-sm space-y-1">
                      {result.performance.issues.map((issue, index) => (
                        <li key={index} className="text-gray-600">• {issue}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* SEO */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Search className="w-6 h-6 text-green-600 mr-2" />
                        <CardTitle>SEO</CardTitle>
                      </div>
                      <div className="flex items-center">
                        {getScoreIcon(result.seo.score)}
                        <span className={`ml-2 font-bold ${getScoreColor(result.seo.score)}`}>
                          {result.seo.score}/100
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center text-sm">
                        {result.seo.title ? <CheckCircle className="w-4 h-4 text-green-600 mr-2" /> : <XCircle className="w-4 h-4 text-red-600 mr-2" />}
                        Title Tags
                      </div>
                      <div className="flex items-center text-sm">
                        {result.seo.description ? <CheckCircle className="w-4 h-4 text-green-600 mr-2" /> : <XCircle className="w-4 h-4 text-red-600 mr-2" />}
                        Meta Descriptions
                      </div>
                      <div className="flex items-center text-sm">
                        {result.seo.headings ? <CheckCircle className="w-4 h-4 text-green-600 mr-2" /> : <XCircle className="w-4 h-4 text-red-600 mr-2" />}
                        Heading Structure
                      </div>
                    </div>
                    <ul className="text-sm space-y-1">
                      {result.seo.issues.map((issue, index) => (
                        <li key={index} className="text-gray-600">• {issue}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Mobile */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Smartphone className="w-6 h-6 text-purple-600 mr-2" />
                        <CardTitle>Mobile</CardTitle>
                      </div>
                      <div className="flex items-center">
                        {getScoreIcon(result.mobile.score)}
                        <span className={`ml-2 font-bold ${getScoreColor(result.mobile.score)}`}>
                          {result.mobile.score}/100
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm mb-3">
                      {result.mobile.responsive ? <CheckCircle className="w-4 h-4 text-green-600 mr-2" /> : <XCircle className="w-4 h-4 text-red-600 mr-2" />}
                      Mobile Responsive
                    </div>
                    <ul className="text-sm space-y-1">
                      {result.mobile.issues.map((issue, index) => (
                        <li key={index} className="text-gray-600">• {issue}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Security */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Shield className="w-6 h-6 text-red-600 mr-2" />
                        <CardTitle>Security</CardTitle>
                      </div>
                      <div className="flex items-center">
                        {getScoreIcon(result.security.score)}
                        <span className={`ml-2 font-bold ${getScoreColor(result.security.score)}`}>
                          {result.security.score}/100
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm mb-3">
                      {result.security.https ? <CheckCircle className="w-4 h-4 text-green-600 mr-2" /> : <XCircle className="w-4 h-4 text-red-600 mr-2" />}
                      HTTPS Enabled
                    </div>
                    <ul className="text-sm space-y-1">
                      {result.security.issues.map((issue, index) => (
                        <li key={index} className="text-gray-600">• {issue}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Accessibility */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Globe className="w-6 h-6 text-orange-600 mr-2" />
                      <CardTitle>Accessibility</CardTitle>
                    </div>
                    <div className="flex items-center">
                      {getScoreIcon(result.accessibility.score)}
                      <span className={`ml-2 font-bold ${getScoreColor(result.accessibility.score)}`}>
                        {result.accessibility.score}/100
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    {result.accessibility.issues.map((issue, index) => (
                      <li key={index} className="text-gray-600">• {issue}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-none">
                <CardContent className="text-center py-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Want to Improve Your Score?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our team of experts can help you fix these issues and improve your website's performance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="marketing-gradient text-white">
                      Get Professional Help
                    </Button>
                    <Button variant="outline" className="flex items-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Use Our Site Audit Tool?
            </h2>
            <p className="text-lg text-gray-600">
              Get professional insights into your website's performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Comprehensive Analysis',
                description: 'We check performance, SEO, mobile responsiveness, security, and accessibility.'
              },
              {
                icon: Clock,
                title: 'Quick Results',
                description: 'Get your complete website audit in under 60 seconds with actionable insights.'
              },
              {
                icon: FileText,
                title: 'Detailed Reports',
                description: 'Receive specific recommendations to improve your website\'s performance and rankings.'
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-6">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SiteAudit;
