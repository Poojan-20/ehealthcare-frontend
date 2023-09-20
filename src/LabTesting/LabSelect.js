import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { db } from "../firebase.mjs";

const LabSelect = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [type, setType] = useState("");
  const [radius, setRadius] = useState("");
  const [places, setPlaces] = useState(null);

  const {packid} =  useParams();

  const locatorButtonPressed = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
    })
  }

  const handleChange = (e) => {
    setRadius(e.target.value)
  }
  const handleChangeType = (e) => {
    setType(e.target.value)
  }
 
  const findCloseBuyButtonPressed = () => {
    console.log(type, radius, lat, lon)
    // const URL = `;

    // axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&type=${type}&radius=${radius * 1000}&key=AIzaSyAfaLPV0QmFbCVui8CKXXnFEZnOzNkZdak`)
    //   .then((response) => {
    //     setPlaces(response.data.results);
    //     console.log(response.data.error_message);
    //     console.log(places);
    //     // addLocationsToGoogleMaps();
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });

    // useEffect(() => {
    db.collection("NearbyLab").onSnapshot((snapshot) => {
      setPlaces(snapshot.docs.map((doc) => doc.data()));
    });
    // }, []);

  }
  return (
    <>

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
                    <Link to="#"><i className="fab fa-instagram"></i>
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
                        <li><Link to="/labhome">Lab Testing</Link></li>
                        <li><Link to="/shopping">Shopping</Link></li>
                        <li><Link to="/about">About</Link></li>
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
      <div style={{ display: 'flex' }}>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="ms-card">
            <div className="ms-card-body">
              <div className="media fs-14">
                <div className="col-lg-12 mb-3">
                  <label htmlFor="validationCustom08">Co-ordinates</label>
                  <div className="input-group">
                    <input type="text" className="form-control" id="location" label="Co-ordinates" name="loaction" autoComplete="locatio"
                      value={lat + "," + lon} placeholder="Co-ordinates" required="" onClick={locatorButtonPressed} />
                    {/* <i className="dot circle link icon" ></i> */}
                  </div>
                  <div className="input-group dropdown">
                    <select className="form-control" id="type"
                      name="type"
                      autoComplete="type"
                      onChange={handleChangeType} required="">
                      <option value="diagnostic">Diagnostic</option>
                      <option value="school">School</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <select className="form-control" id="radius"
                      name="radius"
                      autoComplete="radius"
                      onChange={handleChange} required="">
                      <option value="5">5 KM</option>
                      <option value="10">10 KM</option>
                      <option value="15">15 KM</option>
                      <option value="20">20 KM</option>
                    </select>
                    <div className="col-lg-12 text-center">
                      <Link to="#" onClick={findCloseBuyButtonPressed} className="btn btn-outline-secondary">Find
                        <i className="ion-arrow-forward-sharp icon-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-4 col-sm-6">
          {places && (
            places.map((place) => {
              return (
                <div className="ms-card">
                  <div className="ms-card-body">
                    <p><strong>Name:</strong> {place.Name}</p>
                    <p><strong>Address:</strong> {place.Address}</p>
                    <p><strong>Time:</strong> {place.Time}</p>
                    <p><strong>Contact:</strong> {place.Contact}</p>
                    <div className="col-lg-12 text-center">
                      <Link to={`/labpackdetails/${place.id}/${packid}`} className="btn btn-outline-secondary">Continue
                        <i className="ion-arrow-forward-sharp icon-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            }
            )
          )}
          {!places && (<p> No loaction to display.Please enter the details and click on Find </p>)}


        </div>
        <div>
        </div>
      </div>


    </>
  )
}

export default LabSelect