const CATEGORIES = [
  { id: 1, name: 'Incensos', image: '/images/incensos.png' },
  { id: 5, name: 'Incensários', image: '/images/incensomadeira.png' },
  { id: 6, name: 'Lascas de Palo Santo', image: '/images/palocalendula.png' },
  { id: 7, name: 'Incenso Artesanal em Pó', image: '/images/incensopo.png' },
  { id: 8, name: 'Incenso Artesanal de Cone', image: '/images/incensocone.png' },
  { id: 9, name: 'Espiritualidade', image: '/images/espiritualidade.png' },
  { id: 10, name: 'Velas Emantadas', image: '/images/velas.png' },
];

export default function Categories({ onSelectCategory }) {
  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="section-title">Categorias</h2>
        <div className="categories-scroll">
          {CATEGORIES.map(cat => (
            <div 
              key={cat.id} 
              className="category-circle-wrapper"
              onClick={() => onSelectCategory?.(cat.name)}
              style={{ cursor: 'pointer' }}
            >
              <div className="category-circle glass-panel">
                <img src={cat.image} alt={cat.name} />
              </div>
              <span className="category-name">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
