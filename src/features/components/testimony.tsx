"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import type { ComponentProps, ReactNode } from "react";

interface TestimonialsProps {
  children: ReactNode;
}

interface TestimonialsHeaderProps {
  children: ReactNode;
}

interface TestimonialsTitleProps {
  children: ReactNode;
}

interface TestimonialsDescriptionProps {
  children: ReactNode;
}

interface TestimonialsCarouselProps {
  children: ReactNode;
}

interface TestimonyProps {
  children: ReactNode;
}

interface TestimonyContentProps {
  children: ReactNode;
}

interface TestimonyImageProps {
  src: string;
  alt: string;
}

interface TestimonyQuoteProps {
  children: ReactNode;
}

interface TestimonyAuthorProps {
  name: string;
  role?: string;
}

// Main Testimonials component
function Testimonials({
  children,
  className,
  ...props
}: ComponentProps<"section"> & TestimonialsProps) {
  return (
    <section className={cn("px-6 py-24", className)} {...props}>
      {children}
    </section>
  );
}

// Testimonials Header
function TestimonialsHeader({
  children,
  className,
  ...props
}: ComponentProps<"div"> & TestimonialsHeaderProps) {
  return (
    <div className={cn("text-center mb-16", className)} {...props}>
      {children}
    </div>
  );
}

// Testimonials Title
function TestimonialsTitle({
  children,
  className,
  ...props
}: ComponentProps<"h2"> & TestimonialsTitleProps) {
  return (
    <h2
      className={cn(
        "text-4xl font-medium text-neutral-darkest mb-4",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

// Testimonials Description
function TestimonialsDescription({
  children,
  className,
  ...props
}: ComponentProps<"p"> & TestimonialsDescriptionProps) {
  return (
    <p
      className={cn("text-lg text-neutral-dark max-w-3xl mx-auto", className)}
      {...props}
    >
      {children}
    </p>
  );
}

// Testimonials Carousel wrapper
function TestimonialsCarousel({
  children,
  className,
  ...props
}: ComponentProps<"div"> & TestimonialsCarouselProps) {
  return (
    <div className={cn("", className)} {...props}>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent className="ml-0">{children}</CarouselContent>
      </Carousel>
    </div>
  );
}

// Individual Testimony component (wrapped in CarouselItem)
function Testimony({
  children,
  className,
  ...props
}: ComponentProps<"div"> & TestimonyProps) {
  return (
    <CarouselItem className="basis-1 md:basis-1/2">
      <div
        className={cn(
          "flex flex-col lg:flex-row items-center gap-8 max-w-4xl mx-auto p-8 rounded-lg",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </CarouselItem>
  );
}

// Testimony Content wrapper
function TestimonyContent({
  children,
  className,
  ...props
}: ComponentProps<"div"> & TestimonyContentProps) {
  return (
    <div
      className={cn(
        "flex-1 space-y-4 border border-neutral-lighter p-6 rounded-lg min-h-[300px] h-full flex flex-col justify-between",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Testimony Image
function TestimonyImage({
  src,
  alt,
  className,
  ...props
}: ComponentProps<"div"> & TestimonyImageProps) {
  return (
    <div className={cn("flex-shrink-0", className)} {...props}>
      <Image
        src={src}
        alt={alt}
        width={300}
        height={500}
        className="rounded-lg object-cover aspect-square"
      />
    </div>
  );
}

// Testimony Quote
function TestimonyQuote({
  children,
  className,
  ...props
}: ComponentProps<"blockquote"> & TestimonyQuoteProps) {
  return (
    <blockquote
      className={cn(
        "text-lg italic text-neutral-dark leading-relaxed",
        className
      )}
      {...props}
    >
      &ldquo;{children}&rdquo;
    </blockquote>
  );
}

// Testimony Author
function TestimonyAuthor({
  name,
  role,
  className,
  ...props
}: ComponentProps<"div"> & TestimonyAuthorProps) {
  return (
    <div className={cn("", className)} {...props}>
      <p className="font-semibold text-neutral-darkest">{name}</p>
      {role && <p className="text-sm text-neutral-dark">{role}</p>}
    </div>
  );
}

export { Testimonials, Testimony };

export {
  TestimonialsHeader,
  TestimonialsTitle,
  TestimonialsDescription,
  TestimonialsCarousel,
};
export { TestimonyContent, TestimonyImage, TestimonyQuote, TestimonyAuthor };
