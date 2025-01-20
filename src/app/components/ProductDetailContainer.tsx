'use client';

import { useProductData } from '@/app/hooks/product';
import ProductDetail from '@/app/components/ProductDetail';
import LoadingProduct from '@/app/components/LoadingProduct';
import ErrorProduct from '@/app/components/ErrorProduct';
import NotFoundProduct from '@/app/components/NotFoundProduct';

const ProductDetailContainer = ({ id }: { id: string }) => {
  const { data: product, isLoading, error } = useProductData(id);

  if (isLoading) return <LoadingProduct />;
  if (error) return <ErrorProduct error={error} />;
  if (product === undefined) return <NotFoundProduct />;

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail {...product} />
    </div>
  );
};

export default ProductDetailContainer;
