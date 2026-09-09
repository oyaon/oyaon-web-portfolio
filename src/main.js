/**
 * src/main.js — Oyaon Sultan Portfolio
 * Custom cursor · Nav scroll · Scroll reveal
 */

import './style.css'

/* ── CUSTOM CURSOR ──────────────────────────────────────── */
const cursorDot  = document.getElementById('c')
const cursorRing = document.getElementById('cr')
let mx = 0, my = 0, rx = 0, ry = 0

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY
  cursorDot.style.left = mx + 'px'
  cursorDot.style.top  = my + 'px'
})

;(function animateCursor() {
  rx += (mx - rx) * 0.11
  ry += (my - ry) * 0.11
  cursorRing.style.left = rx + 'px'
  cursorRing.style.top  = ry + 'px'
  requestAnimationFrame(animateCursor)
})()

// Expand cursor on interactive elements
document.querySelectorAll('a,button,.pcard,.sk,.cert,.hsvc,.dossier,.exp-block').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorDot.style.width = '12px'; cursorDot.style.height = '12px'
    cursorRing.style.transform = 'scale(1.7) translate(-29%, -29%)'
    cursorRing.style.borderColor = 'rgba(0,229,255,.8)'
  })
  el.addEventListener('mouseleave', () => {
    cursorDot.style.width = '5px'; cursorDot.style.height = '5px'
    cursorRing.style.transform = 'scale(1) translate(-50%,-50%)'
    cursorRing.style.borderColor = 'rgba(0,229,255,.4)'
  })
})

/* ── NAV SCROLL ─────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', scrollY > 50)
}, { passive: true })

/* ── SCROLL REVEAL ──────────────────────────────────────── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target) }
  })
}, { threshold: 0.08 })

document.querySelectorAll('.reveal,.reveal-r').forEach(el => io.observe(el))
