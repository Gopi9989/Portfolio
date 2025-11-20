import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <NavLink to="/" className="text-2xl font-bold">
            <span className="text-blue-600 dark:text-blue-400">Home</span>
          </NavLink>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-8">
              <NavLinks />
            </div>
            
            <ThemeToggle />

            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-around"
              >
                ☰
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
              <NavLinks mobile onClick={() => setIsOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const NavLinks = ({ mobile = false, onClick = () => {} }) => {
  const links = [
    { to: "/about", text: "About" },
    { to: "/certificates", text: "Certificates" },
    { to: "/projects", text: "Projects" },
    { to: "/contact", text: "Contact" },
  ];

  return links.map((link) => (
    <NavLink
      key={link.to}
      to={link.to}
      onClick={onClick}
      className={({ isActive }) =>
        `${
          mobile ? "block px-3 py-2" : "inline-flex items-center px-1 py-2"
        } text-base font-medium transition-colors duration-200 ${
          isActive 
            ? "text-blue-600 dark:text-blue-400" 
            : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        }`
      }
    >
      {link.text}
    </NavLink>
  ));
};

export default Navbar;