"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"rent" | "buy">("rent");

  return (
    <section
      className="relative min-h-[600px] md:min-h-[700px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/hero-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <span className="text-primary text-lg font-bold mb-2 block">
              FIND YOUR DREAM CAR
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Quality Refurbished
              <br />
              <span className="text-primary">Cars in Gorakhpur</span>
            </h1>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-gray-300">Starting from</span>
              <h2 className="text-5xl font-bold">
                ₹3.5L
                <span className="text-lg font-normal text-gray-300">/onwards</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="primary-btn">
                View Inventory
              </button>
              <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-100 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-dark-800 rounded-lg shadow-2xl p-6"
          >
            <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
              <button
                onClick={() => setActiveTab("rent")}
                className={`flex-1 py-3 font-semibold transition-colors ${
                  activeTab === "rent"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                Car Rental
              </button>
              <button
                onClick={() => setActiveTab("buy")}
                className={`flex-1 py-3 font-semibold transition-colors ${
                  activeTab === "buy"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                Buy Car
              </button>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              {activeTab === "rent" ? "Find Car to Rent" : "Find Car to Buy"}
            </h2>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Select Year
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark-700">
                    <option>Select Year</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Select Brand
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark-700">
                    <option>Select Brand</option>
                    <option>Maruti Suzuki</option>
                    <option>Hyundai</option>
                    <option>Tata</option>
                    <option>Mahindra</option>
                    <option>Honda</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Select Model
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark-700">
                    <option>Select Model</option>
                    <option>Swift</option>
                    <option>Creta</option>
                    <option>Nexon</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Max Mileage (km)
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark-700">
                    <option>Select Mileage</option>
                    <option>10,000</option>
                    <option>20,000</option>
                    <option>30,000</option>
                    <option>50,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Price Range
                </label>
                <input
                  type="range"
                  min="0"
                  max="5000000"
                  step="50000"
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-1">
                  <span>₹0</span>
                  <span>₹50L</span>
                </div>
              </div>

              <button type="submit" className="w-full primary-btn flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Search Cars
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
