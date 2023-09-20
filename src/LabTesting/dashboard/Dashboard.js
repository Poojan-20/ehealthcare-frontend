import React from 'react'
import { useAuth } from "../../context/AuthContext";
import { Link } from 'react-router-dom';
import Form from "./Form";
import LabDash from '../LabDash';
const Dashboard = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
        <LabDash />
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
              <li className="ms-nav-item ms-d-none">
                <Link to="/shopping" className="text-white" data-toggle="modal"><i className="flaticon-pencil mr-2"></i>Shop</Link>
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

export default Dashboard