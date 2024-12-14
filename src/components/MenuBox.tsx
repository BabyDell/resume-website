import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react';

interface MenuBoxProps {
  navItems: Array<{ href: string; label: string }>
  onClose: () => void
  handleScroll: (href: string) => void
}

export default function MenuBox({ navItems, onClose, handleScroll }: MenuBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-[calc(5rem+20px)] left-5 right-5 bg-black bg-opacity-90 rounded-lg p-4 flex flex-row justify-between border border-stone-700/[.95] backdrop-blur z-40"
    >
      <div className="flex flex-col gap-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-underline text-gray-300 hover:text-white w-fit"
            onClick={(e) => {
              e.preventDefault();
              handleScroll(item.href);
              onClose();
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-4 mt-4 md:mt-0">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-lg">
          <Linkedin className="text-white text-2xl" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-lg">
          <Github className="text-white text-2xl" />
        </a>
        <a href="mailto:andy.felix@example.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-lg">
          <Mail className="text-white text-2xl" />
        </a>
      </div>
    </motion.div>
  )
}

