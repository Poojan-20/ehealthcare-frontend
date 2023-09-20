import React, { useState, useEffect } from "react";
import { db } from "../firebase.mjs";
import { useAuth } from "../context/AuthContext";
import { Link } from 'react-router-dom';
import {
    Avatar,
    Button,
    Container,
    Grid,
    List,
    ListItem,
    TextField,
    Typography,
} from "@mui/material";
import PatientSideDash from "./PatientSideDash"
import { createTheme } from "@mui/material/styles";


const View_Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [patients, setPatients] = useState([]);
    const [search, setSearch] = useState("");
    const { currentUser } = useAuth();
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
    const listItem = {
        border: "2px solid #0d7da5",
        borderRadius: "25px",
        margin: "2px",
        boxShadow: 2,
        backgroundColor: "#e6f7fd",
        "&:hover": {
            backgroundColor: "#d0f0fb",
            boxShadow: 3,
            border: "3px solid #0d7da5",
        },
    };

    // FETCHING PATIENT'S DATA FROM DB
    useEffect(() => {
        db.collection("patients").onSnapshot((snapshot) => {
            setPatients(snapshot.docs.map((doc) => doc.data()));
        });
    });

    // FETCHING DOCTOR'S DATA FROM DB
    useEffect(() => {
        db.collection("doctors").onSnapshot((snapshot) => {
            setDoctors(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    useEffect(() => {
        setSearch("");
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
                                            <Typography align="center" variant="h5" style={{ "fontWeight": "bold", "color": "#063547", "marginBottom": "10px" }}>
                                                Book Appointment with any Doctor - Click on See More
                                            </Typography>

                                            {/* SEARCH BAR */}
                                            <div class="form-outline mb-4">
                                                <div class="form-outline">

                                                    <label class="form-label" for="form1">Search By Name / City / Speciality</label>
                                                    <input id="search" fullWidth type="search" name="search" value={search} onChange={(e) => setSearch(e.target.value)} class="form-control" />
                                                </div>
                                            </div>
                                            {/* <TextField
                                                // margin="normal"
                                                style={{ "borderRadius": "20px" }}
                                                fullWidth
                                                id="search"
                                                label="Search by Name/Speciality/City"
                                                name="search"
                                                value={search}
                                                onChange={(e) => setSearch(e.target.value)}
                                            /> */}
                                            {patients.map((patient) => {
                                                if (patient.uid === currentUser.uid)
                                                    if (patient.isVerified === "true") {
                                                        return (
                                                            <List>
                                                                {doctors
                                                                    .filter((doctor) => {
                                                                        if (doctor.isVerified === "true") {
                                                                            if (search === "") return doctor;
                                                                            else if (
                                                                                doctor.name
                                                                                    .toLowerCase()
                                                                                    .includes(search.toLocaleLowerCase())
                                                                            )
                                                                                return doctor;
                                                                            else if (
                                                                                doctor.medicalSpeciality
                                                                                    .toLowerCase()
                                                                                    .includes(search.toLowerCase())
                                                                            )
                                                                                return doctor;
                                                                            else if (
                                                                                doctor.city
                                                                                    .toLowerCase()
                                                                                    .includes(search.toLowerCase())
                                                                            )
                                                                                return doctor;
                                                                        }
                                                                    })
                                                                    .map((doctor) => {
                                                                        return (
                                                                            <div className="ms-content-wrapper">
                                                                                <div className="row">
                                                                                    <div className="col-xl-12 col-md-12">
                                                                                        {/* <div className="ms-panel" style={{ "width": "295px" }}> */}
                                                                                        <div className="ms-panel-header" style={{ "borderStyle": "solid", "borderRadius": "45px", "borderWidth": "thin" }}>

                                                                                            {/* <ListItem style={listItem}> */}
                                                                                            <Grid container spacing={3}>
                                                                                                <Grid item xs={12} sm={3} md={3}>
                                                                                                    <Avatar
                                                                                                        alt="Doctor_Profile_Image"
                                                                                                        src={`${doctor.imageURL}`}
                                                                                                        sx={{
                                                                                                            width: 100,
                                                                                                            height: 100,
                                                                                                            border: "1px solid #08475e",
                                                                                                        }}
                                                                                                    />
                                                                                                </Grid>

                                                                                                <Grid item xs={12} sm={6} md={6}>
                                                                                                    <Typography
                                                                                                        variant="h5"
                                                                                                        gutterBottom
                                                                                                    >
                                                                                                        {doctor.name} <br />
                                                                                                        {doctor.medicalSpeciality} <br />
                                                                                                        {doctor.city} <br />
                                                                                                        Time Slot :{" "}
                                                                                                        {new Date(
                                                                                                            doctor.startTime.seconds * 1000
                                                                                                        ).getHours()}
                                                                                                        :
                                                                                                        {new Date(
                                                                                                            doctor.startTime.seconds * 1000
                                                                                                        ).getMinutes()}
                                                                                                        0 -{" "}
                                                                                                        {new Date(
                                                                                                            doctor.endTime.seconds * 1000
                                                                                                        ).getHours()}
                                                                                                        :
                                                                                                        {new Date(
                                                                                                            doctor.endTime.seconds * 1000
                                                                                                        ).getMinutes()}
                                                                                                        0 hrs
                                                                                                    </Typography>
                                                                                                </Grid>

                                                                                                <Grid item xs={12} sm={3} md={3}>
                                                                                                    <Link to={`/patient_doctor_profile/${doctor.uid}`}>
                                                                                                        <Button variant="contained"> See more </Button>
                                                                                                    </Link>

                                                                                                </Grid>
                                                                                            </Grid>
                                                                                            {/* </ListItem> */}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                {/* </div> */}
                                                                            </div>

                                                                        );
                                                                    })}
                                                            </List>
                                                        );
                                                    } else {
                                                        return (
                                                            <>
                                                                <br />
                                                                You first need to complete your details! <br />
                                                                Head on to the Dashboard Section.
                                                            </>
                                                        );
                                                    }
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

export default View_Doctors;
