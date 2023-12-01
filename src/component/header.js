import React from 'react';
import logo from "../assets/images/logoWhite.png"
import sketchy from "../assets/images/1.png"
import avatar from "../assets/images/300-1.jpg"
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";

export default function Header() {

	const toggle_menu_profile = (event) => {
        $("#profilemenu_1").toggleClass('show menu-dropdown')
        $("#profilemenu_2").toggleClass('show showprofilemenu')
    }

	const toggle_notification_menu = (event) => {
        $("#notification_menu1").toggleClass('show menu-dropdown')
        $("#kt_menu_notifications").toggleClass('show showprofilemenu')
    }
    const accountType = window.localStorage.getItem("accountType");


	const navigate = useNavigate();
	const signOut = () => {
		window.localStorage.removeItem('token');
		window.localStorage.removeItem('buildifyUserId');
		window.localStorage.removeItem('email');
		window.localStorage.removeItem('accountType');
		navigate('/');
	}
	return (
		<>
			{/* <!--begin::Header--> */}
			<div id="kt_app_header" className="app-header" style={{ backgroundColor: '#17191E' }}>
				{/* <!--begin::Header container--> */}
				<div className="app-container container-xxl d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
					{/* <!--begin::Header mobile toggle--> */}
					<div className="d-flex align-items-center d-lg-none ms-n2 me-2" title="Show sidebar menu">
						<div className="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_header_menu_toggle">
							<i className="ki-outline ki-abstract-14 fs-2"></i>
						</div>
					</div>
					{/* <!--end::Header mobile toggle--> */}
					{/* <!--begin::Logo--> */}
					<div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0 me-lg-18">
						<Link to={accountType == "OWNER" ? `../ownerdashboard/` : accountType == "BUILDER" ? '../builderdashboard/' : '../subcontractordashboard/'}>
							<img alt="Logo" src={logo} className="h-25px d-sm-none" />
							<img alt="Logo" src={logo} className="h-60px d-none d-sm-block" />
						</Link>
					</div>
					{/* <!--end::Logo--> */}
					{/* <!--begin::Header wrapper--> */}
					<div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1" id="kt_app_header_wrapper">
						{/* <!--begin::Menu wrapper--> */}
						<div className="app-header-menu app-header-mobile-drawer align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="app-header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_header_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="{default: 'append', lg: 'prepend'}" data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}">
							{/* <!--begin::Menu--> */}
							<div className="menu menu-rounded menu-active-bg menu-state-primary menu-column menu-lg-row menu-title-gray-700 menu-icon-gray-500 menu-arrow-gray-500 menu-bullet-gray-500 my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0 " id="kt_app_header_menu" data-kt-menu="true">
								{/* <!--begin:Menu item--> */}
								<div data-kt-menu-placement="bottom-start" className="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2">
									{/* <!--begin:Menu link--> */}
									<Link to={accountType == "OWNER" ? `../ownerdashboard/` : accountType == "BUILDER" ? '../builderdashboard/' : '../subcontractordashboard/'} data-kt-menu-placement="bottom-start" className="menu-link">
										<span className="menu-title">Dashboard</span>
										<span className="menu-arrow d-lg-none"></span>
									</Link>
									{/* <!--end:Menu link--> */}
								</div>
								{/* <!--end:Menu item--> */}
								{/* <!--begin:Menu item--> */}
								{/* <!-- <div data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 me-lg-2 <?php echo ($pageName == 'Manage') ? 'here show' : '' ; ?>"> --> */}
								{/* <!--begin:Menu link--> */}
								{/* <!-- <Link to="../manage/" className="menu-link"> --> */}
								{/* <!-- <span className="menu-title"> Manage </span> --> */}
								{/* <!-- <span className="menu-arrow d-lg-none"></span> --> */}
								{/* <!-- </Link> --> */}
								{/* <!--end:Menu link--> */}
								{/* <!-- </div> --> */}
								{/* <!--end:Menu item--> */}
								{/* <!--begin:Menu item--> */}
								{/* <!--<div data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 me-lg-2 <?php echo ($pageName == 'Schedule') ? 'here show' : '' ; ?>">--> */}
								{/* <!--begin:Menu link--> */}
								{/* <!--<Link to="../builderschedule/" className="menu-link">--> */}
								{/* <!--<span className="menu-title"> Schedule </span>--> */}
								{/* <!--<span className="menu-arrow d-lg-none"></span>--> */}
								{/* <!--</Link>--> */}
								{/* <!--end:Menu link--> */}
								{/* <!--</div>--> */}
								{/* <!--end:Menu item--> */}
								{/* <!--begin:Menu item--> */}
								{/* <!--<div data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 me-lg-2 <?php echo ($pageName == 'Materials & Selection') ? 'here show' : '' ; ?>">--> */}
								{/* <!--begin:Menu link--> */}
								{/* <!--<Link to="../material/" className="menu-link">--> */}
								{/* <!--	<span className="menu-title"> Materials & Selection </span>--> */}
								{/* <!--	<span className="menu-arrow d-lg-none"></span>--> */}
								{/* <!--</Link>
										{/* <!--end:Menu link--> */}
								{/* <!--</div>
									{/* <!--end:Menu item--> */}
								{/* <!--begin:Menu item--> */}
								{/* <!--<div data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 me-lg-2 <?php echo ($pageName == 'Financials') ? 'here show' : '' ; ?>">--> */}
								{/* <!--begin:Menu link--> */}
								{/* <!--<Link to="../financials/" className="menu-link">--> */}
								{/* <!--<span className="menu-title"> Financials </span>--> */}
								{/* <!--<span className="menu-arrow d-lg-none"></span>--> */}
								{/* <!--</Link>
										{/* <!--end:Menu link--> */}
								{/* <!--</div>--> */}
								{/* <!--end:Menu item--> */}
								{/* <!--begin:Menu item--> */}
								{/* <!--<div data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 me-lg-2 <?php echo ($pageName == 'Bids') ? 'here show' : '' ; ?>">--> */}
								{/* <!--begin:Menu link--> */}
								{/* <!--<Link to="../allbids/" className="menu-link">--> */}
								{/* <!--<span className="menu-title"> Bids </span>--> */}
								{/* <!--	<span className="menu-arrow d-lg-none"></span>--> */}
								{/* <!--</Link>--> */}
								{/* <!--end:Menu link--> */}
								{/* <!--</div>--> */}
								{/* <!--end:Menu item--> */}
								{/* <!--begin:Menu item--> */}
								{/* <!--<div data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 me-lg-2 <?php echo ($pageName == 'Sub Contractors') ? 'here show' : '' ; ?>">--> */}
								{/* <!--begin:Menu link--> */}
								{/* <!--<Link to="../subcontractor/" className="menu-link">
										{/* <!--<span className="menu-title">Sub Contractors </span>
										{/* <!--<span className="menu-arrow d-lg-none"></span>
										{/* <!--</Link>
										{/* <!--end:Menu link--> */}
								{/* <!--</div>
									{/* <!--end:Menu item--> */}
							</div>
							{/* <!--end::Menu--> */}
						</div>
						{/* <!--end::Menu wrapper--> */}
						{/* <!--begin::Navbar--> */}
						<div className="app-navbar flex-shrink-0">
							{/* <!--begin::Notifications--> */}
							<div className="app-navbar-item ms-1 ms-lg-5">
								{/* <!--begin::Menu wrapper--> */}
								<div className="btn btn-icon btn-custom btn-active-color-primary w-35px h-35px w-md-40px h-md-40px position-relative">
									<Link to="#"><i className="fa-regular fa-message fs-2"></i></Link>
								</div>
								{/* <!--end::Menu wrapper--> */}
							</div>
							{/* <!--end::Notifications--> */}
							{/* <!--begin::Chat--> */}
							<div className="app-navbar-item ms-1 ms-lg-5" id="notification_menu1" onMouseEnter={toggle_notification_menu} onMouseLeave={toggle_notification_menu}>
								{/* <!--begin::Menu- wrapper--> */}
								<div className="btn btn-icon btn-custom btn-active-color-primary w-35px h-35px w-md-40px h-md-40px fs-2" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom">
								<i className="ki-outline ki-notification-on fs-1"></i>
								</div>
								{/* <!--begin::Menu--> */}
								<div className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" data-kt-menu="true" id="kt_menu_notifications">
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
								{/* <!--end::Menu--> */}
								{/* <!--end::Menu wrapper--> */}
							</div>

							{/* <!--end::Chat--> */}
							{/* <!--begin::User menu--> */}
							<div className="app-navbar-item ms-5" id="kt_header_user_menu_toggle" onMouseEnter={toggle_menu_profile} onMouseLeave={toggle_menu_profile}>
								{/* <!--begin::Menu wrapper--> */}
								<div className="cursor-pointer symbol symbol-35px symbol-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end" id="profilemenu_1">
									<img className="symbol symbol-circle symbol-35px symbol-md-40px" src={avatar} alt="user" />
								</div>
								{/* <!--begin::User account menu--> */}
								<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true" id="profilemenu_2">
									{/* <!--begin::Menu item--> */}
									<div className="menu-item px-3">
										<div className="menu-content d-flex align-items-center px-3">
											{/* <!--begin::Avatar--> */}
											<div className="symbol symbol-50px me-5">
												<img alt="Logo" src={avatar} />
											</div>
											{/* <!--end::Avatar--> */}
											{/* <!--begin::Username--> */}
											<div className="d-flex flex-column">
												<div className="fw-bold d-flex align-items-center fs-5">Max Smith
													<span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span></div>
												<Link to="#" className="fw-semibold text-muted text-hover-primary fs-7">max@kt.com</Link>
											</div>
											{/* <!--end::Username--> */}
										</div>
									</div>
									{/* <!--end::Menu item--> */}
									{/* <!--begin::Menu separator--> */}
									<div className="separator my-2"></div>
									{/* <!--end::Menu separator--> */}
									{/* <!--begin::Menu item--> */}
									<div className="menu-item px-5">
										<Link to="../profile/" className="menu-link px-5">My Profile</Link>
									</div>
									{/* <!--end::Menu item--> */}
									{/* <!--begin::Menu item--> */}
									<div className="menu-item px-5">
										<Link to={accountType == "OWNER" ? `../ownerdashboard/` : accountType == "BUILDER" ? '../builderdashboard/' : '../subcontractordashboard/'} className="menu-link px-5">
											<span className="menu-text">My Projects</span>
											<span className="menu-badge">
												<span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
											</span>
										</Link>
									</div>
									{/* <!--end::Menu item--> */}
									{/* <!--begin::Menu item--> */}
									<div className="menu-item px-5">
										<button className="menu-link px-5 border-0 bg-white fw-semibold" onClick={signOut}>Sign Out</button>
										{/* <Link to="../login/" className="menu-link px-5">Sign Out</Link> */}
									</div>
									{/* <!--end::Menu item--> */}
								</div>
								{/* <!--end::User account menu--> */}
								{/* <!--end::Menu wrapper--> */}
							</div>
							{/* <!--end::User menu--> */}
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
