import React, { useState } from 'react';
import { Droplet, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Facebook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Twitter = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer({ onSubscribe }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const services = [
    'Home Water Delivery',
    'Water Filtration Systems',
    'Alkaline Water Supply',
    'Bulk Water for Events',
    'Baby & Family Safe Water',
    'Commercial Water Solutions'
  ];

  const companyLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Category', href: '#categories' },
    { name: 'Composition', href: '#composition' },
    { name: 'Testimonial', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    // TODO: wire to API in Part 7
    if (onSubscribe) onSubscribe(email);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-dark text-white pt-36 pb-8 relative overflow-hidden">
      
      {/* Wave shape top divider for Footer (wavy blog/footer transition) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] text-white fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,81.84,22.38,154.93,34.35,229.07,73.57,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-1.5 text-2xl font-extrabold tracking-wider text-white select-none">
              <Droplet className="w-6 h-6 text-accent fill-accent" />
              <span>TEJASH WATER</span>
            </a>
            <div className="text-accent font-bold text-sm">Pure water. Trusted service.</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tejash Water supplies pure, double-filtered mineral water that conforms to NSF standards. Trusted across residential, corporate, and commercial sectors.
            </p>
          </div>

          {/* Service Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-accent">Services</h4>
            <ul className="space-y-2">
              {services.map((service, i) => (
                <li key={i}>
                  <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="text-xs text-slate-400 hover:text-white transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-accent">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-accent">Join a Newsletter</h4>
            
            {subscribed ? (
              <div className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 p-3.5 rounded-xl flex items-center gap-2 animate-fadeIn text-xs">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Subscription confirmed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <p className="text-xs text-slate-400">Receive deals, tips, and schedule updates.</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email..." 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-accent"
                  />
                  <button 
                    type="submit"
                    className="bg-accent hover:bg-accent-dark text-white rounded-xl px-4 py-2 font-bold text-xs uppercase tracking-wider transition-colors duration-300"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            )}

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2 bg-white/5 hover:bg-accent rounded-xl text-slate-300 hover:text-white transition-colors duration-200" aria-label="Instagram">
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-accent rounded-xl text-slate-300 hover:text-white transition-colors duration-200" aria-label="Facebook">
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-accent rounded-xl text-slate-300 hover:text-white transition-colors duration-200" aria-label="Twitter">
                <Twitter className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-accent rounded-xl text-slate-300 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-slate-400 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            &copy; {new Date().getFullYear()} Tejash Water Inc. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-accent" />
              <span>45 Ocean Spray Ave, Aqua City</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-accent" />
              <span>support@tejashwater.com</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-accent" />
              <span>+1 (800) 555-0199</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
