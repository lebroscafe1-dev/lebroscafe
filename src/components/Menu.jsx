import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import ShinyText from './ShinyText';
import ScrollFloat from './ScrollFloat';

const menuData = [
  {
    category: "Burgers",
    subcategories: [
      {
        name: "VEG",
        items: [
          { name: "Le's Veg", price: "110" },
          { name: "Paneer", price: "140" },
          { name: "Veg Tower", price: "200" }
        ]
      },
      {
        name: "NON-VEG",
        items: [
          { name: "Le's Chicken", price: "150" },
          { name: "Zinger Burger", price: "180" },
          { name: "Chicken Tower", price: "240" },
          { name: "Mexican Chicken", price: "200" },
          { name: "Korean Chicken", price: "210" },
          { name: "Fat Boy Chicken Burger", desc: "Comes with egg & cheese", price: "250" }
        ]
      }
    ]
  },
  {
    category: "Momos - Fried & Steamed",
    subcategories: [
      {
        name: "VEG",
        items: [
          { name: "Mixed Veg", price: "90 / 100" },
          { name: "Paneer", price: "100 / 110" },
          { name: "Cheese Corn", price: "100 / 110" }
        ]
      },
      {
        name: "NON VEG",
        items: [
          { name: "Peri-Peri Chicken", price: "120 / 130" },
          { name: "Tandoori Chicken", price: "120 / 130" }
        ]
      }
    ]
  },
  {
    category: "Quick Bites",
    subcategories: [
      {
        name: "VEG",
        items: [
          { name: "Potato Kiev", price: "80" },
          { name: "Cheese Corn Nuggets", price: "80" },
          { name: "Chilli Garlic Potato Pops", price: "70" },
          { name: "Onion Rings", price: "90" },
          { name: "Potato Wedges", price: "90" }
        ]
      },
      {
        name: "NON-VEG",
        items: [
          { name: "Chicken Bites", price: "120" },
          { name: "Chicken Nuggets", price: "100" },
          { name: "Chicken Popons", price: "90" },
          { name: "Spicy Bites", price: "140" },
          { name: "Chicken Kiev", price: "110" }
        ]
      }
    ]
  },
  {
    category: "Sandwich",
    subcategories: [
      {
        name: "VEG",
        items: [
          { name: "Mixed Veg", price: "80" },
          { name: "Chilli Cheese", price: "90" },
          { name: "Corn Cheese", price: "95" },
          { name: "Spicy Paneer", price: "100" },
          { name: "Mixed Club", price: "140" }
        ]
      },
      {
        name: "NON-VEG",
        items: [
          { name: "Chicken Cheese", price: "120" },
          { name: "Tandoori Chicken", price: "120" },
          { name: "Mexican Chicken", price: "130" },
          { name: "Chicken Club", price: "150" }
        ]
      }
    ]
  },
  {
    category: "Wraps",
    subcategories: [
      {
        name: "VEG",
        items: [
          { name: "Mixed Veg", price: "110" },
          { name: "Paneer Wrap", price: "130" }
        ]
      },
      {
        name: "NON-VEG",
        items: [
          { name: "Tandoori Chicken", price: "160" },
          { name: "Crispy Fried Chicken", price: "180" },
          { name: "Mexican Chicken", price: "190" },
          { name: "Korean Chicken", price: "200" }
        ]
      }
    ]
  },
  {
    category: "Combos",
    subcategories: [
      {
        name: "VEG",
        items: [
          { name: "Spicy Paneer Sandwich + Fries + Mojito", price: "220" },
          { name: "Veg Burger + Potato Kiev + Mojito/Ice-cream", price: "240" },
          { name: "Veg Wrap + Potato Kiev + Mojito/Ice-cream", price: "230" }
        ]
      },
      {
        name: "NON-VEG",
        items: [
          { name: "Chicken Grill Sandwich + Fries + Mojito", price: "230" },
          { name: "Zinger Burger + Chicken Nuggets + Mojito/Ice-cream", price: "250" },
          { name: "Tandoori Chicken Wrap + Chicken Nuggets + Mojito/Ice-cream", price: "250" }
        ]
      }
    ]
  },
  {
    category: "Special Menu Bao",
    subcategories: [
      {
        name: "VEG",
        items: [
          { name: "Veg Kiev Bao", price: "150" },
          { name: "Peri-Peri Paneer Bao", price: "160" }
        ]
      },
      {
        name: "NON-VEG",
        items: [
          { name: "Peri-Peri Chicken Bao", price: "200" },
          { name: "Chicken Bao", price: "180" },
          { name: "Korean Bao", price: "200" },
          { name: "Barbique Bao", price: "200" },
          { name: "Mexican Bao", price: "200" }
        ]
      }
    ]
  },
  {
    category: "Fries",
    items: [
      { name: "Classic French Fries", price: "80" },
      { name: "Peri-Peri French Fries", price: "100" },
      { name: "Cheesy French Fries", price: "120" }
    ]
  },
  {
    category: "Pasta & Wings",
    subcategories: [
      {
        name: "PASTA",
        items: [
          { name: "Red Sauce", price: "200" },
          { name: "Peri-Peri", price: "210" },
          { name: "White Sauce", price: "210" },
          { name: "Add-on (Chicken)", price: "50" }
        ]
      },
      {
        name: "WINGS & TENDERS",
        items: [
          { name: "Crispy Fried", price: "180" },
          { name: "Hot & Spicy", price: "210" },
          { name: "Honey Chilli", price: "230" }
        ]
      }
    ]
  },
  {
    category: "Boxes & Platters",
    subcategories: [
      {
        name: "PLATTER",
        items: [
          { name: "Veg Bites", price: "230" },
          { name: "Non-Veg Bites", price: "250" }
        ]
      },
      {
        name: "FRIED BOXES",
        items: [
          { name: "Korean Fried Box", price: "250" },
          { name: "Nashville Fried Box", price: "250" },
          { name: "Classic Fried Box", price: "220" }
        ]
      }
    ]
  },
  {
    category: "Exclusive & Smash Burgers",
    subcategories: [
      {
        name: "NASHVILLE EXCLUSIVE",
        items: [
          { name: "Nashville Burger", price: "250" },
          { name: "Nashville Chicken Tenders", price: "250" },
          { name: "Zesty Nashville Chicken Bites", price: "220" }
        ]
      },
      {
        name: "SMASH BURGER",
        items: [
          { name: "Chicken Classic", price: "250" },
          { name: "Double Trouble", price: "300" }
        ]
      }
    ]
  },
  {
    category: "Hot Drinks",
    items: [
      { name: "Filter Coffee", price: "40" },
      { name: "Tea", price: "35" },
      { name: "Ginger Tea", price: "40" },
      { name: "Lemon Tea", price: "25" },
      { name: "Black Coffee", price: "30" },
      { name: "Black Tea", price: "25" },
      { name: "Italian Hot Chocolate", price: "140" },
      { name: "Milo", price: "150" }
    ]
  },
  {
    category: "Shakes",
    items: [
      { name: "Vanilla", price: "90" },
      { name: "Chocolate", price: "100" },
      { name: "Strawberry", price: "100" },
      { name: "Black Currant", price: "100" },
      { name: "Cold Coffee", price: "100" },
      { name: "Mango", price: "110" },
      { name: "Butterscotch", price: "100" },
      { name: "Dates", price: "100" },
      { name: "Milo", price: "180" },
      { name: "Rose Milk", price: "70" }
    ]
  },
  {
    category: "Monster Shake",
    items: [
      { name: "Choco Brownie", price: "170" },
      { name: "Oreo", price: "160" },
      { name: "Lotus Biscoff", price: "160" },
      { name: "Peanut Butter", price: "150" },
      { name: "Nutella", price: "170" }
    ]
  },
  {
    category: "Fresh Juice & Mojito",
    subcategories: [
      {
        name: "FRESH JUICE",
        items: [
          { name: "Orange", price: "80" },
          { name: "Mosambi", price: "70" },
          { name: "Pomegranate", price: "80" },
          { name: "Watermelon", price: "60" },
          { name: "Apple", price: "80" }
        ]
      },
      {
        name: "MOJITO",
        items: [
          { name: "Virgin", price: "80" },
          { name: "Bluecuracao", price: "90" },
          { name: "Blueberry", price: "90" },
          { name: "Green Apple", price: "90" },
          { name: "Kiwi", price: "90" },
          { name: "Lichee", price: "90" },
          { name: "Mango", price: "90" },
          { name: "Blackcurrent", price: "90" },
          { name: "Pineapple", price: "90" }
        ]
      }
    ]
  },
  {
    category: "Dessert & Waffle",
    subcategories: [
      {
        name: "ICE CREAM",
        items: [
          { name: "Vanilla", price: "60" },
          { name: "Strawberry", price: "60" },
          { name: "Chocolate", price: "70" },
          { name: "Butterscotch", price: "70" },
          { name: "Sizzling Brownie", price: "180" }
        ]
      },
      {
        name: "WAFFLE",
        items: [
          { name: "Banana with Honey", price: "160" },
          { name: "Nutella", price: "170" },
          { name: "Waffle with Vanilla Icecream", price: "160" }
        ]
      }
    ]
  },
  {
    category: "Extras",
    items: [
      { name: "Mayonnaise", price: "10" },
      { name: "Cheese", price: "20" },
      { name: "Water Bottle", price: "20" },
      { name: "Peri Peri Seasoning", price: "10" }
    ]
  }
];

