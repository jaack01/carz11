"use client";

import { motion } from "framer-motion";
import { Car, ShoppingCart, Wrench, Headphones } from "lucide-react";
import { SectionTitle } from "../section-title";

const services = [
  {
    icon: Car,
    title: "Car Rental",
    description: "Flexible rental options with competitive rates. Rent by day, week, or month.",
  },
  {
    icon: ShoppingCart,
    title: "Buy Refurbished Cars",
    description: "Quality assured refurbished cars with warranty and transparent pricing.",
  },
  {
    icon: Wrench,
    title: "Car Maintenance",
    description: "Professional maintenance and servicing for all car brands and models.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your automotive needs.",
  },
];

export function ServicesSection() {
  return (
    <section className="spad bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto">
        <SectionTitle
          subtitle="Our Services"
          title="What We Offer"
          description="Comprehensive automotive solutions for Gorakhpur and surrounding areas"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-900 p-6 rounded-lg text-center hover:shadow-lg transition-shadow group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h5 className="text-xl font-bold mb-2">{service.title}</h5>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
