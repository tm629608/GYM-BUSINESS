import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function CrossFitSection() {
  const { ref, inView } = useInView(0.2);

  return (
    <section className="relative py-24 lg:py-0 lg:h-screen overflow-hidden bg-void">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/crossfit.jpg"
          alt="CrossFit training"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-void/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/60 to-transparent" />
      </div>

      <div className="absolute inset-0 grain" />

      <div ref={ref} className="relative z-10 h-full flex items-center">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-accent" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-accent">Performance Training</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
              className="font-heading text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-wider text-white mb-6"
            >
              FORGE YOUR
              <br />
              <span className="text-gradient-accent">PERFORMANCE</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-silver text-base lg:text-lg font-light leading-relaxed mb-8 max-w-lg"
            >
              Our Special CrossFit program combines Olympic weightlifting, gymnastics,
              and high-intensity conditioning. Functional movements performed at high
              intensity — designed to build athletes, not just gym-goers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {['Olympic Lifts', 'Metabolic Conditioning', 'Gymnastics', 'WODs'].map((item) => (
                <span
                  key={item}
                  className="text-[11px] tracking-[0.2em] uppercase border border-accent/40 text-accent px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              onClick={() => {
                const el = document.querySelector('#membership');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-10 bg-accent hover:bg-accent-light text-void px-10 py-4 text-[14px] tracking-[0.25em] uppercase font-semibold transition-colors duration-300"
            >
              Start CrossFit
            </motion.button>
          </div>
        </div>
      </div>

      {/* Large background text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.03 } : {}}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-0 right-0 font-heading text-[20vw] leading-none tracking-wider text-white pointer-events-none select-none"
      >
        CROSS
        <br />
        FIT
      </motion.div>
    </section>
  );
}
