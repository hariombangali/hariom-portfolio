import Image from "next/image"; // Next.js optimized images
import { AcademicCapIcon, BriefcaseIcon, SparklesIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

export default function AboutCard() {
  return (
    <section className="relative max-w-2xl mx-auto my-12">
      {/* Fancy blurred gradient background shape */}
      <div
        aria-hidden="true"
        className="absolute -top-12 -right-20 h-72 bg-gradient-to-tr from-blue-400 via-violet-500 to-fuchsia-400 rounded-full opacity-25 blur-2xl"
      />
      <div className="relative z-10 rounded-2xl bg-white/80 dark:bg-gray-900/80 shadow-xl backdrop-blur-lg p-8 border border-gray-200 dark:border-gray-700 overflow-visible">
        {/* Profile Image */}
        <div className="flex justify-center -mt-20 mb-4">
          <div className="relative w-32 h-32 rounded-full border-4 border-white dark:border-gray-900 shadow-lg overflow-hidden bg-gradient-to-tr from-blue-100 via-purple-200 to-fuchsia-200">
            <Image
              src="/profile.jpg" // <-- your image path here, place in /public
              alt="Hariom Bangali Portrait"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </div>
        <div className="flex items-center mb-3 justify-center">
          <SparklesIcon className="h-9 w-9 text-purple-500 bg-white bg-opacity-60 p-1 rounded-full shadow" />
          <h2 className="ml-3 text-3xl font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-transparent bg-clip-text drop-shadow">
            About Me
          </h2>
        </div>
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-100 mb-4 text-center">
          Hi! I’m <span className="font-semibold text-blue-900 dark:text-blue-200">Hariom Bangali</span>, a passionate <span className="font-semibold text-blue-700">MERN Stack Developer</span> eager to craft innovative digital experiences. I hold a <b>BCA</b> (2021–2024) and am pursuing <b>MCA</b> (2024–Present), blending solid academic foundations with real-world coding.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 text-gray-900 dark:text-gray-100">
          <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950/50 rounded-lg p-3">
            <AcademicCapIcon className="h-6 w-6 text-blue-500" />
            <div>
              <div className="font-semibold">Education</div>
              <div className="text-sm">BCA (2021–2024), MCA (2024–Present)</div>
            </div>
          </div>
          <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950/40 rounded-lg p-3">
            <BriefcaseIcon className="h-6 w-6 text-green-500" />
            <div>
              <div className="font-semibold">Experience</div>
              <div className="text-sm">6 months MERN Internship (2025), 2 major projects</div>
            </div>
          </div>
          <div className="flex gap-3 items-start bg-yellow-50 dark:bg-yellow-900/40 rounded-lg p-3">
            <ShieldCheckIcon className="h-6 w-6 text-yellow-600" />
            <div>
              <div className="font-semibold">Interests</div>
              <div className="text-sm">Ethical Hacking, Latest Web Tech</div>
            </div>
          </div>
          <div className="flex gap-3 items-start bg-pink-50 dark:bg-pink-900/40 rounded-lg p-3">
            <SparklesIcon className="h-6 w-6 text-pink-500" />
            <div>
              <div className="font-semibold">Skills</div>
              <div className="text-sm">React, Node.js, Express, MongoDB, HTML, CSS, JavaScript</div>
            </div>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mt-4 text-base text-center">
          I thrive on challenges and continuous learning, aiming to join a vibrant team where I can keep growing and deliver real value. Although I’m fascinated by security and tech hacking, my current focus is web development!
        </p>
      </div>
    </section>
  );
}
