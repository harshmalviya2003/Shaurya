'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What AI technologies do you specialize in?',
      answer: 'I specialize in OpenAI API integration, LangChain, TensorFlow, PyTorch, and custom AI model development. I\'ve built chatbots, recommendation systems, and automated workflows for various industries.'
    },
    {
      question: 'What is your experience with full-stack development?',
      answer: 'With 5+ years of experience, I\'ve built complete applications using React, Next.js, Node.js, Python, and various databases. I handle everything from frontend UI to backend APIs and database design.'
    },
    {
      question: 'How quickly can you deliver AI integration projects?',
      answer: 'Simple AI integrations can be completed in 1-2 weeks, while complex projects typically take 4-8 weeks. I always provide detailed timelines upfront and keep you updated throughout the process.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes! I offer comprehensive support packages including AI model monitoring, performance optimization, and regular updates. I also provide training for your team to manage the systems.'
    },
    {
      question: 'What industries have you worked with?',
      answer: 'I\'ve worked across fintech, healthcare, e-commerce, and SaaS industries. My AI solutions have helped companies automate customer service, optimize operations, and gain data-driven insights.'
    },
    {
      question: 'Can you integrate AI with existing systems?',
      answer: 'Absolutely! I specialize in integrating AI capabilities with legacy systems, APIs, and databases. I ensure seamless integration without disrupting your current workflow.'
    },
    {
      question: 'What\'s your approach to AI project development?',
      answer: 'I follow a structured approach: requirements analysis, AI model selection, development with regular check-ins, testing, deployment, and ongoing optimization based on real-world performance.'
    },
    {
      question: 'Do you offer custom AI model training?',
      answer: 'Yes, I can train custom AI models for specific use cases when off-the-shelf solutions aren\'t sufficient. This includes data preparation, model training, and deployment.'
    },
    {
      question: 'What security measures do you implement for AI systems?',
      answer: 'I implement enterprise-grade security including data encryption, secure API endpoints, access controls, and compliance with industry standards like GDPR and HIPAA where applicable.'
    },
    {
      question: 'How do you ensure AI system reliability?',
      answer: 'I build robust error handling, monitoring, and fallback systems. All AI integrations include comprehensive testing, performance monitoring, and automated alerting for issues.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-orange-500 text-sm font-medium mb-4 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            FAQs
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everything you need to know about AI integration and development!
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-medium text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25 mb-4">
            Start Your AI Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}