import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Loft Insulation Solutions
            </h3>
            <p className="text-neutral-300 mb-6 max-w-md">
              Professional loft insulation services across the UK. Quality
              materials, expert installation, and guaranteed results for over 15
              years.
            </p>

            {/* Contact info */}
            <div className="space-y-2 text-neutral-300">
              <p>📞 0800 123 4567</p>
              <p>✉️ info@loftinsulation-solutions.com</p>
              <p>📍 Serving all UK regions</p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-neutral-300 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block text-neutral-300 hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block text-neutral-300 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block text-neutral-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/quote"
                className="block text-neutral-300 hover:text-white transition-colors"
              >
                Get Quote
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <nav className="space-y-2">
              <Link
                href="/loft-insulation"
                className="block text-neutral-300 hover:text-white transition-colors"
              >
                Loft Insulation
              </Link>
              <Link
                href="/cavity-wall-insulation"
                className="block text-neutral-300 hover:text-white transition-colors"
              >
                Cavity Wall Insulation
              </Link>
              <Link
                href="/floor-insulation"
                className="block text-neutral-300 hover:text-white transition-colors"
              >
                Floor Insulation
              </Link>
              <Link
                href="/energy-assessment"
                className="block text-neutral-300 hover:text-white transition-colors"
              >
                Energy Assessment
              </Link>
              <Link
                href="/grants"
                className="block text-neutral-300 hover:text-white transition-colors"
              >
                Government Grants
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm">
              © {currentYear} Loft Insulation Solutions. All rights reserved.
            </p>

            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
