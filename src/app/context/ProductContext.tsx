'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Product } from '../components/ProductCard';

interface ProductContextProps {
  filteredProducts: Product[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  getProductById: (id: string) => Product | undefined;
  loading: boolean;
  error: Error | null;
}

const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('/api/products');
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  return response.json();
};

export const ProductContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  // const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  // TODO add check if the quantity is > 0 and is active

  const finalProducts =
    activeCategory === 'All'
      ? products
      : products.filter(
          (product) =>
            product.metadata?.category === activeCategory && product.active
        );

  const getProductById = (id: string) => {
    return products.find((product) => product.id === id);
  };

  return (
    <ProductContext.Provider
      value={{
        filteredProducts: finalProducts,
        activeCategory,
        setActiveCategory,
        getProductById,
        loading: isLoading,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductContextProvider');
  }
  return context;
};
