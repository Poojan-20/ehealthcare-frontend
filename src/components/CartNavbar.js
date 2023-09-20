import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./theme.css";
import { useAuth } from "../context/AuthContext";
import firebase from "../firebase";
import { db, auth } from "../firebase.mjs";

const CartNavbar = () => {
    const [TotalProducts, setTotalProducts] = useState(0)

    const { currentUser } = useAuth();
    const navigate = useNavigate()
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

    const handleSignout = () => {
        firebase.auth().signOut();
        navigate("/");
    };

    return (
        <>
            <div className="header">
                <div className="container-fluid theme-container" style={{ textAlign: "inherit" }}>
                    <div className="top-header">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <Link to="/">
                                    <img src="/assets/img/logo.png" alt="logo" className="header-logo" />
                                </Link>
                            </div>
                            <div className="col">
                                <div className="header-search">
                                    <form action="">
                                        <input style={{ maxWidth: "none" }} className="form-control custom-search" placeholder="Search for Medicines and Health Products" type="text" />
                                    </form>

                                </div>
                            </div>
                            {
                                !currentUser ? (

                                    <div className="col-auto">
                                        <ul className="header-right-options">
                                            <li className="link-item">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li className="link-item">
                                                <Link to="/labhome">Lab Test</Link>
                                            </li>
                                            <li className="link-item">
                                                <Link to="/userlogin">Login</Link>
                                            </li>
                                            <li className="link-item">
                                                <Link to="/userregister" >Register</Link>
                                            </li>
                                        </ul>
                                    </div>
                                ) : (

                                    <div className="col-auto">
                                        <ul className="header-right-options">
                                            {
                                                currentUser.uid === "dUV6xnPfKMODFSGvKPW54aFWKwk2" ? (
                                                    <li className="link-item">
                                                        <Link to="/uploadProduct">Upload Product </Link>
                                                    </li>
                                                ) :
                                                    (
                                                        <span></span>
                                                    )
                                            }
                                            <li className="link-item">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li className="link-item">
                                                <Link to="/labhome">Lab Test</Link>
                                            </li>
                                            <li className="link-item" >
                                                <button style={{ minWidth: "0px", marginTop: "0px" }} className="btn" >
                                                    <div className="list-icon">
                                                        <Link to='/cart'><i className="ti-bag"></i></Link>
                                                    </div>
                                                    <span className="badge badge-secondary">{TotalProducts}</span>
                                                </button>
                                            </li>
                                            <li className="dropdown">
                                                <button style={{ minWidth: "0px", marginTop: "0px" }} id="dropdownCartButton" className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <div className="list-icon">
                                                        <i className="ti-user"></i>
                                                    </div>
                                                </button>

                                                <div className="dropdown-menu dropdown-menu-right user-links" aria-labelledby="dropdownMenuButton">
                                                    <ul>
                                                        <li>
                                                            <Link to="/useraccount">
                                                                Account
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/cartchange-password">
                                                                Change Password
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/cartaddress">
                                                                Address
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/cartorder">
                                                                My Orders
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/order-details">
                                                                Order Details
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/wishlist">
                                                                Wish List
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" onClick={handleSignout}>
                                                                Logout
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li >
                                                <Link style={{ margin: "auto", marginLeft: "10px" }} to="/upload-prescription" className="btn btn-primary btn-sm">Upload</Link>
                                            </li>
                                        </ul>
                                    </div>

                                )
                            }
                        </div>
                    </div>
                    <div className="header-links" style={{ display: "flex", justifyContent: "center" }}>
                        <div className="container-fluid theme-container" style={{ textAlign: "center" }}>
                            <ul className="header-links-container">
                                <li className="header-links-item">
                                    <div className="header-childrenItem-parent">
                                        <Link to="/genericmed">
                                            <span className="header-childrenItem-link-text">Generic Medicines</span>
                                            <i className="fa fa-angle-down drop-icon"></i>
                                        </Link>
                                    </div>
                                </li>
                                <li className="header-links-item">
                                    <div className="header-childrenItem-parent">
                                        <Link to="/babycare">
                                            <span className="header-childrenItem-link-text">Baby Care</span>
                                        </Link>
                                        <i className="fa fa-angle-down drop-icon"></i>
                                    </div>
                                    <div className="header-childrenItem-child-category-links dropdown-menu-right">
                                        <ul className="header-childrenItem-child-list">
                                            <li>
                                                <Link to="/babycare" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">Baby Health Care & Devices</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/babycare" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">Baby Diaper & Wipes</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/babycare" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">Baby Accessories</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/babycare" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">Baby Bath & Hygine</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="header-links-item">
                                    <div className="header-childrenItem-parent">
                                        <Link to="/sports_nutrition">
                                            <span className="header-childrenItem-link-text">Sports & Nutrition</span>
                                        </Link>
                                        <i className="fa fa-angle-down drop-icon"></i>
                                    </div>
                                    <div className="header-childrenItem-child-category-links dropdown-menu-right">
                                        <ul className="header-childrenItem-child-list">
                                            <li>
                                                <Link to="/sports_nutrition" className="childItem-level-2">
                                                    <span className="header-childrenItem-link-text">Vitamins &amp;
                                                        Supplements</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/sports_nutrition" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">Multivitamins</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/sports_nutrition" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">Vitamins A-Z</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/sports_nutrition" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">Mineral Supplements</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/sports_nutrition" className="childItem-level-2">
                                                    <span className="header-childrenItem-link-text">Nutritional Drinks</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/sports_nutrition" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">For Men</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/sports_nutrition" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">For Children</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/sports_nutrition" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">For Women</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/sports_nutrition" className="childItem-level-2">
                                                    <span className="header-childrenItem-link-text">Health Food &amp; Drinks</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/sports_nutrition" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">Green Tea &amp; Herbal
                                                        Tea</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/sports_nutrition" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">Apple Cider Vinegar</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/sports_nutrition" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">Healthy Snacks</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="header-links-item">
                                    <div className="header-childrenItem-parent">
                                        <Link to="/diabetes">
                                            <span className="header-childrenItem-link-text">Diabetes</span>
                                            <i className="fa fa-angle-down drop-icon"></i>
                                        </Link>
                                    </div>
                                </li>
                                <li className="header-links-item">
                                    <div className="header-childrenItem-parent">
                                        <Link to="/covidprevention">
                                            <span className="header-childrenItem-link-text">COVID Test </span>
                                        </Link>
                                        <i className="fa fa-angle-down drop-icon"></i>
                                    </div>
                                    <div className="header-childrenItem-child-category-links">
                                        <ul className="header-childrenItem-child-list">
                                            <li>
                                                <Link to="/covidprevention" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">Immunity Care</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/covidprevention" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">Masks</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div> 
                                </li>
                                <li className="header-links-item">
                                    <div className="header-childrenItem-parent">
                                        <Link to="/personalcare">
                                            <span className="header-childrenItem-link-text">Personal Care</span>
                                        </Link>
                                        <i className="fa fa-angle-down drop-icon"></i>
                                    </div>
                                    <div className="header-childrenItem-child-category-links dropdown-menu-right">
                                        <ul className="header-childrenItem-child-list">
                                            <li>
                                                <Link to="/personalcare" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">Hair Care</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/personalcare" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">Skin Care</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/personalcare" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">Men's Grooming</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/personalcare" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">Makeup</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/personalcare" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">Fragrances & Deo</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/personalcare" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">Bath & Hand Wash</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="header-links-item">
                                    <div className="header-childrenItem-parent">
                                        <Link to="#">
                                            <span className="header-childrenItem-link-text">Featured</span>
                                        </Link>
                                        <i className="fa fa-angle-down drop-icon"></i>
                                    </div>
                                    <div className="header-childrenItem-child-category-links dropdown-menu-right">
                                        <ul className="header-childrenItem-child-list">
                                            <li>
                                                <Link to="#" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">Flash Deals</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="childItem-level-3">
                                                    <span className="header-childrenItem-link-text">Top Health Products</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-header">
                <div className="container-fluid theme-container">
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <ul className="header-left-options">
                                <li className="link-item open-sidebar">
                                    <i className="ti-menu"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="col text-center">
                            <img src="assets/img/logo.png" alt="logo" className="header-logo" />
                        </div>
                        <div className="col-auto">
                            <ul className="header-right-options">
                                <li className="link-item">
                                    <span className="badge badge-secondary">0</span>
                                    <i className="ti-bag"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu-sidebar">
                        <div className="close">
                            <i className="ti-close"></i>
                        </div>

                        <div className="welcome d-flex align-items-center">
                            <Link to="#" data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#login_modal"
                                className="btn btn-soft-primary btn-md">Login</Link>
                            <Link to="#" data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#register_modal"
                                className="btn btn-primary btn-md">Register</Link>
                            {/* <!-- <div className="avater btn-soft-primary">H</div>
                                <span>Hi, Deep saha</span> --> */}
                        </div>
                        <div className="mobileMenuLinks mb-4 mt-2">
                            <h6>Account Info</h6>
                            <ul>
                                <li><Link to="account.html">Account</Link></li>
                                <li><Link to="orders.html">My Orders</Link></li>
                                <li><Link to="wishlist.html">Wish List</Link></li>
                                <li><Link to="index.html">Logout</Link></li>
                            </ul>
                        </div>
                        <div className="mobileMenuLinks">
                            <h6>Category</h6>
                            <ul>
                                <li><Link to="/category">AllMedicines</Link></li>
                                <li><Link to="/category">COVID Prevention</Link></li>
                                <li><Link to="/category">Featured</Link></li>
                                <li><Link to="/category">Fitness</Link></li>
                                <li><Link to="/category">Diabetes</Link></li>
                                <li><Link to="/category">COVID Test </Link></li>
                                <li><Link to="/category">Papular</Link></li>
                                <li><Link to="/category">Supplements</Link></li>
                                <li><Link to="/category">Nutrition</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
        </>
    )
}

export default CartNavbar