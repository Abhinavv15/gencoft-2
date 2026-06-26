import React from 'react'
import { motion } from 'framer-motion'
import { onScrollClick } from '../utils/scroll'
import './Hero.css'
import DarkVeil from './DarkVeil'

export default function Hero() {
  return (
    <section className="hero-ellion" id="home">
      {/* Background and Light Effects */}
      <div className="hero-ellion-bg">
        <DarkVeil noiseIntensity={0.08} speed={0.3} warpAmount={0.3} scanlineIntensity={0.3} scanlineFrequency={200} />
        {/* Subtle radial gradients acting as light effects */}
        <div className="hero-ellion-light light-left"></div>
        <div className="hero-ellion-light light-right"></div>
      </div>

      {/* Grid Lines */}
      <div className="hero-ellion-grid">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>

      {/* Main Image Overlay */}
      <div className="hero-ellion-image-wrapper">
        <img src="/hero copy.png" alt="Professional Software Engineer" className="hero-ellion-image" />
        <div className="hero-ellion-image-fade"></div>
      </div>

      {/* Main Content Container */}
      <div className="hero-ellion-content">
        
        {/* Floating Labels */}
        <div className="ellion-floating-label label-left">[ DIGITAL FUTURE ]</div>
        <div className="ellion-floating-label label-center">ENTERPRISE SOFTWARE</div>
        <div className="ellion-floating-label label-right">[ SCALE BEYOND ]</div>

        {/* Huge Left-Aligned Typography */}
        <div className="ellion-typography-container">
          <h1 className="ellion-huge-title">
            <span className="text-white">ENGINEER</span><br/>
            <span className="text-yellow">ROBUST TECH</span><br/>
            <span className="text-white">SOLUTIONS<span className="ellion-registered-mark">&reg;</span></span>
          </h1>
        </div>

        {/* Lower Content Block */}
        <div className="ellion-lower-block">
          <p className="ellion-mission-text">
            Our mission is to elevate your business through high-performance<br/>
            software engineering, combining robust architecture with scalable<br/>
            code to create digital infrastructure that dominates the market.
          </p>

          <div className="ellion-button-group">
            <a href="#contact" className="ellion-btn-white" onClick={onScrollClick('contact')}>
              START PROJECT
            </a>
            <a href="#contact" className="ellion-btn-arrow" onClick={onScrollClick('contact')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Rotating Stamp */}
        <div className="ellion-stamp">
          <svg viewBox="0 0 100 100" width="120" height="120">
            <defs>
              <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
            </defs>
            <text fill="#fff" fontSize="8" fontWeight="600" letterSpacing="2">
              <textPath href="#circlePath">
                GENCOFT TECH &bull; SCALE FAST &bull; 
              </textPath>
            </text>
            <path d="M50 38 L50 62 M45 55 L50 62 L55 55" stroke="#c2bb4a" strokeWidth="2" fill="none" />
          </svg>
        </div>

      </div>
    </section>
  )
}
