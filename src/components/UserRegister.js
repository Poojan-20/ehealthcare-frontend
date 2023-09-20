import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import firebase, { db, auth } from '../firebase.mjs';
import { Alert } from "@mui/material";
import CartNavbar from './CartNavbar';

const UserRegister = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [passwordError, setPasswordError] = useState("");
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
                    password: password,
                    phone: phone,
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

                // PUSHING PATIENT DATA IN DB
                const patientRef = db.doc(`shopUsers/${user.uid}`);
                patientRef.set({
                    name,
                    email,
                    imageURL: null,
                    uid: user.uid,
                    isVerified: "false",
                    unreadCount: 1,
                });

                // PUSHING NEW NOTIFICATION
                // db.doc(`patients/${cred.user.uid}`).collection("notifications").add({
                //     message: "Complete your profile by going to the dashboard section!",
                //     sentAt: new Date(),
                // });
            })
            .then(() => {
                navigate(`/user_dashboard`);
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

                // PUSHING PATIENT DATA IN DB
                const patientRef = db.doc(`shopUsers/${cred.user.uid}`);
                patientRef.set({
                    name: cred.user.displayName,
                    email: cred.user.email,
                    uid: cred.user.uid,
                    isVerified: "false",
                    imageURL: null,
                    unreadCount: 1,
                });

                // PUSHING NEW NOTIFICATION
                // db.doc(`patients/${cred.user.uid}`).collection("notifications").add({
                //     message: "Complete your profile by going to the dashboard section!",
                //     sentAt: new Date(),
                // });
            })
            .then(() => {
                navigate("/user_dashboard");
            })
            .catch((e) => console.log(e.message));
    };

    return (
        <>
            <body className="ms-body ms-primary-theme ms-logged-out">
                <CartNavbar/>
                <main className="body-content">

                    <div className="ms-content-wrapper ms-auth">
                        <div className="ms-auth-container">
                            <div className="ms-auth-col">
                                <div className="ms-auth-background"></div>
                            </div>
                            <div className="ms-auth-col">
                                <div className="ms-auth-form" >
                                    <form className="needs-validation" onSubmit={handleSignup} style={{margintop: "10rem"}}>                                 <h1>Create Account</h1>
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
                                            <label >Email Address</label>
                                            {emailError && <Alert severity="error">{emailError}</Alert>}
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
                                            <div className="input-group">
                                                {passwordError && <Alert severity="error">{passwordError}</Alert>}
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
                                    <p className="mb-0 mt-3 text-center">Already have an account? <Link className="btn-link" to="/userlogin">Login</Link> </p>
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

export default UserRegister