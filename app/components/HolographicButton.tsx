'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface HolographicButtonProps {
  href: string;
  text: string;
  imagePath: string;
  size?: 'sm' | 'lg';
}

export default function HolographicButton({ href, text, imagePath, size = 'lg' }: HolographicButtonProps) {
  const pathname = usePathname();
  const isCurrentPage = pathname === href;
  const dimensions = size === 'lg' ? 'w-40 h-40' : 'w-14 h-14';
  const textSize = size === 'lg' ? 'text-2xl' : 'text-xs';
  
  return (
    <Link href={href} className="group relative">
      <div className={`${dimensions} rounded-full overflow-hidden cursor-pointer ${!isCurrentPage ? 'hover:scale-105 hover:opacity-80 hover:shadow-lg' : ''} ease-linear transition-transform relative ${isCurrentPage ? 'opacity-60' : ''}`}>
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <Image
            src={imagePath}
            alt={`${text} button background`}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className={`absolute inset-0 flex items-center justify-center ${textSize} font-bold text-black rounded-full`}>
          {text}
        </div>
      </div>
    </Link>
  );
} 