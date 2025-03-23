import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <ServicesSection />
      <AboutSection />
      <FAQSection />
    </div>
  );
};

export default Home; 