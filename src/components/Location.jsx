import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import ScrollFloat from './ScrollFloat';

const Location = () => {
  return (
    <section id="location" className="py-32 bg-[#F9F9F9] relative z-30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-brand-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">Visit Us</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text">
            <ScrollFloat stagger={0.09} floatOffset={45}>Find Your Spot.</ScrollFloat>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl shadow-brand-text/5 min-h-[500px]">
          {/* Map Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[500px] md:h-auto rounded-none md:rounded-l-3xl overflow-hidden shadow-2xl relative"
          >
            <iframe 
              src="https://maps.google.com/maps?q=Le%20Bro's%20Cafe,%20Tambaram,%20Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Le Bro's Cafe Location"
              className="filter grayscale-[30%] contrast-[1.1] opacity-90"
            ></iframe>
            
            {/* Cute map pin overlay */}
            <motion.div 
              initial={{ scale: 0, y: -20 }}
              whileInView={{ scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 10 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="bg-brand-accent text-white p-4 rounded-full shadow-xl shadow-brand-accent/30 relative"
              >
                <MapPin size={32} />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-accent rotate-45 -z-10" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Info Side */}
          <div className="w-full md:w-[45%] p-10 lg:p-16 flex flex-col justify-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-accent to-[#d4af37] mb-8"
            >
              <ScrollFloat stagger={0.1} floatOffset={25}>Tambaram's Finest.</ScrollFloat>
            </motion.h3>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              {[
                {
                  icon: <MapPin className="text-brand-accent mt-1 flex-shrink-0" />,
                  title: "Located In",
                  content: <>84/16, West, Old State Bank Colony,<br />Tambaram, Chennai,<br />Tamil Nadu 600045</>
                },
                {
                  icon: <Phone size={24} />,
                  title: "Bookings",
                  content: "+91 95660 44080",
                  isBookings: true
                },
                {
                  icon: <Clock size={24} />,
                  title: "Hours",
                  content: <>Everyday<br /><span className="text-brand-accent font-semibold">11 AM — 10 PM</span></>
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-6 group cursor-default"
                >
                  <div className={`p-4 rounded-full text-brand-accent shrink-0 transition-colors duration-300 ${item.title === 'Located In' ? '' : 'bg-brand-light group-hover:bg-brand-accent group-hover:text-white'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest font-semibold text-brand-text/50 mb-2">{item.title}</h4>
                    <p className={`text-brand-text/90 font-medium ${item.isBookings ? 'text-lg lg:text-xl' : 'text-lg'} leading-relaxed`}>
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-14 flex flex-col sm:flex-row gap-4"
            >
              <a href="https://maps.app.goo.gl/YourGoogleMapsLink" target="_blank" rel="noreferrer" className="px-8 py-4 bg-brand-accent text-white rounded-full font-medium hover:bg-[#6a462b] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-accent/20 text-center w-full sm:w-auto flex-1">
                Get Directions
              </a>
              <a href="tel:+919566044080" className="px-8 py-4 bg-brand-light text-brand-text rounded-full font-medium hover:bg-[#ebebeb] transition-all hover:scale-105 active:scale-95 text-center w-full sm:w-auto flex-1 border border-transparent hover:border-brand-text/10">
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
