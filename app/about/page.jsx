function InfoCard({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur border border-white/20 hover:border-purple-400/60 transition">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/30 text-lg">
        {icon}
      </div>

      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-white font-medium">{value}</p>
      </div>
    </div>
  );
}
export default function AboutPage() {
  return (
    <section className="relative min-h-screen py-28 px-6 overflow-hidden bg-[#050816]">
      
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-blue-500/20 rounded-full blur-[140px]" />
        <div className="absolute top-20 -right-40 w-[520px] h-[520px] bg-pink-500/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-sm tracking-widest text-purple-400 mb-4">
            ABOUT ME
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Digital Experiences
            </span>
          </h1>

          <p className="mt-5 text-gray-400 max-w-xl mx-auto font-semibold">
            Passionate about building elegant, scalable, and meaningful digital products
          </p>
        </div>

        {/* Profile + Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-28">

          {/* Profile */}
          <div className="flex justify-center">
            <div className="group relative w-80 p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:-translate-y-3 transition">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/30 to-pink-500/30 blur-2xl opacity-0 group-hover:opacity-100 -z-10" />

              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 blur-xl opacity-40" />
                  <img
                    src="/pro.png"
                    alt="Profile"
                    className="relative w-44 h-44 rounded-full object-cover border border-white/30"
                  />
                </div>
              </div>

              <h3 className="mt-6 text-center text-xl font-semibold text-white">
                Rohan Koli
              </h3>
            </div>
          </div>

          {/* About Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Who I Am</h3>

            <p className="text-gray-400 mb-8 font-semibold">
              Full Stack Developer specializing in crafting backend systems and
              user-friendly interfaces. A passionate problem solver who loves
              clean design, scalable architecture, and continuous learning.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { label: "Email", value: "rohankoli0610@gmail.com", icon: "✉️" },
                { label: "Location", value: "Pune, India", icon: "📍" },
                { label: "Birthdate", value: "06 October 2003", icon: "🎂" },
              ].map((item, i) => (
                <InfoCard key={i} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <Section title="Education">
          <EducationCard year="2021 – 2024" title="BCA (Computer Application)" institute="Haribhai V. Desai College" score="CGPA: 8.64" />
          <EducationCard year="2019 – 2021" title="HSC" institute="A.S.D.B. Dadawala Jr. College" score="75.33%" />
          <EducationCard year="2018 – 2019" title="SSC" institute="S.K.D.J. Madhyamik Vidyalaya" score="79.20%" />
        </Section>

        {/* Certifications */}
        <Section title="Certifications">
          <CertificationCard year="2025" icon="🧩" title="Full Stack Web Development" subtitle="Udemy · Dec 2025" />
          <CertificationCard year="2026" icon="🗄️" title="SQL & Relational Database" subtitle="IBM · Jan 2026" />
        </Section>

        {/* Beyond Coding */}

        <Section title="Beyond Coding">
 
    <HobbyCard
      icon="🌍"
      title="Exploring New Places"
      subtitle="Discovering new cultures and environments that spark creativity."
    />

    <HobbyCard
      icon="🎬"
      title="Watching Movies"
      subtitle="Storytelling and visuals that inspire imagination."
    />

</Section>


      </div>
    </section>
  );
}
function Section({ title, children }) {
  return (
    <div className="mb-28">
      <h2 className="text-3xl font-semibold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
        {title}
      </h2>

      <div className="grid md:grid-cols-3 gap-8">{children}</div>
    </div>
  );
}

function CertificationCard({ year, title, subtitle, icon }) {
  return (
    <div
      className="
        group relative p-6 rounded-2xl
        bg-gradient-to-br from-pink-300/30 via-purple-300/25 to-blue-300/30
        backdrop-blur-xl
        border border-white/30
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-xl hover:shadow-purple-400/30
      "
    >

      {/* Left accent bar */}
      <div
        className="
          absolute left-0 top-0 h-full w-1
          bg-gradient-to-b from-purple-500 to-pink-500
          rounded-l-xl
        "
      />
      {/* Glow */}
      <div
        className="
          absolute inset-0 rounded-2xl
          bg-gradient-to-r from-pink-500/30 to-blue-500/30
          opacity-0 group-hover:opacity-100
          blur-2xl transition -z-10
        "
      />

      {/* Year Badge */}
      <div
        className="
          absolute -top-4 left-6 px-4 py-1.5 rounded-full
          bg-white/60 backdrop-blur-md
          border border-white/50
          text-sm font-semibold text-purple-900
          shadow-md
        "
      >
        {year}
      </div>

      {/* Icon */}
      <div
        className="
          w-12 h-12 mb-4 flex items-center justify-center rounded-xl
          border border-purple-400/60
          text-purple-300 text-xl
          transition group-hover:border-purple-500 group-hover:text-purple-400
        "
      >
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-white font-semibold text-lg">
        {title}
      </h3>
      <p className="text-gray-200 text-sm mt-2">
        {subtitle}
      </p>
    </div>
  );
}
function HobbyCard({ title, subtitle, icon }) {
  return (
    <div
      className="
        group relative p-6 rounded-xl 
        bg-gradient-to-br from-purple-300/25 via-pink-300/25 to-blue-300/25
        backdrop-blur-lg
        border border-white/25
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl hover:shadow-purple-400/30
      "
    >
      {/* Left accent bar */}
      <div
        className="
          absolute left-0 top-0 h-full w-1
          bg-gradient-to-b from-purple-500 to-pink-500
          rounded-l-xl
        "
      />

      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-xl
          bg-gradient-to-r from-purple-500/20 to-pink-500/20
          opacity-0 group-hover:opacity-100
          blur-xl transition -z-10
        "
      />

      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className="
            w-12 h-12 flex items-center justify-center rounded-lg
            border border-purple-400/60
            text-purple-300 text-xl
            transition-all duration-300
            group-hover:scale-110
            group-hover:text-purple-400
            group-hover:border-purple-500
          "
        >
          {icon}
        </div>

        {/* Content */}
        <div>
          <h3 className="text-white text-2xl font-semibold mb-1">
            {title}
          </h3>

          <p className="text-gray-400 text-xl leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}


function EducationCard({ year, title, institute, score }) {
  return (
    <div className=" group relative p-6 rounded-2xl bg-gradient-to-br from-pink-300/30 via-purple-300/25 to-blue-300/30 border border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-400/30 ">
      {/* Soft glow */}{" "}
      <div className=" absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 blur-2xl transition -z-10 " />{" "}
      {/* Year Badge */}{" "}
      <div className=" absolute -top-4 left-6 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/50 text-sm font-semibold text-purple-900 shadow-md ">
        {" "}
        {year}{" "}
      </div>{" "}
      {/* Content */}{" "}
      <h3 className="text-white font-semibold text-lg mt-6"> {title} </h3>{" "}
      <p className="text-gray-300 text-sm mt-2"> {institute} </p>{" "}
      <hr className="border-gray-400 my-3" />{" "}
      <p className="mt-3 text-purple-200 font-semibold text-xl">
        {" "}
        {score}{" "}
      </p>{" "}
    </div>
  );
}
