'use client';

import Image from 'next/image';
import Link from 'next/link';
import { UX_PAGE } from '../data/ux-content';

export default function UX() {
  return (
    <main className="min-h-screen max-w-[1400px] mx-auto p-8">
      {/* Header Section */}
      <div className="mt-20 mb-24">
        <div className="relative">
          <h1 className="text-6xl font-bold mb-6">{UX_PAGE.intro.title}</h1>
        </div>

        <div className="relative">
          <p className="text-xl">{UX_PAGE.intro.description}</p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="group w-full">
          <Link href="/ux/ufo" className="block">
            <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={"/images/projects/ufo/home.png"}
                  alt={"UFO"}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay with title that appears on hover */}
                <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-90 transition-opacity flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">UFO</h2>
                  <h3 className="text-lg md:text-xl text-black">Currency Exchange Platform</h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
} 