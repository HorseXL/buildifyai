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
import OwnerDashboard from "./pages/ownerdashboard";
import SubcontractorDashboard from "./pages/subcontractordashboard";
import SignUp from "./pages/signUp";
import Otpverification from "./pages/otpverification";
import ProfileData from "./pages/profile"; 
import SubcontractorProjectDetail from "./pages/subcontractorprojectdetails";
import OwnerProjectDetail from "./pages/ownerprojectdetails";
import CreateProject from "./pages/createproject";
import Chat from "./pages/chat";
import Addtocompare from "./pages/addtocompare";
import Invitedsubcontractor from "./pages/invitedsubcontractor";
import Viewbid from "./pages/viewbid";
import AddBid from "./pages/addBid";
import Specificationdetail from "./pages/specificationdetail";
import ProjectManagement from "./pages/projectmanagement";

// builder url
import BuilderDashboard from "./pages/builderdashboard";
import BuilderProjectDetail from "./pages/builderprojectdetails";
import BuilderAddbid from "./pages/builderaddbid";
import BuilderOverviewBid from "./pages/builderoverviewbid";
import BuilderAddproject from "./pages/builderaddproject";
import BuilderPostproject from "./pages/builderpostproject";
import BuilderAddtask from "./pages/builderaddtask";
import Subcontractor from "./pages/subcontractor";
import Buildersummary from "./pages/buildersummary";
import BusinessFinances from "./pages/businessFinances";
import ViewBusinessFinances from "./pages/viewbusinessfinances";
import Addsalesleads from "./pages/addsalesleads";
import ViewSalesLeads from "./pages/viewsalesleads";
import Manageteam from "./pages/manageteam";
import Addteammember from "./pages/addteammember";
import Viewchangeorder from "./pages/viewchangeorder";
import Addchangeorder from "./pages/addchangeorder";
import ProjectList from "./pages/projectlist";
import Calender from "./pages/calender";

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
        <Route path="/ownerdashboard" element={<OwnerDashboard />} />
        <Route path="/subcontractordashboard" element={<SubcontractorDashboard />} />
        <Route path="/profile" element={<ProfileData />} />
        <Route path="/subcontractorprojectdetails" element={<SubcontractorProjectDetail />} />
        <Route path="/ownerprojectdetails" element={<OwnerProjectDetail />} />
        <Route path="/createproject" element={<CreateProject />} />
		    <Route path="/chat" element={<Chat />} />
        <Route path="/addtocompare" element={<Addtocompare />} />
        <Route path="/invitedsubcontractor" element={<Invitedsubcontractor />} />
        <Route path="/viewbid" element={<Viewbid />} />
        <Route path="/addbid" element={<AddBid />} />
        <Route path="/viewchangeorder" element={<Viewchangeorder />} />
        <Route path="/addchangeorder" element={<Addchangeorder />} />
        <Route path="/specificationdetail" element={<Specificationdetail />} />
        <Route path="/projectManagement" element={<ProjectManagement />} />
        <Route path="/ProjectList" element={<ProjectList />} />
        <Route path="/calender" element={<Calender />} />
		    {/* builder route */}
        <Route path="/builderdashboard" element={<BuilderDashboard />} />
        <Route path="/builderprojectdetails" element={<BuilderProjectDetail />} />
        <Route path="/builderaddbid" element={<BuilderAddbid />} />
        <Route path="/builderoverviewbid" element={<BuilderOverviewBid />} />
        <Route path="/builderaddproject" element={<BuilderAddproject />} />
        <Route path="/builderpostproject" element={<BuilderPostproject />} />
        <Route path="/builderaddtask" element={<BuilderAddtask />} />
        <Route path="/subcontractor" element={<Subcontractor />} />
        <Route path="/businessfinances" element={<BusinessFinances />} />
        <Route path="/viewbusinessfinances" element={<ViewBusinessFinances />} />
        <Route path="/buildersummary" element={<Buildersummary />} />
        <Route path="/addsalesleads" element={<Addsalesleads />} />
        <Route path="/viewsalesleads" element={<ViewSalesLeads />} />
        <Route path="/manageteam" element={<Manageteam />} />
        <Route path="/addteammember" element={<Addteammember />} />
      </Routes>
    {/* </Router> */}
   
    </>
      );
    }

export default App;
