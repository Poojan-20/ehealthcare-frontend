import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { message } from 'antd';
import { storage, db } from '../firebase';
import { AES, enc } from 'crypto-js';
import PatientSideDash from "./PatientSideDash";
import { useAuth } from "../context/AuthContext";
import CryptoJS from "crypto-js";

const ReportUpload = () => {

    const { currentUser } = useAuth();
    const [patients, setPatients] = useState([]);
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [encryptvalue, setEncryptValue] = useState('');
    const [filee, setFilee] = useState([]);
    const [url, setUrl] = useState('')
    const [decryptedContent, setDecryptedContent] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);


    useEffect(() => {
        db.collection("patients").onSnapshot((snapshot) => {
            setPatients(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const handleUpload = (e) => {
        e.preventDefault();

        if (!file) {
            message.error('Please select a file to upload!');
            return;
        }

        // let reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onload = function (event) {
            // console.log(event.target.result)
            // const buffer = new Uint8Array(event.target.result);
            // const binary = '';
            // for (var i = 0; i < buffer.byteLength; i++) {
            //     binary += String.fromCharCode(buffer[i]);
            // }
            // console.log(file)
            const encrypted = AES.encrypt(fileName, 'secretkey').toString();
            setEncryptValue(encrypted);
            // console.log(buffer);
            console.log(encrypted)
            const decrypted = AES.decrypt(encrypted , 'secretkey').toString(enc.Utf8)
            if (decrypted === fileName){
                console.log("Match")
            }else{
                console.log("Not match")
            }

            const uploadTask = storage.ref(`files/${file.name}`).putString(encrypted, 'base64', { contentType: 'application/pdf' });

            // const encrypted = AES.encrypt(file, "key").toString();  //Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
            // console.log("Encrypteddddd", encrypted)
            // const decrypted = AES.decrypt(encrypted, "key").toString(enc.Utf8);
            // const uploadTask = storage.ref(`files/${file.name}`).putString(encrypted, 'base64', { contentType: 'application/pdf' });

            uploadTask.on(
                "state_changed",
                () => {
                    // complete function ...
                    storage
                        .ref("files")
                        .child(file.name)
                        .getDownloadURL()
                        .then((url) => {
                            db.collection("patients")
                                .doc(currentUser.uid)
                                .collection("files")
                                .add({
                                    name: file.name,
                                    url: url,
                                    encrypted: encrypted,
                                    createdAt: new Date(),
                                })
                                .then(() => {
                                    message.success(`File ${fileName} uploaded successfully!`);
                                    console.log(url);
                                    setFile(null);
                                    // setUrl(url);
                                    setFileName('');
                                    // setEncryptionKey('');
                                }).catch(error => {
                                    message.error(error.message);
                                });
                        });
                }
            );
        // }

    };

    // FETCHING Patient'S Report FROM DB
    useEffect(() => {
        db.collection('patients')
            .doc(currentUser.uid)
            .collection('files')
            .onSnapshot((snapshot) => {
                const newFiles = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setFilee(newFiles);
            });

    }, []);

    const handleFileSelect = (filess) => {
        console.log("Selected file:", filess);
        setSelectedFile(filess);
        storage
            .ref('files')
            .child(filess.name)
            .getDownloadURL()
            .then((url) => {
                console.log("Encrypted file URL:", url);
                fetch(url)
                    .then((res) => res.text())
                    .then((content) => {
                        // console.log(content)
                        // console.log("content", filess.encrypted)
                        const decrypted = AES.decrypt(filess.encrypted, "secretkey").toString(enc.Utf8);
                        console.log("Decrypted", decrypted);
                        // const binaryData = atob(decrypted);
                        // const array = new Uint8Array(binaryData.length);
                        // for (let i = 0; i < binaryData.length; i++) {
                        //     array[i] = binaryData.charCodeAt(i);
                        // }
                        const bob = new Blob([decrypted], { type: 'application/pdf' });
                        const bobb = URL.createObjectURL(bob);
                        setDecryptedContent(bobb);

                        // const decrypted = CryptoJS.AES.decrypt(content, "key").toString(CryptoJS.enc.Utf8);
                        // console.log(decrypted);
                        // const binaryData = new Uint8Array(decrypted.split(",").map(Number));
                        // setDecryptedContent(binaryData);
                        // // Verify that the decrypted data is a valid PDF file
                        // const blob = new Blob([binaryData], { type: "application/pdf" });
                        // const link = document.createElement("a");
                        // link.href = URL.createObjectURL(blob);
                        // link.download = filess.name;
                        // document.body.appendChild(link);
                        // link.click();
                        // document.body.removeChild(link);
                    });
            });
    };


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
                            <Link to="#prescription" className="text-white" data-toggle="modal"><i className="flaticon-pencil mr-2"></i> Blog</Link>
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
                                                            <button type="button" name="upload" value="upload" id="upload" onClick={handleUpload} className="btn btn-block btn-primary">Upload <i className="fa fa-fw fa-caret-right"></i>
                                                            </button>
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
                                                                <li className="mb-2">Avoid blurred images.</li>
                                                                <li className="mb-2">Include details of doctor and patient + clinic visit date.</li>
                                                                <li className="mb-2">Medicines will be dispensed as per prescription.</li>
                                                                <li className="mb-2">Supported file types: jpeg, jpg, png.</li>
                                                                <li className="mb-2">Maximum allowed file size: 2MB</li>
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
                                                {filee.map((filess) => (
                                                    <li className="btn-primary" key={filess.id} style={{ cursor: 'pointer', padding: 10, margin: 5 }} onClick={() => handleFileSelect(filess)}>
                                                        {filess.name}
                                                    </li>
                                                ))}

                                            </ul>
                                            {
                                                decryptedContent && (
                                                    <div style={{ marginTop: 20 }}> 
                                                        <h2 style={{ fontSize: 24 }}>{selectedFile.name}</h2>
                                                        {/* <h2 style={{ fontSize: 24 }}>{encryptionKey}</h2> */}
                                                        
                                                        {/* <iframe src={URL.createObjectURL(new Blob([decryptedContent], { type: "application/pdf" }))} style={{ width: "100%", height: "500px" }} /> */}
                                                        <iframe src={decryptedContent} style={{ width: "100%", height: "500px" }} />
                                                    </div>
                                                )
                                            }

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