import { useState } from "react";
import { PaperAirplaneIcon, UserIcon, EnvelopeIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid"; // npm install @heroicons/react

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, ok: null, error: null });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, error: null });

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      setStatus({ loading: false, ok: data.message, error: null });
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus({ loading: false, ok: null, error: data.error || "Something went wrong." });
    }
  };

  return (
    <section className="relative max-w-xl mx-auto my-16 px-4">
      {/* Glassy background gradient shape */}
      <div
        aria-hidden="true"
        className="absolute -top-16 -left-16 w-72 h-72 bg-gradient-to-tr from-blue-400 via-fuchsia-400 to-pink-400 opacity-35 blur-3xl rounded-full"
      />
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white/70 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-2xl backdrop-blur-md p-8 space-y-6"
      >
        <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-500 text-transparent bg-clip-text mb-2 text-center tracking-wider flex items-center justify-center gap-2">
          <PaperAirplaneIcon className="h-7 w-7 text-blue-600 rotate-12" />
          Contact Me
        </h2>
        {/* Name */}
        <label className="block">
          <span className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-semibold">
            <UserIcon className="w-5 h-5 text-blue-400" />
            Name
          </span>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-100 transition"
            value={form.name}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        {/* Email */}
        <label className="block">
          <span className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-semibold">
            <EnvelopeIcon className="w-5 h-5 text-fuchsia-400" />
            Email
          </span>
          <input
            type="email"
            name="email"
            required
            placeholder="you@email.com"
            className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-100 transition"
            value={form.email}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        {/* Message */}
        <label className="block">
          <span className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-semibold">
            <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5 text-pink-400" />
            Message
          </span>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Type your message..."
            className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-100 transition resize-none"
            value={form.message}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        {/* Button & feedback */}
        <div className="flex flex-col items-center gap-2">
          <button
            type="submit"
            disabled={status.loading}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-fuchsia-500 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg hover:scale-105 hover:shadow-xl active:scale-100 transition-all focus:outline-none"
          >
            <PaperAirplaneIcon className="w-5 h-5 rotate-12" />
            {status.loading ? "Sending..." : "Send"}
          </button>
          {status.ok && <p className="text-green-700 dark:text-green-400 font-medium">{status.ok}</p>}
          {status.error && <p className="text-red-600 font-medium">{status.error}</p>}
        </div>
      </form>
    </section>
  );
}
