import { dehydrate, hydrate, QueryClient } from '@tanstack/react-query';

import ProductDetailContainer from '@/app/components/ProductDetailContainer';
import { fetchProduct } from '@/utils/api';

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const queryClient = new QueryClient();

  // Prefetch the product data
  await queryClient.prefetchQuery({
    queryKey: ['product', id],
    queryFn: async () => fetchProduct(id),
  });

  const dehydratedState = dehydrate(queryClient);

  hydrate(queryClient, dehydratedState);

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetailContainer id={id} />
    </div>
  );
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;

  try {
    const product = await fetchProduct(id);

    return {
      title: `${product.name} | Tashka.cz`,
      description: product.description,
    };
  } catch (error) {
    console.error('Error generating metadata:', error);

    return {
      title: 'Product Not Found | Tashka.cz',
      description: 'The product you are looking for does not exist.',
    };
  }
}
