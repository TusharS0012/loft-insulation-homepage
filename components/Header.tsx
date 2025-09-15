"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type MenuItem = {
  href: string;
  label: string;
  icon?: string;
};

// Dropdown data
const dropdowns: Record<string, MenuItem[]> = {
  about: [
    {
      href: "/about",
      label: "About Company",
      icon: "/images/icons8-exterior-50.png",
    },
    {
      href: "/why-choose-us",
      label: "Why Choose Us",
      icon: "/images/icons8-sheet-metal-50.png",
    },
  ],
  services: [
    {
      href: "/services/loft-insulation",
      label: "Loft Insulation Installation",
      icon: "/images/icons8-hammer-and-anvil-50.png",
    },
    {
      href: "/services/loft-clearance",
      label: "Loft Clearance & Preparation",
      icon: "/images/icons8-user-manual-50.png",
    },
    {
      href: "/services/loft-boarding",
      label: "Loft Boarding & Storage",
      icon: "/images/icons8-chain-50.png",
    },
    {
      href: "/services/roof-insulation",
      label: "Roof / Rafter Insulation",
      icon: "/images/icons8-solar-panel-50.png",
    },
    {
      href: "/services/cavity-wall-floor",
      label: "Cavity Wall & Floor Insulation",
      icon: "/images/icons8-wall-50.png",
    },
    {
      href: "/services/removal-replacement",
      label: "Insulation Removal & Replacement",
      icon: "/images/icons8-gear-50.png",
    },
  ],
  sectors: [
    {
      href: "/sectors/residential",
      label: "Residential Homes",
      icon: "/images/icons8-exterior-50.png",
    },
    {
      href: "/sectors/commercial",
      label: "Commercial & Industrial",
      icon: "/images/icons8-office-50.png",
    },
    {
      href: "/sectors/housing",
      label: "Housing Associations",
      icon: "/images/icons8-office-phone-50.png",
    },
    {
      href: "/sectors/landlords",
      label: "Landlords / Property Managers",
      icon: "/images/icons8-safety-hat-50.png",
    },
  ],
  insulation: [
    {
      href: "/insulation/batts-rolls",
      label: "Batts & Rolls",
      icon: "/images/icons8-yoga-mat-50.png",
    },
    {
      href: "/insulation/loose-fill",
      label: "Loose-Fill Insulation",
      icon: "/images/icons8-carpet-50.png",
    },
    {
      href: "/insulation/spray-foam",
      label: "Spray Foam Insulation",
      icon: "/images/icons8-graffiti-art-50.png",
    },
    {
      href: "/insulation/rigid-foam",
      label: "Rigid Foam Board",
      icon: "/images/icons8-strategy-50.png",
    },
    {
      href: "/insulation/radiant-barrier",
      label: "Radiant Barrier",
      icon: "/images/icons8-radiator-50.png",
    },
    {
      href: "/insulation/multifoil",
      label: "Multifoil",
      icon: "/images/icons8-heating-50.png",
    },
    {
      href: "/insulation/natural",
      label: "Natural Materials",
      icon: "/images/icons8-jungle-50.png",
    },
    {
      href: "/insulation/foam-in-place",
      label: "Foam-in-Place Injection",
      icon: "/images/icons8-enema-50.png",
    },
    {
      href: "/insulation/icf",
      label: "Insulating Concrete Forms",
      icon: "/images/icons8-interior-50.png",
    },
    {
      href: "/insulation/sips",
      label: "Structural Insulated Panels",
      icon: "/images/icons8-blueprint-50.png",
    },
  ],
};

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Loft Insulation UK"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium relative">
          <Link
            href="/"
            className="px-3 py-2 rounded-md hover:bg-primary/10 transition"
          >
            Home
          </Link>

          {Object.entries(dropdowns).map(([key, items]) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => setOpenMenu(key)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="flex items-center gap-1 hover:text-primary font-medium">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>

              {/* Dropdown */}
              {openMenu === key && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-56 p-2 text-sm border border-gray-200 transition-opacity duration-150">
                  {items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary/10 transition"
                    >
                      {item.icon && (
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="w-5 h-5"
                        />
                      )}
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/blog"
            className="px-3 py-2 rounded-md hover:bg-primary/10 transition"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="px-3 py-2 rounded-md hover:bg-primary/10 transition"
          >
            Contact
          </Link>

          <Link
            href="/quote"
            className="ml-4 px-3 py-2 rounded-md bg-primary text-white font-semibold hover:bg-primary/90 transition flex items-center gap-1"
          >
            <Image
              src="/images/icons8-paint-brush-50.png"
              alt="Quote"
              width={20}
              height={20}
            />
            Get a Free Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl"
        >
          {mobileOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-md">
          {Object.entries(dropdowns).map(([key, items]) => (
            <div key={key} className="p-2">
              <span className="font-medium">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </span>
              <div className="pl-3 mt-1 flex flex-col gap-1">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary/10 transition"
                  >
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.label}
                        className="w-5 h-5"
                      />
                    )}
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
