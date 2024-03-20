import React, { useState } from 'react';
import Layout from './layout';
import 'react-calendar/dist/Calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import Modal from 'react-modal';
import homeIMG2 from "../assets/images/h2.jpg"
import { Link, useNavigate } from 'react-router-dom';
import a14 from "../assets/images/Avatar/300-14.jpg"
import a2 from "../assets/images/Avatar/300-2.jpg"
import a20 from "../assets/images/Avatar/300-20.jpg"
import a1 from "../assets/images/Avatar/300-1.jpg"
import a23 from "../assets/images/Avatar/300-23.jpg"
import pdf_svg from "../assets/images/files/pdf.svg"
import doc_svg from "../assets/images/files/doc.svg"
import css_svg from "../assets/images/files/css.svg"


const localizer = momentLocalizer(moment)
function ProjectListData() {
    document.title = 'Buildify AI | Sub Contractor';
const mavigate = useNavigate()
    const cellStyle = {
        width: 'fit-content',
        height: '50px',
        fontSize: '25px'
    };

    function naviProjectList() {
        mavigate("/builderprojectdetails/")
        localStorage.setItem('activeTab', "Project Managment");

    }

	const myEventsList = [
		{ start: new Date("2024-01-05"), end: new Date("2024-01-05"), title: 'Event 1' },
		{ start: new Date("2024-01-08"), end: new Date("2024-01-08"), title: 'Event 2' },
		{ start: new Date("2024-01-11"), end: new Date("2024-01-11"), title: 'Event 3' },
		{ start: new Date("2024-01-17"), end: new Date("2024-01-17"), title: 'Event 4' },
		{ start: new Date("2024-01-22"), end: new Date("2024-01-24"), title: 'Event 5' },
	  ];

	  const eventColors = ['#FF5733', '#f50505', '#f5cd05', '#0521f5', '#2C9AFF'];

const eventStyleGetter = (event) => {
  const colorIndex = myEventsList.indexOf(event) % eventColors.length;
  const backgroundColor = eventColors[colorIndex];

  const style = {
    backgroundColor,
	fontWeight:"bold"
  };

  return {
    style,
  };
};
const [eventModel, seteventModel] = useState(false);
const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%'

	},
};
    return (
        <>
        			{/* begin::Wrapper container */}
					<div class="app-container container-xxl">
						{/* begin::Main */}
						<div class="app-main flex-column flex-row-fluid" id="kt_app_main">
							{/* begin::Content wrapper */}
							<div class="d-flex flex-column flex-column-fluid">
								{/* begin::Content */}
								<div id="kt_app_content" class="app-content flex-column-fluid">
									{/* begin::Card */}
									<div class="card">
										{/* begin::Card header */}
										<div class="card-header">
											<h2 class="card-title fw-bold">Calendar</h2>
											<div class="card-toolbar">
												<button class="btn btn-flex btnButton" data-kt-calendar="add" onClick={()=>seteventModel(true)}>
												<i class="ki-outline ki-plus fs-2"></i>Add Event</button>
											</div>
										</div>
										{/* end::Card header */}
										{/* begin::Card body */}
										<div class="card-body">
											{/* begin::Calendar */}
											<div id="kt_calendar_app">
                                            {/* begin::Toolbar*/}
									<div class="d-flex flex-wrap flex-stack my-2">
										{/* begin::Heading*/}
										<h2 class="fs-2 fw-semibold my-2">Projects
										<span class="fs-6 text-gray-400 ms-1">by Status</span></h2>
										{/* end::Heading*/}
										{/* begin::Controls*/}
										<div class="d-flex flex-wrap my-1">
											{/* begin::Select wrapper*/}
											<div class="m-0">
												{/* begin::Select*/}
												<select name="status" data-control="select2" data-hide-search="true" class="form-select form-select-sm bg-body border-body fw-bold w-125px">
													<option value="Active" selected="selected">Active</option>
													<option value="Approved">In Progress</option>
													<option value="Declined">To Do</option>
													<option value="In Progress">Completed</option>
												</select>
												{/* end::Select*/}
											</div>
											{/* end::Select wrapper*/}
										</div>
										{/* end::Controls*/}
									</div>
									{/* end::Toolbar*/}
									{/* begin::Row*/}
									<div class="row g-6 g-xl-9">
										{/* begin::Col*/}
										<div class="col-md-6 col-xl-4">
											{/* begin::Card*/}
											<Link to="/builderprojectdetails/" class="card border-hover-primary">
												{/* begin::Card header*/}
												<div class="card-header border-0 pt-9">
													{/* begin::Card Title*/}
													<div class="card-title m-0">
														{/* begin::Avatar*/}
														<div class="symbol symbol-50px w-50px bg-light">
															<img src={css_svg} alt="image1" class="p-3" />
														</div>
														{/* end::Avatar*/}
													</div>
													{/* end::Car Title*/}
													{/* begin::Card toolbar*/}
													<div class="card-toolbar">
														<span class="badge badge-light-primary fw-bold me-auto px-4 py-3">In Progress</span>
													</div>
													{/* end::Card toolbar*/}
												</div>
												{/* end:: Card header*/}
												{/* begin:: Card body*/}
												<div class="card-body p-9">
													{/* begin::Name*/}
													<div class="fs-3 fw-bold text-dark">Home Renovation</div>
													{/* end::Name*/}
													{/* begin::Description*/}
													<p class="text-gray-400 fw-semibold fs-5 mt-1 mb-7">Modernizing a kitchen with sleek design and energy-efficient appliances</p>
													{/* end::Description*/}
													{/* begin::Info*/}
													<div class="d-flex flex-wrap mb-5">
														{/* begin::Due*/}
														<div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
															<div class="fs-6 text-gray-800 fw-bold">Dec 20, 2023</div>
															<div class="fw-semibold text-gray-400">Due Date</div>
														</div>
														{/* end::Due*/}
														{/* begin::Budget*/}
														<div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
															<div class="fs-6 text-gray-800 fw-bold">$284,900.00</div>
															<div class="fw-semibold text-gray-400">Budget</div>
														</div>
														{/* end::Budget*/}
													</div>
													{/* end::Info*/}
													{/* begin::Progress*/}
													<div class="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 50% completed">
														<div class="bg-primary rounded h-4px" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													{/* end::Progress*/}
												</div>
												{/* end:: Card body*/}
											</Link>
											{/* end::Card*/}
										</div>
										{/* end::Col*/}
										{/* begin::Col*/}
										<div class="col-md-6 col-xl-4">
											{/* begin::Card*/}
											<Link to="/builderprojectdetails/" class="card border-hover-primary">
												{/* begin::Card header*/}
												<div class="card-header border-0 pt-9">
													{/* begin::Card Title*/}
													<div class="card-title m-0">
														{/* begin::Avatar*/}
														<div class="symbol symbol-50px w-50px bg-light">
															<img src={pdf_svg} alt="image2" class="p-3" />
														</div>
														{/* end::Avatar*/}
													</div>
													{/* end::Car Title*/}
													{/* begin::Card toolbar*/}
													<div class="card-toolbar">
														<span class="badge badge-light fw-bold me-auto px-4 py-3">Pending</span>
													</div>
													{/* end::Card toolbar*/}
												</div>
												{/* end:: Card header*/}
												{/* begin:: Card body*/}
												<div class="card-body p-9">
													{/* begin::Name*/}
													<div class="fs-3 fw-bold text-dark">Commercial</div>
													{/* end::Name*/}
													{/* begin::Description*/}
													<p class="text-gray-400 fw-semibold fs-5 mt-1 mb-7">Modern office complex construction featuring sustainable design</p>
													{/* end::Description*/}
													{/* begin::Info*/}
													<div class="d-flex flex-wrap mb-5">
														{/* begin::Due*/}
														<div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
															<div class="fs-6 text-gray-800 fw-bold">May 10, 2021</div>
															<div class="fw-semibold text-gray-400">Due Date</div>
														</div>
														{/* end::Due*/}
														{/* begin::Budget*/}
														<div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
															<div class="fs-6 text-gray-800 fw-bold">$36,400.00</div>
															<div class="fw-semibold text-gray-400">Budget</div>
														</div>
														{/* end::Budget*/}
													</div>
													{/* end::Info*/}
													{/* begin::Progress*/}
													<div class="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 30% completed">
														<div class="bg-info rounded h-4px" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													{/* end::Progress*/}
												</div>
												{/* end:: Card body*/}
											</Link>
											{/* end::Card*/}
										</div>
										{/* end::Col*/}
										{/* begin::Col*/}
										<div class="col-md-6 col-xl-4">
											{/* begin::Card*/}
											<Link to="/builderprojectdetails/" class="card border-hover-primary">
												{/* begin::Card header*/}
												<div class="card-header border-0 pt-9">
													{/* begin::Card Title*/}
													<div class="card-title m-0">
														{/* begin::Avatar*/}
														<div class="symbol symbol-50px w-50px bg-light">
															<img src={doc_svg} alt="image3" class="p-3" />
														</div>
														{/* end::Avatar*/}
													</div>
													{/* end::Car Title*/}
													{/* begin::Card toolbar*/}
													<div class="card-toolbar">
														<span class="badge badge-light-success fw-bold me-auto px-4 py-3">Completed</span>
													</div>
													{/* end::Card toolbar*/}
												</div>
												{/* end:: Card header*/}
												{/* begin:: Card body*/}
												<div class="card-body p-9">
													{/* begin::Name*/}
													<div class="fs-3 fw-bold text-dark">Residential Building</div>
													{/* end::Name*/}
													{/* begin::Description*/}
													<p class="text-gray-400 fw-semibold fs-5 mt-1 mb-7">Modern eco-friendly apartments with rooftop gardens in a bustling urban setting</p>
													{/* end::Description*/}
													{/* begin::Info*/}
													<div class="d-flex flex-wrap mb-5">
														{/* begin::Due*/}
														<div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
															<div class="fs-6 text-gray-800 fw-bold">Mar 14, 2021</div>
															<div class="fw-semibold text-gray-400">Due Date</div>
														</div>
														{/* end::Due*/}
														{/* begin::Budget*/}
														<div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
															<div class="fs-6 text-gray-800 fw-bold">$605,100.00</div>
															<div class="fw-semibold text-gray-400">Budget</div>
														</div>
														{/* end::Budget*/}
													</div>
													{/* end::Info*/}
													{/* begin::Progress*/}
													<div class="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 100% completed">
														<div class="bg-success rounded h-4px" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													{/* end::Progress*/}
												</div>
												{/* end:: Card body*/}
											</Link>
											{/* end::Card*/}
										</div>
										{/* end::Col*/}
										{/* begin::Col*/}
										<div class="col-md-6 col-xl-4">
											{/* begin::Card*/}
											<Link to="/builderprojectdetails/" class="card border-hover-primary">
												{/* begin::Card header*/}
												<div class="card-header border-0 pt-9">
													{/* begin::Card Title*/}
													<div class="card-title m-0">
														{/* begin::Avatar*/}
														<div class="symbol symbol-50px w-50px bg-light">
															<img src={css_svg} alt="image4" class="p-3" />
														</div>
														{/* end::Avatar*/}
													</div>
													{/* end::Car Title*/}
													{/* begin::Card toolbar*/}
													<div class="card-toolbar">
														<span class="badge badge-light fw-bold me-auto px-4 py-3">Pending</span>
													</div>
													{/* end::Card toolbar*/}
												</div>
												{/* end:: Card header*/}
												{/* begin:: Card body*/}
												<div class="card-body p-9">
													{/* begin::Name*/}
													<div class="fs-3 fw-bold text-dark">Home Renovation</div>
													{/* end::Name*/}
													{/* begin::Description*/}
													<p class="text-gray-400 fw-semibold fs-5 mt-1 mb-7">Modernizing a kitchen with sleek design and energy-efficient appliances</p>
													{/* end::Description*/}
													{/* begin::Info*/}
													<div class="d-flex flex-wrap mb-5">
														{/* begin::Due*/}
														<div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
															<div class="fs-6 text-gray-800 fw-bold">May 05, 2023</div>
															<div class="fw-semibold text-gray-400">Due Date</div>
														</div>
														{/* end::Due*/}
														{/* begin::Budget*/}
														<div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
															<div class="fs-6 text-gray-800 fw-bold">$284,900.00</div>
															<div class="fw-semibold text-gray-400">Budget</div>
														</div>
														{/* end::Budget*/}
													</div>
													{/* end::Info*/}
													{/* begin::Progress*/}
													<div class="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 60% completed">
														<div class="bg-info rounded h-4px" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													{/* end::Progress*/}
												</div>
												{/* end:: Card body*/}
											</Link>
											{/* end::Card*/}
										</div>
										{/* end::Col*/}
										{/* begin::Col*/}
										<div class="col-md-6 col-xl-4">
											{/* begin::Card*/}
											<Link to="/builderprojectdetails/" class="card border-hover-primary">
												{/* begin::Card header*/}
												<div class="card-header border-0 pt-9">
													{/* begin::Card Title*/}
													<div class="card-title m-0">
														{/* begin::Avatar*/}
														<div class="symbol symbol-50px w-50px bg-light">
															<img src={pdf_svg} alt="image5" class="p-3" />
														</div>
														{/* end::Avatar*/}
													</div>
													{/* end::Car Title*/}
													{/* begin::Card toolbar*/}
													<div class="card-toolbar">
														<span class="badge badge-light-primary fw-bold me-auto px-4 py-3">In Progress</span>
													</div>
													{/* end::Card toolbar*/}
												</div>
												{/* end:: Card header*/}
												{/* begin:: Card body*/}
												<div class="card-body p-9">
													{/* begin::Name*/}
													<div class="fs-3 fw-bold text-dark">Residential Building</div>
													{/* end::Name*/}
													{/* begin::Description*/}
													<p class="text-gray-400 fw-semibold fs-5 mt-1 mb-7">Modern eco-friendly apartments with rooftop gardens in a bustling urban setting</p>
													{/* end::Description*/}
													{/* begin::Info*/}
													<div class="d-flex flex-wrap mb-5">
														{/* begin::Due*/}
														<div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
															<div class="fs-6 text-gray-800 fw-bold">Jun 24, 2023</div>
															<div class="fw-semibold text-gray-400">Due Date</div>
														</div>
														{/* end::Due*/}
														{/* begin::Budget*/}
														<div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
															<div class="fs-6 text-gray-800 fw-bold">$284,900.00</div>
															<div class="fw-semibold text-gray-400">Budget</div>
														</div>
														{/* end::Budget*/}
													</div>
													{/* end::Info*/}
													{/* begin::Progress*/}
													<div class="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 40% completed">
														<div class="bg-primary rounded h-4px" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													{/* end::Progress*/}
												</div>
												{/* end:: Card body*/}
											</Link>
											{/* end::Card*/}
										</div>
										{/* end::Col*/}
										{/* begin::Col*/}
										<div class="col-md-6 col-xl-4">
											{/* begin::Card*/}
											<Link to="/builderprojectdetails/" class="card border-hover-primary">
												{/* begin::Card header*/}
												<div class="card-header border-0 pt-9">
													{/* begin::Card Title*/}
													<div class="card-title m-0">
														{/* begin::Avatar*/}
														<div class="symbol symbol-50px w-50px bg-light">
															<img src={doc_svg} alt="image6" class="p-3" />
														</div>
														{/* end::Avatar*/}
													</div>
													{/* end::Car Title*/}
													{/* begin::Card toolbar*/}
													<div class="card-toolbar">
														<span class="badge badge-light-primary fw-bold me-auto px-4 py-3">In Progress</span>
													</div>
													{/* end::Card toolbar*/}
												</div>
												{/* end:: Card header*/}
												{/* begin:: Card body*/}
												<div class="card-body p-9">
													{/* begin::Name*/}
													<div class="fs-3 fw-bold text-dark">Commercial</div>
													{/* end::Name*/}
													{/* begin::Description*/}
													<p class="text-gray-400 fw-semibold fs-5 mt-1 mb-7">Modern office complex construction featuring sustainable design</p>
													{/* end::Description*/}
													{/* begin::Info*/}
													<div class="d-flex flex-wrap mb-5">
														{/* begin::Due*/}
														<div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
															<div class="fs-6 text-gray-800 fw-bold">Aug 19, 2023</div>
															<div class="fw-semibold text-gray-400">Due Date</div>
														</div>
														{/* end::Due*/}
														{/* begin::Budget*/}
														<div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
															<div class="fs-6 text-gray-800 fw-bold">$284,900.00</div>
															<div class="fw-semibold text-gray-400">Budget</div>
														</div>
														{/* end::Budget*/}
													</div>
													{/* end::Info*/}
													{/* begin::Progress*/}
													<div class="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 70% completed">
														<div class="bg-primary rounded h-4px" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													{/* end::Progress*/}
												</div>
												{/* end:: Card body*/}
											</Link>
											{/* end::Card*/}
										</div>
										{/* end::Col*/}
									</div>
									{/* end::Row*/}
                                            </div>
											{/* end::Calendar */}
										</div>
										{/* end::Card body */}
									</div>
									{/* end::Card */}
									{/* begin::Modals */}
									{/* begin::Modal - New Product */}
									<div class="modal fade" id="kt_modal_add_event" tabindex="-1" aria-hidden="true">
										{/* begin::Modal dialog */}
										<div class="modal-dialog modal-dialog-centered mw-650px">
											{/* begin::Modal content */}
											<div class="modal-content">
												{/* begin::Form */}
												<form class="form" action="#" id="kt_modal_add_event_form">
													{/* begin::Modal header */}
													<div class="modal-header">
														{/* begin::Modal title */}
														<h2 class="fw-bold" data-kt-calendar="title">Add Event</h2>
														{/* end::Modal title */}
														{/* begin::Close */}
														<div class="btn btn-icon btn-sm btn-active-icon-primary" id="kt_modal_add_event_close">
															<i class="ki-outline ki-cross fs-1"></i>
														</div>
														{/* end::Close */}
													</div>
													{/* end::Modal header */}
													{/* begin::Modal body */}
													<div class="modal-body py-10 px-lg-17">
														{/* begin::Input group */}
														<div class="fv-row mb-9">
															{/* begin::Label */}
															<label class="fs-6 fw-semibold required mb-2">Event Name</label>
															{/* end::Label */}
															{/* begin::Input */}
															<input type="text" class="form-control form-control-solid" placeholder="" name="calendar_event_name" />
															{/* end::Input */}
														</div>
														{/* end::Input group */}
														{/* begin::Input group */}
														<div class="fv-row mb-9">
															{/* begin::Label */}
															<label class="fs-6 fw-semibold mb-2">Event Description</label>
															{/* end::Label */}
															{/* begin::Input */}
															<input type="text" class="form-control form-control-solid" placeholder="" name="calendar_event_description" />
															{/* end::Input */}
														</div>
														{/* end::Input group */}
														{/* begin::Input group */}
														<div class="fv-row mb-9">
															{/* begin::Label */}
															<label class="fs-6 fw-semibold mb-2">Event Location</label>
															{/* end::Label */}
															{/* begin::Input */}
															<input type="text" class="form-control form-control-solid" placeholder="" name="calendar_event_location" />
															{/* end::Input */}
														</div>
														{/* end::Input group */}
														{/* begin::Input group */}
														<div class="fv-row mb-9">
															{/* begin::Checkbox */}
															<label class="form-check form-check-custom form-check-solid">
																<input class="form-check-input" type="checkbox" value="" id="kt_calendar_datepicker_allday" />
																<span class="form-check-label fw-semibold" for="kt_calendar_datepicker_allday">All Day</span>
															</label>
															{/* end::Checkbox */}
														</div>
														{/* end::Input group */}
														{/* begin::Input group */}
														<div class="row row-cols-lg-2 g-10">
															<div class="col">
																<div class="fv-row mb-9">
																	{/* begin::Label */}
																	<label class="fs-6 fw-semibold mb-2 required">Event Start Date</label>
																	{/* end::Label */}
																	{/* begin::Input */}
																	<input class="form-control form-control-solid" name="calendar_event_start_date" placeholder="Pick a start date" id="kt_calendar_datepicker_start_date" />
																	{/* end::Input */}
																</div>
															</div>
															<div class="col" data-kt-calendar="datepicker">
																<div class="fv-row mb-9">
																	{/* begin::Label */}
																	<label class="fs-6 fw-semibold mb-2">Event Start Time</label>
																	{/* end::Label */}
																	{/* begin::Input */}
																	<input class="form-control form-control-solid" name="calendar_event_start_time" placeholder="Pick a start time" id="kt_calendar_datepicker_start_time" />
																	{/* end::Input */}
																</div>
															</div>
														</div>
														{/* end::Input group */}
														{/* begin::Input group */}
														<div class="row row-cols-lg-2 g-10">
															<div class="col">
																<div class="fv-row mb-9">
																	{/* begin::Label */}
																	<label class="fs-6 fw-semibold mb-2 required">Event End Date</label>
																	{/* end::Label */}
																	{/* begin::Input */}
																	<input class="form-control form-control-solid" name="calendar_event_end_date" placeholder="Pick a end date" id="kt_calendar_datepicker_end_date" />
																	{/* end::Input */}
																</div>
															</div>
															<div class="col" data-kt-calendar="datepicker">
																<div class="fv-row mb-9">
																	{/* begin::Label */}
																	<label class="fs-6 fw-semibold mb-2">Event End Time</label>
																	{/* end::Label */}
																	{/* begin::Input */}
																	<input class="form-control form-control-solid" name="calendar_event_end_time" placeholder="Pick a end time" id="kt_calendar_datepicker_end_time" />
																	{/* end::Input */}
																</div>
															</div>
														</div>
														{/* end::Input group */}
													</div>
													{/* end::Modal body */}
													{/* begin::Modal footer */}
													<div class="modal-footer flex-center">
														{/* begin::Button */}
														<button type="reset" id="kt_modal_add_event_cancel" class="btn btn-light me-3">Cancel</button>
														{/* end::Button */}
														{/* begin::Button */}
														<button type="button" id="kt_modal_add_event_submit" class="btn btn-primary">
															<span class="indicator-label">Submit</span>
															<span class="indicator-progress">Please wait...
															<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
														</button>
														{/* end::Button */}
													</div>
													{/* end::Modal footer */}
												</form>
												{/* end::Form */}
											</div>
										</div>
									</div>
									{/* end::Modal - New Product */}
									{/* begin::Modal - New Product */}
									<div class="modal fade" id="kt_modal_view_event" tabindex="-1" aria-hidden="true">
										{/* begin::Modal dialog */}
										<div class="modal-dialog modal-dialog-centered mw-650px">
											{/* begin::Modal content */}
											<div class="modal-content">
												{/* begin::Modal header */}
												<div class="modal-header border-0 justify-content-end">
													{/* begin::Edit */}
													<div class="btn btn-icon btn-sm btn-color-gray-400 btn-active-icon-primary me-2" data-bs-toggle="tooltip" data-bs-dismiss="click" title="Edit Event" id="kt_modal_view_event_edit">
														<i class="ki-outline ki-pencil fs-2"></i>
													</div>
													{/* end::Edit */}
													{/* begin::Edit */}
													<div class="btn btn-icon btn-sm btn-color-gray-400 btn-active-icon-danger me-2" data-bs-toggle="tooltip" data-bs-dismiss="click" title="Delete Event" id="kt_modal_view_event_delete">
														<i class="ki-outline ki-trash fs-2"></i>
													</div>
													{/* end::Edit */}
													{/* begin::Close */}
													<div class="btn btn-icon btn-sm btn-color-gray-500 btn-active-icon-primary" data-bs-toggle="tooltip" title="Hide Event" data-bs-dismiss="modal">
														<i class="ki-outline ki-cross fs-2x"></i>
													</div>
													{/* end::Close */}
												</div>
												{/* end::Modal header */}
												{/* begin::Modal body */}
												<div class="modal-body pt-0 pb-20 px-lg-17">
													{/* begin::Row */}
													<div class="d-flex">
														{/* begin::Icon */}
														<i class="ki-outline ki-calendar-8 fs-1 text-muted me-5"></i>
														{/* end::Icon */}
														<div class="mb-9">
															{/* begin::Event name */}
															<div class="d-flex align-items-center mb-2">
																<span class="fs-3 fw-bold me-3" data-kt-calendar="event_name"></span>
																<span class="badge badge-light-success" data-kt-calendar="all_day"></span>
															</div>
															{/* end::Event name */}
															{/* begin::Event description */}
															<div class="fs-6" data-kt-calendar="event_description"></div>
															{/* end::Event description */}
														</div>
													</div>
													{/* end::Row */}
													{/* begin::Row */}
													<div class="d-flex align-items-center mb-2">
														{/* begin::Bullet */}
														<span class="bullet bullet-dot h-10px w-10px bg-success ms-2 me-7"></span>
														{/* end::Bullet */}
														{/* begin::Event start date/time */}
														<div class="fs-6">
															<span class="fw-bold">Starts</span>
															<span data-kt-calendar="event_start_date"></span>
														</div>
														{/* end::Event start date/time */}
													</div>
													{/* end::Row */}
													{/* begin::Row */}
													<div class="d-flex align-items-center mb-9">
														{/* begin::Bullet */}
														<span class="bullet bullet-dot h-10px w-10px bg-danger ms-2 me-7"></span>
														{/* end::Bullet */}
														{/* begin::Event end date/time */}
														<div class="fs-6">
															<span class="fw-bold">Ends</span>
															<span data-kt-calendar="event_end_date"></span>
														</div>
														{/* end::Event end date/time */}
													</div>
													{/* end::Row */}
													{/* begin::Row */}
													<div class="d-flex align-items-center">
														{/* begin::Icon */}
														<i class="ki-outline ki-geolocation fs-1 text-muted me-5"></i>
														{/* end::Icon */}
														{/* begin::Event location */}
														<div class="fs-6" data-kt-calendar="event_location"></div>
														{/* end::Event location */}
													</div>
													{/* end::Row */}
												</div>
												{/* end::Modal body */}
											</div>
										</div>
									</div>
									{/* end::Modal - New Product */}
									{/* end::Modals */}
								</div>
								{/* end::Content */}
							</div>
							{/* end::Content wrapper */}
						</div>
						{/* end:::Main */}
					</div>
					{/* end::Wrapper container */}


					<Modal
						isOpen={eventModel}
						onRequestClose={() => seteventModel(false)}
						style={customStyles}
					>
				<div className="modal fade show" id="kt_modal_new_review" tabIndex="-1" style={{ display: "block" }}>
					{/* begin::Modal dialog */}
					<div className="modal-dialog modal-dialog-centered mw-650px">
						{/* begin::Modal content> */}
						<div className="modal-content rounded">
							{/* begin::Modal header */}
							<div className="modal-header pb-0 border-0 justify-content-end">
								{/* begin::Close */}
								<button className="btn btn-sm btn-icon btn-active-color-primary" onClick={() => seteventModel(false)}>
									<i className="ki-outline ki-cross fs-1"></i>
								</button>
								{/* end::Close */}
							</div>
							{/* begin::Modal header */}
							{/* begin::Modal body */}
							<div className="modal-body eventpopup px-10 px-lg-15 pt-0 pb-15">
								{/* begin:Form*/}
								<div id="kt_modal_new_target_form" className="form fv-plugins-bootstrap5 fv-plugins-framework">
									{/* begin::Heading */}
									<div className="mb-13 text-center">
										{/* begin::Title */}
										<h1 className="mb-3">Add Schedule</h1>
										{/* end::Title */}
									</div>
									{/* end::Heading */}
									{/* begin::Input group */}
									{/* begin::Input group*/}
									<div class="fv-row mb-9">
															{/* begin::Label*/}
															<label class="fs-6 fw-semibold required mb-2">Schedule Name</label>
															{/* end::Label*/}
															{/* begin::Input*/}
															<input type="text" class="form-control form-control-solid" placeholder="" name="calendar_event_name" />
															{/* end::Input*/}
														</div>
														{/* end::Input group*/}
														{/* begin::Input group*/}
														<div class="fv-row mb-9">
															{/* begin::Label*/}
															<label class="fs-6 fw-semibold mb-2">Schedule Description</label>
															{/* end::Label*/}
															{/* begin::Input*/}
															<input type="text" class="form-control form-control-solid" placeholder="" name="calendar_event_description" />
															{/* end::Input*/}
														</div>
														{/* end::Input group*/}
														{/* begin::Input group*/}
														<div class="fv-row mb-9">
															{/* begin::Label*/}
															<label class="fs-6 fw-semibold mb-2">Schedule Location</label>
															{/* end::Label*/}
															{/* begin::Input*/}
															<input type="text" class="form-control form-control-solid" placeholder="" name="calendar_event_location" />
															{/* end::Input*/}
														</div>
														{/* end::Input group*/}
														{/* begin::Input group*/}
														<div class="fv-row mb-9">
															{/* begin::Checkbox*/}
															<label class="form-check form-check-custom form-check-solid">
																<input class="form-check-input" type="checkbox" value="" id="kt_calendar_datepicker_allday" />
																<span class="form-check-label fw-semibold" for="kt_calendar_datepicker_allday">All Day</span>
															</label>
															{/* end::Checkbox*/}
														</div>
														{/* end::Input group*/}
														{/* begin::Input group*/}
														<div class="row row-cols-lg-2 g-10">
															<div class="col">
																<div class="fv-row mb-9">
																	{/* begin::Label*/}
																	<label class="fs-6 fw-semibold mb-2 required">Schedule Start Date</label>
																	{/* end::Label*/}
																	{/* begin::Input*/}
																	{/* <input class="form-control form-control-solid" name="calendar_event_start_date" placeholder="Pick a start date" id="kt_calendar_datepicker_start_date" /> */}
																	<input class="form-control form-control-solid ps-12"
																		placeholder="Select a date" name="due_date" type="date" id='scheduleDate'/>
																		<i class="ki-outline ki-calendar-8 fs-2 position-absolute mx-4 cursor-pointer" style={{marginTop:"-31.5px"}}></i>
																	{/* end::Input*/}
																</div>
															</div>
														<div class="col" data-kt-calendar="datepicker">
																<div class="fv-row mb-9">
																	{/* begin::Label*/}
																	<label class="fs-6 fw-semibold mb-2">Schedule Start Time</label>
																	{/* end::Label*/}
																	{/* begin::Input*/}
																	<input class="form-control form-control-solid ps-12"
																		placeholder="Select a date" name="due_date" type="date" id='scheduleDate'/>
																		<i class="ki-outline ki-calendar-8 fs-2 position-absolute mx-4 cursor-pointer" style={{marginTop:"-31.5px"}}></i>
																	{/* end::Input*/}
																</div>
															</div>
														</div>
														{/* end::Input group*/}
														{/* begin::Input group*/}
														<div class="row row-cols-lg-2 g-10">
															<div class="col">
																<div class="fv-row mb-9">
																	{/* begin::Label*/}
																	<label class="fs-6 fw-semibold mb-2 required">Schedule End Date</label>
																	{/* end::Label*/}
																	{/* begin::Input*/}
																	<input class="form-control form-control-solid ps-12"
																		placeholder="Select a date" name="due_date" type="time" id='scheduleDate'/>
																		<i class="ki-outline ki-calendar-8 fs-2 position-absolute mx-4 cursor-pointer" style={{marginTop:"-31.5px"}}></i>
																	{/* end::Input*/}
																</div>
															</div>
															<div class="col" data-kt-calendar="datepicker">
																<div class="fv-row mb-9">
																	{/* begin::Label*/}
																	<label class="fs-6 fw-semibold mb-2">Schedule End Time</label>
																	{/* end::Label*/}
																	{/* begin::Input*/}
																	<input class="form-control form-control-solid ps-12"
																		placeholder="Select a date" name="due_date" type="time" id='scheduleDate'/>
																		<i class="ki-outline ki-calendar-8 fs-2 position-absolute mx-4 cursor-pointer" style={{marginTop:"-31.5px"}}></i>
																	{/* end::Input*/}
																</div>
															</div>
														</div>
														{/* end::Input group*/}
									{/* begin::Input group */}
									<div className="text-center mt-3">
										<button id="#" className="btn btnButton me-3">
											<span className="indicator-label">Submit</span>
											<span className="indicator-progress">Submit
												<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
										</button>
									</div>
									{/* end::Actions */}
								</div>
								{/* end:Form */}
							</div>
							{/* end::Modal body */}
						</div>
						{/* end::Modal content */}
					</div>
					{/* end::Modal dialog */}
				</div>
			</Modal>
        </>
    );
}

function ProjectList() {
    return <Layout data={<ProjectListData />} />;
}

export default ProjectList;
