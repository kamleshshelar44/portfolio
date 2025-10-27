import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Award, BookOpen, MapPin } from 'lucide-react'
import Card from './Card'

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'D.Y. Patil University Pune',
      location: 'Pune, Maharashtra',
      duration: '2020 - 2022',
      type: 'Post Graduate',
      achievements: [
        'Specialized in Advanced Software Development',
        'Focus on Web Technologies and Mobile Development',
        'Completed with First Class Distinction'
      ],
      description: 'Comprehensive postgraduate program covering advanced topics in computer science, software engineering, and application development.'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Shivaji University Kolhapur',
      location: 'Pune, Maharashtra',
      duration: '2017 - 2020',
      type: 'Graduate',
      achievements: [
        'Foundation in Computer Science and Programming',
        'Strong foundation in Data Structures and Algorithms',
        'Active participation in technical workshops and seminars'
      ],
      description: 'Undergraduate program providing fundamental knowledge in computer applications, programming languages, and software development principles.'
    }
  ]

  const certifications = [
    {
      name: 'Advanced React Development',
      issuer: 'Udemy',
      date: '2023',
      credential: 'Online Certification'
    },
    {
      name: 'Node.js and Express.js Mastery',
      issuer: 'Coursera',
      date: '2023',
      credential: 'Professional Certificate'
    },
    {
      name: 'MongoDB Database Administration',
      issuer: 'MongoDB University',
      date: '2022',
      credential: 'Developer Certificate'
    },
    {
      name: 'React Native Mobile Development',
      issuer: 'Pluralsight',
      date: '2022',
      credential: 'Skill Certification'
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background and continuous learning journey
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Academic Journey
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-secondary-600 rounded-full"></div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-800 border-4 border-primary-600 dark:border-primary-400 rounded-full z-10">
                  <div className="absolute inset-1 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8 ml-auto'}`}>
                  <Card className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                    </div>

                    <h5 className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-3">
                      {edu.institution}
                    </h5>

                    <div className={`flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400 ${index % 2 === 0 ? '' : 'justify-start'}`}>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs rounded-full font-medium">
                        {edu.type}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    <div>
                      <h6 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h6>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <Award className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} delay={index * 0.1} className="p-6 hover:bg-gradient-to-br hover:from-primary-50 hover:to-secondary-50 dark:hover:from-gray-700 dark:hover:to-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>{cert.date}</span>
                      <span>•</span>
                      <span>{cert.credential}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Continuous Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">Continuous Learning</h3>
            <p className="text-white/90 text-center mb-6 max-w-2xl mx-auto">
              I believe in staying updated with the latest technologies and best practices.
              Regularly participating in online courses, workshops, and tech communities to enhance my skills.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-white/80 text-sm">Courses Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">100+</div>
                <div className="text-white/80 text-sm">Hours of Learning</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">10+</div>
                <div className="text-white/80 text-sm">Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">5+</div>
                <div className="text-white/80 text-sm">Technologies Mastered</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Education