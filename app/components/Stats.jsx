export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">

      {/* Background glow */}
      <div className="absolute -left-32 top-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute -right-32 top-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">

          {/* Projects Card */}
          <div className="
            bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl
            py-8 px-4
            transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20
          ">
            <div className="
              mx-auto mb-3 w-12 h-12 flex items-center justify-center
              rounded-lg border-2 border-blue-400/70
              text-blue-400 text-2xl
            ">
              <i className="devicon-firebase-plain"></i>
            </div>

            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              10+
            </h3>
            <p className="mt-1 text-gray-300 text-xl">Projects Completed</p>
          </div>

          {/* Technologies Card */}
          <div className="
            bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl
            py-8 px-4
            transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20
          ">
            <div className="
              mx-auto mb-3 w-12 h-12 flex items-center justify-center
              rounded-lg border-2 border-purple-400/70
              text-purple-400 text-2xl
            ">
              <i className="devicon-react-original"></i>
            </div>

            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              15+
            </h3>
            <p className="mt-1 text-gray-300 text-xl">Technologies Used</p>
          </div>

          {/* Experience Card */}
          <div className="
            bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl
            py-8 px-4
            transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20
          ">
            <div className="
              mx-auto mb-3 w-12 h-12 flex items-center justify-center
              rounded-lg border-2 border-blue-400/70
              text-blue-400 text-2xl
            ">
              <i className="devicon-java-plain"></i>
            </div>

            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              8+ <span className="mt-1 text-gray-400 text-sm">months</span>
            </h3>
            <p className="mt-1 text-gray-300 text-xl">Experience</p>
          </div>

        </div>
      </div>
    </section>
  );
}
