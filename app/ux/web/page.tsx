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
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-2">My Website | Personal Portfolio and Information</h1>
        <h2 className="text-2xl text-gray-600">A Digital Expression of My Work and Identity</h2>
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
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <p className="text-lg mb-12">
          This project represents my journey into creating a personal portfolio website to showcase 
          my work in UX design, art, and other creative endeavors. The goal was to create a clean, 
          user-friendly platform that effectively communicates my skills, experiences, and personality 
          while providing an enjoyable browsing experience for visitors.
        </p>

        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-medium mb-2 underline text-[#31572C]">Role</h3>
            <p className="text-[#31572C]">UX Designer<br />& Developer</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2 underline text-[#31572C]">Tool</h3>
            <p className="text-[#31572C]">Next.js<br />Tailwind CSS</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2 underline text-[#31572C]">Date</h3>
            <p className="text-[#31572C]">Spring 2025</p>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-6">Design Process</h2>
        <p className="text-lg mb-12">
          The design process for my portfolio website began with research into effective portfolio 
          designs, identifying key user needs, and determining the most effective way to present my 
          work. I wanted to create a site that was both aesthetically pleasing and highly functional, 
          allowing visitors to easily navigate through different sections of my work.
        </p>

        {/* Design Goals */}
        <div className="mb-24">
          <h3 className="text-2xl font-medium mb-6 text-center text-[#31572C]">Design Goals</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Insight
              title="Simplicity"
              description="Create a clean, minimalist design that puts the focus on my work while maintaining visual interest through thoughtful design elements."
            />
            <Insight
              title="Accessibility"
              description="Ensure the website is accessible to all users, with responsive design that works well across all device sizes and screen types."
            />
            <Insight
              title="Personality"
              description="Infuse the site with elements of my personality and creative style while maintaining professional presentation of my work."
            />
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-6">Implementation</h2>
        <p className="text-lg mb-12">
          I chose to build this site using Next.js and Tailwind CSS, modern web technologies that 
          allowed for a responsive, fast-loading experience. The development process involved 
          learning these technologies while implementing the design, resulting in both technical 
          growth and a polished final product.
        </p>

        {/* Key Features */}
        <div className="mb-24">
          <h3 className="text-2xl font-medium mb-6 text-center text-[#31572C]">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Insight
              title="Portfolio Sections"
              description="Dedicated areas for UX work, art pieces, and personal information, each with appropriate layouts for the content type."
            />
            <Insight
              title="Interactive Elements"
              description="Hover states, animations, and image popups that enhance the user experience without being distracting."
            />
            <Insight
              title="Responsive Design"
              description="A fully responsive layout that adapts to various screen sizes from mobile phones to large desktop displays."
            />
            <Insight
              title="Performance"
              description="Optimized images and code to ensure fast loading times and smooth interactions across all devices."
            />
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-6">Lessons Learned</h2>
        <p className="text-lg mb-12">
          This project taught me valuable lessons about balancing aesthetics with functionality, 
          the importance of iterative design, and the technical aspects of modern web development. 
          I gained insights into creating a cohesive user experience across different sections of a 
          website while maintaining a consistent theme and navigation structure.
        </p>

        <div className="mb-12">
          <h3 className="text-2xl font-medium mb-6 text-center text-[#31572C]">Key Takeaways</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Insight
              title="User-Centered Design"
              description="Putting myself in the shoes of potential visitors helped me create a more intuitive navigation and content structure."
            />
            <Insight
              title="Technical Growth"
              description="Learning and implementing new technologies expanded my skill set and gave me confidence in tackling complex development challenges."
            />
            <Insight
              title="Iterative Process"
              description="The value of continuous refinement based on feedback and testing, leading to improvements throughout the design and development process."
            />
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
        <p className="text-lg mb-12">
          Creating my portfolio website was both a creative and technical challenge that allowed me to 
          showcase my work while also demonstrating my design and development skills. The process of 
          building this site has given me a deeper appreciation for user experience design in digital 
          spaces and has provided me with a platform that I can continue to evolve as my career grows.
        </p>
        <p className="text-lg italic text-center text-[#31572C]">
          "This website itself is a testament to my journey as a designer and creator."
        </p>
      </section>
    </main>
  );
} 