import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ExternalLink,
  MapPin,
  Mail,
  Phone,
  Code2,
  Brain,
  Copy,
  Check,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/SocialIcons';
import heroImg from '../assets/hero.png';

const typingRoles = [
  "AI & Machine Learning Engineer",
  "Graph Neural Networks (GAT) Specialist",
  "Deep Learning & Computer Vision Architect",
  "Self-Supervised Learning Researcher",
  "Full-Stack AI Systems Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  // Robust typewriter effect optimized for mobile performance
  useEffect(() => {
    const currentFullText = typingRoles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentFullText.length) {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1900);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % typingRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const copyEmail = () => {
    navigator.clipboard.writeText("ayonarpon7@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollTo = (e, selector) => {
    e.preventDefault();
    const el = document.querySelector(selector);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16"
    >
      {/* Background Lighting Gradients & Mesh (responsive sizing to prevent mobile overflow) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 sm:-left-40 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-indigo-600/10 dark:bg-indigo-600/15 rounded-full blur-[100px] sm:blur-[130px]" />
        <div className="absolute bottom-1/4 -right-20 sm:-right-40 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[100px] sm:blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[700px] h-96 sm:h-[700px] bg-gradient-to-tr from-indigo-500/5 via-purple-500/5 to-cyan-500/5 rounded-full blur-[120px] sm:blur-[160px]" />
      </div>

      {/* Cyber Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.4) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-indigo-500/10 dark:bg-white/[0.04] border border-indigo-500/20 dark:border-white/[0.08] text-[11px] sm:text-xs font-medium text-indigo-700 dark:text-cyan-300 mb-5 sm:mb-6 backdrop-blur-md shadow-sm max-w-full truncate"
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="truncate">Available for AI Engineer &amp; ML Systems Roles</span>
              <span className="text-gray-400 dark:text-gray-500 font-mono text-[10px] hidden xs:inline">&bull; 2026</span>
            </motion.div>

            {/* Main Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-gray-900 dark:text-white leading-[1.15] mb-3 sm:mb-4">
                Hi, I'm{" "}
                <span className="relative inline-block bg-gradient-to-r from-indigo-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Ayon Adhikary
                </span>
              </h1>

              {/* Dynamic Tagline Typing (Responsive flex-wrap container so long titles never break on small phones) */}
              <div className="min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center lg:justify-start mb-4 sm:mb-6">
                <span className="text-sm xs:text-base sm:text-xl lg:text-2xl font-mono font-medium text-gray-700 dark:text-gray-200 leading-snug break-words">
                  <span className="text-indigo-600 dark:text-cyan-400 mr-1.5 sm:mr-2">&gt;</span>
                  {displayedText}
                  <span className="animate-pulse inline-block w-2 sm:w-2.5 h-4 sm:h-5 bg-cyan-400 align-middle ml-1" />
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-6 sm:mb-8"
            >
              Computer Science graduate from East West University specializing in{" "}
              <strong className="text-gray-900 dark:text-white font-semibold">Graph Attention Networks (GAT)</strong>,{" "}
              <strong className="text-gray-900 dark:text-white font-semibold">Self-Supervised Learning (SSL)</strong>, and{" "}
              <strong className="text-gray-900 dark:text-white font-semibold">Production AI Pipelines</strong>. Bridging mathematical deep learning research with high-throughput full-stack architectures.
            </motion.p>

            {/* Action Buttons (Full-width on extra small mobile, row on sm+) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col xs:flex-row flex-wrap gap-3 justify-center lg:justify-start mb-8 sm:mb-10"
            >
              <a
                href="#research"
                onClick={(e) => scrollTo(e, '#research')}
                className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[44px]"
              >
                <Sparkles size={14} />
                <span>Explore AI Research &amp; Systems</span>
                <ExternalLink size={14} />
              </a>

              <div className="flex items-center gap-2 w-full xs:w-auto">
                <a
                  href="mailto:ayonarpon7@gmail.com"
                  className="flex-1 xs:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-[#121216] border border-gray-200 dark:border-white/[0.09] hover:border-indigo-500/40 hover:bg-gray-50 dark:hover:bg-[#18181f] shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[44px]"
                >
                  <Mail size={15} className="text-indigo-400" />
                  <span>Email Me</span>
                </a>

                <button
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-3 rounded-xl font-mono text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer min-h-[44px]"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </motion.div>

            {/* Social & Contact Strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 justify-center lg:justify-start pt-5 sm:pt-6 border-t border-gray-200 dark:border-white/[0.08]"
            >
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/theayon7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-[#121216] text-gray-700 dark:text-gray-300 hover:text-white hover:bg-indigo-600 transition-all border border-gray-200 dark:border-white/[0.08] shadow-sm hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ayon-adhikary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-[#121216] text-gray-700 dark:text-gray-300 hover:text-white hover:bg-blue-600 transition-all border border-gray-200 dark:border-white/[0.08] shadow-sm hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>

              <div className="h-5 w-px bg-gray-300 dark:bg-white/10 hidden xs:block" />

              <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                <MapPin size={13} className="text-cyan-400" />
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="h-5 w-px bg-gray-300 dark:bg-white/10 hidden sm:block" />

              <a
                href="tel:+8801760021112"
                className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <Phone size={13} className="text-indigo-400" />
                <span>+8801760021112</span>
              </a>
            </motion.div>
          </div>

          {/* Right Hero Graphic Card / Visual Feature */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-cyan-400/15 to-purple-600/20 blur-lg sm:blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Main Bento Card */}
              <div className="relative rounded-3xl bg-white dark:bg-[#121216] border border-gray-200/80 dark:border-white/[0.08] p-4 sm:p-6 shadow-2xl overflow-hidden">
                {/* Header terminal-style bar */}
                <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-gray-100 dark:border-white/[0.08]">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-code text-gray-500 dark:text-gray-400">
                    ai_engineer_profile.json
                  </span>
                </div>

                {/* Profile Avatar & Title */}
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-400 p-[2px] shadow-lg shadow-indigo-500/20 flex-shrink-0">
                    <div className="w-full h-full rounded-[14px] bg-[#121216] overflow-hidden flex items-center justify-center">
                      <img
                        src={heroImg}
                        alt="Ayon Adhikary"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <span className="font-bold text-lg sm:text-xl text-white">AA</span>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white font-display truncate">
                      Ayon Adhikary
                    </h3>
                    <p className="text-[11px] sm:text-xs text-indigo-600 dark:text-cyan-400 font-mono truncate">
                      AI Engineer &bull; East West University
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 truncate">
                      CGPA: <strong className="text-gray-800 dark:text-gray-200">3.33 / 4.00</strong> (2022 – 2026)
                    </p>
                  </div>
                </div>

                {/* Technical Focus Metric Bars */}
                <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6 font-code text-xs">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.05]">
                    <div className="flex justify-between text-gray-700 dark:text-gray-300 mb-1.5 font-medium text-[11px] sm:text-xs">
                      <span className="flex items-center gap-1.5 truncate">
                        <Brain size={13} className="text-indigo-400 flex-shrink-0" />
                        AI &amp; Graph Neural Networks
                      </span>
                      <span className="text-cyan-400 flex-shrink-0">GAT / SHAP XAI</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[94%] h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.05]">
                    <div className="flex justify-between text-gray-700 dark:text-gray-300 mb-1.5 font-medium text-[11px] sm:text-xs">
                      <span className="flex items-center gap-1.5 truncate">
                        <Code2 size={13} className="text-cyan-400 flex-shrink-0" />
                        Production AI &amp; Web Serving
                      </span>
                      <span className="text-indigo-400 flex-shrink-0">PyTorch / MERN</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[89%] h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                    </div>
                  </div>
                </div>

                {/* Quick Badges Grid */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-center">
                    <p className="text-[9px] sm:text-[10px] text-gray-500 dark:text-gray-400 font-mono">Scholarship</p>
                    <p className="text-[11px] sm:text-xs font-semibold text-indigo-600 dark:text-indigo-300 mt-0.5 truncate">Dean's &amp; Merit</p>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-center">
                    <p className="text-[9px] sm:text-[10px] text-gray-500 dark:text-gray-400 font-mono">Certified</p>
                    <p className="text-[11px] sm:text-xs font-semibold text-cyan-600 dark:text-cyan-300 mt-0.5 truncate">UI/UX Designer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 sm:mt-16 flex flex-col items-center justify-center gap-1.5 sm:gap-2"
        >
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-gray-400 dark:text-gray-500">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={15} className="text-indigo-500 dark:text-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
