import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { onScrollClick, scrollTo } from '../utils/scroll'

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
)

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
)

const LogoMark = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#logo-grad-nav)" />
    <path d="M2 17L12 22L22 17" stroke="#c2bb4a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 12L12 17L22 12" stroke="#d4cc60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
    <defs>
      <linearGradient id="logo-grad-nav" x1="2" y1="2" x2="22" y2="12" gradientUnits="userSpaceOnUse">
        <stop stopColor="#c2bb4a" />
        <stop offset="1" stopColor="#d4cc60" />
      </linearGradient>
    </defs>
  </svg>
)

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact',  id: 'contact'  },
  ]

  const closeAndScroll = (id) => {
    setIsOpen(false)
    // slight delay so drawer animates out first on mobile
    setTimeout(() => scrollTo(id), 50)
  }

  return (
    <>
      <motion.nav
        className={`navbar-capsule ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo — scrolls to top */}
        <motion.a
          href="#home"
          className="capsule-logo-link"
          onClick={onScrollClick('home')}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <LogoMark />
          <span className="capsule-logo-text">Gencoft</span>
        </motion.a>

        <div className="capsule-sep" />

        {/* Desktop links */}
        <ul className="capsule-links">
          {navItems.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 + 0.3, duration: 0.35 }}
            >
              <a
                href={`#${item.id}`}
                onClick={onScrollClick(item.id)}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Get In Touch CTA */}
        <motion.a
          href="#contact"
          className="capsule-cta"
          onClick={onScrollClick('contact')}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Get In Touch
        </motion.a>

        {/* Theme toggle */}
        <motion.button
          className="capsule-theme-btn"
          onClick={toggleTheme}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </motion.button>

        {/* Hamburger (mobile) */}
        <button
          className="capsule-hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line line-1 ${isOpen ? 'open' : ''}`} />
          <span className={`hamburger-line line-2 ${isOpen ? 'open' : ''}`} />
          <span className={`hamburger-line line-3 ${isOpen ? 'open' : ''}`} />
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-nav-drawer"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="mobile-nav-links">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.1, duration: 0.3 }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); closeAndScroll(item.id) }}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08 + 0.1, duration: 0.3 }}
              >
                <a
                  href="#contact"
                  className="mobile-nav-cta"
                  onClick={(e) => { e.preventDefault(); closeAndScroll('contact') }}
                >
                  Get In Touch
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
