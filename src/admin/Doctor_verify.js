import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import { db } from "../firebase.mjs";


const Doctor_verify = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        db.collection("doctors").onSnapshot((snapshot) => {
            setDoctors(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    // FUNCTION TO VERIFY DOCTOR'S PROFILE
    const handleVerify = (uid) => {
        db.collection("doctors").doc(uid).update({
            isVerified: "true",
            unreadCount: 1,
            updatedAt: new Date(),
        });

        db.collection("doctors").doc(uid).collection("notifications").add({
            message: "Your profile has been verified by the admin!",
            sentAt: new Date(),
        });
    };

    // FUNCTION TO UNVERIFY DOCTOR'S PROFILE
    const handleUnverify = (uid) => {
        db.collection("doctors").doc(uid).update({
            isVerified: "false",
            unreadCount: 1,
            updatedAt: new Date(),
        });

        db.collection("doctors").doc(uid).collection("notifications").add({
            message: "Your profile has been unverified by the admin!",
            sentAt: new Date(),
        });
    };

    return (
        <>
            <AdminDashboard />
            <body className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <nav className="navbar ms-navbar">
                    <div className="ms-aside-toggler ms-toggler pl-0" data-target="#ms-side-nav" data-toggle="slideLeft">
                        <span className="ms-toggler-bar bg-white"></span>
                        <span className="ms-toggler-bar bg-white"></span>
                        <span className="ms-toggler-bar bg-white"></span>
                    </div>
                    <div className="logo-sn logo-sm ms-d-block-sm">
                        <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="/"><img src={"../images/medjestic-logo-84x41.png"} alt="logo" /> </Link>
                    </div>
                    <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">

                        <li className="ms-nav-item ms-d-none">
                            <Link to="/shopping" className="text-white" data-toggle="modal"><i className="flaticon-cart-shopping mr-2"></i> Shop</Link>
                        </li>
                        <li className="ms-nav-item ms-d-none">
                            <Link to="#prescription" className="text-white" data-toggle="modal"><i className="flaticon-pencil mr-2"></i>Blog</Link>
                        </li>
                        <li className="ms-nav-item  ms-d-none">
                            <Link to="/about" className="text-white" data-toggle="modal"><i className="flaticon-spreadsheet mr-2"></i>About</Link>
                        </li>
                        <li className="ms-nav-item  ms-d-none">
                            <Link to="/Contact" className="text-white" data-toggle="modal"><i className="flaticon-phone mr-2"></i>Contact</Link>
                        </li>
                    </ul>
                    <div className="ms-toggler ms-d-block-sm pr-0 ms-nav-toggler" data-toggle="slideDown" data-target="#ms-nav-options">
                        <span className="ms-toggler-bar bg-white"></span>
                        <span className="ms-toggler-bar bg-white"></span>
                        <span className="ms-toggler-bar bg-white"></span>
                    </div>
                </nav>


                <main className="body-content">
                    <div className="ms-content-wrapper">
                        <div className="row">
                            <h2>Unverifed Doctors</h2>
                            {doctors.map((doctor) => {
                                if (doctor.isVerified === "pending")
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
                                                            <button className="btn btn-primary mt-1 d-inline w-200" onClick={() => handleVerify(doctor.uid)}><i className="mt-1 mr-2 fas fa-user-check"></i>Verify</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                            })}
                            <h2>Verifed Doctors</h2>
                            {doctors.map((doctor) => {
                                if (doctor.isVerified === "true")
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
                                                            <button className="btn btn-primary mt-1 d-inline w-20" onClick={() => handleUnverify(doctor.uid)}><i className="mt-1 mr-2 fas fa-user-check"></i>Unverify</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                            })}
                        </div>
                    </div>
                </main>




                <div className="modal fade" id="reminder-modal" tabIndex="-1" role="dialog" aria-labelledby="reminder-modal">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header bg-secondary">
                                <h5 className="modal-title has-icon text-white"> New Reminder</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            </div>
                            <form>
                                <div className="modal-body">
                                    <div className="ms-form-group">
                                        <label>Remind me about</label>
                                        <textarea className="form-control" name="reminder"></textarea>
                                    </div>
                                    <div className="ms-form-group">
                                        <span className="ms-option-name fs-14">Repeat Daily</span>
                                        <label className="ms-switch float-right">
                                            <input type="checkbox" />
                                            <span className="ms-switch-slider round"></span>
                                        </label>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="ms-form-group">
                                                <input type="text" className="form-control datepicker" name="reminder-date" value="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="ms-form-group">
                                                <select className="form-control" name="reminder-time">
                                                    <option value="">12:00 pm</option>
                                                    <option value="">1:00 pm</option>
                                                    <option value="">2:00 pm</option>
                                                    <option value="">3:00 pm</option>
                                                    <option value="">4:00 pm</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-secondary shadow-none" data-dismiss="modal">Add Reminder</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="notes-modal" tabIndex="-1" role="dialog" aria-labelledby="notes-modal">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header bg-secondary">
                                <h5 className="modal-title has-icon text-white" id="NoteModal">New Note</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            </div>
                            <form>
                                <div className="modal-body">
                                    <div className="ms-form-group">
                                        <label>Note Title</label>
                                        <input type="text" className="form-control" name="note-title" value="" />
                                    </div>
                                    <div className="ms-form-group">
                                        <label>Note Description</label>
                                        <textarea className="form-control" name="note-description"></textarea>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-secondary shadow-none" data-dismiss="modal">Add Note</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="mymodal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog ms-modal-dialog-width">
                        <div className="modal-content ms-modal-content-width">
                            <div className="modal-header  ms-modal-header-radius-0">
                                <h4 className="modal-title text-white">Make An Appointment</h4>
                                <button type="button" className="close text-white" data-dismiss="modal" aria-hidden="true">x</button>

                            </div>
                            <div className="modal-body p-0 text-left">
                                <div className="col-xl-12 col-md-12">
                                    <div className="ms-panel ms-panel-bshadow-none">
                                        <div className="ms-panel-header">
                                            <h6>Patient Information</h6>
                                        </div>
                                        <div className="ms-panel-body">
                                            <form className="needs-validation" novalidate>
                                                <div className="form-row">
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom01">Patient Name</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Name" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom02">Date Of Birth</label>
                                                        <div className="input-group">
                                                            <input type="number" className="form-control" id="validationCustom02" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom03">Disease</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom03" placeholder="Disease" required />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-md-4 mb-2">
                                                        <label htmlFor="validationCustom04">Address</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom04" placeholder="Add Address" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom05">Phone no.</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom05" placeholder="Enter Phone No." required />

                                                        </div>

                                                    </div>

                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom06">Department Name</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom06" placeholder="Enter Department Name" required />

                                                        </div>
                                                    </div>
                                                </div>



                                                <div className="form-row">
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom07">Appointment With</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom07" placeholder="Enter Doctor Name" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom08">Appointment Date</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom08" placeholder="Enter Appointment Date" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label>Sex</label>
                                                        <ul className="ms-list d-flex">
                                                            <li className="ms-list-item pl-0">
                                                                <label className="ms-checkbox-wrap">
                                                                    <input type="radio" name="radioExample" value="" />
                                                                    <i className="ms-checkbox-check"></i>
                                                                </label>
                                                                <span> Male </span>
                                                            </li>
                                                            <li className="ms-list-item">
                                                                <label className="ms-checkbox-wrap">
                                                                    <input type="radio" name="radioExample" value="" checked="" />
                                                                    <i className="ms-checkbox-check"></i>
                                                                </label>
                                                                <span> Female </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <button className="btn btn-warning mt-4 d-inline w-20" type="submit">Reset</button>
                                                <button className="btn btn-primary mt-4 d-inline w-20" type="submit">Add Appointment</button>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="modal fade" id="prescription" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog ms-modal-dialog-width">
                        <div className="modal-content ms-modal-content-width">
                            <div className="modal-header  ms-modal-header-radius-0">
                                <h4 className="modal-title text-white">Make a prescription</h4>
                                <button type="button" className="close  text-white" data-dismiss="modal" aria-hidden="true">x</button>

                            </div>
                            <div className="modal-body p-0 text-left">
                                <div className="col-xl-12 col-md-12">
                                    <div className="ms-panel ms-panel-bshadow-none">
                                        <div className="ms-panel-header">
                                            <h6>Patient Information</h6>
                                        </div>
                                        <div className="ms-panel-body">
                                            <form className="needs-validation" novalidate>
                                                <div className="form-row">
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom09">Patient Name</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom09" placeholder="Enter Name" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom10">Date Of Birth</label>
                                                        <div className="input-group">
                                                            <input type="number" className="form-control" id="validationCustom10" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-2">
                                                        <label htmlFor="validationCustom11">Address</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom11" placeholder="Add Address" required />

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="form-row">
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom12">Phone no.</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom12" placeholder="Enter Phone No." required />

                                                        </div>

                                                    </div>

                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom13">Medication</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom13" placeholder="Acetaminophen" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom14">Period Of medication</label>
                                                        <div className="input-group">
                                                            <input type="number" className="form-control" id="validationCustom14" placeholder="" required />

                                                        </div>
                                                    </div>
                                                </div>



                                                <div className="form-row">

                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom15">Appointment With</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom15" placeholder="Enter Doctor Name" required />

                                                        </div>
                                                    </div>

                                                </div>
                                                <button className="btn btn-warning mt-4 d-inline w-20" type="submit">Save Prescription</button>
                                                <button className="btn btn-primary mt-4 d-inline w-20" type="submit">Save & Print</button>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="modal fade" id="report1" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog ms-modal-dialog-width">
                        <div className="modal-content ms-modal-content-width">
                            <div className="modal-header  ms-modal-header-radius-0">
                                <h4 className="modal-title text-white">Generate report</h4>
                                <button type="button" className="close  text-white" data-dismiss="modal" aria-hidden="true">x</button>

                            </div>
                            <div className="modal-body p-0 text-left">
                                <div className="col-xl-12 col-md-12">
                                    <div className="ms-panel ms-panel-bshadow-none">
                                        <div className="ms-panel-header">
                                            <h6>Patient Information</h6>
                                        </div>
                                        <div className="ms-panel-body">
                                            <form className="needs-validation" novalidate>
                                                <div className="form-row">
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom16">Patient Name</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom16" placeholder="Enter Name" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom17">Date Of Birth</label>
                                                        <div className="input-group">
                                                            <input type="number" className="form-control" id="validationCustom17" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-2">
                                                        <label htmlFor="validationCustom22">Address</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom22" placeholder="Add Address" required />

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="form-row">
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom18">Phone no.</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom18" placeholder="Enter Phone No." required />

                                                        </div>

                                                    </div>

                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom19">Report Type</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom19" placeholder="Diseases Report" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom23">Report Period</label>
                                                        <div className="input-group">
                                                            <input type="number" className="form-control" id="validationCustom23" placeholder="" required />

                                                        </div>
                                                    </div>
                                                </div>



                                                <div className="form-row">

                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom20">Appointment With</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom20" placeholder="Enter Doctor Name" required />

                                                        </div>
                                                    </div>

                                                </div>
                                                <button className="btn btn-warning mt-4 d-inline w-20" type="submit">Generate Report</button>
                                                <button className="btn btn-primary mt-4 d-inline w-20" type="submit">Generate & Print</button>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </body>

        </>
    )
}

export default Doctor_verify