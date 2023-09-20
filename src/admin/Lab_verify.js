import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import { db } from "../firebase.mjs";

const Lab_verify = () => {
    const [Tester, setTester] = useState([]);

    useEffect(() => {
        db.collection("LabTester").onSnapshot((snapshot) => {
            setTester(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    // FUNCTION TO VERIFY DOCTOR'S PROFILE
    const handleVerify = (uid) => {
        db.collection("LabTester").doc(uid).update({
            isVerified: "true",
            unreadCount: 1,
            updatedAt: new Date(),
        });

        db.collection("LabTester").doc(uid).collection("notifications").add({
            message: "Your profile has been verified by the admin!",
            sentAt: new Date(),
        });
    };

    // FUNCTION TO UNVERIFY DOCTOR'S PROFILE
    const handleUnverify = (uid) => {
        db.collection("LabTester").doc(uid).update({
            isVerified: "false",
            unreadCount: 1,
            updatedAt: new Date(),
        });

        db.collection("LabTester").doc(uid).collection("notifications").add({
            message: "Your profile has been unverified by the admin!",
            sentAt: new Date(),
        });
    };

    return (
        <>
            <AdminDashboard />
            <body className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <nav className="navbar ms-navbar">
                    <div className="ms-aside-toggler ms-toggler pl-0" data-target="#ms-side-nav" data-toggle="slideLeft">
                        <span className="ms-toggler-bar bg-white"></span>
                        <span className="ms-toggler-bar bg-white"></span>
                        <span className="ms-toggler-bar bg-white"></span>
                    </div>
                    <div className="logo-sn logo-sm ms-d-block-sm">
                        <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="/"><img src={"../images/medjestic-logo-84x41.png"} alt="logo" /> </Link>
                    </div>
                    <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">

                        <li className="ms-nav-item ms-d-none">
                            <Link to="/shopping" className="text-white" data-toggle="modal"><i className="flaticon-cart-shopping mr-2"></i> Shop</Link>
                        </li>
                        <li className="ms-nav-item ms-d-none">
                            <Link to="#prescription" className="text-white" data-toggle="modal"><i className="flaticon-pencil mr-2"></i>Blog</Link>
                        </li>
                        <li className="ms-nav-item  ms-d-none">
                            <Link to="/about" className="text-white" data-toggle="modal"><i className="flaticon-spreadsheet mr-2"></i>About</Link>
                        </li>
                        <li className="ms-nav-item  ms-d-none">
                            <Link to="/Contact" className="text-white" data-toggle="modal"><i className="flaticon-phone mr-2"></i>Contact</Link>
                        </li>
                    </ul>
                    <div className="ms-toggler ms-d-block-sm pr-0 ms-nav-toggler" data-toggle="slideDown" data-target="#ms-nav-options">
                        <span className="ms-toggler-bar bg-white"></span>
                        <span className="ms-toggler-bar bg-white"></span>
                        <span className="ms-toggler-bar bg-white"></span>
                    </div>
                </nav>


                <main className="body-content">
                    <div className="ms-content-wrapper">
                        <div className="row">
                            <h2>Unverifed </h2>
                            {Tester.map((tester) => {
                                if (tester.isVerified === "pending")
                                    return (
                                        <div className="col-lg-4 col-md-4 col-sm-6">
                                            <div className="ms-card">
                                                <div className="ms-card-body">
                                                    <div className="media fs-14">
                                                        <div className="mr-2 align-self-center">
                                                            <img src={tester.imageURL} className="ms-img-round" alt="people" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mt-1">Name: {tester.name}</h6><br />
                                                            <h6 className="mt-1">Reg. No.: {tester.regNumber}</h6><br />
                                                            <h6 className="mt-1">State Medical Council:{" "}{tester.stateMedicalCouncil}</h6><br />
                                                            <button className="btn btn-primary mt-1 d-inline w-200" onClick={() => handleVerify(tester.uid)}><i className="mt-1 mr-2 fas fa-user-check"></i>Verify</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                            })}
                            <h2>Verifed</h2>
                            {Tester.map((tester) => {
                                if (tester.isVerified === "true")
                                    return (
                                        <div className="col-lg-4 col-md-4 col-sm-6">
                                            <div className="ms-card">
                                                <div className="ms-card-body">
                                                    <div className="media fs-14">
                                                        <div className="mr-2 align-self-center" >
                                                            <img src={`${tester.imageURL}`} alt="people" style={{ "width": "120px" }} />
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mt-1">Name: {tester.name}</h6><br />
                                                            <h6 className="mt-1">Reg. No.: {tester.regNumber}</h6><br />
                                                            <h6 className="mt-1">State Medical Council:{" "}{tester.stateMedicalCouncil}</h6><br />
                                                            <button className="btn btn-primary mt-1 d-inline w-20" onClick={() => handleUnverify(tester.uid)}><i className="mt-1 mr-2 fas fa-user-check"></i>Unverify</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                            })}
                        </div>
                    </div>
                </main>
            </body>

        </>
    )
}

export default Lab_verify