
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Shield, AlertTriangle } from 'lucide-react';

const SLA = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Level Agreement</h1>
          <p className="text-xl text-gray-600 mb-4">
            Our commitment to reliable, high-quality digital marketing services
          </p>
          <Badge variant="outline" className="text-sm">
            Last Updated: January 6, 2025
          </Badge>
        </div>

        {/* Service Scope */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <Shield className="w-6 h-6 text-blue-600 mr-3" />
            Service Scope & Commitments
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              SwanDigitals provides the following services under this SLA:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Digital Marketing Campaign Management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>SEO Services & Website Optimization</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Social Media Management & Content Creation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Analytics Reporting & Performance Monitoring</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>SwanSuite Platform Access & Support</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Uptime Guarantee */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Uptime & Availability Guarantee
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Service Availability</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-gray-600">Monthly Uptime Guarantee</div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Measured across all SwanSuite platform services and client campaign management tools.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Monitoring Methodology</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 24/7 automated monitoring from multiple locations</li>
                <li>• 5-minute interval health checks</li>
                <li>• Real-time alerting for service degradation</li>
                <li>• Monthly uptime reports provided to clients</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Support Response Times */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <Clock className="w-6 h-6 text-blue-600 mr-3" />
            Support Response & Resolution Times
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold">Priority Level</th>
                  <th className="text-left py-3 px-4 font-semibold">Description</th>
                  <th className="text-left py-3 px-4 font-semibold">Response Time</th>
                  <th className="text-left py-3 px-4 font-semibold">Resolution Target</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">
                    <Badge className="bg-red-100 text-red-800">Critical</Badge>
                  </td>
                  <td className="py-3 px-4 text-sm">Service completely unavailable or major campaign issues</td>
                  <td className="py-3 px-4 font-semibold">1 hour</td>
                  <td className="py-3 px-4">4 hours</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">
                    <Badge className="bg-orange-100 text-orange-800">High</Badge>
                  </td>
                  <td className="py-3 px-4 text-sm">Significant functionality impaired or reporting issues</td>
                  <td className="py-3 px-4 font-semibold">4 hours</td>
                  <td className="py-3 px-4">24 hours</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">
                    <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
                  </td>
                  <td className="py-3 px-4 text-sm">Minor issues or general inquiries</td>
                  <td className="py-3 px-4 font-semibold">24 hours</td>
                  <td className="py-3 px-4">5 business days</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">
                    <Badge className="bg-green-100 text-green-800">Low</Badge>
                  </td>
                  <td className="py-3 px-4 text-sm">Feature requests or documentation questions</td>
                  <td className="py-3 px-4 font-semibold">2 business days</td>
                  <td className="py-3 px-4">10 business days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Service Credits */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Service Credits & Compensation
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Credit Calculation</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2">Monthly Uptime</th>
                      <th className="text-left py-2">Service Credit</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr><td className="py-1">Less than 99.9% but ≥ 99.0%</td><td>10% of monthly fees</td></tr>
                    <tr><td className="py-1">Less than 99.0% but ≥ 95.0%</td><td>25% of monthly fees</td></tr>
                    <tr><td className="py-1">Less than 95.0%</td><td>50% of monthly fees</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Credit Request Process</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Submit credit request within 30 days of the incident</li>
                <li>• Include specific dates and times of service unavailability</li>
                <li>• Credits applied to next billing cycle automatically</li>
                <li>• Maximum credit per month: 50% of monthly service fees</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Exclusions */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
            Exclusions & Limitations
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">This SLA does not apply to service unavailability caused by:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Force majeure events (natural disasters, government actions, etc.)</li>
              <li>• Customer-caused outages or misconfigurations</li>
              <li>• Scheduled maintenance (with 48-hour advance notice)</li>
              <li>• Third-party service failures beyond our control</li>
              <li>• Internet connectivity issues on customer's end</li>
              <li>• Suspension due to non-payment or terms violation</li>
              <li>• Beta or experimental features marked as such</li>
            </ul>
          </div>
        </Card>

        {/* Termination */}
        <Card className="p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Termination & Modifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Termination Rights</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Either party may terminate with 30 days written notice</li>
                <li>• Immediate termination for material breach</li>
                <li>• Data export assistance provided for 30 days post-termination</li>
                <li>• Pro-rated refunds for unused services</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">SLA Modifications</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Changes require 60 days advance notice</li>
                <li>• Notification via email and platform announcements</li>
                <li>• Continued use constitutes acceptance</li>
                <li>• Right to terminate if changes are unacceptable</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Contact */}
        <div className="text-center mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Questions about our SLA?</h3>
          <p className="text-gray-600 mb-4">Contact our support team for clarification or assistance</p>
          <div className="space-y-1 text-sm text-gray-600">
            <p>Email: <span className="text-blue-600">support@swandigitals.com</span></p>
            <p>Phone: <span className="text-blue-600">[Support Phone Number]</span></p>
            <p>Hours: Monday-Friday, 9 AM - 6 PM EST</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SLA;
