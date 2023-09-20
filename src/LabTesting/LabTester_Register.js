import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import firebase, { db, auth } from '../firebase.mjs';
import { Alert } from "@mui/material";

const LabTester_Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [nameError, setNameError] = useState("");
    const navigate = useNavigate();

    // SIGNUP WITH EMAIL AND PASSWORD FUNCTION
    const handleSignup = (e) => {
        e.preventDefault();
        setPasswordError("");
        setEmailError("");
        setPhoneError("");
        if (name === "") {
            setNameError("Name is Required");
            return;
        }
        if (password !== cpassword) {
            setPasswordError("Passwords do not match!!");
            return;
        }
        if (phone === "") {
            setPhoneError("Phone Number is required");
            return;
        }
        if (phone.length < 10) {
            setPhoneError("Phone Number is Invalid");
            return;
        }

        // CHECK AUTHENTICATION
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((cred) => {
                const user = {
                    displayName: name,
                    email: email,
                    phone: phone,
                    password: password,
                    uid: cred.user.uid,
                };

                // PUSHING USER DATA IN DB
                const userRef = db.doc(`users/${user.uid}`);
                userRef.set({
                    name,
                    email,
                    phone,
                    createdAt: new Date(),
                    uid: user.uid,
                });

                // PUSHING DOCTOR DATA IN DB
                const doctorRef = db.doc(`LabTester/${user.uid}`);
                doctorRef.set({
                    name,
                    email,
                    uid: user.uid,
                    imageURL: null,
                    isVerified: "false",
                    unreadCount: 1,
                });

                // PUSHING NEW NOTIFICATION
                db.doc(`LabTester/${cred.user.uid}`).collection("notifications").add({
                    message: "Complete your profile by going to the dashboard section!",
                    sentAt: new Date(),
                });
            })
            .then(() => {
                navigate(`/lab_dashboard`);
            })
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                    default:
                        break;
                }
            });
    };

    // SIGN UP WITH GOOGLE FUNCTION
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((cred) => {
                //console.log(cred);

                // PUSHING USER DATA IN DB
                const userRef = db.doc(`users/${cred.user.uid}`);
                userRef.set({
                    name: cred.user.displayName,
                    email: cred.user.email,
                    createdAt: new Date(),
                    uid: cred.user.uid,
                });

                // PUSHING DOCTOR DATA IN DB
                const doctorRef = db.doc(`LabTester/${cred.user.uid}`);
                doctorRef.set({
                    name: cred.user.displayName,
                    email: cred.user.email,
                    uid: cred.user.uid,
                    isVerified: "false",
                    imageURL: null,
                    unreadCount: 1,
                });

                // PUSHING NEW NOTIFICATION
                db.doc(`LabTester/${cred.user.uid}`).collection("notifications").add({
                    message: "Complete your profile by going to the dashboard section!",
                    sentAt: new Date(),
                });
            })
            .then(() => {
                navigate("/lab_dashboard");
            })
            .catch((e) => console.log(e.message));
    };


    return (
        <>
            <body className="ms-body ms-primary-theme ms-logged-out">

                <main className="body-content">

                    <nav className="navbar ms-navbar">
                        <div className="ms-aside-toggler ms-toggler pl-0" data-target="#ms-side-nav" data-toggle="slideLeft">
                            <span className="ms-toggler-bar bg-white"></span>
                            <span className="ms-toggler-bar bg-white"></span>
                            <span className="ms-toggler-bar bg-white"></span>
                        </div>
                        <div className="logo-sn logo-sm ms-d-block-sm">
                            <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="../../index-2.html"><img src={"../assets/img/medjestic-logo-84x41.png"} alt="logo" /> </Link>
                        </div>
                        <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">
                            <li className="ms-nav-item ms-search-form pb-0 py-0">
                                <form className="ms-form" method="post">
                                    <div className="ms-form-group my-0 mb-0 has-icon fs-14">
                                        <input type="search" className="ms-form-input" name="search" placeholder="Search here..." value="" />
                                        <i className="flaticon-search text-disabled"></i>
                                    </div>
                                </form>
                            </li>
                            <li className="ms-nav-item">
                                <Link to="/lab_login" className="btn btn-primary mt-0">Login</Link>
                            </li>
                        </ul>
                        <div className="ms-toggler ms-d-block-sm pr-0 ms-nav-toggler" data-toggle="slideDown" data-target="#ms-nav-options">
                            <span className="ms-toggler-bar bg-white"></span>
                            <span className="ms-toggler-bar bg-white"></span>
                            <span className="ms-toggler-bar bg-white"></span>
                        </div>
                    </nav>

                    <div className="ms-content-wrapper ms-auth">
                        <div className="ms-auth-container">
                            <div className="ms-auth-col">
                                <div className="ms-auth-bg"></div>
                            </div>
                            <div className="ms-auth-col">
                                <div className="ms-auth-form">
                                    <form className="needs-validation" onSubmit={handleSignup}>
                                        <h1>Create Account</h1>
                                        <p>Please enter personal information to continue</p>
                                        <div className="form-row">
                                            <div className="col-md-6 ">
                                                <label>Name</label>
                                                {nameError && <Alert severity="error">{nameError}</Alert>}
                                                <div className="input-group">
                                                    <input type="text" name="Name" fullWidthid="Name" label="Name" value={name} autoFocus onChange={(e) => setName(e.target.value)}
                                                        error={nameError} className="form-control" placeholder="Full name" required="" />
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 ">
                                                {emailError && <Alert severity="error">{emailError}</Alert>}
                                                <label >Email Address</label>
                                                <div className="input-group">
                                                    <input type="email" id="email" label="Email Address" name="email" autoComplete="email"
                                                        value={email} onChange={(e) => setEmail(e.target.value)} error={emailError} className="form-control" placeholder="Email Address" required="" />
                                                    <div className="invalid-feedback">
                                                        Please provide a valid email.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                        <div className="col-md-12 ">
                                            <label >Phone Number</label>
                                            {phoneError && <Alert severity="error">{phoneError}</Alert>}
                                            <div className="input-group">
                                                <input type="text" id="phone" label="Phone Number" name="phone" autoComplete="phone"
                                                    value={phone} onChange={(e) => setPhone(e.target.value)} error={phoneError} className="form-control" placeholder="Phone Number" required="" />
                                                <div className="invalid-feedback">
                                                    Please provide a valid number.
                                                </div>
                                            </div>
                                        </div>

                                            <div className="col-md-6 ">
                                                <label >Password</label>
                                                {passwordError && <Alert severity="error">{passwordError}</Alert>}
                                                <div className="input-group">
                                                    <input name="password" label="Password" type="password" id="password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)}
                                                        error={passwordError} className="form-control" placeholder="Password" required="" />
                                                    <div className="invalid-feedback">
                                                        Please provide a password.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 ">
                                                <label >Confirm Password</label>
                                                <div className="input-group">
                                                    <input name="password" label="Confirm Password" type="password" id="cpassword" autoComplete="confirm-password"
                                                        value={cpassword} onChange={(e) => setCPassword(e.target.value)} className="form-control" placeholder="Confirm Password" required="" />
                                                    <div className="invalid-feedback">
                                                        Please provide a password.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="form-control btn btn-primary submit px-3">Register</button>
                                        <span className="d-block text-center my-4">Or</span>
                                        <button type="button" className="btn mt-4 d-block w-100 btn-social-login" onClick={() => signInWithGoogle()}> <img src={"../../assets/img/others/google.png"} alt="image" /> <span>Signup with Google</span> </button>
                                        <p className="mb-0 mt-3 text-center">Already have an account? <Link className="btn-link" to="/doctor_login">Login</Link> </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </body>
        </>
    )
}

export default LabTester_Register