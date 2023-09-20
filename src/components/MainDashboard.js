import React from 'react'
import { Link , useNavigate} from 'react-router-dom';
import firebase from "../firebase.mjs";

const MainDashboard = () => {
   const navigate = useNavigate()
   const handleSignout = () => {
      firebase.auth().signOut();
      navigate("/");
   };
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
                  <input type="checkbox" id="dark-mode"/>
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
      
          
      <div className="ms-aside-overlay ms-overlay-left ms-toggler" data-target="#ms-side-nav" data-toggle="slideLeft"></div>
      <div className="ms-aside-overlay ms-overlay-right ms-toggler" data-target="#ms-recent-activity" data-toggle="slideRight"></div>
      
      <aside id="ms-side-nav" className="side-nav fixed ms-aside-scrollable ms-aside-left">
         
         <div className="logo-sn ms-d-block-lg">
            <Link className="pl-0 ml-0 text-center" to="../../index-2.html"> <img src={"../assets/img/medjestic-logo-216x62.png"} alt="logo"/> </Link> 
            <Link to="#" className="text-center ms-logo-img-link"> <img src={"../assets/img/dashboard/doctor-3.jpg"} alt="logo"/></Link> 
            <h5 className="text-center text-white mt-2">Dr.Samuel</h5>
            {/* <h6 className="text-center text-white mb-3">Admin</h6> */}
         </div>
        
         <ul className="accordion ms-main-aside fs-14" id="side-nav-accordion">
            
            <li className="menu-item">
               <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#dashboard" aria-expanded="false" aria-controls="dashboard">
               <span><i className="material-icons fs-16">dashboard</i>Dashboard </span>
               </Link> 
               <ul id="dashboard" className="collapse" aria-labelledby="dashboard" data-parent="#side-nav-accordion">
                  <li> <Link to="../../index-2.html">Medjestic</Link>  </li>
               </ul>
            </li>
            
            <li className="menu-item">
               <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#doctor" aria-expanded="false" aria-controls="doctor">
               <span><i className="fas fa-stethoscope"></i>Doctor</span>
               </Link> 
               <ul id="doctor" className="collapse" aria-labelledby="doctor" data-parent="#side-nav-accordion">
                  <li> <Link to="/">Add Doctor</Link>  </li>
                  <li> <Link to="/doctorlist">Doctor List</Link>  </li>
               </ul>
            </li>
           
            <li className="menu-item">
               <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#patient" aria-expanded="false" aria-controls="patient">
               <span><i className="fas fa-user"></i>Patient</span>
               </Link> 
               <ul id="patient" className="collapse" aria-labelledby="patient" data-parent="#side-nav-accordion">
                  <li> <Link to="/patient_profile">Add Patient</Link>  </li>
                  <li> <Link to="patient-list.html">Patient List</Link>  </li>
               </ul>
            </li>
            
            <li className="menu-item">
               <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#department" aria-expanded="false" aria-controls="department">
               <span><i className="fas fa-sitemap"></i>Department</span>
               </Link> 
               <ul id="department" className="collapse" aria-labelledby="department" data-parent="#side-nav-accordion">
                  <li> <Link to="../department/add-department.html">Add Department</Link>  </li>
                  <li> <Link to="../department/department-list.html">Department List</Link>  </li>
               </ul>
            </li>
          
            <li className="menu-item">
               <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#schedule" aria-expanded="false" aria-controls="schedule">
               <span><i className="fas fa-list-alt"></i>Doctor Schedule</span>
               </Link> 
               <ul id="schedule" className="collapse" aria-labelledby="schedule" data-parent="#side-nav-accordion">
                  <li> <Link to="../doctor-schedule/add-schedule.html">Add Schedule</Link>  </li>
                  <li> <Link to="../doctor-schedule/schedule-list.html">Schedule List</Link>  </li>
               </ul>
            </li>
            
            <li className="menu-item">
               <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#appointment" aria-expanded="false" aria-controls="appointment">
               <span><i className="far fa-check-square"></i>Appointment</span>
               </Link> 
               <ul id="appointment" className="collapse" aria-labelledby="appointment" data-parent="#side-nav-accordion">
                  <li> <Link to="../appointment/add-appointment.html">Add Appointment</Link>  </li>
                  <li> <Link to="../appointment/appointment-list.html">Appointment List</Link>  </li>
               </ul>
            </li>
   
            
            <li className="menu-item" onClick={handleSignout}>
               <Link to="#" className="has-chevron"  data-target="#report" aria-expanded="false" aria-controls="report" >
               <span onClick={handleSignout}><i className="fas fa-file-alt" ></i>LogOut</span>
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
                     <input type="checkbox"/>
                     <span className="ms-switch-slider round"></span>
                     </label>
                  </div>
                  <div className="ms-form-group">
                     <span className="ms-option-name fs-14">Allow Notifications</span>
                     <label className="ms-switch float-right">
                     <input type="checkbox"/>
                     <span className="ms-switch-slider round"></span>
                     </label>
                  </div>
                  <div className="ms-form-group">
                     <span className="ms-option-name fs-14">Allow Popups</span>
                     <label className="ms-switch float-right">
                     <input type="checkbox" checked/>
                     <span className="ms-switch-slider round"></span>
                     </label>
                  </div>
                  <h6>Log Settings</h6>
                  <div className="ms-form-group">
                     <span className="ms-option-name fs-14">Enable Logging</span>
                     <label className="ms-switch float-right">
                     <input type="checkbox" checked/>
                     <span className="ms-switch-slider round"></span>
                     </label>
                  </div>
                  <div className="ms-form-group">
                     <span className="ms-option-name fs-14">Audit Logs</span>
                     <label className="ms-switch float-right">
                     <input type="checkbox"/>
                     <span className="ms-switch-slider round"></span>
                     </label>
                  </div>
                  <div className="ms-form-group">
                     <span className="ms-option-name fs-14">Error Logs</span>
                     <label className="ms-switch float-right">
                     <input type="checkbox" checked/>
                     <span className="ms-switch-slider round"></span>
                     </label>
                  </div>
                  <h6>Advanced Settings</h6>
                  <div className="ms-form-group">
                     <span className="ms-option-name fs-14">Enable Logging</span>
                     <label className="ms-switch float-right">
                     <input type="checkbox" checked/>
                     <span className="ms-switch-slider round"></span>
                     </label>
                  </div>
                  <div className="ms-form-group">
                     <span className="ms-option-name fs-14">Audit Logs</span>
                     <label className="ms-switch float-right">
                     <input type="checkbox"/>
                     <span className="ms-switch-slider round"></span>
                     </label>
                  </div>
                  <div className="ms-form-group">
                     <span className="ms-option-name fs-14">Error Logs</span>
                     <label className="ms-switch float-right">
                     <input type="checkbox" checked/>
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

export default MainDashboard