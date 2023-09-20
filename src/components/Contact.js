import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from 'react-router-dom';
import { db } from "../firebase.mjs";
const Contact = () => {
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
            <body className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
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
                                            <Link to="/">
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
                <section className="contact-section">
                    <div className="container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241202.51557892113!2d72.85920278020322!3d19.16069788539421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1631038132857!5m2!1sen!2sin"
                            style={{ border: 0, width: "1100px", height: "400px" }} allowfullscreen="" loading="lazy"></iframe>
                        <div className="row">
                            <div className="col-12">
                                <h2 className="contact-title">Get in Touch</h2>
                            </div>
                            <div className="col-lg-8">
                                <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm"
                                    novalidate="novalidate">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9"
                                                    onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'"
                                                    placeholder=" Name"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input className="form-control valid" name="name" id="name" type="text"
                                                    onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'"
                                                    placeholder="Enter your name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input className="form-control valid" name="email" id="email" type="email"
                                                    onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = 'Enter email address'" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input className="form-control" name="subject" id="subject" type="text"
                                                    onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'"
                                                    placeholder="Enter Subject" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-3 offset-lg-1">
                                <div className="media contact-info">
                                    <span className="contact-info__icon"><i className="ti-home"></i></span>
                                    <div className="media-body">
                                        <h3>Buttonwood, California.</h3>
                                        <p>Rosemead, CA 91770</p>
                                    </div>
                                </div>
                                <div className="media contact-info">
                                    <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                                    <div className="media-body">
                                        <h3>+1 253 565 2365</h3>
                                        <p>Mon to Fri 9am to 6pm</p>
                                    </div>
                                </div>
                                <div className="media contact-info">
                                    <span className="contact-info__icon"><i className="ti-email"></i></span>
                                    <div className="media-body">
                                        <h3>support@colorlib.com</h3>
                                        <p>Send us your query anytime!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
            </body>
        </>
    )
}

export default Contact