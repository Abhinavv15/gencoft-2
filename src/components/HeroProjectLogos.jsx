import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import ImageWithLoader from './ImageWithLoader'
import { onScrollClick } from '../utils/scroll'
import './HeroProjectLogos.css'

const fadeVariants = {
  enter: { opacity: 0, scale: 0.88, y: 8 },
  center: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, scale: 0.92, y: -8, transition: { duration: 0.3 } },
}

export default function HeroProjectLogos() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % projects.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  const current = projects[index]

  return (
    <div className="hero-pj-logos">
      <div className="hero-pj-logos-header">
        <span className="hero-pj-logos-label">OUR PRODUCTS</span>
        <span className="hero-pj-logos-count">{current.number} / 06</span>
      </div>

      <div className="hero-pj-logos-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="hero-pj-logos-slide"
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <div className="hero-pj-logos-img-wrap">
              <ImageWithLoader
                src={current.logo}
                alt={current.name}
                className="hero-pj-logos-img"
                variant="icon"
                wrapClassName="hero-pj-logos-img-loader"
                draggable={false}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hero-pj-logos-dots">
        {projects.map((p, i) => (
          <button
            key={p.id}
            type="button"
            className={`hero-pj-logos-dot${i === index ? ' active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Show ${p.name} logo`}
          />
        ))}
      </div>

      <div className="hero-pj-logos-footer">
        <span className="hero-pj-logos-name">{current.name}</span>
        <a href="#projects" className="hero-pj-logos-link" onClick={onScrollClick('projects')} aria-label={`View ${current.name}`}>
          →
        </a>
      </div>
    </div>
  )
}
