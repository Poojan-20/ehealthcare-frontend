import React from 'react'
import { Link, useNavigate } from "react-router-dom";

import {
  Container,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  Button,
  ButtonGroup,
} from "@mui/material";
// import { createTheme } from "@mui/material/styles";
// import { db } from "../firebase";
import DoctorSideDash from "../Doctor/DoctorSideDash";
import MainDashboard from '../components/MainDashboard';


const Labadmin = () => {
  const paper = {
    p: 2,
    display: "flex",
    flexDirection: "column",
  };
  return (
    <>
      <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
        {/* <DoctorSideDash /> */}
        <MainDashboard/>
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

              <li className="ms-nav-item  ms-d-none">
                <Link to="#mymodal" className="text-white" data-toggle="modal"><i className="flaticon-spreadsheet mr-2"></i> Make an appointment</Link>
              </li>

              <li className="ms-nav-item ms-d-none">
                <Link to="#prescription" className="text-white" data-toggle="modal"><i className="flaticon-pencil mr-2"></i> Write a prescription</Link>
              </li>

              <li className="ms-nav-item ms-d-none">
                <Link to="#report1" className="text-white" data-toggle="modal"><i className="flaticon-list mr-2"></i> Generate Report</Link>
              </li>
              <li className="ms-nav-item dropdown">
                <Link to="#" className="text-disabled ms-has-notification" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="flaticon-bell"></i></Link>
                <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="notificationDropdown">
                  <li className="dropdown-menu-header">
                    <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Notifications</span></h6>
                    <span className="badge badge-pill badge-info">4 New</span>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li className="ms-scrollable ms-dropdown-list ps">
                    <Link className="media p-2" to="#">
                      <div className="media-body">
                        <span>12 ways to improve your crypto dashboard</span>
                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 30 seconds ago</p>
                      </div>
                    </Link>
                    <Link className="media p-2" to="#">
                      <div className="media-body">
                        <span>You have newly registered users</span>
                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 45 minutes ago</p>
                      </div>
                    </Link>
                    <Link className="media p-2" to="#">
                      <div className="media-body">
                        <span>Your account was logged in from an unauthorized IP</span>
                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 2 hours ago</p>
                      </div>
                    </Link>
                    <Link className="media p-2" to="#">
                      <div className="media-body">
                        <span>An application form has been submitted</span>
                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 1 day ago</p>
                      </div>
                    </Link>
                    <div className="ps__rail-x" style={{ left: "0px", bottom: "0px" }}><div className="ps__thumb-x" tabIndex="0" style={{ left: "0px", width: "0px" }}></div></div><div className="ps__rail-y" style={{ top: "0px", right: "0px" }}><div className="ps__thumb-y" tabIndex="0" style={{ top: "0px", height: "0px" }}></div></div></li>
                  <li className="dropdown-divider"></li>
                  <li className="dropdown-menu-footer text-center">
                    <Link to="#">View all Notifications</Link>
                  </li>
                </ul>
              </li>
              <li className="ms-nav-item ms-nav-user dropdown">
                <Link to="#" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img className="ms-user-img ms-img-round float-right" src={"../images/doctor-3.jpg"} alt="people" /> </Link>
                <ul className="dropdown-menu dropdown-menu-right user-dropdown" aria-labelledby="userDropdown">
                  <li className="dropdown-menu-header">
                    <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Welcome</span></h6>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li className="ms-dropdown-list">
                    <Link className="media fs-14 p-2" to="../prebuilt-pages/user-profile.html"> <span><i className="flaticon-user mr-2"></i> Profile</span> </Link>
                    <Link className="media fs-14 p-2" to="../apps/email.html"> <span><i className="flaticon-mail mr-2"></i> Inbox</span> <span className="badge badge-pill badge-info">3</span> </Link>
                    <Link className="media fs-14 p-2" to="../prebuilt-pages/user-profile.html"> <span><i className="flaticon-gear mr-2"></i> Account Settings</span> </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li className="dropdown-menu-footer">
                    <Link className="media fs-14 p-2" to="../prebuilt-pages/lock-screen.html"> <span><i className="flaticon-security mr-2"></i> Lock</span> </Link>
                  </li>
                  <li className="dropdown-menu-footer">
                    <Link className="media fs-14 p-2" to="../prebuilt-pages/default-login.html"> <span><i className="flaticon-shut-down mr-2"></i> Logout</span> </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="ms-toggler ms-d-block-sm pr-0 ms-nav-toggler" data-toggle="slideDown" data-target="#ms-nav-options">
              <span className="ms-toggler-bar bg-white"></span>
              <span className="ms-toggler-bar bg-white"></span>
              <span className="ms-toggler-bar bg-white"></span>
            </div>
          </nav>
          <div className="ms-content-wrapper">
            <div className="row">
              <div className="col-xl-12 col-md-12">
                <div className="ms-panel-header ms-panel-custome">

                  <div className="col-sm-12">
                    <div className="mb-2"> New Appointments</div>
                    <table id="data-table-2" className="table table-striped thead-primary w-100 dataTable no-footer" role="grid"
                      aria-describedby="data-table-2_info" style={{ "width": "1159px" }}>
                      <thead style={{ "textAlign": 'center' }}>
                        <tr role="row">
                          <th className="sorting" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                            aria-label="Address: activate to sort column ascending" style={{ "width": "80px" }}>Mode</th>
                          <th className="sorting" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                            aria-label="Address: activate to sort column ascending" style={{ "width": "100px" }}>Slot</th>
                          <th className="sorting" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                            aria-label="Age: activate to sort column ascending" style={{ "width": "40px" }}>Symptoms</th>
                          <th className="sorting" tabIndex="0" aria-controls="data-table-2" rowSpan="1" colSpan="1"
                            aria-label="Action: activate to sort column ascending" style={{ "width": "50px" }}>Action</th>
                        </tr>
                      </thead>
                    </table>
                    {/* <Grid item xs={12}>
                      <div className="mb-2" style={{ "marginTop": "35px" }}> Confirmed Appointments</div>
                      <Paper>
                        <List>
                          <div className="ms-panel-header" style="border-style: solid; border-width: thin; margin-bottom: 20px;">
                          <Grid container>
                                    <Grid item xs={12} sm={9}>
                                <Typography>Mode: Online <br/>Slot: 10/26/2022,11:47<br/>Symptoms: Back Pain </Typography>
                              </Grid>
                              </Grid>
                          </div>
                          <div className="ms-panel-header" style="border-style: solid; border-width: thin; margin-bottom: 20px;">
                          <Grid container>
                                    <Grid item xs={12} sm={9}>
                                <Typography>Mode: Online <br/>Slot: 10/26/2022,11:47<br/>Symptoms: Back Pain </Typography>
                              
                              </Grid>
                              </Grid>
                          </div>
                      </List>
                      </Paper>
                    </Grid> */}
                    <Grid item xs={12}>
                      <div className="mb-2" style={{"marginTop":"35px"}}> Confirmed Appointments</div>
                      <Paper style={paper} sx={{ "padding": "20px" }}>
                        <List>
                          
                                <div className="ms-panel-header" style={{ "borderStyle": "solid", "borderWidth": "thin" ,"marginBottom":"20px"}}>
                                  <Grid container>
                                    <Grid item xs={12} sm={9}>
                                      <Typography>
                                      Patient Name: Poojan <br/>
                                      Slot: 10/26/2022,11:47
                                      <br/>
                                      Type of Test: Blood Test 
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </div>
                                <div className="ms-panel-header" style={{ "borderStyle": "solid", "borderWidth": "thin" ,"marginBottom":"20px"}}>
                                  <Grid container>
                                    <Grid item xs={12} sm={9}>
                                      <Typography>
                                      Patient Name: Sanyam <br/>
                                      Slot: 10/26/2022,11:47
                                      <br/>
                                      Type of Test: CBC Test 
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </div>
                        </List>
                      </Paper>
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

    </>

  )
}

export default Labadmin