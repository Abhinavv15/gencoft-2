import { motion } from 'framer-motion'

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

const HeartIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{ color: '#ef4444', display: 'inline-block' }}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
)

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: XIcon, name: 'X', href: '#' },
  { icon: LinkedInIcon, name: 'LinkedIn', href: '#' },
  { icon: GitHubIcon, name: 'GitHub', href: '#' }
]

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#logo-grad-foot)" />
      <path d="M2 17L12 22L22 17" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12L12 17L22 12" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
      <defs>
        <linearGradient id="logo-grad-foot" x1="2" y1="2" x2="22" y2="12" gradientUnits="userSpaceOnUse">
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

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <motion.a
              href="#"
              style={{ textDecoration: 'none', display: 'block' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Logo />
            </motion.a>
            <p>
              Building exceptional software solutions for modern businesses.
              Empowering brands to scale and succeed in the digital era.
            </p>

            {/* Social dots */}
            <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
              {socials.map((s, i) => {
                const Icon = s.icon
                return (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    style={{
                      width: 36,
                      height: 36,
                      background: 'rgba(234, 88, 12, 0.08)',
                      border: '1px solid rgba(234, 88, 12, 0.2)',
                      borderRadius: 8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                    }}
                    whileHover={{ scale: 1.1, background: 'rgba(234, 88, 12, 0.2)', color: 'var(--accent-blue)' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {links.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4, color: 'var(--accent-blue)' }}
                  >
                    <span style={{ color: 'var(--accent-blue)', fontSize: '0.7rem' }}>→</span>
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>
                <motion.a
                  href="mailto:support@gencoft.com"
                  className="footer-contact-email"
                  whileHover={{ x: 4 }}
                >
                  support@gencoft.com
                </motion.a>
              </li>
            </ul>

            {/* Glow badge */}
            <motion.div
              style={{
                marginTop: 24,
                padding: '10px 16px',
                background: 'rgba(234, 88, 12, 0.06)',
                border: '1px solid rgba(234, 88, 12, 0.15)',
                borderRadius: 10,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
              }}
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(234, 88, 12, 0)',
                  '0 0 20px 4px rgba(234, 88, 12, 0.1)',
                  '0 0 0 0 rgba(234, 88, 12, 0)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span style={{
                width: 8, height: 8,
                background: '#10b981',
                borderRadius: '50%',
                display: 'inline-block',
                boxShadow: '0 0 8px #10b981',
              }} />
              Available for projects
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© 2026 Gencoft Technologies. All rights reserved.</p>
          <div className="footer-bottom-accent">
            <span>Built with</span>
            <HeartIcon />
            <span>by Gencoft</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
