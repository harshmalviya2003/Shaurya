'use client';

import { motion } from 'framer-motion';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export default function AutoScrollMarquee({ 
  children, 
  speed = 50, 
  direction = 'left',
  className = '' 
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-block"
        animate={{
          x: direction === 'left' ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        <div className="inline-block mr-8">
          {children}
        </div>
        <div className="inline-block mr-8">
          {children}
        </div>
        <div className="inline-block mr-8">
          {children}
        </div>
      </motion.div>
    </div>
  );
}