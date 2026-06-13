'use client'

import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui/carousel'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/lib/utils'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

interface TestimonialsProps {
    children: ReactNode
}

interface TestimonialsHeaderProps {
    children: ReactNode
}

interface TestimonialsTitleProps {
    children: ReactNode
}

interface TestimonialsDescriptionProps {
    children: ReactNode
}

interface TestimonialsCarouselProps {
    children: ReactNode
}

interface TestimonyProps {
    children: ReactNode
}

interface TestimonyContentProps {
    children: ReactNode
}

interface TestimonyImageProps {
    src: string
    alt: string
}

interface TestimonyQuoteProps {
    children: ReactNode
}

interface TestimonyAuthorProps {
    name: string
    role?: string
}

interface TestimonyReadMoreProps {
    href: string
}

function Testimonials({ children, className, ...props }: ComponentProps<'section'> & TestimonialsProps) {
    return (
        <section className={cn('px-6 py-24', className)} {...props}>
            {children}
        </section>
    )
}

function TestimonialsHeader({ children, className, ...props }: ComponentProps<'div'> & TestimonialsHeaderProps) {
    return (
        <div className={cn('text-center mb-16', className)} {...props}>
            {children}
        </div>
    )
}

function TestimonialsTitle({ children, className, ...props }: ComponentProps<'h2'> & TestimonialsTitleProps) {
    return (
        <h2 className={cn('text-4xl font-medium text-text-heading mb-4 font-serif', className)} {...props}>
            {children}
        </h2>
    )
}

function TestimonialsDescription({ children, className, ...props }: ComponentProps<'p'> & TestimonialsDescriptionProps) {
    return (
        <p className={cn('text-lg text-text-secondary max-w-3xl mx-auto', className)} {...props}>
            {children}
        </p>
    )
}

function TestimonialsCarousel({ children, className, ...props }: ComponentProps<'div'> & TestimonialsCarouselProps) {
    return (
        <div className={cn('px-4 sm:px-0', className)} {...props}>
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                    slidesToScroll: 1,
                }}
                className="w-full"
                plugins={[
                    Autoplay({
                        delay: 4000,
                        stopOnInteraction: false,
                    }),
                ]}
            >
                <CarouselContent className="-ml-2 md:-ml-4">{children}</CarouselContent>
            </Carousel>
        </div>
    )
}

export function TestimonyCard({ children, className, ...props }: ComponentProps<'div'> & TestimonyProps) {
    return (
        <div
            className={cn(
                'h-full rounded-lg border border-border-default bg-white-surface p-6 shadow-level-1 hover:shadow-level-2 hover:border-[#101828]/12 transition-all flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

function Testimony({ children, className, ...props }: ComponentProps<'div'> & TestimonyProps) {
    return (
        <CarouselItem className="pl-4 md:pl-6 basis-[90%] sm:basis-[80%] md:basis-1/2 lg:basis-1/3">
            <TestimonyCard className={className} {...props}>
                {children}
            </TestimonyCard>
        </CarouselItem>
    )
}

function TestimonyContent({ children, className, ...props }: ComponentProps<'div'> & TestimonyContentProps) {
    return (
        <div className={cn('flex-1 space-y-4 flex flex-col min-w-0', className)} {...props}>
            {children}
        </div>
    )
}

function TestimonyImage({ src, alt, className, ...props }: ComponentProps<'div'> & TestimonyImageProps) {
    return (
        <div
            className={cn(
                'relative h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 overflow-hidden rounded-2xl bg-[#F2F2F2] flex-shrink-0',
                className
            )}
            {...props}
        >
            <Image src={src} alt={alt} fill className="object-cover" />
        </div>
    )
}

function TestimonyQuote({ children, className, ...props }: ComponentProps<'blockquote'> & TestimonyQuoteProps) {
    return (
        <blockquote className={cn('flex-1 text-sm italic text-text-secondary leading-relaxed line-clamp-6', className)} {...props}>
            &ldquo;{children}&rdquo;
        </blockquote>
    )
}

function TestimonyAuthor({ name, role, className, ...props }: ComponentProps<'div'> & TestimonyAuthorProps) {
    return (
        <div className={cn('pt-3', className)} {...props}>
            <p className="font-semibold text-text-heading text-sm">{name}</p>
            {role && <p className="text-xs text-neutral-base">{role}</p>}
        </div>
    )
}

function TestimonyReadMore({ href, className }: TestimonyReadMoreProps & { className?: string }) {
    return (
        <div className="mt-auto pt-2 flex justify-end">
            <Button asChild variant="outline" size="sm" className={cn('w-fit rounded-full', className)}>
                <Link href={href}>Baca selengkapnya</Link>
            </Button>
        </div>
    )
}

Testimonials.Header = TestimonialsHeader
Testimonials.Title = TestimonialsTitle
Testimonials.Description = TestimonialsDescription
Testimonials.Carousel = TestimonialsCarousel

Testimony.Content = TestimonyContent
Testimony.Image = TestimonyImage
Testimony.Quote = TestimonyQuote
Testimony.Author = TestimonyAuthor
Testimony.ReadMore = TestimonyReadMore

export { Testimonials, Testimony }

// also export subcomponents for convenient named imports
export {
    TestimonialsHeader,
    TestimonialsTitle,
    TestimonialsDescription,
    TestimonialsCarousel,
    TestimonyImage,
    TestimonyContent,
    TestimonyQuote,
    TestimonyAuthor,
    TestimonyReadMore,
}
