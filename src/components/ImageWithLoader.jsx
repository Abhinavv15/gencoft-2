import { useEffect, useRef, useState } from 'react'
import './ImageWithLoader.css'

function ImageIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <path d="M21 15l-5-5L5 21"/>
    </svg>
  )
}

export default function ImageWithLoader({
  src,
  alt = '',
  className = '',
  wrapClassName = '',
  style,
  imgStyle,
  variant = 'default',
  ...props
}) {
  const [status, setStatus] = useState('loading')
  const imgRef = useRef(null)

  useEffect(() => {
    if (!src) {
      setStatus('error')
      return
    }
    setStatus('loading')
    const img = imgRef.current
    if (img?.complete && img.naturalWidth > 0) {
      setStatus('loaded')
    }
  }, [src])

  const showLoader = status === 'loading'
  const showError = status === 'error'
  const showImage = status === 'loaded'

  return (
    <span
      className={`img-loader-wrap img-loader-wrap--${variant}${wrapClassName ? ` ${wrapClassName}` : ''}`}
      style={style}
    >
      {showLoader && (
        <span className="img-loader-state" aria-hidden="true">
          <span className="img-loader-spinner" />
        </span>
      )}

      {showError && (
        <span className="img-loader-state img-loader-fallback" role="img" aria-label={alt || 'Image unavailable'}>
          <ImageIcon />
        </span>
      )}

      {src && (
        <img
          {...props}
          ref={imgRef}
          src={src}
          alt={alt}
          style={imgStyle}
          className={`img-loader-img ${showImage ? 'is-loaded' : ''}${className ? ` ${className}` : ''}`}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      )}
    </span>
  )
}
