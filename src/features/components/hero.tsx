"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export function Hero() {
  return (
    <div className="bg-neutral-lightest">
      <div className="container mx-auto py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-start justify-between px-6 pt-12 lg:pt-24 pb-6">
          <h1 className="text-4xl max-w-2xl font-medium text-neutral-darkest leading-14">
            Unlock Your Child&lsquo;s Potential with Expert Tutoring
          </h1>
          <div className="max-w-2xl">
            <p className="text-lg text-neutral-dark">
              At our tutoring center, we empower students to excel academically
              through personalized learning experiences. Join us to discover a
              supportive environment where every learner can thrive
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <Button variant="primary">Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>

        {/* Activity Carousel */}
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
              <CarouselItem>
                <div className="relative w-full h-full min-h-[300px] xl:min-h-[700px]">
                  <Image
                    src="/images/child-0.jpg"
                    alt="Child studying"
                    fill
                    className="object-cover rounded-lg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="h-full">
                <div className="relative w-full h-full min-h-[300px] xl:min-h-[700px]">
                  <Image
                    src="/images/child-1.jpg"
                    alt="Child reading"
                    fill
                    className="object-cover rounded-lg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="hidden lg:flex">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
