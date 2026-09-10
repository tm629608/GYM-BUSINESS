import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, Menu, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Membership', href: '#membership' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-void/90 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
              className="flex items-center gap-2 group"
            >
              <div className="flex flex-col">
                <span className="font-heading text-2xl lg:text-3xl tracking-wider text-white leading-none">
                  SK <span className="text-accent">FITNESS</span>
                </span>
                <span className="text-[9px] tracking-[0.35em] text-silver uppercase font-light">Centre</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="text-[13px] tracking-[0.15em] uppercase text-silver hover:text-accent transition-colors duration-300 font-light"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:9962111222"
                className="flex items-center gap-2 text-silver hover:text-accent transition-colors text-sm"
              >
                <Phone size={14} />
                <span className="tracking-wider">9962111222</span>
              </a>
              <button
                onClick={() => scrollTo('#membership')}
                className="bg-accent text-void px-6 py-2.5 text-[13px] tracking-[0.2em] uppercase font-semibold hover:bg-accent-light transition-colors duration-300"
              >
                Join Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-void/98 backdrop-blur-2xl flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="font-heading text-4xl tracking-wider text-ivory hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center gap-4 mt-8"
              >
                <a
                  href="tel:9962111222"
                  className="flex items-center gap-2 text-accent text-lg"
                >
                  <Phone size={18} />
                  9962111222
                </a>
                <div className="flex items-center gap-2 text-silver text-sm">
                  <MapPin size={14} />
                  Aminjikarai, Chennai
                </div>
                <button
                  onClick={() => scrollTo('#membership')}
                  className="mt-4 bg-accent text-void px-10 py-3 text-sm tracking-[0.2em] uppercase font-semibold"
                >
                  Join Now
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky CTA */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: scrolled ? 0 : 100 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-void/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 flex gap-3"
      >
        <a
          href="tel:9962111222"
          className="flex-1 flex items-center justify-center gap-2 bg-charcoal text-white py-3 text-sm tracking-wider uppercase font-medium"
        >
          <Phone size={16} />
          Call
        </a>
        <button
          onClick={() => scrollTo('#membership')}
          className="flex-1 bg-accent text-void py-3 text-sm tracking-[0.15em] uppercase font-semibold"
        >
          Join Now
        </button>
        <a
          href="https://wa.me/919962111222"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-[#25D366] text-white px-4 py-3"
          aria-label="WhatsApp"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </motion.div>
    </>
  );
}
