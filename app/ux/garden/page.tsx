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
          There wasn't really a platform that fully satisfied the emotional, creative, and archival needs of hobbyist flower arrangers 
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
            Starting with paper wireframes, I moved through digital wireframes and low-fidelity prototypes 
            to create a mobile-first design that would be accessible and intuitive for users.
          </p>
          
          {/* Paper Wireframes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={`paper-${num}`} className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={`/images/projects/garden/lf${num}.png`}
                  alt={`Paper Wireframe ${num}`}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            ))}
          </div>

          {/* Digital Wireframes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={`digital-${num}`} className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={`/images/projects/garden/hf${num}.png`}
                  alt={`Digital Wireframe ${num}`}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Usability Testing */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold mb-6">Usability Testing</h2>
          <p className="text-lg mb-12">
            I conducted moderated usability tests with five floral design enthusiasts to gather feedback 
            on the low-fidelity prototypes. The insights gained helped refine the design and improve 
            the user experience.
          </p>

          {/* Top 3 Insights */}
          <div>
            <h3 className="text-2xl font-medium mb-6 text-center text-[#31572C]">Top 3 Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Insight
                title="1"
                description="Users wanted a more prominent search function to find specific floral arrangements."
              />
              <Insight
                title="2"
                description="The tutorial section needed clearer categorization by skill level and season."
              />
              <Insight
                title="3"
                description="The community features should include more interactive elements for feedback."
              />
            </div>
          </div>
        </section>

        {/* Hi-Fi Prototypes */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold mb-6">Hi-Fi Prototypes</h2>
          <p className="text-lg mb-12">
            Based on the usability testing feedback, I created high-fidelity prototypes that incorporated 
            the necessary improvements and maintained a cohesive design system.
          </p>

          {/* Sticker Sheet Images */}
          <div className="mb-16">
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-2 gap-0">
                <div className="flex flex-col -translate-x-8">
                  <div className="relative aspect-[4/3] scale-110">
                    <Image
                      src="/images/projects/garden/colorsss.png"
                      alt="Color palette design"
                      fill
                      className="object-contain"
                      quality={100}
                    />
                  </div>
                  <div className="relative aspect-[4/3] scale-110">
                    <Image
                      src="/images/projects/garden/typ.png"
                      alt="Typography design"
                      fill
                      className="object-contain"
                      quality={100}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="relative aspect-[4/3] scale-110">
                    <Image
                      src="/images/projects/garden/iconsss.png"
                      alt="Icons design"
                      fill
                      className="object-contain"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-right text-gray-600 italic mt-2">Design System</p>
          </div>

          {/* Hi-Fi Screens */}
          <div className="mb-16">
            <div className="relative aspect-[4/3] overflow-hidden max-w-[90%] md:max-w-[calc(75%-1rem)] mx-auto">
              <Image
                src="/images/projects/garden/hf1.png"
                alt="Hi-Fi Screen"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
            <p className="text-center text-gray-600 italic mt-4">Hi-Fi Screen</p>
          </div>
        </section>

        {/* Accessibility Considerations */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold mb-6 text-center">Accessibility Considerations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Insight
              title="Color"
              description="Utilized color blindness simulators to ensure the color palette is accessible to all users."
            />
            <Insight
              title="Text To Speech"
              description="Each icon and image includes descriptive alt text for screen readers."
            />
            <Insight
              title="Navigation"
              description="Clear and consistent navigation patterns throughout the platform."
            />
          </div>
        </div>

        {/* Takeaways */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold mb-6 text-center">Takeaways</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-center mb-8">
              This project taught me the importance of understanding user needs in creative spaces and how to 
              design solutions that inspire and support artistic expression. The process of creating a floral 
              creation library highlighted the value of combining practical functionality with an engaging user experience.
            </p>
            <p className="text-lg text-center">
              I am grateful for the opportunity to design a platform that brings together floral enthusiasts 
              and helps them grow in their craft. The insights gained from user research and testing have 
              been invaluable in creating a more intuitive and inspiring platform.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 