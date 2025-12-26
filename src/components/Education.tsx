import { motion } from 'framer-motion';
import { FadeInView } from './FadeInView';
import { LuGraduationCap, LuCalendar, LuMapPin } from "react-icons/lu";


const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      field: "Electronics & Communication Engineering",
      institution: "Godavari Institute of Engineering and Technology",
      location: "Rajmundry, India",
      period: "2020 - 2024",
      description: "Focused on core electronics principles and communication systems. Participated in various technical projects and workshops."
    },
    {
      id: 2,
      degree: "Intermediate Education",
      field: "Mathematics, Physics & Chemistry",
      institution: "Sri Chaitanya Junior College",
      location: "Guntur, India",
      period: "2018 - 2020",
      description: "Completed intermediate education with focus on sciences and mathematics. Participated in various academic competitions."
    },{
      id: 3,
      degree: "High School Education",
      field: "Mathematics, Science & Social Studies",
      institution: "Scholars School",
      location: "Piduguralla, India",
      period: "2017 - 2018",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
      <FadeInView>
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-blue-600">Education</span>
        </h2>
      </FadeInView>

      <motion.div
        className="max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {education.map((edu) => (
          <motion.div
            key={edu.id}
            className="mb-12 bg-white rounded-lg shadow-lg p-6"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <LuGraduationCap className="text-3xl text-blue-600 mr-4" />
              <div>
                <h3 className="text-xl text-gray-800 font-semibold">{edu.degree}</h3>
                
                <p className="text-gray-600">{edu.field}</p>
                <p className="text-gray-900 text-md">{edu.institution}</p>
              </div>
            </div>
            <div className="ml-12">
              <div className="flex items-center mb-2">
                <LuCalendar className="text-gray-500 mr-2" />
                <span className="text-gray-600">{edu.period}</span>
              </div>
              <div className="flex items-center mb-4">
                <LuMapPin className="text-gray-500 mr-2" />
                <span className="text-gray-600">{edu.location}</span>
              </div>
              <p className="text-gray-700">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;