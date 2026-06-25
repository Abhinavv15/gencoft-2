import React from 'react'
import { motion } from 'framer-motion'
import { onScrollClick } from '../utils/scroll'
import findMeCourtLogo from '../assets/activepass logo findmecourt.png'
import bracketoroLogo from '../assets/bracketoro logo.svg'
import quizWizardLogo from '../assets/quizwizard logo.png'
import strawketLogo from '../assets/strawket logo.png'
import brandFlyersLogo from '../assets/brandflyers logo.png'

const containerV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
}
const itemV = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="hero-cinematic" id="home">

      {/* Fullscreen video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-cinema-video"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />

      {/* Dark cinematic overlay */}
      <div className="hero-cinema-overlay" />

      {/* Centered content */}
      <motion.div
        className="hero-cinema-content"
        variants={containerV}
        initial="hidden"
        animate="visible"
      >

        {/* Top badge pill */}
        <motion.div className="hero-cinema-badge" variants={itemV}>
          <span className="hero-cinema-badge-pill">NEW</span>
          <span>Introducing AI-Powered Web Design</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1 className="hero-cinema-heading" variants={itemV}>
          GENCOFT<br/>
          <span className="hero-cinema-heading-sub">TECHNOLOGIES</span>
        </motion.h1>

        {/* Description */}
        <motion.p className="hero-cinema-desc" variants={itemV}>
          Stunning design. Blazing performance. Built by AI, refined by experts.
          We shape striking digital identities through bold contrasts and meaningful motion.
          This is web design, wildly reimagined.
        </motion.p>

        {/* CTA buttons */}
        <motion.div className="hero-cinema-ctas" variants={itemV}>
          <motion.a
            href="#contact"
            className="hero-cinema-btn-primary"
            onClick={onScrollClick('contact')}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Us
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.a>

          <motion.a
            href="#services"
            className="hero-cinema-btn-ghost"
            onClick={onScrollClick('services')}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            Our Services
          </motion.a>
        </motion.div>

        {/* Trust strip */}
        <motion.div className="hero-cinema-trust" variants={itemV}>
          <span className="hero-cinema-trust-label">Trusted by the teams behind</span>
          <div className="hero-cinema-logos">
            {[
              { src: findMeCourtLogo,  name: 'FindMeCourt' },
              { src: bracketoroLogo,   name: 'Bracketoro'  },
              { src: quizWizardLogo,   name: 'QuizWizard'  },
              { src: strawketLogo,     name: 'Strawket'    },
              { src: brandFlyersLogo,  name: 'BrandFlyers' },
            ].map(({ src, name }) => (
              <div key={name} className="hero-trust-pill">
                <img src={src} alt={name} className="hero-trust-logo" />
                <span className="hero-trust-name">{name}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}
