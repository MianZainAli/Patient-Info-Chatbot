import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Pages/web/Base";
import PatientBase from "./Pages/user/patient/Base";
import DoctorBase from "./Pages/user/doctor/Base";
import Home from "./Pages/web/Home";
import Doctor from "./Pages/web/Doctors";
import About from "./Pages/web/About";
import Contact from "./Pages/web/Contact";
import Login from "./Pages/web/Login";
import Registration from "./Pages/web/Registration";
import Dashboard from "./Pages/user/patient/Dashboard";
import DocDashboard from "./Pages/user/doctor/Dashboard";
import Appointment from "./Pages/user/patient/Appointment";
import DocAppointment from "./Pages/user/doctor/Appointment";
import ScheduleTiming from "./Pages/user/doctor/ScheduleTiming";
import Patients from "./Pages/user/doctor/Patients";
import ProfileSetting from "./Pages/user/doctor/ProfileSetting";
import Chat from "./Pages/user/patient/Chat";
import DocChat from "./Pages/user/doctor/Chat";
import BookAppointment from "./Pages/user/patient/BookAppointment";


function App() {
  return (
    <>
      <BrowserRouter>

        {/* ToastContainer */}
        <ToastContainers />

        {/* Routes */}
        <Routes>

          {/* Web Routes */}
          <Route path='/' element={<Base><Home /></Base>} />
          <Route path='/doctor' element={<Base><Doctor /></Base>} />
          <Route path='/about-us' element={<Base><About /></Base>} />
          <Route path='/contact-us' element={<Base><Contact /></Base>} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />


          {/* Users */}
          {/* Patient */}
          <Route path='/patient/dashboard' element={<PatientBase><Dashboard /></PatientBase>} />
          <Route path='/patient/appointment' element={<PatientBase><Appointment /></PatientBase>} />
          <Route path='/patient/bookappointment' element={<PatientBase><BookAppointment /></PatientBase>} />
          <Route path='/patient/chat' element={<PatientBase><Chat /></PatientBase>} />

          {/* Doctor */}
          <Route path='/doctor/dashboard' element={<DoctorBase><DocDashboard /></DoctorBase>} />
          <Route path='/doctor/appointment' element={<DoctorBase><DocAppointment /></DoctorBase>} />
          <Route path='/doctor/scheduletiming' element={<DoctorBase><ScheduleTiming /></DoctorBase>} />
          <Route path='/doctor/patient' element={<DoctorBase><Patients /></DoctorBase>} />
          <Route path='/doctor/profile-setting' element={<DoctorBase><ProfileSetting /></DoctorBase>} />
          <Route path='/doctor/chat' element={<DoctorBase><DocChat /></DoctorBase>} />

          <Route path='*' element={<PageNotFound404 />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
