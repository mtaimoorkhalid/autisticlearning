import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const links = [
    { name: 'FAILURE_ANALYSIS', target: '#problem' },
    { name: 'THE_LOOP', target: '#method' },
    { name: 'TARGETS', target: '#targets' },
    { name: 'INITIATE', target: '#contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* DESKTOP HUD */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-difference text-white"
      >
        <div className="flex items-center gap-4">
          {/* Brand Teal Icon */}
          <Terminal size={20} className="text-[#4ebaba]" />
          <span className="font-mono text-xs md:text-sm hidden md:inline-block tracking-widest">
            SYS.STATUS: <span className="text-[#4ebaba] animate-pulse">OPTIMAL</span>
          </span>
          <span className="font-mono text-xs md:text-sm hidden md:inline-block opacity-50 border-l border-gray-600 pl-4 ml-4">
            {time}
          </span>
        </div>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.target)}
              className="font-mono text-xs hover:text-[#4ebaba] transition-colors tracking-widest"
            >
              [{link.name}]
            </button>
          ))}
        </div>

        <button 
          className="md:hidden text-white hover:text-[#4ebaba] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </motion.nav>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-40 flex flex-col justify-center items-center gap-8 backdrop-blur-sm"
          >
            {links.map((link, i) => (
              <motion.button
                key={link.name}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollToSection(link.target)}
                className="shock-text text-3xl md:text-4xl hover:text-[#4ebaba] text-white tracking-wider"
              >
                {link.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;