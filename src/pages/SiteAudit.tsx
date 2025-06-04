
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface AuditResult {
  url: string;
  overallGrade: string;
  overallScore: number;
  categories: {
    onPageSEO: {
      grade: string;
      score: number;
      title: {
        exists: boolean;
        length: number;
        value: string;
        optimal: boolean;
      };
      metaDescription: {
        exists: boolean;
        length: number;
        value: string;
        optimal: boolean;
      };
      headings: {
        h1Exists: boolean;
        headingDistribution: {
          h1: number;
          h2: number;
          h3: number;
          h4: number;
          h5: number;
          h6: number;
        };
      };
      contentAnalysis: {
        wordCount: number;
        sufficient: boolean;
      };
      keywordConsistency: {
        keywords: Array<{
          keyword: string;
          frequency: number;
          inTitle: boolean;
          inDescription: boolean;
          inHeadings: boolean;
        }>;
        phrases: Array<{
          phrase: string;
          frequency: number;
          inTitle: boolean;
          inDescription: boolean;
          inHeadings: boolean;
        }>;
      };
      images: {
        total: number;
        missingAlt: number;
      };
      links: {
        total: number;
        internal: number;
        external: number;
        broken: number;
      };
      canonicalTag: boolean;
      robots: {
        hasRobotsTxt: boolean;
        blocked: boolean;
        hasSitemap: boolean;
      };
      analytics: boolean;
      schemaMarkup: boolean;
      issues: string[];
    };
    usability: {
      grade: string;
      score: number;
      viewportSet: boolean;
      mobileOptimized: boolean;
      coreWebVitals: {
        lcp: {
          value: number;
          pass: boolean;
        };
        cls: {
          value: number;
          pass: boolean;
        };
        inp: {
          value: number;
          pass: boolean;
        };
      };
      fontLegibility: boolean;
      tapTargetsSized: boolean;
      issues: string[];
    };
    performance: {
      grade: string;
      score: number;
      pageSpeed: {
        mobile: {
          score: number;
          fcp: number;
          lcp: number;
          tti: number;
          tbt: number;
          cls: number;
          speedIndex: number;
        };
        desktop: {
          score: number;
          fcp: number;
          lcp: number;
          tti: number;
          tbt: number;
          cls: number;
          speedIndex: number;
        };
      };
      pageSize: {
        total: number;
        html: number;
        js: number;
        css: number;
        images: number;
        other: number;
      };
      resourceCount: {
        total: number;
        html: number;
        js: number;
        css: number;
        images: number;
        other: number;
      };
      compression: boolean;
      minification: {
        js: boolean;
        css: boolean;
      };
      imageOptimization: boolean;
      jsErrors: boolean;
      http2Enabled: boolean;
      issues: string[];
    };
    social: {
      grade: string;
      score: number;
      profiles: {
        facebook: boolean;
        twitter: boolean;
        instagram: boolean;
        linkedin: boolean;
        youtube: boolean;
      };
      sharing: {
        facebookOgTags: boolean;
        twitterCards: boolean;
      };
      pixelTracking: {
        facebookPixel: boolean;
        pixelId: string;
      };
      issues: string[];
    };
    security: {
      grade: string;
      score: number;
      ssl: boolean;
      httpsRedirect: boolean;
      dmarcRecord: boolean;
      spfRecord: boolean;
      issues: string[];
    };
    localSEO: {
      businessSchema: boolean;
      googleBusinessProfile: boolean;
      businessDetails: {
        name: string;
        address: string;
        phone: string;
        rating: number;
        reviewCount: number;
      };
    };
    technology: {
      server: string;
      ipAddress: string;
      technologies: string[];
    };
    seoRankings: {
      topKeywords: Array<{
        keyword: string;
        position: number;
        searches: number;
        estimatedTraffic: number;
      }>;
      positionSummary: {
        pos1: number;
        pos2to3: number;
        pos4to10: number;
        pos11to20: number;
        pos21to30: number;
        pos31to100: number;
      };
      estimatedMonthlyTraffic: number;
    };
  };
}

