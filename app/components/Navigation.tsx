import HolographicButton from './HolographicButton';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-transparent py-4">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left side - Logo */}
          <Link href="/" className="cursor-pointer hover:scale-105 hover:opacity-80 ease-linear transition-transform">
            <Image
              src="/images/logo.png"
              alt="Icon"
              width={45}
              height={45}
              className="rounded-full"
            />
          </Link>

          {/* Right side - Navigation buttons */}
          <div className="flex space-x-4">
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
      </div>
    </nav>
  );
} 