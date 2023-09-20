import React, { useState, useEffect } from 'react'
import { db } from "../../firebase.mjs";
// import Title from '../dashboard/Title';
import CompleteProfile from "./CompleteProfile";
import Edit_details from "./edit_details/Edit_details";
import Upload from "./Upload";
const Form = (props) => {
    const [doctors, setDoctors] = useState([]);

    // FETCHING DOCTOR'S DATA FROM DB
    useEffect(() => {
        db.collection("doctors").onSnapshot((snapshot) => {
            setDoctors(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    return (
        <>
            {doctors.map((doctor) => {
                if (doctor.uid === props.uid) {
                    if (doctor.isVerified === "false")
                        return <CompleteProfile uid={props.uid} />;
                    else if (doctor.isVerified === "pending")
                        return <>
                        <div className="ms-content-wrapper">
                            <div className="row">
                                <div className="col-xl-6 col-md-3">
                                    <div className="ms-panel">
                                        <div className="ms-panel-header ms-panel-custome">
                                        Verification is pending by Admin
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div></>;
                    else if (doctor.isVerified === "true")
                        return <> <div className="ms-content-wrapper">
                            <div className="row">
                                <div className="col-xl-12 col-md-12">
                                    <div className="ms-panel">
                                        <div className="ms-panel-header ms-panel-custome">
                                            <Upload uid={props.uid} />
                                            <Edit_details uid={props.uid} />
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
    )
}

export default Form