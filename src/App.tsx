// src/App.tsx
import React, { useEffect, lazy, Suspense } from 'react';
import SpaceBackground from './components/SpaceBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load components that aren't immediately visible
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Achievements = lazy(() => import('./components/Achievements'));
const Certifications = lazy(() => import('./components/Certifications'));
const Extracurricular = lazy(() => import('./components/Extracurricular'));
const Contact = lazy(() => import('./components/Contact'));

// Simple loading component
const LoadingFallback: React.FC = () => (
  <div className="flex justify-center items-center py-10">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Manideep Chopperla - Full Stack Developer';
    
    // Add smooth scrolling behavior - only if preferred
    if (typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
    
    // Clean up on unmount
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen relative overflow-x-hidden">
      {/* Space Background with Particles */}
      <SpaceBackground />
      
      {/* Base Background Gradient */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-gray-900 via-blue-900/30 to-purple-900/30"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<LoadingFallback />}>
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
            <Certifications />
            <Extracurricular />
            <Contact />
          </Suspense>
        </main>
        
        {/* Footer */}
        <footer className="py-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400">
                © 2025 Manideep Chopperla. This site runs on React, sparkles with Tailwind CSS, and dreams big.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Created with creativity, curiosity, and countless cups of coffee ☕❤️
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;