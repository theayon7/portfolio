import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  ArrowUpRight,
  X,
  Eye,
} from 'lucide-react';
import { GithubIcon } from './ui/SocialIcons';
import { projects, categories } from '../data/projects';
import SectionHeading from './ui/SectionHeading';

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
          title="Featured Projects &amp; Systems"
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

        {/* Projects Grid */}
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
                  className="rounded-3xl bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/[0.08] hover:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between group overflow-hidden"
                >
                  {/* Card Header & Badges */}
                  <div className="p-5 sm:p-7">
                    <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                      <span className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-code font-semibold border ${badgeClass} truncate`}>
                        {project.badge || project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-code uppercase bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/20 font-bold flex-shrink-0">
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

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-code rounded-lg bg-gray-100 dark:bg-white/[0.04] text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-white/[0.05]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-code rounded-lg bg-gray-100 dark:bg-white/[0.04] text-gray-500">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="px-5 sm:px-7 py-3.5 sm:py-4 border-t border-gray-100 dark:border-white/[0.06] bg-gray-50/50 dark:bg-white/[0.01] flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors cursor-pointer min-h-[36px]"
                    >
                      <Eye size={14} />
                      <span>Inspect</span>
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-900 dark:bg-white/[0.08] text-white hover:bg-indigo-600 transition-colors text-xs font-semibold min-h-[36px]"
                    >
                      <GithubIcon size={13} />
                      <span>Repository</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Project Inspection Modal (Optimized for Mobile Height & Scrolling) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto p-3 sm:p-6 flex items-start sm:items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#121216] border border-gray-200 dark:border-white/[0.1] rounded-3xl p-5 sm:p-8 shadow-2xl z-10 my-6 sm:my-8 max-h-[88vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 sm:top-5 right-4 sm:right-5 w-9 h-9 flex items-center justify-center rounded-xl text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/[0.05] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-2 sm:mb-3 pr-8">
                <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-code font-semibold bg-indigo-500/10 text-indigo-500 dark:text-cyan-400 border border-indigo-500/20">
                  {selectedProject.category}
                </span>
                {selectedProject.badge && (
                  <span className="text-[11px] sm:text-xs font-mono text-gray-500 dark:text-gray-400">
                    &bull; {selectedProject.badge}
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 dark:text-white mb-2 leading-snug">
                {selectedProject.title}
              </h3>

              {selectedProject.supervisor && (
                <p className="text-xs font-mono text-cyan-400 mb-3 sm:mb-4">
                  Supervisor: {selectedProject.supervisor} ({selectedProject.affiliation})
                </p>
              )}

              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
                {selectedProject.description}
              </p>

              {/* Metrics Breakdown */}
              {selectedProject.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6 font-code text-xs">
                  {selectedProject.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-2.5 sm:p-3 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.05]"
                    >
                      <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase truncate">{m.label}</p>
                      <p className="text-xs font-bold text-gray-900 dark:text-white mt-0.5 truncate">{m.value}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Technologies */}
              <div className="mb-5 sm:mb-6">
                <p className="text-[11px] sm:text-xs font-code font-semibold text-gray-400 uppercase mb-2">
                  Complete Stack &amp; Tools:
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-code rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-cyan-300 border border-indigo-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-gray-100 dark:border-white/[0.08]">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/[0.05] cursor-pointer min-h-[38px]"
                >
                  Close
                </button>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-md shadow-indigo-500/20 min-h-[38px]"
                >
                  <GithubIcon size={14} />
                  <span>View Repository</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
