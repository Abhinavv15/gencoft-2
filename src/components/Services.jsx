import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const MobileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
)
const WebIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)
const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>
)

const WhatWeDoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

const services = [
  { icon: MobileIcon, name: 'Mobile Development', desc: 'High-performance Android & iOS apps built with the latest technologies, delivering seamless user experiences.', color: '#ea580c' },
  { icon: WebIcon,    name: 'Web Applications',   desc: 'Responsive and scalable web applications for modern businesses that grow with your needs.', color: '#fb923c' },
  { icon: ShieldIcon, name: 'Security Solutions',  desc: 'Robust security implementations to protect your digital assets and keep your users safe.', color: '#f97316' },
  { icon: CloudIcon,  name: 'Cloud Solutions',     desc: 'Scalable cloud infrastructure and deployment strategies that power modern applications.', color: '#ea580c' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section services" id="services">
      <div className="container">
        <motion.div
          className="section-header"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          ref={ref}
        >
          <div className="section-tag">
            <WhatWeDoIcon /> What We Do
          </div>
          <h2 className="section-title">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive software solutions for your business needs
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.name}
                className="service-card"
                variants={cardVariants}
                whileHover={{ scale: 1.04, rotateY: 6, rotateX: -4, z: 15 }}
                transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              >

                <div className="service-corner" />
                <motion.div
                  className="service-icon-wrap"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                  style={{ color: service.color }}
                >
                  <Icon />
                </motion.div>
                <h3 className="service-name">{service.name}</h3>
                <p className="service-desc">{service.desc}</p>

                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: 0, left: 0,
                    height: '2px',
                    background: `linear-gradient(90deg, ${service.color}, transparent)`,
                    width: '0%',
                    borderRadius: '0 0 0 var(--radius-lg)',
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
