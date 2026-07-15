import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import AboutUs from './components/AboutUs';
import Categories from './components/Categories';
import Catalog from './components/Catalog';
import Reels from './components/Reels';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import WhatsAppButton from './components/WhatsAppButton';
import './index.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Todos');

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      }
      return [...prev, product];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app">
      <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      <Hero />
      <Featured onSelectCategory={(cat) => {
        setActiveCategory(cat);
        document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
      }} />
      <AboutUs />
      <Categories onSelectCategory={(cat) => {
        setActiveCategory(cat);
        document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
      }} />
      <Catalog 
        onAddToCart={handleAddToCart} 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      <Reels />
      <VisitUs />
      <Footer />
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
      <WhatsAppButton />
    </div>
  );
}

export default App;
