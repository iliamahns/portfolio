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
        <div className="relative aspect-video bg-black overflow-hidden">
          <Image
            src="/images/projects/garden/home.png"
            alt="Garden Project"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Project Overview */}
      <section className="mb-32 text-center">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          Garden is a plant care platform designed to help users maintain and grow their indoor and outdoor plants. 
          The platform provides personalized care instructions, plant identification, and a community of plant enthusiasts 
          to share knowledge and experiences.
        </p>

        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-medium mb-2 underline text-[#31572C]">Role</h3>
            <p className="text-[#31572C]">UX Designer</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2 underline text-[#31572C]">Tool</h3>
            <p className="text-[#31572C]">Figma</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2 underline text-[#31572C]">Date</h3>
            <p className="text-[#31572C]">March 2025</p>
          </div>
        </div>
      </section>

      {/* Research & Design Process */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-6">Research & Design Process</h2>
        <p className="text-lg mb-12">
          The design process began with understanding the needs of plant owners and enthusiasts. 
          Through user research and competitive analysis, we identified key pain points in plant care 
          and developed solutions to make plant maintenance more accessible and enjoyable.
        </p>

        {/* Research Elements in a Row */}
        <div className="mb-12">
          {/* User Persona and Storyboard in one row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* User Persona */}
            <div>
              <h3 className="text-2xl font-medium text-center mb-4 text-[#31572C]">User Persona</h3>
              <div className="relative aspect-[4/3] overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/projects/garden/persona.png"
                  alt="User Persona for Garden platform"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Storyboard */}
            <div>
              <h3 className="text-2xl font-medium text-center mb-4 text-[#31572C]">Storyboard</h3>
              <div className="relative aspect-[4/3] overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/projects/garden/storyboard.png"
                  alt="Storyboard for Garden platform"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Information Architecture in row below */}
          <div className="max-w-4xl mx-auto md:w-1/2 md:mx-auto">
            <h3 className="text-2xl font-medium text-center mb-4 text-[#31572C]">Information Architecture</h3>
            <div className="relative aspect-[4/3] overflow-hidden flex items-center justify-center">
              <Image
                src="/images/projects/garden/ia.png"
                alt="Information Architecture for Garden platform"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-6">Platform</h2>
        <p className="text-lg mb-12">
          The platform is designed to be accessible across devices, with a focus on mobile-first design 
          to support users who need quick access to plant care information while tending to their plants.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/projects/garden/wireframe.png"
              alt="Wireframe design for Garden platform"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/projects/garden/prototype.png"
              alt="High-fidelity prototype for Garden platform"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Insight
            title="Plant Identification"
            description="Upload photos of plants to get instant identification and care instructions."
          />
          <Insight
            title="Care Reminders"
            description="Personalized watering and care schedules based on plant type and environment."
          />
          <Insight
            title="Community Hub"
            description="Connect with other plant enthusiasts to share tips and experiences."
          />
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="mb-32 text-center">
        <h2 className="text-3xl font-bold mb-6">Lessons Learned</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          This project taught me the importance of understanding user needs in niche markets and how to 
          design solutions that make complex tasks more accessible. The process of creating a plant care 
          platform highlighted the value of combining practical functionality with an engaging user experience.
        </p>
      </section>

      {/* Conclusion */}
      <section className="mb-32 text-center">
        <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          Garden represents a step forward in making plant care more accessible and enjoyable for everyone. 
          The platform combines practical features with a supportive community, creating a space where both 
          novice and experienced plant owners can thrive in their gardening journey.
        </p>
      </section>
    </main>
  );
} 