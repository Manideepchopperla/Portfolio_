import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Target, Star, Medal } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Quantum Valley Hackathon Semi-Finalist',
      description: 'Selected as Semi-finalists at the prestigious Andhra Pradesh Quantum Valley Hackathon 2025, competing with innovative quantum computing solutions.',
      icon: Medal,
      value: 'Semi-Finalist',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-500/20',
      borderColor: 'border-indigo-500/30'
    },
    {
      title: 'LeetCode Problem Solver',
      description: 'Solved 250+ coding problems on LeetCode, demonstrating strong algorithmic thinking and problem-solving skills.',
      icon: Target,
      value: '250+',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-500/30'
    },
    {
      title: 'Academic Excellence',
      description: 'Achieved Top 3 position in academic performance during a semester, showcasing dedication to learning.',
      icon: Trophy,
      value: 'Top 3',
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30'
    },
    // {
    //   title: 'High CGPA',
    //   description: 'Maintained excellent academic performance with CGPA of 9.1 in B.Tech and 9.64 in PUC.',
    //   icon: Award,
    //   value: '9.1',
    //   color: 'from-green-500 to-emerald-500',
    //   bgColor: 'bg-green-500/20',
    //   borderColor: 'border-green-500/30'
    // },
    {
      title: 'Production Projects',
      description: 'Successfully built and deployed multiple full-stack applications with real-world impact.',
      icon: Star,
      value: '3+',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-blue-300 to-cyan-400 bg-clip-text text-transparent">Key Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A showcase of milestones and accomplishments that reflect my commitment to excellence 
            and continuous learning in software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border ${achievement.borderColor} hover:border-opacity-60 transition-all duration-500 h-full relative overflow-hidden`}>
                {/* Background Glow */}
                <div className={`absolute inset-0 ${achievement.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Content Container */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${achievement.color}`}>
                      <achievement.icon className="text-white" size={32} />
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="text-right"
                    >
                      <div className={`text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                        {achievement.value}
                      </div>
                      <div className="text-gray-400 text-sm">Achievement</div>
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {achievement.description}
                  </p>

                  {/* Decorative Elements */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex gap-2">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                          viewport={{ once: true }}
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${achievement.color}`}
                        ></motion.div>
                      ))}
                    </div>
                    
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className={`w-8 h-8 rounded-full bg-gradient-to-r ${achievement.color} opacity-20`}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Achievement Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">250+</div>
                <div className="text-gray-300 text-sm">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">9.1</div>
                <div className="text-gray-300 text-sm">Current CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
                <div className="text-gray-300 text-sm">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">Top 3</div>
                <div className="text-gray-300 text-sm">Academic Rank</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;