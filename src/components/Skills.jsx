import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  Globe,
  Database,
  Cpu,
  Layers,
} from 'lucide-react';
import { skillCategories } from '../data/skills';
import SectionHeading from './ui/SectionHeading';

const iconMap = {
  Code2,
  Brain,
  Globe,
  Database,
  Cpu,
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCategories =
    activeFilter === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeFilter);

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-72 sm:w-[600px] h-72 sm:h-[400px] bg-gradient-to-l from-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Technical Arsenal"
          title="Skills &amp; Technical Competencies"
          subtitle="Proficiency spanning modern systems programming, deep neural representations, and scalable web architectures."
        />

        {/* Mobile Horizontal Scrollable / Desktop Wrap Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 sm:pb-0 sm:flex-wrap sm:justify-center no-scrollbar px-1 mb-8 sm:mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`flex-shrink-0 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer min-h-[38px] ${
              activeFilter === 'all'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/20'
                : 'bg-white dark:bg-[#121216] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/[0.08] hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`flex-shrink-0 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer min-h-[38px] ${
                activeFilter === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-white dark:bg-[#121216] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/[0.08] hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Bento Grid Skills Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] || Layers;
            const isFeatured = category.id === 'ai-ml';

            return (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className={`rounded-3xl p-5 sm:p-7 bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/[0.08] hover:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between group relative overflow-hidden ${
                  isFeatured && activeFilter === 'all' ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Subtle top card glow */}
                <div className="absolute top-0 right-0 w-32 sm:w-36 h-32 sm:h-36 bg-indigo-500/5 rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-100" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-cyan-400 group-hover:scale-105 transition-transform flex-shrink-0">
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-xl font-bold font-display text-gray-900 dark:text-white truncate">
                          {category.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-gray-100 dark:bg-white/[0.05] text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/[0.08] flex-shrink-0">
                      {category.skills.length} techs
                    </span>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-mono font-medium transition-all duration-200 cursor-default border ${
                          skill.highlight
                            ? 'bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 text-indigo-700 dark:text-cyan-300 border-indigo-500/30 font-semibold shadow-xs'
                            : 'bg-gray-50 dark:bg-white/[0.03] text-gray-700 dark:text-gray-300 border-gray-200/80 dark:border-white/[0.06] hover:border-indigo-400/40 hover:bg-indigo-50/50 dark:hover:bg-indigo-500/10'
                        }`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
                        )}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Micro-summary */}
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-gray-100 dark:border-white/[0.06] flex items-center justify-between text-[10px] sm:text-[11px] font-code text-gray-400 dark:text-gray-500">
                  <span>Tested &bull; Production Validated</span>
                  <span className="text-indigo-500 dark:text-cyan-400 font-semibold">Active Stack</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
