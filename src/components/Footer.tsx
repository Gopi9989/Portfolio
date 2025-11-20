import { motion } from 'framer-motion';
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

const Footer = () => {
  const socialLinks = [
    { icon: LuGithub, href: "https://github.com/Gopi9989" },
    { icon: LuLinkedin, href: "https://www.linkedin.com/in/gopikrishna06/" },
    { icon: LuMail, href: "mailto:gopikrishna.it10@gmail.com" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold">
              <span className="text-blue-500"> </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="text-2xl" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-gray-400"
          >
            <p>&copy; {new Date().getFullYear()} All rights reserved to Gopi Krishna..</p>
            <p className="mt-2">Made with ❤️ using React and Tailwind CSS</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;