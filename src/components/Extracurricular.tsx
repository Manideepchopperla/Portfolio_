
import { motion } from 'framer-motion';
import { Users, Calendar, Trophy, Target } from 'lucide-react';

const Extracurricular = () => {
  const activities = [
    {
      title: 'Console Hack - Event Coordinator',
      date: 'April 2024',
      description: 'Led the coordination of a competitive coding event, managing logistics, participant engagement, and ensuring smooth execution of programming challenges.',
      role: 'Event Coordinator',
      responsibilities: [
        'Managed event logistics and coordination',
        'Facilitated participant engagement and communication',
        'Organized competitive programming challenges',
        'Coordinated with technical teams and sponsors'
      ],
      skills: ['Leadership', 'Event Management', 'Team Coordination', 'Communication'],
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      participants: '100+',
      duration: '2 days'
    }
  ];

  const highlights = [
    {
      title: 'Leadership',
      description: 'Successfully led a team in organizing a major coding event',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Event Management',
      description: 'Coordinated logistics for 100+ participants across 3 days',
      icon: Calendar,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Problem Solving',
      description: 'Resolved real-time challenges during event execution',
      icon: Target,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Team Building',
      description: 'Built and managed cross-functional teams effectively',
      icon: Trophy,
      color: 'from-purple-500 to-pink-500'
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
            Extracurricular <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Activities</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Beyond coding, I actively participate in leadership roles and community events, 
            developing soft skills and contributing to the tech community.
          </p>
        </motion.div>

        {/* Main Activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${activity.color} p-8`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center gap-4 mb-4 lg:mb-0">
                    <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                      <activity.icon className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{activity.title}</h3>
                      <div className="flex items-center gap-4 text-white/90">
                        <div className="flex items-center gap-2">
                          <Calendar size={18} />
                          <span className="font-medium">{activity.date}</span>
                        </div>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                          {activity.role}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">{activity.participants}</div>
                      <div className="text-white/80 text-sm">Participants</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{activity.duration}</div>
                      <div className="text-white/80 text-sm">Duration</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {activity.description}
                </p>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Target className="text-purple-400" size={20} />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {activity.responsibilities.map((responsibility, respIndex) => (
                        <motion.li
                          key={respIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: respIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Gained */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Skills Developed</h4>
                    <div className="flex flex-wrap gap-3">
                      {activity.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-200"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Key <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Highlights</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center h-full">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${highlight.color} mb-4`}>
                    <highlight.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in <span className="text-purple-400">Collaboration?</span>
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always open to new opportunities for leadership, event coordination, and community involvement.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <Users size={18} />
              Let's Connect
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Extracurricular;