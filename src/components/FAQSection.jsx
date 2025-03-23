import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Qué medios de pago reciben?",
      answer: "Aceptamos diversos métodos de pago para tu comodidad:",
      points: [
        "Tarjetas de crédito y débito",
        "Transferencias bancarias",
        "Efectivo",
        "Pagos móviles"
      ]
    },
    {
      question: "¿Cuánto demoran en llegar para realizar el servicio?",
      answer: "Nuestro tiempo de respuesta promedio es:",
      points: [
        "30-45 minutos en zonas centrales de Bogotá",
        "45-60 minutos en zonas periféricas",
        "Servicio prioritario disponible para emergencias"
      ]
    },
    {
      question: "¿Qué días trabajan?",
      answer: "Estamos disponibles para ayudarte:",
      points: [
        "Lunes a Sábado: 8:00 AM a 8:00 PM",
        "Domingos y festivos: Servicio de emergencia",
        "Servicio 24/7 para casos especiales"
      ]
    },
    {
      question: "¿Qué servicios de desvare ofrecen?",
      answer: "Ofrecemos una amplia gama de servicios de asistencia vehicular:",
      points: [
        "Cambio y venta de baterías a domicilio",
        "Asistencia en carretera completa",
        "Diagnóstico y solución de problemas eléctricos",
        "Servicio de grúa y remolque"
      ]
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <div className="faq-title-container">
          <h2>Preguntas Frecuentes</h2>
          <div className="faq-decoration"></div>
        </div>
        <p className="faq-subtitle">Todo lo que necesitas saber sobre nuestros servicios</p>
      </div>
      
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-card ${openIndex === index ? 'active' : ''}`}
            style={{animationDelay: `${index * 0.2}s`}}
          >
            <div 
              className="faq-question" 
              onClick={() => toggleAnswer(index)}
            >
              <div className="question-content">
                <i className="fas fa-tools question-icon"></i>
                <span className="question-text">{faq.question}</span>
              </div>
              <div className="arrow-icon">
                <i className={`fas fa-chevron-down ${openIndex === index ? 'rotate' : ''}`}></i>
              </div>
            </div>
            <div className={`faq-answer ${openIndex === index ? 'show' : ''}`}>
              <p className="answer-intro">{faq.answer}</p>
              <ul className="answer-points">
                {faq.points.map((point, pointIndex) => (
                  <li key={pointIndex} style={{animationDelay: `${pointIndex * 0.1}s`}}>
                    <i className="fas fa-check-circle"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;