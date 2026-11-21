import { motion } from 'framer-motion';
import {
  GraduationCap,
  MapPin,
  Calendar,
  Terminal,
  Brain,
  Globe2,
  CheckCircle,
  Cpu,
} from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="AI Engineer Profile"
          title="Engineering Intelligent Systems &amp; Scale"
          subtitle="Bridging mathematical rigor in neural networks with production-grade AI infrastructure."
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
                <span>AI Engineering Philosophy</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
                Architecting intelligent software at the crossroads of{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                  research and production scale
                </span>
                .
              </h3>

              <div className="space-y-3 sm:space-y-4 text-gray-600 dark:text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                <p>
                  I am a Computer Science and Engineering graduate from{" "}
                  <strong className="text-gray-900 dark:text-white font-semibold">East West University</strong>, 
                  Dhaka. My engineering focus centers on building reliable, explainable AI systems using{" "}
                  <span className="text-indigo-600 dark:text-cyan-400 font-medium">Graph Attention Networks (GAT)</span>,{" "}
                  <span className="text-indigo-600 dark:text-cyan-400 font-medium">Self-Supervised Learning (BYOL, SimCLR, DINOv3, I-JEPA)</span>, and{" "}
                  <span className="text-indigo-600 dark:text-cyan-400 font-medium">Explainable AI (SHAP)</span>.
                </p>
                <p>
                  As an AI Engineer, I don't treat machine learning as an isolated script or a black-box API. 
                  I design full lifecycle solutions: from custom Abstract Syntax Tree (AST) source parsing and graph topology creation 
                  to distributed real-time inference via WebSockets, interactive diagnostic dashboards (Streamlit), and resilient MERN web backends.
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
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" /> Available for Roles
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
                  <GraduationCap size={14} />
                  <span>Academic Foundations</span>
                </div>
                <span className="text-[10px] sm:text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Oct 2022 – Sept 2026
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-bold font-display text-gray-900 dark:text-white mb-1.5">
                B.Sc. in Computer Science &amp; Engineering
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-5">
                East West University &bull; Dhaka, Bangladesh
              </p>

              {/* CGPA Bar */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.06] mb-4 sm:mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400">Cumulative GPA</span>
                  <span className="text-sm font-bold font-mono text-indigo-600 dark:text-cyan-400">
                    3.33 <span className="text-xs text-gray-400 font-normal">/ 4.00</span>
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[83.25%] h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
                </div>
                <div className="flex justify-between items-center mt-1.5 text-[10px] font-mono text-gray-400">
                  <span>Graduation Sept 2026</span>
                  <span className="text-emerald-500 dark:text-emerald-400 font-semibold">83.25% Standing</span>
                </div>
              </div>

              {/* Honors Badge */}
              <div className="p-3 rounded-xl bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/20">
                <p className="text-[11px] font-semibold text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
                  <CheckCircle size={13} className="text-cyan-400 flex-shrink-0" />
                  Dean's &amp; Merit-Based Financial Scholarship
                </p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5 pl-4">
                  Awarded for consistent academic distinction (Fall 2025 – Summer 2026)
                </p>
              </div>
            </div>

            <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-gray-100 dark:border-white/[0.07] flex items-center justify-between text-xs text-gray-500">
              <span className="font-mono">Undergraduate Capstone</span>
              <span className="text-indigo-600 dark:text-cyan-400 font-semibold">Graph AI (GAT)</span>
            </div>
          </motion.div>

          {/* Bento Item 3: Core AI & Deep Learning (Spans 4 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 rounded-3xl p-5 sm:p-6 bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 shadow-sm"
          >
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
              <Brain size={20} />
            </div>
            <h4 className="text-base sm:text-lg font-bold font-display text-gray-900 dark:text-white mb-2">
              Neural Systems &amp; GATs
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Designing graph attention layers, topological feature extractors, and self-supervised visual encoders (BYOL, SimCLR, DINOv3, I-JEPA).
            </p>
            <div className="flex flex-wrap gap-1.5 font-code text-[11px]">
              {['PyTorch', 'GAT', 'Self-Supervised', 'SHAP XAI'].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-white/[0.04] text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bento Item 4: Computer Vision & Edge AI (Spans 4 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-4 rounded-3xl p-5 sm:p-6 bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 shadow-sm"
          >
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4">
              <Cpu size={20} />
            </div>
            <h4 className="text-base sm:text-lg font-bold font-display text-gray-900 dark:text-white mb-2">
              Computer Vision &amp; Detection
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Implementing low-light thermal target tracking with YOLO (v10s, v12s, v26s), ByteTrack, and semi-supervised aerial OBB detection.
            </p>
            <div className="flex flex-wrap gap-1.5 font-code text-[11px]">
              {['YOLOv10/12/26', 'FLIR Thermal', 'ByteTrack', 'OpenCV'].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md bg-cyan-50 dark:bg-white/[0.04] text-cyan-700 dark:text-cyan-300 border border-cyan-100 dark:border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bento Item 5: Production Full-Stack AI (Spans 4 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4 rounded-3xl p-5 sm:p-6 bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 shadow-sm"
          >
            <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
              <Globe2 size={20} />
            </div>
            <h4 className="text-base sm:text-lg font-bold font-display text-gray-900 dark:text-white mb-2">
              Full-Stack Serving &amp; UI/UX
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Certified UI/UX designer building real-time WebSocket applications, LLM agent assistants (Gemini API), and responsive client interfaces.
            </p>
            <div className="flex flex-wrap gap-1.5 font-code text-[11px]">
              {['MERN Stack', 'Socket.io', 'Streamlit', 'UI/UX Certified'].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md bg-purple-50 dark:bg-white/[0.04] text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-white/[0.06]"
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
