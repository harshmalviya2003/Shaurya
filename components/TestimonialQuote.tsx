'use client';

import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

export default function TestimonialQuote() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Quote Icon */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Quote className="w-16 h-16 text-orange-500/30 mx-auto" />
          </motion.div>

          {/* Quote Text */}
          <motion.blockquote
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 leading-tight max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            "If you're a YC founder looking for high-quality, reliable design support, Zyner is the way to go!"
          </motion.blockquote>

          {/* Author */}
          <motion.div
            className="flex items-center justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" alt="Manil Lakabi" />
              <AvatarFallback>ML</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <div className="flex items-center space-x-4 mb-2">
                <h4 className="text-xl font-bold text-white">Manil Lakabi</h4>
                <span className="text-gray-400">—</span>
                <span className="text-gray-300">Co-founder</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <span className="text-gray-300 text-sm">Foundry</span>
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Y</span>
                </div>
                <span className="text-gray-400 text-sm">(F24)</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}