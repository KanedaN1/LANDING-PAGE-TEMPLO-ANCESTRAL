import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const REELS_DATA = [
  'https://www.instagram.com/reel/DX7cLq6ufrG/',
  'https://www.instagram.com/reel/DWuT-sYkTRF/',
  'https://www.instagram.com/reel/DTF7EGFEdiZ/',
  'https://www.instagram.com/reel/DTIeSbGEXs_/',
  'https://www.instagram.com/reel/DSfOrHLEZ_J/',
  'https://www.instagram.com/reel/DSdEwadkdty/',
  'https://www.instagram.com/reel/DRACiD3EexD/',
  'https://www.instagram.com/reel/DQFAZJBkS4R/'
];

export default function Reels() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 1.5 : scrollLeft + clientWidth / 1.5;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="reels-section">
      <div className="container" style={{ position: 'relative' }}>
        <h2 className="section-title">Acompanhe no Instagram</h2>
        
        <button className="carousel-btn prev-btn" onClick={() => scroll('left')}>
          <ChevronLeft size={24} />
        </button>

        <div className="reels-carousel" ref={scrollRef}>
          {REELS_DATA.map((link, index) => (
            <div key={index} className="reel-card glass-panel">
              <iframe
                src={`${link}embed`}
                width="100%"
                height="500"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          ))}
        </div>

        <button className="carousel-btn next-btn" onClick={() => scroll('right')}>
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
