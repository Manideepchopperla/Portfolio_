import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Rajiv Gandhi University of Knowledge Technologies, Srikakulam',
      cgpa: '9.1',
      graduation: '2026',
      icon: GraduationCap
    },
    {
      degree: 'PUC (Pre-University Course)',
      institution: 'RGUKT, Srikakulam',
      cgpa: '9.64',
      graduation: 'Completed',
      icon: Award
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-blue-300 to-cyan-400 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-80 h-80 rounded-2xl overflow-hidden border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm"
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-8xl font-bold text-white">
                  <img src="https://res.cloudinary.com/dyvplq8wl/image/upload/v1754413683/WhatsApp_Image_2025-08-05_at_22.36.54_d487a54d_hrfs5d.jpg" />
                </div>
              </motion.div>
              
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl -z-10"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Bio</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a Full Stack Developer passionate about building digital solutions. 
                I recently interned at SmartBridge and have built several production-grade 
                MERN stack applications with real-time features. I love creating scalable 
                applications that solve real-world problems and enhance user experiences.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <edu.icon className="text-blue-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                      <div className="flex items-center gap-2 text-gray-300 mb-1">
                        <MapPin size={16} />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-blue-400 font-semibold">CGPA: {edu.cgpa}</span>
                        <span className="text-gray-400">{edu.graduation}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;