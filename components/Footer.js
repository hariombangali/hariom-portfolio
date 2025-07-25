import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full z-40 bg-white/85 dark:bg-gray-900/90 border-t border-gray-200 dark:border-gray-700 px-4 py-3 shadow-inner flex flex-col md:flex-row items-center justify-between gap-3 text-gray-600 dark:text-gray-300 text-sm backdrop-blur">
      <div>
        &copy; {new Date().getFullYear()} <span className="font-bold">HariomBangali</span>. All rights reserved.
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/hariombangali"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black hover:dark:text-white transition"
          aria-label="GitHub"
        >
          <FaGithub size={21} />
        </a>
        <a
          href="https://linkedin.com/in/hariombangali" // update with your real LinkedIn username!
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 hover:dark:text-blue-400 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={21} />
        </a>
        <a
          href="mailto:hariombangali882@email.com"
          className="hover:text-red-600 transition"
          aria-label="Mail"
        >
          <FaEnvelope size={20} />
        </a>
      </div>
      <div className="hidden sm:inline text-gray-400 dark:text-gray-500 text-xs">
        Built with <span className="text-blue-500 font-semibold">Next.js</span> &amp; <span className="text-cyan-500 font-semibold">Tailwind CSS</span>
      </div>
    </footer>
  );
}
