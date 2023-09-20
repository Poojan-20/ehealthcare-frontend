import React, { useEffect, useState } from 'react'
import CartNavbar from './CartNavbar';
import { Link, useParams } from 'react-router-dom';
import { db } from "../firebase.mjs";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";



const Description = () => {
    // const data2 = useContext(CartContext)
    // console.log(data2)
    const { currentUser } = useAuth();
    // const { dispatch } = useContext(CartContext);
    const { id } = useParams();
    const [Product, setProduct] = useState(null);
    const [products, setproducts] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            // Construct a Firestore reference to the product document with the given ID
            const productRef = doc(db, "Product", id);

            try {
                // Fetch the product document from Firestore
                const productDoc = await getDoc(productRef);
                // Extract the product data from the document
                const productData = productDoc.data();
                // Update the state with the product data
                setProduct(productData);
                console.log(Product)
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        fetchProduct();
        // console.log(Product)

    }, [id]);
    useEffect(() => {
        db.collection("Product").onSnapshot((snapshot) => {
            setproducts(snapshot.docs.map((doc) => doc.data()));
            // console.log(products)
        });
    }, []);

    if (!Product) {
        return <div>Loading...</div>;
    }
    let Productt;
    const addtocart = (product) => {
        if (currentUser.uid !== null) {
            Productt = product;
            Productt['qty'] = 1;
            Productt['TotalPrice'] = Productt.qty * Productt.Price
            db.collection('Cart ' + currentUser.uid).doc(product.uid).set(Productt)
        } else {
            console.log("login")
        }

    }
    const handleAddtoCart = () => {
        addtocart(Product)
    }
    return (
        <>
            <CartNavbar />
            <section className="section-padding mt-4">
                <div className="container-fluid">

                    <div className="row justify-content-between">
                        <div className="col-lg-4">
                            <div >
                                <img style={{ width: "500px" , margin:"auto" , height: "375px"}} src={`${Product.images}`} />
                            </div>
                        </div>
                        <div className="col-lg-8 mt-4">
                            <div className="row pl-lg-3">
                                <div className="col-lg-7">
                                    <div className="single-product-content-description">
                                        <p className="single-info">Brands <Link to="category.html">Title</Link> </p>
                                        <h4 className="product-title">{Product.Title}</h4>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <span className="review-count ml-3">4.5 (2,213)</span>
                                        </div>
                                        <p className="single-grid-product__price"><span className="discounted-price">₹{Product.Price}</span> <span className="main-price discounted">₹1699</span></p>

                                        <div className="single-info">
                                            <span className="d-block text-muted mb-2"><strong>SKU :</strong> MB5415</span>
                                            <span className="d-block text-muted mb-2"><strong>Category :</strong></span>
                                            {Product.quantity <= 10 ? (
                                                <div>
                                                    <br />
                                                    {/* <span className="d-block text-muted mb-2"><strong>Availability : In stock</strong></span> */}
                                                    Availability:
                                                    <span className=" mb-2"
                                                        style={{ color: "red" }}>Hurry! Only Few Left
                                                    </span>
                                                    <br />
                                                    Quantity:
                                                    <span className=" mb-2"
                                                        style={{ color: "red" }}> {Product.quantity}
                                                    </span>

                                                </div>
                                            ) : (
                                                <div>

                                                    <span className=" mb-2">
                                                        Availablitiy : In Stock
                                                    </span>
                                                </div>
                                            )}



                                        </div>

                                        <div className="product-actions my-4 justify-content-between">

                                            <div className="qty-input btn">
                                                <i className="less">-</i>
                                                <input type="text" value="1" />
                                                <i className="more">+</i>
                                            </div>
                                            {products.map((product) => {
                                                if (product.uid === id) {
                                                    return (
                                                        <div className="product-buttons ml-0 ml-md-3 mt-4 mt-md-0 text-md-left text-center">
                                                            <Link className="btn btn-rounded btn-soft-primary mr-2" to="/wishlist"> <i className="fa fa-heart"></i> Wishlist</Link>
                                                            <Link className="btn btn-rounded btn-primary" to="/cart" onClick={handleAddtoCart}> <i className="fa fa-shopping-cart" ></i> Add To Cart</Link>
                                                        </div>

                                                    )


                                                }
                                            })}
                                        </div>
                                        {
                                            products.map((product) => {
                                                if (product.uid === id) {
                                                    return (
                                                        <div className="mb-4"><Link to="/cart"  onClick={handleAddtoCart} className="btn btn-block btn-primary btn-pill transition-3d-hover">Buy Now</Link></div>

                                                    )


                                                }
                                            })}

                                    </div>
                                </div>
                                <div className="col-lg-5 mt-4 mt-lg-0">
                                    <div className="bg-light p-3">
                                        <h6>Delivery Options</h6>
                                        <div className="media align-items-center">
                                            <span className="mr-2">
                                                <i className="ti-check text-primary small"></i>
                                            </span>
                                            <div className="media-body text-body small">
                                                <span className="font-weight-bold mr-1">Free Shipping</span>
                                            </div>
                                        </div>
                                        <div className="media align-items-center">
                                            <span className="mr-2">
                                                <i className="ti-check text-primary small"></i>
                                            </span>
                                            <div className="media-body text-body small">
                                                <span className="font-weight-bold mr-1"> Cash on Delivery Available</span>
                                            </div>
                                        </div>
                                        <div className="media align-items-center">
                                            <span className="mr-2">
                                                <i className="ti-check text-primary small"></i>
                                            </span>
                                            <div className="media-body text-body small">
                                                <span className="font-weight-bold mr-1"> 14 days Return</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h6 className="font-weight-bold text-dark">Share on</h6>
                                        <div className="social-links social-links-dark">
                                            <Link to="#">
                                                <i className="fa fa-facebook"></i>
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-twitter"></i>
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-google-plus"></i>
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-youtube"></i>
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-dribbble"></i>
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-behance"></i>
                                            </Link>

                                        </div>
                                    </div>
                                    <div className="form-group mt-5">
                                        <h6 className="font-weight-bold text-dark">Delivery availability</h6>
                                        <div className="input-group">
                                            <input type="text" className="form-control custom-location" placeholder="Delivery Pincode" />
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-primary text-white cursor-pointer">
                                                    Check
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-full-description">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="entry-product-section-heading">Description</h3>
                                <p>{Product.Description}</p>

                                <h3 className="entry-product-section-heading">Additional information</h3>
                                <div className="product-info-sec">
                                    <table className="table table-bordered table-striped">
                                        <tbody>
                                            <tr>
                                                <td>Number of Servings</td>
                                                <td>33</td>
                                            </tr>
                                            <tr>
                                                <td>Serving Size</td>
                                                <td>30 g</td>
                                            </tr>
                                            <tr>
                                                <td>Protein per Serving</td>
                                                <td>12 g</td>
                                            </tr>
                                            <tr>
                                                <td>Vegetarian/Non-Vegetarian</td>
                                                <td>Vegetarian</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <h2 className="entry-product-section-heading"> Reviews </h2>
                                <div className="row justify-content-between">
                                    <div className="col-lg-5">
                                        <div className="review_content">
                                            <div className="mb-1">
                                                <div className="rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <span className="review-count ml-3">4.5 (2,213)</span>
                                                </div>
                                                <em>Published 54 minutes ago</em>
                                            </div>
                                            <h4>"Commpletely satisfied"</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
                                                autem, distinctio hic omnis molestiae, perspiciatis deserunt labore nisi
                                                exercitationem non laudantium </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="review_content">
                                            <div className="mb-1">
                                                <div className="rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <span className="review-count ml-3">4.5 (2,213)</span>
                                                </div>
                                                <em>Published 1 day ago</em>
                                            </div>
                                            <h4>"Always the best"</h4>
                                            <p>dolor reiciendis repellat accusantium exercitationem placeat consequatur,
                                                labore laboriosam perferendis in inventore magnam excepturi.</p>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-right"><Link to="leave-review.html" className="btn btn-primary">Leave a
                                    review</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            
        </>
    )
}

export default Description