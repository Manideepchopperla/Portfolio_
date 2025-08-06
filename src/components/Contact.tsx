import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code, ExternalLink } from 'lucide-react';
import { shouldUseSimplifiedAnimations } from '../utils/performance';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface StatusState {
  success: boolean;
  error: boolean;
  message: string;
}

interface ContactInfo {
  icon: React.ElementType;
  title: string;
  value: string;
  link: string;
  color: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
  username: string;
  color: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<StatusState>({ success: false, error: false, message: '' });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  // Check if simplified animations should be used for better performance
  const useSimpleAnimations = shouldUseSimplifiedAnimations();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new window.FormData(); // Explicitly use window.FormData
      form.append("access_key", "27e5e93f-5b5f-49dc-a460-d61eb50bc20f");
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("subject", formData.subject);
      form.append("message", formData.message);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ success: true, error: false, message: "Message sent successfully!" });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ success: false, error: true, message: "Failed to send message. Please try again." });
      }
    } catch (error) {
      setStatus({ success: false, error: true, message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo: ReadonlyArray<ContactInfo> = [
    {
      icon: Mail,
      title: 'Email',
      value: 'manideepchopperla1808@gmail.com',
      link: 'mailto:manideepchopperla1808@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '(+91) 8919155889',
      link: 'tel:+918919155889',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Srikakulam, India',
      link: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks: ReadonlyArray<SocialLink> = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/manideepchopperla/',
      icon: Linkedin,
      username: '@manideepchopperla',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Manideepchopperla',
      icon: Github,
      username: '@Manideepchopperla',
      color: 'from-gray-600 to-gray-700'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/manideep_ch/',
      icon: Code,
      username: '@manideep_ch',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  // Simplified animations for better performance
  const containerAnimation = useSimpleAnimations 
    ? { opacity: 1, y: 0 } 
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true, margin: "-50px" }
      };

  return (
    <section id="contact" className="py-10 sm:py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={useSimpleAnimations ? undefined : { opacity: 0, y: 20 }}
          whileInView={useSimpleAnimations ? undefined : { opacity: 1, y: 0 }}
          transition={useSimpleAnimations ? undefined : { duration: 0.6 }}
          viewport={useSimpleAnimations ? undefined : { once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and interesting projects. 
            Let's connect and create something amazing together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={useSimpleAnimations ? undefined : { opacity: 0, x: -20 }}
            whileInView={useSimpleAnimations ? undefined : { opacity: 1, x: 0 }}
            transition={useSimpleAnimations ? undefined : { duration: 0.6 }}
            viewport={useSimpleAnimations ? undefined : { once: true }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-gray-300 font-medium">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-300 font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-gray-300 font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-gray-300 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  ) : (
                    <Send size={18} />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {status.message && (
                  <p className={`text-center mt-4 font-medium ${status.success ? 'text-green-400' : 'text-red-400'}`}>
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Information */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-700/50">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-gray-700/30 transition-all duration-300 group"
                  >
                    <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${info.color}`}>
                      <info.icon className="text-white" size={18} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs sm:text-sm">{info.title}</div>
                      <div className="text-white text-sm sm:text-base font-medium group-hover:text-blue-400 transition-colors duration-200 break-all sm:break-normal">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-700/50">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Connect with me</h3>
              <div className="space-y-3 sm:space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-gray-700/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${social.color}`}>
                        <social.icon className="text-white" size={18} />
                      </div>
                      <div>
                        <div className="text-white text-sm sm:text-base font-medium group-hover:text-blue-400 transition-colors duration-200">
                          {social.name}
                        </div>
                        <div className="text-gray-400 text-xs sm:text-sm">{social.username}</div>
                      </div>
                    </div>
                    <ExternalLink className="text-gray-400 group-hover:text-blue-400 transition-colors duration-200" size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-700/50">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-1">24h</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Response Time</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <div className="text-xl sm:text-2xl font-bold text-green-400 mb-1">100%</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;