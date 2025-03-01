'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface ImagePopupProps {
  image: {
    path: string;
    title: string;
    caption: string;
  } | null;
  onClose: () => void;
}

export default function ImagePopup({ image, onClose }: ImagePopupProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 bg-[#FFF9F2] z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-10 sm:right-10 text-black hover:opacity-70 z-10 text-xl"
      >
        ✕
      </button>

      <div 
        className="w-full mx-auto"
        style={{ maxWidth: 'min(95vh, 64rem)' }}
        onClick={e => e.stopPropagation()}
      >
        <div 
          className="relative w-full mb-2 sm:mb-4" 
          style={{ 
            aspectRatio: '16/9',
            minHeight: '70vh',
            maxHeight: '85vh'
          }}
        >
          <Image
            src={image.path}
            alt={image.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 95vh, 64rem"
          />
        </div>
        <div className="text-black text-center px-2 sm:px-4">
          <h2 className="text-lg sm:text-xl font-medium">{image.title}</h2>
          <p className="text-xs sm:text-sm mt-1 text-gray-700">{image.caption}</p>
        </div>
      </div>
    </div>
  );
} 