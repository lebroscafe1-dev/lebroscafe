import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";

const Navbar = ({ isMenuPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If we are on the menu page, we always want the navbar solid so the logo works properly against light bg
  const isSolid = scrolled || isMenuPage;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed w-full z-50 transition-all duration-300 ${isSolid ? "py-4 glass" : "py-6 bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a
            href="/#"
            className={`flex items-center gap-3 text-4xl font-serif italic tracking-tight transition-colors duration-300 ${isSolid ? "text-brand-text" : "text-white"}`}
          >
            <img
              src="images/lebroslogo.png "
              alt="Logo"
              className={`w-14 h-14 md:w-20 md:h-20 object-contain transition-all duration-300 ${isSolid ? "mix-blend-multiply" : "invert mix-blend-screen"}`}
            />
            <span>
              Le Bro's <span className="text-brand-accent">Cafe</span>
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {["Menu", "Story", "Gallery", "Location", "Contact"].map((item) => {
              const hrefLink =
                item === "Menu"
                  ? "#/menu"
                  : `#${item.toLowerCase()}`;
              return (
                <a
                  key={item}
                  href={hrefLink}
                  className={`text-sm uppercase tracking-widest font-medium transition-colors duration-300 ${isSolid ? "text-brand-text hover:text-brand-accent" : "text-white/90 hover:text-white"}`}
                >
                  {item}
                </a>
              );
            })}

            <div className="flex items-center gap-4">
              <a
                href="#/menu"
                className="hidden md:inline-block px-6 py-2 bg-brand-accent text-white rounded-full text-sm font-medium hover:bg-[#6a462b] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20"
              >
                Order Now
              </a>
            </div>
          </div>

          {/* Mobile: hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              className={`transition-colors duration-300 ${scrolled ? "text-brand-text" : "text-white"}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-light/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8"
          >
            {["Menu", "Story", "Gallery", "Location", "Contact"].map((item) => {
              const hrefLink =
                item === "Menu"
                  ? "#/menu"
                  : `#${item.toLowerCase()}`;
              return (
                <a
                  key={item}
                  href={hrefLink}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-medium text-brand-text hover:text-brand-accent transition-colors"
                >
                  {item}
                </a>
              );
            })}
            <a
              href="#/menu"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              className="px-8 py-3 bg-brand-accent text-white rounded-full text-lg font-medium hover:bg-[#6a462b] transition-all text-center block"
            >
              Order Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
