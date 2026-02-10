"use client";

export default function Contact() {
  const DEMO_MODE = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (DEMO_MODE) {
      console.log("📧 Demo Mail Data:", data);
      alert("Message sent successfully 🚀 (Demo Mode)");
      e.target.reset();
    }
  };

  return (
    <section className="relative py-32 bg-[#050816] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[150px]" />
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-widest text-purple-400 mb-3">
            CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let’s{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-xl mx-auto font-bold">
            Have a project, opportunity, or just want to say hi? My inbox is
            always open ✨
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div className="space-y-10">
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
            <h2 className="text-center text-lg text-purple-400 font-semibold">
              Contact Information
            </h2>
            {/* Info */}
            {/* Info */}
            <div className="grid gap-6">
              {/* Email */}
              <div
                className="flex items-center gap-4 p-4 rounded-2xl
    bg-white/5 backdrop-blur-xl border border-white/20
    hover:border-purple-400/60 transition"
              >
                <span className="text-2xl text-purple-400">
                  <i className="devicon-google-plain"></i>
                </span>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-white text-lg font-semibold">
                    rohankoli0610@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div
                className="flex items-center gap-4 p-4 rounded-2xl
    bg-white/5 backdrop-blur-xl border border-white/20
    hover:border-blue-400/60 transition"
              >
                <span className="text-2xl text-blue-400">📍</span>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-white text-lg font-semibold">Pune,India</p>
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-6 justify-center pt-4 text-2xl">
                <i className="devicon-github-original text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition" />
                <i className="devicon-linkedin-plain text-gray-400 hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)] transition" />
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div
            className="relative p-10 rounded-3xl
            bg-white/10 backdrop-blur-xl
            border border-white/20
            hover:shadow-2xl hover:shadow-purple-500/30
            transition font-bold
          "
          >
            <form className="space-y-6 onSubmit={handleSubmit}">
              <Input
                label="Your Name"
                name="name"
                placeholder="Enter your name"
              />
              <Input
                label="Email Address"
                name="email"
                placeholder="Enter your email"
              />
              <Input
                label="Subject"
                name="subject"
                placeholder="Enter subject"
              />

              <div>
                <label className="text-sm text-gray-300">Message</label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="mt-2 w-full rounded-xl bg-black/40 border border-white/20 px-4 py-3
                  text-white placeholder-gray-500 focus:outline-none
                  focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-white
                bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/40 transition"
              >
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ */
/* Input Component */
/* ------------------------ */

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="text-sm text-gray-300">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-black/40 border border-white/20 px-4 py-3
        text-white placeholder-gray-500 focus:outline-none
        focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition"
      />
    </div>
  );
}
