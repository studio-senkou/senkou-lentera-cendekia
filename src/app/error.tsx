'use client'

import { useEffect } from 'react'
import { Navbar } from '@/shared/ui/navbar'
import { Footer, FooterSection, FooterContact, FooterLinksGroup, FooterSocial, FooterBottom, FooterOverlayContact } from '@/shared/ui/footer'
import { Button } from '@/shared/ui/button'
import { Fragment } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <Fragment>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-12">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-neutral-darkest mb-4">500</h1>
        <h2 className="text-2xl md:text-3xl font-medium text-neutral-darkest mb-6">Terjadi Kesalahan</h2>
        <p className="text-lg text-neutral-dark max-w-md mb-8">
          Maaf, terjadi kesalahan pada server kami. Silakan coba beberapa saat lagi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" onClick={() => reset()}>
                Coba Lagi
            </Button>
            <Link href="/">
                <Button variant="outline" size="lg">
                    Kembali ke Beranda
                </Button>
            </Link>
        </div>
      </div>
      <Footer>
        <FooterSection>
            <FooterContact />
            <div className="flex flex-col lg:flex-row space-y-8 lg:space-x-12">
                <FooterLinksGroup
                    title="Services"
                    links={[
                        { label: 'Tutoring Programs', href: '/programs' },
                        { label: 'Online Learning', href: '/online' },
                        { label: 'Test Preparation', href: '/test-prep' },
                        { label: 'Academic Support', href: '/support' },
                    ]}
                />
                <FooterLinksGroup
                    title="About"
                    links={[
                        { label: 'Our Story', href: '/about' },
                        { label: 'Our Teachers', href: '/teachers' },
                        { label: 'Testimonials', href: '/testimonials' },
                        { label: 'Contact Us', href: '/contact' },
                    ]}
                />
                <FooterSocial
                    links={[
                        { platform: 'twitter', url: 'https://twitter.com/lenteracendekia' },
                        { platform: 'facebook', url: 'https://facebook.com/lenteracendekia' },
                        { platform: 'instagram', url: 'https://instagram.com/lenteracendekia' },
                        { platform: 'linkedin', url: 'https://linkedin.com/company/lenteracendekia' },
                    ]}
                />
            </div>
        </FooterSection>
        <FooterBottom />
        <FooterOverlayContact />
      </Footer>
    </Fragment>
  )
}
