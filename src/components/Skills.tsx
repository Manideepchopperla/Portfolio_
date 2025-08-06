import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Server, Database, Wrench, Brain } from 'lucide-react';
import { shouldUseSimplifiedAnimations } from '../utils/performance';
import { LucideIcon } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: string;
}

const Skills: React.FC = () => {
  const useSimpleAnimations = shouldUseSimplifiedAnimations();

  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'C++', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Frontend Development',
      icon: Palette,
      skills: ['HTML', 'CSS', 'ReactJS', 'Redux Toolkit', 'Tailwind', 'Socket.IO'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['NodeJS', 'Express', 'Firebase Auth', 'Firestore'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MongoDB', 'SQL'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Developer Tools',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'Firebase', 'AWS'],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'CS Concepts',
      icon: Brain,
      skills: ['DSA', 'OOPs', 'DBMS', 'OS'],
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: useSimpleAnimations ? 0.4 : 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Technical{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: useSimpleAnimations ? 0.3 : 0.6,
                delay: useSimpleAnimations ? 0 : index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={useSimpleAnimations ? {} : { y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 h-full">
                {/* Icon Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: useSimpleAnimations ? 0 : skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      whileHover={useSimpleAnimations ? {} : { scale: 1.1 }}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Skill Count Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: useSimpleAnimations ? 0 : index * 0.1 + 0.3,
                  }}
                  viewport={{ once: true }}
                  className="mt-6 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30"
                >
                  {category.skills.length}{' '}
                  {category.skills.length === 1 ? 'Skill' : 'Skills'}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: useSimpleAnimations ? 0.4 : 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
            <span className="text-3xl font-bold text-white mr-2">20+</span>
            <span className="text-gray-300 text-lg">Technologies & Tools</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
