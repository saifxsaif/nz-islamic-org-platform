import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Nelson Islamic Cultural Society</h3>
            <p className="text-gray-600 text-sm">
              Serving the Islamic community in Nelson, New Zealand with cultural, educational, and spiritual
              programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-primary-600 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contact@nelsonislamicsociety.org.nz"
                  className="text-gray-600 hover:text-primary-600 text-sm transition-colors break-all"
                >
                  contact@nelsonislamicsociety.org.nz
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-primary-600 mt-0.5 flex-shrink-0" />
                <a href="tel:+64" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  +64 (0) 3 XXXX XXXX
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600 text-sm">Nelson, New Zealand</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              f
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              📷
            </a>
          </div>

          <p className="text-gray-600 text-sm">
            &copy; {currentYear} Nelson Islamic Cultural Society. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
