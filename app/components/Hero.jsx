import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 overflow-hidden">

      {/* Neon background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />

      {/* Floating DevIcons */}
      <div className="absolute inset-0 pointer-events-none">
        <i className="devicon-react-original text-blue-400/50 text-6xl absolute top-32 left-24 animate-pulse" />
        <i className="devicon-javascript-plain text-yellow-400/50 text-5xl absolute bottom-40 left-1/4 animate-pulse" />
        <i className="devicon-nodejs-plain text-green-400/50 text-6xl absolute top-44 right-32 animate-pulse" />
        <i className="devicon-mongodb-plain text-green-300/50 text-5xl absolute bottom-32 right-1/4 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-5xl px-6 text-center">

        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <div className="
            inline-flex items-center gap-3
            px-5 py-2 rounded-full
            bg-white/10 backdrop-blur
            border border-white/20
            text-sm text-blue-300
            shadow-lg font-bold
          ">
            
            <span>✨Full Stack Developer</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Hi, I’m{" "}
          <span className="
            bg-gradient-to-r from-blue-400 to-purple-500
            bg-clip-text text-transparent
            drop-shadow-[0_0_14px_rgba(147,51,234,0.8)]
          ">
            Rohan Koli
          </span>
        </h1>

        {/* Headline */}
        <div className="mt-8 text-gray-400 text-lg md:text-xl leading-relaxed space-y-2">
          <p>Full-Stack Developer crafting modern, scalable web applications.</p>
          <p>Focused on performance, clean UI, and real-world problem solving.</p>
          <p>Tech-driven. Design-minded. Always learning.</p>
        </div>

       
        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

  {/* View My Work → projects page */}
  <a href="#Project">
    <button
      className="
        px-8 py-3 rounded-xl font-bold
        bg-gradient-to-r from-blue-500 to-purple-600
        text-white
        hover:scale-105 transition
        shadow-lg shadow-purple-500/30
      "
    >
      View My Work
    </button>
  </a>

  {/* Get In Touch → contact page */}
  <Link href="/contact">
    <button
      className="
        px-8 py-3 rounded-xl font-bold
        border border-white/20
        text-gray-200
        hover:bg-gradient-to-r from-blue-500 to-purple-600
        hover:text-white
        transition
      "
    >
      Get In Touch
    </button>
  </Link>

</div>

      </div>
    </section>
  );
}
