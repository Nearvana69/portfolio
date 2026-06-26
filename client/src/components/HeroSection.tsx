import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 relative overflow-hidden"
    >
      {/* Dark overlay for light mode, subtle for dark mode */}
      <div className="absolute inset-0 bg-white/30 dark:bg-gray-900/40" />

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.span
                className="inline-block text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider"
              >
                Bienvenue sur mon portfolio
              </motion.span>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Développeur
                <span className="block text-blue-600 dark:text-blue-400">Full-Stack Créatif</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg"
            >
              Je transforme des idées en applications web modernes et performantes. Spécialisé en React, Node.js et design d'interfaces intuitives.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors group dark:bg-blue-500 dark:hover:bg-blue-600"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir mes projets
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-400 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Me contacter
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 pt-8 border-t border-gray-400 dark:border-gray-700"
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:pancracetardis@gmail.com"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
{/* Right - Profile Photo */}
<motion.div
  className="relative h-96 lg:h-full flex items-center justify-center"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  <div className="relative w-80 h-80 lg:w-96 lg:h-96">

    {/* Photo circle */}
    <div className="absolute inset-0 rounded-full shadow-2xl overflow-hidden border-4 border-white dark:border-gray-800">
      <img
        src="/image/profile.webp"   
        alt="Japan – Développeur Full-Stack"
        className="w-full h-full object-cover object-top"
      />
    </div>

    {/* Floating elements */}
    <motion.div
      className="absolute -top-8 -right-8 w-24 h-24 bg-blue-200 dark:bg-blue-900 rounded-full opacity-30"
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
    <motion.div
      className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-300 dark:bg-blue-800 rounded-full opacity-20"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
    />

  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
}
