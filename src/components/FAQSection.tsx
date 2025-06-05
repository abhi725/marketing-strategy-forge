
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Is there a setup fee for getting started?",
      answer: "No! There are absolutely no setup fees. Your free 14-day trial includes access to all features, and you only pay if you decide to continue after the trial period."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most clients start seeing improvements within 30-60 days, with significant results typically visible within 90 days. However, some improvements like website optimization and initial SEO gains can be seen much sooner."
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer: "We offer a 90-day money-back guarantee. If you're not completely satisfied with our services and don't see measurable improvements in your digital marketing performance, we'll refund your investment."
    },
    {
      question: "Do you work with businesses in my industry?",
      answer: "We've successfully worked with businesses across 50+ industries including e-commerce, SaaS, healthcare, real estate, professional services, and more. Our strategies are customized to your specific industry and target audience."
    },
    {
      question: "What's included in the free strategy audit?",
      answer: "Your free audit includes: complete website analysis, SEO audit, competitor research, current marketing assessment, and a custom strategy roadmap. This typically takes 3-5 business days and is valued at $500."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our services
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
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
            className="text-blue-600 hover:text-blue-700 font-medium underline"
          >
            Contact our team for personalized answers
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
