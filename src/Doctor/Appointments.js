import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Container,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  Button,
  ButtonGroup,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { db } from "../firebase.mjs";
import DoctorSideDash from "./DoctorSideDash";

const theme = createTheme();

const Appointments = () => {
  const paper = {
    p: 2,
    display: "flex",
    flexDirection: "column",
  };

  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  // FETCHING APPOINTMENTS' DATA FROM DB
  useEffect(() => {
    db.collection("appointments")
      .orderBy("timeSlot", "asc")
      .onSnapshot((snapshot) => {
        setAppointments(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
  }, []);

  // HANDLE APPOINTMENT CONFIRM BUTTON
  const handleConfirm = (docID, patientUID) => {
    db.collection("appointments").doc(docID).update({
      isConfirmed: "true",
    });

    db.collection("doctors")
      .doc(currentUser.uid)
      .collection("patients")
      .doc(patientUID)
      .set({
        patientUID: patientUID,
      });

    db.collection("patients")
      .doc(patientUID)
      .collection("doctors")
      .doc(currentUser.uid)
      .set({
        doctorUID: currentUser.uid,
      });

    db.collection("patients").doc(patientUID).collection("notifications").add({
      message:
        "Your appointment has been confirmed! You can check its details in the scheduled meetings section.",
      sentAt: new Date(),
    });

    db.collection("patients").doc(patientUID).update({
      unreadCount: 1,
    });

    navigate.push("/doctor/scheduled_meetings");
  };

  // HANDLE APPOINTMENT CANCEL BUTTON
  const handleCancel = (docID, patientUID) => {
    db.collection("appointments").doc(docID).update({
      isConfirmed: "false",
    });

    db.collection("patients").doc(patientUID).collection("notifications").add({
      message: "Your appointment has been cancelled!",
      sentAt: new Date(),
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
                            <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="../../index.html"><img src={"../images/medjestic-logo-84x41.png"} alt="logo" /> </Link>
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
                  
                  <div className="col-sm-12">
              <div className="mb-2"> New Appointments</div>
                    <table id="data-table-2" className="table table-striped thead-primary w-100 dataTable no-footer" role="grid"
                      aria-describedby="data-table-2_info" style={{ "width": "1159px" }}>
                      <thead style={{ "textAlign": 'center' }}>
                        <tr role="row">
                          <th className="sorting" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                            aria-label="Address: activate to sort column ascending" style={{ "width": "80px" }}>Mode</th>
                          <th className="sorting" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                            aria-label="Address: activate to sort column ascending" style={{ "width": "100px" }}>Slot</th>
                          <th className="sorting" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                            aria-label="Age: activate to sort column ascending" style={{ "width": "40px" }}>Symptoms</th>
                          <th className="sorting" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                            aria-label="Action: activate to sort column ascending" style={{ "width": "50px" }}>Action</th>
                        </tr>
                      </thead>
                      {appointments.map((appointment) => {
                        if (
                          appointment.isConfirmed === "pending" &&
                          appointment.doctorUID === currentUser.uid
                        )
                          return (
                            <tbody>
                              <tr role="row" className="even" style={{ "textAlign": 'center' }}>
                                <td >{appointment.mode} </td>
                                <td>{new Date(
                                  appointment.timeSlot.seconds * 1000
                                ).toLocaleDateString("en-US")}
                                  ,
                                  {new Date(
                                    appointment.timeSlot.seconds * 1000
                                  ).getHours()}
                                  :
                                  {new Date(
                                    appointment.timeSlot.seconds * 1000
                                  ).getMinutes()}</td>
                                <td >{appointment.symptoms}</td>
                                <td>
                                  <td style={{"display": "flex","justifyContent": "center"}}>
                                    <Link onClick={(e) =>
                                      db.doc(`meetings/${appointment.id}`).set({
                                        meetingID: appointment.id,
                                        doctorUID: appointment.doctorUID,
                                        patientUID: appointment.patientUID,
                                        scheduledAt: appointment.timeSlot,
                                        mode: appointment.mode,
                                      })
                                    }>
                                      <i class="fas fa-solid fa-check" style={{"color":"green"}} onClick={() =>
                                      handleConfirm(
                                        appointment.id,
                                        appointment.patientUID
                                      )
                                    }></i>

                                    </Link>
                                    <Link ><i class="fas fa-solid fa-trash" style={{"color":"#ea4e4e"}} onClick={() =>
                                      handleCancel(
                                        appointment.id,
                                        appointment.patientUID
                                      )
                                    }></i>
                                    </Link>
                                  </td>

                                </td>
                              </tr>
                            </tbody>
                          )
                      })}
                    </table>
                    <Grid item xs={12}>
                      <div className="mb-2" style={{"marginTop":"35px"}}> Confirmed Appointments</div>
                      <Paper style={paper} sx={{ "padding": "20px" }}>
                        <List>
                          {appointments.map((appointment) => {
                            if (
                              appointment.isConfirmed === "true" &&
                              appointment.doctorUID === currentUser.uid
                            )
                              return (
                                <div className="ms-panel-header" style={{ "borderStyle": "solid", "borderWidth": "thin" ,"marginBottom":"20px"}}>
                                  <Grid container>
                                    <Grid item xs={12} sm={9}>
                                      <Typography>
                                        Mode: {appointment.mode} <br />
                                        Slot:{" "}
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
                                        Symptoms: {appointment.symptoms}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </div>
                              );
                          })}
                        </List>
                      </Paper>
                    </Grid>
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

export default Appointments;
