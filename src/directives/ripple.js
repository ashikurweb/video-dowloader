export default {
  mounted(el) {
    // Ensure the element can contain the ripple
    const computed = window.getComputedStyle(el)
    if (computed.position === 'static') {
      el.style.position = 'relative'
    }
    el.style.overflow = 'hidden'

    el.addEventListener('click', (e) => {
      const rect = el.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const ripple = document.createElement('span')
      ripple.className = 'ripple-circle ' + (el.classList.contains('btn-glossy') ? 'light' : 'dark')
      ripple.style.left = x + 'px'
      ripple.style.top = y + 'px'
      ripple.style.setProperty('--ripple-size', size + 'px')

      el.appendChild(ripple)
      setTimeout(() => ripple.remove(), 500)
    })
  },
}


