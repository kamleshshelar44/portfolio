import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Filter, X } from 'lucide-react'
import Card, { ProjectCard } from './Card'
import projectImage from '../assets/profile.png'
import i1 from '../assets/i1.jpg'
import i2 from '../assets/i2.png'
import i3 from '../assets/i3.jpg'
import i4 from '../assets/i4.jpeg'
import i5 from '../assets/i5.png'
import i6 from '../assets/i6.jpg'
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredProject, setFilteredProject] = useState(null)

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'fullstack', name: 'Full Stack' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Online Dating Mobile App',
      description: 'A modern dating application with real-time chat, user matching algorithms, swipe gestures, profile management, and advanced filtering options. Built with React Native and Firebase for seamless cross-platform experience.',
      image: i1,
      category: 'mobile',
      techStack: ['React Native', 'Firebase', 'Redux', 'JavaScript', 'Expo'],
      liveUrl: 'https://example.com/dating-app',
      githubUrl: 'https://github.com/kamleshshelar44',
      featured: true
    },
    {
      id: 2,
      title: 'Traveler & Baggage Connection Web App',
      description: 'A comprehensive travel platform connecting travelers with baggage services. Features include real-time tracking, secure payments, user reviews, booking management, and location-based services.',
      image: i2,
      category: 'web',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Stripe API'],
      liveUrl: 'https://example.com/travel-app',
      githubUrl: 'https://github.com/kamleshshelar44',
      featured: true
    },
    {
      id: 3,
      title: 'Online Learning & Knowledge Sharing Platform',
      description: 'Full-featured educational platform with video streaming, course management, quizzes, progress tracking, discussion forums, and certificate generation. Supports multiple instructors and various content formats.',
      image: i3,
      category: 'fullstack',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'AWS S3'],
      liveUrl: 'https://example.com/learning-platform',
      githubUrl: 'https://github.com/kamleshshelar44',
      featured: true
    },
    {
      id: 4,
      title: 'HRMS App',
      description: 'Human Resource Management System with employee management, attendance tracking, payroll processing, leave management, performance reviews, and comprehensive reporting dashboard.',
      image: i4,
      category: 'mobile',
      techStack: ['React Native','React.js', 'Node.js', 'PostgreSQL', 'Express.js', 'Redux'],
      liveUrl: 'https://example.com/hrms-app',
      githubUrl: 'https://github.com/kamleshshelar44',
      featured: false
    },
    {
      id: 5,
      title: 'E-commerce Platform',
      description: 'Complete e-commerce solution with product catalog, shopping cart, secure checkout, order tracking, inventory management, and admin dashboard for store management.',
      image: i5,
      category: 'fullstack',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Docker'],
      liveUrl: 'https://example.com/ecommerce',
      githubUrl: 'https://github.com/kamleshshelar44',
      featured: false
    },
    {
      id: 6,
      title: 'Task Management Dashboard',
      description: 'Collaborative project management tool with drag-and-drop functionality, team collaboration, deadline tracking, file sharing, and real-time updates.',
      image: i6,
      category: 'web',
      techStack: ['React.js', 'TypeScript', 'Node.js', 'Socket.io', 'MongoDB'],
      liveUrl: 'https://example.com/task-manager',
      githubUrl: 'https://github.com/kamleshshelar44',
      featured: false
    }
  ]

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const clearFilter = () => {
    setSelectedCategory('all')
    setFilteredProject(null)
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Filter className="inline-block w-4 h-4 mr-2" />
              {category.name}
            </button>
          ))}
          {(selectedCategory !== 'all' || filteredProject) && (
            <button
              onClick={clearFilter}
              className="px-4 py-2 rounded-full text-sm font-medium bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 transition-all duration-300"
            >
              <X className="inline-block w-4 h-4 mr-2" />
              Clear Filter
            </button>
          )}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              techStack={project.techStack}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* Featured Projects Highlight */}
        {selectedCategory === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <Card className="p-8 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Project Development Process
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Planning</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Understanding requirements and creating technical specifications
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Design</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Creating intuitive UI/UX with modern design principles
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Writing clean, efficient code with best practices
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Deployment</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Testing, optimization, and deploying to production
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Want to see more projects?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/kamleshshelar44"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              Visit GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Discuss Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects