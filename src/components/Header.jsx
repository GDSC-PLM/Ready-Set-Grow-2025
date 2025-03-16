"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">MyWebsite</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Services
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 text-center py-4">
          <a href="#" className="block py-2 hover:text-gray-400">
            Home
          </a>
          <a href="#" className="block py-2 hover:text-gray-400">
            About
          </a>
          <a href="#" className="block py-2 hover:text-gray-400">
            Services
          </a>
          <a href="#" className="block py-2 hover:text-gray-400">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
