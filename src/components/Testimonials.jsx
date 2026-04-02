import React from 'react';
import { motion } from 'framer-motion';
import ScrollFloat from './ScrollFloat';

const testimonials = [
  {
    quote: "Never disappoints — burgers & fries are 🔥",
    author: "Rahul S."
  },
  {
    quote: "Perfect chill spot with great ambience and even better momos.",
    author: "Sneha V."
  },
  {
    quote: "The Nashville Burger is easily the best in Tambaram. A hidden gem.",
    author: "Arjun K."
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-brand-light relative z-30 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-brand-sand/10 skew-y-[3deg] scale-125 origin-top-left" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-brand-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">Word of Mouth</span>
          <h2 className="text-4xl md:text-6xl font-serif italic text-brand-text tracking-tight mb-20 text-center">
            <ScrollFloat stagger={0.09} floatOffset={40}>What They Say.</ScrollFloat>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-10 md:p-14 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-[#f0f0f0] relative"
            >
              <div className="text-brand-accent/20 absolute top-8 left-8 text-6xl font-serif">"</div>
              <p className="text-brand-text/90 font-serif italic text-2xl md:text-3xl leading-relaxed mb-8 relative z-10 pt-4">
                {test.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-accent font-bold text-lg">
                  {test.author.charAt(0)}
                </div>
                <div className="text-sm font-semibold tracking-wide text-brand-text/70 uppercase">
                  {test.author}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
