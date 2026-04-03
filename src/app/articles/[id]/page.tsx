import type { Metadata } from 'next'
import { Fragment } from 'react'
import { notFound } from 'next/navigation'
import { Navbar } from '@/shared/ui/navbar'
import { Footer, FooterSection, FooterContact, FooterLinksGroup, FooterSocial, FooterBottom, FooterOverlayContact } from '@/shared/ui/footer'
import { getArticleById } from '@/shared/lib/articles'
import { estimateReadTime } from '@/shared/utils/string'
import { Button } from '@/shared/ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface ArticleDetailPageProps {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ArticleDetailPageProps): Promise<Metadata> {
    const { id } = await params
    return {
        title: `Artikel ${id} | Lentera Cendekia`,
        description: 'Baca artikel terbaru seputar pendidikan dari Lentera Cendekia.',
    }
}

export const dynamic = 'force-dynamic'

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
    const { id } = await params
    const article = await getArticleById(id)

    if (!article) {
        notFound()
    }

    const readTime = estimateReadTime(article.content)
    const publishDate = new Date(article.created_at).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    return (
        <Fragment>
            <Navbar />

            {/* Article Header */}
            <article className="min-h-screen">
                {/* Back Button */}
                <div className="container mx-auto px-4 lg:px-0 max-w-2xl pt-24 pb-8">
                    <Button asChild variant="outline" size="lg" className={'w-fit rounded-full'}>
                        <Link href={'/articles'}>
                            <span>Kembali</span>
                        </Link>
                    </Button>
                </div>

                {/* Title & Meta */}
                <header className="container mx-auto px-4 lg:px-0 max-w-2xl mb-10">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-neutral-darkest leading-tight mb-6">{article.title}</h1>

                    {/* Author & Meta Info */}
                    <div className="flex items-center gap-3 pb-6 border-b border-neutral-light">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-lighter">
                            <Image
                                src={`https://ui-avatars.com/api/?name=${article.author?.name || 'Admin'}&background=f2f2f2&color=242424&size=128`}
                                alt={article.author?.name || 'Author'}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <div className="font-medium text-neutral-darkest">{article.author?.name || 'Lentera Cendekia'}</div>
                            <div className="flex items-center gap-2 text-sm text-neutral-base">
                                <span>{publishDate}</span>
                                <span>·</span>
                                <span>{readTime} min read</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="container mx-auto px-4 lg:px-0 max-w-3xl mb-10">
                    <div className="relative w-full h-[300px] md:h-[400px] bg-neutral-lighter rounded overflow-hidden">
                        <Image src={`https://picsum.photos/seed/${article.id}/1200/800`} alt={article.title} fill className="object-cover" priority />
                    </div>
                </div>

                {/* Article Content */}
                <div className="container mx-auto px-4 lg:px-0 max-w-2xl mb-16">
                    <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>

                {/* Author Bio */}
                <div className="container mx-auto px-4 lg:px-0 max-w-2xl mb-16">
                    <div className="border-t border-neutral-light pt-8">
                        <div className="flex items-start gap-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-lighter shrink-0">
                                <Image
                                    src={`https://ui-avatars.com/api/?name=${article.author?.name || 'Admin'}&background=f2f2f2&color=242424&size=128`}
                                    alt={article.author?.name || 'Author'}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-xs text-neutral-base uppercase tracking-wide mb-1">Ditulis oleh</p>
                                <h3 className="text-lg font-bold text-neutral-darkest mb-1">{article.author?.name || 'Lentera Cendekia'}</h3>
                                <p className="text-neutral-base text-sm leading-relaxed">Berbagi pengetahuan dan pengalaman seputar pendidikan.</p>
                            </div>
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
