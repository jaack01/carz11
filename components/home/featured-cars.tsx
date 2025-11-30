import { supabase } from "@/lib/supabase";
import { CarCard } from "../car-card";
import { SectionTitle } from "../section-title";
import { Car } from "@/types";

export async function FeaturedCars() {
  const { data: cars } = await supabase
    .from("cars")
    .select("*")
    .eq("status", "available")
    .limit(8);

  return (
    <section className="spad">
      <div className="container mx-auto">
        <SectionTitle
          subtitle="Our Inventory"
          title="Best Vehicle Offers"
          description="Browse our handpicked selection of quality refurbished cars"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars?.map((car) => (
            <CarCard key={car.id} car={car as Car} />
          ))}
        </div>
      </div>
    </section>
  );
}
