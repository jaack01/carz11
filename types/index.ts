export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  rental_price: number | null;
  mileage: number;
  horsepower: number;
  transmission: string;
  fuel_type: string;
  condition: string;
  body_style: string;
  color: string;
  images: string[];
  features: string[];
  description: string;
  status: "available" | "sold" | "reserved";
  for_sale: boolean;
  for_rent: boolean;
  stock_number: string;
  vin: string;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  featured_image: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  created_at: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface CarSearchParams {
  year?: string;
  brand?: string;
  model?: string;
  mileage?: string;
  minPrice?: number;
  maxPrice?: number;
  type?: "sale" | "rent";
}
