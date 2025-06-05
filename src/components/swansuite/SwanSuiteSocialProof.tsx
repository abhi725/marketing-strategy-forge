
import { Star, Quote } from 'lucide-react';

const SwanSuiteSocialProof = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[Poppins]">
            Trusted by 500+ Brands
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
            <span className="text-gray-600 ml-2">4.9/5 from 300+ reviews</span>
          </div>
          
          {/* Client Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 opacity-60">
            <div className="bg-gray-800 text-white px-4 py-2 rounded font-bold">TechStart</div>
            <div className="bg-blue-600 text-white px-4 py-2 rounded font-bold">ShopLocal</div>
            <div className="bg-green-600 text-white px-4 py-2 rounded font-bold">FitnessPro</div>
            <div className="bg-purple-600 text-white px-4 py-2 rounded font-bold">RealtyCorp</div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <Quote className="w-8 h-8 text-[#2F80ED] mb-4 mx-auto" />
            <p className="text-gray-700 mb-6 italic text-xl leading-relaxed">
              "Cut our ad setup time from 3 hours to 20 minutes. Lifesaver! The AI chatbot alone has saved us 40+ hours per week."
            </p>
            <div>
              <div className="font-semibold text-gray-900">Sarah Chen</div>
              <div className="text-sm text-gray-600">CEO, E-Commerce Brand</div>
            </div>
          </div>
        </div>

        {/* Authority Badges */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">As featured in:</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <span className="text-gray-600 font-bold">TechCrunch</span>
            <span className="text-gray-600 font-bold">Forbes</span>
            <span className="text-gray-600 font-bold">MarketingLand</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwanSuiteSocialProof;
