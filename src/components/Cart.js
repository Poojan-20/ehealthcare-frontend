import React, { useState } from 'react'
import CartNavbar from './CartNavbar'
import { db, auth } from "../firebase.mjs";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from "../context/AuthContext";
import IndividualCartProducts from './IndividualCartProducts';
import PayButton from './PayButton';
import { CheckBox } from './CheckBox';



const Cart = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [Deli, setDeli] = useState({ Category: [] });
    const [cartproducts, setcartproducts] = useState([])
    const [TotalProducts, setTotalProducts] = useState("")
    useEffect(() => {
        getproducts();
      }, []);

      useEffect(()=>{
        auth.onAuthStateChanged(currentUser=>{
            if(currentUser){
                db.collection('Cart ' + currentUser.uid).onSnapshot(snapshot=>{
                    const qty = snapshot.docs.length;
                    setTotalProducts(qty)
                })
            }
        })
      })
    //Totalproducts notification bubble
    // const getproducts = (variables)=>{
    //     auth.onAuthStateChanged(currentUser => {
    //         if (currentUser) {
    //             let cartRef = db.collection('Cart ' + currentUser.uid);
    //             if(variables){
    //                 cartRef = cartRef.where("category", "==", variables.deli);
    //             };
    //             // console.log(variables)
    //             cartRef.onSnapshot(snapshot => {
    //                 const newcartproduct = snapshot.docs.map((doc) => ({
    //                     ID: doc.id,
    //                     ...doc.data(),
    //                 }));
    //                 setcartproducts(newcartproduct)
    //             })
    //         }
    //     })
    // }
    const getproducts = (variables) => {
        auth.onAuthStateChanged(currentUser => {
            if (currentUser) {
                let cartRef = db.collection('Cart ' + currentUser.uid);
                if (variables && variables.deli.category.length > 0) {
                    cartRef = cartRef.where("category", "in", variables.deli.category);
                }
                cartRef.onSnapshot(snapshot => {
                    const newcartproduct = snapshot.docs.map((doc) => ({
                        ID: doc.id,
                        ...doc.data(),
                    }));
                    setcartproducts(newcartproduct)
                })
            }
        })
    }
    
      const showDeliResults = (deli) => {
        const variables = {
            deli: deli,
        };
        getproducts(variables);
        console.log(variables.deli)
    };
      const handledelivery = (deli, delicat) => {
        // console.log(deli);
        const newDeli = { ...Deli };
        newDeli[delicat] = deli;
    
        showDeliResults(newDeli);
    
        setDeli(newDeli);
      };


    // getting qty in arr
    const qty = cartproducts.map((cartProduct) => {
        return cartProduct.qty;
    })
    //reducing qty in single value
    const reduceqty = (accumulator, currentValue) => accumulator + currentValue;

    const totalqty = qty.reduce(reduceqty, 0);

    //getting price in arr
    const TotalPrice = cartproducts.map((cartProduct) => {
        return cartProduct.TotalPrice;
    })

    const reduceprice = (accumulator, currentValue) => accumulator + currentValue;

    const FinalTotalPrice = TotalPrice.reduce(reduceprice, 0);
    let Product
    const cartproductincrease = (currentprod) => {
        Product = currentprod;
        Product.qty = Product.qty + 1;
        Product.TotalPrice = Product.qty * Product.Price;
        //update firestore 
        auth.onAuthStateChanged(currentUser => {
            if (currentUser) {
                db.collection('Cart ' + currentUser.uid).doc(currentprod.ID).update(Product).then(() => console.log("increment added"))
            } else {
                console.log("increment failed")
            }
        }
        )
    }
    const cartproductdecrease = (currentprod) => {
        Product = currentprod;
        if (Product.qty > 1) {
            Product.qty = Product.qty - 1;
            Product.TotalPrice = Product.qty * Product.Price;
            //update firestore 
            auth.onAuthStateChanged(currentUser => {
                if (currentUser) {
                    db.collection('Cart ' + currentUser.uid).doc(currentprod.ID).update(Product).then(() => console.log("decrement added"))
                } else {
                    console.log("decrement failed")
                }
            }
            )
        }
    }
    
    return (
        <>
            <CartNavbar/>
            <section className="section-padding mt-5">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-9">
                            {cartproducts.length < 1 && (
                                <div>No products to Show</div>
                            )}
                            {cartproducts.length > 0 && (
                                <div className="cart_product">
                                    <div className="cart_product_heading">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 text-lg-left">
                                                <h4>Shopping Cart
                                            
                                                </h4>
                                            </div>

                                        </div>
                                    </div>
                                    <IndividualCartProducts cartproducts={cartproducts} cartproductincrease={cartproductincrease} cartproductdecrease={cartproductdecrease} />
                                </div>
                            )}

                        </div>
                        <div className="col-lg-3 mt-lg-0 mt-6">
                            <h6 className="font-weight-bold">Deliver to</h6>
                           <CheckBox  handledelivery={(deli) => handledelivery(deli, "category")}/>
                            <div className="cart-summary">
                                <div className="cart-summary-wrap">
                                    <h4>Cart Summary</h4>
                                    <p>Total Quantity<span>{totalqty}</span></p>
                                    <p>Sub Total <span>Rs{FinalTotalPrice}</span></p>
                                    <p>Shipping Cost <span>RS 00.00</span></p>
                                    <h2>Grand Total <span>Rs{FinalTotalPrice}</span></h2>
                                </div>
                                <div className="cart-summary-button">
                                    {/* <StripeCheckout to="/checkout" className="btn btn-primary btn-rounded btn-full btn-large" stripeKey='pk_test_51MoRQsSBJmCazdPthg2ACRMftq93bKJE3PPmkzgKAyStcTvV7S4ECdm3kr58XfJMVEv54pJoLBP7r7riB8abSnJM00n7hFpxyw' token={handleToken} billingAddress shippingAddress name='AllProducts' amount={FinalTotalPrice * 100}>Proceed to Checkout <i className="ti-arrow-right"></i> </StripeCheckout> */}
                                    <PayButton cartproducts={cartproducts}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart