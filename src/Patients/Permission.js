import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import PatientSideDash from './PatientSideDash';
import { db } from "../firebase.mjs";
import { useAuth } from "../context/AuthContext";
const Permission = () => {
    const [doctors, setDoctors] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        db.collection("doctors").onSnapshot((snapshot) => {
            setDoctors(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    console.log(doctors)

    // FUNCTION TO VERIFY DOCTOR'S PROFILE
    const handleVerify = (uid) => {
        const isPermission = 'isPermission ' + currentUser.uid;
        db.collection("doctors").doc(uid)
            .update({
                [isPermission]: "true",
            });
        db.collection("doctors").doc(uid).update({
            unreadCount: 1,
            updatedAt: new Date(),
        });

        db.collection("doctors").doc(uid).collection("notifications").add({
            message: "You have access to your patient Profile",
            sentAt: new Date(),
        });
    };

    // FUNCTION TO UNVERIFY DOCTOR'S PROFILE
    const handleUnverify = (uid) => {
        const isPermission = 'isPermission ' + currentUser.uid;
        db.collection("doctors").doc(uid)
            .update({
                [isPermission]: "pending",
            });

        db.collection("doctors").doc(uid).collection("notifications").add({
            message: "Your don't have Permission",
            sentAt: new Date(),
        });
    };

    return (
        <>
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <PatientSideDash />
                <main className="body-content">
                    <nav className="navbar ms-navbar">
                        <div className="ms-aside-toggler ms-toggler pl-0" data-target="#ms-side-nav" data-toggle="slideLeft">
                            <span className="ms-toggler-bar bg-white"></span>
                            <span className="ms-toggler-bar bg-white"></span>
                            <span className="ms-toggler-bar bg-white"></span>
                        </div>
                        <div className="logo-sn logo-sm ms-d-block-sm">
                            <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="#"><img src={"../images/medjestic-logo-84x41.png"} alt="logo" /> </Link>
                        </div>
                        <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">

                            <li className="ms-nav-item ms-d-none">
                                <Link to="/shopping" className="text-white" data-toggle="modal"><i className="flaticon-cart-shopping mr-2"></i> Shop</Link>
                            </li>
                            <li className="ms-nav-item ms-d-none">
                                <Link to="/labhome" className="text-white" data-toggle="modal"><i class="fas fa-regular fa-flask-vial"></i>Lab Testing</Link>
                            </li>
                            <li className="ms-nav-item  ms-d-none">
                                <Link to="/about" className="text-white" data-toggle="modal"><i className="flaticon-spreadsheet mr-2"></i>About</Link>
                            </li>
                            <li className="ms-nav-item  ms-d-none">
                                <Link to="/contact" className="text-white" data-toggle="modal"><i className="flaticon-phone mr-2"></i>Contact</Link>
                            </li>
                        </ul>
                        <div className="ms-toggler ms-d-block-sm pr-0 ms-nav-toggler" data-toggle="slideDown" data-target="#ms-nav-options">
                            <span className="ms-toggler-bar bg-white"></span>
                            <span className="ms-toggler-bar bg-white"></span>
                            <span className="ms-toggler-bar bg-white"></span>
                        </div>
                    </nav>
                    <div className="ms-content-wrapper">
                        <div className="row">
                            <h2>Pending Permission</h2>
                            {doctors.map((doctor) => {
                                if (doctor[`isPermission ${currentUser.uid}`] === "pending")
                                    return (
                                        <div className="col-lg-4 col-md-4 col-sm-6">
                                            <div className="ms-card">
                                                <div className="ms-card-body">
                                                    <div className="media fs-14">
                                                        <div className="mr-2 align-self-center">
                                                            <img src={doctor.imageURL} className="ms-img-round" alt="people" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mt-1">Name: {doctor.name}</h6><br />
                                                            <h6 className="mt-1">Specialist: {doctor.medicalSpeciality}</h6><br />
                                                            <h6 className="mt-1">Degree: {doctor.degree}</h6><br />
                                                            <h6 className="mt-1">Experience: {doctor.experience}</h6><br />
                                                            <h6 className="mt-1">Reg. No.: {doctor.regNumber}</h6><br />
                                                            <h6 className="mt-1">State Medical Council:{" "}{doctor.stateMedicalCouncil}</h6><br />
                                                            <button className="btn btn-primary mt-1 d-inline w-200" onClick={() => handleVerify(doctor.uid)}><i className="mt-1 mr-2 fas fa-user-check"></i>Grant</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                            })}
                            <h2>Permission</h2>
                            {doctors.map((doctor) => {
                                if (doctor[`isPermission ${currentUser.uid}`] === "true")
                                    return (
                                        <div className="col-lg-4 col-md-4 col-sm-6">
                                            <div className="ms-card">
                                                <div className="ms-card-body">
                                                    <div className="media fs-14">
                                                        <div className="mr-2 align-self-center" >
                                                            <img src={`${doctor.imageURL}`} alt="people" style={{ "width": "120px" }} />
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mt-1">Name: {doctor.name}</h6><br />
                                                            <h6 className="mt-1">Specialist: {doctor.medicalSpeciality}</h6><br />
                                                            <h6 className="mt-1">Degree: {doctor.degree}</h6><br />
                                                            <h6 className="mt-1">Experience: {doctor.experience}</h6><br />
                                                            <h6 className="mt-1">Reg. No.: {doctor.regNumber}</h6><br />
                                                            <h6 className="mt-1">State Medical Council:{" "}{doctor.stateMedicalCouncil}</h6><br />
                                                            <button className="btn btn-primary mt-1 d-inline w-20" onClick={() => handleUnverify(doctor.uid)}><i className="mt-1 mr-2 fas fa-user-check"></i>Remove</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                            })}
                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}

export default Permission