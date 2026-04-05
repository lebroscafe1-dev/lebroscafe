import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto space-y-8 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text mb-4 tracking-tight">Terms and Conditions</h1>
        <p className="text-brand-text/60 mb-12">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <div className="space-y-10 text-brand-text/80 text-lg leading-relaxed font-medium">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-text font-serif">1. Agreement to Terms</h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and <strong>Le Bro's Cafe</strong> ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-text font-serif">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-text font-serif">3. User Representations</h2>
            <p>
              By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-text font-serif">4. Cafe Offerings & Operations</h2>
            <p>
              Prices, menu items, and operating hours are subject to change without prior notice. While we strive to maintain the accuracy of our online menu, items may occasionally be unavailable. We reserve the right to modify or discontinue any product.
            </p>
            <p>
              All orders are subject to availability. Please note that our food may contain traces of allergens. If you have specific dietary requirements, please consult our staff before placing any orders either in-person or via our communication channels.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-text font-serif">5. Limitations of Liability</h2>
            <p>
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or any services provided by Le Bro's Cafe.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-text font-serif">6. Contact Information</h2>
            <p>
              For any questions regarding these terms, please contact us at:
            </p>
            <div className="bg-white/50 p-6 rounded-2xl border border-brand-text/10 space-y-2 mt-4">
              <p><strong>Address:</strong> 84/16, West, Old State Bank Colony, Tambaram, Chennai, Tamil Nadu</p>
              <p><strong>Email:</strong> <a href="mailto:lebroscafe1@gmail.com" className="text-brand-accent hover:underline">lebroscafe1@gmail.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+919566044080" className="text-brand-accent hover:underline">+91 95660 44080</a></p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Terms;
