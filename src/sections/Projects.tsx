import React from 'react';
import { FadeInView } from '../components/FadeInView';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "#"
    },
    // Add more projects...
  ];

  return (
    <section className="py-20">
      <FadeInView>
        <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </FadeInView>
    </section>
  );
}

export default Projects;