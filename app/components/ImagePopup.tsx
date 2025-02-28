'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ImagePopupProps {
  image: {
    path: string;
    title: string;
    caption: string;
  } | null;
  onClose: () => void;
}

export default function ImagePopup({ image, onClose }: ImagePopupProps) {
  const router = useRouter();

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
        className="absolute top-4 right-4 text-black hover:opacity-70 z-10"
      >
        ✕
      </button>

      <div 
        className="max-w-2xl w-full"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative aspect-square w-full mb-4">
          <Image
            src={image.path}
            alt={image.title}
            fill
            className="object-contain"
          />
        </div>
        <div className="text-black">
          <h2 className="text-xl font-medium">{image.title}</h2>
          <p className="text-sm mt-1">{image.caption}</p>
        </div>
      </div>
    </div>
  );
} 