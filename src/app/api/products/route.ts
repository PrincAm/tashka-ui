import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_STRIPE_API_KEY || '');

export type ProductWithPrices = Stripe.Product & {
  prices: Stripe.Price[];
};

export async function GET(): Promise<NextResponse> {
  try {
    const products = await stripe.products.list({ limit: 100 });

    const productsWithPrices: ProductWithPrices[] = await Promise.all(
      products.data.map(async (product) => {
        const prices = await stripe.prices.list({ product: product.id });

        return {
          ...product,
          prices: prices.data.map((price) => ({
            ...price,
            unit_amount: (price.unit_amount || 0) / 100,
          })),
        };
      })
    );

    return NextResponse.json(productsWithPrices, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.error('Unknown error:', error);
    return NextResponse.json(
      { error: 'An unknown error occurred' },
      { status: 500 }
    );
  }
}
