import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Check, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const plans = [
  {
    name: 'QUARTERLY',
    duration: '3 Months',
    price: 'Contact Us',
    priceNote: 'for current pricing',
    features: ['Full gym access', 'All equipment usage', 'Locker facility', 'Basic training guidance'],
    popular: false,
  },
  {
    name: 'HALF YEARLY',
    duration: '6 Months',
    price: 'Contact Us',
    priceNote: 'for current pricing',
    features: ['Full gym access', 'All equipment usage', 'Locker facility', 'Training guidance', 'Diet consultation', 'Group sessions'],
    popular: true,
  },
  {
    name: 'ANNUAL',
    duration: '12 Months',
    price: 'Contact Us',
    priceNote: 'best value',
    features: ['Full gym access', 'All equipment usage', 'Locker facility', 'Personal training sessions', 'Diet & nutrition plan', 'Group sessions', 'CrossFit access', 'Priority booking'],
    popular: false,
  },
];

export default function Membership() {
  const { ref, inView } = useInView(0.1);
  const [formData, setFormData] = useState({ name: '', phone: '', goal: '', program: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="membership" className="relative py-24 lg:py-36 bg-charcoal">
      <div className="absolute inset-0 grain" />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          label="Membership"
          title={`CHOOSE YOUR\nCOMMITMENT`}
          subtitle="Select the plan that fits your training goals. All memberships include full facility access."
          align="center"
        />

        {/* Plans */}
        <div ref={ref} className="grid md:grid-cols-3 gap-1 mb-20">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className={`relative p-8 lg:p-10 border transition-all duration-500 group hover:border-accent/30 ${
                plan.popular
                  ? 'bg-void border-accent/40 lg:scale-105 lg:z-10'
                  : 'bg-void/50 border-white/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-px left-0 right-0 h-1 bg-accent" />
              )}
              {plan.popular && (
                <span className="absolute top-4 right-4 text-[9px] tracking-[0.2em] uppercase bg-accent text-void px-3 py-1 font-semibold">
                  Popular
                </span>
              )}

              <div className="mb-8">
                <h3 className="font-heading text-2xl tracking-wider text-white mb-1">{plan.name}</h3>
                <p className="text-smoke text-xs tracking-wider uppercase">{plan.duration}</p>
              </div>

              <div className="mb-8">
                <div className="font-heading text-4xl lg:text-5xl text-accent tracking-wider">{plan.price}</div>
                <p className="text-smoke text-xs mt-1">{plan.priceNote}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-silver font-light">
                    <Check size={14} className="text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  const el = document.querySelector('#enquiry-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-4 text-[13px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-accent text-void hover:bg-accent-light'
                    : 'border border-white/20 text-white hover:border-accent hover:text-accent'
                }`}
              >
                Enquire Now
                <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Enquiry Form */}
        <motion.div
          id="enquiry-form"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 className="font-heading text-3xl lg:text-4xl tracking-wider text-white mb-2">START YOUR MEMBERSHIP</h3>
            <p className="text-smoke text-sm font-light">Fill in your details and we’ll get back to you with current pricing and availability.</p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 border border-accent/30 bg-void/50"
            >
              <div className="text-accent font-heading text-3xl tracking-wider mb-2">THANK YOU</div>
              <p className="text-silver text-sm">We’ll contact you shortly with membership details.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-void border border-white/10 px-5 py-4 text-sm text-ivory placeholder:text-smoke focus:border-accent focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-void border border-white/10 px-5 py-4 text-sm text-ivory placeholder:text-smoke focus:border-accent focus:outline-none transition-colors"
                />
              </div>
              <select
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                className="w-full bg-void border border-white/10 px-5 py-4 text-sm text-ivory focus:border-accent focus:outline-none transition-colors appearance-none"
              >
                <option value="" className="text-smoke">Preferred Training Program</option>
                <option value="bodybuilding">Body Building</option>
                <option value="group">Group Training</option>
                <option value="crossfit">Special CrossFit</option>
                <option value="nutrition">Diet & Nutrition</option>
                <option value="cycling">Cycling</option>
                <option value="sports">Adult Sports</option>
              </select>
              <textarea
                placeholder="Your Fitness Goal"
                rows={3}
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                className="w-full bg-void border border-white/10 px-5 py-4 text-sm text-ivory placeholder:text-smoke focus:border-accent focus:outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-light text-void py-4 text-[14px] tracking-[0.25em] uppercase font-semibold transition-colors duration-300"
              >
                Submit Enquiry
              </button>
              <p className="text-smoke text-xs text-center font-light">
                We accept Google Pay. Call us at 9962111222 for immediate assistance.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
