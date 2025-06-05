
import { AlertTriangle, CheckCircle } from 'lucide-react';

const SwanSuitePainSolution = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Pain Side */}
          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-red-900 font-[Poppins]">Marketing Tool Chaos?</h2>
            </div>
            <ul className="space-y-4 text-red-800">
              <li className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <span>Tired of juggling 10 tabs for ads, SEO, and CRM?</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <span>Wasting hours on manual data entry?</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <span>Paying for 5+ separate tools that don't talk to each other?</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <span>Missing leads because your chatbot is offline?</span>
              </li>
            </ul>
          </div>

          {/* Solution Side */}
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-green-900 font-[Poppins]">SwanSuite: One Dashboard, Everything</h2>
            </div>
            <p className="text-green-800 mb-6">
              SwanSuite combines everything—AI-powered ads, local SEO, and customer chats—in one click.
            </p>
            <ul className="space-y-4 text-green-800">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Replace 5+ tools</strong> with one powerful dashboard</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>AI automation</strong> handles repetitive tasks 24/7</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Real-time sync</strong> between ads, CRM, and chat</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwanSuitePainSolution;
