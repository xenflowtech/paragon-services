import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash (anchor link), scroll to that element with header offset
    if (hash) {
      const element = document.querySelector(hash) as HTMLElement;
      if (element) {
        // Get header height to account for fixed header
        const header = document.querySelector('.header') as HTMLElement;
        const headerHeight = header ? header.offsetHeight : 80; // fallback to 80px
        
        // Add extra padding to ensure content is fully visible below header
        const extraPadding = 30; // 30px extra padding for better visibility
        
        // Calculate position with header offset
        const elementPosition = element.offsetTop - headerHeight - extraPadding;
        
        window.scrollTo({
          top: Math.max(0, elementPosition),
          behavior: 'smooth'
        });
        return;
      }
    }
    
    // Otherwise, jump to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;


