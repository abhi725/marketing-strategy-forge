
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, Star } from 'lucide-react';

const SwanSuitePricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/mo',
      bestFor: 'Local businesses',
      features: [
        'Google Ads Management',
        'Basic CRM (up to 500 contacts)',
        'AI Chatbot',
        'Local SEO Basics',
        'Email Support'
      ],
      popular: false
    },
    {
      name: 'Growth',
      price: '$299',
      period: '/mo',
      bestFor: 'Scaling brands',
      features: [
        'Everything in Starter',
        'Multi-platform ads (Google + Facebook)',
        'Advanced CRM (up to 5,000 contacts)',
        'AI Ad Writer',
        'Advanced Local SEO',
        'Phone Support',
        'Custom Integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      bestFor: 'Agencies',
      features: [
        'Everything in Growth',
        'Unlimited contacts',
        'White-label solution',
        'Dedicated account manager',
        'Custom AI training',
        'Priority support',
        'Advanced reporting'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[Poppins]">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            All plans include 7-day free trial + onboarding call
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-[#FF6B6B] text-white rounded-full text-sm font-medium">
            🔥 Limited: Only 10 licenses left at $99/mo
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'border-[#2F80ED] border-2 shadow-xl' : 'border border-gray-200'}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#2F80ED] text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 font-[Poppins]">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-[#2F80ED] mb-2">
                  {plan.price}<span className="text-lg text-gray-500">{plan.period}</span>
                </div>
                <p className="text-gray-600">Best for {plan.bestFor}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild 
                  className={`w-full ${plan.popular ? 'bg-[#2F80ED] hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}
                  size="lg"
                >
                  <Link to="/contact">
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                  </Link>
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  No credit card required • Cancel anytime
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">🛡️ All plans include:</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
            <span>✓ SOC 2 compliant security</span>
            <span>✓ 99.9% uptime guarantee</span>
            <span>✓ Free onboarding</span>
            <span>✓ No setup fees</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwanSuitePricing;
