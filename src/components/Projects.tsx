import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaJsSquare, FaReact, FaCode } from 'react-icons/fa';
import { LuScreenShare } from "react-icons/lu";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  websiteUrl: string;
  sourceCodeUrl: string;
}

const projectData: Record<string, Project[]> = {
    html: [
      {
        id: "html_2",
        title: "Mobile Component",
        description: "A basic HTML project which has mobile name and their specifications.",
        image: './Mobile_Components.png',
        technologies: ["HTML", "CSS"],
        websiteUrl: "https://gopi9989-mobile.vercel.app/",
        sourceCodeUrl: "https://github.com/Gopi9989/mobile_comp",
      },
    ],
    javascript: [
      {
        id: "js_2",
        title: "Color and Font Picker",
        description: "A simple and interactive web tool to choose text and background colours along with various font styles.",
        image: './Color and Font Picker.png',
        technologies: ["JavaScript", "CSS", "HTML"],
        websiteUrl: "https://gopi9989.github.io/Color_Picker/",
        sourceCodeUrl: "https://github.com/Gopi9989/Color_Picker",
      }
    ],
    react: [
      {
        id: "react_3",
        title: 'E-commerce Website',
        description: 'E-commerce store with product catalog, cart, and checkout.',
        image: './Ecommerece.png',
        sourceCodeUrl: 'https://github.com/Gopi9989/Ecommarce-project',
        websiteUrl: 'https://ecommarce-project-black.vercel.app/',
        technologies: ['React.js', 'JavaScript', 'Bootstrap']
      },
      {
        id: "react_4",
        title: 'Music App',
        description: 'Music streaming app with playlist creation and artist discovery.',
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80',
        sourceCodeUrl: 'https://github.com/Gopi9989/Music-app',
        websiteUrl: 'https://music-app-delta-green-43.vercel.app/',
        technologies: ['React.js', 'JavaScript', 'Bootstrap']
      },
      {
        id: "react_5",
        title: 'Quiz App',
        description: 'Quiz platform on HTML, CSS, Bootstrap, and JavaScript with scoring.',
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80',
        sourceCodeUrl: 'https://github.com/Gopi9989/QuizApp-React',
        websiteUrl: 'https://quiz-app-react-lemon-two.vercel.app/',
        technologies: ['React.js', 'JavaScript', 'Bootstrap']
      }
    ],
    typescript: [
      {
        id: "typescript_1",
        title: "Personal portfolio",
        description: "A modern and interactive developer portfolio built with TypeScript.",
        image: '/portfolio.png', 
        technologies: ["TypeScript", "React", "Tailwind CSS"],
        websiteUrl: "https://personalportfoliovishnu.vercel.app/",
        sourceCodeUrl: "https://github.com/medamvishnu27/Personal_portfolio.git"
      }
    ]
  };

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    const projects = selectedCategory === 'All'
      ? [...projectData.html, ...projectData.javascript, ...projectData.react, ...projectData.typescript]
      : projectData[selectedCategory.toLowerCase()] || [];
    setFilteredProjects(projects);
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Some <span className="text-blue-600">Projects</span> I've Built
      </motion.h2>

      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {['All', 'Html', 'JavaScript', 'React', 'TypeScript'].map((category) => (
          <motion.button
            key={category}
            className={`px-6 py-2 rounded-full ${selectedCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
          >
            {category === 'Html' && <FaHtml5 className="inline mr-2" />}
            {category === 'JavaScript' && <FaJsSquare className="inline mr-2" />}
            {category === 'React' && <FaReact className="inline mr-2" />}
            {category}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-6">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-xl text-gray-800 font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-500 transition-colors"
                  >
                    <LuScreenShare className="mr-2" />
                    View Project
                  </a>
                  <a
                    href={project.sourceCodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <FaCode className="mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
