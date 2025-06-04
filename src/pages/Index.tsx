
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import WhyChooseUs from '@/components/WhyChooseUs';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Marketing Strategy Forge is a results-oriented digital marketing agency dedicated to empowering businesses 
            through innovative digital strategies. Our mission is to transform your online presence into a powerful 
            growth engine that delivers measurable results. We believe in the power of data-driven marketing, 
            transparent communication, and building long-term partnerships with our clients. Every strategy we craft 
            is designed to not just meet your current needs, but to position your business for sustainable success 
            in an ever-evolving digital landscape.
          </p>
        </div>
      </section>

      <ServicesOverview />
      <WhyChooseUs />
      
      {/* Social Proof Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Growing Businesses
            </h2>
            <p className="text-xl text-gray-300">
              See what our clients say about working with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Marketing Strategy Forge transformed our online presence completely. Our leads increased by 250% in just 6 months!",
                author: "Sarah Johnson",
                company: "TechStart Solutions",
                role: "CEO"
              },
              {
                quote: "The transparency and results-driven approach is exactly what we needed. Finally, a marketing partner that delivers on their promises.",
                author: "Michael Chen",
                company: "GreenLeaf Industries",
                role: "Marketing Director"
              },
              {
                quote: "Their content marketing strategy helped us establish thought leadership in our industry. The ROI has been incredible.",
                author: "Emily Rodriguez",
                company: "InnovateCorp",
                role: "Founder"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
