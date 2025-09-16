// src/components/SpaceBackground.tsx
import React, { useEffect, useRef } from 'react';
import { shouldUseSimplifiedAnimations } from '../utils/performance';

interface Star {
  x: number;
  y: number;
  size: number;
  brightness: number;
  twinkleSpeed: number;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
}

interface Satellite {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  blinkPhase: number;
}

interface Asteroid {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
}

interface SpaceDebris {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  brightness: number;
}

const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const meteorsRef = useRef<Meteor[]>([]);
  const satellitesRef = useRef<Satellite[]>([]);
  const asteroidsRef = useRef<Asteroid[]>([]);
  const debrisRef = useRef<SpaceDebris[]>([]);
  const animationRef = useRef<number>();
  
  const useSimpleAnimations = shouldUseSimplifiedAnimations();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = (): void => {
      if (!canvas) return;
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = (): void => {
      const stars: Star[] = [];
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 3000);
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 1.5,
          brightness: Math.random(),
          twinkleSpeed: 0.001 + Math.random() * 0.002
        });
      }
      
      starsRef.current = stars;
    };

    const createInitialObjects = (): void => {
      // Create initial satellites
      for (let i = 0; i < 2; i++) {
        satellitesRef.current.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: 2,
          blinkPhase: Math.random() * Math.PI * 2
        });
      }

      // Create initial asteroids
      for (let i = 0; i < 3; i++) {
        asteroidsRef.current.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: 3 + Math.random() * 4,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02
        });
      }

      // Create space debris
      for (let i = 0; i < 5; i++) {
        debrisRef.current.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: 0.5 + Math.random() * 1,
          brightness: 0.3 + Math.random() * 0.3
        });
      }
    };

    const createMeteor = (): void => {
      const meteors = meteorsRef.current;
      
      if (meteors.length < 3 && Math.random() < 0.015) {
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight * 0.5;
        const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.5;
        
        meteors.push({
          x: startX,
          y: startY,
          vx: Math.cos(angle) * 6,
          vy: Math.sin(angle) * 6,
          length: 60 + Math.random() * 60,
          opacity: 1
        });
      }
    };

    const wrapPosition = (obj: any): void => {
      const buffer = 50;
      if (obj.x < -buffer) obj.x = window.innerWidth + buffer;
      if (obj.x > window.innerWidth + buffer) obj.x = -buffer;
      if (obj.y < -buffer) obj.y = window.innerHeight + buffer;
      if (obj.y > window.innerHeight + buffer) obj.y = -buffer;
    };

    const animate = (time: number): void => {
      if (!ctx || !canvas) return;
      
      // Clear with slight trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      starsRef.current.forEach(star => {
        const twinkle = Math.sin(time * star.twinkleSpeed) * 0.5 + 0.5;
        const brightness = star.brightness * twinkle;
        
        ctx.save();
        ctx.globalAlpha = brightness;
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add subtle glow to brighter stars
        if (star.size > 1 && brightness > 0.8) {
          ctx.globalAlpha = brightness * 0.3;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      // Update and draw satellites
      satellitesRef.current.forEach(satellite => {
        satellite.x += satellite.vx;
        satellite.y += satellite.vy;
        satellite.blinkPhase += 0.05;
        wrapPosition(satellite);

        // Draw satellite
        ctx.save();
        ctx.fillStyle = '#FFFFFF';
        ctx.globalAlpha = 0.8;
        ctx.fillRect(satellite.x - satellite.size/2, satellite.y - satellite.size/2, satellite.size, satellite.size);
        
        // Blinking light
        const blink = Math.sin(satellite.blinkPhase) * 0.5 + 0.5;
        ctx.fillStyle = '#FF0000';
        ctx.globalAlpha = blink;
        ctx.beginPath();
        ctx.arc(satellite.x, satellite.y, satellite.size * 0.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Update and draw asteroids
      asteroidsRef.current.forEach(asteroid => {
        asteroid.x += asteroid.vx;
        asteroid.y += asteroid.vy;
        asteroid.rotation += asteroid.rotationSpeed;
        wrapPosition(asteroid);

        // Draw asteroid
        ctx.save();
        ctx.translate(asteroid.x, asteroid.y);
        ctx.rotate(asteroid.rotation);
        ctx.fillStyle = '#666666';
        ctx.globalAlpha = 0.6;
        
        ctx.beginPath();
        const points = 8;
        for (let i = 0; i < points; i++) {
          const angle = (i / points) * Math.PI * 2;
          const radius = asteroid.size * (0.8 + Math.sin(angle * 3) * 0.2);
          const px = Math.cos(angle) * radius;
          const py = Math.sin(angle) * radius;
          
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
        
        // Add highlight
        ctx.fillStyle = '#888888';
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.arc(-asteroid.size * 0.3, -asteroid.size * 0.3, asteroid.size * 0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Update and draw space debris
      debrisRef.current.forEach(debris => {
        debris.x += debris.vx;
        debris.y += debris.vy;
        wrapPosition(debris);

        // Draw debris as small points
        ctx.save();
        ctx.fillStyle = '#CCCCCC';
        ctx.globalAlpha = debris.brightness;
        ctx.beginPath();
        ctx.arc(debris.x, debris.y, debris.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      
      // Update and draw meteors
      meteorsRef.current = meteorsRef.current.filter(meteor => {
        meteor.x += meteor.vx;
        meteor.y += meteor.vy;
        meteor.opacity -= 0.02;
        
        if (meteor.opacity <= 0) return false;
        
        // Draw meteor trail
        const gradient = ctx.createLinearGradient(
          meteor.x, meteor.y,
          meteor.x - meteor.vx * meteor.length / 5,
          meteor.y - meteor.vy * meteor.length / 5
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`);
        gradient.addColorStop(0.3, `rgba(135, 206, 250, ${meteor.opacity * 0.8})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.save();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(
          meteor.x - meteor.vx * meteor.length / 5,
          meteor.y - meteor.vy * meteor.length / 5
        );
        ctx.stroke();
        
        // Bright head
        ctx.fillStyle = '#FFFFFF';
        ctx.globalAlpha = meteor.opacity;
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        return meteor.x < canvas.width + 100 && meteor.y < canvas.height + 100;
      });
      
      // Create new meteors
      if (!useSimpleAnimations) {
        createMeteor();
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    createStars();
    createInitialObjects();
    
    // Clear canvas initially
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Start animation
    animate(0);

    // Handle resize
    const handleResize = (): void => {
      resizeCanvas();
      createStars();
      // Keep existing moving objects
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [useSimpleAnimations]);

  return (
    <>
      {/* Canvas for stars */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0"
        style={{ 
          background: '#000'
        }}
      />
      
      {/* Very subtle nebula overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-gradient-to-br from-blue-600 via-transparent to-purple-600" />
        <div className="absolute inset-0 opacity-[0.02] bg-gradient-to-tl from-indigo-600 via-transparent to-cyan-600" />
      </div>
    </>
  );
};

export default SpaceBackground;