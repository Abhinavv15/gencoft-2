import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    await new Promise(r => setTimeout(r, 1400))
    setSending(false)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(234,88,12,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          borderRadius: '50%',
        }} />

        <motion.div
          className="section-header"
          ref={ref}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="section-tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Get In Touch
          </div>
          <h2 className="section-title">
            Contact <span className="gradient-text">Us</span>
          </h2>
        </motion.div>

        <motion.div
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left info */}
          <motion.div className="contact-info" variants={itemVariants}>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            >
              <h2>
                Let's Build Something<br />
                <span className="gradient-text">Amazing Together</span>
              </h2>
              <p>
                Have a project in mind? We'd love to hear about it.
                Reach out and let's discuss how we can help you achieve your goals.
              </p>
              <motion.a
                href="mailto:support@gencoft.com"
                className="contact-email"
                whileHover={{ scale: 1.03, x: 4 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="contact-email-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                support@gencoft.com
              </motion.a>

              {/* Feature bullets */}
              <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                    ), text: 'Fast Response — within 24 hours' },
                  { icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    ), text: 'Serving clients worldwide' },
                  { icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    ), text: 'NDA available on request' },
                ].map((item, i) => (
                  <motion.div
                    key={item.text}
                    style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                  >
                    <span style={{
                      width: 36, height: 36,
                      background: 'rgba(234,88,12,0.1)',
                      border: '1px solid rgba(234,88,12,0.2)',
                      borderRadius: 8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: 'var(--accent-blue)',
                    }}>
                      {item.icon}
                    </span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right form */}
          <motion.div
            className="contact-form-card"
            variants={itemVariants}
            whileHover={{ scale: 1.015, rotateY: -4, rotateX: 2, z: 10 }}
            transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          >

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <motion.input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <motion.input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <motion.textarea
                  id="contact-message"
                  name="message"
                  placeholder="How can we help you?"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.button
                    key="sent"
                    type="button"
                    className="form-submit sent"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}><polyline points="20 6 9 17 4 12"/></svg>
                    Message Sent!
                  </motion.button>
                ) : (
                  <motion.button
                    key="send"
                    type="submit"
                    className="form-submit"
                    disabled={sending}
                    whileHover={!sending ? { scale: 1.02 } : {}}
                    whileTap={!sending ? { scale: 0.97 } : {}}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {sending ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          style={{ display: 'inline-block' }}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
                        </motion.span>
                        Sending...
                      </>
                    ) : (
                      <>Send Message <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></>
                    )}
                  </motion.button>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
