import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  ArrowUpRight,
  X,
  Eye,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from './ui/SocialIcons';
import { projects, categories } from '../data/projects';
import SectionHeading from './ui/SectionHeading';
import SpotlightCard from './ui/SpotlightCard';

const categoryBadges = {
  'Research & Capstone': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  'AI & ML': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Full Stack': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Networking': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background radial lighting */}
      <div className="absolute top-1/4 -right-20 sm:-right-40 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-cyan-500/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 sm:-left-40 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-indigo-500/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Engineering Showcase"
          title="Featured Projects &amp; AI Systems"
          subtitle="Explore real-time distributed platforms, computer vision benchmarks, and enterprise network infrastructure."
        />

        {/* Mobile Horizontal Scrollable / Desktop Wrap Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 sm:pb-0 sm:flex-wrap sm:justify-center no-scrollbar px-1 mb-8 sm:mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer min-h-[38px] ${
                  isActive
                    ? 'text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-white dark:bg-[#121216] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-white/[0.08]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="projectActiveTab"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-2xl -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Spotlight Realism */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const badgeClass =
                categoryBadges[project.category] || 'bg-gray-500/10 text-gray-400 border-gray-500/20';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="h-full flex flex-col"
                >
                  <SpotlightCard className="p-5 sm:p-7 h-full flex flex-col justify-between">
                    <div>
                      {/* Card Header & Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                        <span className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-code font-semibold border ${badgeClass} truncate`}>
                          {project.badge || project.category}
                        </span>
                        {project.featured && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-code uppercase bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/20 font-bold flex-shrink-0">
                            <Sparkles size={9} />
                            Featured
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold font-display text-gray-900 dark:text-white mb-1.5 sm:mb-2 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                        {project.title}
                      </h3>

                      {project.subtitle && (
                        <p className="text-[11px] sm:text-xs font-mono text-indigo-500 dark:text-cyan-400 mb-2 sm:mb-3 truncate">
                          {project.subtitle}
                        </p>
                      )}

                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed mb-4 sm:mb-5">
                        {project.description}
                      </p>

                      {/* Technical metrics overview */}
                      {project.metrics && (
                        <div className="grid grid-cols-2 gap-2 p-2.5 sm:p-3 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.05] mb-4 sm:mb-5 font-code text-xs">
                          {project.metrics.slice(0, 2).map((m) => (
                            <div key={m.label} className="min-w-0">
                              <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase block truncate">{m.label}</span>
                              <span className="text-[11px] sm:text-xs font-semibold text-gray-800 dark:text-gray-200 truncate block">
                                {m.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Technology Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-5 sm:mb-6">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[10px] sm:text-[11px] font-code rounded-md bg-gray-100 dark:bg-white/[0.04] text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-white/[0.05]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-1.5 py-0.5 text-[10px] font-code text-gray-400 dark:text-gray-500">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="pt-3 sm:pt-4 border-t border-gray-100 dark:border-white/[0.06] flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-cyan-400 hover:text-indigo-500 dark:hover:text-cyan-300 transition-colors cursor-pointer min-h-[36px]"
                      >
                        <Eye size={14} />
                        <span>Inspect Specs</span>
                      </button>

                      <div className="flex items-center gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/[0.04] text-gray-600 dark:text-gray-300 hover:text-white hover:bg-indigo-600 transition-all flex items-center justify-center border border-gray-200 dark:border-white/[0.06]"
                            title="View Source on GitHub"
                          >
                            <GithubIcon size={14} />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center border border-indigo-500/20"
                            title="Live Demo"
                          >
                            <ArrowUpRight size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Inspector Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-white dark:bg-[#121216] border border-gray-200 dark:border-white/[0.1] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[88vh] overflow-y-auto no-scrollbar"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-xl bg-gray-100 dark:bg-white/[0.05] text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                <div className="mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-code font-semibold bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 border border-indigo-500/20">
                    {selectedProject.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 dark:text-white mb-2 leading-snug">
                  {selectedProject.title}
                </h3>

                {selectedProject.subtitle && (
                  <p className="text-xs sm:text-sm font-mono text-indigo-600 dark:text-cyan-400 mb-4">
                    {selectedProject.subtitle}
                  </p>
                )}

                {selectedProject.supervisor && (
                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.06] mb-4 text-xs">
                    <p className="text-gray-500">Supervisor / Advisor</p>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                      {selectedProject.supervisor}
                      {selectedProject.affiliation ? ` • ${selectedProject.affiliation}` : ''}
                    </p>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {selectedProject.metrics && (
                  <div className="mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2.5">
                      Key Architectural Metrics
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-code">
                      {selectedProject.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.06]"
                        >
                          <p className="text-[10px] text-gray-400 uppercase">{m.label}</p>
                          <p className="text-xs font-bold text-indigo-600 dark:text-cyan-300 mt-0.5 truncate">
                            {m.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2.5">
                    Technologies &amp; Libraries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-code rounded-lg bg-gray-100 dark:bg-white/[0.04] text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-white/[0.05]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-white/[0.06] flex items-center justify-end gap-3">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shimmer-btn inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/20"
                    >
                      <GithubIcon size={14} />
                      <span>View GitHub Repository</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
