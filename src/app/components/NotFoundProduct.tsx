import { PackageX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';

const NotFoundProduct = () => (
  <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
    <Card className="w-full max-w-md">
      <CardContent className="pt-6 text-center">
        <PackageX className="h-16 w-16 text-gray-400 mx-auto" />
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Product Not Found
        </h2>
        <p className="mt-2 text-gray-500">
          We couldn`&apos;t find the product you`&apos;re looking for.
        </p>
      </CardContent>
      <CardFooter className="justify-center">
        <Link href="/">
          <Button variant="outline">Back to Products</Button>
        </Link>
      </CardFooter>
    </Card>
  </div>
);

export default NotFoundProduct;
