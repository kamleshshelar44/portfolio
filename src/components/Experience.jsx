import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react'
import Card from './Card'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Spidrontech LLP',
      location: 'Pune, Maharashtra',
      duration: '2022 - Present',
      type: 'Full-time',
      achievements: [
        'Developed and maintained scalable web applications using React.js and Node.js',
        'Built responsive mobile applications using React Native for iOS and Android platforms',
        'Designed and implemented RESTful APIs to support frontend applications',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Optimized application performance and improved user experience',
        'Participated in code reviews and provided constructive feedback to team members',
        'Worked with MongoDB and SQL databases for data management',
        'Implemented modern development practices including testing and CI/CD'
      ],
      technologies: ['React.js', 'React Native', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Tailwind CSS']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and accomplishments in software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-secondary-600 rounded-full"
          />

          {/* Experience Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-800 border-4 border-primary-600 dark:border-primary-400 rounded-full z-10">
                  <div className="absolute inset-1 bg-primary-600 dark:bg-primary-400 rounded-full animate-pulse"></div>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left ml-auto'}`}>
                  <Card className="p-8 relative">
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs rounded-full font-medium">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center mb-4 gap-2">
                      <Briefcase className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                    </div>

                    <h4 className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-3">
                      {exp.company}
                    </h4>

                    <div className={`flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className={`mb-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Responsibilities & Achievements:
                      </h5>
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'inline-block text-right' : 'inline-block text-left'}`}>
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used:
                      </h5>
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
            <h3 className="text-2xl font-bold mb-4">Looking for a dedicated developer?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects.
              Let's connect and explore how I can contribute to your team.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience