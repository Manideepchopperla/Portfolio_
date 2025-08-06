import React, { useEffect } from 'react';
import SpaceBackground from './components/SpaceBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Extracurricular from './components/Extracurricular';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Manideep Chopperla - Full Stack Developer';
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
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
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Certifications />
          <Extracurricular />
          <Contact />
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