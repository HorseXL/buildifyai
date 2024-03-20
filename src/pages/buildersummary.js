import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../pages/layout';

import a14 from "../assets/images/Avatar/300-14.jpg"
import a2 from "../assets/images/Avatar/300-2.jpg"
import a20 from "../assets/images/Avatar/300-20.jpg"
import a1 from "../assets/images/Avatar/300-1.jpg"
import a23 from "../assets/images/Avatar/300-23.jpg"
import pdf_svg from "../assets/images/files/pdf.svg"
import doc_svg from "../assets/images/files/doc.svg"
import css_svg from "../assets/images/files/css.svg"

function SummaryData() {

	document.title = 'Buildify AI | Summary'

	// const navigate = useNavigate(); 

	// useEffect(() =>{
	//   const userId = window.localStorage.getItem("buildifyUserId");
	//   if (userId !== "" && userId !== null && userId !== undefined) {

	//   }else{
	//    navigate("/");
	//   }
	//  },[navigate]);

	return (
		<>
			<div className="app-main flex-column flex-row-fluid" id="kt_app_main"></div>
			{/*  begin::Content wrapper  */}
			<div className="d-flex flex-column flex-column-fluid" >
				{/*  begin::Content  */}
				<div id="kt_app_content" className="app-content flex-column-fluid">
					{/*  begin::Row  */}
					<div className="row g-5 g-xl-10 mb-5 mb-xl-10">
						{/*  begin::Col  */}
						<div className="col-xl-12">
							{/*  begin::Table widget 14  */}
							<div className="card mb-5 mb-xl-8">
								{/* begin::Card body */}
								<div className="card-body mt-5">
									{/* begin::Tab Content */}
									<div className="tab-content">
										{/* begin::Tab panel */}
										<div id="kt_activity_today" className="card-body p-0 tab-pane fade show active" role="tabpanel" aria-labelledby="kt_activity_today_tab">
											{/* begin::Timeline */}
											<div className="timeline">
												{/* begin::Timeline item */}
												<div className="timeline-item">
													{/* begin::Timeline line */}
													<div className="timeline-line w-40px"></div>
													{/* end::Timeline line */}
													{/* begin::Timeline icon */}
													<div className="timeline-icon symbol symbol-circle symbol-40px me-4">
														<div className="symbol-label bg-light">
															{/* <i className="ki-outline ki-message-text-2 fs-2 text-muted"></i> */}
															<i className="ki-outline ki-notification-on fs-1 text-muted"></i>
														</div>
													</div>
													{/* end::Timeline icon */}
													{/* begin::Timeline content */}
													<div className="timeline-content mb-10 mt-n1">
														{/* begin::Timeline heading */}
														<div className="pe-3 mb-5">
															{/* begin::Title */}
															<div className="fs-5 fw-semibold mb-2">Welcome Back John While you were away you received 3 message that can be accessed here.</div>
															{/* end::Title */}
														</div>
														{/* end::Timeline heading */}

													</div>
													{/* end::Timeline content */}
												</div>
												{/* end::Timeline item */}
												{/* begin::Timeline item */}
												<div className="timeline-item">
													{/* begin::Timeline line */}
													<div className="timeline-line w-40px"></div>
													{/* end::Timeline line */}
													{/* begin::Timeline icon */}
													<div className="timeline-icon symbol symbol-circle symbol-40px">
														<div className="symbol-label bg-light">
															<i className="ki-outline ki-message-text-2 fs-2 text-muted"></i>
														</div>
													</div>
													{/* end::Timeline icon */}
													{/* begin::Timeline content */}
													<div className="timeline-content mb-10 mt-n2">
														{/* begin::Timeline heading */}
														<div className="overflow-auto pe-3">
															{/* begin::Title */}
															<div className="fs-5 fw-semibold mb-2">"Hey John this morning I was at the site and the plumber said the electricians are missing nail plates in several spots and the inspection is scheduled for this afternoon. Are nail plates something I can purchase myself and install Let me know, Thanks"</div>
															{/* end::Title */}
															{/* begin::Description */}
															<div className="d-flex align-items-center mt-1 fs-6">
																{/* begin::Info */}
																<div className="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
																{/* end::Info */}
																{/* begin::User */}
																<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Rick Johnson">
																	<img src={a1} alt="img" />
																</div>
																{/* end::User */}
															</div>
															{/* end::Description */}
														</div>
														{/* end::Timeline heading */}
													</div>
													{/* end::Timeline content */}
												</div>
												{/* end::Timeline item */}
												{/* begin::Timeline item */}
												<div className="timeline-item">
													{/* begin::Timeline line */}
													<div className="timeline-line w-40px"></div>
													{/* end::Timeline line */}
													{/* begin::Timeline icon */}
													<div className="timeline-icon symbol symbol-circle symbol-40px">
														<div className="symbol-label bg-light">
															<i className="ki-outline ki-disconnect fs-2 text-muted"></i>
														</div>
													</div>
													{/* end::Timeline icon */}
													{/* begin::Timeline content */}
													<div className="timeline-content mb-10 mt-n1">
														{/* begin::Timeline heading */}
														<div className="mb-5 pe-3">
															{/* begin::Title */}
															<Link to="#" className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">There is an invoice due to Jim's Plumbing in 3 days in the amount of $6,700.</Link>
															{/* end::Title */}
															{/* begin::Description */}
															<div className="d-flex align-items-center mt-1 fs-6">
																{/* begin::Info */}
																<div className="text-muted me-2 fs-7">Sent at 4:30 PM by</div>
																{/* end::Info */}
																{/* begin::User */}
																<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Rick Johnson">
																	<img src={a1} alt="img" />
																</div>
																{/* end::User */}
															</div>
															{/* end::Description */}
														</div>
														{/* end::Timeline heading */}
														{/* begin::Timeline details */}
														<div className="overflow-auto pb-5">
															<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
																{/* begin::Item */}
																<div className="d-flex flex-aligns-center pe-10 pe-lg-20">
																	{/* begin::Icon */}
																	<img alt="pdf image" className="w-30px me-3" src={pdf_svg} />
																	{/* end::Icon */}
																	{/* begin::Info */}
																	<div className="ms-1 fw-semibold">
																		{/* begin::Desc */}
																		<Link to="#" className="fs-6 text-hover-primary fw-bold">Finance Invoice 1</Link>
																		{/* end::Desc */}
																		{/* begin::Number */}
																		<div className="text-muted">1.9mb</div>
																		{/* end::Number */}
																	</div>
																	{/* begin::Info */}
																</div>
																<div className="d-flex flex-aligns-center pe-10 pe-lg-20">
																	{/* begin::Icon */}
																	<img alt="pdf image" className="w-30px me-3" src={pdf_svg} />
																	{/* end::Icon */}
																	{/* begin::Info */}
																	<div className="ms-1 fw-semibold">
																		{/* begin::Desc */}
																		<Link to="#" className="fs-6 text-hover-primary fw-bold">Finance Invoice 2</Link>
																		{/* end::Desc */}
																		{/* begin::Number */}
																		<div className="text-muted">1.9mb</div>
																		{/* end::Number */}
																	</div>
																	{/* begin::Info */}
																</div>
																<div className="d-flex flex-aligns-center pe-10 pe-lg-20">
																	{/* begin::Icon */}
																	<img alt="pdf image" className="w-30px me-3" src={pdf_svg} />
																	{/* end::Icon */}
																	{/* begin::Info */}
																	<div className="ms-1 fw-semibold">
																		{/* begin::Desc */}
																		<Link to="#" className="fs-6 text-hover-primary fw-bold">Finance Invoice 3</Link>
																		{/* end::Desc */}
																		{/* begin::Number */}
																		<div className="text-muted">1.9mb</div>
																		{/* end::Number */}
																	</div>
																	{/* begin::Info */}
																</div>
																{/* end::Item */}

															</div>
														</div>
														{/* end::Timeline details */}
													</div>
													{/* end::Timeline content */}
												</div>
												{/* end::Timeline item */}
												{/* begin::Timeline item */}
												<div className="timeline-item">
													{/* begin::Timeline line */}
													<div className="timeline-line w-40px"></div>
													{/* end::Timeline line */}
													{/* begin::Timeline icon */}
													<div className="timeline-icon symbol symbol-circle symbol-40px">
														<div className="symbol-label bg-light">
															<i className="ki-outline ki-message-text-2 fs-2 text-muted"></i>
														</div>
													</div>
													{/* end::Timeline icon */}
													{/* begin::Timeline content */}
													<div className="timeline-content mb-10 mt-n2">
														{/* begin::Timeline heading */}
														<div className="overflow-auto pe-3">
															{/* begin::Title */}
															<div className="fs-5 fw-semibold mb-2">Today there are 2 sales meetings being held. 1 at 9:00 am with Sam and another being held at 1:00 pm. that you are assigned to. I will remind you 15 minutes prior to your meeting.</div>
															{/* end::Title */}
															{/* begin::Description */}
															<div className="d-flex align-items-center mt-1 fs-6">
																{/* begin::Info */}
																<div className="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
																{/* end::Info */}
																{/* begin::User */}
																<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Rick Johnson">
																	<img src={a1} alt="img" />
																</div>
																{/* end::User */}
															</div>
															{/* end::Description */}
														</div>
														{/* end::Timeline heading */}
													</div>
													{/* end::Timeline content */}
												</div>
												{/* end::Timeline item */}
												{/* begin::Timeline item */}
												<div className="timeline-item">
													{/* begin::Timeline line */}
													<div className="timeline-line w-40px"></div>
													{/* end::Timeline line */}
													{/* begin::Timeline icon */}
													<div className="timeline-icon symbol symbol-circle symbol-40px">
														<div className="symbol-label bg-light">
															<i className="ki-outline ki-message-text-2 fs-2 text-muted"></i>
														</div>
													</div>
													{/* end::Timeline icon */}
													{/* begin::Timeline content */}
													<div className="timeline-content mb-10 mt-n2">
														{/* begin::Timeline heading */}
														<div className="overflow-auto pe-3">
															{/* begin::Title */}
															<div className="fs-5 fw-semibold mb-2">Last but not least, yesterday you had "Smith Project Framing Site Visit on your calendar and you did not input progression notes, I added a reminder to your Tasks list Is this a mistake?-Yes or No</div>
															{/* end::Title */}
															{/* begin::Description */}
															<div className="d-flex align-items-center mt-1 fs-6">
																{/* begin::Info */}
																<div className="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
																{/* end::Info */}
																{/* begin::User */}
																<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Rick Johnson">
																	<img src={a1} alt="img" />
																</div>
																{/* end::User */}
															</div>
															{/* end::Description */}
														</div>
														{/* end::Timeline heading */}
													</div>
													{/* end::Timeline content */}
												</div>
												{/* end::Timeline item */}

											</div>
											{/* end::Timeline */}
										</div>
										{/* end::Tab panel */}
									</div>
									{/* end::Tab Content */}
								</div>
								{/* end::Card body */}
							</div>
							{/*  end::Table widget 14  */}
						</div>
						{/*  end::Col  */}
					</div>
					{/*  end::Row  */}
					<div className="row g-5 g-xl-10 mb-xl-10">
						{/*begin::Col */}
						<div className="col-lg-6">
							{/*begin::Card */}
							<div className="card card-flush h-lg-100">
								{/*begin::Card header */}
								<div className="card-header mt-6">
									{/*begin::Card title */}
									<div className="card-title flex-column">
										<h3 className="fw-bold mb-1">Job Schedule</h3>
									</div>
									{/*end::Card title */}
									{/*begin::Card toolbar */}
									<div className="card-toolbar">
										{/*begin::Select */}
										<select name="status" data-control="select2" data-hide-search="true" className="form-select form-select-solid form-select-sm fw-bold w-100px">
											<option value="1" selected="selected">Options</option>
											<option value="2">Option 1</option>
											<option value="3">Option 2</option>
											<option value="4">Option 3</option>
										</select>
										{/*end::Select */}
									</div>
									{/*end::Card toolbar */}
								</div>
								{/*end::Card header */}
								{/*begin::Card body */}
								<div className="card-body p-9 pt-4">
									{/*begin::Dates */}
									<ul className="nav nav-pills d-flex flex-nowrap hover-scroll-x py-2">
										{/*begin::Date */}
										<li className="nav-item me-1">
											<a className="nav-link  btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_0">
												<span className="opacity-50 fs-7 fw-semibold">Su</span>
												<span className="fs-6 fw-bold">22</span>
											</a>
										</li>
										{/*end::Date */}
										{/*begin::Date */}
										<li className="nav-item me-1">
											<a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary active" data-bs-toggle="tab" href="#kt_schedule_day_1">
												<span className="opacity-50 fs-7 fw-semibold">Mo</span>
												<span className="fs-6 fw-bold">23</span>
											</a>
										</li>
										{/*end::Date */}
										{/*begin::Date */}
										<li className="nav-item me-1">
											<a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_2">
												<span className="opacity-50 fs-7 fw-semibold">Tu</span>
												<span className="fs-6 fw-bold">24</span>
											</a>
										</li>
										{/*end::Date */}
										{/*begin::Date */}
										<li className="nav-item me-1">
											<a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_3">
												<span className="opacity-50 fs-7 fw-semibold">We</span>
												<span className="fs-6 fw-bold">25</span>
											</a>
										</li>
										{/*end::Date */}
										{/*begin::Date */}
										<li className="nav-item me-1">
											<a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_4">
												<span className="opacity-50 fs-7 fw-semibold">Th</span>
												<span className="fs-6 fw-bold">26</span>
											</a>
										</li>
										{/*end::Date */}
										{/*begin::Date */}
										<li className="nav-item me-1">
											<a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_5">
												<span className="opacity-50 fs-7 fw-semibold">Fr</span>
												<span className="fs-6 fw-bold">27</span>
											</a>
										</li>
										{/*end::Date */}
										{/*begin::Date */}
										<li className="nav-item me-1">
											<a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_6">
												<span className="opacity-50 fs-7 fw-semibold">Sa</span>
												<span className="fs-6 fw-bold">28</span>
											</a>
										</li>
										{/*end::Date */}
									</ul>
									{/*end::Dates */}
									{/*begin::Tab Content */}
									<div className="tab-content">
										{/*begin::Day */}
										<div id="kt_schedule_day_0" className="tab-pane fade show">
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">9:00 - 10:00
														<span className="fs-7 text-gray-400 text-uppercase">am</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Smith Project Framing Beguns</a>
													{/*end::Title */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">16:30 - 17:30
														<span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Ortiz Project Excavation starting</a>
													{/*end::Title */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">11:00 - 11:45
														<span className="fs-7 text-gray-400 text-uppercase">am</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Johnson Project Rough Inspection</a>
													{/*end::Title */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
										</div>
										{/*end::Day */}
										{/*begin::Day */}
										<div id="kt_schedule_day_1" className="tab-pane fade show active">
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">13:00 - 14:00
														<span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Smith Project Framing Beguns</a>
													{/*end::Title */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">11:00 - 11:45
														<span className="fs-7 text-gray-400 text-uppercase">am</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Weekly Team Stand-Up</a>
													{/*end::Title */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">16:30 - 17:30
														<span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Johnson Project Rough Inspection</a>
													{/*end::Title */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
										</div>
										{/*end::Day */}
										{/*begin::Day */}
										<div id="kt_schedule_day_2" className="tab-pane fade show">
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">11:00 - 11:45
														<span className="fs-7 text-gray-400 text-uppercase">am</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Ortiz Project Excavation starting</a>
													{/*end::Title */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">13:00 - 14:00
														<span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Committee Review Approvals</a>
													{/*end::Title */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">14:30 - 15:30
														<span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Lunch & Learn Catch Up</a>
													{/*end::Title */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
										</div>
										{/*end::Day */}
										{/*begin::Day */}
										<div id="kt_schedule_day_3" className="tab-pane fade show">
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">10:00 - 11:00
														<span className="fs-7 text-gray-400 text-uppercase">am</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Johnson Project Rough Inspection</a>
													{/*end::Title */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">16:30 - 17:30
														<span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Smith Project Framing Beguns</a>
													{/*end::Title */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">9:00 - 10:00
														<span className="fs-7 text-gray-400 text-uppercase">am</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Ortiz Project Excavation starting</a>
													{/*end::Title */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
										</div>
										{/*end::Day */}
										{/*begin::Day */}
										<div id="kt_schedule_day_4" className="tab-pane fade show">
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">12:00 - 13:00
														<span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Sales Pitch Proposal</a>
													{/*end::Title */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">9:00 - 10:00
														<span className="fs-7 text-gray-400 text-uppercase">am</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Weekly Team Stand-Up</a>
													{/*end::Title */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">13:00 - 14:00
														<span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Weekly Team Stand-Up</a>
													{/*end::Title */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
										</div>
										{/*end::Day */}
										{/*begin::Day */}
										<div id="kt_schedule_day_5" className="tab-pane fade show">
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">13:00 - 14:00
														<span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Marketing Campaign Discussion</a>
													{/*end::Title */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">11:00 - 11:45
														<span className="fs-7 text-gray-400 text-uppercase">am</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Smith Project Framing Beguns</a>
													{/*end::Title */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">11:00 - 11:45
														<span className="fs-7 text-gray-400 text-uppercase">am</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Committee Review Approvals</a>
													{/*end::Title */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
										</div>
										{/*end::Day */}
										{/*begin::Day */}
										<div id="kt_schedule_day_6" className="tab-pane fade show">
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">13:00 - 14:00
														<span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Lunch & Learn Catch Up</a>
													{/*end::Title */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">13:00 - 14:00
														<span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Creative Content Initiative</a>
													{/*end::Title */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">14:30 - 15:30
														<span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Committee Review Approvals</a>
													{/*end::Title */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
										</div>
										{/*end::Day */}
										{/*begin::Day */}
										<div id="kt_schedule_day_7" className="tab-pane fade show">
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">14:30 - 15:30
														<span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Lunch & Learn Catch Up</a>
													{/*end::Title */}
													{/*begin::User */}
													<div className="text-gray-400">Lead by
														<a href="#">David Stevenson</a></div>
													{/*end::User */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">12:00 - 13:00
														<span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Weekly Team Stand-Up</a>
													{/*end::Title */}
													{/*begin::User */}
													<div className="text-gray-400">Lead by
														<a href="#">Karina Clarke</a></div>
													{/*end::User */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">11:00 - 11:45
														<span className="fs-7 text-gray-400 text-uppercase">am</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Smith Project Framing Beguns</a>
													{/*end::Title */}
													{/*begin::User */}
													<div className="text-gray-400">Lead by
														<a href="#">Naomi Hayabusa</a></div>
													{/*end::User */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
										</div>
										{/*end::Day */}
										{/*begin::Day */}
										<div id="kt_schedule_day_8" className="tab-pane fade show">
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">12:00 - 13:00
														<span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Johnson Project Rough Inspection</a>
													{/*end::Title */}
													{/*begin::User */}
													<div className="text-gray-400">Lead by
														<a href="#">Yannis Gloverson</a></div>
													{/*end::User */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">13:00 - 14:00
														<span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Team Backlog Grooming Session</a>
													{/*end::Title */}
													{/*begin::User */}
													<div className="text-gray-400">Lead by
														<a href="#">Kendell Trevor</a></div>
													{/*end::User */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">10:00 - 11:00
														<span className="fs-7 text-gray-400 text-uppercase">am</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Marketing Campaign Discussion</a>
													{/*end::Title */}
													{/*begin::User */}
													<div className="text-gray-400">Lead by
														<a href="#">Yannis Gloverson</a></div>
													{/*end::User */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
										</div>
										{/*end::Day */}
										{/*begin::Day */}
										<div id="kt_schedule_day_9" className="tab-pane fade show">
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">14:30 - 15:30
														<span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Marketing Campaign Discussion</a>
													{/*end::Title */}
													{/*begin::User */}
													<div className="text-gray-400">Lead by
														<a href="#">Karina Clarke</a></div>
													{/*end::User */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">16:30 - 17:30
														<span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Smith Project Framing Beguns</a>
													{/*end::Title */}
													{/*begin::User */}
													<div className="text-gray-400">Lead by
														<a href="#">Karina Clarke</a></div>
													{/*end::User */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
											{/*begin::Time */}
											<div className="d-flex flex-stack position-relative mt-8">
												{/*begin::Bar */}
												<div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
												{/*end::Bar */}
												{/*begin::Info */}
												<div className="fw-semibold ms-5 text-gray-600">
													{/*begin::Time */}
													<div className="fs-5">16:30 - 17:30
														<span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
													{/*end::Time */}
													{/*begin::Title */}
													<a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">9 Degree Project Estimation Meeting</a>
													{/*end::Title */}
													{/*begin::User */}
													<div className="text-gray-400">Lead by
														<a href="#">Michael Walters</a></div>
													{/*end::User */}
												</div>
												{/*end::Info */}
												{/*begin::Action */}
												<a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
												{/*end::Action */}
											</div>
											{/*end::Time */}
										</div>
										{/*end::Day */}
									</div>
									{/*end::Tab Content */}
								</div>
								{/*end::Card body */}
							</div>
							{/*end::Card */}
						</div>
						{/*end::Col */}
						<div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
							{/*  begin::List Widget 5  */}
							<div className="card mb-5 mb-xl-8">
								{/*  begin::Header  */}
								<div className="card-header border-0 mt-4">
									<h3 className="card-title align-items-center  flex-column">
										<span className="fw-bold mb-2 text-dark">Notifications</span>
									</h3>
								</div>
								{/*  end::Header  */}
								{/*  begin::Body  */}
								<div className="card-body">
									{/*  begin::Timeline  */}
									{/*  begin::Item  */}
									<div className="d-flex flex-stack py-4">
										{/*  begin::Section  */}
										<div className="d-flex align-items-center">
											{/*  begin::Symbol  */}
											<div className="symbol symbol-35px me-4">
												<span className="symbol-label bg-light-primary">
													<i className="fa-solid fa-user-plus fs-2 text-primary"></i>
												</span>
											</div>
											{/*  end::Symbol  */}
											{/*  begin::Title  */}
											<div className="mb-0 me-2">
												<Link to="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">You got a project invitation from max Plank</Link>
												{/*   <div className="text-gray-400 fs-7">Phase 1 development</div>   */}
											</div>
											{/*  end::Title  */}
										</div>
										{/*  end::Section  */}
										{/*  begin::Label  */}
										<span className="badge badge-light fs-8">1 hrs</span>
										{/*  end::Label  */}
									</div>
									{/*  end::Item  */}
									{/*  begin::Item  */}
									<div className="d-flex flex-stack py-4">
										{/*  begin::Section  */}
										<div className="d-flex align-items-center">
											{/*  begin::Symbol  */}
											<div className="symbol symbol-35px me-4">
												<span className="symbol-label bg-light-primary">
													<i className="fa-solid fa-dollar-sign fs-2 text-primary"></i>
												</span>
											</div>
											{/*  end::Symbol  */}
											{/*  begin::Title  */}
											<div className="mb-0 me-2">
												<Link to="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">You got a request for payment release from Steve messon</Link>
												{/*   <div className="text-gray-400 fs-7">New frontend admin theme</div>   */}
											</div>
											{/*  end::Title  */}
										</div>
										{/*  end::Section  */}
										{/*  begin::Label  */}
										<span className="badge badge-light fs-8">2 hrs</span>
										{/*  end::Label  */}
									</div>
									{/*  end::Item  */}
									{/*  begin::Item  */}
									<div className="d-flex flex-stack py-4">
										{/*  begin::Section  */}
										<div className="d-flex align-items-center">
											{/*  begin::Symbol  */}
											<div className="symbol symbol-35px me-4">
												<span className="symbol-label bg-light-primary">
													<i className="fa-solid fa-truck fs-2 text-primary"></i>
												</span>
											</div>
											{/*  end::Symbol  */}
											{/*  begin::Title  */}
											<div className="mb-0 me-2">
												<Link to="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">You got a material list from Ernest Ruby</Link>
												{/*   <div className="text-gray-400 fs-7">Corporeate staff profiles</div>   */}
											</div>
											{/*  end::Title  */}
										</div>
										{/*  end::Section  */}
										{/*  begin::Label  */}
										<span className="badge badge-light fs-8">5 hrs</span>
										{/*  end::Label  */}
									</div>
									{/*  end::Item  */}
									{/*  begin::Item  */}
									<div className="d-flex flex-stack py-4">
										{/*  begin::Section  */}
										<div className="d-flex align-items-center">
											{/*  begin::Symbol  */}
											<div className="symbol symbol-35px me-4">
												<span className="symbol-label bg-light-primary">
													<i className="fa-solid fa-user-plus fs-2 text-primary"></i>
												</span>
											</div>
											{/*  end::Symbol  */}
											{/*  begin::Title  */}
											<div className="mb-0 me-2">
												<Link to="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">You got a project invitation from Stephen Clerk</Link>
												{/*   <div className="text-gray-400 fs-7">Phase 1 development</div>   */}
											</div>
											{/*  end::Title  */}
										</div>
										{/*  end::Section  */}
										{/*  begin::Label  */}
										<span className="badge badge-light fs-8">1 days</span>
										{/*  end::Label  */}
									</div>
									{/*  end::Item  */}
									{/*  begin::Item  */}
									<div className="d-flex flex-stack py-4">
										{/*  begin::Section  */}
										<div className="d-flex align-items-center">
											{/*  begin::Symbol  */}
											<div className="symbol symbol-35px me-4">
												<span className="symbol-label bg-light-primary">
													<i className="fa-solid fa-dollar-sign fs-2 text-primary"></i>
												</span>
											</div>
											{/*  end::Symbol  */}
											{/*  begin::Title  */}
											<div className="mb-0 me-2">
												<Link to="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">You got a request for payment release from Tony wilbert</Link>
												{/*   <div className="text-gray-400 fs-7">New frontend admin theme</div>   */}
											</div>
											{/*  end::Title  */}
										</div>
										{/*  end::Section  */}
										{/*  begin::Label  */}
										<span className="badge badge-light fs-8">2 days</span>
										{/*  end::Label  */}
									</div>
									{/*  end::Item  */}
									{/*  end::Timeline  */}
								</div>
								{/*  end: Card Body  */}
							</div>
							{/*  end: List Widget 5  */}
						</div>
						<div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
							<div class="card card-flush h-xl-100 mb-xl-8">
								{/* begin::Header */}
								<div class="card-header pt-5">
									{/* begin::Title */}
									<h3 class="card-title fw-bold text-dark">Financial Summary</h3>
									{/* end::Title */}
								</div>
								{/* end::Header */}
								{/* begin::Body */}
								<div class="card-body d-flex justify-content-between flex-column pt-0">
									{/* begin::Chart */}
									{/* end::Chart */}
									{/* begin::Items */}
									<div class="m-0">
										{/* begin::Item */}
										<div class="d-flex flex-stack mb-9">
											{/* begin::Section */}
											<div class="d-flex align-items-center me-2">
												{/* begin::Symbol */}
												<div class="symbol symbol-50px me-5">
														<img src={a14} class="h-50" alt="a14" />
												</div>
												{/* end::Symbol */}
												{/* begin::Title */}
												<div>
													<a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Jim's Plumbing</a>
													<div class="fs-7 text-muted fw-semibold mt-1">Upcoming Bills</div>
												</div>
												{/* end::Title */}
											</div>
											{/* end::Section */}
											{/* begin::Label */}
											<div class="badge badge-light badge-lg fw-bold p-2 text-gray-600">$6,700</div>
											{/* end::Label */}
										</div>
										{/* end::Item */}
										{/* begin::Item */}
										<div class="d-flex flex-stack mb-9">
											{/* begin::Section */}
											<div class="d-flex align-items-center me-2">
												{/* begin::Symbol */}
												<div class="symbol symbol-50px me-5">
													<img src={a20} class="h-50" alt="a20" />
												</div>
												{/* end::Symbol */}
												{/* begin::Title */}
												<div>
													<a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Bob's Electric</a>
													<div class="fs-7 text-muted fw-semibold mt-1">Upcoming Bills</div>
												</div>
												{/* end::Title */}
											</div>
											{/* end::Section */}
											{/* begin::Label */}
											<div class="badge badge-light badge-lg fw-bold p-2 text-gray-600">$4,250</div>
											{/* end::Label */}
										</div>
										{/* end::Item */}
										{/* begin::Item */}
										<div class="d-flex flex-stack mb-9">
											{/* begin::Section */}
											<div class="d-flex align-items-center me-2">
												{/* begin::Symbol */}
												<div class="symbol symbol-50px me-5">
													<img src={a2} class="h-50" alt="a2" />
												</div>
												{/* end::Symbol */}
												{/* begin::Title */}
												<div>
													<a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Jim's Plumbing</a>
													<div class="fs-7 text-muted fw-semibold mt-1">Upcoming Payment</div>
												</div>
												{/* end::Title */}
											</div>
											{/* end::Section */}
											{/* begin::Label */}
											<div class="badge badge-light badge-lg fw-bold p-2 text-gray-600">$4,500</div>
											{/* end::Label */}
										</div>
										{/* end::Item */}
										{/* begin::Item */}
										<div class="d-flex flex-stack">
											{/* begin::Section */}
											<div class="d-flex align-items-center me-2">
												{/* begin::Symbol */}
												<div class="symbol symbol-50px me-5">
													<img src={a23} class="h-50" alt="a23" />
												</div>
												{/* end::Symbol */}
												{/* begin::Title */}
												<div>
													<a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Bob's Electric</a>
													<div class="fs-7 text-muted fw-semibold mt-1">Upcoming Payment</div>
												</div>
												{/* end::Title */}
											</div>
											{/* end::Section */}
											{/* begin::Label */}
											<div class="badge badge-light badge-lg fw-bold p-2 text-gray-600">$3,500</div>
											{/* end::Label */}
										</div>
										{/* end::Item */}
									</div>
									{/* end::Items */}
								</div>
								{/* end::Body */}
							</div>
						</div>
						<div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
							<div className="card card-flush ">
								{/* begin::Header */}
								<div className="card-header pt-7">
									{/* begin::Title */}
									<h3 className="card-title align-items-start flex-column">
										<span className="card-label fw-bold text-gray-800">Sales Summary</span>
									</h3>
									{/* end::Title */}
								</div>
								{/* end::Header */}
								{/* begin::Body */}
								<div className="card-body">
									{/* begin::Table container */}
									<div className="table-responsive">
										{/* begin::Table */}
										<table className="table table-row-dashed align-middle">
											{/* begin::Table body */}
											<tbody>
												<tr>
													<td className="ps-0">
														<div className="text-muted fw-bold text-hover-primary mb-1 fs-6 text-start pe-0">Uncontacted Leads</div>
														{/* <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Item: #XDG-2347</span> */}
													</td>
													<td>
														<span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">3</span>
													</td>
												</tr>
												<tr>
													<td className="ps-0">
														<div className="text-muted fw-bold text-hover-primary mb-1 fs-6 text-start pe-0">Next 7 days Appointments</div>
														{/* <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Item: #XDG-2347</span> */}
													</td>
													<td>
														<span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">4</span>
													</td>
												</tr>
												<tr>
													<td className="ps-0">
														<div className="text-muted fw-bold text-hover-primary mb-1 fs-6 text-start pe-0">Next 7 days Contract Signings</div>
														{/* <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Item: #XDG-2347</span> */}
													</td>
													<td>
														<span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">2</span>
													</td>
												</tr>
												<tr>
													<td className="ps-0">
														<div className="text-muted fw-bold text-hover-primary mb-1 fs-6 text-start pe-0">Your Appointments Today 1:00 pm Jake Michaels</div>
														{/* <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Item: #XDG-2347</span> */}
													</td>
													<td>
														<span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">Custom New Home</span>
													</td>
												</tr>
											</tbody>
											{/* end::Table body */}
										</table>
									</div>
									{/* end::Table */}

								</div>
								{/* end::Body */}
							</div>
						</div>
					</div>
					<div className="row g-5 g-xl-10 mb-xl-10 my-1">
						<div className="col-lg-12">
							<div className="google-map-code">
								<iframe title='map' className='rounded shadow' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{ border: "0px" }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
							</div>
						</div>

					</div>
					{/*  begin::Row  */}
				</div>
				{/*  end::Content  */}
			</div >
			{/* < !--end::Content wrapper-- > */}
		</>
	)
}
function Buildersummary() {
	return <Layout data={<SummaryData />} activePage="Summary"/>
}
export default Buildersummary;