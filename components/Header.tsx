// components/Header.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // clear any pending close timeout
  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  // request close with small delay (ms)
  const closeWithDelay = (delay = 150) => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => setOpenMenu(null), delay);
  };

  useEffect(() => {
    return () => {
      // cleanup on unmount
      clearCloseTimeout();
    };
  }, []);

  const dropdownItemClass =
    "flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary/10 transition-colors";

  // animation variants for dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: -6, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -6, scale: 0.98 },
  };

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
            Home
          </Link>

          {/* About Us (wrapper controls hover/focus) */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearCloseTimeout();
              setOpenMenu("about");
            }}
            onMouseLeave={() => closeWithDelay()}
            onFocus={() => {
              clearCloseTimeout();
              setOpenMenu("about");
            }}
            onBlur={() => closeWithDelay()}
          >
            <button
              className="flex items-center gap-1 hover:text-primary font-medium"
              type="button"
            >
              About Us
            </button>

            <AnimatePresence>
              {openMenu === "about" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  transition={{ duration: 0.14, ease: "easeOut" }}
                  className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-52 p-2 text-sm z-50 border border-gray-200 pointer-events-auto"
                  onMouseEnter={() => {
                    clearCloseTimeout();
                    setOpenMenu("about");
                  }}
                  onMouseLeave={() => closeWithDelay()}
                >
                  <Link href="/about" className={dropdownItemClass}>
                    <Image
                      src="/images/icons8-exterior-50.png"
                      alt="About"
                      width={20}
                      height={20}
                    />
                    About Company
                  </Link>
                  <Link href="/why-choose-us" className={dropdownItemClass}>
                    <Image
                      src="/images/icons8-sheet-metal-50.png"
                      alt="Why Choose Us"
                      width={20}
                      height={20}
                    />
                    Why Choose Us
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearCloseTimeout();
              setOpenMenu("services");
            }}
            onMouseLeave={() => closeWithDelay()}
            onFocus={() => {
              clearCloseTimeout();
              setOpenMenu("services");
            }}
            onBlur={() => closeWithDelay()}
          >
            <button
              className="flex items-center gap-1 hover:text-primary font-medium"
              type="button"
            >
              Services
            </button>

            <AnimatePresence>
              {openMenu === "services" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  transition={{ duration: 0.14, ease: "easeOut" }}
                  className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-64 p-3 text-sm z-50 border border-gray-200 grid gap-1 pointer-events-auto"
                  onMouseEnter={() => {
                    clearCloseTimeout();
                    setOpenMenu("services");
                  }}
                  onMouseLeave={() => closeWithDelay()}
                >
                  <Link
                    href="/services/loft-insulation"
                    className={dropdownItemClass}
                  >
                    <Image
                      src="/images/icons8-hammer-and-anvil-50.png"
                      alt="Loft"
                      width={20}
                      height={20}
                    />
                    Loft Insulation Installation
                  </Link>
                  <Link
                    href="/services/loft-clearance"
                    className={dropdownItemClass}
                  >
                    <Image
                      src="/images/icons8-user-manual-50.png"
                      alt="Clearance"
                      width={20}
                      height={20}
                    />
                    Loft Clearance & Preparation
                  </Link>
                  <Link
                    href="/services/loft-boarding"
                    className={dropdownItemClass}
                  >
                    <Image
                      src="/images/icons8-chain-50.png"
                      alt="Boarding"
                      width={20}
                      height={20}
                    />
                    Loft Boarding & Storage
                  </Link>
                  <Link
                    href="/services/roof-insulation"
                    className={dropdownItemClass}
                  >
                    <Image
                      src="/images/icons8-solar-panel-50.png"
                      alt="Roof"
                      width={20}
                      height={20}
                    />
                    Roof / Rafter Insulation
                  </Link>
                  <Link
                    href="/services/cavity-wall-floor"
                    className={dropdownItemClass}
                  >
                    <Image
                      src="/images/icons8-wall-50.png"
                      alt="Wall"
                      width={20}
                      height={20}
                    />
                    Cavity Wall & Floor Insulation
                  </Link>
                  <Link
                    href="/services/removal-replacement"
                    className={dropdownItemClass}
                  >
                    <Image
                      src="/images/icons8-gear-50.png"
                      alt="Removal"
                      width={20}
                      height={20}
                    />
                    Insulation Removal & Replacement
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sectors */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearCloseTimeout();
              setOpenMenu("sectors");
            }}
            onMouseLeave={() => closeWithDelay()}
            onFocus={() => {
              clearCloseTimeout();
              setOpenMenu("sectors");
            }}
            onBlur={() => closeWithDelay()}
          >
            <button
              className="flex items-center gap-1 hover:text-primary font-medium"
              type="button"
            >
              Sectors
            </button>

            <AnimatePresence>
              {openMenu === "sectors" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  transition={{ duration: 0.14, ease: "easeOut" }}
                  className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-56 p-3 text-sm z-50 border border-gray-200 pointer-events-auto"
                  onMouseEnter={() => {
                    clearCloseTimeout();
                    setOpenMenu("sectors");
                  }}
                  onMouseLeave={() => closeWithDelay()}
                >
                  <Link
                    href="/sectors/residential"
                    className={dropdownItemClass}
                  >
                    <Image
                      src="/images/icons8-exterior-50.png"
                      alt="Residential"
                      width={20}
                      height={20}
                    />
                    Residential Homes
                  </Link>
                  <Link
                    href="/sectors/commercial"
                    className={dropdownItemClass}
                  >
                    <Image
                      src="/images/icons8-office-50.png"
                      alt="Commercial"
                      width={20}
                      height={20}
                    />
                    Commercial & Industrial
                  </Link>
                  <Link href="/sectors/housing" className={dropdownItemClass}>
                    <Image
                      src="/images/icons8-office-phone-50.png"
                      alt="Housing"
                      width={20}
                      height={20}
                    />
                    Housing Associations
                  </Link>
                  <Link href="/sectors/landlords" className={dropdownItemClass}>
                    <Image
                      src="/images/icons8-safety-hat-50.png"
                      alt="Landlords"
                      width={20}
                      height={20}
                    />
                    Landlords / Property Managers
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Insulation */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearCloseTimeout();
              setOpenMenu("insulation");
            }}
            onMouseLeave={() => closeWithDelay()}
            onFocus={() => {
              clearCloseTimeout();
              setOpenMenu("insulation");
            }}
            onBlur={() => closeWithDelay()}
          >
            <button
              className="flex items-center gap-1 hover:text-primary font-medium"
              type="button"
            >
              Insulation
            </button>

            <AnimatePresence>
              {openMenu === "insulation" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  transition={{ duration: 0.14, ease: "easeOut" }}
                  className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-72 p-3 text-sm z-50 border border-gray-200 grid gap-1 pointer-events-auto"
                  onMouseEnter={() => {
                    clearCloseTimeout();
                    setOpenMenu("insulation");
                  }}
                  onMouseLeave={() => closeWithDelay()}
                >
                  <Link
                    href="/insulation/batts-rolls"
                    className={dropdownItemClass}
                  >
                    <Image
                      src="/images/icons8-yoga-mat-50.png"
                      alt="Batts"
                      width={20}
                      height={20}
                    />
                    Batts & Rolls
                  </Link>
                  <Link
                    href="/insulation/loose-fill"
                    className={dropdownItemClass}
                  >
                    <Image
                      src="/images/icons8-carpet-50.png"
                      alt="Loose Fill"
                      width={20}
                      height={20}
                    />
                    Loose-Fill Insulation
                  </Link>
                  <Link
                    href="/insulation/spray-foam"
                    className={dropdownItemClass}
                  >
                    <Image
                      src="/images/icons8-graffiti-art-50.png"
                      alt="Spray Foam"
                      width={20}
                      height={20}
                    />
                    Spray Foam Insulation
                  </Link>
                  <Link
                    href="/insulation/rigid-foam"
                    className={dropdownItemClass}
                  >
                    <Image
                      src="/images/icons8-strategy-50.png"
                      alt="Rigid Foam"
                      width={20}
                      height={20}
                    />
                    Rigid Foam Board
                  </Link>
                  <Link
                    href="/insulation/radiant-barrier"
                    className={dropdownItemClass}
                  >
                    <Image
                      src="/images/icons8-radiator-50.png"
                      alt="Radiant Barrier"
                      width={20}
                      height={20}
                    />
                    Radiant Barrier
                  </Link>
                  <Link
                    href="/insulation/multifoil"
                    className={dropdownItemClass}
                  >
                    <Image
                      src="/images/icons8-heating-50.png"
                      alt="Multifoil"
                      width={20}
                      height={20}
                    />
                    Multifoil
                  </Link>
                  <Link
                    href="/insulation/natural"
                    className={dropdownItemClass}
                  >
                    <Image
                      src="/images/icons8-jungle-50.png"
                      alt="Natural"
                      width={20}
                      height={20}
                    />
                    Natural Materials
                  </Link>
                  <Link
                    href="/insulation/foam-in-place"
                    className={dropdownItemClass}
                  >
                    <Image
                      src="/images/icons8-enema-50.png"
                      alt="Foam in Place"
                      width={20}
                      height={20}
                    />
                    Foam-in-Place Injection
                  </Link>
                  <Link href="/insulation/icf" className={dropdownItemClass}>
                    <Image
                      src="/images/icons8-interior-50.png"
                      alt="ICF"
                      width={20}
                      height={20}
                    />
                    Insulating Concrete Forms
                  </Link>
                  <Link href="/insulation/sips" className={dropdownItemClass}>
                    <Image
                      src="/images/icons8-blueprint-50.png"
                      alt="SIPs"
                      width={20}
                      height={20}
                    />
                    Structural Insulated Panels
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Blog & Contact */}
          <Link href="/blog" className={dropdownItemClass}>
            Blog
          </Link>
          <Link href="/contact" className={dropdownItemClass}>
            Contact
          </Link>

          <Link
            href="/quote"
            className="ml-4 px-3 py-2 rounded-md bg-primary text-white font-semibold hover:bg-primary/90 transition-colors flex items-center gap-1"
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

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
        >
          {mobileOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* mobile menu omitted for brevity (can mirror dropdowns as an accordion) */}
    </header>
  );
}
