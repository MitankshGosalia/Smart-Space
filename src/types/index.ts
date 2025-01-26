export interface User {
  id: string;
  name: string;
  email: string;
  role: 'citizen' | 'business' | 'admin';
}

export interface CityMetrics {
  energyConsumption: number;
  wasteCollected: number;
  trafficDensity: number;
  airQuality: number;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
}