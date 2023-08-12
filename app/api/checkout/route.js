import { formatAmountForStripe } from "@/app/lib/stripe-helpers";
import { NextResponse } from "next/server";
import Stripe from "stripe"

export async function POST(request) {
    // if (request.method !== 'POST') { return res.sendStatus(405) }
    const body = await request.json()

    if (body.cartItems.length === 0) {
        return new Response('Error', {
            status: 405,
        });
    }

    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
            apiVersion: '2020-08-27'
        })

        const session = await stripe.checkout.sessions.create({
            success_url: 'http://localhost:3000/success/',
            cancel_url: 'http://localhost:3000/cancel',
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
                { shipping_rate: 'shr_1NcYsfD6DvEpnDI2NBZpaE3g' },
            ],
            shipping_address_collection: {
                allowed_countries: ['FR'],
            },
            line_items: body.cartItems.map((item) => {                
                const img = item.image[0].asset._ref;
                const newImage = img.replace('image-', 'https://cdn.sanity.io/images/xsu91yf1/production/').replace('-png', '.png');            
                return {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: item.name,
                            images: [newImage],
                        },
                        unit_amount: formatAmountForStripe(item.price,'eur'),
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1,
                    },
                    quantity: item.quantity
                }
            }),
        })
        return NextResponse.json({ session })
    } catch (err) {
        console.log(err)
        return new Response('Error', {
            status: 405,
        });
    }
}