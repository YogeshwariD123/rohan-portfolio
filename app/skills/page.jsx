"use client";

export default function Skills() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#050816]">

      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-blue-500/25 rounded-full blur-[150px]" />
        <div className="absolute top-20 -right-40 w-[520px] h-[520px] bg-purple-500/25 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-500/15 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-24">
          <p className="text-md tracking-widest text-purple-500 mb-4 font-semibold">
            MY SKILLS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-xl mx-auto font-bold">
            A carefully crafted tech stack to build modern, scalable and
            visually rich web applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-16">

          <SkillCard
            title="Programming Languages"
            skills={[
              { icon: "devicon-javascript-plain colored", name: "JavaScript" },
              { icon: "devicon-php-plain colored", name: "PHP" },
              { icon: "devicon-java-plain colored", name: "Core Java" },
              { icon: "devicon-java-plain", name: "Advanced Java" },
            ]}
          />

          <SkillCard
            title="Frontend Development"
            skills={[
              { icon: "devicon-html5-plain colored", name: "HTML" },
              { icon: "devicon-css3-plain colored", name: "CSS" },
              { icon: "devicon-tailwindcss-plain colored", name: "Tailwind CSS" },
              { icon: "devicon-react-original colored", name: "React JS" },
              { icon: "devicon-redux-original colored", name: "Redux" },
            ]}
          />

          <SkillCard
            title="Backend Development"
            skills={[
              { icon: "devicon-nodejs-plain colored", name: "Node JS" },
              { icon: "devicon-express-original colored", name: "Express JS" },
              { icon: "devicon-sequelize-plain colored", name: "Sequelize" },
            ]}
          />

          <SkillCard
            title="Database & Tools"
            skills={[
              { icon: "devicon-mongodb-plain colored", name: "MongoDB" },
              { icon: "devicon-mysql-plain colored", name: "MySQL" },
              { icon: "devicon-github-original colored", name: "GitHub" },
              { icon: "devicon-postman-plain colored", name: "Postman" },
              { icon: "devicon-linux-plain colored", name: "Linux" },
              { icon: "devicon-windows8-original colored", name: "Windows" },
            ]}
          />

        </div>
      </div>
    </section>
  );
}

/* -------------------------------- */
/* Skill Card */
/* -------------------------------- */

function SkillCard({ title, skills }) {
  return (
    <div
      className="
        group relative p-8 rounded-3xl
        bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-pink-500/20
        backdrop-blur-xl
        border border-white/20
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-2xl hover:shadow-purple-500/40
      "
    >
      {/* Glow on hover */}
      <div
        className="
          absolute inset-0 rounded-3xl
          opacity-0 group-hover:opacity-100
          blur-2xl transition -z-10
        "
      />

      <h3 className="text-xl font-semibold text-white mb-8">
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <SkillItem key={i} {...skill} />
        ))}
      </div>
    </div>
  );
}

/* -------------------------------- */
/* Skill Item */
/* -------------------------------- */

function SkillItem({ icon, name }) {
  return (
    <div
      className="
        flex flex-col items-center gap-3
        p-4 rounded-2xl
        bg-white/5 backdrop-blur
        border border-white/20
        transition-all duration-300
        hover:scale-105
        hover:border-purple-400/60
        hover:shadow-lg hover:shadow-purple-500/40
      "
    >
      <i className={`${icon} text-4xl`} />
      <p className="text-sm text-gray-200 font-medium text-center">
        {name}
      </p>
    </div>
  );
}
