import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {
  Grid,
  Paper,
  Container,
  LinearProgress,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { db, storage } from "../firebase.mjs";
import AdminDashboard from './AdminDashboard';
import { createTheme } from "@mui/material/styles";

const Create_Post = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
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

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleCreate = () => {
    const uploadTask = storage.ref(`post_images/${image.name}`).put(image);

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
          .ref("post_images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            db.collection("posts").add({
              title: title,
              body: body,
              imageURL: `${url}`,
              createdAt: new Date(),
            });
          });
      }
    );

    navigate("/latest_updates");
  };

  return (
    <><AdminDashboard />
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
              <Link to="#prescription" className="text-white" data-toggle="modal"><i className="flaticon-pencil mr-2"></i>Blog</Link>
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
                <Container maxWidth="lg" sx={container} style={{ "marginLeft": "0px", "marginTop": "10px" }}>
                  <Typography variant="h4" align="center" sx={typography}>
                    Create Post
                  </Typography>
                  <Paper sx={paper}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          required
                          id="Title"
                          name="Title"
                          label="Title"
                          fullWidth
                          size="small"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          id="Body"
                          name="Body"
                          label="Body"
                          fullWidth
                          multiline
                          size="small"
                          rows={10}
                          value={body}
                          onChange={(e) => setBody(e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" value={progress} />
                        <br />
                        <input type="file" onChange={handleChange} />
                      </Grid>

                      <Grid item xs={12}>
                        <Button variant="contained" onClick={handleCreate}>
                          Create
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Container>
              </div>
            </div>
          </div>
        </main>
      </body>

    </>
  );
};

export default Create_Post;
