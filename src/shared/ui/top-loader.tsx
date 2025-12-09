'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function TopLoader() {
    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = useState(0)
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        // Start loading when route changes
        setLoading(true)
        setProgress(30)

        const timer1 = setTimeout(() => setProgress(60), 100)
        const timer2 = setTimeout(() => setProgress(80), 200)
        const timer3 = setTimeout(() => {
            setProgress(100)
            setTimeout(() => {
                setLoading(false)
                setProgress(0)
            }, 200)
        }, 400)

        return () => {
            clearTimeout(timer1)
            clearTimeout(timer2)
            clearTimeout(timer3)
        }
    }, [pathname, searchParams])

    if (!loading && progress === 0) return null

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] h-0.5 bg-transparent">
            <div 
                className="h-full bg-yellow-orange-darkest transition-all duration-200 ease-out"
                style={{ 
                    width: `${progress}%`,
                    opacity: loading ? 1 : 0
                }}
            />
        </div>
    )
}
