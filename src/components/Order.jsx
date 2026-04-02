import React from 'react';
import { motion } from 'framer-motion';
import ScrollFloat from './ScrollFloat';

const Order = () => {
  return (
    <section id="order" className="py-24 bg-brand-sand relative z-30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-brand-accent uppercase tracking-[0.2em] text-sm font-semibold mb-6 block drop-shadow-sm">Craving Something?</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-brand-text mb-8">
            <ScrollFloat stagger={0.06} floatOffset={55}>Hungry? Let's Fix That.</ScrollFloat>
          </h2>
          
          <div className="flex items-center justify-center gap-3 text-brand-text/70 uppercase tracking-[0.3em] text-xs font-bold mb-12">
            <span>Fresh</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
            <span>Fast</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
            <span>No Compromises</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-lg mx-auto">
            <a href="#/menu" className="flex items-center justify-center px-12 py-5 bg-brand-accent text-white rounded-full font-bold text-lg hover:bg-[#6a462b] transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-brand-accent/30 w-full sm:w-auto text-center">
              Explore Our Menu
            </a>
            <a href="tel:+919566044080" className="px-12 py-5 bg-white text-brand-text rounded-full font-bold text-lg hover:bg-brand-light transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-text/5 border border-brand-text/5 w-full sm:w-auto text-center font-medium">
              Quick Call
            </a>
          </div>
        </motion.div>

      </div>

      <div className="absolute -top-[150%] -left-[50%] w-[200%] h-[400%] bg-gradient-to-br from-brand-sand/50 via-transparent to-brand-accent/5 -z-10 rotate-12 blur-3xl pointer-events-none" />
    </section>
  );
};

export default Order;
