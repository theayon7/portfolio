import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  Globe,
  Database,
  Cpu,
} from 'lucide-react';
import { skillCategories } from '../data/skills';
import SectionHeading from './ui/SectionHeading';
import SpotlightCard from './ui/SpotlightCard';

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
          title="Skills &amp; AI Systems Competencies"
          subtitle="Proficiency spanning modern deep neural networks, systems programming, and scalable web architectures."
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

        {/* Modern Bento Grid for Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Brain;
            const isFeatured = category.id === 'ai-ml';

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={isFeatured ? 'md:col-span-2 lg:col-span-2' : ''}
              >
                <SpotlightCard className="p-5 sm:p-7 h-full">
                  <div>
                    {/* Header: Icon, Category Name, & Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-white/[0.05] border border-indigo-100 dark:border-white/[0.08] text-indigo-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white font-display">
                            {category.title}
                          </h3>
                          <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 font-mono">
                            {category.skills.length} competencies
                          </p>
                        </div>
                      </div>

                      {isFeatured && (
                        <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 border border-indigo-500/25">
                          Primary Focus
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5 sm:mb-6">
                      {category.description}
                    </p>

                    {/* Skill Pills Grid with Micro-Hover Accents */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-code transition-all duration-200 ${
                            skill.highlight
                              ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-cyan-300 border border-indigo-200 dark:border-indigo-500/30 font-semibold shadow-sm hover:border-cyan-400/50'
                              : 'bg-gray-50 dark:bg-white/[0.03] text-gray-700 dark:text-gray-300 border border-gray-200/70 dark:border-white/[0.06] hover:border-gray-300 dark:hover:border-white/20'
                          }`}
                        >
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_4px_#38bdf8]" />
                          )}
                          <span>{skill.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-5 border-t border-gray-100 dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-gray-400">
                    <span>Proficiency</span>
                    <span className="text-indigo-600 dark:text-cyan-400 font-medium">Production Verified</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
