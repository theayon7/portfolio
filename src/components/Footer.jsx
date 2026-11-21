import { Mail, Phone, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/SocialIcons';

export default function Footer() {
  const currentYear = 2026;

  const scrollTo = (e, selector) => {
    e.preventDefault();
    const el = document.querySelector(selector);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-gray-200/80 dark:border-white/[0.08] bg-white dark:bg-[#09090B] relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 items-start">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <a
              href="#home"
              onClick={(e) => scrollTo(e, '#home')}
              className="inline-flex items-center gap-2.5 mb-3 sm:mb-4 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-indigo-500/20">
                <Terminal size={17} />
              </div>
              <span className="text-lg font-bold font-display text-gray-900 dark:text-white">
                Ayon Adhikary<span className="text-cyan-400">.</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm mb-3 sm:mb-4">
              Computer Science Graduate, AI &amp; Machine Learning Researcher, and Full-Stack Developer. 
              Engineering intelligent systems with Graph Neural Networks and modern web architectures.
            </p>
            <p className="text-xs font-mono text-gray-500 dark:text-gray-500">
              Dhaka, Bangladesh &bull; East West University '26
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-3 sm:mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2 text-xs font-medium">
              {[
                { name: 'About Profile', href: '#about' },
                { name: 'Research Spotlight', href: '#research' },
                { name: 'Technical Skills', href: '#skills' },
                { name: 'Featured Projects', href: '#projects' },
                { name: 'Education & Honors', href: '#education' },
                { name: 'Experience & Clubs', href: '#experience' },
                { name: 'Get In Touch', href: '#contact' },
              ].map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  onClick={(e) => scrollTo(e, href)}
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors py-0.5"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-3 sm:mb-4">
              Connect Directly
            </h4>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <a
                href="https://github.com/theayon7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-[#121216] text-gray-700 dark:text-gray-300 hover:text-white hover:bg-indigo-600 border border-gray-200 dark:border-white/[0.08] transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/ayon-adhikary"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-[#121216] text-gray-700 dark:text-gray-300 hover:text-white hover:bg-blue-600 border border-gray-200 dark:border-white/[0.08] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="mailto:ayonarpon7@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-[#121216] text-gray-700 dark:text-gray-300 hover:text-white hover:bg-indigo-600 border border-gray-200 dark:border-white/[0.08] transition-all"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="tel:+8801760021112"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-[#121216] text-gray-700 dark:text-gray-300 hover:text-white hover:bg-cyan-600 border border-gray-200 dark:border-white/[0.08] transition-all"
                aria-label="Phone"
              >
                <Phone size={16} />
              </a>
            </div>

            <p className="text-xs font-mono text-gray-500">
              ayonarpon7@gmail.com<br />
              +8801760021112
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-gray-500">
          <p>© {currentYear} Ayon Adhikary. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted for high performance &bull; Dark Obsidian Mode
          </p>
        </div>
      </div>
    </footer>
  );
}
