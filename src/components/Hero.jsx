import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ShinyText from './ShinyText';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax & Scale */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src="/images/storeoutsidepicture.jpeg" 
          alt="Le Bro's Cafe Ambience" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-4xl flex flex-col items-center mt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex items-center bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20"
        >
          <span className="text-yellow-400 mr-2">⭐</span>
          <span className="text-white text-sm font-medium tracking-wide">4.4 Rated | Loved by 250+ customers</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-white tracking-tight mb-6 leading-[1.1]"
        >
          <ShinyText text="A Chill Space." className="text-white" speed={3} /><br />
          <ShinyText text="A Bold Taste." className="text-brand-sand" speed={3} />
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light"
        >
          Burgers, momos, fries &amp; drinks — crafted for your vibe. Minimal aesthetics, maximum flavor.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a href="#/menu" className="px-10 py-4 bg-brand-accent text-white rounded-full font-medium hover:bg-[#6a462b] transition-all hover:scale-105 active:scale-95 shadow-xl w-full sm:w-auto text-center block">
            Order Now
          </a>
          <a href="#/menu" className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-medium hover:bg-white/20 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto text-center">
            Explore Menu
          </a>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-white/60 text-[10px] tracking-[0.3em] mb-3 uppercase font-medium">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
