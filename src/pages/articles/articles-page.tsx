import { Fragment } from 'react'
import { Navbar } from '@/shared/ui/navbar'
import { Footer, FooterSection, FooterContact, FooterLinksGroup, FooterSocial, FooterBottom, FooterOverlayContact } from '@/shared/ui/footer'
import { getArticles } from '@/shared/lib/articles'
import { ArticleList } from '@/features/articles/components/article-list'

export const dynamic = 'force-dynamic'

export default async function ArticlesPage() {
    const articles = await getArticles()

    return (
        <Fragment>
            <Navbar />
            <main className="container mx-auto min-h-screen pt-24 px-4 lg:px-0">
                <div className="max-w-2xl mx-auto mb-12 border-b border-border-default pb-8">
                    <h1 className="text-4xl font-serif font-bold text-text-heading mb-4">
                        Tulisan
                    </h1>
                    <p className="text-neutral-base text-lg">
                        Wawasan dan cerita seputar pendidikan.
                    </p>
                </div>
                
                <div className="max-w-2xl mx-auto">
                    <ArticleList articles={articles} />
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
                                {
                                    platform: 'twitter',
                                    url: 'https://twitter.com/lenteracendekia',
                                },
                                {
                                    platform: 'facebook',
                                    url: 'https://facebook.com/lenteracendekia',
                                },
                                {
                                    platform: 'instagram',
                                    url: 'https://instagram.com/lenteracendekia',
                                },
                                {
                                    platform: 'linkedin',
                                    url: 'https://linkedin.com/company/lenteracendekia',
                                },
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
