import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';

const facilities = [
  { src: '/images/facility1.jpg', alt: 'Cardio equipment area', label: 'Cardio Zone', span: 'col-span-2 row-span-2' },
  { src: '/images/freeweights.jpg', alt: 'Free weights area', label: 'Free Weights', span: '' },
  { src: '/images/facility4.jpg', alt: 'Functional training area', label: 'Functional Training', span: '' },
  { src: '/images/cardio.jpg', alt: 'Treadmill area', label: 'Cardio Machines', span: 'col-span-2' },
  { src: '/images/crossfit.jpg', alt: 'CrossFit training area', label: 'CrossFit Zone', span: '' },
  { src: '/images/facility5.jpg', alt: 'Gym amenities', label: 'Amenities', span: '' },
];

export default function Facilities() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="facilities" className="relative py-24 lg:py-36 bg-void">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <SectionHeader
          label="Our Space"
          title={`THE\nFACILITY`}
          subtitle="Every square foot is designed for performance. From dedicated strength zones to functional training areas, our facility is built for serious athletes."
        />

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">
          {facilities.map((fac, i) => (
            <motion.div
              key={fac.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className={`group relative overflow-hidden cursor-pointer ${fac.span}`}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={fac.src}
                  alt={fac.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-void/30 group-hover:bg-void/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-void/80 to-transparent">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-white/90 font-medium">
                    {fac.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Amenities strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 py-6 border-t border-b border-white/5"
        >
          {['Gender-Neutral Toilets', 'Restroom', 'Google Pay Accepted'].map((amenity) => (
            <div key={amenity} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent" />
              <span className="text-xs tracking-[0.15em] uppercase text-smoke">{amenity}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
