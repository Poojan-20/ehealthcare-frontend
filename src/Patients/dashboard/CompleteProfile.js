import React, { useState } from 'react'
import { db } from "../../firebase.mjs";

const PatientCompletedetails = (props) => {
    const [name, setName] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [country, setCountry] = useState("");
    const [nameError, setNameError] = useState("");
    const [bloodGroupError, setBloodGroupError] = useState("");
    const [ageError, setAgeError] = useState("");
    const [genderError, setGenderError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [cityError, setCityError] = useState("");
    const [stateError, setStateError] = useState("");
    const [pincodeError, setPincodeError] = useState("");
    const [countryError, setCountryError] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setNameError("");
        setAgeError();
        setGenderError("");
        setCityError("");
        setStateError("");
        setPincodeError();
        setCountryError("");

        if (name === "") {
            setNameError("Name is Required");
            return;
        }
        if (bloodGroup === "") {
            setBloodGroupError("Blood group is Required");
        }
        if (age === "") {
            setAgeError("Age is Required");
            return;
        }
        if (gender === "") {
            setGenderError("Gender is Required");
            return;
        }
        if (address1 === "" || address2 === "") {
            setAddressError("Address is Required");
        }
        if (city === "") {
            setCityError("City is Required");
            return;
        }
        if (state === "") {
            setStateError("State is Required");
            return;
        }
        if (pincode === "") {
            setPincodeError("Pincode is Required");
            return;
        }
        if (country === "") {
            setCountryError("Country is Required");
            return;
        }

        //PUSHING USER DATA IN DATABASE
        const patientRef = db.doc(`patients/${props.uid}`);
        patientRef.set({
            uid: props.uid,
            name,
            bloodGroup,
            age,
            gender,
            address1,
            address2,
            city,
            state,
            country,
            pincode,
            imageURL: null,
            isVerified: "true",
            unreadCount: 0,
            updatedAt: new Date(),
        });
    };

    const handleChangeGender = (e) => {
        setGender(e.target.value);
    };
    return (
        <>
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <div className="ms-content-wrapper">
                    <div className="row">
                        <div className="col-xl-12 col-md-12">
                            <div className="ms-panel">
                                <div className="ms-panel-header ms-panel-custome">
                                    <h6>Patient Profile</h6>
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
                                                <label htmlFor="validationCustom008">Blood Group</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control"
                                                        id="Blood Group"
                                                        name="Blood Group"
                                                        label="Blood Group"
                                                        onChange={(e) => setBloodGroup(e.target.value)}
                                                        required="" />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="validationCustom0002">Age</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="age"
                                                        name="age"
                                                        autoComplete="age"
                                                        onChange={(e) => setAge(e.target.value)} placeholder="Age in Years" required="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="validationCustom202">Gender</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="gender"
                                                        name="gender"
                                                        autoComplete="gender"
                                                        onChange={handleChangeGender} placeholder="Gender" required="" />
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

export default PatientCompletedetails