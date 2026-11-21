import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ExternalLink,
  MapPin,
  Mail,
  Phone,
  Brain,
  Copy,
  Check,
  Sparkles,
  Activity,
  Cpu,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/SocialIcons';
import heroImg from '../assets/hero.png';
import SpotlightCard from './ui/SpotlightCard';

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
  const [pulseCount, setPulseCount] = useState(14.2);

  // Live micro-telemetry fluctuation for realism
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCount((prev) => {
        const delta = (Math.random() - 0.5) * 0.4;
        return parseFloat(Math.max(12.1, Math.min(16.5, prev + delta)).toFixed(1));
      });
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Robust typewriter effect optimized for mobile performance
  useEffect(() => {
    const currentFullText = typingRoles[roleIndex];
    const typingSpeed = isDeleting ? 28 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentFullText.length) {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
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
        <div className="absolute top-1/4 -left-20 sm:-left-40 w-72 sm:w-[520px] h-72 sm:h-[520px] bg-indigo-600/10 dark:bg-indigo-600/20 rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute bottom-1/4 -right-20 sm:-right-40 w-72 sm:w-[520px] h-72 sm:h-[520px] bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[750px] h-96 sm:h-[750px] bg-gradient-to-tr from-indigo-500/5 via-purple-500/5 to-cyan-500/5 rounded-full blur-[120px] sm:blur-[170px]" />
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
            {/* Status Pill with Subtle Shimmer */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-indigo-500/10 dark:bg-white/[0.04] border border-indigo-500/25 dark:border-white/[0.1] text-[11px] sm:text-xs font-medium text-indigo-700 dark:text-cyan-300 mb-5 sm:mb-6 backdrop-blur-md shadow-sm max-w-full truncate hover:border-cyan-400/40 transition-colors"
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

              {/* Dynamic Tagline Typing */}
              <div className="min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center lg:justify-start mb-4 sm:mb-6">
                <span className="text-sm xs:text-base sm:text-xl lg:text-2xl font-mono font-medium text-gray-700 dark:text-gray-200 leading-snug break-words">
                  <span className="text-indigo-600 dark:text-cyan-400 mr-1.5 sm:mr-2">&gt;</span>
                  {displayedText}
                  <span className="animate-pulse inline-block w-2 sm:w-2.5 h-4 sm:h-5 bg-cyan-400 align-middle ml-1 shadow-[0_0_8px_#38bdf8]" />
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

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col xs:flex-row flex-wrap gap-3 justify-center lg:justify-start mb-8 sm:mb-10"
            >
              <a
                href="#research"
                onClick={(e) => scrollTo(e, '#research')}
                className="shimmer-btn w-full xs:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[44px]"
              >
                <Sparkles size={14} className="text-cyan-200" />
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

          {/* Right Hero: Hyper-Realistic AI Graph Engine Visualizer */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative w-full max-w-sm sm:max-w-md animate-float"
            >
              {/* Outer Radiant Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-500/25 via-cyan-400/20 to-purple-600/25 blur-xl sm:blur-2xl opacity-75 group-hover:opacity-100 transition-opacity" />

              <SpotlightCard className="p-4 sm:p-6 shadow-2xl">
                {/* Header Terminal Ticker Bar */}
                <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-gray-100 dark:border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-[0_0_6px_#ef4444]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-[0_0_6px_#10b981]" />
                    <span className="text-[10px] sm:text-[11px] font-mono text-gray-500 dark:text-gray-400 ml-1">
                      gat_inference_engine.py
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-semibold border border-emerald-500/20">
                    <Activity size={10} className="animate-pulse" />
                    <span>ONLINE</span>
                  </div>
                </div>

                {/* Profile Identity Bar */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <div className="relative w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-400 p-[2px] shadow-lg shadow-indigo-500/20 flex-shrink-0">
                    <div className="w-full h-full rounded-[14px] bg-[#121216] overflow-hidden flex items-center justify-center">
                      <img
                        src={heroImg}
                        alt="Ayon Adhikary"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <span className="font-bold text-base sm:text-lg text-white">AA</span>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white font-display truncate">
                      Ayon Adhikary
                    </h3>
                    <p className="text-[11px] sm:text-xs text-indigo-600 dark:text-cyan-400 font-mono truncate">
                      AI &bull; Machine Learning Engineer
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 truncate">
                      East West University &bull; CGPA: <strong className="text-gray-800 dark:text-gray-200">3.33 / 4.00</strong>
                    </p>
                  </div>
                </div>

                {/* Living Topological Graph Architecture Graphic (SVG) */}
                <div className="relative rounded-2xl bg-gray-50 dark:bg-black/30 border border-gray-100 dark:border-white/[0.06] p-3 mb-4 sm:mb-5 overflow-hidden">
                  <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Brain size={11} className="text-indigo-400" /> GAT AST Topology
                    </span>
                    <span className="text-cyan-400">8 Attention Heads</span>
                  </div>

                  {/* Animated SVG Graph Synapse Architecture */}
                  <svg
                    viewBox="0 0 340 100"
                    className="w-full h-24 overflow-visible"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="edgeGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.8" />
                      </linearGradient>
                      <linearGradient id="edgeGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#A855F7" stopOpacity="0.8" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Dynamic Connecting Synaptic Lines */}
                    {/* Layer 1 to Layer 2 */}
                    <line x1="30" y1="25" x2="120" y2="40" stroke="url(#edgeGrad1)" strokeWidth="1.2" strokeDasharray="3 3" />
                    <line x1="30" y1="25" x2="120" y2="70" stroke="url(#edgeGrad1)" strokeWidth="1" opacity="0.5" />
                    <line x1="30" y1="55" x2="120" y2="40" stroke="url(#edgeGrad1)" strokeWidth="1.5" />
                    <line x1="30" y1="55" x2="120" y2="70" stroke="url(#edgeGrad1)" strokeWidth="1.2" />
                    <line x1="30" y1="80" x2="120" y2="70" stroke="url(#edgeGrad1)" strokeWidth="1.4" strokeDasharray="4 2" />

                    {/* Layer 2 to Layer 3 */}
                    <line x1="120" y1="40" x2="220" y2="30" stroke="url(#edgeGrad2)" strokeWidth="1.5" />
                    <line x1="120" y1="40" x2="220" y2="65" stroke="url(#edgeGrad2)" strokeWidth="1.2" opacity="0.7" />
                    <line x1="120" y1="70" x2="220" y2="30" stroke="url(#edgeGrad2)" strokeWidth="1.2" opacity="0.7" />
                    <line x1="120" y1="70" x2="220" y2="65" stroke="url(#edgeGrad2)" strokeWidth="1.6" />

                    {/* Layer 3 to Output */}
                    <line x1="220" y1="30" x2="310" y2="50" stroke="#38BDF8" strokeWidth="1.8" filter="url(#glow)" />
                    <line x1="220" y1="65" x2="310" y2="50" stroke="#38BDF8" strokeWidth="1.8" filter="url(#glow)" />

                    {/* Layer 1: AST Code Nodes */}
                    <circle cx="30" cy="25" r="5" fill="#6366F1" filter="url(#glow)" />
                    <circle cx="30" cy="55" r="6" fill="#818CF8" />
                    <circle cx="30" cy="80" r="5" fill="#6366F1" />

                    {/* Layer 2: GAT Attention Heads */}
                    <circle cx="120" cy="40" r="7" fill="#38BDF8" filter="url(#glow)" />
                    <circle cx="120" cy="70" r="6" fill="#0EA5E9" />

                    {/* Layer 3: Latent Embeddings */}
                    <circle cx="220" cy="30" r="6" fill="#A855F7" />
                    <circle cx="220" cy="65" r="7" fill="#C084FC" filter="url(#glow)" />

                    {/* Output Node: Defect Risk & SHAP */}
                    <circle cx="310" cy="50" r="8" fill="#10B981" filter="url(#glow)" />
                    <circle cx="310" cy="50" r="14" stroke="#10B981" strokeWidth="1" strokeDasharray="2 2" className="animate-spin origin-[310px_50px]" style={{ animationDuration: '6s' }} />
                  </svg>

                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 pt-1">
                    <span>C/C++ AST</span>
                    <span className="text-indigo-400">Graph Attention</span>
                    <span className="text-purple-400">Latent Vector</span>
                    <span className="text-emerald-400 font-semibold">Defect XAI</span>
                  </div>
                </div>

                {/* Telemetry Grid */}
                <div className="grid grid-cols-2 gap-2 font-code text-xs mb-4">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.05]">
                    <p className="text-[10px] text-gray-400">Latency</p>
                    <p className="text-xs font-bold text-cyan-400 flex items-center gap-1 mt-0.5">
                      <Cpu size={12} /> {pulseCount} ms
                    </p>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.05]">
                    <p className="text-[10px] text-gray-400">Explainability</p>
                    <p className="text-xs font-bold text-purple-400 mt-0.5 truncate">
                      SHAP Tree
                    </p>
                  </div>
                </div>

                {/* Bottom Scholarship & UI/UX Credentials */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100 dark:border-white/[0.06]">
                  <div className="text-center p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                    <p className="text-[9px] text-gray-400 font-mono">Scholarship</p>
                    <p className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-300 truncate">Dean's &amp; Merit</p>
                  </div>
                  <div className="text-center p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <p className="text-[9px] text-gray-400 font-mono">Certified</p>
                    <p className="text-[11px] font-semibold text-cyan-600 dark:text-cyan-300 truncate">UI/UX Designer</p>
                  </div>
                </div>
              </SpotlightCard>
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
