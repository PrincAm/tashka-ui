'use client';

import { useRouter } from 'next/navigation';
import { XCircle, AlertTriangle, ArrowRight, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useCheckout } from '@/app/hooks/checkout';

export default function FailedPayment() {
  const router = useRouter();
  const { handleCheckout } = useCheckout();

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-800 flex items-center justify-center">
            <XCircle className="w-10 h-10 text-red-500 mr-2" />
            Payment Failed
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-xl text-gray-600">
              We&apos;re sorry, but your payment couldn&apos;t be processed.
            </p>
            <p className="text-gray-500">Transaction ID: #67890</p>
          </div>

          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Payment Declined</AlertTitle>
            <AlertDescription>
              Your payment was declined. This could be due to insufficient
              funds, expired card, or other issues with your payment method.
            </AlertDescription>
          </Alert>

          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            <h3 className="font-semibold text-gray-800">What You Can Do:</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <RefreshCcw className="w-5 h-5 mr-2 text-pink-500" />
                Try the payment again with the same or a different payment
                method
              </li>
              <li className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-pink-500" />
                Check your payment details and ensure they are correct
              </li>
              <li className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-pink-500" />
                Contact your bank to see if there are any issues with your
                account
              </li>
            </ul>
          </div>

          <div className="text-center text-gray-600">
            <p>Need help? Our support team is here for you:</p>
            <a
              href="mailto:support@tashka.cz"
              className="text-pink-500 hover:underline"
            >
              support@tashka.cz
            </a>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4">
          <Button
            onClick={() =>
              handleCheckout({
                priceId: 'price_1QMFY02KAXLcvsyMPSOpZbpd',
                quantity: 1,
              })
            }
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold"
          >
            Try Again
            <RefreshCcw className="ml-2 h-4 w-4" />
          </Button>
          <Button
            onClick={() => router.push('/')}
            variant="outline"
            className="text-pink-500 border-pink-500 hover:bg-pink-50"
          >
            Continue Shopping
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
