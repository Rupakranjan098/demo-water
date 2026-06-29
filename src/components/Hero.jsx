import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero({ onGetStartedClick, onLearnMoreClick }) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-16">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 transform scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/60 to-transparent mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

      {/* Wave bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] text-white fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,81.84,22.38,154.93,34.35,229.07,73.57,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-20">

        {/* Bottles Graphic */}
        <div className="col-span-12 lg:col-span-6 flex justify-center items-center relative order-2 lg:order-1 h-[400px] lg:h-[500px]">
          <div className="relative z-20 w-full h-full flex justify-center items-center transform hover:scale-105 transition-transform duration-700">
            <img 
              src="/new-bottles-black-trans.png" 
              alt="Tejash Water Bottles" 
              className="w-full sm:w-[90%] max-h-full object-contain drop-shadow-2xl relative z-10"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="col-span-12 lg:col-span-6 space-y-6 text-center lg:text-left order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-100 font-semibold text-sm tracking-wide uppercase backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-300 animate-ping" />
            PURE WATER STARTS HERE
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Trusted Water <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
              Filtration Solutions
            </span>
          </h1>

          <p className="text-slate-300 text-lg max-w-xl mx-auto lg:mx-0 drop-shadow-sm">
            Enjoy crisp, refreshing, and clean water with our cutting-edge multi-layer filtration technology. Delivered fresh to your home, office, or industrial setup.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={() => {
                // TODO: wire to API in Part 7
                onGetStartedClick();
              }}
              className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-white rounded-full font-bold shadow-lg transition-all duration-300 hover:shadow-accent/30 hover:scale-105 flex items-center gap-2 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-250 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => {
                // TODO: wire to API in Part 7
                onLearnMoreClick();
              }}
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold border border-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Play className="w-4.5 h-4.5 fill-white" />
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
