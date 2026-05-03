import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Nelson Islamic Cultural Society",
  description:
    "Learn about the Nelson Islamic Cultural Society, our mission, values, and community activities in Nelson, New Zealand.",
  openGraph: {
    title: "About Us | Nelson Islamic Cultural Society",
    description:
      "Learn about the Nelson Islamic Cultural Society, our mission, values, and community activities.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-primary-100">
            Discover our mission, values, and commitment to the community
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          {/* Mission Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              The Nelson Islamic Cultural Society is dedicated to promoting Islamic culture, education, and
              community engagement in Nelson and the surrounding regions. We strive to create a welcoming
              environment where members of the Islamic faith can connect, learn, and grow together.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is to foster understanding, respect, and cooperation between the Islamic community
              and the broader Nelson community, while preserving and celebrating Islamic heritage and values.
            </p>
          </div>

          {/* Values Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Community</h3>
                <p className="text-gray-600">
                  We believe in the power of community and work to build strong bonds among our members and
                  with the wider Nelson community.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Education</h3>
                <p className="text-gray-600">
                  We are committed to providing educational opportunities that deepen Islamic knowledge and
                  promote interfaith understanding.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Respect</h3>
                <p className="text-gray-600">
                  We respect all individuals and cultures, and we work to promote tolerance and mutual
                  understanding in our community.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Service</h3>
                <p className="text-gray-600">
                  We are dedicated to serving our community through charitable work, social programs, and
                  community engagement initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* Activities Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Activities</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Religious Services</h3>
                <p className="text-gray-600">
                  We organize regular prayer services and religious gatherings for our community members.
                </p>
              </div>
              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Educational Programs</h3>
                <p className="text-gray-600">
                  We offer classes and workshops on Islamic studies, Arabic language, and cultural topics.
                </p>
              </div>
              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Events</h3>
                <p className="text-gray-600">
                  We host cultural celebrations, social gatherings, and community outreach events throughout
                  the year.
                </p>
              </div>
              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Charitable Work</h3>
                <p className="text-gray-600">
                  We are committed to supporting those in need through various charitable initiatives and
                  community service projects.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              We would love to hear from you! Whether you have questions about our organization or would like
              to get involved, please don't hesitate to reach out.
            </p>
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:contact@nelsonislamicsociety.org.nz"
                  className="text-primary-600 hover:text-primary-700"
                >
                  contact@nelsonislamicsociety.org.nz
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Location:</strong> Nelson, New Zealand
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
