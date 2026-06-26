import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { onScrollClick } from '../utils/scroll'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'ABOUT', id: 'about' },
    { label: 'WORK', id: 'work' },
    { label: 'SERVICES', id: 'services' },
    { label: 'CONTACT',  id: 'contact' },
  ]

  return (
    <nav className={`navbar-ellion ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-ellion-container">
        {/* Logo */}
        <a
          href="#home"
          className="navbar-ellion-logo"
          onClick={onScrollClick('home')}
        >
          gencoft
        </a>

        {/* Desktop links */}
        <ul className="navbar-ellion-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={onScrollClick(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
