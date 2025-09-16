import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code, Eye } from 'lucide-react';
import { optimizeImageUrl, shouldUseSimplifiedAnimations } from '../utils/performance';


const Hero: React.FC = () => {
  const useSimpleAnimations = shouldUseSimplifiedAnimations();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/manideepchopperla/',
      icon: Linkedin,
      color: 'hover:text-blue-400',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Manideepchopperla',
      icon: Github,
      color: 'hover:text-gray-400',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/manideep_ch/',
      icon: Code,
      color: 'hover:text-yellow-400',
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Animation */}
      {!useSimpleAnimations && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-white via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                Manideep
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-blue-300 font-semibold mb-6"
            >
              Full Stack Developer | MERN Stack Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-300 mb-8 max-w-2xl"
            >
              Passionate about building real-time applications and scalable
              solutions with modern tech.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Get In Touch
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/1fg1NLMetD3Z63-TUmlGcdiSMf7Z3oL2d/view?usp=sharing"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 hover:border-indigo-500 hover:text-indigo-300 transition-all duration-300 flex items-center gap-2"
              >
                <Eye size={20} />
                Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative">
              {/* Rotating Gradient Border */}
              {!useSimpleAnimations ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 p-1"
                >
                  <div className="w-full h-full rounded-full bg-gray-900"></div>
                </motion.div>
              ) : (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-900"></div>
                </div>
              )}

              {/* Profile Image */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 p-1 hidden lg:flex">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <img 
                    src={optimizeImageUrl("https://res.cloudinary.com/dyvplq8wl/image/upload/v1754413683/WhatsApp_Image_2025-08-05_at_22.36.54_d487a54d_hrfs5d.jpg", 400)} 
                    alt="Manideep Chopperla"
                    loading="lazy"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // On error, replace with a simple color
                      const target = e.target as HTMLImageElement;
                      target.style.backgroundColor = '#1E40AF'; // Blue color as fallback
                      target.style.display = 'block';
                      target.style.width = '100%';
                      target.style.height = '100%';
                      target.onerror = null; // Prevent infinite callbacks
                      target.alt = "M"; // Simple initial as text
                    }}
                  />
                </div>
              </div>

              {/* Pulsing Background */}
              {!useSimpleAnimations ? (
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl"
                />
              ) : (
                <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl" />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
