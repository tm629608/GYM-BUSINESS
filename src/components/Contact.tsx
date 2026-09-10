import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { MapPin, Phone, Navigation, MessageCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Contact() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="contact" className="relative py-24 lg:py-36 bg-charcoal">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <SectionHeader
          label="Find Us"
          title={`VISIT\nSK FITNESS`}
          subtitle="Located in the heart of Aminjikarai, Chennai. Walk in for a tour or call us to schedule your first session."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact Info */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-void border border-white/10 flex-shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-heading text-lg tracking-wider text-white mb-1">ADDRESS</h4>
                  <p className="text-silver text-sm font-light leading-relaxed">
                    633/22 PH Main Rd, Main Street,<br />
                    Aminjikarai, Chennai 600029
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-void border border-white/10 flex-shrink-0">
                  <Phone size={18} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-heading text-lg tracking-wider text-white mb-1">PHONE</h4>
                  <a href="tel:9962111222" className="text-silver text-sm font-light hover:text-accent transition-colors block">
                    +91 99621 11222
                  </a>
                  <a href="tel:9094488444" className="text-silver text-sm font-light hover:text-accent transition-colors block">
                    +91 90944 88444
                  </a>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="https://maps.google.com/?q=SK+Fitness+Centre+Aminjikarai+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-void border border-white/20 hover:border-accent text-white hover:text-accent px-6 py-4 text-[13px] tracking-[0.2em] uppercase transition-all duration-300"
              >
                <Navigation size={14} />
                Get Directions
              </a>
              <a
                href="tel:9962111222"
                className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-void px-6 py-4 text-[13px] tracking-[0.2em] uppercase font-semibold transition-colors duration-300"
              >
                <Phone size={14} />
                Call Now
              </a>
              <a
                href="https://wa.me/919962111222"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-4 text-[13px] tracking-[0.2em] uppercase font-semibold transition-colors duration-300"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </motion.div>

            {/* Payment */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 text-smoke text-xs tracking-wider"
            >
              <div className="w-1.5 h-1.5 bg-accent" />
              <span>Google Pay Accepted</span>
            </motion.div>
          </div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square lg:aspect-[4/3] bg-void border border-white/10 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4!2d80.2279!3d13.0692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzA5LjEiTiA4MMKwMTMnNDAuNCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SK Fitness Centre Location"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-void/90 backdrop-blur-sm border border-white/10 px-4 py-3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-accent">SK Fitness Centre</span>
              <br />
              <span className="text-[11px] text-smoke">Aminjikarai, Chennai 600029</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
