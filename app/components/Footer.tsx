import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white py-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo/logo.png"
            alt="Company Logo"
            width={120}
            height={50}
            className="h-auto w-auto"
          />
        </div>

        {/* Copyright */}
        <p className="text-gray-600 text-sm text-center">
          © NurulKaiser 2025 – All rights reserved
        </p>

        {/* Links */}
        <div className="flex space-x-6">
          <Link
            href="/booking"
            className="text-gray-800 text-base font-medium hover:underline"
          >
            Booking
          </Link>
          <Link
            href="/services"
            className="text-gray-800 text-base font-medium hover:underline"
          >
            Services
          </Link>
          <Link
            href="/login"
            className="text-gray-800 text-base font-medium hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
