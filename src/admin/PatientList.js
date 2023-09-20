import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Container,
  Typography,
  ListItem,
  List,
  Button,
} from "@mui/material";
import { Link } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import { db } from "../firebase.mjs";
import { createTheme } from "@mui/material/styles";

const Patients = () => {
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
      maxWidth: "80vw",
    },
  };

  const paper = {
    p: 2,
    display: "flex",
    flexDirection: "column",
    //backgroundColor: "transparent",
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

  const typography = { fontWeight: "bold", color: "#063547" };
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    db.collection("patients").onSnapshot((snapshot) => {
      setPatients(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  // FUNCTION TO VERIFY DOCTOR'S PROFILE
  const handleVerify = (uid) => {
    db.collection("patients").doc(uid).update({
      isVerified: "true",
      unreadCount: 1,
      updatedAt: new Date(),
    });

    db.collection("patients").doc(uid).collection("notifications").add({
      message: "Your profile has been verified by the admin!",
      sentAt: new Date(),
    });
  };

  // FUNCTION TO UNVERIFY PATIENT'S PROFILE
  const handleUnverify = (uid) => {
    db.collection("patients").doc(uid).update({
      isVerified: "false",
      unreadCount: 1,
      updatedAt: new Date(),
    });

    db.collection("patients").doc(uid).collection("notifications").add({
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
              <Link to="/contact" className="text-white" data-toggle="modal"><i className="flaticon-phone mr-2"></i>Contact</Link>
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
              <div className="col-xl-12 col-md-12">
                  <Container maxWidth="lg" sx={container} style={{"marginLeft":"0px" , "marginTop":"10px"}}>
                    <Grid container spacing={3}>

                      {/* UNVERIFIED PATIENTS */}
                      <Grid item xs={12}>
                        <Typography variant="h5" sx={typography}>
                          Unverified/New Patients
                        </Typography>
                        <Paper sx={paper}>
                          <List>
                            {patients.map((patient) => {
                              if (patient.isVerified === "false")
                                return (
                                  <div className="ms-panel-header" style={{ "borderStyle": "solid", "borderWidth": "thin", "padding": "20px", "marginBottom": "15px" }}>
                                    <Grid container>
                                      <Grid item xs={12} sm={9}>
                                        <Typography>
                                          Email: {patient.email} <br />
                                          Name: {patient.name}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={12} sm={3}>
                                        <Button
                                          variant="contained"
                                          onClick={() => handleVerify(patient.uid)}
                                        >
                                          Verify
                                        </Button>
                                      </Grid>
                                    </Grid>
                                  </div>
                                );
                            })}
                          </List>
                        </Paper>
                      </Grid>

                      {/* VERIFIED PATIENTS */}
                      <Grid item xs={12}>
                        <Typography variant="h5" sx={typography}>
                          Verified Patients
                        </Typography>
                        <Paper sx={paper}>
                          <List>
                            {patients.map((patient) => {
                              if (patient.isVerified == "true")
                                return (
                                  <div className="ms-panel-header" style={{ "borderStyle": "solid", "borderWidth": "thin", "padding": "20px", "marginBottom": "15px" }}>
                                      <Grid container>
                                        <Grid item xs={12} sm={9}>
                                          <Typography>
                                            Name: {patient.name} <br />
                                            Age: {patient.age} <br />
                                            Gender: {patient.gender} <br />
                                            Blood Group: {patient.bloodGroup}
                                          </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                          <Button
                                            variant="contained"
                                            onClick={() => handleUnverify(patient.uid)}
                                          >
                                            Unverify
                                          </Button>
                                        </Grid>
                                      </Grid>
                                  </div>
                                );
                            })}
                          </List>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Container>
                </div>
              </div>
            </div>
        </main>
      </body>

    </>
  );
};

export default Patients;
