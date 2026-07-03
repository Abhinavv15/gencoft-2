const TAGS = [
  { label: 'React', top: '0%', left: '0%' },
  { label: 'AWS', top: '0%', right: '0%' },
  { label: 'Flutter', top: '18%', left: '0%' },
  { label: 'Node.js', top: '18%', right: '0%' },
  { label: 'Python', top: '36%', left: '0%' },
  { label: 'Docker', top: '36%', right: '0%' },
  { label: 'TypeScript', top: '54%', left: '0%' },
  { label: 'Postgres', top: '54%', right: '0%' },
  { label: 'AI / ML', top: '72%', left: '0%' },
  { label: 'DevOps', top: '72%', right: '0%' },
]

export default function HeroFloatTags() {
  return (
    <div className="tr-tags-area" aria-hidden="true">
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
        {TAGS.map((tag, index) => (
          <span
            key={tag.label}
            className="tr-tag"
            style={{
              '--slot': index,
              top: tag.top,
              left: tag.left,
              right: tag.right,
              bottom: tag.bottom,
            }}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  )
}
