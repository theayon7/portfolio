import { motion } from 'framer-motion';
import {
  ExternalLink,
  ShieldCheck,
  Network,
  Activity,
  GitBranch,
} from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { GithubIcon } from './ui/SocialIcons';
import SpotlightCard from './ui/SpotlightCard';

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
            className="lg:col-span-7 flex flex-col"
          >
            <SpotlightCard className="p-5 sm:p-7 lg:p-9 h-full shadow-xl">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 sm:mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-code font-semibold bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 border border-indigo-500/20">
                    <Network size={13} className="text-cyan-400" />
                    Undergraduate Capstone 2026
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-emerald-500 font-semibold">
                    <Activity size={12} className="animate-pulse" />
                    <span>NASA &bull; PROMISE</span>
                  </div>
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

                {/* Architectural Highlights Grid with Micro-Shadows */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-5 sm:mb-6 font-code">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-gray-50 dark:bg-[#15151c] border border-gray-100 dark:border-white/[0.06] hover:border-indigo-500/30 transition-colors">
                    <p className="text-[10px] text-gray-400 uppercase">Architecture</p>
                    <p className="text-xs font-bold text-indigo-600 dark:text-cyan-300 mt-0.5 truncate">GAT Layers</p>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-gray-50 dark:bg-[#15151c] border border-gray-100 dark:border-white/[0.06] hover:border-cyan-500/30 transition-colors">
                    <p className="text-[10px] text-gray-400 uppercase">Parsing</p>
                    <p className="text-xs font-bold text-gray-800 dark:text-gray-200 mt-0.5 truncate">C/C++ AST</p>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-gray-50 dark:bg-[#15151c] border border-gray-100 dark:border-white/[0.06] hover:border-purple-500/30 transition-colors">
                    <p className="text-[10px] text-gray-400 uppercase">XAI Engine</p>
                    <p className="text-xs font-bold text-purple-600 dark:text-purple-300 mt-0.5 truncate">SHAP Trees</p>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-gray-50 dark:bg-[#15151c] border border-gray-100 dark:border-white/[0.06] hover:border-emerald-500/30 transition-colors">
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
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-lg bg-gray-100 dark:bg-white/[0.04] text-gray-700 dark:text-gray-300 font-code border border-gray-200/50 dark:border-white/[0.05]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/theayon7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-btn inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all self-start sm:self-auto shadow-md shadow-indigo-600/20"
                >
                  <GithubIcon size={14} />
                  <span>View Repository</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Research Item 2: Self-Supervised Learning Malware (Spans 5 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col"
          >
            <SpotlightCard className="p-5 sm:p-7 lg:p-9 h-full shadow-xl">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 sm:mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-code font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20">
                    <ShieldCheck size={13} className="text-purple-400" />
                    Deep Learning &bull; Cybersecurity
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono text-gray-400">
                    Malimg Dataset
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug">
                  Self-Supervised Learning for Malware Image Classification
                </h3>

                <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-5 sm:mb-6">
                  Pioneered a rigorous comparative evaluation benchmarking contrastive and non-contrastive 
                  self-supervised paradigms (SimCLR, BYOL, I-JEPA, and DINOv3). Converts raw binary executables into 
                  grayscale visual byteplots to train resilient invariant representations without labor-intensive manual labeling.
                </p>

                {/* SSL Architectures Matrix */}
                <div className="space-y-2 mb-5 sm:mb-6 font-code text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-[#15151c] border border-gray-100 dark:border-white/[0.05]">
                    <span className="text-gray-600 dark:text-gray-300 font-semibold flex items-center gap-1.5">
                      <GitBranch size={13} className="text-cyan-400" /> BYOL &amp; SimCLR
                    </span>
                    <span className="text-[11px] text-indigo-600 dark:text-cyan-400 font-bold">Contrastive</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-[#15151c] border border-gray-100 dark:border-white/[0.05]">
                    <span className="text-gray-600 dark:text-gray-300 font-semibold flex items-center gap-1.5">
                      <GitBranch size={13} className="text-purple-400" /> DINOv3 &amp; I-JEPA
                    </span>
                    <span className="text-[11px] text-purple-600 dark:text-purple-400 font-bold">Latent Predictor</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-[#15151c] border border-gray-100 dark:border-white/[0.05]">
                    <span className="text-gray-600 dark:text-gray-300 font-semibold">Representation</span>
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">Zero-Shot &bull; Fine-Tuned</span>
                  </div>
                </div>
              </div>

              {/* Footer tags */}
              <div className="pt-4 sm:pt-5 border-t border-gray-100 dark:border-white/[0.07] flex flex-wrap gap-1.5">
                {['SimCLR', 'BYOL', 'DINOv3', 'I-JEPA', 'Malimg', 'Computer Vision'].map((t) => (
                  <span
                    key={t}
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-lg bg-gray-100 dark:bg-white/[0.04] text-gray-700 dark:text-gray-300 font-code border border-gray-200/50 dark:border-white/[0.05]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
