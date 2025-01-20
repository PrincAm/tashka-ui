import { useCallback } from 'react';

type CheckoutProps = {
  priceId: string;
  quantity: number;
};

export const useCheckout = () => {
  const handleCheckout = useCallback(
    async ({ priceId, quantity = 1 }: CheckoutProps) => {
      try {
        const response = await fetch('/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ priceId, quantity }),
        });

        if (!response.ok) {
          throw new Error('Failed to create checkout session');
        }

        const { url } = await response.json();
        if (url) {
          window.location.href = url;
        }
      } catch (error) {
        console.error('Error creating checkout session:', error);
      }
    },
    []
  );

  return { handleCheckout };
};
