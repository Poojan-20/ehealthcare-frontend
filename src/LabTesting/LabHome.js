import React from 'react'
import { Link } from 'react-router-dom';
import './css/bootstrap.min.css';
import './css/components.min.css';
import './css/medwise-icons.css';
import './css/style.min.css';
import './css/vendors.min.css';
import './css/ionicons.css';

const LabHome = () => {

    return (
        <>
            <header>
                <div className="header-area ">
                    <div className="header-top_area">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-md-6 ">
                                    <div className="social_media_links">
                                        <Link to="#">
                                            <i className="fab fa-linkedin"></i>
                                        </Link>
                                        <Link to="#">
                                            <i className="fab fa-facebook"></i>
                                        </Link>
                                        <Link to="#"><i className="fab fa-instagram"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-md-12">
                                    <div className="short_contact_list">
                                        <ul>
                                            <li><Link to="#"> <i className="fa fa-envelope"></i> <span className="__cf_email__" data-cfemail="20494e464f60444f434d45440e434f4d">medjestic@gmail.com</span></Link></li>
                                            <li><Link to="/contact"> <i className="fa fa-phone"></i> 8974321564</Link></li>
                                            <li><Link to="/social"> <i className="fa-solid fa-rocket-launch"></i>Social </Link></li>
                                            <li><Link to="/admin_login"> <i className="fa fa-user"></i> Admin</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="sticky-header" className="main-header-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-3 col-lg-2">
                                    <div className="logo">
                                        <Link to="index.html">
                                            <img src={"../assets/img/xlogo"} alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-7">
                                    <div className="main-menu  d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><Link className="active" to="/">Home</Link></li>
                                                <li><Link to="/doctor_login">Doctor</Link></li>
                                                <li><Link to="/patient_login">Patient</Link></li>
                                                <li><Link to="/labhome">Lab Testing</Link></li>
                                                <li><Link to="/shopping">Shopping</Link></li>
                                                <li><Link to="/about">About</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                    <div className="Appointment">
                                        <div className="book_btn d-none d-lg-block">
                                            <Link className="popup-with-form" to="/patient_login">Make an Appointment</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="slider_area">
                <div className="slider_active owl-carousel">
                    <div className="single_slider  d-flex align-items-center slider_bg_2" style={{ height: "600px" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="slider_text ">
                                        <h3 style={{ fontSize: "44px" }}> Booking <span>Lab Tests </span>is now easier than ever </h3>
                                        <p>Book Diagnostics Lab Test Online. Get doorstep sample collection</p>
                                        <Link to="/labpackages" className="boxed-btn3">Check Our Services</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-40 pb-40 bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mt-20 mb-20">
                            <div className="iconbox-2">
                                <div className="iconbox-icon">
                                    <i className="ion-shield-checkmark-outline"></i>
                                </div>
                                <div className="iconbox-body">
                                    <h5 className="heading font-bold mb-10 text-white">Sanitized Equipment</h5>
                                    <p className="mb-0 text-white opacity-08 font-2">Behind the word mountains, far from the countries Vokalia</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-20 mb-20">
                            <div className="iconbox-2">
                                <div className="iconbox-icon">
                                    <i className="ion-code-working-outline"></i>
                                </div>
                                <div className="iconbox-body">
                                    <h5 className="heading font-bold mb-10 text-white">Social Distancing</h5>
                                    <p className="mb-0 text-white opacity-08 font-2">Behind the word mountains, far from the countries Vokalia</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-20 mb-20">
                            <div className="iconbox-2">
                                <div className="iconbox-icon">
                                    <i className="ion-thermometer-outline"></i>
                                </div>
                                <div className="iconbox-body">
                                    <h5 className="heading font-bold mb-10 text-white">Temperature Checks</h5>
                                    <p className="mb-0 text-white opacity-08 font-2">Behind the word mountains, far from the countries Vokalia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-80">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="heading-block">
                            <h3 className="heading font-bold">Popular Test Procedures</h3>
                            <p className="sub-heading">There live the blind texts separated they right at the coast of the Semantics.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-20">
                    <div className="col-lg-3">
                        <div className="department-box-5">
                            <div className="head">
                                <h4 className="heading font-5 font-bold mb-0">Covid-19 Test</h4>
                            </div>
                            <div className="body">
                                <p className="mb-20 font-2 text-muted">Behind the word mountains far from the Vokalia.</p>
                                <h6 className="heading font-bold">Includes:</h6>
                                <ul className="list-styled mb-0">
                                    <li><i className="ion-checkmark-outline list-icon"></i>Blood glucose</li>
                                    <li><i className="ion-checkmark-outline list-icon"></i>Liver functioning</li>
                                    <li><i className="ion-checkmark-outline list-icon"></i>Heart health</li>
                                </ul>
                                <div className="price mt-20">
                                    <del className="text-muted">Rs.750</del>
                                    <ins className="new-price">Rs.500</ins>
                                    <span className="badge badge-primary">22% Off</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="department-box-5">
                            <div className="head">
                                <h4 className="heading font-5 font-bold mb-0">Malaria Test</h4>
                            </div>
                            <div className="body">
                                <p className="mb-20 font-2 text-muted">Behind the word mountains far from the Vokalia.</p>
                                <h6 className="heading font-bold">Includes:</h6>
                                <ul className="list-styled mb-0">
                                    <li><i className="ion-checkmark-outline list-icon"></i>Blood glucose</li>
                                    <li><i className="ion-checkmark-outline list-icon"></i>Liver functioning</li>
                                    <li><i className="ion-checkmark-outline list-icon"></i>Heart health</li>
                                </ul>
                                <div className="price mt-20">
                                    <del className="text-muted">Rs.1200</del>
                                    <ins className="new-price">Rs.900</ins>
                                    <span className="badge badge-primary">30% Off</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="department-box-5">
                            <div className="head">
                                <h4 className="heading font-5 font-bold mb-0">Liver Profile</h4>
                            </div>
                            <div className="body">
                                <p className="mb-20 font-2 text-muted">Behind the word mountains far from the Vokalia.</p>
                                <h6 className="heading font-bold">Includes:</h6>
                                <ul className="list-styled mb-0">
                                    <li><i className="ion-checkmark-outline list-icon"></i>Blood glucose</li>
                                    <li><i className="ion-checkmark-outline list-icon"></i>Liver functioning</li>
                                    <li><i className="ion-checkmark-outline list-icon"></i>Heart health</li>
                                </ul>
                                <div className="price mt-20">
                                    <del className="text-muted">Rs.990</del>
                                    <ins className="new-price">Rs.890</ins>
                                    <span className="badge badge-primary">10% Off</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="department-box-5">
                            <div className="head">
                                <h4 className="heading font-5 font-bold mb-0">Ultrasound</h4>
                            </div>
                            <div className="body">
                                <p className="mb-20 font-2 text-muted">Behind the word mountains far from the Vokalia.</p>
                                <h6 className="heading font-bold">Includes:</h6>
                                <ul className="list-styled mb-0">
                                    <li><i className="ion-checkmark-outline list-icon"></i>Blood glucose</li>
                                    <li><i className="ion-checkmark-outline list-icon"></i>Liver functioning</li>
                                    <li><i className="ion-checkmark-outline list-icon"></i>Heart health</li>
                                </ul>
                                <div className="price mt-20">
                                    <del className="text-muted">Rs.500</del>
                                    <ins className="new-price">Rs.400</ins>
                                    <span className="badge badge-primary">5% Off</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 text-center">
                        <Link to="/labpackages" className="btn btn-outline-secondary">View All Packages
                            <i className="ion-arrow-forward-sharp icon-right"></i>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="pt-80 pb-80 mt-80" style={{ backgroundImage: `url(assets/images/1920-650-1.jpg)`, backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <p className="h4 mb-10">
                                <span className="badge badge-primary">New</span>
                            </p>
                            <h3 className="heading font-bold h2 text-white mb-30 text-lh-5">Now offering Covid-19 tests both at lab & home collection.</h3>
                            <Link to="book-appointment-form.html" className="btn btn-outline-light">Book Covid Test</Link>
                        </div>
                    </div>
                </div>
            </div>



            <div className="pt-80 pb-80 mt-80" style={{ backgroundImage: "url(assets/images/1920-650-2.jpg)", backgroundPosition: " center", backgroundSize: "cover" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="heading-block">
                                <h3 className="heading font-bold">Popular Health Packages</h3>
                                <p className="sub-heading">There live the blind texts separated they right at the coast of the Semantics.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mt-20">
                            <div className="offer-box">
                                <div className="offer-header">
                                    <img src="assets/images/420-540-1.jpg" className="img-fluid" alt="" />
                                    <div className="offer-tag">20% Off</div>
                                </div>
                                <div className="offer-body">
                                    <h4 className="heading font-bold mb-10">Couple Health Package</h4>
                                    <ul className="list-default mb-20 mt-20">
                                        <li>Highest Success Rate</li>
                                        <li>More than 10 year</li>
                                        <li>First Doctor to receive</li>
                                    </ul>
                                    <p className="mb-0 font-1">Special Price:</p>
                                    <div className="price">
                                        <del className="text-muted">Rs.600</del>
                                        <ins className="new-price">Rs.300</ins>
                                        <span className="basis">/year</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-20">
                            <div className="offer-box">
                                <div className="offer-header">
                                    <img src="assets/images/420-540-2.jpg" className="img-fluid" alt="" />
                                    <div className="offer-tag">5% Off</div>
                                </div>
                                <div className="offer-body">
                                    <h4 className="heading font-bold mb-10">Senior Citizen Package</h4>
                                    <ul className="list-default mb-20 mt-20">
                                        <li>Highest Success Rate</li>
                                        <li>More than 10 year</li>
                                        <li>First Doctor to receive</li>
                                    </ul>
                                    <p className="mb-0 font-1">Special Price:</p>
                                    <div className="price">
                                        <del className="text-muted">Rs.990</del>
                                        <ins className="new-price">Rs.890</ins>
                                        <span className="basis">/year</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-40">
                        <div className="col-lg-12 text-center">
                            <Link to="/labpackages" className="btn btn-outline-secondary">View All Packages
                                <i className="ion-arrow-forward-sharp icon-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-80">
                <div className="row align-items-end">
                    <div className="col-lg-8">
                        <h3 className="heading font-bold mb-10">State of the Art Infrastructure</h3>
                        <p className="h5 mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="row">
                            <div className="col-md-4 mt-40">
                                <div className="iconbox-4">
                                    <div className="iconbox-icon">
                                        <i className="ion-alarm-outline"></i>
                                    </div>
                                    <div className="iconbox-body">
                                        <h5 className="heading font-bold mb-10">Advanced Equipment</h5>
                                        <p className="mb-0">Behind the word mountains, far from the countries Vokalia</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-40">
                                <div className="iconbox-4">
                                    <div className="iconbox-icon">
                                        <i className="ion-bandage-outline"></i>
                                    </div>
                                    <div className="iconbox-body">
                                        <h5 className="heading font-bold mb-10">Experienced Staff</h5>
                                        <p className="mb-0">Behind the word mountains, far from the countries Vokalia</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-40">
                                <div className="iconbox-4">
                                    <div className="iconbox-icon">
                                        <i className="ion-barbell-outline"></i>
                                    </div>
                                    <div className="iconbox-body">
                                        <h5 className="heading font-bold mb-10">Accurate Diagnosis</h5>
                                        <p className="mb-0">Behind the word mountains, far from the countries Vokalia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mt-40">
                                <div className="iconbox-4">
                                    <div className="iconbox-icon">
                                        <i className="ion-basket-outline"></i>
                                    </div>
                                    <div className="iconbox-body">
                                        <h5 className="heading font-bold mb-10">Home Collection</h5>
                                        <p className="mb-0">Behind the word mountains, far from the countries Vokalia</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-40">
                                <div className="iconbox-4">
                                    <div className="iconbox-icon">
                                        <i className="ion-briefcase-outline"></i>
                                    </div>
                                    <div className="iconbox-body">
                                        <h5 className="heading font-bold mb-10">Online Reports</h5>
                                        <p className="mb-0">Behind the word mountains, far from the countries Vokalia</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-40">
                                <div className="iconbox-4">
                                    <div className="iconbox-icon">
                                        <i className="ion-business-outline"></i>
                                    </div>
                                    <div className="iconbox-body">
                                        <h5 className="heading font-bold mb-10">Family Like Care</h5>
                                        <p className="mb-0">Behind the word mountains, far from the countries Vokalia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                        <img src="assets/images/550-920-1.jpg" className="img-fluid pl-30" alt="" />
                    </div>
                </div>
            </div>

            <div className="pt-80 pb-80 bg-grey-1 mt-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="flexible-slider" data-items="5" data-items-992="3" data-items-768="1" data-arrows="false" data-dots="false">
                                <div className="slider-items slick-initialized slick-slider"><div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: "3774px", transform: "translate3d(-2220px, 0px, 0px)" }}><div className="slick-slide slick-cloned" data-slick-index="-5" id="" aria-hidden="true" tabIndex="-1" style={{ width: "222px" }}><div><div className="item" style={{ width: "100%", display: "inline-block" }}>
                                    <img src="assets/images/logo-6.png" className="img-fluid pl-30 pr-30" alt="" />
                                </div></div></div><div className="slick-slide slick-cloned" data-slick-index="-4" id="" aria-hidden="true" tabIndex="-1" style={{ width: "222px" }}><div><div className="item" style={{ width: "100%", display: "inline-block" }}>
                                    <img src="assets/images/logo-1.png" className="img-fluid pl-30 pr-30" alt="" />
                                </div></div></div><div className="slick-slide slick-cloned" data-slick-index="-3" id="" aria-hidden="true" tabIndex="-1" style={{ width: "222px" }}><div><div className="item" style={{ width: "100%", display: "inline-block" }}>
                                    <img src="assets/images/logo-5.png" className="img-fluid pl-30 pr-30" alt="" />
                                </div></div></div><div className="slick-slide slick-cloned" data-slick-index="-2" id="" aria-hidden="true" tabIndex="-1" style={{ width: "222px" }}><div><div className="item" style={{ width: "100%", display: "inline-block" }}>
                                    <img src="assets/images/logo-4.png" className="img-fluid pl-30 pr-30" alt="" />
                                </div></div></div><div className="slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" tabIndex="-1" style={{ width: "222px" }}><div><div className="item" style={{ width: "100%", display: "inline-block" }}>
                                    <img src="assets/images/logo-3.png" className="img-fluid pl-30 pr-30" alt="" />
                                </div></div></div><div className="slick-slide" data-slick-index="0" aria-hidden="true" style={{ width: "222px" }} tabIndex="-1"><div><div className="item" style={{ width: "100%", display: "inline-block" }}>
                                    <img src="assets/images/logo-2.png" className="img-fluid pl-30 pr-30" alt="" />
                                </div></div></div><div className="slick-slide" data-slick-index="1" aria-hidden="true" style={{ width: "222px" }} tabIndex="-1"><div><div className="item" style={{ width: "100%", display: "inline-block" }}>
                                    <img src="assets/images/logo-6.png" className="img-fluid pl-30 pr-30" alt="" />
                                </div></div></div><div className="slick-slide" data-slick-index="2" aria-hidden="true" style={{ width: "222px" }} tabIndex="-1"><div><div className="item" style={{ width: "100%", display: "inline-block" }}>
                                    <img src="assets/images/logo-1.png" className="img-fluid pl-30 pr-30" alt="" />
                                </div></div></div><div className="slick-slide" data-slick-index="3" aria-hidden="true" style={{ width: "222px" }} tabIndex="-1"><div><div className="item" style={{ width: "100%", display: "inline-block" }}>
                                    <img src="assets/images/logo-5.png" className="img-fluid pl-30 pr-30" alt="" />
                                </div></div></div><div className="slick-slide" data-slick-index="4" aria-hidden="true" style={{ width: "222px" }} tabIndex="-1"><div><div className="item" style={{ width: "100%", display: "inline-block" }}>
                                    <img src="assets/images/logo-4.png" className="img-fluid pl-30 pr-30" alt="" />
                                </div></div></div><div className="slick-slide slick-current slick-active" data-slick-index="5" aria-hidden="false" style={{ width: "222px" }}><div><div className="item" style={{ width: "100%", display: "inline-block" }}>
                                    <img src="assets/images/logo-3.png" className="img-fluid pl-30 pr-30" alt="" />
                                </div></div></div><div className="slick-slide slick-cloned slick-active" data-slick-index="6" id="" aria-hidden="false" tabIndex="-1" style={{ width: "222px" }}><div><div className="item" style={{ width: "100%", display: "inline-block" }}>
                                    <img src="assets/images/logo-2.png" className="img-fluid pl-30 pr-30" alt="" />
                                </div></div></div><div className="slick-slide slick-cloned slick-active" data-slick-index="7" id="" aria-hidden="false" tabIndex="-1" style={{ width: "222px" }}><div><div className="item" style={{ width: "100%", display: "inline-block" }}>
                                    <img src="assets/images/logo-6.png" className="img-fluid pl-30 pr-30" alt="" />
                                </div></div></div><div className="slick-slide slick-cloned slick-active" data-slick-index="8" id="" aria-hidden="false" tabIndex="-1" style={{ width: "222px" }}><div><div className="item" style={{ width: "100%", display: "inline-block" }}>
                                    <img src="assets/images/logo-1.png" className="img-fluid pl-30 pr-30" alt="" />
                                </div></div></div><div className="slick-slide slick-cloned slick-active" data-slick-index="9" id="" aria-hidden="false" tabIndex="-1" style={{ width: "222px" }}><div><div className="item" style={{ width: "100%", display: "inline-block" }}>
                                    <img src="assets/images/logo-5.png" className="img-fluid pl-30 pr-30" alt="" />
                                </div></div></div><div className="slick-slide slick-cloned" data-slick-index="10" id="" aria-hidden="true" tabIndex="-1" style={{ width: "222px" }}><div><div className="item" style={{ width: "100%", display: "inline-block" }}>
                                    <img src="assets/images/logo-4.png" className="img-fluid pl-30 pr-30" alt="" />
                                </div></div></div><div className="slick-slide slick-cloned" data-slick-index="11" id="" aria-hidden="true" tabIndex="-1" style={{ width: "222px" }}><div><div className="item" style={{ width: "100%", display: "inline-block" }}>
                                    <img src="assets/images/logo-3.png" className="img-fluid pl-30 pr-30" alt="" />
                                </div></div></div></div></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-80">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="heading-block">
                            <h3 className="heading font-bold text-lh-4">Simple & Quick Process</h3>
                            <p className="sub-heading">There live the blind texts separated they right at the coast of the Semantics.</p>
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-3 mt-20">
                        <div className="process-box-1 first">
                            <div className="process-box-header">
                                <i className="ion-download-outline icon"></i>
                            </div>
                            <div className="process-box-body">
                                <h5 className="heading font-bold">Download App</h5>
                                <p>Behind the word mountains, far from the countries Vokalia there live the blind texts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-20">
                        <div className="process-box-1">
                            <div className="process-box-header">
                                <i className="ion-calendar-outline icon"></i>
                            </div>
                            <div className="process-box-body">
                                <h5 className="heading font-bold">Book a Test</h5>
                                <p>Behind the word mountains, far from the countries Vokalia there live the blind texts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-20">
                        <div className="process-box-1">
                            <div className="process-box-header">
                                <i className="ion-eyedrop-outline icon"></i>
                            </div>
                            <div className="process-box-body">
                                <h5 className="heading font-bold">Sample Collection</h5>
                                <p>Behind the word mountains, far from the countries Vokalia there live the blind texts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-20">
                        <div className="process-box-1 last">
                            <div className="process-box-header">
                                <i className="ion-document-outline icon"></i>
                            </div>
                            <div className="process-box-body">
                                <h5 className="heading font-bold">Download Report</h5>
                                <p>Behind the word mountains, far from the countries Vokalia there live the blind texts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer mt-3">
                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-md-6 col-lg-4">
                                <div className="footer_widget">
                                    <div className="footer_logo">
                                        <Link to="#">
                                            <img src="../assets/img/xlogo.png" alt="" />
                                        </Link>
                                    </div>
                                    <p>
                                        Firmament morning sixth subdue darkness
                                        creeping gathered divide.
                                    </p>
                                    <div className="socail_links">
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-facebook"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-twitter"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-instagram"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 col-md-6 col-lg-3">
                                <div className="footer_widget">
                                    <h3 className="footer_title">
                                        Departments
                                    </h3>
                                    <ul>
                                        <li><Link to="#">Eye Care</Link></li>
                                        <li><Link to="#">Skin Care</Link></li>
                                        <li><Link to="#">Pathology</Link></li>
                                        <li><Link to="#">Medicine</Link></li>
                                        <li><Link to="#">Dental</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-6 col-lg-2">
                                <div className="footer_widget">
                                    <h3 className="footer_title">
                                        Useful Links
                                    </h3>
                                    <ul>
                                        <li><Link to="#">About</Link></li>
                                        <li><Link to="#">Blog</Link></li>
                                        <li><Link to="#">About</Link></li>
                                        <li><Link to="#"> Contact</Link></li>
                                        <li><Link to="#"> Appointment</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right_text">
                    <div className="container">
                        <div className="footer_border"></div>
                        <div className="row">
                            <div className="col-xl-12">
                                <p className="copy_right text-center">

                                    Copyright &copy;<script data-cfasync="false" src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with  by I16

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>



        </>
    )
}

export default LabHome