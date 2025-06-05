
import { useEffect, useState } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer = ({ children }: PerformanceOptimizerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate component loading optimization
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Optimize images on scroll
    const handleImageLoading = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    if (isLoaded) {
      handleImageLoading();
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return <>{children}</>;
};

export default PerformanceOptimizer;
