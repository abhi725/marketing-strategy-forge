
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About Marketing Strategy Forge
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're passionate digital marketing experts dedicated to forging powerful strategies that transform businesses and drive exceptional growth.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              Marketing Strategy Forge was founded with a simple yet powerful vision: to bridge the gap between traditional marketing approaches and the dynamic, data-driven strategies that today's digital landscape demands. Our founders recognized that many businesses were struggling to navigate the complex world of digital marketing, often working with agencies that promised the world but delivered generic, cookie-cutter solutions.
            </p>
            <p className="mb-6">
              What started as a small consultancy has evolved into a full-service digital marketing agency, but our core philosophy remains unchanged. We believe that every business is unique, with its own challenges, opportunities, and goals. That's why we don't just execute campaigns – we forge comprehensive strategies that are as individual as the businesses we serve.
            </p>
            <p>
              Today, we're proud to work with businesses across various industries, from innovative startups to established enterprises, helping them achieve their digital marketing objectives and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower businesses of all sizes by crafting innovative, data-driven digital marketing strategies that deliver measurable results and sustainable growth. We're committed to being more than just a service provider – we're your strategic partner in building a powerful digital presence that resonates with your audience and drives your business forward.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become the leading digital marketing agency that businesses trust to navigate the ever-evolving digital landscape. We envision a future where every business, regardless of size or industry, has access to sophisticated, results-driven marketing strategies that help them thrive in the digital economy and achieve their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Integrity",
                description: "We operate with complete honesty and transparency in all our client relationships and business practices."
              },
              {
                title: "Innovation",
                description: "We continuously explore new technologies, strategies, and approaches to stay ahead of digital marketing trends."
              },
              {
                title: "Collaboration",
                description: "We work as true partners with our clients, combining our expertise with their industry knowledge for optimal results."
              },
              {
                title: "Client Success",
                description: "Your success is our success. We measure our achievements by the growth and results we deliver for your business."
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{value.title[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Our Strategic Approach</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Discovery & Analysis</h3>
              <p className="text-gray-600">
                We begin every partnership with comprehensive research into your business, industry, competitors, and target audience. This foundation ensures our strategies are built on solid insights rather than assumptions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Strategy Development</h3>
              <p className="text-gray-600">
                Using our research findings, we craft customized digital marketing strategies that align with your business objectives, target the right audience, and leverage the most effective channels for your industry.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Implementation & Optimization</h3>
              <p className="text-gray-600">
                We execute your strategy with precision, continuously monitoring performance metrics and making data-driven optimizations to ensure maximum effectiveness and ROI.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">4. Reporting & Growth</h3>
              <p className="text-gray-600">
                Through transparent reporting and regular strategy sessions, we keep you informed of progress and work together to identify new opportunities for growth and expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Love Digital Marketing */}
      <section className="py-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why We Love Digital Marketing</h2>
          <p className="text-xl leading-relaxed mb-8">
            Digital marketing isn't just our profession – it's our passion. We love the dynamic nature of the digital landscape, where creativity meets analytics, and where a single insight can transform a business overnight. Every day brings new opportunities to help our clients connect with their audience in meaningful ways, and there's nothing more rewarding than seeing a strategy we've crafted drive real, measurable growth for the businesses we serve.
          </p>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            <Link to="/contact">Let's Create Something Amazing Together</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
