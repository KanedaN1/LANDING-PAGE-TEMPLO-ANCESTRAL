import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer glass-panel">
      <div className="container footer-content">
        <div className="footer-brand">
          <img src="/images/logoreal1.png" alt="Templo Ancestral Logo" className="footer-logo" />
          <p>Elevando sua energia e transformando seu ambiente com produtos místicos de alta qualidade.</p>
        </div>
        
        <div className="footer-links">
          <h4>Links Rápidos</h4>
          <a href="#destaques">Destaques</a>
          <a href="#sobre">Nossa Essência</a>
          <a href="#catalogo">Catálogo</a>
        </div>
        
        <div className="footer-social">
          <h4>Siga-nos</h4>
          <a href="#" className="social-link">
            <Instagram size={24} />
            <span>@temploancestral</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Templo Ancestral. Todos os direitos reservados.</p>
        <p style={{ marginTop: '10px', fontSize: '0.85rem' }}>
          Desenvolvido por <a 
            href="https://portifolho-nikolas-profissional-ofi.vercel.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAS5NJJwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABpwFOZMIuPxVjlWyV4fzb0YBCnoJXt8JUapYVpcxIv-SWvz3M80mXdINtpxx3_aem_ZF1YW2a9sj5ntyaN7YoV3g" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: 'var(--color-light)', textDecoration: 'none', fontWeight: 'bold' }}
          >
            Nikolas Cardoso
          </a>
        </p>
      </div>
    </footer>
  );
}
