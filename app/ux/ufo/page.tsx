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

export default function UFOProject() {
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
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-2">UFO | Currency Exchange Platform</h1>
        <h2 className="text-2xl text-gray-600">The Currency Connection</h2>
      </div>

      {/* Project Logo/Hero */}
      <div className="mb-20 max-w-2xl mx-auto">
        <div className="relative aspect-video bg-black overflow-hidden">
          <Image
            src="/images/projects/ufo/home.png"
            alt="UFO Project"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Project Overview */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <p className="text-lg mb-12">
          This was my first UX Design project completed alongside the Google UX Design 7 course 
          program and I was tasked to build a platform that helps global travelers find current 
          exchange rates between currencies and exchange currencies. I worked on this alone as the 
          primary researcher and designer and had a blast learning Figma through this project.
        </p>

        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-medium mb-2 underline text-[#31572C]">Role</h3>
            <p className="text-[#31572C]">Primary Researcher<br />and Designer</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2 underline text-[#31572C]">Tool</h3>
            <p className="text-[#31572C]">Figma</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2 underline text-[#31572C]">Date</h3>
            <p className="text-[#31572C]">December 2024 -<br />February 2025</p>
          </div>
        </div>
      </section>

      {/* Primary Research */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6">Primary Research</h2>
        <p className="text-lg mb-12">
          Looking into other global currency exchange platforms I gained insight into the types of 
          users that I will need to design the platform for and how it would be important to include all 
          global movers such as international students and immigrant/migrant workers. As each 
          population has their own pain points, I completed a competitive audit to gain more insight 
          into shared design focuses.
        </p>

        {/* Top Insights */}
        <div>
          <h3 className="text-2xl font-medium mb-6 text-center text-[#31572C]">Top Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Insight
              title="Confidence"
              description="Being able to track predictions of currency rates in advance as well as enabling notifications of dropping rates would give users more security in the right times to transfer money."
            />
            <Insight
              title="Transparency"
              description="Hidden fees may lead to distrust of this platform and frustration of higher than anticipated fees. With this, there must be an establishment of financial transparency for transactions."
            />
            <Insight
              title="Time Efficiency"
              description="If someone is in urgent need of funds abroad, it is frustrating and may be detrimental if the funds are delayed. Thus this platform must be transparent about transaction times as well as offer quick transaction rates."
            />
            <Insight
              title="Security"
              description="Security measures must be clearly communicated so that users new to this platform can trust to send or receive different sums of money."
            />
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6">Design Process</h2>
        <p className="text-lg mb-12">
          By creating a User Persona and User Journey Map, I could mindfully think of user needs 
          throughout the design process. Then came the story boards and iterations of the 
          Information Architecture.
        </p>

        {/* User Persona and Journey Map */}
        <div className="mb-12">
          <h3 className="text-2xl font-medium text-center text-[#31572C]">User Persona and User Journey Map</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 max-w-6xl mx-auto">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/projects/ufo/rafa.png"
                alt="User Persona"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden mt-1 md:mt-0">
              <Image
                src="/images/projects/ufo/persona.png"
                alt="User Journey Map"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Storyboards */}
        <div className="mb-20">
          <h3 className="text-2xl font-medium mb-6 text-center text-[#31572C]">Storyboards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/projects/ufo/storyboard.jpeg"
                alt="Storyboard 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/projects/ufo/uxstoryboard.png"
                alt="Storyboard 2"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Information Architecture */}
        <div className="mb-20">
          <h3 className="text-2xl font-medium mb-6 text-center text-[#31572C]">Information Architecture</h3>
          <div className="max-w-[90%] md:max-w-[calc(50%-1rem)] mx-auto">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/projects/ufo/arch.png"
                alt="Information Architecture"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Platform */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold mb-6">Platform</h2>
          <p className="text-lg mb-12">
            Feeling confident about the vision of what functions this platform would showcase, I started with paper wireframes, then digital wireframes, and lo-fi prototypes.
          </p>
          
          {/* Paper Wireframes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={`paper-${num}`} className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={`/images/projects/ufo/${num}p.png`}
                  alt={`Paper Wireframe ${num}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Digital Wireframes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={`digital-${num}`} className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={`/images/projects/ufo/${num}d.png`}
                  alt={`Digital Wireframe ${num}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Usability Testing */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Usability Testing</h2>
          <p className="text-lg mb-12">
            I conducted a moderated usability test with five global travelers in my life with the lo-fi prototypes. 
            I gave the participant a task, observed click paths, behaviors, and any notable quotes about their 
            experience. I iterated the design accordingly with gained insights.
          </p>

          {/* Top 3 Insights */}
          <div>
            <h3 className="text-2xl font-medium mb-6 text-center text-[#31572C]">Top 3 Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Insight
                title="1"
                description="Based on the theme of financial balance confusion, the balance will be displayed on the homepage."
              />
              <Insight
                title="2"
                description="To counter cautiousness with the &quot;Crypto&quot; tab, investments will move into the Finances tab."
              />
              <Insight
                title="3"
                description="To make the sending money function more time efficient, the user flow will be simplified and screens will include scrolling functions."
              />
            </div>
          </div>
        </section>

        {/* Hi-Fi Prototypes */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Hi-Fi Prototypes</h2>
          <p className="text-lg mb-12">
            Feeling satisfied with the upgraded designs, I moved into making a sticker sheet and high fidelity prototyping.
          </p>

          {/* Sticker Sheet Images */}
          <div className="mb-16">
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-2 gap-0">
                <div className="flex flex-col -translate-x-8">
                  <div className="relative aspect-[4/3] scale-110">
                    <Image
                      src="/images/projects/ufo/palette.png"
                      alt="palette design"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative aspect-[4/3] scale-110">
                    <Image
                      src="/images/projects/ufo/fonts.png"
                      alt="fonts design"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="relative aspect-[4/3] scale-110">
                    <Image
                      src="/images/projects/ufo/components.png"
                      alt="components design"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative aspect-[4/3] scale-110 translate-x-12 md:translate-x-16">
                    <Image
                      src="/images/projects/ufo/icons.png"
                      alt="icons design"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-right text-gray-600 italic mt-2">Sticker Sheet</p>
          </div>

          {/* Hi-Fi Home Screen */}
          <div className="mb-16">
            <div className="relative aspect-[4/3] overflow-hidden max-w-[90%] md:max-w-[calc(75%-1rem)] mx-auto">
              <Image
                src="/images/projects/ufo/screen.png"
                alt="Hi-Fi Home Screen"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-gray-600 italic mt-4">Hi-Fi Home Screen</p>
          </div>

          {/* Video */}
          <div className="mb-4">
            <div className="relative aspect-video overflow-hidden">
              <video
                controls
                className="w-full h-full object-contain bg-black"
              >
                <source src="/videos/UFOvideo.mp4" type="video/mp4" />
                <source src="/images/projects/ufo/UFOvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag or the video file could not be found.
              </video>
            </div>
            <p className="text-right text-gray-600 italic mt-2">Video simulating user flow for sending money</p>
          </div>
        </section>
      </section>
    </main>
  );
} 