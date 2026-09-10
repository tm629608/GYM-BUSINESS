import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const programs = [
  {
    id: 'bodybuilding',
    title: 'BODY BUILDING',
    image: '/images/bodybuilding.jpg',
    desc: 'Sculpt your physique with structured hypertrophy training, progressive overload protocols, and dedicated strength equipment designed for serious muscle building.',
    tags: ['Hypertrophy', 'Strength', 'Progressive'],
  },
  {
    id: 'group',
    title: 'GROUP TRAINING',
    image: '/images/group-training.jpg',
    desc: 'High-energy group sessions that combine functional movements, cardio conditioning, and team motivation. Push harder together.',
    tags: ['HIIT', 'Functional', 'Community'],
  },
  {
    id: 'crossfit',
    title: 'SPECIAL CROSSFIT',
    image: '/images/crossfit.jpg',
    desc: 'Functional fitness at its finest. Our CrossFit programming combines Olympic lifting, gymnastics, and metabolic conditioning for complete athletic development.',
    tags: ['WOD', 'Olympic Lifts', 'Conditioning'],
  },
  {
    id: 'nutrition',
    title: 'DIET & NUTRITION',
    image: '/images/nutrition.jpg',
    desc: 'Fuel your training with structured nutrition guidance. Personalised diet planning to support your body composition and performance goals.',
    tags: ['Meal Plans', 'Macros', 'Guidance'],
  },
  {
    id: 'cycling',
    title: 'CYCLING',
    image: '/images/cycling.jpg',
    desc: 'Indoor cycling sessions designed to build cardiovascular endurance, burn calories, and improve lower body power in an immersive group environment.',
    tags: ['Cardio', 'Endurance', 'Power'],
  },
  {
    id: 'sports',
    title: 'ADULT SPORTS',
    image: '/images/adult-sports.jpg',
    desc: 'Rediscover the joy of sport. Our adult sports programs offer structured training and recreational play for all fitness levels.',
    tags: ['Recreation', 'Agility', 'Fun'],
  },
];

export default function Programs() {
  const { ref, inView } = useInView(0.1);
  const [activeProgram, setActiveProgram] = useState<string | null>(null);

  const scrollToMembership = () => {
    const el = document.querySelector('#membership');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="programs" className="relative py-24 lg:py-36 bg-charcoal">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <SectionHeader
          label="Training Programs"
          title="PROGRAMS"
          subtitle="Six distinct training disciplines. One relentless commitment to your progress."
          align="center"
        />

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group relative overflow-hidden cursor-pointer"
              onMouseEnter={() => setActiveProgram(prog.id)}
              onMouseLeave={() => setActiveProgram(null)}
              onClick={scrollToMembership}
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                  <div className="flex gap-2 mb-3">
                    {prog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] tracking-[0.2em] uppercase text-accent border border-accent/30 px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading text-3xl lg:text-4xl tracking-wider text-white mb-2">
                    {prog.title}
                  </h3>

                  <AnimatePresence>
                    {activeProgram === prog.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-silver text-sm font-light leading-relaxed mb-4">
                          {prog.desc}
                        </p>
                        <div className="flex items-center gap-2 text-accent text-sm tracking-wider uppercase">
                          <span>Learn More</span>
                          <ArrowRight size={14} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Mobile: always show description */}
                  <div className="md:hidden">
                    <p className="text-silver text-sm font-light leading-relaxed mt-2">
                      {prog.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
