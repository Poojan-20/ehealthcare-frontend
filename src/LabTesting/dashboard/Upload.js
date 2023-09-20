import React, { useState, useEffect } from "react";
import { Alert, Avatar, Button, LinearProgress } from "@mui/material";
import { db, storage } from "../../firebase.mjs";
import Title from './Title';
const Upload = (props) => {

    const [Tester, setTester] = useState([]);
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [imageError, setImageError] = useState("");

    // FETCHING DOCTOR'S DATA FROM DB
    useEffect(() => {
        db.collection("LabTester").onSnapshot((snapshot) => {
            setTester(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    // FUNCTION TO HANDLE CHANGE IN IMAGE SELECTED TO UPLOAD
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    // FUNCTION TO HANDLE UPLOAD OF IMAGE TO DB AND STORAGE
    const handleUpload = () => {
        if (image == null) {
            setImageError("Choose file before uploading!");
        } else {
            const uploadTask = storage
                .ref(`tester_profile_images/${image.name}`)
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
                        .ref("tester_profile_images")
                        .child(image.name)
                        .getDownloadURL()
                        .then((url) => {
                            setUrl(url);
                            db.collection("LabTester")
                                .doc(props.uid)
                                .update({
                                    imageURL: `${url}`,
                                });
                            console.log(url)
                        });
                }
            );
            setImageError("");
        }
    };
    return (
        <React.Fragment>
            {Tester.map((tester) => {
                if (tester.uid === props.uid)
                    return (
                        <>
                            {/* DOCTOR'S NAME */}


                            {/* DOCTOR'S PROFILE PICTURE */}
                            <div className="ms-content-wrapper">
                                <div className="row">
                                    <div className="col-xl-12 col-md-12">
                                        <div className="ms-panel" style={{"width": "295px"}}>
                                            <div className="ms-panel-header">
                                                <div className="mb-3" style={{ "textAlign": "center"}}>
                                                    {tester.name}
                                                </div>
                                                <Avatar
                                                    alt="Doctor_Profile_Image"
                                                    src={`${tester.imageURL}`}
                                                    style={{ "width": "160px", "height": "160px" , "marginLeft": "45px"}}
                                                />
                                                <input className="mt-4 col-xl-12 col-md-12" type="file" onChange={handleChange} style={{"marginLeft": "25px"}}/>
                                                {imageError && <Alert severity="error">{imageError}</Alert>}
                                                <button className="btn btn-primary mt-4 d-inline w-2" style={{"marginLeft": "65px"}} variant="contained" onClick={handleUpload}>
                                                    Upload
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="col-md-6 mb-3">
                                <label>Doctor Image</label>
                                <div class="custom-file">
                                    <input type="file" className="custom-file-input" id="validatedCustomFile" onChange={handleChange} />
                                    <label class="" for="validatedCustomFile">Choose file...</label>
                                    <button className=""onClick={handleUpload}>Upload</button>
                                    <Button variant="contained" onClick={handleUpload}>
                                        Upload
                                    </Button>
                                </div>
                            </div> */}

                        </>
                    );
            })}
        </React.Fragment>
    )
}

export default Upload