import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ChevronRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-gray-300 relative overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/img/footer-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Contact Banner */}
      <div className="relative border-b border-gray-700">
        <div className="container mx-auto py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Contact Us Now!
              </h2>
              <p className="text-gray-400">Find your dream car in Gorakhpur</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-white">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+91 98765 43210</span>
              </a>
              <a
                href="mailto:info@gkpauto.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">info@gkpauto.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <Image
              src="/img/footer-logo.png"
              alt="GKP Auto"
              width={120}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4">
              GKP Auto is Gorakhpur&apos;s leading car dealership offering quality refurbished
              and used cars. Located in the heart of Uttar Pradesh.
            </p>
            <div className="flex items-start gap-2 text-gray-400 mb-4">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <span>Railway Station Road, Gorakhpur, Uttar Pradesh 273001</span>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-bold text-lg mb-4">Quick Links</h5>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Cars for Sale", href: "/cars?type=sale" },
                { name: "Cars for Rent", href: "/cars?type=rent" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 hover:text-primary transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Car Categories */}
          <div>
            <h5 className="text-white font-bold text-lg mb-4">Car Categories</h5>
            <ul className="space-y-2">
              {["Hatchback", "Sedan", "SUV", "Luxury", "Electric"].map((category) => (
                <li key={category}>
                  <Link
                    href={`/cars?category=${category.toLowerCase()}`}
                    className="flex items-center gap-2 hover:text-primary transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Brands */}
          <div>
            <h5 className="text-white font-bold text-lg mb-4">Popular Brands</h5>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Maruti Suzuki",
                "Hyundai",
                "Tata",
                "Mahindra",
                "Honda",
                "Toyota",
                "Kia",
                "Volkswagen",
              ].map((brand) => (
                <Link
                  key={brand}
                  href={`/cars?brand=${brand.toLowerCase().replace(" ", "-")}`}
                  className="flex items-center gap-2 hover:text-primary transition-colors group"
                >
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  <span className="text-sm">{brand}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative border-t border-gray-700">
        <div className="container mx-auto py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              Copyright &copy; {currentYear} GKP Auto. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
