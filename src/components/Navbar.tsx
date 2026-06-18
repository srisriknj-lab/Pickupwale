import React from 'react';
import { Truck, MapPin, Clock, Phone, PackageSearch } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <img src="/src/assets/images/pickupwale_modern_logo_1781799379825.jpg" alt="Pickupwale Logo" className="w-12 h-12 object-contain rounded-md shadow-sm border border-brand-blue/10" referrerPolicy="no-referrer" />
            <div className="flex flex-col pt-1">
              <span className="font-display font-extrabold text-[26px] leading-none text-brand-blue-900 tracking-tight uppercase">
                Pickup<span className="text-brand-orange">wale</span>
              </span>
              <span className="text-[10px] font-bold text-gray-500 tracking-[0.15em] uppercase mt-1">We Pickup • We Deliver</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-brand-orange font-medium transition-colors">About Us</a>
            <a href="#services" className="text-gray-600 hover:text-brand-orange font-medium transition-colors">Services</a>
            <a href="#testimonials" className="text-gray-600 hover:text-brand-orange font-medium transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-brand-orange font-medium transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="bg-brand-orange hover:bg-brand-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-brand-orange/20 flex items-center justify-center whitespace-nowrap"
            >
              Book Pickup
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
