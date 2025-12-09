import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Artikel | Lentera Cendekia',
    description: 'Baca artikel terbaru seputar pendidikan, tips belajar, dan parenting dari Lentera Cendekia.',
}

export const dynamic = 'force-dynamic'

export { default } from '@/pages/articles/articles-page'
