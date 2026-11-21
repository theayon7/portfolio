import { motion } from 'framer-motion';
import {
  GraduationCap,
  MapPin,
  Calendar,
  Palette,
  Terminal,
  Brain,
  Globe2,
  CheckCircle,
} from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Profile Overview"
          title="About &amp; Architectural Focus"
          subtitle="Combining mathematical rigour in AI/ML with production-grade full-stack engineering."
        />

        {/* Modern Bento Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* Bento Item 1: Narrative / Philosophy (Spans 7 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl p-5 sm:p-7 lg:p-9 bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 shadow-sm flex flex-col justify-between group"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 text-xs font-code font-semibold mb-4 sm:mb-5">
                <Terminal size={14} />
                <span>Identity &amp; Vision</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
                Architecting intelligent software at the crossroads of{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                  research and scale
                </span>
                .
              </h3>

              <div className="space-y-3 sm:space-y-4 text-gray-600 dark:text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                <p>
                  I am a Computer Science and Engineering graduate from{" "}
                  <strong className="text-gray-900 dark:text-white font-semibold">East West University</strong>, 
                  Dhaka. My core focus centers on tackling high-stakes challenges using{" "}
                  <span className="text-indigo-600 dark:text-cyan-400 font-medium">Graph Neural Networks (GAT)</span>,{" "}
                  <span className="text-indigo-600 dark:text-cyan-400 font-medium">Self-Supervised Learning (SSL)</span>, and{" "}
                  <span className="text-indigo-600 dark:text-cyan-400 font-medium">Explainable AI (SHAP)</span>.
                </p>
                <p>
                  Unlike pure researchers who remain in notebooks or pure web developers who treat AI as a black-box API, 
                  I architect end-to-end pipelines: from abstract syntax tree (AST) source parsing and deep graph modeling 
                  to distributed MERN microservices and real-time Socket.io dashboards.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-gray-100 dark:border-white/[0.07]">
              <div>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 font-code">Location</p>
                <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5 mt-0.5">
                  <MapPin size={13} className="text-cyan-400 flex-shrink-0" /> Dhaka, BD
                </p>
              </div>
              <div>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 font-code">Graduation</p>
                <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5 mt-0.5">
                  <Calendar size={13} className="text-indigo-400 flex-shrink-0" /> Sept 2026
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-[11px] text-gray-400 dark:text-gray-500 font-code">Status</p>
                <p className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" /> Available
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 2: Education & Scholarship Spotlight (Spans 5 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 rounded-3xl p-5 sm:p-7 lg:p-9 bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-code font-semibold">
                  <GraduationCap size={15} />
                  <span>Academic Standing</span>
                </div>
                <span className="text-[11px] sm:text-xs font-code text-gray-400 dark:text-gray-500">2022 – 2026</span>
              </div>

              <h4 className="text-lg sm:text-xl font-bold font-display text-gray-900 dark:text-white mb-1">
                B.Sc. in Computer Science &amp; Engineering
              </h4>
              <p className="text-xs sm:text-sm font-medium text-indigo-600 dark:text-cyan-400 mb-4">
                East West University &bull; Dhaka
              </p>

              {/* CGPA Progress Module */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.06] mb-4 sm:mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] sm:text-xs font-medium text-gray-600 dark:text-gray-400">Cumulative GPA</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-extrabold font-mono text-gray-900 dark:text-white">3.33</span>
                    <span className="text-xs text-gray-400 font-mono">/ 4.00</span>
                  </div>
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '83.25%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
                  />
                </div>
              </div>

              {/* Scholarship Highlight Card */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-gray-800 dark:text-gray-200">
                <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 text-[11px] font-bold font-code mb-1">
                  <GraduationCap size={14} />
                  <span>HONOR &amp; SCHOLARSHIP</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                  Dean's &amp; Merit-Based Financial Scholarship
                </p>
                <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">
                  Awarded for consistent top academic distinction across Fall 2025 – Summer 2026.
                </p>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-gray-100 dark:border-white/[0.07] flex items-center gap-1.5">
              <CheckCircle size={13} className="text-emerald-400 flex-shrink-0" />
              <span>Capstone Supervised by Prof. Dr. Shamim H. Ripon</span>
            </p>
          </motion.div>

          {/* Bento Item 3: Core AI & Research Capabilities (Spans 4 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 rounded-3xl p-5 sm:p-7 bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 dark:text-indigo-400 mb-3 sm:mb-4">
              <Brain size={20} />
            </div>
            <h4 className="text-base sm:text-lg font-bold font-display text-gray-900 dark:text-white mb-2">
              Deep Learning &amp; XAI
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Specialized in Graph Attention Networks for structural defect prediction, self-supervised pretraining (BYOL, SimCLR, DINOv3), and transparent model explainability via SHAP.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['PyTorch', 'GAT', 'SHAP', 'DINOv3', 'YOLO'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-code bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bento Item 4: UI/UX & Human-Centered Design (Spans 4 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 rounded-3xl p-5 sm:p-7 bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 dark:text-cyan-400 mb-3 sm:mb-4">
              <Palette size={20} />
            </div>
            <h4 className="text-base sm:text-lg font-bold font-display text-gray-900 dark:text-white mb-2">
              UI/UX Certified Design
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Certified by Creative IT Institute. Applying cognitive design principles, Figma prototyping, and design systems to deliver frictionless, accessible user journeys.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Design Systems', 'Figma', 'User Research', 'Accessibility'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-code bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bento Item 5: Full-Stack & Systems Engineering (Spans 4 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-4 rounded-3xl p-5 sm:p-7 bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500 dark:text-purple-400 mb-3 sm:mb-4">
              <Globe2 size={20} />
            </div>
            <h4 className="text-base sm:text-lg font-bold font-display text-gray-900 dark:text-white mb-2">
              Full-Stack &amp; Networking
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Crafting high-concurrency real-time web applications with Socket.io &amp; MERN, along with enterprise network topologies simulated with Cisco OSPF &amp; VLANs.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['MERN', 'Socket.io', 'OSPF/VLAN', 'Gemini API'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-code bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
