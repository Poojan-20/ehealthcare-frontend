import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Paper,
  Container,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { db } from "../firebase.mjs";
import AdminDashboard from './AdminDashboard';
import { createTheme } from "@mui/material/styles";

const Latest_Updates = () => {
  const [posts, setPosts] = useState([]);
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

  useEffect(() => {
    db.collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

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
                  <Grid container>
                    <Grid item xs={12}>
                      {/* LATEST UPDATES */}
                      <Typography variant="h4" align="center" sx={typography}>
                        Latest Updates
                      </Typography>
                      <Paper sx={paper}>
                        {posts.map((post) => {
                          return (
                            <div sx={{ width: "100%" }}>
                              <Accordion>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <Typography
                                    variant="h6"
                                    sx={typography}
                                  // sx={{ width: "75%", flexShrink: 0 }}
                                  >
                                    {post.title}
                                  </Typography>
                                  {/* <Typography variant="subtitle2">
                                    {new Date(
                                      post.createdAt.seconds * 1000
                                    ).toLocaleDateString("en-US")}
                                    , {new Date(post.createdAt.seconds * 1000).getHours()}
                                    :
                                    {new Date(post.createdAt.seconds * 1000).getMinutes()}{" "}
                                    hrs
                                  </Typography> */}
                                </AccordionSummary>

                                <AccordionDetails>
                                  <img
                                    src={`${post.imageURL}`}
                                    height="150vh"
                                    width="200vw"
                                  />
                                  <br />
                                  <Typography variant="body">{post.body}</Typography>
                                </AccordionDetails>
                              </Accordion>
                              <br />
                            </div>
                          );
                        })}
                      </Paper>
                    </Grid>
                  </Grid>
                </Container>
              </div>
            </div>
          </div>
        </main>
      </body>

    </>
  );
};

export default Latest_Updates;
