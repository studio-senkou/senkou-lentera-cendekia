import Link from 'next/link'
import { Navbar } from '@/shared/ui/navbar'
import { Footer, FooterSection, FooterContact, FooterLinksGroup, FooterSocial, FooterBottom, FooterOverlayContact } from '@/shared/ui/footer'
import { Button } from '@/shared/ui/button'
import { Fragment } from 'react'

export default function NotFound() {
  return (
    <Fragment>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-12">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-text-heading mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-medium text-text-heading mb-6 font-serif">Halaman Tidak Ditemukan</h2>
        <p className="text-lg text-text-secondary max-w-md mb-8">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman telah dipindahkan atau dihapus.
        </p>
        <Link href="/">
          <Button variant="primary" size="lg">
            Kembali ke Beranda
          </Button>
        </Link>
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
