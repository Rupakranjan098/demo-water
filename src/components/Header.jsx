import React, { useState, useEffect } from 'react';
import { Phone, Mail, Search, ShoppingCart, Menu, X, ChevronDown, Droplet } from 'lucide-react';

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

export default function Header({ cartCount = 0, onSearchClick, onSignUpClick, onCartClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Review', href: '#testimonials' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-primary-dark text-white py-2.5 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="tel:+18005550199" className="flex items-center gap-2 hover:text-accent transition-colors duration-250">
              <Phone className="w-4 h-4 text-accent" />
              <span>+1 (800) 555-0199</span>
            </a>
            <a href="mailto:info@tejashwater.com" className="flex items-center gap-2 hover:text-accent transition-colors duration-250">
              <Mail className="w-4 h-4 text-accent" />
              <span>info@tejashwater.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="p-1 hover:text-accent transition-colors duration-250" aria-label="Instagram">
              <Instagram className="w-4.5 h-4.5" />
            </a>
            <a href="#" className="p-1 hover:text-accent transition-colors duration-250" aria-label="Facebook">
              <Facebook className="w-4.5 h-4.5" />
            </a>
            <a href="#" className="p-1 hover:text-accent transition-colors duration-250" aria-label="Twitter">
              <Twitter className="w-4.5 h-4.5" />
            </a>
            <a href="#" className="p-1 hover:text-accent transition-colors duration-250" aria-label="LinkedIn">
              <Linkedin className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'fixed top-0 left-0 bg-white/95 backdrop-blur-md shadow-md py-3 text-primary' 
          : 'relative bg-white py-5 text-primary'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-1.5 text-2xl font-extrabold tracking-wider text-primary select-none">
            <Droplet className="w-6 h-6 text-accent fill-accent animate-pulse-slow" />
            <span>TEJASH WATER</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-accent transition-colors duration-200 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Dropdown Menu (More) */}
            <div className="relative">
              <button 
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                onBlur={() => setTimeout(() => setIsMoreOpen(false), 200)}
                className="flex items-center gap-1 hover:text-accent transition-colors duration-200 py-2 font-medium"
              >
                <span>More</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMoreOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-lg py-2 z-50 animate-fadeIn">
                  <a href="#categories" onClick={(e) => handleLinkClick(e, '#categories')} className="block px-4 py-2 text-sm text-slate-700 hover:bg-accent-light hover:text-accent">Categories</a>
                  <a href="#delivery" onClick={(e) => handleLinkClick(e, '#delivery')} className="block px-4 py-2 text-sm text-slate-700 hover:bg-accent-light hover:text-accent">Delivery System</a>
                  <a href="#story" onClick={(e) => handleLinkClick(e, '#story')} className="block px-4 py-2 text-sm text-slate-700 hover:bg-accent-light hover:text-accent">Our Story</a>
                  <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="block px-4 py-2 text-sm text-slate-700 hover:bg-accent-light hover:text-accent">Get In Touch</a>
                </div>
              )}
            </div>
          </nav>

          {/* Search, Cart & Sign Up CTA */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => {
                // TODO: wire to API in Part 7
                onSearchClick();
              }}
              className="p-2 text-slate-600 hover:text-accent transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="w-5.5 h-5.5" />
            </button>

            <button 
              onClick={() => {
                // TODO: wire to API in Part 7
                onCartClick();
              }}
              className="p-2 text-slate-600 hover:text-accent transition-colors duration-200 relative"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5.5 h-5.5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-accent rounded-full animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            <button 
              onClick={() => {
                // TODO: wire to API in Part 7
                onSignUpClick();
              }}
              className="px-6 py-2.5 bg-accent hover:bg-accent-dark text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Action Buttons (Search, Cart & Hamburger) */}
          <div className="flex items-center gap-3 md:hidden">
            <button 
              onClick={() => {
                // TODO: wire to API in Part 7
                onSearchClick();
              }}
              className="p-2 text-slate-600 hover:text-accent"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={() => {
                // TODO: wire to API in Part 7
                onCartClick();
              }}
              className="p-2 text-slate-600 hover:text-accent relative"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-2xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-accent rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-primary hover:text-accent"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col bg-white animate-fadeIn">
          <div className="flex justify-between items-center px-4 py-5 border-b border-slate-100">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-1 text-xl font-bold tracking-wider text-primary">
              <Droplet className="w-5 h-5 text-accent fill-accent" />
              <span>TEJASH WATER</span>
            </a>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-primary">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block py-3 text-lg font-medium text-slate-800 border-b border-slate-100 hover:text-accent"
              >
                {link.name}
              </a>
            ))}
            <a href="#categories" onClick={(e) => handleLinkClick(e, '#categories')} className="block py-3 text-lg font-medium text-slate-800 border-b border-slate-100 hover:text-accent">Categories</a>
            <a href="#delivery" onClick={(e) => handleLinkClick(e, '#delivery')} className="block py-3 text-lg font-medium text-slate-800 border-b border-slate-100 hover:text-accent">Delivery System</a>
            <a href="#story" onClick={(e) => handleLinkClick(e, '#story')} className="block py-3 text-lg font-medium text-slate-800 border-b border-slate-100 hover:text-accent">Our Story</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="block py-3 text-lg font-medium text-slate-800 border-b border-slate-100 hover:text-accent">Contact Us</a>
          </div>
          <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-3">
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                // TODO: wire to API in Part 7
                onSignUpClick();
              }}
              className="w-full py-3 bg-accent text-white rounded-full font-bold shadow-md hover:bg-accent-dark transition-colors text-center block"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
