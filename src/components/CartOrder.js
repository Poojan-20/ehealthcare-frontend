import React, { useState, useEffect } from 'react'
import { Link , useNavigate } from 'react-router-dom';
import CartNavbar from './CartNavbar'
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase.mjs";
import firebase from "../firebase.mjs";

const CartOrder = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate()

    const handleSignout = () => {
        firebase.auth().signOut();
        navigate("/");
    };

    const [user, setUser] = useState([]);

    useEffect(() => {
        db.collection("users").onSnapshot((snapshot) => {
            setUser(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);
    return (
        <>
            <CartNavbar />
            <main>
                <div className="accounnt_header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-auto col-12 order-md-2">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <Link className="text-nowrap" to="/shopping"><i className="fa fa-home mr-2"></i>Home</Link>
                                        </li>
                                        <li className="breadcrumb-item text-nowrap"><Link to="/useraccount">Account</Link>
                                        </li>
                                        <li className="breadcrumb-item text-nowrap active" aria-current="page">Order</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="order-md-1 text-center text-md-left col-lg col-12">
                                <h1 className="h3 mb-0" style={{color: "white"}}>Orders</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accounnt_body">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-4 col-md-4 col-12">
                                <nav className="navbar navbar-expand-md mb-4 mb-lg-0 sidenav">

                                    <Link className="d-xl-none d-lg-none d-md-none text-inherit fw-bold" to="#">Sidebar Menu</Link>

                                    <button className="navbar-toggler d-md-none rounded bg-primary text-light" type="button" data-bs-toggle="collapse" data-bs-target="#sidenav" aria-controls="sidenav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="ti-menu"></span>
                                    </button>

                                    <div className="collapse navbar-collapse" id="sidenav">
                                        <div className="navbar-nav flex-column">

                                            {user.map((user) => {
                                                if (user.uid === currentUser.uid)
                                                    return (
                                                        <div className="border-bottom">
                                                            <div className="m-4">
                                                                <div className="row no-gutters align-items-center">
                                                                    <div className="col-auto">
                                                                        <div className="avater btn-soft-primary">Hi</div>
                                                                    </div>
                                                                    <div className="col-auto">
                                                                        <h6 className="d-block font-weight-bold mb-0">{user.name}</h6>
                                                                        <small className="text-muted">{user.email}</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                            })}
                                            <ul className="list-unstyled mb-0">
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/useraccount"><i className="fa fa-user"></i> My
                                                        Account</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/cartchange-password"><i className="fa fa-lock"></i>
                                                        Password</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/cartaddress"><i className="fa fa-address-book"></i>
                                                        Address</Link>
                                                </li>
                                                <li className="nav-item active">
                                                    <Link className="nav-link" to="/cartorder"><i className="fa fa-shopping-cart"></i>
                                                        Order</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/order-details"><i className="fa fa-shopping-cart"></i>
                                                        Order Details</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/wishlist"><i className="fa fa-heart"></i>
                                                        Wishlist</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="#" onClick={handleSignout}><i className="fa fa-sign-out"></i> Logout</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-lg-8 col-md-8 col-12">
                                <div className="ml-0 ml-md-4">
                                    <div className="d-none d-md-block">
                                        <div className="row mb-md-5">
                                            <div className="col">
                                                <h5 className="mb-1 text-white">Orders</h5>
                                                <p className="mb-0 text-white small">
                                                    You have full control to manage your own orders.
                                                </p>
                                            </div>
                                            <div className="col-auto">
                                                <Link to="orders.html" className="btn btn-primary btn-sm"> <i className="ti-angle-left"></i> Go Back</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="table-responsive">
                                            <table className="table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Order #</th>
                                                        <th>Date Purchased</th>
                                                        <th>Status</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="py-3"><Link className="nav-link-style fw-medium fs-sm" to="orders-details.html" data-bs-toggle="modal">34VB5540K83</Link></td>
                                                        <td className="py-3">May 21, 2019</td>
                                                        <td className="py-3"><span className="badge bg-soft-info m-0">In Progress</span></td>
                                                        <td className="py-3">RS 358.75</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3"><Link className="nav-link-style fw-medium fs-sm" to="orders-details.html" data-bs-toggle="modal">78A643CD409</Link></td>
                                                        <td className="py-3">December 09, 2018</td>
                                                        <td className="py-3"><span className="badge bg-soft-danger m-0">Canceled</span></td>
                                                        <td className="py-3"><span>Rs 760.50</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3"><Link className="nav-link-style fw-medium fs-sm" to="orders-details.html" data-bs-toggle="modal">112P45A90V2</Link></td>
                                                        <td className="py-3">October 15, 2018</td>
                                                        <td className="py-3"><span className="badge bg-soft-warning m-0">Delayed</span></td>
                                                        <td className="py-3">Rs 1,264.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3"><Link className="nav-link-style fw-medium fs-sm" to="orders-details.html" data-bs-toggle="modal">47H76G09F33</Link></td>
                                                        <td className="py-3">March 30, 2018</td>
                                                        <td className="py-3"><span className="badge bg-soft-success m-0">Delivered</span></td>
                                                        <td className="py-3">$86.40</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default CartOrder