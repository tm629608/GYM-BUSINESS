import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';

const trainers = [
  {
    name: 'Head Coach',
    role: 'Strength & Conditioning',
    image: '/images/trainer1.jpg',
    placeholder: true,
  },
  {
    name: 'CrossFit Coach',
    role: 'CrossFit & Functional Training',
    image: '/images/trainer2.jpg',
    placeholder: true,
  },
  {
    name: 'Fitness Coach',
    role: 'Body Building & Nutrition',
    image: '/images/trainer3.jpg',
    placeholder: true,
  },
];

export default function Trainers() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="trainers" className="relative py-24 lg:py-36 bg-charcoal">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <SectionHeader
          label="Our Team"
          title={`MEET THE\nCOACHES`}
          subtitle="Our coaching team brings dedicated expertise to every session. Real guidance, real accountability, real results."
        />

        <div ref={ref} className="grid md:grid-cols-3 gap-1">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.role}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="w-8 h-px bg-accent mb-4 group-hover:w-16 transition-all duration-500" />
                  <h3 className="font-heading text-2xl lg:text-3xl tracking-wider text-white">
                    {trainer.name}
                  </h3>
                  <p className="text-accent text-xs tracking-[0.2em] uppercase mt-1">{trainer.role}</p>
                  {trainer.placeholder && (
                    <p className="text-smoke text-xs mt-3 font-light italic">Profile coming soon</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-smoke text-sm mt-8 font-light"
        >
          Coach profiles and specialisations will be updated. Contact us to learn more about our training team.
        </motion.p>
      </div>
    </section>
  );
}
