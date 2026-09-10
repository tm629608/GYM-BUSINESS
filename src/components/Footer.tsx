import { motion } from 'framer-motion';
import { ArrowUp, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-void border-t border-white/5">
      {/* Back to top */}
      <div className="flex justify-center -mt-6">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-accent hover:bg-accent-light text-void flex items-center justify-center transition-colors duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="font-heading text-3xl tracking-wider text-white">
                SK <span className="text-accent">FITNESS</span>
              </span>
              <br />
              <span className="text-[10px] tracking-[0.35em] uppercase text-smoke">Centre</span>
            </div>
            <p className="text-smoke text-sm font-light leading-relaxed mb-6">
              A serious training destination in Aminjikarai, Chennai.
              Strength. Conditioning. CrossFit. Community.
            </p>
            <div className="flex items-center gap-2 text-smoke text-xs">
              <MapPin size={12} className="text-accent" />
              <span>Aminjikarai, Chennai 600029</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-lg tracking-wider text-white mb-6">NAVIGATE</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Programs', 'Facilities', 'Trainers', 'Gallery', 'Membership', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(`#${item.toLowerCase()}`); }}
                    className="text-smoke text-sm font-light hover:text-accent transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading text-lg tracking-wider text-white mb-6">PROGRAMS</h4>
            <ul className="space-y-3">
              {['Body Building', 'Group Training', 'Special CrossFit', 'Diet & Nutrition', 'Cycling', 'Adult Sports'].map((item) => (
                <li key={item}>
                  <a
                    href="#programs"
                    onClick={(e) => { e.preventDefault(); scrollTo('#programs'); }}
                    className="text-smoke text-sm font-light hover:text-accent transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg tracking-wider text-white mb-6">CONTACT</h4>
            <div className="space-y-4">
              <a href="tel:9962111222" className="flex items-center gap-2 text-smoke text-sm font-light hover:text-accent transition-colors">
                <Phone size={13} className="text-accent" />
                +91 99621 11222
              </a>
              <a href="tel:9094488444" className="flex items-center gap-2 text-smoke text-sm font-light hover:text-accent transition-colors">
                <Phone size={13} className="text-accent" />
                +91 90944 88444
              </a>
              <a
                href="https://wa.me/919962111222"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-smoke text-sm font-light hover:text-[#25D366] transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Enquiry
              </a>
            </div>

            {/* Social Placeholders */}
            <div className="mt-8">
              <h5 className="text-[10px] tracking-[0.2em] uppercase text-smoke mb-3">Follow Us</h5>
              <div className="flex gap-3">
                {['Instagram', 'Facebook', 'YouTube'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 border border-white/10 flex items-center justify-center text-smoke hover:text-accent hover:border-accent transition-all duration-300 text-[10px] tracking-wider uppercase"
                    aria-label={social}
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>

            {/* Google Review CTA */}
            <a
              href="https://g.page/r/sk-fitness-centre-aminjikarai/review"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-accent text-xs tracking-wider hover:text-accent-light transition-colors"
            >
              <ExternalLink size={12} />
              Rate us on Google
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-smoke text-xs font-light">
            © {new Date().getFullYear()} SK Fitness Centre. All rights reserved.
          </p>
          <p className="text-smoke/50 text-[10px] tracking-wider">
            633/22 PH Main Rd, Main Street, Aminjikarai, Chennai 600029
          </p>
        </div>
      </div>
    </footer>
  );
}
