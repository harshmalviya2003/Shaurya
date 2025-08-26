'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Why hire a full-time designer when I can use your service?',
      answer: 'Hiring a full-time senior designer costs over $100,000 annually, plus benefits, equipment, and management overhead. Our service gives you access to senior-level design talent at a fraction of the cost, with the flexibility to pause or cancel anytime.'
    },
    {
      question: 'Can I submit unlimited design requests?',
      answer: 'Yes! Once subscribed, you can add as many design requests to your queue as you\'d like. We\'ll work through them one by one, delivering each with unlimited revisions until you\'re 100% satisfied.'
    },
    {
      question: 'How quickly will I receive my designs?',
      answer: 'Most requests are completed within 1-3 business days on average. More complex projects may take longer, but we always communicate timelines upfront and provide daily updates on progress.'
    },
    {
      question: 'Who will be designing my requests?',
      answer: 'Your designs will be created by our team of senior designers with 5+ years of experience. Each designer has worked with startups and understands the unique needs of fast-growing companies.'
    },
    {
      question: 'How does the subscription pause feature work?',
      answer: 'You can pause your subscription at any time and resume it later. This is perfect for when you have lighter design needs or want to take a break. Your remaining time carries over when you resume.'
    },
    {
      question: 'What design tools do you use?',
      answer: 'We primarily use Figma for all design work, ensuring easy collaboration and file sharing. We also work with Adobe Creative Suite, Sketch, and other industry-standard tools as needed.'
    },
    {
      question: 'What\'s the process for requesting designs?',
      answer: 'Simply submit your request through our project management system with as much detail as possible. We\'ll ask clarifying questions if needed, then get to work. You\'ll receive regular updates and can request revisions at any time.'
    },
    {
      question: 'What if I don\'t satisfied with the designs?',
      answer: 'We offer unlimited revisions until you\'re 100% happy with the result. If for any reason you\'re not satisfied, we also offer a money-back guarantee within the first 14 days.'
    },
    {
      question: 'Are there any types of design work you do not handle?',
      answer: 'We handle most design requests including web design, mobile apps, branding, marketing materials, and more. We don\'t typically handle 3D modeling, complex animations, or print production work.'
    },
    {
      question: 'What if I have up one design request?',
      answer: 'No problem! You can submit requests one at a time or build up a queue. We work on one request at a time to ensure quality and focus, but you can always add more to your queue.'
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
            Questions are fear, answered!
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
            Book a call with Sehan
          </Button>
        </motion.div>
      </div>
    </section>
  );
}