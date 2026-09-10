import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Experience from './components/Experience';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import CrossFitSection from './components/CrossFitSection';
import Trainers from './components/Trainers';
import Reviews from './components/Reviews';
import Membership from './components/Membership';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-void text-ivory">
      <Navigation />
      <Hero />
      <TrustStrip />
      <Experience />
      <Programs />
      <Facilities />
      <CrossFitSection />
      <Trainers />
      <Reviews />
      <Membership />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
