import type { Metadata } from 'next'
import { Fragment } from 'react'
import { notFound } from 'next/navigation'
import { Navbar } from '@/shared/ui/navbar'
import { Footer, FooterSection, FooterContact, FooterLinksGroup, FooterSocial, FooterBottom, FooterOverlayContact } from '@/shared/ui/footer'
import { getTestimonyById } from '@/shared/lib/testimony'
import Image from 'next/image'
import Link from 'next/link'
import { Quote } from 'lucide-react'
import { Button } from '@/shared/ui/button'

interface TestimonyDetailPageProps {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: TestimonyDetailPageProps): Promise<Metadata> {
    const { id } = await params
    const testimony = await getTestimonyById(id)
    return {
        title: testimony ? `${testimony.testimoner_name} | Testimoni Lentera Cendekia` : 'Testimoni | Lentera Cendekia',
        description:
            testimony?.testimony_text?.slice(0, 160) ||
            'Baca testimoni dari para siswa dan orang tua tentang pengalaman belajar di Lentera Cendekia.',
    }
}

export const dynamic = 'force-dynamic'

export default async function TestimonyDetailPage({ params }: TestimonyDetailPageProps) {
    const { id } = await params
    const testimony = await getTestimonyById(id)

    if (!testimony) {
        notFound()
    }

    const publishDate = new Date(testimony.created_at).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    return (
        <Fragment>
            <Navbar />

            <article className="min-h-screen">
                {/* Back Button */}
                <div className="container mx-auto px-4 lg:px-0 max-w-2xl pt-24 pb-8">
                    <Button asChild variant="outline" size="lg" className={'w-fit rounded-full'}>
                        <Link href={'/testimonials'}>
                            <span>Kembali</span>
                        </Link>
                    </Button>
                </div>

                {/* Testimony Content */}
                <div className="container mx-auto px-4 lg:px-0 max-w-2xl mb-16">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-8">
                        <Quote className="w-16 h-16 text-neutral-light" />
                    </div>

                    {/* Testimony Text */}
                    <blockquote className="text-xl md:text-2xl font-serif text-text-heading leading-relaxed text-center mb-12">
                        &ldquo;{testimony.testimony_text}&rdquo;
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex flex-col items-center gap-4 pt-8 border-t border-border-default">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-[#F2F2F2]">
                            <Image
                                src={
                                    testimony.testimoner_photo ||
                                    `https://ui-avatars.com/api/?name=${testimony.testimoner_name}&background=f2f2f2&color=242424&size=128`
                                }
                                alt={testimony.testimoner_name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <div className="font-semibold text-lg text-text-heading">{testimony.testimoner_name}</div>
                            {testimony.testimoner_current_position && (
                                <div className="text-neutral-base">{testimony.testimoner_current_position}</div>
                            )}
                            <div className="text-sm text-neutral-base mt-2">{publishDate}</div>
                        </div>
                    </div>
                </div>
            </article>

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
