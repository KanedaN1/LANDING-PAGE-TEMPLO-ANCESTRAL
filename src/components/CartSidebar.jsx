import { X, Trash2 } from 'lucide-react';

export default function CartSidebar({ isOpen, onClose, cartItems, onRemove, onUpdateQuantity }) {
  const WHATSAPP_NUMBER = "5513996972590";

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    let text = `Olá Templo Ancestral! Gostaria de finalizar meu pedido:\n\n`;
    cartItems.forEach(item => {
      text += `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });
    text += `\n*Total: R$ ${total.toFixed(2).replace('.', ',')}*`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, '_blank');
  };

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`cart-sidebar glass-panel ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Sua Sacola</h2>
          <button className="btn-close" onClick={onClose}><X size={24} /></button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Sua sacola está vazia.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <span className="price">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                  <div className="qty-controls">
                    <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="btn-remove" onClick={() => onRemove(item.id)}>
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span>R$ {total.toFixed(2).replace('.', ',')}</span>
            </div>
            <button className="btn-primary btn-checkout" onClick={handleCheckout}>
              Finalizar no WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}
