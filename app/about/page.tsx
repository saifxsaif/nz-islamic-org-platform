"use client";

import { motion } from "framer-motion";
import { Heart, BookOpen, Users, Handshake } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/whoweare.jpg')",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/60 to-blue-900/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              About Our
              <br />
              Community
            </h1>

            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover our mission, values, and commitment to building a vibrant Islamic community in Nelson
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary-700 mb-6">Our Mission</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                The Nelson Islamic Cultural Society is dedicated to promoting Islamic culture, education, and
                community engagement in Nelson and the surrounding regions. We strive to create a welcoming
                environment where members of the Islamic faith can connect, learn, and grow together.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to foster understanding, respect, and cooperation between the Islamic community
                and the broader Nelson community, while preserving and celebrating Islamic heritage and values.
              </p>
            </div>

            {/* Location Info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-100">
              <p className="text-gray-700">
                <strong className="text-primary-700">Location:</strong> Old St John's Church, Back Hall of 320 Hardy Street, Nelson, New Zealand, 7010
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">Principles that guide everything we do</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Users,
                title: "Community",
                description:
                  "We believe in the power of community and work to build strong bonds among our members and with the wider Nelson community.",
              },
              {
                icon: BookOpen,
                title: "Education",
                description:
                  "We are committed to providing educational opportunities that deepen Islamic knowledge and promote interfaith understanding.",
              },
              {
                icon: Heart,
                title: "Respect",
                description:
                  "We respect all individuals and cultures, and we work to promote tolerance and mutual understanding in our community.",
              },
              {
                icon: Handshake,
                title: "Service",
                description:
                  "We are dedicated to serving our community through charitable work, social programs, and community engagement initiatives.",
              },
            ].map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary-200 transition-all"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4">
                    <Icon className="w-12 h-12 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary-700 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600">Our doors are always open to anyone who would like to learn about our services.</p>
          </motion.div>

          <motion.div
            className="mb-12 p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl border border-primary-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Aims</h3>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold text-primary-700 mb-2">(a) Religious & Spiritual Platform</p>
                <p className="text-gray-700">To provide the Muslim Community in Nelson a religious and spiritual platform to improve their religion and spirituality.</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-primary-700 mb-2">(b) Peace & Harmony</p>
                <p className="text-gray-700">To promote peace, harmony, integration and tolerance within and beyond our community.</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-primary-700 mb-2">(c) Community Services</p>
                <p className="text-gray-700">To bring the community together by providing essential services:</p>
                <ul className="mt-3 space-y-2 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600 font-bold">•</span>
                    <span className="text-gray-700">Five Daily Congregational Prayers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600 font-bold">•</span>
                    <span className="text-gray-700">Friday Congregational Prayers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600 font-bold">•</span>
                    <span className="text-gray-700">Ramadan Congregational Prayers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600 font-bold">•</span>
                    <span className="text-gray-700">EID Congregational Prayers (Eid-ul-Fitr and Eid-ul-Adha)</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Religious Services",
                description:
                  "We organize regular prayer services and religious gatherings for our community members.",
                icon: "🕌",
              },
              {
                title: "Educational Programs",
                description:
                  "We offer classes and workshops on Islamic studies, Arabic language, and cultural topics.",
                icon: "📚",
              },
              {
                title: "Community Events",
                description:
                  "We host cultural celebrations, social gatherings, and community outreach events throughout the year.",
                icon: "🎉",
              },
              {
                title: "Charitable Work",
                description:
                  "We are committed to supporting those in need through various charitable initiatives and community service projects.",
                icon: "❤️",
              },
            ].map((activity, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary-200 transition-all"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="flex gap-6">
                  <div className="text-4xl flex-shrink-0">{activity.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FIANZ Recognition Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary-700 mb-4">Recognition</h2>
            <p className="text-lg text-gray-600">Proud member of FIANZ</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-12 border border-gray-200 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The Nelson Islamic Cultural Society is recognized by <span className="font-semibold text-primary-700">FIANZ</span> (Federation of Islamic Associations of New Zealand Inc.), the national umbrella organization for Islamic communities across New Zealand.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This recognition affirms our commitment to promoting Islamic values, community welfare, and interfaith dialogue in accordance with national standards and best practices.
                </p>
              </div>

              {/* Logos */}
              <div className="flex flex-col gap-6 items-center justify-center">
                <div className="w-full">
                  <img
                    src="/fianz logo.png"
                    alt="FIANZ Logo"
                    className="h-32 object-contain mx-auto"
                  />
                </div>
                <div className="w-full">
                  <img
                    src="/fianz letter.jpg"
                    alt="FIANZ Letter"
                    className="h-40 object-contain mx-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Get Involved Today</h2>
            <p className="text-lg text-primary-100 mb-8">
              Join our community and be part of something meaningful
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
