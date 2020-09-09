export interface Conference {
  _id: string;
  name: string;
  description: string;
  location: {
    country: string,
    city: string,
    longitude: number
    latitude: number
  };
  price: number;
  speakers: [];
  owner_id: string;
}