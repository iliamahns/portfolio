import HolographicButton from './components/HolographicButton';

export default function Home() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center">
      <div className="text-center mb-20">
        <h1 className="text-6xl font-bold mb-4">ILIA MAHNS</h1>
        <h2 className="text-2xl">UX Designer and Visual Creative</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
        <HolographicButton
          href="/ux"
          text="UX"
          imagePath="/images/ux.jpg"
        />
        <HolographicButton
          href="/art"
          text="Art"
          imagePath="/images/art.jpg"
        />
        <HolographicButton
          href="/about"
          text="About"
          imagePath="/images/about.jpg"
        />
        <HolographicButton
          href="/contact"
          text="Contact"
          imagePath="/images/contact.jpg"
        />
      </div>
    </main>
  );
}
