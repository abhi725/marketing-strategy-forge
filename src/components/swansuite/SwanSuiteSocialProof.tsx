
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const SwanSuiteSocialProof = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Vendasta alternative that cut our ops costs by 40%",
      author: "Sarah Chen",
      role: "CEO",
      company: "E-Commerce Brand",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "Finally, an all-in-one platform that actually works",
      author: "Michael Rodriguez",
      role: "Marketing Director", 
      company: "TechStart Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "Cut our ad setup time from 3 hours to 20 minutes. Lifesaver!",
      author: "Jennifer Walsh",
      role: "Agency Owner",
      company: "Digital Growth Co",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      rating: 5
    }
  ];

  const logos = [
    { name: "TechStart", color: "bg-gray-800" },
    { name: "ShopLocal", color: "bg-blue-600" },
    { name: "FitnessPro", color: "bg-green-600" },
    { name: "RealtyCorp", color: "bg-purple-600" },
    { name: "MarketHub", color: "bg-red-600" },
    { name: "SalesForce", color: "bg-indigo-600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[Poppins]">
            Trusted by 12,000+ Agencies
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
            <span className="text-gray-600 ml-2">4.9/5 from 500+ reviews</span>
          </div>
          
          {/* Animated Logo Carousel */}
          <div className="mb-12 overflow-hidden">
            <div className="flex animate-[slide-in-left_20s_linear_infinite] gap-8 items-center">
              {[...logos, ...logos].map((logo, index) => (
                <div key={`${logo.name}-${index}`} className={`${logo.color} text-white px-6 py-3 rounded-lg font-bold text-lg whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity`}>
                  {logo.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center min-h-[280px] flex flex-col justify-center">
            <div className="flex items-center justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <Quote className="w-8 h-8 text-[#2F80ED] mb-4 mx-auto" />
            <p className="text-gray-700 mb-6 italic text-xl leading-relaxed transition-all duration-500">
              "{testimonials[currentTestimonial].quote}"
            </p>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].author}</div>
                <div className="text-sm text-gray-600">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}</div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-[#2F80ED]' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Authority Badges */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">As featured in:</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <span className="text-gray-600 font-bold">TechCrunch</span>
            <span className="text-gray-600 font-bold">Forbes</span>
            <span className="text-gray-600 font-bold">MarketingLand</span>
            <span className="text-gray-600 font-bold">Entrepreneur</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwanSuiteSocialProof;
