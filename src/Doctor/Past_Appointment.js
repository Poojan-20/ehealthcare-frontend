import React, { useState, useEffect } from "react";
import { db } from "../firebase.mjs";
import { Link } from "react-router-dom";
import { Grid, List, Typography } from "@mui/material";
import Appointments from "../Patients/Appointments";

const Past_Appointments = (props) => {
    const [appointments, setAppointments] = useState([]);

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

    return (
        <>
            <div> Past Appointments </div>
            <List>
                {appointments.map((appointment) => {
                    if (
                        appointment.isConfirmed === "true" &&
                        appointment.doctorUID === props.doctorUID &&
                        appointment.patientUID === props.patientUID
                    )
                        return (
                            <div className="ms-panel-header" style={{ "borderStyle": "solid", "borderWidth": "thin" ,"marginBottom":"20px"}}>
                                <Grid container>
                                    <Grid item xs={12} sm={6}>
                                        <Typography>
                                            <b>Mode:</b> {appointment.mode} <br />
                                            <b>Slot:</b>{" "}
                                            {new Date(
                                                appointment.timeSlot.seconds * 1000
                                            ).toLocaleDateString("en-US")}
                                            ,
                                            {new Date(appointment.timeSlot.seconds * 1000).getHours()}
                                            :
                                            {new Date(
                                                appointment.timeSlot.seconds * 1000
                                            ).getMinutes()}
                                            <br />
                                            <b>Symptoms:</b> {appointment.symptoms}
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Typography>
                                            <b>Prescription: </b>
                                            <Appointments
                                                appointmentID={appointment.id}
                                                doctorUID={appointment.doctorUID}
                                                patientUID={appointment.patientUID}
                                            />
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        );
                })}
            </List>



        </>
    );
};

export default Past_Appointments;
