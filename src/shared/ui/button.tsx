import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/lib/utils'

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-neutral-darkest/20 rounded-full",
    {
        variants: {
            variant: {
                default: 'bg-neutral-darkest text-white hover:bg-neutral-darker',
                destructive: 'bg-red-600 text-white hover:bg-red-700',
                outline: 'border border-neutral-light bg-white text-neutral-darkest hover:bg-neutral-lightest',
                secondary: 'bg-neutral-lighter text-neutral-darkest hover:bg-neutral-light',
                ghost: 'hover:bg-neutral-lightest text-neutral-dark hover:text-neutral-darkest',
                link: 'text-neutral-darkest underline-offset-4 hover:underline',
                primary: 'bg-bright-sun-base text-neutral-darkest hover:bg-bright-sun-dark',
            },
            size: {
                default: 'h-10 px-5 py-2',
                sm: 'h-8 px-4 text-sm',
                lg: 'h-11 px-6 text-base',
                icon: 'size-9',
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
