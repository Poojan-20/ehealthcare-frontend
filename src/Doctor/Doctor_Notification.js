import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase.mjs";
import { Button, Container, List, ListItem, Typography } from "@mui/material";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import { createTheme } from "@mui/material/styles";
import DoctorSideDash from "./DoctorSideDash";
import { Link } from "react-router-dom";

const Doctor_Notifications = () => {
    const [notifications, setNotifications] = useState([]);
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
    const { currentUser } = useAuth();

    // FETCHING DOCTOR'S DATA FROM DB
    useEffect(() => {
        db.collection("doctors")
            .doc(currentUser.uid)
            .collection("notifications")
            .orderBy("sentAt", "desc")
            .onSnapshot((snapshot) => {
                setNotifications(snapshot.docs.map((doc) => doc.data()));
            });
    }, []);

    // READ NOTIFICATIONS BUTTON
    const handleReadNotifications = () => {
        db.collection("doctors").doc(currentUser.uid).update({
            unreadCount: 0,
        });
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
                                        <Typography variant="h4" align="center" style={{ "fontWeight": "bold", "color": "#063547" }}>
                                            Notifications
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            startIcon={<MarkChatReadIcon />}
                                            onClick={handleReadNotifications}
                                        >
                                            Mark as read
                                        </Button>
                                        <List>
                                            {notifications.map((notification) => {
                                                return (
                                                    <div className="ms-panel-header" style={{ "borderStyle": "solid", "borderWidth": "thin", "padding": "20px", "marginBottom": "10px" }}>
                                                        <Typography>
                                                            {notification.message} <br />{" "}
                                                            {new Date(
                                                                notification.sentAt.seconds * 1000
                                                            ).toLocaleDateString("en-US")}
                                                            ,{new Date(notification.sentAt.seconds * 1000).getHours()}:
                                                            {new Date(notification.sentAt.seconds * 1000).getMinutes()}
                                                            <br />
                                                        </Typography>
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

export default Doctor_Notifications;
