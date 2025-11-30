"use client";

import { getFeaturedCars } from "@/lib/data";
import { CarCard } from "../car-card";
import { SectionTitle } from "../section-title";

export function FeaturedCars() {
  const cars = getFeaturedCars(8);

  return (
    <section className="spad">
      <div className="container mx-auto">
        <SectionTitle
          subtitle="Our Inventory"
          title="Best Vehicle Offers"
          description="Browse our handpicked selection of quality refurbished cars"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
