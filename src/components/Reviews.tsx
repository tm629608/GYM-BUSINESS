import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Star, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Reviews() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="reviews" className="relative py-24 lg:py-36 bg-void">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <SectionHeader
          label="Testimonials"
          title={`WHAT MEMBERS\nSAY`}
          subtitle="Real feedback from real members. Our Google reviews reflect the training experience at SK Fitness Centre."
          align="center"
        />

        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Rating Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={28}
                  className={i < 4 ? 'text-accent fill-accent' : i === 4 ? 'text-accent fill-accent/60' : 'text-ash'}
                />
              ))}
            </div>
            <div className="font-heading text-7xl lg:text-9xl tracking-wider text-white">4.6</div>
            <p className="text-smoke text-sm tracking-[0.2em] uppercase mt-2">Google Rating · 23 Reviews</p>
          </motion.div>

          {/* Review Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                text: 'The training environment here is exceptional. Well-maintained equipment and knowledgeable trainers who genuinely care about your progress.',
                note: 'Based on Google review sentiment',
              },
              {
                text: 'Great facility for serious training. The CrossFit sessions are challenging and the coaching is supportive. Highly recommended for anyone in Aminjikarai.',
                note: 'Based on Google review sentiment',
              },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                className="bg-charcoal border border-white/5 p-8 lg:p-10 relative group hover:border-accent/20 transition-colors duration-500"
              >
                <div className="text-accent text-5xl font-editorial leading-none mb-4">“</div>
                <p className="text-ivory/80 text-base font-light leading-relaxed italic">
                  {review.text}
                </p>
                <p className="text-smoke text-[10px] tracking-[0.15em] uppercase mt-6">{review.note}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA to Google */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="text-center mt-12"
          >
            <a
              href="https://g.page/r/sk-fitness-centre-aminjikarai/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/20 hover:border-accent text-silver hover:text-accent px-8 py-4 text-[13px] tracking-[0.2em] uppercase transition-all duration-300"
            >
              <span>Leave a Review on Google</span>
              <ExternalLink size={14} />
            </a>
            <p className="text-smoke text-xs mt-4 font-light">
              Your feedback helps us improve and helps others discover SK Fitness Centre.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
