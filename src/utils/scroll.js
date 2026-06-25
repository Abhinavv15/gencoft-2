/**
 * Smoothly scroll to a section by its id.
 * Falls back to instant scroll if the element isn't found.
 */
export function scrollTo(sectionId) {
  const el = document.getElementById(sectionId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

/**
 * Returns an onClick handler that scrolls to sectionId
 * and prevents the default anchor jump.
 */
export function onScrollClick(sectionId, extra) {
  return (e) => {
    e.preventDefault()
    scrollTo(sectionId)
    if (typeof extra === 'function') extra()
  }
}
