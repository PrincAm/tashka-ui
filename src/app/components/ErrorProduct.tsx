import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const ErrorProduct = ({ error }: { error: Error }) => (
  <div className="container mx-auto px-4 py-8 flex justify-center items-center">
    <Card className="w-full max-w-md">
      <CardContent className="pt-6 text-center">
        <AlertCircle className="h-16 w-16 text-red-500 mx-auto" />
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">Error</h2>
        <p className="mt-2 text-gray-500">{error?.message}</p>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={() => window.location.reload()} variant="outline">
          Try Again
        </Button>
      </CardFooter>
    </Card>
  </div>
);

export default ErrorProduct;
