
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, TrendingUp, Target, BarChart } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "2025 Digital Marketing Trends: What's Driving Business Growth",
    excerpt: "Discover the top digital marketing strategies that are generating real ROI for businesses in 2025, from AI-powered personalization to omnichannel experiences.",
    author: "Sarah Mitchell",
    date: "January 5, 2025",
    readTime: "8 min read",
    category: "Digital Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=entropy&auto=format",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "How SwanSuite Increased Client ROI by 300% in Q4 2024",
      excerpt: "A detailed case study showing how our integrated platform helped businesses achieve unprecedented growth through data-driven marketing automation.",
      author: "Michael Chen",
      date: "December 28, 2024",
      readTime: "6 min read",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=entropy&auto=format"
    },
    {
      id: 3,
      title: "SEO in 2025: Beyond Keywords to User Intent",
      excerpt: "Learn how search engines are evolving and what this means for your content strategy and technical SEO approach.",
      author: "Emma Rodriguez",
      date: "December 20, 2024", 
      readTime: "5 min read",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop&crop=entropy&auto=format"
    },
    {
      id: 4,
      title: "PPC Optimization: 7 Strategies That Cut Costs by 40%",
      excerpt: "Proven tactics to reduce your cost-per-click while maintaining or improving conversion rates across Google Ads and social platforms.",
      author: "David Park",
      date: "December 15, 2024",
      readTime: "7 min read", 
      category: "PPC",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&crop=entropy&auto=format"
    },
    {
      id: 5,
      title: "Content Marketing ROI: Measuring What Actually Matters",
      excerpt: "Stop guessing if your content works. Here's how to track metrics that directly correlate with business growth and revenue.",
      author: "Lisa Thompson",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Content Marketing",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=250&fit=crop&crop=entropy&auto=format"
    },
    {
      id: 6,
      title: "Social Media Algorithms: How to Beat Them in 2025",
      excerpt: "Understanding platform algorithms and creating content that naturally increases reach and engagement without paid promotion.",
      author: "James Wilson",
      date: "December 5, 2024",
      readTime: "5 min read",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop&crop=entropy&auto=format"
    }
  ];

  const categories = [
    { name: "All Posts", count: 25, active: true },
    { name: "Digital Strategy", count: 8 },
    { name: "SEO", count: 6 },
    { name: "PPC", count: 5 },
    { name: "Content Marketing", count: 4 },
    { name: "Social Media", count: 2 }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Digital Marketing Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Expert strategies, case studies, and actionable tips to grow your business. 
            Learn from real campaigns that delivered measurable results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center text-sm text-gray-600">
              <TrendingUp className="w-4 h-4 mr-2 text-blue-600" />
              <span>Weekly insights from industry experts</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Target className="w-4 h-4 mr-2 text-green-600" />
              <span>Real case studies with measurable ROI</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <BarChart className="w-4 h-4 mr-2 text-purple-600" />
              <span>Data-driven strategies that work</span>
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={category.active ? "default" : "outline"}
              size="sm"
              className={category.active ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-blue-50"}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="mb-16 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <Badge className="w-fit mb-4 bg-blue-600">{featuredPost.category}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <User className="w-4 h-4 mr-2" />
                <span className="mr-4">{featuredPost.author}</span>
                <Calendar className="w-4 h-4 mr-2" />
                <span className="mr-4">{featuredPost.date}</span>
                <Clock className="w-4 h-4 mr-2" />
                <span>{featuredPost.readTime}</span>
              </div>
              <Button className="w-fit bg-blue-600 hover:bg-blue-700">
                Read Full Article
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="aspect-square md:aspect-auto">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <Badge variant="outline" className="mb-3">{post.category}</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-3">{post.author}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h2>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Get our weekly newsletter with the latest digital marketing strategies, 
            case studies, and industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-gray-900 flex-1"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Join 5,000+ marketers. Unsubscribe anytime.
          </p>
        </Card>
      </div>
    </Layout>
  );
};

export default Blog;
