// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Home,
  Info,
  Star,
  Building,
  Mail,
  FileText,
  ChevronDown,
  HardDrive, // example icons for services
  Layers,
  Box,
  Layout,
  Shield,
} from "lucide-react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const dropdownItemClass =
    "flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary/10 transition-colors";

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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium relative">
          <Link href="/" className={dropdownItemClass}>
            <Home className="h-5 w-5 stroke-[2]" /> Home
          </Link>

          {/* About Us */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("about")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className="flex items-center gap-1 hover:text-primary font-medium"
              type="button"
            >
              About Us <ChevronDown className="h-4 w-4" />
            </button>
            {openMenu === "about" && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-52 p-2 text-sm z-50 border border-gray-200">
                <Link href="/about" className={dropdownItemClass}>
                  <Info className="h-5 w-5 stroke-[2]" /> About Company
                </Link>
                <Link href="/why-choose-us" className={dropdownItemClass}>
                  <Star className="h-5 w-5 stroke-[2]" /> Why Choose Us
                </Link>
              </div>
            )}
          </div>

          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className="flex items-center gap-1 hover:text-primary font-medium"
              type="button"
            >
              Services <ChevronDown className="h-4 w-4" />
            </button>
            {openMenu === "services" && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-64 p-3 text-sm z-50 border border-gray-200 grid gap-1">
                <Link
                  href="/services/loft-insulation"
                  className={dropdownItemClass}
                >
                  <HardDrive className="h-5 w-5 stroke-[2]" /> Loft Insulation
                  Installation
                </Link>
                <Link
                  href="/services/loft-clearance"
                  className={dropdownItemClass}
                >
                  <Layers className="h-5 w-5 stroke-[2]" /> Loft Clearance &
                  Preparation
                </Link>
                <Link
                  href="/services/loft-boarding"
                  className={dropdownItemClass}
                >
                  <Box className="h-5 w-5 stroke-[2]" /> Loft Boarding & Storage
                </Link>
                <Link
                  href="/services/roof-insulation"
                  className={dropdownItemClass}
                >
                  <Layout className="h-5 w-5 stroke-[2]" /> Roof / Rafter
                  Insulation
                </Link>
                <Link
                  href="/services/cavity-wall-floor"
                  className={dropdownItemClass}
                >
                  <Shield className="h-5 w-5 stroke-[2]" /> Cavity Wall & Floor
                  Insulation
                </Link>
                <Link
                  href="/services/removal-replacement"
                  className={dropdownItemClass}
                >
                  <Layers className="h-5 w-5 stroke-[2]" /> Insulation Removal &
                  Replacement
                </Link>
              </div>
            )}
          </div>

          {/* Sectors */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("sectors")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className="flex items-center gap-1 hover:text-primary font-medium"
              type="button"
            >
              Sectors <ChevronDown className="h-4 w-4" />
            </button>
            {openMenu === "sectors" && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-56 p-3 text-sm z-50 border border-gray-200">
                <Link href="/sectors/residential" className={dropdownItemClass}>
                  <Home className="h-5 w-5 stroke-[2]" /> Residential Homes
                </Link>
                <Link href="/sectors/commercial" className={dropdownItemClass}>
                  <Building className="h-5 w-5 stroke-[2]" /> Commercial &
                  Industrial
                </Link>
                <Link href="/sectors/housing" className={dropdownItemClass}>
                  <Star className="h-5 w-5 stroke-[2]" /> Housing Associations
                </Link>
                <Link href="/sectors/landlords" className={dropdownItemClass}>
                  <Shield className="h-5 w-5 stroke-[2]" /> Landlords / Property
                  Managers
                </Link>
              </div>
            )}
          </div>

          {/* Blog & Contact */}
          <Link href="/blog" className={dropdownItemClass}>
            <FileText className="h-5 w-5 stroke-[2]" /> Blog
          </Link>
          <Link href="/contact" className={dropdownItemClass}>
            <Mail className="h-5 w-5 stroke-[2]" /> Contact
          </Link>

          <Link
            href="/quote"
            className="ml-4 px-3 py-2 rounded-md bg-primary text-white font-semibold hover:bg-primary/90 transition-colors flex items-center gap-1"
          >
            <Shield className="h-5 w-5 stroke-[2]" /> Get a Free Quote
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 stroke-[2]" />
          ) : (
            <Menu className="h-6 w-6 stroke-[2]" />
          )}
        </button>
      </div>

      {/* Mobile menu code would also need the same icon updates */}
    </header>
  );
}
