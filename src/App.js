// import { useEffect } from "react";
import React from "react";
import {   Routes, Route} from "react-router-dom";
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../src/assets/css/style.bundle.css"
import '../src/assets/plugins/custom/datatables/datatables.bundle.css'
import "../src/assets/plugins/custom/vis-timeline/vis-timeline.bundle.css"
import "../src/assets/plugins/global/plugins.bundle.css";
import Login from "./pages/login";
import Forgotpassword from "./pages/forgotpassword";
import Resetpassword from "./pages/resetpassword";
import Createaccount from "./pages/createaccount";
import BuilderDashboard from "./pages/builderdashboard";
import OwnerDashboard from "./pages/ownerdashboard";
import SubcontractorDashboard from "./pages/subcontractordashboard";
import SignUp from "./pages/signUp";
import Otpverification from "./pages/otpverification";
import ProfileData from "./pages/profile";
import SubcontractorProjectDetail from "./pages/subcontractorprojectdetails";
import OwnerProjectDetail from "./pages/ownerprojectdetails";

function App() {

  return (
    <>
    
    {/* <Router> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
		<Route path="/otpverification" element={<Otpverification />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/createaccount" element={<Createaccount />} />
        <Route path="/builderdashboard" element={<BuilderDashboard />} />
        <Route path="/ownerdashboard" element={<OwnerDashboard />} />
        <Route path="/subcontractordashboard" element={<SubcontractorDashboard />} />
        <Route path="/profile" element={<ProfileData />} />
        <Route path="/subcontractorprojectdetails" element={<SubcontractorProjectDetail />} />
        <Route path="/ownerprojectdetails" element={<OwnerProjectDetail />} />
        
      </Routes>
    {/* </Router> */}
   
    </>
      );
    }

export default App;
