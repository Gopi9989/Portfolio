import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdSimCardDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { AnimatedSection } from './AnimatedSection';
import Footer from './Footer';
import Education from './Education';
import About from './About';
import Certificates from './Certificates';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
  const [title, setTitle] = useState('Full Stack ');

  useEffect(() => {
    const titles = ['Full Stack ', 'Frontend ', 'Backend '];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % titles.length;
      setTitle(titles[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);



  const waveAnimation = {
    animate: {
      rotate: [0, 14, -8, 14, -4, 10, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  return (
    <>
      <AnimatedSection className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hey{' '}
              <motion.span
                className="inline-block origin-[70%_70%]"
                animate="animate"
                variants={waveAnimation}
              >
                👋
              </motion.span>
            </h1>
            <h2 className="text-3xl md:text-4xl mb-4">I'm Gopi Krishna Mannava</h2>
            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-4"
              animate={{ color: ['#2563eb', '#7c3aed', '#2563eb'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span>{title}</span> Developer
            </motion.h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              A passionate and detail-oriented software developer with a solid academic background in Electronics & Communication Engineering and hands-on experience in creating user-friendly web and software applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg"
                >
                  <RiContactsFill className="text-xl" />
                  Contact me
                </motion.button>
              </Link>
              <motion.a
                href="https://drive.google.com/file/d/1LaBmdrwaOlXiqEZ-ZOxPLIbrtkuVluO3/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-lg border-2 border-blue-600 dark:border-blue-400"
              >
                <MdSimCardDownload className="text-xl" />
                Resume
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className="order-1 md:order-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/MGK_img.jpg"
              alt="Profile"
              className="w-full h-auto rounded-lg shadow-xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </AnimatedSection>

      <About />
      <Certificates />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;