import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
}) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-14 ${isCenter ? 'text-center' : 'text-left'}`}
    >
      {badge && (
        <div className={`mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-code font-semibold tracking-wider uppercase border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 dark:text-indigo-300 shadow-sm ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          {badge}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-gray-900 dark:text-white">
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}

      <div className={`mt-5 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="h-0.5 w-6 rounded-full bg-cyan-400" />
        <div className="h-0.5 w-16 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />
        <div className="h-0.5 w-4 rounded-full bg-indigo-500" />
      </div>
    </motion.div>
  );
}
