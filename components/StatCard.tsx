"use client";

import { motion } from "framer-motion";
import { useCountUp } from "use-count-up";

interface StatCardProps {
  number: number;
  label: string;
  icon?: string;
  suffix?: string;
}

export function StatCard({ number, label, icon, suffix = "" }: StatCardProps) {
  const { value } = useCountUp({
    isCounting: true,
    start: 0,
    end: number,
    duration: 2.75,
  });

  return (
    <motion.div
      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary-200 transition-all"
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.1)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent mb-2">
        {value}
        {suffix}
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
}
