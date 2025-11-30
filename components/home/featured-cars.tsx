"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { CarCard } from "../car-card";
import { SectionTitle } from "../section-title";
import { Car } from "@/types";

export function FeaturedCars() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      const { data } = await supabase
        .from("cars")
        .select("*")
        .eq("status", "available")
        .limit(8);

      if (data) {
        setCars(data as Car[]);
      }
      setLoading(false);
    }

    fetchCars();
  }, []);

  return (
    <section className="spad">
      <div className="container mx-auto">
        <SectionTitle
          subtitle="Our Inventory"
          title="Best Vehicle Offers"
          description="Browse our handpicked selection of quality refurbished cars"
        />
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-200 dark:bg-gray-700 h-96 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cars?.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
