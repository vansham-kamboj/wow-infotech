import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PartnersSection } from './components/PartnersSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PartnersSection />
        <ServicesSection />
        <ProcessSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
