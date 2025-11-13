import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

import type { Response, Request } from "express"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export const paymentSheet = async (req: Request, res: Response) => {
  try {

    console.log('strip')
  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2023-10-16'}
  );


  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1190,
    currency: 'usd',
    customer: customer.id,
    description: 'Your transaction description here',
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

 return res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });

  } catch (error:any) {
    // Log the error and return a 500 response. `logger` was undefined, use console.error.
    console.error(error);
    console.error(`stripe: ${error?.message ?? 'unknown error'}`);
    return res.status(500).json({ error: true, message: error.message, data: null });
  }
};