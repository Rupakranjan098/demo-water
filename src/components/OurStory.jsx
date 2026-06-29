import React, { useState } from 'react';
import { ShieldAlert, Sparkles, Filter, Award, Play, CheckCircle } from 'lucide-react';

export default function OurStory({ onReadMoreClick, onPlayVideo }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const pillars = [
    {
      title: 'Lab Tested Purity',
      desc: 'Tested daily across 40 distinct chemical and biological metrics.',
      icon: ShieldAlert,
      color: 'text-amber-400 bg-amber-400/10'
    },
    {
      title: 'Balanced Minerals',
      desc: 'Naturally infuses essential potassium, calcium, and magnesium.',
      icon: Sparkles,
      color: 'text-sky-400 bg-sky-400/10'
    },
    {
      title: 'Nano Level Filtration',
      desc: 'Uses 0.0001 micron membrane filters to remove microparticles.',
      icon: Filter,
      color: 'text-emerald-400 bg-emerald-400/10'
    },
    {
      title: 'Certified Excellence',
      desc: 'NSF/ANSI water system certification for strict safety standards.',
      icon: Award,
      color: 'text-indigo-400 bg-indigo-400/10'
    }
  ];

  return (
    <section id="story" className="py-20 bg-accent-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Story Row */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-bold uppercase tracking-wider text-sm">Our Story</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mt-2">
            The Tejash Water Journey
          </h2>
          <p className="text-slate-600 mt-3">
            Since our founding, we have pushed the boundaries of hydration science to supply pristine water that supports healthy lifestyles.
          </p>
        </div>

        {/* 4-column card row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={i} 
                className="bg-white rounded-[2rem] p-8 shadow-xl shadow-blue-900/5 border border-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500" />
                <div className="space-y-5 relative z-10">
                  <span className={`w-14 h-14 rounded-2xl flex items-center justify-center ${pillar.color} transition-all duration-300 group-hover:scale-110 shadow-inner`}>
                    <Icon className="w-7 h-7" />
                  </span>
                  <h3 className="font-extrabold text-primary text-lg sm:text-xl">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extraction Video Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-accent font-bold uppercase tracking-wider text-sm">Extraction Process</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-primary">
                How We Extract Water
              </h3>
              <p className="text-blue-900/60 font-semibold text-lg">
                Powered By Advanced Technology
              </p>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-sm">
              We source our water from high-pressure natural artesian springs nestled deep beneath pristine mountain layers. The natural pressure forces the water through volcanic rocks, acting as a geological pre-filter before it even reaches our processing facility.
            </p>

            <button 
              onClick={() => {
                // TODO: wire to API in Part 7
                onReadMoreClick();
              }}
              className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-accent/20 hover:scale-105"
            >
              Read More
            </button>
          </div>

          {/* Right Video Thumbnail */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-blue-50/50 bg-slate-800 group">
              {isPlaying ? (
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  title="Tejash Water Extraction Process Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <img 
                    src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&w=1000&q=80" 
                    alt="Pristine natural water spring" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Glass panel overlay for content */}
                  <div className="absolute inset-0 bg-primary/20 backdrop-blur-xs flex items-center justify-center" />
                  
                  {/* Centered Circular Play Button */}
                  <button 
                    onClick={() => {
                      setIsPlaying(true);
                      // TODO: wire to API in Part 7
                      if (onPlayVideo) onPlayVideo();
                    }}
                    className="absolute w-20 h-20 rounded-full bg-accent text-white flex items-center justify-center shadow-2xl hover:bg-accent-dark hover:scale-110 transition-all duration-300 z-20 group"
                    aria-label="Play Extraction Video"
                  >
                    <Play className="w-8 h-8 fill-white ml-1.5 transition-transform duration-300 group-hover:rotate-12" />
                  </button>

                  <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md border border-slate-100 rounded-xl px-4 py-2 flex items-center gap-2 select-none shadow-sm">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-xs font-bold text-primary">Artesian Source Verified</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
