'use client';

import { motion } from 'framer-motion';
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

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
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
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A simple process leads to satisfaction.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl flex items-center justify-center border border-gray-700 group-hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.1, y: -10, rotateY: 15 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Icon */}
              <motion.div
                className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700 group-hover:border-orange-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <step.icon className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
              </motion.div>

              {/* Content */}
              <motion.h3
                className="text-2xl font-bold text-white mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                {step.title}
              </motion.h3>
              <motion.p
                className="text-gray-400 text-lg leading-relaxed max-w-xs mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                viewport={{ once: true }}
              >
                {step.description}
              </motion.p>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
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
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25">
            <Avatar className="w-6 h-6 mr-3">
              <AvatarImage src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" alt="Sehan" />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            Book a call with Sehan
          </Button>
        </motion.div>
      </div>
    </section>
  );
}