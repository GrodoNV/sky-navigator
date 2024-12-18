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
    <nav className="navbar">
      <div className=" navbar-container  flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-4">
        {/* Logo */}
        <div className="logo-container">
          <img src="/logo.png" alt="SkyNav Logo" className="logo w-12 h-12" />
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="menu-button md:hidden p-2 text-white focus:outline-none"
        >
          {isExpanded ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation items */}
        <div className={`nav-items flex items-center space-x-4 md:space-x-6 ${isExpanded ? 'block' : 'hidden md:flex'}`}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="nav-item md:w-16 md:h-16 rounded-full bg-transparent text-white transition-all duration-300 ease-in-out hover:-translate-y-1 flex items-center justify-center"
            >
              <item.icon size={23} />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
