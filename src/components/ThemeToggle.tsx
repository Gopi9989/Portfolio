import React from 'react';
import { motion } from 'framer-motion';
import { LuSun, LuMoon } from "react-icons/lu";
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <LuMoon className="w-5 h-5 text-gray-800" />
      ) : (
        <LuSun className="w-5 h-5 text-yellow-400" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;