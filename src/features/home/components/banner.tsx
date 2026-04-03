import { cn } from '@/shared/lib/utils'
import type { ComponentProps, ReactNode } from 'react'

interface BannerProps extends ComponentProps<'div'> {
    title?: string
    description?: string
    children?: ReactNode
}

export function Banner({ className, title, description, children, ...props }: BannerProps) {
    return (
        <section
            className={cn(
                'flex items-center relative overflow-hidden p-6 md:p-12 w-full min-h-80 md:min-h-96 bg-cover bg-center md:bg-fixed text-white',
                className
            )}
            style={{
                backgroundImage: "url('/images/child-0.jpg')",
            }}
            {...props}
        >
            <div className="absolute inset-0 bg-black/50 pointer-events-none" />
            <div className="relative z-10 flex flex-col items-start space-y-4">
                <h1 className="text-3xl font-medium">{title}</h1>
                <p className="max-w-2xl">{description}</p>
                <div>{children}</div>
            </div>
        </section>
    )
}
