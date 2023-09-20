import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CartNavbar from './CartNavbar'
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase.mjs";
import firebase from "../firebase.mjs";
import { message } from 'antd';

const CartAddress = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate()

    const handleSignout = () => {
        firebase.auth().signOut();
        navigate("/shopping");
    };

    const [user, setUser] = useState(null);
    const [curuser, setCurser] = useState([]);
    const ref = useRef(null)
    const refClose = useRef(null)
    const [name, setName] = useState("");
    const [address1, setAddress1] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    // const [country, setCountry] = useState("");

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
                                console.log("No data found for UID: " + currentUser.uid);
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

    

    const updateProfile = (currentProfile) => {
        ref.current.click()
        setName(currentProfile.name)
        setAddress1(currentProfile.address1)
        setCity(currentProfile.city)
        setState(currentProfile.state)
        setPincode(currentProfile.pincode)
    }

    const handleSubmit = (e) => {
        console.log("HII SUbmit button clicked")
        e.preventDefault()
        db.collection("patients").doc(currentUser.uid).update({
            address1: address1,
            city: city,
            state: state,
            pincode: pincode,
            updatedAt: new Date(),
        })
        .then(() => {
            console.log("Updated")
            message.success(`Address Updated successfully!` , 2);
        });
        
    };

    return (
        <>
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
                                        <li className="breadcrumb-item">
                                            <Link className="text-nowrap" to="/useraccount"><i className="fa fa-home mr-2"></i>Account</Link>
                                        </li>
                                        <li className="breadcrumb-item text-nowrap active" aria-current="page">Address</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="order-md-1 text-center text-md-left col-lg col-12">
                                <h1 className="h3 mb-0" style={{ color: "white" }}>Address</h1>
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

                                    <button className="navbar-toggler d-md-none rounded bg-primary text-light" type="button" data-bs-toggle="collapse" data-bs-target="#sidenav" aria-controls="sidenav" aria-expanded="false" aria-label="Toggle navigation">
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
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/useraccount"><i className="fa fa-user"></i> My
                                                        Account</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/cartchange-password"><i className="fa fa-lock"></i>
                                                        Password</Link>
                                                </li>
                                                <li className="nav-item active">
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
                                                <h5 className="mb-1 text-white">Address</h5>
                                                <p className="mb-0 text-white small">
                                                    You have full control to manage your own account setting.
                                                </p>
                                            </div>
                                            <div className="col-auto">
                                                <Link to="#" data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#address_model" className="btn btn-primary btn-sm"> Add New Address</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-5"></div>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                {
                                                    user && (
                                                        <div className="col-lg-6">
                                                            <div className="address-block bg-light rounded p-3">
                                                                <form onSubmit={handleSubmit}>
                                                                {/* <Link to="" className="edit_address" data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#address_model">
                                                                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                                </Link> */}
                                                                <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
                                                                    Launch demo modal
                                                                </button>
                                                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                                        <div className="modal-content">
                                                                            <div className="modal-header">
                                                                                <h5 className="modal-title" id="exampleModalLabel">Edit Profile</h5>
                                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                            </div>
                                                                            <div className="modal-body">
                                                                                <form onSubmit={handleSubmit}> 
                                                                                    <div className="mb-3">
                                                                                        <label htmlFor="name" className="form-label">Name</label>
                                                                                        <input type="text" className="form-control" id="efirstname" value={name} required name="efirstname" />
                                                                                    </div>
                                                                                    <div className="mb-3">
                                                                                        <label htmlFor="address" className="form-label">Address</label>
                                                                                        <input type="text" className="form-control" id="address1" name="eaddress" value={address1} onChange={(e) => setAddress1(e.target.value)}/>
                                                                                    </div>
                                                                                    <div className="mb-3">
                                                                                        <label htmlFor="city" className="form-label">City</label>
                                                                                        <input type="text" className="form-control" id="city" name="ecity" value={city} onChange={(e) => setCity(e.target.value)} />
                                                                                    </div>
                                                                                    <div className="mb-3">
                                                                                        <label htmlFor="state" className="form-label">State</label>
                                                                                        <input type="text" className="form-control" id="state" name="estate" value={state} onChange={(e) => setState(e.target.value)}o />
                                                                                    </div>
                                                                                    <div className="mb-3">
                                                                                        <label htmlFor="pincode" className="form-label">Pincode</label>
                                                                                        <input type="text" className="form-control" id="pincode" name="epincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                                                                                    </div>

                                                                                    {/* <div className="mb-3">
                                                                                        <label htmlFor="phone" className="form-label">Phone</label>
                                                                                        <input type="text" className="form-control" id="ephone" name="ephone" value={profilee.ephone} onChange={onChange} />
                                                                                    </div> */}
                                                                                </form>
                                                                            </div>
                                                                            <div className="modal-footer">
                                                                                <button type="submit" ref={refClose} className="btn btn-primary" onSubmit={handleSubmit}>Update</button>
                                                                                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <span style={{ cursor: 'pointer' }} >Update</span> */}
                                                                <h6>My Home Address</h6>
                                                                {curuser.map((user) => {
                                                                    if (user.uid === currentUser.uid)
                                                                        return (
                                                                            <p className="text-muted">{user.phone}</p>
                                                                        )
                                                                }
                                                                )}
                                                                <span className="text-muted">{user.address1} , {user.city} , {user.state} - {user.pincode}</span>
                                                                <Link to="" className="delete_address">
                                                                    <i className="fa fa-trash text-danger" aria-hidden="true"></i>
                                                                </Link>
                                                                <Link to="" className="edit_address" data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#address_model">
                                                                    {/* <i className="fa fa-pencil-square-o" aria-hidden="true"></i> */}
                                                                    <i className="fas fa-edit mx-2" data-link-action="edit-address" style={{ cursor: 'pointer' }} onClick={() => { updateProfile(user) }}></i>

                                                                </Link>
                                                                </form>

                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                <div className="col-lg-6"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="modal clean_modal clean_modal-lg" id="login_modal" tabIndex="-1" aria-labelledby="login_modal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
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
                            <form action="" id="login_modal_form" method="POST">
                                <div className="form-group">
                                    <input name="email" required="" type="email" placeholder="Email" className="form-control input-lg rounded" />
                                </div>
                                <div className="form-group">
                                    <input name="password" required="" type="password" placeholder="Password" className="form-control input-lg rounded" />
                                </div>
                                <button type="submit" id="login_btn" name="submit" className="btn btn-primary btn-full btn-medium rounded">Login</button>
                                <div className="form-group text-center small font-weight-bold mt-3">
                                    <Link to="#" data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#forgot_modal"> Forgot
                                        Password?</Link>
                                </div>
                                <hr className="my-4" />
                                <div className="form-group text-center small font-weight-bold mb-0">
                                    Don’t have an account? <Link to="#" data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#register_modal"> Register</Link>
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
                            <span aria-hidden="true">×</span>
                        </button>
                        <div className="modal-body">
                            <form action="#" method="POST">
                                <div className="form-group">
                                    <input name="password" type="password" placeholder="Old Password" className="form-control input-lg rounded" />
                                </div>
                                <div className="form-group">
                                    <input name="password" type="password" placeholder="New Password" className="form-control input-lg rounded" />
                                </div>
                                <div className="form-group">
                                    <input name="password" type="text" placeholder="Confirm Password" className="form-control input-lg rounded" />
                                </div>
                                <button type="submit" name="submit" className="btn btn-primary btn-full btn-medium rounded">Change
                                    Password</button>
                                <div className="form-group text-center small font-weight-bold mt-3">
                                    Want to <Link to="#" data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#login_modal">
                                        Login?</Link>
                                </div>
                                <hr className="my-4" />
                                <div className="form-group text-center small font-weight-bold mb-0">
                                    Don’t have an account? <Link to="#" data-bs-toggle="modal" data-dismiss="modal" data-bs-target="#register_modal"> Register</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartAddress