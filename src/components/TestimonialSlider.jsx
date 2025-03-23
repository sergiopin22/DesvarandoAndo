import React, { useState, useEffect, useRef } from 'react';
import './TestimonialSlider.css';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const slidesRef = useRef(null);
  const intervalRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      text: "Excelente servicio. Llegaron en 20 minutos y resolvieron el problema de mi batería rápidamente. Muy profesionales y amables.",
      author: "Carlos R., Cliente",
      rating: 5,
      service: "Cambio de batería"
    },
    {
      id: 2,
      text: "Increíble atención y rapidez. Me quedé varado en la autopista y en menos de 30 minutos ya estaban ahí para ayudarme con mi llanta pinchada. Definitivamente los recomendaré.",
      author: "Laura M., Cliente",
      rating: 5,
      service: "Cambio de llanta"
    },
    {
      id: 3,
      text: "Recomendado al 100%. El servicio de cambio de batería a domicilio fue muy eficiente y el precio justo. Me salvaron de quedar varado en plena madrugada.",
      author: "Andrés G., Cliente",
      rating: 5,
      service: "Batería descargada"
    },
    {
      id: 4,
      text: "Honestidad y profesionalismo es lo que caracteriza su servicio. Me explicaron exactamente qué estaba fallando en mi carro y las opciones que tenía. No intentaron venderme servicios que no necesitaba.",
      author: "Marcela T., Cliente",
      rating: 5,
      service: "Diagnóstico eléctrico"
    },
    {
      id: 5,
      text: "Los contacté porque mi carro no arrancaba en el parqueadero de mi trabajo. Llegaron rápido y arreglaron el problema en menos de una hora. Muy agradecido por su servicio.",
      author: "Juan P., Cliente",
      rating: 5,
      service: "Arranque de emergencia"
    },
    {
      id: 6,
      text: "Muy buen servicio y profesional. Tuve un problema con mi batería y ellos llegaron a tiempo, solucionaron el problema y me dieron buenos consejos para mantener la batería en buen estado.",
      author: "Patricia L., Cliente",
      rating: 5,
      service: "Mantenimiento preventivo"
    }
  ];

  // Función para pasar al siguiente slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  // Función para ir al slide anterior
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  // Función para ir a un slide específico
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  // Configurar el intervalo para el avance automático
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 1500); // Cambiar slide cada 1.5 segundos

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Pausar el avance automático cuando el usuario interactúa con el slider
  const pauseAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Reanudar el avance automático cuando el usuario deja de interactuar
  const resumeAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 1500);
  };
  
  // Manejar eventos de deslizamiento táctil
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    pauseAutoSlide();
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Deslizamiento a la izquierda (siguiente)
      nextSlide();
    }
    
    if (touchStart - touchEnd < -75) {
      // Deslizamiento a la derecha (anterior)
      prevSlide();
    }
    
    resumeAutoSlide();
  };

  // Generar estrellas para la calificación
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`testimonial-star ${index < rating ? 'active' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
      </span>
    ));
  };

  return (
    <div 
      className="testimonial-slider"
      onMouseEnter={pauseAutoSlide}
      onMouseLeave={resumeAutoSlide}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="testimonial-slider-header">
        <h2 className="section-title">Lo que dicen nuestros <span>Clientes</span></h2>
      </div>
      
      <div className="testimonial-slider-container" ref={slidesRef}>
        <div 
          className="testimonial-slides" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div className="testimonial-slide" key={testimonial.id}>
              <div className="testimonial-content">
                <div className="testimonial-quote-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                  </svg>
                </div>
                
                <div className="testimonial-service-tag">
                  {testimonial.service}
                </div>
                
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">- {testimonial.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="testimonial-controls">
        <button className="testimonial-btn prev-btn" onClick={prevSlide} aria-label="Testimonio anterior">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </button>
        
        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`testimonial-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
        
        <button className="testimonial-btn next-btn" onClick={nextSlide} aria-label="Siguiente testimonio">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
      
      <div className="testimonial-progress-bar">
        <div 
          className="testimonial-progress" 
          style={{ 
            width: `${(currentSlide + 1) / testimonials.length * 100}%`,
            transition: 'width 0.5s ease-in-out' 
          }}
        ></div>
      </div>
    </div>
  );
};

export default TestimonialSlider; 