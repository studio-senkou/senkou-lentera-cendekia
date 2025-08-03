"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
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

function TestimonialsCarousel({
  children,
  className,
  ...props
}: ComponentProps<"div"> & TestimonialsCarouselProps) {
  return (
    <div className={cn("px-4 sm:px-0", className)} {...props}>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
        }}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent className="-ml-2 md:-ml-4">{children}</CarouselContent>
      </Carousel>
    </div>
  );
}

function Testimony({
  children,
  className,
  ...props
}: ComponentProps<"div"> & TestimonyProps) {
  return (
    <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
      <div
        className={cn(
          "flex flex-col lg:flex-row items-center gap-4 sm:gap-6 max-w-sm mx-auto p-4 sm:p-6 rounded-lg h-full",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </CarouselItem>
  );
}

function TestimonyContent({
  children,
  className,
  ...props
}: ComponentProps<"div"> & TestimonyContentProps) {
  return (
    <div
      className={cn(
        "flex-1 space-y-4 border border-neutral-lighter p-6 rounded min-w-32 lg:min-w-sm min-h-[300px] h-full flex flex-col justify-between",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

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

function TestimonyQuote({
  children,
  className,
  ...props
}: ComponentProps<"blockquote"> & TestimonyQuoteProps) {
  return (
    <blockquote
      className={cn(
        "text-sm sm:text-base italic text-neutral-dark leading-relaxed line-clamp-5 text-center",
        className
      )}
      {...props}
    >
      &ldquo;{children}&rdquo;
      {/* <Link href="/testimonials/">
        <a className="text-sm text-blue-500 hover:underline">Read more</a>
      </Link> */}
    </blockquote>
  );
}

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

Testimonials.Header = TestimonialsHeader;
Testimonials.Title = TestimonialsTitle;
Testimonials.Description = TestimonialsDescription;
Testimonials.Carousel = TestimonialsCarousel;

Testimony.Content = TestimonyContent;
Testimony.Image = TestimonyImage;
Testimony.Quote = TestimonyQuote;
Testimony.Author = TestimonyAuthor;

export { Testimonials, Testimony };

export {
  TestimonialsHeader,
  TestimonialsTitle,
  TestimonialsDescription,
  TestimonialsCarousel,
};
export { TestimonyContent, TestimonyImage, TestimonyQuote, TestimonyAuthor };
