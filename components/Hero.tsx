'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star, Check, User, ArrowDown, Sparkles } from 'lucide-react';
import AutoScrollMarquee from './AutoScrollMarquee';

export default function Hero() {
  const testimonialAvatars = [
    { name: 'John', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
    { name: 'Sarah', image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
    { name: 'Mike', image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
    { name: 'Lisa', image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
    { name: 'Tom', image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
  ];

  const features = [
    'Dedicated Senior Talent',
    'Updates Every 24 Hours',
    'Pause or Cancel Anytime',
  ];

  const companies = [
    { name: 'Google', logo: '🔍' },
    { name: 'Microsoft', logo: '🪟' },
    { name: 'Apple', logo: '🍎' },
    { name: 'Meta', logo: '📘' },
    { name: 'Netflix', logo: '🎬' },
    { name: 'Spotify', logo: '🎵' },
    { name: 'Uber', logo: '🚗' },
    { name: 'Airbnb', logo: '🏠' },
    { name: 'Tesla', logo: '⚡' },
    { name: 'Amazon', logo: '📦' }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-ping"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Testimonials Header */}
          <motion.div
            className="flex items-center justify-center space-x-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex -space-x-2">
              {testimonialAvatars.map((avatar, index) => (
                <motion.div
                  key={avatar.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Avatar className="w-12 h-12 border-2 border-white/20">
                    <AvatarImage src={avatar.image} alt={avatar.name} />
                    <AvatarFallback>
                      <User className="w-6 h-6" />
                    </AvatarFallback>
                  </Avatar>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col items-start">
              <div className="flex space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-400 text-sm">Loved by founders worldwide</p>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creative{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Portfolio
            </span>
            {' '}& Digital{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h1>

          {/* Description */}
          <motion.div
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-xl text-gray-300 mb-6">
              Crafting beautiful digital experiences with modern design and cutting-edge technology.
              <br />
              Transforming ideas into stunning visual realities.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center space-x-2 text-gray-300 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <Check className="w-5 h-5 text-orange-500 animate-pulse" />
                <span className="text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-orange-500/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Avatar className="w-6 h-6 mr-3">
                <AvatarImage src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" alt="Sehan" />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <span className="relative z-10">Let's Work Together</span>
              <Sparkles className="w-5 h-5 ml-2 animate-spin" />
            </Button>
          </motion.div>

          {/* Trusted Companies */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p className="text-gray-400 text-lg mb-8 font-medium">
              Trusted by Industry Leaders
            </p>
            
            {/* Auto-scrolling marquee */}
            <AutoScrollMarquee speed={30} className="mb-4">
              <div className="flex items-center space-x-12">
                {companies.map((company, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-2xl">{company.logo}</span>
                    <span className="text-lg font-medium">{company.name}</span>
                  </motion.div>
                ))}
              </div>
            </AutoScrollMarquee>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-orange-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}