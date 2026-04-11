"use client";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaChartBar,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiSocketdotio,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiMongoose,
  SiCplusplus,
  SiFigma,
  SiCanva,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

import { BsBootstrap } from "react-icons/bs";

type SkillLevel = "Beginner" | "Intermediate" | "Proficient";

type Skill = {
  name: string;
  icon: React.ReactNode;
  color: string;
  level: SkillLevel;
};

export default function Skills() {
  const skillCategories: { title: string; skills: Skill[] }[] = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 size={26} />, color: "#E34F26", level: "Proficient" },
        { name: "CSS", icon: <FaCss3Alt size={26} />, color: "#1572B6", level: "Proficient" },
        { name: "JavaScript", icon: <SiJavascript size={26} />, color: "#F7DF1E", level: "Proficient" },
        { name: "TypeScript", icon: <SiTypescript size={26} />, color: "#3178C6", level: "Intermediate" },
        { name: "React", icon: <FaReact size={26} />, color: "#61DAFB", level: "Proficient" },
        { name: "Next.js", icon: <SiNextdotjs size={26} />, color: "#ffffff", level: "Intermediate" },
        { name: "React Native", icon: <SiReact size={26} />, color: "#61DAFB", level: "Proficient" },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={26} />, color: "#06B6D4", level: "Proficient" },
        { name: "Bootstrap", icon: <BsBootstrap size={26} />, color: "#7952B3", level: "Proficient" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs size={26} />, color: "#339933", level: "Proficient" },
        { name: "Express", icon: <SiExpress size={26} />, color: "#ffffff", level: "Intermediate" },
        { name: "MongoDB", icon: <SiMongodb size={26} />, color: "#47A248", level: "Proficient" },
        { name: "Mongoose", icon: <SiMongoose size={26} />, color: "#880000", level: "Intermediate" },
        { name: "MySQL", icon: <SiMysql size={26} />, color: "#4479A1", level: "Proficient" },
        { name: "Socket.IO", icon: <SiSocketdotio size={26} />, color: "#ffffff", level: "Intermediate" },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: <FaPython size={26} />, color: "#3776AB", level: "Proficient" },
        { name: "Java", icon: <FaJava size={26} />, color: "#f89820", level: "Intermediate" },
        { name: "C++", icon: <SiCplusplus size={26} />, color: "#00599C", level: "Proficient" },
      ],
    },
    {
      title: "Data & Design",
      skills: [
        { name: "Power BI", icon: <FaChartBar size={26} />, color: "#F2C811", level: "Intermediate" },
        { name: "Matplotlib", icon: <FaPython size={26} />, color: "#3776AB", level: "Proficient" },
        { name: "Tkinter", icon: <FaPython size={26} />, color: "#3776AB", level: "Proficient" },
        { name: "Turtle", icon: <FaPython size={26} />, color: "#3776AB", level: "Proficient" },
        { name: "Figma", icon: <SiFigma size={26} />, color: "#F24E1E", level: "Intermediate" },
        { name: "Canva", icon: <SiCanva size={26} />, color: "#00C4CC", level: "Intermediate" },
      ],
    },
  ];

  const getLevelConfig = (level: SkillLevel) => {
    switch (level) {
      case "Proficient":
        return {
          text: "text-emerald-300",
          badge: "bg-emerald-500/10 border-emerald-400/20 text-emerald-300",
          bar: "w-full bg-gradient-to-r from-emerald-400 to-green-500",
          glow: "shadow-[0_0_18px_rgba(16,185,129,0.25)]",
        };
      case "Intermediate":
        return {
          text: "text-yellow-300",
          badge: "bg-yellow-500/10 border-yellow-400/20 text-yellow-300",
          bar: "w-2/3 bg-gradient-to-r from-yellow-300 to-orange-400",
          glow: "shadow-[0_0_18px_rgba(250,204,21,0.22)]",
        };
      case "Beginner":
        return {
          text: "text-pink-300",
          badge: "bg-pink-500/10 border-pink-400/20 text-pink-300",
          bar: "w-1/3 bg-gradient-to-r from-pink-400 to-rose-400",
          glow: "shadow-[0_0_18px_rgba(244,114,182,0.2)]",
        };
    }
  };

  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-sm rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300 mb-5">
            My Toolbox
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Technical Skills
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-7 text-base md:text-lg">
            Technologies I use to build modern, responsive, and real-time digital
            experiences across frontend, backend, programming, and design.
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, i) => (
            <div key={i}>
              {/* Category Heading */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
              </div>

              {/* Skills Grid */}
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => {
                  const level = getLevelConfig(skill.level);

                  return (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/[0.06] hover:shadow-[0_12px_40px_rgba(59,130,246,0.12)]"
                    >
                      {/* top glow line */}
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="flex items-center gap-4">
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-black/20 transition-transform duration-300 group-hover:scale-110"
                            style={{
                              color: skill.color,
                              boxShadow: `0 0 20px ${skill.color}25`,
                            }}
                          >
                            {skill.icon}
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-white">
                              {skill.name}
                            </h4>
                            <p className={`text-sm mt-1 ${level.text}`}>
                              {skill.level}
                            </p>
                          </div>
                        </div>

                        <span
                          className={`text-xs px-3 py-1 rounded-full border ${level.badge}`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>Proficiency</span>
                          <span>{skill.level}</span>
                        </div>

                        <div className="h-2.5 w-full rounded-full bg-white/10 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${level.bar} ${level.glow} transition-all duration-700`}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}