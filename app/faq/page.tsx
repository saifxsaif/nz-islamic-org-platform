import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqData } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "FAQ | Nelson Islamic Cultural Society",
  description:
    "Frequently asked questions about the Nelson Islamic Cultural Society, our services, events, and community.",
  openGraph: {
    title: "FAQ | Nelson Islamic Cultural Society",
    description: "Find answers to common questions about our organization and community.",
    url: "/faq",
  },
};

export default function FAQPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-primary-100">
            Find answers to common questions about our community and services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <p className="text-lg text-gray-600">
              Have a question that's not answered here? Feel free to{" "}
              <a href="/contact" className="text-primary-600 hover:text-primary-700 font-semibold">
                contact us
              </a>
              , and we'll be happy to help!
            </p>
          </div>

          <FAQAccordion items={faqData} defaultOpenId="prayer-times" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Don't hesitate to reach out to us. We're here to help and would love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
