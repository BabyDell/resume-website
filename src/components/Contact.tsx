'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend or a service like Formspree
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="Contact" className=" w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-serif tracking-wide text-slate-200 mb-12">Contact Me</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-slate-300">
              I'm always open to new opportunities and collaborations. Whether you have a question or interested in working together, feel free to reach out.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>A.Java.Coder7@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Indio, CA</span>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md bg-zinc-800/50 border border-zinc-700 shadow-sm py-2 px-3 text-slate-300 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md bg-zinc-800/50 border border-zinc-700 shadow-sm py-2 px-3 text-slate-300 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-400">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md bg-zinc-800/50 border border-zinc-700 shadow-sm py-2 px-3 text-slate-300 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-zinc-800 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
            >
              Send Message
              <Send className="ml-2 -mr-1 h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

