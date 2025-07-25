export default function ProjectCard() {
  // Accept project as a prop, map over projects in parent
  return (
    <div className="bg-gray-100 p-4 rounded shadow my-4">
      <h3 className="text-xl font-semibold">Project Title</h3>
      <p className="text-gray-700">Short project description.</p>
      <a href="https://github.com/yourname/project-link" className="text-blue-600 mt-2 inline-block">View Code</a>
    </div>
  )
}
