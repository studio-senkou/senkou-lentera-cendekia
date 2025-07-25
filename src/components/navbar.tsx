import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  const navigations = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-neutral-lightest">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <NavbarBrand />
        <div className="hidden lg:flex lg:items-center space-x-6">
          {navigations.map((nav) => (
            <NavbarLink key={nav.name} href={nav.href}>
              {nav.name}
            </NavbarLink>
          ))}
          <Button variant="primary" className="text-lg !bg-none px-6 py-5">
            Join
          </Button>
        </div>
      </div>
    </nav>
  );
}

export function NavbarBrand() {
  return <div className="text-2xl font-medium">Lentera Cendekia</div>;
}

export function NavbarLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-lg text-neutral-800 hover:text-neutral-600"
    >
      {children}
    </Link>
  );
}
