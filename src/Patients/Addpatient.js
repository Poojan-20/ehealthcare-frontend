import React from 'react'
import { Link } from 'react-router-dom';
import Dashboard from '../components/MainDashboard';
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
const Addpatient = () => {
   return (
      <>

         <body className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">

            <Dashboard />

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
                     <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="../../index-2.html"><img src={"../assets/img/medjestic-logo-84x41.png"} alt="logo" /> </Link>
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
                        <Link to="#" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img className="ms-user-img ms-img-round float-right" src="../../assets/img/dashboard/doctor-3.jpg" alt="people" /> </Link>
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
                     <div className="col-xl-12 col-md-12">
                        <div className="ms-panel">
                           <div className="ms-panel-header ms-panel-custome">
                              <h6>Patient Profile</h6>
                              <Link to="patient-list.html" className="ms-text-primary">Patient List
                              </Link>
                           </div>
                           <div className="ms-panel-body">
                              <form className="needs-validation" novalidate>
                                 <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                       <label htmlFor="validationCustom001">First Name</label>
                                       <div className="input-group">
                                          <input type="text" className="form-control" id="validationCustom001" placeholder="Enter First Name" required />

                                       </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                       <label htmlFor="validationCustom002">Last name</label>
                                       <div className="input-group">
                                          <input type="text" className="form-control" id="validationCustom002" placeholder="Enter Last Name" required />

                                       </div>
                                    </div>
                                 </div>
                                 <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                       <label htmlFor="validationCustom005">Email</label>
                                       <div className="input-group">
                                          <input type="email" className="form-control" id="validationCustom005" placeholder="Add Email Id" required />

                                       </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                       <label htmlFor="validationCustom003">Mobile No.</label>
                                       <div className="input-group">
                                          <input type="text" className="form-control" id="validationCustom003" placeholder="Mo" required />

                                       </div>
                                    </div>
                                 </div>
                                 <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                       <label>Marital status</label>
                                       <div className="input-group">
                                          <select className="form-control" id="validationCustom230" required>
                                             <option value="">Married</option>
                                             <option value="">Unmarried</option>
                                          </select>

                                       </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                       <label>Blood Group</label>
                                       <div className="input-group">
                                          <select className="form-control" id="validationCustom220" required>
                                             <option value="">A+</option>
                                             <option value="">A-</option>
                                             <option value="">B+</option>
                                             <option value="">B-</option>
                                             <option value="">AB+</option>
                                             <option value="">AB-</option>
                                             <option value="">O+</option>
                                             <option value="">O-</option>
                                          </select>

                                       </div>
                                    </div>
                                 </div>
                                 <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                       <label>Patient Image</label>
                                       <div className="custom-file">
                                          <input type="file" className="custom-file-input" id="validatedCustomFile" />
                                          <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>

                                       </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                       <label>Date of Birth</label>
                                       <div className="input-group">
                                          <input type="text" className="form-control" id="validationCustom190" placeholder="Date of Birth" required />

                                       </div>
                                    </div>
                                 </div>
                                 <div className="form-row">
                                    <div className="col-md-6 mb-2">
                                       <label>Add Address</label>
                                       <div className="input-group">
                                          <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>

                                       </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                       <label>Patient History</label>
                                       <div className="input-group">
                                          <textarea className="form-control" id="exampleTextarea1" rows="3"></textarea>

                                       </div>
                                    </div>
                                 </div>
                                 <div className="form-row">
                                    <div className="col-md-6 mb-2">
                                       <label>Prefer to</label>
                                       <div className="input-group">
                                          <input type="text" className="form-control" id="validationCustom200" placeholder="" required />

                                       </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
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
                                 <button className="btn btn-primary mt-4 d-inline w-20" type="submit">Create Profile</button>
                              </form>

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
                                             <input type="number" className="form-control" id="validationCustom23" placeholder="" required />

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

export default Addpatient