'use client'

import { cn } from '@/shared/lib/utils'
import { Facebook, Instagram, Linkedin, MessageCircle, Twitter } from 'lucide-react'
import type { ComponentProps, ReactNode } from 'react'
import { sendWhatsappMessage } from '../utils/contact'
import Image from 'next/image'

interface FooterProps extends ComponentProps<'footer'> {
    children: ReactNode
}

export function Footer({ children, className, ...props }: FooterProps) {
    return (
        <footer className={cn('py-2 px-8 lg:px-0', className)} {...props}>
            {children}
        </footer>
    )
}

interface FooterSectionProps extends ComponentProps<'div'> {
    children?: ReactNode
}

export function FooterSection({ children, className, ...props }: FooterSectionProps) {
    return (
        <div className={cn('container mx-auto py-12 flex flex-col lg:flex-row justify-between gap-8', className)} {...props}>
            {children}
        </div>
    )
}

interface FooterContactProps extends ComponentProps<'div'> {
    className?: string
}

export function FooterContact({ className, ...props }: FooterContactProps) {
    return (
        <div className={cn('flex flex-col items-start space-y-4', className)} {...props}>
            <h2 className="text-2xl font-medium font-serif">Lentera Cendekia</h2>
            <div>
                <h4 className="text-md font-semibold mb-2">Alamat:</h4>
                <p className="text-sm text-text-secondary max-w-sm">
                    Jl. Gubeng Kertajaya IX B Dalam Dalam No.15, Airlangga, Kec. Gubeng, Surabaya, Jawa Timur 60286
                </p>
            </div>
            <div>
                <h4 className="text-md font-semibold mb-2">Kontak:</h4>
                <p className="text-sm text-text-secondary">(021) 123-4567 / lbblenteracendekia@gmail.com</p>
            </div>
        </div>
    )
}

interface FooterLinksGroupProps extends ComponentProps<'div'> {
    title: string
    links: Array<{ label: string; href: string }>
}

export function FooterLinksGroup({ title, links, className, ...props }: FooterLinksGroupProps) {
    return (
        <div className={cn('', className)} {...props}>
            <h4 className="text-md font-semibold mb-4">{title}</h4>
            <ul className="space-y-2">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href} className="text-sm text-text-secondary hover:text-text-heading transition-colors">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

interface SocialLink {
    platform: string
    url: string
}

interface FooterSocialProps extends ComponentProps<'div'> {
    links?: SocialLink[]
}

export function FooterSocial({ links = [], className, ...props }: FooterSocialProps) {
    return (
        <div className={cn('', className)} {...props}>
            <h4 className="text-md font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
                {links?.map((link) => (
                    <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.platform}
                        className="text-text-secondary hover:text-text-heading transition-colors"
                    >
                        {link.platform === 'twitter' && <Twitter size={20} />}
                        {link.platform === 'facebook' && <Facebook size={20} />}
                        {link.platform === 'instagram' && <Instagram size={20} />}
                        {link.platform === 'linkedin' && <Linkedin size={20} />}
                    </a>
                ))}
            </div>
        </div>
    )
}

interface FooterBottomProps extends ComponentProps<'div'> {
    className?: string
}

export function FooterBottom({ className, ...props }: FooterBottomProps) {
    return (
        <div className={cn('border-t border-border-default py-6', className)} {...props}>
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-text-secondary">&copy; {new Date().getFullYear()} Lentera Cendekia. All rights reserved.</p>
                <div className="flex space-x-6">
                    <a href="/terms" className="text-sm text-text-secondary hover:text-text-heading">
                        Terms of Service
                    </a>
                    <a href="/privacy" className="text-sm text-text-secondary hover:text-text-heading">
                        Privacy Policy
                    </a>
                    <a href="/faq" className="text-sm text-text-secondary hover:text-text-heading">
                        FAQ
                    </a>
                </div>
            </div>
        </div>
    )
}

export function FooterBrand({ className, ...props }: ComponentProps<'div'>) {
    return (
        <div className={cn('flex items-center gap-2', className)} {...props}>
            <Image src="/logo.png" alt="Lentera Cendekia Logo" width={120} height={32} className="h-8 w-auto object-contain" />
            <span className="font-serif text-xl font-bold text-text-heading">Lentera Cendekia</span>
        </div>
    )
}

export function FooterCopyright({ className, ...props }: ComponentProps<'div'>) {
    return (
        <div className={cn('text-sm text-text-heading', className)} {...props}>
            &copy; {new Date().getFullYear()} Lentera Cendekia. All rights reserved.
        </div>
    )
}

export function FooterInformation({ children, className, ...props }: ComponentProps<'div'> & { children?: ReactNode }) {
    return (
        <div className={cn('flex justify-between border-b border-border-default dark:border-neutral-darkest pb-6', className)} {...props}>
            {children}
        </div>
    )
}

export function FooterLinks({
    links = [],
    className,
    ...props
}: ComponentProps<'div'> & {
    links?: SocialLink[]
    children?: ReactNode
}) {
    return (
        <div className={cn('flex justify-center space-x-4', className)} {...props}>
            {links?.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.platform}>
                    {link.platform === 'twitter' && <Twitter />}
                    {link.platform === 'facebook' && <Facebook />}
                    {link.platform === 'instagram' && <Instagram />}
                    {link.platform === 'linkedin' && <Linkedin />}
                    {['twitter', 'facebook', 'instagram', 'linkedin'].indexOf(link.platform) === -1 && link.platform}
                </a>
            ))}
        </div>
    )
}

export function FooterOverlayContact({}) {
    return (
        <div className="fixed bottom-8 right-4 z-50 group">
            <button
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg hover:bg-primary-dark transition-colors cursor-pointer"
                aria-label="Chat with us"
                onClick={sendWhatsappMessage}
            >
                <MessageCircle size={18} />
                <span className="text-sm">Hubungi Kami</span>
            </button>
            <div className="absolute bottom-full right-0 mb-2 w-64 bg-white-surface shadow-lg rounded-md pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200">
                <div className="flex items-start gap-2 p-3">
                    <div>
                        <p className="text-sm text-text-secondary font-medium">Butuh bantuan?</p>
                        <p className="text-xs text-text-heading">Hubungi kami lewat chat WhatsApp!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
