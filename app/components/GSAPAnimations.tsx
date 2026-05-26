'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type Cleanup = () => void

const splitSelector = 'main h1, main h2'
const revealSelector =
  'main section, main article, main form, main [data-gsap-reveal]'
const imageSelector = 'main img'
const magneticSelector =
  'main article, main [data-gsap-magnetic]'

function splitTextNode(textNode: Text) {
  const fragment = document.createDocumentFragment()

  textNode.textContent?.split('').forEach((char) => {
    const wrap = document.createElement('span')
    const inner = document.createElement('span')

    wrap.className = 'gsap-split-wrap'
    inner.className = 'gsap-split-char'
    inner.textContent = char
    wrap.style.display = char === ' ' ? 'inline' : 'inline-block'
    wrap.style.overflow = 'hidden'
    wrap.style.verticalAlign = 'top'
    wrap.style.whiteSpace = char === ' ' ? 'pre' : 'normal'
    inner.style.display = char === ' ' ? 'inline' : 'inline-block'
    inner.style.whiteSpace = char === ' ' ? 'pre' : 'normal'

    wrap.appendChild(inner)
    fragment.appendChild(wrap)
  })

  textNode.replaceWith(fragment)
}

function splitElementText(element: HTMLElement) {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.textContent?.trim()) {
        return NodeFilter.FILTER_REJECT
      }

      if (node.parentElement?.closest('.gsap-split-wrap')) {
        return NodeFilter.FILTER_REJECT
      }

      return NodeFilter.FILTER_ACCEPT
    },
  })

  const textNodes: Text[] = []
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode as Text)
  }

  textNodes.forEach(splitTextNode)
}

function setupCravLoader(): Cleanup {
  const loader = document.createElement('div')
  const word = document.createElement('div')
  const bar = document.createElement('div')

  loader.className = 'gsap-crav-loader'
  loader.setAttribute('aria-hidden', 'true')
  word.textContent = 'PREPARING BAKER\'S INN...'
  word.className = 'gsap-crav-loader-text'
  bar.className = 'gsap-crav-loader-bar'

  loader.appendChild(word)
  loader.appendChild(bar)
  document.body.appendChild(loader)

  const timeline = gsap.timeline({ defaults: { ease: 'power4.inOut' } })
  timeline
    .fromTo(word, { yPercent: 120 }, { yPercent: 0, duration: 0.7 })
    .fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: 0.75 }, '-=0.35')
    .to(word, { yPercent: -120, duration: 0.55 }, '+=0.12')
    .to(loader, { clipPath: 'inset(0 0 100% 0)', duration: 0.85 }, '-=0.25')
    .set(loader, { display: 'none' })

  return () => {
    timeline.kill()
    loader.remove()
  }
}

function setupSplitText(): Cleanup {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(splitSelector),
  ).filter((element) => !element.dataset.gsapSplit)

  elements.forEach((element) => {
    element.dataset.gsapSplit = 'true'
    element.dataset.gsapOriginal = element.innerHTML
    element.setAttribute('aria-label', element.textContent || '')

    const echo = document.createElement('span')
    echo.className = 'gsap-heading-echo'
    echo.textContent = element.textContent || ''
    element.style.position = 'relative'
    element.appendChild(echo)

    splitElementText(element)

    const chars = element.querySelectorAll('.gsap-split-char')
    gsap.fromTo(
      chars,
      {
        yPercent: 115,
        rotateZ: 7,
        opacity: 0,
      },
      {
        yPercent: 0,
        rotateZ: 0,
        opacity: 1,
        duration: 0.95,
        ease: 'expo.out',
        stagger: {
          each: 0.018,
          from: 'start',
        },
        scrollTrigger: {
          trigger: element,
          start: 'top 84%',
          once: true,
        },
      },
    )

    gsap.fromTo(
      echo,
      { xPercent: -8, opacity: 0 },
      {
        xPercent: 0,
        opacity: 0.11,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 88%',
          once: true,
        },
      },
    )
  })

  return () => {
    elements.forEach((element) => {
      if (element.dataset.gsapOriginal) {
        element.innerHTML = element.dataset.gsapOriginal
      }

      element.removeAttribute('aria-label')
      element.style.position = ''
      delete element.dataset.gsapSplit
      delete element.dataset.gsapOriginal
    })
  }
}

