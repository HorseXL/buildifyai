import React, { useState } from 'react'
import Layout from '../pages/layout';
import a300_1 from '../assets/images/Avatar/300-1.jpg'
import a300_2 from '../assets/images/Avatar/300-2.jpg'
import a300_14 from '../assets/images/Avatar/300-14.jpg'
import a300_6 from '../assets/images/Avatar/300-6.jpg'
import a300_5 from '../assets/images/Avatar/300-5.jpg'
import a300_10 from '../assets/images/Avatar/300-10.jpg'
import a300_9 from '../assets/images/Avatar/300-9.jpg'
import blogo from '../assets/images/b-logo.jpg'
import sketchy from '../assets/images/4.png'
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { logDOM } from '@testing-library/react';
import $ from "jquery";


function SubcontractorDate() {
    document.title = 'Buildify AI | Sub Contractor';
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
                


            {/* <!--begin::Row--> */}
            <div className="card mb-5 mb-xl-8">
                {/* <!--begin::Card body--> */}
                <div className="card-body">
                    {/* begin::Toolbar */}
                    <div className="d-flex flex-wrap flex-stack pb-7 mt-5 row col-lg-12">
                        {/* begin::Title */}
                        <div className="d-flex flex-wrap align-items-center my-1">
                            <h3 className="fw-bold me-5 my-1">Sub Contractors(5)</h3>
                            {/* begin::Search */}
                            <div className="d-flex  align-items-center position-relative my-1">
                                <i className="ki-outline ki-magnifier fs-3 position-absolute" style={{marginLeft:"10px"}}></i>
                                <input type="text" data-kt-user-table-filter="search" className="form-control form-control-solid w-250px ps-13" placeholder="Search" />
                            </div>
                            {/* <!--begin::Menu 1--> */}
                            {/* <!--begin::Filter--> */}
													<div className="col-lg-6"></div>


                                        <div className="menu-item menu-lg-down-accordion me-0 mr-0">
                                            <div className="dropdown">
                                               
                                                    <button type="button" className="btn btnLightPrimary" onClick={toggleFilterOpen}>
													    <i className="ki-outline ki-filter fs-2"></i>Filter
                                                        <i className={`fa-solid ${isFilterOpen ? 'fa-angle-up' : 'fa-angle-down'} ms-4`} id="projectManagmentArrow"></i>
                                                        </button>
                                               
                                                <div className={`${isFilterOpen ? 'd-block' : 'd-none'} filterClass`} id="projectManagementSub">
													{/* <div className="menu-item">
														<Link className="menu-link" style={{ color: '#5e6278' }} to="">
															<span className="menu-icon">
																<i className="ki-outline ki-calendar fs-2"></i>
															</span>
															<span className="menu-title">Schedule</span>
														</Link>
													</div> */}
													<div className="menu bg-white row col-lg-12">
														{/* <!--begin::Header--> */}
														<div className="px-7 py-5 text-center">
															<div className="fs-5 text-dark fw-bold">Filter Options</div>
														</div>
														{/* <!--end::Header--> */}
														{/* <!--begin::Separator--> */}
														<div className="separator border-gray-200"></div>
														{/* <!--end::Separator--> */}
														{/* <!--begin::Content--> */}
														<div className="px-7 py-5" data-kt-user-table-filter="form">
															{/* <!--begin::Input group--> */}
															<div className="mb-10">
																<label className="form-label fs-6 fw-semibold">Trades:</label>
																<select className="form-select form-select-solid fw-bold" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-kt-user-table-filter="role" data-hide-search="true">
																	<option>Please Select</option>
																	<option value="Administrator">Home Renovation</option>
																	<option value="Administrator">Residential Building</option>
																</select>
															</div>
															{/* <!--end::Input group--> */}
															{/* <!--begin::Input group--> */}
															<div className="mb-10">
																<label className="form-label fs-6 fw-semibold">Area Worked:</label>
																<select className="form-select form-select-solid fw-bold" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-kt-user-table-filter="two-step" data-hide-search="true">
																	<option>Please Select</option>
																	<option value="Enabled">USA</option>
																</select>
															</div>
															<div className="mb-10">
																<label className="form-label fs-6 fw-semibold">Internal Reviews:</label>
																<select className="form-select form-select-solid fw-bold" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-kt-user-table-filter="two-step" data-hide-search="true">
																	<option>Please Select</option>
																	<option value="Enabled">1</option>
																	<option value="Enabled">2</option>
																	<option value="Enabled">3</option>
																	<option value="Enabled">4</option>
																	<option value="Enabled">5</option>
																</select>
															</div>
															<div className="mb-10">
																<label className="form-label fs-6 fw-semibold">Price($):</label><br/>
																<input type="range" className='col-lg-12' />
															</div>
															{/* <!--end::Input group--> */}
															{/* <!--begin::Actions--> */}
															<div className="d-flex justify-content-end">
																<button type="reset" className="btn btn-light btn-active-light-primary fw-semibold me-2 px-6" onClick={()=>setProjectManagementOpen(false)} data-kt-menu-dismiss="true" data-kt-user-table-filter="reset">Reset</button>
																<button type="submit" className={`btn btnLightPrimary fw-semibold px-6`} onClick={()=>setProjectManagementOpen(false)} data-kt-menu-dismiss="true" data-kt-user-table-filter="filter">Apply</button>
															</div>
															{/* <!--end::Actions--> */}
														</div>
														{/* <!--end::Content--> */}
													</div>
												</div>
											</div>
										</div>
													{/* <!--end::Menu 1--> */}
                            {/* end::Search */}
                        </div>
                        {/* end::Title */}
                        {/* begin::Controls */}
                        {/*  <div className="d-flex flex-wrap my-1">  */}
                            {/* begin::Tab nav */}
                            {/*  <ul className="nav nav-pills me-6 mb-2 mb-sm-0">
                                <li className="nav-item m-0">
                                    <Link className="btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary me-3 active" data-bs-toggle="tab" to="#kt_project_users_card_pane">
                                        <i className="ki-outline ki-element-plus fs-2"></i>
                                    </Link>
                                </li>
                            </ul>  */}
                            {/* end::Tab nav */}
                            {/* begin::Actions */}
                            {/*  <div className="d-flex my-0">  */}
                                {/* begin::Select */}
                                {/*  <select name="status" data-control="select2" data-hide-search="true" data-placeholder="Filter" className="form-select form-select-sm border-body bg-body w-150px me-5">
                                    <option value="1">Recently Updated</option>
                                    <option value="2">Last Month</option>
                                    <option value="3">Last Quarter</option>
                                    <option value="4">Last Year</option>
                                </select>  */}
                                {/* end::Select */}
                                {/* begin::Select */}
                                {/*  <select name="status" data-control="select2" data-hide-search="true" data-placeholder="Export" className="form-select form-select-sm border-body bg-body w-100px">
                                    <option value="1">Excel</option>
                                    <option value="1">PDF</option>
                                    <option value="2">Print</option>
                                </select>  */}
                                {/* end::Select */}
                                {/*  </div>  */}
                            {/* end::Actions */}
                            {/*  </div>  */}
                        {/* end::Controls */}
                    </div>
                    {/* end::Toolbar */}
                    {/* begin::Tab Content */}
                    <div className='separator separator-dashed mb-5'></div>

                    <div className="tab-content">
                        {/* begin::Tab pane */}
                        <div id="kt_project_users_card_pane" className="tab-pane fade show active">
                            {/* begin::Row */}


<>
                                        <div className='row col-lg-12 p-1'>
                                            <div class="card card-flush mb-0 col-lg mx-2 shadow-sm" data-kt-sticky="true" data-kt-sticky-name="subscription-summary" data-kt-sticky-offset="{default: false, lg: '200px'}" data-kt-sticky-width="{lg: '250px', xl: '300px'}" data-kt-sticky-left="auto" data-kt-sticky-top="150px" data-kt-sticky-animation="false" data-kt-sticky-zindex="95">
												{/* <!--begin::Card header--> */}
												<div class="card-header">
													{/* <!--begin::Card title--> */}
													<div class="card-title">
														<h2>Sean Bean</h2>
													</div>
													{/* <!--end::Card title--> */}
													{/* <!--begin::Card toolbar--> */}
													
													{/* <!--end::Card toolbar--> */}
												</div>
												{/* <!--end::Card header--> */}
												{/* <!--begin::Card body--> */}
												<div class="card-body pt-0 fs-6">
													{/* <!--begin::Section--> */}
													<div class="mb-7">
														{/* <!--begin::Details--> */}
														<div class="d-flex align-items-center">
															{/* <!--begin::Avatar--> */}
															<div class="symbol symbol-60px symbol-circle me-3">
																<img alt="Pic" src={a300_2}  />
															</div>
															{/* <!--end::Avatar--> */}
															{/* <!--begin::Info--> */}
															<div class="d-flex flex-column">
																{/* <!--begin::Name--> */}
																{/* <Link to="" class="fs-4 fw-bold text-gray-900 text-hover-primary me-2">Sean Bean</Link> */}
																{/* <!--end::Name--> */}
																{/* <!--begin::Email--> */}
																<Link to="" class="fw-semibold text-gray-600">sean@dellito.com</Link>
																<Link to="" class="fw text-gray-500">Plumber</Link>
                                                                <div className="">
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                </div>
																{/* <!--end::Email--> */}
															</div>
															{/* <!--end::Info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="mb-5">
														{/* <!--begin::Title--> */}
														<h5 class="mb-3">Internal Reviews</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
                                                        <div className="">
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                        </div>
														</div>
														{/* <!--end::Details--> */}
													</div>
													<div class="separator separator-dashed mb-5"></div>
													<div class="mb-5">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Price</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0 fw-bold text-gray-700">
                                                            $5000
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="mb-7">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Location</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
															{/* <!--begin::Card info--> */}
															<div class="fw-semibold text-gray-600 d-flex align-items-center">Nevada, USA
															<img src="assets/media/svg/card-logos/mastercard.svg" class="w-35px ms-2" alt=""/></div>
															{/* <!--end::Card info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													<div class="separator separator-dashed mb-5"></div>
													<div class="mb-7">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Status</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
															{/* <!--begin::Card info--> */}
															<div class="fw-semibold text-gray-600 d-flex align-items-center">Accepting Job
															<img src="assets/media/svg/card-logos/mastercard.svg" class="w-35px ms-2" alt=""/></div>
															{/* <!--end::Card info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="row col-lg-12 d-flex justify-content-center">
                                                        <div className='p-2 col-lg-6'>
                                                            <Link to="" class="btn btnLightPrimary p-4">
                                                                    <i class="ki-outline ki-message-text-2 fs-2"></i>Chat</Link>
														</div>
                                                        <div className='p-2 col-lg-6'>
                                                            <Link to="" class="btn btnLightPrimary p-4">
                                                                    <i class="fa-regular fa-file-pdf fs-1"></i>Pdf</Link>
														</div>
													</div>
                                                    <button type="button" className="menu-item col-lg-12 btn btnButton">
                                                                More Information
                                                    </button>
													{/* <!--end::Section--> */}
													{/* <!--begin::Actions--> */}
													{/* <div class="mb-0">
														<Link to="../../demo34/dist/apps/subscriptions/add.html" class="btn btn-primary" id="kt_subscriptions_create_button">Edit Subscription</Link>
													</div> */}
													{/* <!--end::Actions--> */}
												</div>
												{/* <!--end::Card body--> */}
											</div>
                                            <div class="card card-flush mb-0 col-lg mx-2 shadow-sm" data-kt-sticky="true" data-kt-sticky-name="subscription-summary" data-kt-sticky-offset="{default: false, lg: '200px'}" data-kt-sticky-width="{lg: '250px', xl: '300px'}" data-kt-sticky-left="auto" data-kt-sticky-top="150px" data-kt-sticky-animation="false" data-kt-sticky-zindex="95">
												{/* <!--begin::Card header--> */}
												<div class="card-header">
													{/* <!--begin::Card title--> */}
													<div class="card-title">
														<h2>Olivia Wild</h2>
													</div>
													{/* <!--end::Card title--> */}
												</div>
												{/* <!--end::Card header--> */}
												{/* <!--begin::Card body--> */}
												<div class="card-body pt-0 fs-6">
													{/* <!--begin::Section--> */}
													<div class="mb-7">
														{/* <!--begin::Details--> */}
														<div class="d-flex align-items-center">
															{/* <!--begin::Avatar--> */}
															<div class="symbol symbol-60px symbol-circle me-3">
																<img alt="Pic" src={a300_1}  />
															</div>
															{/* <!--end::Avatar--> */}
															{/* <!--begin::Info--> */}
															<div class="d-flex flex-column">
																{/* <!--begin::Name--> */}
																{/* <Link to="" class="fs-4 fw-bold text-gray-900 text-hover-primary me-2">Sean Bean</Link> */}
																{/* <!--end::Name--> */}
																{/* <!--begin::Email--> */}
																<Link to="" class="fw-semibold text-gray-600 text-hover-primary">olivia@wild.com</Link>
																<Link to="" class="fw text-gray-500 text-hover-primary">Mechanical</Link>
                                                                <div className="">
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    {/* <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i> */}
                                                                </div>
																{/* <!--end::Email--> */}
															</div>
															{/* <!--end::Info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="mb-5">
														{/* <!--begin::Title--> */}
														<h5 class="mb-3">Internal Reviews</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
                                                        <div className="">
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            {/* <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i> */}
                                                        </div>
														</div>
														{/* <!--end::Details--> */}
													</div>
													<div class="separator separator-dashed mb-5"></div>
													<div class="mb-5">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Price</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0 fw-bold text-gray-700">
                                                            $36200
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="mb-7">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Location</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
															{/* <!--begin::Card info--> */}
															<div class="fw-semibold text-gray-600 d-flex align-items-center">Nevada, USA
															<img src="assets/media/svg/card-logos/mastercard.svg" class="w-35px ms-2" alt=""/></div>
															{/* <!--end::Card info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													<div class="separator separator-dashed mb-5"></div>
													<div class="mb-7">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Status</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
															{/* <!--begin::Card info--> */}
															<div class="fw-semibold text-gray-600 d-flex align-items-center">Accepting Job
															<img src="assets/media/svg/card-logos/mastercard.svg" class="w-35px ms-2" alt=""/></div>
															{/* <!--end::Card info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="row col-lg-12 d-flex justify-content-center">
                                                        <div className='p-2 col'>
                                                            <Link to="" class="btn btnLightPrimary p-4">
                                                                    <i class="ki-outline ki-message-text-2 fs-2"></i>Chat</Link>
                                                            </div>
                                                        <div className='p-2 col-lg-6'>
                                                            <Link to="" class="btn btnLightPrimary p-4">
                                                                    <i class="fa-regular fa-file-pdf fs-1"></i>Pdf</Link>
														</div>
													</div>
                                                    <button type="button" className="menu-item col-lg-12 btn btnButton">
                                                                More Information
                                                    </button>
													{/* <!--end::Section--> */}
													{/* <!--begin::Actions--> */}
													{/* <div class="mb-0">
														<Link to="../../demo34/dist/apps/subscriptions/add.html" class="btn btn-primary" id="kt_subscriptions_create_button">Edit Subscription</Link>
													</div> */}
													{/* <!--end::Actions--> */}
												</div>
												{/* <!--end::Card body--> */}
											</div>
                                            <div class="card card-flush mb-0 col-lg mx-2 shadow-sm" data-kt-sticky="true" data-kt-sticky-name="subscription-summary" data-kt-sticky-offset="{default: false, lg: '200px'}" data-kt-sticky-width="{lg: '250px', xl: '300px'}" data-kt-sticky-left="auto" data-kt-sticky-top="150px" data-kt-sticky-animation="false" data-kt-sticky-zindex="95">
												{/* <!--begin::Card header--> */}
												<div class="card-header">
													{/* <!--begin::Card title--> */}
													<div class="card-title">
														<h2>Peter Marcus</h2>
													</div>
													{/* <!--end::Card title--> */}
												</div>
												{/* <!--end::Card header--> */}
												{/* <!--begin::Card body--> */}
												<div class="card-body pt-0 fs-6">
													{/* <!--begin::Section--> */}
													<div class="mb-7">
														{/* <!--begin::Details--> */}
														<div class="d-flex align-items-center">
															{/* <!--begin::Avatar--> */}
															<div class="symbol symbol-60px symbol-circle me-3">
																<img alt="Pic" src={a300_9}  />
															</div>
															{/* <!--end::Avatar--> */}
															{/* <!--begin::Info--> */}
															<div class="d-flex flex-column">
																{/* <!--begin::Name--> */}
																{/* <Link to="" class="fs-4 fw-bold text-gray-900 text-hover-primary me-2">Sean Bean</Link> */}
																{/* <!--end::Name--> */}
																{/* <!--begin::Email--> */}
																<Link to="" class="fw-semibold text-gray-600 text-hover-primary">peter@Marcus.com</Link>
																<Link to="" class="fw text-gray-500 text-hover-primary">Electrician</Link>
                                                                <div className="">
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                </div>
																{/* <!--end::Email--> */}
															</div>
															{/* <!--end::Info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="mb-5">
														{/* <!--begin::Title--> */}
														<h5 class="mb-3">Internal Reviews</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
                                                        <div className="">
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                        </div>
														</div>
														{/* <!--end::Details--> */}
													</div>
													<div class="separator separator-dashed mb-5"></div>
													<div class="mb-5">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Price</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0 fw-bold text-gray-700">
                                                            $15000
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="mb-7">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Location</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
															{/* <!--begin::Card info--> */}
															<div class="fw-semibold text-gray-600 d-flex align-items-center">Nevada, USA
															<img src="assets/media/svg/card-logos/mastercard.svg" class="w-35px ms-2" alt=""/></div>
															{/* <!--end::Card info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													<div class="separator separator-dashed mb-5"></div>
													<div class="mb-7">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Status</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
															{/* <!--begin::Card info--> */}
															<div class="fw-semibold text-gray-600 d-flex align-items-center">Accepting Job
															<img src="assets/media/svg/card-logos/mastercard.svg" class="w-35px ms-2" alt=""/></div>
															{/* <!--end::Card info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="row col-lg-12 d-flex justify-content-center">
                                                        <div className='p-2 col'>
                                                            <Link to="" class="btn btnLightPrimary p-4">
                                                                    <i class="ki-outline ki-message-text-2 fs-2"></i>Chat</Link>
                                                            </div>
                                                        <div className='p-2 col-lg-6'>
                                                            <Link to="" class="btn btnLightPrimary p-4">
                                                                    <i class="fa-regular fa-file-pdf fs-1"></i>Pdf</Link>
														</div>
													</div>
                                                    <button type="button" className="menu-item col-lg-12 btn btnButton">
                                                                More Information
                                                    </button>
													{/* <!--end::Section--> */}
													{/* <!--begin::Actions--> */}
													{/* <div class="mb-0">
														<Link to="../../demo34/dist/apps/subscriptions/add.html" class="btn btn-primary" id="kt_subscriptions_create_button">Edit Subscription</Link>
													</div> */}
													{/* <!--end::Actions--> */}
												</div>
												{/* <!--end::Card body--> */}
											</div>
                                            <div class="card card-flush mb-0 col-lg mx-2 shadow-sm" data-kt-sticky="true" data-kt-sticky-name="subscription-summary" data-kt-sticky-offset="{default: false, lg: '200px'}" data-kt-sticky-width="{lg: '250px', xl: '300px'}" data-kt-sticky-left="auto" data-kt-sticky-top="150px" data-kt-sticky-animation="false" data-kt-sticky-zindex="95">
												{/* <!--begin::Card header--> */}
												<div class="card-header">
													{/* <!--begin::Card title--> */}
													<div class="card-title">
														<h2>Adam Williams</h2>
													</div>
													{/* <!--end::Card title--> */}
												</div>
												{/* <!--end::Card header--> */}
												{/* <!--begin::Card body--> */}
												<div class="card-body pt-0 fs-6">
													{/* <!--begin::Section--> */}
													<div class="mb-7">
														{/* <!--begin::Details--> */}
														<div class="d-flex align-items-center">
															{/* <!--begin::Avatar--> */}
															<div class="symbol symbol-60px symbol-circle me-3">
																<img alt="Pic" src={a300_5}  />
															</div>
															{/* <!--end::Avatar--> */}
															{/* <!--begin::Info--> */}
															<div class="d-flex flex-column">
																{/* <!--begin::Name--> */}
																{/* <Link to="" class="fs-4 fw-bold text-gray-900 text-hover-primary me-2">Sean Bean</Link> */}
																{/* <!--end::Name--> */}
																{/* <!--begin::Email--> */}
																<Link to="" class="fw-semibold text-gray-600 text-hover-primary">adam@williams.com</Link>
																<Link to="" class="fw text-gray-500 text-hover-primary">Plumber</Link>
                                                                <div className="">
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                </div>
																{/* <!--end::Email--> */}
															</div>
															{/* <!--end::Info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="mb-5">
														{/* <!--begin::Title--> */}
														<h5 class="mb-3">Internal Reviews</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
                                                        <div className="">
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                        </div>
														</div>
														{/* <!--end::Details--> */}
													</div>
													<div class="separator separator-dashed mb-5"></div>
													<div class="mb-5">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Price</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0 fw-bold text-gray-700">
                                                            $12000
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="mb-7">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Location</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
															{/* <!--begin::Card info--> */}
															<div class="fw-semibold text-gray-600 d-flex align-items-center">Nevada, USA
															<img src="assets/media/svg/card-logos/mastercard.svg" class="w-35px ms-2" alt=""/></div>
															{/* <!--end::Card info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													<div class="separator separator-dashed mb-5"></div>
													<div class="mb-7">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Status</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
															{/* <!--begin::Card info--> */}
															<div class="fw-semibold text-gray-600 d-flex align-items-center">Accepting Job
															<img src="assets/media/svg/card-logos/mastercard.svg" class="w-35px ms-2" alt=""/></div>
															{/* <!--end::Card info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="row col-lg-12 d-flex justify-content-center">
                                                        <div className='p-2 col'>
                                                            <Link to="" class="btn btnLightPrimary p-4">
                                                                    <i class="ki-outline ki-message-text-2 fs-2"></i>Chat</Link>
                                                            </div>
                                                        <div className='p-2 col-lg-6'>
                                                            <Link to="" class="btn btnLightPrimary p-4">
                                                                    <i class="fa-regular fa-file-pdf fs-1"></i>Pdf</Link>
														</div>
													</div>
                                                    <button type="button" className="menu-item col-lg-12 btn btnButton">
                                                                More Information
                                                    </button>
													{/* <!--end::Section--> */}
													{/* <!--begin::Actions--> */}
													{/* <div class="mb-0">
														<Link to="../../demo34/dist/apps/subscriptions/add.html" class="btn btn-primary" id="kt_subscriptions_create_button">Edit Subscription</Link>
													</div> */}
													{/* <!--end::Actions--> */}
												</div>
												{/* <!--end::Card body--> */}
											</div>
                                        </div>
                                        <div className='row col-lg-12 p-1'>
                                            <div class="card card-flush mb-0 col-lg mx-2 shadow-sm" data-kt-sticky="true" data-kt-sticky-name="subscription-summary" data-kt-sticky-offset="{default: false, lg: '200px'}" data-kt-sticky-width="{lg: '250px', xl: '300px'}" data-kt-sticky-left="auto" data-kt-sticky-top="150px" data-kt-sticky-animation="false" data-kt-sticky-zindex="95">
												{/* <!--begin::Card header--> */}
												<div class="card-header">
													{/* <!--begin::Card title--> */}
													<div class="card-title">
														<h2>Sean Bean</h2>
													</div>
													{/* <!--end::Card title--> */}
												</div>
												{/* <!--end::Card header--> */}
												{/* <!--begin::Card body--> */}
												<div class="card-body pt-0 fs-6">
													{/* <!--begin::Section--> */}
													<div class="mb-7">
														{/* <!--begin::Details--> */}
														<div class="d-flex align-items-center">
															{/* <!--begin::Avatar--> */}
															<div class="symbol symbol-60px symbol-circle me-3">
																<img alt="Pic" src={a300_2}  />
															</div>
															{/* <!--end::Avatar--> */}
															{/* <!--begin::Info--> */}
															<div class="d-flex flex-column">
																{/* <!--begin::Name--> */}
																{/* <Link to="" class="fs-4 fw-bold text-gray-900 text-hover-primary me-2">Sean Bean</Link> */}
																{/* <!--end::Name--> */}
																{/* <!--begin::Email--> */}
																<Link to="" class="fw-semibold text-gray-600 text-hover-primary">sean@dellito.com</Link>
																<Link to="" class="fw text-gray-500 text-hover-primary">Plumber</Link>
                                                                <div className="">
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                </div>
																{/* <!--end::Email--> */}
															</div>
															{/* <!--end::Info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="mb-5">
														{/* <!--begin::Title--> */}
														<h5 class="mb-3">Internal Reviews</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
                                                        <div className="">
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                        </div>
														</div>
														{/* <!--end::Details--> */}
													</div>
													<div class="separator separator-dashed mb-5"></div>
													<div class="mb-5">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Price</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0 fw-bold text-gray-700">
                                                            $5000
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="mb-7">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Location</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
															{/* <!--begin::Card info--> */}
															<div class="fw-semibold text-gray-600 d-flex align-items-center">Nevada, USA
															<img src="assets/media/svg/card-logos/mastercard.svg" class="w-35px ms-2" alt=""/></div>
															{/* <!--end::Card info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													<div class="separator separator-dashed mb-5"></div>
													<div class="mb-7">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Status</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
															{/* <!--begin::Card info--> */}
															<div class="fw-semibold text-gray-600 d-flex align-items-center">Accepting Job
															<img src="assets/media/svg/card-logos/mastercard.svg" class="w-35px ms-2" alt=""/></div>
															{/* <!--end::Card info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="row col-lg-12 d-flex justify-content-center">
                                                        <div className='p-2 col'>
                                                            <Link to="" class="btn btnLightPrimary p-4">
                                                                    <i class="ki-outline ki-message-text-2 fs-2"></i>Chat</Link>
                                                            </div>
                                                        <div className='p-2 col-lg-6'>
                                                            <Link to="" class="btn btnLightPrimary p-4">
                                                                    <i class="fa-regular fa-file-pdf fs-1"></i>Pdf</Link>
														</div>
													</div>
                                                    <button type="button" className="menu-item col-lg-12 btn btnButton">
                                                                More Information
                                                    </button>
													{/* <!--end::Section--> */}
													{/* <!--begin::Actions--> */}
													{/* <div class="mb-0">
														<Link to="../../demo34/dist/apps/subscriptions/add.html" class="btn btn-primary" id="kt_subscriptions_create_button">Edit Subscription</Link>
													</div> */}
													{/* <!--end::Actions--> */}
												</div>
												{/* <!--end::Card body--> */}
											</div>
                                            <div class="card card-flush mb-0 col-lg mx-2 shadow-sm" data-kt-sticky="true" data-kt-sticky-name="subscription-summary" data-kt-sticky-offset="{default: false, lg: '200px'}" data-kt-sticky-width="{lg: '250px', xl: '300px'}" data-kt-sticky-left="auto" data-kt-sticky-top="150px" data-kt-sticky-animation="false" data-kt-sticky-zindex="95">
												{/* <!--begin::Card header--> */}
												<div class="card-header">
													{/* <!--begin::Card title--> */}
													<div class="card-title">
														<h2>Olivia Wild</h2>
													</div>
													{/* <!--end::Card title--> */}
												</div>
												{/* <!--end::Card header--> */}
												{/* <!--begin::Card body--> */}
												<div class="card-body pt-0 fs-6">
													{/* <!--begin::Section--> */}
													<div class="mb-7">
														{/* <!--begin::Details--> */}
														<div class="d-flex align-items-center">
															{/* <!--begin::Avatar--> */}
															<div class="symbol symbol-60px symbol-circle me-3">
																<img alt="Pic" src={a300_1}  />
															</div>
															{/* <!--end::Avatar--> */}
															{/* <!--begin::Info--> */}
															<div class="d-flex flex-column">
																{/* <!--begin::Name--> */}
																{/* <Link to="" class="fs-4 fw-bold text-gray-900 text-hover-primary me-2">Sean Bean</Link> */}
																{/* <!--end::Name--> */}
																{/* <!--begin::Email--> */}
																<Link to="" class="fw-semibold text-gray-600 text-hover-primary">olivia@wild.com</Link>
																<Link to="" class="fw text-gray-500 text-hover-primary">Mechanical</Link>
                                                                <div className="">
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    {/* <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i> */}
                                                                </div>
																{/* <!--end::Email--> */}
															</div>
															{/* <!--end::Info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="mb-5">
														{/* <!--begin::Title--> */}
														<h5 class="mb-3">Internal Reviews</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
                                                        <div className="">
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            {/* <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i> */}
                                                        </div>
														</div>
														{/* <!--end::Details--> */}
													</div>
													<div class="separator separator-dashed mb-5"></div>
													<div class="mb-5">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Price</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0 fw-bold text-gray-700">
                                                            $36200
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="mb-7">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Location</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
															{/* <!--begin::Card info--> */}
															<div class="fw-semibold text-gray-600 d-flex align-items-center">Nevada, USA
															<img src="assets/media/svg/card-logos/mastercard.svg" class="w-35px ms-2" alt=""/></div>
															{/* <!--end::Card info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													<div class="separator separator-dashed mb-5"></div>
													<div class="mb-7">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Status</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
															{/* <!--begin::Card info--> */}
															<div class="fw-semibold text-gray-600 d-flex align-items-center">Accepting Job
															<img src="assets/media/svg/card-logos/mastercard.svg" class="w-35px ms-2" alt=""/></div>
															{/* <!--end::Card info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="row col-lg-12 d-flex justify-content-center">
                                                        <div className='p-2 col'>
                                                            <Link to="" class="btn btnLightPrimary p-4">
                                                                    <i class="ki-outline ki-message-text-2 fs-2"></i>Chat</Link>
                                                            </div>
                                                        <div className='p-2 col-lg-6'>
                                                            <Link to="" class="btn btnLightPrimary p-4">
                                                                    <i class="fa-regular fa-file-pdf fs-1"></i>Pdf</Link>
														</div>
													</div>
                                                    <button type="button" className="menu-item col-lg-12 btn btnButton">
                                                                More Information
                                                    </button>
													{/* <!--end::Section--> */}
													{/* <!--begin::Actions--> */}
													{/* <div class="mb-0">
														<Link to="../../demo34/dist/apps/subscriptions/add.html" class="btn btn-primary" id="kt_subscriptions_create_button">Edit Subscription</Link>
													</div> */}
													{/* <!--end::Actions--> */}
												</div>
												{/* <!--end::Card body--> */}
											</div>
                                            <div class="card card-flush mb-0 col-lg mx-2 shadow-sm" data-kt-sticky="true" data-kt-sticky-name="subscription-summary" data-kt-sticky-offset="{default: false, lg: '200px'}" data-kt-sticky-width="{lg: '250px', xl: '300px'}" data-kt-sticky-left="auto" data-kt-sticky-top="150px" data-kt-sticky-animation="false" data-kt-sticky-zindex="95">
												{/* <!--begin::Card header--> */}
												<div class="card-header">
													{/* <!--begin::Card title--> */}
													<div class="card-title">
														<h2>Peter Marcus</h2>
													</div>
													{/* <!--end::Card title--> */}
												</div>
												{/* <!--end::Card header--> */}
												{/* <!--begin::Card body--> */}
												<div class="card-body pt-0 fs-6">
													{/* <!--begin::Section--> */}
													<div class="mb-7">
														{/* <!--begin::Details--> */}
														<div class="d-flex align-items-center">
															{/* <!--begin::Avatar--> */}
															<div class="symbol symbol-60px symbol-circle me-3">
																<img alt="Pic" src={a300_9}  />
															</div>
															{/* <!--end::Avatar--> */}
															{/* <!--begin::Info--> */}
															<div class="d-flex flex-column">
																{/* <!--begin::Name--> */}
																{/* <Link to="" class="fs-4 fw-bold text-gray-900 text-hover-primary me-2">Sean Bean</Link> */}
																{/* <!--end::Name--> */}
																{/* <!--begin::Email--> */}
																<Link to="" class="fw-semibold text-gray-600 text-hover-primary">peter@Marcus.com</Link>
																<Link to="" class="fw text-gray-500 text-hover-primary">Electrician</Link>
                                                                <div className="">
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                </div>
																{/* <!--end::Email--> */}
															</div>
															{/* <!--end::Info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="mb-5">
														{/* <!--begin::Title--> */}
														<h5 class="mb-3">Internal Reviews</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
                                                        <div className="">
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                        </div>
														</div>
														{/* <!--end::Details--> */}
													</div>
													<div class="separator separator-dashed mb-5"></div>
													<div class="mb-5">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Price</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0 fw-bold text-gray-700">
                                                            $15000
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="mb-7">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Location</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
															{/* <!--begin::Card info--> */}
															<div class="fw-semibold text-gray-600 d-flex align-items-center">Nevada, USA
															<img src="assets/media/svg/card-logos/mastercard.svg" class="w-35px ms-2" alt=""/></div>
															{/* <!--end::Card info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													<div class="separator separator-dashed mb-5"></div>
													<div class="mb-7">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Status</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
															{/* <!--begin::Card info--> */}
															<div class="fw-semibold text-gray-600 d-flex align-items-center">Accepting Job
															<img src="assets/media/svg/card-logos/mastercard.svg" class="w-35px ms-2" alt=""/></div>
															{/* <!--end::Card info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="row col-lg-12 d-flex justify-content-center">
                                                        <div className='p-2 col'>
                                                            <Link to="" class="btn btnLightPrimary p-4">
                                                                    <i class="ki-outline ki-message-text-2 fs-2"></i>Chat</Link>
                                                            </div>
                                                        <div className='p-2 col-lg-6'>
                                                            <Link to="" class="btn btnLightPrimary p-4">
                                                                    <i class="fa-regular fa-file-pdf fs-1"></i>Pdf</Link>
														</div>
													</div>
                                                    <button type="button" className="menu-item col-lg-12 btn btnButton">
                                                                More Information
                                                    </button>
													{/* <!--end::Section--> */}
													{/* <!--begin::Actions--> */}
													{/* <div class="mb-0">
														<Link to="../../demo34/dist/apps/subscriptions/add.html" class="btn btn-primary" id="kt_subscriptions_create_button">Edit Subscription</Link>
													</div> */}
													{/* <!--end::Actions--> */}
												</div>
												{/* <!--end::Card body--> */}
											</div>
                                            <div class="card card-flush mb-0 col-lg mx-2 shadow-sm" data-kt-sticky="true" data-kt-sticky-name="subscription-summary" data-kt-sticky-offset="{default: false, lg: '200px'}" data-kt-sticky-width="{lg: '250px', xl: '300px'}" data-kt-sticky-left="auto" data-kt-sticky-top="150px" data-kt-sticky-animation="false" data-kt-sticky-zindex="95">
												{/* <!--begin::Card header--> */}
												<div class="card-header">
													{/* <!--begin::Card title--> */}
													<div class="card-title">
														<h2>Adam Williams</h2>
													</div>
													{/* <!--end::Card title--> */}
												</div>
												{/* <!--end::Card header--> */}
												{/* <!--begin::Card body--> */}
												<div class="card-body pt-0 fs-6">
													{/* <!--begin::Section--> */}
													<div class="mb-7">
														{/* <!--begin::Details--> */}
														<div class="d-flex align-items-center">
															{/* <!--begin::Avatar--> */}
															<div class="symbol symbol-60px symbol-circle me-3">
																<img alt="Pic" src={a300_5}  />
															</div>
															{/* <!--end::Avatar--> */}
															{/* <!--begin::Info--> */}
															<div class="d-flex flex-column">
																{/* <!--begin::Name--> */}
																{/* <Link to="" class="fs-4 fw-bold text-gray-900 text-hover-primary me-2">Sean Bean</Link> */}
																{/* <!--end::Name--> */}
																{/* <!--begin::Email--> */}
																<Link to="" class="fw-semibold text-gray-600 text-hover-primary">adam@williams.com</Link>
																<Link to="" class="fw text-gray-500 text-hover-primary">Plumber</Link>
                                                                <div className="">
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                    <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                                </div>
																{/* <!--end::Email--> */}
															</div>
															{/* <!--end::Info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="mb-5">
														{/* <!--begin::Title--> */}
														<h5 class="mb-3">Internal Reviews</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
                                                        <div className="">
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                            <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                        </div>
														</div>
														{/* <!--end::Details--> */}
													</div>
													<div class="separator separator-dashed mb-5"></div>
													<div class="mb-5">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Price</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0 fw-bold text-gray-700">
                                                            $12000
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="mb-7">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Location</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
															{/* <!--begin::Card info--> */}
															<div class="fw-semibold text-gray-600 d-flex align-items-center">Nevada, USA
															<img src="assets/media/svg/card-logos/mastercard.svg" class="w-35px ms-2" alt=""/></div>
															{/* <!--end::Card info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													<div class="separator separator-dashed mb-5"></div>
													<div class="mb-7">
														{/* <!--begin::Title--> */}
														<h5 class="mb-4">Status</h5>
														{/* <!--end::Title--> */}
														{/* <!--begin::Details--> */}
														<div class="mb-0">
															{/* <!--begin::Card info--> */}
															<div class="fw-semibold text-gray-600 d-flex align-items-center">Accepting Job
															<img src="assets/media/svg/card-logos/mastercard.svg" class="w-35px ms-2" alt=""/></div>
															{/* <!--end::Card info--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													{/* <!--end::Section--> */}
													{/* <!--begin::Seperator--> */}
													<div class="separator separator-dashed mb-5"></div>
													{/* <!--end::Seperator--> */}
													{/* <!--begin::Section--> */}
													<div class="row col-lg-12 d-flex justify-content-center">
                                                        <div className='p-2 col'>
                                                            <Link to="" class="btn btnLightPrimary p-4">
                                                                    <i class="ki-outline ki-message-text-2 fs-2"></i>Chat</Link>
                                                            </div>
                                                        <div className='p-2 col-lg-6'>
                                                            <Link to="" class="btn btnLightPrimary p-4">
                                                                    <i class="fa-regular fa-file-pdf fs-1"></i>Pdf</Link>
														</div>
													</div>
                                                    <button type="button" className="menu-item col-lg-12 btn btnButton">
                                                                More Information
                                                    </button>
													{/* <!--end::Section--> */}
													{/* <!--begin::Actions--> */}
													{/* <div class="mb-0">
														<Link to="../../demo34/dist/apps/subscriptions/add.html" class="btn btn-primary" id="kt_subscriptions_create_button">Edit Subscription</Link>
													</div> */}
													{/* <!--end::Actions--> */}
												</div>
												{/* <!--end::Card body--> */}
											</div>
                                        </div>

</>
                            
                            {/* end::Row */}
                            {/* begin::Pagination */}
                            <div className="d-flex flex-stack flex-wrap pt-10">
                                <div className="fs-6 fw-semibold text-gray-700">Showing 1 to 10 of 50 entries</div>
                                {/* begin::Pages */}
                                <ul className="pagination">
                                    <li className="page-item previous">
                                        <Link to="" className="page-link">
                                            <i className="previous"></i>
                                        </Link>
                                    </li>
                                    <li className="page-item active">
                                        <Link to="" className="page-link">1</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link to="" className="page-link">2</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link to="" className="page-link">3</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link to="" className="page-link">4</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link to="" className="page-link">5</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link to="" className="page-link">6</Link>
                                    </li>
                                    <li className="page-item next">
                                        <Link to="" className="page-link">
                                            <i className="next"></i>
                                        </Link>
                                    </li>
                                </ul>
                                {/* end::Pages */}
                            </div>
                            {/* end::Pagination */}
                        </div>
                        {/* end::Tab pane */}
                    </div>
                    {/* end::Tab Content */}
                    {/* begin::Modals */}
                    {/* end::Modals */}
                </div>
                </div>
            </div>
                {/* end::Content */}
            </div>
            {/* end::Content wrapper */}
        </>
    )
}
function Subcontractor() {
    return <Layout data={<SubcontractorDate />} />
}
export default Subcontractor;