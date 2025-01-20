import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PackageSearch } from 'lucide-react';

const NoProducts = () => (
  <Card className="w-full max-w-md mx-auto">
    <CardContent className="pt-6 text-center">
      <PackageSearch className="h-16 w-16 text-pink-500 mx-auto mb-4" />
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">
        No Products Found
      </h3>
      <p className="text-gray-600">
        We couldn't find any products matching your current filters. Try
        adjusting your search or browse our full collection.
      </p>
    </CardContent>
    <CardFooter className="justify-center">
      <Button onClick={() => window.location.reload()} variant="outline">
        Reset Filters
      </Button>
    </CardFooter>
  </Card>
);

export default NoProducts;
