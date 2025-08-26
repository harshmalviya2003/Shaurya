'use client';

import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { User } from 'lucide-react';

export default function SlackTestimonials() {
  const testimonials = [
    {
      name: 'lodego',
      message: '"Kudos to the whole team for such a quick turnaround!"',
      author: 'Arthur',
      role: 'Founder @Querou',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'low Sen',
      message: '"Really nice job with the Web UI, it looks great, thanks for getting it done so quickly!"',
      author: 'Rohit Jain',
      role: 'Co-founder @Strike (YC W25)',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'test',
      message: '"The wave is too good, don\'t share it with your other clients 😊"',
      author: 'Rifath Rashid',
      role: 'Founder @Everyday',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'test2',
      message: '"Web UI is looking really good!"',
      author: 'Aarav Patel',
      role: 'Co-founder @Strike (YC W25)',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'test3',
      message: '"Slides are looking 💯💯💯"',
      author: 'Samir Sen',
      role: 'CEO @First Labs (YC W)',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'test4',
      message: '"I love that! PERFECT! 😍"',
      author: 'Nicholas Cosereanu',
      role: 'Founder @Itra',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'test5',
      message: '"The video is great and story line 👌🔥"',
      author: 'Samir Sen',
      role: 'CEO @First Labs (YC W24)',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'test6',
      message: '"I love it! 💖"',
      author: 'Caitlin Hassinger',
      role: 'Content Director @Vibe (YC W14)',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'test7',
      message: '"10/10 🤯"',
      author: 'Rifath Rashid',
      role: 'Founder @Everyday',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'test8',
      message: '"Amazing, as always! 😍"',
      author: 'Caitlin Leksana',
      role: 'Founder @Fireshift (YC S24)',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'test9',
      message: '"I love this! 🔥"',
      author: 'Nicholas',
      role: 'Founder',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'zymer',
      message: '"PHENOMENAL! I love them!"',
      author: 'Mathieu Rihet',
      role: 'Co-Founder @Nocoflow (YC X25)',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'test10',
      message: '"Thank you for creating such a beautiful design"',
      author: 'Natsune Nomura',
      role: 'Country Manager @Unravel Carbon',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'test11',
      message: '"Pitchdeck looks great!"',
      author: 'Manuel Rodriguez Dao',
      role: 'Founder @Afrena',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'test12',
      message: '"UI looks amazing!"',
      author: 'Younas Beshawred',
      role: 'Co-Founder @SanGig (YC S25)',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'test13',
      message: '"Just Awesome!"',
      author: 'James O\'Dwyer',
      role: 'Co-Founder @Metal',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
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
            Love on Slack
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Message */}
              <p className="text-white text-lg font-medium mb-6 leading-relaxed relative z-10">
                {testimonial.message}
              </p>

              {/* Author Info */}
              <div className="flex items-start space-x-3 relative z-10">
                <Avatar className="w-12 h-12 flex-shrink-0">
                  <AvatarImage src={testimonial.image} alt={testimonial.author} />
                  <AvatarFallback>
                    <User className="w-6 h-6" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold text-sm truncate">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {testimonial.role}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center animate-pulse">
                    <span className="text-white font-bold text-xs">Y</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}