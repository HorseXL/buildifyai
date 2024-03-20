import React, { useState, useEffect } from 'react';
import logo from "../assets/images/buildyfyaiWhite.png"
import sketchy from "../assets/images/1.png"
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";
import { createBootstrapTooltips, fetchDataPrivate } from "../config/Reausable"

export default function Header() {

	const [profileDetails,setProfileDetails] = useState([])

	useEffect(() => {
		const userId = window.localStorage.getItem("buildifyUserId");
		if (userId !== "" && userId !== null && userId !== undefined) {
			createBootstrapTooltips();
			profileDetailsApi();
		} else {
			navigate("/");
		}
	}, []);

	const handleSetactiveTab = (tabMain, tabSub) => {
		localStorage.setItem('activeTab', tabMain);
		localStorage.setItem('activeTabSub', tabSub);
	}

	// mobile navbar hide and show
	const hideShowBusiness = (event) => {
		$("#businessHub").toggleClass('text-primary')
		$("#businessHubSub").toggleClass('d-none')
		$("#businessArrow").toggleClass('fa-angle-down')
		$("#businessArrow").toggleClass('fa-angle-up')
	}

	const hideShowProjectManagment = (event) => {
		$("#projectManagement").toggleClass('text-primary')
		$("#projectManagementSub").toggleClass('d-none')
		$("#projectManagmentArrow").toggleClass('fa-angle-down')
		$("#projectManagmentArrow").toggleClass('fa-angle-up')
	}

	const hideShowFinance = (event) => {
		$("#finance").toggleClass('text-primary')
		$("#financeSub").toggleClass('d-none')
		$("#financeArrow").toggleClass('fa-angle-down')
		$("#financeArrow").toggleClass('fa-angle-up')
	}

	const hideShowBids = (event) => {
		$("#bids").toggleClass('text-primary')
		$("#bidsSub").toggleClass('d-none')
		$("#bidsArrow").toggleClass('fa-angle-down')
		$("#bidsArrow").toggleClass('fa-angle-up')
	}

	const hideShowFiles = (event) => {
		$("#files").toggleClass('text-primary')
		$("#filesSub").toggleClass('d-none')
		$("#filesArrow").toggleClass('fa-angle-down')
		$("#filesArrow").toggleClass('fa-angle-up')
	}

	const hideShowTools = (event) => {
		$("#tools").toggleClass('text-primary')
		$("#toolsSub").toggleClass('d-none')
		$("#toolsArrow").toggleClass('fa-angle-down')
		$("#toolsArrow").toggleClass('fa-angle-up')
	}

	const accountType = window.localStorage.getItem("accountType");
	const activeMenuName = window.localStorage.getItem("activeTab");
	const activeSubMenuName = window.localStorage.getItem("activeTabSub");

	const [mode, setMode] = useState('light'); 
	const handleModeChange = (newMode) => {
		setMode(newMode);
	  };
	// profile details api call
	const profileDetailsApi = async () => {
        let data = {};

        var response = await fetchDataPrivate("GET","api/profileDetails", data);
        if (response.status === 200) {

            if (response.data.length != 0)
            {
                let details = response.data[0];
                setProfileDetails(details);
            }
                
        }else{
            console.log(response);
        } 
    }

	const navigate = useNavigate();
	const signOut = () => {
		window.localStorage.removeItem('token');
		window.localStorage.removeItem('buildifyUserId');
		window.localStorage.removeItem('email');
		window.localStorage.removeItem('accountType');
		window.localStorage.removeItem('activeTab');
		window.localStorage.removeItem('activeTabSub');
		navigate('/');
	}
	return (
		<>
			{/* <!--begin::Header--> */}

			<div id="kt_app_header" className="app-header sticky-top" style={{ backgroundColor: '#17191E' }}>

				{/* <!--begin::Header container--> */}
				<div className="app-container container-xl d-flex align-items-stretch" style={{paddingLeft:"1px"}} id="kt_app_header_container">
					{/* <!--begin::Header mobile toggle--> */}
					<div className="d-flex align-items-center d-lg-none ms-n2 me-2" title="Show sidebar menu">
						<div className="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_header_menu_toggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
							<i className="ki-outline ki-abstract-14 fs-2 text-white"></i>
						</div>
					</div>
					{/* <!--end::Header mobile toggle--> */}
					<div className="offcanvas offcanvas-start flex-grow-1 flex-lg-grow-0 me-lg-18" style={{ width: "60%" }} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
						<div data-kt-menu-placement="bottom-start" className="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2">
							<div className='d-flex justify-content-end p-4 pb-0'>
								<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
							</div>
							<div className="offcanvas-header pt-0">
								<div className='w_150'>
								{(accountType == 'OWNER') && (
									<>
										{/* <!--Begin:Dashboard Hub Menu item--> */}
										<div data-kt-menu-placement="bottom-start" className="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2">
											<Link to={accountType == "OWNER" ? `../ownerdashboard/` : accountType == "BUILDER" ? '../builderdashboard/' : '../subcontractordashboard/'} data-kt-menu-placement="bottom-start" className="menu-link">
												<span className="menu-title">Dashboard</span>
												<span className="menu-arrow d-lg-none"></span>
											</Link>
										</div>
										{/* <!--end:Dashboard Hub Menu link--> */}
									</>
								)}
									{(accountType == 'BUILDER' || accountType == 'SUBCONTRACTOR') && (
									<>
										{/* <!--Begin:Business Hub Menu item--> */}
										<div data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 mr-0">
											<div className="dropdown">
												<span onClick={() => hideShowBusiness()}  className="menu-link" id="businessHub">
													<span>Business Hub</span>
													<i className="fa-solid fa-angle-down ms-4" id="businessArrow"></i>
												</span>
												<div className="w_160 d-none" id="businessHubSub">
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('business', 'Summary')} className="menu-link" to="../buildersummary/" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`fa-solid fa-table-list fs-2 ${activeSubMenuName == "Summary" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Summary" ? "text-primary" : ""} menu-title`}>Summary</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('business', 'Sales/Leads')} className="menu-link" to="../viewsalesleads/" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`ki-outline ki-graph-up fs-2 ${activeSubMenuName == "Sales/Leads" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Sales/Leads" ? "text-primary" : ""} menu-title`}>Sales/ Leads</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link className="menu-link" onClick={() => handleSetactiveTab('business', 'Business Finances')} style={{ color: '#5e6278' }} to="../viewbusinessfinances/" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
															<i className={`fa-solid fa-people-group fs-3 ${activeSubMenuName == "Business Finances" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Business Finances" ? "text-primary" : ""} menu-title`}>Business Finances</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('business', 'Manage Team')} className="menu-link" to="../manageteam/" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`fa-solid fa-people-group fs-3 ${activeSubMenuName == "Manage Team" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Manage Team" ? "text-primary" : ""} menu-title`}>Manage Team</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link className="menu-link" style={{ color: '#5e6278' }} to="../subcontractor/">
															<span className="menu-icon">
																<i className="fa-solid fa-screwdriver-wrench fs-3"></i>
															</span>
															<span className="menu-title">Sub Contractors</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link className="menu-link" style={{ color: '#5e6278' }} to="#">
															<span className="menu-icon">
																<i className="fa-regular fa-lightbulb fs-2"></i>
															</span>
															<span className="menu-title">Insights</span>
														</Link>
													</div>
												</div>
											</div>
										</div>
										{/* <!--end:Business Hub Menu link--> */}
										{/* <!--Begin:Project Managment Menu item--> */}
										<div data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 mr-0">
											<div className="dropdown">
												<span onClick={() => hideShowProjectManagment()} className="menu-link" id='projectManagement'>
													<span>Project Managment</span>
													<i className="fa-solid fa-angle-down ms-4" id="projectManagmentArrow"></i>
												</span>
												<div className="w_160 d-none" id="projectManagementSub">
													<div className="menu-item">
														<Link className="menu-link" style={{ color: '#5e6278' }} to="../projectmanagement/">
															<span className="menu-icon">
																<i className="ki-outline ki-calendar fs-2"></i>
															</span>
															<span className="menu-title">Schedule</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link className="menu-link" style={{ color: '#5e6278' }} to="#">
															<span className="menu-icon">
																<i className="fa-solid fa-file-pen fs-3"></i>
															</span>
															<span className="menu-title">Tasks</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link className="menu-link" style={{ color: '#5e6278' }} to="../specificationdetail/" >
															<span className="menu-icon">
																<i className="ki-outline ki-gear fs-2"></i>
															</span>
															<span className="menu-title">Specifications</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link className="menu-link" style={{ color: '#5e6278' }} to="#">
															<span className="menu-icon">
																<i className="fa-solid fa-rotate-right fs-3"></i>
															</span>
															<span className="menu-title">Change Orders</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link className="menu-link" style={{ color: '#5e6278' }} to="#">
															<span className="menu-icon">
																<i className="fa-solid fa-cart-shopping fs-2"></i>
															</span>
															<span className="menu-title">Purchase Order</span>
														</Link>
													</div>
												</div>
											</div>
										</div>
										{/* <!--end:Project Managment Menu link--> */}
										{/* <!--Begin:Finance Menu item--> */}
										<div data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 mr-0">
											<div className="dropdown">
												<span onClick={() => hideShowFinance()} className="menu-link" id='finance'>
													<span>Finance</span>
													<i className="fa-solid fa-angle-down ms-4" id="financeArrow"></i>
												</span>
												<div className="w_160 d-none" id='financeSub'>
													<div className="menu-item">
														<Link className="menu-link" style={{ color: '#5e6278' }} to="#">
															<span className="menu-icon">
																<i className="fa-solid fa-sack-dollar fs-2"></i>
															</span>
															<span className="menu-title">Budget/ Forecast</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link className="menu-link" style={{ color: '#5e6278' }} to="../viewbusinessfinances/">
															<span className="menu-icon">
																<i className="fa-solid fa-file-invoice fs-2"></i>
															</span>
															<span className="menu-title">Invoices</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link className="menu-link" style={{ color: '#5e6278' }} to="#">
															<span className="menu-icon">
																<i className="fa-solid fa-file fs-2"></i>
															</span>
															<span className="menu-title">Reports</span>
														</Link>
													</div>
												</div>
											</div>
										</div>
										{/* <!--end:Finance Menu link--> */}
										{/* <!--Begin:Bids Menu item--> */}
										<div data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 mr-0">
											<div className="dropdown">
												<span onClick={() => hideShowBids()} className="menu-link" id='bids'>
													<span>Bids</span>
													<i className="fa-solid fa-angle-down ms-4" id="bidsArrow"></i>
												</span>
												<div className="w_160 d-none" id='bidsSub'>
													<div className="menu-item">
														<Link className="menu-link" style={{ color: '#5e6278' }}>
															<span className="menu-icon">
																<i className="fa-solid fa-file-pen fs-2"></i>
															</span>
															<span className="menu-title">Create Bid</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link className="menu-link" style={{ color: '#5e6278' }} to="#">
															<span className="menu-icon">
																<i className="fa-solid fa-file-lines fs-2"></i>
															</span>
															<span className="menu-title">View Bids</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link className="menu-link" style={{ color: '#5e6278' }} to="#">
															<span className="menu-icon">
																<i className="fa-solid fa-file fs-2"></i>
															</span>
															<span className="menu-title">Bid Reports</span>
														</Link>
													</div>
												</div>
											</div>
										</div>
										{/* <!--end:Bids Menu link--> */}
										{/* <!--Begin:Files Menu item--> */}
										<div data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 mr-0">
											<div className="dropdown">
												<span onClick={() => hideShowFiles()} className="menu-link" id='files'>
													<span>Files</span>
													<i className="fa-solid fa-angle-down ms-4" id="filesArrow"></i>
												</span>
												<div className="w_160 d-none" id='filesSub'>
													<div className="menu-item">
														<Link className="menu-link" style={{ color: '#5e6278' }} to="#">
															<span className="menu-icon">
																<i className="ki-outline ki-document fs-2"></i>
															</span>
															<span className="menu-title">Documents</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link className="menu-link" style={{ color: '#5e6278' }} to="#">
															<span className="menu-icon">
																<i className="fa-solid fa-images fs-2"></i>
															</span>
															<span className="menu-title">Photos/ Videos</span>
														</Link>
													</div>
												</div>
											</div>
										</div>
										{/* <!--end:Files Menu link--> */}
										{/* {/ <!--begin:Chat item--> /} */}
										<div data-kt-menu-placement="bottom-start" className="menu-item menu-here-bg menu-lg-down-accordion me-0 me-lg-2">
											{/* {/ <!--begin:Menu link--> /} */}
											<span className="menu-link">
												<span className="main-menu-title" style={{ color: '#5e6278' }}>
													<Link to="../chat/" style={{ color: '#5e6278', fontSize: '1rem' }}>Chat </Link>
												</span>
											</span>
											{/* {/ <!--end:Menu link--> /} */}
										</div>
										{/* {/ <!--end:Chat item--> /} */}
										{/* <!--begin:Tools Menu item--> */}
										<div data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 me-lg-2">
											<div className="dropdown">
												<span onClick={() => hideShowTools()} className="menu-link" id='tools'>
													<span>Tools </span>
													<i className="fa-solid fa-angle-down ms-4" id="toolsArrow"></i>
												</span>
												<div className="w_160 d-none" id='toolsSub'>
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<Link className="menu-link" style={{ color: '#5e6278' }} to="#">
															<span className="menu-icon">
																<i className="fa-solid fa-plane-departure fs-2"></i>
															</span>
															<span className="menu-title">Take Off</span>
														</Link>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<Link className="menu-link" style={{ color: '#5e6278' }} to="#">
															<span className="menu-icon">
																<i className="fa-regular fa-lightbulb fs-2"></i>
															</span>
															<span className="menu-title">Inspiration Page</span>
														</Link>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
												</div>
											</div>
										</div>
										{/* <!--end:Tools Menu item--> */}
										</>
									)}
								</div>
							</div>
						</div>
					</div>
					{/* <!--begin::Logo--> */}
					<div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0 me-lg-18 ">
						<Link className='me-5' to={accountType == "OWNER" ? `../ownerdashboard/` : accountType == "BUILDER" ? '../builderdashboard/' : '../subcontractordashboard/'}>
							<img alt="Logo" src={logo} className="h-25px d-sm-none" />
							<img alt="Logo" src={logo} className="h-60px d-none d-sm-block me-5" />
						</Link>
					</div>
					{/* <!--end::Logo--> */}
					{/* <!--begin::Header wrapper--> */}
					<div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1" id="kt_app_header_wrapper">
						{/* <!--begin::Menu wrapper--> */}
						<div className="app-header-menu app-header-mobile-drawer align-items-stretch" >
							{/* <!--begin::Menu--> */}
							<div className="menu menu-rounded menu-active-bg menu-state-primary menu-column menu-lg-row menu-title-gray-700 menu-icon-gray-500 menu-arrow-gray-500 menu-bullet-gray-500 my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0 " id="kt_app_header_menu" data-kt-menu="true">
							{(accountType == 'OWNER') && (
							<>

								{/* <!--begin:Menu item--> */}
								<div data-kt-menu-placement="bottom-start" className={`${activeMenuName == "dashboard" ? "activeMainMenu" : ""} menu-item menu-here-bg menu-lg-down-accordion me-0 me-lg-2 d-none`}>
									{/* <!--begin:Menu link--> */}
									<Link onClick={() => handleSetactiveTab('dashboard', '')} to={accountType == "OWNER" ? `../ownerdashboard/` : accountType == "BUILDER" ? '../builderdashboard/' : '../subcontractordashboard/'} data-kt-menu-placement="bottom-start" className={`${activeMenuName == "dashboard" ? "text-white" : ""} menu-link`}>
										<span className={`${activeMenuName == "dashboard" ? "text-white" : ""}menu-title`} style={{ fontSize: '1rem' }}>Dashboard</span>
									</Link>
									{/* <!--end:Menu link--> */}
								</div>
								{/* <!--end:Menu item--> */}
							</>
							)}
							<div className="col-lg-11"></div>
							<div className="col-lg-11"></div>
							<div className="col-lg-11"></div>
							<div className="col-lg-11"></div>
							<div className="d-none">
								{(accountType == 'BUILDER' || accountType == 'SUBCONTRACTOR') && (
									<>
										{/* <!--Begin:Business Hub Menu item--> */}
										<div data-kt-menu-placement="bottom-start" className={`${activeMenuName == "business" ? "activeMainMenu" : ""} menu-item menu-lg-down-accordion me-0 mr-0`} id="sixmenu1">
											<div className="dropdown" id="hoverDropdown">
												<span className="menu-link">
													<span className={`${activeMenuName == "business" ? "text-white" : ""} main-menu-title`} style={{ color: '#5e6278' }}>Business Hub</span>
												</span>
												<div className="dropdown-menu w_160" aria-labelledby="dropdownMenuButton">
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('business', 'Summary')} className="menu-link" to="../buildersummary/" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`fa-solid fa-table-list fs-2 ${activeSubMenuName == "Summary" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Summary" ? "text-primary" : ""} menu-title`}>Summary</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('business', 'Sales/Leads')} className="menu-link" to="../viewsalesleads/" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`ki-outline ki-graph-up fs-2 ${activeSubMenuName == "Sales/Leads" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Sales/Leads" ? "text-primary" : ""} menu-title`}>Sales/ Leads</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('business', 'Business Finances')} className="menu-link" to="../viewbusinessfinances/" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`ki-outline ki-bank fs-2 ${activeSubMenuName == "Business Finances" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Business Finances" ? "text-primary" : ""} menu-title`}>Business Finances</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('business', 'Sub Contractors')} className="menu-link" to="../subcontractor/" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`fa-solid fa-screwdriver-wrench fs-3 ${activeSubMenuName == "Sub Contractors" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Sub Contractors" ? "text-primary" : ""} menu-title`}>Sub Contractors</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('business', 'Manage Team')} className="menu-link" to="../manageteam/" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`fa-solid fa-people-group fs-3 ${activeSubMenuName == "Manage Team" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Manage Team" ? "text-primary" : ""} menu-title`}>Manage Team</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('business', 'Insights')} className="menu-link" to="#" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`fa-regular fa-lightbulb fs-2 ${activeSubMenuName == "Insights" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Insights" ? "text-primary" : ""} menu-title`}>Insights</span>
														</Link>
													</div>
												</div>
											</div>
										</div>
										{/* <!--end:Business Hub Menu link--> */}
										{/* <!--Begin:Project Managment Menu item--> */}
										<div data-kt-menu-placement="bottom-start" className={`${activeMenuName == "Project Managment" ? "activeMainMenu" : ""} menu-item menu-lg-down-accordion me-0 mr-0" id="sixmenu1`}>
											<div className="dropdown" id="hoverDropdown">
												<span className="menu-link">
													<span className={`${activeMenuName == "Project Managment" ? "text-white" : ""} main-menu-title`} style={{ color: '#5e6278' }}>Project Managment</span>
												</span>
												<div className="dropdown-menu w_160" aria-labelledby="dropdownMenuButton">
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('Project Managment', 'Schedule')} className="menu-link" to="../projectmanagement/" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`ki-outline ki-calendar fs-2 ${activeSubMenuName == "Schedule" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Schedule" ? "text-primary" : ""} menu-title`}>Schedule</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('Project Managment', 'Projects')} className="menu-link" to="../projectmanagement/" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`ki-outline ki-calendar fs-2 ${activeSubMenuName == "Projects" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Projects" ? "text-primary" : ""} menu-title`}>Projects</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link onClick={() => {handleSetactiveTab('Project Managment', 'Tasks');window.location.href = "../builderprojectdetails/"}} className="menu-link" to="../builderprojectdetails/" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`fa-solid fa-file-pen fs-3 ${activeSubMenuName == "Tasks" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Tasks" ? "text-primary" : ""} menu-title`}>Tasks</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('Project Managment', 'Specifications')} className="menu-link" to="../specificationdetail/" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`ki-outline ki-gear fs-2 ${activeSubMenuName == "Specifications" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Specifications" ? "text-primary" : ""} menu-title`}>Specifications</span>
														</Link>
													</div>
													<div className="menu-item">
													<Link onClick={() => {handleSetactiveTab('Project Managment', 'Change Orders'); window.location.href = "../builderprojectdetails/"}} className="menu-link"  data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
														<span className="menu-icon">
															<i className={`fa-solid fa-rotate-right fs-3 ${activeSubMenuName == "Change Orders" ? "text-primary" : ""}`}></i>
														</span>
														<span className={`${activeSubMenuName == "Change Orders" ? "text-primary" : ""} menu-title`}>Change Orders</span>
													</Link>

													</div>
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('Project Managment', 'Purchase Order')} className="menu-link" to="#" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`fa-solid fa-cart-shopping fs-2 ${activeSubMenuName == "Purchase Order" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Purchase Order" ? "text-primary" : ""} menu-title`}>Purchase Order</span>
														</Link>
													</div>
												</div>
											</div>
										</div>
										{/* <!--end:Project Managment Menu link--> */}
										{/* <!--Begin:Finance Menu item--> */}
										<div data-kt-menu-placement="bottom-start" className={`${activeMenuName == "Finance" ? "activeMainMenu" : ""} menu-item menu-lg-down-accordion me-0 mr-0" id="sixmenu1`}>
											<div className="dropdown" id="hoverDropdown">
												<span className="menu-link">
													<span className={`${activeMenuName == "Finance" ? "text-white" : ""} main-menu-title`} style={{ color: '#5e6278' }}>Finance</span>
												</span>
												<div className="dropdown-menu w_160" aria-labelledby="dropdownMenuButton">
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('Finance', 'Budget/Forecast')} className="menu-link" to="#" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`fa-solid fa-sack-dollar fs-2 ${activeSubMenuName == "Budget/Forecast" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Budget/Forecast" ? "text-primary" : ""} menu-title`}>Budget/ Forecast</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('Finance', 'Invoices')} className="menu-link" to="../viewbusinessfinances/" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`fa-solid fa-file-invoice fs-2 ${activeSubMenuName == "Invoices" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Invoices" ? "text-primary" : ""} menu-title`}>Invoices</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('Finance', 'Reports')} className="menu-link" to="#" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`fa-solid fa-file fs-2 ${activeSubMenuName == "Reports" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Reports" ? "text-primary" : ""} menu-title`}>Reports</span>
														</Link>
													</div>
												</div>
											</div>
										</div>
										{/* <!--end:Finance Menu link--> */}
										{/* <!--Begin:Bids Menu item--> */}
										<div data-kt-menu-placement="bottom-start" className={`${activeMenuName == "Bids" ? "activeMainMenu" : ""} menu-item menu-lg-down-accordion me-0 mr-0`} id="sixmenu1">
											<div className="dropdown" id="hoverDropdown">
												<span className="menu-link">
													<span className={`${activeMenuName == "Bids" ? "text-white" : ""} main-menu-title`} style={{ color: '#5e6278' }}>Bids</span>
												</span>
												<div className="dropdown-menu w_160" aria-labelledby="dropdownMenuButton">
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('Bids', 'Create Bid')} className="menu-link" to="../builderaddbid/" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`fa-solid fa-file-pen fs-2 ${activeSubMenuName == "Create Bid" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Create Bid" ? "text-primary" : ""} menu-title`}>Create Bid</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('Bids', 'View Bids')} className="menu-link" to="#" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`fa-solid fa-file-lines fs-2 ${activeSubMenuName == "View Bids" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "View Bids" ? "text-primary" : ""} menu-title`}>View Bids</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('Bids', 'Bid Reports')} className="menu-link" to="#" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`fa-solid fa-file fs-2 ${activeSubMenuName == "Bid Reports" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Bid Reports" ? "text-primary" : ""} menu-title`}>Bid Reports</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('Bids', 'Bid Status')} className="menu-link" to="../builderprojectdetails/" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`fa-solid fa-file fs-2 ${activeSubMenuName == "Bid Status" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Bid Status" ? "text-primary" : ""} menu-title`}>Bid Status</span>
														</Link>
													</div>
												</div>
											</div>
										</div>
										{/* <!--end:Bids Menu link--> */}
										{/* <!--Begin:Files Menu item--> */}
										<div data-kt-menu-placement="bottom-start" className={`${activeMenuName == "Files" ? "activeMainMenu" : ""} menu-item menu-lg-down-accordion me-0 mr-0`} id="sixmenu1">
											<div className="dropdown" id="hoverDropdown">
												<span className="menu-link">
													<span className={`${activeMenuName == "Files" ? "text-white" : ""} main-menu-title`} style={{ color: '#5e6278' }}>Files</span>
												</span>
												<div className="dropdown-menu w_160" aria-labelledby="dropdownMenuButton">
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('Files', 'Documents')} className="menu-link" to="../builderprojectdetails/" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`ki-outline ki-document fs-2 ${activeSubMenuName == "Documents" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Documents" ? "text-primary" : ""} menu-title`}>Documents</span>
														</Link>
													</div>
													<div className="menu-item">
														<Link onClick={() => handleSetactiveTab('Files', 'Photos/Videos')} className="menu-link" to="#" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`fa-solid fa-images fs-2 ${activeSubMenuName == "Photos/Videos" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Photos/Videos" ? "text-primary" : ""} menu-title`}>Photos/ Videos</span>
														</Link>
													</div>
												</div>
											</div>
										</div>
										{/* <!--end:Files Menu link--> */}
										{/* {/ <!--begin:Chat item--> /} */}
										<div data-kt-menu-placement="bottom-start" className={`${activeMenuName == "Chat" ? "activeMainMenu" : ""} menu-item menu-here-bg menu-lg-down-accordion me-0 me-lg-2`} id="sixmenu1">
											{/* {/ <!--begin:Menu link--> /} */}
											<span className="menu-link">
												<span className="main-menu-title" style={{ color: '#5e6278' }}>
													<Link onClick={() => handleSetactiveTab('Chat', '')} className={`${activeMenuName == "Chat" ? "text-white" : ""} main-menu-title`} to="../chat/" style={{ color: '#5e6278', fontSize: '1rem' }}>Chat </Link>
												</span>
											</span>
											{/* {/ <!--end:Menu link--> /} */}
										</div>
										{/* {/ <!--end:Chat item--> /} */}
										{/* <!--begin:Tools Menu item--> */}
										<div data-kt-menu-placement="bottom-start" className={`${activeMenuName == "Tools" ? "activeMainMenu" : ""} menu-item menu-lg-down-accordion me-0 me-lg-2`} id="sixmenu1">
											<div className="dropdown" id="hoverDropdown">
												<span className="menu-link">
													<span className={`${activeMenuName == "Tools" ? "text-white" : ""} main-menu-title`} style={{ color: '#5e6278', boxSizing: 'border-box' }}>Tools </span>
												</span>
												<div className="dropdown-menu w_160" aria-labelledby="dropdownMenuButton">
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<Link onClick={() => handleSetactiveTab('Tools', 'Take Off')} className="menu-link" to="#" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`fa-solid fa-plane-departure fs-2 ${activeSubMenuName == "Take Off" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Take Off" ? "text-primary" : ""} menu-title`}>Take Off</span>
														</Link>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
													{/* <!--begin:Menu item--> */}
													<div className="menu-item">
														{/* <!--begin:Menu link--> */}
														<Link onClick={() => handleSetactiveTab('Tools', 'Inspiration Page')} className="menu-link" to="#" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
															<span className="menu-icon">
																<i className={`fa-regular fa-lightbulb fs-2 ${activeSubMenuName == "Inspiration Page" ? "text-primary" : ""}`}></i>
															</span>
															<span className={`${activeSubMenuName == "Inspiration Page" ? "text-primary" : ""} menu-title`}>Inspiration Page</span>
														</Link>
														{/* <!--end:Menu link--> */}
													</div>
													{/* <!--end:Menu item--> */}
												</div>
											</div>
										</div>
										{/* <!--end:Tools Menu item--> */}
									</>
								)}
								</div>
								<div data-kt-menu-placement="bottom-start" className="me-0 my-auto">
									<div className="card-toolbar">
										<i className="ki-outline ki-magnifier fs-3 text-muted position-absolute ms-4 mt-4"></i>
										<input type="text" data-kt-ecommerce-category-filter="search" className="form-control form-control-solid w-200px ps-12" placeholder="Search" />
									</div>
								</div>
							</div>
							{/* <!--end::Menu--> */}
						</div>
						{/* <!--end::Menu wrapper--> */}
						{/* <!--begin::Navbar--> */}
						<div className="app-navbar flex-shrink-0">
							{/* <!--Begin::Notification--> */}
							<div className="app-navbar-item ms-5" id="kt_header_user_menu_toggle">
								<div className="my-5 menu-item menu-lg-down-accordion me-0 me-lg-2" id="sixmenu1">
									<div className="dropdown" id="hoverDropdown">
										<div className="cursor-pointer symbol symbol-35px symbol-md-40px" id="profilemenu_1">
											<i className="ki-outline ki-notification-on fs-1"></i>
										</div>
										<div className="dropdown-menu dropdownContent pt-0" style={{ width: "350px" }} aria-labelledby="profilemenu_1" >
											{/* <!--begin::Heading--> */}
											<div className="d-flex flex-column bgi-no-repeat rounded-top menuHeader">
												{/* <!--begin::Title--> */}
												<h3 className="text-white fw-semibold px-9 mt-10 mb-6">Notifications
													<span className="fs-8 opacity-75 ps-3">24 reports</span></h3>
												{/* <!--end::Title--> */}
												{/* <!--begin::Tabs--> */}
												<ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9">
													<li className="nav-item">
														<Link className="nav-link text-white opacity-75 opacity-state-100 pb-4 active" data-bs-toggle="tab" to="#kt_topbar_notifications_1">Alerts</Link>
													</li>
												</ul>
												{/* <!--end::Tabs--> */}
											</div>
											{/* <!--end::Heading--> */}
											{/* <!--begin::Tab content--> */}
											<div className="tab-content">
												{/* <!--begin::Tab panel--> */}
												<div className="fade show active" id="kt_topbar_notifications_1" role="tabpanel">
													{/* <!--begin::Items--> */}
													<div className="scroll-y mh-325px my-5 px-8">
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack py-4">
															{/* <!--begin::Section--> */}
															<div className="d-flex align-items-center">
																{/* <!--begin::Symbol--> */}
																<div className="symbol symbol-35px me-4">
																	<span className="symbol-label bg-light-primary">
																		<i className="fa-solid fa-user-plus fs-2 text-primary"></i>
																	</span>
																</div>
																{/* <!--end::Symbol--> */}
																{/* <!--begin::Title--> */}
																<div className="mb-0 me-2">
																	<Link to="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">You got a project invitation from max Plank</Link>
																	{/* <!-- <div className="text-gray-400 fs-7">Phase 1 development</div> --> */}
																</div>
																{/* <!--end::Title--> */}
															</div>
															{/* <!--end::Section--> */}
															{/* <!--begin::Label--> */}
															<span className="badge badge-light fs-8">1 hrs</span>
															{/* <!--end::Label--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack py-4">
															{/* <!--begin::Section--> */}
															<div className="d-flex align-items-center">
																{/* <!--begin::Symbol--> */}
																<div className="symbol symbol-35px me-4">
																	<span className="symbol-label bg-light-primary">
																		<i className="fa-solid fa-dollar-sign fs-2 text-primary"></i>
																	</span>
																</div>
																{/* <!--end::Symbol--> */}
																{/* <!--begin::Title--> */}
																<div className="mb-0 me-2">
																	<Link to="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">You got a request for payment release from Steve messon</Link>
																	{/* <!-- <div className="text-gray-400 fs-7">New frontend admin theme</div> --> */}
																</div>
																{/* <!--end::Title--> */}
															</div>
															{/* <!--end::Section--> */}
															{/* <!--begin::Label--> */}
															<span className="badge badge-light fs-8">2 hrs</span>
															{/* <!--end::Label--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack py-4">
															{/* <!--begin::Section--> */}
															<div className="d-flex align-items-center">
																{/* <!--begin::Symbol--> */}
																<div className="symbol symbol-35px me-4">
																	<span className="symbol-label bg-light-primary">
																		<i className="fa-solid fa-truck fs-2 text-primary"></i>
																	</span>
																</div>
																{/* <!--end::Symbol--> */}
																{/* <!--begin::Title--> */}
																<div className="mb-0 me-2">
																	<Link to="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">You got a material list from Ernest Ruby</Link>
																	{/* <!-- <div className="text-gray-400 fs-7">Corporeate staff profiles</div> --> */}
																</div>
																{/* <!--end::Title--> */}
															</div>
															{/* <!--end::Section--> */}
															{/* <!--begin::Label--> */}
															<span className="badge badge-light fs-8">5 hrs</span>
															{/* <!--end::Label--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack py-4">
															{/* <!--begin::Section--> */}
															<div className="d-flex align-items-center">
																{/* <!--begin::Symbol--> */}
																<div className="symbol symbol-35px me-4">
																	<span className="symbol-label bg-light-primary">
																		<i className="fa-solid fa-user-plus fs-2 text-primary"></i>
																	</span>
																</div>
																{/* <!--end::Symbol--> */}
																{/* <!--begin::Title--> */}
																<div className="mb-0 me-2">
																	<Link to="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">You got a project invitation from Stephen Clerk</Link>
																	{/* <!-- <div className="text-gray-400 fs-7">Phase 1 development</div> --> */}
																</div>
																{/* <!--end::Title--> */}
															</div>
															{/* <!--end::Section--> */}
															{/* <!--begin::Label--> */}
															<span className="badge badge-light fs-8">1 days</span>
															{/* <!--end::Label--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack py-4">
															{/* <!--begin::Section--> */}
															<div className="d-flex align-items-center">
																{/* <!--begin::Symbol--> */}
																<div className="symbol symbol-35px me-4">
																	<span className="symbol-label bg-light-primary">
																		<i className="fa-solid fa-dollar-sign fs-2 text-primary"></i>
																	</span>
																</div>
																{/* <!--end::Symbol--> */}
																{/* <!--begin::Title--> */}
																<div className="mb-0 me-2">
																	<Link to="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">You got a request for payment release from Tony wilbert</Link>
																	{/* <!-- <div className="text-gray-400 fs-7">New frontend admin theme</div> --> */}
																</div>
																{/* <!--end::Title--> */}
															</div>
															{/* <!--end::Section--> */}
															{/* <!--begin::Label--> */}
															<span className="badge badge-light fs-8">2 days</span>
															{/* <!--end::Label--> */}
														</div>
														{/* <!--end::Item--> */}
													</div>
													{/* <!--end::Items--> */}
												</div>
												{/* <!--end::Tab panel--> */}
												{/* <!--begin::Tab panel--> */}
												<div className="tab-pane fade" id="kt_topbar_notifications_2" role="tabpanel">
													{/* <!--begin::Wrapper--> */}
													<div className="d-flex flex-column px-9">
														{/* <!--begin::Section--> */}
														<div className="pt-10 pb-0">
															{/* <!--begin::Title--> */}
															<h3 className="text-dark text-center fw-bold">Get Pro Access</h3>
															{/* <!--end::Title--> */}
															{/* <!--begin::Text--> */}
															<div className="text-center text-gray-600 fw-semibold pt-1">Outlines keep you honest. They stoping you from amazing poorly about drive</div>
															{/* <!--end::Text--> */}
															{/* <!--begin::Action--> */}
															<div className="text-center mt-5 mb-9">
																<Link to="#" className="btn btn-sm btn-primary px-6" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Upgrade</Link>
															</div>
															{/* <!--end::Action--> */}
														</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Illustration--> */}
														<div className="text-center px-4">
															<img className="mw-100 mh-200px" alt="sketchyImage" src={sketchy} />
														</div>
														{/* <!--end::Illustration--> */}
													</div>
													{/* <!--end::Wrapper--> */}
												</div>
												{/* <!--end::Tab panel--> */}
												{/* <!--begin::Tab panel--> */}
												<div className="tab-pane fade" id="kt_topbar_notifications_3" role="tabpanel">
													{/* <!--begin::Items--> */}
													<div className="scroll-y mh-325px my-5 px-8">
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack py-4">
															{/* <!--begin::Section--> */}
															<div className="d-flex align-items-center me-2">
																{/* <!--begin::Code--> */}
																<span className="w-70px badge badge-light-success me-4">200 OK</span>
																{/* <!--end::Code--> */}
																{/* <!--begin::Title--> */}
																<Link to="#" className="text-gray-800 text-hover-primary fw-semibold">New order</Link>
																{/* <!--end::Title--> */}
															</div>
															{/* <!--end::Section--> */}
															{/* <!--begin::Label--> */}
															<span className="badge badge-light fs-8">Just now</span>
															{/* <!--end::Label--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack py-4">
															{/* <!--begin::Section--> */}
															<div className="d-flex align-items-center me-2">
																{/* <!--begin::Code--> */}
																<span className="w-70px badge badge-light-danger me-4">500 ERR</span>
																{/* <!--end::Code--> */}
																{/* <!--begin::Title--> */}
																<Link to="#" className="text-gray-800 text-hover-primary fw-semibold">New customer</Link>
																{/* <!--end::Title--> */}
															</div>
															{/* <!--end::Section--> */}
															{/* <!--begin::Label--> */}
															<span className="badge badge-light fs-8">2 hrs</span>
															{/* <!--end::Label--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack py-4">
															{/* <!--begin::Section--> */}
															<div className="d-flex align-items-center me-2">
																{/* <!--begin::Code--> */}
																<span className="w-70px badge badge-light-success me-4">200 OK</span>
																{/* <!--end::Code--> */}
																{/* <!--begin::Title--> */}
																<Link to="#" className="text-gray-800 text-hover-primary fw-semibold">Payment process</Link>
																{/* <!--end::Title--> */}
															</div>
															{/* <!--end::Section--> */}
															{/* <!--begin::Label--> */}
															<span className="badge badge-light fs-8">5 hrs</span>
															{/* <!--end::Label--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack py-4">
															{/* <!--begin::Section--> */}
															<div className="d-flex align-items-center me-2">
																{/* <!--begin::Code--> */}
																<span className="w-70px badge badge-light-warning me-4">300 WRN</span>
																{/* <!--end::Code--> */}
																{/* <!--begin::Title--> */}
																<Link to="#" className="text-gray-800 text-hover-primary fw-semibold">Search query</Link>
																{/* <!--end::Title--> */}
															</div>
															{/* <!--end::Section--> */}
															{/* <!--begin::Label--> */}
															<span className="badge badge-light fs-8">2 days</span>
															{/* <!--end::Label--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack py-4">
															{/* <!--begin::Section--> */}
															<div className="d-flex align-items-center me-2">
																{/* <!--begin::Code--> */}
																<span className="w-70px badge badge-light-success me-4">200 OK</span>
																{/* <!--end::Code--> */}
																{/* <!--begin::Title--> */}
																<Link to="#" className="text-gray-800 text-hover-primary fw-semibold">API connection</Link>
																{/* <!--end::Title--> */}
															</div>
															{/* <!--end::Section--> */}
															{/* <!--begin::Label--> */}
															<span className="badge badge-light fs-8">1 week</span>
															{/* <!--end::Label--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack py-4">
															{/* <!--begin::Section--> */}
															<div className="d-flex align-items-center me-2">
																{/* <!--begin::Code--> */}
																<span className="w-70px badge badge-light-success me-4">200 OK</span>
																{/* <!--end::Code--> */}
																{/* <!--begin::Title--> */}
																<Link to="#" className="text-gray-800 text-hover-primary fw-semibold">Database restore</Link>
																{/* <!--end::Title--> */}
															</div>
															{/* <!--end::Section--> */}
															{/* <!--begin::Label--> */}
															<span className="badge badge-light fs-8">Mar 5</span>
															{/* <!--end::Label--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack py-4">
															{/* <!--begin::Section--> */}
															<div className="d-flex align-items-center me-2">
																{/* <!--begin::Code--> */}
																<span className="w-70px badge badge-light-warning me-4">300 WRN</span>
																{/* <!--end::Code--> */}
																{/* <!--begin::Title--> */}
																<Link to="#" className="text-gray-800 text-hover-primary fw-semibold">System update</Link>
																{/* <!--end::Title--> */}
															</div>
															{/* <!--end::Section--> */}
															{/* <!--begin::Label--> */}
															<span className="badge badge-light fs-8">May 15</span>
															{/* <!--end::Label--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack py-4">
															{/* <!--begin::Section--> */}
															<div className="d-flex align-items-center me-2">
																{/* <!--begin::Code--> */}
																<span className="w-70px badge badge-light-warning me-4">300 WRN</span>
																{/* <!--end::Code--> */}
																{/* <!--begin::Title--> */}
																<Link to="#" className="text-gray-800 text-hover-primary fw-semibold">Server OS update</Link>
																{/* <!--end::Title--> */}
															</div>
															{/* <!--end::Section--> */}
															{/* <!--begin::Label--> */}
															<span className="badge badge-light fs-8">Apr 3</span>
															{/* <!--end::Label--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack py-4">
															{/* <!--begin::Section--> */}
															<div className="d-flex align-items-center me-2">
																{/* <!--begin::Code--> */}
																<span className="w-70px badge badge-light-warning me-4">300 WRN</span>
																{/* <!--end::Code--> */}
																{/* <!--begin::Title--> */}
																<Link to="#" className="text-gray-800 text-hover-primary fw-semibold">API rollback</Link>
																{/* <!--end::Title--> */}
															</div>
															{/* <!--end::Section--> */}
															{/* <!--begin::Label--> */}
															<span className="badge badge-light fs-8">Jun 30</span>
															{/* <!--end::Label--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack py-4">
															{/* <!--begin::Section--> */}
															<div className="d-flex align-items-center me-2">
																{/* <!--begin::Code--> */}
																<span className="w-70px badge badge-light-danger me-4">500 ERR</span>
																{/* <!--end::Code--> */}
																{/* <!--begin::Title--> */}
																<Link to="#" className="text-gray-800 text-hover-primary fw-semibold">Refund process</Link>
																{/* <!--end::Title--> */}
															</div>
															{/* <!--end::Section--> */}
															{/* <!--begin::Label--> */}
															<span className="badge badge-light fs-8">Jul 10</span>
															{/* <!--end::Label--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack py-4">
															{/* <!--begin::Section--> */}
															<div className="d-flex align-items-center me-2">
																{/* <!--begin::Code--> */}
																<span className="w-70px badge badge-light-danger me-4">500 ERR</span>
																{/* <!--end::Code--> */}
																{/* <!--begin::Title--> */}
																<Link to="#" className="text-gray-800 text-hover-primary fw-semibold">Withdrawal process</Link>
																{/* <!--end::Title--> */}
															</div>
															{/* <!--end::Section--> */}
															{/* <!--begin::Label--> */}
															<span className="badge badge-light fs-8">Sep 10</span>
															{/* <!--end::Label--> */}
														</div>
														{/* <!--end::Item--> */}
														{/* <!--begin::Item--> */}
														<div className="d-flex flex-stack py-4">
															{/* <!--begin::Section--> */}
															<div className="d-flex align-items-center me-2">
																{/* <!--begin::Code--> */}
																<span className="w-70px badge badge-light-danger me-4">500 ERR</span>
																{/* <!--end::Code--> */}
																{/* <!--begin::Title--> */}
																<Link to="#" className="text-gray-800 text-hover-primary fw-semibold">Mail tasks</Link>
																{/* <!--end::Title--> */}
															</div>
															{/* <!--end::Section--> */}
															{/* <!--begin::Label--> */}
															<span className="badge badge-light fs-8">Dec 10</span>
															{/* <!--end::Label--> */}
														</div>
														{/* <!--end::Item--> */}
													</div>
													{/* <!--end::Items--> */}
													{/* <!--begin::View more--> */}
													<div className="py-3 text-center border-top">
														<Link to="../../demo34/dist/pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
															<i className="ki-outline ki-arrow-right fs-5"></i></Link>
													</div>
													{/* <!--end::View more--> */}
												</div>
												{/* <!--end::Tab panel--> */}
											</div>
											{/* <!--end::Tab content--> */}
										</div>
									</div>
								</div>
							</div>
							{/* <!--end::Notification--> */}

							{/* <!--Begin::Profile--> */}
							<div className="app-navbar-item ms-5" id="kt_header_user_menu_toggle">
								<div className="my-5 menu-item menu-lg-down-accordion me-0 me-lg-2" id="sixmenu1">
									<div className="dropdown" id="hoverDropdown">
										<div className="cursor-pointer symbol symbol-35px symbol-md-40px" id="profilemenu_1">
											<img className="symbol symbol-circle symbol-35px symbol-md-40px" src={profileDetails.profilePicture} alt="user" />
										</div>
										<div className="dropdown-menu dropdownContent" style={{ width: "275px" }} aria-labelledby="profilemenu_1" >
											<div className="menu-item">
												<div className="menu-content d-flex align-items-center px-3">
													{/* <!--begin::Avatar--> */}
													<div className="symbol symbol-50px me-5">
														<img alt="Logo" src={profileDetails.profilePicture} />
													</div>
													{/* <!--end::Avatar--> */}
													{/* <!--begin::Username--> */}
													<div className="d-flex flex-column">
														<div className="fw-bold d-flex align-items-center fs-5">{profileDetails.firstName} {profileDetails.lastName}</div>
														<Link to="#" className="fw-semibold text-muted text-hover-primary fs-7">{profileDetails.email}</Link>
													</div>
													{/* <!--end::Username--> */}
												</div>
											</div>
											<div className="separator my-2"></div>
											{/* <!--end:Menu item--> */}
											{/* <!--begin:Menu item--> */}
											<div className="menu-item">
												<Link to="../profile/" className="menu-link text-black fw-semibold px-5">My Profile</Link>
											
											</div>
											<div className="dropdown" id="modehover1">
    <div className="cursor-pointer symbol symbol-35px symbol-md-40px" id="mode_div">
        <div className="menu-item" data-kt-menu-trigger="{default: 'hover', lg: 'hover'}" data-kt-menu-placement="left-end" data-kt-menu-offset="-15px, 0">
            <Link to="#" className="menu-link text-black fw-semibold px-5">Mode
                <span className="col-lg-12"></span>
                <span className="col-12"></span>
                <span className="col-12"></span>
				<span className="menu-badge">
					{mode === 'light' && <i className="ki-outline ki-night-day theme-light-show fs-2"></i>}
					{mode === 'dark' && <i className="ki-outline ki-moon theme-dark-show fs-2"></i>}
					{mode === 'system' && <i className="ki-outline ki-screen fs-2"></i>}
					{/* <span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span> */}
				</span>
            </Link>
            {/*begin::Menu*/}
            <div className="dropdown-menu my-lg-n8 mx-lg-n8 d-none dropdownContent menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" id="modeTheme" aria-labelledby="mode_div" data-kt-menu="true" data-kt-element="theme-mode-menu">
                {/*begin::Menu item*/}
                <div className="menu-item px-3 my-0">
                    <Link to="#" className="menu-link px-3 py-2" onClick={() => handleModeChange('light')}>
                        <span className="menu-icon">
                            <i className="ki-outline ki-night-day fs-2"></i>
                        </span>
                        <span className="menu-title">Light</span>
                    </Link>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-3 my-0">
                    <Link to="#" className="menu-link px-3 py-2" onClick={() => handleModeChange('dark')}>
                        <span className="menu-icon">
                            <i className="ki-outline ki-moon fs-2"></i>
                        </span>
                        <span className="menu-title">Dark</span>
                    </Link>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-3 my-0">
                    <Link to="#" className="menu-link px-3 py-2" onClick={() => handleModeChange('system')}>
                        <span className="menu-icon">
                            <i className="ki-outline ki-screen fs-2"></i>
                        </span>
                        <span className="menu-title">System</span>
                    </Link>
                </div>
                {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
        </div>
    </div>
</div>


											{/* <!--end:Menu item--> */}
											{/* <!--begin:Menu item--> */}
											<div className="menu-item">
												<Link to={accountType == "OWNER" ? `../ownerdashboard/` : accountType == "BUILDER" ? '../builderdashboard/' : '../subcontractordashboard/'} className="menu-link text-black fw-semibold px-5">
													<span className="menu-text">My Projects</span>
													<span className="menu-badge">
														<span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
													</span>
												</Link>
											</div>
											{/* <!--end:Menu item--> */}
											{/* <!--begin:Menu item--> */}
											<div className="menu-item">
												<button className="menu-link px-5 border-0 bg-white fw-semibold" onClick={signOut}>Sign Out</button>
											</div>
											{/* <!--end:Menu item--> */}
										</div>
									</div>
								</div>
							</div>
							{/* <!--end::Profile--> */}
						</div>
						{/* <!--end::Navbar--> */}
					</div>
					{/* <!--end::Header wrapper--> */}
				</div>
				{/* <!--end::Header container--> */}
			</div>
			{/* <!--end::Header--> */}

		</>
	)
}
