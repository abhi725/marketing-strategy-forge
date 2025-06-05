
import { Button } from '@/components/ui/button';
import { Play, CheckCircle } from 'lucide-react';

const SwanSuiteDemoVideo = () => {
  return (
    <section id="demo" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[Poppins]">
            See SwanSuite in Action
          </h2>
          <p className="text-xl text-gray-600">
            Watch how we create ads, handle chats, and manage leads in under 30 seconds
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#2F80ED] to-blue-700 rounded-2xl aspect-video flex items-center justify-center text-white shadow-2xl">
              <div className="text-center">
                <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 mb-4">
                  <Play className="mr-2 w-6 h-6" />
                  Watch Demo (30s)
                </Button>
                <p className="text-sm opacity-90">No signup required</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#FF6B6B] text-white px-3 py-1 rounded-full text-xs font-bold">
              LIVE DEMO
            </div>
          </div>

          {/* Demo Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 font-[Poppins]">You'll See How To:</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Create a Google Ad in 1 Click</h4>
                  <p className="text-gray-600">AI writes compelling ad copy based on your best performers</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Chatbot Handling Live Queries</h4>
                  <p className="text-gray-600">Watch real customer conversations and lead qualification</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">CRM Auto-Tagging Leads</h4>
                  <p className="text-gray-600">Leads automatically sorted by source and buying intent</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-[#2F80ED] font-medium text-center">
                🎯 "This 30-second demo convinced me to switch" - Tech CEO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwanSuiteDemoVideo;
