import { Button } from 'antd'
import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { db, auth } from "../firebase.mjs";


const PayButton = ({ cartproducts }) => {
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    // const handleCheckOut = () => {
    //     axios.post('http://localhost:4242/create_checkout_session', {
    //         cartproducts,
    //         userid: currentUser.uid,
    //     }).then(async (res) => {
    //         if (res.data.url) {
    //             window.location.href = res.data.url;
    //         }
    //     }).catch((error) => {
    //         console.log(error);
    //     }).finally(async () => {
    //         const response = await axios.post('http://localhost:4242/checkout', {
    //             currentuser: currentUser.uid,
    //         });
    //         console.log(response);
    //     });
       
    // }
    const handleCheckOut = () => {
        axios.post(`${process.env.STRIPE_SERVER_URL}/create_checkout_session`, {
          cartproducts,
          userid: currentUser.uid,  
        }).then(async (res) => {
          if (res.data.url) {
            window.location.href = res.data.url;
            const sessionId = res.data.sessionId;
            console.log(sessionId)
            await axios.post(`${process.env.STRIPE_SERVER_URL}/checkout`, {
              cartproducts,
              currentuser: currentUser.uid,
              session_id: sessionId,
            });
          }
        }).catch((error) => {
          console.log(error);
        }).finally(() => {
          console.log('Checkout request completed.');
        });
      }
    return (
        <button onClick={() => handleCheckOut()}>Procced to Checkout</button>
    )
}

export default PayButton