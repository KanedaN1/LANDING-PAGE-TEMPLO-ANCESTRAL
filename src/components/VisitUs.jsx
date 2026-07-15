import { MapPin, Clock } from 'lucide-react';

export default function VisitUs() {
  return (
    <section className="visit-us-section" style={{ padding: '60px 0', background: 'var(--color-secondary)' }}>
      <div className="container">
        <div className="glass-panel" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '40px', padding: '60px 40px', borderRadius: '24px' }}>
          
          <div className="visit-logo-container" style={{ flex: '1 1 300px', textAlign: 'center' }}>
            <img 
              src="/images/logofeirarte.png" 
              alt="Feirarte Logo" 
              style={{ maxWidth: '100%', maxHeight: '250px', objectFit: 'contain' }}
            />
          </div>

          <div className="visit-info-container" style={{ flex: '1 1 400px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>Visite nosso espaço físico!</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#e0e0e0', lineHeight: '1.6' }}>
              Quer sentir os aromas e conhecer nossos produtos de pertinho? 
              Venha nos visitar na <strong>Feirarte</strong>, a feirinha artesanal de Santos. 
              Estaremos te esperando para elevar sua energia!
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Clock size={32} color="var(--color-primary)" />
                <div>
                  <strong style={{ fontSize: '1.2rem', display: 'block', color: 'var(--color-light)' }}>Horário</strong>
                  <span style={{ fontSize: '1.1rem' }}>Domingos, das 17h00 às 21h00</span>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <MapPin size={32} color="var(--color-primary)" />
                <div>
                  <strong style={{ fontSize: '1.2rem', display: 'block', color: 'var(--color-light)' }}>Localização</strong>
                  <span style={{ fontSize: '1.1rem' }}>Praça Caio Ribeiro (em frente ao Sesc) - Santos/SP</span>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/search/?api=1&query=Praça+Caio+Ribeiro+Santos+Sesc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
            >
              <MapPin size={20} /> Ver no Mapa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
