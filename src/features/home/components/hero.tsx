'use client'

import { Button } from '@/shared/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/shared/ui/carousel'
import { cn } from '@/shared/lib/utils'
import { StaticAssetResponse } from '@/shared/types/response'
import { getAssetUrl } from '@/shared/lib/asset'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const dummyAssets = [
    { id: 1, name: 'Suasana Belajar', url: 'https://picsum.photos/seed/lentera1/1200/600' },
    { id: 2, name: 'Kelas Interaktif', url: 'https://picsum.photos/seed/lentera2/1200/600' },
    { id: 3, name: 'Kegiatan Siswa', url: 'https://picsum.photos/seed/lentera3/1200/600' },
]

export interface HeroProps {
    className?: string
    assets?: StaticAssetResponse[]
}

export function Hero({ className, assets }: HeroProps) {
    const hasRealAssets = assets && assets.length > 0
    const displayAssets = hasRealAssets ? assets : dummyAssets

    return (
        <div className={cn('bg-white', className)}>
            <div className="container mx-auto py-16 lg:py-24">
                <div className="max-w-3xl mx-auto text-center px-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-darkest leading-tight tracking-tight mb-6">
                        Tempat Belajar yang Menyenangkan dan Bermakna
                    </h1>
                    <p className="text-xl text-neutral-dark leading-relaxed mb-8 max-w-2xl mx-auto">
                        Lentera Cendekia hadir untuk mendampingi perjalanan akademik anak Anda dengan pendekatan personal dan metode yang terbukti efektif.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Button variant="default" size="lg">Mulai Sekarang</Button>
                        <Button variant="ghost" size="lg">Pelajari Lebih Lanjut →</Button>
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
                                    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                                        <Image
                                            src={hasRealAssets ? getAssetUrl((asset as StaticAssetResponse).asset_url) : (asset as typeof dummyAssets[0]).url}
                                            alt={hasRealAssets ? (asset as StaticAssetResponse).asset_name : (asset as typeof dummyAssets[0]).name}
                                            fill
                                            className="object-cover rounded-lg"
                                            priority={index === 0}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden lg:flex">
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

