
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scale, FileText, AlertTriangle, CreditCard } from 'lucide-react';

const Terms = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600 mb-4">
            Legal terms and conditions governing your use of SwanDigitals services
          </p>
          <Badge variant="outline" className="text-sm">
            Last Updated: January 6, 2025
          </Badge>
        </div>

        {/* Acceptance */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <Scale className="w-6 h-6 text-blue-600 mr-3" />
            Acceptance of Terms
          </h2>
          <p className="text-gray-700 mb-4">
            By accessing or using SwanDigitals services, you agree to be bound by these Terms of Service 
            and our Privacy Policy. If you do not agree to these terms, please do not use our services.
          </p>
          <p className="text-gray-700">
            These terms constitute a legally binding agreement between you and SwanDigitals LLC, 
            a Delaware corporation.
          </p>
        </Card>

        {/* Services Description */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <FileText className="w-6 h-6 text-blue-600 mr-3" />
            Description of Services
          </h2>
          <p className="text-gray-700 mb-4">
            SwanDigitals provides digital marketing services including but not limited to:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Search Engine Optimization (SEO)</li>
            <li>• Pay-Per-Click (PPC) advertising management</li>
            <li>• Content marketing and creation</li>
            <li>• Social media marketing and management</li>
            <li>• SwanSuite marketing automation platform</li>
            <li>• Analytics and reporting services</li>
            <li>• Marketing strategy consultation</li>
          </ul>
          <p className="text-gray-700">
            Services are provided subject to availability and may be modified, suspended, or discontinued 
            at our discretion with appropriate notice.
          </p>
        </Card>

        {/* User Obligations */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            User Obligations & Acceptable Use
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">You agree to:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Provide accurate and complete information</li>
                <li>• Maintain the security of your account credentials</li>
                <li>• Use services only for lawful business purposes</li>
                <li>• Comply with all applicable laws and regulations</li>
                <li>• Respect intellectual property rights</li>
                <li>• Pay all fees when due</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Prohibited activities include:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Uploading malicious code or viruses</li>
                <li>• Attempting to gain unauthorized access</li>
                <li>• Violating advertising platform policies</li>
                <li>• Sending spam or unsolicited communications</li>
                <li>• Promoting illegal or harmful content</li>
                <li>• Reverse engineering our software</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Payment Terms */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <CreditCard className="w-6 h-6 text-blue-600 mr-3" />
            Payment Terms & Billing
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Payment Schedule</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Monthly services: Billed in advance</li>
                <li>• Setup fees: Due upon service initiation</li>
                <li>• Ad spend: Billed monthly with management fees</li>
                <li>• Project work: Per agreed milestone schedule</li>
                <li>• Late payments: 1.5% monthly interest charge</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Refund Policy</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Setup fees: Non-refundable</li>
                <li>• Monthly fees: Pro-rated for early termination</li>
                <li>• Ad spend: Non-refundable (third-party costs)</li>
                <li>• Disputes: Must be raised within 30 days</li>
                <li>• Refunds processed within 14 business days</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Intellectual Property */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Intellectual Property Rights
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Property</h3>
              <p className="text-gray-700 text-sm">
                SwanSuite platform, methodologies, templates, and proprietary tools remain our exclusive property. 
                Clients receive a limited license for use during the service period.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Client Property</h3>
              <p className="text-gray-700 text-sm">
                Clients retain ownership of their brand assets, content, and data. We receive license to use 
                these materials solely for providing contracted services.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Work Product</h3>
              <p className="text-gray-700 text-sm">
                Custom strategies, campaigns, and content created specifically for clients become client property 
                upon full payment. Generic methodologies remain our property.
              </p>
            </div>
          </div>
        </Card>

        {/* Confidentiality */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Confidentiality & Non-Disclosure
          </h2>
          <p className="text-gray-700 mb-4">
            Both parties agree to maintain strict confidentiality regarding:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Business strategies and marketing plans</li>
            <li>• Financial information and performance metrics</li>
            <li>• Customer data and contact lists</li>
            <li>• Proprietary tools and methodologies</li>
            <li>• Any information marked as confidential</li>
          </ul>
          <p className="text-gray-700">
            This obligation survives termination of our agreement and continues for 3 years thereafter.
          </p>
        </Card>

        {/* Limitation of Liability */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
            Limitation of Liability
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800 font-semibold mb-2">IMPORTANT LEGAL NOTICE</p>
              <p className="text-sm text-yellow-700">
                Please read this section carefully as it limits our liability and affects your legal rights.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Service Disclaimer</h3>
              <p className="text-gray-700 text-sm">
                Marketing results cannot be guaranteed. Performance depends on many factors including 
                market conditions, competition, and client cooperation. We provide services on an "as is" basis.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Liability Cap</h3>
              <p className="text-gray-700 text-sm">
                Our total liability for any claim shall not exceed the amount paid by client in the 
                12 months preceding the claim, or $10,000, whichever is less.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Excluded Damages</h3>
              <p className="text-gray-700 text-sm">
                We are not liable for indirect, incidental, consequential, or punitive damages, 
                including lost profits, even if we have been advised of their possibility.
              </p>
            </div>
          </div>
        </Card>

        {/* Termination */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Termination & Suspension
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Termination Rights</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Either party: 30 days written notice</li>
                <li>• For cause: Immediate with material breach</li>
                <li>• Non-payment: 10 days after notice</li>
                <li>• Policy violations: Immediate suspension</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Effect of Termination</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Service access ends immediately</li>
                <li>• Outstanding fees become due</li>
                <li>• Data export provided for 30 days</li>
                <li>• Confidentiality obligations survive</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Dispute Resolution */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Dispute Resolution & Governing Law
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Informal Resolution</h3>
              <p className="text-gray-700 text-sm">
                Before initiating formal proceedings, parties agree to attempt good faith resolution 
                through direct negotiation for at least 30 days.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Binding Arbitration</h3>
              <p className="text-gray-700 text-sm">
                Disputes not resolved informally shall be settled by binding arbitration under 
                AAA Commercial Arbitration Rules. Location: Delaware. Language: English.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Governing Law</h3>
              <p className="text-gray-700 text-sm">
                These terms are governed by Delaware state law, excluding conflict of law principles. 
                Federal courts in Delaware have exclusive jurisdiction for any non-arbitrable matters.
              </p>
            </div>
          </div>
        </Card>

        {/* Miscellaneous */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Miscellaneous Provisions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Severability</h3>
              <p className="mb-4">If any provision is unenforceable, the remainder remains in effect.</p>
              
              <h3 className="font-semibold text-gray-800 mb-2">Force Majeure</h3>
              <p className="mb-4">Neither party is liable for delays due to circumstances beyond reasonable control.</p>
              
              <h3 className="font-semibold text-gray-800 mb-2">Assignment</h3>
              <p>Rights cannot be assigned without written consent, except in connection with merger or acquisition.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Entire Agreement</h3>
              <p className="mb-4">These terms constitute the complete agreement and supersede all prior agreements.</p>
              
              <h3 className="font-semibold text-gray-800 mb-2">Amendments</h3>
              <p className="mb-4">Changes require written agreement or 30 days notice for unilateral modifications.</p>
              
              <h3 className="font-semibold text-gray-800 mb-2">Waiver</h3>
              <p>Failure to enforce any provision does not constitute waiver of future enforcement.</p>
            </div>
          </div>
        </Card>

        {/* Contact */}
        <div className="text-center mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Questions?</h3>
          <p className="text-gray-600 mb-4">Contact our legal team for clarification or concerns</p>
          <div className="space-y-1 text-sm text-gray-600">
            <p>Email: <span className="text-blue-600">legal@swandigitals.com</span></p>
            <p>Address: <span className="text-blue-600">SwanDigitals Legal Department, [Company Address]</span></p>
            <p>Response Time: 5-7 business days</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
