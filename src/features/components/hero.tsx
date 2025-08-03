"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { StaticAssetResponse } from "@/types/response";
import { getAssetUrl } from "@/utils/asset";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export interface HeroProps {
  className?: string;
  assets?: StaticAssetResponse[];
}

export function Hero({ className, assets }: HeroProps) {
  return (
    <div className={cn("bg-neutral-lightest", className)}>
      <div className="container mx-auto py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-start justify-between px-6 pt-12 lg:pt-24 pb-6">
          <h1 className="text-4xl max-w-2xl font-medium text-neutral-darkest leading-14">
            Maksimalkan Potensi Anak Anda bersama Bimbingan Belajar Terbaik
          </h1>
          <div className="max-w-2xl">
            <p className="text-lg text-neutral-dark">
              Di pusat bimbingan kami, setiap siswa didukung untuk meraih
              prestasi akademik melalui pembelajaran yang dipersonalisasi.
              Bergabunglah dan rasakan lingkungan belajar yang inspiratif,
              ramah, dan penuh semangat untuk tumbuh bersama!
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <Button variant="primary">Gabung Sekarang</Button>
              <Button variant="outline">Pelajari Lebih Lanjut</Button>
            </div>
          </div>
        </div>

        {/* Activity Carousel */}
        {assets && assets.length > 0 && (
          <div className="aspect-video mt-16 px-8">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="rounded-lg"
            >
              <CarouselContent>
                {assets?.map((asset, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-full min-h-[300px] xl:min-h-[700px]">
                      <Image
                        src={getAssetUrl(asset.asset_url)}
                        alt={asset.asset_name}
                        fill
                        className="object-cover rounded-lg"
                        style={{ objectFit: "cover" }}
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
        )}
      </div>
    </div>
  );
}
