import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import Form from "./Form";
import PatientSideDash from "../PatientSideDash"
const Patient_dashboard = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
        <PatientSideDash />
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

              <li className="ms-nav-item ms-d-none">
                <Link to="/shopping" className="text-white" data-toggle="modal"><i className="flaticon-cart-shopping mr-2"></i> Shop</Link>
              </li>
              <li className="ms-nav-item ms-d-none">
                <Link to="/labhome" className="text-white" data-toggle="modal"><i class="fas fa-regular fa-flask-vial"></i>Lab Testing</Link>
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
          <Form uid={currentUser.uid} />
        </main>
      </div>

    </>
  )
}

export default Patient_dashboard