import React from 'react'
import { motion } from 'framer-motion'
import { onScrollClick } from '../utils/scroll'
import './Hero.css'
import DarkVeil from './DarkVeil'

export default function Hero() {
  return (
    <section className="hero-ellion" id="home">
      {/* Signature Logo */}
      <div className="hero-signature-logo">gencoft</div>

      {/* Background and Light Effects */}
      <div className="hero-ellion-bg">
        <DarkVeil noiseIntensity={0.08} speed={0.3} warpAmount={0.3} scanlineIntensity={0.3} scanlineFrequency={200} />
        {/* Subtle radial gradients acting as light effects */}
        <div className="hero-ellion-light light-left"></div>
        <div className="hero-ellion-light light-right"></div>
      </div>

      <div className="bento-container">
        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Top Left (Tall) */}
          <div className="bento-card bento-card-tl" style={{ padding: 0, background: 'transparent', border: 'none', boxShadow: 'none', overflow: 'hidden' }}>
            <img src="/lines.png" alt="Lines of Code" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '16px', transform: 'scale(1.8)' }} />
          </div>

          {/* Top Center (Wide) */}
          <div className="bento-card bento-card-tm bg-glass">
            <div className="tm-icon-row" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#c2bb4a' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 8px rgba(194,187,74,0.4))' }}>
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 8px rgba(194,187,74,0.4))' }}>
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="bento-stats-row">
              <div className="bento-stat">
                <h3 className="bento-title">Successful Deployments</h3>
                <div className="bento-metric">4,875 <span className="text-yellow" style={{ fontSize: '2rem' }}>♥</span></div>
              </div>
              <div className="bento-stat">
                <h3 className="bento-title">Active Managed Users</h3>
                <div className="bento-metric">57K <span className="bento-trend">+10%</span></div>
              </div>
            </div>
          </div>

          {/* Top Right (Tall) */}
          <div className="bento-card bento-card-tr tr-custom-card">
            <div className="tr-bg-glow"></div>
            <div className="tr-bg-dots"></div>
            <div className="tr-content">
              <p className="tr-subtitle">EXPERT ENGINEERING</p>
              <h3 className="tr-title">
                Overtaking<br />the human<br />brain <span className="tr-donut"></span>
              </h3>
            </div>
          </div>

          {/* Center Image Breakout */}
          <div className="bento-center-image-wrapper">
            <img src="/back2.png" alt="Professional IT Expert" className="bento-center-image" />
          </div>

          {/* Bottom Left */}
          <div className="bento-card bento-card-bl custom-bl-card-v2">
            <div className="bl-globe-bg">
               <svg viewBox="0 0 100 100" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2" fill="none">
                 <circle cx="50" cy="50" r="45" />
                 <ellipse cx="50" cy="50" rx="20" ry="45" />
                 <ellipse cx="50" cy="50" rx="45" ry="15" />
                 <line x1="5" y1="50" x2="95" y2="50" />
                 <line x1="50" y1="5" x2="50" y2="95" />
               </svg>
            </div>
            
            <h2 className="bl-heading-massive">
              Smart<br/>
              Digital<br/>
              Infrastructure<br/>
              For Your<br/>
              Business
            </h2>
          </div>

          {/* Bottom Center */}
          <div className="bento-card bento-card-bm bg-glass" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '20px 30px' }}>
            <div style={{ flex: 1, paddingRight: '20px' }}>
              <h2 className="bento-heading-medium" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 200 }}>We Build the Future of Tech</h2>
              <p className="bento-subtitle" style={{ fontSize: '1.1rem', fontFamily: "'Outfit', sans-serif", fontWeight: 200, opacity: 0.8 }}>Crafting Scalable Enterprise Solutions</p>
            </div>
            <div className="callout-container">
              <div className="callout-card">
                <div className="callout-icon-wrapper">
                  <div className="callout-icon-inner">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                      <rect x="9" y="9" width="6" height="6"></rect>
                      <line x1="9" y1="1" x2="9" y2="4"></line>
                      <line x1="15" y1="1" x2="15" y2="4"></line>
                      <line x1="9" y1="20" x2="9" y2="23"></line>
                      <line x1="15" y1="20" x2="15" y2="23"></line>
                      <line x1="20" y1="9" x2="23" y2="9"></line>
                      <line x1="20" y1="14" x2="23" y2="14"></line>
                      <line x1="1" y1="9" x2="4" y2="9"></line>
                      <line x1="1" y1="14" x2="4" y2="14"></line>
                    </svg>
                  </div>
                </div>
                <div className="callout-text-content">
                  <p className="callout-text-sub">AI Integration</p>
                  <p className="callout-text-main">Active</p>
                </div>
              </div>
              
              <div className="callout-card">
                <div className="callout-icon-wrapper">
                  <div className="callout-icon-inner">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="callout-text-content">
                  <p className="callout-text-sub">Cloud Infra</p>
                  <p className="callout-text-main">Enterprise</p>
                </div>
              </div>
              
              <div className="callout-card">
                <div className="callout-icon-wrapper">
                  <div className="callout-icon-inner">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                </div>
                <div className="callout-text-content">
                  <p className="callout-text-sub">Web3 Security</p>
                  <p className="callout-text-main">Deployed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right */}
          <div className="bento-card bento-card-br bg-glass flex-center" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="fireflies-container">
              <div className="firefly"></div>
              <div className="firefly"></div>
              <div className="firefly"></div>
              <div className="firefly"></div>
              <div className="firefly"></div>
            </div>
            <div className="bento-logo-icon" style={{ position: 'relative', zIndex: 2 }}>
              <svg viewBox="0 0 100 100" width="60" height="60">
                <circle cx="50" cy="30" r="15" stroke="#c2bb4a" strokeWidth="3" fill="none" />
                <circle cx="35" cy="60" r="15" stroke="#c2bb4a" strokeWidth="3" fill="none" />
                <circle cx="65" cy="60" r="15" stroke="#c2bb4a" strokeWidth="3" fill="none" />
              </svg>
              <h3 className="bento-logo-text">GENCOFT</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
