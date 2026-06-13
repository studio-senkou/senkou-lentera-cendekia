import type { Metadata } from 'next'
import { Fragment } from 'react'
import { Navbar } from '@/shared/ui/navbar'
import { Footer, FooterSection, FooterContact, FooterLinksGroup, FooterSocial, FooterBottom, FooterOverlayContact } from '@/shared/ui/footer'
import { getTestimonies } from '@/shared/lib/testimony'
import { 
    TestimonyCard, 
    TestimonyImage, 
    TestimonyContent, 
    TestimonyQuote, 
    TestimonyAuthor,
    TestimonyReadMore
} from '@/features/home/components/testimony'
import { Banner } from '@/features/home/components/banner'
import { Button } from '@/shared/ui/button'

export const metadata: Metadata = {
    title: 'Testimoni | Lentera Cendekia',
    description: 'Apa kata siswa dan orang tua tentang pengalaman belajar di Lentera Cendekia.',
}

export const dynamic = 'force-dynamic'

export default async function TestimonialsPage() {
    const testimonies = await getTestimonies()

    return (
        <Fragment>
            <Navbar />
            
            <main className="min-h-screen pt-24 pb-12">
                {/* Header */}
                <div className="container mx-auto px-6 mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-heading mb-6">
                        Kata Mereka Tentang Kami
                    </h1>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Dengarkan langsung pengalaman para siswa dan orang tua yang telah merasakan dampak positif belajar bersama Lentera Cendekia.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonies.map((testimonial) => (
                            <div key={testimonial.id} className="h-full">
                                <TestimonyCard className="h-full">
                                    <TestimonyImage src={testimonial.testimoner_photo || '/images/placeholder.jpg'} alt={testimonial.testimoner_name} />
                                    <TestimonyContent>
                                        <TestimonyQuote>{testimonial.testimony_text}</TestimonyQuote>
                                        <TestimonyAuthor name={testimonial.testimoner_name} role={testimonial.testimoner_current_position} />
                                        <TestimonyReadMore href={`/testimonials/${testimonial.id}`} />
                                    </TestimonyContent>
                                </TestimonyCard>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="container mx-auto px-6 mt-24">
                    <Banner
                        title="Siap Mengukir Prestasimu?"
                        description="Bergabunglah dengan ribuan siswa lain yang telah sukses meraih impian akademis mereka bersama kami."
                    >
                        <Button variant="primary" size="lg">
                            Daftar Sekarang
                        </Button>
                    </Banner>
                </div>
            </main>

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
