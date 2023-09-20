import React, { useState, useEffect } from "react";
import { Grid, Paper, Container, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import { createTheme } from "@mui/material/styles";
import { storage, db, auth } from "../firebase.mjs";

const AdminHome = () => {
  const theme = createTheme();

  const container = {
    mt: "12vh",
    ml: "5vw",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #dff6fe 30%, #0095de 90%)",
    backgroundImage: `url('../images/blue2.jpg')`,
    backgroundPosition: "center",
    backgroundRepeat: "repeat-x",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      mt: "10vh",
      ml: "10vw",
      maxWidth: "95vw",
    },
    [theme.breakpoints.down("sm")]: {
      ml: "12vw",
      maxWidth: "80vw",
    },
  };

  const paper = {
    p: 2,
    display: "flex",
    flexDirection: "column",
    //backgroundColor: "transparent",
  };

  const typography = { fontWeight: "bold", color: "#063547" };

  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    if (!file || !user) {
      return;
    }

    const uploadTask = storage.ref(`pdfs/${file.name}`).put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        // error function ...
        console.error(error);
      },
      () => {
        // complete function ...
        storage
          .ref("pdfs")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("pdfs")
              .doc(user.uid)
              .collection("userPdfs")
              .add({
                url: url,
                createdAt: new Date(),
              });
          });
      }
    );
  };



  const [pdfs, setPdfs] = useState([]);
  // const [user, setUser] = useState(null);
  const [zoom, setZoom] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        db.collection("pdfs")
          .doc(authUser.uid)
          .collection("userPdfs")
          .onSnapshot((snapshot) => {
            setPdfs(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }))
            );
          });
      } else {
        setPdfs([]);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      db.collection("pdfs")
        .doc(user.uid)
        .collection("userPdfs")
        .onSnapshot((snapshot) => {
          setPdfs(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });
    }
  }, [user]);

  const handleZoom = (pdf) => {
    setSelectedPdf(pdf);
    setZoom(true);
  };

  return (
    <>
      <AdminDashboard />
      <body className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
        <nav className="navbar ms-navbar">
          <div className="ms-aside-toggler ms-toggler pl-0" data-target="#ms-side-nav" data-toggle="slideLeft">
            <span className="ms-toggler-bar bg-white"></span>
            <span className="ms-toggler-bar bg-white"></span>
            <span className="ms-toggler-bar bg-white"></span>
          </div>
          <div className="logo-sn logo-sm ms-d-block-sm">
            <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="/"><img src={"../images/medjestic-logo-84x41.png"} alt="logo" /> </Link>
          </div>
          <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">

            <li className="ms-nav-item ms-d-none">
              <Link to="/shopping" className="text-white" data-toggle="modal"><i className="flaticon-cart-shopping mr-2"></i> Shop</Link>
            </li>
            <li className="ms-nav-item ms-d-none">
              <Link to="#blog" className="text-white" data-toggle="modal"><i className="flaticon-pencil mr-2"></i>Blog</Link>
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
        <main className="body-content">
          <div className="ms-content-wrapper">
            <div className="row">
              <div className="col-xl-12 col-md-12">
                <Container sx={container} style={{ "marginLeft": "0px", "marginTop": "10px" }}>
                  <Grid >
                    <Grid item xs={12}>
                      <Typography variant="h5" align="center" sx={typography}>
                        ADMIN DASHBOARD
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper sx={paper}>
                        <Typography variant="h6">
                          <b>Your job is to: </b>
                          <br />
                          Verify doctors by visiting the National Medical Council Page{" "}
                          <br />
                          Keep a check on patients <br />
                          Create new posts/updates for all users <br />
                          Read feedbacks and respond to them!
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                </Container>

                {/* <div>
                  {pdfs.map((pdf) => (
                    <iframe
                      key={pdf.id}
                      src={pdf.url}
                      title={pdf.createdAt.toDate().toString()}
                    />
                  ))}
                </div> */}
                <div>
                  {zoom ? (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <iframe
                        src={selectedPdf.url}
                        style={{ width: "80%", height: "80%" }}
                      />

                      <button onClick={() => setZoom(false)}>Close</button>
                    </div>
                  ) : null}
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    {pdfs.map((pdf) => (
                      <div
                        key={pdf.id}
                        style={{ width: 200, height: 200, margin: 10, cursor: "grab" }}
                        onClick={() => handleZoom(pdf)}
                      >
                        <iframe
                          src={pdf.url}
                          title={pdf.createdAt.toDate().toString()}
                          style={{ width: "100%", height: "100%" }}

                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
};

export default AdminHome;
