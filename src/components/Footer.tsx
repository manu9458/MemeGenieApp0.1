import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">MemeGenie</h3>
            <p className="text-gray-600 text-sm">
              Transform your ideas into hilarious memes instantly with AI-powered creativity.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Templates</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} MemeGenie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;