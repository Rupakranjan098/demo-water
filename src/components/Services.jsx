import React from 'react';
import { Star, ShoppingCart, List } from 'lucide-react';

export default function Services({ onAddToCart, onSelectOptions, onAllServicesClick }) {
  const services = [
    {
      id: 'srv-1',
      title: 'Home Filtration Installation',
      desc: 'Get Clean, Safe Drinking Water Directly From Your Tap.',
      category: 'Category: Everyday Essentials',
      originalPrice: '$29.99',
      price: '$25.00',
      rating: 5,
      image: '/cat1.png',
      badge: null,
      actionText: 'Add To Cart',
      actionType: 'add_to_cart'
    },
    {
      id: 'srv-2',
      title: 'Hydration System Setup',
      desc: 'Filtration For Gyms, Studios, And Active Environments.',
      category: 'Category: Sports & Fitness',
      originalPrice: '$25.99',
      price: '$19.99',
      rating: 5,
      image: '/cat2.png',
      badge: null,
      actionText: 'Select Options',
      actionType: 'select_options'
    },
    {
      id: 'srv-3',
      title: 'Alkaline Water System Installation',
      desc: 'Enjoy High PH Water With Health Supporting Benefits.',
      category: 'Category: Premium Alkaline',
      originalPrice: null,
      price: '$18.00',
      rating: 5,
      image: '/cat3.png',
      badge: null,
      actionText: 'Add To Cart',
      actionType: 'add_to_cart'
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#DDF1FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-36">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="text-[#0B1B54]">Our </span>
            <span className="text-[#5B9DFD]">Services</span>
          </h2>
          <p className="text-[#2C3E8A] mt-4 font-medium text-lg">
            Clean Water Solutions Tailored For You
          </p>
        </div>

        {/* 3-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-36 mb-20 px-2 lg:px-10">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-[2rem] pb-10 pt-32 px-6 sm:px-8 shadow-2xl shadow-blue-900/5 border border-blue-50 flex flex-col relative"
            >
              {/* Product Image Frame (Breaking out) */}
              <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-64 h-64 pointer-events-none">
                 
                 <img 
                   src={service.image} 
                   alt={service.title} 
                   className="w-full h-full object-contain relative z-10 drop-shadow-xl"
                 />
                 
                 {/* Star Badge */}
                 {service.badge && (
                   <div 
                     className="absolute top-16 right-0 w-14 h-14 bg-[#5B9DFD] text-white flex items-center justify-center font-bold text-xs z-20 shadow-md" 
                     style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }}
                   >
                     {service.badge}
                   </div>
                 )}
              </div>
              
              {/* Category */}
              <div className="text-[11px] text-[#5B9DFD] mb-3">{service.category}</div>
              
              {/* Title */}
              <h3 className="font-extrabold text-[#0B1B54] text-lg mb-4 leading-snug">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-slate-700 font-medium mb-8 flex-1 leading-relaxed pr-2">
                {service.desc}
              </p>
              
              {/* Price & Rating */}
              <div className="flex items-center justify-between mb-8">
                 <div className="flex items-center gap-2.5">
                    {service.originalPrice && <span className="text-[#5B9DFD] font-bold line-through text-lg">{service.originalPrice}</span>}
                    <span className="text-[#0B1B54] font-extrabold text-xl">{service.price}</span>
                 </div>
                 <div className="flex gap-1 text-[#3D7FF5]">
                    {[...Array(service.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                 </div>
              </div>

              {/* Action Button */}
              <div className="flex justify-center">
                 <button 
                   onClick={() => {
                     // TODO: wire to API in Part 7
                     if(service.actionType === 'add_to_cart') onAddToCart(service);
                     else onSelectOptions(service);
                   }}
                   className="bg-[#5B9DFD] text-white rounded-full px-7 py-3 font-bold text-sm flex items-center gap-2 hover:bg-blue-500 hover:-translate-y-0.5 transition-all shadow-lg shadow-blue-400/30"
                 >
                     {service.actionType === 'add_to_cart' ? <ShoppingCart className="w-4 h-4"/> : <List className="w-4 h-4" />}
                     <span>{service.actionText}</span>
                 </button>
              </div>
            </div>
          ))}
        </div>

        {/* Center Pill Button */}
        <div className="flex justify-center mt-12">
          <button 
            onClick={() => {
              // TODO: wire to API in Part 7
              onAllServicesClick();
            }}
            className="px-10 py-3 bg-[#5B9DFD] hover:bg-[#3D7FF5] text-white rounded-full font-bold shadow-lg shadow-blue-400/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            All Services
          </button>
        </div>

      </div>
    </section>
  );
}
