import React, { useState, useEffect } from "react";
import { Alert, Avatar, Button, LinearProgress } from "@mui/material";
// import Title from "./title";
import { db, storage } from "../../firebase.mjs";
// import { avatar } from "../styles";

const Patient_upload = (props) => {
  const [patients, setPatients] = useState([]);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [imageError, setImageError] = useState("");

  useEffect(() => {
    db.collection("patients").onSnapshot((snapshot) => {
      setPatients(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (image == null) {
      setImageError("Choose file before uploading!");
    } else {
      const uploadTask = storage
        .ref(`patient_profile_images/${image.name}`)
        .put(image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("patient_profile_images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
              db.collection("patients")
                .doc(props.uid)
                .update({
                  imageURL: `${url}`,
                });
            });
        }
      );
    }
  };

  return (
    <>
      {patients.map((patient) => {
        if (patient.uid === props.uid)
          return (
            <>
              <div className="ms-content-wrapper">
                <div className="row">
                  <div className="col-xl-12 col-md-12">
                    <div className="ms-panel" style={{ "width": "295px" }}>
                      <div className="ms-panel-header">
                        <div className="mb-3" style={{ "textAlign": "center" }}>
                          {patient.name}
                        </div>
                        <Avatar
                          alt="Doctor_Profile_Image"
                          src={`${patient.imageURL}`}
                          style={{ "width": "160px", "height": "160px", "marginLeft": "45px" }}
                        />
                        <input className="mt-4 col-xl-12 col-md-12" type="file" onChange={handleChange} style={{ "marginLeft": "25px" }} />
                        {imageError && <Alert severity="error">{imageError}</Alert>}
                        <button className="btn btn-primary mt-4 d-inline w-2" style={{ "marginLeft": "65px" }} variant="contained" onClick={handleUpload}>
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
      })}
    </>
  );
};

export default Patient_upload;