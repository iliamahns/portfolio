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

export default function WebsiteProject() {
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
        <h1 className="text-4xl font-bold mb-2">My Website | Personal Portfolio</h1>
        <h2 className="text-2xl text-gray-600">A Personal Digital Creation of My Work</h2>
      </div>

      {/* Project Logo/Hero */}
      <div className="mb-32 max-w-2xl mx-auto">
        <div className="relative aspect-video bg-black overflow-hidden">
          <Image
            src="/images/projects/web/webbutterfly.jpg"
            alt="Website Project"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Project Overview */}
      <section className="mb-32 text-center">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          This project represents my journey of creating a personal portfolio website to showcase 
          my work in UX design, art, and other professional endeavors. The goal was to create an authentic, 
          user-friendly platform that effectively communicates my skills, experiences, and personality 
          while providing an enjoyable artistic navigation experience.
        </p>

        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-medium mb-2 underline text-[#31572C]">Role</h3>
            <p className="text-[#31572C]">UX Designer<br />& Developer</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2 underline text-[#31572C]">Tool</h3>
            <p className="text-[#31572C]">Figma<br />Cursor AI<br />GitHub<br />Tailwind CSS</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2 underline text-[#31572C]">Date</h3>
            <p className="text-[#31572C]">February 2025</p>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-6">Research & Design Process</h2>
        <p className="text-lg mb-12">
          The design process for my portfolio website began with research into effective and accessible UX portfolio 
          designs, learning about the design of a case study, and determining the most authentic way to present my 
          work. An important part of the designing was self-reflection and integrating my artistic flow into this digital medium.
          Creating the User Persona, Storyboards, anditerations of the Information Architecture helped polish and articulate my vision of the kind of user flow I wanted to create.
        </p>

        {/* Research Elements in a Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* User Persona */}
          <div>
            <h3 className="text-2xl font-medium text-center mb-4 text-[#31572C]">User Persona</h3>
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 flex items-center justify-center p-4">
            </div>
          </div>

          {/* Storyboards */}
          <div>
            <h3 className="text-2xl font-medium text-center mb-4 text-[#31572C]">Storyboards</h3>
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 flex items-center justify-center p-4">
            </div>
          </div>

          {/* Information Architecture */}
          <div>
            <h3 className="text-2xl font-medium text-center mb-4 text-[#31572C]">Information Architecture</h3>
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 flex items-center justify-center p-4">
            </div>
          </div>
        </div>
      </section>

      {/* Platform */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-6">Platform</h2>
        <p className="text-lg mb-12">
          To ensure maximum accessibility across devices and to demonstrate my web development skills, 
          I used responsive web design, incorporating two design types, one for desktop screens (MacBook Air 13 inch) 
          and one for mobile screens (iPhone 14 & 15 Pro). My designs continued from 
          paper wireframes into digital wireframes, low-fidelity prototypes, and high-fidelity prototypes.
        </p>
        <div className="max-w-[90%] md:max-w-[calc(50%-1rem)] mx-auto">
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 flex items-center justify-center p-4">
          </div>
        </div>
      </section>

      {/* Usability Testing */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-6">Usability Testing</h2>
        <p className="text-lg mb-12">
          To ensure the website was accessible, authentic, and effective, I asked my friends, family, and other UX designers 
          to navigate my website throughout iterations of my designs. Feedback was collected on navigation intuitiveness, 
          content clarity, overall user experience, and aesthetic appeal. The testing revealed insights that led to 
          several refinements in the navigation and content organization.
        </p>
      </section>

      {/* Implementation */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-6">Implementation & Development</h2>
        <p className="text-lg mb-12">
          I had been curious about the software developing side of UX Design so I decided to learn how to build and develop this site.
          This was also motivated by the desire to cultivate future personal projecst and collaborations with web developers.
          By using Cursor AI, I learned some functionalities of Next.js and Tailwind CSS, and was able to create a responsive and accessible experience.
          The development process involved learning these technologies while implementing the design, testing and iterating designs, through the local host,
          resulting in both technical growth and an authentic revisable personal website. :)
        </p>

        {/* Key Features */}
        <div className="mb-24">
          <h3 className="text-2xl font-medium mb-6 text-center text-[#31572C]">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Insight
              title="Personally Designed Iconography"
              description="I was able to use personal artistic designs as icons for the different sections of the website."
            />
            <Insight
              title="Interactive Elements"
              description="Engaging hover states, animations, and image popups that enhance the user experience. 
              The 3D butterfly animation on the homepage was a fun addition to the website that was also a fun surprise learning experience for three.js."
            />
            <Insight
              title="Responsive Design"
              description="A fully responsive layout that adapts to various screen sizes from mobile phones to large desktop displays."
            />
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="mb-32 text-center">
        <h2 className="text-3xl font-bold mb-6">Lessons Learned</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          This project taught me valuable lessons about balancing artistic aesthetics with functionality, 
          the importance of iterative design, and the technical aspects of modern web development. 
          I gained insights into creating a cohesive user experience across different sections of a 
          website while maintaining a consistent theme and navigation structure.
        </p>
      </section>

      {/* Conclusion */}
      <section className="mb-32 text-center">
        <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          Creating my portfolio website was both a creative and technical challenge that allowed me to 
          showcase my work while also demonstrating my design and development skills. The process of 
          building this site has given me a deeper appreciation for UX design in digital 
          spaces and has provided me with a platform that I can continue to evolve as my career grows.
        </p>
      </section>
    </main>
  );
} 