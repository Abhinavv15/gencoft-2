import React from 'react'
import { onScrollClick } from '../utils/scroll'
import './Hero.css'
import DarkVeil from './DarkVeil'
import HeroServicesMini from './HeroServicesMini'
import HeroProjectLogos from './HeroProjectLogos'
import HeroFloatTags from './HeroFloatTags'

export default function Hero() {
  return (
    <section className="hero-ellion" id="home">
      {/* Background FX */}
      <div className="hero-ellion-bg">
        <DarkVeil noiseIntensity={0.08} speed={0.3} warpAmount={0.3} scanlineIntensity={0.3} scanlineFrequency={200} />
        <div className="hero-ellion-light light-left"></div>
        <div className="hero-ellion-light light-right"></div>
      </div>

      <div className="bento-container">
        <div className="bento-grid">

          {/* Top Left — product logo carousel */}
          <div className="bento-card bento-card-tl tl-logos-card">
            <HeroProjectLogos />
          </div>

          {/* Top Center — Gencoft Technologies branding */}
          <div className="bento-card bento-card-tm bg-glass tm-brand-card">
            <div className="tm-brand-left">
              <div className="tm-brand-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h2 className="tm-brand-name">Gencoft Technologies</h2>
              <p className="tm-brand-tagline">Comprehensive software solutions for your business needs</p>
            </div>
            <div className="tm-brand-right">
              <span className="tm-brand-watermark" aria-hidden="true">GENCOFT</span>
              <div className="tm-brand-chips">
                <span className="tm-brand-chip">Web Apps</span>
                <span className="tm-brand-chip">Mobile</span>
                <span className="tm-brand-chip">Cloud</span>
                <span className="tm-brand-chip">AI Agents</span>
              </div>
            </div>
          </div>

          {/* Top Right — glowing copy */}
          <div className="bento-card bento-card-tr tr-custom-card">
            <div className="tr-bg-glow"></div>
            <div className="tr-bg-dots"></div>

            <HeroFloatTags />

            <div className="tr-content">
              <p className="tr-subtitle">FULL-STACK SOLUTIONS</p>
              <h3 className="tr-title">
                Web, Mobile<br />&amp; Cloud<br />Built Right <span className="tr-donut"></span>
              </h3>
            </div>
          </div>

          {/* Center — mini services carousel */}
          <div className="bento-center-image-wrapper bento-center-services">
            <HeroServicesMini />
          </div>

          {/* Bottom Left — key metrics stats */}
          <div className="bento-card bento-card-bl bl-stats-card bg-glass">
            <p className="bl-stats-eyebrow">BY THE NUMBERS</p>
            <div className="bl-stats-grid">
              <div className="bl-stat-item">
                <span className="bl-stat-num">10+</span>
                <span className="bl-stat-label">Active Projects</span>
              </div>
              <div className="bl-stat-item">
                <span className="bl-stat-num">10k+</span>
                <span className="bl-stat-label">Users Reached</span>
              </div>
              <div className="bl-stat-item">
                <span className="bl-stat-num">5k+</span>
                <span className="bl-stat-label">Deployments</span>
              </div>
              <div className="bl-stat-item">
                <span className="bl-stat-num">10+</span>
                <span className="bl-stat-label">Projects Delivered</span>
              </div>
            </div>
            <div className="bl-ai-badge">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              AI-Aided Development
            </div>
          </div>

          {/* Bottom Center — future of tech + all 6 service callout cards */}
          <div className="bento-card bento-card-bm bg-glass bento-bm-layout">
            <div className="bm-text-block">
              <h2 className="bento-heading-medium">We Build the Future of Tech</h2>
              <p className="bento-subtitle">Crafting Scalable Enterprise Solutions</p>
            </div>
            <div className="callout-container">
              {/* Card 1: Mobile + Web */}
              <div className="callout-card">
                <div className="callout-icon-wrapper">
                  <div className="callout-icon-inner">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>
                  </div>
                </div>
                <div className="callout-text-content">
                  <p className="callout-text-sub">Mobile Apps</p>
                  <p className="callout-text-main">Web Apps</p>
                </div>
              </div>

              {/* Card 2: Cloud + DevOps */}
              <div className="callout-card">
                <div className="callout-icon-wrapper">
                  <div className="callout-icon-inner">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                    </svg>
                  </div>
                </div>
                <div className="callout-text-content">
                  <p className="callout-text-sub">Cloud Solution</p>
                  <p className="callout-text-main">DevOps</p>
                </div>
              </div>

              {/* Card 3: SRE + AI Agents */}
              <div className="callout-card">
                <div className="callout-icon-wrapper">
                  <div className="callout-icon-inner">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/><line x1="12" y1="2" x2="12" y2="4"/>
                    </svg>
                  </div>
                </div>
                <div className="callout-text-content">
                  <p className="callout-text-sub">SRE</p>
                  <p className="callout-text-main">AI Agents</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right — CTA card */}
          <div className="bento-card bento-card-br bento-cta-card">
            <div className="fireflies-container">
              <div className="firefly"></div>
              <div className="firefly"></div>
              <div className="firefly"></div>
            </div>
            <div className="bento-cta-content">
              <p className="bento-cta-label">READY TO BUILD?</p>
              <h3 className="bento-cta-heading">Let's Start<br/>a Project</h3>
              <a href="#contact" className="bento-cta-btn" onClick={onScrollClick('contact')}>
                Get in Touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
