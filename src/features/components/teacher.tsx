import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import type { Component, ComponentProps, ReactNode } from "react";

export interface TeacherCardProps extends ComponentProps<"div"> {
  children?: ReactNode;
}

export function TeacherCard({
  className,
  children,
  ...props
}: TeacherCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center text-center space-y-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface TeacherContentProps extends ComponentProps<"div"> {
  children?: ReactNode;
}

export function TeacherContent({
  className,
  children,
  ...props
}: TeacherContentProps) {
  return (
    <div className={cn("flex flex-col space-y-4", className)} {...props}>
      {children}
    </div>
  );
}

export interface TeacherTitleProps extends ComponentProps<"h2"> {}

export function TeacherTitle({
  className,
  children,
  ...props
}: TeacherTitleProps) {
  return (
    <h2 className={cn("text-xl font-medium", className)} {...props}>
      {children}
    </h2>
  );
}

export interface TeacherImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

export function TeacherImage({ src, alt, width, height }: TeacherImageProps) {
  return (
    <Image
      src={src ?? ""}
      alt={alt ?? ""}
      width={width ?? 100}
      height={height ?? 100}
      className="rounded-full aspect-square object-cover"
    />
  );
}

export function TeacherDescription({
  className,
  children,
  ...props
}: ComponentProps<"p">) {
  return (
    <p className={cn("text-neutral-base max-w-sm", className)} {...props}>
      {children}
    </p>
  );
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface TeacherSocialProps extends ComponentProps<"div"> {
  links?: SocialLink[];
}

export function TeacherSocial({
  links,
  className,
  ...props
}: TeacherSocialProps) {
  return (
    <div className={cn("flex justify-center space-x-4", className)} {...props}>
      {links?.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.platform}
        >
          {link.platform === "twitter" && <Twitter />}
          {link.platform === "facebook" && <Facebook />}
          {link.platform === "instagram" && <Instagram />}
          {link.platform === "linkedin" && <Linkedin />}
          {["twitter", "facebook", "instagram", "linkedin"].indexOf(
            link.platform
          ) === -1 && link.platform}
        </a>
      ))}
    </div>
  );
}
