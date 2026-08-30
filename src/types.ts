export interface Product {
  id: string;
  name: string;
  category: 'bolos-confeitados' | 'bolos-caseiros' | 'bolos-no-pote' | 'cupcakes' | 'biscoitos';
  categoryLabel: string;
  description: string;
  fullDescription?: string;
  priceDisplay: string;
  priceNumeric: number;
  image: string;
  badge?: string;
  unit?: string;
  flavors?: string[];
  sizes?: { name: string; serves: string; price: number }[];
  isFeatured?: boolean;
  highlightCardSize?: 'large' | 'medium' | 'small';
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedFlavor?: string;
  selectedSize?: string;
  unitPrice: number;
  notes?: string;
}

export interface CustomCakeOrder {
  customerName: string;
  phone: string;
  eventDate: string;
  cakeSize: string;
  doughType: string;
  filling1: string;
  filling2: string;
  topping: string;
  theme: string;
  notes: string;
}
