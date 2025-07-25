import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps, ReactNode } from "react";

interface FeatureProps {
  direction?: "start" | "end";
  children: ReactNode;
}

interface FeatureContentProps {
  children: ReactNode;
}

interface FeatureTitleProps {
  children: ReactNode;
}

interface FeatureDescriptionProps {
  children: ReactNode;
}

interface FeatureImageProps {
  src: string;
  alt: string;
}

interface FeaturePlansProps {
  children: ReactNode;
}

interface FeaturePlanProps {
  title: string;
  description: string;
}

export function Feature({
  direction = "start",
  className,
  children,
  ...props
}: ComponentProps<"section"> & FeatureProps) {
  return (
    <section
      className={cn(
        "flex flex-col gap-8 lg:gap-0 items-center justify-between px-6 pt-24 pb-6",
        direction === "start" ? "lg:flex-row" : "lg:flex-row-reverse",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

Feature.Content = function FeatureContent({
  children,
  className,
  ...props
}: ComponentProps<"div"> & FeatureContentProps) {
  return (
    <div className={cn("flex-1", className)} {...props}>
      {children}
    </div>
  );
};

Feature.Title = function FeatureTitle({
  children,
  className,
  ...props
}: ComponentProps<"h1"> & FeatureTitleProps) {
  return (
    <h1
      className={cn(
        "text-4xl max-w-2xl font-medium text-neutral-darkest leading-14",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

Feature.Description = function FeatureDescription({
  children,
  className,
  ...props
}: ComponentProps<"p"> & FeatureDescriptionProps) {
  return (
    <p
      className={cn("max-w-2xl text-lg text-neutral-dark mt-3", className)}
      {...props}
    >
      {children}
    </p>
  );
};

Feature.Image = function FeatureImage({
  src,
  alt,
  className,
  ...props
}: ComponentProps<"div"> & FeatureImageProps) {
  return (
    <div
      className={cn("flex-1 relative w-full h-64 lg:h-96", className)}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="rounded-lg object-cover"
        sizes="100%"
      />
    </div>
  );
};

Feature.Plans = function FeaturePlans({
  children,
  className,
  ...props
}: ComponentProps<"div"> & FeaturePlansProps) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
};

Feature.Plan = function FeaturePlan({
  title,
  description,
  className,
  ...props
}: ComponentProps<"div"> & FeaturePlanProps) {
  return (
    <div className={cn("mt-4", className)} {...props}>
      <h2 className="text-xl font-semibold text-neutral-dark">{title}</h2>
      <p className="text-base text-neutral-dark mt-1">{description}</p>
    </div>
  );
};
