import { Product } from '@/app/components/ProductCard';

export const fetchProduct = async (id: string): Promise<Product> => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const url = new URL(`/api/products/${id}`, baseURL);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  return response.json();
};
