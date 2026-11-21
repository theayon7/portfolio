import { motion } from 'framer-motion';
import {
  ExternalLink,
  ShieldCheck,
  Network,
} from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { GithubIcon } from './ui/SocialIcons';

export default function ResearchSpotlight() {
  return (
    <section id="research" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gray-50/50 dark:bg-[#0c0c10]/50 border-y border-gray-200/60 dark:border-white/[0.05]">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-indigo-500/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-cyan-500/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Featured Research &amp; Capstone"
          title="Pioneering Graph AI &amp; Representation Learning"
          subtitle="Rigorous academic research tackling software defect reliability and zero-shot malware visual classification."
        />

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Research Item 1: Capstone Project (Spans 7 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl p-5 sm:p-7 lg:p-9 bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/[0.08] hover:border-indigo-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between relative group"
          >
            {/* Top Badge & Supervisor Metadata */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 sm:mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-code font-semibold bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 border border-indigo-500/20">
                  <Network size={13} />
                  Undergraduate Capstone 2026
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-gray-500 dark:text-gray-400">
                  NASA &bull; PROMISE
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                Intelligent Graph-Based Software Defect Prediction &amp; Automated Metrics Generation
              </h3>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-indigo-50/60 dark:bg-white/[0.03] border border-indigo-100 dark:border-white/[0.06] mb-4 sm:mb-5">
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-white">Supervisor:</span>{" "}
                  Prof. Dr. Shamim H. Ripon &bull; Department of CSE, East West University
                </p>
              </div>

              <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-5 sm:mb-6">
                Engineered a Graph Attention Network (GAT) framework that models source code modules 
                as topological syntax and control graphs. Developed an automated pipeline to extract Abstract Syntax Tree (AST) 
                software metrics directly from raw C/C++ repositories, and integrated SHAP (SHapley Additive exPlanations) 
                to provide granular, human-interpretable rationale for identified defect hot-spots.
              </p>

              {/* Architectural Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-5 sm:mb-6 font-code">
                <div className="p-2.5 sm:p-3 rounded-xl bg-gray-50 dark:bg-[#15151c] border border-gray-100 dark:border-white/[0.06]">
                  <p className="text-[10px] text-gray-400 uppercase">Architecture</p>
                  <p className="text-xs font-bold text-indigo-600 dark:text-cyan-300 mt-0.5 truncate">GAT Layers</p>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-gray-50 dark:bg-[#15151c] border border-gray-100 dark:border-white/[0.06]">
                  <p className="text-[10px] text-gray-400 uppercase">Parsing</p>
                  <p className="text-xs font-bold text-gray-800 dark:text-gray-200 mt-0.5 truncate">C/C++ AST</p>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-gray-50 dark:bg-[#15151c] border border-gray-100 dark:border-white/[0.06]">
                  <p className="text-[10px] text-gray-400 uppercase">XAI Engine</p>
                  <p className="text-xs font-bold text-purple-600 dark:text-purple-300 mt-0.5 truncate">SHAP Trees</p>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-gray-50 dark:bg-[#15151c] border border-gray-100 dark:border-white/[0.06]">
                  <p className="text-[10px] text-gray-400 uppercase">Dashboard</p>
                  <p className="text-xs font-bold text-emerald-600 dark:text-emerald-300 mt-0.5 truncate">Streamlit UI</p>
                </div>
              </div>
            </div>

            {/* Footer tags & links */}
            <div className="pt-4 sm:pt-5 border-t border-gray-100 dark:border-white/[0.07] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {['PyTorch', 'GAT', 'AST Parsing', 'SHAP', 'Streamlit', 'Python'].map((t) => (
                  <span
                    key={t}
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-lg bg-gray-100 dark:bg-white/[0.04] text-gray-700 dark:text-gray-300 font-code"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/theayon7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-cyan-400 hover:underline min-h-[36px]"
              >
                <GithubIcon size={14} />
                <span>Source &amp; Papers</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>

          {/* Research Item 2: Self-Supervised Learning for Malware (Spans 5 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 rounded-3xl p-5 sm:p-7 lg:p-9 bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/[0.08] hover:border-cyan-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 sm:mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-code font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20">
                  <ShieldCheck size={13} />
                  Self-Supervised Learning
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-gray-500 dark:text-gray-400">
                  Malimg Dataset
                </span>
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold font-display text-gray-900 dark:text-white mb-3 group-hover:text-cyan-500 transition-colors leading-snug">
                Self-Supervised Learning for Malware Image Classification
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5 sm:mb-6">
                Investigating self-supervised representation learning paradigms to categorize malicious software families. 
                Converts raw binary executables into 2D grayscale byteplot representations and conducts empirical benchmarks 
                comparing contrastive and masked auto-encoding architectures for robust invariant feature capture.
              </p>

              {/* Benchmarked SSL architectures */}
              <div className="space-y-2 mb-5 sm:mb-6">
                <p className="text-[11px] sm:text-xs font-code font-semibold uppercase text-gray-400 tracking-wider">
                  Evaluated SSL Paradigms:
                </p>
                <div className="grid grid-cols-2 gap-2 font-code text-xs">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.06] flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300 text-[11px]">SimCLR</span>
                    <span className="text-[10px] text-indigo-400 font-semibold">Contrastive</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.06] flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300 text-[11px]">BYOL</span>
                    <span className="text-[10px] text-cyan-400 font-semibold">Bootstrap</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.06] flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300 text-[11px]">I-JEPA</span>
                    <span className="text-[10px] text-purple-400 font-semibold">Joint-Emb</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.06] flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300 text-[11px]">DINOv3</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">Distill</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 sm:pt-5 border-t border-gray-100 dark:border-white/[0.07] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {['PyTorch', 'Malimg', 'Byteplots', 'SimCLR', 'BYOL', 'DINOv3'].map((t) => (
                  <span
                    key={t}
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-lg bg-gray-100 dark:bg-white/[0.04] text-gray-700 dark:text-gray-300 font-code"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/theayon7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline min-h-[36px]"
              >
                <GithubIcon size={14} />
                <span>Repo</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
