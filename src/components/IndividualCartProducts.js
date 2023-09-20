
import React from 'react'
import { Link } from 'react-router-dom';
import { db, auth } from "../firebase.mjs";
import { useAuth } from "../context/AuthContext";


const IndividualCartProducts = ({ cartproducts, cartproductincrease, cartproductdecrease }) => {
    const { currentUser } = useAuth();

    const handleqtyincrease = (cartproduct) => {
        cartproductincrease(cartproduct);
        console.log(cartproduct)
        // console.log(cartproductincrease)
    }
    const handleqtydecrease = (cartproduct) => {
        cartproductdecrease(cartproduct);
        console.log(cartproduct)
        // console.log(cartproductincrease)
    }
    const handledelete = (cartproduct) => {
        auth.onAuthStateChanged(currentUser => {
            if (currentUser) {
                db.collection('Cart ' + currentUser.uid).doc(cartproduct.ID).delete().then(() => {
                    console.log('successfully deleted')
                })
            }
        })

    }
    return cartproducts.map((cartproduct) => (
        <div className="cart_item">
            <div className="cart_item_image">
                <img src={`${cartproduct.images}`} alt="shop" />
            </div>
            <div className="c-item-body  mt-4 mt-md-0">
                <div className="cart_item_title mb-2">
                    <h4>{cartproduct.Title}</h4>
                </div>
                <div className="cart_item_price">
                    <div className="product-price">
                        <span>
                            <strong>₹{cartproduct.Price}</strong>
                            <del>₹1,000</del>
                            <small className="product-discountPercentage">(50% OFF)</small>
                        </span>
                    </div>
                    <div className="cart_product_remove">
                        <Link to="#" onClick={() => handledelete(cartproduct)}>
                            <i className="ti-trash"  ></i> Remove</Link>
                    </div>
                </div>
            </div>
            <div className="qty-input btn mt-4 mt-md-0">
                <i className="less" onClick={() => handleqtydecrease(cartproduct)}>-</i>
                <input type="text" value={cartproduct.qty} />
                <i className="more" onClick={() => handleqtyincrease(cartproduct)}>+</i>
            </div>
        </div>
    ))
}

export default IndividualCartProducts