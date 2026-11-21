import { motion } from 'framer-motion';
import {
  Trophy,
  Users,
  Zap,
} from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import {
  hackathonsAndCompetitions,
  clubActivities,
} from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gray-50/50 dark:bg-[#0c0c10]/50 border-t border-gray-200/60 dark:border-white/[0.05]">
      {/* Background radial gradient */}
      <div className="absolute top-1/3 left-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-indigo-500/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Track Record"
          title="Hackathons &amp; Activities"
          subtitle="Competitive analytics, fast-paced hackathons, and leadership in university engineering clubs."
        />

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Hackathons & Competitions Timeline (Spans 7 cols on LG) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Trophy size={18} className="text-amber-500 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold font-display text-gray-900 dark:text-white">
                Hackathons &amp; Competitions
              </h3>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              {hackathonsAndCompetitions.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`rounded-3xl p-5 sm:p-7 bg-white dark:bg-[#121216] border transition-all duration-300 shadow-sm hover:shadow-lg ${
                    item.highlight
                      ? 'border-indigo-500/30 hover:border-indigo-500/60'
                      : 'border-gray-200/90 dark:border-white/[0.08] hover:border-indigo-500/30'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2.5">
                    <span className="text-[10px] sm:text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 border border-indigo-500/20 truncate">
                      {item.category}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono text-gray-400 dark:text-gray-500">
                      {item.date}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-xl font-bold font-display text-gray-900 dark:text-white mb-1 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-[11px] sm:text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-2.5">
                    {item.organizer} &bull; <span className="font-semibold text-gray-700 dark:text-gray-300">{item.role}</span>
                  </p>

                  {item.award && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-[11px] sm:text-xs font-bold font-mono mb-3">
                      <Trophy size={13} className="flex-shrink-0" />
                      <span>{item.award}</span>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.skills.map((sk) => (
                      <span
                        key={sk}
                        className="px-2 py-0.5 text-[10px] sm:text-[11px] font-code rounded-md bg-gray-50 dark:bg-white/[0.04] text-gray-600 dark:text-gray-400 border border-gray-200/60 dark:border-white/[0.05]"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Club Leadership & Technical Activities (Spans 5 cols on LG) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Users size={18} className="text-cyan-400 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold font-display text-gray-900 dark:text-white">
                Clubs &amp; Community
              </h3>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              {clubActivities.map((club, idx) => (
                <motion.div
                  key={club.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="rounded-3xl p-5 sm:p-6 bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] sm:text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      {club.role}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono text-gray-400 dark:text-gray-500">
                      {club.period}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold font-display text-gray-900 dark:text-white mb-1.5 leading-snug">
                    {club.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {club.description}
                  </p>
                </motion.div>
              ))}

              {/* Recruiter Notice Card */}
              <div className="rounded-3xl p-5 sm:p-6 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10 border border-indigo-500/20 text-gray-800 dark:text-gray-200">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-cyan-400 text-[11px] sm:text-xs font-code font-bold mb-1.5">
                  <Zap size={15} />
                  <span>READY FOR IMPACT</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  Open to full-time engineering roles, AI research assistantships, and collaborative software projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
