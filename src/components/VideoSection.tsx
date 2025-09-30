import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoSection.css';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoCached, setIsVideoCached] = useState(false);

  // Video caching and preloading
  useEffect(() => {
    const preloadVideo = () => {
      const video = document.createElement('video');
      video.preload = 'auto';
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      
      // Add sources
      const mp4Source = document.createElement('source');
      mp4Source.src = '/hero-video.mp4';
      mp4Source.type = 'video/mp4';
      video.appendChild(mp4Source);
      
      const webmSource = document.createElement('source');
      webmSource.src = '/hero-video.webm';
      webmSource.type = 'video/webm';
      video.appendChild(webmSource);
      
      // Cache the video
      video.addEventListener('canplaythrough', () => {
        console.log('Video cached successfully');
        setIsVideoCached(true);
        // Store in browser cache
        if ('caches' in window) {
          caches.open('video-cache').then(cache => {
            cache.add('/hero-video.mp4');
          });
        }
      });
      
      video.addEventListener('error', () => {
        console.log('Video preload failed, will load normally');
      });
      
      // Start preloading
      video.load();
    };
    
    preloadVideo();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Check if video is already cached
      if (isVideoCached) {
        console.log('Video already cached, loading instantly');
        setIsVideoLoaded(true);
      }
      
      // Add event listeners for better loading states
      video.addEventListener('loadstart', () => {
        console.log('Video loading started');
        if (!isVideoCached) {
          setIsVideoLoaded(false);
        }
      });
      
      video.addEventListener('loadeddata', () => {
        console.log('Video data loaded');
        setIsVideoLoaded(true);
      });
      
      video.addEventListener('canplay', () => {
        console.log('Video can play');
        setIsVideoLoaded(true);
      });
      
      video.addEventListener('playing', () => {
        console.log('Video is playing');
        setIsVideoPlaying(true);
      });
      
      video.addEventListener('error', (e) => {
        console.error('Video error:', e);
        setIsVideoLoaded(false);
      });
      
      // Try to play the video
      video.play().catch(error => {
        console.error('Video play failed:', error);
      });
    }
  }, [isVideoCached]);

  const handleLearnMore = () => {
    navigate('/services');
  };

  return (
    <section className="video-section">
      <div className="video-container">
        <div className="hero-video">
          {/* Loading spinner */}
          {!isVideoLoaded && (
            <div className="video-loading">
              <div className="loading-spinner"></div>
              <p>Loading video...</p>
            </div>
          )}
          
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            crossOrigin="anonymous"
            className={`background-video ${isVideoLoaded ? 'loaded' : 'loading'}`}
            poster=""
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            <source src="/hero-video.webm" type="video/webm" />
            {/* Fallback background will show if video doesn't load */}
          </video>
          
          {/* Fallback background image */}
          {!isVideoLoaded && (
            <div className="video-fallback" style={{
              background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d)',
              backgroundImage: 'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%230066cc" stop-opacity="0.3"/><stop offset="100%" stop-color="%23dc143c" stop-opacity="0.3"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23a)"/><circle cx="300" cy="200" r="50" fill="%230066cc" opacity="0.1"/><circle cx="900" cy="600" r="80" fill="%23dc143c" opacity="0.1"/><rect x="200" y="400" width="200" height="100" fill="%230066cc" opacity="0.1"/><rect x="800" y="200" width="150" height="80" fill="%23dc143c" opacity="0.1"/></svg>\')',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1
            }}></div>
          )}
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