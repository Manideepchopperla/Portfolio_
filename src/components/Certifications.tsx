
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';
import { link } from 'framer-motion/client';

const Certifications = () => {
  const certifications = [
    {
      title: 'React.js',
      provider: 'NxtWave',
      description: 'Comprehensive React.js certification covering components, hooks, state management, and modern React patterns.',
      date: 'Completed',
      skills: ['React Components', 'Hooks', 'State Management', 'JSX'],
      color: 'from-blue-500 to-cyan-500',
      link: 'https://certificates.ccbp.in/academy/react-js?id=NMZTDWEFUT',
      verified: true
    },
    {
      title: 'Node.js',
      provider: 'NxtWave',
      description: 'Backend development certification focusing on Node.js, Express.js, and server-side JavaScript programming.',
      date: 'Completed',
      skills: ['Node.js', 'Express.js', 'API Development', 'Server-side JS'],
      color: 'from-green-500 to-emerald-500',
      link: 'https://certificates.ccbp.in/academy/node-js?id=BHSRRLJVXK',
      verified: true
    },
    {
      title: 'JavaScript Essentials',
      provider: 'NxtWave',
      description: 'Fundamental JavaScript certification covering ES6+, DOM manipulation, async programming, and core concepts.',
      date: 'Completed',
      skills: ['ES6+', 'DOM Manipulation', 'Async/Await', 'Core JS'],
      color: 'from-yellow-500 to-orange-500',
      link: 'https://certificates.ccbp.in/academy/javascript-essentials?id=CHJRZHNXTE',
      verified: true
    },
    {
      title: 'Developer Foundations',
      provider: 'NxtWave',
      description: 'Foundation certification covering programming fundamentals, version control, and software development principles.',
      date: 'Completed',
      skills: ['Programming Basics', 'Version Control', 'Development Principles', 'Problem Solving'],
      color: 'from-purple-500 to-pink-500',
      link: 'https://certificates.ccbp.in/academy/developer-foundations?id=NZIVRMFTSY',
      verified: true
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
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Professional certifications that validate my expertise in modern web development 
            technologies and best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateY: 5, scale: 1.02 }}
              className="group perspective-1000"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 overflow-hidden h-full transform-gpu">
                {/* Certificate Header */}
                <div className={`bg-gradient-to-r ${cert.color} p-6 relative`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                        <Award className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{cert.title}</h3>
                        <p className="text-white/90 font-medium">{cert.provider}</p>
                      </div>
                    </div>
                    
                    {cert.verified && (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1"
                      >
                        <CheckCircle className="text-white" size={18} />
                        <span className="text-white text-sm font-semibold">Verified</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-full h-full border-4 border-white rounded-full"
                    ></motion.div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Skills Covered</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-gray-300"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color}`}></div>
                          <span className="text-sm">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      Status: <span className="text-green-400 font-semibold">{cert.date}</span>
                    </div>
                    
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 cursor-pointer transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">View Certificate</span>
                    </motion.a>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className={`h-1 bg-gradient-to-r ${cert.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Certification Overview</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
                <div className="text-gray-300 text-sm">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-300 text-sm">Completion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">1</div>
                <div className="text-gray-300 text-sm">Provider</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;