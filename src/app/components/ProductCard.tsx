'use client';
import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import Stripe from 'stripe';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { useCart } from '@/app/context/CartContext';

export type Product = Stripe.Product & {
  prices: Stripe.Price[];
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const { id, name, prices, images, metadata, description } = product;

  const price = prices[0].unit_amount;

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart({ id, name, price, quantity: 1 });
    setTimeout(() => setIsAdding(false), 500);
    setIsModalOpen(true);
  };

  const handleContinueShopping = () => {
    setIsModalOpen(false);
  };

  const handleGoToCart = () => {
    router.push('/cart');
  };

  const handleQuickView = () => {
    router.push(`/products/${id}`);
  };

  return (
    <>
      <Card
        key={id}
        className="group relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      >
        <div className="relative w-full pb-[100%] overflow-hidden rounded-t-2xl">
          <Image
            src={images[0]}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          <Button
            onClick={handleQuickView}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-pink-500 hover:bg-pink-600 text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            Quick View
          </Button>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2 overflow-hidden">
            {description}
          </p>
          <p className="text-pink-600 font-medium text-lg">
            {price?.toFixed(2)} Kč
          </p>
          <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mt-2">
            {metadata.category}
          </span>
        </CardContent>
        <CardFooter className="bg-gray-50 p-4">
          <Button
            onClick={handleAddToCart}
            className={`w-full transition-all duration-300 ${
              isAdding
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-black hover:bg-gray-800'
            } text-white font-semibold`}
            disabled={isAdding}
          >
            {isAdding ? 'Added!' : 'Add to Cart'}
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Product Added to Cart</DialogTitle>
            <DialogDescription>
              You&apos;ve added the following item to your cart:
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Image
                src={images[0]}
                alt={name}
                layout="responsive"
                width={16}
                height={9}
              />
              <div className="col-span-3">
                <h4 className="font-semibold">{name}</h4>
                <p className="text-sm text-gray-500">{price?.toFixed(2)} Kč</p>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2 overflow-hidden">
                  {description}
                </p>
              </div>
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <Button
              type="button"
              variant="secondary"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </Button>
            <Button
              type="button"
              onClick={handleGoToCart}
              className="bg-black hover:bg-gray-800 text-white"
            >
              Go to Cart
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
