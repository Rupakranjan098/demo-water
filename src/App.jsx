import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutStats from './components/AboutStats';
import Categories from './components/Categories';
import Services from './components/Services';
import DeliverySystem from './components/DeliverySystem';
import OurStory from './components/OurStory';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Search, X, Check, ShoppingBag, Droplet, Send } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(null);
  
  // Modals / Overlay States
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Search query
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  // Sign up Form
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3500);
  };

  const handleAddToCart = (item) => {
    setCart(prev => [...prev, item]);
    showToast(`Added "${item.title}" to cart!`);
  };

  const handleSelectOptions = (item) => {
    showToast(`Options requested for "${item.title}".`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    // Mock search results
    const items = [
      'Alkaline Mineral Water',
      'Whole Home RO Filtration',
      'Office Dispenser Rental',
      'Baby Safe Distilled Water',
      'Premium Sports Flask'
    ].filter(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
    
    setSearchResults(items.length > 0 ? items : ['No direct match found. Try "Alkaline" or "Filtration"']);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setSignUpSuccess(true);
    // TODO: wire to API in Part 7
    showToast(`Welcome to Tejash Water! Account registered for ${signUpEmail}`);
    setTimeout(() => {
      setIsSignUpOpen(false);
      setSignUpSuccess(false);
      setSignUpEmail('');
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans">
      {/* Sticky Header */}
      <Header 
        cartCount={cart.length} 
        onSearchClick={() => setIsSearchOpen(true)}
        onSignUpClick={() => setIsSignUpOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Main Single Page Sections */}
      <main>
        <Hero 
          onGetStartedClick={() => {
            // TODO: wire to API in Part 7
            showToast("Get Started clicked. Redirecting to onboarding...");
            document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onLearnMoreClick={() => {
            // TODO: wire to API in Part 7
            showToast("Learn More clicked. Scrolling to details...");
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
        
        <AboutStats 
          onMoreAboutUsClick={() => {
            // TODO: wire to API in Part 7
            showToast("Navigating to Company Profile...");
            document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
        
        <Categories 
          onViewItemsClick={(categoryName) => {
            // TODO: wire to API in Part 7
            showToast(`Filtering services by category: "${categoryName}"`);
            document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
        
        <Services 
          onAddToCart={handleAddToCart}
          onSelectOptions={handleSelectOptions}
          onTalkToExpert={() => {
            // TODO: wire to API in Part 7
            showToast("Dialing customer agent hotline / opening expert portal...");
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onAllServicesClick={() => {
            // TODO: wire to API in Part 7
            showToast("Loading catalog page...");
          }}
        />
        
        <DeliverySystem 
          onScheduleClick={() => {
            // TODO: wire to API in Part 7
            showToast("Opening delivery scheduling calendar...");
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOrderNowClick={() => {
            // TODO: wire to API in Part 7
            showToast("Direct checkout initialized.");
            setIsCartOpen(true);
          }}
        />
        
        <OurStory 
          onReadMoreClick={() => {
            // TODO: wire to API in Part 7
            showToast("Opening extended corporate extraction log...");
          }}
          onPlayVideo={() => {
            // TODO: wire to API in Part 7
            showToast("Loading high-definition artesian extraction stream...");
          }}
        />
        
        <Testimonials />
        
        <Blog 
          onReadMoreClick={(postId) => {
            // TODO: wire to API in Part 7
            showToast(`Opening blog article: ${postId}`);
          }}
        />
        
        <ContactForm 
          onSubmitContact={(data) => {
            // TODO: wire to API in Part 7
            showToast(`Contact inquiry sent for ${data.firstName} ${data.lastName}`);
          }}
          onCheckAvailability={(data) => {
            // TODO: wire to API in Part 7
            showToast(`Locating delivery agents for city key: ${data.location}`);
          }}
        />
      </main>

      {/* Footer */}
      <Footer 
        onSubscribe={(email) => {
          // TODO: wire to API in Part 7
          showToast(`Subscribed successfully with ${email}`);
        }}
      />

      {/* Premium Notification Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-3 z-50 animate-bounce max-w-sm">
          <span className="p-1 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
            <Check className="w-4 h-4" />
          </span>
          <span className="text-xs font-semibold">{toast}</span>
        </div>
      )}

      {/* Search Overlay Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-start justify-center pt-24 px-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-slate-100 animate-fadeIn">
            <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100">
              <span className="font-extrabold text-primary">Global Search</span>
              <button onClick={() => { setIsSearchOpen(false); setSearchQuery(''); setSearchResults([]); }} className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSearchSubmit} className="p-6 space-y-4">
              <div className="relative">
                <input 
                  type="text" 
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, filtration systems, or alkaline types..." 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-accent"
                />
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
              <button type="submit" className="w-full py-3 bg-accent hover:bg-accent-dark text-white rounded-2xl font-bold text-xs uppercase tracking-wider transition-colors">
                Perform Search
              </button>
            </form>
            {searchResults.length > 0 && (
              <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 space-y-2">
                <div className="text-[10px] font-extrabold uppercase text-slate-400">Match Results</div>
                <div className="space-y-1">
                  {searchResults.map((res, i) => (
                    <div key={i} className="text-sm font-bold text-slate-700 hover:text-accent cursor-pointer py-1">
                      {res}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Auth/Sign Up Modal */}
      {isSignUpOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl border border-slate-100 animate-fadeIn">
            <div className="flex justify-between items-center px-6 py-5 border-b border-slate-100">
              <span className="font-extrabold text-primary flex items-center gap-1">
                <Droplet className="w-5 h-5 text-accent fill-accent" />
                <span>Create Tejash Water Account</span>
              </span>
              <button onClick={() => setIsSignUpOpen(false)} className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              {signUpSuccess ? (
                <div className="text-center py-8 space-y-3">
                  <span className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-md animate-bounce">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </span>
                  <h3 className="font-extrabold text-lg text-primary">Registration Success!</h3>
                  <p className="text-xs text-slate-500">Welcome on board. Loading client dashboard...</p>
                </div>
              ) : (
                <form onSubmit={handleSignUpSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-2xs font-extrabold uppercase text-slate-400">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={signUpEmail}
                      onChange={(e) => setSignUpEmail(e.target.value)}
                      placeholder="name@email.com" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-2xs font-extrabold uppercase text-slate-400">Password</label>
                    <input 
                      type="password" 
                      required
                      placeholder="••••••••" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <input type="checkbox" required id="terms" className="rounded text-accent" />
                    <label htmlFor="terms" className="text-2xs text-slate-500">I agree to the Terms of Service & Privacy Policy</label>
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-accent hover:bg-accent-dark text-white rounded-2xl font-bold text-xs uppercase tracking-wider transition-colors shadow-md hover:shadow-accent/20">
                    Register Account
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full flex flex-col justify-between shadow-2xl border-l border-slate-100 animate-slideLeft">
            <div className="flex justify-between items-center px-6 py-5 border-b border-slate-100">
              <span className="font-extrabold text-primary flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-accent" />
                <span>Your Cart ({cart.length})</span>
              </span>
              <button onClick={() => setIsCartOpen(false)} className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-20 space-y-4">
                  <ShoppingBag className="w-16 h-16 text-slate-300 mx-auto" />
                  <p className="text-sm font-bold text-slate-500">Your cart is currently empty.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item, i) => (
                    <div key={i} className="flex justify-between items-center bg-slate-50 border border-slate-100 p-4 rounded-2xl animate-fadeIn">
                      <div className="space-y-0.5">
                        <div className="font-bold text-slate-800 text-sm">{item.title}</div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold">{item.category}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-extrabold text-accent text-sm">{item.price}</span>
                        <button 
                          onClick={() => {
                            setCart(prev => prev.filter((_, idx) => idx !== i));
                            showToast(`Removed "${item.title}" from cart`);
                          }}
                          className="text-xs text-red-500 font-bold hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Action Buttons */}
            <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-4">
              <div className="flex justify-between items-center text-sm font-extrabold text-primary">
                <span>Total Items</span>
                <span>{cart.length}</span>
              </div>
              <button 
                onClick={() => {
                  if (cart.length === 0) return;
                  setCart([]);
                  setIsCartOpen(false);
                  showToast("Checkout simulation processed successfully!");
                }}
                disabled={cart.length === 0}
                className="w-full py-4 bg-accent disabled:bg-slate-300 text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-accent/20 text-center block"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
