"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

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

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/getintouch.jpg')",
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
              Get in
              <br />
              Touch
            </h1>

            <p className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you. Reach out to us today!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>

              <motion.div
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Email */}
                <motion.div className="flex gap-4" variants={itemVariants}>
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary-100">
                      <Mail className="text-primary-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:contact@nelsonislamicsociety.org.nz"
                      className="text-gray-600 hover:text-primary-600 transition-colors break-all"
                    >
                      contact@nelsonislamicsociety.org.nz
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div className="flex gap-4" variants={itemVariants}>
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary-100">
                      <Phone className="text-primary-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+64" className="text-gray-600 hover:text-primary-600 transition-colors">
                      +64 (0) 3 XXXX XXXX
                    </a>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div className="flex gap-4" variants={itemVariants}>
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary-100">
                      <MapPin className="text-primary-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Old St John's Church, Back Hall of 320 Hardy Street, Nelson, New Zealand, 7010</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Response Time */}
              <motion.div
                className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl border border-primary-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-gray-700">
                  <strong>Response Time:</strong> We typically respond to inquiries within 24-48 hours during
                  business days.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Have a question or want to get involved? Fill out the form below and we'll get back to you as
                soon as possible.
              </p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Other Ways to Connect</h2>
            <p className="text-lg text-gray-600">Explore different ways to engage with our community</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary-200 transition-all"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Visit Us</h3>
              <p className="text-gray-600">
                You're welcome to visit our community center. Please contact us in advance to arrange a visit
                or to learn about our visiting hours.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary-200 transition-all"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Attend Our Events</h3>
              <p className="text-gray-600">
                Join us at our community events and gatherings. Check back regularly for information about
                upcoming events and activities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
