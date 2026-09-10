import { motion } from 'framer-motion';
import { Star, Dumbbell, Users, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function TrustStrip() {
  const { ref, inView } = useInView(0.3);

  const items = [
    { icon: <Star size={20} className="text-accent fill-accent" />, value: '4.6', label: 'Google Rating', sub: '23 Reviews' },
    { icon: <Dumbbell size={20} className="text-accent" />, value: '6+', label: 'Training', sub: 'Programs' },
    { icon: <Zap size={20} className="text-accent" />, value: 'CrossFit', label: 'Certified', sub: 'Training' },
    { icon: <Users size={20} className="text-accent" />, value: 'Group', label: '& Personal', sub: 'Training' },
  ];

  return (
    <section id="trust" ref={ref} className="relative bg-charcoal border-y border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 lg:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-white/10">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex items-center gap-4 lg:justify-center lg:px-8"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-void/50 border border-white/10">
                {item.icon}
              </div>
              <div>
                <div className="font-heading text-2xl lg:text-3xl tracking-wider text-white">{item.value}</div>
                <div className="text-[11px] tracking-[0.15em] uppercase text-smoke">
                  {item.label}<br />{item.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
