import React from 'react';

interface WidgetTestimonialCarouselProps {
  className?: string;
}

export const WidgetTestimonialCarousel: React.FC<WidgetTestimonialCarouselProps> = ({ className = '' }) => {
  return (
    <div className={`${className} p-6 bg-white rounded-lg shadow-md`}>
      <h3 className="text-xl font-semibold mb-4">Patient Testimonials</h3>
      <div className="space-y-4">
        <div className="border-l-4 border-blue-500 pl-4">
          <p className="text-gray-700 italic">"Excellent care and professional service."</p>
          <p className="text-sm text-gray-500 mt-2">- John Doe</p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4">
          <p className="text-gray-700 italic">"Highly recommend this clinic."</p>
          <p className="text-sm text-gray-500 mt-2">- Jane Smith</p>
        </div>
      </div>
    </div>
  );
};

export default WidgetTestimonialCarousel;
