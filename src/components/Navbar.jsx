import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Instagram } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="nav-content">
        <a href="#" className="logo-container">
          <img src="/images/logoreal1.png" alt="Templo Ancestral Logo" className="logo" />
          <span className="brand-name">Templo Ancestral</span>
        </a>
        
        <div className="nav-links">
          <a href="#destaques">Destaques</a>
          <a href="#sobre">Nossa Essência</a>
          <a href="#catalogo">Catálogo</a>
        </div>

        <div className="nav-actions">
          <button className="cart-btn" onClick={onOpenCart}>
            <ShoppingBag size={24} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}
