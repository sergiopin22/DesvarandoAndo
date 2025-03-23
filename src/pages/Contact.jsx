import { useState } from 'react';
import './Pages.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se implementaría la lógica para enviar el formulario
    // Por ahora, solo mostraremos un alerta
    alert('Gracias por contactarnos. Te llamaremos pronto.');
    setFormData({
      name: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Información de Contacto</h2>
              <p>Estamos disponibles 24/7 para asistirte en cualquier emergencia vehicular en Bogotá.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📱</div>
                  <div className="method-details">
                    <h3>Teléfono</h3>
                    <p className='contact-link'><a href="tel:3215139301">321 513 9301</a></p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">💬</div>
                  <div className="method-details">
                    <h3>WhatsApp</h3>
                    <p><a href="https://wa.me/573215139301" target="_blank" rel="noopener noreferrer">321 513 9301</a></p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">🕒</div>
                  <div className="method-details">
                    <h3>Horario</h3>
                    <p>Servicio 24 horas, 7 días a la semana</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-details">
                    <h3>Cobertura</h3>
                    <p>Bogotá y sus alrededores</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2>Solicita Nuestros Servicios</h2>
              <p>Completa el formulario y te contactaremos a la brevedad</p>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Servicio que necesitas</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="reinicio-bateria">Reinicio de Batería</option>
                    <option value="cerrajeria">Cerrajería</option>
                    <option value="cambio-llanta">Cambio de Llanta</option>
                    <option value="paso-gasolina">Paso de Gasolina</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mensaje (opcional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary submit-btn">Enviar Solicitud</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 