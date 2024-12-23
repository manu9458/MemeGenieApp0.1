import React from 'react';
import { Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">MemeGenie</span>
          </div>
          
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">Templates</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;