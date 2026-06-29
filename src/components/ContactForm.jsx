import React, { useState } from 'react';
import { Send, CheckCircle, Search, MapPin, Droplet, Calendar } from 'lucide-react';

export default function ContactForm({ onSubmitContact, onCheckAvailability }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [availability, setAvailability] = useState({
    location: '',
    waterType: '',
    deliveryDate: ''
  });
  const [availChecked, setAvailChecked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // TODO: wire to API in Part 7
    if (onSubmitContact) onSubmitContact(formData);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  const handleAvailChange = (e) => {
    const { name, value } = e.target;
    setAvailability(prev => ({ ...prev, [name]: value }));
  };

  const handleAvailSubmit = (e) => {
    e.preventDefault();
    setAvailChecked(true);
    // TODO: wire to API in Part 7
    if (onCheckAvailability) onCheckAvailability(availability);
    setTimeout(() => setAvailChecked(false), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-bold uppercase tracking-wider text-sm">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mt-2">
            Get In Touch
          </h2>
          <p className="text-slate-600 mt-3 text-sm">
            Have questions about systems, schedules, or commercial plans? Our team is available 24/7.
          </p>
        </div>

        {/* Two-Column Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-blue-50 grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto mb-20">
          
          {/* Left Column: Form with Purple/Navy background panel */}
          <form 
            onSubmit={handleFormSubmit}
            className="col-span-12 lg:col-span-7 bg-gradient-to-br from-primary-dark via-primary to-indigo-950 text-white p-6 sm:p-12 space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide">Connect With Us</h3>
            
            {isSubmitted ? (
              <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 p-4 rounded-xl flex items-center gap-3 animate-fadeIn">
                <CheckCircle className="w-6 h-6 shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-sm">Message Sent Successfully!</p>
                  <p>Our hydration consultants will contact you within 2 hours.</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-2xs font-bold uppercase text-blue-200">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John" 
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent focus:bg-white/15"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-2xs font-bold uppercase text-blue-200">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe" 
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent focus:bg-white/15"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-2xs font-bold uppercase text-blue-200">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent focus:bg-white/15"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-2xs font-bold uppercase text-blue-200">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent focus:bg-white/15"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-2xs font-bold uppercase text-blue-200">Your Message</label>
                  <textarea 
                    rows="4"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your inquiry..." 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent focus:bg-white/15 resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full py-3.5 bg-accent hover:bg-accent-dark text-white rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-accent/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* Right Column: Bubbly water photo */}
          <div className="col-span-12 lg:col-span-5 h-64 lg:h-auto bg-slate-900 relative">
            <img 
              src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=500&q=80" 
              alt="Bubbly water drop close up" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
              <div className="text-xl font-bold">100% Satisfaction</div>
              <p className="text-xs text-blue-100">Every installation comes with a 12-month parts and labor service guarantee.</p>
            </div>
          </div>

        </div>

        {/* Floating White Search/Availability Bar (designed to overlap the section boundary) */}
        <div className="relative z-20 max-w-5xl mx-auto -mb-32">
          <form 
            onSubmit={handleAvailSubmit}
            className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col lg:flex-row items-center gap-6"
          >
            {availChecked && (
              <div className="absolute top-0 left-0 right-0 -mt-10 mx-auto w-fit bg-emerald-500 text-white font-semibold text-xs px-4 py-1.5 rounded-full shadow-md animate-bounce z-30">
                Checking availability in location... Available!
              </div>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {/* Location Select */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-extrabold uppercase text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>Location</span>
                </label>
                <select 
                  name="location"
                  required
                  value={availability.location}
                  onChange={handleAvailChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-700 font-bold focus:outline-none focus:border-accent"
                >
                  <option value="">Select City</option>
                  <option value="ny">New York, NY</option>
                  <option value="la">Los Angeles, CA</option>
                  <option value="ch">Chicago, IL</option>
                  <option value="tx">Houston, TX</option>
                </select>
              </div>

              {/* Water Type Select */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-extrabold uppercase text-slate-400 flex items-center gap-1">
                  <Droplet className="w-3.5 h-3.5 text-accent" />
                  <span>Water Type</span>
                </label>
                <select 
                  name="waterType"
                  required
                  value={availability.waterType}
                  onChange={handleAvailChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-700 font-bold focus:outline-none focus:border-accent"
                >
                  <option value="">Select Type</option>
                  <option value="alkaline">Alkaline pH 9.5</option>
                  <option value="mineral">Natural Mineral</option>
                  <option value="purified">Purified RO</option>
                </select>
              </div>

              {/* Delivery Date */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-extrabold uppercase text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  <span>Delivery Date</span>
                </label>
                <input 
                  type="date"
                  name="deliveryDate"
                  required
                  value={availability.deliveryDate}
                  onChange={handleAvailChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-bold focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full lg:w-auto bg-accent hover:bg-accent-dark text-white rounded-2xl px-6 py-4 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-accent/20 flex items-center justify-center gap-2 shrink-0 self-end"
            >
              <Search className="w-4 h-4" />
              <span>Check Availability</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
