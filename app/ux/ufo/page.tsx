import Link from 'next/link';
import Image from 'next/image';

type InsightProps = {
  title: string;
  description: string;
};

function Insight({ title, description }: InsightProps) {
  return (
    <div className="flex-1">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default function UFOProject() {
  return (
    <main className="min-h-screen p-8 mx-[15%]">
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
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
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
            <h3 className="text-xl font-medium mb-2">Role</h3>
            <p>Primary Researcher<br />and Designer</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Tool</h3>
            <p>Figma</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Date</h3>
            <p>December 2024 -<br />February 2025</p>
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
          <h3 className="text-2xl font-medium mb-6 text-center">Top Insights</h3>
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
        <p className="text-lg">
          By creating a User Persona and User Journey Map, I could mindfully think of user needs 
          throughout the design process. Then came the story boards and iterations of the 
          Information Architecture.
        </p>
      </section>
    </main>
  );
} 