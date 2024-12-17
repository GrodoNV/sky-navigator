import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, HelpCircle, Info, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { icon: Home, to: '/', label: 'Home' },
    { icon: HelpCircle, to: '/faqs', label: 'FAQs' },
    { icon: Info, to: '/about', label: 'About' },
  ];

  return (
    <nav className="absolute top-7 left-20">
      <div
        className={`flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-4 max-w-[500px] mx-auto ${
          isExpanded ? 'w-full' : 'w-16 sm:w-20 md:w-24 lg:w-28'
        } transition-all duration-300 ease-in-out`}
      >
        {/* Hamburger Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute right-40 top-4 p-2 text-white focus:outline-none md:hidden"
        >
          {isExpanded ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation items */}
        <div
          className={`flex items-center justify-around w-full ${
            isExpanded ? 'block' : 'hidden md:flex'
          } space-x-4 md:space-x-6`}
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className=" md:w-16 md:h-16 rounded-full  bg-transparent text-white transition-all duration-300 ease-in-out  hover:-translate-y-1 "
            >
              <item.icon size={23} className=" transition-transform duration-300 ease-in-out" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
