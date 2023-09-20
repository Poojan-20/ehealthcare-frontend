import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Alert, } from "@mui/material";
import { auth, db } from "../firebase.mjs";

const Admin_login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        db.collection("admins").onSnapshot((snapshot) => {
            setAdmins(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    // SIGN IN WITH EMAIL AND PASSWORD FUNCTION
    const handleSignin = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            return setEmailError("All fields are required!");
        }

        {
            admins.map((admin) => {
                if (admin.email === email) {
                    auth
                        .signInWithEmailAndPassword(email, password)
                        .then(() => {
                            navigate("/adminhome");
                        })
                        .catch((err) => {
                            switch (err.code) {
                                case "auth/user-not-found":
                                case "auth/invalid-email":
                                    setEmailError(err.message);
                                    break;
                                case "auth/wrong-password":
                                    setPasswordError(err.message);
                                    break;
                                default:
                                    break;
                            }
                        });
                } else {
                    setEmailError("Email is not authenticated!");
                }
            });
        }
    }
    return (
        <body className="ms-body ms-primary-theme ms-logged-out">

            <main className="body-content">

                <nav className="navbar ms-navbar">
                    <div className="ms-aside-toggler ms-toggler pl-0" data-target="#ms-side-nav" data-toggle="slideLeft">
                        <span className="ms-toggler-bar bg-white"></span>
                        <span className="ms-toggler-bar bg-white"></span>
                        <span className="ms-toggler-bar bg-white"></span>
                    </div>
                    <div className="logo-sn logo-sm ms-d-block-sm">
                        <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="/"><img src={"../assets/img/medjestic-logo-84x41.png"} alt="logo" /> </Link>
                    </div>
                    <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">
                        <li className="ms-nav-item ms-search-form pb-0 py-0">
                            {/* <form className="ms-form" method="post">
                                <div className="ms-form-group my-0 mb-0 has-icon fs-14">
                                    <input type="search" className="ms-form-input" name="search" placeholder="Search here..." value="" />
                                    <i className="flaticon-search text-disabled"></i>
                                </div>
                            </form> */}
                        </li>
                        <li className="ms-nav-item">
                            <div className="logo-sn logo-sm ms-d-block-sm">
                                <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="/"><img src={"../assets/img/medjestic-logo-84x41.png"} alt="logo" /> </Link>
                            </div>
                            <Link to="/" className="btn btn-primary mt-0">Home</Link>
                            <Link to="/lab_login" className="btn btn-primary mt-0" style={{marginLeft:"15px"}}>Lab Tester</Link>
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
                                <form noValidate="" onSubmit={handleSignin}>
                                    <h1>Login to Account</h1>
                                    <p>Please enter your email and password to continue</p>
                                    <div className="mb-3">
                                        {emailError && <Alert severity="error">{emailError}</Alert>}
                                        <label htmlFor="validationCustom08">Email Address</label>
                                        <div className="input-group">
                                            <input type="email" className="form-control" id="email" label="Email Address" name="email" autoComplete="email"
                                                value={email} onChange={(e) => setEmail(e.target.value)} error={emailError} placeholder="Email Address" required="" />
                                            <div className="invalid-feedback">
                                                Please provide a valid email.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        {passwordError && <Alert severity="error">{passwordError}</Alert>}
                                        <label htmlFor="validationCustom09">Password</label>
                                        <div className="input-group">
                                            <input type="password" name="password" label="Password" id="password" value={password}
                                                onChange={(e) => setPassword(e.target.value)} error={emailError} className="form-control" placeholder="Password" required="" />
                                            <div className="invalid-feedback">
                                                Please provide a password.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="ms-checkbox-wrap">
                                            <input className="form-check-input" type="checkbox" value="" />
                                            <i className="ms-checkbox-check"></i>
                                        </label>
                                        <span> Remember Password </span>
                                        <label className="d-block mt-3"> <Link to="#" className="btn-link" data-toggle="modal" data-target="#modal-12">Forgot Password?</Link></label>
                                    </div>
                                    <button className="btn btn-primary mt-4 d-block w-100" type="submit">Sign In</button>
                                </form>
                                {/* ERROR ALERTS */}

                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="modal-12" tabIndex="-1" role="dialog" aria-labelledby="modal-12">
                    <div className="modal-dialog modal-dialog-centered modal-min" role="document">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <i className="flaticon-secure-shield d-block"></i>
                                <h1>Forgot Password?</h1>
                                <p> Enter your email to recover your password </p>
                                <form method="post">
                                    <div className="ms-form-group has-icon">
                                        <input type="text" placeholder="Email Address" className="form-control" name="forgot-password" value="" />
                                        <i className="material-icons">email</i>
                                    </div>
                                    <button type="submit" className="btn btn-primary shadow-none">Reset Password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    )
}

export default Admin_login