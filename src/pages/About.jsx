import AboutSection from '../components/AboutSection';
import './Pages.css';

const About = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Acerca de Nosotros</h1>
          <p>Conoce más sobre nuestra empresa y experiencia en asistencia vehicular</p>
        </div>
      </div>
      <AboutSection />
      <div className="section">
        <div className="container">
          <div className="about-extra">
            <h2>¿Por qué elegirnos?</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🚗</div>
                <h3>Experiencia</h3>
                <p>5 años de experiencia en el mercado de asistencia vehicular en Bogotá, con técnicos certificados y capacitados.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⏱️</div>
                <h3>Rapidez</h3>
                <p>Llegamos a donde estés en el menor tiempo posible. Nuestra prioridad es solucionar tu emergencia lo antes posible.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💯</div>
                <h3>Calidad</h3>
                <p>Utilizamos herramientas profesionales y procedimientos adecuados para cada tipo de asistencia que realizamos.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📍</div>
                <h3>Cobertura</h3>
                <p>Servicio en toda la ciudad de Bogotá y sus alrededores. Donde sea que estés, te asistimos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 