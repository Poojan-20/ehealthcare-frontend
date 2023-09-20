import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase.mjs";
import PatientSideDash from "./PatientSideDash";
import { createTheme } from "@mui/material/styles";
import {
    Button,
    Grid,
    Container,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import Appointments from "./Appointments";
import Feedback from "./Feedback";

const Past_Appointments = () => {
    const theme = createTheme();
    const [doctors, setDoctors] = useState([]);
    const { currentUser } = useAuth();
    const [appointments, setAppointments] = useState([]);

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
            maxWidth: "80vw",
        },
    };

    // FETCHING APPOINTMENTS' DATA FROM DB
    useEffect(() => {
        db.collection("appointments")
            .orderBy("timeSlot", "desc")
            .onSnapshot((snapshot) => {
                setAppointments(
                    snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                );
            });
    }, []);

    // FETCHING PATIENT'S DATA FROM DB
    useEffect(() => {
        db.collection("patients")
            .doc(currentUser.uid)
            .collection("doctors")
            .onSnapshot((snapshot) => {
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
                            <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="#"><img src={"../images/medjestic-logo-84x41.png"} alt="logo" /> </Link>
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
                                <div className="ms-panel-header ms-panel-custome">
                                    <Container maxWidth="lg" style={container}>
                                        <Typography variant="h4" align="center" style={{ "fontWeight": "bold", "color": "#063547" }}>
                                            Past Appointments
                                        </Typography>
                                        <List>
                                            {appointments.map((appointment) => {
                                                if (
                                                    appointment.isConfirmed === "true" &&
                                                    appointment.patientUID === currentUser.uid
                                                )
                                                    return (
                                                        <div className="ms-panel-header" style={{ "borderStyle": "solid", "borderWidth": "thin", "marginBottom": "20px" }}>
                                                            <Grid container>
                                                                <Grid item xs={12} sm={6}>
                                                                    <Typography>
                                                                        <b>Mode:</b> {appointment.mode} <br />
                                                                        <b>Slot:</b>{" "}
                                                                        {new Date(
                                                                            appointment.timeSlot.seconds * 1000
                                                                        ).toLocaleDateString("en-US")}
                                                                        ,
                                                                        {new Date(
                                                                            appointment.timeSlot.seconds * 1000
                                                                        ).getHours()}
                                                                        :
                                                                        {new Date(
                                                                            appointment.timeSlot.seconds * 1000
                                                                        ).getMinutes()}
                                                                        <br />
                                                                        <b>Symptoms:</b> {appointment.symptoms}
                                                                    </Typography>
                                                                    <Typography>
                                                                        <b>Prescription: </b>
                                                                        <Appointments
                                                                            appointmentID={appointment.id}
                                                                            doctorUID={appointment.doctorUID}
                                                                            patientUID={appointment.patientUID}
                                                                        />
                                                                    </Typography>
                                                                </Grid>

                                                                <Grid item xs={12} sm={6}>
                                                                    <Typography>
                                                                        <b>Feedback: </b>
                                                                        <Feedback
                                                                            appointmentID={appointment.id}
                                                                            doctorUID={appointment.doctorUID}
                                                                            patientUID={appointment.patientUID}
                                                                        />
                                                                    </Typography>
                                                                    <Link to={`/patient_doctor_profile/${appointment.doctorUID}`}> <Button variant="contained"> See Doctor</Button></Link>

                                                                </Grid>
                                                            </Grid>
                                                        </div>
                                                    );
                                            })}
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

export default Past_Appointments;
