"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  title: string;
  desc: string;
  link: string;
  deployed?: string;
  category: "Major Project" | "Minor Project";
  tech: string[];
  features: string[];
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Smart Waste Bin Management System",
      desc: "IoT-powered waste monitoring platform for real-time bin tracking, route planning, analytics, and staff management.",
      link: "https://github.com/ishankumar2911-commits/NecroCoders_Minor-Project",
      deployed: "https://cleantrack-19jw.onrender.com",
      category: "Major Project",
      tech: ["MERN", "Socket.IO", "IoT", "GPS", "Charts", "MongoDB"],
      features: [
        "Real-time fill-level monitoring",
        "Live dashboard and analytics",
        "GPS-based tracking",
        "Staff and collection management",
      ],
    },
    {
      title: "LilYapper",
      desc: "Real-time chat application with private chats, group messaging, notifications, and typing indicators.",
      link: "https://github.com/Subhi2911/LilYapper",
      deployed: "https://lilyapper.onrender.com",
      category: "Major Project",
      tech: ["MERN", "React", "Node.js", "Express", "MongoDB", "Socket.IO"],
      features: [
        "Private and group chat",
        "Typing indicators",
        "Realtime notifications",
        "Authentication system",
      ],
    },
    {
      title: "Bingo Multiplayer",
      desc: "A synchronized multiplayer Bingo game with live updates and shared game state.",
      link: "https://github.com/Subhi2911/bingo",
      category: "Major Project",
      tech: ["React-Native", "Node.js", "Socket.IO", "Realtime"],
      features: [
        "Multiplayer gameplay",
        "Synced game state",
        "Live interaction",
        "Fast event handling",
      ],
    },
    {
      title: "VibeNest",
      desc: "Secure MERN blogging platform with authentication, blog publishing, and full CRUD features.",
      link: "https://github.com/Subhi2911/vibenest",
      deployed: "https://vibenest-publish-your-own-blogs.onrender.com/",
      category: "Minor Project",
      tech: ["MERN", "JWT", "MongoDB", "React"],
      features: [
        "User authentication",
        "Create, edit, delete blogs",
        "Responsive UI",
        "Protected routes",
      ],
    },
    {
      title: "NewsDe-Lite",
      desc: "News aggregation platform with authentication, personalized feeds, and content management features.",
      link: "https://github.com/Subhi2911/NewsDe-Lite",
      category: "Minor Project",
      tech: ["React", "Node.js", "Context API ", "API Integration"],
      features: [
        "Personalized feeds",
        "User authentication",
        "CRUD operations",
        "News aggregation",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-400 text-center mb-4">
          Projects
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          A collection of projects showcasing my work in full stack development,
          real-time applications, and problem-solving through practical builds.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.18)]"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      proj.category === "Major Project"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-white/10 text-gray-300"
                    }`}
                  >
                    {proj.category}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition">
                  {proj.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">{proj.desc}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-200 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((item, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-400/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-200 mb-3">
                    Highlights
                  </h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    {proj.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-auto">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition"
                >
                  <FaGithub />
                  Code
                </a>

                {proj.deployed && (
                  <a
                    href={proj.deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}