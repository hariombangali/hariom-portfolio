import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiHtml5, SiCss3, SiGit, SiTailwindcss } from "react-icons/si";
// Install: npm install react-icons

export default function SkillsList() {
  const skills = [
    { name: "React", icon: <SiReact className="text-blue-500" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-gray-200" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-700" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Git", icon: <SiGit className="text-red-500" /> },
  ];

  return (
    <section className="max-w-3xl mx-auto my-12 px-4">
      <div className="mb-5 text-center">
        <h2 className="text-2xl md:text-3xl font-bold inline-block bg-gradient-to-r from-blue-700 via-purple-700 to-fuchsia-500 bg-clip-text text-transparent mb-2">
          My Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-300">What I'm confident working with:</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="flex items-center gap-2 px-4 py-2 rounded-xl shadow-sm bg-white/80 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 transition 
              hover:scale-105 hover:shadow-md hover:bg-gradient-to-tr hover:from-blue-50 hover:to-fuchsia-50 dark:hover:from-gray-800 dark:hover:to-blue-950
              font-semibold text-base"
          >
            <span className="text-xl">{skill.icon}</span>
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
