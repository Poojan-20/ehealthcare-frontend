import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from 'react-router-dom';
import { db } from "../firebase.mjs";
import firebase from "../firebase.mjs";
const LabDash = () => {
    const { currentUser } = useAuth();
    const [Tester, setTester] = useState([]);
    // FETCH DOCTOR'S DATA FROM DB
    useEffect(() => {
        db.collection("LabTester").onSnapshot((snapshot) => {
            setTester(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    const navigate = useNavigate()
    const handleSignout = () => {
        firebase.auth().signOut();
        navigate("/");
    };

    return (
        <>
            {Tester.map((tester) => {
                if (tester.uid === currentUser.uid)
                    return (
                        <body className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                            <aside id="ms-side-nav" className="side-nav fixed ms-aside-scrollable ms-aside-left">
                                <div className="logo-sn ms-d-block-lg">
                                    <Link className="pl-0 ml-0 text-center" to="/"> <img src={"../assets/img/medjestic-logo-216x62.png"} alt="logo" /> </Link>
                                    {/* <Link to="#" className="text-center ms-logo-img-link">  <img src={`${doctor.imageURL}`} style={{ "maxWidth": "100%" }} alt="logo" /></Link> */}
                                    {
                                        tester.imageURL ?
                                        <Link to="#" className="text-center ms-logo-img-link"> <img src={`${tester.imageURL}`} style={{"maxWidth":"100%"}} alt="logo" /></Link>:
                                        <span></span>
                                    
                                    }
                                    <h5 className="text-center text-white mt-2">Welcome</h5>
                                </div>

                                <ul className="accordion ms-main-aside fs-14" id="side-nav-accordion">

                                    <li className="menu-item">
                                        <Link to="/lab_dashboard" data-target="#dashboard" aria-expanded="false" aria-controls="dashboard">
                                            <span><i className="material-icons fs-16">dashboard</i>Dashboard </span>
                                        </Link>
                                    </li>

                                    <li className="menu-item">
                                        <Link to="/labprofile" data-target="#labtester" aria-expanded="false" aria-controls="doctor">
                                            <span><i className="fas fa-user"></i>Profile</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/lab_appointment" data-target="#doctor" aria-expanded="false" aria-controls="doctor">
                                            <span><i class="fas fa-clipboard-list"></i>Appointments</span>
                                        </Link>
                                    </li>

                                    <li className="menu-item">
                                        <Link to="/lab_your_patients" data-target="#patient" aria-expanded="false" aria-controls="patient">
                                            <span><i className="fas fa-user"></i>Patients</span>
                                        </Link>
                                    </li>

                                    <li className="menu-item">
                                        <Link to="/lab_notifications" data-target="#department" aria-expanded="false" aria-controls="department">
                                            <span><i class="fas fa-bell"></i>Notifications</span>
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
                    )
            })}

        </>
    )
}

export default LabDash