import React from 'react';
import { Check, Calendar, Truck, Clock, Droplet } from 'lucide-react';

export default function DeliverySystem({ onScheduleClick, onOrderNowClick }) {
  const benefits = [
    'Flexible Scheduling',
    'Smart Tracking',
    'Secure Packaging',
    'Trained Delivery Team'
  ];

  const facts = [
    { title: '1st Time Free Delivery', icon: Truck, desc: 'Use coupon code AQUAFREE on your first purchase.' },
    { title: '7 Days A Week', icon: Calendar, desc: 'Weekend slots available so you never run out of pure water.' },
    { title: '8:00 AM – 11:00 PM', icon: Clock, desc: 'Flexible morning and late night delivery slots.' }
  ];

  return (
    <section id="delivery" className="py-20 bg-accent-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-blue-50 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Courier photo with floating bottle decorations */}
          <div className="col-span-12 lg:col-span-6 flex justify-center relative min-h-[350px] sm:min-h-[450px]">
            {/* Courier Image */}
            <div className="relative w-full max-w-[450px] lg:max-w-[500px]">
              <img 
                src="/new_delivery_model.png" 
                alt="Delivery Courier Professional" 
                className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500 mix-blend-multiply pointer-events-none"
              />
              
              {/* Brand Overlay on the Delivery Bottle */}
              <div className="absolute top-[28%] left-[45%] sm:left-[45%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white backdrop-blur-md bg-blue-900/40 w-[90px] sm:w-[110px] h-[80px] sm:h-[95px] rounded-full border border-white/20 shadow-xl transform rotate-[-80deg] z-10 pointer-events-none">
                 <span className="text-[12px] sm:text-sm font-extrabold tracking-widest leading-none drop-shadow-md">TEJASH</span>
                 <span className="text-[8px] sm:text-[9px] font-bold tracking-widest text-blue-200 mt-0.5 uppercase">Water</span>
              </div>
            </div>

            {/* Floating Water Bottle Icon Decorations */}
            <div className="absolute top-10 -left-6 sm:-left-8 bg-white border border-blue-100 p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-float select-none">
              <span className="p-2 rounded-xl bg-accent/20 text-accent">
                <Droplet className="w-6 h-6 fill-accent" />
              </span>
              <div className="pr-2">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Fresh Water</div>
                <div className="text-sm font-extrabold text-primary">pH 9.5 Alkaline</div>
              </div>
            </div>

            <div className="absolute bottom-16 -right-4 sm:-right-6 bg-primary-dark border border-white/10 p-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-float-reverse text-white select-none">
              <span className="p-2 rounded-xl bg-accent text-white">
                <Truck className="w-6 h-6" />
              </span>
              <div className="pr-2">
                <div className="text-[10px] text-blue-200 font-bold uppercase">Delivery</div>
                <div className="text-sm font-extrabold">Express Courier</div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Facts */}
          <div className="col-span-12 lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-accent font-bold uppercase tracking-wider text-sm">Delivery System</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight">
                Our Delivery System
              </h2>
              <p className="text-slate-600">
                Getting clean, mineralized water delivered directly to your doorstep has never been easier. Setting up recurring supplies takes seconds.
              </p>
            </div>

            {/* What You Get Checklist */}
            <div className="grid grid-cols-2 gap-3.5 pt-2">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-accent/15 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="text-sm font-bold text-primary">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Delivery Service Quick Facts */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-base font-extrabold text-primary uppercase tracking-wide">
                Delivery Service Highlights
              </h3>
              
              <div className="space-y-3.5">
                {facts.map((fact, i) => {
                  const Icon = fact.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <span className="p-2.5 rounded-xl bg-accent-light border border-blue-100 text-accent shrink-0">
                        <Icon className="w-5 h-5" />
                      </span>
                      <div className="space-y-0.5">
                        <h4 className="font-extrabold text-primary text-sm sm:text-base">{fact.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{fact.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => {
                  // TODO: wire to API in Part 7
                  onScheduleClick();
                }}
                className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-accent/20 hover:scale-105"
              >
                Schedule Delivery
              </button>

              <button 
                onClick={() => {
                  // TODO: wire to API in Part 7
                  onOrderNowClick();
                }}
                className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-primary/20 hover:scale-105"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
