import React from 'react'
import CartNavbar from './CartNavbar'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'

const OrderDetails = () => {
  return (
    <>
    <CartNavbar/>
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
                                            <li className="breadcrumb-item text-nowrap active" aria-current="page">Order Details</li>
                                        </ol>
                                    </nav>
                                </div>
                                <div className="order-md-1 text-center text-md-left col-lg col-12">
                                    <h1 className="h3 mb-0" style={{color:"white"}}>Order Details</h1>
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
                                        
                                        <button className="navbar-toggler d-md-none rounded bg-primary text-light" type="button"
                                            data-toggle="collapse" data-target="#sidenav" aria-controls="sidenav"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="ti-menu"></span>
                                        </button>
                                        
                                        <div className="collapse navbar-collapse" id="sidenav">
                                            <div className="navbar-nav flex-column">
                                              
                                                <div className="border-bottom">
                                                    <div className="m-4">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col-auto">
                                                                <div className="avater btn-soft-primary">SS</div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <h6 className="d-block font-weight-bold mb-0">Sanyam Sharma</h6>
                                                                <small className="text-muted">yourmail@email.com</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="nav-item active">
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
                                                    <li className="nav-item">
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
                                                        <Link className="nav-link" to="/"><i className="fa fa-sign-out"></i> Logout</Link>
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
                                    <h5 className="mb-1 text-white">Order Details</h5>
                                    <p className="mb-0 text-white small">
                                        You have full control to manage your own account setting.
                                    </p>
                                </div>
                                <div className="col-auto">
                                    <Link to="/cartorder" className="btn btn-primary btn-sm"> <i className="ti-angle-left"></i> Go Back</Link>
                                </div>
                            </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="cart_product border-0">
                                        <div className="cart_item px-0">
                                            <div className="cart_item_image">
                                                <img src="assets/img/product/product-3.png" alt="shop"/>
                                            </div>
                                            <div className="c-item-body">
                                                <div className="cart_item_title mb-2">
                                                    <h4>1mg Salmon Omega 3 Fish Oil Capsule</h4>
                                                    <p className="small mb-0 text-muted">bottle of 60 capsules</p>
                                                </div>
                                                <div className="cart_item_price">
                                                    <div className="product-price">
                                                        <span>
                                                            <strong>₹499 </strong>
                                                            <del>₹1,000</del>
                                                            <small className="product-discountPercentage">(50% OFF)</small>
                                                        </span>
                                                    </div>
                                                    <div className="cart_product_remove">
                                                        <Link to="#"><i className="ti-truck"></i> Return Item</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-lg-12">
                                            <div className="border p-3 mb-4">
                                                <h5 className="details">Order Info</h5>
                                                <div className="row no-gutters">
                                                    <div className="col-auto">
                                                        <i className="ti-map-alt text-secondary mr-2"></i>
                                                    </div>
                                                    <div className="col">
                                                        <p className="text-muted small mb-2"> <strong>Delevery Address:</strong> Cavendish Street, Cartmel, Grange-Over-Sands, Cumbria, LA11 6PZ</p>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters">
                                                    <div className="col-auto">
                                                        <i className="ti-mobile text-secondary mr-2"></i>
                                                    </div>
                                                    <div className="col">
                                                        <p className="text-muted small mb-0"><strong>Phone Number:</strong> 1234567890</p>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters">
                                                    <div className="col-auto">
                                                        <i className="ti-credit-card text-secondary mr-2"></i>
                                                    </div>
                                                    <div className="col">
                                                        <p className="text-muted small mb-2"><strong>Payment Type:</strong> Stripe</p>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters">
                                                    <div className="col-auto">
                                                        <i className="ti-calendar text-secondary mr-2"></i>
                                                    </div>
                                                    <div className="col">
                                                        <p className="text-muted small mb-2"><strong>Order Receive On:</strong> 24 May 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="timeline mt-4">
                                        <li className="timeline-item active">
                                            <div className="timeline-figure">
                                                <span className="tile tile-circle tile-sm"><i className="ti-arrow-circle-down"></i></span>
                                            </div>
                                            <div className="timeline-body">
                                                <div className="media">
                                                    <div className="media-body">
                                                        <h6 className="timeline-heading">
                                                            Order placed
                                                        </h6>
                                                    </div>
                                                    <div className="d-none d-sm-block">
                                                        <span className="timeline-date">About a minute ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-item active">
                                            <div className="timeline-figure">
                                                <span className="tile tile-circle tile-sm"><i className="ti-arrow-circle-down"></i></span>
                                            </div>
                                            <div className="timeline-body">
                                                <div className="media">
                                                    <div className="media-body">
                                                        <h6 className="timeline-heading">
                                                            <Link to="#" className="text-link">Order Ready</Link>
                                                        </h6>
                                                    </div>
                                                    <div className="d-none d-sm-block">
                                                        <span className="timeline-date">3 hours ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-item">
                                            <div className="timeline-figure">
                                                <span className="tile tile-circle tile-sm"><i className="ti-arrow-circle-down"></i></span>
                                            </div>
                                            <div className="timeline-body">
                                                <div className="media">
                                                    <div className="media-body">
                                                        <h6 className="timeline-heading">
                                                            <Link to="#" className="text-link">Way to deliver</Link>
                                                        </h6>
                                                    </div>
                                                    <div className="d-none d-sm-block">
                                                        <span className="timeline-date">3 hours ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-item">
                                            <div className="timeline-figure">
                                                <span className="tile tile-circle tile-sm"><i className="ti-arrow-circle-down"></i></span>
                                            </div>
                                            <div className="timeline-body">
                                               
                                                <div className="media">
                                                    <div className="media-body">
                                                        <h6 className="timeline-heading">
                                                            <Link to="#" className="text-link">Delivered successfully</Link>
                                                        </h6>
                                                    </div>
                                                    <div className="d-none d-sm-block">
                                                        <span className="timeline-date">3 hours ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
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

export default OrderDetails