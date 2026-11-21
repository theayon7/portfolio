import { motion } from 'framer-motion';
import {
  GraduationCap,
  Star,
  CheckCircle2,
  Palette,
} from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import {
  educationData,
  scholarshipsAndHonors,
  certifications,
} from '../data/experience';

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-72 sm:w-[600px] h-72 sm:h-[600px] bg-indigo-500/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Academics &amp; Credentials"
          title="Education &amp; Scholarships"
          subtitle="Foundational computer science degree from East West University alongside merit recognition and professional certifications."
        />

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Main University Education Card (Spans 7 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl p-5 sm:p-7 lg:p-9 bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4 sm:mb-6">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-cyan-400 flex-shrink-0">
                  <GraduationCap size={24} />
                </div>
                <span className="text-[10px] sm:text-xs font-mono px-2.5 sm:px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold truncate">
                  Undergraduate &bull; 2022 – 2026
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display text-gray-900 dark:text-white mb-2 leading-snug">
                {educationData.degree}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-indigo-600 dark:text-cyan-400 mb-1">
                {educationData.institution}
              </p>
              <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 mb-5 sm:mb-6 font-mono">
                {educationData.location} &bull; Dept. of Computer Science &amp; Engineering
              </p>

              {/* CGPA metric showcase */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.06] mb-5 sm:mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-mono">
                    Academic Standing
                  </span>
                  <div className="flex items-baseline gap-1 font-mono">
                    <span className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
                      {educationData.cgpa}
                    </span>
                    <span className="text-xs text-gray-400">/ {educationData.scale}</span>
                  </div>
                </div>
                <div className="w-full h-2.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: educationData.percentage }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-indigo-400 to-cyan-400"
                  />
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                <p className="text-[11px] sm:text-xs font-mono font-semibold uppercase text-gray-400 tracking-wider">
                  Program Highlights &amp; Milestones:
                </p>
                {educationData.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle2 size={15} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-gray-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-gray-500">
              <span>Duration: 4 Years</span>
              <span className="text-indigo-400 font-semibold">140+ Credits</span>
            </div>
          </motion.div>

          {/* Right Column: Scholarships & Certifications (Spans 5 cols on LG) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            {/* Scholarships Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl p-5 sm:p-7 bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <Star size={20} />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold font-display text-gray-900 dark:text-white">
                    Honors &amp; Scholarships
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">Merit recognition from EWU</p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {scholarshipsAndHonors.map((s) => (
                  <div
                    key={s.title}
                    className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/40 dark:bg-amber-500/5 border border-amber-500/20"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold border border-amber-500/20">
                        {s.badge}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-mono text-gray-500 dark:text-gray-400">{s.period}</span>
                    </div>
                    <h5 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">{s.title}</h5>
                    <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Professional Certifications Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-3xl p-5 sm:p-7 bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 flex-shrink-0">
                  <Palette size={20} />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold font-display text-gray-900 dark:text-white">
                    Design Certification
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">Creative IT Institute</p>
                </div>
              </div>

              {certifications.map((c) => (
                <div
                  key={c.title}
                  className="p-3.5 sm:p-4 rounded-2xl bg-cyan-50/40 dark:bg-cyan-500/5 border border-cyan-500/20"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold border border-cyan-500/20">
                      {c.badge}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-gray-500 dark:text-gray-400">{c.issuer}</span>
                  </div>
                  <h5 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">{c.title}</h5>
                  <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                    {c.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {c.skills.map((sk) => (
                      <span
                        key={sk}
                        className="px-2 py-0.5 text-[10px] font-code rounded-md bg-white dark:bg-[#18181f] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/[0.06]"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
