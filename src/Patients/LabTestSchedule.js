import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { db } from "../firebase.mjs";
import PatientSideDash from "./PatientSideDash";
import { createTheme } from "@mui/material/styles";
import {
    Button,
    Container,
    Grid,
    List,
    Typography,
} from "@mui/material";


const LabTestSchedule = () => {
    const theme = createTheme();
    const [meetings, setMeetings] = useState([]);

    const { currentUser } = useAuth();

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
    const [labpackage, setLabPackage] = useState([]);
    const [labplace, setLabPlace] = useState([]);

    useEffect(() => {
        db.collection("LabTestPackage").onSnapshot((snapshot) => {
            setLabPackage(snapshot.docs.map((doc) => doc.data()));
        });
        db.collection("NearbyLab").onSnapshot((snapshot) => {
            setLabPlace(snapshot.docs.map((doc) => doc.data()));
        });
        db.collection("Labmeetings")
            .onSnapshot((snapshot) => {
                setMeetings(snapshot.docs.map((doc) => doc.data()));
            });
    }, []);
    console.log(meetings)
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
                    </nav>
                    <div className="ms-content-wrapper">
                        <div className="row">
                            <div className="col-xl-12 col-md-12">
                                <div className="ms-panel-header ms-panel-custome">
                                    <Container maxWidth="lg" style={container}>
                                        <Typography align="center" variant="h4" style={{ "fontWeight": "bold", "color": "#063547" }}>
                                            Your Scheduled Laboratory Test
                                        </Typography>
                                        <List>
                                            {meetings.map((meeting) => {
                                                if (meeting.patientUID === currentUser.uid)
                                                    return (
                                                        <div className="ms-panel-header" style={{ "borderStyle": "solid", "borderWidth": "thin", "marginBottom": "10px" }}>
                                                            <Grid container spacing={3}>
                                                                <Grid item >
                                                                    <Typography>
                                                                        {
                                                                            labpackage.map((pack) => {
                                                                                if (pack.packid === meeting.packid) {
                                                                                    return (
                                                                                        <>
                                                                                            <h4>Test Details</h4>
                                                                                            <strong>Test Name:</strong> {pack.TestName}
                                                                                            <br />
                                                                                            <strong>Sample Type:</strong> {pack.SampleType}
                                                                                            <br />
                                                                                            <strong>Price:</strong> {pack.Price}
                                                                                            <br />
                                                                                        </>
                                                                                    )
                                                                                }
                                                                            })
                                                                        }

                                                                        <br />
                                                                        {
                                                                            labplace.map((place) => {
                                                                                if (place.id === meeting.placeid) {
                                                                                    return (
                                                                                        <>
                                                                                            <h4>Lab Details: </h4>
                                                                                            <strong>Lab Name:</strong> {place.Name}
                                                                                            <br />
                                                                                            <strong>Lab Address:</strong> {place.Address}
                                                                                            <br />
                                                                                            <strong>Contact:</strong> {place.Contact}
                                                                                            <br />
                                                                                        </>
                                                                                    )
                                                                                }
                                                                            })
                                                                        }
                                                                        <br />
                                                                        <h4>Schedule At:{" "}
                                                                        {new Date(
                                                                            meeting.scheduleAt.seconds * 1000
                                                                        ).toLocaleDateString("en-US")}
                                                                        ,
                                                                        {new Date(
                                                                            meeting.scheduleAt.seconds * 1000
                                                                        ).getHours()}
                                                                        :
                                                                        {new Date(
                                                                            meeting.scheduleAt.seconds * 1000
                                                                        ).getMinutes()}
                                                                        :
                                                                        {new Date(
                                                                            meeting.scheduleAt.seconds * 1000
                                                                        ).getSeconds()}
                                                                        </h4>
                                                                    </Typography>
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
}

export default LabTestSchedule