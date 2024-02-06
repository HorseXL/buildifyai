import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../pages/layout';

function ViewCompanySettings() {
    document.title = 'Buildify AI | Company Settings';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const [isFilterOpen, setProjectManagementOpen] = useState(false);

    const toggleFilterOpen = () => {
      setProjectManagementOpen(!isFilterOpen);
    };

    return (
        <>
            {/* begin::Content wrapper */}
            <div className="d-flex flex-column flex-column-fluid">
                {/* begin::Content */}
                <div id="kt_app_content" className="app-content flex-column-fluid">
                

                <div className="card mb-5 mb-xl-10">
										{/* <!--begin::Card header--> */}
										<div className="card-header card-header-stretch pb-0">
											{/* <!--begin::Title--> */}
											<div className="card-title">
												<h3 className="m-0">Company Settings</h3>
											</div>
											{/* <!--end::Title--> */}
											
										</div>
										{/* <!--end::Card header--> */}
										{/* <!--begin::Tab content--> */}
										<div id="kt_billing_payment_tab_content" className="card-body tab-content">
											{/* <!--begin::Tab panel--> */}
											<div id="kt_billing_creditcard" className="tab-pane fade show active" role="tabpanel">
												{/* <!--begin::Row--> */}
												<div className="row gx-9 gy-6">
													{/* <!--begin::Col--> */}
													<div className="col-xl-4" data-kt-billing-element="card">
														{/* <!--begin::Card--> */}
														<div className="card border border-primary border-dashed h-xl-100 p-6">
															{/* <!--begin::Info--> */}
                                                            <div>
                                                                <div className="fs-4 fw-bold mb-5">Company
                                                            </div>
															<div className="py-2">
																{/* <!--begin::Owner--> */}
																</div>
																{/* <!--end::Owner--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-circle-star text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Company Logo</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-info text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Company Information</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-subscription-alt text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Subscriptions</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-briefcase-blank text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Jobs</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
															</div>
															{/* <!--end::Info--> */}
														</div>
														{/* <!--end::Card--> */}
													</div>
													{/* <!--end::Col--> */}
													{/* <!--begin::Col--> */}
													<div className="col-xl-4" data-kt-billing-element="card">
														{/* <!--begin::Card--> */}
														<div className="card border border-primary border-dashed h-xl-100 p-6">
															{/* <!--begin::Info--> */}
                                                            <div>
                                                                <div className="fs-4 fw-bold mb-5">Project Managemnent
                                                            </div>
															<div className="py-2">
																{/* <!--begin::Owner--> */}
																</div>
																{/* <!--end::Owner--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-calendar-lines text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Schedule</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-notebook-alt text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Daily Logs</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-to-do text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">To-Do's</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-shuffle text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Change Orders</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-clock-three text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Time Clock</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-umbrella text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Risk Insurance</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
															</div>
															{/* <!--end::Info--> */}
														</div>
														{/* <!--end::Card--> */}
													</div>
													{/* <!--end::Col--> */}
													{/* <!--begin::Col--> */}
													<div className="col-xl-4" data-kt-billing-element="card">
														{/* <!--begin::Card--> */}
														<div className="card border border-primary border-dashed h-xl-100 p-6">
															{/* <!--begin::Info--> */}
                                                            <div>
                                                                <div className="fs-4 fw-bold mb-5">Messaging
                                                            </div>
															<div className="py-2">
																{/* <!--begin::Owner--> */}
																</div>
																{/* <!--end::Owner--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-comment text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Comments & Messages</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-memo-pad text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link className="fs-5 fw-bold">Surveys</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																
															</div>
															{/* <!--end::Info--> */}
														</div>
														{/* <!--end::Card--> */}
													</div>
													{/* <!--end::Col--> */}
													{/* <!--begin::Col--> */}
													<div className="col-xl-4" data-kt-billing-element="card">
														{/* <!--begin::Card--> */}
														<div className="card border border-primary border-dashed h-xl-100 p-6">
															{/* <!--begin::Info--> */}
                                                            <div>
                                                                <div className="fs-4 fw-bold mb-5">Directory
                                                            </div>
															<div className="py-2">
																{/* <!--begin::Owner--> */}
																</div>
																{/* <!--end::Owner--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-users text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Role Management</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-portrait text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Customer Contacts</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-hammer text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Subs/Vendors</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																
															</div>
															{/* <!--end::Info--> */}
														</div>
														{/* <!--end::Card--> */}
													</div>
													{/* <!--end::Col--> */}
													{/* <!--begin::Col--> */}
													<div className="col-xl-4" data-kt-billing-element="card">
														{/* <!--begin::Card--> */}
														<div className="card border border-primary border-dashed h-xl-100 p-6">
															{/* <!--begin::Info--> */}
                                                            <div>
                                                                <div className="fs-4 fw-bold mb-5">Sales
                                                            </div>
															<div className="py-2">
																{/* <!--begin::Owner--> */}
																</div>
																{/* <!--end::Owner--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-category text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Sales</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
															</div>
															{/* <!--end::Info--> */}
														</div>
														{/* <!--end::Card--> */}
													</div>
													{/* <!--end::Col--> */}
													{/* <!--begin::Col--> */}
													<div className="col-xl-4" data-kt-billing-element="card">
														{/* <!--begin::Card--> */}
														<div className="card border border-primary border-dashed h-xl-100 p-6">
															{/* <!--begin::Info--> */}
                                                            <div>
                                                                <div className="fs-4 fw-bold mb-5">Files
                                                            </div>
															<div className="py-2">
																{/* <!--begin::Owner--> */}
																</div>
																{/* <!--end::Owner--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-file text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Files</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
															</div>
															{/* <!--end::Info--> */}
														</div>
														{/* <!--end::Card--> */}
													</div>
													{/* <!--end::Col--> */}
													{/* <!--begin::Col--> */}
													<div className="col-xl-4" data-kt-billing-element="card">
														{/* <!--begin::Card--> */}
														<div className="card border border-primary border-dashed h-xl-100 p-6">
															{/* <!--begin::Info--> */}
                                                            <div>
                                                                <div className="fs-4 fw-bold mb-5">Financials
                                                            </div>
															<div className="py-2">
																{/* <!--begin::Owner--> */}
																</div>
																{/* <!--end::Owner--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-tags text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Cost Code</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-catalog-magazine text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Catalogs</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-auction text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Bids</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-calculator-bill text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Estimates</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-receipt text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Bills / POs / Budget</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-cash-register text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Owner Invoices</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-credit-card text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Online Payments</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-tax text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Taxes</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
															</div>
															{/* <!--end::Info--> */}
														</div>
														{/* <!--end::Card--> */}
													</div>
													{/* <!--end::Col--> */}
													{/* <!--begin::Col--> */}
													<div className="col-xl-4" data-kt-billing-element="card">
														{/* <!--begin::Card--> */}
														<div className="card border border-primary border-dashed h-xl-100 p-6">
															{/* <!--begin::Info--> */}
                                                            <div>
                                                                <div className="fs-4 fw-bold mb-5">Integrations
                                                            </div>
															<div className="py-2">
																{/* <!--begin::Owner--> */}
																</div>
																{/* <!--end::Owner--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-house-window text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">The Home Depot</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fi fi-rr-bank text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">Accounting</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																{/* <!--begin::Wrapper--> */}
																<div className="d-flex align-items-center bg-light">
																	{/* <!--begin::Icon--> */}
																	{/* <img src="assets/media/svg/card-logos/visa.svg" alt="" className="me-4" /> */}
																	<span className="mx-2">
																		<i class="fa-brands fa-hubspot text-primary fs-3"></i>
																	</span>
																	{/* <!--end::Icon--> */}
																	{/* <!--begin::Details--> */}
																	<div>
																		<Link to="#" className="fs-5 fw-bold">HubSpot</Link>
																	</div>
																	{/* <!--end::Details--> */}
																</div>
                                                                <div className='separator separator-solid my-2'></div>
																{/* <!--end::Wrapper--> */}
																
															</div>
															{/* <!--end::Info--> */}
														</div>
														{/* <!--end::Card--> */}
													</div>
													{/* <!--end::Col--> */}
													
													
												</div>
												{/* <!--end::Row--> */}
											</div>
											{/* <!--end::Tab panel--> */}
											{/* <!--begin::Tab panel--> */}
											<div id="kt_billing_paypal" className="tab-pane fade" role="tabpanel" aria-labelledby="kt_billing_paypal_tab">
												{/* <!--begin::Title--> */}
												<h3 className="mb-5">My Paypal</h3>
												{/* <!--end::Title--> */}
												{/* <!--begin::Description--> */}
												<div className="text-gray-600 fs-6 fw-semibold mb-5">To use PayPal as your payment method, you will need to make pre-payments each month before your bill is due.</div>
												{/* <!--end::Description--> */}
												{/* <!--begin::Form--> */}
												<form className="form">
													{/* <!--begin::Input group--> */}
													<div className="mb-7 mw-350px">
														<select name="timezone" data-control="select2" data-placeholder="Select an option" data-hide-search="true" className="form-select form-select-solid form-select-lg fw-semibold fs-6 text-gray-700">
															<option>Select an option</option>
															<option value="25">US $25.00</option>
															<option value="50">US $50.00</option>
															<option value="100">US $100.00</option>
															<option value="125">US $125.00</option>
															<option value="150">US $150.00</option>
														</select>
													</div>
													{/* <!--end::Input group--> */}
													<button type="submit" className="btn btn-primary">Pay with Paypal</button>
												</form>
												{/* <!--end::Form--> */}
											</div>
											{/* <!--end::Tab panel--> */}
										</div>
										{/* <!--end::Tab content--> */}
									</div>
            
                </div>
                {/* end::Content */}
            </div>
            {/* end::Content wrapper */}
        </>
    )
}
function CompanySettings() {
    return <Layout data={<ViewCompanySettings />} />
}
export default CompanySettings;