import React from 'react'
import Layout from '../pages/layout';
import blogo from '../assets/images/b-logo.jpg'
import { Link } from 'react-router-dom';
import pdf_svg from "../assets/images/files/pdf.svg"
import doc_svg from "../assets/images/files/doc.svg"
import css_svg from "../assets/images/files/css.svg"


function AddbidData() {
    document.title = 'Buildify AI | Add Bid';
    return (
        <>
            {/* begin::Content wrapper*/}
            <div className="d-flex flex-column flex-column-fluid">
                {/*begin::Content*/}
                <div id="kt_app_content" className="app-content flex-column-fluid">
                   
                    {/*begin::Row*/}
                    {/*begin::Card*/}
                    <div className="card card-md-stretch me-xl-3 mb-md-0 mb-6">
                        {/*begin::Body*/}
                        <div className="card-body p-5">
                        <div class="card mb-5 mb-xl-8">
										{/* begin::Card body */}
										<div class="card-body">
											{/* begin::Tab Content */}
											<div class="tab-content">
												</div>
												{/* begin::Tap pane */}
												<div class="card-body show active p-5 tab-pane fade" id="kt_tab_5" role="tabpanel">
													{/* begin::Header */}
													<div class="card-header border-0 p-0" style={{minHeight: "0px"}}>
														<h3 class="card-title align-items-start flex-column">
															{/*  <a class="btn btnButton" href="../addbid/">Bid</Link>  */}
														</h3>
														<div class="card-toolbar">
															<i class="ki-outline ki-magnifier fs-3 position-absolute ms-4"></i>
															<input type="text" data-kt-ecommerce-category-filter="search" class="form-control form-control-solid w-250px ps-12" placeholder="Search"/>
														</div>
													</div>
													{/* end::Header */}
													{/* begin::Table */}
													<div class="table-responsive">
																{/* begin::Table */}
																<table class="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
																	{/* begin::Table head */}
																	<thead>
																		<tr class="border-0">
																			<th class="min-w-50px text-muted fs-3">Project</th>
																			<th class="min-w-50px text-muted fs-3">Task</th>
																			<th class="min-w-110px text-muted fs-3">Timeline</th>
																			<th class="min-w-110px text-muted fs-3">Budget</th>
																			<th class="min-w-50px"></th>
																		</tr>
																	</thead>
																	{/* end::Table head */}
																	{/* begin::Table body */}
																	<tbody>
																		<tr>
                                                                            <td class="d-flex align-items-center">
															                	{/* begin:: Avatar  */}
															                	<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
																	            	<div class="symbol-label">
																						<img src={pdf_svg} alt="imagee" class="w-90 img-fluid"/>
																	            	</div>
															                	</div>
															               	 	{/* end::Avatar */}
															                	{/* begin::User details */}
															                	<div class="d-flex flex-column">
																					<Link to="../bids/">
																					<div class="fs-3 text-dark">Home Renovation</div>
                                                                                	<div class="fs-6 text-muted fw-bold">BTG-2356</div>
																					</Link>
															                	</div>
															                	{/* begin::User details */}
														                	</td>
																			<td class="text-muted fw-bold">Planning</td>
																			<td class="text-start text-muted fs-5">11/08/23 to 14/12/23 </td>
																			<td class="text-start text-muted fs-5">50,000/1,00,000 </td>
																			<td class="text-end">
																			</td>
																			<td class="text-end">
																				<Link to="#" class="btn  btnButton" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-original-title="Edit Bid" data-kt-initialized="1">Edit</Link>
                                                                                <Link to="#" class="btn  btnButton" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-original-title="Retract Bid" data-kt-initialized="1">Retract Bid</Link>
																			</td>
																		</tr>
                                                                        <tr>
                                                                            <td class="d-flex align-items-center">
															                	{/* begin:: Avatar  */}
															                	<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
																	            	<div class="symbol-label">
																						<img src={doc_svg} alt="imagee" class="w-90 img-fluid"/>
																	            	</div>
															                	</div>
															               	 	{/* end::Avatar */}
															                	{/* begin::User details */}
															                	<div class="d-flex flex-column">
																					<Link to="../bids/">
																					<div class="fs-3 text-dark">Residential Building</div>
                                                                                	<div class="fs-6 text-muted fw-bold">BTG-2356</div>
																					</Link>
															                	</div>
															                	{/* begin::User details */}
														                	</td>
																			<td class="text-muted fw-bold">Interior design</td>
																			<td class="text-start text-muted fs-5">01/08/23 to 20/12/23 </td>
																			<td class="text-start text-muted fs-5">80,000/120,000 </td>
																			<td class="text-end">
																			</td>
																			<td class="text-end">
																				<Link to="#" class="btn  btnButton" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-original-title="Edit Bid" data-kt-initialized="1">Edit</Link>
                                                                                <Link to="#" class="btn  btnButton" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-original-title="Retract Bid" data-kt-initialized="1">Retract Bid</Link>
																			</td>
																		</tr>
                                                                        <tr>
                                                                            <td class="d-flex align-items-center">
															                	{/* begin:: Avatar  */}
															                	<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
																	            	<div class="symbol-label">
																						<img src={css_svg} alt="imagee1" class="w-90 img-fluid"/>
																	            	</div>
															                	</div>
															               	 	{/* end::Avatar */}
															                	{/* begin::User details */}
															                	<div class="d-flex flex-column">
																					<Link to="../bids/">
																					<div class="fs-3 text-dark">Federal Construction</div>
                                                                                	<div class="fs-6 text-muted fw-bold">BTG-2356</div>
																					</Link>
															                	</div>
															                	{/* begin::User details */}
														                	</td>
																			<td class="text-muted fw-bold">Pre Construction</td>
																			<td class="text-start text-muted fs-5">15/05/23 to 01/01/24 </td>
																			<td class="text-start text-muted fs-5">50,000/80,000 </td>
																			<td class="text-end">
																			</td>
																			<td class="text-end">
																				<Link to="#" class="btn  btnButton" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-original-title="Edit Bid" data-kt-initialized="1">Edit</Link>
                                                                                <Link to="#" class="btn  btnButton" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-original-title="Retract Bid" data-kt-initialized="1">Retract Bid</Link>
																			</td>
																		</tr>
																	</tbody>
																	{/* end::Table body */}
																</table>
															</div>
															{/* end::Table */}
												</div>
												{/* end::Tap pane */}	
											</div>
											{/* end::Tab Content */}
										</div>
                            
                            {/*end::Accordion*/}
                        </div>
                        {/*end::Body*/}
                    </div>
                    {/*end::Card*/}
                    {/*end::Row*/}
                </div>
                {/*end::Content*/}
            </div>
            {/*end::Content wrapper*/}

        </>
    )
}
function BuilderAddbid() {
    return <Layout data={<AddbidData />} />
}
export default BuilderAddbid;
