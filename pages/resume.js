import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { DocumentTextIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline" // npm install @heroicons/react

export default function Resume() {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] container mx-auto max-w-2xl px-6 py-12 flex flex-col items-center justify-start">
        <div className="flex items-center gap-3 mb-5">
          <DocumentTextIcon className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-fuchsia-500 to-pink-600 bg-clip-text text-transparent tracking-tight">
            Resume
          </h1>
        </div>
        <a
          href="/your-resume.pdf"
          download
          className="inline-flex items-center px-6 py-2 mb-8 bg-gradient-to-r from-blue-600 to-fuchsia-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition focus:outline-none"
        >
          <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
          Download PDF
        </a>
        {/* OPTIONAL: Inline Summary for recruiters/SEO */}
        <div className="w-full bg-white/90 dark:bg-gray-900/80 rounded-xl shadow mb-10 p-6 border border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-bold mb-3 text-blue-800 dark:text-blue-300">Highlights</h2>
          <ul className="space-y-2 text-gray-800 dark:text-gray-100">
            <li>
              <span className="font-semibold">MERN Stack Developer</span> with 6+ months internship & real-world project experience
            </li>
            <li>
              <span className="font-semibold">Education:</span> BCA (2021–2024), MCA (2024–Present)
            </li>
            <li>
              <span className="font-semibold">Key Skills:</span> React, Node.js, Express, MongoDB, JavaScript, HTML, CSS
            </li>
            <li>
              <span className="font-semibold">Interests:</span> Web Dev, Ethical Hacking, Learning new tech
            </li>
          </ul>
        </div>
        {/* END OPTIONAL section */}
        {/* Optionally, embed or preview PDF: */}
        {/* <iframe src="/your-resume.pdf" className="w-full h-96 border rounded-lg shadow" /> */}
      </main>
      <Footer />
    </>
  )
}
