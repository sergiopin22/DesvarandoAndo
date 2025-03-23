import ServicesSection from '../components/ServicesSection';
import './Pages.css';

const Services = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Nuestros Servicios</h1>
          <p>Asistencia vehicular profesional en cualquier punto de Bogotá</p>
        </div>
      </div>
      <ServicesSection />
    </div>
  );
};

export default Services; 