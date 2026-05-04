"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { StatCard } from "@/components/StatCard";
import { TestimonialCard } from "@/components/TestimonialCard";
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/coverpage.jpg')",
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
            <motion.div
              className="inline-block mb-6 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              Welcome to Our Community
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Nelson Islamic
              <br />
              Cultural Society
            </h1>

            <p className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
              Building community, sharing culture, and fostering understanding in Nelson, New Zealand
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.a
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold border-2 border-primary-200 hover:border-primary-600 hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold border-2 border-primary-200 hover:border-primary-600 hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch <ArrowRight size={20} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">Making a difference in our community</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <StatCard number={50} label="Years of Service" icon="📅" />
            <StatCard number={1000} label="Community Members" icon="👥" />
            <StatCard number={15} label="Active Programs" icon="📚" />
            <StatCard number={5000} label="Lives Impacted" icon="❤️" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services & Programs</h2>
            <p className="text-lg text-gray-600">Comprehensive offerings for spiritual and cultural growth</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ServiceCard
              icon="🕌"
              title="Religious Services"
              description="Daily prayers, Quranic recitations, and spiritual guidance"
              features={["Five daily prayers", "Quranic studies", "Spiritual counseling"]}
            />
            <ServiceCard
              icon="📚"
              title="Educational Programs"
              description="Islamic studies, Arabic language, and cultural education"
              features={["Quran classes", "Arabic lessons", "Islamic history"]}
            />
            <ServiceCard
              icon="🤝"
              title="Community Events"
              description="Cultural celebrations, social gatherings, and interfaith dialogues"
              features={["Eid celebrations", "Community dinners", "Interfaith events"]}
            />
            <ServiceCard
              icon="❤️"
              title="Charitable Work"
              description="Supporting those in need through various community initiatives"
              features={["Food assistance", "Educational support", "Emergency aid"]}
            />
            <ServiceCard
              icon="👨‍👩‍👧‍👦"
              title="Family Programs"
              description="Activities and support for families and youth development"
              features={["Youth programs", "Family counseling", "Mentorship"]}
            />
            <ServiceCard
              icon="🌍"
              title="Outreach & Advocacy"
              description="Promoting understanding and cooperation with broader community"
              features={["Community engagement", "Awareness campaigns", "Partnerships"]}
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
            <p className="text-lg text-gray-600">Hear from members of our vibrant community</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <TestimonialCard
              name="Ahmed Hassan"
              role="Community Member"
              content="The Nelson Islamic Cultural Society has been instrumental in helping me connect with my faith and community. The programs are well-organized and welcoming to everyone."
              rating={5}
            />
            <TestimonialCard
              name="Fatima Khan"
              role="Volunteer"
              content="I'm proud to be part of this organization. The work they do in the community is truly inspiring and makes a real difference in people's lives."
              rating={5}
            />
            <TestimonialCard
              name="Muhammad Ali"
              role="Student"
              content="The educational programs here have deepened my understanding of Islam and helped me grow both spiritually and intellectually."
              rating={5}
            />
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Join us for these exciting community gatherings</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Quranic Study Circle",
                date: "Every Friday",
                time: "7:00 PM - 8:30 PM",
                description: "Join us for in-depth Quranic discussions and learning",
              },
              {
                title: "Community Iftar",
                date: "During Ramadan",
                time: "Sunset",
                description: "Break fast together with our community members",
              },
              {
                title: "Youth Sports Day",
                date: "Next Month",
                time: "2:00 PM - 5:00 PM",
                description: "Fun sports activities for youth and families",
              },
              {
                title: "Interfaith Dialogue",
                date: "Monthly",
                time: "6:00 PM - 7:30 PM",
                description: "Meaningful conversations with other faith communities",
              },
            ].map((event, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary-200 transition-all"
                whileHover={{ y: -5 }}
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📅</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-sm text-primary-600 font-semibold mb-1">{event.date}</p>
                    <p className="text-sm text-gray-600 mb-3">{event.time}</p>
                    <p className="text-gray-700">{event.description}</p>
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
            <h2 className="text-4xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-lg text-primary-100 mb-8">
              Connect with us today and be part of something meaningful
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
