"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { SectionTitle } from "../section-title";

export function WhyChooseUs() {
  const reasons = [
    "Complete transparency in all transactions",
    "Quality certified refurbished vehicles",
    "Flexible financing and EMI options",
    "Comprehensive after-sales service",
  ];

  return (
    <section className="spad bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              title="Why Choose GKP Auto?"
              description="Your trusted partner for quality refurbished cars in Gorakhpur"
              className="text-left"
            />
            <ul className="space-y-4 mb-6">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">{reason}</span>
                </li>
              ))}
            </ul>
            <button className="primary-btn">Learn More About Us</button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-lg overflow-hidden"
          >
            <img
              src="/img/chooseus-video.png"
              alt="Why Choose Us"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
