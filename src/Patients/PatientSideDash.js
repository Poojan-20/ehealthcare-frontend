import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link , useNavigate } from 'react-router-dom';
import { db } from "../firebase.mjs";
import firebase from "../firebase.mjs";
import Notification from './Notification'
const PatinetSideDash = () => {
    const { currentUser } = useAuth();
    const [patients, setPatients] = useState([]);
    // FETCHING PATIENT'S DATA FROM DB
    useEffect(() => {
        db.collection("patients").onSnapshot((snapshot) => {
            setPatients(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);
    const navigate = useNavigate()
    const handleSignout = () => {
        firebase.auth().signOut();
        navigate("/");
    };

    return (
        patients.map((patient) => {
            if (patient.uid === currentUser.uid)
                return (
                    <>
                        <body className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                            <div className="ms-aside-overlay ms-overlay-left ms-toggler" data-target="#ms-side-nav" data-toggle="slideLeft"></div>
                            <div className="ms-aside-overlay ms-overlay-right ms-toggler" data-target="#ms-recent-activity" data-toggle="slideRight"></div>

                            <aside id="ms-side-nav" className="side-nav fixed ms-aside-scrollable ms-aside-left">

                                <div className="logo-sn ms-d-block-lg">
                                    <Link className="pl-0 ml-0 text-center" to="/"> <img src={"../assets/img/medjestic-logo-216x62.png"} alt="logo" /> </Link>
                                    {
                                        patient.imageURL ?
                                        <Link to="#" className="text-center ms-logo-img-link"> <img src={`${patient.imageURL}`} style={{"maxWidth":"100%"}} alt="logo" /></Link>:
                                        <span></span>
                                    
                                    }
                                    {/* <Link to="#" className="text-center ms-logo-img-link"> <img src={`${patient.imageURL}`} style={{"maxWidth":"100%"}} alt="logo" /></Link> */}
                                    <h5 className="text-center text-white mt-2">Welcome</h5>
                                </div>

                                <ul className="accordion ms-main-aside fs-14" id="side-nav-accordion">

                                    <li className="menu-item">
                                        <Link to="/patient_dashboard" data-target="#dashboard" aria-expanded="false" aria-controls="dashboard">
                                            <span><i className="material-icons fs-16">dashboard</i>Dashboard </span>
                                        </Link>
                                    </li>

                                    <li className="menu-item">
                                        <Link to="/patientprofile" data-target="#doctor" aria-expanded="false" aria-controls="doctor">
                                            <span><i className="fas fa-user"></i>Profile</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/patient_bookappointment" data-target="#doctor" aria-expanded="false" aria-controls="doctor">
                                            <span><i class="fas fa-solid fa-pen"></i>Book Appointments</span>
                                        </Link>
                                    </li>

                                    <li className="menu-item">
                                        <Link to="/patient_notifications" data-target="#department" aria-expanded="false" aria-controls="department">
                                            < Notification />
                                        </Link>
                                    </li>

                                    <li className="menu-item">
                                        <Link to="/patient_scheduled_meetings" data-target="#schedule" aria-expanded="false" aria-controls="schedule">
                                            <span><i class="fas fa-video"></i>Meetings</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/patient_past_appointments" data-target="#patient" aria-expanded="false" aria-controls="patient">
                                            <span><i class="fas fa-regular fa-calendar-check"></i>Past Appointments</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/labtest" data-target="#patient" aria-expanded="false" aria-controls="patient">
                                            <span><i class="fas fa-regular fa-calendar-check"></i>Lab Test</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/uploadreport" data-target="#patient" aria-expanded="false" aria-controls="patient">
                                            <span><i class="fas fa-regular fa-file"></i>Reports</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/patient_permissions" data-target="#patient" aria-expanded="false" aria-controls="patient">
                                            <span><i class="fas fa-solid fa-lock"></i>Permissions</span>
                                        </Link>
                                    </li>


                                    <li className="menu-item" onClick={handleSignout}>
                                        <Link to="#" aria-expanded="false" aria-controls="report" >
                                            <span onClick={handleSignout}><i className="fas fa-sign-out-alt" ></i>LogOut</span>
                                        </Link>
                                    </li>


                                </ul>
                            </aside>
                        </body>
                    </>
                )
        })
    )
}

export default PatinetSideDash