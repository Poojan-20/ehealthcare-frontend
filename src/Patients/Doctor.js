import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { db } from "../firebase.mjs";
import {
    Avatar,
    Container,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import Book_Appointment from "./Book_Appointment";
import Ratings from "../Doctor/Ratings";
import Review from "../Doctor/Review";
import { createTheme } from "@mui/material/styles";
import PatientSideDash from "./PatientSideDash";

const Doctor = () => {
    const theme = createTheme();

    const container = {
        mt: "12vh",
        ml: "5vw",
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
            maxWidth: "85vw",
        },
    };

    const [doctors, setDoctors] = useState([]);
    const location = useLocation();
    const uid = location.pathname.substring(
        location.pathname.lastIndexOf("/") + 1
    );

    // FETCHING PATIENT'S DATA FROM DB
    useEffect(() => {
        db.collection("doctors").onSnapshot((snapshot) => {
            setDoctors(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    return (
        <>
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <PatientSideDash />
                <main className="body-content">
                    <nav className="navbar ms-navbar">
                        <div className="ms-aside-toggler ms-toggler pl-0" data-target="#ms-side-nav" data-toggle="slideLeft">
                            <span className="ms-toggler-bar bg-white"></span>
                            <span className="ms-toggler-bar bg-white"></span>
                            <span className="ms-toggler-bar bg-white"></span>
                        </div>
                        <div className="logo-sn logo-sm ms-d-block-sm">
                            <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="../../index.html"><img src={"../images/medjestic-logo-84x41.png"} alt="logo" /> </Link>
                        </div>
                        <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">

                            <li className="ms-nav-item ms-d-none">
                                <Link to="/shopping" className="text-white" data-toggle="modal"><i className="flaticon-cart-shopping mr-2"></i> Shop</Link>
                            </li>
                            <li className="ms-nav-item ms-d-none">
                                <Link to="/labhome" className="text-white" data-toggle="modal"><i class="fas fa-regular fa-flask-vial"></i>Lab Testing</Link>
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
                                <div className="ms-panel">
                                    <div className="ms-panel-header ms-panel-custome">
                                        <Container maxWidth="lg" style={container}>
                                            {doctors.map((doctor) => {
                                                if (doctor.uid === uid)
                                                    return (
                                                        <Grid container spacing={3}>
                                                            <Grid item xs={12}>
                                                                <Typography align="center" variant="h4" style={{ "fontWeight": "bold", "color": "#063547" }}>
                                                                    {doctor.name}
                                                                </Typography>
                                                            </Grid>

                                                            {/* AVATAR */}
                                                            <Grid item xs={12} md={4} lg={3}>
                                                                <Paper style={{ "p": 2, "display": "flex", "flexDirection": "column", "padding": "20px", "alignItems": "center" }}>
                                                                    <Avatar
                                                                        alt="Doctor's Profile Picture"
                                                                        src={doctor.imageURL}
                                                                        sx={{ width: 100, height: 100, m: 2 }}
                                                                    />
                                                                    <Book_Appointment
                                                                        doctorUID={uid}
                                                                        startTime={doctor.startTime}
                                                                        endTime={doctor.endTime}
                                                                    />
                                                                </Paper>
                                                            </Grid>

                                                            {/* PROFILE */}
                                                            <Grid item xs={12} md={8} lg={9}>
                                                                <Paper style={{ "p": 2, "display": "flex", "flexDirection": "column", "padding": "20px" }}>
                                                                    <>
                                                                        <Typography>Name: {doctor.name}</Typography>

                                                                        <Typography>
                                                                            Medical Speciality: {doctor.medicalSpeciality}
                                                                        </Typography>
                                                                        <Typography>
                                                                            Experience: {doctor.experience} years
                                                                        </Typography>
                                                                        <Typography>Age: {doctor.age} years</Typography>
                                                                        <Typography>Gender: {doctor.gender}</Typography>
                                                                        <Typography>Degree: {doctor.degree}</Typography>
                                                                        <Typography>
                                                                            Address: {doctor.address1}, {doctor.address2},{" "}
                                                                            {doctor.city}, {doctor.state}, {doctor.country},{" "}
                                                                            {doctor.pincode}
                                                                        </Typography>
                                                                        <Typography>
                                                                            Time Slot :{" "}
                                                                            {new Date(doctor.startTime.seconds * 1000).getHours()}:
                                                                            {new Date(doctor.startTime.seconds * 1000).getMinutes()}
                                                                            0 - {new Date(doctor.endTime.seconds * 1000).getHours()}
                                                                            :{new Date(doctor.endTime.seconds * 1000).getMinutes()}0
                                                                            hrs
                                                                        </Typography>
                                                                    </>
                                                                </Paper>
                                                            </Grid>

                                                            {/* RATINGS */}
                                                            <Grid item xs={12}>
                                                                <Ratings uid={doctor.uid} />
                                                            </Grid>

                                                            {/* REVIEWS */}
                                                            <Grid item xs={12}>
                                                                <Review uid={doctor.uid} />
                                                            </Grid>
                                                        </Grid>
                                                    );
                                            })}
                                        </Container>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Doctor;
