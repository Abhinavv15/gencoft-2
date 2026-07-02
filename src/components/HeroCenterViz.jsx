import { useEffect, useRef } from 'react'
import './HeroCenterViz.css'

function Particles({ count = 24 }) {
  return (
    <div className="hcv-particles" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="hcv-particle" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${(Math.random() * 4).toFixed(2)}s`,
          animationDuration: `${(3 + Math.random() * 4).toFixed(2)}s`,
          width: `${Math.random() < 0.3 ? 3 : 2}px`,
          height: `${Math.random() < 0.3 ? 3 : 2}px`,
          opacity: (0.2 + Math.random() * 0.5).toFixed(2),
        }} />
      ))}
    </div>
  )
}

export default function HeroCenterViz() {
  return (
    <div className="hcv-scene">
      <Particles />

      {/* Background grid */}
      <div className="hcv-grid" aria-hidden="true" />

      {/* Orbital rings */}
      <div className="hcv-orbit hcv-orbit-1" aria-hidden="true">
        <div className="hcv-orbit-dot" />
      </div>
      <div className="hcv-orbit hcv-orbit-2" aria-hidden="true">
        <div className="hcv-orbit-dot" />
      </div>
      <div className="hcv-orbit hcv-orbit-3" aria-hidden="true">
        <div className="hcv-orbit-dot" />
      </div>

      {/* Central orb */}
      <div className="hcv-orb" aria-hidden="true">
        <div className="hcv-orb-core" />
        <div className="hcv-orb-ring" />
        <div className="hcv-orb-ring hcv-orb-ring-2" />
        <div className="hcv-orb-glow" />
        <div className="hcv-orb-pulse" />
      </div>

      {/* Floating cards */}
      <div className="hcv-card hcv-card-tl">
        <div className="hcv-card-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
          </svg>
        </div>
        <div className="hcv-card-body">
          <span className="hcv-card-title">Dev</span>
          <span className="hcv-card-sub">Full Stack</span>
        </div>
      </div>

      <div className="hcv-card hcv-card-tc">
        <div className="hcv-card-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
          </svg>
        </div>
        <div className="hcv-card-body">
          <span className="hcv-card-title">Cloud</span>
          <span className="hcv-card-sub">AWS · GCP</span>
        </div>
      </div>

      <div className="hcv-card hcv-card-tr">
        <div className="hcv-card-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </div>
        <div className="hcv-card-body">
          <span className="hcv-card-title">AI</span>
          <span className="hcv-card-sub">Agents</span>
        </div>
      </div>

      <div className="hcv-card hcv-card-bl">
        <div className="hcv-card-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
          </svg>
        </div>
        <div className="hcv-card-body">
          <span className="hcv-card-title">Mobile</span>
          <span className="hcv-card-sub">iOS · Android</span>
        </div>
      </div>

      <div className="hcv-card hcv-card-br">
        <div className="hcv-card-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <div className="hcv-card-body">
          <span className="hcv-card-title">SRE</span>
          <span className="hcv-card-sub">Reliability</span>
        </div>
      </div>

      {/* Connection lines from orb to cards */}
      <svg className="hcv-lines" aria-hidden="true">
        <line className="hcv-line" x1="50%" y1="50%" x2="18%" y2="22%" />
        <line className="hcv-line" x1="50%" y1="50%" x2="50%" y2="10%" />
        <line className="hcv-line" x1="50%" y1="50%" x2="82%" y2="22%" />
        <line className="hcv-line" x1="50%" y1="50%" x2="18%" y2="78%" />
        <line className="hcv-line" x1="50%" y1="50%" x2="82%" y2="78%" />
      </svg>
    </div>
  )
}
