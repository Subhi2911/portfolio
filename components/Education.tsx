"use client";

import { FaTrophy, FaMicrosoft } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";

export default function Education() {
  const academics = [
    {
      title: "B.Tech in Computer Science (FSD)",
      institute: "K.R. Mangalam University, Gurugram",
      year: "2024 - 2028",
      score: "9.273 CGPA",
    },
    {
      title: "CBSE Class XII",
      institute: "Presidency The International School, Alwar",
      year: "2023 - 2024",
      score: "90.1%",
    },
    {
      title: "CBSE Class X",
      institute: "Presidency The International School, Alwar",
      year: "2021 - 2022",
      score: "94.2%",
    },
  ];

  const certifications = [
    {
      title: "Microsoft Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      icon: <FaMicrosoft size={28} />,
    },
    {
      title: "IT Fundamentals",
      issuer: "Udemy",
      icon: <SiUdemy size={28} />,
    },
  ];

  const activities = [
    "Dean’s Honor Award – Semester 1 , 2 & 3 (2026)",
    "Hack KRMU Hackathon (2024)",
    "ACIC VGU Designathon (2024)",
    "Tech Fusion 3.0 Hackathon (2026)",
  ];

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Main Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-5 tracking-tight">
            Education & Achievements
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-8">
            My academic journey, certifications, and achievements that shaped
            my growth as a developer.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT */}
          <div className="h-full">
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-2xl md:text-3xl font-semibold text-blue-400">
                Academic Background
              </h3>
              <div className="flex-1 h-px bg-blue-400/20" />
            </div>

            <div className="space-y-8 h-full">
              {academics.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] transition-all duration-300"
                >
                  <h4 className="text-2xl font-semibold text-gray-100 mb-3">
                    {item.title}
                  </h4>

                  <p className="text-blue-300 text-lg font-medium mb-6">
                    {item.institute}
                  </p>

                  <div className="flex justify-between items-center flex-wrap gap-4">
                    <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {item.year}
                    </span>

                    <span className="px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 font-semibold">
                      {item.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="h-full flex flex-col justify-between">

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <h3 className="text-2xl md:text-3xl font-semibold text-blue-400">
                  Certifications
                </h3>
                <div className="flex-1 h-px bg-blue-400/20" />
              </div>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 hover:border-blue-400/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.12)] transition-all duration-300 flex items-center gap-6"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shrink-0 shadow-lg">
                      {cert.icon}
                    </div>

                    <div>
                      <h4 className="text-xl md:text-2xl font-semibold text-gray-100">
                        {cert.title}
                      </h4>
                      <p className="text-gray-400 text-lg mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div className="mt-14">
              <div className="flex items-center gap-4 mb-10">
                <h3 className="text-2xl md:text-3xl font-semibold text-blue-400">
                  Activities
                </h3>
                <div className="flex-1 h-px bg-blue-400/20" />
              </div>

              <div className="space-y-5">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 flex items-center gap-5 hover:border-blue-400/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.1)] transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-300 text-2xl shrink-0">
                      <FaTrophy />
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      {activity}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}