import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      cars: {
        Row: {
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
        };
        Insert: Omit<Database["public"]["Tables"]["cars"]["Row"], "id" | "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["cars"]["Insert"]>;
      };
      blog_posts: {
        Row: {
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
        };
        Insert: Omit<Database["public"]["Tables"]["blog_posts"]["Row"], "id" | "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["blog_posts"]["Insert"]>;
      };
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          subject: string;
          message: string;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["contact_submissions"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["contact_submissions"]["Insert"]>;
      };
      testimonials: {
        Row: {
          id: string;
          name: string;
          role: string;
          content: string;
          rating: number;
          image: string;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["testimonials"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["testimonials"]["Insert"]>;
      };
    };
  };
};
