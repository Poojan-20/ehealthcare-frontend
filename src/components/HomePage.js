import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from 'react-router-dom';
import { db } from "../firebase.mjs";
function HomePage() {

    const { currentUser } = useAuth();
    const [patient, setPatient] = useState(null)
    const [doctor, setDoctor] = useState(null)
    const [user, setUser] = useState(null)
    const [lab, setLab] = useState(null)


    useEffect(() => {
        if (currentUser) {
            db.collection("patients")
                .where("uid", "==", currentUser.uid)
                .get()
                .then((querySnapshot) => {
                    if (!querySnapshot.empty) {
                        setPatient(querySnapshot.docs[0].data());
                    } else {
                        // Check if data exists in doctors collection
                        db.collection("doctors")
                            .where("uid", "==", currentUser.uid)
                            .get()
                            .then((querySnapshot) => {
                                if (!querySnapshot.empty) {
                                    setDoctor(querySnapshot.docs[0].data());
                                } else {
                                    db.collection("shopUsers")
                                        .where("uid", "==", currentUser.uid)
                                        .get()
                                        .then((querySnapshot) => {
                                            if (!querySnapshot.empty) {
                                                setUser(querySnapshot.docs[0].data());
                                            } else {

                                                db.collection("LabTester")
                                                    .where("uid", "==", currentUser.uid)
                                                    .get()
                                                    .then((querySnapshot) => {
                                                        if (!querySnapshot.empty) {
                                                            setLab(querySnapshot.docs[0].data());
                                                        } else {
                                                            console.log("No data found for UID: " + currentUser.uid);
                                                        }
                                                    })
                                            }
                                        })
                                }
                            })
                    }
                })
        }
    }, []);
    return (
        <body>
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
                                            {
                                                !currentUser ? (
                                                    <ul id="navigation">
                                                        <li><Link className="active" to="/">Home</Link></li>
                                                        <li><Link to="/doctor_login">Doctor</Link></li>
                                                        <li><Link to="/patient_login">Patient</Link></li>
                                                        <li><Link to="/labhome">Lab testing</Link></li>
                                                        <li><Link to="/shopping">Shopping</Link></li>
                                                    </ul>
                                                ) : (
                                                    <ul id="navigation">
                                                        <li><Link className="active" to="/">Home</Link></li>
                                                        {
                                                            !doctor ? (
                                                                <li><Link className="active" to="/doctor_login">Doctor</Link></li>
                                                            ) : (
                                                                <li><Link className="active" to="/doctorprofile">Doctor</Link></li>
                                                            )
                                                        }
                                                        {
                                                            !patient ? (
                                                                <li><Link className="active" to="/patient_login">Patient</Link></li>
                                                            ) : (
                                                                <li><Link className="active" to="/patientprofile">Patient</Link></li>
                                                            )
                                                        }

                                                        {/* <li onClick={handlePatient}><Link to="/patient_login" >Patient</Link></li> */}

                                                        <li ><Link to="/labhome">Lab testing</Link></li>
                                                        <li><Link to="/shopping">Shopping</Link></li>
                                                    </ul>
                                                )
                                            }
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
                    <div className="single_slider  d-flex align-items-center slider_bg_2">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="slider_text ">
                                        <h3> <span>Health care</span>
                                            For Whole Family </h3>
                                        <p>In healthcare sector, service excellence is the facility of the hospital as
                                            healthcare service provider to consistently.</p>
                                        <Link to="/about" className="boxed-btn3">Check Our Services</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service_area">
                <div className="container p-0">
                    <div className="row no-gutters">
                        <div className="col-xl-4 col-md-4">
                            <div className="single_service">
                                <div className="icon"><i className="fas fa-heartbeat"></i>
                                </div>
                                <h3>Hospitality</h3>
                                <p>Clinical excellence must be the priority for any health care service provider.</p>
                                <Link to="#" className="boxed-btn3-white">Apply For a Bed</Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="single_service">
                                <div className="icon"><i className="fas fa-ambulance"></i>
                                </div>
                                <h3>Emergency Care</h3>
                                <p>Clinical excellence must be the priority for any health care service provider.</p>
                                <Link to="#" className="boxed-btn3-white">+10 672 356 3567</Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="single_service">
                                <div className="icon"><i className="fas fa-first-aid"></i>
                                </div>
                                <h3>Chamber Service</h3>
                                <p>Clinical excellence must be the priority for any health care service provider.</p>
                                <Link to="#" className="boxed-btn3-white">Make an Appointment</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="welcome_docmed_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="welcome_thumb">
                                <div className="thumb_1">
                                    <img src={"../assets/img/x1gmBngJH7.png"} alt="" />
                                </div>
                                <div className="thumb_2">
                                    <img src={"../assets/img/x2jYbHUnUZMB.png"} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="welcome_docmed_info">
                                <h2>Welcome to Medjestic</h2>
                                <h3>Best Care For Your
                                    Good Health</h3>
                                <p>Esteem spirit temper too say adieus who direct esteem.
                                    It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
                                <ul>
                                    <li> <i className="flaticon-right"></i> Apartments frequently or motionless. </li>
                                    <li> <i className="flaticon-right"></i> Duis aute irure dolor in reprehenderit in voluptate.</li>
                                    <li> <i className="flaticon-right"></i> Voluptatem quia voluptas sit aspernatur. </li>
                                </ul>
                                <Link to="#" className="boxed-btn3-white-2">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="our_department_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section_title text-center mb-55">
                                <h3>Our Departments</h3>
                                <p>Esteem spirit temper too say adieus who direct esteem.
                                    It esteems luckily or picture placing drawing. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="single_department">
                                <div className="department_thumb">
                                    <img src={"../assets/img/x1KPirB5lS.png"} alt="" />
                                </div>
                                <div className="department_content">
                                    <h3><Link to="#">Eye Care</Link></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                    <Link to="/eye" className="learn_more">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="single_department">
                                <div className="department_thumb">
                                    <img src={"../assets/img/x2aiyYKGSIQs.png"} alt="" />
                                </div>
                                <div className="department_content">
                                    <h3><Link to="#">Physical Therapy</Link></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                    <Link to="/physician" className="learn_more">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="single_department">
                                <div className="department_thumb">
                                    <img src={"../assets/img/x3yrg3v2UY2Z.png"} alt="" />
                                </div>
                                <div className="department_content">
                                    <h3><Link to="#">Dental Care</Link></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                    <Link to="/dental" className="learn_more">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="single_department">
                                <div className="department_thumb">
                                    <img src={"../assets/img/x4Is68eRQj.png"} alt="" />
                                </div>
                                <div className="department_content">
                                    <h3><Link to="#">Orthopedic</Link></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                    <Link to="/orthopedic" className="learn_more">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="single_department">
                                <div className="department_thumb">
                                    <img src={"../assets/img/x5D9RxHzWrnm.png"} alt="" />
                                </div>
                                <div className="department_content">
                                    <h3><Link to="#">Skin Surgery</Link></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                    <Link to="/skin" className="learn_more">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="single_department">
                                <div className="department_thumb">
                                    <img src={"../assets/img/x6I2P02PF2-s.png"} alt="" />
                                </div>
                                <div className="department_content">
                                    <h3><Link to="/surgery">Surgery Service</Link></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                    <Link to="/surgery" className="learn_more">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="testmonial_area">
                <div className="testmonial_active owl-carousel">
                    <div className="single-testmonial testmonial_bg_1 overlay2">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-10 offset-xl-1">
                                    <div className="testmonial_info text-center">
                                        <div className="quote">
                                            <i className="flaticon-straight-quotes"></i>
                                        </div>
                                        <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br />
                                            sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.
                                            <br />
                                            Fusce ac mattis nulla. Morbi eget ornare dui. </p>
                                        <div className="testmonial_author">
                                            <h4>Asana Korim</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-testmonial testmonial_bg_2 overlay2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <div className="testmonial_info text-center">
                                <div className="quote">
                                    <i className="flaticon-straight-quotes"></i>
                                </div>
                                <div className="testmonial_author">
                                    <h4>Asana Korim</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="business_expert_area">
                <div className="business_tabs_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <ul className="nav" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <Link className="nav-link active" id="home-tab" data-toggle="tab" to="#home" role="tab" aria-controls="home" aria-selected="true">Excellent Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" id="profile-tab" data-toggle="tab" to="#profile" role="tab" aria-controls="profile" aria-selected="false">Qualified Doctors</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" id="contact-tab" data-toggle="tab" to="/contact" role="tab" aria-controls="contact" aria-selected="false">Emergency Departments</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="border_bottom">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-md-6">
                                        <div className="business_info">
                                            <div className="icon"><i className="fas fa-first-aid"></i>
                                            </div>
                                            <h3>Leading edge care for Your family</h3>
                                            <p>Esteem spirit temper too say adieus who direct esteem.
                                                It esteems luckily picture placing drawing. Apartments frequently or motionless on
                                                reasonable projecting expression.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                        <div className="business_thumb">
                                            <img src="../assets/img/xbusiness.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-md-6">
                                        <div className="business_info">
                                            <div className="icon">
                                                <i className="flaticon-first-aid-kit"></i>
                                            </div>
                                            <h3>Leading edge care for Your family</h3>
                                            <p>Esteem spirit temper too say adieus who direct esteem.
                                                It esteems luckily picture placing drawing. Apartments frequently or motionless on
                                                reasonable projecting expression.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                        <div className="business_thumb">
                                            <img src="../assets/img/xbusiness.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-md-6">
                                        <div className="business_info">
                                            <div className="icon">
                                                <i className="flaticon-first-aid-kit"></i>
                                            </div>
                                            <h3>Leading edge care for Your family</h3>
                                            <p>Esteem spirit temper too say adieus who direct esteem.
                                                It esteems luckily picture placing drawing. Apartments frequently or motionless on
                                                reasonable projecting expression.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                        <div className="business_thumb">
                                            <img src="../assets/img/xbusiness.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="Emergency_contact">
                <div className="conatiner-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-xl-6">
                            <div className="single_emergency d-flex align-items-center justify-content-center emergency_bg_1 overlay_skyblue">
                                <div className="info">
                                    <h3>For Any Emergency Contact</h3>
                                    <p>Esteem spirit temper too say adieus.</p>
                                </div>
                                <div className="info_button">
                                    <Link to="#" className="boxed-btn3-white">+10 378 4673 467</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="single_emergency d-flex align-items-center justify-content-center emergency_bg_2 overlay_skyblue">
                                <div className="info">
                                    <h3>Make an Online Appointment</h3>
                                    <p>Esteem spirit temper too say adieus.</p>
                                </div>
                                <div className="info_button">
                                    <Link to="#" className="boxed-btn3-white">Make an Appointment</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


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
                                        <li><Link to="#">Blog</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/contact"> Contact</Link></li>
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
        </body>

    )
}

export default HomePage