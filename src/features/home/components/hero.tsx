'use client'

import { Button } from '@/shared/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/shared/ui/carousel'
import { cn } from '@/shared/lib/utils'
import { StaticAssetResponse } from '@/shared/types/response'
import { getAssetUrl } from '@/shared/lib/asset'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { useCallback } from 'react'
import { ChevronRight } from 'lucide-react'
import { sendWhatsappMessage } from '@/shared/utils/contact'


export interface HeroProps {
    className?: string
    assets?: StaticAssetResponse[]
}

export function Hero({ className, assets }: HeroProps) {
    const hasRealAssets = assets && assets.length > 0
    const displayAssets = hasRealAssets ? assets : []

    const handleContinueLearning = useCallback(() => {
        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <div className={cn('bg-white-surface', className)}>
            <div className="container mx-auto py-12 lg:py-24">
                <div className="max-w-3xl mx-auto text-center px-4 lg:px-6">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-text-heading leading-tight tracking-tight mb-4 lg:mb-6">
                        Tempat Belajar yang Menyenangkan dan Bermakna
                    </h1>
                    <p className="text-lg lg:text-xl text-text-secondary leading-relaxed mb-6 lg:mb-8 max-w-2xl mx-auto">
                        Lentera Cendekia hadir untuk mendampingi perjalanan akademik anak Anda dengan pendekatan personal dan metode yang terbukti
                        efektif.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Button variant="default" size="lg" className="w-full sm:w-auto" onClick={sendWhatsappMessage}>
                            Mulai Sekarang
                        </Button>
                        <Button variant="ghost" size="lg" className="w-full sm:w-auto" onClick={handleContinueLearning}>
                            <span>Pelajari Lebih Lanjut</span>
                            <ChevronRight className="size-4 ml-2" />
                        </Button>
                    </div>
                </div>

                <div className="mt-16 px-4 lg:px-8">
                    <Carousel
                        opts={{
                            align: 'center',
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 4000,
                            }),
                        ]}
                        className="rounded-lg"
                    >
                        <CarouselContent>
                            {displayAssets.map((asset, index) => (
                                <CarouselItem key={index}>
                                    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                                        <Image
                                            src={
                                                hasRealAssets
                                                    ? getAssetUrl((asset as StaticAssetResponse).asset_url)
                                                    : (asset as (typeof dummyAssets)[0]).url
                                            }
                                            alt={hasRealAssets ? (asset as StaticAssetResponse).asset_name : (asset as (typeof dummyAssets)[0]).name}
                                            fill
                                            className="object-cover rounded-lg"
                                            priority={index === 0}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden lg:flex">
                            <CarouselPrevious className="size-20 -left-28" iconSize="3xl" />
                            <CarouselNext className="size-20 -right-28" iconSize="3xl" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
