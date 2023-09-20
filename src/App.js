import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Doctorlist from './Doctor/doctorlist'
import Login from './components/Login';
import AdminPatientList from './admin/PatientList';
import Register from './components/Register';
import Social from './components/Social';
// import Appointment from './Patients/Appointment';
import Patient_register from './Patients/Patient_register';
import Patient_login from './Patients/Patient_login';
import Doctor_login from './Doctor/Doctor_login';
import Doctor_register from './Doctor/Doctor_register';
import Doctor_profile from './Doctor/Doctor_profile';
import HomePage from './components/HomePage';
import { AuthProvider } from './context/AuthContext';
import CompleteProfile from './Doctor/dashboard/CompleteProfile';
import Dashboard from './Doctor/dashboard/Dashboard';
import Patient_dashboard from './Patients/dashboard/PatientDashboard';
import Patient_completedetails from './Patients/dashboard/CompleteProfile';
import Patient_Room from './Patients/videomeeting/room';

import Admin_login from './admin/Admin_login';
import Doctor_verify from './admin/Doctor_verify';
import AdminHome from './admin/AdminHome';
import PatientList from './Patients/PatientList';
import Create_Post from './admin/Create_Post';
import Feedback from './admin/Feedback';
import DoctorProfile from './Doctor/DoctorProfile';
import PatientProfile from './Patients/PatientProfile';
import Book_Appointment from './Patients/Book_Appointment';
import View_Doctors from './Patients/View_Doctors';
import Doctor from './Patients/Doctor';
import Appointments from './Doctor/Appointments';
import PatientScheduledMeetings from './Patients/PatientScheduledMeetings';
import Patient_Past_Appointments from './Patients/Past_Appointments';
import DoctorScheduledMeeting from './Doctor/DoctorScheduledMeeting';
import Past_Appointment from './Doctor/Past_Appointment';
import Doctor_Room from './Doctor/videomeeting/room'
import Your_Patients from './Doctor/Your_Patient';
import Patient_Doctor from './Doctor/Patient_Doctor';
import Doctor_Notifications from './Doctor/Doctor_Notification';
import Patient_Notification from './Patients/Patient_Notification';
import Latest_Updates from './admin/Latest_Updates';
import Permission from './Patients/Permission';
import About from './components/About';
import Contact from './components/Contact';
import Skin from './components/Skin';
import Bone from './components/Bone';
import General from './components/General';
import Eye from './components/Eye';
import Surgery from './components/Surgery';
import Dental from './components/Dental';
import CartHomePage from './components/CartHomePage';
import CartuserAccount from './components/CartuserAccount';
import ChangePassword from './components/ChangePassword';
import CartAddress from './components/CartAddress';
import CartOrder from './components/CartOrder';
import Wishlist from './components/Wishlist';
import OrderDetails from './components/OrderDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Thankyou from './components/Thankyou';
import UploadPrep from './components/UploadPrep';
import Category from './components/Category';
import Description from './components/Description';
import LabHome from './LabTesting/LabHome';
import Labadmin from './LabTesting/Labadmin';
import UploadEnc from './components/UploadEnc';
import ReportUpload from './Patients/ReportUpload';
import UploadProduct from './components/UploadProduct';
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserRegister';
import User_Dashboard from './components/User_Dashboard';
import LabPackages from './LabTesting/LabPackages';
import LabSelect from './LabTesting/LabSelect';
import LabTester_Register from './LabTesting/LabTester_Register';
import LabTester_login from './LabTesting/LabTester_login';
import Demo from './LabTesting/Demo';
import LabPackDetails from './LabTesting/LabPackDetails';
import LabDashboard from './LabTesting/dashboard/Dashboard';
import Lab_verify from './admin/Lab_verify';
import LabProfile from './LabTesting/LabProfile';
import LabNotifications from './LabTesting/LabNotification';
import LabTestSchedule from './Patients/LabTestSchedule';
import LabAppointment from './LabTesting/LabAppointment';
import CovidPrevention from './components/CovidPrevention';
import BabyCare from './components/BabyCare';
import PersonalCare from './components/PersonalCare';
import SportsNutrition from './components/SportsNutrition';
import GenericMedicine from './components/GenericMedicine';
import Diabetes from './components/Diabetes';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>

          {/* Admin */}
          <Routes>
            <Route path='/admin_login' element={<Admin_login />} />
          </Routes>
          <Routes>
            <Route path='/doctor_verify' element={<Doctor_verify />} />
          </Routes>
          <Routes>
            <Route path='/lab_verify' element={<Lab_verify />} />
          </Routes>
          <Routes>
            <Route path='/adminhome' element={<AdminHome />} />
          </Routes>
          <Routes>
            <Route path='/patients_list' element={<PatientList />} />
          </Routes>
          <Routes>
            <Route path='/createpost' element={<Create_Post />} />
          </Routes>
          <Routes>
            <Route path='/latest_updates' element={<Latest_Updates />} />
          </Routes>
          <Routes>
            <Route path='/feedback' element={<Feedback />} />
          </Routes>
          <Routes>
            <Route path='/admin_patientlist' element={<AdminPatientList />} />
          </Routes>

          {/* Patients */}
          <Routes >
            <Route path='/patient_register' element={<Patient_register />} />
          </Routes>
          <Routes >
            <Route path='/patient_login' element={<Patient_login />} />
          </Routes>
          <Routes>
            <Route path='/patientprofile' element={<PatientProfile />} />
          </Routes>
          <Routes >
            <Route path='/patient_dashboard' element={<Patient_dashboard />} />
          </Routes>
          <Routes >
            <Route path='/patient_profile' element={<Patient_completedetails />} />
          </Routes>
          <Routes >
            <Route path='/patient_bookappointment' element={<View_Doctors />} />
          </Routes>
          <Routes >
            <Route path='/patient_doctor_profile/:uid' element={<Doctor />} />
          </Routes>
          <Routes >
            <Route path='/patient_scheduled_meetings' element={<PatientScheduledMeetings />} />
          </Routes>
          <Routes >
            <Route path='/patient_past_appointments' element={<Patient_Past_Appointments />} />
          </Routes>
          <Routes >
            <Route path='/patient_room/:roomID' element={<Patient_Room />} />
          </Routes>
          {/* <Routes>
          <Route path="/patient_room/:roomID" render={(props) => <Room {...props} />} />
          </Routes> */}
          <Routes >
            <Route path='/patient_notifications' element={<Patient_Notification />} />
          </Routes>
          <Routes >
            <Route path='/patient_permissions' element={<Permission />} />
          </Routes>
          <Routes >
            <Route path='/labtest' element={<LabTestSchedule />} />
          </Routes>

          {/* Doctors*/}
          <Routes >
            <Route path='/doctor_profile' element={<CompleteProfile />} />
          </Routes>
          <Routes >
            <Route path='/doctorprofile' element={<DoctorProfile />} />
          </Routes>
          <Routes >
            <Route path='/doctor_dashboard' element={<Dashboard />} />
          </Routes>
          <Routes >
            <Route path='/doctor_login' element={<Doctor_login />} />
          </Routes>
          <Routes>
            <Route path='/doctor_register' element={<Doctor_register />} />
          </Routes>
          <Routes>
            <Route path='/doctor_appointment' element={<Appointments />} />
          </Routes>
          <Routes >
            <Route path='/doctor_scheduled_meetings' element={<DoctorScheduledMeeting />} />
          </Routes>
          <Routes >
            <Route path='/doctor_past_appointments' element={<Past_Appointment />} />
          </Routes>
          <Routes >
            <Route path='/doctor_room/:roomID' element={<Doctor_Room />} />
          </Routes>
          <Routes >
            <Route path='/doctor_your_patients' element={<Your_Patients />} />
          </Routes>
          <Routes >
            <Route path='/doctor_patient_profile/:uid' element={<Patient_Doctor />} />
          </Routes>
          <Routes >
            <Route path='/doctor_notifications' element={<Doctor_Notifications />} />
          </Routes>

          {/* Components */}

          <Routes >
            <Route path='/' element={<HomePage />} />
          </Routes>

          <Routes >
            <Route path='/doctorlist' element={<Doctorlist />} />
          </Routes>
          <Routes >
            <Route path='/login' element={<Login />} />
          </Routes>
          <Routes >
            <Route path='/patientlist' element={<PatientList />} />
          </Routes>
          <Routes >
            <Route path='/register' element={<Register />} />
          </Routes>
          <Routes >
            <Route path='/social' element={<Social />} />
          </Routes>
          <Routes >
            <Route path='/about' element={<About />} />
          </Routes>
          <Routes >
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Routes >
            <Route path='/skin' element={<Skin />} />
          </Routes>
          <Routes >
            <Route path='/orthopedic' element={<Bone />} />
          </Routes>
          <Routes >
            <Route path='/physician' element={<General />} />
          </Routes>
          <Routes >
            <Route path='/eye' element={<Eye />} />
          </Routes>
          <Routes >
            <Route path='/surgery' element={<Surgery />} />
          </Routes>
          <Routes >
            <Route path='/dental' element={<Dental />} />
          </Routes>


          <Routes >
            <Route path='/userlogin' element={<UserLogin />} />
          </Routes>
          <Routes >
            <Route path='/userregister' element={<UserRegister />} />
          </Routes>
          <Routes >
            <Route path='/user_dashboard' element={<User_Dashboard />} />
          </Routes>


          <Routes >
            <Route path='/shopping' element={<CartHomePage />} />
          </Routes>
          <Routes >
            <Route path='/uploadProduct' element={<UploadProduct />} />
          </Routes>
          <Routes >
            <Route path='/useraccount' element={<CartuserAccount />} />
          </Routes>
          <Routes >
            <Route path='/cartchange-password' element={<ChangePassword />} />
          </Routes>
          <Routes >
            <Route path='/cartaddress' element={<CartAddress />} />
          </Routes>
          <Routes >
            <Route path='/cartorder' element={<CartOrder />} />
          </Routes>
          <Routes >
            <Route path='/wishlist' element={<Wishlist />} />
          </Routes>
          <Routes >
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Routes >
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <Routes >
            <Route path='/thankyou' element={<Thankyou />} />
          </Routes>
          <Routes >
            <Route path='/order-details' element={<OrderDetails />} />
          </Routes>


          <Routes >
            <Route path='/upload-prescription' element={<UploadPrep />} />
          </Routes>

          <Routes >
            <Route path='/category' element={<Category />} />
          </Routes>
          <Routes >
            <Route path='/covidprevention' element={<CovidPrevention />} />
          </Routes>
          <Routes >
            <Route path='/babycare' element={<BabyCare />} />
          </Routes>
          <Routes >
            <Route path='/personalcare' element={<PersonalCare />} />
          </Routes>
          <Routes >
            <Route path='/sports_nutrition' element={<SportsNutrition />} />
          </Routes>
          <Routes >
            <Route path='/diabetes' element={<Diabetes />} />
          </Routes>
          <Routes >
            <Route path='/genericmed' element={<GenericMedicine />} />
          </Routes>
          <Routes >
            <Route path='/product-details/:id' element={<Description />} />
          </Routes>

          {/* Lab Testing Routes */}
          <Routes >
            <Route path='/labhome' element={<LabHome />} />
          </Routes>
          <Routes>
            <Route path='/lab_regsiter' element={<LabTester_Register />} />
          </Routes>
          <Routes>
            <Route path='/lab_login' element={<LabTester_login />} />
          </Routes>
          <Routes>
            <Route path='/lab_dashboard' element={<LabDashboard />} />
          </Routes>
          <Routes>
            <Route path='/labprofile' element={<LabProfile />} />
          </Routes>
          <Routes >
            <Route path='/lab_notifications' element={<LabNotifications />} />
          </Routes>
          <Routes >
            <Route path='/lab_appointment' element={<LabAppointment />} />
          </Routes>
          <Routes>
            <Route path='/lab_admin' element={<Labadmin />} />
          </Routes>
          <Routes>
            <Route path='/labpackages' element={<LabPackages />} />
          </Routes>
          <Routes>
            <Route path='/labselect/:packid' element={<LabSelect />} />
          </Routes>
          <Routes>
            <Route path='/labpackdetails/:placeid/:packid' element={<LabPackDetails />} />
          </Routes>
          {/* <Routes>
            <Route path='/labpackdetails/:packageid/:placeid' element={<LabPackDetails />} />
          </Routes> */}
          {/* <Routes>
            <Route path='/demo' element={<Demo />} />
          </Routes> */}

          <Routes>
            <Route path='/uploadreport' element={<ReportUpload />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
