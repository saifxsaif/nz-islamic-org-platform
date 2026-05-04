"use client";

import { motion } from "framer-motion";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqData } from "@/lib/faq-data";
import { ArrowRight } from "lucide-react";

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

export default function FAQPage() {
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
                Frequently Asked
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-primary-600 to-primary-700 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about our community and services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="mb-12 p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl border border-primary-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700">
              Have a question that's not answered here? Feel free to{" "}
              <a href="/contact" className="text-primary-600 hover:text-primary-700 font-semibold">
                contact us
              </a>
              , and we'll be happy to help!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FAQAccordion items={faqData} defaultOpenId="prayer-times" />
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
            <h2 className="text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-primary-100 mb-8">
              Don't hesitate to reach out to us. We're here to help and would love to hear from you.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
