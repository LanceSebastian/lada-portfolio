import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:your@email.com?subject=Portfolio inquiry from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0A${form.email}`
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Left */}
        <div>
          <p className="text-stone-400 text-sm tracking-widest uppercase mb-4">Contact</p>
          <h1 className="text-4xl font-light text-stone-900 mb-6">Let's work together</h1>
          <p className="text-stone-500 leading-relaxed mb-8">
            Available for freelance illustration projects, collaborations, and commissions.
            Feel free to reach out — I'd love to hear about your project.
          </p>
          <a
            href="mailto:your@email.com"
            className="text-stone-900 text-sm tracking-wide hover:text-stone-500 transition-colors duration-200"
          >
            your@email.com
          </a>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs tracking-widest uppercase text-stone-400 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border-b border-stone-300 py-2 text-stone-900 placeholder:text-stone-300 focus:outline-none focus:border-stone-900 transition-colors duration-200 bg-transparent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs tracking-widest uppercase text-stone-400 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border-b border-stone-300 py-2 text-stone-900 placeholder:text-stone-300 focus:outline-none focus:border-stone-900 transition-colors duration-200 bg-transparent"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-xs tracking-widest uppercase text-stone-400 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border-b border-stone-300 py-2 text-stone-900 placeholder:text-stone-300 focus:outline-none focus:border-stone-900 transition-colors duration-200 bg-transparent resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="bg-stone-900 text-white text-sm px-8 py-3 tracking-wide hover:bg-stone-700 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  )
}
