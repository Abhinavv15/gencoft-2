import { useEffect, useState } from 'react'

const TAGS = [
  {
    label: 'React',
    desktop: { top: '5%', left: '32%' },
    mobile: { top: '0%', left: '22%' },
  },
  {
    label: 'AWS',
    desktop: { top: '2%', right: '4%' },
    mobile: { top: '4%', right: '6%' },
  },
  {
    label: 'Flutter',
    desktop: { top: '14%', left: '0%' },
    mobile: { top: '16%', left: '0%' },
  },
  {
    label: 'Node.js',
    desktop: { top: '21%', right: '28%' },
    mobile: { top: '12%', right: '18%' },
  },
  {
    label: 'Python',
    desktop: { top: '33%', left: '18%' },
    mobile: { top: '28%', left: '12%' },
  },
  {
    label: 'Docker',
    desktop: { top: '44%', right: '6%' },
    mobile: { top: '24%', right: '0%' },
  },
  {
    label: 'TypeScript',
    desktop: { top: '51%', left: '4%' },
    mobile: { top: '42%', left: '2%' },
  },
  {
    label: 'Postgres',
    desktop: { top: '58%', right: '18%' },
    mobile: { top: '38%', right: '10%' },
  },
  {
    label: 'AI / ML',
    desktop: { top: '72%', left: '24%' },
    mobile: { top: '54%', left: '20%' },
  },
  {
    label: 'DevOps',
    desktop: { top: '66%', right: '0%' },
    mobile: { top: '50%', right: '2%' },
  },
]

function useMobileLayout(maxWidth = 768) {
  const query = `(max-width: ${maxWidth}px)`
  const [mobile, setMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  )

  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = (event) => setMobile(event.matches)
    mq.addEventListener('change', onChange)
    setMobile(mq.matches)
    return () => mq.removeEventListener('change', onChange)
  }, [query])

  return mobile
}

export default function HeroFloatTags() {
  const mobile = useMobileLayout()

  return (
    <div className={`tr-tags-area${mobile ? ' tr-tags-area--mobile' : ''}`} aria-hidden="true">
      <div className="tr-tags-scene">
        <div className="tr-orb-wrap">
          <div className="tr-orb-halo" />
          <div className="tr-orb-core" />
          <div className="tr-orb-ring tr-orb-ring-1" />
          <div className="tr-orb-ring tr-orb-ring-2" />
          <div className="tr-orb-ring tr-orb-ring-3" />
        </div>
      </div>
      <div className="tr-float-tags">
        {TAGS.map((tag, index) => {
          const pos = mobile ? tag.mobile : tag.desktop
          return (
            <span
              key={tag.label}
              className="tr-tag"
              style={{
                '--slot': index,
                top: pos.top,
                left: pos.left,
                right: pos.right,
                bottom: pos.bottom,
              }}
            >
              {tag.label}
            </span>
          )
        })}
      </div>
    </div>
  )
}
