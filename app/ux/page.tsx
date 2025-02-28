import Image from 'next/image';
import Link from 'next/link';

export default function UX() {
  return (
    <main className="min-h-screen max-w-[1400px] mx-auto p-8">
      {/* Header Section */}
      <div className="mt-20 mb-24">
        <div className="relative">
          <h1 className="text-6xl font-bold mb-6">PROJECTS</h1>
        </div>

        <div className="relative">
          <p className="text-xl">Welcome to my UX Design Portfolio! I recently started my journey into UX Design and am excited to share my work here.</p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="group w-full">
          <Link href="/ux/ufo" className="block">
            <div className="relative aspect-square w-full mb-4 overflow-hidden bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={"/images/projects/ufo/home.png"}
                  alt={"UFO"}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
            <h2 className="text-xl font-bold mb-1">UFO</h2>
            <h3 className="text-md text-gray-600">Currency Exchange Platform</h3>
          </Link>
        </div>
      </div>
    </main>
  );
} 