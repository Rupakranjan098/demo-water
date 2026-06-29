import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      stars: 5,
      text: "The delivery service is always on time, and the water tastes incredibly clean and fresh. Installing the home filtration system has changed our health and hydration routine entirely!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      name: "Sarah Jenkins",
      title: "Health Coach & Mother",
      accentColor: "border-b-4 border-b-accent"
    },
    {
      stars: 5,
      text: "Outstanding customer service and easy scheduling options. I set up a weekly subscription for our fitness studio, and our athletes keep commenting on how refreshing the alkaline water is.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      name: "Marcus Aurelius",
      title: "Gym Owner & Trainer",
      accentColor: "border-b-4 border-b-primary"
    },
    {
      stars: 5,
      text: "Pure water, prompt delivery. The smart tracking app lets me know exactly when the courier will arrive. Excellent quality minerals and a brand I highly recommend to everyone.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      name: "Sophia Chen",
      title: "Software Engineer",
      accentColor: "border-b-4 border-b-emerald-400"
    },
    {
      stars: 5,
      text: "Switching to Tejash Water was the best decision for our office. The water cooler is always stocked, and the taste is noticeably better than our previous supplier. Highly professional team!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      name: "David Miller",
      title: "Operations Manager",
      accentColor: "border-b-4 border-b-blue-500"
    },
    {
      stars: 5,
      text: "I was skeptical about alkaline water at first, but after a month of drinking Tejash Water, my digestion has improved significantly. The convenient weekend delivery slots are a lifesaver.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      name: "Elena Rodriguez",
      title: "Yoga Instructor",
      accentColor: "border-b-4 border-b-purple-500"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-bold uppercase tracking-wider text-sm">What Our Clients Say</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mt-2">
            Testimonials
          </h2>
        </div>

        {/* Carousel Viewport Wrapper */}
        <div className="relative min-h-[350px] flex items-center justify-center">
          {testimonials.map((test, index) => {
            const isActive = index === activeIndex;
            return (
              <div 
                key={index}
                className={`w-full max-w-3xl bg-white rounded-[2.5rem] p-8 sm:p-14 shadow-2xl shadow-blue-900/10 border-2 border-white transition-all duration-500 absolute top-0 flex flex-col justify-between overflow-hidden ${
                  isActive 
                    ? 'opacity-100 translate-x-0 scale-100 z-20' 
                    : 'opacity-0 translate-x-12 scale-95 pointer-events-none z-10'
                }`}
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-80" />
                <Quote className="absolute -top-4 -right-4 w-40 h-40 text-accent/5 fill-accent/5 transform -scale-x-100" />
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent via-blue-400 to-transparent opacity-80" />

                <div className="space-y-6 relative z-10">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(test.stars)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400 drop-shadow-sm" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-lg sm:text-xl md:text-2xl italic text-slate-700 leading-relaxed font-medium">
                    "{test.text}"
                  </p>
                </div>

                {/* Profile Details */}
                <div className="flex items-center gap-4 pt-8 mt-8 relative z-10">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent shadow-md p-0.5 bg-white">
                    <img 
                      src={test.avatar} 
                      alt={test.name} 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-primary text-base sm:text-lg">{test.name}</h4>
                    <p className="text-sm text-accent font-bold tracking-wide">{test.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-4 mt-16 pt-10">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-600 flex items-center justify-center shadow-sm hover:bg-accent hover:text-white hover:border-accent transition-all duration-250"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-6 bg-accent' : 'w-2.5 bg-slate-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-600 flex items-center justify-center shadow-sm hover:bg-accent hover:text-white hover:border-accent transition-all duration-250"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}
