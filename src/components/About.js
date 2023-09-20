import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from 'react-router-dom';
import { db } from "../firebase.mjs";
export const About = () => {
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
        <>
            <body className="ms-body ms-primary-theme ms-logged-out">
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
                                            <Link to="#"><i class="fab fa-instagram"></i>
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
                <div class="bradcam_area breadcam_bg bradcam_overlay">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="bradcam_text">
                                    <h3>About Us</h3>
                                    <p><a href="index.html">Home /</a> About</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="welcome_docmed_area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6">
                                <div class="welcome_thumb">
                                    <div class="thumb_1">
                                        <img src={"../assets/img/x1U_DRbIH0OK.webp"} alt="" />
                                    </div>
                                    <div class="thumb_2">
                                        <img src={"../assets/img/x2WZmdpsJ_nD.webp"} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6">
                                <div class="welcome_docmed_info">
                                    <h2>Welcome to Docmed</h2>
                                    <h3>Best Care For Your <br />
                                        Good Health</h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.
                                        It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
                                    <ul>
                                        <li> <i class="flaticon-right"></i> Apartments frequently or motionless. </li>
                                        <li> <i class="flaticon-right"></i> Duis aute irure dolor in reprehenderit in voluptate.</li>
                                        <li> <i class="flaticon-right"></i> Voluptatem quia voluptas sit aspernatur. </li>
                                    </ul>
                                    <a href="#" class="boxed-btn3-white-2">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="testmonial_area">
                    <div class="testmonial_active owl-carousel">
                        <div class="single-testmonial testmonial_bg_1 overlay2">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-10 offset-xl-1">
                                        <div class="testmonial_info text-center">
                                            <div class="quote">
                                                <i class="flaticon-straight-quotes"></i>
                                            </div>
                                            <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br />
                                                sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.
                                                <br />
                                                Fusce ac mattis nulla. Morbi eget ornare dui. </p>
                                            <div class="testmonial_author">
                                                <h4>Asana Korim</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="business_expert_area">
                    <div class="business_tabs_area">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12">
                                    <ul class="nav" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Excellent Services</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Qualified Doctors</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Emergency Departments</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="border_bottom">
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row align-items-center">
                                        <div class="col-xl-6 col-md-6">
                                            <div class="business_info">
                                                <div class="icon">
                                                    <i class="flaticon-first-aid-kit"></i>
                                                </div>
                                                <h3>Leading edge care for Your family</h3>
                                                <p>Esteem spirit temper too say adieus who direct esteem.
                                                    It esteems luckily picture placing drawing. Apartments frequently or motionless on
                                                    reasonable projecting expression.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-md-6">
                                            <div class="business_thumb">
                                                <img src={"../assets/img/xbusinessT1vlgqVj2y.webp"} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="row align-items-center">
                                        <div class="col-xl-6 col-md-6">
                                            <div class="business_info">
                                                <div class="icon">
                                                    <i class="flaticon-first-aid-kit"></i>
                                                </div>
                                                <h3>Leading edge care for Your family</h3>
                                                <p>Esteem spirit temper too say adieus who direct esteem.
                                                    It esteems luckily picture placing drawing. Apartments frequently or motionless on
                                                    reasonable projecting expression.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-md-6">
                                            <div class="business_thumb">
                                                <img src={"../assets/img/xbusinessT1vlgqVj2y.webp"} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <div class="row align-items-center">
                                        <div class="col-xl-6 col-md-6">
                                            <div class="business_info">
                                                <div class="icon">
                                                    <i class="flaticon-first-aid-kit"></i>
                                                </div>
                                                <h3>Leading edge care for Your family</h3>
                                                <p>Esteem spirit temper too say adieus who direct esteem.
                                                    It esteems luckily picture placing drawing. Apartments frequently or motionless on
                                                    reasonable projecting expression.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-md-6">
                                            <div class="business_thumb">
                                                <img src={"../assets/img/xbusinessT1vlgqVj2y.webp"} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="expert_doctors_area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="doctors_title mb-55">
                                    <h3>Expert Doctors</h3>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="expert_active owl-carousel owl-loaded owl-drag">
                                    <div class="owl-stage-outer">
                                        <div class="row owl-stage" >
                                            <div class="owl-item cloned" style={{ "width": " 255px", "marginRight": "30px" }}><div class="single_expert">
                                                <div class="expert_thumb">
                                                    <img src={"../assets/img/x4qkGIuOxLyX.webp"} alt="" />
                                                </div>
                                                <div class="experts_name text-center">
                                                    <h3>Sanyam Sharma</h3>
                                                    <span>Neurologist</span>
                                                </div>
                                            </div>
                                            </div>
                                            <div class="owl-item cloned" style={{ "width": " 255px", "marginRight": "30px" }}><div class="single_expert">
                                                <div class="expert_thumb">
                                                    <img src={"../assets/img/x12EznENOFkd.webp"} alt="" />
                                                </div>
                                                <div class="experts_name text-center">
                                                    <h3>Poojan Patel</h3>
                                                    <span>Orthopedic</span>
                                                </div>
                                            </div>
                                            </div>
                                            <div class="owl-item cloned" style={{ "width": " 255px", "marginRight": "30px" }}><div class="single_expert">
                                                <div class="expert_thumb">
                                                    <img src={"../assets/img/x4qkGIuOxLyX.webp"} alt="" />
                                                </div>
                                                <div class="experts_name text-center">
                                                    <h3>Komal Biswal</h3>
                                                    <span>Child Specialist</span>
                                                </div>
                                            </div>
                                            </div>
                                            <div class="owl-item" style={{ "width": " 255px", "marginRight": "30px" }}><div class="single_expert">
                                                <div class="expert_thumb">
                                                    <img src={"../assets/img/x12EznENOFkd.webp"} alt="" />
                                                </div>
                                                <div class="experts_name text-center">
                                                    <h3>Ritika Jain</h3>
                                                    <span>Eye Specialist</span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="owl-nav"><div class="owl-prev"><i class="ti-angle-left"></i></div><div class="owl-next"><i class="ti-angle-right"></i></div></div><div class="owl-dots disabled"></div></div>
                        </div>
                    </div>
                </div>


                <div class="Emergency_contact">
                    <div class="conatiner-fluid p-0">
                        <div class="row no-gutters">
                            <div class="col-xl-6">
                                <div class="single_emergency d-flex align-items-center justify-content-center emergency_bg_1 overlay_skyblue">
                                    <div class="info">
                                        <h3>For Any Emergency Contact</h3>
                                        <p>Esteem spirit temper too say adieus.</p>
                                    </div>
                                    <div class="info_button">
                                        <a href="#" class="boxed-btn3-white">+10 378 4673 467</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6">
                                <div class="single_emergency d-flex align-items-center justify-content-center emergency_bg_2 overlay_skyblue">
                                    <div class="info">
                                        <h3>Make an Online Appointment</h3>
                                        <p>Esteem spirit temper too say adieus.</p>
                                    </div>
                                    <div class="info_button">
                                        <a href="#" class="boxed-btn3-white">Make an Appointment</a>
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
                                                        <i class="fab fa-facebook"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i class="fab fa-twitter"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i class="fab fa-instagram"></i>
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
            </body>
        </>
    )
}
export default About