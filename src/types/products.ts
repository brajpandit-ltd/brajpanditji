import { IResponse } from "./response";

export interface Product {
  id: string;
  title: string;
  thumbnail: string;
  images: string[];
  description: string;
  category: string;
  price: number;
  discount: number;
  rating: number;
  stock: number;
}

export interface IProductsResponse extends IResponse<Product[]> {
  total?: number;
  page?: number;
  limit?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}
