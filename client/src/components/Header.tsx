import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLocation } from 'wouter';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation en boucle : se déploie et se rétracte
  useEffect(() => {
    const runAnimation = () => {
      setIsExpanded(true);
      setTimeout(() => setIsExpanded(false), 3000); // Reste ouvert 3 secondes
    };

    // Premier déclenchement
    const initialDelay = setTimeout(runAnimation, 800);
    // Boucle toutes les 7 secondes (3s ouvert + 4s fermé)
    const interval = setInterval(runAnimation, 7000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'À Propos', href: '/about' },
    { label: 'Projets', href: '/projects' },
    { label: 'Compétences', href: '/skills' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) =>
    href === '/' ? location === '/' : location.startsWith(href);

  const ease = [0.25, 0.1, 0.25, 1] as const;
  const transition = { duration: 0.45, ease };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo — largeur fixe pour isoler l'animation */}
        <motion.a
          href="/"
          className="flex items-center gap-2 w-8"
          style={{ minWidth: '2rem' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsExpanded(true)}
          onHoverEnd={() => setIsExpanded(false)}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663726850645/jP6RKD6MjncjXbHSAue9ut/portfolio-logo-TqhVshtK62HQCdRRRFB3Va.webp"
            alt="Logo"
            className="w-8 h-8 flex-shrink-0"
          />

          {/* Le nom sort du flux avec position absolute */}
          <div className="relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center text-lg font-bold text-gray-900 dark:text-white overflow-hidden whitespace-nowrap">
              <span>J</span>
              <motion.span
                animate={{ maxWidth: isExpanded ? '6ch' : 0, opacity: isExpanded ? 1 : 0 }}
                transition={transition}
                className="overflow-hidden whitespace-nowrap inline-block"
              >
                AOMILA
              </motion.span>
              <motion.span
                animate={{ width: isExpanded ? '0.3em' : 0 }}
                transition={transition}
                className="inline-block"
              />
              <span>P</span>
              <motion.span
                animate={{ maxWidth: isExpanded ? '7ch' : 0, opacity: isExpanded ? 1 : 0 }}
                transition={{ ...transition, delay: isExpanded ? 0.05 : 0 }}
                className="overflow-hidden whitespace-nowrap inline-block"
              >
                ancrace
              </motion.span>
            </div>
          </div>
        </motion.a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <motion.a
                key={item.label}
                href={item.href}
                className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${active
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10'
                  }`}
                whileHover={{ y: active ? 0 : -1 }}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active-bg"
                    className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
                {active && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <motion.button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-900" />
            )}
          </motion.button>

          <motion.a
            href="/contact"
            className="hidden md:inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactez-moi
          </motion.a>

          <button className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </motion.header>
  );
}