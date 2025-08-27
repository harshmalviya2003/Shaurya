'use client';

import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { User } from 'lucide-react';

export default function SlackTestimonials() {
  const testimonials = [
    {
      name: 'arthur-querou',
      message: '"The AI chatbot integration was flawless! Our customer support efficiency increased by 200%."',
      author: 'Arthur Querou',
      role: 'Founder @Vibe (W14)',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'rohit-jain',
      message: '"Shourya built our recommendation engine in record time. The AI insights are game-changing!"',
      author: 'Rohit Jain',
      role: 'Co-Founder @Snife (YC W25)',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'rifath-rashid',
      message: '"The full-stack AI application exceeded our expectations. Performance is outstanding!"',
      author: 'Rifath Rashid',
      role: 'Founder @Everyday',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'aarav-patel',
      message: '"AI-powered analytics dashboard looks incredible! User engagement is through the roof."',
      author: 'Aarav Patel',
      role: 'Co-Founder @Snife (YC W25)',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'caitlin-leksana',
      message: '"The natural language processing integration is mind-blowing! Users love it."',
      author: 'Caitlin Leksana',
      role: 'Founder @Fanashi (YC S24)',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'nicholas-cosereanu',
      message: '"Shourya delivered our AI workflow automation ahead of schedule. Phenomenal work!"',
      author: 'Nicholas Cosereanu',
      role: 'Founder @Itra',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'samir-sen',
      message: '"The machine learning model accuracy is incredible! ROI exceeded our projections."',
      author: 'Samir Sen',
      role: 'CEO @Flair Lake (YC W24)',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'caitlin-hassinger',
      message: '"AI-powered content generation is revolutionary! Our team productivity skyrocketed."',
      author: 'Caitlin Hassinger',
      role: 'Content Director @Vibe (W19)',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'mathieu-rihet',
      message: '"The full-stack AI platform is a masterpiece! Scalability and performance are perfect."',
      author: 'Mathieu Rihet',
      role: 'Co-Founder @Woodfew (YC X25)',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'netsune-nomura',
      message: '"Computer vision integration is flawless! Our quality control is now 99.9% accurate."',
      author: 'Netsune Nomura',
      role: 'Country Manager @Unreal Carbon',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'manuel-rodriguez',
      message: '"The AI-powered search engine is incredible! User satisfaction increased by 150%."',
      author: 'Manuel Rodriguez Dao',
      role: 'Founder @Aulama',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'yonas-beehawred',
      message: '"Predictive analytics dashboard is a game-changer! Business insights are invaluable."',
      author: 'Yonas Beehawred',
      role: 'Co-Founder @StarSing (YC X25)',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  // Create a duplicated array for seamless scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 left-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="absolute bottom-40 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        ></motion.div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-7xl mx-auto">
          <motion.p
            className="text-orange-500 text-sm font-medium mb-4 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            AI Success Stories
          </motion.h2>
        </div>

        {/* Top Marquee: Scrolls Left */}
        <div className="relative flex overflow-hidden mb-8">
          <motion.div 
            className="flex flex-none py-4 gap-6 pr-6"
            animate={{
              x: [0, -1032] // 300px width + 24px gap = 324px per item * 3 items = 972px, but need to adjust
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
              }
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`top-${index}`}
                className="w-[300px] h-[200px] flex-shrink-0 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-gray-700/40 rounded-2xl p-6 hover:border-orange-500/60 transition-all duration-300 group relative overflow-hidden shadow-lg hover:shadow-orange-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 to-red-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <p className="text-white text-base font-medium mb-4 leading-relaxed relative z-10 line-clamp-3 overflow-hidden">
                  {testimonial.message}
                </p>
                <div className="flex items-start space-x-3 relative z-10 mt-auto">
                  <Avatar className="w-10 h-10 flex-shrink-0 shadow-md">
                    <AvatarImage src={testimonial.image} alt={testimonial.author} />
                    <AvatarFallback>
                      <User className="w-5 h-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm truncate">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-300 text-xs leading-relaxed truncate">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center animate-pulse shadow-sm">
                      <span className="text-white font-bold text-xs">AI</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Marquee: Scrolls Right */}
        <div className="relative flex overflow-hidden">
          <motion.div 
            className="flex flex-none py-4 gap-6 pr-6"
            animate={{
              x: [-1032, 0] // Reverse direction
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
              }
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`bottom-${index}`}
                className="w-[300px] h-[200px] flex-shrink-0 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-gray-700/40 rounded-2xl p-6 hover:border-orange-500/60 transition-all duration-300 group relative overflow-hidden shadow-lg hover:shadow-orange-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 to-red-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <p className="text-white text-base font-medium mb-4 leading-relaxed relative z-10 line-clamp-3 overflow-hidden">
                  {testimonial.message}
                </p>
                <div className="flex items-start space-x-3 relative z-10 mt-auto">
                  <Avatar className="w-10 h-10 flex-shrink-0 shadow-md">
                    <AvatarImage src={testimonial.image} alt={testimonial.author} />
                    <AvatarFallback>
                      <User className="w-5 h-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm truncate">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-300 text-xs leading-relaxed truncate">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center animate-pulse shadow-sm">
                      <span className="text-white font-bold text-xs">AI</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}