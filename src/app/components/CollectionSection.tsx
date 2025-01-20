import { RefObject } from 'react';

import ProductCard from '@/app/components/ProductCard';
import { useProduct } from '@/app/context/ProductContext';
import LoadingProduct from '@/app/components/LoadingProduct';
import ErrorProduct from '@/app/components/ErrorProduct';
import NoProducts from '@/app/components/NoProducts';

interface CollectionSectionProps {
  collectionRef: RefObject<HTMLElement>;
}

const CollectionSection = ({ collectionRef }: CollectionSectionProps) => {
  const { filteredProducts, loading, error } = useProduct();
  return (
    <section
      className="py-16 px-6 sm:px-10 lg:px-16 bg-white"
      ref={collectionRef}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">
          Our Cotton Candy Collection
        </h2>
        {loading && <LoadingProduct />}
        {error && <ErrorProduct error={error} />}
        {!loading && !error && filteredProducts.length === 0 && <NoProducts />}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
