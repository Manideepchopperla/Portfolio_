// src/components/SpaceBackground.tsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { shouldUseSimplifiedAnimations } from '../utils/performance';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
}

const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const frameRateRef = useRef<number>(20); // Reduce to 20 FPS for better performance

  // Determine if we should use simple animations
  const useSimpleAnimations = shouldUseSimplifiedAnimations();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Get safe window dimensions
    const getWindowWidth = () => typeof window !== 'undefined' ? window.innerWidth : 1024;
    const getWindowHeight = () => typeof window !== 'undefined' ? window.innerHeight : 768;

    // Optimize for device capabilities
    const isMobile = getWindowWidth() < 768;
    const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    
    const resizeCanvas = (): void => {
      if (!canvas || !ctx) return;
      
      const width = getWindowWidth();
      const height = getWindowHeight();
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    const createParticles = (): void => {
      const particles: Particle[] = [];
      const width = getWindowWidth();
      const height = getWindowHeight();
      
      // Drastically reduce particle count for better performance
      const particleCount = Math.min(
        isMobile ? 8 : 15, 
        Math.floor((width * height) / 50000)
      );
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.08, // Even slower movement
          vy: (Math.random() - 0.5) * 0.08, // Even slower movement
          size: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.3 + 0.2,
          color: ['#3B82F6', '#06B6D4', '#8B5CF6', '#10B981'][Math.floor(Math.random() * 4)]
        });
      }
      particlesRef.current = particles;
    };

    const createStars = (): void => {
      const stars: Star[] = [];
      const width = getWindowWidth();
      const height = getWindowHeight();
      
      // Reduce star count
      const starCount = Math.min(
        isMobile ? 15 : 30, 
        Math.floor((width * height) / 30000)
      );
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 0.6 + 0.3,
          opacity: Math.random() * 0.4 + 0.2,
          twinkleSpeed: Math.random() * 0.002 + 0.001 // Even slower twinkling
        });
      }
      starsRef.current = stars;
    };

    const drawParticles = (time: number): void => {
      if (!ctx) return;
      
      const particles = particlesRef.current;
      const width = getWindowWidth();
      const height = getWindowHeight();
      
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        // Minimal pulsing effect
        const pulse = Math.sin(time * 0.0001 + particle.x * 0.0005) * 0.05 + 0.95;
        
        // Draw particle with no glow effect
        ctx.save();
        ctx.globalAlpha = particle.opacity * pulse;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.restore();
      });
    };

    const drawStars = (time: number): void => {
      if (!ctx) return;
      
      const stars = starsRef.current;
      
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed) * 0.1 + 0.9;
        
        ctx.save();
        ctx.globalAlpha = star.opacity * twinkle;
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    };

    // No connections for better performance

    const animate = (time: number): void => {
      if (!ctx) return;
      
      // Frame rate limiting
      const elapsed = time - lastTimeRef.current;
      if (elapsed < 1000 / frameRateRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTimeRef.current = time - (elapsed % (1000 / frameRateRef.current));
      
      // Safe dimensions
      const width = getWindowWidth();
      const height = getWindowHeight();
      
      ctx.clearRect(0, 0, width, height);
      
      drawStars(time);
      drawParticles(time);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Handle resize with debounce - use safer timeout method
    let resizeTimeout: number | undefined;
    const handleResize = (): void => {
      if (typeof window !== 'undefined') {
        if (resizeTimeout) window.clearTimeout(resizeTimeout);
        resizeTimeout = window.setTimeout(() => {
          resizeCanvas();
          createStars();
          createParticles();
        }, 300);
      }
    };

    // Safer event listener handling
    const addWindowListener = () => {
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', handleResize);
      }
    };
    
    const removeWindowListener = () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };

    addWindowListener();
    
    // Initialize canvas safely
    try {
      resizeCanvas();
      createStars();
      createParticles();
      animate(0);
    } catch (err) {
      console.error('Error initializing canvas animation:', err);
    }

    return () => {
      removeWindowListener();
      if (typeof window !== 'undefined') {
        if (resizeTimeout) window.clearTimeout(resizeTimeout);
        if (animationRef.current) {
          window.cancelAnimationFrame(animationRef.current);
        }
      }
    };
  }, [useSimpleAnimations]);

  return (
    <>
      {/* Canvas for particles and stars */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ background: 'transparent' }}
      />
      
      {/* Super simplified background elements */}
      {!useSimpleAnimations && (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.01, 1],
              opacity: [0.02, 0.04, 0.02],
            }}
            transition={{
              duration: 60, // Very slow animation
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-full blur-3xl"
          />
        </div>
      )}
    </>
  );
};

export default SpaceBackground;