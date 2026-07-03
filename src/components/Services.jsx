import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { onScrollClick } from '../utils/scroll'
import ImageWithLoader from './ImageWithLoader'
import { services } from '../data/services'

/* ── Arrow icons ─────────────────────────────── */
const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
)
const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)
const DiagonalArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7v10"/>
  </svg>
)

/* ── Animation Variants ──────────────────────── */
const cardVariants = {
  enter:  (dir) => ({ opacity: 0, x: dir > 0 ? 80  : -80,  scale: 0.96 }),
  center:         ({ opacity: 1, x: 0, scale: 1,   transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }),
  exit:   (dir) => ({ opacity: 0, x: dir > 0 ? -80 :  80,  scale: 0.96, transition: { duration: 0.35 } }),
}
const imgVariants = {
  enter:  (dir) => ({ opacity: 0, x: dir > 0 ? 60  : -60, scale: 1.04 }),
  center:         ({ opacity: 1, x: 0, scale: 1,  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 } }),
  exit:   (dir) => ({ opacity: 0, x: dir > 0 ? -60 :  60, scale: 0.96, transition: { duration: 0.35 } }),
}

export default function Services() {
  const [index, setIndex]     = useState(0)
  const [direction, setDir]   = useState(1)
  const timerRef              = useRef(null)

  const go = useCallback((delta) => {
    setDir(delta)
    setIndex(prev => (prev + delta + services.length) % services.length)
    // reset auto-advance timer on manual interaction
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = setInterval(() => {
        setDir(1)
        setIndex(prev => (prev + 1) % services.length)
      }, 4000)
    }
  }, [])

  // Auto-advance every 4 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDir(1)
      setIndex(prev => (prev + 1) % services.length)
    }, 4000)
    return () => clearInterval(timerRef.current)
  }, [])

  const current = services[index]

  return (
    <section className="svc-root" id="services">

      {/* ── Full-width background watermark ── */}
      <div className="svc-watermark" aria-hidden="true">
        {current.watermark}
      </div>

      <div className="site-shell svc-inner">
        {/* ── Section label (top-center) ── */}
        <div className="svc-top-label">
          <span className="svc-top-dot" />
          What We Do
        </div>

        <h2 className="svc-main-title">
          Our <span className="svc-title-accent">Services</span>
        </h2>

        {/* ── Main stage ── */}
        <div className="svc-stage">

        {/* Left arrow */}
        <button
          className="svc-arrow svc-arrow-left"
          onClick={() => go(-1)}
          aria-label="Previous service"
        >
          <ArrowLeft />
        </button>

        {/* Slide area */}
        <div className="svc-slide-area">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.num}
              className="svc-slide"
              custom={direction}
              variants={{ enter: cardVariants.enter, center: cardVariants.center, exit: cardVariants.exit }}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* ── Info card (left, overlapping) ── */}
              <div className="svc-info-card">
                <span className="svc-service-badge">SERVICE {current.num}</span>
                <h2 className="svc-service-title">{current.name}</h2>
                <p className="svc-service-desc">{current.desc}</p>
                <a href="#contact" className="svc-view-btn" onClick={onScrollClick('contact')}>
                  GET IN TOUCH <DiagonalArrow />
                </a>
              </div>

              {/* ── Image panel (right, behind card) ── */}
              <motion.div
                className="svc-img-panel"
                custom={direction}
                variants={imgVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <ImageWithLoader
                  src={current.image}
                  alt={current.name}
                  className="svc-img"
                  variant="fill"
                  wrapClassName="svc-img-loader"
                  draggable={false}
                />
                {/* Gradient overlay to blend with dark bg */}
                <div className="svc-img-overlay" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right arrow */}
        <button
          className="svc-arrow svc-arrow-right"
          onClick={() => go(1)}
          aria-label="Next service"
        >
          <ArrowRight />
        </button>
      </div>

        {/* ── Dot indicators ── */}
        <div className="svc-dots">
          {services.map((_, i) => (
            <button
              key={i}
              className={`svc-dot ${i === index ? 'active' : ''}`}
              onClick={() => { setDir(i > index ? 1 : -1); setIndex(i) }}
              aria-label={`Go to service ${i + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  )
}
