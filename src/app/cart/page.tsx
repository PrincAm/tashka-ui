'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useCart } from '@/app/context/CartContext';
import { useProduct } from '@/app/context/ProductContext';
import { useCheckout } from '@/app/hooks/checkout';

export default function Cart() {
  const { cart, addToCart, decreaseQuantity, removeFromCart, updateQuantity } =
    useCart();
  const { getProductById } = useProduct();
  const { handleCheckout } = useCheckout();

  const [inputValues, setInputValues] = useState<{ [id: string]: string }>({});
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Sync local state with cart
  useEffect(() => {
    const newInputValues = cart.reduce(
      (acc, item) => ({ ...acc, [item.id]: item.quantity.toString() }),
      {}
    );
    setInputValues(newInputValues);
  }, [cart]);

  // Calculate total price dynamically
  useEffect(() => {
    const newTotalPrice = cart.reduce((total, item) => {
      const product = getProductById(item.id);

      // Safeguard against null or undefined product and prices
      if (!product || !product.prices || !product.prices[0]?.unit_amount) {
        return total;
      }

      return total + product.prices[0].unit_amount * item.quantity;
    }, 0);

    setTotalPrice(newTotalPrice);
  }, [cart, getProductById]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const value = e.target.value;
    const product = getProductById(id);

    if (/^\d*$/.test(value)) {
      const numericValue = parseInt(value, 10);
      if (
        !isNaN(numericValue) &&
        numericValue >= 1 &&
        numericValue <= Number(product?.metadata.quantity)
      ) {
        setInputValues((prev) => ({ ...prev, [id]: numericValue.toString() }));
      } else if (value === '') {
        setInputValues((prev) => ({ ...prev, [id]: '' }));
      }
    }
  };

  const handleInputBlur = (id: string) => {
    const product = getProductById(id);
    const maxQuantity = Number(product?.metadata.quantity);
    const value = inputValues[id];

    if (value === '' || isNaN(parseInt(value, 10)) || parseInt(value, 10) < 1) {
      setInputValues((prev) => ({ ...prev, [id]: '1' }));
      updateQuantity(id, 1);
    } else if (parseInt(value, 10) > maxQuantity) {
      setInputValues((prev) => ({ ...prev, [id]: maxQuantity.toString() }));
      updateQuantity(id, maxQuantity);
    } else {
      updateQuantity(id, parseInt(value, 10));
    }
  };

  const handleIncreaseQuantity = (id: string) => {
    const product = getProductById(id);
    const maxQuantity = Number(product?.metadata.quantity);
    const currentQuantity = parseInt(inputValues[id], 10) || 0;

    if (currentQuantity < maxQuantity) {
      addToCart({
        id,
        name: product?.name || 'Unknown Product',
        price: product?.prices?.[0]?.unit_amount || null, // Extract the price
        quantity: 1,
      });
      setInputValues((prev) => ({
        ...prev,
        [id]: (currentQuantity + 1).toString(),
      }));
    }
  };

  const handleDecreaseQuantity = (id: string) => {
    const currentQuantity = parseInt(inputValues[id], 10) || 1;

    if (currentQuantity > 1) {
      decreaseQuantity(id);
      setInputValues((prev) => ({
        ...prev,
        [id]: (currentQuantity - 1).toString(),
      }));
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto my-16">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
          <ShoppingBag className="mr-2 h-6 w-6 text-pink-500" />
          Your Cart
        </CardTitle>
      </CardHeader>
      <CardContent>
        {cart.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <Link href="/">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <ul className="space-y-4">
            {cart.map(({ id, quantity }) => {
              const product = getProductById(id);

              if (product === undefined) return null;

              return (
                <li
                  key={id}
                  className="flex items-center space-x-4 py-4 border-b border-gray-200 last:border-b-0"
                >
                  <div className="relative w-16 h-16">
                    <Image
                      src={product?.images[0]}
                      alt={product?.name}
                      fill
                      className="object-cover rounded"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {product?.name}
                    </h3>
                    <p className="text-gray-600">
                      {product.prices?.[0]?.unit_amount
                        ? `${product.prices[0].unit_amount.toFixed(2)} Kč x ${quantity} = `
                        : 'Price not available'}{' '}
                      <span className="font-bold">
                        {product.prices?.[0]?.unit_amount
                          ? (product.prices[0].unit_amount * quantity).toFixed(
                              2
                            )
                          : 'N/A'}{' '}
                        Kč
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDecreaseQuantity(id)}
                      className="h-8 w-8 rounded-full"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      min="0"
                      value={inputValues[id] ?? ''}
                      onChange={(e) => handleInputChange(e, id)}
                      onBlur={() => handleInputBlur(id)} // Handle final input value
                      className="w-16 text-center"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleIncreaseQuantity(id)}
                      className="h-8 w-8 rounded-full"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(id)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </li>
              );
            })}
          </ul>
        )}
      </CardContent>
      {cart.length > 0 && (
        <CardFooter className="flex flex-col items-end">
          <div className="text-xl font-bold text-gray-800 mb-4">
            Total: {totalPrice.toFixed(2)} Kč
          </div>
          <Button
            className="bg-pink-500 hover:bg-pink-600 text-white"
            onClick={() =>
              handleCheckout({
                priceId: 'price_1QMFY02KAXLcvsyMPSOpZbpd',
                quantity: 1,
              })
            }
          >
            Proceed to Checkout
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
