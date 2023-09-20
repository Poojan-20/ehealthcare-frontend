import React from 'react'
import { Link } from 'react-router-dom';
import CartNavbar from './CartNavbar';

const Checkout = () => {
  return (
    <>
        <CartNavbar/>
        <section className="section-padding mt-5">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body">
                            <div className="row pb-4">
                                <div className="col-sm-6">
                                    <div className="form-group mb-4">
                                        <label className="form-label">First name <span className="text-danger">*</span></label>
                                        <input className="form-control" type="text" value="Sam"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group mb-4">
                                        <label className="form-label">Last name <span className="text-danger">*</span></label>
                                        <input className="form-control" type="text" value="XYZ"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group mb-4">
                                        <label className="form-label">Email address <span className="text-danger">*</span></label>
                                        <input className="form-control" type="email" value="abc@doe.com"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group mb-4">
                                        <label className="form-label">Contact</label>
                                        <input className="form-control" type="text" value=""/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group mb-4">
                                        <label className="form-label">Country <span className="text-danger">*</span></label>
                                        <select className="form-control select2-hidden-accessible" data-select2-id="select2-data-1-rfqc" tabIndex="-1" aria-hidden="true">
                                            <option value="">Select country</option>
                                            <option value="Argentina">Argentina</option>
                                            <option value="Belgium">Belgium</option>
                                            <option value="France">France</option>
                                            <option value="India" selected="" data-select2-id="select2-data-3-s0yw">India</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Spain">Spain</option>
                                            <option value="UK">United Kingdom</option>
                                            <option value="USA">USA</option>
                                        </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-2-pdhu" style={{width: "310px"}}><span className="selection"><span className="select2-selection select2-selection--single form-control" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-pbv8-container" aria-controls="select2-pbv8-container"><span className="select2-selection__rendered" id="select2-pbv8-container" role="textbox" aria-readonly="true" title="India">India</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                    </div>
                                </div>
                            </div>
                            <div id="accordion">
                                <div className="accordion-item">
                                    <div className="accordion-title">
                                        <h5 className="mb-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"> Pay with Credit Card</h5>
                                    </div>
                                    <div className="accordion-content collapse show" id="collapseOne" data-parent="#accordion">
                                        <div className="accordion-content-inner">
                                            <p className="py-4">We accept following credit cards:&nbsp;&nbsp;<img className="d-inline-block align-middle" src="assets/img/payment-methods.png" style={{width: "187px"}} alt="Cerdit Cards"/></p>
                                            <form className="credit-card-form row g-3">
                                                <div className="col-sm-6 mb-4">
                                                    <input className="form-control" type="text" name="number" placeholder="Card Number" required=""/>
                                                </div>
                                                <div className="col-sm-6 mb-4">
                                                    <input className="form-control" type="text" name="name" placeholder="Full Name" required=""/>
                                                </div>
                                                <div className="col-sm-3 mb-4">
                                                    <input className="form-control" type="text" name="expiry" placeholder="MM/YY" required=""/>
                                                </div>
                                                <div className="col-sm-3 mb-4">
                                                    <input className="form-control" type="text" name="cvc" placeholder="CVC" required=""/>
                                                </div>
                                                <div className="col-sm-6 mb-4">
                                                    <Link to="/thankyou" className="btn btn-primary d-block w-100">Place
                                                        order</Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">

                                    <div className="accordion-title">
                                        <h5 className="mb-0" data-toggle="collapse" data-target="#collapseTwo">Pay with
                                            PayPal</h5>
                                    </div>

                                    <div className="collapse accordion-content" id="collapseTwo" data-parent="#accordion">
                                        <div className="accordion-content-inner">
                                            <p className="pt-4 mb-0 pb-2"><span className="font-weight-bold">PayPal</span> - the safer, easier way to pay</p>
                                            <Link to="/thankyou" className="btn btn-primary">Checkout with PayPal</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                
                                    <div className="accordion-title">
                                        <h5 className="mb-0" data-toggle="collapse" data-target="#collapseThree"> Pay later
                                        </h5>
                                    </div>
                                
                                    <div className="collapse accordion-content" id="collapseThree" data-parent="#accordion">
                                        <div className="accordion-content-inner">
                                            <p className="pt-4 mb-0 pb-3"><span className="font-weight-bold">Cash On Delevary</span> -Buy Now Pay Later for all your shopping</p>
                                            <Link to="/thankyou" className="btn btn-primary">Place order</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mt-lg-0 mt-6">
                    <h6 className="font-weight-bold">Deliver to</h6>
                    <div className="mb-4" data-select2-id="select2-data-8-opyz">
                        <select className="form-control select2-hidden-accessible" data-select2-id="select2-data-4-4hwe" tabIndex="-1" aria-hidden="true">
                            <option value="s" data-select2-id="select2-data-11-ruww">Jaipur - 734001</option>
                            <option value="s" selected="" data-select2-id="select2-data-6-xeu1">Mumbai - 110002</option>
                            <option value="s" data-select2-id="select2-data-12-kae6">Surat - 700027</option>
                        </select><span className="select2 select2-container select2-container--default select2-container--below select2-container--open" dir="ltr" data-select2-id="select2-data-5-lkl8" style={{width: "210px"}}><span className="selection"><span className="select2-selection select2-selection--single form-control" role="combobox" aria-haspopup="true" aria-expanded="true" tabIndex="0" aria-disabled="false" aria-labelledby="select2-jlrp-container" aria-controls="select2-jlrp-container" aria-owns="select2-jlrp-results" aria-activedescendant="select2-jlrp-result-6s65-s"><span className="select2-selection__rendered" id="select2-jlrp-container" role="textbox" aria-readonly="true" title="Mumbai - 110002">Mumbai - 110002</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                    </div>
                    <div className="cart-summary">
                        <div className="cart-summary-wrap">
                            <h4>Cart Summary</h4>
                            <p>Sub Total <span>Rs 1250.00</span></p>
                            <p>Shipping Cost <span>Rs 00.00</span></p>
                            <h2>Grand Total <span>Rs 1250.00</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Checkout