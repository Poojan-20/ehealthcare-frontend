import React from 'react'
import { Link } from 'react-router-dom'; 
const Login = () => {
  return (
    <>
    <body className="ms-body ms-primary-theme ms-logged-out">
      
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
             <Link className="pl-0 ml-0 text-center" to="../../index.html"> <img src={"../images/medjestic-logo-216x62.png"} alt="logo"/> </Link>
             <Link to="#" className="text-center ms-logo-img-link"> <img src={"../images/dashboard/doctor-3.jpg"} alt="logo"/></Link>
            <h5 className="text-center text-white mt-2">Dr.Samuel</h5>
            <h6 className="text-center text-white mb-3">Admin</h6>
         </div>
         
         <ul className="accordion ms-main-aside fs-14" id="side-nav-accordion">
            
            <li className="menu-item">
                <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#dashboard" aria-expanded="false" aria-controls="dashboard">
               <span><i className="material-icons fs-16">dashboard</i>Dashboard </span>
               </Link>
               <ul id="dashboard" className="collapse" aria-labelledby="dashboard" data-parent="#side-nav-accordion">
                  <li>  <Link to="../../index.html">Medjestic</Link> </li>
               </ul>
            </li>
           
            <li className="menu-item">
                <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#doctor" aria-expanded="false" aria-controls="doctor">
               <span><i className="fas fa-stethoscope"></i>Doctor</span>
               </Link>
               <ul id="doctor" className="collapse" aria-labelledby="doctor" data-parent="#side-nav-accordion">
                  <li>  <Link to="../doctor/add-doctor.html">Add Doctor</Link> </li>
                  <li>  <Link to="../doctor/doctor-list.html">Doctor List</Link> </li>
               </ul>
            </li>
            
            <li className="menu-item">
                <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#patient" aria-expanded="false" aria-controls="patient">
               <span><i className="fas fa-user"></i>Patient</span>
               </Link>
               <ul id="patient" className="collapse" aria-labelledby="patient" data-parent="#side-nav-accordion">
                  <li>  <Link to="../patient/add-patient.html">Add Patient</Link> </li>
                  <li>  <Link to="../patient/patient-list.html">Patient List</Link> </li>
               </ul>
            </li>
            
            <li className="menu-item">
                <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#department" aria-expanded="false" aria-controls="department">
               <span><i className="fas fa-sitemap"></i>Department</span>
               </Link>
               <ul id="department" className="collapse" aria-labelledby="department" data-parent="#side-nav-accordion">
                  <li>  <Link to="../department/add-department.html">Add Department</Link> </li>
                  <li>  <Link to="../department/department-list.html">Department List</Link> </li>
               </ul>
            </li>
           
            <li className="menu-item">
                <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#schedule" aria-expanded="false" aria-controls="schedule">
               <span><i className="fas fa-list-alt"></i>Doctor Schedule</span>
               </Link>
               <ul id="schedule" className="collapse" aria-labelledby="schedule" data-parent="#side-nav-accordion">
                  <li>  <Link to="../doctor-schedule/add-schedule.html">Add Schedule</Link> </li>
                  <li>  <Link to="../doctor-schedule/schedule-list.html">Schedule List</Link> </li>
               </ul>
            </li>
            
            <li className="menu-item">
                <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#appointment" aria-expanded="false" aria-controls="appointment">
               <span><i className="far fa-check-square"></i>Appointment</span>
               </Link>
               <ul id="appointment" className="collapse" aria-labelledby="appointment" data-parent="#side-nav-accordion">
                  <li>  <Link to="../appointment/add-appointment.html">Add Appointment</Link> </li>
                  <li>  <Link to="../appointment/appointment-list.html">Appointment List</Link> </li>
               </ul>
            </li>
           
            <li className="menu-item">
                <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#payment" aria-expanded="false" aria-controls="payment">
               <span><i className="fas fa-credit-card"></i>Payment</span>
               </Link>
               <ul id="payment" className="collapse" aria-labelledby="payment" data-parent="#side-nav-accordion">
                  <li>  <Link to="../payment/add-payment.html">Add Payment</Link> </li>
                  <li>  <Link to="../payment/payment-list.html">Payment List</Link> </li>
                  <li>  <Link to="../payment/payment-invoice.html">Payment Invoice</Link> </li>
               </ul>
            </li>
            
            <li className="menu-item">
                <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#report" aria-expanded="false" aria-controls="report">
               <span><i className="fas fa-file-alt"></i>Report</span>
               </Link>
               <ul id="report" className="collapse" aria-labelledby="report" data-parent="#side-nav-accordion">
                  <li>  <Link to="../report/patient-report.html">Patient Wise Report</Link> </li>
                  <li>  <Link to="../report/doctor-report.html">Doctor Wise Report</Link> </li>
                  <li>  <Link to="../report/total-report.html">Total Report</Link> </li>
               </ul>
            </li>
            
            <li className="menu-item">
                <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#human-resource" aria-expanded="false" aria-controls="human-resource">
               <span><i className="far fa-user-circle"></i>Human Resource</span>
               </Link>
               <ul id="human-resource" className="collapse" aria-labelledby="human-resource" data-parent="#side-nav-accordion">
                  <li>  <Link to="../human-resource/add-employee.html">Add Employee</Link> </li>
                  <li>  <Link to="../human-resource/employee-list.html">Employee List</Link> </li>
                  <li>  <Link to="../human-resource/add-nurse.html">Add Nurse</Link> </li>
                  <li>  <Link to="../human-resource/nurse-list.html">Nurse List</Link> </li>
                  <li>  <Link to="../human-resource/add-pharmacist.html">Add Pharmacist</Link> </li>
                  <li>  <Link to="../human-resource/pharmacist-list.html">Pharmacist List</Link> </li>
                  <li>  <Link to="../human-resource/add-representative.html">Add Representative</Link> </li>
                  <li>  <Link to="../human-resource/representative-list.html">Representative List</Link> </li>
               </ul>
            </li>
            
            <li className="menu-item">
                <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#bed" aria-expanded="false" aria-controls="bed">
               <span><i className="fas fa-bed"></i>Bed Manager</span>
               </Link>
               <ul id="bed" className="collapse" aria-labelledby="bed" data-parent="#side-nav-accordion">
                  <li>  <Link to="../bed-manager/add-bed.html">Add Bed</Link> </li>
                  <li>  <Link to="../bed-manager/bed-list.html">Bed List</Link> </li>
               </ul>
            </li>
            
            <li className="menu-item">
                <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#notice" aria-expanded="false" aria-controls="notice">
               <span><i className="far fa-file-alt"></i>Notice</span>
               </Link>
               <ul id="notice" className="collapse" aria-labelledby="notice" data-parent="#side-nav-accordion">
                  <li>  <Link to="../notice/add-notice.html">Add Notice</Link> </li>
                  <li>  <Link to="../notice/notice-list.html">Notice List</Link> </li>
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
                  <li>  <Link to="../ui-basic/accordions.html">Accordions</Link> </li>
                  <li>  <Link to="../ui-basic/alerts.html">Alerts</Link> </li>
                  <li>  <Link to="../ui-basic/buttons.html">Buttons</Link> </li>
                  <li>  <Link to="../ui-basic/breadcrumbs.html">Breadcrumbs</Link> </li>
                  <li>  <Link to="../ui-basic/badges.html">Badges</Link> </li>
                  <li>  <Link to="../ui-basic/cards.html">Cards</Link> </li>
                  <li>  <Link to="../ui-basic/progress-bars.html">Progress Bars</Link> </li>
                  <li>  <Link to="../ui-basic/preloaders.html">Pre-loaders</Link> </li>
                  <li>  <Link to="../ui-basic/pagination.html">Pagination</Link> </li>
                  <li>  <Link to="../ui-basic/tabs.html">Tabs</Link> </li>
                  <li>  <Link to="../ui-basic/typography.html">Typography</Link> </li>
               </ul>
            </li>

            <li className="menu-item">
                <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#advanced-elements" aria-expanded="false" aria-controls="advanced-elements">
               <span><i className="material-icons fs-16">code</i>Advanced UI Elements</span>
               </Link>
               <ul id="advanced-elements" className="collapse" aria-labelledby="advanced-elements" data-parent="#side-nav-accordion">
                  <li>  <Link to="../ui-advanced/draggables.html">Draggables</Link> </li>
                  <li>  <Link to="../ui-advanced/sliders.html">Sliders</Link> </li>
                  <li>  <Link to="../ui-advanced/modals.html">Modals</Link> </li>
                  <li>  <Link to="../ui-advanced/rating.html">Rating</Link> </li>
                  <li>  <Link to="../ui-advanced/tour.html">Tour</Link> </li>
                  <li>  <Link to="../ui-advanced/cropper.html">Cropper</Link> </li>
                  <li>  <Link to="../ui-advanced/range-slider.html">Range Slider</Link> </li>
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
                  <li>  <Link to="../form/form-elements.html">Form Elements</Link> </li>
                  <li>  <Link to="../form/form-layout.html">Form Layouts</Link> </li>
                  <li>  <Link to="../form/form-validation.html">Form Validation</Link> </li>
                  <li>  <Link to="../form/form-wizard.html">Form Wizard</Link> </li>
               </ul>
            </li>
            
            <li className="menu-item">
                <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#charts" aria-expanded="false" aria-controls="charts">
               <span><i className="material-icons fs-16">equalizer</i>Charts</span>
               </Link>
               <ul id="charts" className="collapse" aria-labelledby="charts" data-parent="#side-nav-accordion">
                  <li>  <Link to="../charts/chartjs.html">Chart JS</Link> </li>
                  <li>  <Link to="../charts/morris-charts.html">Morris Chart</Link> </li>
               </ul>
            </li>

            <li className="menu-item">
                <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#tables" aria-expanded="false" aria-controls="tables">
               <span><i className="material-icons fs-16">tune</i>Tables</span>
               </Link>
               <ul id="tables" className="collapse" aria-labelledby="tables" data-parent="#side-nav-accordion">
                  <li>  <Link to="../tables/basic-tables.html">Basic Tables</Link> </li>
                  <li>  <Link to="../tables/data-tables.html">Data tables</Link> </li>
               </ul>
            </li>
             
            
            <li className="menu-item">
                <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#popups" aria-expanded="false" aria-controls="popups">
               <span><i className="material-icons fs-16">message</i>Popups</span>
               </Link>
               <ul id="popups" className="collapse" aria-labelledby="popups" data-parent="#side-nav-accordion">
                  <li>  <Link to="../popups/sweet-alerts.html">Sweet Alerts</Link> </li>
                  <li>  <Link to="../popups/toast.html">Toast</Link> </li>
               </ul>
            </li>
        
            <li className="menu-item">
                <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#icons" aria-expanded="false" aria-controls="icons">
               <span><i className="material-icons fs-16">border_color</i>Icons</span>
               </Link>
               <ul id="icons" className="collapse" aria-labelledby="icons" data-parent="#side-nav-accordion">
                  <li>  <Link to="../icons/fontawesome.html">Fontawesome</Link> </li>
                  <li>  <Link to="../icons/flaticons.html">Flaticons</Link> </li>
                  <li>  <Link to="../icons/materialize.html">Materialize</Link> </li>
               </ul>
            </li>
        
            <li className="menu-item">
                <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#maps" aria-expanded="false" aria-controls="maps">
               <span><i className="material-icons fs-16">map</i>Maps</span>
               </Link>
               <ul id="maps" className="collapse" aria-labelledby="maps" data-parent="#side-nav-accordion">
                  <li>  <Link to="../maps/google-maps.html">Google Maps</Link> </li>
                  <li>  <Link to="../maps/vector-maps.html">Vector Maps</Link> </li>
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
                        <li>  <Link to="../prebuilt-pages/default-login.html">Default Login</Link> </li>
                        <li>  <Link to="../prebuilt-pages/modal-login.html">Modal Login</Link> </li>
                        <li>  <Link to="../prebuilt-pages/default-register.html">Default Registration</Link> </li>
                        <li>  <Link to="../prebuilt-pages/modal-register.html">Modal Registration</Link> </li>
                        <li>  <Link to="../prebuilt-pages/lock-screen.html">Lock Screen</Link> </li>
                     </ul>
                  </li>
                  <li>  <Link to="../prebuilt-pages/coming-soon.html">Coming Soon</Link> </li>
                  <li>  <Link to="../prebuilt-pages/error.html">Error Page</Link> </li>
                  <li className="menu-item">  <Link to="../prebuilt-pages/faq.html"> FAQ </Link> </li>
                  <li className="menu-item">  <Link to="../prebuilt-pages/portfolio.html"> Portfolio </Link> </li>
                  <li className="menu-item">  <Link to="../prebuilt-pages/user-profile.html"> User Profile </Link> </li>
                  <li className="menu-item">  <Link to="../prebuilt-pages/invoice.html"> Invoice </Link> </li>
               </ul>
            </li>
        
        
        
            <li className="menu-item">
                <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#bonus" aria-expanded="false" >
               <span><i className="material-icons fs-16">dashboard</i>Bonus Pages </span>
               </Link>
               <ul id="bonus" className="collapse"  data-parent="#side-nav-accordion">
                  <li>  <Link to="../../pages/dashboard/web-analytics.html"> Web Analytics </Link> </li>
                  <li>  <Link to="../../pages/dashboard/social-media.html">Social Media Management</Link> </li>
                  <li>  <Link to="../../pages/dashboard/project-management.html">Department Management</Link> </li>
                  <li>  <Link to="../../pages/dashboard/client-management.html">Patient Management</Link> </li>
               </ul>
            </li>
            
            <li className="menu-item">
                <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#apps" aria-expanded="false" aria-controls="apps">
               <span><i className="material-icons fs-16">phone_iphone</i>Apps</span>
               </Link>
               <ul id="apps" className="collapse" aria-labelledby="apps" data-parent="#side-nav-accordion">
                  <li>  <Link to="../apps/chat.html">Chat</Link> </li>
                  <li>  <Link to="../apps/email.html">Email</Link> </li>
                  <li>  <Link to="../apps/to-do-list.html">To-do List</Link> </li>
               </ul>
            </li>
       
         </ul>
      </aside>
      
      <main className="body-content">
         
         <nav className="navbar ms-navbar">
            <div className="ms-aside-toggler ms-toggler pl-0" data-target="#ms-side-nav" data-toggle="slideLeft">
               <span className="ms-toggler-bar bg-white"></span>
               <span className="ms-toggler-bar bg-white"></span>
               <span className="ms-toggler-bar bg-white"></span>
            </div>
            <div className="logo-sn logo-sm ms-d-block-sm">
                <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="../../index.html"><img src={"../images/medjestic-logo-84x41.png"} alt="logo"/> </Link>
            </div>
            <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">
               <li className="ms-nav-item ms-search-form pb-0 py-0">
                  <form className="ms-form" method="post">
                     <div className="ms-form-group my-0 mb-0 has-icon fs-14">
                        <input type="search" className="ms-form-input" name="search" placeholder="Search here..." value=""/>
                        <i className="flaticon-search text-disabled"></i>
                     </div>
                  </form>
               </li>
               <li className="ms-nav-item">
                   <Link to="#" className="btn btn-primary mt-0">Login</Link>
               </li>
            </ul>
            <div className="ms-toggler ms-d-block-sm pr-0 ms-nav-toggler" data-toggle="slideDown" data-target="#ms-nav-options">
               <span className="ms-toggler-bar bg-white"></span>
               <span className="ms-toggler-bar bg-white"></span>
               <span className="ms-toggler-bar bg-white"></span>
            </div>
         </nav>
         
         <div className="ms-content-wrapper ms-auth">
            <div className="ms-auth-container">
               <div className="ms-auth-col">
                  <div className="ms-auth-bg"></div>
               </div>
               <div className="ms-auth-col">
                  <div className="ms-auth-form">
                     <form className="needs-validation" novalidate="">
                        <h1>Login to Account</h1>
                        <p>Please enter your email and password to continue</p>
                        <div className="mb-3">
                           <label htmlFor="validationCustom08">Email Address</label>
                           <div className="input-group">
                              <input type="email" className="form-control" id="validationCustom08" placeholder="Email Address" required=""/>
                              <div className="invalid-feedback">
                                 Please provide a valid email.
                              </div>
                           </div>
                        </div>
                        <div className="mb-2">
                           <label htmlFor="validationCustom09">Password</label>
                           <div className="input-group">
                              <input type="password" className="form-control" id="validationCustom09" placeholder="Password" required=""/>
                              <div className="invalid-feedback">
                                 Please provide a password.
                              </div>
                           </div>
                        </div>
                        <div className="form-group">
                           <label className="ms-checkbox-wrap">
                           <input className="form-check-input" type="checkbox" value=""/>
                           <i className="ms-checkbox-check"></i>
                           </label>
                           <span> Remember Password </span>
                           <label className="d-block mt-3"> <Link to="#" className="btn-link" data-toggle="modal" data-target="#modal-12">Forgot Password?</Link></label>
                        </div>
                        <button className="btn btn-primary mt-4 d-block w-100" type="submit">Sign In</button>
                        <span className="d-block text-center my-4">Or</span>
                        <button type="button" className="btn mt-4 d-block w-100 btn-social-login"> <img src={"../images/facebook.png"} alt="image"/> <span>Login with Facebook</span> </button>
                        <button type="button" className="btn mt-4 d-block w-100 btn-social-login"> <img src={"../images/google.png"} alt="image"/> <span>Login with Google</span> </button>
                        <p className="mb-0 mt-3 text-center">Don't have an account?  <Link className="btn-link" to="default-register.html">Create Account</Link> </p>
                     </form>
                  </div>
               </div>
            </div>
         </div>

         <div className="modal fade" id="modal-12" tabIndex="-1" role="dialog" aria-labelledby="modal-12">
            <div className="modal-dialog modal-dialog-centered modal-min" role="document">
               <div className="modal-content">
                  <div className="modal-body text-center">
                     <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                     <i className="flaticon-secure-shield d-block"></i>
                     <h1>Forgot Password?</h1>
                     <p> Enter your email to recover your password </p>
                     <form method="post">
                        <div className="ms-form-group has-icon">
                           <input type="text" placeholder="Email Address" className="form-control" name="forgot-password" value=""/>
                           <i className="material-icons">email</i>
                        </div>
                        <button type="submit" className="btn btn-primary shadow-none">Reset Password</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </main>
      </body>
    </>
  )
}

export default Login