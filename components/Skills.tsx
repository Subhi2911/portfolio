import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaJava,
    FaHtml5,
    FaCss3Alt,
    FaChartBar
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
    SiTailwindcss
} from "react-icons/si";


export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "HTML", icon: <FaHtml5 size={28} /> },
                { name: "CSS", icon: <FaCss3Alt size={28} /> },
                { name: "JavaScript", icon: <SiJavascript size={28} /> },
                { name: "TypeScript (TSX)", icon: <SiTypescript size={28} /> },
                { name: "React", icon: <FaReact size={28} /> },
                { name: "Next.js", icon: <SiNextdotjs size={28} /> },
                { name: "React Native", icon: <SiReact size={28} /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss size={28} /> },
            ],
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: <FaNodeJs size={28} /> },
                { name: "Express", icon: <SiExpress size={28} /> },
                { name: "MongoDB", icon: <SiMongodb size={28} /> },
                { name: "Mongoose", icon: <SiMongoose size={28} /> },
                { name: "MySQL", icon: <SiMysql size={28} /> },
                { name: "Socket.IO", icon: <SiSocketdotio size={28} /> },
            ],
        },
        {
            title: "Languages",
            skills: [
                { name: "Python", icon: <FaPython size={28} /> },
                { name: "Java", icon: <FaJava size={28} /> },
                { name: "C++", icon: <SiCplusplus size={28} /> },
            ],
        },
        {
            title: "Data & Design",
            skills: [
                { name: "Power BI", icon: <FaChartBar size={28} /> },
                { name: "Matplotlib", icon: <FaPython size={28} /> },
                { name: "Tkinter", icon: <FaPython size={28} /> },
                { name: "Turtle", icon: <FaPython size={28} /> },
                { name: "Figma", icon: <SiFigma size={28} /> },
                { name: "Canva", icon: <SiCanva size={28} /> },
            ],
        },
    ];

    return (
        <section id="skills" className="py-16 px-6">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold text-blue-400 mb-24 text-center">
                    Technical Skills
                </h2>

                <div className="space-y-14">
                    {skillCategories.map((category, i) => (
                        <div key={i}>

                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-10">
                                <h3 className="text-2xl font-semibold text-white">
                                    {category.title}
                                </h3>
                                <div className="flex-1 h-px bg-white/10"></div>
                            </div>

                            {/* Skill Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {category.skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="aspect-square
                    flex flex-col items-center justify-center
                    bg-white/5 border border-white/10
                    rounded-2xl
                    transition-all duration-300
                    hover:border-blue-400
                    hover:scale-105
                    hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                                    >
                                        <div className="text-blue-400 mb-3">
                                            {skill.icon}
                                        </div>
                                        <p className="text-gray-300 text-sm font-medium text-center px-2">
                                            {skill.name}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
