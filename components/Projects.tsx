export default function Projects() {
  const majorProjects = [
    {
      title: "LilYapper",
      desc: "Real-time chat application with private & group messaging, typing indicators, and notifications using Socket.IO.",
      link: "https://github.com/Subhi2911/LilYapper",
    },
    {
      title: "Bingo Multiplayer",
      desc: "Real-time multiplayer Bingo game with synchronized state management.",
      link: "https://github.com/Subhi2911/bingo",
    },
  ];

  const minorProject = {
    title: "VibeNest",
    desc: "Secure MERN blog platform with authentication and CRUD operations.",
    link: "https://github.com/Subhi2911/vibenest",
  };

  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-blue-400 text-center mb-20">
          Projects
        </h2>

        {/* Major Projects */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {majorProjects.map((proj, index) => (
            <div
              key={index}
              className="relative p-10 rounded-3xl
              bg-white/5 border border-white/10
              hover:border-blue-400
              transition-all duration-300
              hover:scale-105
              hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]"
            >
              <span className="absolute top-4 right-4 text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                Major Project
              </span>

              <h3 className="text-2xl font-semibold mb-4 text-white">
                {proj.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-7">
                {proj.desc}
              </p>

              <a
                href={proj.link}
                target="_blank"
                className="text-blue-400 font-medium hover:underline"
              >
                View Code →
              </a>
            </div>
          ))}
        </div>

        {/* Minor Project */}
        <div className="max-w-md mx-auto">
          <div
            className="relative p-8 rounded-3xl
            bg-white/5 border border-white/10
            hover:border-blue-400
            transition-all duration-300
            hover:scale-105"
          >
            <span className="absolute top-4 right-4 text-xs bg-white/10 text-gray-400 px-3 py-1 rounded-full">
              Minor Project
            </span>

            <h3 className="text-xl font-semibold mb-4 text-white">
              {minorProject.title}
            </h3>

            <p className="text-gray-400 mb-6 leading-7">
              {minorProject.desc}
            </p>

            <a
              href={minorProject.link}
              target="_blank"
              className="text-blue-400 font-medium hover:underline"
            >
              View Code →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
