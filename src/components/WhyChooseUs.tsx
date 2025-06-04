
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Users, Globe, Activity } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: BarChart,
      title: 'Results-Driven Strategies',
      description: 'Every campaign is built on data insights and designed to deliver measurable outcomes that directly impact your bottom line.',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Experienced & Passionate Team',
      description: 'Our certified experts bring years of industry experience and stay ahead of the latest digital marketing trends and best practices.',
      color: 'text-purple-600'
    },
    {
      icon: Globe,
      title: 'Transparent Reporting',
      description: 'Receive detailed monthly reports with clear metrics, insights, and recommendations for continuous improvement.',
      color: 'text-green-600'
    },
    {
      icon: Activity,
      title: 'Customized Solutions',
      description: 'No cookie-cutter approaches. We craft unique strategies tailored to your specific industry, goals, and target audience.',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Partner With Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another agency. We're your strategic partner committed to your long-term success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={benefit.title} className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50 ${benefit.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have accelerated their growth with our proven digital marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white marketing-gradient rounded-lg hover:shadow-lg transition-all duration-300">
                Start Your Free Consultation
              </a>
              <a href="/about" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
