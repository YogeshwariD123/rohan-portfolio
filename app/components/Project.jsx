export default function Projects() {
  return (
    <section id="Project" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="mt-4 text-gray-300 max-w-2xl mx-auto">
          PORTFOLIO
        </h2>
        <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500">Best Projects </p>
        <p className="text-md font-semibold text-gray-500">
          Showcase of my top projects demonstrating expertise across different
          technologies
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard
          image="/food_Station.jpg"
          title="RK Food Station"
          description="A responsive restaurant website offering breakfast, lunch, and dinner with light/dark mode, filters, and coupon discounts."
          tech={["HTML", "CSS", "JavaScript", "React", "Redux"]}
          link="https://rohan-koli.github.io/Food-website/"
        />

        <ProjectCard
          image="/password.jpg"
          title="Random Password Generator"
          description="A customizable password generator built using React fundamentals to generate secure and unique passwords."
          tech={["React.js", "JavaScript"]}
          link="https://passwordgenerator-navy-six.vercel.app/"
        />

        <ProjectCard
          image="/Chat.jpg"
          title="Chatty – Real-Time Chat App"
          description="A full-stack real-time chat application using Socket.IO, JWT authentication, and Zustand for state management."
          tech={[
            "React",
            "Tailwind",
            "Node.js",
            "Express",
            "MongoDB",
            "Socket.IO",
          ]}
          link="https://chat-app-b0we.onrender.com/login"
        />
      </div>
    </section>
  );
}

/* ---------------- Project Card ---------------- */

function ProjectCard({ image, title, description, tech, link }) {
  return (
    <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-300/20 via-pink-300/20 to-blue-300/20 border border-white/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 mb-3">{title}</h3>

        <p className="text-gray-300 font-semibold text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((item, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-purple-400/20 text-purple-300 border border-purple-400/30"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Button */}
        <a
          href={link}
          target="_blank"
          className="inline-block text-sm font-medium text-white px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}
