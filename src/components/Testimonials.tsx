import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Traveler",
      image: "https://images.pexels.com/photos/4307823/pexels-photo-4307823.jpeg",
      quote: "ZoomCabz has been my go-to taxi service for years. Their punctuality and professionalism are unmatched. The drivers are always courteous and the vehicles are immaculate."
    },
    {
      name: "Michael Rodriguez",
      role: "Family Traveler",
      image: "https://images.pexels.com/photos/10901755/pexels-photo-10901755.jpeg",
      quote: "Our family relies on ZoomCabz for all our transportation needs. The spacious SUVs and friendly drivers make traveling with kids a breeze. Highly recommended!"
    },
    {
      name: "Jennifer Lee",
      role: "Frequent Flyer",
      image: "https://media.istockphoto.com/id/2189477109/photo/couple-on-vacation-in-hotel-bed.jpg",
      quote: "As someone who travels frequently, having a reliable airport transfer service is essential. ZoomCabz has never let me down - always on time, even for my early morning flights."
    },
    {
      name: "David Chen",
      role: "Corporate Client",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Our company switched to ZoomCabz for all our corporate transportation needs last year, and it's been a game-changer. The billing system is seamless and the service is top-notch."
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what some of our satisfied customers have to say about their experience with ZoomCabz.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-blue-800 rounded-lg p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-yellow-500"
                />
              </div>
              
              <div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl italic mb-6">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                <div>
                  <div className="font-bold text-lg">{testimonials[activeIndex].name}</div>
                  <div className="text-blue-300">{testimonials[activeIndex].role}</div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-yellow-500' : 'bg-blue-700 hover:bg-blue-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;