export interface Property {
  id: number;
  title: string;
  image: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  location: string;
  property_type: string;
  is_available: boolean;
  created_at: Date;
  updated_at: Date;
}
