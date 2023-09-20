import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase.mjs";

const LabPackDetails = () => {

    const navigate = useNavigate();
    const { placeid, packid } = useParams();
    const { currentUser } = useAuth();

    const [labpackage, setLabPackage] = useState([]);
    const [labplace, setLabPlace] = useState([]);
    const [patient, setPatient] = useState(null)

    useEffect(() => {
        db.collection("LabTestPackage").onSnapshot((snapshot) => {
            setLabPackage(snapshot.docs.map((doc) => doc.data()));
        });
        if (currentUser) {
            db.collection("patients")
                .where("uid", "==", currentUser.uid)
                .get()
                .then((querySnapshot) => {
                    if (!querySnapshot.empty) {
                        setPatient(querySnapshot.docs[0].data());
                    }
                })
        }
    }, [packid]);
    useEffect(() => {
        db.collection("NearbyLab").onSnapshot((snapshot) => {
            setLabPlace(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    console.log(packid)
    console.log(labpackage)

    const handleSubmit = () => {
        db.collection("Labappointments").add({
            isConfirmed: "pending",
            patientUID: currentUser.uid,
            LabTesterUID: "4yfX9tVS5VfvanerOMj6eTqgdLl2",
            packid: packid,
            placeid: placeid,
            bookedAt: new Date(),
        }).then(() => {
            navigate("/labtest");
        });
    }

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
            <div style={{ display: 'flex', gap: "30px 25px", maxWidth: "1360px", flexDirection: "row", flex: '1 1 0%', alignItems: 'center', marginTop: "30px", padding: "0px 30px" }}>
                <div style={{ minWidth: "615px" }}>
                    <div style={{ marginBottom: "20px" }}>
                        <div className="ms-card">
                            {labpackage.map((packagee) => {
                                if (packagee.packid === packid) {
                                    return (
                                        <div className="ms-card-body" style={{ display: "flex", gap: "16px", flexFlow: "row wrap", padding: "1rem" }}>
                                            <svg aria-hidden="true" focusable="false" role="img" fill="none" preserveAspectRatio="xMidYMid meet" dataicon="back" viewBox="0 0 22 20" width="25" className="sc-f32db17d-0 sc-c1dcc9aa-0 eYiBsL iKvaTN sc-b9d72297-0 fkUHSZ"><path d="M19.0392 1H3C1.89543 1 1 1.89543 1 3V17C1 18.1046 1.89543 19 3 19H19.0392C20.1438 19 21.0392 18.1046 21.0392 17V3C21.0392 1.89543 20.1438 1 19.0392 1Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.3893 7.70223L11.0248 4.98802L7.65039 7.70223V1H14.3893V7.70223Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            <div style={{ flex: "1 1 0%" }}>
                                                <div style={{ display: "flex", gap: "8px", flexFlow: "row wrap" }}>
                                                    <h1 style={{ color: "rgb(64, 70, 77)", fontSize: "1.625rem", marginBottom: "12px", fontWeight: "400", flex: "1 1 0%" }}>{packagee.TestName} </h1>
                                                </div>
                                                <div style={{ display: "flex", gap: "8px", flexFlow: "row wrap" }}>
                                                    <span style={{ fontSize: "0.875rem", lineHeight: "22px" }}>Includes</span>
                                                    <span style={{ fontSize: "0.875rem", lineHeight: "22px", color: "rgb(14, 116, 110)" }}> +87 Tests</span>
                                                </div>
                                                <div style={{ display: "flex", gap: "8px", flexFlow: "row wrap", marginTop: "20px" }}>
                                                    <span style={{ fontSize: "1.625rem", fontWeight: "400", lineHeight: "22px" }}>{packagee.Price}</span>
                                                    <span style={{ fontSize: "0.875rem", lineHeight: "22px", color: "rgb(244, 119, 121)" }}> 63% OFF</span>
                                                </div>
                                                <div style={{ marginTop: "20px", paddingTop: "20px", borderTop: "1px solid rgb(223, 227, 230)", display: "flex", gap: "40px", flexFlow: "row wrap" }}>
                                                    <div style={{ display: "flex", gap: "8px", flexFlow: "row wrap" }}>
                                                        <span style={{ fontSize: "0.875rem", color: "rgb(64, 70, 77)", lineHeight: "22px" }}>Reports in 12 Hrs</span>

                                                    </div>
                                                    {labplace.map((place) => {
                                                        if (place.id === placeid) {
                                                            return (
                                                                <div style={{ display: "flex", gap: "8px", flexFlow: "row wrap" }}>

                                                                    <span style={{ fontSize: "0.875rem", color: "rgb(64, 70, 77)", lineHeight: "22px" }}>Slot Available: </span>
                                                                    <span style={{ fontSize: "0.875rem", color: "rgb(64, 70, 77)", lineHeight: "22px" }}>{place.Time} </span>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        {labpackage.map((pack) => {
                            if (pack.packid === packid) {
                                return (
                                    <div style={{ width: "100%", padding: "30px 20px", borderRadius: "12px", border: "1px solid rgb(223, 227, 230)", display: "flex", gap: "25px", flexFlow: "column nowrap" }}>
                                        <div style={{ display: "flex", gap: "25px 35px", flexFlow: "row wrap" }}>
                                            <div style={{ display: "flex", gap: "25px 15px", flexFlow: "row wrap", alignItems: "center" }}>
                                                <svg aria-hidden="true" focusable="false" role="img" fill="none" preserveAspectRatio="xMidYMid meet" data-icon="Beaker" viewBox="0 0 24 24" width="24" height="24" className="sc-f32db17d-0 sc-c1dcc9aa-0 jgiUkI iKvaTN sc-eed3504d-0 kihbqh"><path d="M3.30176 9.65723C4.75146 9.65723 4.75145 10.4983 6.20115 10.4983C7.65085 10.4983 7.65084 9.65723 9.10054 9.65723C10.5502 9.65723 10.5503 10.4983 12 10.4983C13.4497 10.4983 13.4497 9.65723 14.8994 9.65723C16.3491 9.65723 16.3491 10.4983 17.7988 10.4983C19.2485 10.4983 19.2485 9.65723 20.6982 9.65723" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1 3.15039H2.3833C2.54971 3.15324 2.7085 3.22061 2.82619 3.3383C2.94387 3.45598 3.01118 3.61478 3.01402 3.78118V18.6654C3.01402 19.226 3.23674 19.7637 3.63313 20.16C4.02952 20.5564 4.56716 20.7791 5.12774 20.7791H18.8722C19.4328 20.7791 19.9704 20.5564 20.3668 20.16C20.7632 19.7637 20.9859 19.226 20.9859 18.6654V3.78118C20.9859 3.61389 21.0523 3.45342 21.1706 3.33512C21.2889 3.21683 21.4494 3.15039 21.6167 3.15039H23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                <div style={{ display: "flex", gap: "10px", flexFlow: "row wrap", alignItems: "end" }}>
                                                    <h2 style={{ lineHeight: "24px", fontSize: "1rem", fontWeight: "600", color: "rgb(64, 70, 77)" }}>Sample Type</h2>
                                                    <p style={{ borderRadius: "4px", padding: "4px", backgroundColor: "rgb(238, 244, 255)", border: "1px solid rgb(223, 227, 230)", marginBottom: "8px" }}>{pack.SampleType}</p>

                                                </div>
                                            </div>
                                            <div style={{ display: "flex", gap: "25px 15px", flexFlow: "row wrap", alignItems: "center" }}>
                                                <svg aria-hidden="true" focusable="false" role="img" fill="none" preserveAspectRatio="xMidYMid meet" data-icon="FastingIcon" viewBox="0 0 24 24" width="24" height="24" className="sc-f32db17d-0 sc-c1dcc9aa-0 jgiUkI iKvaTN sc-64dfa9c2-0 inJvwu"><path d="M9.94793 5.72629V9.36842L8.96899 10.6211L9.40061 17.0842C9.41671 17.2679 9.39429 17.4528 9.33488 17.6274C9.27548 17.8019 9.18034 17.9622 9.05554 18.0979C8.93073 18.2336 8.77907 18.3417 8.61011 18.4155C8.44115 18.4893 8.25864 18.527 8.07428 18.5263V18.5263C7.88992 18.527 7.70742 18.4893 7.53846 18.4155C7.3695 18.3417 7.21777 18.2336 7.09297 18.0979C6.96816 17.9622 6.87303 17.8019 6.81362 17.6274C6.75421 17.4528 6.73186 17.2679 6.74796 17.0842L7.20058 10.6211L6.14795 9.36842V5.71582" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.08496 5.45215V9.01004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.7791 8.85272C17.7791 6.8843 16.8949 5.69482 16.0107 5.69482C15.1265 5.69482 14.2002 6.91588 14.2002 8.85272C14.2073 9.20232 14.3089 9.54349 14.4942 9.84001C14.6795 10.1365 14.9417 10.3773 15.2528 10.5369L15.0212 16.8527C14.9475 17.6316 15.2633 18.2948 16.0738 18.2948C16.8844 18.2948 17.1265 17.6316 17.1265 16.8527L16.9055 10.5369C17.1833 10.3547 17.4096 10.1041 17.5627 9.80911C17.7157 9.51415 17.7902 9.18482 17.7791 8.85272Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.6733 6.42177L19.726 4.36914" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.49512 14.4212L14.1372 9.95801" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4.36914 19.7367L6.48493 17.6104" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                <div style={{ display: "flex", gap: "10px", flexFlow: "row wrap", alignItems: "end" }}>
                                                    <h2 style={{ lineHeight: "24px", fontSize: "1rem", fontWeight: "600", color: "rgb(64, 70, 77)" }}>Fasting Required</h2>
                                                    <p style={{ borderRadius: "4px", padding: "4px", backgroundColor: "rgb(238, 244, 255)", border: "1px solid rgb(223, 227, 230)", marginBottom: "8px" }}>10-12 Hrs</p>

                                                </div>
                                            </div>
                                            <div style={{ display: "flex", gap: "25px 15px", flexFlow: "row wrap", alignItems: "center" }}>
                                                <svg aria-hidden="true" focusable="false" role="img" fill="none" preserveAspectRatio="xMidYMid meet" data-icon="Test-tube" viewBox="0 0 24 25" width="24" className="sc-f32db17d-0 sc-c1dcc9aa-0 jgiUkI iKvaTN sc-67b3f994-0 ijbupR"><path d="M15.7189 3.23406L21.4082 8.92333L8.54377 21.7878C7.78846 22.5431 6.764 22.9674 5.69583 22.9674C4.62766 22.9674 3.60329 22.5431 2.84798 21.7878V21.7878C2.09267 21.0324 1.66829 20.008 1.66829 18.9399C1.66829 17.8717 2.09267 16.8473 2.84798 16.092L15.7124 3.22754L15.7189 3.23406Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.1245 1.64062L22.9998 10.516" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12.686 6.61719L14.3081 8.23926" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.64502 9.64941L11.2763 11.2807" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.61279 12.6904L8.23487 14.3125" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                <div style={{ display: "flex", gap: "10px", flexFlow: "row wrap", alignItems: "end" }}>
                                                    <h2 style={{ lineHeight: "24px", fontSize: "1rem", fontWeight: "600", color: "rgb(64, 70, 77)" }}>Tube Type</h2>
                                                    <p style={{ borderRadius: "4px", padding: "4px", backgroundColor: "rgb(238, 244, 255)", border: "1px solid rgb(223, 227, 230)", marginBottom: "8px" }}>{pack.TubeType}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", gap: "25px 15px", flexFlow: "row wrap", flexWrap: "nowrap", alignItems: "start" }}>
                                            <svg aria-hidden="true" focusable="false" role="img" fill="none" preserveAspectRatio="xMidYMid meet" data-icon="back" viewBox="0 0 22 20" width="24" className="sc-f32db17d-0 sc-c1dcc9aa-0 dmjDwL iKvaTN sc-b9d72297-0 fkUHSZ"><path d="M19.0392 1H3C1.89543 1 1 1.89543 1 3V17C1 18.1046 1.89543 19 3 19H19.0392C20.1438 19 21.0392 18.1046 21.0392 17V3C21.0392 1.89543 20.1438 1 19.0392 1Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.3893 7.70223L11.0248 4.98802L7.65039 7.70223V1H14.3893V7.70223Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            <div style={{ display: "flex", flexFlow: "column wrap" }}>
                                                <h2 style={{ lineHeight: "24px", fontSize: "1rem", fontWeight: "600", color: "rgb(64, 70, 77)" }}>Package Includes</h2>
                                                <ul style={{ display: "flex", gap: "10px", flexFlow: "row wrap", listStyleType: "none", paddingRight: "0px" }}>
                                                    <li style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                                                        <span style={{ fontSize: "0.875rem", lineHeight: "22px", color: "rgb(64,70,77)" }}> Fasting Blood Sugar (FBS) </span>
                                                        <span style={{ fontSize: "0.875rem", lineHeight: "22px", color: "rgb(64,70,77)" }}> HbA1c (Glycosylated Hemoglobin) </span>
                                                        <span style={{ fontSize: "0.875rem", lineHeight: "22px", color: "rgb(64,70,77)" }}> Vitamin B12 </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", gap: "25px 15px", flexFlow: "row wrap", flexWrap: "nowrap" }}>
                                            <svg style={{ flex: "0 0 auto" }} aria-hidden="true" focusable="false" role="img" fill="none" preserveAspectRatio="xMidYMid meet" data-icon="Description" viewBox="0 0 24 24" width="24" height="24" className="sc-f32db17d-0 sc-c1dcc9aa-0 jgiUkI iKvaTN sc-37bb273b-0 ebYKNz"><path d="M3.93882 0.821316H20.0292C20.3147 0.819873 20.5976 0.876865 20.8618 0.989017C21.1259 1.10117 21.3661 1.26627 21.5685 1.47484C21.7708 1.68341 21.9314 1.93133 22.041 2.20436C22.1506 2.4774 22.207 2.77016 22.207 3.06584V20.9564C22.207 21.5371 21.9842 22.0941 21.5877 22.5048C21.1912 22.9154 20.6534 23.1461 20.0926 23.1461H3.93882C3.37806 23.1461 2.84026 22.9154 2.44374 22.5048C2.04722 22.0941 1.82446 21.5371 1.82446 20.9564V3.04394C1.82025 2.75362 1.87184 2.46534 1.97621 2.19586C2.08058 1.92638 2.23566 1.68109 2.43241 1.47426C2.62917 1.26743 2.86368 1.10318 3.1223 0.991088C3.38091 0.878993 3.65847 0.821283 3.93882 0.821316V0.821316Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.2925 6.98535H18.3588" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.59262 8.37672C7.33413 8.37672 7.93525 7.75417 7.93525 6.98621C7.93525 6.21826 7.33413 5.5957 6.59262 5.5957C5.85111 5.5957 5.25 6.21826 5.25 6.98621C5.25 7.75417 5.85111 8.37672 6.59262 8.37672Z" fill="currentColor"></path><path d="M10.2925 12H18.3588" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.59262 13.3914C7.33413 13.3914 7.93525 12.7688 7.93525 12.0009C7.93525 11.2329 7.33413 10.6104 6.59262 10.6104C5.85111 10.6104 5.25 11.2329 5.25 12.0009C5.25 12.7688 5.85111 13.3914 6.59262 13.3914Z" fill="currentColor"></path><path d="M10.2925 17.0146H18.3588" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.59262 18.405C7.33413 18.405 7.93525 17.7825 7.93525 17.0145C7.93525 16.2466 7.33413 15.624 6.59262 15.624C5.85111 15.624 5.25 16.2466 5.25 17.0145C5.25 17.7825 5.85111 18.405 6.59262 18.405Z" fill="currentColor"></path></svg>
                                            <div style={{ display: "flex", flexFlow: "column nowrap" }}>
                                                <h2 style={{ lineHeight: "24px", fontSize: "1rem", fontWeight: "600", color: "rgb(64, 70, 77)" }}>Description</h2>
                                                <div>
                                                    <span style={{ fontSize: "0.875rem", lineHeight: "22px", color: "rgb(64,70,77)" }}>{pack.Description} </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                        }
                    </div>
                </div>
                <div style={{ display: "flex", flex: "1 1 0%", flexDirection: "column", alignSelf: "flex-start", minWidth: "352px", position: "sticky" }}>
                    {
                        labplace.map((place) => {
                            if (place.id === placeid) {
                                return (
                                    <div style={{ border: "1px solid rgb(223, 227, 230)", marginBottom: "10px", borderRadius: "12px", height: "auto", padding: "20px", width: "100%" }}>
                                        <div style={{ display: "flex", flexDirection: "row", padding: "5px", gap: "8px", marginTop: '2px' }}>
                                            <h5 style={{ fontSize: "1rem", fontWeight: "600" }}>Lab Details</h5>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "row", padding: "10px", gap: "15px" }}>
                                            <h5><strong>Name: </strong> {place.Name}</h5>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "row", padding: "10px", gap: "15px" }}>
                                            <h5><strong>Address:</strong> {place.Address} </h5>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "row", padding: "10px", gap: "15px" }}>
                                            <h5><strong>Contact: </strong> {place.Contact} </h5>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "row", padding: "10px", gap: "15px" }}>
                                            <h5><strong>Time: </strong>{place.Time} </h5>
                                        </div>

                                        {
                                            !currentUser ? (
                                                <div className="col-lg-12 text-center">
                                                    <Link to="/patient_login" className="btn btn-outline-secondary">Book
                                                        <i className="ion-arrow-forward-sharp icon-right"></i>
                                                    </Link>
                                                </div>

                                            ) : (
                                                !patient ? (
                                                    <div div className="col-lg-12 text-center">
                                                        <Link to="/patient_login" className="btn btn-outline-secondary">Book
                                                            <i className="ion-arrow-forward-sharp icon-right"></i>
                                                        </Link>
                                                    </div>
                                                ) : (
                                                    <div div className="col-lg-12 text-center">
                                                        <Link to="/labhome" className="btn btn-outline-secondary" onClick={handleSubmit}>Book
                                                            <i className="ion-arrow-forward-sharp icon-right"></i>
                                                        </Link>
                                                    </div>
                                                )
                                            )
                                        }

                                    </div>
                                )
                            }
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default LabPackDetails