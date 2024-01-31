import React from 'react'
import Layout from '../pages/layout';
import blogo from '../assets/images/b-logo.jpg'
import { Link} from 'react-router-dom';


function OverViewBiddDate() {
  return (
                        <>
                        {/* <div class="d-flex flex-column flex-column-fluid"> */}
                        <div id="kt_app_content" className="app-content flex-column-fluid">
									{/* <!--begin::Navbar--> */}
									<div className="card mb-6 mb-xl-9">
										<div className="card-body pt-9 pb-0">
											{/* <!--begin::Details--> */}
											<div className="d-flex flex-wrap flex-sm-nowrap mb-6">
												{/* <!--begin::Image--> */}
												<div className="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
													<img className="mw-50px mw-lg-75px" src={blogo} alt="logo" />
												</div>
												{/* <!--end::Image--> */}
												{/* <!--begin::Wrapper--> */}
												<div className="flex-grow-1">
													{/* <!--begin::Head--> */}
													<div className="d-flex justify-content-between align-items-start flex-wrap">
														{/* <!--begin::Details--> */}
														<div className="d-flex flex-column">
															{/* <!--begin::Status--> */}
															<div className="d-flex align-items-center mb-1">
																<Link to="/" className="text-gray-800 text-hover-primary fs-2 fw-bold me-3">Home Renovation</Link>
															</div>
															{/* <!--end::Status--> */}
														</div>
														{/* <!--end::Details--> */}
													</div>
													<div className="fs-6 text-muted fw-bold">BTG-2356</div>
													<div className="text-gray-800 mt-3 fs-4 fw-bold me-3">Plumbing</div>
													{/* <!--end::Head--> */}
													{/* <!--begin::Info--> */}
													<div className="d-flex flex-wrap justify-content-start mt-3">
														{/* <!--begin::Stats--> */}
														<div className="d-flex flex-wrap">
															{/* <!--begin::Stat--> */}
															<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
																{/* <!--begin::Number--> */}
																<div className="d-flex align-items-center">
																	<div className="fs-4 fw-bold">29 Jan, 2023</div>
																</div>
																{/* <!--end::Number--> */}
																{/* <!--begin::Label--> */}
																<div className="fw-semibold fs-6 text-gray-400">Due Date</div>
																{/* <!--end::Label--> */}
															</div>
															{/* <!--end::Stat--> */}
															{/* <!--begin::Stat--> */}
															<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
																{/* <!--begin::Number--> */}
																<div className="d-flex align-items-center">
																	<div className="fs-4 fw-bold" data-kt-countup="true" data-kt-countup-value="15000" data-kt-countup-prefix="$">0</div>
																</div>
																{/* <!--end::Number--> */}
																{/* <!--begin::Label--> */}
																<div className="fw-semibold fs-6 text-gray-400">Budgets</div>
																{/* <!--end::Label--> */}
															</div>
															{/* <!--end::Stat--> */}
														</div>
														{/* <!--end::Stats--> */}
														
													{/* <!--end::Info--> */}
												</div>
												{/* <!--end::Wrapper--> */}
												<div className="d-flex justify-content-end"><Link to="/" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Contract Download" className="btn btnButton h-45px fs-5 fw-bold mb-1"><i className="fa-solid fa-download p-0"></i></Link></div>
											</div>
										</div>
									</div>
                            </div>
                            </div>
                            {/* <!--begin::Row--> */}
									{/* <!--begin::Card--> */}
				<div class="card card-md-stretch me-xl-3 mb-md-0 mb-6">
					{/* <!--begin::Body--> */}
					<div class="card-body p-10 p-lg-15">
						{/* <!--begin::Timeline--> */}
                        <div class="timeline">
														{/* <!--begin::Timeline item--> */}
														<div class="timeline-item">
															{/* <!--begin::Timeline line--> */}
															<div class="timeline-line w-40px"></div>
															{/* <!--end::Timeline line--> */}
															{/* <!--begin::Timeline icon--> */}
															<div class="timeline-icon symbol symbol-circle symbol-40px me-4">
																<div class="symbol-label bg-light">
																	<i class="ki-outline ki-message-text-2 fs-2 text-gray-500"></i>
																</div>
															</div>
															{/* <!--end::Timeline icon--> */}
															{/* <!--begin::Timeline content--> */}
															<div class="timeline-content mb-10 mt-n1">
																{/* <!--begin::Timeline heading--> */}
																<div class="pe-3 mb-5">
																	{/* <!--begin::Title--> */}
																	<div class="fs-5 fw-semibold mb-2">In Scope</div>
																	{/* <!--end::Title--> */}
																</div>
																{/* <!--end::Timeline heading--> */}
																{/* <!--begin::Timeline details--> */}
																<div class="overflow-auto pb-5">
																	{/* <!--begin::Record--> */}
																	<div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
																	There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
																	</div>
																	{/* <!--end::Record--> */}
																</div>
																{/* <!--end::Timeline details--> */}
															</div>
															{/* <!--end::Timeline content--> */}
														</div>
														{/* <!--end::Timeline item--> */}
														{/* <!--begin::Timeline item--> */}
														<div class="timeline-item">
															{/* <!--begin::Timeline line--> */}
															<div class="timeline-line w-40px"></div>
															{/* <!--end::Timeline line--> */}
															{/* <!--begin::Timeline icon--> */}
															<div class="timeline-icon symbol symbol-circle symbol-40px me-4">
																<div class="symbol-label bg-light">
																	<i class="ki-outline ki-message-text-2 fs-2 text-gray-500"></i>
																</div>
															</div>
															{/* <!--end::Timeline icon--> */}
															{/* <!--begin::Timeline content--> */}
															<div class="timeline-content mb-10 mt-n1">
																{/* <!--begin::Timeline heading--> */}
																<div class="pe-3 mb-5">
																	{/* <!--begin::Title--> */}
																	<div class="fs-5 fw-semibold mb-2">Not In Scope</div>
																	{/* <!--end::Title--> */}
																</div>
																{/* <!--end::Timeline heading--> */}
																{/* <!--begin::Timeline details--> */}
																<div class="overflow-auto pb-5">
																	{/* <!--begin::Record--> */}
																	<div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
																	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
																	</div>
																	{/* <!--end::Record--> */}
																</div>
																{/* <!--end::Timeline details--> */}
															</div>
															{/* <!--end::Timeline content--> */}
														</div>
														{/* <!--end::Timeline item--> */}
                                                        {/* <!--begin::Timeline item--> */}
														<div class="timeline-item">
															{/* <!--begin::Timeline line--> */}
															<div class="timeline-line w-40px"></div>
															{/* <!--end::Timeline line--> */}
															{/* <!--begin::Timeline icon--> */}
															<div class="timeline-icon symbol symbol-circle symbol-40px me-4">
																<div class="symbol-label bg-light">
																	<i class="ki-outline ki-message-text-2 fs-2 text-gray-500"></i>
																</div>
															</div>
															{/* <!--end::Timeline icon--> */}
															{/* <!--begin::Timeline content--> */}
															<div class="timeline-content mb-10 mt-n1">
																{/* <!--begin::Timeline heading--> */}
																<div class="pe-3 mb-5">
																	{/* <!--begin::Title--> */}
																	<div class="fs-5 fw-semibold mb-2">Payment Terms</div>
																	{/* <!--end::Title--> */}
																</div>
																{/* <!--end::Timeline heading--> */}
																{/* <!--begin::Timeline details--> */}
																<div class="overflow-auto pb-5">
																	{/* <!--begin::Record--> */}
																	<div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
																	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
																	</div>
																	{/* <!--end::Record--> */}
																</div>
																{/* <!--end::Timeline details--> */}
															</div>
															{/* <!--end::Timeline content--> */}
														</div>
														{/* <!--end::Timeline item--> */}
													</div>
													{/* <!--end::Timeline--> */}
                                                    {/* <!--begin::Actions--> */}
						                            <div class="text-center mt-5">
						 	                            <Link to="../addbid/"><button class="btn btn-light me-3">Cancel</button></Link>
							                            <Link to="../projectdetails/"><button type="submit" class="btn btnButton">
								                            <span class="indicator-label">Submit</span>
								                            <span class="indicator-progress">Please wait...
									                            <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
							                            </button></Link>
						                            </div>
						                            {/* <!--end::Actions--> */}
					                        </div>
                                        {/* <!--end::Body--> */}
                                    </div>
				                    {/* <!--end::Card--> */}
									{/* <!--end::Row--> */}
                            </>
    
    
  )
}
function OverviewBid() {
    return <Layout data={<OverViewBiddDate />} />
  }
  export default OverviewBid;
