export type RoomType = 'Living' | 'Dining' | 'Bedroom' | 'Lighting' | 'Decor' | 'All';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  room: RoomType;
  imageUrl: string;
  materials: string[];
  dimensions: string;
  inStock: boolean;
  altText: string;
  featured?: boolean;
}

export interface Collection {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  altText: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface MoodboardItem {
  id: string;
  product: Product;
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

export interface ConsultationForm {
  name: string;
  email: string;
  phone: string;
  roomType: string;
  budget: string;
  notes: string;
}
