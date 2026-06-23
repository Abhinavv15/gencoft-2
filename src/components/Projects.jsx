import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

/* ── Project data (icons via SVG, no emojis) ── */
const projects = [
  {
    id: 'fmc',
    name: 'FindMeCourts',
    number: '01',
    category: 'Sports Platform',
    desc: 'A user-friendly platform that allows you to quickly locate and book nearby tennis, pickleball, badminton courts, soccer turfs, and sports events in just three clicks.',
    tags: ['React', 'JavaScript', 'jQuery', 'Amazon S3', 'AWS'],
    link: '#',
    accent: '#ea580c',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        <path d="M2 12h20"/>
      </svg>
    ),
  },
  {
    id: 'qw',
    name: 'QuizWizard',
    number: '02',
    category: 'EdTech Platform',
    desc: 'An online platform that enables users to create, share, and participate in interactive quizzes across various subjects with real-time leaderboards.',
    tags: ['React', 'Emotion', 'core-js', 'jQuery', 'Amazon S3', 'AWS'],
    link: '#',
    accent: '#ea580c',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
  {
    id: 'stk',
    name: 'Strawket',
    number: '03',
    category: 'Learning Platform',
    desc: 'An extra-curricular learning platform connecting coaches and kids worldwide, enabling skill development beyond the classroom through live and async sessions.',
    tags: ['JavaScript', 'React', 'Bootstrap', 'AWS'],
    link: '#',
    accent: '#ea580c',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    id: 'mu',
    name: 'ManageUpgrades',
    number: '04',
    category: 'Dev Tools',
    desc: 'A platform providing tools and resources for managing software updates and maintenance modes, with Flutter package support and customizable UI components.',
    tags: ['React.js', 'Next.js', 'Tailwind', 'MongoDB'],
    link: '#',
    accent: '#ea580c',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
      </svg>
    ),
  },
]

/* ── Desktop 3D book page-turning transition ── */
const pageVariantsDesktop = {
  enter: (dir) => ({
    rotateY: dir > 0 ? 85 : -85,
    opacity: 0,
    scale: 0.94,
    z: -150,
    x: 0,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    z: 0,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.36, 1],
    },
  },
  exit: (dir) => ({
    rotateY: dir > 0 ? -85 : 85,
    opacity: 0,
    scale: 0.94,
    z: -150,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 1, 0.36, 1],
    },
  }),
}

/* ── Mobile 2D slide fade transition (no 3D distortion on vertical layout) ── */
const pageVariantsMobile = {
  enter: (dir) => ({
    x: dir > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.96,
    rotateY: 0,
    z: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    z: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.36, 1],
    },
  },
  exit: (dir) => ({
    x: dir < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.96,
    rotateY: 0,
    z: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 1, 0.36, 1],
    },
  }),
}




/* ── Arrow icon ── */
const ArrowLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
)
const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)
const ExternalLink = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7v10"/>
  </svg>
)

export default function Projects() {
  const headerRef = useRef(null)
  const isInView = useInView(headerRef, { once: true, margin: '-80px' })
  const [[idx, dir], setIdx] = useState([0, 0])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const go = (newDir) => {
    const next = idx + newDir
    if (next < 0 || next >= projects.length) return
    setIdx([next, newDir])
  }

  const project = projects[idx]
  const activeVariants = isMobile ? pageVariantsMobile : pageVariantsDesktop

  return (
    <section className="pj-root section" id="projects">
      <div className="container">

        {/* Header */}
        <motion.div
          ref={headerRef}
          className="pj-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pj-tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
            </svg>
            Portfolio
          </div>
          <h2 className="pj-title">
            Our <span className="pj-title-accent">Projects</span>
          </h2>
          <p className="pj-subtitle">Featured work that showcases our expertise</p>
        </motion.div>

        {/* Slider viewport */}
        <div className="pj-book">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={project.id}
              className="pj-page"
              custom={dir}
              variants={activeVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                transformOrigin: dir > 0 ? 'left center' : 'right center',
                transformStyle: 'preserve-3d',
              }}
            >

              {/* Left: text side */}
              <motion.div
                className="pj-page-left"
                whileHover={isMobile ? {} : { rotateY: 3, z: 5 }}
                style={{
                  transformOrigin: 'right center',
                  transformStyle: 'preserve-3d',
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 15 }}
              >
                {/* Big background number */}
                <div className="pj-bg-num">{project.number}</div>

                <div className="pj-page-left-inner">
                  <div className="pj-category">{project.category}</div>

                  <div className="pj-icon-wrap">
                    {project.icon}
                  </div>

                  <h3 className="pj-name">{project.name}</h3>
                  <p className="pj-desc">{project.desc}</p>

                  <div className="pj-tags">
                    {project.tags.map((t) => (
                      <span key={t} className="pj-tag">{t}</span>
                    ))}
                  </div>

                  <a href={project.link} className="pj-link" target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink />
                  </a>
                </div>
              </motion.div>

              {/* Right: visual side */}
              <motion.div
                className="pj-page-right"
                whileHover={isMobile ? {} : { rotateY: -3, z: 5 }}
                style={{
                  transformOrigin: 'left center',
                  transformStyle: 'preserve-3d',
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 15 }}
              >
                {/* Decorative grid */}
                <div className="pj-right-grid" />

                {/* Animated glow */}
                <motion.div
                  className="pj-right-glow"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Large icon display */}
                <div className="pj-right-icon">
                  {project.icon}
                </div>

                {/* Corner number watermark */}
                <div className="pj-right-num">{project.number}</div>

                {/* Bottom label */}
                <div className="pj-right-label">{project.name.toUpperCase()}</div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>


        {/* Controls */}
        <div className="pj-controls">
          <motion.button
            className="pj-nav-btn"
            onClick={() => go(-1)}
            disabled={idx === 0}
            whileHover={idx > 0 ? { scale: 1.08 } : {}}
            whileTap={idx > 0 ? { scale: 0.92 } : {}}
            aria-label="Previous project"
          >
            <ArrowLeft />
          </motion.button>

          <div className="pj-progress">
            {projects.map((_, i) => (
              <motion.button
                key={i}
                className={`pj-pip${i === idx ? ' active' : ''}`}
                onClick={() => setIdx([i, i > idx ? 1 : -1])}
                whileHover={{ scale: 1.4 }}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          <motion.button
            className="pj-nav-btn"
            onClick={() => go(1)}
            disabled={idx === projects.length - 1}
            whileHover={idx < projects.length - 1 ? { scale: 1.08 } : {}}
            whileTap={idx < projects.length - 1 ? { scale: 0.92 } : {}}
            aria-label="Next project"
          >
            <ArrowRight />
          </motion.button>

          <motion.span
            className="pj-counter"
            key={idx}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {String(idx + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </motion.span>
        </div>

      </div>
    </section>
  )
}
