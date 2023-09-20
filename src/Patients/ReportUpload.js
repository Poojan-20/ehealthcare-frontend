import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { message } from 'antd';
import { storage, db, auth } from '../firebase.mjs';
import { AES, enc } from 'crypto-js';
import PatientSideDash from "./PatientSideDash";
import { useAuth } from "../context/AuthContext";
import { collection, query, where, getDocs } from "firebase/firestore";

const ReportUpload = () => {

    const { currentUser } = useAuth();
    const [patients, setPatients] = useState([]);
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('');
    const [filee, setFilee] = useState([]);
    const [decryptedContent, setDecryptedContent] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    useEffect(() => {
        db.collection("patients").onSnapshot((snapshot) => {
            setPatients(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const handledelete = async (report) => {
        const q = query(collection(db, "patients" , currentUser.uid , 'files'), where("name", "==", report.name));
        const querySnapshot = await getDocs(q);
        const documentID = querySnapshot.docs[0].id;
        console.log("I",documentID)
        db.collection('patients').doc(currentUser.uid).collection('files').doc(documentID).delete().then(() => {
            message.success(`File ${report.name} deleted successfully!`);
        })

    }


    // const handleUpload = (e) => {
    //     e.preventDefault();

    //     if (!file) {
    //         message.error('Please select a file to upload!');
    //         return;
    //     }

    //     const uploadTask = storage.ref(`files/${file.name}`).put(file, { contentType: 'application/pdf' })
    //     // const uploadTask = storageRef.child("fileName").put(file, { contentType: 'application/pdf' });

    //     // const uploadTask = storage.ref(`files`).putString(encrypted, 'base64', { contentType: 'application/pdf' });

    //     // const decrypted = AES.decrypt(encrypted, "key").toString(enc.Utf8);
    //     // const uploadTask = storage.ref(`files/${file.name}`).putString(encrypted, 'base64', { contentType: 'application/pdf' });

    //     uploadTask.on(
    //         "state_changed",
    //         () => {
    //             uploadTask.snapshot.ref
    //                 .getDownloadURL()
    //                 .then((url) => {
    //                     const encryptkey = (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)).toString();
    //                     const encryptedUrl = AES.encrypt(url, encryptkey).toString();
    //                     console.log(encryptedUrl)
    //                     console.log(encryptkey)
    //                     const encryptedvalue = encryptedUrl + encryptkey
    //                     db.collection("patients")
    //                         .doc(currentUser.uid)
    //                         .collection("files")
    //                         .add({
    //                             name: file.name,
    //                             url: encryptedvalue,
    //                             createdAt: new Date(),
    //                         })
    //                         .then(() => {
    //                             message.success(`File ${fileName} uploaded successfully!`);
    //                             setFile('');
    //                             setFileName('');
    //                         }).catch(error => {
    //                             message.error(error.message);
    //                         });
    //                 });
    //         }
    //     );
    //     // }

    // };

    const handleUpload = (e) => {
        e.preventDefault();

        if (!file) {
            message.error('Please select a file to upload!');
            return;
        }

        const uploadTask = storage
            .ref(`files/${file.name}`)
            .put(file, { contentType: 'application/pdf' });

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // This code will be called multiple times while the upload is in progress.
                // You can use this function to show a progress bar, for example.

            },
            (error) => {
                // This code will be called if there is an error during the upload.
                message.error(error.message);
            },
            () => {
                // This code will be called when the upload finishes successfully.
                uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                    const encryptkey = (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)).toString();
                    const encryptedUrl = AES.encrypt(url, encryptkey).toString();
                    console.log(encryptedUrl);
                    console.log(encryptkey);
                    const encryptedvalue = encryptedUrl + encryptkey;
                    db.collection('patients')
                        .doc(currentUser.uid)
                        .collection('files')
                        .add({
                            name: file.name,
                            url: encryptedvalue,
                            createdAt: new Date(),
                        })
                        .then(() => {
                            message.success(`File ${file.name} uploaded successfully!`);
                            setFile('');
                            setFileName('');
                        })
                        .catch((error) => {
                            message.error(error.message);
                        });
                });
            }
        );
    };

    // FETCHING Patient'S Report FROM DB
    useEffect(() => {
        db.collection('patients')
            .doc(currentUser.uid)
            .collection('files')
            .onSnapshot((snapshot) => {
                setFilee(snapshot.docs.map((doc) => doc.data()));
            });

    }, []);

    const handleFileSelect = (report) => {
        setSelectedFile(report);
        try {
            const key = report.url.slice(-21)
            console.log("Key decrypt:", key)

            const url = report.url.substr(0, report.url.length - 21)
            console.log("After cut URL:", url)

            const decrypted = AES.decrypt(url, key).toString(enc.Utf8);
            const dec = "https://cors-anywhere.herokuapp.com/" + decrypted
            console.log("Decrypted URL", decrypted);

            // if (decrypted === "") {
            //     const interval = setInterval(() => {
            //         setIsLoading(true);
            //       }, 5000);
            //       setIsLoading(true);
            //     setIsError(true);
            // }

            fetch(dec)
                .then(setDecryptedContent(decrypted))
            //     (res) => res.arrayBuffer())
            // .then((encryptedArrayBuffer) => {
            //     console.log(encryptedArrayBuffer)
            // const decrypted = AES.decrypt(report.url, 'secretkey').toString(enc.Utf8);
            // const binaryData = new Uint8Array(decrypted.split(",").map(Number));
            // console.log("Decrypt: ", decrypted)
            // if (decrypted) {
            //     console.log("Print")
            // }
            // const decryptedArrayBuffer = new TextEncoder().encode(binaryData);
            // const blob = new Blob([decrypted], { type: 'application/pdf' });
            // const objectUrl = URL.createObjectURL(blob);
            // setDecryptedContent(decrypted);
            // });
        } catch (e) {
            console.log(e)
        }

    };
    // Fetch data after component mount and show loading spinner for 5 seconds


    return (

        <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
            <PatientSideDash />
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

                        <li className="ms-nav-item ms-d-none">
                            <Link to="/shopping" className="text-white" data-toggle="modal"><i className="flaticon-cart-shopping mr-2"></i> Shop</Link>
                        </li>
                        <li className="ms-nav-item ms-d-none">
                            <Link to="/labhome" className="text-white" data-toggle="modal"><i class="fas fa-regular fa-flask-vial"></i>Lab Testing</Link>
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
                {patients.map((patient) => {
                    if (patient.uid === currentUser.uid)
                        return (
                            <>
                                <section className="pt-md-8 pt-4">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-5 mb-5 mb-md-0">
                                                <div className="border p-4 upload_prescription">
                                                    <form method="post" encType="multipart/form-data" className="ng-pristine ng-valid">
                                                        <div className="form-group">
                                                            <label><strong>Upload Report</strong></label>
                                                            <p className="mb-3"><small>Please attach a report to proceed</small></p>

                                                            <div className="custom-file">
                                                                <input type="file" className="custom-file-input form-control" id="customFile" onChange={handleChange} />
                                                                <label className="custom-file-label" htmlFor="customFile" value="Choose File">{fileName}</label>
                                                                <button type="button" name="upload" value="upload" id="upload" onClick={handleUpload} className="btn btn-block btn-primary">Upload <i className="fa fa-fw fa-caret-right"></i>
                                                                </button>
                                                            </div>
                                                            {/* <div>
                                                                <input type="text"
                                                                    placeholder="Enter encryption key"
                                                                    value={Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}
                                                                    onChange={e => setEncryptionKey(e.target.value)}
                                                                    style={{ marginTop: '20px', width: "100%", border: '1px solid gray', borderRadius: '5px', textAlign: 'center' }} />
                                                            </div> */}
                                                        </div>
                                                        <div className="form-group">

                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="bg-light py-4 px-md-5 px-3">
                                                    <h4 className="mb-3">Valid Uploading Guide</h4>
                                                    <div className="row">
                                                        <div className="valid-prescription-list col-lg-7">
                                                            <ul className="pl-4">
                                                                <li className="mb-2">Don’t crop out any part of the image.</li>
                                                                <li className="mb-2">Supported file type: pdf only</li>
                                                                <li className="mb-2">Maximum allowed file size: 2MB</li>
                                                                <li className="mb-2">Do not use [_ ,-,@] or any special characters in file name </li>
                                                                <li className="mb-2">Use combination of letters and numbers in file name </li>
                                                                <li className="mb-2">Valid File Name Eg: Report1.pdf </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-5">
                                                            <img className="img-fluid" src="assets/img/extra/prescription.svg" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', padding: 20 }}>
                                            <h1 style={{ fontSize: 36 }}>Files</h1>
                                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
                                                {
                                                    filee.map((report) => (
                                                        <li className="btn-primary" key={report.id} style={{ cursor: 'pointer', padding: 10, margin: 5 }} onClick={() => handleFileSelect(report)}>
                                                            {report.name}  <div onClick={() => handledelete(report)}> <i className="ti-trash" style={{ color: "white" }}></i></div>
                                                        </li>
                                                    ))}


                                                <li > {
                                                    !filee && (
                                                        <li>No Reports Uploaded </li>
                                                    )
                                                }  </li>
                                            </ul>
                                            <div>
                                                {isLoading && !isError && (
                                                    <div className="loading-container" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                                        <div className="spinner" style={{ width: "40px", height: "40px", borderRadius: "50%", border: "5px solid #eaeaea", borderTopColor: "3e98c7", animation: "spinner 1s ease-in-out infinite", transform: "rotate(360deg)" }}></div>
                                                        <p>Loading...</p>
                                                    </div>
                                                )}
                                                {!isLoading && isError && (
                                                    <div className="error-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "#f2f2f2" }}>
                                                        <p style={{ color: "red", fontWeight: "bold" }}>Failed to Fetch. Check your connection.</p>
                                                    </div>
                                                )}
                                                {!isLoading && !isError && decryptedContent && (
                                                    <div style={{ marginTop: 20 }} >
                                                        <h2 style={{ fontSize: 24 }}>{selectedFile.name}</h2>
                                                        {/* <h2 style={{ fontSize: 24 }}>{encryptionKey}</h2> */}

                                                        {/* <iframe src={URL.createObjectURL(new Blob([decryptedContent], { type: "application/pdf" }))} style={{ width: "100%", height: "500px" }} /> */}
                                                        {/* <iframe src={URL.createObjectURL(new Blob([decryptedContent]), { type: 'application/pdf' })} style={{ width: "100%", height: "500px" }} /> */}
                                                        <iframe src={decryptedContent} style={{ width: "100%", height: "500px" }} />

                                                    </div>
                                                )}
                                            </div>

                                        </div>
                                    </div>
                                </section>
                            </>
                        )
                })}

            </main>
        </div>

    );
};
export default ReportUpload;