'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import MenuBox from './MenuBox'
import { Menu, X } from 'lucide-react'

const SCROLL_OFFSET = 100; // Adjust this value based on your navbar height

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
    { href: '#Projects', label: 'Projects' },
    { href: '#About', label: 'About' },
    { href: '#Skills', label: 'Skills' },
    { href: '#Contact', label: 'Contact' },
  ]

  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - SCROLL_OFFSET;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  }

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className="shadow-custom-white fixed top-5 left-5 right-5 rounded-lg p-4 flex items-center justify-between md:justify-end sm:gap-8 border border-stone-700/[.95] backdrop-blur z-50 mx-5 md:mx-10"
      >
        <Link href="#Home" className="text-xl font-bold text-white md:mr-auto pl-5" onClick={(e) => {
          e.preventDefault();
          handleScroll('#Home');
        }}>
          ANDY FELIX
        </Link>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        <div className={`flex-col md:flex-row gap-5 md:gap-8 pr-5 hidden md:flex`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-underline text-gray-300 hover:text-white"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.href);
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.nav>
      {isMenuOpen && <MenuBox navItems={navItems} onClose={() => setIsMenuOpen(false)} handleScroll={handleScroll} />}
    </>
  )
}

