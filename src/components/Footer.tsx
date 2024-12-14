import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-zinc-900/80 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-white hover:text-zinc-300 transition-colors">
              Andy Felix
            </Link>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-6">
              <li>
                <Link href="#Home" className="text-zinc-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#About" className="text-zinc-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#Projects" className="text-zinc-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#Contact" className="text-zinc-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="https://github.com/YourGitHubUsername" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/YourLinkedInUsername" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:andy.felix@example.com" className="text-zinc-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-zinc-500 text-sm">
          © {new Date().getFullYear()} Andy Felix. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
