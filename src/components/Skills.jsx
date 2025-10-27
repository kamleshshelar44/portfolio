import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code2, Database, Server, Smartphone, Palette, Terminal,
  Github, FileCode, Globe, Cpu, Cloud, Shield
} from 'lucide-react'
import Card, { SkillCard } from './Card'

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'tools', name: 'Tools & Others' }
  ]

  const skills = [
    // Frontend Skills
    { name: 'React.js', level: 95, category: 'frontend', icon: <Code2 className="w-8 h-8" /> },
    { name: 'JavaScript', level: 95, category: 'frontend', icon: <FileCode className="w-8 h-8" /> },
    { name: 'TypeScript', level: 90, category: 'frontend', icon: <Terminal className="w-8 h-8" /> },
    { name: 'HTML/CSS', level: 100, category: 'frontend', icon: <Palette className="w-8 h-8" /> },
    { name: 'Tailwind CSS', level: 100, category: 'frontend', icon: <Palette className="w-8 h-8" /> },

    // Backend Skills
    { name: 'Node.js', level: 95, category: 'backend', icon: <Server className="w-8 h-8" /> },
    { name: 'Express.js', level: 100, category: 'backend', icon: <Server className="w-8 h-8" /> },
    { name: 'MongoDB', level: 100, category: 'backend', icon: <Database className="w-8 h-8" /> },
    { name: 'SQL', level: 100, category: 'backend', icon: <Database className="w-8 h-8" /> },
    { name: 'REST APIs', level: 100, category: 'backend', icon: <Globe className="w-8 h-8" /> },

    // Mobile Skills
    { name: 'React Native', level: 95, category: 'mobile', icon: <Smartphone className="w-8 h-8" /> },
    { name: 'Expo', level: 80, category: 'mobile', icon: <Smartphone className="w-8 h-8" /> },

    // Tools & Others
    { name: 'Git', level: 95, category: 'tools', icon: <Github className="w-8 h-8" /> },
    { name: 'VS Code', level: 100, category: 'tools', icon: <Terminal className="w-8 h-8" /> },
    { name: 'AWS', level: 65, category: 'tools', icon: <Cloud className="w-8 h-8" /> },
    { name: 'Docker', level: 80, category: 'tools', icon: <Cpu className="w-8 h-8" /> },
    { name: 'Postman', level: 100, category: 'tools', icon: <Globe className="w-8 h-8" /> },
  ]

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory)

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

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive skill set covering modern web development technologies and tools
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
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill.name}
              level={skill.level}
              icon={skill.icon}
              delay={index * 0.05}
            />
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Other Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Problem Solving</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Strong analytical and problem-solving skills with attention to detail
                </p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Version Control</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Proficient in Git workflows and collaborative development
                </p>
              </div>
              <div className="text-center">
                <Cpu className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Performance</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Focus on writing optimized and efficient code
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills