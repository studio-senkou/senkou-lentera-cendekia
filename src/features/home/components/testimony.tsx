'use client'

import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui/carousel'
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
        <h2 className={cn('text-4xl font-medium text-neutral-darkest mb-4', className)} {...props}>
            {children}
        </h2>
    )
}

function TestimonialsDescription({ children, className, ...props }: ComponentProps<'p'> & TestimonialsDescriptionProps) {
    return (
        <p className={cn('text-lg text-neutral-dark max-w-3xl mx-auto', className)} {...props}>
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
            className={cn('flex flex-row items-stretch gap-4 p-4 h-full', className)}
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
        <div
            className={cn(
                'flex-1 space-y-4 border border-neutral-lighter p-4 sm:p-5 rounded flex flex-col justify-between min-w-0',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

function TestimonyImage({ src, alt, className, ...props }: ComponentProps<'div'> & TestimonyImageProps) {
    return (
        <div className={cn('flex-shrink-0 w-24 sm:w-32 md:w-36 lg:w-40', className)} {...props}>
            <div className="relative w-full aspect-square">
                <Image src={src} alt={alt} fill className="rounded-lg object-cover" />
            </div>
        </div>
    )
}

function TestimonyQuote({ children, className, ...props }: ComponentProps<'blockquote'> & TestimonyQuoteProps) {
    return (
        <blockquote className={cn('flex-1 text-sm italic text-neutral-dark leading-relaxed line-clamp-4', className)} {...props}>
            &ldquo;{children}&rdquo;
        </blockquote>
    )
}

function TestimonyAuthor({ name, role, className, ...props }: ComponentProps<'div'> & TestimonyAuthorProps) {
    return (
        <div className={cn('pt-3 border-t border-neutral-lighter', className)} {...props}>
            <p className="font-semibold text-neutral-darkest text-sm">{name}</p>
            {role && <p className="text-xs text-neutral-base">{role}</p>}
        </div>
    )
}

function TestimonyReadMore({ href, className, ...props }: ComponentProps<'a'> & TestimonyReadMoreProps) {
    return (
        <Link 
            href={href} 
            className={cn('text-xs text-neutral-base hover:text-neutral-darkest underline underline-offset-2 mt-1 inline-block', className)} 
            {...props}
        >
            Baca selengkapnya →
        </Link>
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

