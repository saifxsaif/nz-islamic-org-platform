"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
}

export function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <motion.div
      className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary-200 transition-all overflow-hidden"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <motion.div
          className="text-5xl mb-4 inline-block"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {icon}
        </motion.div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

        {features && (
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-primary-600 font-bold mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
