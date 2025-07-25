export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-violet-100 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950">
      {/* Blurred background gradient shape */}
      <div
        aria-hidden="true"
        className="absolute -top-16 -right-32 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-blue-400 via-fuchsia-400 to-pink-400 opacity-30 blur-3xl animate-pulse"
      />
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 drop-shadow">
        Hi, I'm{" "}
        <span className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Hariom Bangali
        </span>
      </h1>
      <p className="mb-6 text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-medium drop-shadow">
        MERN Stack Developer
      </p>
      <a
        href="/projects"
        className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transform transition
        hover:bg-gradient-to-l duration-300"
      >
        🚀 View My Work
      </a>
    </section>
  );
}