const Menu = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <section id="menu" className="py-24 relative z-20 min-h-screen font-sans overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/85 z-10" />
        <img 
          src="images/insidepic2.jpeg" 
          alt="Menu Background" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="uppercase tracking-[0.3em] text-sm md:text-md font-bold mb-4 block drop-shadow-sm text-brand-sand">
            <ShinyText text="Handcrafted Selection" speed={3} disabled={false} />
          </span>
          <h2 className="text-5xl md:text-7xl font-serif italic tracking-tight text-white mt-2">
            <ScrollFloat stagger={0.1} floatOffset={40} charClassName="text-white">Our Menu.</ScrollFloat>
          </h2>
          <div className="w-16 h-1 bg-brand-accent mt-8 rounded-full opacity-50" />
        </motion.div>

        <div className="space-y-6 w-full pb-20">
          {menuData.map((section, index) => {
            const isExpanded = expandedCategory === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`w-full flex flex-col bg-white/5 backdrop-blur-md rounded-2xl border transition-colors duration-300 ${isExpanded ? 'border-brand-accent/50 bg-white/10' : 'border-white/10 hover:border-white/20 hover:bg-white/10'}`}
                onMouseEnter={() => setExpandedCategory(index)}
              >
                <div 
                  onClick={() => toggleCategory(index)}
                  className="w-full flex items-center justify-between p-6 cursor-pointer group"
                >
                  <h3 className="text-2xl md:text-3xl font-serif italic text-white tracking-wide group-hover:text-brand-sand transition-colors">
                    {section.category}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isExpanded ? 'bg-brand-accent text-white rotate-45' : 'bg-white/10 text-white group-hover:bg-brand-accent/20'}`}>
                    <Plus size={20} />
                  </div>
                </div>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 space-y-8 w-full border-t border-white/10 mt-2">
                        {section.subcategories ? (
                          <div className="space-y-10 w-full pt-6">
                            {section.subcategories.map((sub, sIdx) => (
                              <div key={sIdx} className="w-full">
                                <h4 className="text-brand-sand font-serif italic tracking-wider text-xl mb-6">
                                  {sub.name}
                                </h4>
                                <div className="space-y-4 w-full flex flex-col">
                                  {sub.items.map((item, i) => (
                                    <div 
                                      key={i} 
                                      className="flex justify-between items-start gap-4 p-4 rounded-xl hover:bg-black/40 border border-transparent hover:border-white/10 transition-all group"
                                    >
                                      <div className="flex-1 pr-4">
                                        <h5 className="text-lg font-medium text-white group-hover:text-brand-sand transition-colors">
                                          {item.name}
                                        </h5>
                                        {item.desc && (
                                          <p className="text-white/50 text-sm mt-1 leading-relaxed">
                                            {item.desc}
                                          </p>
                                        )}
                                      </div>
                                      
                                      <div className="flex flex-col items-end gap-2 shrink-0">
                                        <span className="text-lg font-bold text-white whitespace-nowrap">
                                          ₹{item.price}
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="w-full pt-6 space-y-4 flex flex-col">
                            {section.items.map((item, i) => (
                              <div 
                                key={i} 
                                className="flex justify-between items-start gap-4 p-4 rounded-xl hover:bg-black/40 border border-transparent hover:border-white/10 transition-all group"
                              >
                                <div className="flex-1 pr-4">
                                  <h5 className="text-lg font-medium text-white group-hover:text-brand-sand transition-colors">
                                    {item.name}
                                  </h5>
                                  {item.desc && (
                                    <p className="text-white/50 text-sm mt-1 leading-relaxed">
                                      {item.desc}
                                    </p>
                                  )}
                                </div>
                                
                                <div className="flex flex-col items-end gap-2 shrink-0">
                                  <span className="text-lg font-bold text-white whitespace-nowrap">
                                    ₹{item.price}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
