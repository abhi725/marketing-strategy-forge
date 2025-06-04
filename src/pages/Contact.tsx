
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    services: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      services: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to transform your digital presence? Get in touch with our experts and let's discuss how we can help accelerate your business growth.
          </p>
        </div>
      </section>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Get Your Free Strategy Consultation
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours with a customized strategy proposal.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <Input
                          id="companyName"
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => handleInputChange('companyName', e.target.value)}
                          className="w-full"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-2">
                        Service(s) of Interest
                      </label>
                      <Select value={formData.services} onValueChange={(value) => handleInputChange('services', value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-200 z-50">
                          <SelectItem value="content-marketing">Content Marketing</SelectItem>
                          <SelectItem value="digital-advertising">Digital Advertising</SelectItem>
                          <SelectItem value="seo">SEO Services</SelectItem>
                          <SelectItem value="social-media">Social Media Marketing</SelectItem>
                          <SelectItem value="community-management">Community Management</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                          <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details / Message *
                      </label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="w-full"
                        placeholder="Tell us about your business goals, current challenges, and what you're hoping to achieve with digital marketing..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full marketing-gradient text-white font-semibold py-3"
                    >
                      Send Message & Request Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">hello@marketingstrategyforge.com</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Response Time</h3>
                    <p className="text-gray-600">We typically respond within 24 hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 marketing-gradient text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Free Strategy Audit</h3>
                  <p className="mb-4">
                    Get a comprehensive analysis of your current digital marketing efforts and discover opportunities for growth.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>✓ Competitive Analysis</li>
                    <li>✓ SEO Assessment</li>
                    <li>✓ Content Review</li>
                    <li>✓ Growth Recommendations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
