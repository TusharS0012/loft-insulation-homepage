// components/Footer.tsx
"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Search,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-neutral-200">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-6 gap-16">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">
              Loft Insulation Solutions
            </h3>
            <p className="text-neutral-400 mb-6 max-w-sm">
              Your trusted partner for professional loft insulation services
              across the UK. We deliver expert solutions that help homeowners
              save energy and cut costs.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 text-neutral-400">
              <Link href="#" className="hover:text-yellow-400 transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-yellow-400 transition">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-yellow-400 transition">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-yellow-400 transition">
                <Youtube size={20} />
              </Link>
              <Link href="#" className="hover:text-yellow-400 transition">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="hover:text-yellow-400 transition">
                <Search size={20} />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">
              Services
            </h4>
            <nav className="space-y-2">
              <Link
                href="/loft-insulation"
                className="block hover:text-yellow-400"
              >
                Loft Insulation
              </Link>
              <Link
                href="/cavity-wall-insulation"
                className="block hover:text-yellow-400"
              >
                Cavity Wall Insulation
              </Link>
              <Link
                href="/floor-insulation"
                className="block hover:text-yellow-400"
              >
                Floor Insulation
              </Link>
              <Link
                href="/energy-assessment"
                className="block hover:text-yellow-400"
              >
                Energy Assessment
              </Link>
              <Link href="/grants" className="block hover:text-yellow-400">
                Government Grants
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">
              Company
            </h4>
            <nav className="space-y-2">
              <Link href="/about" className="block hover:text-yellow-400">
                About Us
              </Link>
              <Link href="/process" className="block hover:text-yellow-400">
                Our Process
              </Link>
              <Link href="/pricing" className="block hover:text-yellow-400">
                Pricing
              </Link>
              <Link href="/careers" className="block hover:text-yellow-400">
                Careers
              </Link>
              <Link href="/contact" className="block hover:text-yellow-400">
                Contact
              </Link>
            </nav>
          </div>

          {/* Cities Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">
              Cities We Serve
            </h4>

            <ul className="space-y-2 text-neutral-400">
              <li className="hover:text-yellow-400 cursor-pointer">
                Manchester
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Birmingham
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">Leeds</li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Liverpool
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Sheffield
              </li>
            </ul>
          </div>

          {/* Important Links Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">
              Important Links
            </h4>
            <nav className="space-y-2 text-neutral-400">
              <a
                href="https://www.loft-insulation-services-uk.com/free-loft-insulation-uk"
                className="block hover:text-yellow-400"
              >
                Free Loft Insulation UK
              </a>
              <a
                href="https://www.loft-insulation-services-uk.com/uk/lon/loft-insulation-london"
                className="block hover:text-yellow-400"
              >
                Loft Insulation London
              </a>
              <a
                href="https://www.loft-insulation-services-uk.com/loft-insulation-leads"
                className="block hover:text-yellow-400"
              >
                Loft Insulation Leads
              </a>
              <a
                href="https://www.loft-insulation-services-uk.com/loft-insulation-near-me"
                className="block hover:text-yellow-400"
              >
                Loft Insulation Near Me
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-neutral-800 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500">
              © {currentYear} Loft Insulation Solutions. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-yellow-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-yellow-400">
                Terms & Conditions
              </Link>
              <Link href="/cookies" className="hover:text-yellow-400">
                Cookie Policy
              </Link>
              <Link href="/disclaimer" className="hover:text-yellow-400">
                Disclaimer
              </Link>
            </div>
          </div>

          {/* Partner Sites */}
          <div className="mt-6 text-neutral-400 text-sm">
            <h5 className="font-semibold mb-2 text-yellow-400">
              Our Partner Sites
            </h5>
            <div className="flex flex-wrap gap-3">
              <Link href="#" className="hover:text-yellow-400">
                Printersassist
              </Link>
              <Link href="#" className="hover:text-yellow-400">
                ITSupport
              </Link>
              <Link href="#" className="hover:text-yellow-400">
                L4rg.us
              </Link>
              <Link href="#" className="hover:text-yellow-400">
                Sureshdas
              </Link>
              <Link href="#" className="hover:text-yellow-400">
                BuyGrab
              </Link>
              <Link href="#" className="hover:text-yellow-400">
                Loft Insulation
              </Link>
              <Link href="#" className="hover:text-yellow-400">
                Cyber Radar Systems
              </Link>
              <Link href="#" className="hover:text-yellow-400">
                US Market Partner
              </Link>
              <Link href="#" className="hover:text-yellow-400">
                SaaSMyplace
              </Link>
              <Link href="#" className="hover:text-yellow-400">
                SupportForPrinter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
