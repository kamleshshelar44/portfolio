import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import resumeFile from '../assets/kamleshShelar_Resume.pdf'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  href,
  onClick,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700 focus:ring-primary-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-gray-500',
    outline: 'border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white focus:ring-primary-500'
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}

export const HireMeButton = () => (
  <Button href="#contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
    Hire Me
  </Button>
)

export const DownloadResumeButton = () => (
  <Button
    variant="outline"
    size="lg"
    icon={<Download className="w-5 h-5" />}
    href={resumeFile}
    download="Kamlesh_Shelar_Resume.pdf"
  >
    Download Resume
  </Button>
)

export default Button