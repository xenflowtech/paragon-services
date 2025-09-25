import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoSection.css';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Add event listeners for debugging
      video.addEventListener('loadstart', () => console.log('Video loading started'));
      video.addEventListener('canplay', () => console.log('Video can play'));
      video.addEventListener('error', (e) => console.error('Video error:', e));
      
      // Try to play the video
      video.play().catch(error => {
        console.error('Video play failed:', error);
      });
    }
  }, []);

  const handleLearnMore = () => {
    navigate('/services');
  };

  return (
    <section className="video-section">
      <div className="video-container">
        <div className="hero-video">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="background-video"
            poster="/video-poster.jpg"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            <source src="/hero-video.webm" type="video/webm" />
            {/* Fallback background will show if video doesn't load */}
          </video>
        </div>
        <div className="video-overlay">
          <div className="hero-content">
            <h1>PARAGON SERVICES</h1>
            <h2>Freight Forwarding & Customs Clearance Experts</h2>
            <p>Your Trusted Partner in Customs & Freight Solutions Since 1996</p>
            <button className="cta-btn" onClick={handleLearnMore}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection; 