import { Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const LoadingProduct = () => (
  <div className="container mx-auto px-4 py-8 flex justify-center items-center">
    <Card className="w-full max-w-md">
      <CardContent className="pt-6 text-center">
        <Loader2 className="h-16 w-16 animate-spin text-pink-500 mx-auto" />
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Loading Product
        </h2>
        <p className="mt-2 text-gray-500">
          Please wait while we fetch the product details.
        </p>
      </CardContent>
    </Card>
  </div>
);

export default LoadingProduct;
