'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { ReactNode } from 'react'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

interface HomeMotionProps {
    children: ReactNode
}

export function HomeMotion({ children }: HomeMotionProps) {
    const rootRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const root = rootRef.current

        if (!root) return

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (reducedMotion) return

        const context = gsap.context(() => {
            const heroSection = root.querySelector<HTMLElement>('[data-gsap-hero]')

            if (heroSection) {
                gsap.from(heroSection, {
                    opacity: 0,
                    y: 56,
                    duration: 1.05,
                    ease: 'power3.out',
                })
            }

            gsap.utils.toArray<HTMLElement>('[data-gsap-reveal]', root).forEach((element) => {
                gsap.fromTo(
                    element,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.9,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: element,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                )
            })

            gsap.utils.toArray<HTMLElement>('[data-gsap-card]', root).forEach((element, index) => {
                gsap.fromTo(
                    element,
                    { opacity: 0, y: 28, scale: 0.98 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.75,
                        delay: index * 0.05,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: element,
                            start: 'top 88%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                )
            })

            gsap.utils.toArray<HTMLElement>('[data-gsap-parallax]', root).forEach((element, index) => {
                gsap.to(element, {
                    yPercent: index % 2 === 0 ? -10 : 10,
                    xPercent: index % 2 === 0 ? 4 : -4,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: root,
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 0.8,
                    },
                })
            })
        }, root)

        return () => context.revert()
    }, [])

    return <div ref={rootRef}>{children}</div>
}
