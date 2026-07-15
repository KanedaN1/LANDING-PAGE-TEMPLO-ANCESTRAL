import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const WHATSAPP_NUMBER = "5513996972590";
  
  return (
    <a 
      href={`https://wa.me/${WHATSAPP_NUMBER}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-float bounce"
    >
      <MessageCircle size={32} />
    </a>
  );
}
