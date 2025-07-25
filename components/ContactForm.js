import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, ok: null, error: null });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, error: null });

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form)
    });

    const data = await res.json();
    if (res.ok) {
      setStatus({ loading: false, ok: data.message, error: null });
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus({ loading: false, ok: null, error: data.error || 'Something went wrong.' });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow space-y-4">
      <div>
        <label className="block mb-1 font-semibold">Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Message</label>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.message}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        disabled={status.loading}
        className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        {status.loading ? 'Sending...' : 'Send'}
      </button>
      {status.ok && <p className="text-green-600">{status.ok}</p>}
      {status.error && <p className="text-red-600">{status.error}</p>}
    </form>
  )
}
