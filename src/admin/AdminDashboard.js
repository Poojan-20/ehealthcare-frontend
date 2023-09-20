import React from 'react'
import { Link ,useNavigate } from 'react-router-dom';
import firebase from "../firebase.mjs";

const AdminDashboard = () => {
    const navigate = useNavigate()
    const handleSignout = () => {
        firebase.auth().signOut();
        navigate("/");
    };
    return (
        <>
            <body className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">     
                <aside id="ms-side-nav" className="side-nav fixed ms-aside-scrollable ms-aside-left">

                    <div className="logo-sn ms-d-block-lg">
                        <Link className="pl-0 ml-0 text-center" to="/"> <img src={"../assets/img/medjestic-logo-216x62.png"} alt="logo" /> </Link>
                        <Link to="#" className="text-center ms-logo-img-link"> <img src={"../assets/img/dashboard/doctor-3.jpg"} alt="logo" /></Link>
                        <h5 className="text-center text-white mt-2">Admin</h5>
                    </div>

                    <ul className="accordion ms-main-aside fs-14" id="side-nav-accordion">

                        <li className="menu-item">
                            <Link to="/adminhome"  data-target="#dashboard" aria-expanded="false" aria-controls="dashboard">
                                <span><i className="material-icons fs-16">dashboard</i>Dashboard </span>
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link to="/doctor_verify" data-target="#doctor" aria-expanded="false" aria-controls="doctor">
                                <span><i className="fas fa-stethoscope"></i>Doctor</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/lab_verify" data-target="#doctor" aria-expanded="false" aria-controls="doctor">
                                <span><i className="fas fa-stethoscope"></i>Laboratory</span>
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link to="/admin_patientlist"  data-target="#patient" aria-expanded="false" aria-controls="patient">
                                <span><i className="fas fa-user"></i>Patients</span>
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link to="/createpost"  data-target="#department" aria-expanded="false" aria-controls="department">
                                <span><i className="fas fa-sitemap"></i>Create Post</span>
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link to="/latest_updates"  data-target="#schedule" aria-expanded="false" aria-controls="schedule">
                                <span><i className="fas fa-list-alt"></i>Latest News</span>
                            </Link>
                        </li>


                        <li className="menu-item" onClick={handleSignout}>
                            <Link to="#"  aria-expanded="false" aria-controls="report" >
                                <span onClick={handleSignout}><i className="fas fa-sign-out-alt" ></i>LogOut</span>
                            </Link>
                        </li>


                    </ul>
                </aside>

                <aside id="ms-recent-activity" className="side-nav fixed ms-aside-right ms-scrollable">
                    <div className="ms-aside-header">
                        <ul className="nav nav-tabs tabs-bordered d-flex nav-justified mb-3" role="tablist">
                            <li role="presentation" className="fs-12"><Link to="#activityLog" aria-controls="activityLog" className="active" role="tab" data-toggle="tab"> Activity Log</Link> </li>
                            <li role="presentation" className="fs-12"><Link to="#recentPosts" aria-controls="recentPosts" role="tab" data-toggle="tab"> Settings </Link> </li>
                            <li><button type="button" className="close ms-toggler text-center" data-target="#ms-recent-activity" data-toggle="slideRight"><span aria-hidden="true">&times;</span></button></li>
                        </ul>
                    </div>
                    <div className="ms-aside-body">
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active fade show" id="activityLog">
                                <ul className="ms-activity-log">
                                    <li>
                                        <div className="ms-btn-icon btn-pill icon btn-light">
                                            <i className="flaticon-gear"></i>
                                        </div>
                                        <h6>Update 1.0.0 Pushed</h6>
                                        <span> <i className="material-icons">event</i>1 January, 2019</span>
                                        <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, ula in sodales vehicula....</p>
                                    </li>
                                    <li>
                                        <div className="ms-btn-icon btn-pill icon btn-success">
                                            <i className="flaticon-tick-inside-circle"></i>
                                        </div>
                                        <h6>Profile Updated</h6>
                                        <span> <i className="material-icons">event</i>4 March, 2018</span>
                                        <p className="fs-14">Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                                    </li>
                                    <li>
                                        <div className="ms-btn-icon btn-pill icon btn-warning">
                                            <i className="flaticon-alert-1"></i>
                                        </div>
                                        <h6>Your payment is due</h6>
                                        <span> <i className="material-icons">event</i>1 January, 2019</span>
                                        <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, ula in sodales vehicula....</p>
                                    </li>
                                    <li>
                                        <div className="ms-btn-icon btn-pill icon btn-danger">
                                            <i className="flaticon-alert"></i>
                                        </div>
                                        <h6>Database Error</h6>
                                        <span> <i className="material-icons">event</i>4 March, 2018</span>
                                        <p className="fs-14">Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                                    </li>
                                    <li>
                                        <div className="ms-btn-icon btn-pill icon btn-info">
                                            <i className="flaticon-information"></i>
                                        </div>
                                        <h6>Checkout what's Trending</h6>
                                        <span> <i className="material-icons">event</i>1 January, 2019</span>
                                        <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, ula in sodales vehicula....</p>
                                    </li>
                                    <li>
                                        <div className="ms-btn-icon btn-pill icon btn-secondary">
                                            <i className="flaticon-diamond"></i>
                                        </div>
                                        <h6>Your Dashboard is ready</h6>
                                        <span> <i className="material-icons">event</i>4 March, 2018</span>
                                        <p className="fs-14">Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                                    </li>
                                </ul>
                                <Link to="#" className="btn btn-primary d-block"> View All </Link>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="recentPosts">
                                <h6>General Settings</h6>
                                <div className="ms-form-group">
                                    <span className="ms-option-name fs-14">Location Tracking</span>
                                    <label className="ms-switch float-right">
                                        <input type="checkbox" />
                                        <span className="ms-switch-slider round"></span>
                                    </label>
                                </div>
                                <div className="ms-form-group">
                                    <span className="ms-option-name fs-14">Allow Notifications</span>
                                    <label className="ms-switch float-right">
                                        <input type="checkbox" />
                                        <span className="ms-switch-slider round"></span>
                                    </label>
                                </div>
                                <div className="ms-form-group">
                                    <span className="ms-option-name fs-14">Allow Popups</span>
                                    <label className="ms-switch float-right">
                                        <input type="checkbox" checked />
                                        <span className="ms-switch-slider round"></span>
                                    </label>
                                </div>
                                <h6>Log Settings</h6>
                                <div className="ms-form-group">
                                    <span className="ms-option-name fs-14">Enable Logging</span>
                                    <label className="ms-switch float-right">
                                        <input type="checkbox" checked />
                                        <span className="ms-switch-slider round"></span>
                                    </label>
                                </div>
                                <div className="ms-form-group">
                                    <span className="ms-option-name fs-14">Audit Logs</span>
                                    <label className="ms-switch float-right">
                                        <input type="checkbox" />
                                        <span className="ms-switch-slider round"></span>
                                    </label>
                                </div>
                                <div className="ms-form-group">
                                    <span className="ms-option-name fs-14">Error Logs</span>
                                    <label className="ms-switch float-right">
                                        <input type="checkbox" checked />
                                        <span className="ms-switch-slider round"></span>
                                    </label>
                                </div>
                                <h6>Advanced Settings</h6>
                                <div className="ms-form-group">
                                    <span className="ms-option-name fs-14">Enable Logging</span>
                                    <label className="ms-switch float-right">
                                        <input type="checkbox" checked />
                                        <span className="ms-switch-slider round"></span>
                                    </label>
                                </div>
                                <div className="ms-form-group">
                                    <span className="ms-option-name fs-14">Audit Logs</span>
                                    <label className="ms-switch float-right">
                                        <input type="checkbox" />
                                        <span className="ms-switch-slider round"></span>
                                    </label>
                                </div>
                                <div className="ms-form-group">
                                    <span className="ms-option-name fs-14">Error Logs</span>
                                    <label className="ms-switch float-right">
                                        <input type="checkbox" checked />
                                        <span className="ms-switch-slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </body>
        </>
    )
}

export default AdminDashboard