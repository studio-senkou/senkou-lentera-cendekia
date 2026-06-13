import type { Metadata } from 'next'
import { Inter, EB_Garamond } from 'next/font/google'
import './globals.css'
import { TopLoader } from '@/shared/ui/top-loader'
import { Suspense } from 'react'

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
})

const ebGaramond = EB_Garamond({
    variable: '--font-eb-garamond',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Lentera Cendekia',
    description: 'Greatest tutoring centre in Surabaya',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${ebGaramond.variable} antialiased font-sans`}>
                <Suspense fallback={null}>
                    <TopLoader />
                </Suspense>
                {children}
            </body>
        </html>
    )
}
