"use client";

import { cn } from "@/lib/utils";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Twitter,
} from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

interface FooterProps extends ComponentProps<"footer"> {
  children: ReactNode;
}

export function Footer({ children, className, ...props }: FooterProps) {
  return (
    <footer className={cn("py-2 px-8 lg:px-0", className)} {...props}>
      {children}
    </footer>
  );
}

interface FooterSectionProps extends ComponentProps<"div"> {
  children?: ReactNode;
}

export function FooterSection({
  children,
  className,
  ...props
}: FooterSectionProps) {
  return (
    <div
      className={cn(
        "container mx-auto py-12 flex flex-col lg:flex-row justify-between gap-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface FooterContactProps extends ComponentProps<"div"> {}

export function FooterContact({ className, ...props }: FooterContactProps) {
  return (
    <div
      className={cn("flex flex-col items-start space-y-4", className)}
      {...props}
    >
      <h2 className="text-2xl font-medium">Lentera Cendekia</h2>
      <div>
        <h4 className="text-md font-semibold mb-2">Alamat:</h4>
        <p className="text-sm text-neutral-dark max-w-sm">
          Jl. Gubeng Kertajaya IX B Dalam Dalam No.15, Airlangga, Kec. Gubeng,
          Surabaya, Jawa Timur 60286
        </p>
      </div>
      <div>
        <h4 className="text-md font-semibold mb-2">Kontak:</h4>
        <p className="text-sm text-neutral-dark">
          (021) 123-4567 / lbblenteracendekia@gmail.com
        </p>
      </div>
    </div>
  );
}

interface FooterLinksGroupProps extends ComponentProps<"div"> {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export function FooterLinksGroup({
  title,
  links,
  className,
  ...props
}: FooterLinksGroupProps) {
  return (
    <div className={cn("", className)} {...props}>
      <h4 className="text-md font-semibold mb-4">{title}</h4>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-sm text-neutral-dark hover:text-neutral-darkest transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface SocialLink {
  platform: string;
  url: string;
}

interface FooterSocialProps extends ComponentProps<"div"> {
  links?: SocialLink[];
}

export function FooterSocial({
  links = [],
  className,
  ...props
}: FooterSocialProps) {
  return (
    <div className={cn("", className)} {...props}>
      <h4 className="text-md font-semibold mb-4">Follow Us</h4>
      <div className="flex space-x-4">
        {links?.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.platform}
            className="text-neutral-dark hover:text-neutral-darkest transition-colors"
          >
            {link.platform === "twitter" && <Twitter size={20} />}
            {link.platform === "facebook" && <Facebook size={20} />}
            {link.platform === "instagram" && <Instagram size={20} />}
            {link.platform === "linkedin" && <Linkedin size={20} />}
          </a>
        ))}
      </div>
    </div>
  );
}

interface FooterBottomProps extends ComponentProps<"div"> {}

export function FooterBottom({ className, ...props }: FooterBottomProps) {
  return (
    <div
      className={cn("border-t border-neutral-lighter py-6", className)}
      {...props}
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-neutral-dark">
          &copy; {new Date().getFullYear()} Lentera Cendekia. All rights
          reserved.
        </p>
        <div className="flex space-x-6">
          <a
            href="/terms"
            className="text-sm text-neutral-dark hover:text-neutral-darkest"
          >
            Terms of Service
          </a>
          <a
            href="/privacy"
            className="text-sm text-neutral-dark hover:text-neutral-darkest"
          >
            Privacy Policy
          </a>
          <a
            href="/faq"
            className="text-sm text-neutral-dark hover:text-neutral-darkest"
          >
            FAQ
          </a>
        </div>
      </div>
    </div>
  );
}

export function FooterBrand({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("text-2xl font-medium", className)} {...props}>
      Lentera Cendekia
    </div>
  );
}

export function FooterCopyright({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("text-sm text-neutral-600", className)} {...props}>
      &copy; {new Date().getFullYear()} Lentera Cendekia. All rights reserved.
    </div>
  );
}

export function FooterInformation({
  children,
  className,
  ...props
}: ComponentProps<"div"> & { children?: ReactNode }) {
  return (
    <div
      className={cn(
        "flex justify-between border-b border-neutral-lighter dark:border-neutral-darkest pb-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function FooterLinks({
  links = [],
  children,
  className,
  ...props
}: ComponentProps<"div"> & {
  links?: SocialLink[];
  children?: ReactNode;
}) {
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

export function FooterOverlayContact({}) {
  return (
    <div className="fixed bottom-8 right-4 z-50">
      <button
        className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
        aria-label="Chat with us"
        // onClick={() => alert("Chatbot coming soon!")}
        onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
      >
        <MessageCircle />
        Chat Kami
      </button>
    </div>
  );
}
