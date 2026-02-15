export default function About() {
  return (
    <section id="about" className="py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-blue-400 mb-16 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="space-y-6">
            <p className="text-gray-400 leading-8 text-lg">
              I&apos;m a B.Tech CSE (UX/UI) student with a strong academic
              foundation (CGPA: 9.21) and hands-on experience in full stack
              development.
            </p>

            <p className="text-gray-400 leading-8 text-lg">
              I specialize in building scalable MERN applications,
              real-time systems using Socket.IO, and clean,
              performance-optimized frontend interfaces.
            </p>

            <p className="text-gray-400 leading-8 text-lg">
              My goal is to build impactful products that combine
              strong engineering logic with modern UI design.
            </p>
          </div>

          {/* Right Side Cards */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-blue-400 transition">
              <p className="text-blue-400 text-2xl font-bold">9.21</p>
              <p className="text-gray-400 text-sm mt-2">CGPA</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-blue-400 transition">
              <p className="text-blue-400 text-2xl font-bold">Alwar</p>
              <p className="text-gray-400 text-sm mt-2">Rajasthan</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-blue-400 transition">
              <p className="text-blue-400 text-2xl font-bold">MERN</p>
              <p className="text-gray-400 text-sm mt-2">Primary Stack</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-blue-400 transition">
              <p className="text-blue-400 text-2xl font-bold">AI-900</p>
              <p className="text-gray-400 text-sm mt-2">Certified</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
