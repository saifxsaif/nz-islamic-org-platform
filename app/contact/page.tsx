import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Nelson Islamic Cultural Society",
  description:
    "Get in touch with the Nelson Islamic Cultural Society. Send us a message or find our contact information.",
  openGraph: {
    title: "Contact Us | Nelson Islamic Cultural Society",
    description: "Get in touch with us. We'd love to hear from you!",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-primary-100">
            We'd love to hear from you. Get in touch with us today!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex gap-4">
                  <Mail className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:contact@nelsonislamicsociety.org.nz"
                      className="text-gray-600 hover:text-primary-600 transition-colors break-all"
                    >
                      contact@nelsonislamicsociety.org.nz
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <Phone className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+64" className="text-gray-600 hover:text-primary-600 transition-colors">
                      +64 (0) 3 XXXX XXXX
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <MapPin className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Nelson, New Zealand</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-8 p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Response Time:</strong> We typically respond to inquiries within 24-48 hours during
                  business days.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Have a question or want to get involved? Fill out the form below and we'll get back to you as
                soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Visit Us</h3>
              <p className="text-gray-600">
                You're welcome to visit our community center. Please contact us in advance to arrange a visit
                or to learn about our visiting hours.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Attend Our Events</h3>
              <p className="text-gray-600">
                Join us at our community events and gatherings. Check back regularly for information about
                upcoming events and activities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
