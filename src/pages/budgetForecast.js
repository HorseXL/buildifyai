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


function ViewBudgetForecast() {
    document.title = 'Buildify AI | Budget Forecast';
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
            {/* <!--begin::Content--> */}
								<div id="kt_app_content" className="app-content flex-column-fluid">
									{/* <!--begin::Row--> */}
									<div className="row g-5 g-xl-10 mb-xl-10">
										{/* <!--begin::Col--> */}
										<div className="col-md-6 col-lg-6">
											{/* <!--begin::Card widget 17--> */}
											<div className="card card-flush h-md-90 mb-5 mb-xl-10">
												{/* <!--begin::Header--> */}
												<div className="card-header pt-5">
													{/* <!--begin::Title--> */}
													<div className="card-title d-flex flex-column">
														{/* <!--begin::Info--> */}
														<div className="d-flex align-items-center">
															{/* <!--begin::Currency--> */}
															<span className="fs-4 fw-semibold text-gray-400 me-1 align-self-start">$</span>
															{/* <!--end::Currency--> */}
															{/* <!--begin::Amount--> */}
															<span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">69,700</span>
															{/* <!--end::Amount--> */}
															{/* <!--begin::Badge--> */}
															<span className="badge badge-light-success fs-base">
															<i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>2.2%</span>
															{/* <!--end::Badge--> */}
														</div>
														{/* <!--end::Info--> */}
														{/* <!--begin::Subtitle--> */}
														<span className="text-gray-400 pt-1 fw-semibold fs-6">Projects Earnings in April</span>
														{/* <!--end::Subtitle--> */}
													</div>
													{/* <!--end::Title--> */}
												</div>
												{/* <!--end::Header--> */}
												{/* <!--begin::Card body--> */}
												<div className="card-body pb-4 d-flex flex-wrap align-items-center">
													{/* <!--begin::Chart--> */}
													<div className="d-flex flex-center me-5 pt-2">
														{/* <div id="kt_card_widget_17_chart" style={{minWidth: "70px", minHeight: "70px"}} data-kt-size="70" data-kt-line="11"></div> */}
														<div className="mini-chart"><div className="rv-xy-plot  rv-radial-chart" style={{width: "120px", height: "120px"}}><svg className="rv-xy-plot__inner" width="120" height="120"><g className="rv-xy-plot__series rv-xy-plot__series--arc " opacity="1" pointer-events="all" transform="translate(60,60)"><path className="rv-xy-plot__series rv-xy-plot__series--arc-path rv-radial-chart__series--pie__slice " d="M-43.706588332443026,10.711402164906092A45,45,0,0,1,3.1701662992261e-14,-45L0,0Z" style={{opacity: "1", stroke: "rgb(30, 150, 190)", fill: "rgb(30, 150, 190)"}}></path><path className="rv-xy-plot__series rv-xy-plot__series--arc-path rv-radial-chart__series--pie__slice " d="M32.05834031456966,31.579468270938914A45,45,0,0,1,-43.706588332443026,10.711402164906092L0,0Z" style={{opacity: "1", stroke: "rgb(23, 184, 190)", fill: "rgb(23, 184, 190)"}}></path><path className="rv-xy-plot__series rv-xy-plot__series--arc-path rv-radial-chart__series--pie__slice " d="M2.7554552980815448e-15,-45A45,45,0,0,1,32.05834031456966,31.579468270938914L0,0Z" style={{opacity: "1", stroke: "lightgray", fill: "lightgray"}}></path></g></svg></div></div>
													</div>
													{/* <!--end::Chart--> */}
													{/* <!--begin::Labels--> */}
													<div className="d-flex flex-column content-justify-center flex-row-fluid">
														{/* <!--begin::Label--> */}
														<div className="d-flex fw-semibold align-items-center">
															{/* <!--begin::Bullet--> */}
															<div className="bullet w-8px h-3px rounded-2 bg-success me-3"></div>
															{/* <!--end::Bullet--> */}
															{/* <!--begin::Label--> */}
															<div className="text-gray-500 flex-grow-1 me-4">Leaf CRM</div>
															{/* <!--end::Label--> */}
															{/* <!--begin::Stats--> */}
															<div className="fw-bolder text-gray-700 text-xxl-end">$7,660</div>
															{/* <!--end::Stats--> */}
														</div>
														<div className="separator separator-solid my-3"></div>
														{/* <!--end::Label--> */}
														{/* <!--begin::Label--> */}
														<div className="d-flex fw-semibold align-items-center">
															{/* <!--begin::Bullet--> */}
															<div className="bullet w-8px h-3px rounded-2 bg-primary me-3"></div>
															{/* <!--end::Bullet--> */}
															{/* <!--begin::Label--> */}
															<div className="text-gray-500 flex-grow-1 me-4">Mivy App</div>
															{/* <!--end::Label--> */}
															{/* <!--begin::Stats--> */}
															<div className="fw-bolder text-gray-700 text-xxl-end">$2,820</div>
															{/* <!--end::Stats--> */}
														</div>
														{/* <!--end::Label--> */}
														<div className="separator separator-solid my-3"></div>
														{/* <!--begin::Label--> */}
														<div className="d-flex fw-semibold align-items-center">
															{/* <!--begin::Bullet--> */}
															<div className="bullet w-8px h-3px rounded-2 me-3" style={{backgroundColor: "#E4E6EF"}}></div>
															{/* <!--end::Bullet--> */}
															{/* <!--begin::Label--> */}
															<div className="text-gray-500 flex-grow-1 me-4">Others</div>
															{/* <!--end::Label--> */}
															{/* <!--begin::Stats--> */}
															<div className="fw-bolder text-gray-700 text-xxl-end">$45,257</div>
															{/* <!--end::Stats--> */}
														</div>
														{/* <!--end::Label--> */}
													</div>
													{/* <!--end::Labels--> */}
												</div>
												{/* <!--end::Card body--> */}
											</div>
											{/* <!--end::Card widget 17--> */}
										</div>
										{/* <!--end::Col--> */}
										{/* <!--begin::Col--> */}
										<div className="col-md-6 col-lg-6">
											{/* <!--end::Card widget 17--> */}
											{/* <!--begin::List widget 25--> */}
											<div className="card card-flush h-md-90">
												{/* <!--begin::Header--> */}
												<div className="card-header pt-5">
													{/* <!--begin::Title--> */}
													<h3 className="card-title text-gray-800">Highlights</h3>
													{/* <!--end::Title--> */}
													{/* <!--begin::Toolbar--> */}
													<div className="card-toolbar d-none">
														{/* <!--begin::Daterangepicker(defined in src/js/layout/app.js)--> */}
														<div data-kt-daterangepicker="true" data-kt-daterangepicker-opens="left" className="btn btn-sm btn-light d-flex align-items-center px-4">
															{/* <!--begin::Display range--> */}
															<div className="text-gray-600 fw-bold">Loading date range...</div>
															{/* <!--end::Display range--> */}
															<i className="ki-outline ki-calendar-8 fs-1 ms-2 me-0"></i>
														</div>
														{/* <!--end::Daterangepicker--> */}
													</div>
													{/* <!--end::Toolbar--> */}
												</div>
												{/* <!--end::Header--> */}
												{/* <!--begin::Body--> */}
												<div className="card-body pt-5">
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack">
														{/* <!--begin::Section--> */}
														<div className="text-gray-700 fw-semibold text-primary fs-6 me-2">Avg. Client Rating</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Statistics--> */}
														<div className="d-flex align-items-senter">
															<i className="ki-outline ki-arrow-up-right fs-2 text-success me-2"></i>
															{/* <!--begin::Number--> */}
															<span className="text-gray-900 fw-bolder fs-6">7.8</span>
															{/* <!--end::Number--> */}
															<span className="text-gray-400 fw-bold fs-6">/10</span>
														</div>
														{/* <!--end::Statistics--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Separator--> */}
													<div className="separator separator-solid my-3"></div>
													{/* <!--end::Separator--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack">
														{/* <!--begin::Section--> */}
														<div className="text-gray-700 fw-semibold text-primary fs-6 me-2">Avg. Quotes</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Statistics--> */}
														<div className="d-flex align-items-senter">
															<i className="ki-outline ki-arrow-down-right fs-2 text-danger me-2"></i>
															{/* <!--begin::Number--> */}
															<span className="text-gray-900 fw-bolder fs-6">730</span>
															{/* <!--end::Number--> */}
														</div>
														{/* <!--end::Statistics--> */}
													</div>
													{/* <!--end::Item--> */}
													{/* <!--begin::Separator--> */}
													<div className="separator separator-solid my-3"></div>
													{/* <!--end::Separator--> */}
													{/* <!--begin::Item--> */}
													<div className="d-flex flex-stack">
														{/* <!--begin::Section--> */}
														<div className="text-gray-700 fw-semibold text-primary fs-6 me-2">Avg. Agent Earnings</div>
														{/* <!--end::Section--> */}
														{/* <!--begin::Statistics--> */}
														<div className="d-flex align-items-senter">
															<i className="ki-outline ki-arrow-up-right fs-2 text-success me-2"></i>
															{/* <!--begin::Number--> */}
															<span className="text-gray-900 fw-bolder fs-6">$2,309</span>
															{/* <!--end::Number--> */}
														</div>
														{/* <!--end::Statistics--> */}
													</div>
													{/* <!--end::Item--> */}
													
												</div>
												{/* <!--end::Body--> */}
											</div>
											{/* <!--end::LIst widget 25--> */}
										</div>
										{/* <!--end::Col--> */}
										<div className="col-12 my-0">
											<div className="card  card-xxl-stretch mb-5 mb-xxl-10">
												{/* <!--begin::Header--> */}
												<div className="card-header">
													<div className="card-title">
														<h3>Earnings</h3>
													</div>
												</div>
												{/* <!--end::Header--> */}

												{/* <!--begin::Body--> */}
												<div className="card-body pb-0">
													<span className="fs-5 fw-semibold text-gray-600 pb-5 d-block">Last 30 day earnings calculated. Apart from arranging the order of topics.</span>

													{/* <!--begin::Left Section--> */}
													<div className="d-flex flex-wrap justify-content-between pb-6">
														{/* <!--begin::Row--> */}
														<div className="d-flex flex-wrap">
															{/* <!--begin::Col--> */}
															<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
																<div className="d-flex align-items-center">
																	<div className="fs-2 fw-bold text-primary">$6,840</div>
																</div>
																<div className="fw-semibold fs-6 text-muted">Net Earnings</div>
															</div>
															{/* <!--end::Col--> */}
															{/* <!--begin::Col--> */}
															<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
																<div className="d-flex align-items-center">
																	<div className="fs-2 fw-bold text-primary">$1,240</div>
																</div>
																<div className="fw-semibold fs-6 text-muted">Fees</div>
															</div>
															{/* <!--end::Col--> */}
														</div>
														{/* <!--end::Row--> */}

														{/* <a href="#" className="btn btnButton  px-6 flex-shrink-0 align-self-center">Withdraw Earnings</a>              */}
													</div>
													{/* <!--end::Left Section--> */}
												</div>
												{/* <!--end::Body--> */}
											</div>
										</div>
										{/* <!--begin::Col--> */}
                                    <div className="col-lg-12 mb-5 mb-xl-0 mt-0">
											{/* <!--begin::Statements--> */}
									<div className="card">
										{/* <!--begin::Header--> */}
										<div className="card-header card-header-stretch">
											{/* <!--begin::Title--> */}
											<div className="card-title">
												<h3 className="m-0 text-gray-800">Requests</h3>
											</div>
											{/* <!--end::Title--> */}
											{/* <!--begin::Toolbar--> */}
											<div className="card-toolbar m-0">
												{/* <!--begin::Tab nav--> */}
												<ul className="nav nav-stretch fs-5 fw-semibold nav-line-tabs border-transparent" role="tablist">
													<li className="nav-item" role="presentation">
														<a id="kt_referrals_year_tab" className="nav-link text-active-gray-800 active" data-bs-toggle="tab" role="tab" href="#kt_referrals_1">This Year</a>
													</li>
													<li className="nav-item" role="presentation">
														<a id="kt_referrals_2019_tab" className="nav-link text-active-gray-800 me-4" data-bs-toggle="tab" role="tab" href="#kt_referrals_1">2022</a>
													</li>
													<li className="nav-item" role="presentation">
														<a id="kt_referrals_2018_tab" className="nav-link text-active-gray-800 me-4" data-bs-toggle="tab" role="tab" href="#kt_referrals_1">2021</a>
													</li>
													<li className="nav-item" role="presentation">
														<a id="kt_referrals_2017_tab" className="nav-link text-active-gray-800 ms-8" data-bs-toggle="tab" role="tab" href="#kt_referrals_1">2020</a>
													</li>
												</ul>
												{/* <!--end::Tab nav--> */}
											</div>
											{/* <!--end::Toolbar--> */}
										</div>
										{/* <!--end::Header--> */}
										{/* <!--begin::Tab Content--> */}
										<div id="kt_referred_users_tab_content" className="tab-content">
											{/* <!--begin::Tab panel--> */}
											<div id="kt_referrals_1" className="card-body p-0 tab-pane fade show active" role="tabpanel">
												<div className="table-responsive">
													{/* <!--begin::Table--> */}
													<table className="table align-middle table-row-bordered table-row-solid gy-4 gs-9">
														{/* <!--begin::Thead--> */}
														<thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
															<tr>
																<th className="min-w-175px ps-9">Date</th>
																<th className="min-w-350px">Sub Contractor</th>
																<th className="min-w-125px">Amount</th>
																<th className="min-w-125px text-center">Action</th>
															</tr>
														</thead>
														{/* <!--end::Thead--> */}
														{/* <!--begin::Tbody--> */}
														<tbody className="fs-6 fw-semibold text-gray-600">
															<tr>
																<td className="ps-9">Nov 01, 2020</td>
																<td className='text-primary'>Alan Johnson</td>
																<td className="text-success">$38.00</td>
																<td className="text-center">
																	<a href="#" className="btn btn-sm btn-light image.png btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
																		<i className="ki-outline ki-down fs-5 ms-1"></i></a>
																	{/* <!--begin::Menu--> */}
																	<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">Agree</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">Reject</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Partial Accept</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																	</div>
																	{/* <!--end::Menu--> */}
																</td>
															</tr>
															<tr>
																<td className="ps-9">Oct 24, 2020</td>
																<td className='text-primary'>Seller Fee</td>
																<td className="text-success">$31.00</td>
																<td className="text-center">
																	<a href="#" className="btn btn-sm btn-light image.png btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
																		<i className="ki-outline ki-down fs-5 ms-1"></i></a>
																	{/* <!--begin::Menu--> */}
																	<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">Agree</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">Reject</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Partial Accept</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																	</div>
																	{/* <!--end::Menu--> */}
																</td>
															</tr>
															<tr>
																<td className="ps-9">Oct 08, 2020</td>
																<td className="text-primary">Adam Williams</td>
																<td className="text-success">$76.00</td>
																<td className="text-center">
																	<a href="#" className="btn btn-sm btn-light image.png btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
																		<i className="ki-outline ki-down fs-5 ms-1"></i></a>
																	{/* <!--begin::Menu--> */}
																	<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">Agree</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">Reject</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Partial Accept</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																	</div>
																	{/* <!--end::Menu--> */}
																</td>
															</tr>
															<tr>
																<td className="ps-9">Sep 15, 2020</td>
																<td className="text-primary">Olivia Wild</td>
																<td className="text-success">$5.00</td>
																<td className="text-center">
																	<a href="#" className="btn btn-sm btn-light image.png btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
																		<i className="ki-outline ki-down fs-5 ms-1"></i></a>
																	{/* <!--begin::Menu--> */}
																	<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">Agree</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">Reject</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Partial Accept</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																	</div>
																	{/* <!--end::Menu--> */}
																</td>
															</tr>
															<tr>
																<td className="ps-9">May 30, 2020</td>
																<td className="text-primary">Neil Owen</td>
																<td className="text-success">$31.00</td>
																<td className="text-center">
																	<a href="#" className="btn btn-sm btn-light image.png btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
																		<i className="ki-outline ki-down fs-5 ms-1"></i></a>
																	{/* <!--begin::Menu--> */}
																	<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">Agree</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">Reject</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Partial Accept</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																	</div>
																	{/* <!--end::Menu--> */}
																</td>
															</tr>
															<tr>
																<td className="ps-9">Apr 22, 2020</td>
																<td className="text-primary">Peter Marcus</td>
																<td className="text-success">$204.00</td>
																<td className="text-center">
																	<a href="#" className="btn btn-sm btn-light image.png btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
																		<i className="ki-outline ki-down fs-5 ms-1"></i></a>
																	{/* <!--begin::Menu--> */}
																	<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">Agree</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">Reject</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Partial Accept</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																	</div>
																	{/* <!--end::Menu--> */}
																</td>
															</tr>
															<tr>
																<td className="ps-9">Feb 09, 2020</td>
																<td className="text-primary">Benjamin Jacob</td>
																<td className="text-success">$31.00</td>
																<td className="text-center">
																	<a href="#" className="btn btn-sm btn-light image.png btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
																		<i className="ki-outline ki-down fs-5 ms-1"></i></a>
																	{/* <!--begin::Menu--> */}
																	<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">Agree</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">Reject</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Partial Accept</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																	</div>
																	{/* <!--end::Menu--> */}
																</td>
															</tr>
															<tr>
																<td className="ps-9">Nov 01, 2020</td>
																<td className="text-primary">Alan Johnson</td>
																<td className="text-success">$52.00</td>
																<td className="text-center">
																	<a href="#" className="btn btn-sm btn-light image.png btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
																		<i className="ki-outline ki-down fs-5 ms-1"></i></a>
																	{/* <!--begin::Menu--> */}
																	<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">Agree</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">Reject</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Partial Accept</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																	</div>
																	{/* <!--end::Menu--> */}
																</td>
															</tr>
															<tr>
																<td className="ps-9">Jan 04, 2020</td>
																<td className="text-primary">Sean Bean</td>
																<td className="text-success">$31.00</td>
																<td className="text-center">
																	<a href="#" className="btn btn-sm btn-light image.png btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
																		<i className="ki-outline ki-down fs-5 ms-1"></i></a>
																	{/* <!--begin::Menu--> */}
																	<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">Agree</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">Reject</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																		{/* <!--begin::Menu item--> */}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Partial Accept</a>
																		</div>
																		{/* <!--end::Menu item--> */}
																	</div>
																	{/* <!--end::Menu--> */}
																</td>
															</tr>
														</tbody>
														{/* <!--end::Tbody--> */}
													</table>
													{/* <!--end::Table--> */}
												</div>
											</div>
											{/* <!--end::Tab panel--> */}
											{/* <!--begin::Tab panel--> */}
											<div id="kt_referrals_2" className="card-body p-0 tab-pane fade" role="tabpanel">
												<div className="table-responsive">
													{/* <!--begin::Table--> */}
													<table className="table align-middle table-row-bordered table-row-solid gy-4 gs-9">
														{/* <!--begin::Thead--> */}
														<thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
															<tr>
																<th className="min-w-175px ps-9">Date</th>
																<th className="min-w-150px px-0">Order ID</th>
																<th className="min-w-350px">Details</th>
																<th className="min-w-125px">Amount</th>
																<th className="min-w-125px text-center">Invoice</th>
															</tr>
														</thead>
														{/* <!--end::Thead--> */}
														{/* <!--begin::Tbody--> */}
														<tbody className="fs-6 fw-semibold text-gray-600">
															<tr>
																<td className="ps-9">May 30, 2020</td>
																<td className="ps-0">523445943</td>
																<td>Seller Fee</td>
																<td className="text-danger">$-1.30</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Apr 22, 2020</td>
																<td className="ps-0">231445943</td>
																<td>Parcel Shipping / Delivery Service App</td>
																<td className="text-success">$204.00</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Feb 09, 2020</td>
																<td className="ps-0">426445943</td>
																<td>Visual Design Illustration</td>
																<td className="text-success">$31.00</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Nov 01, 2020</td>
																<td className="ps-0">984445943</td>
																<td>Abstract Vusial Pack</td>
																<td className="text-success">$52.00</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Jan 04, 2020</td>
																<td className="ps-0">324442313</td>
																<td>Seller Fee</td>
																<td className="text-danger">$-0.80</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Nov 01, 2020</td>
																<td className="ps-0">102445788</td>
																<td>Darknight transparency 36 Icons Pack</td>
																<td className="text-success">$38.00</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Oct 24, 2020</td>
																<td className="ps-0">423445721</td>
																<td>Seller Fee</td>
																<td className="text-danger">$-2.60</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Oct 08, 2020</td>
																<td className="ps-0">312445984</td>
																<td>Cartoon Mobile Emoji Phone Pack</td>
																<td className="text-success">$76.00</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Sep 15, 2020</td>
																<td className="ps-0">312445984</td>
																<td>Iphone 12 Pro Mockup Mega Bundle</td>
																<td className="text-success">$5.00</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
														</tbody>
														{/* <!--end::Tbody--> */}
													</table>
													{/* <!--end::Table--> */}
												</div>
											</div>
											{/* <!--end::Tab panel--> */}
											{/* <!--begin::Tab panel--> */}
											<div id="kt_referrals_3" className="card-body p-0 tab-pane fade" role="tabpanel">
												<div className="table-responsive">
													{/* <!--begin::Table--> */}
													<table className="table align-middle table-row-bordered table-row-solid gy-4 gs-9">
														{/* <!--begin::Thead--> */}
														<thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
															<tr>
																<th className="min-w-175px ps-9">Date</th>
																<th className="min-w-150px px-0">Order ID</th>
																<th className="min-w-350px">Details</th>
																<th className="min-w-125px">Amount</th>
																<th className="min-w-125px text-center">Invoice</th>
															</tr>
														</thead>
														{/* <!--end::Thead--> */}
														{/* <!--begin::Tbody--> */}
														<tbody className="fs-6 fw-semibold text-gray-600">
															<tr>
																<td className="ps-9">Feb 09, 2020</td>
																<td className="ps-0">426445943</td>
																<td>Visual Design Illustration</td>
																<td className="text-success">$31.00</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Nov 01, 2020</td>
																<td className="ps-0">984445943</td>
																<td>Abstract Vusial Pack</td>
																<td className="text-success">$52.00</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Jan 04, 2020</td>
																<td className="ps-0">324442313</td>
																<td>Seller Fee</td>
																<td className="text-danger">$-0.80</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Sep 15, 2020</td>
																<td className="ps-0">312445984</td>
																<td>Iphone 12 Pro Mockup Mega Bundle</td>
																<td className="text-success">$5.00</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Nov 01, 2020</td>
																<td className="ps-0">102445788</td>
																<td>Darknight transparency 36 Icons Pack</td>
																<td className="text-success">$38.00</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Oct 24, 2020</td>
																<td className="ps-0">423445721</td>
																<td>Seller Fee</td>
																<td className="text-danger">$-2.60</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Oct 08, 2020</td>
																<td className="ps-0">312445984</td>
																<td>Cartoon Mobile Emoji Phone Pack</td>
																<td className="text-success">$76.00</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">May 30, 2020</td>
																<td className="ps-0">523445943</td>
																<td>Seller Fee</td>
																<td className="text-danger">$-1.30</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Apr 22, 2020</td>
																<td className="ps-0">231445943</td>
																<td>Parcel Shipping / Delivery Service App</td>
																<td className="text-success">$204.00</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
														</tbody>
														{/* <!--end::Tbody--> */}
													</table>
													{/* <!--end::Table--> */}
												</div>
											</div>
											{/* <!--end::Tab panel--> */}
											{/* <!--begin::Tab panel--> */}
											<div id="kt_referrals_4" className="card-body p-0 tab-pane fade" role="tabpanel">
												<div className="table-responsive">
													{/* <!--begin::Table--> */}
													<table className="table align-middle table-row-bordered table-row-solid gy-4 gs-9">
														{/* <!--begin::Thead--> */}
														<thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
															<tr>
																<th className="min-w-175px ps-9">Date</th>
																<th className="min-w-150px px-0">Order ID</th>
																<th className="min-w-350px">Details</th>
																<th className="min-w-125px">Amount</th>
																<th className="min-w-125px text-center">Invoice</th>
															</tr>
														</thead>
														{/* <!--end::Thead--> */}
														{/* <!--begin::Tbody--> */}
														<tbody className="fs-6 fw-semibold text-gray-600">
															<tr>
																<td className="ps-9">Nov 01, 2020</td>
																<td className="ps-0">102445788</td>
																<td>Darknight transparency 36 Icons Pack</td>
																<td className="text-success">$38.00</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Oct 24, 2020</td>
																<td className="ps-0">423445721</td>
																<td>Seller Fee</td>
																<td className="text-danger">$-2.60</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Nov 01, 2020</td>
																<td className="ps-0">102445788</td>
																<td>Darknight transparency 36 Icons Pack</td>
																<td className="text-success">$38.00</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Oct 24, 2020</td>
																<td className="ps-0">423445721</td>
																<td>Seller Fee</td>
																<td className="text-danger">$-2.60</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Feb 09, 2020</td>
																<td className="ps-0">426445943</td>
																<td>Visual Design Illustration</td>
																<td className="text-success">$31.00</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Nov 01, 2020</td>
																<td className="ps-0">984445943</td>
																<td>Abstract Vusial Pack</td>
																<td className="text-success">$52.00</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Jan 04, 2020</td>
																<td className="ps-0">324442313</td>
																<td>Seller Fee</td>
																<td className="text-danger">$-0.80</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Oct 08, 2020</td>
																<td className="ps-0">312445984</td>
																<td>Cartoon Mobile Emoji Phone Pack</td>
																<td className="text-success">$76.00</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td className="ps-9">Oct 08, 2020</td>
																<td className="ps-0">312445984</td>
																<td>Cartoon Mobile Emoji Phone Pack</td>
																<td className="text-success">$76.00</td>
																<td className="text-center">
																	<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
														</tbody>
														{/* <!--end::Tbody--> */}
													</table>
													{/* <!--end::Table--> */}
												</div>
											</div>
											{/* <!--end::Tab panel--> */}
										</div>
										{/* <!--end::Tab Content--> */}
									</div>
									{/* <!--end::Statements--> */}
											{/* <!--begin::Col--> */}
										<div className="col-lg-12">
											{/* <!--begin::Invoices--> */}
											<div className="card card-xxl-stretch my-5 mb-xxl-10">
												{/* <!--begin::Header--> */}
												<div className="card-header">
													<div className="card-title">
														<h3 className="text-gray-800">Invoices</h3>
													</div>
                                                    <a href="../businessfinances/">
                                                    <button type="button" className="btn btnButton">
                                                        Create Invoice
                                                    </button>
                                                    </a>
												</div>
												{/* <!--end::Header--> */}
												{/* <!--begin::Body--> */}
												<div className="card-body">
													{/* <!--begin::Left Section--> */}
													<div className="d-flex align-self-center">
														<div className="flex-grow-1 me-3">
															{/* <!--begin::Select--> */}
															<select className="form-select form-select-solid" data-control="select2" data-placeholder="Seller Annual Fee" data-hide-search="true">
																<option value=""></option>
																<option value="1">Individual Seller Account</option>
																<option value="2">Variable Closing Fee</option>
																<option value="3">Minimum Referral Fee</option>
															</select>
															{/* <!--end::Select--> */}
														</div>
													</div>
													{/* <!--end::Left Section--> */}
                                                    <div className="table-responsive border-bottom mb-14">
																<table className="table mt-5">
																	<thead>
																		<tr className="border-bottom fs-6 fw-bold text-muted text-uppercase">
																			<th className="min-w-175px pb-9">Description</th>
																			<th className="min-w-70px pb-9 text-end">Invoice Number</th>
																			<th className="min-w-80px pb-9 text-end">Issue Date</th>
																			<th className="min-w-100px pe-lg-6 pb-9 text-end">Amount</th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr className="fw-bold text-gray-700 fs-5 text-end border-bottom">
																			<td className="d-flex align-items-center pb-5">
																			<a className="text-gray-700"><i className="fa fa-genderless text-danger fs-1 me-2"></i>Plumbing</a></td>
																			<td className='text-primary'>2021001</td>
																			<td>12 Apr 2023</td>
																			<td className="fs-5 pe-lg-6 text-dark fw-bolder text-danger">$3200.00</td>
																		</tr>
																		
																		<tr className="fw-bold text-gray-700 fs-5 text-end border-bottom pb-3">
																			<td className="d-flex align-items-center pb-5">
																			<a className="text-gray-700"><i className="fa fa-genderless text-success fs-1 me-2"></i>Planning</a></td>
																			<td className='text-primary'>2021001</td>
																			<td>12 Apr 2023</td>
																			<td className="fs-5 text-dark fw-bolder pe-lg-6 text-success">$4800.00</td>
																		</tr>
																		<tr className="fw-bold text-gray-700 fs-5 text-end border-bottom">
																			<td className="d-flex align-items-center pb-0">
																			<a className="text-gray-700"><i className="fa fa-genderless text-primary fs-1 me-2"></i>Pre Construction</a></td>
																			<td className='text-primary'>2021001</td>
																			<td>12 Apr 2023</td>
																			<td className="fs-5 text-dark fw-bolder pe-lg-6 text-primary">$12600.00</td>
																		</tr>
																	</tbody>
																</table>
															</div>
												</div>
												{/* <!--end::Body--> */}
											</div>
											{/* <!--end::Invoices--> */}
										</div>
										{/* <!--end::Col--> */}
										</div>
										{/* <!--end::Col--> */}
								</div>
                                </div>
								{/* <!--end::Content--> */}
            </div>
            {/* end::Content wrapper */}
        </>
    )
}
function BudgetForecast() {
    return <Layout data={<ViewBudgetForecast />} />
}
export default BudgetForecast;