function setupScrollReveals() {
  const revealElements = Array.from(
    document.querySelectorAll<HTMLElement>(revealSelector),
  )

  revealElements.forEach((element, index) => {
    const direction = index % 2 === 0 ? -1 : 1

    gsap.fromTo(
      element,
      {
        autoAlpha: 0,
        y: 115,
        x: direction * 22,
        rotate: direction * 1.5,
        clipPath: 'inset(12% 0 12% 0 round 24px)',
      },
      {
        autoAlpha: 1,
        y: 0,
        x: 0,
        rotate: 0,
        clipPath: 'inset(0% 0 0% 0 round 0px)',
        duration: 1.05,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 88%',
          end: 'bottom 28%',
          toggleActions: 'play none none reverse',
        },
      },
    )
  })
}

function setupImageMotion() {
  const images = Array.from(document.querySelectorAll<HTMLElement>(imageSelector))

  images.forEach((image, index) => {
    const direction = index % 2 === 0 ? 1 : -1

    gsap.fromTo(
      image,
      {
        scale: 1.08,
        yPercent: -4,
        rotate: direction * 0.35,
      },
      {
        scale: 1.01,
        yPercent: 4,
        rotate: direction * -0.35,
        ease: 'none',
        scrollTrigger: {
          trigger: image,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.85,
        },
      },
    )
  })
}

function setupMagneticInertia(): Cleanup {
  const cleanups: Cleanup[] = []
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(magneticSelector),
  ).filter((element) => !element.closest('[data-gsap-no-magnetic]'))

  elements.forEach((element) => {
    const moveX = gsap.quickTo(element, 'x', {
      duration: 0.85,
      ease: 'expo.out',
    })
    const moveY = gsap.quickTo(element, 'y', {
      duration: 0.85,
      ease: 'expo.out',
    })
    const rotate = gsap.quickTo(element, 'rotate', {
      duration: 1.1,
      ease: 'elastic.out(1, 0.42)',
    })
    const scale = gsap.quickTo(element, 'scale', {
      duration: 0.55,
      ease: 'power3.out',
    })

    const onMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const relX = event.clientX - rect.left - rect.width / 2
      const relY = event.clientY - rect.top - rect.height / 2
      const strength = 0.045

      moveX(relX * strength)
      moveY(relY * strength)
      rotate(relX * 0.006)
      scale(1.012)
    }

    const onLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        duration: 1.15,
        ease: 'elastic.out(1, 0.35)',
      })
    }

    element.addEventListener('mousemove', onMove)
    element.addEventListener('mouseleave', onLeave)

    cleanups.push(() => {
      element.removeEventListener('mousemove', onMove)
      element.removeEventListener('mouseleave', onLeave)
      gsap.set(element, { clearProps: 'x,y,rotate,scale' })
    })
  })

  return () => cleanups.forEach((cleanup) => cleanup())
}

function setupCravingTicker(): Cleanup {
  const ticker = document.createElement('div')
  const track = document.createElement('div')
  const text = 'CRAVING FRESH BAKES · HOT FROM THE OVEN · BAKER\'S INN · '

  ticker.className = 'gsap-crav-ticker'
  ticker.setAttribute('aria-hidden', 'true')
  track.className = 'gsap-crav-ticker-track'
  track.textContent = text.repeat(8)
  ticker.appendChild(track)
  document.body.appendChild(ticker)

  const tween = gsap.to(track, {
    xPercent: -50,
    duration: 18,
    ease: 'none',
    repeat: -1,
  })

  gsap.fromTo(
    ticker,
    { yPercent: 120 },
    {
      yPercent: 0,
      duration: 0.55,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top -20%',
        toggleActions: 'play none none reverse',
      },
    },
  )

  return () => {
    tween.kill()
    ticker.remove()
  }
}

