"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Car } from "@/types";
import { formatPrice } from "@/lib/utils";
import { Gauge, Fuel, Calendar } from "lucide-react";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-dark-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
    >
      <Link href={`/cars/${car.id}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={car.images[0] || "/img/cars/car-1.jpg"}
            alt={`${car.brand} ${car.model}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
            {car.year}
          </div>
          {car.for_rent && (
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              For Rent
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {car.brand} {car.model}
          </h3>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <Gauge className="w-4 h-4" />
              <span>{car.mileage.toLocaleString()} km</span>
            </div>
            <div className="flex items-center gap-1">
              <Fuel className="w-4 h-4" />
              <span>{car.transmission}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{car.horsepower} hp</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            {car.for_sale ? (
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">For Sale</span>
                <p className="text-2xl font-bold text-primary">
                  {formatPrice(car.price)}
                </p>
              </div>
            ) : car.rental_price ? (
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">For Rent</span>
                <p className="text-2xl font-bold text-primary">
                  {formatPrice(car.rental_price)}
                  <span className="text-sm font-normal">/month</span>
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
