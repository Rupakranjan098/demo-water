import React from 'react';

export default function Categories({ onViewItemsClick }) {
  const categories = [
    {
      title: 'Everyday Essentials',
      desc: 'Stay Hydrated All Day With Our Most Popular Bottles Designed For Everyday Use At Home, Work, Or School.',
      image: '/cat1.png'
    },
    {
      title: 'Sports & Fitness',
      desc: 'Stay Hydrated All Day With Our Most Popular Bottles Designed For Everyday Use At Home, Work, Or School.',
      image: '/cat2.png'
    },
    {
      title: 'Premium Alkaline',
      desc: 'Stay Hydrated All Day With Our Most Popular Bottles Designed For Everyday Use At Home, Work, Or School.',
      image: '/cat3.png'
    },
    {
      title: 'Baby & Family Care',
      desc: 'Stay Hydrated All Day With Our Most Popular Bottles Designed For Everyday Use At Home, Work, Or School.',
      image: '/cat4.png'
    }
  ];

  return (
    <section id="categories" className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B54] tracking-tight">
            Our Water Bottle Categories
          </h2>
          <p className="text-[#2C3E8A] mt-6 text-lg sm:text-xl font-medium leading-relaxed">
            Choose From Four Carefully Curated Categories To Meet Your Hydration Needs. Each Type Is Filtered, Pure, And Perfectly Packaged.
          </p>
        </div>

        {/* Dotted Line Background Decoration */}
        <div className="absolute left-0 right-0 top-[60%] sm:top-[65%] h-px border-t-2 border-dashed border-[#5B9DFD] z-0 hidden lg:block" />
        
        {/* The X intersection on the dotted line */}
        <div className="absolute left-1/2 top-[60%] sm:top-[65%] transform -translate-x-1/2 -translate-y-1/2 text-[#5B9DFD] font-bold text-2xl z-0 hidden lg:block bg-gradient-to-b from-blue-50 to-white px-2">
          ✕
        </div>

        {/* 4-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-36 relative z-10">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="bg-white rounded-[2rem] px-6 pb-8 pt-28 shadow-2xl shadow-blue-900/10 border border-blue-50 flex flex-col items-center text-center relative"
            >
              {/* Product Image Breaking Out Top with Edge Fade Mask */}
              <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-56 h-64 pointer-events-none drop-shadow-2xl">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-contain [mask-image:radial-gradient(ellipse_at_50%_60%,black_40%,transparent_70%)]"
                  style={{ WebkitMaskImage: 'radial-gradient(ellipse at 50% 60%, black 40%, transparent 70%)' }}
                />
              </div>

              {/* Title & Desc */}
              <div className="flex-1 flex flex-col items-center">
                <h3 className="font-extrabold text-[#0B1B54] text-xl mb-4">
                  {cat.title}
                </h3>
                <p className="text-sm text-[#2C3E8A] font-medium leading-relaxed mb-8 px-2">
                  {cat.desc}
                </p>

                <button 
                  onClick={() => {
                    // TODO: wire to API in Part 7
                    onViewItemsClick(cat.title);
                  }}
                  className="px-8 py-3 bg-[#5B9DFD] text-white font-bold text-sm rounded-full shadow-lg shadow-blue-400/40 hover:bg-blue-500 hover:-translate-y-0.5 transition-all duration-300"
                >
                  View Items
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
