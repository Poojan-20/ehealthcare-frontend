import React from 'react'
import { Link } from 'react-router-dom';
import CartNavbar from './CartNavbar';

const Thankyou = () => {
  return (
    <>
    <CartNavbar/>
    <section className="pt-4">
        <div className="container">
            <div className="row align-items-center mt-0 mt-md-4">
                <div className="col-sm-6 mb-4 mb-lg-0">
                    <div className="thank mb-3">
                        <span className="thank-title-top">Order placed</span>
                        <h2 className="thank-title text-dark ">Successfully</h2>
                        <p className="thank-desc">Experience the best Products & Services that will exceed your expectations.</p>
                    </div>
                    <Link to="/order-details" className="btn btn-primary btn-medium rounded">
                        <i className="ti-angle-left"></i> Track Your Order </Link>
                </div>
                <div className="col-md-5 d-lg-block d-none offset-lg-1 text-md-center">
                    <img className="img-fluid" src="assets/img/thank.png" alt="thank"/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Thankyou