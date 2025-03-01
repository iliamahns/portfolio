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
      className="fixed inset-0 bg-[#FFF9F2] z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-10 right-10 text-black hover:opacity-70 z-10 text-xl"
      >
        ✕
      </button>

      <div 
        className="max-w-5xl w-full mx-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative w-full mb-4" style={{ aspectRatio: '16/9' }}>
          <Image
            src={image.path}
            alt={image.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
          />
        </div>
        <div className="text-black text-center px-4">
          <h2 className="text-xl font-medium">{image.title}</h2>
          <p className="text-sm mt-1 text-gray-700">{image.caption}</p>
        </div>
      </div>
    </div>
  );
} 