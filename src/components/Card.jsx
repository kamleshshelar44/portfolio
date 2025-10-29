import React from 'react'
import { motion } from 'framer-motion'

const Card = ({
  children,
  className = '',
  hover = true,
  delay = 0,
  ...props
}) => {
  const CardComponent = motion.div

  return (
    <CardComponent
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </CardComponent>
  )
}

export const SkillCard = ({ skill, level, icon, delay = 0 }) => (
  <Card delay={delay} className="p-6 text-center hover:bg-gradient-to-br hover:from-primary-50 hover:to-secondary-50 dark:hover:from-gray-700 dark:hover:to-gray-700">
    <div className="text-4xl mb-4 flex justify-center text-primary-600 dark:text-primary-400">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
      {skill}
    </h3>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div
        className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full transition-all duration-1000"
        style={{ width: `${level}%` }}
      />
    </div>
    <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">
      {level}%
    </span>
  </Card>
)

export const ProjectCard = ({
  title,
  description,
  image,
  techStack,
  liveUrl,
  githubUrl,
  delay = 0
}) => (
  <Card delay={delay} className="overflow-hidden group">
    <div className="relative overflow-hidden h-48">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
    </div>
  </Card>
)

export default Card