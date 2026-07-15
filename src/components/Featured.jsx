import { ArrowRight } from 'lucide-react';

const FEATURED_ITEMS = [
  { id: 'incensos', name: 'Incensos', image: '/images/incensos.png' },
  { id: 'palo-santos', name: 'Palo Santos', image: '/images/palosanto.png' },
  { id: 'espiritualidade', name: 'Espiritualidade', image: '/images/espiritualidade.png' },
  { id: 'velas', name: 'Velas Emantadas', image: '/images/velas.png' },
];

export default function Featured({ onSelectCategory }) {
  return (
    <section id="destaques" className="featured-section">
      <div className="container">
        <h2 className="section-title">Em Destaque</h2>
        <div className="featured-grid">
          {FEATURED_ITEMS.map(item => (
            <div 
              key={item.id} 
              className="featured-card glass-panel"
              onClick={() => onSelectCategory?.(item.name)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-image-container">
                <img src={item.image} alt={item.name} className="product-image" />
              </div>
              <div className="card-content" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <h3>{item.name}</h3>
                <div className="card-footer" style={{ justifyContent: 'center', marginTop: '1rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                    Ver Produtos <ArrowRight size={20} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
