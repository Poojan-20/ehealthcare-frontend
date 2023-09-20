import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { db } from "../firebase.mjs";
const Eye = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    db.collection("doctors").onSnapshot((snapshot) => {
      setDoctors(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  // FUNCTION TO VERIFY DOCTOR'S PROFILE
  const handleVerify = (uid) => {
    db.collection("doctors").doc(uid).update({
      isVerified: "true",
      unreadCount: 1,
      updatedAt: new Date(),
    });

    db.collection("doctors").doc(uid).collection("notifications").add({
      message: "Your profile has been verified by the admin!",
      sentAt: new Date(),
    });
  };

  return (
    <>
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
                        <ul id="navigation">
                          <li><Link className="active" to="/">Home</Link></li>
                          <li><Link to="/doctor_login">Doctor</Link></li>
                          <li><Link to="/patient_login">Patient</Link></li>
                          <li><Link to="/blog">Blog</Link></li>
                          <li><Link to="/shopping">Shopping</Link></li>
                          <li><Link to="/about">About</Link></li>
                          <li><Link to="/contact">Contacts</Link></li>
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
        <div class="bradcam_area breadcam_bg bradcam_overlay">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="bradcam_text">
                  <h3>Eye Care</h3>
                  <p><a href="/">Home /</a> Eye Care</p>
                  <p>Provides high quality and affordable care with modern Tools and techniques<br/>
                   for comprehensive management and treatment.Maximizing the visual potential of <br/>
                   each of the patients through quality treatment is the mission of ours. We are <br/>
                   dedicated to providing a positive experience for our patients</p>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="service_area">
          <div class="container p-0">
            <div class="row no-gutters">
              <div class="col-xl-4 col-md-4">
                <div class="single_service">
                  <div class="icon">
                    <i class="flaticon-electrocardiogram"></i>
                  </div>
                  <h3>Hospitality</h3>
                  <p>Clinical excellence must be the priority for any health care service provider.</p>
                  <a href="#" class="boxed-btn3-white">Apply For a Bed</a>
                </div>
              </div>
              <div class="col-xl-4 col-md-4">
                <div class="single_service">
                  <div class="icon">
                    <i class="flaticon-emergency-call"></i>
                  </div>
                  <h3>Emergency Care</h3>
                  <p>Clinical excellence must be the priority for any health care service provider.</p>
                  <a href="#" class="boxed-btn3-white">+10 672 356 3567</a>
                </div>
              </div>
              <div class="col-xl-4 col-md-4">
                <div class="single_service">
                  <div class="icon">
                    <i class="flaticon-first-aid-kit"></i>
                  </div>
                  <h3>Chamber Service</h3>
                  <p>Clinical excellence must be the priority for any health care service provider.</p>
                  <a href="#" class="boxed-btn3-white">Make an Appointment</a>
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
                <div class="expert_active owl-carousel owl-loaded owl-drag"><div class="owl-stage-outer">
                  <div class="row owl-stage" >
                    {doctors.map((doctor) => {
                      if (doctor.medicalSpeciality === "Eye")
                        return (
                          <div class="owl-item cloned" style={{ "width": " 255px", "marginRight": "30px" }}><div class="single_expert">
                            <div class="expert_thumb">
                              <img src={doctor.imageURL} alt="" data-pagespeed-url-hash="498244352" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                            </div>
                            <div class="experts_name text-center">
                              <h3>{doctor.name}</h3>
                              <span>{doctor.medicalSpeciality}</span>
                            </div>
                          </div>
                          </div>
                        )

                    })}

                  </div>
                </div>
                  <div class="owl-nav">
                    <div class="owl-prev"><i class="ti-angle-left"></i>
                    </div><div class="owl-next">
                      <i class="ti-angle-right"></i>
                    </div>
                  </div>
                  <div class="owl-dots disabled">
                  </div>
                </div>
              </div>
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

export default Eye