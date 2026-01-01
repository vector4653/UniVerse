import { useEffect } from 'react';
import { particlesConfig } from './particlesConfig';

declare global {
  interface Window {
    particlesJS: (elementId: string, config: any) => void;
  }
}

export function ParticlesBackground() {
  useEffect(() => {
    const initParticles = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', particlesConfig);
      }
    };

    // Try to initialize immediately
    if (document.readyState === 'complete') {
      initParticles();
    } else {
      // Or wait for the page to fully load
      window.addEventListener('load', initParticles);
      return () => window.removeEventListener('load', initParticles);
    }
  }, []);

  return null;
}
