export default function AboutCard() {
  return (
    <section className="max-w-xl mx-auto my-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-2">About Me</h2>
      <p className="mb-4">
        Hi! I’m Hariom Bangali, an aspiring <span className="font-semibold text-blue-600">MERN Stack Developer</span> with a passion for learning and creating innovative web applications. My journey in technology began with my <span className="font-medium">Bachelor of Computer Applications (BCA)</span>, which I started in 2021 and successfully completed in 2024. Currently, I am further strengthening my foundation and knowledge through a <span className="font-medium">Master of Computer Applications (MCA)</span> program, which I began in 2024.
      </p>
      <p className="mb-4">
        In January 2025, I started an intensive internship focused on the <span className="font-semibold text-green-700">MERN stack</span>. Through this hands-on experience, I’ve worked on two meaningful projects, building proficiency in <span className="font-medium">HTML, JavaScript, CSS, React, Node.js, Express, and MongoDB</span>. This has given me 6 months of real-world project experience, sharpening both my coding and problem-solving abilities.
      </p>
      <p className="mb-4">
        While my curiosity for technology also draws me towards ethical hacking and security, my current focus is launching my career in web development. I enjoy building seamless user interfaces and robust backend systems, and I am eager to join a dynamic team where I can keep learning and contribute my growing skill set. I thrive on challenges, value teamwork, and always strive to stay updated with the latest in tech.
      </p>
      {/* Skills or Timeline example */}
      <ul className="mt-4 text-sm text-gray-700 space-y-2">
        <li>
          🎓 <span className="font-semibold">Education:</span> BCA (2021–2024), MCA (2024–Present)
        </li>
        <li>
          💻 <span className="font-semibold">Key Skills:</span> MERN Stack, HTML, CSS, JavaScript, React, Node.js, Express, MongoDB
        </li>
        <li>
          🚀 <span className="font-semibold">Internship:</span> 6 months MERN Stack Development, 2 major projects
        </li>
        <li>
          🛡️ <span className="font-semibold">Interest:</span> Tech & Hacking (Ethical), staying updated with the latest in web tech
        </li>
      </ul>
    </section>
  )
}
