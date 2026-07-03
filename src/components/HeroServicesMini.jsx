import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '../data/services'
import { onScrollClick } from '../utils/scroll'
import './HeroServicesMini.css'

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -48 : 48, transition: { duration: 0.3 } }),
}

export default function HeroServicesMini() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = useCallback((step) => {
    setDirection(step)
    setIndex((i) => (i + step + services.length) % services.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => go(1), 4000)
    return () => clearInterval(timer)
  }, [go])

  const current = services[index]

  return (
    <div className="hero-svc-mini">
      <div className="hero-svc-mini-header">
        <span className="hero-svc-mini-label">OUR SERVICES</span>
        <span className="hero-svc-mini-count">{current.num} / 06</span>
      </div>

      <div className="hero-svc-mini-stage">
        <button
          type="button"
          className="hero-svc-mini-arrow"
          onClick={() => go(-1)}
          aria-label="Previous service"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>

        <div className="hero-svc-mini-viewport">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.num}
              className="hero-svc-mini-slide"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <div className="hero-svc-mini-body">
                <span className="hero-svc-mini-badge">{current.num}</span>
                <h3 className="hero-svc-mini-title">{current.short}</h3>
                <p className="hero-svc-mini-name">{current.name}</p>
                <p className="hero-svc-mini-desc">{current.desc}</p>
                <a href="#services" className="hero-svc-mini-link" onClick={onScrollClick('services')}>
                  View all services →
                </a>
              </div>
              <span className="hero-svc-mini-watermark" aria-hidden="true">{current.watermark}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          className="hero-svc-mini-arrow"
          onClick={() => go(1)}
          aria-label="Next service"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      <div className="hero-svc-mini-dots">
        {services.map((s, i) => (
          <button
            key={s.num}
            type="button"
            className={`hero-svc-mini-dot${i === index ? ' active' : ''}`}
            onClick={() => {
              setDirection(i > index ? 1 : -1)
              setIndex(i)
            }}
            aria-label={`Go to ${s.short}`}
          />
        ))}
      </div>
    </div>
  )
}
