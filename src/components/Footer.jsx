import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#f0f0f0] pt-24 pb-12 relative z-30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 border-b border-brand-text/10 pb-16">
        
        <div className="col-span-1 md:col-span-2 space-y-6">
          <a href="#" className="font-bold tracking-tighter text-3xl text-brand-text font-serif italic">
            Le Bro's <span className="text-brand-accent">Cafe</span>
          </a>
          <p className="text-brand-text/70 font-medium max-w-sm leading-relaxed text-lg">
            A chill space with bold tastes. Experience premium burgers, momos, fries & refreshing drinks.
          </p>
          <div className="flex items-center gap-5 pt-4">
            <a href="https://ig.me/m/lebroscafe" className="w-12 h-12 rounded-full border border-brand-text/20 flex items-center justify-center text-brand-text hover:bg-brand-accent hover:text-white hover:border-transparent transition-all">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100084839335354" className="w-12 h-12 rounded-full border border-brand-text/20 flex items-center justify-center text-brand-text hover:bg-brand-accent hover:text-white hover:border-transparent transition-all">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-Brand-text uppercase tracking-widest text-sm font-bold text-brand-text">Links</h4>
          <ul className="space-y-4">
            {['Menu', 'Story', 'Gallery', 'Location', 'Contact', 'Order'].map(link => {
              const hrefLink = link === 'Menu' ? '#/menu' : `#${link.toLowerCase()}`;
              return (
              <li key={link}>
                <a href={hrefLink} className="text-brand-text/70 hover:text-brand-accent transition-colors font-medium">
                  {link}
                </a>
              </li>
              )
            })}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-brand-text uppercase tracking-widest text-sm font-bold text-brand-text">Contact</h4>
          <ul className="space-y-4 text-brand-text/70 font-medium leading-relaxed">
            <li>84/16, West, Old State Bank Colony,<br />Tambaram, Chennai, Tamil Nadu</li>
            <li><a href="tel:+919566044080" className="hover:text-brand-accent transition-colors">+91 95660 44080</a></li>
            <li><a href="mailto:lebroscafe1@gmail.com" className="hover:text-brand-accent transition-colors">lebroscafe1@gmail.com</a></li>
            <li className="pt-2 text-brand-accent font-semibold tracking-wide">01:30 PM - 10:00 PM</li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-brand-text/50 text-xs tracking-widest uppercase font-medium">
        <p>&copy; 2022 - 2026 Le Bro's Cafe. All Rights Reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-brand-text transition-colors">Privacy</a>
          <a href="#" className="hover:text-brand-text transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
