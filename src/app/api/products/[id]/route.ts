import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(
  'sk_test_51QM7072KAXLcvsyMjSPIl4Ev8s6w0vaqmCCgMQWtmpUD7SafHFi78Wz35iB1hBcsF45PXj1bxDGDHNVat9leznpd003xGhD4oa'
);

// Define a type that includes Stripe.Product and associated prices
interface ProductWithPrices extends Stripe.Product {
  prices: Stripe.Price[];
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const { id } = await params;

  if (!id) {
    return NextResponse.json(
      { error: 'Product ID is required' },
      { status: 400 }
    );
  }

  try {
    // Fetch the product from Stripe
    const product = await stripe.products.retrieve(id);

    // Fetch associated prices for the product
    const prices = await stripe.prices.list({ product: product.id });

    // Combine product details and prices
    const productWithPrices: ProductWithPrices = {
      ...product,
      prices: prices.data.map((price) => ({
        ...price,
        unit_amount: (price.unit_amount || 0) / 100,
      })),
    };

    return NextResponse.json(productWithPrices, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Stripe.errors.StripeError) {
      console.error('Stripe Error:', error.message);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.error('Unknown Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
