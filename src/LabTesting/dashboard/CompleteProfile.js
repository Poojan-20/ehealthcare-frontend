import React, { useState, useEffect } from 'react'
import { useAuth } from "../../context/AuthContext";
import { Grid, TextField } from "@mui/material";
import { db, storage } from "../../firebase.mjs";
import { Alert } from "@mui/material";

const CompleteProfile = (props) => {
    const [name, setName] = useState("");
    const [regNumber, setRegNumber] = useState("");
    const [yearOfReg, setYearOfReg] = useState("");
    const [stateMedicalCouncil, setStateMedicalCouncil] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [country, setCountry] = useState("");
    const [registerError, setRegisterError] = useState("");
    const { currentUser } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (regNumber !== ("12345" || "23456" || "34567" || "45678" || "56789" || "67899" || "78999" || "89999" || "99999")) {
        //     return setRegisterError("Incorrect register number");
        // }

        //PUSHING USER DATA IN DATABASE
        const doctorRef = db.doc(`LabTester/${props.uid}`);
        doctorRef.set({
            uid: props.uid,
            name,
            yearOfReg,
            regNumber,
            stateMedicalCouncil,
            address1,
            address2,
            city,
            state,
            country,
            pincode,
            imageURL: null,
            isVerified: "pending",
            unreadCount: 0,
            updatedAt: new Date(),
        });
    };

    return (
        <>
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <div className="ms-content-wrapper">
                    <div className="row">
                        <div className="col-xl-12 col-md-12">
                            <div className="ms-panel">
                                <div className="ms-panel-header ms-panel-custome">
                                    <h6>Doctor Profile</h6>
                                </div>
                                <div className="ms-panel-body">
                                    <form className="needs-validation" onSubmit={handleSubmit}>
                                        <div className="form-row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="validationCustom0001">Name</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="Name" name="Name" label="Name" fullwidth placeholder="Enter Full Name" required="" onChange={(e) => setName(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="validationCustom0003">Registration Number</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="Registration Number"
                                                        name="Registration Number"
                                                        onChange={(e) => setRegNumber(e.target.value)} placeholder="E.g 15678" required="" />

                                                </div>
                                                {/* {registerError && <Alert severity="error">{registerError}</Alert>} */}
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="validationCustom0003">Year Of Registration</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="Year of Registration"
                                                        name="Year of Registration"
                                                        onChange={(e) => setYearOfReg(e.target.value)} placeholder="Year Of Registration" required="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <label htmlFor="validationCustom009">State Medical Council</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="State Medical Council"
                                                        name="State Medical Council"
                                                        onChange={(e) => setStateMedicalCouncil(e.target.value)} placeholder="E.g Maharashtra" required="" />

                                                </div>
                                            </div>

                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6 mb-3">
                                                <label>Address Line 1</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="address1"
                                                        name="address1"
                                                        autoComplete="shipping address-line1"
                                                        onChange={(e) => setAddress1(e.target.value)} rows="3" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label>Address Line 2</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="address2"
                                                        name="address2"
                                                        autoComplete="shipping address-line2"
                                                        onChange={(e) => setAddress2(e.target.value)} rows="3" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6 mb-3">
                                                <label>City</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="city"
                                                        name="city"
                                                        autoComplete="shipping address-level2"
                                                        onChange={(e) => setCity(e.target.value)} required="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label>State</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="state"
                                                        name="state"
                                                        onChange={(e) => setState(e.target.value)} placeholder="State/Province/Region" required="" />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6 mb-3">
                                                <label>Country</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="country"
                                                        name="country"
                                                        autoComplete="shipping country"
                                                        onChange={(e) => setCountry(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label>Zipcode</label>
                                                <div className="input-group">
                                                    <input className="form-control" id="zip"
                                                        name="zip"
                                                        autoComplete="shipping postal-code"
                                                        onChange={(e) => setPincode(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary mt-4 d-inline w-20" type="submit">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompleteProfile