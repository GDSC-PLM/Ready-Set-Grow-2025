"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Image } from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky bg-white top-0 z-50">
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <img src="/images/icons/RSG-icon.svg" alt="" />

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-12 text-black">
          <Link
            href="/"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/activities"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Activities
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Be a sponsor
          </Link>
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
        <nav className="md:hidden text-center py-4 space-y-2">
          <Link
            href="/"
            className="block hover:text-gray-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/activities"
            className="block hover:text-gray-400 transition-colors duration-300"
          >
            Activities
          </Link>
          <Link
            href="/about"
            className="block hover:text-gray-400 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="block hover:text-gray-400 transition-colors duration-300"
          >
            Be a sponsor
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
