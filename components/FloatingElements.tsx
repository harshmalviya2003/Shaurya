'use client';

import { motion } from 'framer-motion';
import { Sparkles, Star, Zap, Heart, Code, Palette } from 'lucide-react';

export default function FloatingElements() {
  const elements = [
    { Icon: Sparkles, delay: 0, x: '10%', y: '20%' },
    { Icon: Star, delay: 2, x: '80%', y: '30%' },
    { Icon: Zap, delay: 4, x: '20%', y: '70%' },
    { Icon: Heart, delay: 1, x: '90%', y: '60%' },
    { Icon: Code, delay: 3, x: '15%', y: '50%' },
    { Icon: Palette, delay: 5, x: '75%', y: '80%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 6,
            delay: delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          <Icon className="w-6 h-6 text-orange-500/30" />
        </motion.div>
      ))}
    </div>
  );
}