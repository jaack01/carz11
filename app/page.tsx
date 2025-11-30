import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { FeaturedCars } from "@/components/home/featured-cars";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { LatestBlog } from "@/components/home/latest-blog";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "GKP Auto - Best Refurbished Cars in Gorakhpur, Uttar Pradesh",
  description:
    "Find quality refurbished and used cars in Gorakhpur. GKP Auto offers the best deals on cars for sale and rent with transparent pricing and excellent service.",
  openGraph: {
    title: "GKP Auto - Your Trusted Car Dealer in Gorakhpur",
    description: "Best refurbished cars in Gorakhpur, UP. Quality guaranteed.",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <FeaturedCars />
        <WhyChooseUs />
        <LatestBlog />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
