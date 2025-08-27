'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Quote, Star } from 'lucide-react';

export default function TestimonialQuote() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]); // Subtle fade for parallax depth
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]); // Slight zoom out on scroll

  const quoteWords = '"Shourya transformed our business with AI integration that increased our efficiency by 300%. His full-stack expertise and AI knowledge are unmatched!"'.split(' ');

  return (
    <motion.section
      className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
      style={{ opacity, scale }} // Parallax effects
    >
      {/* Enhanced Background Elements with animations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-112 h-112 bg-orange-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-20 w-112 h-112 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        ></motion.div>
        {/* Subtle particle sparkles for advanced vibe */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center bg-gray-800/20 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-gray-700/30 shadow-2xl shadow-orange-500/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(249, 115, 22, 0.2)' }}
        >
          {/* Quote Icon with glow */}
          <motion.div
            className="mb-8 relative"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Quote className="w-16 h-16 text-orange-500/50 mx-auto drop-shadow-md" />
            <div className="absolute inset-0 animate-pulse opacity-30 blur-md">
              <Quote className="w-16 h-16 text-orange-500 mx-auto" />
            </div>
          </motion.div>

          {/* Quote Text with staggered word animation and gradient */}
          <motion.blockquote
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-12 leading-tight max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
              hidden: {}
            }}
          >
            {quoteWords.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-1"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.blockquote>

          {/* Author with rating and hover effects */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Avatar className="w-16 h-16 shadow-lg hover:scale-110 transition-transform duration-300">
              <AvatarImage src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" alt="Rajesh Kumar" />
              <AvatarFallback>RK</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-4 mb-2">
                <h4 className="text-xl font-bold text-white">Rajesh Kumar</h4>
                <span className="text-gray-400">—</span>
                <span className="text-gray-300">CTO</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center shadow-sm">
                    <span className="text-white font-bold text-sm">T</span>
                  </div>
                  <span className="text-gray-300 text-sm">TechCorp</span>
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <span className="text-gray-400 text-sm">(Fintech)</span>
              </div>
            </div>
            {/* Added Rating */}
            <div className="flex items-center space-x-1 mt-4 md:mt-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
