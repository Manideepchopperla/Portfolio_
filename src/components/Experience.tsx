import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink, Code2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Intern',
      company: 'SmartBridge',
      period: 'May – July 2025',
      type: 'Internship',
      description: 'Built DocSpot, a comprehensive MERN platform for digitized doctor-patient workflows.',
      achievements: [
        'Integrated JWT authentication for secure user sessions',
        'Implemented Multer + Cloudinary for secure file uploads',
        'Developed real-time slot booking with availability synchronization',
        'Created responsive UI with modern design principles'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Cloudinary', 'Socket.IO'],
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Fixed positioning for all screen sizes */}
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-16 last:mb-0"
            >
              {/* Timeline Node - Properly centered on all screens */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 z-10"
              />

              {/* Experience Card - Properly aligned for all screen sizes */}
              <div className="flex justify-start md:justify-center">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="ml-16 md:ml-0 md:w-5/12 md:max-w-lg w-full max-w-2xl bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="text-blue-400" size={18} />
                        <span className="text-xl font-semibold text-blue-400">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white flex-shrink-0`}>
                      {exp.type}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Code2 className="text-blue-400" size={20} />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: achievementIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 text-lg mb-6">
            Interested in working together? Let's create something amazing!
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Get In Touch
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;