import { cn } from '@/shared/lib/utils'
import Image from 'next/image'
import { ComponentProps, ReactNode } from 'react'

interface BlogProps {
    children: ReactNode
}

interface BlogHeaderProps {
    children: ReactNode
}

interface BlogTitleProps {
    children: ReactNode
}

interface BlogDescriptionProps {
    children: ReactNode
}

interface BlogCardsProps {
    children: ReactNode
}

interface BlogCardProps {
    image: string
    title: string
    description: string
    imageAlt?: string
}

interface BlogActionsProps {
    children: ReactNode
}

export function Blog({ children, className, ...props }: ComponentProps<'section'> & BlogProps) {
    return (
        <section className={cn('px-6 py-24', className)} {...props}>
            {children}
        </section>
    )
}

Blog.Header = function BlogHeader({ children, className, ...props }: ComponentProps<'div'> & BlogHeaderProps) {
    return (
        <div className={cn('text-center mb-16', className)} {...props}>
            {children}
        </div>
    )
}

Blog.Title = function BlogTitle({ children, className, ...props }: ComponentProps<'h2'> & BlogTitleProps) {
    return (
        <h2 className={cn('text-4xl font-medium text-neutral-darkest mb-4 leading-relaxed max-w-2xl mx-auto', className)} {...props}>
            {children}
        </h2>
    )
}

Blog.Description = function BlogDescription({ children, className, ...props }: ComponentProps<'p'> & BlogDescriptionProps) {
    return (
        <p className={cn('text-lg text-neutral-dark max-w-3xl mx-auto', className)} {...props}>
            {children}
        </p>
    )
}

Blog.Cards = function BlogCards({ children, className, ...props }: ComponentProps<'div'> & BlogCardsProps) {
    return (
        <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8', className)} {...props}>
            {children}
        </div>
    )
}

Blog.Card = function BlogCard({ image, title, description, imageAlt, className, ...props }: ComponentProps<'div'> & BlogCardProps) {
    return (
        <div
            className={cn(
                'group bg-white rounded-lg overflow-hidden border border-neutral-light hover:border-neutral-base transition-colors',
                className
            )}
            {...props}
        >
            <div className="relative w-full h-48 bg-neutral-lighter overflow-hidden">
                <Image
                    src={image}
                    alt={imageAlt || title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-darkest mb-2 group-hover:underline">{title}</h3>
                <p className="text-neutral-base text-sm leading-relaxed line-clamp-2">{description}</p>
            </div>
        </div>
    )
}

Blog.Actions = function BlogActions({ children, className, ...props }: ComponentProps<'div'> & BlogActionsProps) {
    return (
        <div className={cn('flex flex-col sm:flex-row gap-4 justify-center mt-12', className)} {...props}>
            {children}
        </div>
    )
}
