import { NextResponse, NextRequest } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(
  'sk_test_51QM7072KAXLcvsyMjSPIl4Ev8s6w0vaqmCCgMQWtmpUD7SafHFi78Wz35iB1hBcsF45PXj1bxDGDHNVat9leznpd003xGhD4oa'
);

const YOUR_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || 'http://localhost:3000';

export async function POST(request: NextRequest): Promise<NextResponse> {
  const data = await request.json();

  try {
    const session = await stripe.checkout.sessions.create({
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'czk',
            },
            display_name: 'Free shipping',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 5,
              },
              maximum: {
                unit: 'business_day',
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 150,
              currency: 'czk',
            },
            display_name: 'Next day air',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 1,
              },
              maximum: {
                unit: 'business_day',
                value: 1,
              },
            },
          },
        },
      ],
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1QMFY02KAXLcvsyMPSOpZbpd',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
      automatic_tax: { enabled: true },
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['CZ', 'SK'],
      },
      phone_number_collection: {
        enabled: true,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating Stripe Checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create Stripe Checkout session' },
      { status: 500 }
    );
  }
}
