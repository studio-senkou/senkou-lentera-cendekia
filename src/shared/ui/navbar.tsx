'use client'

import Link from 'next/link'
import { Button } from '@/shared/ui/button'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import Image from 'next/image'
import { sendWhatsappMessage } from '../utils/contact'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [activeSection, setActiveSection] = useState('hero')

    const navigations = [
        { name: 'Home', href: '/', section: 'hero' },
        { name: 'Tentang Kami', href: '/', section: 'features' },
        { name: 'Layanan', href: '/', section: 'blog' },
        { name: 'Pengajar', href: '/', section: 'teachers' },
        { name: 'Artikel', href: '/articles' },
    ]

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const offset = 64 // navbar height
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            })
        }
    }

    const handleNavClick = (e: React.MouseEvent, nav: (typeof navigations)[0]) => {
        if (nav.section && window.location.pathname === '/') {
            e.preventDefault()
            scrollToSection(nav.section)
            setIsOpen(false)
        }
    }

    useEffect(() => {
        let prevScrollPos = window.scrollY

        const handleScroll = () => {
            const currentScrollPos = window.scrollY
            setIsScrolled(currentScrollPos > 50)

            if (prevScrollPos > currentScrollPos) {
                setIsVisible(true)
            } else if (currentScrollPos > 100 && currentScrollPos > prevScrollPos) {
                setIsVisible(false)
            }

            prevScrollPos = currentScrollPos

            const sections = ['hero', 'features', 'blog', 'features-2', 'testimonials', 'teachers']
            const sectionElements = sections.map((id) => document.getElementById(id))

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const element = sectionElements[i]
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 100) {
                        setActiveSection(sections[i])
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const getNavbarStyle = () => {
        if (!isScrolled) {
            return 'bg-neutral-lightest text-neutral-darkest'
        }

        switch (activeSection) {
            case 'hero':
                return 'bg-neutral-lightest text-neutral-darkest'
            default:
                return 'bg-white text-neutral-darkest'
        }
    }

    const getTextStyle = () => {
        if (!isScrolled && activeSection === 'hero') {
            return 'text-neutral-darkest'
        }
        return 'text-neutral-darkest'
    }

    return (
        <header className="h-[64px] z-50 w-full relative">
            <nav
                className={cn(
                    'fixed top-0 left-0 w-full z-50 h-[64px] border-b border-border-default backdrop-blur-[20px] bg-white/90 transition-transform duration-300',
                    isVisible ? 'translate-y-0' : '-translate-y-full'
                )}
            >
                <div className="container mx-auto flex h-full items-center justify-between px-6">
                    <NavbarBrand textStyle={getTextStyle()} />

                    <div className="hidden lg:flex lg:items-center space-x-8">
                        {navigations.map((nav) => (
                            <NavbarLink key={nav.name} href={nav.href} onClick={(e) => handleNavClick(e, nav)}>
                                {nav.name}
                            </NavbarLink>
                        ))}
                        <Button variant="primary" size="sm" onClick={sendWhatsappMessage}>
                            Gabung
                        </Button>
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 rounded-md hover:bg-neutral-lighter/50 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} className={getTextStyle()} /> : <Menu size={24} className={getTextStyle()} />}
                    </button>
                </div>

                {isOpen && (
                    <div className={cn('lg:hidden bg-white/95 backdrop-blur-md border-t border-neutral-lighter/50', getNavbarStyle())}>
                        <div className="container mx-auto px-6 py-4 space-y-4">
                            {navigations.map((nav) => (
                                <NavbarMobileLink key={nav.name} href={nav.href} onClick={(e) => handleNavClick(e, nav)}>
                                    {nav.name}
                                </NavbarMobileLink>
                            ))}
                            <Button variant="primary" className="w-full text-sm h-10 px-6 py-3" onClick={sendWhatsappMessage}>
                                Gabung
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export function NavbarBrand({ textStyle = 'text-text-heading' }: { textStyle?: string }) {
    return (
        <div className={`flex items-center gap-3 text-xl font-medium transition-colors duration-300 ${textStyle}`}>
            <Image src="/logo.png" alt="Lentera Cendekia Logo" width={150} height={40} className="h-8 w-auto object-contain" />
            <span className="font-serif">Lentera Cendekia</span>
        </div>
    )
}

export function NavbarLink({
    href,
    children,
    onClick,
}: {
    href: string
    children: React.ReactNode
    onClick?: (e: React.MouseEvent) => void
}) {
    return (
        <Link href={href} onClick={onClick} className={`text-sm font-medium hover:text-text-heading transition-colors duration-300 relative after:absolute after:-bottom-[21px] after:left-0 after:w-full after:h-[2px] after:bg-lentera-orange after:opacity-0 hover:after:opacity-100 after:transition-opacity`}>
            {children}
        </Link>
    )
}

export function NavbarMobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: (e: React.MouseEvent) => void }) {
    return (
        <Link href={href} onClick={onClick} className="block text-sm font-medium text-text-secondary hover:text-text-heading transition-colors py-2">
            {children}
        </Link>
    )
}
