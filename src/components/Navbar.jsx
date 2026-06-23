import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#logo-grad-nav)" />
      <path d="M2 17L12 22L22 17" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12L12 17L22 12" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
      <defs>
        <linearGradient id="logo-grad-nav" x1="2" y1="2" x2="22" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ea580c" />
          <stop offset="1" stopColor="#fb923c" />
        </linearGradient>
      </defs>
    </svg>
    <span style={{
      fontFamily: "var(--font-primary)",
      fontSize: '1.25rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: '#f8fafc',
    }}>
      Gencoft
    </span>
  </div>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.07 + 0.2, duration: 0.4 }
    })
  }

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.a
          href="#"
          style={{ textDecoration: 'none' }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(false)}
        >
          <Logo />
        </motion.a>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navItems.map((item, i) => (
            <motion.li
              key={item.label}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
            >
              <a href={item.href}>{item.label}</a>
            </motion.li>
          ))}
          <motion.li
            custom={navItems.length}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
          >
            <a href="#contact" className="nav-cta">Get In Touch</a>
          </motion.li>
        </ul>

        {/* Hamburger Menu Toggle (Mobile/Tablet only) */}
        <button
          className="nav-hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line line-1 ${isOpen ? 'open' : ''}`} />
          <span className={`hamburger-line line-2 ${isOpen ? 'open' : ''}`} />
          <span className={`hamburger-line line-3 ${isOpen ? 'open' : ''}`} />
        </button>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="mobile-nav-links">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.1, duration: 0.3 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08 + 0.1, duration: 0.3 }}
              >
                <a
                  href="#contact"
                  className="mobile-nav-cta"
                  onClick={() => setIsOpen(false)}
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
