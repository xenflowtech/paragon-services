import React, { useEffect, useRef } from 'react';
import './ClientMarquee.css';

const ClientMarquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  
  const clients = [
    'Agritech Ltd. (Pak. American Fertilizers)', 'Al-Fattah Glass', 'Al-fattah aluminum', 
    'Noon Group', 'Blue Reeds Pakistan Pvt. Ltd.', 'Alliance Medical', 'Fuzion Healthcare', 
    'Plaspack', 'M.S.R Associates', 'Kenwood Group', 'Alpha Engineering', 
    'Global Tech Int\'l', 'Mughal Group of Industries', 'Shamim & Co.', 'Metal Farming', 
    'Pak. Therm', 'Hipra Pak. Pvt. Ltd.', 'Trirarow Export Co.'
  ];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let position = 0;
    const speed = 0.5; // pixels per frame
    
    // Wait for content to load before calculating width
    const calculateWidth = () => {
      const totalWidth = marquee.scrollWidth / 6; // Since we have 6 sets
      return totalWidth;
    };

    const animate = () => {
      const totalWidth = calculateWidth();
      position -= speed;
      if (position <= -totalWidth) {
        position = 0;
      }
      marquee.style.transform = `translate3d(${position}px, 0, 0)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation after a small delay to ensure content is loaded
    const startAnimation = () => {
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Use setTimeout to ensure DOM is ready
    const timeoutId = setTimeout(startAnimation, 100);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="client-marquee-section">
      <h2 className="client-marquee-heading">Our Trusted Clients</h2>
      <div className="marquee-container">
        <div className="marquee">
          <div className="marquee-content" ref={marqueeRef}>
            {/* Create enough duplicates for seamless circular loop */}
            {Array.from({ length: 6 }, (_, setIndex) => 
              clients.map((client, index) => (
                <div key={`set-${setIndex}-${index}`} className="client-item">
                  <span>{client}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee; 