// HeroSection.js
export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-violet-100 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950">
      {/* Animated blurred background/gradient */}
      <div aria-hidden className="absolute -top-12 -right-32 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-blue-400 via-pink-400 to-fuchsia-500 opacity-30 blur-3xl animate-pulse" />
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight drop-shadow">
        Hi, I'm <span className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Hariom Bangali</span>
      </h1>
      <p className="mb-6 text-lg md:text-xl font-medium text-gray-700 dark:text-gray-200 drop-shadow">
        MERN Stack Developer crafting modern web solutions.
      </p>
      <div className="flex gap-3 sm:gap-8">
        <a href="#projects" className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-500 text-white font-semibold shadow-lg hover:scale-105 transition duration-200">
          View Projects
        </a>
        <a href="/your-resume.pdf" download className="inline-block px-6 py-2 rounded-full bg-white text-blue-700 font-semibold shadow hover:bg-blue-100 border border-blue-300 transition duration-200">
          Download Resume
        </a>
        <a href="#contact" className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-green-500 to-cyan-400 text-white font-semibold shadow hover:scale-105 transition duration-200">
          Hire Me
        </a>
      </div>
    </section>
  );
}
