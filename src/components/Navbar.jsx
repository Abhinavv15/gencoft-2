import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { onScrollClick } from '../utils/scroll'
import './Navbar.css'

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

const navItems = [
  { label: 'HOME',     id: 'home' },
  { label: 'SERVICES', id: 'services' },
  { label: 'PROJECTS', id: 'projects' },
  { label: 'CONTACT',  id: 'contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setIsOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const closeAndScroll = (id) => (e) => {
    setIsOpen(false)
    setTimeout(() => onScrollClick(id)(e), 280)
  }

  const isLight = theme === 'light'

  return (
    <>
      <nav className={`navbar-ellion ${scrolled ? 'scrolled' : ''} ${isLight ? 'light' : ''}`}>
        <div className="navbar-ellion-container">
          {/* Cursive signature logo */}
          <a href="#home" className="navbar-ellion-logo navbar-sig-logo" onClick={onScrollClick('home')}>
            gencoft
          </a>

          {/* Desktop nav links */}
          <ul className="navbar-ellion-links">
            {navItems.map(({ label, id }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={onScrollClick(id)}>{label}</a>
              </li>
            ))}
          </ul>

          {/* Right controls: theme toggle + hamburger */}
          <div className="navbar-ellion-controls">
            <button
              className="navbar-theme-btn"
              onClick={toggleTheme}
              aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {isLight ? <MoonIcon /> : <SunIcon />}
            </button>

            <button
              className={`navbar-hamburger ${isOpen ? 'open' : ''}`}
              onClick={() => setIsOpen(v => !v)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <span className="ham-line line-1" />
              <span className="ham-line line-2" />
              <span className="ham-line line-3" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`navbar-ellion-drawer ${isLight ? 'light' : ''}`}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <ul className="drawer-links">
              {navItems.map(({ label, id }) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={closeAndScroll(id)}>{label}</a>
                </li>
              ))}
            </ul>

            <button
              className="drawer-theme-btn"
              onClick={() => { toggleTheme(); setIsOpen(false) }}
            >
              {isLight ? <MoonIcon /> : <SunIcon />}
              <span>{isLight ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
