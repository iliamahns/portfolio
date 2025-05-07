'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ART_PAGE } from '../data/art-content';

interface ImagePopupProps {
  image: {
    path: string;
    title: string;
    caption: string;
    slug?: string;
  } | null;
  onClose: () => void;
}

// Utility to get all images from all categories
function getAllImages() {
  const categoryOrder = [
    'fine_line_drawings',
    'mixed_media_collages',
    'acrylic_paintings',
    'flower_arrangements',
    'bw_film_photography',
    'digital_photography'
  ] as const;
  
  const allImages = [];
  for (const category of categoryOrder) {
    allImages.push(...ART_PAGE[category]);
  }
  return allImages;
}

export default function ImagePopup({ image, onClose }: ImagePopupProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const allImages = getAllImages();

  useEffect(() => {
    if (image) {
      if (image.slug) {
        const index = allImages.findIndex(img => img.slug === image.slug);
        if (index !== -1) {
          setCurrentImageIndex(index);
        }
      }
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [image]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!image) return null;

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <div 
      className="fixed inset-0 bg-[#FFF9F2] z-50 flex flex-col items-center justify-center p-2 sm:p-4 overflow-hidden"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-10 sm:right-10 text-black hover:opacity-70 z-10 text-3xl sm:text-4xl w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
        aria-label="Close image"
      >
        ✕
      </button>

      {/* Main Image */}
      <div 
        className="w-full mx-auto mt-16 sm:mt-0 flex-1 flex items-center justify-center px-16 sm:px-24"
        style={{ maxWidth: 'min(95vh, 64rem)' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={handlePrevious}
          className="absolute left-2 sm:left-10 text-black hover:opacity-70 z-10 text-3xl sm:text-4xl w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
          aria-label="Previous image"
        >
          ‹
        </button>

        <div 
          className="relative w-full mb-1 sm:mb-2" 
          style={{ 
            aspectRatio: '16/9',
            minHeight: '50vh',
            maxHeight: '70vh'
          }}
        >
          <Image
            src={allImages[currentImageIndex].path}
            alt={allImages[currentImageIndex].title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 95vh, 64rem"
            priority
          />
        </div>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-10 text-black hover:opacity-70 z-10 text-3xl sm:text-4xl w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      {/* Image Info */}
      <div className="text-black text-center px-2 sm:px-4 mb-24">
        <h2 className="text-lg sm:text-xl font-medium">{allImages[currentImageIndex].title}</h2>
        <p className="text-xs sm:text-sm mt-1 text-gray-700">{allImages[currentImageIndex].caption}</p>
      </div>

      {/* Thumbnail Gallery */}
      <div className="w-full overflow-x-auto pb-4 px-4 mt-auto">
        <div className="flex space-x-2 sm:space-x-4 min-w-max">
          {allImages.map((img, index) => (
            <button
              key={img.slug}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(index);
              }}
              className={`relative w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden ${
                index === currentImageIndex ? 'ring-2 ring-black' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={img.path}
                alt={img.title}
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 