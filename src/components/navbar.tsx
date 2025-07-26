"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navigations = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const sections = [
        "hero",
        "features",
        "blog",
        "features-2",
        "testimonials",
        "teachers",
      ];
      const sectionElements = sections.map((id) => document.getElementById(id));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getNavbarStyle = () => {
    if (!isScrolled) {
      return "bg-neutral-lightest text-neutral-darkest";
    }

    switch (activeSection) {
      case "hero":
        return "bg-neutral-lightest text-neutral-darkest";
      // case "features-2":
      //   return "bg-bright-sun-lightest text-neutral-darkest";
      // case "features":
      //   return "bg-blue-50/95 backdrop-blur-md shadow-sm";
      // case "blog":
      //   return "bg-gray-50/95 backdrop-blur-md shadow-sm";
      // case "testimonials":
      //   return "bg-purple-50/95 backdrop-blur-md shadow-sm";
      // case "teachers":
      //   return "bg-green-50/95 backdrop-blur-md shadow-sm";
      default:
        return "bg-white text-neutral-darkest";
    }
  };

  const getTextStyle = () => {
    if (!isScrolled && activeSection === "hero") {
      return "text-neutral-darkest";
    }
    return "text-neutral-darkest";
  };

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-neutral-lighter/70 transition-all duration-300 ${getNavbarStyle()}`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <NavbarBrand textStyle={getTextStyle()} />

        <div className="hidden lg:flex lg:items-center space-x-6">
          {navigations.map((nav) => (
            <NavbarLink
              key={nav.name}
              href={nav.href}
              textStyle={getTextStyle()}
            >
              {nav.name}
            </NavbarLink>
          ))}
          <Button variant="primary" className="text-lg px-6 py-5">
            Join Now
          </Button>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md hover:bg-neutral-lighter/50 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className={getTextStyle()} />
          ) : (
            <Menu size={24} className={getTextStyle()} />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          className={cn(
            "lg:hidden bg-white/95 backdrop-blur-md border-t border-neutral-lighter/50",
            getNavbarStyle()
          )}
        >
          <div className="container mx-auto px-6 py-4 space-y-4">
            {navigations.map((nav) => (
              <NavbarMobileLink
                key={nav.name}
                href={nav.href}
                onClick={() => setIsOpen(false)}
              >
                {nav.name}
              </NavbarMobileLink>
            ))}
            <Button
              variant="primary"
              className="w-full text-lg px-6 py-3"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export function NavbarBrand({
  textStyle = "text-neutral-darkest",
}: {
  textStyle?: string;
}) {
  return (
    <div
      className={`text-2xl font-medium transition-colors duration-300 ${textStyle}`}
    >
      Lentera Cendekia
    </div>
  );
}

export function NavbarLink({
  href,
  children,
  textStyle = "text-neutral-800",
}: {
  href: string;
  children: React.ReactNode;
  textStyle?: string;
}) {
  return (
    <Link
      href={href}
      className={`text-lg hover:opacity-70 transition-all duration-300 ${textStyle}`}
    >
      {children}
    </Link>
  );
}

export function NavbarMobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-lg text-neutral-800 hover:text-neutral-600 transition-colors py-2"
    >
      {children}
    </Link>
  );
}
