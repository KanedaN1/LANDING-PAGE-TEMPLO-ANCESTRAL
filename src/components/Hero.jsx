import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById('destaques').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero-video"
      >
        <source src="/INCENSO.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      
      <div className="hero-content glass-panel">
        <h1>Transforme momentos em experiências memoráveis</h1>
        <p>Aromas que despertam sensações, fortalecem conexões e tornam cada ambiente um espaço de paz e equilíbrio.</p>
        <button className="btn-primary" onClick={scrollToProducts}>
          Conheça nossos produtos
        </button>
      </div>

      <div className="scroll-indicator" onClick={scrollToProducts}>
        <span className="scroll-text">Deslize para baixo</span>
        <ChevronDown size={24} className="bounce" />
      </div>
    </section>
  );
}
