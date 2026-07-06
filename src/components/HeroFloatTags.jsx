import { useEffect, useState } from 'react'

const TAGS = [
  {
    label: 'React',
    desktop: { top: '4%', left: '28%' },
    mobile: { top: '2%', left: '26%' },
  },
  {
    label: 'AWS',
    desktop: { top: '3%', right: '2%' },
    mobile: { top: '12%', right: '6%' },
  },
  {
    label: 'Flutter',
    desktop: { top: '20%', left: '0%' },
    mobile: { top: '18%', left: '2%' },
  },
  {
    label: 'Node.js',
    desktop: { top: '22%', left: '42%' },
    mobile: { top: '28%', right: '22%' },
  },
  {
    label: 'Python',
    desktop: { top: '40%', left: '14%' },
    mobile: { top: '38%', left: '20%' },
  },
  {
    label: 'Docker',
    desktop: { top: '42%', right: '2%' },
    mobile: { top: '40%', right: '3%' },
  },
  {
    label: 'TypeScript',
    desktop: { top: '58%', left: '0%' },
    mobile: { top: '56%', left: '2%' },
  },
  {
    label: 'Postgres',
    desktop: { top: '61%', right: '18%' },
    mobile: { top: '64%', left: '42%' },
  },
  {
    label: 'AI / ML',
    desktop: { top: '78%', left: '22%' },
    mobile: { top: '76%', left: '5%' },
  },
  {
    label: 'DevOps',
    desktop: { top: '76%', right: '1%' },
    mobile: { top: '80%', right: '6%' },
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
