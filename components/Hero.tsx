import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                <div>
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Hi, I&apos;m <span className="text-blue-400">Subhasmita Mishra</span>
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg">
                        MERN Stack Developer building scalable, real-time
                        applications using modern technologies.
                    </p>

                    <div className="mt-8 flex gap-6">
                        <a
                            href="https://github.com/Subhi2911"
                            className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/30"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/subhasmita-mishra-224525328"
                            className="px-6 py-3 border border-white/20 rounded-xl hover:border-blue-400 transition"
                        >
                            LinkedIn
                        </a>
                    </div>
                    <div className="mt-12 flex gap-12 text-center">
                        <div>
                            <p className="text-3xl font-bold text-blue-400">2+</p>
                            <p className="text-gray-400 text-sm">Major Projects</p>
                        </div>

                        <div>
                            <p className="text-3xl font-bold text-blue-400">9.21</p>
                            <p className="text-gray-400 text-sm">CGPA</p>
                        </div>

                        <div>
                            <p className="text-3xl font-bold text-blue-400">AI-900</p>
                            <p className="text-gray-400 text-sm">Certified</p>
                        </div>
                    </div>

                </div>


                <div className="relative flex justify-center">
                    <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

                    <div className="relative w-80 h-80">
                        <Image
                            src="/profile.jpeg"
                            alt="Subhasmita"
                            fill
                            className="rounded-3xl border border-white/10 shadow-2xl object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
