'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const navigationLinks = [
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#careers' },
  ];

  const infoLinks = [
    { name: 'XL Client', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Portfolio', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold text-white mb-4">zyner</div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Unlimited designs & revisions with dedicated senior talent, daily updates, and the freedom to pause or cancel anytime for years.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>61 Montgomery St, San Francisco, CA 94104, United States</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>+1 (415) 727 5880</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>hello@zyner.co</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Info Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Info</h3>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 text-sm mb-4 sm:mb-0">
            Made with ❤️ by San Francisco | Copyright © 2025
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}