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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const allImages = getAllImages();

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext({ stopPropagation: () => {} } as React.MouseEvent);
    }
    if (isRightSwipe) {
      handlePrevious({ stopPropagation: () => {} } as React.MouseEvent);
    }
  };

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
  }, [image, allImages]);

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

      {/* Main Image Container */}
      <div 
        className="w-full mx-auto mt-16 sm:mt-0 flex-1 flex flex-col items-center justify-center px-8 sm:px-12"
        style={{ maxWidth: 'min(95vh, 90vw)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="relative w-full flex-1 flex items-center justify-center">
          <button
            onClick={handlePrevious}
            className="absolute -left-12 sm:-left-24 text-black hover:opacity-70 z-10 text-3xl sm:text-4xl w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
            aria-label="Previous image"
          >
            ‹
          </button>

          <div 
            className="relative w-full" 
            style={{ 
              aspectRatio: '16/9',
              minHeight: '60vh',
              maxHeight: '95vh'
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              src={allImages[currentImageIndex].path}
              alt={allImages[currentImageIndex].title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 90vw, 90vw"
              priority
            />
          </div>

          <button
            onClick={handleNext}
            className="absolute -right-12 sm:-right-24 text-black hover:opacity-70 z-10 text-3xl sm:text-4xl w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        {/* Image Info - Now part of the main container */}
        <div className="text-black text-center px-2 sm:px-4 mt-4 mb-16 sm:mb-24">
          <h2 className="text-lg sm:text-xl font-medium">{allImages[currentImageIndex].title}</h2>
          <p className="text-xs sm:text-sm mt-1 text-gray-700">{allImages[currentImageIndex].caption}</p>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="w-full overflow-x-auto pb-1 px-1 sm:px-2">
        <div className="flex space-x-1 min-w-max">
          {allImages.map((img, index) => (
            <button
              key={img.slug}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(index);
              }}
              className={`relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 overflow-hidden ${
                index === currentImageIndex ? 'border-2 border-[#D8E1C3]' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={img.path}
                alt={img.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 48px, 56px"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 