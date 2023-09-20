import React from 'react'
import { Link } from 'react-router-dom';
import Dashboard from './MainDashboard';
const Social = () => {
    return (
        <>
            <body className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <header>
                    <div className="header-area ">
                        <div className="header-top_area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-6 col-md-6 ">
                                        <div className="social_media_links">
                                            <Link to="#">
                                                <i className="fab fa-linkedin"></i>
                                            </Link>
                                            <Link to="#">
                                                <i className="fab fa-facebook"></i>
                                            </Link>
                                            <Link to="#"><i class="fab fa-instagram"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-md-12">
                                        <div className="short_contact_list">
                                            <ul>
                                                <li><Link to="#"> <i className="fa fa-envelope"></i> <span className="__cf_email__" data-cfemail="20494e464f60444f434d45440e434f4d">medjestic@gmail.com</span></Link></li>
                                                <li><Link to="/contact"> <i className="fa fa-phone"></i> 8974321564</Link></li>
                                                <li><Link to="/social"> <i className="fa-solid fa-rocket-launch"></i>Social </Link></li>
                                                <li><Link to="/admin_login"> <i className="fa fa-user"></i> Admin</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="sticky-header" className="main-header-area">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-3 col-lg-2">
                                        <div className="logo">
                                            <Link to="index.html">
                                                <img src={"../assets/img/xlogo"} alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-7">
                                        <div className="main-menu  d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><Link className="active" to="/">Home</Link></li>
                                                    <li><Link to="/doctor_login">Doctor</Link></li>
                                                    <li><Link to="/patient_login">Patient</Link></li>
                                                    <li><Link to="/blog">Blog</Link></li>
                                                    <li><Link to="/shopping">Shopping</Link></li>
                                                    <li><Link to="/about">About</Link></li>
                                                    <li><Link to="/contact">Contacts</Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                        <div className="Appointment">
                                            <div className="book_btn d-none d-lg-block">
                                                <Link className="popup-with-form" to="/patient_login">Make an Appointment</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-lg-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="ms-content-wrapper">
                    <div className="row">

                        <div className="col-md-12">
                            <div className="ms-panel">
                                <div className="ms-panel-header">
                                    <div className="d-flex justify-content-between">
                                        <div className="ms-header-text">
                                            <h6>Social Activity</h6>
                                            <p>Quick overview on your social media platforms</p>
                                        </div>
                                        <button type="button" className="btn btn-outline-primary ms-graph-metrics" name="button">Add New Account</button>
                                    </div>
                                </div>
                                <div className="ms-panel-body pb-0">
                                    <div className="row">
                                        <div className="col-xl-3 col-md-6">
                                            <div className="ms-card card-twitter ms-widget ms-infographics-widget">
                                                <div className="ms-card-body media">
                                                    <div className="media-body">
                                                        <h6>Total Tweets</h6>
                                                        <p className="ms-card-change"> <i className="material-icons">arrow_upward</i> 12,039</p>
                                                        <p className="fs-12">48% From Last 24 Hours</p>
                                                    </div>
                                                </div>
                                                <i className="fab fa-twitter-square"></i>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6">
                                            <div className="ms-card card-linkedin ms-widget ms-infographics-widget">
                                                <div className="ms-card-body media">
                                                    <div className="media-body">
                                                        <h6>Total Followers</h6>
                                                        <p className="ms-card-change"> <i className="material-icons">arrow_upward</i> 3,819</p>
                                                        <p className="fs-12">48% From Last 24 Hours</p>
                                                    </div>
                                                </div>
                                                <i className="fab fa-linkedin"></i>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6">
                                            <div className="ms-card card-facebook ms-widget ms-infographics-widget">
                                                <div className="ms-card-body media">
                                                    <div className="media-body">
                                                        <h6>Total Likes</h6>
                                                        <p className="ms-card-change"> <i className="material-icons">arrow_upward</i> 9,289</p>
                                                        <p className="fs-12">48% From Last 24 Hours</p>
                                                    </div>
                                                </div>
                                                <i className="fab fa-facebook"></i>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6">
                                            <div className="ms-card card-instagram ms-widget ms-infographics-widget">
                                                <div className="ms-card-body media">
                                                    <div className="media-body">
                                                        <h6>Total Followers</h6>
                                                        <p className="ms-card-change"> <i className="material-icons">arrow_upward</i> 7,658</p>
                                                        <p className="fs-12">48% From Last 24 Hours</p>
                                                    </div>
                                                </div>
                                                <i className="fab fa-instagram"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-12">
                            <div className="ms-panel ms-panel-fh">
                                <div className="ms-panel-header">
                                    <h6>Social Media Followers</h6>
                                </div>
                                <div className="ms-panel-body p-0">
                                    <div className="ms-social-media-followers">
                                        <div className="ms-social-grid">
                                            <i className="fab fa-linkedin-in bg-linkedin"></i>
                                            <p className="ms-text-dark">8,033</p>
                                            <span>Followers</span>
                                        </div>
                                        <div className="ms-social-grid">
                                            <i className="fab fa-twitter bg-twitter"></i>
                                            <p className="ms-text-dark">8,039</p>
                                            <span>Followers</span>
                                        </div>
                                    </div>
                                    <div className="ms-social-media-followers">
                                        <div className="ms-social-grid">
                                            <i className="fab fa-facebook-f bg-facebook"></i>
                                            <p className="ms-text-dark">8,039</p>
                                            <span>Likes</span>
                                        </div>
                                        <div className="ms-social-grid">
                                            <i className="fab fa-instagram bg-instagram"></i>
                                            <p className="ms-text-dark">98,039</p>
                                            <span>Followers</span>
                                        </div>
                                    </div>
                                    <div className="ms-social-media-followers">
                                        <div className="ms-social-grid">
                                            <i className="fab fa-youtube bg-youtube"></i>
                                            <p className="ms-text-dark">8,039</p>
                                            <span>Subscribers</span>
                                        </div>
                                        <div className="ms-social-grid">
                                            <i className="fab fa-google-plus-g bg-g-plus"></i>
                                            <p className="ms-text-dark">98,039</p>
                                            <span>Followers</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-md-12">
                            <div className="ms-panel">
                                <div className="ms-panel-header">
                                    <div className=" d-flex justify-content-between">
                                        <div className="ms-header-text">
                                            <h6>Social Media Conversations</h6>
                                            <p>Track your social media conversations</p>
                                        </div>
                                        <button type="button" className="btn btn-outline-primary ms-graph-metrics" name="button">Link New Source</button>
                                    </div>
                                </div>
                                <div className="ms-panel-body p-0">
                                    <div className="table-responsive">
                                        <table className="table table-bordered mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Source</th>
                                                    <th scope="col" colSpan="3">Conversation</th>
                                                    <th scope="col" colSpan="2">Sessions</th>
                                                    <th scope="col">Avg. Rate</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Facebook</td>
                                                    <td className="w-25">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-primary" role="progressbar" style={{ "width": "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td>76</td>
                                                    <td className="ms-text-success">+64</td>
                                                    <td>76</td>
                                                    <td className="ms-text-success">+64</td>
                                                    <td>9.12%</td>
                                                </tr>
                                                <tr>
                                                    <td>Twitter</td>
                                                    <td className="w-25">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-primary" role="progressbar" style={{ "width": "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td>26</td>
                                                    <td className="ms-text-success">+10</td>
                                                    <td>26</td>
                                                    <td className="ms-text-success">+10</td>
                                                    <td>7.65%</td>
                                                </tr>
                                                <tr>
                                                    <td>Linkedin</td>
                                                    <td className="w-25">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-primary" role="progressbar" style={{ "width": "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td>14</td>
                                                    <td className="ms-text-success">+7</td>
                                                    <td>14</td>
                                                    <td className="ms-text-success">+7</td>
                                                    <td>14.29%</td>
                                                </tr>
                                                <tr>
                                                    <td>Google +</td>
                                                    <td className="w-25">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-primary" role="progressbar" style={{ "width": "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td>12</td>
                                                    <td className="ms-text-danger">-8</td>
                                                    <td>12</td>
                                                    <td className="ms-text-danger">-8</td>
                                                    <td>10.99%</td>
                                                </tr>
                                                <tr>
                                                    <td>Instagram</td>
                                                    <td className="w-25">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-primary" role="progressbar" style={{ "width": "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td>4</td>
                                                    <td className="ms-text-success">+2</td>
                                                    <td>4</td>
                                                    <td className="ms-text-success">+2</td>
                                                    <td>22.35%</td>
                                                </tr>
                                                <tr>
                                                    <td>Youtube</td>
                                                    <td className="w-25">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-primary" role="progressbar" style={{ "width": "45%" }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td>86</td>
                                                    <td className="ms-text-danger">-33</td>
                                                    <td>86</td>
                                                    <td className="ms-text-danger">-33</td>
                                                    <td>34.12%</td>
                                                </tr>
                                                <tr>
                                                    <td>Skype</td>
                                                    <td className="w-25">
                                                        <div className="progress">
                                                            <div className="progress-bar bg-primary" role="progressbar" style={{ "width": "55%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td>23</td>
                                                    <td className="ms-text-success">+48</td>
                                                    <td>23</td>
                                                    <td className="ms-text-success">+48</td>
                                                    <td>3.75%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-7 col-md-12">
                            <div className="ms-panel ms-panel-fh">
                                <div className="ms-panel-header header-mini">
                                    <div className="d-flex justify-content-between">
                                        <h6>Youtube Subscribers</h6>
                                        <div className="btn-group btn-group-toggle ms-graph-metrics" data-toggle="buttons">
                                            <label className="btn btn-sm btn-outline-primary active day">
                                                <input type="radio" checked="" /> Day
                                            </label>
                                            <label className="btn btn-sm btn-outline-primary month">
                                                <input type="radio" /> Month
                                            </label>
                                            <label className="btn btn-sm btn-outline-primary year">
                                                <input type="radio" /> Year
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between ms-graph-meta">
                                        <ul className="ms-list-flex">
                                            <li>
                                                <span>Total Subscribers</span>
                                                <h3 className="ms-count">85,390</h3>
                                            </li>
                                            <li>
                                                <span>New Subscribers</span>
                                                <h3 className="ms-count">19,038</h3>
                                            </li>
                                            <li>
                                                <span>Unsubscribed</span>
                                                <h3 className="ms-count">3,785</h3>
                                            </li>
                                        </ul>
                                        <div className="ms-graph-labels">
                                            <span className="ms-graph-regular"></span>
                                            <p>Gained</p>
                                            <span className="ms-graph-decrease"></span>
                                            <p>Lost</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ms-panel-body">
                                    <div className="ms-panel-body">
                                        <div className="chartjs-size-monitor"
                                            style={{ "position": "absolute", "inset": "0px", "overflow": "hidden", "visibility": "hidden", "zIndex ": "-1" }}>
                                            <div className="chartjs-size-monitor-expand"
                                                style={{ "position": "absolute", "left": "0px", "top": "0px", "right": "0px", "bottom": "0px", "overflow": "hidden", "visibility": "hidden", "zIndex ": "-1" }}>
                                                <div style={{ "position": "absolute", "width": "1000000px", "height": "1000000px", "left": "0px", "top": "0px" }}></div>
                                            </div>
                                            <div className="chartjs-size-monitor-shrink"
                                                style={{ "position": "absolute", "left": "0px", "top": "0px", "right": "0px", "bottom": "0px", "overflow": "hidden", "visibility": "hidden", "zIndex ": "-1" }}>
                                                <div style={{ "position": "absolute", "width": "200%", "height": "200%", "left": "0px", "top": "0px" }}></div>
                                            </div>
                                        </div>
                                        <canvas id="youtube-subscribers" style={{ "display": "block", "height": "339px", "width": "679px", "width": "848px", "height": "423px" }}
                                            className="chartjs-render-monitor"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-5 col-md-12">
                            <div className="ms-panel ms-panel-fh ms-facebook-engagements">
                                <div className="ms-panel-header">
                                    <h6>Facebook Engagements and Impressions</h6>
                                </div>
                                <div className="ms-panel-body p-0">
                                    <div className="ms-facebook-page-selection">
                                        <p className="ms-text-dark">Jan 25, 2019 to Feb 02, 2019</p>
                                        <p>Jan 18, 2019 to Feb 24, 2019 (Prev)</p>
                                        <span>Facebook Page:</span>
                                        <div className="dropdown">
                                            <Link to="#" className="has-chevron" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Page Name here</Link>
                                            <ul className="dropdown-menu">
                                                <li className="ms-dropdown-list">
                                                    <Link className="media p-2" to="#">
                                                        <div className="media-body">
                                                            <span>Page 1</span>
                                                        </div>
                                                    </Link>
                                                    <Link className="media p-2" to="#">
                                                        <div className="media-body">
                                                            <span>Page 2</span>
                                                        </div>
                                                    </Link>
                                                    <Link className="media p-2" to="#">
                                                        <div className="media-body">
                                                            <span>Page 3</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ul className="ms-list clearfix">
                                        <li className="ms-list-item">
                                            <div className="d-flex justify-content-between align-items-end">
                                                <div className="ms-graph-meta">
                                                    <h2>User Engagement</h2>
                                                    <p className="ms-text-dark">45.07%</p>
                                                    <p className="ms-text-success">+28.44%</p>
                                                    <p>VS 66.68% (Prev)</p>
                                                </div>
                                                <div className="ms-graph-canvas">
                                                    <canvas id="engaged-users"></canvas>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="ms-list-item">
                                            <div className="d-flex justify-content-between align-items-end">
                                                <div className="ms-graph-meta">
                                                    <h2>Page Impressions</h2>
                                                    <p className="ms-text-dark">45.07%</p>
                                                    <p className="ms-text-success">+28.44%</p>
                                                    <p>VS 66.68% (Prev)</p>
                                                </div>
                                                <div className="ms-graph-canvas">
                                                    <canvas id="page-impressions"></canvas>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-12">
                            <div className="ms-panel ms-panel-fh">
                                <div className="ms-panel-header">
                                    <h6>Twitter Feed</h6>
                                </div>
                                <div className="ms-panel-body p-0">
                                    <ul className="ms-list ms-feed ms-twitter-feed">
                                        <li className="ms-list-item">
                                            <div className="media clearfix">
                                                <img src={"../assets/img/dashboard/employee-list/employee-(3).jpg"} className="ms-img-round ms-img-small" alt="people" />
                                                <div className="media-body">
                                                    <h4 className="ms-feed-user">Rakhan Potik</h4>
                                                    <p>@rakhan45</p>
                                                    <p>
                                                        <Link to="#" className="btn-link">@zurak</Link> Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener
                                                    </p>
                                                    <p>
                                                        <Link to="#" className="btn-link">#design</Link>
                                                        <Link to="#" className="btn-link">#article</Link>
                                                        <Link to="#" className="btn-link">#interface</Link>
                                                    </p>
                                                    <div className="ms-feed-controls">
                                                        <span>
                                                            <i className="material-icons">reply</i>
                                                        </span>
                                                        <span>
                                                            <i className="material-icons">repeat</i> 1.9k
                                                        </span>
                                                        <span>
                                                            <i className="material-icons">favorite</i> 2.5k
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="ms-list-item">
                                            <div className="media clearfix">
                                                <img src={"../assets/img/dashboard/employee-list/employee-(4).jpg"} className="ms-img-round ms-img-small" alt="people" />
                                                <div className="media-body">
                                                    <h4 className="ms-feed-user">Rakhan Potik</h4>
                                                    <p>@rakhan45</p>
                                                    <p>
                                                        <Link to="#" className="btn-link">@zurak</Link> Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener
                                                    </p>
                                                    <p>
                                                        <Link to="#" className="btn-link">#design</Link>
                                                        <Link to="#" className="btn-link">#article</Link>
                                                        <Link to="#" className="btn-link">#interface</Link>
                                                    </p>
                                                    <div className="ms-feed-controls">
                                                        <span>
                                                            <i className="material-icons">reply</i>
                                                        </span>
                                                        <span>
                                                            <i className="material-icons">repeat</i> 1.9k
                                                        </span>
                                                        <span>
                                                            <i className="material-icons">favorite</i> 2.5k
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="ms-list-item">
                                            <div className="media clearfix">
                                                <img src={"../assets/img/dashboard/employee-list/employee-(1).jpg"} className="ms-img-round ms-img-small" alt="people" />
                                                <div className="media-body">
                                                    <h4 className="ms-feed-user">Rakhan Potik</h4>
                                                    <p>@rakhan45</p>
                                                    <p>
                                                        <Link to="#" className="btn-link">@zurak</Link> Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener
                                                    </p>
                                                    <p>
                                                        <Link to="#" className="btn-link">#design</Link>
                                                        <Link to="#" className="btn-link">#article</Link>
                                                        <Link to="#" className="btn-link">#interface</Link>
                                                    </p>
                                                    <div className="ms-feed-controls">
                                                        <span>
                                                            <i className="material-icons">reply</i>
                                                        </span>
                                                        <span>
                                                            <i className="material-icons">repeat</i> 1.9k
                                                        </span>
                                                        <span>
                                                            <i className="material-icons">favorite</i> 2.5k
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="ms-list-item">
                                            <div className="media clearfix">
                                                <img src={"../assets/img/dashboard/employee-list/employee-(2).jpg"} className="ms-img-round ms-img-small" alt="people" />
                                                <div className="media-body">
                                                    <h4 className="ms-feed-user">Rakhan Potik</h4>
                                                    <p>@rakhan45</p>
                                                    <p>
                                                        <Link to="#" className="btn-link">@zurak</Link> Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener
                                                    </p>
                                                    <p>
                                                        <Link to="#" className="btn-link">#design</Link>
                                                        <Link to="#" className="btn-link">#article</Link>
                                                        <Link to="#" className="btn-link">#interface</Link>
                                                    </p>
                                                    <div className="ms-feed-controls">
                                                        <span>
                                                            <i className="material-icons">reply</i>
                                                        </span>
                                                        <span>
                                                            <i className="material-icons">repeat</i> 1.9k
                                                        </span>
                                                        <span>
                                                            <i className="material-icons">favorite</i> 2.5k
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="ms-list-item">
                                            <div className="media clearfix">
                                                <img src={"../assets/img/dashboard/employee-list/employee-(6).jpg"} className="ms-img-round ms-img-small" alt="people" />
                                                <div className="media-body">
                                                    <h4 className="ms-feed-user">Rakhan Potik</h4>
                                                    <p>@rakhan45</p>
                                                    <p>
                                                        <Link to="#" className="btn-link">@zurak</Link> Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener
                                                    </p>
                                                    <p>
                                                        <Link to="#" className="btn-link">#design</Link>
                                                        <Link to="#" className="btn-link">#article</Link>
                                                        <Link to="#" className="btn-link">#interface</Link>
                                                    </p>
                                                    <div className="ms-feed-controls">
                                                        <span>
                                                            <i className="material-icons">reply</i>
                                                        </span>
                                                        <span>
                                                            <i className="material-icons">repeat</i> 1.9k
                                                        </span>
                                                        <span>
                                                            <i className="material-icons">favorite</i> 2.5k
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-12">
                            <div className="ms-panel ms-panel-fh">
                                <div className="ms-panel-header">
                                    <h6>Facebook Feed</h6>
                                </div>
                                <div className="ms-panel-body p-0">
                                    <ul className="ms-list ms-feed ms-facebook-feed">
                                        <li className="ms-list-item">
                                            <div className="media clearfix">
                                                <img src={"../assets/img/dashboard/employee-list/employee-(3).jpg"} className="ms-img-round ms-img-small" alt="people" />
                                                <div className="media-body">
                                                    <h4 className="ms-feed-user">Rakhan Potik</h4>
                                                    <p>24 January at 9:04 pm</p>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            <img className="ms-fb-feed-img" src={"../assets/img/basic/card-1.jpg"} alt="post" />
                                            <div className="d-flex justify-content-between">
                                                <div className="ms-fb-post-meta">
                                                    <i className="material-icons">thumb_up</i> <span>485 likes</span>
                                                </div>
                                                <div className="ms-fb-post-meta">
                                                    <span>48 comments</span>
                                                </div>
                                            </div>
                                            <div className="ms-feed-controls">
                                                <span>
                                                    <i className="material-icons">thumb_up</i> Like
                                                </span>
                                                <span>
                                                    <i className="material-icons">chat_bubble_outline</i> Comment
                                                </span>
                                                <span>
                                                    <i className="material-icons">share</i> Share
                                                </span>
                                            </div>
                                        </li>
                                        <li className="ms-list-item">
                                            <div className="media clearfix">
                                                <img src="../../assets/img/dashboard/employee-list/employee-(1).jpg" className="ms-img-round ms-img-small" alt="people" />
                                                <div className="media-body">
                                                    <h4 className="ms-feed-user">Rakhan Potik</h4>
                                                    <p>24 January at 9:04 pm</p>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            <img className="ms-fb-feed-img" src={"../assets/img/basic/card-2.jpg"} alt="post" />
                                            <div className="d-flex justify-content-between">
                                                <div className="ms-fb-post-meta">
                                                    <i className="material-icons">thumb_up</i> <span>485 likes</span>
                                                </div>
                                                <div className="ms-fb-post-meta">
                                                    <span>48 comments</span>
                                                </div>
                                            </div>
                                            <div className="ms-feed-controls">
                                                <span>
                                                    <i className="material-icons">thumb_up</i> Like
                                                </span>
                                                <span>
                                                    <i className="material-icons">chat_bubble_outline</i> Comment
                                                </span>
                                                <span>
                                                    <i className="material-icons">share</i> Share
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-12">
                            <div className="ms-panel ms-panel-fh">
                                <div className="ms-panel-header">
                                    <h6>Instagram Feed</h6>
                                </div>
                                <div className="ms-panel-body p-0">
                                    <ul className="ms-list ms-feed ms-instagram-feed">
                                        <li className="ms-list-item">
                                            <div className="media clearfix">
                                                <img src={"../assets/img/dashboard/employee-list/employee-(3).jpg"} className="ms-img-round ms-img-small" alt="people" />
                                                <div className="media-body">
                                                    <h4 className="ms-feed-user">username24</h4>
                                                </div>
                                            </div>
                                            <img className="ms-fb-feed-img" src={"../assets/img/basic/card-3.jpg"} alt="post" />
                                            <div className="d-flex justify-content-between">
                                                <div className="ms-feed-controls">
                                                    <i className="material-icons">favorite_border</i>
                                                    <i className="material-icons">chat_bubble_outline</i>
                                                </div>
                                            </div>
                                            <ul className="ms-group-members clearfix">
                                                <li> <img src={"../assets/img/dashboard/employee-list/employee-(2).jpg"} alt="member" /> </li>
                                                <li> <img src={"../assets/img/dashboard/employee-list/employee-(5).jpg"} alt="member" /> </li>
                                                <li className="ms-group-count">
                                                    <p>Liked By <span className="ms-text-dark medium">user5</span> and <span className="ms-text-dark medium">37 others</span></p>
                                                </li>
                                            </ul>
                                            <p> <span className="ms-text-dark medium">username24</span> website design in progress </p>
                                            <p> <Link to="#" className="btn-link">#design</Link> <Link to="#" className="btn-link">#ui</Link> <Link to="#" className="btn-link">#ux</Link> <Link to="#" className="btn-link">#website</Link></p>
                                        </li>
                                        <li className="ms-list-item">
                                            <div className="media clearfix">
                                                <img src={"../assets/img/dashboard/employee-list/employee-(1).jpg"} className="ms-img-round ms-img-small" alt="people" />
                                                <div className="media-body">
                                                    <h4 className="ms-feed-user">username24</h4>
                                                </div>
                                            </div>
                                            <img className="ms-fb-feed-img" src={"../assets/img/basic/card-4.jpg"} alt="post" />
                                            <div className="d-flex justify-content-between">
                                                <div className="ms-feed-controls">
                                                    <i className="material-icons">favorite_border</i>
                                                    <i className="material-icons">chat_bubble_outline</i>
                                                </div>
                                            </div>
                                            <ul className="ms-group-members clearfix">
                                                <li> <img src={"../assets/img/dashboard/employee-list/employee-(7).jpg"} alt="member" /> </li>
                                                <li> <img src={"../assets/img/dashboard/employee-list/employee-(6).jpg"} alt="member" /> </li>
                                                <li className="ms-group-count">
                                                    <p>Liked By <span className="ms-text-dark medium">user5</span> and <span className="ms-text-dark medium">37 others</span></p>
                                                </li>
                                            </ul>
                                            <p> <span className="ms-text-dark medium">username24</span> website design in progress </p>
                                            <p> <Link to="#" className="btn-link">#design</Link> <Link to="#" className="btn-link">#ui</Link> <Link to="#" className="btn-link">#ux</Link> <Link to="#" className="btn-link">#website</Link></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="footer_top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-md-6 col-lg-4">
                                    <div className="footer_widget">
                                        <div className="footer_logo">
                                            <Link to="#">
                                                <img src="../assets/img/xlogo.png" alt="" />
                                            </Link>
                                        </div>
                                        <p>
                                            Firmament morning sixth subdue darkness
                                            creeping gathered divide.
                                        </p>
                                        <div className="socail_links">
                                            <ul>
                                                <li>
                                                    <Link to="#">
                                                        <i class="fab fa-facebook"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i class="fab fa-twitter"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i class="fab fa-instagram"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 offset-xl-1 col-md-6 col-lg-3">
                                    <div className="footer_widget">
                                        <h3 className="footer_title">
                                            Departments
                                        </h3>
                                        <ul>
                                            <li><Link to="#">Eye Care</Link></li>
                                            <li><Link to="#">Skin Care</Link></li>
                                            <li><Link to="#">Pathology</Link></li>
                                            <li><Link to="#">Medicine</Link></li>
                                            <li><Link to="#">Dental</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-6 col-lg-2">
                                    <div className="footer_widget">
                                        <h3 className="footer_title">
                                            Useful Links
                                        </h3>
                                        <ul>
                                            <li><Link to="#">About</Link></li>
                                            <li><Link to="#">Blog</Link></li>
                                            <li><Link to="#">About</Link></li>
                                            <li><Link to="#"> Contact</Link></li>
                                            <li><Link to="#"> Appointment</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="copy-right_text">
                        <div className="container">
                            <div className="footer_border"></div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <p className="copy_right text-center">

                                        Copyright &copy;<script data-cfasync="false" src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with  by I16

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </body>

        </>
    )
}

export default Social