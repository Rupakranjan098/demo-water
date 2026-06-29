import React from 'react';
import { Droplet, User, Calendar, MessageSquare, Pin } from 'lucide-react';

export default function Blog({ onReadMoreClick }) {
  const posts = [
    {
      id: 'post-1',
      title: 'Filtered Water Cost Savings',
      category: 'Service',
      excerpt: 'Discover how switching from single-use plastic bottles to a home filtration unit can save you over ₹10,000 annually.',
      image: 'https://images.unsplash.com/photo-1542223189-67a03fa0f0bd?auto=format&fit=crop&w=400&q=80',
      author: 'Admin',
      date: 'June 22, 2026',
      comments: 3,
      isSticky: true
    },
    {
      id: 'post-2',
      title: 'Safe Water for Babies',
      category: 'Family Care',
      excerpt: 'Everything parents need to know about fluoride levels, distillation processes, and pre-boiling water for formula.',
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=400&q=80',
      author: 'Dr. Evelyn',
      date: 'June 18, 2026',
      comments: 7,
      isSticky: false
    },
    {
      id: 'post-3',
      title: 'Alkaline for Active Life',
      category: 'Experts & Fitness',
      excerpt: 'How alkaline water with pH levels of 9.0+ helps neutralize acid in the bloodstream and speeds up muscle recovery.',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80',
      author: 'Marcus Fit',
      date: 'June 14, 2026',
      comments: 12,
      isSticky: false
    }
  ];

  return (
    <section id="blog" className="relative bg-gradient-to-b from-primary to-primary-dark text-white pt-24 pb-20 overflow-hidden">
      {/* Wave shape top divider */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] text-accent-light fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,81.84,22.38,154.93,34.35,229.07,73.57,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-bold uppercase tracking-wider text-sm">Recent Posts</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Our Blog
          </h2>
          <p className="text-blue-200 mt-3 text-sm">
            Read expert tips on hydration science, home maintenance, and the ecological impact of smart filtration.
          </p>
        </div>

        {/* 3-card blog row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white/5 backdrop-blur-lg rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/20 flex flex-col justify-between group hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Photo Frame */}
              <div className="relative w-full h-56 overflow-hidden bg-slate-800">
                <img 
                  src={
                    post.id === 'post-1' ? 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=400&q=80' :
                    post.id === 'post-2' ? 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=400&q=80' :
                    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400&q=80'
                  } 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent opacity-80" />
                
                {/* Category tag */}
                <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md border border-white/20">
                  <Droplet className="w-3.5 h-3.5 fill-white" />
                  <span>{post.category}</span>
                </div>

                {/* Sticky Post pin */}
                {post.isSticky && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-white p-2 rounded-full shadow-lg" title="Sticky Post">
                    <Pin className="w-4 h-4 fill-white" />
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-8 flex-1 flex flex-col justify-between relative z-10">
                <div className="space-y-4">
                  <h3 className="font-extrabold text-white text-xl sm:text-2xl group-hover:text-accent transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-blue-100/70 leading-relaxed font-medium">
                    {post.excerpt}
                  </p>
                </div>

                {/* Meta Rows & Read More button */}
                <div className="pt-6 mt-6 border-t border-white/10 space-y-5">
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-blue-200/60 text-xs font-semibold uppercase tracking-wider">
                    <div className="flex items-center gap-1.5">
                      <User className="w-4 h-4 text-accent" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-between items-center">
                    <div className="flex items-center gap-1.5 text-blue-200/60 text-xs font-bold uppercase tracking-wider">
                      <MessageSquare className="w-4 h-4 text-accent" />
                      <span>{post.comments}</span>
                    </div>
                    <button 
                      onClick={() => {
                        // TODO: wire to API in Part 7
                        onReadMoreClick(post.id);
                      }}
                      className="px-6 py-2 border-2 border-accent text-accent hover:bg-accent hover:text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300"
                    >
                      Read Article
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
