import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import "./theme.css";
import CartNavbar from './CartNavbar';
function CartHomePage() {
    return (
        <>
            <body>
                <Helmet>
                    <script src="./jquery-2.2.4.min.js"></script>
                    <script src="./plugins.bundle.js"></script>
                    <script src="./theme.js" type="text/babel" />
                </Helmet>

                <CartNavbar/>

                <div className="slider" data-autoplay="true" data-autoplay-speed="4000">
                    <Link to="/category">
                        <img src="assets/img/slider/slider-1.svg" alt="" />
                    </Link>
                </div>
                <div className="pt-5">
                    <div className="container-fluid theme-container">
                        <div className="slider  arrow-light slider-gap slick-initialized slick-slider" data-slides-to-show="4" data-autoplay="true" data-nav="true" data-dots="false"><button className="slick-prev slick-arrow" aria-label="Previous" type="button" style={{ display: "block" }}>Previous</button>
                            <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: "5400px", transform: "translate3d(-1080px, 0px, 0px)" }}><div className="product-categories-grid slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" tabIndex="-1" style={{ width: "240px" }}>
                                <div className="product-img">
                                    <img src="assets/img/category/category-5.png" className="" alt="" />
                                    <div className="cat-info">
                                        <h5 className="cat-name">
                                            Covid Masks
                                        </h5>
                                        <Link to="/covidprevention" className="cat-link" tabIndex="-1">
                                            View All <i className="ti-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div><div className="product-categories-grid slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" tabIndex="-1" style={{ width: "240px" }}>
                                    <div className="product-img">
                                        <img src="assets/img/category/category-6.png" className="" alt="" />
                                        <div className="cat-info">
                                            <h5 className="cat-name">
                                                Beauty Serum
                                            </h5>
                                            <Link to="/personalcare" className="cat-link" tabIndex="-1">
                                                View All <i className="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div><div className="product-categories-grid slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" tabIndex="-1" style={{ width: "240px" }}>
                                    <div className="product-img">
                                        <img src="assets/img/category/category-7.png" className="" alt="" />
                                        <div className="cat-info">
                                            <h5 className="cat-name">
                                                Natural Cream
                                            </h5>
                                            <Link to="/category" className="cat-link" tabIndex="-1">
                                                View All <i className="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div><div className="product-categories-grid slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabIndex="-1" style={{ width: "240px" }}>
                                    <div className="product-img">
                                        <img src="assets/img/category/category-8.png" className="" alt="" />
                                        <div className="cat-info">
                                            <h5 className="cat-name">
                                                Hand Sanitizer
                                            </h5>
                                            <Link to="/category" className="cat-link" tabIndex="-1">
                                                View All <i className="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div><div className="product-categories-grid slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabIndex="0" style={{ width: "240px" }}>
                                    <div className="product-img">
                                        <img src="assets/img/category/category-1.png" className="" alt="" />
                                        <div className="cat-info">
                                            <h5 className="cat-name">
                                                Tetanus Injection
                                            </h5>
                                            <Link to="/genericmed" className="cat-link" tabIndex="0">
                                                View All <i className="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div><div className="product-categories-grid slick-slide slick-active" data-slick-index="1" aria-hidden="false" tabIndex="0" style={{ width: "240px" }}>
                                    <div className="product-img">
                                        <img src="assets/img/category/category-2.png" className="" alt="" />
                                        <div className="cat-info">
                                            <h5 className="cat-name">
                                                Darjeeling Teas
                                            </h5>
                                            <Link to="/diabetes" className="cat-link" tabIndex="0">
                                                View All <i className="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div><div className="product-categories-grid slick-slide slick-active" data-slick-index="2" aria-hidden="false" tabIndex="0" style={{ width: "240px" }}>
                                    <div className="product-img">
                                        <img src="assets/img/category/category-3.png" className="" alt="" />
                                        <div className="cat-info">
                                            <h5 className="cat-name">
                                                Whey Protein
                                            </h5>
                                            <Link to="/sports_nutrition" className="cat-link" tabIndex="0">
                                                View All <i className="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div><div className="product-categories-grid slick-slide slick-active" data-slick-index="3" aria-hidden="false" tabIndex="0" style={{ width: "240px" }}>
                                    <div className="product-img">
                                        <img src="assets/img/category/category-4.png" className="" alt="" />
                                        <div className="cat-info">
                                            <h5 className="cat-name">
                                                Sport Nutrition
                                            </h5>
                                            <Link to="/sports_nutrition" className="cat-link" tabIndex="0">
                                                View All <i className="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div><div className="product-categories-grid slick-slide" data-slick-index="4" aria-hidden="true" tabIndex="-1" style={{ width: "240px" }}>
                                    <div className="product-img">
                                        <img src="assets/img/category/category-5.png" className="" alt="" />
                                        <div className="cat-info">
                                            <h5 className="cat-name">
                                                Covid Masks
                                            </h5>
                                            <Link to="/covidprevention" className="cat-link" tabIndex="-1">
                                                View All <i className="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div><div className="product-categories-grid slick-slide" data-slick-index="5" aria-hidden="true" tabIndex="-1" style={{ width: "240px" }}>
                                    <div className="product-img">
                                        <img src="assets/img/category/category-6.png" className="" alt="" />
                                        <div className="cat-info">
                                            <h5 className="cat-name">
                                                Beauty Serum
                                            </h5>
                                            <Link to="/personalcare" className="cat-link" tabIndex="-1">
                                                View All <i className="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div><div className="product-categories-grid slick-slide" data-slick-index="6" aria-hidden="true" tabIndex="-1" style={{ width: "240px" }}>
                                    <div className="product-img">
                                        <img src="assets/img/category/category-7.png" className="" alt="" />
                                        <div className="cat-info">
                                            <h5 className="cat-name">
                                                Natural Cream
                                            </h5>
                                            <Link to="/category" className="cat-link" tabIndex="-1">
                                                View All <i className="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div><div className="product-categories-grid slick-slide" data-slick-index="7" aria-hidden="true" tabIndex="-1" style={{ width: "240px" }}>
                                    <div className="product-img">
                                        <img src="assets/img/category/category-8.png" className="" alt="" />
                                        <div className="cat-info">
                                            <h5 className="cat-name">
                                                Hand Sanitizer
                                            </h5>
                                            <Link to="/category" className="cat-link" tabIndex="-1">
                                                View All <i className="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div><div className="product-categories-grid slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" tabIndex="-1" style={{ width: "240px" }}>
                                    <div className="product-img">
                                        <img src="assets/img/category/category-1.png" className="" alt="" />
                                        <div className="cat-info">
                                            <h5 className="cat-name">
                                                Tetanus Injection
                                            </h5>
                                            <Link to="/genericmed" className="cat-link" tabIndex="-1">
                                                View All <i className="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div><div className="product-categories-grid slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" tabIndex="-1" style={{ width: "240px" }}>
                                    <div className="product-img">
                                        <img src="assets/img/category/category-2.png" className="" alt="" />
                                        <div className="cat-info">
                                            <h5 className="cat-name">
                                                Darjeeling Teas
                                            </h5>
                                            <Link to="/sports_nutrition" className="cat-link" tabIndex="-1">
                                                View All <i className="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div><div className="product-categories-grid slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" tabIndex="-1" style={{ width: "240px" }}>
                                    <div className="product-img">
                                        <img src="assets/img/category/category-3.png" className="" alt="" />
                                        <div className="cat-info">
                                            <h5 className="cat-name">
                                                Whey Protein
                                            </h5>
                                            <Link to="/sports_nutrition" className="cat-link" tabIndex="-1">
                                                View All <i className="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div><div className="product-categories-grid slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" tabIndex="-1" style={{ width: "240px" }}>
                                    <div className="product-img">
                                        <img src="assets/img/category/category-4.png" className="" alt="" />
                                        <div className="cat-info">
                                            <h5 className="cat-name">
                                                Sport Nutrition
                                            </h5>
                                            <Link to="/sports_nutrition" className="cat-link" tabIndex="-1">
                                                View All <i className="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div><div className="product-categories-grid slick-slide slick-cloned" data-slick-index="12" aria-hidden="true" tabIndex="-1" style={{ width: "240px" }}>
                                    <div className="product-img">
                                        <img src="assets/img/category/category-5.png" className="" alt="" />
                                        <div className="cat-info">
                                            <h5 className="cat-name">
                                                Covid Masks
                                            </h5>
                                            <Link to="/covidprevention" className="cat-link" tabIndex="-1">
                                                View All <i className="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div><div className="product-categories-grid slick-slide slick-cloned" data-slick-index="13" aria-hidden="true" tabIndex="-1" style={{ width: "240px" }}>
                                    <div className="product-img">
                                        <img src="assets/img/category/category-6.png" className="" alt="" />
                                        <div className="cat-info">
                                            <h5 className="cat-name">
                                                Beauty Serum
                                            </h5>
                                            <Link to="/personalcare" className="cat-link" tabIndex="-1">
                                                View All <i className="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div><div className="product-categories-grid slick-slide slick-cloned" data-slick-index="14" aria-hidden="true" tabIndex="-1" style={{ width: "240px" }}>
                                    <div className="product-img">
                                        <img src="assets/img/category/category-7.png" className="" alt="" />
                                        <div className="cat-info">
                                            <h5 className="cat-name">
                                                Natural Cream
                                            </h5>
                                            <Link to="/category" className="cat-link" tabIndex="-1">
                                                View All <i className="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div><div className="product-categories-grid slick-slide slick-cloned" data-slick-index="15" aria-hidden="true" tabIndex="-1" style={{ width: "240px" }}>
                                    <div className="product-img">
                                        <img src="assets/img/category/category-8.png" className="" alt="" />
                                        <div className="cat-info">
                                            <h5 className="cat-name">
                                                Hand Sanitizer
                                            </h5>
                                            <Link to="/category" className="cat-link" tabIndex="-1">
                                                View All <i className="ti-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div></div></div>

                            <button className="slick-next slick-arrow" aria-label="Next" type="button" style={{ display: "block" }}>Next</button></div>
                    </div>
                </div>
                <div className="pt-5">
                    <div className="container-fluid theme-container">
                        <div className="row mb-4">
                            <div className="col">
                                <h5 className="product-heading">Flash deals</h5>
                            </div>
                            <div className="col-auto text-md-right">
                                <Link to="/category" className="btn btn-primary btn-sm product-heading-btn">See All</Link>
                            </div>
                        </div>
                        <div className="slider  arrow-light slider-gap slick-initialized slick-slider" data-slides-to-show="6" data-autoplay="true" data-nav="true" data-dots="false"><button className="slick-prev slick-arrow" aria-label="Previous" type="button" style={{ display: "block" }}>Previous</button>
                            <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: "4980px", transform: "translate3d(-1743px, 0px, 0px)" }}><div className="product slick-slide slick-cloned" data-slick-index="-6" aria-hidden="true" tabIndex="-1" style={{ width: "219px" }}>
                                <Link to="/genericmed" className="product-img" tabIndex="-1">
                                    <img src="assets/img/product/product-2.png" className="" alt="" />
                                </Link>
                                <div className="product-info">
                                    <div className="product-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <div className="review-count">4.5 (2,213)</div>
                                    </div>
                                    <h3>
                                        <Link to="/genericmed" tabIndex="-1"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                    </h3>
                                    <div className="product-value">
                                        <div className="d-flex">
                                            <small className="regular-price">MRP <del>₹250.99</del></small>
                                            <div className="off-price">53% off</div>
                                        </div>
                                        <div className="current-price">₹237.99</div>
                                    </div>
                                </div>
                            </div><div className="product slick-slide slick-cloned" data-slick-index="-5" aria-hidden="true" tabIndex="-1" style={{ width: "219px" }}>
                                    <Link to="/genericmed" className="product-img" tabIndex="-1">
                                        <img src="assets/img/product/product-3.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed" tabIndex="-1"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div><div className="product slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" tabIndex="-1" style={{ width: "219px" }}>
                                    <Link to="/genericmed" className="product-img" tabIndex="-1">
                                        <img src="assets/img/product/product-4.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed" tabIndex="-1"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div><div className="product slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" tabIndex="-1" style={{ width: "219px" }}>
                                    <Link to="/genericmed" className="product-img" tabIndex="-1">
                                        <img src="assets/img/product/product-5.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed" tabIndex="-1"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div><div className="product slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" tabIndex="-1" style={{ width: "219px" }}>
                                    <Link to="/genericmed" className="product-img" tabIndex="-1">
                                        <img src="assets/img/product/product-6.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed" tabIndex="-1"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div><div className="product slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabIndex="-1" style={{ width: "219px" }}>
                                    <Link to="/genericmed" className="product-img" tabIndex="-1">
                                        <img src="assets/img/product/product-7.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed" tabIndex="-1"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div><div className="product slick-slide" data-slick-index="0" aria-hidden="true" tabIndex="-1" style={{ width: "219px" }}>
                                    <Link to="/genericmed" className="product-img" tabIndex="-1">
                                        <img src="assets/img/product/product-1.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed" tabIndex="-1"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div><div className="product slick-slide slick-current slick-active" data-slick-index="1" aria-hidden="false" tabIndex="0" style={{ width: "219px" }}>
                                    <Link to="/genericmed" className="product-img" tabIndex="0">
                                        <img src="assets/img/product/product-2.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed" tabIndex="0"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div><div className="product slick-slide slick-active" data-slick-index="2" aria-hidden="false" tabIndex="0" style={{ width: "219px" }}>
                                    <Link to="/genericmed" className="product-img" tabIndex="0">
                                        <img src="assets/img/product/product-3.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed" tabIndex="0"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div><div className="product slick-slide slick-active" data-slick-index="3" aria-hidden="false" tabIndex="0" style={{ width: "219px" }}>
                                    <Link to="/genericmed" className="product-img" tabIndex="0">
                                        <img src="assets/img/product/product-4.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed" tabIndex="0"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div><div className="product slick-slide slick-active" data-slick-index="4" aria-hidden="false" tabIndex="0" style={{ width: "219px" }}>
                                    <Link to="/genericmed" className="product-img" tabIndex="0">
                                        <img src="assets/img/product/product-5.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed" tabIndex="0"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div><div className="product slick-slide slick-active" data-slick-index="5" aria-hidden="false" tabIndex="0" style={{ width: "219px" }}>
                                    <Link to="/genericmed" className="product-img" tabIndex="0">
                                        <img src="assets/img/product/product-6.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed" tabIndex="0"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div><div className="product slick-slide slick-active" data-slick-index="6" aria-hidden="false" tabIndex="0" style={{ width: "219px" }}>
                                    <Link to="/genericmed" className="product-img" tabIndex="0">
                                        <img src="assets/img/product/product-7.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed" tabIndex="0"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div><div className="product slick-slide slick-cloned" data-slick-index="7" aria-hidden="true" tabIndex="-1" style={{ width: "219px" }}>
                                    <Link to="/genericmed" className="product-img" tabIndex="-1">
                                        <img src="assets/img/product/product-1.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed" tabIndex="-1"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div><div className="product slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" tabIndex="-1" style={{ width: "219px" }}>
                                    <Link to="/genericmed" className="product-img" tabIndex="-1">
                                        <img src="assets/img/product/product-2.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed" tabIndex="-1"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div><div className="product slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" tabIndex="-1" style={{ width: "219px" }}>
                                    <Link to="/genericmed" className="product-img" tabIndex="-1">
                                        <img src="assets/img/product/product-3.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed" tabIndex="-1"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div><div className="product slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" tabIndex="-1" style={{ width: "219px" }}>
                                    <Link to="/genericmed" className="product-img" tabIndex="-1">
                                        <img src="assets/img/product/product-4.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed" tabIndex="-1"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div><div className="product slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" tabIndex="-1" style={{ width: "219px" }}>
                                    <Link to="/genericmed" className="product-img" tabIndex="-1">
                                        <img src="assets/img/product/product-5.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed" tabIndex="-1"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div><div className="product slick-slide slick-cloned" data-slick-index="12" aria-hidden="true" tabIndex="-1" style={{ width: "219px" }}>
                                    <Link to="/genericmed" className="product-img" tabIndex="-1">
                                        <img src="assets/img/product/product-6.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed" tabIndex="-1"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div><div className="product slick-slide slick-cloned" data-slick-index="13" aria-hidden="true" tabIndex="-1" style={{ width: "219px" }}>
                                    <Link to="/genericmed" className="product-img" tabIndex="-1">
                                        <img src="assets/img/product/product-7.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed" tabIndex="-1"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div></div></div>
                            <button className="slick-next slick-arrow" aria-label="Next" type="button" style={{ display: "block" }}>Next</button></div>
                    </div>
                </div>


                <div className="pt-5">
                    <div className="offers-list bg-light py-5 offers-grid-2">
                        <div className="container">
                            <ul>
                                <li>
                                    <div className="offer-image">
                                        <img src="assets/img/offer/offer-1.png" alt="" />
                                    </div>
                                    <div className="offer-info">
                                        <h2 className="offer-title">
                                            True Basics Flat 10% off
                                        </h2>
                                        <p className="offer-subtitle">
                                            Clinically Researched Essentials
                                        </p>
                                        <Link to="/category" className="btn btn-primary btn-sm">Shop now</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="offer-image">
                                        <img src="assets/img/offer/offer-2.png" alt="" />
                                    </div>
                                    <div className="offer-info">
                                        <h2 className="offer-title">
                                            True Basics Flat 10% off
                                        </h2>
                                        <p className="offer-subtitle">
                                            Clinically Researched Essentials
                                        </p>
                                        <Link to="/category" className="btn btn-primary btn-sm">Shop now</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="container-fluid theme-container">
                        <div className="row mb-4">
                            <div className="col">
                                <h5 className="product-heading">Deals of the day</h5>
                            </div>
                            <div className="col-auto text-md-right">
                                <Link to="/category" className="btn btn-primary btn-sm product-heading-btn">See All</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 col-sm-4 col-6">
                                <div className="product">
                                    <Link to="/genericmed" className="product-img">
                                        <img src="assets/img/product/product-1.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 col-6">
                                <div className="product">
                                    <Link to="/genericmed" className="product-img">
                                        <span className="onsale">Sale!</span>
                                        <img src="assets/img/product/product-2.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed">Goodlife Nutrition Immunity Boosting Complex
                                                Capsule</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 col-6">
                                <div className="product">
                                    <Link to="/covidprevention" className="product-img">
                                        <img src="assets/img/product/product-3.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <span>No reating</span>
                                        </div>
                                        <h3>
                                            <Link to="/covidprevention">CoviFind Covid 19 Antigen Self Test Kit</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 col-6">
                                <div className="product">
                                    <Link to="/genericmed" className="product-img">
                                        <img src="assets/img/product/product-4.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <span>No reating</span>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed">Cetaphil Sun Kids Liposomale Lotion SPF 30</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 col-6">
                                <div className="product">
                                    <Link to="/genericmed" className="product-img">
                                        <img src="assets/img/product/product-5.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed">Iodex Ultra Gel</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 col-6">
                                <div className="product">
                                    <Link to="/covidprevention" className="product-img">
                                        <img src="assets/img/product/product-6.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/covidprevention">Abbott Panbio Covid 19 Antigen Self Test Kit</Link>
                                        </h3>
                                        <div className="product-value">
                                            <span className="current-price">₹325.99</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 col-6">
                                <div className="product">
                                    <Link to="/genericmed" className="product-img">
                                        <img src="assets/img/product/product-7.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed"> TruRadix Curcumin Oral Strip Orange Mango</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 col-6">
                                <div className="product">
                                    <Link to="/genericmed" className="product-img">
                                        <span className="onsale">Sale!</span>
                                        <img src="assets/img/product/product-8.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed">Goodlife Nutrition Immunity Boosting Complex
                                                Capsule</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 col-6">
                                <div className="product">
                                    <Link to="/covidprevention" className="product-img">
                                        <img src="assets/img/product/product-9.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <span>No reating</span>
                                        </div>
                                        <h3>
                                            <Link to="/covidprevention">CoviFind Covid 19 Antigen Self Test Kit</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 col-6">
                                <div className="product">
                                    <Link to="/genericmed" className="product-img">
                                        <img src="assets/img/product/product-10.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <span>No reating</span>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed">Cetaphil Sun Kids Liposomale Lotion SPF 30</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 col-6">
                                <div className="product">
                                    <Link to="/genericmed" className="product-img">
                                        <img src="assets/img/product/product-11.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/genericmed">Iodex Ultra Gel</Link>
                                        </h3>
                                        <div className="product-value">
                                            <div className="d-flex">
                                                <small className="regular-price">MRP <del>₹250.99</del></small>
                                                <div className="off-price">53% off</div>
                                            </div>
                                            <div className="current-price">₹237.99</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4 col-6">
                                <div className="product">
                                    <Link to="/genericmed" className="product-img">
                                        <img src="assets/img/product/product-12.png" className="" alt="" />
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="review-count">4.5 (2,213)</div>
                                        </div>
                                        <h3>
                                            <Link to="/covidprevention">Abbott Panbio Covid 19 Antigen Self Test Kit</Link>
                                        </h3>
                                        <div className="product-value">
                                            <span className="current-price">₹325.99</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className="pt-5">
                    <div className="py-5 bg-light">
                        <div className="container-fluid theme-container">
                            <div className="row mb-2">
                                <div className="col">
                                    <h5 className="product-heading">Popular brands</h5>
                                </div>
                                <div className="col-auto text-md-right">
                                    <Link to="/category" className="btn btn-primary btn-sm product-heading-btn">See All</Link>
                                </div>
                            </div>
                            <div className="slider arrow-light slider-gap" data-slides-to-show="8" data-autoplay="true" data-nav="true"
                                data-dots="false">
                                <div className="product-brand">
                                    <Link to="/category" className="product-img">
                                        <img src="assets/img/brand/brand-1.png" className="" alt="" />
                                    </Link>
                                    <Link to="/category" className="product-info">
                                        Summer Essentials
                                    </Link>
                                </div>
                                <div className="product-brand">
                                    <Link to="/category" className="product-img">
                                        <img src="assets/img/brand/brand-2.png" className="" alt="" />
                                    </Link>
                                    <Link to="/category" className="product-info">
                                        Healthcare Devices
                                    </Link>
                                </div>
                                <div className="product-brand">
                                    <Link to="/category" className="product-img">
                                        <img src="assets/img/brand/brand-3.png" className="" alt="" />
                                    </Link>
                                    <Link to="/category" className="product-info">
                                        Summer Essentials
                                    </Link>
                                </div>
                                <div className="product-brand">
                                    <Link to="/category" className="product-img">
                                        <img src="assets/img/brand/brand-4.png" className="" alt="" />
                                    </Link>
                                    <Link to="/category" className="product-info">
                                        Healthcare Devices
                                    </Link>
                                </div>
                                <div className="product-brand">
                                    <Link to="/category" className="product-img">
                                        <img src="assets/img/brand/brand-5.png" className="" alt="" />
                                    </Link>
                                    <Link to="/category" className="product-info">
                                        Summer Essentials
                                    </Link>
                                </div>
                                <div className="product-brand">
                                    <Link to="/category" className="product-img">
                                        <img src="assets/img/brand/brand-6.png" className="" alt="" />
                                    </Link>
                                    <Link to="/category" className="product-info">
                                        Healthcare Devices
                                    </Link>
                                </div>
                                <div className="product-brand">
                                    <Link to="/category" className="product-img">
                                        <img src="assets/img/brand/brand-7.png" className="" alt="" />
                                    </Link>
                                    <Link to="/category" className="product-info">
                                        Healthcare Devices
                                    </Link>
                                </div>
                                <div className="product-brand">
                                    <Link to="/category" className="product-img">
                                        <img src="assets/img/brand/brand-8.png" className="" alt="" />
                                    </Link>
                                    <Link to="/category" className="product-info">
                                        Healthcare Devices
                                    </Link>
                                </div>
                                <div className="product-brand">
                                    <Link to="/category" className="product-img">
                                        <img src="assets/img/brand/brand-9.png" className="" alt="" />
                                    </Link>
                                    <Link to="/category" className="product-info">
                                        Healthcare Devices
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="pt-5">
                    <div className="py-5 bg-light">
                        <div className="container-fluid theme-container">
                            <div className="row mb-2">
                                <div className="col">
                                    <h5 className="product-heading">Popular brands</h5>
                                </div>
                                <div className="col-auto text-md-right">
                                    <Link to="/category" className="btn btn-primary btn-sm product-heading-btn">See All</Link>
                                </div>
                            </div>
                            <div className="slider arrow-light slider-gap slick-initialized slick-slider" data-slides-to-show="8" data-autoplay="true" data-nav="true" data-dots="false"><button className="slick-prev slick-arrow" aria-label="Previous" type="button" style={{ display: "block" }}>Previous</button>
                                <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: "4862px", transform: "translate3d(-2992px, 0px, 0px)" }}><div className="product-brand slick-slide slick-cloned" data-slick-index="-8" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                    <Link to="/category" className="product-img" tabIndex="-1">
                                        <img src="assets/img/brand/brand-2.png" className="" alt="" />
                                    </Link>
                                    <Link to="/category" className="product-info" tabIndex="-1">
                                        Healthcare Devices
                                    </Link>
                                </div><div className="product-brand slick-slide slick-cloned" data-slick-index="-7" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="-1">
                                            <img src="assets/img/brand/brand-3.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Summer Essentials
                                        </Link>
                                    </div><div className="product-brand slick-slide slick-cloned" data-slick-index="-6" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="-1">
                                            <img src="assets/img/brand/brand-4.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-brand slick-slide slick-cloned" data-slick-index="-5" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="-1">
                                            <img src="assets/img/brand/brand-5.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Summer Essentials
                                        </Link>
                                    </div><div className="product-brand slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="-1">
                                            <img src="assets/img/brand/brand-6.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-brand slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="-1">
                                            <img src="assets/img/brand/brand-7.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-brand slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="-1">
                                            <img src="assets/img/brand/brand-8.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-brand slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="-1">
                                            <img src="assets/img/brand/brand-9.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-brand slick-slide" data-slick-index="0" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="-1">
                                            <img src="assets/img/brand/brand-1.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Summer Essentials
                                        </Link>
                                    </div><div className="product-brand slick-slide" data-slick-index="1" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="-1">
                                            <img src="assets/img/brand/brand-2.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-brand slick-slide" data-slick-index="2" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="-1">
                                            <img src="assets/img/brand/brand-3.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Summer Essentials
                                        </Link>
                                    </div><div className="product-brand slick-slide" data-slick-index="3" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="-1">
                                            <img src="assets/img/brand/brand-4.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-brand slick-slide" data-slick-index="4" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="-1">
                                            <img src="assets/img/brand/brand-5.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Summer Essentials
                                        </Link>
                                    </div><div className="product-brand slick-slide" data-slick-index="5" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="-1">
                                            <img src="assets/img/brand/brand-6.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-brand slick-slide" data-slick-index="6" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="-1">
                                            <img src="assets/img/brand/brand-7.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-brand slick-slide" data-slick-index="7" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="-1">
                                            <img src="assets/img/brand/brand-8.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-brand slick-slide slick-current slick-active" data-slick-index="8" aria-hidden="false" tabIndex="0" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="0">
                                            <img src="assets/img/brand/brand-9.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="0">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-brand slick-slide slick-cloned slick-active" data-slick-index="9" aria-hidden="false" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="0">
                                            <img src="assets/img/brand/brand-1.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="0">
                                            Summer Essentials
                                        </Link>
                                    </div><div className="product-brand slick-slide slick-cloned slick-active" data-slick-index="10" aria-hidden="false" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="0">
                                            <img src="assets/img/brand/brand-2.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="0">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-brand slick-slide slick-cloned slick-active" data-slick-index="11" aria-hidden="false" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="0">
                                            <img src="assets/img/brand/brand-3.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="0">
                                            Summer Essentials
                                        </Link>
                                    </div><div className="product-brand slick-slide slick-cloned slick-active" data-slick-index="12" aria-hidden="false" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="0">
                                            <img src="assets/img/brand/brand-4.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="0">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-brand slick-slide slick-cloned slick-active" data-slick-index="13" aria-hidden="false" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="0">
                                            <img src="assets/img/brand/brand-5.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="0">
                                            Summer Essentials
                                        </Link>
                                    </div><div className="product-brand slick-slide slick-cloned slick-active" data-slick-index="14" aria-hidden="false" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="0">
                                            <img src="assets/img/brand/brand-6.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="0">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-brand slick-slide slick-cloned slick-active" data-slick-index="15" aria-hidden="false" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="0">
                                            <img src="assets/img/brand/brand-7.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="0">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-brand slick-slide slick-cloned" data-slick-index="16" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="-1">
                                            <img src="assets/img/brand/brand-8.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-brand slick-slide slick-cloned" data-slick-index="17" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img" tabIndex="-1">
                                            <img src="assets/img/brand/brand-9.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div></div></div>
                                <button className="slick-next slick-arrow" aria-label="Next" type="button" style={{ display: "block" }}>Next</button></div>
                        </div>
                    </div>
                </div>
                <div className="pt-5">
                    <div className="py-5 bg-light">
                        <div className="container-fluid theme-container">
                            <div className="row mb-2">
                                <div className="col">
                                    <h5 className="product-heading">Popular Category</h5>
                                </div>
                                <div className="col-auto text-md-right">
                                    <Link to="/category" className="btn btn-primary btn-sm product-heading-btn">See All</Link>
                                </div>
                            </div>
                            <div className="slider  arrow-light slider-gap slick-initialized slick-slider" data-slides-to-show="8" data-autoplay="true" data-nav="true" data-dots="false"><button className="slick-prev slick-arrow" aria-label="Previous" type="button" style={{ display: "block" }}>Previous</button>
                                <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: "4862px", transform: "translate3d(-3179px, 0px, 0px)", transition: "transform 500ms ease 0s" }}><div className="product-categories slick-slide slick-cloned" data-slick-index="-8" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                    <Link to="/category" className="product-img bg-white" tabIndex="-1">
                                        <img src="assets/img/category/category-2.png" className="" alt="" />
                                    </Link>
                                    <Link to="/category" className="product-info" tabIndex="-1">
                                        Healthcare Devices
                                    </Link>
                                </div><div className="product-categories slick-slide slick-cloned" data-slick-index="-7" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="-1">
                                            <img src="assets/img/category/category-3.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Summer Essentials
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-cloned" data-slick-index="-6" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="-1">
                                            <img src="assets/img/category/category-4.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-cloned" data-slick-index="-5" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="-1">
                                            <img src="assets/img/category/category-5.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Summer Essentials
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="-1">
                                            <img src="assets/img/category/category-6.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="-1">
                                            <img src="assets/img/category/category-7.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="-1">
                                            <img src="assets/img/category/category-1.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="-1">
                                            <img src="assets/img/category/category-2.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="-1">
                                            <img src="assets/img/category/category-1.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Summer Essentials
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-active" data-slick-index="1" aria-hidden="false" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="-1">
                                            <img src="assets/img/category/category-2.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-active" data-slick-index="2" aria-hidden="false" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="-1">
                                            <img src="assets/img/category/category-3.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Summer Essentials
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-active" data-slick-index="3" aria-hidden="false" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="-1">
                                            <img src="assets/img/category/category-4.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-active" data-slick-index="4" aria-hidden="false" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="-1">
                                            <img src="assets/img/category/category-5.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Summer Essentials
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-active" data-slick-index="5" aria-hidden="false" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="-1">
                                            <img src="assets/img/category/category-6.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-active" data-slick-index="6" aria-hidden="false" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="-1">
                                            <img src="assets/img/category/category-7.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-active" data-slick-index="7" aria-hidden="false" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="-1">
                                            <img src="assets/img/category/category-1.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-categories slick-slide" data-slick-index="8" aria-hidden="true" tabIndex="0" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="0">
                                            <img src="assets/img/category/category-2.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="0">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="0">
                                            <img src="assets/img/category/category-1.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="0">
                                            Summer Essentials
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="0">
                                            <img src="assets/img/category/category-2.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="0">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="0">
                                            <img src="assets/img/category/category-3.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="0">
                                            Summer Essentials
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-cloned" data-slick-index="12" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="0">
                                            <img src="assets/img/category/category-4.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="0">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-cloned" data-slick-index="13" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="0">
                                            <img src="assets/img/category/category-5.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="0">
                                            Summer Essentials
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-cloned" data-slick-index="14" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="0">
                                            <img src="assets/img/category/category-6.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="0">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-cloned" data-slick-index="15" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="0">
                                            <img src="assets/img/category/category-7.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="0">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-cloned" data-slick-index="16" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="-1">
                                            <img src="assets/img/category/category-1.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div><div className="product-categories slick-slide slick-cloned" data-slick-index="17" aria-hidden="true" tabIndex="-1" style={{ width: "157px" }}>
                                        <Link to="/category" className="product-img bg-white" tabIndex="-1">
                                            <img src="assets/img/category/category-2.png" className="" alt="" />
                                        </Link>
                                        <Link to="/category" className="product-info" tabIndex="-1">
                                            Healthcare Devices
                                        </Link>
                                    </div></div></div>








                                <button className="slick-next slick-arrow" aria-label="Next" type="button" style={{ display: "block" }}>Next</button></div>
                        </div>
                    </div>
                </div>
            </body>
            <footer className="footer">
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
                            <div className="col-xl-3 col-md-6 col-lg-3">
                                {/* <div className="footer_widget">
                                                <h3 className="footer_title">
                                                    Address
                                                </h3>
                                                <p>
                                                    200, D-block, Green lane USA <br>
                                                        +10 367 467 8934 <br>
                                                            <Link to="https://preview.colorlib.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ee8a818d838b8aae8d81809a8f8d9ac08d8183">[email&#160;protected]</Link>
                                                        </p>
                                                    </div>
                                            </div> */}
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

export default CartHomePage