import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-blue-400 mb-16">
          Let&apos;s Connect
        </h2>

        <div className="bg-white/5 border border-white/10 
        rounded-3xl p-10 space-y-12">

          {/* Email */}
          <div className="flex flex-col items-center gap-4">
            <FaEnvelope size={28} className="text-blue-400" />
            <a
              href="mailto:msubhasmita29@gmail.com"
              className="text-xl font-semibold hover:text-blue-400 transition"
            >
              msubhasmita29@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="grid md:grid-cols-3 gap-8">

            <a
              href="https://www.linkedin.com/in/subhasmita-mishra-224525328"
              target="_blank"
              className="flex flex-col items-center gap-4
              bg-white/5 border border-white/10 
              p-8 rounded-2xl
              hover:border-blue-400
              hover:scale-105
              transition-all duration-300"
            >
              <FaLinkedin size={32} className="text-blue-400" />
              <p className="font-medium">LinkedIn</p>
            </a>

            <a
              href="https://github.com/Subhi2911"
              target="_blank"
              className="flex flex-col items-center gap-4
              bg-white/5 border border-white/10 
              p-8 rounded-2xl
              hover:border-blue-400
              hover:scale-105
              transition-all duration-300"
            >
              <FaGithub size={32} className="text-blue-400" />
              <p className="font-medium">GitHub</p>
            </a>

            <a
              href="https://www.instagram.com/sub_hi.29/"
              target="_blank"
              className="flex flex-col items-center gap-4
              bg-white/5 border border-white/10 
              p-8 rounded-2xl
              hover:border-blue-400
              hover:scale-105
              transition-all duration-300"
            >
              <FaInstagram size={32} className="text-blue-400" />
              <p className="font-medium">Instagram</p>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
