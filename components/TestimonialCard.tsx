"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating?: number;
}

export function TestimonialCard({ name, role, content, rating = 5 }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary-200 transition-all"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed italic">"{content}"</p>
      <div>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-primary-600">{role}</p>
      </div>
    </motion.div>
  );
}
