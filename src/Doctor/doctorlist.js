import React from 'react'
import { Link } from 'react-router-dom';
const doctorlist = () => {
    return (
        <>
            <body className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <div className="ms-toggler ms-settings-toggle ms-d-block-lg">
                    <i className="flaticon-gear"></i>
                </div>
                <div className="ms-settings-panel ms-d-block-lg">
                    <div className="row">
                        <div className="col-xl-4 col-md-4">
                            <h4 className="section-title">Customize</h4>
                            <div>
                                <label className="ms-switch">
                                    <input type="checkbox" id="dark-mode" />
                                    <span className="ms-switch-slider round"></span>
                                </label>
                                <span> Dark Mode </span>
                            </div>

                        </div>
                        <div className="col-xl-4 col-md-4">
                            <h4 className="section-title">Keyboard Shortcuts</h4>
                            <p className="ms-directions mb-0"><code>Esc</code> Close Quick Bar</p>
                            {/* <p className="ms-directions mb-0"><code>Alt + (1 -> 6)</code> Open Quick Bar Tab</p> */}
                            <p className="ms-directions mb-0"><code>Alt + Q</code> Enable Quick Bar Configure Mode</p>
                        </div>
                    </div>
                </div>

                {/* <div id="preloader-wrap">
                    <div className="spinner spinner-8">
                        <div className="ms-circle1 ms-child"></div>
                        <div className="ms-circle2 ms-child"></div>
                        <div className="ms-circle3 ms-child"></div>
                        <div className="ms-circle4 ms-child"></div>
                        <div className="ms-circle5 ms-child"></div>
                        <div className="ms-circle6 ms-child"></div>
                        <div className="ms-circle7 ms-child"></div>
                        <div className="ms-circle8 ms-child"></div>
                        <div className="ms-circle9 ms-child"></div>
                        <div className="ms-circle10 ms-child"></div>
                        <div className="ms-circle11 ms-child"></div>
                        <div className="ms-circle12 ms-child"></div>
                    </div>
                </div> */}

                <div className="ms-aside-overlay ms-overlay-left ms-toggler" data-target="#ms-side-nav" data-toggle="slideLeft"></div>
                <div className="ms-aside-overlay ms-overlay-right ms-toggler" data-target="#ms-recent-activity" data-toggle="slideRight"></div>

                <aside id="ms-side-nav" className="side-nav fixed ms-aside-scrollable ms-aside-left">

                    <div className="logo-sn ms-d-block-lg">
                        <Link className="pl-0 ml-0 text-center" to="#"> <img src={"../images/medjestic-logo-216x62.png"} alt="logo" /> </Link>
                        <Link to="#" className="text-center ms-logo-img-link"> <img src={"../images/doctor-3.jpg"} alt="logo" /></Link>
                        <h5 className="text-center text-white mt-2">Dr.Samuel</h5>
                        <h6 className="text-center text-white mb-3">Admin</h6>
                    </div>

                    <ul className="accordion ms-main-aside fs-14" id="side-nav-accordion">

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#dashboard" aria-expanded="false" aria-controls="dashboard">
                                <span><i className="material-icons fs-16">dashboard</i>Dashboard </span>
                            </Link>
                            <ul id="dashboard" className="collapse" aria-labelledby="dashboard" data-parent="#side-nav-accordion">
                                <li> <Link to="../../index.html">Medjestic</Link> </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#doctor" aria-expanded="false" aria-controls="doctor">
                                <span><i className="fas fa-stethoscope"></i>Doctor</span>
                            </Link>
                            <ul id="doctor" className="collapse" aria-labelledby="doctor" data-parent="#side-nav-accordion">
                                <li> <Link to="add-doctor.html">Add Doctor</Link> </li>
                                <li> <Link to="doctor-list.html">Doctor List</Link> </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#patient" aria-expanded="false" aria-controls="patient">
                                <span><i className="fas fa-user"></i>Patient</span>
                            </Link>
                            <ul id="patient" className="collapse" aria-labelledby="patient" data-parent="#side-nav-accordion">
                                <li> <Link to="../patient/add-patient.html">Add Patient</Link> </li>
                                <li> <Link to="../patient/patient-list.html">Patient List</Link> </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#department" aria-expanded="false" aria-controls="department">
                                <span><i className="fas fa-sitemap"></i>Department</span>
                            </Link>
                            <ul id="department" className="collapse" aria-labelledby="department" data-parent="#side-nav-accordion">
                                <li> <Link to="../department/add-department.html">Add Department</Link> </li>
                                <li> <Link to="../department/department-list.html">Department List</Link> </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#schedule" aria-expanded="false" aria-controls="schedule">
                                <span><i className="fas fa-list-alt"></i>Doctor Schedule</span>
                            </Link>
                            <ul id="schedule" className="collapse" aria-labelledby="schedule" data-parent="#side-nav-accordion">
                                <li> <Link to="../doctor-schedule/add-schedule.html">Add Schedule</Link> </li>
                                <li> <Link to="../doctor-schedule/schedule-list.html">Schedule List</Link> </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#appointment" aria-expanded="false" aria-controls="appointment">
                                <span><i className="far fa-check-square"></i>Appointment</span>
                            </Link>
                            <ul id="appointment" className="collapse" aria-labelledby="appointment" data-parent="#side-nav-accordion">
                                <li> <Link to="../appointment/add-appointment.html">Add Appointment</Link> </li>
                                <li> <Link to="../appointment/appointment-list.html">Appointment List</Link> </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#payment" aria-expanded="false" aria-controls="payment">
                                <span><i className="fas fa-credit-card"></i>Payment</span>
                            </Link>
                            <ul id="payment" className="collapse" aria-labelledby="payment" data-parent="#side-nav-accordion">
                                <li> <Link to="../payment/add-payment.html">Add Payment</Link> </li>
                                <li> <Link to="../payment/payment-list.html">Payment List</Link> </li>
                                <li> <Link to="../payment/payment-invoice.html">Payment Invoice</Link> </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#report" aria-expanded="false" aria-controls="report">
                                <span><i className="fas fa-file-alt"></i>Report</span>
                            </Link>
                            <ul id="report" className="collapse" aria-labelledby="report" data-parent="#side-nav-accordion">
                                <li> <Link to="../report/patient-report.html">Patient Wise Report</Link> </li>
                                <li> <Link to="../report/doctor-report.html">Doctor Wise Report</Link> </li>
                                <li> <Link to="../report/total-report.html">Total Report</Link> </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#human-resource" aria-expanded="false" aria-controls="human-resource">
                                <span><i className="far fa-user-circle"></i>Human Resource</span>
                            </Link>
                            <ul id="human-resource" className="collapse" aria-labelledby="human-resource" data-parent="#side-nav-accordion">
                                <li> <Link to="../human-resource/add-employee.html">Add Employee</Link> </li>
                                <li> <Link to="../human-resource/employee-list.html">Employee List</Link> </li>
                                <li> <Link to="../human-resource/add-nurse.html">Add Nurse</Link> </li>
                                <li> <Link to="../human-resource/nurse-list.html">Nurse List</Link> </li>
                                <li> <Link to="../human-resource/add-pharmacist.html">Add Pharmacist</Link> </li>
                                <li> <Link to="../human-resource/pharmacist-list.html">Pharmacist List</Link> </li>
                                <li> <Link to="../human-resource/add-representative.html">Add Representative</Link> </li>
                                <li> <Link to="../human-resource/representative-list.html">Representative List</Link> </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#bed" aria-expanded="false" aria-controls="bed">
                                <span><i className="fas fa-bed"></i>Bed Manager</span>
                            </Link>
                            <ul id="bed" className="collapse" aria-labelledby="bed" data-parent="#side-nav-accordion">
                                <li> <Link to="../bed-manager/add-bed.html">Add Bed</Link> </li>
                                <li> <Link to="../bed-manager/bed-list.html">Bed List</Link> </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#notice" aria-expanded="false" aria-controls="notice">
                                <span><i className="far fa-file-alt"></i>Notice</span>
                            </Link>
                            <ul id="notice" className="collapse" aria-labelledby="notice" data-parent="#side-nav-accordion">
                                <li> <Link to="../notice/add-notice.html">Add Notice</Link> </li>
                                <li> <Link to="../notice/notice-list.html">Notice List</Link> </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link to="../widgets.html">
                                <span><i className="material-icons fs-16">widgets</i>Widgets</span>
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#basic-elements" aria-expanded="false" aria-controls="basic-elements">
                                <span><i className="material-icons fs-16">filter_list</i>Basic UI Elements</span>
                            </Link>
                            <ul id="basic-elements" className="collapse" aria-labelledby="basic-elements" data-parent="#side-nav-accordion">
                                <li> <Link to="../ui-basic/accordions.html">Accordions</Link> </li>
                                <li> <Link to="../ui-basic/alerts.html">Alerts</Link> </li>
                                <li> <Link to="../ui-basic/buttons.html">Buttons</Link> </li>
                                <li> <Link to="../ui-basic/breadcrumbs.html">Breadcrumbs</Link> </li>
                                <li> <Link to="../ui-basic/badges.html">Badges</Link> </li>
                                <li> <Link to="../ui-basic/cards.html">Cards</Link> </li>
                                <li> <Link to="../ui-basic/progress-bars.html">Progress Bars</Link> </li>
                                <li> <Link to="../ui-basic/preloaders.html">Pre-loaders</Link> </li>
                                <li> <Link to="../ui-basic/pagination.html">Pagination</Link> </li>
                                <li> <Link to="../ui-basic/tabs.html">Tabs</Link> </li>
                                <li> <Link to="../ui-basic/typography.html">Typography</Link> </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#advanced-elements" aria-expanded="false" aria-controls="advanced-elements">
                                <span><i className="material-icons fs-16">code</i>Advanced UI Elements</span>
                            </Link>
                            <ul id="advanced-elements" className="collapse" aria-labelledby="advanced-elements" data-parent="#side-nav-accordion">
                                <li> <Link to="../ui-advanced/draggables.html">Draggables</Link> </li>
                                <li> <Link to="../ui-advanced/sliders.html">Sliders</Link> </li>
                                <li> <Link to="../ui-advanced/modals.html">Modals</Link> </li>
                                <li> <Link to="../ui-advanced/rating.html">Rating</Link> </li>
                                <li> <Link to="../ui-advanced/tour.html">Tour</Link> </li>
                                <li> <Link to="../ui-advanced/cropper.html">Cropper</Link> </li>
                                <li> <Link to="../ui-advanced/range-slider.html">Range Slider</Link> </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link to="../animation.html">
                                <span><i className="material-icons fs-16">format_paint</i>Animations</span>
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#form-elements" aria-expanded="false" aria-controls="form-elements">
                                <span><i className="material-icons fs-16">input</i>Form Elements</span>
                            </Link>
                            <ul id="form-elements" className="collapse" aria-labelledby="form-elements" data-parent="#side-nav-accordion">
                                <li> <Link to="../form/form-elements.html">Form Elements</Link> </li>
                                <li> <Link to="../form/form-layout.html">Form Layouts</Link> </li>
                                <li> <Link to="../form/form-validation.html">Form Validation</Link> </li>
                                <li> <Link to="../form/form-wizard.html">Form Wizard</Link> </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#charts" aria-expanded="false" aria-controls="charts">
                                <span><i className="material-icons fs-16">equalizer</i>Charts</span>
                            </Link>
                            <ul id="charts" className="collapse" aria-labelledby="charts" data-parent="#side-nav-accordion">
                                <li> <Link to="../charts/chartjs.html">Chart JS</Link> </li>
                                <li> <Link to="../charts/morris-charts.html">Morris Chart</Link> </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#tables" aria-expanded="false" aria-controls="tables">
                                <span><i className="material-icons fs-16">tune</i>Tables</span>
                            </Link>
                            <ul id="tables" className="collapse" aria-labelledby="tables" data-parent="#side-nav-accordion">
                                <li> <Link to="../tables/basic-tables.html">Basic Tables</Link> </li>
                                <li> <Link to="../tables/data-tables.html">Data tables</Link> </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#popups" aria-expanded="false" aria-controls="popups">
                                <span><i className="material-icons fs-16">message</i>Popups</span>
                            </Link>
                            <ul id="popups" className="collapse" aria-labelledby="popups" data-parent="#side-nav-accordion">
                                <li> <Link to="../popups/sweet-alerts.html">Sweet Alerts</Link> </li>
                                <li> <Link to="../popups/toast.html">Toast</Link> </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#icons" aria-expanded="false" aria-controls="icons">
                                <span><i className="material-icons fs-16">border_color</i>Icons</span>
                            </Link>
                            <ul id="icons" className="collapse" aria-labelledby="icons" data-parent="#side-nav-accordion">
                                <li> <Link to="../icons/fontawesome.html">Fontawesome</Link> </li>
                                <li> <Link to="../icons/flaticons.html">Flaticons</Link> </li>
                                <li> <Link to="../icons/materialize.html">Materialize</Link> </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#maps" aria-expanded="false" aria-controls="maps">
                                <span><i className="material-icons fs-16">map</i>Maps</span>
                            </Link>
                            <ul id="maps" className="collapse" aria-labelledby="maps" data-parent="#side-nav-accordion">
                                <li> <Link to="../maps/google-maps.html">Google Maps</Link> </li>
                                <li> <Link to="../maps/vector-maps.html">Vector Maps</Link> </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#pages" aria-expanded="false" aria-controls="pages">
                                <span><i className="material-icons fs-16">insert_drive_file</i>Pages</span>
                            </Link>
                            <ul id="pages" className="collapse" aria-labelledby="pages" data-parent="#side-nav-accordion">
                                <li className="menu-item">
                                    <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#authentication" aria-expanded="false" aria-controls="authentication">Authentication</Link>
                                    <ul id="authentication" className="collapse" aria-labelledby="authentication" data-parent="#pages">
                                        <li> <Link to="../prebuilt-pages/default-login.html">Default Login</Link> </li>
                                        <li> <Link to="../prebuilt-pages/modal-login.html">Modal Login</Link> </li>
                                        <li> <Link to="../prebuilt-pages/default-register.html">Default Registration</Link> </li>
                                        <li> <Link to="../prebuilt-pages/modal-register.html">Modal Registration</Link> </li>
                                        <li> <Link to="../prebuilt-pages/lock-screen.html">Lock Screen</Link> </li>
                                    </ul>
                                </li>
                                <li> <Link to="../prebuilt-pages/coming-soon.html">Coming Soon</Link> </li>
                                <li> <Link to="../prebuilt-pages/error.html">Error Page</Link> </li>
                                <li className="menu-item"> <Link to="../prebuilt-pages/faq.html"> FAQ </Link> </li>
                                <li className="menu-item"> <Link to="../prebuilt-pages/portfolio.html"> Portfolio </Link> </li>
                                <li className="menu-item"> <Link to="../prebuilt-pages/user-profile.html"> User Profile </Link> </li>
                                <li className="menu-item"> <Link to="../prebuilt-pages/invoice.html"> Invoice </Link> </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#bonus" aria-expanded="false">
                                <span><i className="material-icons fs-16">dashboard</i>Bonus Pages </span>
                            </Link>
                            <ul id="bonus" className="collapse" data-parent="#side-nav-accordion">
                                <li> <Link to="../dashboard/web-analytics.html"> Web Analytics </Link> </li>
                                <li> <Link to="../dashboard/social-media.html">Social Media Management</Link> </li>
                                <li> <Link to="../dashboard/project-management.html">Department Management</Link> </li>
                                <li> <Link to="../dashboard/client-management.html">Patient Management</Link> </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#apps" aria-expanded="false" aria-controls="apps">
                                <span><i className="material-icons fs-16">phone_iphone</i>Apps</span>
                            </Link>
                            <ul id="apps" className="collapse" aria-labelledby="apps" data-parent="#side-nav-accordion">
                                <li> <Link to="../apps/chat.html">Chat</Link> </li>
                                <li> <Link to="../apps/email.html">Email</Link> </li>
                                <li> <Link to="../apps/to-do-list.html">To-do List</Link> </li>
                            </ul>
                        </li>

                    </ul>
                </aside>

                <aside id="ms-recent-activity" className="side-nav fixed ms-aside-right ms-scrollable">
                    <div className="ms-aside-header">
                        <ul className="nav nav-tabs tabs-bordered d-flex nav-justified mb-3" role="tablist">
                            <li role="presentation" className="fs-12"><Link to="#activityLog" aria-controls="activityLog" className="active" role="tab" data-toggle="tab"> Activity Log</Link></li>
                            <li role="presentation" className="fs-12"><Link to="#recentPosts" aria-controls="recentPosts" role="tab" data-toggle="tab"> Settings </Link></li>
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

                <main className="body-content">

                    <nav className="navbar ms-navbar">
                        <div className="ms-aside-toggler ms-toggler pl-0" data-target="#ms-side-nav" data-toggle="slideLeft">
                            <span className="ms-toggler-bar bg-white"></span>
                            <span className="ms-toggler-bar bg-white"></span>
                            <span className="ms-toggler-bar bg-white"></span>
                        </div>
                        <div className="logo-sn logo-sm ms-d-block-sm">
                            <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="../../index.html"><img src={"../images/medjestic-logo-84x41.png"} alt="logo" /> </Link>
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
                            <li className="ms-nav-item  ms-d-none">
              <Link to="/about" className="text-white" data-toggle="modal"><i className="flaticon-spreadsheet mr-2"></i>About</Link>
            </li>
            <li className="ms-nav-item  ms-d-none">
              <Link to="/contact" className="text-white" data-toggle="modal"><i className="flaticon-phone mr-2"></i>Contact</Link>
            </li>
                            <li className="ms-nav-item dropdown">
                                <Link to="#" className="text-disabled ms-has-notification" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="flaticon-bell"></i></Link>
                                <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="notificationDropdown">
                                    <li className="dropdown-menu-header">
                                        <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Notifications</span></h6>
                                        <span className="badge badge-pill badge-info">4 New</span>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                    <li className="ms-scrollable ms-dropdown-list">
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
                                    </li>
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
                                        <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Welcome, Dr Samuel Deo</span></h6>
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
                            <div className="col-md-12">
                                <nav aria-label="breadcrumb" className="ms-panel-custome">
                                    <ol className="breadcrumb pl-0">
                                        <li className="breadcrumb-item"><Link to="#"><i className="material-icons">home</i> Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Doctor</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Doctor-List</li>
                                    </ol>

                                </nav>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="ms-card">
                                    <div className="ms-card-body">
                                        <div className="media fs-14">
                                            <div className="mr-2 align-self-center">
                                                <img src={"../images/doctor-1.jpg"} className="ms-img-round" alt="people" />
                                            </div>
                                            <div className="media-body">
                                                <h6>Michael Sullivan </h6>
                                                <div className="dropdown float-right">
                                                    <Link to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="material-icons">more_vert</i>
                                                    </Link>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li className="ms-dropdown-list">
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>View Details</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Assign</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Edit</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Delete</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p className="fs-12 my-1 text-disabled">Ophthalmologist</p>
                                                <h6 className="mt-2">
                                                    <span className="fs-14">
                                                        <i className="fas fa-map-marker-alt"></i>
                                                    </span>
                                                    United States, San Francisco</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="ms-card">
                                    <div className="ms-card-body">
                                        <div className="media fs-14">
                                            <div className="mr-2 align-self-center">
                                                <img src={"../images/doctor-2.jpg"} className="ms-img-round" alt="people" />
                                            </div>
                                            <div className="media-body">
                                                <h6>Linda Barrett</h6>
                                                <div className="dropdown float-right">
                                                    <Link to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="material-icons">more_vert</i>
                                                    </Link>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li className="ms-dropdown-list">
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>View Details</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Assign</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Edit</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Delete</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p className="fs-12 my-1 text-disabled">Dentist</p>
                                                <h6 className="mt-2">
                                                    <span className="fs-14">
                                                        <i className="fas fa-map-marker-alt"></i>
                                                    </span>
                                                    United States, San Francisco</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="ms-card">
                                    <div className="ms-card-body">
                                        <div className="media fs-14">
                                            <div className="mr-2 align-self-center">
                                                <img src={"../images/doctor-3.jpg"} className="ms-img-round" alt="people" />
                                            </div>
                                            <div className="media-body">
                                                <h6>Ronald Jacobs</h6>
                                                <div className="dropdown float-right">
                                                    <Link to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="material-icons">more_vert</i>
                                                    </Link>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li className="ms-dropdown-list">
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>View Details</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Assign</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Edit</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Delete</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p className="fs-12 my-1 text-disabled">Oncologist</p>
                                                <h6 className="mt-2">
                                                    <span className="fs-14">
                                                        <i className="fas fa-map-marker-alt"></i>
                                                    </span> United States, San Francisco</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="ms-card">
                                    <div className="ms-card-body">
                                        <div className="media fs-14">
                                            <div className="mr-2 align-self-center">
                                                <img src={"../images/doctor-4.jpg"} className="ms-img-round" alt="people" />
                                            </div>
                                            <div className="media-body">
                                                <h6>Mark Hunter </h6>
                                                <div className="dropdown float-right">
                                                    <Link to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="material-icons">more_vert</i>
                                                    </Link>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li className="ms-dropdown-list">
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>View Details</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Assign</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Edit</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Delete</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p className="fs-12 my-1 text-disabled">Cardiologist</p>
                                                <h6 className="mt-2">
                                                    <span className="fs-14">
                                                        <i className="fas fa-map-marker-alt"></i>
                                                    </span> United States, New York</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="ms-card">
                                    <div className="ms-card-body">
                                        <div className="media fs-14">
                                            <div className="mr-2 align-self-center">
                                                <img src={"../images/doctor-5.jpg"} className="ms-img-round" alt="people" />
                                            </div>
                                            <div className="media-body">
                                                <h6>Cristina Groves</h6>
                                                <div className="dropdown float-right">
                                                    <Link to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="material-icons">more_vert</i>
                                                    </Link>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li className="ms-dropdown-list">
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>View Details</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Assign</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Edit</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Delete</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p className="fs-12 my-1 text-disabled">Psychiatrist</p>
                                                <h6 className="mt-2">
                                                    <span className="fs-14">
                                                        <i className="fas fa-map-marker-alt"></i>
                                                    </span> United States, California</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="ms-card">
                                    <div className="ms-card-body">
                                        <div className="media fs-14">
                                            <div className="mr-2 align-self-center">
                                                <img src={"../images/doctor-1.jpg"} className="ms-img-round" alt="people" />
                                            </div>
                                            <div className="media-body">
                                                <h6>Justin Parker</h6>
                                                <div className="dropdown float-right">
                                                    <Link to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="material-icons">more_vert</i>
                                                    </Link>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li className="ms-dropdown-list">
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>View Details</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Assign</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Edit</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Delete</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p className="fs-12 my-1 text-disabled">Pediatrics</p>
                                                <h6 className="mt-2">
                                                    <span className="fs-14">
                                                        <i className="fas fa-map-marker-alt"></i>
                                                    </span> United States, New York</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="ms-card">
                                    <div className="ms-card-body">
                                        <div className="media fs-14">
                                            <div className="mr-2 align-self-center">
                                                <img src={"../images/doctor-2.jpg"} className="ms-img-round" alt="people" />
                                            </div>
                                            <div className="media-body">
                                                <h6>Shirley Willis </h6>
                                                <div className="dropdown float-right">
                                                    <Link to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="material-icons">more_vert</i>
                                                    </Link>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li className="ms-dropdown-list">
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>View Details</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Assign</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Edit</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Delete</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p className="fs-12 my-1 text-disabled">Radiologist</p>
                                                <h6 className="mt-2">
                                                    <span className="fs-14">
                                                        <i className="fas fa-map-marker-alt"></i>
                                                    </span> United States, San Francisco</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="ms-card">
                                    <div className="ms-card-body">
                                        <div className="media fs-14">
                                            <div className="mr-2 align-self-center">
                                                <img src={"../images/doctor-3.jpg"} className="ms-img-round" alt="people" />
                                            </div>
                                            <div className="media-body">
                                                <h6>Diana Bailey</h6>
                                                <div className="dropdown float-right">
                                                    <Link to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="material-icons">more_vert</i>
                                                    </Link>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li className="ms-dropdown-list">
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>View Details</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Assign</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Edit</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Delete</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p className="fs-12 my-1 text-disabled">General Surgery</p>
                                                <h6 className="mt-2">
                                                    <span className="fs-14">
                                                        <i className="fas fa-map-marker-alt"></i>
                                                    </span> United States, California</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="ms-card">
                                    <div className="ms-card-body">
                                        <div className="media fs-14">
                                            <div className="mr-2 align-self-center">
                                                <img src={"../images/doctor-4.jpg"} className="ms-img-round" alt="people" />
                                            </div>
                                            <div className="media-body">
                                                <h6>Albert Sandoval</h6>
                                                <div className="dropdown float-right">
                                                    <Link to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="material-icons">more_vert</i>
                                                    </Link>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li className="ms-dropdown-list">
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>View Details</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Assign</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Edit</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="#">
                                                                <div className="media-body">
                                                                    <span>Delete</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p className="fs-12 my-1 text-disabled">Neurologist</p>
                                                <h6 className="mt-2">
                                                    <span className="fs-14">
                                                        <i className="fas fa-map-marker-alt"></i>
                                                    </span> United States, San Francisco</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-7 col-md-12">
                                <div className="ms-panel ms-widget ">
                                    <div className="ms-panel-body py-3 px-0">
                                        <div className="ms-chat-container">
                                            <div className="ms-chat-header px-3">
                                                <div className="ms-chat-user-container media clearfix">
                                                    <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                                        <img src={"../images/doctor-1.jpg"} className="ms-img-round" alt="people" />
                                                    </div>
                                                    <div className="media-body ms-chat-user-info mt-1">
                                                        <h6>Anny Farisha</h6>
                                                        <Link to="#" className="text-disabled has-chevron fs-12" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            Available
                                                        </Link>
                                                        <ul className="dropdown-menu">
                                                            <li className="ms-dropdown-list">
                                                                <Link className="media p-2" to="#">
                                                                    <div className="media-body">
                                                                        <span>Busy</span>
                                                                    </div>
                                                                </Link>
                                                                <Link className="media p-2" to="#">
                                                                    <div className="media-body">
                                                                        <span>Away</span>
                                                                    </div>
                                                                </Link>
                                                                <Link className="media p-2" to="#">
                                                                    <div className="media-body">
                                                                        <span>Offline</span>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <form className="ms-form my-3" method="post">
                                                    <div className="ms-form-group my-0 mb-0 has-icon fs-14">
                                                        <input type="search" className="ms-form-input w-100" name="search" placeholder="Search for People and Groups" value="" />
                                                        <i className="flaticon-search text-disabled"></i>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="ms-chat-body">
                                                <ul className="nav nav-tabs tabs-bordered d-flex nav-justified px-3" role="tablist">
                                                    <li role="presentation" className="fs-12"><Link to="#chats-2" className="active show" role="tab" data-toggle="tab"> Chats </Link></li>
                                                    <li role="presentation" className="fs-12"><Link to="#groups-2" role="tab" data-toggle="tab"> Groups </Link></li>
                                                    <li role="presentation" className="fs-12"><Link to="#contacts-2" role="tab" data-toggle="tab"> Contacts </Link></li>
                                                </ul>
                                                <div className="tab-content">
                                                    <div role="tabpanel" className="tab-pane active show fade in" id="chats-2">
                                                        <ul className="ms-scrollable">
                                                            <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                                                                <div className="ms-chat-status ms-status-away ms-has-new-msg ms-chat-img mr-3 align-self-center">
                                                                    <span className="msg-count">3</span>
                                                                    <img src={"../images/doctor-2.jpg"} className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6>
                                                                    <span className="ms-chat-time">2 Hours ago</span>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                    <Link to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="material-icons">more_vert</i>
                                                                    </Link>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li className="ms-dropdown-list">
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Archive</span>
                                                                                </div>
                                                                            </Link>
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Pin</span>
                                                                                </div>
                                                                            </Link>
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Delete</span>
                                                                                </div>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                                                                <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                                                    <img src={"../images/doctor-3.jpg"} className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6>
                                                                    <span className="ms-chat-time">3 Days ago</span>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                    <Link to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="material-icons">more_vert</i>
                                                                    </Link>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li className="ms-dropdown-list">
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Archive</span>
                                                                                </div>
                                                                            </Link>
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Pin</span>
                                                                                </div>
                                                                            </Link>
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Delete</span>
                                                                                </div>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                                                                <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                                                    <img src={"../images/doctor-4.jpg"} className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6>
                                                                    <span className="ms-chat-time">3 Days ago</span>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                    <Link to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="material-icons">more_vert</i>
                                                                    </Link>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li className="ms-dropdown-list">
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Archive</span>
                                                                                </div>
                                                                            </Link>
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Pin</span>
                                                                                </div>
                                                                            </Link>
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Delete</span>
                                                                                </div>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                                                                <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                                                    <img src={"../images/doctor-5.jpg"} className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6>
                                                                    <span className="ms-chat-time">3 Days ago</span>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                    <Link to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="material-icons">more_vert</i>
                                                                    </Link>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li className="ms-dropdown-list">
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Archive</span>
                                                                                </div>
                                                                            </Link>
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Pin</span>
                                                                                </div>
                                                                            </Link>
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Delete</span>
                                                                                </div>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div role="tabpanel" className="tab-pane fade" id="groups-2">
                                                        <ul className="ms-scrollable">
                                                            <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                                <div className="ms-chat-img mr-3 align-self-center">
                                                                    <img src={"../images/doctor-1.jpg"} className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6>
                                                                    <Link to="#" className="ms-chat-time"> <i className="flaticon-chat"></i> </Link>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                    <ul className="ms-group-members clearfix mt-3 mb-0">
                                                                        <li> <img src={"../images/doctor-1.jpg"} alt="member" /> </li>
                                                                        <li> <img src={"../images/doctor-1.jpg"} alt="member" /> </li>
                                                                        <li> <img src={"../images/doctor-1.jpg"} alt="member" /> </li>
                                                                        <li className="ms-group-count"> + 12 more </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                                <div className="ms-chat-img mr-3 align-self-center">
                                                                    <img src={"../images/doctor-1.jpg"} className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6>
                                                                    <Link to="#" className="ms-chat-time"> <i className="flaticon-chat"></i> </Link>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                    <ul className="ms-group-members clearfix mt-3 mb-0">
                                                                        <li> <img src={"../images/doctor-1.jpg"} alt="member" /> </li>
                                                                        <li> <img src={"../images/doctor-1.jpg"} alt="member" /> </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                                <div className="ms-chat-img mr-3 align-self-center">
                                                                    <img src={"../images/doctor-1.jpg"} className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6>
                                                                    <Link to="#" className="ms-chat-time"> <i className="flaticon-chat"></i> </Link>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                    <ul className="ms-group-members clearfix mt-3 mb-0">
                                                                        <li> <img src={"../images/doctor-1.jpg"} alt="member" /> </li>
                                                                        <li> <img src={"../images/doctor-1.jpg"} alt="member" /> </li>
                                                                        <li> <img src={"../images/doctor-1.jpg"} alt="member" /> </li>
                                                                        <li className="ms-group-count"> + 4 more </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div role="tabpanel" className="tab-pane fade" id="contacts-2">
                                                        <ul className="ms-scrollable">
                                                            <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                                <div className="ms-chat-img mr-3 align-self-center">
                                                                    <img src={"../images/doctor-1.jpg"} className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6>
                                                                    <Link to="#" className="ms-chat-time"> <i className="flaticon-chat"></i> </Link>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                </div>
                                                            </li>
                                                            <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                                <div className="ms-chat-img mr-3 align-self-center">
                                                                    <img src={"../images/doctor-1.jpg"} className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6>
                                                                    <Link to="#" className="ms-chat-time"> <i className="flaticon-chat"></i> </Link>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                </div>
                                                            </li>
                                                            <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                                <div className="ms-chat-img mr-3 align-self-center">
                                                                    <img src={"../images/doctor-1.jpg"} className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6>
                                                                    <Link to="#" className="ms-chat-time"> <i className="flaticon-chat"></i> </Link>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                </div>
                                                            </li>
                                                            <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                                <div className="ms-chat-img mr-3 align-self-center">
                                                                    <img src={"../images/doctor-1.jpg"} className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6>
                                                                    <Link to="#" className="ms-chat-time"> <i className="flaticon-chat"></i> </Link>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>




                <div className="modal fade" id="reminder-modal" tabIndex="-1" role="dialog" aria-labelledby="reminder-modal">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header bg-secondary">
                                <h5 className="modal-title has-icon text-white"> New Reminder</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            </div>
                            <form>
                                <div className="modal-body">
                                    <div className="ms-form-group">
                                        <label>Remind me about</label>
                                        <textarea className="form-control" name="reminder"></textarea>
                                    </div>
                                    <div className="ms-form-group">
                                        <span className="ms-option-name fs-14">Repeat Daily</span>
                                        <label className="ms-switch float-right">
                                            <input type="checkbox" />
                                            <span className="ms-switch-slider round"></span>
                                        </label>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="ms-form-group">
                                                <input type="text" className="form-control datepicker" name="reminder-date" value="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="ms-form-group">
                                                <select className="form-control" name="reminder-time">
                                                    <option value="">12:00 pm</option>
                                                    <option value="">1:00 pm</option>
                                                    <option value="">2:00 pm</option>
                                                    <option value="">3:00 pm</option>
                                                    <option value="">4:00 pm</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-secondary shadow-none" data-dismiss="modal">Add Reminder</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="notes-modal" tabIndex="-1" role="dialog" aria-labelledby="notes-modal">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header bg-secondary">
                                <h5 className="modal-title has-icon text-white" id="NoteModal">New Note</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            </div>
                            <form>
                                <div className="modal-body">
                                    <div className="ms-form-group">
                                        <label>Note Title</label>
                                        <input type="text" className="form-control" name="note-title" value="" />
                                    </div>
                                    <div className="ms-form-group">
                                        <label>Note Description</label>
                                        <textarea className="form-control" name="note-description"></textarea>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-secondary shadow-none" data-dismiss="modal">Add Note</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="mymodal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog ms-modal-dialog-width">
                        <div className="modal-content ms-modal-content-width">
                            <div className="modal-header  ms-modal-header-radius-0">
                                <h4 className="modal-title text-white">Make An Appointment</h4>
                                <button type="button" className="close text-white" data-dismiss="modal" aria-hidden="true">x</button>

                            </div>
                            <div className="modal-body p-0 text-left">
                                <div className="col-xl-12 col-md-12">
                                    <div className="ms-panel ms-panel-bshadow-none">
                                        <div className="ms-panel-header">
                                            <h6>Patient Information</h6>
                                        </div>
                                        <div className="ms-panel-body">
                                            <form className="needs-validation" novalidate>
                                                <div className="form-row">
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom01">Patient Name</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Name" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom02">Date Of Birth</label>
                                                        <div className="input-group">
                                                            <input type="number" className="form-control" id="validationCustom02" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom03">Disease</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom03" placeholder="Disease" required />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-md-4 mb-2">
                                                        <label htmlFor="validationCustom04">Address</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom04" placeholder="Add Address" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom05">Phone no.</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom05" placeholder="Enter Phone No." required />

                                                        </div>

                                                    </div>

                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom06">Department Name</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom06" placeholder="Enter Department Name" required />

                                                        </div>
                                                    </div>
                                                </div>



                                                <div className="form-row">
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom07">Appointment With</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom07" placeholder="Enter Doctor Name" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom08">Appointment Date</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom08" placeholder="Enter Appointment Date" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label>Sex</label>
                                                        <ul className="ms-list d-flex">
                                                            <li className="ms-list-item pl-0">
                                                                <label className="ms-checkbox-wrap">
                                                                    <input type="radio" name="radioExample" value="" />
                                                                    <i className="ms-checkbox-check"></i>
                                                                </label>
                                                                <span> Male </span>
                                                            </li>
                                                            <li className="ms-list-item">
                                                                <label className="ms-checkbox-wrap">
                                                                    <input type="radio" name="radioExample" value="" checked="" />
                                                                    <i className="ms-checkbox-check"></i>
                                                                </label>
                                                                <span> Female </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <button className="btn btn-warning mt-4 d-inline w-20" type="submit">Reset</button>
                                                <button className="btn btn-primary mt-4 d-inline w-20" type="submit">Add Appointment</button>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="modal fade" id="prescription" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog ms-modal-dialog-width">
                        <div className="modal-content ms-modal-content-width">
                            <div className="modal-header  ms-modal-header-radius-0">
                                <h4 className="modal-title text-white">Make a prescription</h4>
                                <button type="button" className="close  text-white" data-dismiss="modal" aria-hidden="true">x</button>

                            </div>
                            <div className="modal-body p-0 text-left">
                                <div className="col-xl-12 col-md-12">
                                    <div className="ms-panel ms-panel-bshadow-none">
                                        <div className="ms-panel-header">
                                            <h6>Patient Information</h6>
                                        </div>
                                        <div className="ms-panel-body">
                                            <form className="needs-validation" novalidate>
                                                <div className="form-row">
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom09">Patient Name</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom09" placeholder="Enter Name" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom10">Date Of Birth</label>
                                                        <div className="input-group">
                                                            <input type="number" className="form-control" id="validationCustom10" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-2">
                                                        <label htmlFor="validationCustom11">Address</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom11" placeholder="Add Address" required />

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="form-row">
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom12">Phone no.</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom12" placeholder="Enter Phone No." required />

                                                        </div>

                                                    </div>

                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom13">Medication</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom13" placeholder="Acetaminophen" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom14">Period Of medication</label>
                                                        <div className="input-group">
                                                            <input type="number" className="form-control" id="validationCustom14" placeholder="" required />

                                                        </div>
                                                    </div>
                                                </div>



                                                <div className="form-row">

                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom15">Appointment With</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom15" placeholder="Enter Doctor Name" required />

                                                        </div>
                                                    </div>

                                                </div>
                                                <button className="btn btn-warning mt-4 d-inline w-20" type="submit">Save Prescription</button>
                                                <button className="btn btn-primary mt-4 d-inline w-20" type="submit">Save & Print</button>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="modal fade" id="report1" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog ms-modal-dialog-width">
                        <div className="modal-content ms-modal-content-width">
                            <div className="modal-header  ms-modal-header-radius-0">
                                <h4 className="modal-title text-white">Generate report</h4>
                                <button type="button" className="close  text-white" data-dismiss="modal" aria-hidden="true">x</button>

                            </div>
                            <div className="modal-body p-0 text-left">
                                <div className="col-xl-12 col-md-12">
                                    <div className="ms-panel ms-panel-bshadow-none">
                                        <div className="ms-panel-header">
                                            <h6>Patient Information</h6>
                                        </div>
                                        <div className="ms-panel-body">
                                            <form className="needs-validation" novalidate>
                                                <div className="form-row">
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom16">Patient Name</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom16" placeholder="Enter Name" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom17">Date Of Birth</label>
                                                        <div className="input-group">
                                                            <input type="number" className="form-control" id="validationCustom17" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-2">
                                                        <label htmlFor="validationCustom22">Address</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom22" placeholder="Add Address" required />

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="form-row">
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom18">Phone no.</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom18" placeholder="Enter Phone No." required />

                                                        </div>

                                                    </div>

                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom19">Report Type</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom19" placeholder="Diseases Report" required />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom23">Report Period</label>
                                                        <div className="input-group">
                                                            <input type="number" className="form-control" id="validationCustom23" placeholder="" required/>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-row">

                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="validationCustom20">Appointment With</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="validationCustom20" placeholder="Enter Doctor Name" required />

                                                        </div>
                                                    </div>

                                                </div>
                                                <button className="btn btn-warning mt-4 d-inline w-20" type="submit">Generate Report</button>
                                                <button className="btn btn-primary mt-4 d-inline w-20" type="submit">Generate & Print</button>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </body>

        </>
    )
}

export default doctorlist