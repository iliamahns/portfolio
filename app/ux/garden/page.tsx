import Link from 'next/link';
import Image from 'next/image';

type InsightProps = {
  title: string;
  description: string;
};

function Insight({ title, description }: InsightProps) {
  return (
    <div className="flex-1 text-center">
      <h3 className="text-xl font-medium mb-2 text-[#31572C]">{title}</h3>
      <p className="text-[#31572C]">{description}</p>
    </div>
  );
}

export default function GardenProject() {
  return (
    <main className="min-h-screen p-8 mx-[5%] md:mx-[15%]">
      {/* Back Button */}
      <Link href="/ux" className="inline-flex items-center text-lg mb-8 hover:underline">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Projects
      </Link>

      {/* Project Header */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Garden | Floral Creation Library Concept</h1>
        <h2 className="text-2xl text-gray-600">Nurturing Your Green Space</h2>
      </div>

      {/* Project Logo/Hero */}
      <div className="mb-32 max-w-2xl mx-auto">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src="/images/projects/garden/title.png"
            alt="Garden Project"
            fill
            className="object-contain"
            quality={100}
          />
        </div>
      </div>

      {/* Project Overview */}
      <section className="mb-32 text-center">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          Garden is a platform designed to empower users to thoughtfully archive, explore, and celebrate their floral creations. 
          By offering a calm, intuitive space to organize photos, record symbolism, revisit past designs, and create inspo boards,
          this platform supports flower lovers in connecting deeper with their craft. 
          This platform becomes both a living journal and a well of inspiration, nurturing creativity and mindfulness.
        </p>

        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-medium mb-2 underline text-[#31572C]">Role</h3>
            <p className="text-[#31572C]">UX Researcher & Designer</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2 underline text-[#31572C]">Tool</h3>
            <p className="text-[#31572C]">Figma</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2 underline text-[#31572C]">Date</h3>
            <p className="text-[#31572C]">April 2025</p>
          </div>
        </div>
      </section>

      {/* Primary Research */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-6">Primary Research</h2>
        <p className="text-lg mb-12">
          The design process began with understanding the needs of floral arrangement creators, hobbyists, and enthusiasts. 
          Through user research and a competitive audit, I better understand the gaps in the market: 
          There wasn&apos;t really a platform that fully satisfied the emotional, creative, and archival needs of hobbyist flower arrangers 
          who want to express, reflect, and preserve their work - not just showcase it or sell it.
        </p>

        {/* Top Insights */}
        <div>
          <h3 className="text-2xl font-medium mb-6 text-center text-[#31572C]">Top Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Insight
              title="Consolidation"
              description="This platform aims to create a centralized digital archive that combines visuals, notes, 
              and symbolism in one gentle, intuitive space."
            />
            <Insight
              title="Simplicity"
              description="Prioritizes simplicity, peace, and intentionality over scale or virality in the UI/UX."
            />
            <Insight
              title="Reflection"
              description="Make symbolism, inspiration, and personal storytelling core parts of the user flow—like journaling with flowers."
            />
            <Insight
              title="Intentionality"
              description="Design private or semi-private sharing modes that foster connection without pressure or noise."
            />
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-6">Design Process</h2>
        <p className="text-lg mb-12">
          By creating a User Persona and User Journey Map, I could mindfully think of user needs throughout the design process.
          The User Persona of Midori, her Storyboard, and Journey Map led me to constructing the interations 
          of the Information Architecture for the platform.
          This helped create the gentle, reflective, and celebratory place for Floral Arrangement Creators.
        </p>

        {/* User Persona and Journey Map */}
        <div className="mb-12">
          <h3 className="text-2xl font-medium text-center text-[#31572C]">User Persona and User Journey Map</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 max-w-6xl mx-auto">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/projects/garden/midoripersona.png"
                alt="User Persona"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden mt-1 md:mt-0">
              <Image
                src="/images/projects/garden/gardenstoryboard.jpeg"
                alt="User Journey Map"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>
        </div>

        {/* Information Architecture */}
        <div className="mb-32">
          <h3 className="text-2xl font-medium mb-6 text-center text-[#31572C]">Information Architecture</h3>
          <div className="max-w-[90%] md:max-w-[calc(50%-1rem)] mx-auto">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/projects/garden/iag.png"
                alt="Information Architecture"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>
        </div>

        {/* Platform */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold mb-6">Platform</h2>
          <p className="text-lg mb-12">
            Starting with paper wireframes, I moved through digital wireframes, low-fidelity prototypes, into a branding sticker sheet and mockup of the platform. 
            The goal was to create a mobile-first design that would be accessible and intuitive for users.
          </p>
          
          {/* Wireframes and High-Fidelity Screens */}
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="space-y-8">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/projects/garden/lf1.png"
                  alt="Low-Fidelity Wireframe 1"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/projects/garden/lf2.png"
                  alt="Low-Fidelity Wireframe 2"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/projects/garden/hf1.png"
                  alt="High-Fidelity Screen 1"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/projects/garden/hf2.png"
                  alt="High-Fidelity Screen 2"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>
          </div>

          {/* Design System */}
          <div className="mb-16">
            <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/projects/garden/typ.png"
                  alt="Typography design"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/projects/garden/colorsss.png"
                  alt="Color palette design"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/projects/garden/iconsss.png"
                  alt="Icons design"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>
            <p className="text-right text-gray-600 italic mt-2">Design System</p>
          </div>
        </div>

        {/* Takeaways */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold mb-6 text-center">Takeaways</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-center mb-8">
              This project taught me the importance of understanding user needs in creative spaces and how to 
              design solutions that inspire and support artistic expression. The process of creating a floral 
              creation library highlighted the value of combining practical functionality with an engaging simplistic user experience.
            </p>
            <p className="text-lg text-center">
              I am grateful for the opportunity to design a platform that brings together floral enthusiasts 
              and helps them grow in their craft. This project was inspired by my mother who has begun to spend more time creating floral arrangements. 
              The insights gained from user research and testing have 
              been invaluable in creating more intuitive and inspiring platforms and I plan on launching a responsive website for Garden!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 