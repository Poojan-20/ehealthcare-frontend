
import express from "express";
import Stripe from 'stripe';
import firebase from './firebase.mjs';
import cors from 'cors';

const db = firebase.firestore();
const auth = firebase.auth();

let stripeGateway = Stripe('sk_test_51MoRQsSBJmCazdPtFQfANBPVspEpzvFaFJzp7romj6FdTYOJmMpZBUL9yLO990YqiB7e1KeoeYPP0YQbaBSpAxuY00j16jZwZN')



const app = express();
// app.use(express.bodyParser());
app.use(express.json());

// add this middleware to read post request body
app.use(express.text());
app.use(cors());
app.get('/', (req, res) => {
    res.send('welcome')
})
app.post('/create_checkout_session', async (req, res) => {
    // console.log(req.body.cartproducts)
    const line_items = req.body.cartproducts.map(item => {
        return {
            price_data: {
                currency: 'inr',
                product_data: {
                    name: item.Title,
                    images: [item.images],
                    metadata: {
                        id: item.uid,
                    }
                },
                unit_amount: item.Price * 100,
            },
            quantity: item.qty,
        }
    })
    const session = await stripeGateway.checkout.sessions.create({
        line_items,
        invoice_creation: { enabled: true },
        mode: 'payment',
        success_url: `${process.env.STRIPE_SERVER_URL}/checkout?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.WEBSITE_URL}/cart`,
    });
    // console.log(session)
    res.send({ url: session.url, sessionId: session.id });
});

app.post('/checkout', async (req, res) => {
    const { currentuser, session_id,cartproducts } = req.body;
    console.log(currentuser)
    console.log(cartproducts)
    console.log(session_id)
    try {
        // Retrieve the session using its ID
        const session = await stripeGateway.checkout.sessions.retrieve(session_id);
        console.log(session.payment_status)
        // Wait for payment to be completed
        const pollSession = async () => {
            const updatedSession = await stripeGateway.checkout.sessions.retrieve(session_id);
            console.log(updatedSession.payment_status)
            if (updatedSession.payment_status === 'paid') {
                // Payment completed, process the order
                //   const uid = currentuser;
                //   const cartdata = await db.collection('Cart ' + uid).get();

                //   for (var snap of cartdata.docs) {
                //     var data = snap.data();
                //    
                //     data.ID = snap.id;
                //     db.collection('Cart ' + uid).doc(snap.id).delete();
                //     db.collection('Buyer_Cart ' + uid).add(data);
                //   }
                const uid = currentuser;
                const cartdata = await db.collection('Cart ' + uid).get();

                for (var snap of cartdata.docs) {
                    var data = snap.data();
                    if (cartproducts.some(item => item.uid === data.uid)) {

                        // Product is in the cartproducts array and was purchased, delete it
                        db.collection('Cart ' + uid).doc(snap.id).delete();
                        data['PurchaseTime'] = new Date();
                        await db.collection('Buyer_Cart ' + uid).add(data);
                    } else {
                        // Product is in the cartproducts array but was not purchased, leave it in the cart
                        // db.collection('Cart ' + uid).doc(snap.id).update({ PurchaseTime: new Date() });
                        
                    }
                    data.ID = snap.id;
                    
                }

                // Redirect to the success page
                res.redirect('/checkout_success');
            } else {
                // Payment not yet completed, poll again in 5 seconds
                setTimeout(pollSession, 5000);
            }
        };
        setTimeout(pollSession, 5000);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error!');
    }
});
app.get('/checkout', async (req, res) => {
    let { session_id } = req.query;
    console.log(session_id)
    console.log('we are in success url')
    let session = await stripeGateway.checkout.sessions.retrieve(session_id);
    console.log(session)
    res.redirect(`${process.env.WEBSITE_URL}/thankyou`); // or any other page
});
// app.post('/checkout', async (req, res) => {
//     const { currentuser, session_id } = req.body;
//     console.log(currentuser)
//     console.log(session_id)
//     try {
//       // Retrieve the session using its ID
//       const session = await stripeGateway.checkout.sessions.retrieve(session_id);
//         console.log(session.payment_status)
//       if (session.payment_status === 'paid') {
//         const uid = currentuser;
//         const cartdata = await db.collection('Cart ' + uid).get();

//         for (var snap of cartdata.docs) {
//           var data = snap.data();
//           data['PurchaseTime'] = new Date();
//           data.ID = snap.id;
//           db.collection('Cart ' + uid).doc(snap.id).delete();
//           db.collection('Buyer_Cart ' + uid).add(data);
//         }

//         // Redirect to the success page
//         res.redirect('/checkout_success');
//       } else {
//         // Payment not successful, show an error message
//         res.status(500).send('Payment not successful!');
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Error!');
//     }
//   });



// app.post('/checkout', async (req, res) => {
//     console.log('we are in post')
//     const { currentuser } = req.body;
//     console.log(session.status)
//     console.log(currentuser)

//     try {
//         if (session.status === 'complete') {
//             const uid = currentuser
//             const cartdata = await db.collection('Cart ' + uid).get();
//             // console.log(cartdata)
//             for (var snap of cartdata.docs) {
//                 var data = snap.data();
//                 data['PurchaseTime'] = new Date()
//                 data.ID = snap.id;
//                 db.collection('Cart ' + uid).doc(snap.id).delete();
//                 db.collection('Buyer_Cart ' + uid).add(data);
//             }

//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error!');
//     }
// });

// let session;
// app.get('/checkout', async (req, res) => {
//     let { session_id } = req.query;
//     console.log(session_id)
//     console.log('we are in success url')
//     session = await stripeGateway.checkout.sessions.retrieve(session_id);
//     console.log(session)
// })

app.listen(4242, () => {
    console.log('your app is running on port 4242')
})