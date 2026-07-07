import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { onScrollClick } from '../utils/scroll'
import DarkVeil from './DarkVeil'
import './Hero.css'

// Custom SVGs for services based on index/num
function getServiceIcon(num) {
  switch (num) {
    case '01': // Mobile Apps
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    case '02': // Web Apps
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      )
    case '03': // Cloud
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      )
    case '04': // DevOps
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12c-1.8-2-3.5-3-5.5-3a4 4 0 1 0 0 8c2 0 3.7-1 5.5-3Z" />
          <path d="M12 12c1.8 2 3.5 3 5.5 3a4 4 0 1 0 0-8c-2 0-3.7 1-5.5 3Z" />
        </svg>
      )
    case '05': // SRE
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      )
    case '06': // AI Agents
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="15" x2="23" y2="15" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="15" x2="4" y2="15" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
  }
}

export default function Hero() {
  const [serviceIndex, setServiceIndex] = useState(0)
  const [projectIndex, setProjectIndex] = useState(0)

  // Autoplay timers
  useEffect(() => {
    // Cycles services one by one
    const timer = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % services.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Cycles products two by two
    const timer = setInterval(() => {
      setProjectIndex((prev) => (prev + 2) % projects.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const p1 = projects[projectIndex]
  const p2 = projects[(projectIndex + 1) % projects.length]
  const currentService = services[serviceIndex]

  return (
    <section className="hero-redesign-section" id="home">
      {/* Background Dark Veil Shader */}
      <div className="hero-bg-veil">
        <DarkVeil noiseIntensity={0.08} speed={0.3} warpAmount={0.3} scanlineIntensity={0.3} scanlineFrequency={200} />
        <div className="hero-radial-glow glow-left" />
        <div className="hero-radial-glow glow-right" />
      </div>

      <div className="hero-max-container">
        <div className="hero-three-column-grid">
          
          {/* COLUMN 1: Heading, Subtitle, Buttons, Stats Pill */}
          <div className="hero-left-column">
            <div className="hero-welcome-badge">
              <span className="badge-dot" />
              WELCOME TO GENCOFT
            </div>
            
            <h1 className="hero-main-title">
              Web, Mobile <br />
              <span className="highlight-gradient">&amp; Cloud</span> <br />
              Built Right
            </h1>
            
            <p className="hero-description">
              We design, build and deliver comprehensive software products that empower businesses, automate operations and create meaningful impact.
            </p>
            
            <div className="hero-action-buttons">
              <a href="#services" className="hero-btn-primary" onClick={onScrollClick('services')}>
                Explore Solutions
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#projects" className="hero-btn-secondary" onClick={onScrollClick('projects')}>
                Our Products
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </a>
            </div>

            {/* Stats pill at the bottom of the left column */}
            <div className="hero-stats-pill">
              <div className="stat-item">
                <div className="stat-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <div className="stat-text">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Active Projects</span>
                </div>
              </div>
              
              <div className="stat-divider" />
              
              <div className="stat-item">
                <div className="stat-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="stat-text">
                  <span className="stat-number">10k+</span>
                  <span className="stat-label">Users Reached</span>
                </div>
              </div>

              <div className="stat-divider" />

              <div className="stat-item">
                <div className="stat-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className="stat-text">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Vortex & Products (Two Cards) */}
          <div className="hero-center-column">
            {/* Golden animated vortex in background */}
            <div className="vortex-background">
              <div className="vortex-ring ring-1" />
              <div className="vortex-ring ring-2" />
              <div className="vortex-ring ring-3" />
              <div className="vortex-core" />
              <div className="vortex-halo" />
            </div>

            {/* Overlaid sliding product cards */}
            <div className="services-overlay-container">
              <div className="services-cards-stack">
                {/* Card 1 — Slides in from Left */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={p1.id}
                    className="service-floating-card card-upper"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: -15 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                  >
                    <div className="product-card-logo-wrap">
                      <img src={p1.logo} alt={p1.name} className="product-card-logo-img" />
                    </div>
                    <div className="service-card-content">
                      <div className="service-card-title-row">
                        <h3>{p1.name}</h3>
                        <a href={p1.link} target="_blank" rel="noopener noreferrer" className="service-arrow-link">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </a>
                      </div>
                      <span className="product-card-category">{p1.category}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Card 2 — Slides in from Right */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={p2.id}
                    className="service-floating-card card-lower"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 15 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
                  >
                    <div className="product-card-logo-wrap">
                      <img src={p2.logo} alt={p2.name} className="product-card-logo-img" />
                    </div>
                    <div className="service-card-content">
                      <div className="service-card-title-row">
                        <h3>{p2.name}</h3>
                        <a href={p2.link} target="_blank" rel="noopener noreferrer" className="service-arrow-link">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </a>
                      </div>
                      <span className="product-card-category">{p2.category}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Product dots (3 pages total) */}
              <div className="services-carousel-dots">
                {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, idx) => (
                  <button
                    key={idx}
                    className={`carousel-dot ${Math.floor(projectIndex / 2) === idx ? 'active' : ''}`}
                    onClick={() => setProjectIndex(idx * 2)}
                    aria-label={`Go to product slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 3: Services Showcase (One Card) */}
          <div className="hero-right-column">
            <div className="product-showcase-card">
              
              {/* Service Icon Header */}
              <div className="product-logo-header-container">
                <div className="product-logo-reflection-glow" />
                <div className="product-logo-frame">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentService.num}
                      className="service-header-icon-wrap"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    >
                      {getServiceIcon(currentService.num)}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Service Info Slider */}
              <div className="product-slider-content">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentService.num}
                    className="product-info-slide"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.45 }}
                  >
                    <span className="product-eyebrow">OUR SERVICES</span>
                    <h2 className="product-title">{currentService.short}</h2>
                    <span className="product-category">{currentService.name}</span>
                    <p className="product-desc">{currentService.desc}</p>
                    
                    <a
                      href="#services"
                      onClick={onScrollClick('services')}
                      className="product-know-more"
                    >
                      View All Services
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </motion.div>
                </AnimatePresence>

                {/* Service dots */}
                <div className="product-carousel-dots">
                  {services.map((s, idx) => (
                    <button
                      key={s.num}
                      className={`carousel-dot ${serviceIndex === idx ? 'active' : ''}`}
                      onClick={() => setServiceIndex(idx)}
                      aria-label={`Go to service ${s.short}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Brand logo marquee ticker */}
        <div className="hero-trusted-ticker-bar">
          <div className="ticker-label">POWERING INNOVATIVE PRODUCTS</div>
          <div className="ticker-divider" />
          <div className="ticker-wrapper">
            <div className="ticker-track">
              {/* Render twice for continuous infinite scroll */}
              {projects.concat(projects).map((project, idx) => (
                <div className="ticker-logo-item" key={`${project.id}-${idx}`}>
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className="ticker-logo-img"
                    draggable={false}
                  />
                  <span className="ticker-logo-name">{project.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
