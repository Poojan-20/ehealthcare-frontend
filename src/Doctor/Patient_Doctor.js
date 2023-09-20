import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase.mjs";
import { Avatar, Container, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BPGraph from "./bpGraph";
import WeightGraph from "./WeightGraph";
import Past_Appointments from "./Past_Appointment";
import { AES, enc } from 'crypto-js';
import DoctorSideDash from "./DoctorSideDash";
import { createTheme } from "@mui/material/styles";
import html2canvas from 'html2canvas';

const Patient_Doctor = () => {
    // const componentRef = useRef(null);
    const [patients, setPatients] = useState([]);
    const theme = createTheme();
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
    const upload = {
        height: "100%",
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };
    const { currentUser } = useAuth();

    const location = useLocation();
    const uid = location.pathname.substring(
        location.pathname.lastIndexOf("/") + 1
    );
    

    // FETCHING PATIENT'S DATA FROM DB
    useEffect(() => {
        db.collection("patients").onSnapshot((snapshot) => {
            setPatients(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);
    const [doctors, setDoctors] = useState([]);

    // FETCHING DOCTOR'S DATA FROM DB
    useEffect(() => {
        db.collection("doctors").onSnapshot((snapshot) => {
            setDoctors(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    const [filee, setFilee] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [decryptedContent, setDecryptedContent] = useState(null);

    useEffect(() => {
        db.collection('patients')
            .doc(uid)
            .collection('files')
            .onSnapshot((snapshot) => {
                setFilee(snapshot.docs.map((doc) => doc.data()));
            });

    }, []);

    const handleFileSelect = (report) => {
        setSelectedFile(report);
        try {
            const key = report.url.slice(-21)
            console.log(key)
            const url = report.url.substr(0, report.url.length - 21)
            console.log(url)
            const decrypted = AES.decrypt(url, key).toString(enc.Utf8);
            console.log("decrypyted url: ", decrypted)
            fetch(decrypted)
                .then((res) => res.arrayBuffer())
                .then((encryptedArrayBuffer) => {
                    setDecryptedContent(decrypted);
                });
        } catch (e) {
            console.log(e)
        }

    };

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
                                <div className="ms-panel-header ms-panel-custome">
                                    <Container maxWidth="lg" sx={container}>
                                        {doctors.map((doctor) => {
                                            if (doctor.uid === currentUser.uid) {


                                                if (doctor[`isPermission ${uid}`] === "pending")
                                                    return <>
                                                        <div className="ms-content-wrapper">
                                                            <div className="row">
                                                                <div className="col-xl-6 col-md-3">
                                                                    <div className="ms-panel">
                                                                        <div className="ms-panel-header ms-panel-custome">
                                                                            User Permission Required
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div></>;
                                                else if (doctor[`isPermission ${uid}`] === "true")
                                                    return <> <div className="ms-content-wrapper">
                                                        <div className="row">
                                                            <div className="col-xl-12 col-md-12">
                                                                <div className="ms-panel">
                                                                    <div className="ms-panel-header ms-panel-custome">
                                                                        {patients.map((patient) => {
                                                                            if (patient.uid === uid)
                                                                                return (
                                                                                    // <div className="ms-panel-header"style={{ "borderStyle": "solid", "borderWidth": "thin" }}>
                                                                                    <Grid container spacing={3}>
                                                                                        {/* PATIENT'S PROFILE IMAGE */}
                                                                                        <Grid item xs={12} md={4} lg={3}>
                                                                                            <Paper sx={upload}>
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
                                                                                            <Paper
                                                                                                style={{
                                                                                                    "height": "100%",
                                                                                                    "p": 2,
                                                                                                    "display": "flex",
                                                                                                    "flexDirection": "column",
                                                                                                    "padding": "20px"
                                                                                                }}
                                                                                            >
                                                                                                Profile
                                                                                                <Typography>Name: {patient.name}</Typography>
                                                                                                <Typography>Age: {patient.age}</Typography>
                                                                                                <Typography>Gender: {patient.gender}</Typography>
                                                                                                <Typography>Blood Group: {patient.bloodGroup}</Typography>
                                                                                                <Typography>
                                                                                                    Address: {patient.address1}, {patient.address2},{" "}
                                                                                                    {patient.city}, {patient.state}, {patient.country},{" "}
                                                                                                    {patient.pincode}
                                                                                                </Typography>
                                                                                            </Paper>
                                                                                        </Grid>

                                                                                        {/* GRAPHS */}
                                                                                        <Grid item xs={12}>
                                                                                            <Paper
                                                                                                style={{
                                                                                                    "p": 2,
                                                                                                    "display": "flex",
                                                                                                    "flexDirection": "column",
                                                                                                    "height": 275
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

                                                                                        <Grid item xs={12}>
                                                                                            <Paper sx={{
                                                                                                "p": 2,
                                                                                                "display": "flex",
                                                                                                "flexDirection": "column",
                                                                                                "height": "100%"
                                                                                            }}>
                                                                                                <Past_Appointments patientUID={patient.uid} doctorUID={currentUser.uid} />
                                                                                            </Paper>
                                                                                        </Grid>
                                                                                        <div style={{ display: 'flex', flexDirection: 'column', padding: 20 }}>
                                                                                            {!filee && <h1 style={{ fontSize: 36 }}>No Reports</h1>}
                                                                                            <h1 style={{ fontSize: 36 }}>Reports</h1>
                                                                                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
                                                                                                {filee.map((report) => (
                                                                                                    <li className="btn-primary" key={report.id} style={{ cursor: 'pointer', padding: 10, margin: 5 }} onClick={() => handleFileSelect(report)}>
                                                                                                        {report.name}
                                                                                                    </li>
                                                                                                ))}

                                                                                            </ul>
                                                                                            {
                                                                                                decryptedContent && (
                                                                                                    <div style={{ marginTop: 20 }}>
                                                                                                        <h2 style={{ fontSize: 24 }}>{selectedFile.name}</h2>
                                                                                                        <iframe src={decryptedContent} style={{ width: "100%", height: "500px" }} />
                                                                                                    </div>
                                                                                                )
                                                                                            }

                                                                                        </div>
                                                                                    </Grid>
                                                                                    // </div>
                                                                                );
                                                                        })}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </>
                                                        ;
                                            }
                                        })}
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

export default Patient_Doctor;
