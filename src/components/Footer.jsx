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
              Computer Science Graduate, AI Engineer, and Machine Learning Researcher. 
              Engineering intelligent systems with Graph Neural Networks, Self-Supervised Vision, and scalable full-stack architectures.
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
                { name: 'Technical Arsenal', href: '#skills' },
                { name: 'AI & Systems Projects', href: '#projects' },
                { name: 'Education & Honors', href: '#education' },
                { name: 'Experience & Activities', href: '#experience' },
                { name: 'Get In Touch', href: '#contact' },
              ].map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  onClick={(e) => scrollTo(e, href)}
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors w-fit"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Contact */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-3 sm:mb-4">
              Direct Contact
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-gray-600 dark:text-gray-400">
              <a
                href="mailto:ayonarpon7@gmail.com"
                className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
              >
                <Mail size={13} className="text-indigo-400 flex-shrink-0" />
                <span className="truncate">ayonarpon7@gmail.com</span>
              </a>
              <a
                href="tel:+8801760021112"
                className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
              >
                <Phone size={13} className="text-cyan-400 flex-shrink-0" />
                <span>+8801760021112</span>
              </a>
            </div>

            <div className="flex items-center gap-2.5 mt-5">
              <a
                href="https://github.com/theayon7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/[0.04] text-gray-600 dark:text-gray-400 hover:text-white hover:bg-indigo-600 transition-all flex items-center justify-center border border-gray-200 dark:border-white/[0.08]"
                aria-label="GitHub"
              >
                <GithubIcon size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/ayon-adhikary"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/[0.04] text-gray-600 dark:text-gray-400 hover:text-white hover:bg-blue-600 transition-all flex items-center justify-center border border-gray-200 dark:border-white/[0.08]"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-gray-100 dark:border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 font-mono">
          <p>&copy; {currentYear} Ayon Adhikary. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500">
            <span>Built with React &bull; Tailwind CSS &bull; Vite &bull; Deployed on Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
