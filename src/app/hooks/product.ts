'use client';

import { useQuery } from '@tanstack/react-query';
import { Product } from '@/app/components/ProductCard';
import { fetchProduct } from '@/utils/api';

export const useProductData = (id: string) => {
  const { data, isLoading, error } = useQuery<Product, Error>({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id as string),
  });

  return {
    data,
    isLoading,
    error,
  };
};
