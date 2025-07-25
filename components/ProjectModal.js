export default function ProjectModal({ project, onClose }) {
  // Display modal with project details
  if (!project) return null
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded p-6 max-w-lg w-full">
        <button onClick={onClose} className="float-right">X</button>
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p>{project.description}</p>
        {/* List images, stack, demo link */}
      </div>
    </div>
  )
}
