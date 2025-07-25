export default function BlogPostPreview() {
  // Accept post as a prop, map over posts in parent
  return (
    <div className="bg-white rounded shadow p-4 my-2">
      <h3 className="text-xl font-bold">Post Title</h3>
      <p className="text-gray-700">Blog excerpt or summary goes here.</p>
      <a href="/blog/post-slug" className="text-blue-600">Read More</a>
    </div>
  )
}
