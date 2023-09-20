import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Patient_List = (props) => {
  const { currentUser } = useAuth();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    db.collection("patients").onSnapshot((snapshot) => {
      setPatients(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const doctorRef = db.doc(`doctors/${props.uid}`);
  //   doctorRef.set({
  //     isPermission: "pending",
  //   });
  // };
  return (
    <>
      {patients.map((patient) => {
        if (patient.uid === props.uid)
          return (<tbody>
            <tr role="row" className="even">
              <td style={{ "textAlign": "center" }}><img src={`${patient.imageURL}`} style={{ "width": "65px", "height": "60px" }} /></td>
              <td style={{ "textAlign": 'center' }}>{patient.name} </td>
              <td>{patient.address1},{patient.city}</td>
              <td style={{ "textAlign": 'center' }}> {patient.age}</td>
              <td style={{ "textAlign": 'center' }}>jenettecaldwell@example.com</td>
              <td style={{ "textAlign": 'center' }}>
                <Link to={`/doctor_patient_profile/${props.uid}`} onClick={()=>{
                  const doctorRef = db.doc(`doctors/${currentUser.uid}`);
                  const ispermission = "isPermission " +  props.uid
                  doctorRef.update({
                    [ispermission]: "pending"
                  });
                }}><i class="fas fa-solid fa-eye" ></i></Link>

              </td>
            </tr>
          </tbody>
          )
      })}
    </>
  );
};

export default Patient_List;
