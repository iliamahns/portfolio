'use client';

import HolographicButton from './HolographicButton';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent py-4">
      <div className="max-w-[1400px] mx-auto px-4 pt-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center">
          <div className="w-1/3 flex justify-start">
            <span className="text-[18px] font-bold">ILIA MAHNS</span>
          </div>

          <div className="flex-1 flex justify-center">
            <Link href="/" className="cursor-pointer hover:scale-105 hover:opacity-80 ease-linear transition-transform">
              <Image
                src="/images/logo.png"
                alt="Icon"
                width={45}
                height={45}
                className="rounded-full"
              />
            </Link>
          </div>

          <div className="w-1/3 flex justify-end space-x-4">
            <HolographicButton
              href="/ux"
              text="UX"
              imagePath="/images/ux.jpg"
              size="sm"
            />
            <HolographicButton
              href="/art"
              text="Art"
              imagePath="/images/art.jpg"
              size="sm"
            />
            <HolographicButton
              href="/about"
              text="About"
              imagePath="/images/about.jpg"
              size="sm"
            />
            <HolographicButton
              href="/contact"
              text="Contact"
              imagePath="/images/contact.jpg"
              size="sm"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex sm:hidden items-center justify-between pt-4">
          <span className="text-[18px] font-bold py-2">ILIA MAHNS</span>
          
          {/* Hamburger Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
          >
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#D8E1C3] z-50 sm:hidden">
            <div className="flex flex-col items-center pt-20 px-4">
              {/* Close Button */}
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 p-2"
              >
                <div className="w-6 h-0.5 bg-black transform rotate-45 absolute"></div>
                <div className="w-6 h-0.5 bg-black transform -rotate-45 absolute"></div>
              </button>

              {/* Butterfly Logo */}
              <Link 
                href="/" 
                className="mb-8"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image
                  src="/images/logo.png"
                  alt="Icon"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </Link>

              {/* Navigation Links */}
              <div className="flex flex-col items-center space-y-4">
                <div onClick={() => setIsMenuOpen(false)}>
                  <HolographicButton
                    href="/ux"
                    text="UX"
                    imagePath="/images/ux.jpg"
                    size="sm"
                  />
                </div>
                <div onClick={() => setIsMenuOpen(false)}>
                  <HolographicButton
                    href="/art"
                    text="Art"
                    imagePath="/images/art.jpg"
                    size="sm"
                  />
                </div>
                <div onClick={() => setIsMenuOpen(false)}>
                  <HolographicButton
                    href="/about"
                    text="About"
                    imagePath="/images/about.jpg"
                    size="sm"
                  />
                </div>
                <div onClick={() => setIsMenuOpen(false)}>
                  <HolographicButton
                    href="/contact"
                    text="Contact"
                    imagePath="/images/contact.jpg"
                    size="sm"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 