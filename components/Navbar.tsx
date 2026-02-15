export default function Navbar() {
  return (
    <nav className="fixed w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-blue-400">
          Subhasmita.dev
        </h1>

        <div className="hidden md:flex gap-10 text-gray-300">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#education" className="hover:text-blue-400 transition">Education</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
