import Link from "next/link";

export default function About() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        {" "}
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-blue-500/25 rounded-full blur-[140px]" />{" "}
        <div className="absolute top-32 -right-40 w-[520px] h-[520px] bg-purple-600/25 rounded-full blur-[140px]" />{" "}
        <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] bg-pink-500/15 rounded-full blur-[140px]" />{" "}
      </div>
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          {" "}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {" "}
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {" "}
              Me{" "}
            </span>{" "}
          </h2>{" "}
          <p className="text-gray-500 max-w-xl md:text-xl mx-auto">
            {" "}
            A little about who I am and what drives me{" "}
          </p>{" "}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {" "}
          {/* LEFT: Interactive Glass Profile Card */}{" "}
          <div className="flex justify-center">
            {" "}
            <div className=" group relative w-80 p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-purple-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-purple-500/50 ">
              {" "}
              {/* Card glow */}{" "}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/30 to-purple-600/30 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />{" "}
              {/* Image */}{" "}
              <div className="flex justify-center">
                {" "}
                <div className="relative">
                  {" "}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-40 group-hover:opacity-70 transition duration-500" />{" "}
                  <img
                    src="/pro.png"
                    alt="Profile"
                    className=" relative w-50 h-50 rounded-full object-cover border-1 border-white/20 transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 "
                  />{" "}
                </div>{" "}
              </div>{" "}
              {/* Name */}{" "}
              <div className="mt-6 text-center">
                {" "}
                <h3 className="text-xl font-semibold text-white">
                  {" "}
                  Rohan Koli{" "}
                </h3>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          {/* RIGHT: Info */}
          <div className="text-gray-500 md:text-xl">
            <p className="mb-8 leading-relaxed">
              {" "}
              I am a passionate{" "}
              <span className="text-white font-semibold">
                {" "}
                Full-Stack Developer{" "}
              </span>{" "}
              focused on building modern, user-friendly web applications. I
              enjoy transforming ideas into meaningful digital experiences with
              clean UI and solid performance.{" "}
            </p>{" "}
            <p className="mb-10 leading-relaxed">
              {" "}
              Driven by curiosity and continuous learning, I love solving
              real-world problems, refining user experiences, and building
              solutions that feel intuitive and impactful.{" "}
            </p>
            {/* View More Button */}
            <Link href="/about">
              <button
                className="
                  px-8 py-3 rounded-full font-semibold text-white text-lg
                  bg-gradient-to-r from-blue-500 via-purple-500 to-purple-800
                  transition-all duration-300
                  hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50
                "
              >
                View More →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
