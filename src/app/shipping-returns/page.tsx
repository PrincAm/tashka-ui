import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ShippingReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Shipping & Returns
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Shipping Information</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Free shipping on orders over $100</li>
              <li>Standard shipping (3-5 business days): $5.99</li>
              <li>Express shipping (1-2 business days): $12.99</li>
              <li>International shipping available to most countries</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Returns Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>30-day return policy for unused items</li>
              <li>Items must be in original condition with tags attached</li>
              <li>Refunds processed within 5-7 business days</li>
              <li>Exchanges available for different sizes or colors</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
