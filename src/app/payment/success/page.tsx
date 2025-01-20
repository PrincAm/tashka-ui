'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, Package, Truck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function SuccessfulPayment() {
  const router = useRouter();
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-800 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-500 mr-2" />
            Payment Successful!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-xl text-gray-600">
              Thank you for your purchase!
            </p>
            <p className="text-gray-500">Order #12345</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">Order Progress</p>
            <Progress value={progress} className="w-full" />
            <div className="flex justify-between text-sm text-gray-500">
              <span>Order Placed</span>
              <span>Processing</span>
              <span>Shipped</span>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            <h3 className="font-semibold text-gray-800">What`&apos;s Next?</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <Package className="w-5 h-5 mr-2 text-pink-500" />
                We`&apos;re preparing your items for shipment
              </li>
              <li className="flex items-center text-gray-600">
                <Truck className="w-5 h-5 mr-2 text-pink-500" />
                You`&apos;ll receive a shipping confirmation email soon
              </li>
            </ul>
          </div>

          <div className="text-center text-gray-600">
            <p>Need help? Contact our support team at</p>
            <a
              href="mailto:support@tashka.cz"
              className="text-pink-500 hover:underline"
            >
              support@tashka.cz
            </a>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={() => router.push('/')}
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold"
          >
            Continue Shopping
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
