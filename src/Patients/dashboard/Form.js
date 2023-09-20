import React, { useState, useEffect } from "react";
import { db } from "../../firebase.mjs";
import CompleteProfile from "./CompleteProfile";
import Edit_Details from "./edit_details/Edit_details";
import Upload from "./Upload";

const Form = (props) => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        db.collection("patients").onSnapshot((snapshot) => {
            setPatients(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    return (
        <>
        {patients.map((patient) => {
             if (patient.uid === props.uid) {
                if (patient.isVerified === "false")
                    return <CompleteProfile uid={props.uid} />;
                else if (patient.isVerified === "true")
                    return <> <div className="ms-content-wrapper">
                        <div className="row">
                            <div className="col-xl-12 col-md-12">
                                <div className="ms-panel">
                                    <div className="ms-panel-header ms-panel-custome">
                                        <Upload uid={props.uid} />
                                        <Edit_Details uid={props.uid} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                        ;
            }
            })}
    </>
    );
};

export default Form;
