import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/kamlesh-shelar-3653a2203',
      label: 'LinkedIn'
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/kamleshshelar44',
      label: 'GitHub'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:kamleshshelar44@gmail.com',
      label: 'Email'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand & About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">Kamlesh Shelar</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Passionate Software Developer specializing in MERN stack and React Native.
                Building scalable and user-friendly applications with modern technologies.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Mail className="w-4 h-4" />
                  <span>kamleshshelar44@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Phone className="w-4 h-4" />
                  <span>+91-7020674054</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Pune, Maharashtra, India</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Social Links & Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-3 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-gray-700 transition-all duration-200"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">
                  🚀 Available for freelance projects and full-time opportunities
                </p>
                <p className="text-sm text-gray-400">
                  Let's build something amazing together!
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center sm:text-left"
            >
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Kamlesh S. Shelar. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Built with React.js, Tailwind CSS & lots of{' '}
                <Heart className="inline-block w-3 h-3 text-red-500" />
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-200 text-sm text-gray-400 hover:text-white"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Top
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative gradient border */}
      <div className="h-1 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600"></div>
    </footer>
  )
}

export default Footer