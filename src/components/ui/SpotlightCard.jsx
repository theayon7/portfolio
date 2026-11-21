import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(99, 102, 241, 0.12)',
  borderColor = 'rgba(56, 189, 248, 0.35)',
  ...props
}) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -3, transition: { duration: 0.2, ease: 'easeOut' } }}
      className={`relative rounded-3xl overflow-hidden bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/[0.08] transition-all duration-300 shadow-sm hover:shadow-xl dark:hover:shadow-indigo-500/5 group ${className}`}
      {...props}
    >
      {/* Specular Top Edge Light (Simulates physical glass bevel reflection) */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent pointer-events-none z-20" />

      {/* Dynamic Cursor Spotlight Radial Surface Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: isHovered
            ? `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 80%)`
            : '',
        }}
      />

      {/* Dynamic Cursor Border Illumination Ring */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          border: `1px solid transparent`,
          backgroundImage: isHovered
            ? `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, ${borderColor}, transparent 80%)`
            : '',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}
