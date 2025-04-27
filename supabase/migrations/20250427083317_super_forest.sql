/*
  # Create bookings table

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `pickup` (text)
      - `destination` (text)
      - `date` (date)
      - `time` (time)
      - `passengers` (integer)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `bookings` table
    - Add policy for anyone to insert bookings
    - Add policy for authenticated users to read bookings
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  pickup text NOT NULL,
  destination text NOT NULL,
  date date NOT NULL,
  time time NOT NULL,
  passengers integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert bookings"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);