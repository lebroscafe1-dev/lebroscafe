import React from 'react';
import { motion } from 'framer-motion';
import ScrollFloat from './ScrollFloat';

const signatureItems = [
  {
    title: "Nashville Burger",
    desc: "Spicy, crispy, and dangerously addictive. Our signature heat perfectly balanced with cool ranch.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Chicken Momos",
    desc: "Steamed to absolute perfection, packed with robust flavors and served with our fiery signature dip.",
    img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Peri Peri Fries",
    desc: "Golden hand-cut fries heavily dusted with our secret in-house rustic peri peri spice blend.",
    img: "images/peri peri fries.jpeg"
  }
];

const Signature = () => {
  return (
    <section id="story" className="py-32 bg-brand-light relative z-30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-28"
        >
          <span className="text-brand-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">The Classics</span>
          <h2 className="text-4xl md:text-6xl font-serif italic text-brand-text tracking-tight mb-4">
            <ScrollFloat stagger={0.08} floatOffset={40}>Signature Collection.</ScrollFloat>
          </h2>
        </motion.div>

        <div className="space-y-32">
          {signatureItems.map((item, index) => (
            <div key={item.title} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24`}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-1/2 overflow-hidden rounded-2xl aspect-[4/5] md:aspect-square relative group bg-gray-100"
              >
                <div className="absolute inset-0 bg-brand-accent/5 z-10 transition-opacity duration-500 group-hover:opacity-0" />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: index % 2 !== 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 flex flex-col justify-center relative"
              >
                <span className="absolute -top-16 md:-top-24 left-0 text-brand-sand/30 text-[120px] md:text-[180px] font-serif italic leading-none select-none -z-10">0{index + 1}</span>
                <h3 className="text-3xl font-serif italic text-brand-text tracking-tight mb-4 pr-10">
                  <ScrollFloat stagger={0.1} floatOffset={30}>{item.title}</ScrollFloat>
                </h3>
                <p className="text-lg md:text-xl text-brand-text/70 mb-10 max-w-md font-light leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex items-center gap-6">
                  <a href="#/menu" className="group inline-flex items-center justify-center w-14 h-14 rounded-full border border-brand-accent/30 hover:border-brand-accent hover:bg-brand-accent transition-all relative">
                    <span className="text-brand-accent group-hover:text-white transition-colors">↗</span>
                  </a>
                  <span className="text-sm tracking-widest uppercase font-medium text-brand-text/60">Explore Menu</span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Signature;
