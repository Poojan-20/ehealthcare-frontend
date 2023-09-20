import { React, useEffect, useState } from 'react'
import CartNavbar from './CartNavbar'
import { Link } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase.mjs";
import { Description } from '@mui/icons-material';

const GenericMedicine = () => {
    const [products, setproducts] = useState([]);
    const [documentID, setDocumentID] = useState(null);
    useEffect(() => {
        db.collection("Product").onSnapshot((snapshot) => {
            setproducts(snapshot.docs.map((doc) => doc.data()));
            console.log(products)
        });
    }, []);
    useEffect(() => {
        const unsubscribe = db.collection('Product').onSnapshot(
            (snapshot) => {
                if (snapshot.size) {
                    const documentID = snapshot.docs[0].id;
                    setDocumentID(documentID);
                    console.log(documentID)
                } else {
                    console.log('No documents found');
                }
            },
            (error) => {
                console.error('Error fetching documents: ', error);
            }
        );

        return () => unsubscribe();
    }, []);
    const handleProductClick = async (Title) => {
        // Construct a Firestore query to find the product document with the given title and description
        const q = query(collection(db, "Product"), where("Title", "==", Title));

        try {
            // Fetch the product documents that match the query
            const querySnapshot = await getDocs(q);
            // Extract the document ID from the first document in the query result
            const documentID = querySnapshot.docs[0].id;
            // Navigate to the product details page with the product ID as a URL parameter
            window.location.href = `/product-details/${documentID}`;
            setDocumentID(documentID)
            console.log('handle', documentID)
        } catch (error) {
            console.error("Error fetching product document ID:", error);
        }
    };
    return (
        <>
            <CartNavbar />
            <main>
                <section className="pt-md-7">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-8 order-md-2">

                                <div className="row">
                                    {products.map((product) => {
                                        if (product.category === "4")
                                            return (
                                                <div className="col-md-4 col-sm-6 col-12">
                                                    <div className="product">
                                                        <Link to="/product-details" className="product-img">
                                                            <img src={`${product.images}`} onClick={() => handleProductClick(product.Title)}className="" alt="" />
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
                                                                <Link to="#" onClick={() => handleProductClick(product.Title)}> {product.Title}</Link>
                                                                <span style={{ display: "none" }} ><Description id={product.Title} /></span>
                                                            </h3>
                                                            <div className="product-value">
                                                                <div className="d-flex">
                                                                    <span><strong>MRP</strong> {product.Price}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                    })}
                                </div>
                            </div>
                            <div className="col-md-3 order-md-1">
                                <div className="sidebar-wrapper mt-5 mt-md-0">
                                    <div className="sidebar-widget widget_categories">
                                        <h6 className="widget-title">Brands</h6>
                                        <ul className="widget-list widget-filter-list list-unstyled pt-1" style={{ maxHeight: "11rem" }} data-simplebar="init" data-simplebar-auto-hide="false"><div className="simplebar-wrapper" style={{ margin: "-4px -16px 0px 0px" }}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer"></div></div><div className="simplebar-mask"><div className="simplebar-offset" style={{ right: "0px", bottom: "0px" }}><div className="simplebar-content-wrapper" style={{ height: "auto", overflow: "hidden scroll" }}><div className="simplebar-content" style={{ padding: "4px 16px 0px 0px" }}>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="brand-1" />
                                                    <label className="form-check-label widget-filter-item-text" htmlFor="brand-1">Brand
                                                        one</label>
                                                </div><span className="fs-xs text-muted">425</span>
                                            </li>

                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="Belleaeis" />
                                                    <label className="form-check-label widget-filter-item-text" htmlFor="Belleaeis">Belleaeis
                                                    </label>
                                                </div><span className="fs-xs text-muted">103</span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="bilabong" />
                                                    <label className="form-check-label widget-filter-item-text" htmlFor="bilabong">Bilabong</label>
                                                </div><span className="fs-xs text-muted">27</span>
                                            </li>

                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="converse" />
                                                    <label className="form-check-label widget-filter-item-text" htmlFor="converse">Converse</label>
                                                </div><span className="fs-xs text-muted">176</span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="dockers" />
                                                    <label className="form-check-label widget-filter-item-text" htmlFor="dockers">Dockers</label>
                                                </div><span className="fs-xs text-muted">54</span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="fruit" />
                                                    <label className="form-check-label widget-filter-item-text" htmlFor="fruit">Fruit of
                                                        the Loom</label>
                                                </div><span className="fs-xs text-muted">739</span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="hanes" />
                                                    <label className="form-check-label widget-filter-item-text" htmlFor="hanes">Hanes</label>
                                                </div><span className="fs-xs text-muted">92</span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="choo" />
                                                    <label className="form-check-label widget-filter-item-text" htmlFor="choo">Jimmy
                                                        Choo</label>
                                                </div><span className="fs-xs text-muted">17</span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="levis" />
                                                    <label className="form-check-label widget-filter-item-text" htmlFor="levis">Levi's</label>
                                                </div><span className="fs-xs text-muted">361</span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="lee" />
                                                    <label className="form-check-label widget-filter-item-text" htmlFor="lee">Lee</label>
                                                </div><span className="fs-xs text-muted">264</span>
                                            </li>

                                        </div></div></div></div><div className="simplebar-placeholder" style={{ width: "auto", height: "499px" }}></div></div><div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}><div className="simplebar-scrollbar simplebar-visible" style={{ width: "0px", display: "none" }}></div></div><div className="simplebar-track simplebar-vertical" style={{ visibility: "visbile" }}><div className="simplebar-scrollbar simplebar-visible" style={{ height: "62px", display: "block", transform: "translate3d(0px, 0px, 0px)" }}></div></div></ul>
                                    </div>
                                </div>

                                <div className="sidebar-wrapper mt-5 mt-md-0">
                                    <div className="sidebar-widget widget_categories">
                                        <h6 className="widget-title">DISCOUNT</h6>
                                        <ul className="widget-list widget-filter-list list-unstyled pt-1" style={{ maxHeight: "11rem" }} data-simplebar="init" data-simplebar-auto-hide="false"><div className="simplebar-wrapper" style={{ margin: "-4px -16px 0px 0px" }}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer"></div></div><div className="simplebar-mask"><div className="simplebar-offset" style={{ right: "0px", bottom: "0px" }}><div className="simplebar-content-wrapper" style={{ height: "auto", overflow: "hidden scroll" }}><div className="simplebar-content" style={{ padding: "4px 16px 0px 0px" }}>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="brand-13" />
                                                    <label className="form-check-label widget-filter-item-text" htmlFor="brand-13">
                                                        Less than 10%</label>
                                                </div><span className="fs-xs text-muted">425</span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="brand-23" />
                                                    <label className="form-check-label widget-filter-item-text" htmlFor="brand-23">
                                                        10% and above</label>
                                                </div><span className="fs-xs text-muted">15</span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="Brandina3" />
                                                    <label className="form-check-label widget-filter-item-text" htmlFor="Brandina3">
                                                        20% and above</label>
                                                </div><span className="fs-xs text-muted">18</span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="Belleaeis3" />
                                                    <label className="form-check-label widget-filter-item-text" htmlFor="Belleaeis3">30%
                                                        and above
                                                    </label>
                                                </div><span className="fs-xs text-muted">103</span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="bilabong3" />
                                                    <label className="form-check-label widget-filter-item-text" htmlFor="bilabong3">40%
                                                        and above</label>
                                                </div><span className="fs-xs text-muted">27</span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="birkenstock3" />
                                                    <label className="form-check-label widget-filter-item-text" htmlFor="birkenstock3">50% and above</label>
                                                </div><span className="fs-xs text-muted">10</span>
                                            </li>
                                            <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="klein3" />
                                                    <label className="form-check-label widget-filter-item-text" htmlFor="klein3">
                                                        60% and above</label>
                                                </div><span className="fs-xs text-muted">365</span>
                                            </li>
                                        </div></div></div></div><div className="simplebar-placeholder" style={{ width: "auto", height: "205px" }}></div></div><div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}><div className="simplebar-scrollbar simplebar-visible" style={{ width: "0px", display: "none" }}></div></div><div className="simplebar-track simplebar-vertical" style={{ visibility: "visbile" }}><div className="simplebar-scrollbar simplebar-visible" style={{ height: "151px", transform: "translate3d(0px, 0px, 0px)", display: "block" }}></div></div></ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default GenericMedicine