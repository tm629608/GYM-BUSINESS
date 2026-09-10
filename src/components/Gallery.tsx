import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const images = [
  { src: '/images/hero-gym.jpg', alt: 'Gym equipment' },
  { src: '/images/crossfit.jpg', alt: 'CrossFit area' },
  { src: '/images/bodybuilding.jpg', alt: 'Strength training' },
  { src: '/images/facility1.jpg', alt: 'Cardio zone' },
  { src: '/images/freeweights.jpg', alt: 'Free weights' },
  { src: '/images/cycling.jpg', alt: 'Cycling studio' },
  { src: '/images/facility4.jpg', alt: 'Functional training' },
  { src: '/images/cardio.jpg', alt: 'Cardio machines' },
  { src: '/images/group-training.jpg', alt: 'Group training' },
  { src: '/images/facility5.jpg', alt: 'Amenities' },
  { src: '/images/adult-sports.jpg', alt: 'Sports training' },
  { src: '/images/nutrition.jpg', alt: 'Nutrition' },
];

export default function Gallery() {
  const { ref, inView } = useInView(0.1);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((p) => (p !== null ? (p - 1 + images.length) % images.length : null));
  const next = () => setLightbox((p) => (p !== null ? (p + 1) % images.length : null));

  return (
    <section id="gallery" className="relative py-24 lg:py-36 bg-void">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <SectionHeader
          label="Gallery"
          title={`INSIDE\nSK FITNESS`}
          subtitle="A look inside our training facility. Real equipment, real atmosphere, real results."
          align="center"
        />

        {/* Masonry Grid */}
        <div ref={ref} className="columns-2 lg:columns-3 xl:columns-4 gap-2 space-y-2">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="break-inside-avoid group cursor-pointer relative overflow-hidden"
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-void/0 group-hover:bg-accent/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 border border-white/60 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-void/95 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 lg:left-8 text-white/40 hover:text-accent transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 lg:right-8 text-white/40 hover:text-accent transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight size={36} />
            </button>

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-smoke text-xs tracking-wider">
              {lightbox + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
