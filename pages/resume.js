import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Resume() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Resume</h1>
        <a href="/your-resume.pdf" download>Download PDF</a>
      </div>
      <Footer />
    </>
  )
}
