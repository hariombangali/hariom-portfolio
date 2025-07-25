export default function SkillsList() {
  const skills = ["React", "Node.js", "MongoDB", "Express.js"] // fill your skills
  return (
    <div className="flex flex-wrap gap-4 justify-center my-6">
      {skills.map(skill => <span className="bg-gray-200 px-3 py-1 rounded" key={skill}>{skill}</span>)}
    </div>
  )
}
