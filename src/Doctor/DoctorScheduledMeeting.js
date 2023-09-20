import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import {
    Button,
    Container,
    Grid,
    List,
    Typography,
} from "@mui/material";
import { v1 as uuid } from "uuid";
import { db } from "../firebase.mjs";
import DoctorSideDash from "./DoctorSideDash";
import { createTheme } from "@mui/material/styles";

const DoctorScheduledMeeting = () => {
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

    const navigate = useNavigate();
    const [meetings, setMeetings] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        db.collection("meetings")
            .orderBy("scheduledAt", "desc")
            .onSnapshot((snapshot) => {
                setMeetings(snapshot.docs.map((doc) => doc.data()));
            });
    }, []);

    const create = () => {
        const id = uuid();

        navigate(`/doctor_room/${id}`);
        alert(`Copy your meeting code : ${id}`);
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
                                    <Container maxWidth="lg" style={container}>
                                        <Button onClick={create} variant="contained" target="_blank">
                                            Meet
                                        </Button>
                                        <List>
                                            {meetings.map((meeting) => {
                                                if (meeting.doctorUID === currentUser.uid)
                                                    return (
                                                        <div className="ms-panel-header" style={{ "borderStyle": "solid", "borderWidth": "thin", 'marginBottom': "20px" }}>
                                                            <Grid container spacing={3}>
                                                                <Grid item xs={12} sm={9}>
                                                                    <Typography>
                                                                        Meeting ID: {meeting.meetingID} <br />
                                                                        Scheduled At:{" "}
                                                                        {new Date(
                                                                            meeting.scheduledAt.seconds * 1000
                                                                        ).toLocaleDateString("en-US")}
                                                                        ,
                                                                        {new Date(
                                                                            meeting.scheduledAt.seconds * 1000
                                                                        ).getHours()}
                                                                        :
                                                                        {new Date(
                                                                            meeting.scheduledAt.seconds * 1000
                                                                        ).getMinutes()}
                                                                        <br />
                                                                    </Typography>
                                                                </Grid>

                                                                <Grid item xs={12} sm={3}>
                                                                    <Link to={`/doctor_room/${meeting.meetingID}`} target="_blank">
                                                                        <Button variant="contained" > Join </Button>
                                                                    </Link>
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

export default DoctorScheduledMeeting;
