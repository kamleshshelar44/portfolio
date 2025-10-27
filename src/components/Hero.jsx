import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown } from 'lucide-react'
import Button, { HireMeButton, DownloadResumeButton } from './Button'

const Hero = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const titles = [
    'Software Developer',
    'MERN Stack Developer',
    'React Native Developer',
    'Full Stack Developer',
    'React Js Developer',
    'Node js Developer',
  ]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length
      const fullText = titles[i]

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Kamlesh Shelar</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="h-16 mb-6"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300">
              <span>{text}</span>
              <span className="border-r-2 border-primary-600 dark:border-primary-400 ml-1 animate-pulse" />
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            Passionate software developer with 2+ years of experience building scalable web and mobile applications.
            Specialized in MERN stack and React Native development.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <HireMeButton />
            <DownloadResumeButton />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center space-x-6 mb-12"
          >
            <a
              href="https://linkedin.com/in/kamlesh-shelar-3653a2203"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/kamleshshelar44"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:kamleshshelar44@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="tel:+917020674054"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Phone className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600 dark:text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Pune, Maharashtra, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>kamleshshelar44@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91-7020674054</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#about"
            className="inline-block text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero