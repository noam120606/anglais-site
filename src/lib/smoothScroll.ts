type ScrollTarget = string | HTMLElement | null

const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)

function resolveElement(target: ScrollTarget): HTMLElement | null {
  if (typeof target === 'string') {
    return document.getElementById(target)
  }
  return target
}

export function smoothScrollTo(target: ScrollTarget, duration = 500) {
  const element = resolveElement(target)
  if (!element) return

  const startY = window.scrollY
  const targetRect = element.getBoundingClientRect()
  const targetY = startY + targetRect.top
  const startTime = performance.now()

  const step = (now: number) => {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeInOutQuad(progress)
    const nextY = startY + (targetY - startY) * eased
    window.scrollTo({ top: nextY })
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}
