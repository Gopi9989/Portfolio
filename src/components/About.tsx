import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaJava,
  FaDatabase, FaReact, FaBootstrap, FaGithub,
  FaCodeBranch, FaLeaf} from 'react-icons/fa';


const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.2 }
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

  const technicalSkills = [
    { icon: FaHtml5, name: 'HTML', color: '#E34F26' },
    { icon: FaCss3Alt, name: 'CSS', color: '#1572B6' },
    { icon: FaJsSquare, name: 'JavaScript', color: '#F7DF1E' },
    { icon: FaJava, name: 'Java', color: '#007396' },
    { icon: FaDatabase, name: 'MySQL', color: '#4479A1' },
    { icon: FaReact, name: 'React.js', color: '#61DAFB' },
    { icon: FaBootstrap, name: 'Bootstrap', color: '#563D7C' },
    { icon: FaGithub, name: 'GitHub', color: '#181717' },
    { icon: FaCodeBranch, name: 'GitLens', color: '#E44D27' },
    { icon: FaLeaf, name: 'Spring Boot', color: '#6DB33F' },
    { icon: null, name: 'UI/UX', color: '#6C63FF' }
  ];

  return (
    <motion.div
      className="container mx-auto px-4 py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl font-bold mb-6">I love being a <br /> <span className="text-blue-600">Developer!</span></h1>
          <p className="text-lg text-gray-500 mb-6">
            I'm a Full-Stack Developer passionate about building and managing both the front-end and back-end of websites and web applications, ensuring seamless functionality and delivering impactful user experiences. I am seeking for a challenging position in reputable
            organization where I can learn new skills, expand my knowledge, make a positive impact on the team and contribute to the organization.

          </p>
          <p className="text-lg text-gray-500 mb-6">
            I also enjoy sharing content about the knowledge and skills I've gained over the years in web development and programming. My goal is to support the developer community by providing valuable insights and resources.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <motion.div className="text-center" variants={itemVariants}>
              <h3 className="text-3xl font-bold text-blue-500">8</h3>
              <p className="text-gray-500">Completed projects</p>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <h3 className="text-3xl font-bold text-blue-500">23</h3>
              <p className="text-gray-500">Positive reviews</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <img
            src="/image.png"
            alt="About"
            className="rounded-lg shadow-xl w-full h-96"
            loading="lazy"
          />
        </motion.div>
      </div>

      <motion.div className="mt-16" variants={containerVariants}>
        <h2 className="text-3xl font-bold text-center mb-8"><span className='text-blue-600'>Technical</span> Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technicalSkills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-md"
              variants={itemVariants}
              style={{ color: skill.color }}
            >
              {skill.icon ? <skill.icon className="text-2xl" /> : <div className="text-2xl font-bold">🎨</div>}
              <span className="text-gray-800">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className="mt-16" variants={containerVariants}>
        <h2 className="text-3xl font-bold text-center mb-8">Language <span className='text-blue-500'>Skills</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { language: 'English', percentage: 80 },
            { language: 'Hindi', percentage: 60 },
            { language: 'Telugu', percentage: 100 }
          ].map((lang, index) => (
            <motion.div
              key={lang.language}
              className="bg-white text-gray-700 p-6 rounded-lg shadow-md text-center"
              variants={itemVariants}
            >
              <motion.div
                className="text-4xl font-bold text-blue-500 mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {lang.percentage}%
              </motion.div>
              <h3 className="text-xl font-bold">{lang.language}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
