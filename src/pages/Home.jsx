import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <ServicesSection />
      <AboutSection />
    </div>
  );
};

export default Home; 