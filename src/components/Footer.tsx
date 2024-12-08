import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-serif mb-4">Caldwell Land + Cattle Co.</h3>
            <p className="text-gray-400">Sweetwater, TX • Est. 1939</p>
            <p className="text-gray-400">Email: CaldwellLCCO@gmail.com</p>
            <p className="text-gray-400">Phone: (281) 725-4202</p>
          </div>
          <div className="flex justify-end">
            <a
              href="https://www.instagram.com/Caldwell.lcco/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Instagram className="w-8 h-8" />
              <span className="ml-2">@Caldwell.LCCO</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;