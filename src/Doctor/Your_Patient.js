import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase.mjs";
import { Container, List, ListItem, Typography } from "@mui/material";
import Patient_List from "./Patient_List";
import { createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import DoctorSideDash from "./DoctorSideDash";

const Your_Patients = () => {
    const [yourPatients, setYourPatients] = useState([]);

    const theme = createTheme();
    const { currentUser } = useAuth();

    const container = {
        minHeight: "100vh",
        background: "linear-gradient(135deg, #dff6fe 30%, #0095de 90%)",
        backgroundImage: `url('../images/blue2.jpg')`,
        backgroundPosition: "center",
        backgroundRepeat: "repeat-x",
        backgroundSize: "cover",
        [theme.breakpoints.down("md")]: {
            mt: "10vh",
            ml: "10vw",
            maxWidth: "95vw",
        },
        [theme.breakpoints.down("sm")]: {
            ml: "12vw",
            maxWidth: "80vw",
        },
    };

    // FETCHING DOCTOR'S DATA FROM DB
    useEffect(() => {
        db.collection("doctors")
            .doc(currentUser.uid)
            .collection("patients")
            .onSnapshot((snapshot) => {
                setYourPatients(snapshot.docs.map((doc) => doc.data()));
            });
    }, []);


    return (
        <>
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <DoctorSideDash />
                <main className="body-content">
                    <nav className="navbar ms-navbar">
                        <div className="ms-aside-toggler ms-toggler pl-0" data-target="#ms-side-nav" data-toggle="slideLeft">
                            <span className="ms-toggler-bar bg-white"></span>
                            <span className="ms-toggler-bar bg-white"></span>
                            <span className="ms-toggler-bar bg-white"></span>
                        </div>
                        <div className="logo-sn logo-sm ms-d-block-sm">
                            <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="#"><img src={"../images/medjestic-logo-84x41.png"} alt="logo" /> </Link>
                        </div>
                        <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">

                            <li className="ms-nav-item  ms-d-none">
                                <Link to="/shopping" className="text-white" data-toggle="modal"><i className="flaticon-spreadsheet mr-2"></i> Shop</Link>
                            </li>
                            <li className="ms-nav-item ms-d-none">
                                <Link to="/labhome" className="text-white" data-toggle="modal"><i className="flaticon-list mr-2"></i>Lab Testing</Link>
                            </li>
                            <li className="ms-nav-item  ms-d-none">
                                <Link to="/about" className="text-white" data-toggle="modal"><i className="flaticon-spreadsheet mr-2"></i>About</Link>
                            </li>
                            <li className="ms-nav-item  ms-d-none">
                                <Link to="/contact" className="text-white" data-toggle="modal"><i className="flaticon-phone mr-2"></i>Contact</Link>
                            </li>
                        </ul>
                        <div className="ms-toggler ms-d-block-sm pr-0 ms-nav-toggler" data-toggle="slideDown" data-target="#ms-nav-options">
                            <span className="ms-toggler-bar bg-white"></span>
                            <span className="ms-toggler-bar bg-white"></span>
                            <span className="ms-toggler-bar bg-white"></span>
                        </div>
                    </nav>
                    <div className="ms-content-wrapper">
                        <div className="row">
                            <div className="col-xl-12 col-md-12">
                                <div className="ms-panel-header">
                                    <Container maxWidth="lg" sx={container}>
                                        <Typography variant="h4" align="center" style={{ "fontWeight": "bold", "color": "#063547" }}>
                                            Your Patients
                                        </Typography>
                                        <List>
                                            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                                                <div className="ms-content-wrapper">
                                                    <h4>Patient List</h4>
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <table id="data-table-2" className="table table-striped thead-primary w-100 dataTable no-footer" role="grid"
                                                                aria-describedby="data-table-2_info" style={{ "width": "1159px" }}>
                                                                <thead style={{ "textAlign": 'center' }}>
                                                                    <tr role="row">
                                                                        <th className="sorting" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                                                                            aria-label="Address: activate to sort column ascending" style={{ "width": "80px" }}>Image</th>
                                                                        <th className="sorting_asc" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                                                                            aria-sort="ascending" aria-label="Name: activate to sort column descending"
                                                                            style={{ "width": "83px" }}>Name</th>
                                                                        <th className="sorting" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                                                                            aria-label="Address: activate to sort column ascending" style={{ "width": "263px" }}>Address</th>
                                                                        <th className="sorting" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                                                                            aria-label="Age: activate to sort column ascending" style={{ "width": "39px" }}>Age</th>
                                                                        <th className="sorting" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                                                                            aria-label="Email: activate to sort column ascending" style={{ "width": "150px" }}>Email</th>
                                                                        <th className="sorting" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                                                                            aria-label="Action: activate to sort column ascending" style={{ "width": "60px" }}>View Profile</th>
                                                                    </tr>
                                                                </thead>
                                                                {yourPatients.map((yourPatient) => {
                                                                    {
                                                                        return (
                                                                            <Patient_List uid={yourPatient.patientUID} />
                                                                        );
                                                                    }
                                                                })}
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </List>
                                    </Container>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </>
    );
};

export default Your_Patients;
