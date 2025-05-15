
import React from 'react';
import { ShoppingCart, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <ShoppingCart className="h-8 w-8 mr-2" />
              <span className="font-bold text-2xl">MetaCart</span>
            </div>
            <p className="text-gray-300 mb-6">
              The Web3 dropshipping platform powered by the Sui blockchain.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#buyers" className="text-gray-300 hover:text-white transition-colors">For Buyers</a></li>
              <li><a href="#vendors" className="text-gray-300 hover:text-white transition-colors">For Vendors</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blockchain Explorer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-metacart-blue w-full"
              />
              <button className="bg-metacart-blue hover:bg-metacart-blue-secondary px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <div>
            © {new Date().getFullYear()} MetaCart. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            Powered by <a href="#" className="text-metacart-blue-light hover:text-white transition-colors">Sui Blockchain</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
