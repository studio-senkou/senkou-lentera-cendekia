import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'

export interface FacilityProps {
    direction?: 'start' | 'end'
    className?: string
    children: ReactNode
}

export interface FacilityIconProps {
    children: ReactNode
}

export interface FacilityContentProps {
    title: string
    description: string
}

export function Facility({ className, children }: FacilityProps) {
    return (
        <div className={cn('flex flex-col justify-between w-full h-full space-y-4 bg-neutral-lightest rounded-lg lg:p-6 p-4', className)}>
            {children}
        </div>
    )
}

export function FacilityIcon({ children }: FacilityIconProps) {
    return <div className="flex items-center justify-start w-full">{children}</div>
}

export function FacilityContent({ title, description }: FacilityContentProps) {
    return (
        <div className="flex flex-col space-y-2">
            <p className="font-medium lg:text-xl text-neutral-base">{title}</p>
            <p className="text-neutral-base">{description}</p>
        </div>
    )
}
