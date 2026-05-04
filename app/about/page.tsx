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
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-blue-600 bg-clip-text text-transparent">
                About Our
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-primary-600 to-primary-700 bg-clip-text text-transparent">
                Community
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600">Our programs and activities serve the community</p>
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
