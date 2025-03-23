import './AboutSection.css';
import TestimonialSlider from './TestimonialSlider';
import aboutImage from '../assets/images/about-image.webp';

const AboutSection = () => {
  return (
    <>
      <section className="about-section section">
        <div className="container">
          <div className="about-header">
            <h2 className="section-title-about">Acerca de <span>Nosotros</span></h2>
            <p className="section-subtitle">5 años brindando asistencia vehicular profesional en Bogotá</p>
          </div>
          
          <div className="about-content">
            <div className="about-image">
              <div className="about-image-placeholder">
                <img src={aboutImage} alt="Equipo de desvares a domicilio" />
              </div>
            </div>
            
            <div className="about-text">
              <h3>Asistencia Vehicular <span>Confiable</span></h3>
              <p>
                En <strong>Desvarese A Domicilio Bogotá</strong> llevamos 5 años brindando servicios de asistencia vehicular a cientos de conductores diariamente en Bogotá y sus alrededores.
              </p>
              <p>
                Nuestro objetivo es proporcionar soluciones rápidas y eficientes para los problemas más comunes que enfrentan los conductores en la vía, llevando técnicos especializados directamente a donde te encuentres, ya sea en tu trabajo, hogar u otro sitio dentro de la ciudad.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="section-separator"></div>
      
      <section className="testimonials-section section">
        <div className="container">
          <TestimonialSlider />
        </div>
      </section>
    </>
  );
};

export default AboutSection; 