import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import CartNavbar from './CartNavbar';
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase.mjs";
import firebase from "../firebase.mjs";

const CartuserAccount = () => {

    const { currentUser } = useAuth();
    const navigate = useNavigate()

    const handleSignout = () => {
        firebase.auth().signOut();
        navigate("/shopping");
    };

    const [user, setUser] = useState(null);
    // const [phone,setphone] = useState("");

    const [curuser, setCurser] = useState([]);

    useEffect(() => {
        db.collection("users").onSnapshot((snapshot) => {
            setCurser(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    useEffect(() => {
        // Fetch data from both collections
        db.collection("patients")
            .where("uid", "==", currentUser.uid)
            .get()
            .then((querySnapshot) => {
                if (!querySnapshot.empty) {
                    setUser(querySnapshot.docs[0].data());
                } else {
                    // Check if data exists in doctors collection
                    db.collection("doctors")
                        .where("uid", "==", currentUser.uid)
                        .get()
                        .then((querySnapshot) => {
                            if (!querySnapshot.empty) {
                                setUser(querySnapshot.docs[0].data());
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
                                                        setUser(querySnapshot.docs[0].data());
                                                    } else {
                                                        db.collection("admins")
                                                            .where("uid", "==", currentUser.uid)
                                                            .get()
                                                            .then((querySnapshot) => {
                                                                if (!querySnapshot.empty) {
                                                                    setUser(querySnapshot.docs[0].data());
                                                                    console.log(user)
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
                        .catch((error) => {
                            console.log("Error getting documents: ", error);
                        });
                }
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }, [currentUser.uid]);
    return (
        <>
            <body>
                <Helmet>
                    <script src="./jquery-2.2.4.min.js"></script>
                    <script src="./plugins.bundle.js"></script>
                    {/* <script src="./theme.js"></script> */}
                    <script src="./theme.js" type="text/babel" />
                </Helmet>

                <CartNavbar />

                <main>
                    <div className="accounnt_header">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-auto col-12 order-md-2">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb mb-0">
                                            <li className="breadcrumb-item">
                                                <Link className="text-nowrap" to="/shopping"><i className="fa fa-home mr-2"></i>Home</Link>
                                            </li>
                                            <li className="breadcrumb-item text-nowrap active" aria-current="page">Account</li>
                                        </ol>
                                    </nav>
                                </div>
                                <div className="order-md-1 text-center text-md-left col-lg col-12">
                                    <h1 className="h3 mb-0" style={{ color: "white" }}>Account</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accounnt_body">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <nav className="navbar navbar-expand-md mb-4 mb-lg-0 sidenav">

                                        <Link className="d-xl-none d-lg-none d-md-none text-inherit fw-bold" to="#">Sidebar Menu</Link>

                                        <button className="navbar-toggler d-md-none rounded bg-primary text-light" type="button"
                                            data-toggle="collapse" data-target="#sidenav" aria-controls="sidenav"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="ti-menu"></span>
                                        </button>

                                        <div className="collapse navbar-collapse" id="sidenav">
                                            <div className="navbar-nav flex-column">
                                                {curuser.map((user) => {
                                                    if (user.uid === currentUser.uid)
                                                        return (
                                                            <div className="border-bottom">

                                                                <div className="m-4">
                                                                    <div className="row no-gutters align-items-center">
                                                                        <div className="col-auto">
                                                                            <div className="avater btn-soft-primary">Hi</div>
                                                                        </div>
                                                                        <div className="col-auto">
                                                                            <h6 className="d-block font-weight-bold mb-0">{user.name}</h6>
                                                                            <small className="text-muted">{user.email}</small>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                })}


                                                <ul className="list-unstyled mb-0">
                                                    <li className="nav-item active">
                                                        <Link className="nav-link" to="/useraccount"><i className="fa fa-user"></i> My
                                                            Account</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/cartchange-password"><i className="fa fa-lock"></i>
                                                            Password</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/cartaddress"><i className="fa fa-address-book"></i>
                                                            Address</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/cartorder"><i className="fa fa-shopping-cart"></i>
                                                            Order</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                    <Link className="nav-link" to="/order-details"><i className="fa fa-shopping-cart"></i>
                                                        Order Details</Link>
                                                </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/wishlist"><i className="fa fa-heart"></i>
                                                            Wishlist</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="#" onClick={handleSignout}><i className="fa fa-sign-out"></i> Logout</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                    <div className="ml-0 ml-md-4">
                                        <div className="d-none d-md-block">
                                            <div className="row mb-md-5">
                                                <div className="col">
                                                    <h5 className="mb-1 text-white">Account Details</h5>
                                                    <p className="mb-0 text-white small">
                                                        You have full control to manage your own Account.
                                                    </p>
                                                </div>
                                                <div className="col-auto">
                                                    <Link to="/cartchange-password" className="btn btn-primary btn-sm"> Change Password</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <div>
                                                    {user && (
                                                        <div className="row align-items-end">

                                                            <div className="mb-3 col-12 col-md-6">
                                                                <label className="form-label" for="name">Name: {user.name}{ }</label>
                                                            </div>
                                                            <div className="mb-3 col-12 col-md-6">
                                                                <label className="form-label" for="address">Address: {user.address1} , {user.city} , {user.state} - {user.pincode} </label>

                                                            </div>
                                                            {curuser.map((user) => {
                                                                if (user.uid === currentUser.uid)
                                                                    return (
                                                                        <>
                                                                            <div className="mb-3 col-12 col-md-6">
                                                                                <label className="form-label" for="fname">Email: {user.email}</label>
                                                                            </div>
                                                                            <div className="mb-3 col-12 col-md-6">
                                                                                <label className="form-label" for="phone">Phone: {user.phone} </label>
                                                                            </div>
                                                                        </>
                                                                    )
                                                            })}
                                                        </div>
                                                    )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <div className="modal clean_modal clean_modal-lg" id="login_modal" tabIndex="-1" aria-labelledby="login_modal"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12">
                                        <Link to="#" className="btn btn-gray-border btn-full rounded btn-large text-capitalize mb-3">
                                            <img src="assets/img/facebook.png" alt="" />
                                            Login with Facebook
                                        </Link>
                                        <Link to="#" className="btn btn-gray-border btn-full rounded btn-large text-capitalize">
                                            <img src="assets/img/google.png" alt="" />
                                            Login with Google
                                        </Link>
                                    </div>
                                    <div className="col-12 text-center">
                                        <p className="text-muted my-4">Or Login With</p>
                                    </div>
                                </div>
                                <div className="login_error d-none">
                                    <div className="alert" role="alert">
                                    </div>
                                </div>
                                <form action="#" id="login_modal_form" method="POST">
                                    <div className="form-group">
                                        <input name="email" required type="email" placeholder="Email"
                                            className="form-control input-lg rounded" />
                                    </div>
                                    <div className="form-group">
                                        <input name="password" required type="password" placeholder="Password"
                                            className="form-control input-lg rounded" />
                                    </div>
                                    <button type="submit" id="login_btn" name="submit"
                                        className="btn btn-primary btn-full btn-medium rounded">Login</button>
                                    <div className="form-group text-center small font-weight-bold mt-3">
                                        <Link to="#" data-toggle="modal" data-dismiss="modal" data-target="#forgot_modal"> Forgot
                                            Password?</Link>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="form-group text-center small font-weight-bold mb-0">
                                        Don’t have an account? <Link to="#" data-toggle="modal" data-dismiss="modal"
                                            data-target="#register_modal"> Register</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal clean_modal" id="forgot_modal" tabIndex="-1" aria-labelledby="forgot_modal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal-body">
                                <form action="#" method="POST">
                                    <div className="form-group">
                                        <input name="password" type="password" placeholder="Old Password"
                                            className="form-control input-lg rounded" />
                                    </div>
                                    <div className="form-group">
                                        <input name="password" type="password" placeholder="New Password"
                                            className="form-control input-lg rounded" />
                                    </div>
                                    <div className="form-group">
                                        <input name="password" type="text" placeholder="Confirm Password"
                                            className="form-control input-lg rounded" />
                                    </div>
                                    <button type="submit" name="submit" className="btn btn-primary btn-full btn-medium rounded">Change
                                        Password</button>
                                    <div className="form-group text-center small font-weight-bold mt-3">
                                        Want to <Link to="#" data-toggle="modal" data-dismiss="modal" data-target="#login_modal">
                                            Login?</Link>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="form-group text-center small font-weight-bold mb-0">
                                        Don’t have an account? <Link to="#" data-toggle="modal" data-dismiss="modal"
                                            data-target="#register_modal"> Register</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal clean_modal clean_modal-lg" id="register_modal" tabIndex="-1" aria-labelledby="register_modal"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal-body">
                                <div className="register_error d-none">
                                    <div className="alert f-size-16" role="alert">
                                    </div>
                                </div>
                                <form action="#" method="POST" id="register_form">
                                    <div className="row">
                                        <div className="col-12">
                                            <Link to="#" className="btn btn-gray-border btn-full rounded btn-large text-capitalize mb-3">
                                                <img src="assets/img/facebook.png" alt="" />
                                                Register with Facebook
                                            </Link>
                                            <Link to="#" className="btn btn-gray-border btn-full rounded btn-large text-capitalize">
                                                <img src="assets/img/google.png" alt="" />
                                                Register with Google
                                            </Link>
                                        </div>
                                        <div className="col-12 text-center">
                                            <p className="text-muted my-4">Or Register With</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group mb-3">
                                                <input className="form-control" required name="fname" placeholder="First Name"
                                                    type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group mb-3">
                                                <input className="form-control" required name="lname" placeholder="Last Name"
                                                    type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input name="email" type="email" required placeholder="Email" className="form-control rounded" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input name="phone" type="text" required placeholder="Phone"
                                            className="form-control rounded checkIsNumber phone-check" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input name="password" type="password" required placeholder="Password"
                                            className="form-control rounded" />
                                    </div>

                                    <button type="submit" id="register_btn" name="submit"
                                        className="btn btn-primary btn-full btn-medium rounded">Register</button>

                                    <div className="form-group text-center small font-weight-bold mt-3">
                                        By continuing you agree to our <Link to="#"> Terms and conditions.</Link>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="form-group text-center small font-weight-bold mb-0">
                                        Don’t have an account? <Link to="#" data-toggle="modal" data-dismiss="modal"
                                            data-target="#login_modal"> Login</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </body>
        </>
    )
}

export default CartuserAccount