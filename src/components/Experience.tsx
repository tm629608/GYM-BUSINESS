import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';

export default function Experience() {
  const { ref, inView } = useInView(0.2);

  const pillars = [
    {
      num: '01',
      title: 'STRUCTURED TRAINING',
      desc: 'Every session is designed with purpose. From progressive overload to periodised programming, your training follows a clear path toward measurable results.',
    },
    {
      num: '02',
      title: 'STRENGTH & CONDITIONING',
      desc: 'Build foundational strength through compound movements, functional training, and conditioning protocols that prepare your body for real-world performance.',
    },
    {
      num: '03',
      title: 'GROUP ENERGY',
      desc: 'Train alongside driven individuals in our group sessions. The collective energy of a motivated training floor elevates every rep and every set.',
    },
    {
      num: '04',
      title: 'FITNESS LIFESTYLE',
      desc: 'SK Fitness Centre is more than a gym. It\'s a community built around discipline, consistency, and the pursuit of a stronger self — inside and out.',
    },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-36 bg-void overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-charcoal/30 to-transparent" />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
        <SectionHeader
          label="The Experience"
          title={`THE SK\nEXPERIENCE`}
          subtitle="Where serious training meets an environment built for results. No shortcuts. No gimmicks. Just disciplined work in a facility designed to push your limits."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/bodybuilding.jpg"
                alt="Training at SK Fitness Centre"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent p-6 lg:p-8">
              <span className="font-heading text-4xl lg:text-5xl text-void">SK</span>
              <br />
              <span className="text-[10px] tracking-[0.3em] uppercase text-void/70">Fitness Centre</span>
            </div>
          </motion.div>

          {/* Right: Pillars */}
          <div className="space-y-8 lg:pt-12">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                className="group border-l-2 border-ash hover:border-accent pl-6 transition-colors duration-500"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-accent text-xs tracking-wider font-light">{pillar.num}</span>
                  <h3 className="font-heading text-xl lg:text-2xl tracking-wider text-white group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-silver text-sm font-light leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
