export default function TestimonialCard({ quote, author }) {
  return (
    <div className="border-l-4 border-blue-600 pl-4 my-4">
      <p className="italic">{quote}</p>
      <p className="font-semibold mt-2">- {author}</p>
    </div>
  )
}
