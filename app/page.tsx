export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Nelson Islamic Cultural Society
          </h1>
          <p className="text-lg sm:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Building community, sharing culture, and fostering understanding in Nelson, New Zealand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="inline-block bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-primary-800 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Welcome to Our Community</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The Nelson Islamic Cultural Society is dedicated to promoting Islamic culture, education, and
              community engagement in Nelson and the surrounding regions.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🕌</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                Join us in building a welcoming and inclusive community for all members of the Islamic faith.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
              <p className="text-gray-600">
                Access educational resources and programs designed to deepen Islamic knowledge and understanding.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Connection</h3>
              <p className="text-gray-600">
                Connect with like-minded individuals and participate in cultural and social events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-50">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Check out our FAQ section or reach out to us directly. We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/faq"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View FAQ
            </a>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
