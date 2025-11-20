import { motion } from 'framer-motion';
import { FadeInView } from './FadeInView';
import { LuExternalLink } from "react-icons/lu";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "AWS Certified Cloud Practitioner",
      issuer: "AWS",
      date: "2024",
      credentialUrl: "https://drive.google.com/file/d/1nW9beaYUcxltrK4Q3DkuyAYCFXS9IzAc/view?usp=sharing",
      image: "/AWS.png"
    },
    {
      id: 2,
      title: "Introduction to Internet of Things",
      issuer: "NPTEL",
      date: "2023",
      credentialUrl: "https://drive.google.com/file/d/1uyXAcPZjcx6j02qAO1yya3eVA_mwIHQc/view?usp=sharing",
      image: "/NPTEL.png"
    },
    {
      id: 3,
      title: "Oracle Cloud Infrastructure Foundations Associate",
      issuer: "Oracle",
      date: "2024",
      credentialUrl: "https://drive.google.com/file/d/16Qw3FKlRWf37GBJyJVEPDmN-DljbKqM8/view?usp=sharing",
      image: "/Oracle.png"
    },
    {
      id: 4,
      title: "Amazon Web Services-Cloud Computing",
      issuer: "APSSDC",
      date: "2023",
      credentialUrl: "https://drive.google.com/file/d/1vflL4WxklN0xriP2mXUXxNI9MMtI-7f_/view?usp=sharing",
      image: "/APSSDC.png"
    },{
      id: 5,
      title: "Data Science",
      issuer: "360DigiTMG",
      date: "2024",
      credentialUrl: "https://drive.google.com/file/d/1wdaf6PldBXlSjbzrvFb8IzVbdTNv4qCy/view?usp=sharing",
      image: "/360DigiTmg.png"
    },{
      id: 6,
      title: "Python for Data Science",
      issuer: "IBM",
      date: "2023",
      credentialUrl: "https://drive.google.com/file/d/1X5yqVQcOJvcRjJXM5ZnG4LNdZKZxCeY4/view?usp=sharing",
      image: "/IBM.png"
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
          My <span className="text-blue-600">Certificates</span>
        </h2>
      </FadeInView>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {certificates.map((certificate) => (
          <motion.div
            key={certificate.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            variants={itemVariants}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-25  object-fill transform hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl text-gray-700 font-semibold mb-2">{certificate.title}</h3>
              <p className="text-gray-600 mb-2">Issued by {certificate.issuer}</p>
              <p className="text-gray-500 mb-4">{certificate.date}</p>
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                View Certificate
                <LuExternalLink className="ml-2" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certificates;