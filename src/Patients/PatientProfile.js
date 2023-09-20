import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from 'react-router-dom';
import { db } from "../firebase.mjs";
import { Avatar, Container, Grid, Paper, Typography } from "@mui/material";
import PatientSideDash from "./PatientSideDash";
import BPGraph from "./bpGraph";
import WeightGraph from "./weightGraph";
import { createTheme } from "@mui/material/styles";


const PatientProfile = () => {
  const { currentUser } = useAuth();
  const [patients, setPatients] = useState([]);

  const theme = createTheme();

  // FETCHING PATIENT'S DATA FROM DB
  useEffect(() => {
    db.collection("patients").onSnapshot((snapshot) => {
      setPatients(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

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
  const upload = {
    height: "100%",
    p: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
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
                      {patients.map((patient) => {
                        if (patient.uid === currentUser.uid)
                          return (
                            <Grid container spacing={3}>
                              {/* PATIENT'S PROFILE IMAGE */}
                              <Grid item xs={12} md={4} lg={3}>
                                <Paper style={upload}>
                                  {patient.name}
                                  <Avatar
                                    alt="Patient_Profile_Image"
                                    src={`${patient.imageURL}`}
                                    style={{ "width": "200px", "height": "200px" }}
                                  />
                                </Paper>
                              </Grid>

                              {/* PATIENT'S PROFILE */}
                              <Grid item xs={12} md={8} lg={9}>
                                <Paper style={{ "p": 2, "display": "flex", "flexDirection": "column", "padding": "20px" }}>
                                  Profile
                                  <Typography sx={{ fontStyle: "italic" }}>
                                    (You can update these details by going to the dashboard
                                    tab)
                                  </Typography>
                                  <Typography>Name: {patient.name}</Typography>
                                  <Typography>Age: {patient.age}</Typography>
                                  <Typography>Gender: {patient.gender}</Typography>
                                  <Typography>Blood Group: {patient.bloodGroup}</Typography>
                                  <Typography>
                                    Address: {patient.address1}, {patient.address2},{" "}
                                    {patient.city}, {patient.state}, {patient.country}
                                  </Typography>
                                  <Typography>Pincode: {patient.pincode}</Typography>
                                </Paper>
                              </Grid>

                              {/* GRAPHS */}
                              <Grid item xs={12}>
                                <Paper
                                  sx={{
                                    p: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    height: 275,
                                  }}
                                >
                                  <BPGraph uid={patient.uid} />
                                </Paper>
                              </Grid>

                              <Grid item xs={12}>
                                <Paper
                                  sx={{
                                    p: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    height: 275,
                                  }}
                                >
                                  <WeightGraph uid={patient.uid} />
                                </Paper>
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
  )
}

export default PatientProfile