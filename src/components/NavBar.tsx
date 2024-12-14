'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function NavBar() {
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 300],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']
  )

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '#Home', label: 'Home' },
    { href: '#About', label: 'About' },
    { href: '#Projects', label: 'Projects' },
    { href: '#Skills', label: 'Skills' },
  ]

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="shadow-custom-white fixed top-5 left-5 right-5 rounded-lg p-4 flex items-center justify-between md:justify-end sm:gap-8 border border-stone-700/[.95] backdrop-blur z-50 mx-5 md:mx-10"
    >
      <Link href="#Home" className="text-xl font-bold text-white md:mr-auto pl-5">
        ANDY FELIX
      </Link>
      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>
      <div className={`flex flex-col md:flex-row gap-5 md:gap-8 pr-5 ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-underline text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  )
}