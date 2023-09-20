import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LabDash from './LabDash';
import {
  Grid,
  Paper,
  List,
  Typography,
} from "@mui/material";
import { db } from "../firebase.mjs";

const LabAppointment = () => {
  const paper = {
    p: 2,
    display: "flex",
    flexDirection: "column",
  };

  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  console.log(currentUser.uid)

  const [labpackage, setLabPackage] = useState([]);
  const [labplace, setLabPlace] = useState([]);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    db.collection("LabTestPackage").onSnapshot((snapshot) => {
      setLabPackage(snapshot.docs.map((doc) => doc.data()));
    });
    db.collection("NearbyLab").onSnapshot((snapshot) => {
      setLabPlace(snapshot.docs.map((doc) => doc.data()));
    });
    db.collection("patients").onSnapshot((snapshot) => {
      setPatients(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  // FETCHING APPOINTMENTS' DATA FROM DB
  useEffect(() => {
    db.collection("Labappointments")
      // .orderBy("timeSlot", "asc")
      .onSnapshot((snapshot) => {
        setAppointments(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
  }, []);

  // HANDLE APPOINTMENT CONFIRM BUTTON
  const handleConfirm = (docID, patientUID) => {
    db.collection("Labappointments").doc(docID).update({
      isConfirmed: "true",
    });

    db.collection("LabTester")
      .doc(currentUser.uid)
      .collection("patients")
      .doc(patientUID)
      .set({
        patientUID: patientUID,
      });

    db.collection("patients")
      .doc(patientUID)
      .collection("LabTester")
      .doc(currentUser.uid)
      .set({
        LabTesterUID: currentUser.uid,
      });

    db.collection("patients").doc(patientUID).collection("notifications").add({
      message:
        "Your appointment for your testing has been confirmed! You can check its details in the Lab test section.",
      sentAt: new Date(),
    });

    db.collection("patients").doc(patientUID).update({
      unreadCount: 1,
    });
    navigate.push("/lab_dashboard");
  };

  // HANDLE APPOINTMENT CANCEL BUTTON
  const handleCancel = (docID, patientUID) => {
    db.collection("Labappointments").doc(docID).update({
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
        <LabDash />
        <main className="body-content">
          <nav className="navbar ms-navbar">
            <div className="ms-aside-toggler ms-toggler pl-0" data-target="#ms-side-nav" data-toggle="slideLeft">
              <span className="ms-toggler-bar bg-white"></span>
              <span className="ms-toggler-bar bg-white"></span>
              <span className="ms-toggler-bar bg-white"></span>
            </div>
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
                            aria-label="Address: activate to sort column ascending" style={{ "width": "80px" }}>Patient Name</th>
                          <th className="sorting" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                            aria-label="Age: activate to sort column ascending" style={{ "width": "40px" }}>Patient Address</th>
                          <th className="sorting" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                            aria-label="Address: activate to sort column ascending" style={{ "width": "100px" }}>Test Name</th>
                          <th className="sorting" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                            aria-label="Address: activate to sort column ascending" style={{ "width": "100px" }}>Lab Address</th>
                          <th className="sorting" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                            aria-label="Action: activate to sort column ascending" style={{ "width": "50px" }}>Action</th>
                        </tr>
                      </thead>
                      {appointments.map((appointment) => {
                        if (
                          appointment.isConfirmed === "pending" &&
                          appointment.LabTesterUID === "4yfX9tVS5VfvanerOMj6eTqgdLl2"
                        )
                          return (
                            <tbody>
                              <tr role="row" className="even" style={{ "textAlign": 'center' }}>
                                {
                                  patients.map((patient) => {
                                    if (patient.uid === appointment.patientUID) {
                                      return (
                                        <>
                                          <td >{patient.name} </td>
                                          <td >{patient.address1} , {patient.city} , {patient.pincode} </td>
                                        </>
                                      )
                                    }
                                  })
                                }
                                {
                                  labpackage.map((pack) => {
                                    if (pack.packid === appointment.packid) {
                                      return (
                                        <td>{pack.TestName}</td>
                                      )
                                    }
                                  })
                                }
                                {
                                  labplace.map((place) => {
                                    if (place.id === appointment.placeid) {
                                      return (
                                        <td >{place.Address}</td>
                                      )
                                    }
                                  })
                                }
                                <td>
                                  <td style={{ "display": "flex", "justifyContent": "center" }}>
                                    <Link onClick={(e) =>
                                      db.doc(`Labmeetings/${appointment.id}`).set({
                                        meetingID: appointment.id,
                                        LabTesterUID: appointment.LabTesterUID,
                                        patientUID: appointment.patientUID,
                                        packid: appointment.packid,
                                        placeid: appointment.placeid,
                                        scheduleAt: new Date()
                                      })
                                    }>
                                      <i class="fas fa-solid fa-check" style={{ "color": "green" }} onClick={() =>
                                        handleConfirm(
                                          appointment.id,
                                          appointment.patientUID
                                        )
                                      }></i>

                                    </Link>
                                    <Link ><i class="fas fa-solid fa-trash" style={{ "color": "#ea4e4e" }} onClick={() =>
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
                      <div className="mb-2" style={{ "marginTop": "35px" }}> Confirmed Appointments</div>
                      <Paper style={paper} sx={{ "padding": "20px" }}>
                        <List>
                          {appointments.map((appointment) => {
                            if (
                              appointment.isConfirmed === "true" &&
                              appointment.LabTesterUID === "4yfX9tVS5VfvanerOMj6eTqgdLl2"
                            )
                              return (
                                <div className="ms-panel-header" style={{ "borderStyle": "solid", "borderWidth": "thin", "marginBottom": "20px" }}>
                                  <Grid container>
                                    <Grid item>
                                      <Typography>
                                        {
                                          patients.map((patient) => {
                                            if (patient.uid === appointment.patientUID) {
                                              return (
                                                <>
                                                  <strong>Name:</strong> {patient.name}
                                                  <br />
                                                  <strong>Address:</strong> {patient.address1} , {patient.city} , {patient.pincode}
                                                  <br />
                                                </>
                                              )
                                            }
                                          })
                                        }
                                        {
                                          labpackage.map((pack) => {
                                            if (pack.packid === appointment.packid) {
                                              return (
                                                <>
                                                  <strong>Test Name:</strong> {pack.TestName}
                                                  <br />
                                                </>
                                              )
                                            }
                                          })
                                        }
                                        {
                                          labplace.map((place) => {
                                            if (place.id === appointment.placeid) {
                                              return (
                                                <>
                                                  <strong>Lab Address:</strong> {place.Address}
                                                </>
                                              )
                                            }
                                          })
                                        }

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

export default LabAppointment;