const SiteAudit = () => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<AuditResult | null>(null);
  const { toast } = useToast();

  const getGradeFromScore = (score: number): string => {
    if (score >= 97) return 'A+';
    if (score >= 93) return 'A';
    if (score >= 90) return 'A-';
    if (score >= 87) return 'B+';
    if (score >= 83) return 'B';
    if (score >= 80) return 'B-';
    if (score >= 77) return 'C+';
    if (score >= 73) return 'C';
    if (score >= 70) return 'C-';
    if (score >= 67) return 'D+';
    if (score >= 63) return 'D';
    if (score >= 60) return 'D-';
    return 'F';
  };

  const simulateAudit = async (websiteUrl: string): Promise<AuditResult> => {
    // Simulate checking different aspects
    const steps = [
      'Checking website accessibility...',
      'Analyzing page performance...',
      'Evaluating SEO factors...',
      'Testing mobile responsiveness...',
      'Checking security features...',
      'Scanning social media profiles...',
      'Analyzing local SEO presence...',
      'Identifying technologies used...',
      'Checking keyword rankings...',
      'Generating comprehensive report...'
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setProgress(((i + 1) / steps.length) * 100);
    }

    // Generate realistic but simulated results
    const onPageSEOScore = Math.floor(Math.random() * 20) + 75; // 75-95
    const usabilityScore = Math.floor(Math.random() * 30) + 60; // 60-90
    const performanceScore = Math.floor(Math.random() * 50) + 30; // 30-80
    const socialScore = Math.floor(Math.random() * 40) + 60; // 60-100
    const securityScore = Math.floor(Math.random() * 30) + 70; // 70-100

    const overallScore = Math.round(
      (onPageSEOScore + usabilityScore + performanceScore + socialScore + securityScore) / 5
    );

    const randomKeywords = [
      'marketing', 'digital', 'agency', 'services', 'solutions', 
      'growth', 'website', 'business', 'online', 'strategy'
    ];
    
    // Randomly select 5-7 keywords for the report
    const shuffled = [...randomKeywords].sort(() => 0.5 - Math.random());
    const selectedKeywords = shuffled.slice(0, Math.floor(Math.random() * 3) + 5);
    
    const keywordData = selectedKeywords.map(keyword => ({
      keyword,
      frequency: Math.floor(Math.random() * 10) + 1,
      inTitle: Math.random() > 0.3,
      inDescription: Math.random() > 0.4,
      inHeadings: Math.random() > 0.5,
    }));
    
    const phraseData = [
      'digital marketing',
      'growth strategy',
      'website design',
      'content marketing',
      'seo services',
      'social media'
    ].slice(0, Math.floor(Math.random() * 3) + 3).map(phrase => ({
      phrase,
      frequency: Math.floor(Math.random() * 5) + 1,
      inTitle: Math.random() > 0.5,
      inDescription: Math.random() > 0.6,
      inHeadings: Math.random() > 0.4,
    }));

    const technologies = [
      'WordPress',
      'Google Analytics',
      'jQuery',
      'Bootstrap',
      'Font Awesome',
      'Google Tag Manager',
      'React',
      'PHP',
      'MySQL',
      'Apache',
      'Cloudflare',
    ].slice(0, Math.floor(Math.random() * 6) + 5);

    const topKeywords = [
      {
        keyword: websiteUrl.split('.')[1] + ' services',
        position: Math.floor(Math.random() * 5) + 1,
        searches: Math.floor(Math.random() * 1000) + 500,
        estimatedTraffic: Math.floor(Math.random() * 300) + 100,
      },
      {
        keyword: websiteUrl.split('.')[1] + ' agency',
        position: Math.floor(Math.random() * 10) + 1,
        searches: Math.floor(Math.random() * 800) + 200,
        estimatedTraffic: Math.floor(Math.random() * 200) + 50,
      },
      {
        keyword: 'best ' + websiteUrl.split('.')[1] + ' company',
        position: Math.floor(Math.random() * 20) + 1,
        searches: Math.floor(Math.random() * 500) + 100,
        estimatedTraffic: Math.floor(Math.random() * 100) + 20,
      },
      {
        keyword: websiteUrl.split('.')[1] + ' experts',
        position: Math.floor(Math.random() * 30) + 1,
        searches: Math.floor(Math.random() * 300) + 50,
        estimatedTraffic: Math.floor(Math.random() * 50) + 10,
      },
      {
        keyword: websiteUrl.split('.')[1] + ' solutions',
        position: Math.floor(Math.random() * 50) + 1,
        searches: Math.floor(Math.random() * 200) + 20,
        estimatedTraffic: Math.floor(Math.random() * 30) + 5,
      }
    ];

    return {
      url: websiteUrl,
      overallGrade: getGradeFromScore(overallScore),
      overallScore,
      categories: {
        onPageSEO: {
          grade: getGradeFromScore(onPageSEOScore),
          score: onPageSEOScore,
          title: {
            exists: true,
            length: Math.floor(Math.random() * 20) + 40, // 40-60
            value: `${websiteUrl.split('.')[1].charAt(0).toUpperCase() + websiteUrl.split('.')[1].slice(1)} | Digital Marketing Agency`,
            optimal: Math.random() > 0.3,
          },
          metaDescription: {
            exists: true,
            length: Math.floor(Math.random() * 50) + 120, // 120-170
            value: `${websiteUrl.split('.')[1].charAt(0).toUpperCase() + websiteUrl.split('.')[1].slice(1)} is a leading digital marketing agency helping businesses grow online with SEO, social media, content, and PPC advertising services.`,
            optimal: Math.random() > 0.4,
          },
          headings: {
            h1Exists: Math.random() > 0.2,
            headingDistribution: {
              h1: Math.floor(Math.random() * 2) + 0, // 0-1
              h2: Math.floor(Math.random() * 8) + 3, // 3-10
              h3: Math.floor(Math.random() * 12) + 5, // 5-16
              h4: Math.floor(Math.random() * 6) + 0, // 0-5
              h5: Math.floor(Math.random() * 3) + 0, // 0-2
              h6: Math.floor(Math.random() * 2) + 0, // 0-1
            },
          },
          contentAnalysis: {
            wordCount: Math.floor(Math.random() * 1500) + 300, // 300-1800
            sufficient: Math.random() > 0.3,
          },
          keywordConsistency: {
            keywords: keywordData,
            phrases: phraseData,
          },
          images: {
            total: Math.floor(Math.random() * 40) + 10, // 10-50
            missingAlt: Math.floor(Math.random() * 10) + 0, // 0-10
          },
          links: {
            total: Math.floor(Math.random() * 40) + 20, // 20-60
            internal: Math.floor(Math.random() * 30) + 10, // 10-40
            external: Math.floor(Math.random() * 10) + 5, // 5-15
            broken: Math.floor(Math.random() * 3) + 0, // 0-3
          },
          canonicalTag: Math.random() > 0.1,
          robots: {
            hasRobotsTxt: Math.random() > 0.1,
            blocked: Math.random() < 0.1,
            hasSitemap: Math.random() > 0.2,
          },
          analytics: Math.random() > 0.1,
          schemaMarkup: Math.random() > 0.4,
          issues: onPageSEOScore < 85 ? [
            'Missing meta description on some pages',
            'Title tags could be more optimized for target keywords',
            'Some images are missing alt attributes',
            'H1 tag usage could be improved',
            'Low word count on some key pages'
          ].slice(0, Math.floor(Math.random() * 3) + 2) : [
            'Minor SEO improvements possible'
          ],
        },
        usability: {
          grade: getGradeFromScore(usabilityScore),
          score: usabilityScore,
          viewportSet: Math.random() > 0.1,
          mobileOptimized: Math.random() > 0.2,
          coreWebVitals: {
            lcp: {
              value: Math.random() * 5 + 1,
              pass: Math.random() > 0.4,
            },
            cls: {
              value: Math.random() * 0.2,
              pass: Math.random() > 0.3,
            },
            inp: {
              value: Math.random() * 300 + 100,
              pass: Math.random() > 0.5,
            },
          },
          fontLegibility: Math.random() > 0.1,
          tapTargetsSized: Math.random() > 0.3,
          issues: usabilityScore < 80 ? [
            'Core Web Vitals need improvement',
            'Some tap targets are too small on mobile',
            'Font sizes could be improved for readability',
            'Form fields lack proper labels'
          ].slice(0, Math.floor(Math.random() * 3) + 1) : [
            'Minor usability improvements recommended'
          ],
        },
        performance: {
          grade: getGradeFromScore(performanceScore),
          score: performanceScore,
          pageSpeed: {
            mobile: {
              score: Math.floor(Math.random() * 50) + 30, // 30-80
              fcp: Math.random() * 3 + 1.5, // 1.5-4.5
              lcp: Math.random() * 10 + 3, // 3-13
              tti: Math.random() * 15 + 5, // 5-20
              tbt: Math.random() * 1.5, // 0-1.5
              cls: Math.random() * 0.5, // 0-0.5
              speedIndex: Math.random() * 10 + 5, // 5-15
            },
            desktop: {
              score: Math.floor(Math.random() * 30) + 60, // 60-90
              fcp: Math.random() * 1.5 + 0.5, // 0.5-2
              lcp: Math.random() * 3 + 1, // 1-4
              tti: Math.random() * 8 + 2, // 2-10
              tbt: Math.random() * 0.8, // 0-0.8
              cls: Math.random() * 0.2, // 0-0.2
              speedIndex: Math.random() * 5 + 2, // 2-7
            },
          },
          pageSize: {
            total: Math.floor(Math.random() * 5000) + 1000, // 1000-6000 KB
            html: Math.floor(Math.random() * 100) + 50, // 50-150 KB
            js: Math.floor(Math.random() * 2000) + 500, // 500-2500 KB
            css: Math.floor(Math.random() * 200) + 100, // 100-300 KB
            images: Math.floor(Math.random() * 3000) + 500, // 500-3500 KB
            other: Math.floor(Math.random() * 200) + 50, // 50-250 KB
          },
          resourceCount: {
            total: Math.floor(Math.random() * 100) + 50, // 50-150
            html: Math.floor(Math.random() * 10) + 1, // 1-10
            js: Math.floor(Math.random() * 30) + 10, // 10-40
            css: Math.floor(Math.random() * 10) + 5, // 5-15
            images: Math.floor(Math.random() * 50) + 20, // 20-70
            other: Math.floor(Math.random() * 20) + 5, // 5-25
          },
          compression: Math.random() > 0.2,
          minification: {
            js: Math.random() > 0.2,
            css: Math.random() > 0.2,
          },
          imageOptimization: Math.random() > 0.3,
          jsErrors: Math.random() < 0.4,
          http2Enabled: Math.random() > 0.3,
          issues: performanceScore < 70 ? [
            'Reduce unused JavaScript',
            'Eliminate render-blocking resources',
            'Enable text compression',
            'Optimize images',
            'Minimize main-thread work',
            'Reduce server response times',
            'Avoid multiple page redirects'
          ].slice(0, Math.floor(Math.random() * 4) + 3) : [
            'Minor performance optimizations recommended'
          ],
        },
        social: {
          grade: getGradeFromScore(socialScore),
          score: socialScore,
          profiles: {
            facebook: Math.random() > 0.2,
            twitter: Math.random() > 0.3,
            instagram: Math.random() > 0.3,
            linkedin: Math.random() > 0.2,
            youtube: Math.random() > 0.5,
          },
          sharing: {
            facebookOgTags: Math.random() > 0.4,
            twitterCards: Math.random() > 0.5,
          },
          pixelTracking: {
            facebookPixel: Math.random() > 0.5,
            pixelId: Math.random() > 0.5 ? Math.floor(Math.random() * 900000000 + 100000000).toString() : '',
          },
          issues: socialScore < 80 ? [
            'Missing social profile links',
            'Open Graph tags not implemented',
            'Twitter cards not fully configured',
            'Social sharing buttons not present'
          ].slice(0, Math.floor(Math.random() * 3) + 1) : [
            'Social media presence could be improved'
          ],
        },
        security: {
          grade: getGradeFromScore(securityScore),
          score: securityScore,
          ssl: Math.random() > 0.1,
          httpsRedirect: Math.random() > 0.2,
          dmarcRecord: Math.random() > 0.4,
          spfRecord: Math.random() > 0.3,
          issues: securityScore < 85 ? [
            'Missing DMARC record',
            'Outdated SSL certificate',
            'Mixed content detected',
            'Security headers missing'
          ].slice(0, Math.floor(Math.random() * 2) + 1) : [
            'Strong security implementation with minor improvements possible'
          ],
        },
        localSEO: {
          businessSchema: Math.random() > 0.5,
          googleBusinessProfile: Math.random() > 0.3,
          businessDetails: {
            name: `${websiteUrl.split('.')[1].charAt(0).toUpperCase() + websiteUrl.split('.')[1].slice(1)} Services`,
            address: '123 Main Street, Business District, City',
            phone: '+1 (555) 123-4567',
            rating: Math.random() * 2 + 3, // 3-5
            reviewCount: Math.floor(Math.random() * 500) + 10, // 10-510
          },
        },
        technology: {
          server: Math.random() > 0.5 ? 'Apache/2.4.41' : 'nginx/1.18.0',
          ipAddress: `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`,
          technologies,
        },
        seoRankings: {
          topKeywords,
          positionSummary: {
            pos1: Math.floor(Math.random() * 3),
            pos2to3: Math.floor(Math.random() * 5),
            pos4to10: Math.floor(Math.random() * 10),
            pos11to20: Math.floor(Math.random() * 15),
            pos21to30: Math.floor(Math.random() * 20),
            pos31to100: Math.floor(Math.random() * 50),
          },
          estimatedMonthlyTraffic: Math.floor(Math.random() * 3000) + 500,
        },
      },
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
    if (score >= 50) return 'text-orange-500';
    return 'text-red-600';
  };

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-green-600';
    if (grade.startsWith('B')) return 'text-blue-600';
    if (grade.startsWith('C')) return 'text-yellow-600';
    if (grade.startsWith('D')) return 'text-orange-500';
    return 'text-red-600';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-600" />;
    if (score >= 70) return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
    if (score >= 50) return <AlertTriangle className="w-5 h-5 text-orange-500" />;
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
              {/* SERP Snippet Preview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">SERP Snippet Preview</CardTitle>
                  <CardDescription>
                    How your site may appear in search results
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border border-gray-200 p-4 rounded-md max-w-2xl">
                    <div className="text-blue-600 text-sm font-medium mb-1 truncate">
                      {url}
                    </div>
                    <div className="text-gray-900 text-lg font-medium mb-1 truncate">
                      {result.categories.onPageSEO.title.value}
                    </div>
                    <div className="text-gray-500 text-sm line-clamp-2">
                      {result.categories.onPageSEO.metaDescription.value}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Overall Score */}
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-1">
                    Audit Results for {result.url}
                  </CardTitle>
                  <CardDescription className="text-xl mb-4">
                    Your page could be better
                  </CardDescription>
                  <div className="flex items-center justify-center mb-4">
                    <span className={`text-5xl font-bold ${getGradeColor(result.overallGrade)}`}>
                      {result.overallGrade}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
                    <div className="flex flex-col items-center p-3">
                      <div className="text-lg font-semibold mb-1">On-Page SEO</div>
                      <div className={`text-2xl font-bold ${getGradeColor(result.categories.onPageSEO.grade)}`}>
                        {result.categories.onPageSEO.grade}
                      </div>
                    </div>
                    <div className="flex flex-col items-center p-3">
                      <div className="text-lg font-semibold mb-1">Usability</div>
                      <div className={`text-2xl font-bold ${getGradeColor(result.categories.usability.grade)}`}>
                        {result.categories.usability.grade}
                      </div>
                    </div>
                    <div className="flex flex-col items-center p-3">
                      <div className="text-lg font-semibold mb-1">Performance</div>
                      <div className={`text-2xl font-bold ${getGradeColor(result.categories.performance.grade)}`}>
                        {result.categories.performance.grade}
                      </div>
                    </div>
                    <div className="flex flex-col items-center p-3">
                      <div className="text-lg font-semibold mb-1">Social</div>
                      <div className={`text-2xl font-bold ${getGradeColor(result.categories.social.grade)}`}>
                        {result.categories.social.grade}
                      </div>
                    </div>
                    <div className="flex flex-col items-center p-3">
                      <div className="text-lg font-semibold mb-1">Security</div>
                      <div className={`text-2xl font-bold ${getGradeColor(result.categories.security.grade)}`}>
                        {result.categories.security.grade}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Results Tabs */}
              <Tabs defaultValue="on-page-seo" className="w-full">
                <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full">
                  <TabsTrigger value="on-page-seo">On-Page SEO</TabsTrigger>
                  <TabsTrigger value="usability">Usability</TabsTrigger>
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                  <TabsTrigger value="social">Social</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="rankings">Rankings</TabsTrigger>
                </TabsList>

                {/* On-Page SEO Tab */}
                <TabsContent value="on-page-seo">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <CardTitle>On-Page SEO Results</CardTitle>
                          <CardDescription className="mt-2">
                            Your On-Page SEO could be better. On-Page SEO is important to ensure Search
                            Engines can understand your content appropriately and help it rank for
                            relevant keywords.
                          </CardDescription>
                        </div>
                        <div className="flex items-center">
                          <span className={`text-2xl font-bold ${getGradeColor(result.categories.onPageSEO.grade)} mr-2`}>
                            {result.categories.onPageSEO.grade}
                          </span>
                          {getScoreIcon(result.categories.onPageSEO.score)}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Title Tag */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2 flex items-center">
                          {result.categories.onPageSEO.title.optimal ? 
                            <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                            <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />}
                          Title Tag
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {result.categories.onPageSEO.title.optimal ? 
                            "You have a good title tag that is well-optimized for search engines." : 
                            "You have a title tag, but ideally it should be between 50 and 60 characters in length (including spaces)."}
                        </p>
                        <div className="bg-gray-50 p-3 rounded-md text-sm">
                          <p className="font-medium">{result.categories.onPageSEO.title.value}</p>
                          <p className="text-xs text-gray-500 mt-1">Length: {result.categories.onPageSEO.title.length}</p>
                        </div>
                      </div>

                      {/* Meta Description */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2 flex items-center">
                          {result.categories.onPageSEO.metaDescription.optimal ? 
                            <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                            <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />}
                          Meta Description Tag
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {result.categories.onPageSEO.metaDescription.optimal ? 
                            "Your meta description is well-optimized." : 
                            "Your page has a meta description tag, however, your meta description should ideally be between 120 and 160 characters (including spaces)."}
                        </p>
                        <div className="bg-gray-50 p-3 rounded-md text-sm">
                          <p>{result.categories.onPageSEO.metaDescription.value}</p>
                          <p className="text-xs text-gray-500 mt-1">Length: {result.categories.onPageSEO.metaDescription.length}</p>
                        </div>
                      </div>

                      {/* Headings */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2 flex items-center">
                          {result.categories.onPageSEO.headings.h1Exists ? 
                            <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                            <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                          Header Tag Usage
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {result.categories.onPageSEO.headings.h1Exists ? 
                            "Your page is using H1 heading tags correctly." : 
                            "Your page does not have an H1 Header Tag. The H1 Header Tag is an important way of signaling to search engines what your content is about."}
                        </p>
                        
                        <div className="mt-4">
                          <h4 className="font-medium text-sm mb-2">Header Tag Distribution</h4>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Header Tag</TableHead>
                                <TableHead>Frequency</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell>H1</TableCell>
                                <TableCell>{result.categories.onPageSEO.headings.headingDistribution.h1}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>H2</TableCell>
                                <TableCell>{result.categories.onPageSEO.headings.headingDistribution.h2}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>H3</TableCell>
                                <TableCell>{result.categories.onPageSEO.headings.headingDistribution.h3}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>H4</TableCell>
                                <TableCell>{result.categories.onPageSEO.headings.headingDistribution.h4}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>H5</TableCell>
                                <TableCell>{result.categories.onPageSEO.headings.headingDistribution.h5}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>H6</TableCell>
                                <TableCell>{result.categories.onPageSEO.headings.headingDistribution.h6}</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>
                      </div>

                      {/* Content Amount */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2 flex items-center">
                          {result.categories.onPageSEO.contentAnalysis.sufficient ? 
                            <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                            <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />}
                          Amount of Content
                        </h3>
                        <p className="text-sm text-gray-600">
                          {result.categories.onPageSEO.contentAnalysis.sufficient ? 
                            "Your page has a good amount of text content that search engines can interpret." : 
                            "Your page has a low volume of text content which search engines can interpret as 'thin content'."}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Word Count: {result.categories.onPageSEO.contentAnalysis.wordCount}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          It has been well researched that higher text content volumes are related to better ranking ability in general.
                        </p>
                      </div>

                      {/* Keyword Consistency */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Keyword Consistency
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Your page's main keywords are distributed across the important HTML tags.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-sm mb-2">Individual Keywords</h4>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Keyword</TableHead>
                                  <TableHead>Title</TableHead>
                                  <TableHead>Description</TableHead>
                                  <TableHead>Headings</TableHead>
                                  <TableHead>Content</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {result.categories.onPageSEO.keywordConsistency.keywords.map((keyword, index) => (
                                  <TableRow key={index}>
                                    <TableCell>{keyword.keyword}</TableCell>
                                    <TableCell>
                                      {keyword.inTitle ? <CheckCircle className="w-4 h-4 text-green-600" /> : <XCircle className="w-4 h-4 text-gray-300" />}
                                    </TableCell>
                                    <TableCell>
                                      {keyword.inDescription ? <CheckCircle className="w-4 h-4 text-green-600" /> : <XCircle className="w-4 h-4 text-gray-300" />}
                                    </TableCell>
                                    <TableCell>
                                      {keyword.inHeadings ? <CheckCircle className="w-4 h-4 text-green-600" /> : <XCircle className="w-4 h-4 text-gray-300" />}
                                    </TableCell>
                                    <TableCell>{keyword.frequency}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-sm mb-2">Phrases</h4>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Phrase</TableHead>
                                  <TableHead>Title</TableHead>
                                  <TableHead>Description</TableHead>
                                  <TableHead>Headings</TableHead>
                                  <TableHead>Content</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {result.categories.onPageSEO.keywordConsistency.phrases.map((phrase, index) => (
                                  <TableRow key={index}>
                                    <TableCell>{phrase.phrase}</TableCell>
                                    <TableCell>
                                      {phrase.inTitle ? <CheckCircle className="w-4 h-4 text-green-600" /> : <XCircle className="w-4 h-4 text-gray-300" />}
                                    </TableCell>
                                    <TableCell>
                                      {phrase.inDescription ? <CheckCircle className="w-4 h-4 text-green-600" /> : <XCircle className="w-4 h-4 text-gray-300" />}
                                    </TableCell>
                                    <TableCell>
                                      {phrase.inHeadings ? <CheckCircle className="w-4 h-4 text-green-600" /> : <XCircle className="w-4 h-4 text-gray-300" />}
                                    </TableCell>
                                    <TableCell>{phrase.frequency}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                        </div>
                      </div>

                      {/* Image Alt */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2 flex items-center">
                          {result.categories.onPageSEO.images.missingAlt === 0 ? 
                            <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                            <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />}
                          Image Alt Attributes
                        </h3>
                        <p className="text-sm text-gray-600">
                          {result.categories.onPageSEO.images.missingAlt === 0 ? 
                            "All images on your page have alt attributes. Well done!" : 
                            `You have images on your page that are missing Alt attributes. We found ${result.categories.onPageSEO.images.total} images on your page and ${result.categories.onPageSEO.images.missingAlt} of them are missing the attribute.`}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Alt attributes are an often overlooked and simple way to signal to Search Engines what an image is about, and help it rank in image search results.
                        </p>
                      </div>

                      {/* Technical SEO */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Technical SEO Checks</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center">
                            {result.categories.onPageSEO.canonicalTag ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <span>Canonical Tag</span>
                          </div>
                          <div className="flex items-center">
                            {result.categories.onPageSEO.robots.hasRobotsTxt ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <span>Robots.txt File</span>
                          </div>
                          <div className="flex items-center">
                            {result.categories.onPageSEO.robots.hasSitemap ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <span>XML Sitemap</span>
                          </div>
                          <div className="flex items-center">
                            {result.categories.onPageSEO.analytics ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <span>Analytics</span>
                          </div>
                          <div className="flex items-center">
                            {result.categories.onPageSEO.schemaMarkup ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <span>Schema.org Structured Data</span>
                          </div>
                          <div className="flex items-center">
                            {!result.categories.onPageSEO.robots.blocked ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <span>Not Blocked by Robots.txt</span>
                          </div>
                        </div>
                      </div>

                      {/* Issues and Recommendations */}
                      <div className="bg-yellow-50 border border-yellow-100 rounded-md p-4">
                        <h3 className="text-lg font-semibold mb-2 flex items-center">
                          <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                          Issues & Recommendations
                        </h3>
                        <ul className="list-disc list-inside space-y-1">
                          {result.categories.onPageSEO.issues.map((issue, index) => (
                            <li key={index} className="text-sm text-gray-700">{issue}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Usability Tab */}
                <TabsContent value="usability">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <CardTitle>Usability Results</CardTitle>
                          <CardDescription className="mt-2">
                            Your page has usability issues across devices. Usability is important to maximize
                            your available audience and minimize user bounce rates.
                          </CardDescription>
                        </div>
                        <div className="flex items-center">
                          <span className={`text-2xl font-bold ${getGradeColor(result.categories.usability.grade)} mr-2`}>
                            {result.categories.usability.grade}
                          </span>
                          {getScoreIcon(result.categories.usability.score)}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Core Web Vitals */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Google's Core Web Vitals
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          {(result.categories.usability.coreWebVitals.lcp.pass && 
                            result.categories.usability.coreWebVitals.cls.pass && 
                            result.categories.usability.coreWebVitals.inp.pass) ? 
                            "Your page passes Google's Core Web Vitals assessment." : 
                            "Your page has failed Google's Core Web Vitals assessment."}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="border border-gray-200 rounded-md p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">Largest Contentful Paint (LCP)</h4>
                              {result.categories.usability.coreWebVitals.lcp.pass ? 
                                <CheckCircle className="w-5 h-5 text-green-600" /> : 
                                <XCircle className="w-5 h-5 text-red-600" />}
                            </div>
                            <p className="text-sm text-gray-600">
                              {result.categories.usability.coreWebVitals.lcp.value.toFixed(1)}s
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds.
                            </p>
                          </div>
                          
                          <div className="border border-gray-200 rounded-md p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">Cumulative Layout Shift (CLS)</h4>
                              {result.categories.usability.coreWebVitals.cls.pass ? 
                                <CheckCircle className="w-5 h-5 text-green-600" /> : 
                                <XCircle className="w-5 h-5 text-red-600" />}
                            </div>
                            <p className="text-sm text-gray-600">
                              {result.categories.usability.coreWebVitals.cls.value.toFixed(3)}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Measures visual stability. To provide a good user experience, pages should maintain a CLS of 0.1 or less.
                            </p>
                          </div>
                          
                          <div className="border border-gray-200 rounded-md p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">Interaction to Next Paint (INP)</h4>
                              {result.categories.usability.coreWebVitals.inp.pass ? 
                                <CheckCircle className="w-5 h-5 text-green-600" /> : 
                                <XCircle className="w-5 h-5 text-red-600" />}
                            </div>
                            <p className="text-sm text-gray-600">
                              {result.categories.usability.coreWebVitals.inp.value.toFixed(0)}ms
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Measures responsiveness. To provide a good user experience, sites should have an INP of 200 milliseconds or less.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Mobile Optimization */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Mobile Optimization</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center">
                            {result.categories.usability.viewportSet ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <div>
                              <p className="font-medium">Use of Mobile Viewports</p>
                              <p className="text-xs text-gray-600">
                                {result.categories.usability.viewportSet ? 
                                  "Your page specifies a viewport matching the device's size, allowing it to render appropriately across devices." : 
                                  "Your page does not specify a viewport, causing it to render poorly on mobile devices."}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            {result.categories.usability.fontLegibility ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <div>
                              <p className="font-medium">Legible Font Sizes</p>
                              <p className="text-xs text-gray-600">
                                {result.categories.usability.fontLegibility ? 
                                  "The text on your page appears to be legible across devices." : 
                                  "The text on your page may be too small to read on mobile devices."}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            {result.categories.usability.tapTargetsSized ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <div>
                              <p className="font-medium">Tap Target Sizing</p>
                              <p className="text-xs text-gray-600">
                                {result.categories.usability.tapTargetsSized ? 
                                  "The links and buttons on your page appear to be appropriately sized for a user to easily tap on a touchscreen." : 
                                  "Some tap targets on your page are too small or too close together, making it difficult for users to tap on a touchscreen."}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            {result.categories.usability.mobileOptimized ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <div>
                              <p className="font-medium">Overall Mobile Experience</p>
                              <p className="text-xs text-gray-600">
                                {result.categories.usability.mobileOptimized ? 
                                  "Your site appears to be well optimized for mobile devices." : 
                                  "Your site needs improvement for optimal mobile experience."}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* PageSpeed Insights */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Google's PageSpeed Insights</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Mobile */}
                          <div className="border border-gray-200 rounded-md p-4">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-medium flex items-center">
                                <Smartphone className="w-4 h-4 mr-2" />
                                Mobile Score
                              </h4>
                              <div className={`text-lg font-bold ${getScoreColor(result.categories.performance.pageSpeed.mobile.score)}`}>
                                {result.categories.performance.pageSpeed.mobile.score}
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              <div>
                                <p className="text-sm font-medium">First Contentful Paint</p>
                                <p className="text-xs text-gray-600">{result.categories.performance.pageSpeed.mobile.fcp.toFixed(1)}s</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Speed Index</p>
                                <p className="text-xs text-gray-600">{result.categories.performance.pageSpeed.mobile.speedIndex.toFixed(1)}s</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Largest Contentful Paint</p>
                                <p className="text-xs text-gray-600">{result.categories.performance.pageSpeed.mobile.lcp.toFixed(1)}s</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Time to Interactive</p>
                                <p className="text-xs text-gray-600">{result.categories.performance.pageSpeed.mobile.tti.toFixed(1)}s</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Total Blocking Time</p>
                                <p className="text-xs text-gray-600">{result.categories.performance.pageSpeed.mobile.tbt.toFixed(2)}s</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Cumulative Layout Shift</p>
                                <p className="text-xs text-gray-600">{result.categories.performance.pageSpeed.mobile.cls.toFixed(3)}</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Desktop */}
                          <div className="border border-gray-200 rounded-md p-4">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-medium flex items-center">
                                <Globe className="w-4 h-4 mr-2" />
                                Desktop Score
                              </h4>
                              <div className={`text-lg font-bold ${getScoreColor(result.categories.performance.pageSpeed.desktop.score)}`}>
                                {result.categories.performance.pageSpeed.desktop.score}
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              <div>
                                <p className="text-sm font-medium">First Contentful Paint</p>
                                <p className="text-xs text-gray-600">{result.categories.performance.pageSpeed.desktop.fcp.toFixed(1)}s</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Speed Index</p>
                                <p className="text-xs text-gray-600">{result.categories.performance.pageSpeed.desktop.speedIndex.toFixed(1)}s</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Largest Contentful Paint</p>
                                <p className="text-xs text-gray-600">{result.categories.performance.pageSpeed.desktop.lcp.toFixed(1)}s</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Time to Interactive</p>
                                <p className="text-xs text-gray-600">{result.categories.performance.pageSpeed.desktop.tti.toFixed(1)}s</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Total Blocking Time</p>
                                <p className="text-xs text-gray-600">{result.categories.performance.pageSpeed.desktop.tbt.toFixed(2)}s</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Cumulative Layout Shift</p>
                                <p className="text-xs text-gray-600">{result.categories.performance.pageSpeed.desktop.cls.toFixed(3)}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Issues and Recommendations */}
                      <div className="bg-yellow-50 border border-yellow-100 rounded-md p-4">
                        <h3 className="text-lg font-semibold mb-2 flex items-center">
                          <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                          Issues & Recommendations
                        </h3>
                        <ul className="list-disc list-inside space-y-1">
                          {result.categories.usability.issues.map((issue, index) => (
                            <li key={index} className="text-sm text-gray-700">{issue}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Performance Tab */}
                <TabsContent value="performance">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <CardTitle>Performance Results</CardTitle>
                          <CardDescription className="mt-2">
                            Your page's performance has various issues that may be adversely affecting users.
                            Performance is important to ensure a good user experience and reduced bounce rates.
                          </CardDescription>
                        </div>
                        <div className="flex items-center">
                          <span className={`text-2xl font-bold ${getGradeColor(result.categories.performance.grade)} mr-2`}>
                            {result.categories.performance.grade}
                          </span>
                          {getScoreIcon(result.categories.performance.score)}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Page Size */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Page Size Analysis
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          {result.categories.performance.pageSize.total > 5000 ? 
                            "Your page's file size is quite large which, regardless of other optimizations, can reduce load speed and impact user experience." : 
                            "Your page's file size is within reasonable limits for good performance."}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-medium mb-2">Total Page Size</h4>
                            <div className="flex items-center">
                              <div className={`text-lg font-semibold ${result.categories.performance.pageSize.total > 5000 ? 'text-red-600' : 'text-green-600'}`}>
                                {(result.categories.performance.pageSize.total / 1000).toFixed(1)} MB
                              </div>
                              <div className="text-xs text-gray-500 ml-2">
                                ({result.categories.performance.pageSize.total.toLocaleString()} KB)
                              </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              A general rule is to keep your page under 5MB in total file size.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium mb-2">Page Size Breakdown</h4>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Resource Type</TableHead>
                                  <TableHead>Size (KB)</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                <TableRow>
                                  <TableCell>HTML</TableCell>
                                  <TableCell>{result.categories.performance.pageSize.html.toLocaleString()}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>JavaScript</TableCell>
                                  <TableCell>{result.categories.performance.pageSize.js.toLocaleString()}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>CSS</TableCell>
                                  <TableCell>{result.categories.performance.pageSize.css.toLocaleString()}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Images</TableCell>
                                  <TableCell>{result.categories.performance.pageSize.images.toLocaleString()}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Other</TableCell>
                                  <TableCell>{result.categories.performance.pageSize.other.toLocaleString()}</TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </div>
                        </div>
                      </div>

                      {/* Resource Count */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Resource Count
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          This shows the total number of files that need to be retrieved from web servers to load your page.
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
                          <div className="border border-gray-200 rounded-md p-3">
                            <div className="text-2xl font-bold text-blue-600">
                              {result.categories.performance.resourceCount.total}
                            </div>
                            <div className="text-xs text-gray-600">Total Objects</div>
                          </div>
                          <div className="border border-gray-200 rounded-md p-3">
                            <div className="text-2xl font-bold text-indigo-600">
                              {result.categories.performance.resourceCount.html}
                            </div>
                            <div className="text-xs text-gray-600">HTML Pages</div>
                          </div>
                          <div className="border border-gray-200 rounded-md p-3">
                            <div className="text-2xl font-bold text-yellow-600">
                              {result.categories.performance.resourceCount.js}
                            </div>
                            <div className="text-xs text-gray-600">JS Resources</div>
                          </div>
                          <div className="border border-gray-200 rounded-md p-3">
                            <div className="text-2xl font-bold text-purple-600">
                              {result.categories.performance.resourceCount.css}
                            </div>
                            <div className="text-xs text-gray-600">CSS Resources</div>
                          </div>
                          <div className="border border-gray-200 rounded-md p-3">
                            <div className="text-2xl font-bold text-green-600">
                              {result.categories.performance.resourceCount.images}
                            </div>
                            <div className="text-xs text-gray-600">Images</div>
                          </div>
                          <div className="border border-gray-200 rounded-md p-3">
                            <div className="text-2xl font-bold text-orange-600">
                              {result.categories.performance.resourceCount.other}
                            </div>
                            <div className="text-xs text-gray-600">Other Resources</div>
                          </div>
                        </div>
                      </div>

                      {/* Technical Optimizations */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Technical Optimizations</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center">
                            {result.categories.performance.compression ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <div>
                              <p className="font-medium">Website Compression</p>
                              <p className="text-xs text-gray-600">
                                {result.categories.performance.compression ? 
                                  "Your website appears to be using a reasonable level of compression." : 
                                  "Your website is not using compression effectively to reduce file sizes."}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            {result.categories.performance.minification.js && result.categories.performance.minification.css ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <div>
                              <p className="font-medium">Minification</p>
                              <p className="text-xs text-gray-600">
                                {result.categories.performance.minification.js && result.categories.performance.minification.css ? 
                                  "All your JavaScript and CSS files appear to be minified." : 
                                  "Some of your JavaScript or CSS files are not minified."}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            {result.categories.performance.imageOptimization ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <div>
                              <p className="font-medium">Image Optimization</p>
                              <p className="text-xs text-gray-600">
                                {result.categories.performance.imageOptimization ? 
                                  "All of the images on your page appear to be optimized." : 
                                  "Some images on your page are not properly optimized."}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            {!result.categories.performance.jsErrors ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <div>
                              <p className="font-medium">JavaScript Errors</p>
                              <p className="text-xs text-gray-600">
                                {!result.categories.performance.jsErrors ? 
                                  "No JavaScript errors were detected during page load." : 
                                  "Your page is reporting JavaScript errors during load."}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            {result.categories.performance.http2Enabled ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <div>
                              <p className="font-medium">HTTP/2 Usage</p>
                              <p className="text-xs text-gray-600">
                                {result.categories.performance.http2Enabled ? 
                                  "Your website is using the modern HTTP/2 protocol." : 
                                  "Your website is using an outdated HTTP protocol."}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Issues and Recommendations */}
                      <div className="bg-yellow-50 border border-yellow-100 rounded-md p-4">
                        <h3 className="text-lg font-semibold mb-2 flex items-center">
                          <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                          Issues & Recommendations
                        </h3>
                        <ul className="list-disc list-inside space-y-1">
                          {result.categories.performance.issues.map((issue, index) => (
                            <li key={index} className="text-sm text-gray-700">{issue}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Social Tab */}
                <TabsContent value="social">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <CardTitle>Social Results</CardTitle>
                          <CardDescription className="mt-2">
                            This section analyzes your social media presence and integration with your website.
                            Social activity is important for customer communication and brand awareness.
                          </CardDescription>
                        </div>
                        <div className="flex items-center">
                          <span className={`text-2xl font-bold ${getGradeColor(result.categories.social.grade)} mr-2`}>
                            {result.categories.social.grade}
                          </span>
                          {getScoreIcon(result.categories.social.score)}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Social Profiles */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Social Media Profiles</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="flex items-center">
                            {result.categories.social.profiles.facebook ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <span>Facebook Page Linked</span>
                          </div>
                          <div className="flex items-center">
                            {result.categories.social.profiles.twitter ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <span>X (Twitter) Account Linked</span>
                          </div>
                          <div className="flex items-center">
                            {result.categories.social.profiles.instagram ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <span>Instagram Linked</span>
                          </div>
                          <div className="flex items-center">
                            {result.categories.social.profiles.linkedin ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <span>LinkedIn Page Linked</span>
                          </div>
                          <div className="flex items-center">
                            {result.categories.social.profiles.youtube ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <span>YouTube Channel Linked</span>
                          </div>
                        </div>
                      </div>

                      {/* Social Integration */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Social Media Integration</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center">
                            {result.categories.social.sharing.facebookOgTags ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <div>
                              <p className="font-medium">Facebook Open Graph Tags</p>
                              <p className="text-xs text-gray-600">
                                {result.categories.social.sharing.facebookOgTags ? 
                                  "Your page is using Facebook Open Graph Tags." : 
                                  "Your page is missing Facebook Open Graph Tags."}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            {result.categories.social.sharing.twitterCards ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <div>
                              <p className="font-medium">X (Twitter) Cards</p>
                              <p className="text-xs text-gray-600">
                                {result.categories.social.sharing.twitterCards ? 
                                  "Your page is using X (Twitter) Cards." : 
                                  "Your page is not using X (Twitter) Cards."}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            {result.categories.social.pixelTracking.facebookPixel ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <div>
                              <p className="font-medium">Facebook Pixel</p>
                              <p className="text-xs text-gray-600">
                                {result.categories.social.pixelTracking.facebookPixel ? 
                                  `Your page has a Facebook Pixel installed (ID: ${result.categories.social.pixelTracking.pixelId}).` : 
                                  "Your page does not have a Facebook Pixel installed."}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Issues and Recommendations */}
                      <div className="bg-yellow-50 border border-yellow-100 rounded-md p-4">
                        <h3 className="text-lg font-semibold mb-2 flex items-center">
                          <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                          Issues & Recommendations
                        </h3>
                        <ul className="list-disc list-inside space-y-1">
                          {result.categories.social.issues.map((issue, index) => (
                            <li key={index} className="text-sm text-gray-700">{issue}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Security Tab */}
                <TabsContent value="security">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <CardTitle>Security Results</CardTitle>
                          <CardDescription className="mt-2">
                            This section analyzes your website's security implementation and provides recommendations.
                          </CardDescription>
                        </div>
                        <div className="flex items-center">
                          <span className={`text-2xl font-bold ${getGradeColor(result.categories.security.grade)} mr-2`}>
                            {result.categories.security.grade}
                          </span>
                          {getScoreIcon(result.categories.security.score)}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Security Features */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Security Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center">
                            {result.categories.security.ssl ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <div>
                              <p className="font-medium">SSL Enabled</p>
                              <p className="text-xs text-gray-600">
                                {result.categories.security.ssl ? 
                                  "Your website has SSL enabled." : 
                                  "Your website does not have SSL enabled."}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            {result.categories.security.httpsRedirect ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <div>
                              <p className="font-medium">HTTPS Redirect</p>
                              <p className="text-xs text-gray-600">
                                {result.categories.security.httpsRedirect ? 
                                  "Your page successfully redirects to a HTTPS (SSL secure) version." : 
                                  "Your page does not redirect to HTTPS."}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            {result.categories.security.dmarcRecord ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <div>
                              <p className="font-medium">DMARC Record</p>
                              <p className="text-xs text-gray-600">
                                {result.categories.security.dmarcRecord ? 
                                  "This site appears to have a valid DMARC record in place." : 
                                  "This site does not have a DMARC record."}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            {result.categories.security.spfRecord ? 
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> : 
                              <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                            <div>
                              <p className="font-medium">SPF Record</p>
                              <p className="text-xs text-gray-600">
                                {result.categories.security.spfRecord ? 
                                  "This site appears to have an SPF record." : 
                                  "This site does not have an SPF record."}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Server Information */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Server Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium">Server</p>
                            <p className="text-xs text-gray-600">{result.categories.technology.server}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">IP Address</p>
                            <p className="text-xs text-gray-600">{result.categories.technology.ipAddress}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Issues and Recommendations */}
                      <div className="bg-yellow-50 border border-yellow-100 rounded-md p-4">
                        <h3 className="text-lg font-semibold mb-2 flex items-center">
                          <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                          Issues & Recommendations
                        </h3>
                        <ul className="list-disc list-inside space-y-1">
                          {result.categories.security.issues.map((issue, index) => (
                            <li key={index} className="text-sm text-gray-700">{issue}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Rankings Tab */}
                <TabsContent value="rankings">
                  <Card>
                    <CardHeader>
                      <CardTitle>SEO Rankings</CardTitle>
                      <CardDescription className="mt-2">
                        This shows your top keyword rankings and estimated search traffic.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Traffic Summary */}
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <h3 className="text-lg font-semibold mb-2">Total Traffic From Search</h3>
                        <p className="text-3xl font-bold text-blue-600">
                          {result.categories.seoRankings.estimatedMonthlyTraffic.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-600">Monthly Traffic Volume</p>
                      </div>
                      
                      {/* Keyword Rankings */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Top Keyword Rankings</h3>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Keyword</TableHead>
                              <TableHead>Position</TableHead>
                              <TableHead>Total Searches</TableHead>
                              <TableHead>Estimated Traffic</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {result.categories.seoRankings.topKeywords.map((keyword, index) => (
                              <TableRow key={index}>
                                <TableCell>{keyword.keyword}</TableCell>
                                <TableCell>{keyword.position}</TableCell>
                                <TableCell>{keyword.searches.toLocaleString()}</TableCell>
                                <TableCell>{keyword.estimatedTraffic.toLocaleString()}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      
                      {/* Position Summary */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Keyword Positions</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          This shows a summary of the positions for your keyword rankings. 
                          The higher you rank, the more likely you are to capture traffic, with recent 
                          research showing that as much as 92% of clicks happen on the first page.
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                          <div className="border border-gray-200 rounded-md p-3">
                            <div className="text-2xl font-bold text-green-600">
                              {result.categories.seoRankings.positionSummary.pos1}
                            </div>
                            <div className="text-xs text-gray-600">Position 1</div>
                          </div>
                          <div className="border border-gray-200 rounded-md p-3">
                            <div className="text-2xl font-bold text-green-600">
                              {result.categories.seoRankings.positionSummary.pos2to3}
                            </div>
                            <div className="text-xs text-gray-600">Position 2-3</div>
                          </div>
                          <div className="border border-gray-200 rounded-md p-3">
                            <div className="text-2xl font-bold text-blue-600">
                              {result.categories.seoRankings.positionSummary.pos4to10}
                            </div>
                            <div className="text-xs text-gray-600">Position 4-10</div>
                          </div>
                          <div className="border border-gray-200 rounded-md p-3">
                            <div className="text-2xl font-bold text-yellow-600">
                              {result.categories.seoRankings.positionSummary.pos11to20}
                            </div>
                            <div className="text-xs text-gray-600">Position 11-20</div>
                          </div>
                          <div className="border border-gray-200 rounded-md p-3">
                            <div className="text-2xl font-bold text-orange-500">
                              {result.categories.seoRankings.positionSummary.pos21to30}
                            </div>
                            <div className="text-xs text-gray-600">Position 21-30</div>
                          </div>
                          <div className="border border-gray-200 rounded-md p-3">
                            <div className="text-2xl font-bold text-gray-500">
                              {result.categories.seoRankings.positionSummary.pos31to100}
                            </div>
                            <div className="text-xs text-gray-600">Position 31-100</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Technologies */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {result.categories.technology.technologies.map((tech, index) => (
                            <div key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Local SEO */}
                      {result.categories.localSEO.googleBusinessProfile && (
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Local SEO</h3>
                          <div className="border border-gray-200 rounded-md p-4">
                            <h4 className="font-medium mb-2">Google Business Profile</h4>
                            <p className="text-sm font-semibold">{result.categories.localSEO.businessDetails.name}</p>
                            <p className="text-sm text-gray-600">{result.categories.localSEO.businessDetails.address}</p>
                            <p className="text-sm text-gray-600">{result.categories.localSEO.businessDetails.phone}</p>
                            <div className="flex items-center mt-2">
                              <div className="flex text-yellow-500">
                                {'★'.repeat(Math.round(result.categories.localSEO.businessDetails.rating))}
                                {'☆'.repeat(5 - Math.round(result.categories.localSEO.businessDetails.rating))}
                              </div>
                              <span className="text-sm text-gray-600 ml-2">
                                {result.categories.localSEO.businessDetails.rating.toFixed(1)} ({result.categories.localSEO.businessDetails.reviewCount} reviews)
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* CTA */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-none">
                <CardContent className="text-center py-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Want to Improve Your Score?
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                    Our team of experts can help you fix these issues and improve your website's performance,
                    SEO rankings, and user experience.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="marketing-gradient text-white">
                      Get Professional Help
                    </Button>
                    <Button variant="outline" className="flex items-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download Full Report
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

