import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeader({ label, title, subtitle, align = 'left', light = false }: SectionHeaderProps) {
  const { ref, inView } = useInView(0.3);

  return (
    <div ref={ref} className={`mb-12 lg:mb-20 ${align === 'center' ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-4"
        style={align === 'center' ? { justifyContent: 'center' } : {}}
      >
        <div className="w-8 h-px bg-accent" />
        <span className="text-[11px] tracking-[0.3em] uppercase text-accent font-medium">{label}</span>
        <div className="w-8 h-px bg-accent" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.7 }}
        className={`font-heading text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-wider ${
          light ? 'text-void' : 'text-white'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`mt-4 max-w-xl text-base font-light leading-relaxed ${
            light ? 'text-smoke' : 'text-silver'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
