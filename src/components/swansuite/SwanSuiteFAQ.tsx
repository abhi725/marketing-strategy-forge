
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const SwanSuiteFAQ = () => {
  const faqs = [
    {
      question: "Is my data secure?",
      answer: "Absolutely. We're SOC 2 compliant with encrypted backups and enterprise-grade security. Your data is protected with the same standards used by Fortune 500 companies."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, no hidden fees or long-term contracts. Cancel with one click from your dashboard. If you cancel within 7 days, you won't be charged anything."
    },
    {
      question: "How quickly can I get started?",
      answer: "Most clients are up and running in under 5 minutes. Our onboarding wizard guides you through connecting your Google Ads, importing contacts, and setting up your chatbot."
    },
    {
      question: "Do you replace all my existing tools?",
      answer: "SwanSuite replaces 5+ tools: Google Ads dashboard, CRM software, chatbot platform, SEO tools, and social media schedulers. You'll save $500+ per month in software costs."
    },
    {
      question: "What if I need help during setup?",
      answer: "Every plan includes a free onboarding call with our experts. Plus, our support team responds within 2 hours during business hours (24/7 for Growth and Enterprise plans)."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[Poppins]">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about SwanSuite
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#2F80ED] font-[Poppins]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="/contact" 
            className="text-[#2F80ED] hover:text-blue-700 font-medium underline"
          >
            Chat with our team (average response: 2 minutes)
          </a>
        </div>
      </div>
    </section>
  );
};

export default SwanSuiteFAQ;
