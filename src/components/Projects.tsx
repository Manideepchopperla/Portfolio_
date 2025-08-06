import { motion } from 'framer-motion';
import { ExternalLink, Github, Play} from 'lucide-react';

const Projects = () => {
const projects = [
  {
    title: 'Collaborative Task Manager',
    description: 'Real-time drag-drop task management system built with MERN stack and Socket.IO for seamless team collaboration.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Express'],
    liveLink: 'https://to-do-board-beta.vercel.app/',
    githubLink: 'https://github.com/Manideepchopperla/Collaborative-Kanban-Board',
    color: 'from-blue-500 to-cyan-500',
    features: ['Real-time collaboration', 'Drag & drop functionality', 'Conflict Resolution', 'Task management'],
    icon: Play
  },
  {
    title: 'FarmFresh',
    description: 'Farm-to-buyer marketplace with role-based access control, integrated Stripe payments, and comprehensive product management.',
    image: 'https://images.unsplash.com/photo-1657288649124-b80bdee3c17e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnJlc2glMjBwcm9kdWNlJTJGbWFya2V0JTIwc3R5bGUlMjBmb29kcyUyQyUyMGZhcm0lMjBmcmVzaCUyMGZlZWx8ZW58MHx8MHx8fDA%3D', 
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
    liveLink: 'https://farmfresh-9p24.onrender.com/',
    githubLink: 'https://github.com/Manideepchopperla/FarmFresh',
    color: 'from-green-500 to-emerald-500',
    features: ['Stripe integration', 'Role-based access', 'Product catalog', 'Order management'],
    icon: Play
  },
  {
    title: 'Hostel Attendance System',
    description: 'QR-based check-in system with admin dashboards, automated reporting using Chart.js, and cron job scheduling.',
    image: 'https://cdn.prod.website-files.com/6209ea9aee1f965d7fce7c19/649589c64efdd0ac728ff65b_gh-angle-adult-holding-smartphone-1.webp', 
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Cron'],
    liveLink: 'https://hostel-attendence-system.onrender.com/',
    githubLink: 'https://github.com/Manideepchopperla/Hostel-Attendence-System',
    color: 'from-purple-500 to-pink-500',
    features: ['QR code scanning', 'Admin dashboard', 'Automated reports', 'Analytics visualization'],
    icon: Play
  },
  {
    title: 'Project Cost Tracker',
    description: 'A minimal yet powerful React-based web app that helps users manage and track project expenses efficiently.',
    image: 'https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&fit=crop&w=800&q=80',
    technologies: ['React', 'Firebase', 'Redux'],
    liveLink: 'https://project-cost-tracker-beryl.vercel.app/',
    githubLink: 'https://github.com/Manideepchopperla/Project-Cost-Tracker',
    color: 'from-green-600 to-emerald-600',
    features: ['Expense tracking', 'Budget management', 'Real-time updates', 'Firebase integration'],
    icon: Play
  },
  {
    title: 'NetflixGPT',
    description: 'An AI-driven movie recommendation platform using ReactJS and Gemini API.',
    image: 'https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VFYlMjBkaXNwbGF5aW5nJTIwYSUyMG1vdmllJTJGc2VyaWVzJTJDJTIwTmV0ZmxpeCUyMHdhdGNoaW5nfGVufDB8fDB8fHww', 
    technologies: ['ReactJS', 'Firebase', 'Redux', 'Gemini API', 'TMDB API'],
    liveLink: 'https://netflix-gpt-neon-rho.vercel.app/',
    githubLink: 'https://github.com/Manideepchopperla/Netflix_GPT',
    color: 'from-orange-600 to-red-600',
    features: ['AI recommendations', 'Movie search', 'User authentication', 'API integration'],
    icon: Play
  },
  // {
  //   title: 'NxtWatch Video Platform',
  //   description: 'A dynamic video streaming platform that fetches video content using RESTful APIs.',
  //   image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80', // Video streaming concept
  //   technologies: ['ReactJs', 'RestFul API', 'Context API'],
  //   liveLink: 'https://nxtwatchs200456.ccbp.tech/',
  //   githubLink: 'https://github.com/Manideepchopperla/NxtWatch',
  //   color: 'from-indigo-600 to-purple-600',
  //   features: ['Video streaming', 'RESTful APIs', 'Context management', 'Dynamic content'],
  //   icon: Play
  // }
];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, 
            real-time applications, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  
                  {/* Overlay Links */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-blue-500/90 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                      <project.icon size={18} />
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-gray-900/90 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                    >
                      <Github size={18} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`}></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6 flex-grow">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
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

                  {/* Action Buttons - Now at bottom */}
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Manideepchopperla"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500/10 transition-all duration-300"
          >
            <Github size={20} />
            View More Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;