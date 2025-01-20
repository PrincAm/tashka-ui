'use client';

import Link from 'next/link';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';

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
  const {
    cart,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    getTotalItems,
    updateQuantity,
  } = useCart();
  const { getProductById } = useProduct();

  const { handleCheckout } = useCheckout();

  const total = getTotalItems();

  console.log('CART');
  console.log(cart);

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

              if (product === undefined) return;

              return (
                <li
                  key={id}
                  className="flex items-center space-x-4 py-4 border-b border-gray-200 last:border-b-0"
                >
                  <img
                    src={product?.images[0]}
                    alt={product?.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {product?.name}
                    </h3>
                    <p className="text-gray-600">
                      ${product?.prices[0].unit_amount?.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => decreaseQuantity(id)}
                      className="h-8 w-8 rounded-full"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    {/* FIXME empty -> empty cart */}
                    <Input
                      type="number"
                      min="0"
                      value={quantity}
                      onChange={(e) =>
                        updateQuantity(id, parseInt(e.target.value))
                      }
                      className="w-16 text-center"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        addToCart({
                          id,
                          name: product.name,
                          price: product.prices[0].unit_amount,
                          quantity: quantity + 1,
                        })
                      }
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
            Total: ${total.toFixed(2)}
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
