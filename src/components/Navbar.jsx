import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowUpRight, Terminal, Mail, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { GithubIcon, LinkedinIcon } from './ui/SocialIcons';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Research', href: '#research' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-75px 0px -40% 0px' }
    );

    const sections = ['home', 'about', 'research', 'skills', 'projects', 'education', 'experience', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard accessibility: Close mobile drawer on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');

    // Allow mobile DOM to unlock body before calculating scroll position
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 40);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-[#09090B]/90 backdrop-blur-xl border-b border-gray-200/70 dark:border-white/[0.08] shadow-md shadow-black/5 dark:shadow-black/30'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => scrollTo(e, '#home')}
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-indigo-500/20">
                <div className="w-full h-full rounded-[10px] bg-white dark:bg-[#09090B] flex items-center justify-center">
                  <Terminal size={17} className="text-indigo-600 dark:text-cyan-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold font-display tracking-tight text-gray-900 dark:text-white flex items-center gap-1.5">
                  Ayon Adhikary
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse hidden sm:inline-block" />
                </span>
                <span className="text-[10px] sm:text-[11px] font-code text-gray-500 dark:text-gray-400">
                  AI/ML &bull; Full-Stack
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-gray-100/70 dark:bg-white/[0.04] border border-gray-200/60 dark:border-white/[0.06] backdrop-blur-md">
              {navLinks.map(({ name, href }) => {
                const isActive = activeSection === href.slice(1);
                return (
                  <a
                    key={name}
                    href={href}
                    onClick={(e) => scrollTo(e, href)}
                    className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full shadow-sm shadow-indigo-500/25"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Action buttons & controls */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <button
                onClick={toggleTheme}
                aria-label="Toggle visual theme"
                className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-white/[0.05] hover:bg-gray-200 dark:hover:bg-white/[0.1] border border-gray-200/80 dark:border-white/[0.08] transition-all cursor-pointer"
              >
                {isDark ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-indigo-600" />}
              </button>

              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-md shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Connect</span>
                <ArrowUpRight size={13} />
              </a>

              {/* Mobile menu trigger button with 44px touch area */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Toggle navigation drawer"
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/[0.05] border border-gray-200/80 dark:border-white/[0.08] transition-colors cursor-pointer active:scale-95"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Responsive Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              className="fixed top-0 right-0 bottom-0 w-[84%] max-w-sm z-50 bg-white dark:bg-[#121216] border-l border-gray-200 dark:border-white/[0.08] shadow-2xl flex flex-col p-5 sm:p-6 overflow-y-auto lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-gray-100 dark:border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
                    A
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-900 dark:text-white">Ayon Adhikary</h3>
                    <p className="text-[10px] font-code text-cyan-500 dark:text-cyan-400">Dhaka, Bangladesh</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/[0.05] transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation links with generous touch targets */}
              <div className="py-5 flex flex-col gap-1.5">
                {navLinks.map(({ name, href }) => {
                  const isActive = activeSection === href.slice(1);
                  return (
                    <a
                      key={name}
                      href={href}
                      onClick={(e) => scrollTo(e, href)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between transition-colors min-h-[44px] ${
                        isActive
                          ? 'bg-indigo-500/15 text-indigo-600 dark:text-cyan-400 font-semibold border border-indigo-500/20'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/[0.04]'
                      }`}
                    >
                      <span>{name}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                    </a>
                  );
                })}
              </div>

              {/* Contact / Social in Drawer */}
              <div className="mt-auto pt-5 border-t border-gray-100 dark:border-white/[0.08] space-y-3.5">
                <div className="flex flex-col gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <a
                    href="mailto:ayonarpon7@gmail.com"
                    className="flex items-center gap-2 hover:text-indigo-400 transition-colors py-1 truncate"
                  >
                    <Mail size={14} className="text-indigo-400 flex-shrink-0" />
                    <span className="truncate">ayonarpon7@gmail.com</span>
                  </a>
                  <a
                    href="tel:+8801760021112"
                    className="flex items-center gap-2 hover:text-indigo-400 transition-colors py-1"
                  >
                    <Phone size={14} className="text-cyan-400 flex-shrink-0" />
                    <span>+8801760021112</span>
                  </a>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <a
                    href="https://github.com/theayon7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-white/[0.05] text-gray-700 dark:text-gray-300 hover:text-white hover:bg-indigo-600 transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ayon-adhikary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-white/[0.05] text-gray-700 dark:text-gray-300 hover:text-white hover:bg-blue-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => scrollTo(e, '#contact')}
                    className="flex-1 py-2.5 text-center text-xs font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-md min-h-[40px] flex items-center justify-center"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
