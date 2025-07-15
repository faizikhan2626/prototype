"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HamburgerIcon, CloseIcon } from "./icons/page";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow-sm py-4 px-6 w-full z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between font-bold text-lg relative">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="Company Logo"
              width={120}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Center Links - Desktop Only */}
        <div className="hidden md:flex space-x-8 mx-6">
          <Link href="/pricing" className="text-gray-700 hover:text-blue-600">
            Booking
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600">
            Services
          </Link>
        </div>

        {/* Right Buttons - Desktop Only */}
        <div className="hidden md:flex items-center">
          <Link
            href="/login"
            className="text-gray-700 hover:text-blue-600 font-medium text-lg bg-amber-300 px-5 py-2 rounded-lg transition-colors flex items-center"
          >
            <Image
              src="/logo/taxi.svg"
              alt="Taxi Icon"
              width={24}
              height={24}
              className="h-5 w-auto pr-2"
            />
            <span className="text-xs">Book Now</span>
          </Link>

          <div className="h-6 w-px bg-gray-300 mx-3"></div>

          <Link
            href="/signup"
            className="bg-white border border-black hover:bg-blue-700 text-black hover:text-white px-5 py-2 rounded-lg font-medium transition-colors flex items-center"
          >
            <Image
              src="/logo/chat.svg"
              alt="Chat Icon"
              width={24}
              height={24}
              className="h-5 w-auto pr-2"
            />
            <span className="text-xs">Chat with me</span>
          </Link>
        </div>

        {/* Hamburger - Mobile Only */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? (
              <CloseIcon className="w-6 h-6 text-gray-700" />
            ) : (
              <HamburgerIcon className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Floating Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t md:hidden z-40 animate-slide-down">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/pricing"
              className="block text-gray-700 hover:text-blue-600"
            >
              Booking
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              href="/login"
              className="flex items-center bg-amber-300 text-black px-4 py-2 rounded-md"
            >
              <Image
                src="/logo/taxi.svg"
                alt="Taxi Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <span className="text-xs">Book Now</span>
            </Link>
            <Link
              href="/signup"
              className="flex items-center border border-black text-black px-4 py-2 rounded-md"
            >
              <Image
                src="/logo/chat.svg"
                alt="Chat Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <span className="text-xs">Chat with me</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
