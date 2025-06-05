
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Shield, Eye, Download, Trash2, Settings, Mail, Lock } from 'lucide-react';

const Privacy = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 mb-4">
            Your privacy is important to us. This policy explains how we collect, use, and protect your data.
          </p>
          <Badge variant="outline" className="text-sm">
            Last Updated: January 6, 2025
          </Badge>
        </div>

        {/* Quick Summary */}
        <Card className="p-8 mb-8 bg-blue-50 border-blue-200">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Quick Summary</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">What We Collect:</h3>
              <ul className="space-y-1 text-blue-700">
                <li>• Contact information (name, email, phone)</li>
                <li>• Website usage data and cookies</li>
                <li>• Payment information (processed securely)</li>
                <li>• Marketing preferences and interactions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Your Rights:</h3>
              <ul className="space-y-1 text-blue-700">
                <li>• Access your data anytime</li>
                <li>• Request deletion (right to be forgotten)</li>
                <li>• Opt out of marketing communications</li>
                <li>• Data portability and correction rights</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Data Collection Table */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <Eye className="w-6 h-6 text-blue-600 mr-3" />
            Data We Collect
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold">Data Type</th>
                  <th className="text-left py-3 px-4 font-semibold">Purpose</th>
                  <th className="text-left py-3 px-4 font-semibold">Legal Basis</th>
                  <th className="text-left py-3 px-4 font-semibold">Retention</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Contact Information</td>
                  <td className="py-3 px-4">Service delivery, support, billing</td>
                  <td className="py-3 px-4">Contract performance</td>
                  <td className="py-3 px-4">Duration of service + 7 years</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Usage Analytics</td>
                  <td className="py-3 px-4">Service improvement, performance monitoring</td>
                  <td className="py-3 px-4">Legitimate interest</td>
                  <td className="py-3 px-4">26 months</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Marketing Data</td>
                  <td className="py-3 px-4">Email campaigns, personalization</td>
                  <td className="py-3 px-4">Consent</td>
                  <td className="py-3 px-4">Until opt-out or 3 years inactivity</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Payment Information</td>
                  <td className="py-3 px-4">Transaction processing, fraud prevention</td>
                  <td className="py-3 px-4">Contract performance</td>
                  <td className="py-3 px-4">7 years (regulatory requirement)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Technical Logs</td>
                  <td className="py-3 px-4">Security, troubleshooting, legal compliance</td>
                  <td className="py-3 px-4">Legitimate interest</td>
                  <td className="py-3 px-4">12 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Cookie Declaration */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Cookie Declaration
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="essential">
              <AccordionTrigger>
                <div className="flex items-center">
                  <Badge className="bg-red-100 text-red-800 mr-3">Essential</Badge>
                  Essential Cookies
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600 mb-3">
                  Required for basic website functionality. Cannot be disabled.
                </p>
                <ul className="text-sm space-y-1">
                  <li><strong>Session cookies:</strong> User authentication and security</li>
                  <li><strong>CSRF tokens:</strong> Protection against cross-site attacks</li>
                  <li><strong>Load balancer cookies:</strong> Proper service routing</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="analytics">
              <AccordionTrigger>
                <div className="flex items-center">
                  <Badge className="bg-blue-100 text-blue-800 mr-3">Analytics</Badge>
                  Analytics & Performance
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600 mb-3">
                  Help us understand how visitors interact with our website.
                </p>
                <ul className="text-sm space-y-1">
                  <li><strong>Google Analytics:</strong> Website usage statistics (anonymized)</li>
                  <li><strong>Hotjar:</strong> User behavior analysis and heatmaps</li>
                  <li><strong>Performance monitoring:</strong> Page load times and errors</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="marketing">
              <AccordionTrigger>
                <div className="flex items-center">
                  <Badge className="bg-green-100 text-green-800 mr-3">Marketing</Badge>
                  Marketing & Advertising
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600 mb-3">
                  Used to deliver relevant ads and track marketing campaign effectiveness.
                </p>
                <ul className="text-sm space-y-1">
                  <li><strong>Google Ads:</strong> Conversion tracking and remarketing</li>
                  <li><strong>Facebook Pixel:</strong> Social media advertising optimization</li>
                  <li><strong>LinkedIn Insight:</strong> B2B marketing attribution</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-3">
              <Settings className="inline w-4 h-4 mr-1" />
              You can manage your cookie preferences at any time using our cookie consent tool.
            </p>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Manage Cookie Preferences
            </Button>
          </div>
        </Card>

        {/* Data Sharing */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Data Sharing & Third Parties
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Service Providers</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Stripe:</strong> Payment processing</li>
                <li><strong>AWS/Google Cloud:</strong> Data hosting and storage</li>
                <li><strong>Mailchimp:</strong> Email marketing platform</li>
                <li><strong>Intercom:</strong> Customer support chat</li>
                <li><strong>Zapier:</strong> Workflow automation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Data Protection Measures</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• All third parties are GDPR compliant</li>
                <li>• Data processing agreements in place</li>
                <li>• Regular security audits conducted</li>
                <li>• Data minimization principles applied</li>
                <li>• EU-US Privacy Framework compliance</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>CCPA Notice:</strong> We do not sell personal information to third parties. 
              We may share data with service providers for business purposes as outlined above.
            </p>
          </div>
        </Card>

        {/* Your Rights */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <Shield className="w-6 h-6 text-blue-600 mr-3" />
            Your Privacy Rights
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Eye className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Right to Access</h3>
                  <p className="text-sm text-gray-600">Request a copy of all personal data we hold about you</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Settings className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Right to Rectification</h3>
                  <p className="text-sm text-gray-600">Correct any inaccurate or incomplete information</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Trash2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Right to Erasure</h3>
                  <p className="text-sm text-gray-600">Request deletion of your personal data ("right to be forgotten")</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Download className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Right to Portability</h3>
                  <p className="text-sm text-gray-600">Export your data in a machine-readable format</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Lock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Right to Restrict Processing</h3>
                  <p className="text-sm text-gray-600">Limit how we use your personal information</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Right to Object</h3>
                  <p className="text-sm text-gray-600">Opt out of marketing communications and profiling</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-3">How to Exercise Your Rights</h3>
            <p className="text-sm text-blue-800 mb-4">
              To submit a privacy request, please contact us using the information below. 
              We will respond within 30 days for GDPR requests and 45 days for CCPA requests.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Email Privacy Request
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download My Data
              </Button>
              <Button variant="outline" size="sm">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete My Account
              </Button>
            </div>
          </div>
        </Card>

        {/* Security Measures */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Security & Data Protection
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Technical Safeguards</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• AES-256 encryption at rest</li>
                <li>• TLS 1.3 encryption in transit</li>
                <li>• Multi-factor authentication</li>
                <li>• Regular security audits</li>
                <li>• Automated backup systems</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Administrative Controls</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Role-based access controls</li>
                <li>• Employee security training</li>
                <li>• Background checks</li>
                <li>• Incident response procedures</li>
                <li>• Privacy impact assessments</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Compliance Standards</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• SOC 2 Type II certified</li>
                <li>• GDPR compliant</li>
                <li>• CCPA compliant</li>
                <li>• ISO 27001 aligned</li>
                <li>• Regular penetration testing</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Children's Privacy */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Children's Privacy (COPPA Compliance)
          </h2>
          <p className="text-gray-700 mb-4">
            Our services are not intended for children under 13 years of age. We do not knowingly collect 
            personal information from children under 13. If you become aware that a child has provided us 
            with personal information, please contact us immediately.
          </p>
          <p className="text-gray-700">
            If we discover that we have collected personal information from a child under 13, we will 
            take steps to delete such information from our systems promptly.
          </p>
        </Card>

        {/* International Transfers */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            International Data Transfers
          </h2>
          <p className="text-gray-700 mb-4">
            Your data may be transferred to and processed in countries other than your own. We ensure 
            appropriate safeguards are in place for international transfers:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• EU Standard Contractual Clauses (SCCs)</li>
            <li>• Adequacy decisions by the European Commission</li>
            <li>• EU-US Privacy Framework participation</li>
            <li>• Binding Corporate Rules where applicable</li>
          </ul>
        </Card>

        {/* Updates & Changes */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Policy Updates & Changes
          </h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. When we make changes, we will:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Update the "Last Modified" date at the top of this page</li>
            <li>• Send email notifications for material changes</li>
            <li>• Post notices on our website and platform</li>
            <li>• Provide 30 days notice before changes take effect</li>
          </ul>
          <p className="text-gray-700">
            Your continued use of our services after changes take effect constitutes acceptance of the updated policy.
          </p>
        </Card>

        {/* Contact Information */}
        <Card className="p-8 bg-blue-50 border-blue-200">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">
            Contact Us & Data Protection Officer
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-800 mb-3">General Privacy Inquiries</h3>
              <div className="space-y-2 text-sm text-blue-700">
                <p><strong>Email:</strong> privacy@swandigitals.com</p>
                <p><strong>Phone:</strong> [Privacy Contact Number]</p>
                <p><strong>Address:</strong> SwanDigitals Privacy Team<br />
                [Company Address]<br />
                [City, State, ZIP Code]</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 mb-3">Data Protection Officer</h3>
              <div className="space-y-2 text-sm text-blue-700">
                <p><strong>Email:</strong> dpo@swandigitals.com</p>
                <p><strong>Response Time:</strong> 72 hours for urgent matters</p>
                <p><strong>Languages:</strong> English, Spanish, French</p>
                <p><strong>EU Representative:</strong> [EU Representative Name]<br />
                [EU Representative Address]</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Supervisory Authority:</strong> If you have concerns about our data practices, 
              you have the right to lodge a complaint with your local data protection authority or 
              the Information Commissioner's Office (ICO) in the UK.
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Privacy;
