'use client';

import { motion } from 'framer-motion';
import AutoScrollMarquee from './AutoScrollMarquee';

export default function SkillsMarquee() {
  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'OpenAI API', icon: '🤖' },
    { name: 'LangChain', icon: '🔗' },
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '🔺' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Git', icon: '📚' },
    { name: 'Figma', icon: '🎯' },
    { name: 'Jupyter', icon: '📊' }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 overflow-hidden">
      <div className="mb-8">
        <AutoScrollMarquee speed={25} direction="left">
          <div className="flex items-center space-x-16">
            {skills.slice(0, 8).map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-500/20"
                whileHover={{ scale: 1.1, borderColor: 'rgba(255, 87, 34, 0.5)' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-white font-medium text-lg">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </AutoScrollMarquee>
      </div>
      
      <div className="mb-8">
        <AutoScrollMarquee speed={30} direction="right">
          <div className="flex items-center space-x-16">
            {skills.slice(8).map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 bg-gradient-to-r from-blue-800/30 to-purple-800/30 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-500/20"
                whileHover={{ scale: 1.1, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-white font-medium text-lg">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </AutoScrollMarquee>
      </div>
    </section>
  );
}