function setupSmoothMouseFollower(): Cleanup {
  if (window.matchMedia('(pointer: coarse)').matches) {
    return () => {}
  }

  const cursor = document.createElement('div')
  const cursorDot = document.createElement('div')
  const label = document.createElement('span')

  cursor.className = 'gsap-crav-cursor'
  cursorDot.className = 'gsap-crav-cursor-dot'
  label.className = 'gsap-crav-cursor-label'
  label.textContent = 'VIEW'

  cursor.appendChild(label)
  document.body.appendChild(cursor)
  document.body.appendChild(cursorDot)

  const cursorX = gsap.quickTo(cursor, 'x', {
    duration: 0.55,
    ease: 'power3.out',
  })
  const cursorY = gsap.quickTo(cursor, 'y', {
    duration: 0.55,
    ease: 'power3.out',
  })
  const dotX = gsap.quickTo(cursorDot, 'x', {
    duration: 0.18,
    ease: 'power3.out',
  })
  const dotY = gsap.quickTo(cursorDot, 'y', {
    duration: 0.18,
    ease: 'power3.out',
  })

  const interactiveSelector =
    'a, button, main article, [role="button"], [data-gsap-cursor]'

  const onMove = (event: MouseEvent) => {
    cursorX(event.clientX)
    cursorY(event.clientY)
    dotX(event.clientX)
    dotY(event.clientY)
  }

  const onOver = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    const interactive = target.closest(interactiveSelector)

    if (!interactive) {
      return
    }

    const text =
      interactive.getAttribute('data-gsap-cursor') ||
      (interactive.tagName === 'ARTICLE' ? 'VIEW' : 'OPEN')

    label.textContent = text
    document.body.classList.add('gsap-cursor-active')
  }

  const onOut = (event: MouseEvent) => {
    const target = event.target as HTMLElement

    if (target.closest(interactiveSelector)) {
      document.body.classList.remove('gsap-cursor-active')
    }
  }

  window.addEventListener('mousemove', onMove)
  document.addEventListener('mouseover', onOver)
  document.addEventListener('mouseout', onOut)

  gsap.set([cursor, cursorDot], { xPercent: -50, yPercent: -50 })
  gsap.fromTo(
    [cursor, cursorDot],
    { autoAlpha: 0, scale: 0.6 },
    { autoAlpha: 1, scale: 1, duration: 0.4, ease: 'power3.out' },
  )

  return () => {
    window.removeEventListener('mousemove', onMove)
    document.removeEventListener('mouseover', onOver)
    document.removeEventListener('mouseout', onOut)
    document.body.classList.remove('gsap-cursor-active')
    cursor.remove()
    cursorDot.remove()
  }
}

function setupPageEnter() {
  gsap.fromTo(
    'main',
    {
      autoAlpha: 0,
      y: 34,
      scale: 0.985,
      clipPath: 'inset(0 0 12% 0)',
    },
    {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      clipPath: 'inset(0 0 0% 0)',
      duration: 0.9,
      ease: 'expo.out',
    },
  )
}

function setupScrollProgress(): Cleanup {
  const progress = document.createElement('div')
  progress.setAttribute('aria-hidden', 'true')
  progress.className = 'gsap-scroll-progress'
  document.body.appendChild(progress)

  gsap.to(progress, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: document.documentElement,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.2,
    },
  })

  return () => progress.remove()
}

export default function GSAPAnimations() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reduceMotion) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const cleanups: Cleanup[] = []

    const ctx = gsap.context(() => {
      cleanups.push(setupCravLoader())
      setupPageEnter()
      cleanups.push(setupScrollProgress())
      cleanups.push(setupCravingTicker())
      cleanups.push(setupSmoothMouseFollower())
      cleanups.push(setupSplitText())
      setupScrollReveals()
      setupImageMotion()
      cleanups.push(setupMagneticInertia())
    })

    ScrollTrigger.refresh()

    return () => {
      cleanups.forEach((cleanup) => cleanup())
      ctx.revert()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [pathname])

  return null
}
