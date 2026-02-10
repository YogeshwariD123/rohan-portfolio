"use client";

export default function Experience() {
  const experiences = [
    {
      role: "Programmer Analyst Trainee",
      company: "Cognizant",
      duration: "Jan 2026 – Present",
      color: "from-cyan-400 to-blue-500",
    },
    {
      role: "Web Developer Intern",
      company: "ITE Software Company",
      duration: "Oct 2025 – Nov 2025",
      color: "from-orange-400 to-red-500",
    },
    {
      role: "Full Stack Web Developer",
      company: "Sync Solutions",
      duration: "Oct 2024 – Sep 2025",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section className="relative py-32 bg-[#050816] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-purple-500/20 rounded-full blur-[150px]" />
        <div className="absolute top-20 -right-40 w-[520px] h-[520px] bg-blue-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-24 relative">
  {/* Small tag */}
  <h3 className="text-md font-bold tracking-[0.3em] text-purple-400 mb-4 uppercase">
    Experience
  </h3>

  {/* Main heading */}
  <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
    Crafting Code,{" "}
    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
      Shaping Careers
    </span>
  </h2>

  {/* Slogan */}
  <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-lg font-semibold">
    A timeline of growth, real-world problem solving, and hands-on experience
    building scalable, user-focused web applications.
  </p>

  {/* Glow line */}
  <div className="mt-10 flex justify-center">
    <span className="w-24 h-[3px] rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" />
  </div>
</div>

        {/* Timeline */}
        <div className="relative border-l border-white/20 ml-6 space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-14 group">
              {/* Dot */}
              <div
                className={`absolute left-[-13px] top-2 w-6 h-6 rounded-full 
                bg-gradient-to-r ${exp.color}
                shadow-lg shadow-purple-500/50
                group-hover:scale-125 transition-transform`}
              />

              {/* Card */}
              <div
                className="p-8 rounded-2xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                hover:border-purple-400/40
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl hover:shadow-purple-500/30"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-white font-semibold">
                  {exp.role}
                </h3>

                <p className="mt-1 text-lg text-gray-300">
                  {exp.company}
                </p>

                <span
                  className={`inline-block mt-4 px-4 py-1.5 text-sm rounded-full
                  bg-gradient-to-r ${exp.color} text-black font-bold`}
                >
                  {exp.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
