"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-64 rounded-lg overflow-hidden group"
          >
            <img
              src="/img/cta/cta-1.jpg"
              alt="Buy a Car"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-6 text-center">
              <h4 className="text-2xl font-bold mb-2">Do You Want To Buy A Car?</h4>
              <p className="mb-4">Browse our inventory of quality refurbished cars</p>
              <Link href="/cars?type=sale" className="primary-btn">
                View Cars for Sale
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-64 rounded-lg overflow-hidden group"
          >
            <img
              src="/img/cta/cta-2.jpg"
              alt="Rent a Car"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-6 text-center">
              <h4 className="text-2xl font-bold mb-2">Do You Want To Rent A Car?</h4>
              <p className="mb-4">Flexible rental options with competitive rates</p>
              <Link href="/cars?type=rent" className="primary-btn">
                View Cars for Rent
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
