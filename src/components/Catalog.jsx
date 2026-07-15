import { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

const CATALOG_ITEMS = [
  { id: 9, name: 'Incensário de Madeira com Pedra Natural', price: 25.00, image: '/images/incensomadeira.png', category: 'Incensários' },
  { id: 10, name: 'Incensário de Bambu Envernizado', price: 20.00, image: '/images/incensobambu.png', category: 'Incensários' },
  { id: 11, name: 'Lasca de Palo Santo Emantado - Calêndula', price: 25.00, image: '/images/palocalendula.png', category: 'Lascas de Palo Santo' },
  { id: 12, name: 'Lasca de Palo Santo Emantando - Jasmim', price: 25.00, image: '/images/palojasmin.png', category: 'Lascas de Palo Santo' },
  { id: 13, name: 'Lasca de Palo Santo Emantado - Rosa Pink', price: 25.00, image: '/images/palopink.png', category: 'Lascas de Palo Santo' },
  { id: 14, name: 'Lasca de Palo Santo Emantado - Rosa Amarela', price: 25.00, image: '/images/paloamarela.png', category: 'Lascas de Palo Santo' },
  { id: 15, name: 'Lasca de Palo Santo Emantado - Rosa Rubra', price: 25.00, image: '/images/palorubra.png', category: 'Lascas de Palo Santo' },
  { id: 16, name: 'Lasca de Palo Santo Emantado - Canela', price: 25.00, image: '/images/palocanela.png', category: 'Lascas de Palo Santo' },
  { id: 33, name: 'Lasca de Palo Santo', price: 15.00, image: '/images/lascasanto.png', category: 'Lascas de Palo Santo' },
  { id: 34, name: 'Lasca de Palo Santo Emantado - Rosas Vermelhas com Lavanda', price: 25.00, image: '/images/rosavermelha.png', category: 'Lascas de Palo Santo' },
  { id: 17, name: 'Incenso Artesanal de Vareta - Anis', price: 30.00, image: '/images/incensoanis.png', category: 'Incensos' },
  { id: 18, name: 'Incenso Artesanal de Vareta - Cravo', price: 30.00, image: '/images/incensocravo.png', category: 'Incensos' },
  { id: 19, name: 'Incenso Artesanal de Vareta - Lavanda', price: 30.00, image: '/images/incensolavanda.png', category: 'Incensos' },
  { id: 20, name: 'Incenso Artesanal de Vareta - Alecrim', price: 30.00, image: '/images/incensoalecrim.png', category: 'Incensos' },
  { id: 21, name: 'Incenso Artesanal de Vareta - Canela', price: 30.00, image: '/images/incensocanela.png', category: 'Incensos' },
  { id: 22, name: 'Incenso Artesanal de Vareta - Calêndula', price: 30.00, image: '/images/incensocalendula.png', category: 'Incensos' },
  { id: 23, name: 'Incenso Artesanal de Vareta - Rosa Rubra', price: 30.00, image: '/images/incensorubra.png', category: 'Incensos' },
  { id: 24, name: 'Incenso Artesanal de Vareta - Arruda', price: 30.00, image: '/images/incensoarruda.png', category: 'Incensos' },
  { id: 25, name: 'Incenso Artesanal de Vareta - Sálvia', price: 30.00, image: '/images/incensosalvia.png', category: 'Incensos' },
  { id: 26, name: 'Incenso Artesanal de Vareta - Rosas Vermelhas', price: 30.00, image: '/images/incensovermelha.png', category: 'Incensos' },
  { id: 27, name: 'Incenso Artesanal de Vareta - Rosas Vermelhas com Lavanda', price: 30.00, image: '/images/incensorosaslavanda.png', category: 'Incensos' },
  { id: 28, name: 'Incenso Artesanal de Vareta - Maria Madalena', price: 30.00, image: '/images/incensomaria.png', category: 'Incensos' },
  { id: 29, name: 'Incenso Artesanal de Vareta - Palo Santo', price: 30.00, image: '/images/incensoevelacao.png', category: 'Incensos' },
  { id: 30, name: 'Incenso Artesanal em Pó (consulte a disponibilidade)', price: 10.00, image: '/images/incensopo.png', category: 'Incenso Artesanal em Pó' },
  { id: 31, name: 'Incenso Artesanal de Cone (em cascata)', price: 25.00, image: '/images/incensocone.png', category: 'Incenso Artesanal de Cone' },
  { id: 32, name: 'Incenso Iansã - Força de Oyá 🌪️ ⚡️', price: 30.00, image: '/images/espiritualidade.png', category: 'Espiritualidade' },
  { id: 35, name: 'Velas Emantadas (par)', price: 15.00, image: '/images/velaspar.png', category: 'Velas Emantadas' },
];

const CATEGORIES = ['Todos', 'Incensos', 'Incensários', 'Lascas de Palo Santo', 'Incenso Artesanal em Pó', 'Incenso Artesanal de Cone', 'Espiritualidade', 'Velas Emantadas'];

export default function Catalog({ onAddToCart, activeCategory = 'Todos', onCategoryChange }) {
  const [quantities, setQuantities] = useState({});

  const updateQuantity = (id, delta) => {
    setQuantities(prev => {
      const current = prev[id] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const filteredItems = activeCategory === 'Todos' 
    ? CATALOG_ITEMS 
    : CATALOG_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="catalogo" className="catalog-section">
      <div className="container">
        <h2 className="section-title">Nosso Catálogo</h2>
        
        <div className="category-filters" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`btn-category ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => onCategoryChange?.(cat)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                border: '1px solid var(--primary)',
                background: activeCategory === cat ? 'var(--primary)' : 'transparent',
                color: activeCategory === cat ? '#fff' : 'var(--primary)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="catalog-grid">
          {filteredItems.map(item => {
            const qty = quantities[item.id] || 1;
            return (
              <div key={item.id} className="catalog-card glass-panel">
                <img src={item.image} alt={item.name} className="catalog-img" />
                <div className="catalog-info">
                  <h3>{item.name}</h3>
                  <span className="price">R$ {item.price.toFixed(2).replace('.', ',')}</span>
                  
                  <div className="catalog-actions">
                    <div className="qty-selector">
                      <button onClick={() => updateQuantity(item.id, -1)}><Minus size={16}/></button>
                      <span>{qty}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}><Plus size={16}/></button>
                    </div>
                    <button 
                      className="btn-primary btn-add" 
                      onClick={() => onAddToCart({ ...item, quantity: qty })}
                    >
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
