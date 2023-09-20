import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { db } from "../firebase.mjs";
import './css/bootstrap.min.css';
import './css/components.min.css';
import './css/medwise-icons.css';
import './css/style.min.css';
import './css/vendors.min.css';
import './css/ionicons.css';

const LabPackages = () => {
    const [labpackage, setLabPackage] = useState([]);

    useEffect(() => {
        db.collection("LabTestPackage").onSnapshot((snapshot) => {
            setLabPackage(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    return (
        <>
        <div style={{  overflowY: "auto"}}>
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
            <div className="container mt-40 mb-40">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="heading-block">
                            <h3 className="heading font-bold">Popular Test Procedures</h3>
                            <p className="sub-heading">There live the blind texts separated they right at the coast of the Semantics.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-20">
                    {labpackage.map((pack) => {
                        return (
                            <div className="col-lg-3">
                                <div className="department-box-5">
                                    <div className="head">
                                        <h4 className="heading font-5 font-bold mb-0">{pack.TestName}</h4>
                                    </div>
                                    <div className="body">
                                        <p className="mb-20 font-2 text-muted">{pack.ShortDes}</p>
                                        <h6 className="heading font-bold">Includes:</h6>
                                        <ul className="list-styled mb-0">
                                            <li><i className="ion-checkmark-outline list-icon"></i>Blood glucose</li>
                                            <li><i className="ion-checkmark-outline list-icon"></i>Liver functioning</li>
                                            <li><i className="ion-checkmark-outline list-icon"></i>Heart health</li>
                                        </ul>
                                        <div className="price mt-20">
                                            <ins className="new-price">Rs. {pack.Price}</ins>
                                            <span className="badge badge-primary">22% Off</span>
                                        </div>

                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <Link to={`/labselect/${pack.packid} `}className="btn btn-outline-secondary">Book
                                            <i className="ion-arrow-forward-sharp icon-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            </div>
        </>
    )
}

export default LabPackages