export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  location: string;
  transmission: "Automatic" | "Manual";
  fuel: "Petrol" | "Diesel" | "Hybrid" | "Electric";
  seats: number;
  image: string;
}