import { motion } from 'framer-motion';
import { MapPin, Clock, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-gym.jpg"
          alt="SK Fitness Centre gym interior"
          className="w-full h-full object-cover scale-110"
          loading="eager"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-void/70 via-void/50 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-transparent to-transparent" />
      </div>

      {/* Grain */}
      <div className="absolute inset-0 grain" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 lg:pb-28 px-6 lg:px-12 max-w-[1440px] mx-auto">
        {/* Top info bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute top-24 lg:top-28 left-6 lg:left-12 flex items-center gap-6 text-silver text-xs tracking-wider"
        >
          <div className="flex items-center gap-2">
            <MapPin size={13} className="text-accent" />
            <span>Aminjikarai, Chennai</span>
          </div>
          <div className="w-px h-3 bg-ash" />
          <div className="flex items-center gap-2">
            <Clock size={13} className="text-accent" />
            <span>Open Today</span>
          </div>
        </motion.div>

        {/* Main headline */}
        <div className="space-y-6 lg:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.77, 0, 0.175, 1] }}
          >
            <h1 className="font-heading text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-wider text-white">
              BUILT FOR
              <br />
              <span className="text-gradient-accent">STRENGTH.</span>
              <br />
              BUILT FOR
              <br />
              <span className="text-gradient-accent">YOU.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-silver text-base lg:text-lg max-w-lg font-light leading-relaxed"
          >
            SK Fitness Centre — a serious training destination in Aminjikarai, Chennai.
            Strength. Conditioning. CrossFit. Your transformation starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollTo('#membership')}
              className="magnetic-btn bg-accent hover:bg-accent-light text-void px-10 py-4 text-[14px] tracking-[0.25em] uppercase font-semibold transition-all duration-300 pulse-accent"
            >
              Start Your Journey
            </button>
            <button
              onClick={() => scrollTo('#facilities')}
              className="magnetic-btn border border-white/20 hover:border-accent text-white hover:text-accent px-10 py-4 text-[14px] tracking-[0.25em] uppercase font-light transition-all duration-300"
            >
              Explore The Gym
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollTo('#trust')}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-smoke">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={16} className="text-accent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Side text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 transform -rotate-90 origin-center"
      >
        <span className="text-[11px] tracking-[0.5em] uppercase text-smoke/50">SK Fitness Centre · Est. Chennai</span>
      </motion.div>
    </section>
  );
}
