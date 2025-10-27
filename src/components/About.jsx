import React from 'react'
import { motion } from 'framer-motion'
import { User, Code, Briefcase, GraduationCap } from 'lucide-react'
import profileImage from '../assets/profile.png'
import Card from './Card'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const stats = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      value: '2+',
      label: 'Years Experience',
    },
    {
      icon: <Code className="w-8 h-8" />,
      value: '10+',
      label: 'Projects Completed',
    },
    {
      icon: <User className="w-8 h-8" />,
      value: '10+',
      label: 'Happy Clients',
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      value: '1',
      label: 'Degree',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
                <img
                  src={profileImage}
                  alt="Kamlesh Shelar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Software Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Software Developer with over 2 years of professional experience in building
              scalable web and mobile applications. My expertise lies in the MERN stack and React Native
              development, with a strong foundation in modern JavaScript technologies and best practices.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I thrive on turning complex problems into simple, beautiful, and intuitive solutions.
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source
              projects, or continuously learning to stay updated with the latest industry trends.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Currently working at Spidrontech LLP in Pune, I'm focused on delivering high-quality
              software solutions that make a real impact on users' lives.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Connect:</h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>📍 Pune, Maharashtra</li>
                  <li>📧 kamleshshelar44@gmail.com</li>
                  <li>📱 +91-7020674054</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Interests:</h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>🎯 Problem Solving</li>
                  <li>🚀 New Technologies</li>
                  <li>💡 Open Source</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <Card key={index} delay={index * 0.1} className="text-center p-6">
              <motion.div
                variants={itemVariants}
                className="flex justify-center text-primary-600 dark:text-primary-400 mb-4"
              >
                {stat.icon}
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About