
import { AlertTriangle, CheckCircle } from 'lucide-react';

const ProblemSolutionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Problem Side */}
          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-red-900">Struggling with Poor Digital Results?</h2>
            </div>
            <ul className="space-y-4 text-red-800">
              <li className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <span>Your website gets traffic but no conversions</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <span>Ad spend keeps increasing with diminishing returns</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <span>No clear strategy or measurable results</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <span>Competitors are outranking you on Google</span>
              </li>
            </ul>
          </div>

          {/* Solution Side */}
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-green-900">SwanDigitals Delivers Real Results</h2>
            </div>
            <p className="text-green-800 mb-6">
              Our proven digital marketing strategies help you attract quality leads, 
              increase conversions, and grow your business predictably.
            </p>
            <ul className="space-y-4 text-green-800">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Increase qualified leads by 200%</strong> with targeted SEO and PPC campaigns</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Boost conversion rates by 150%</strong> through optimized landing pages and funnels</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Get transparent reporting</strong> with clear ROI metrics and actionable insights</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
