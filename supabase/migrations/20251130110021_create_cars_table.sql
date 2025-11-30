/*
  # Create cars table for GKP Auto inventory

  1. New Tables
    - `cars`
      - `id` (uuid, primary key)
      - `brand` (text) - Car manufacturer
      - `model` (text) - Car model name
      - `year` (integer) - Manufacturing year
      - `price` (numeric) - Sale price in INR
      - `rental_price` (numeric, nullable) - Monthly rental price in INR
      - `mileage` (integer) - Kilometers driven
      - `horsepower` (integer) - Engine horsepower
      - `transmission` (text) - Auto/Manual
      - `fuel_type` (text) - Petrol/Diesel/Electric/Hybrid
      - `condition` (text) - New/Used/Refurbished
      - `body_style` (text) - Sedan/SUV/Hatchback/etc
      - `color` (text) - Exterior color
      - `images` (text[]) - Array of image URLs
      - `features` (text[]) - Array of features
      - `description` (text) - Detailed description
      - `status` (text) - available/sold/reserved
      - `for_sale` (boolean) - Available for purchase
      - `for_rent` (boolean) - Available for rental
      - `stock_number` (text) - Internal stock ID
      - `vin` (text) - Vehicle identification number
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
  
  2. Security
    - Enable RLS on `cars` table
    - Add policy for public read access to available cars
    - Add policy for authenticated admin users to manage cars
*/

CREATE TABLE IF NOT EXISTS cars (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  brand text NOT NULL,
  model text NOT NULL,
  year integer NOT NULL,
  price numeric NOT NULL DEFAULT 0,
  rental_price numeric,
  mileage integer NOT NULL DEFAULT 0,
  horsepower integer NOT NULL DEFAULT 0,
  transmission text NOT NULL DEFAULT 'Auto',
  fuel_type text NOT NULL DEFAULT 'Petrol',
  condition text NOT NULL DEFAULT 'Used',
  body_style text NOT NULL DEFAULT 'Sedan',
  color text NOT NULL DEFAULT 'Black',
  images text[] NOT NULL DEFAULT '{}',
  features text[] NOT NULL DEFAULT '{}',
  description text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'available',
  for_sale boolean NOT NULL DEFAULT true,
  for_rent boolean NOT NULL DEFAULT false,
  stock_number text NOT NULL,
  vin text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE cars ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view available cars"
  ON cars
  FOR SELECT
  TO public
  USING (status = 'available');

CREATE POLICY "Authenticated users can manage cars"
  ON cars
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_cars_brand ON cars(brand);
CREATE INDEX IF NOT EXISTS idx_cars_year ON cars(year);
CREATE INDEX IF NOT EXISTS idx_cars_status ON cars(status);
CREATE INDEX IF NOT EXISTS idx_cars_for_sale ON cars(for_sale);
CREATE INDEX IF NOT EXISTS idx_cars_for_rent ON cars(for_rent);
