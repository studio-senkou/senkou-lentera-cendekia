import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/lib/utils'

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer text-base font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-deep-navy/20 rounded-md",
    {
        variants: {
            variant: {
                default: 'bg-deep-navy text-white hover:bg-deep-navy/90',
                primary: 'bg-lentera-orange text-white hover:bg-[#E55400] active:bg-[#CC4900]',
                destructive: 'bg-error text-white hover:bg-error/90',
                outline: 'bg-white text-deep-navy border border-[#101828]/12 hover:bg-[#101828]/[0.03]',
                secondary: 'bg-white text-deep-navy border border-[#101828]/12 hover:bg-[#101828]/[0.03]',
                ghost: 'bg-transparent text-text-secondary hover:bg-[#101828]/[0.04]',
                link: 'text-deep-navy underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-[44px] px-6',
                sm: 'h-8 px-4 text-sm',
                lg: 'h-12 px-8 text-lg',
                icon: 'size-11',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean
    }) {
    const Comp = asChild ? Slot : 'button'

    return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }
