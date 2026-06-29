import React from 'react';
import { Droplet, Award, CheckCircle, Users, Activity, ShieldCheck, FlameKindling } from 'lucide-react';

export default function AboutStats({ onMoreAboutUsClick }) {
  const stats = [
    { value: '1,200+', label: 'Happy Customers', icon: Users },
    { value: '1,450+', label: 'Systems Installed', icon: ShieldCheck },
    { value: '1,800+', label: 'Projects Done', icon: CheckCircle },
    { value: '50+', label: 'Team Members', icon: Award },
  ];

  return (
    <section id="about" className="relative bg-gradient-to-b from-primary to-primary-dark text-white pt-24 pb-16 overflow-hidden">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* About Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left: Glass of water graphic/illustration */}
          <div className="col-span-12 lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer decorative glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent to-blue-300 opacity-30 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Image Box */}
              <div className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto pointer-events-none scale-110">
                <img 
                  src="/about_glass.png" 
                  alt="Premium glass of water" 
                  className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-750 drop-shadow-[0_0_30px_rgba(61,127,245,0.4)]"
                />
                
                {/* Floating graphic overlay badge */}
                <div className="absolute top-4 left-4 glass-panel-dark px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10">
                  <Activity className="w-5 h-5 text-accent animate-pulse" />
                  <span className="text-xs font-semibold text-white">99.9% Pure PH Balanced</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Copy */}
          <div className="col-span-12 lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-accent font-bold uppercase tracking-wider text-sm">About Our Company</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Clean Water, Healthier Lives
              </h2>
              <p className="text-blue-200 font-semibold text-lg">
                30 Years Of Expertise In Water Filtration
              </p>
            </div>

            <p className="text-slate-300 leading-relaxed">
              We started with a single mission: to make pure, mineral-rich, and premium quality hydration accessible to every family. Over three decades, our engineers have developed state-of-the-art reverse osmosis, carbon blocks, and alkaline infusing delivery systems that stand unparalleled in testing standards.
            </p>

            {/* Feature blurbs side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 p-5 rounded-2xl shadow-lg space-y-2 hover:bg-white/10 transition-colors duration-300">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-lg bg-accent/20 text-accent">
                    <Droplet className="w-5 h-5" />
                  </span>
                  <h4 className="font-bold text-white text-base">Rainwater Filtration</h4>
                </div>
                <p className="text-xs text-slate-400">Captures, pre-filters, and sanitizes rain runoff for clean home utilities.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/20 p-5 rounded-2xl shadow-lg space-y-2 hover:bg-white/10 transition-colors duration-300">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-lg bg-accent/20 text-accent">
                    <FlameKindling className="w-5 h-5" />
                  </span>
                  <h4 className="font-bold text-white text-base">River Ice Purification</h4>
                </div>
                <p className="text-xs text-slate-400">Advanced multi-tier mechanical filtration to target heavy metals.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  // TODO: wire to API in Part 7
                  onMoreAboutUsClick();
                }}
                className="px-8 py-3 bg-accent hover:bg-accent-dark text-white rounded-full font-bold shadow-lg transition-all duration-300 hover:shadow-accent/20"
              >
                More About Us
              </button>
            </div>
          </div>
        </div>

        {/* Stats Strip with Dotted Motif */}
        <div className="relative mt-16 pt-8 border-t border-white/10">
          {/* Curved dotted line motif (SVG) */}
          <div className="absolute top-1/2 left-0 right-0 h-10 w-full hidden md:block -translate-y-1/2 pointer-events-none opacity-20">
            <svg className="w-full h-full" fill="none" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path d="M 0 50 Q 250 10, 500 50 T 1000 50" stroke="white" strokeWidth="2" strokeDasharray="6 6" />
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center space-y-2 group">
                  <div className="w-14 h-14 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
