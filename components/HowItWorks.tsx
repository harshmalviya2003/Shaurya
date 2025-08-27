'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { RefreshCw, FileText, Rocket } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: RefreshCw,
      title: 'Subscribe & Request',
      description: 'Subscribe to a plan & enjoy unlimited design requests.',
    },
    {
      icon: FileText,
      title: 'Receive & Revisions',
      description: 'Receive your design within 1-3 days on average & revise until you\'re 100% satisfied!',
    },
    {
      icon: Rocket,
      title: 'Focus & build!',
      description: 'Focus on your startup while we get all the creative work done.',
    },
  ];

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]); // Subtle fade for depth

  return (
    <motion.section
      id="how-it-works"
      className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
      style={{ opacity }} // Parallax-like fade on scroll
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="absolute bottom-40 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        ></motion.div>
        {/* Subtle grid pattern for advanced texture */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"
          animate={{ backgroundPosition: ['0px 0px', '50px 50px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            className="text-orange-500 text-sm font-medium mb-4 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            How it works
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Top-notch Designs,<br />
            Simplified Process
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A simple process leads to satisfaction.
          </motion.p>
        </div>

        {/* Steps with Integrated Connecting Lines */}
        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Connecting Lines (hidden on mobile for simplicity) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-y-1/2 z-0" />
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative text-center group bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 shadow-lg hover:shadow-orange-500/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                {index + 1}
              </div>

              {/* Icon */}
              <motion.div
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center border border-gray-600 group-hover:border-orange-500 transition-all duration-300 relative overflow-hidden"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8, type: 'spring' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-red-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <step.icon className="w-10 h-10 text-orange-500 relative z-10" strokeWidth={1.5} />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-xs mx-auto">{step.description}</p>

              {/* Ping Effect */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/30 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Avatar className="w-6 h-6 mr-3 relative z-10">
              <AvatarImage src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" alt="Sehan" />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <span className="relative z-10">Book a call with Sehan</span>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
