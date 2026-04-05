import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
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
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-brand-text/60 mb-12">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <div className="space-y-10 text-brand-text/80 text-lg leading-relaxed font-medium">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-text font-serif">1. Introduction</h2>
            <p>
              Welcome to Le Bro's Cafe. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-text font-serif">2. Information We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you when you interact with our website, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Data:</strong> Includes your email address and telephone numbers if you reach out to us.</li>
              <li><strong>Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
              <li><strong>Usage Data:</strong> Includes information about how you use our website.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-text font-serif">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your queries and feedback regarding our menu and services.</li>
              <li>Improve our website, services, marketing, and customer relationships.</li>
              <li>Administer and protect our business and this website.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-text font-serif">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-text font-serif">5. Contact Details</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us in the following ways:
            </p>
            <div className="bg-white/50 p-6 rounded-2xl border border-brand-text/10 space-y-2 mt-4">
              <p><strong>Name:</strong> Le Bro's Cafe</p>
              <p><strong>Email address:</strong> <a href="mailto:lebroscafe1@gmail.com" className="text-brand-accent hover:underline">lebroscafe1@gmail.com</a></p>
              <p><strong>Telephone number:</strong> <a href="tel:+919566044080" className="text-brand-accent hover:underline">+91 95660 44080</a></p>
              <p><strong>Postal address:</strong> 84/16, West, Old State Bank Colony, Tambaram, Chennai, Tamil Nadu</p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Privacy;
