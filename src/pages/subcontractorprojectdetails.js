import React,{useState} from 'react'
import { Link} from 'react-router-dom';
import Layout from './layout';
import avtar_300_1 from "../assets/images/Avatar/300-1.jpg"
import doc_svg from "../assets/images/files/doc.svg"
import css_svg from "../assets/images/files/css.svg"
import blogo from '../assets/images/b-logo.jpg'
import $ from "jquery";
import { logDOM } from '@testing-library/react';
function ProjectDetailData() {
	const [activeNav, setActiveNav] = useState(1);
	const [uploadFileModel, setUploadFileModel] = useState(false);
	console.log("uploadFileModel =",uploadFileModel);

    const changeNave = (id) => {
        setActiveNav(id);
    };

	function filepage(){

		$('.folderpage').removeClass('show active pagehide');
		$('.filepage').addClass('show active pagehide');

    }
  return (
                    <div className="d-flex flex-column flex-column-fluid">
                        {/* <!--begin::Content--> */}
                        <div id="kt_app_content" className="app-content flex-column-fluid">

                        {/* <!--begin::Navbar--> */}
									<div className="card mb-6 mb-xl-9">
										<div className="card-body pt-9 pb-0">
											{/* <!--begin::Details--> */}
											<div className="d-flex flex-wrap flex-sm-nowrap mb-6">
												{/* <!--begin::Image--> */}
												<div className="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
													<img className="mw-50px mw-lg-75px" src={blogo} alt="pic" />
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
																<Link to="" className="text-gray-800 text-hover-primary fs-2 fw-bold me-3">Home Renovation</Link>
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
																<div className="fw-semibold fs-6 text-gray-400">Budget Spent</div>
																{/* <!--end::Label--> */}
															</div>
															{/* <!--end::Stat--> */}
														</div>
														{/* <!--end::Stats--> */}
													</div>
													{/* <!--end::Info--> */}
												</div>
												{/* <!--end::Wrapper--> */}
												<div className="justify-content-end">
													<div className="d-flex justify-content-end">
													<Link to="" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Contract Download" className="btn btnButton h-45px fs-5 fw-bold mb-1"><i className="fa-solid fa-download p-0"></i></Link>
													</div>
													<div className="d-flex justify-content-end mt-10">
													<Link to="" className="btn btnButton h-45px fs-5 fw-bold mb-1">Mark This Job As Complete</Link>
													</div>
												</div>
											</div>
											{/* <!--end::Details--> */}
											<div className="separator"></div>
											{/* <!--begin::Nav--> */}
											<ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
												{/* <!--begin::Nav item--> */}
												<li className="nav-item">
													<Link className={`nav-link text-active-primary py-5 me-6 ${activeNav == 1 ? 'active' : ''}`} onClick={() => changeNave(1)} id="nav_1">Activity</Link>
												</li>
												{/* <!--end::Nav item--> */}
												{/* <!--begin::Nav item--> */}
												<li className="nav-item">
													<Link className={`nav-link text-active-primary py-5 me-6 ${activeNav == 2 ? 'active' : ''}`} onClick={() => changeNave(2)} id="nav_2">Files</Link>
												</li>
												{/* <!--end::Nav item--> */}
												{/* <!--begin::Nav item--> */}
												<li className="nav-item">
													<Link className={`nav-link text-active-primary py-5 me-6 ${activeNav == 3 ? 'active' : ''}`} onClick={() => changeNave(3)} id="nav_3">Materials</Link>
												</li>
												{/* <!--end::Nav item--> */}
                                                {/* <!--begin::Nav item--> */}
                                                <li className="nav-item">
													<Link className={`nav-link text-active-primary py-5 me-6 ${activeNav == 4 ? 'active' : ''}`} onClick={() => changeNave(4)} id="nav_4">Bid</Link>
												</li>
                                                {/* <!--end::Nav item--> */}
											</ul>
											{/* <!--end::Nav--> */}
										</div>
									</div>
									{/* <!--end::Navbar--> */}

                                    {/* <!--begin::Row--> */}
									<div className="card mb-5 mb-xl-8">
										{/* <!--begin::Card body--> */}
										<div className="card-body">
											{/* <!--begin::Tab Content--> */}
											<div className="tab-content">
												{/* <!--begin::Tab panel--> */}
												{activeNav == 1 && (
												<div className="card-body p-5 tab-pane fade show active" id="kt_tab_1" role="tabpanel">
												<div className="">	
													<h3 className="fw-bold mb-10 d-flex text-gray-800">Progression Notes</h3>
													<div className="d-flex justify-content-end">
														<Link to="" className="btn btnButton" data-bs-toggle="modal" data-bs-target="#kt_modal_new_comment">Add Progression Notes</Link>
													</div>
												</div>
												{/* <!--begin::Timeline--> */}
												<div className="timeline">
														{/* <!--begin::Timeline item--> */}
														<div className="timeline-item">
															{/* <!--begin::Timeline line--> */}
															<div className="timeline-line w-40px"></div>
															{/* <!--end::Timeline line--> */}
															{/* <!--begin::Timeline icon--> */}
															<div className="timeline-icon symbol symbol-circle symbol-40px me-4">
																<div className="symbol-label bg-light">
																	<i className="ki-outline ki-message-text-2 fs-2 text-gray-500"></i>
																</div>
															</div>
															{/* <!--end::Timeline icon--> */}
															{/* <!--begin::Timeline content--> */}
															<div className="timeline-content mb-10 mt-n1">
																{/* <!--begin::Timeline heading--> */}
																<div className="pe-3 mb-5">
																	{/* <!--begin::Description--> */}
																	<div className="d-flex align-items-center mt-1 fs-6">
																		{/* <!--begin::User--> */}
																		<div className="symbol symbol-circle symbol-40px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" aria-label="Nina Nilson" data-bs-original-title="Nina Nilson" data-kt-initialized="1">
																			<img src={avtar_300_1} alt="img"/>
																		</div>
																		{/* <!--end::User--> */}
																		{/* <!--begin::Info--> */}
																		<div className="me-2 fw-semibold mx-3 fs-4">Max Smith</div>
																		<div className="me-2 fw-semibold fs-5">Sent at 4:23 PM</div>
																		{/* <!--end::Info--> */}
																	</div>
																	{/* <!--end::Description--> */}
																	{/* <!--begin::Title--> */}
																	<div className="fs-6 text-muted mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
																	{/* <!--end::Title--> */}
																</div>
																{/* <!--end::Timeline heading--> */}
															</div>
															{/* <!--end::Timeline content--> */}
														</div>
														{/* <!--end::Timeline item--> */}
														{/* <!--begin::Timeline item--> */}
														<div className="timeline-item">
															{/* <!--begin::Timeline line--> */}
															<div className="timeline-line w-40px"></div>
															{/* <!--end::Timeline line--> */}
															{/* <!--begin::Timeline icon--> */}
															<div className="timeline-icon symbol symbol-circle symbol-40px me-4">
																<div className="symbol-label bg-light">
																	<i className="ki-outline ki-message-text-2 fs-2 text-gray-500"></i>
																</div>
															</div>
															{/* <!--end::Timeline icon--> */}
															{/* <!--begin::Timeline content--> */}
															<div className="timeline-content mb-10 mt-n1">
																{/* <!--begin::Timeline heading--> */}
																<div className="pe-3 mb-5">
																	{/* <!--begin::Description--> */}
																	<div className="d-flex align-items-center mt-1 fs-6">
																		{/* <!--begin::User--> */}
																		<div className="symbol symbol-circle symbol-40px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" aria-label="Nina Nilson" data-bs-original-title="Nina Nilson" data-kt-initialized="1">
																			<img src={avtar_300_1} alt="img"/>
																		</div>
																		{/* <!--end::User--> */}
																		{/* <!--begin::Info--> */}
																		<div className="me-2 fw-semibold mx-3 fs-4">Max Smith</div>
																		<div className="me-2 fw-semibold fs-5">Sent at 4:23 PM</div>
																		{/* <!--end::Info--> */}
																	</div>
																	{/* <!--end::Description--> */}
																	{/* <!--begin::Title--> */}
																	<div className="fs-6 text-muted mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
																	{/* <!--end::Title--> */}
																</div>
																{/* <!--end::Timeline heading--> */}
															</div>
															{/* <!--end::Timeline content--> */}
														</div>
														{/* <!--end::Timeline item--> */}
													</div>
													{/* <!--end ::Timeline--> */}
												<h3 className="fw-bold mb-10 text-gray-800">Overview</h3>
													{/* <!--begin::Timeline--> */}
													<div className="timeline">
														{/* <!--begin::Timeline item--> */}
														<div className="timeline-item">
															{/* <!--begin::Timeline line--> */}
															<div className="timeline-line w-40px"></div>
															{/* <!--end::Timeline line--> */}
															{/* <!--begin::Timeline icon--> */}
															<div className="timeline-icon symbol symbol-circle symbol-40px me-4">
																<div className="symbol-label bg-light">
																	<i className="ki-outline ki-message-text-2 fs-2 text-gray-500"></i>
																</div>
															</div>
															{/* <!--end::Timeline icon--> */}
															{/* <!--begin::Timeline content--> */}
															<div className="timeline-content mb-10 mt-n1">
																{/* <!--begin::Timeline heading--> */}
																<div className="pe-3 mb-5">
																	{/* <!--begin::Title--> */}
																	<div className="fs-5 fw-semibold mb-2">Description</div>
																	{/* <!--end::Title--> */}
																</div>
																{/* <!--end::Timeline heading--> */}
																{/* <!--begin::Timeline details--> */}
																<div className="overflow-auto pb-5">
																	{/* <!--begin::Record--> */}
																	<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
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
														<div className="timeline-item">
															{/* <!--begin::Timeline line--> */}
															<div className="timeline-line w-40px"></div>
															{/* <!--end::Timeline line--> */}
															{/* <!--begin::Timeline icon--> */}
															<div className="timeline-icon symbol symbol-circle symbol-40px">
																<div className="symbol-label bg-light">
																	<i className="ki-outline ki-disconnect fs-2 text-gray-500"></i>
																</div>
															</div>
															{/* <!--end::Timeline icon--> */}
															{/* <!--begin::Timeline content--> */}
															<div className="timeline-content mb-10 mt-n1">
																{/* <!--begin::Timeline heading--> */}
																<div className="mb-5 pe-3">
																	{/* <!--begin::Title--> */}
																	<Link to="" className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">Attachments</Link>
																	{/* <!--end::Title--> */}
																</div>
																{/* <!--end::Timeline heading--> */}
																{/* <!--begin::Timeline details--> */}
																<div className="overflow-auto pb-5">
																	<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
																		{/* <!--begin::Item--> */}
																		<div className="d-flex flex-aligns-center pe-10 pe-lg-20">
																			{/* <!--begin::Icon--> */}
																			<img alt="../../demo34/dist/apps/projects/project.html" className="w-30px me-3" src={doc_svg} />
																			{/* <!--end::Icon--> */}
																			{/* <!--begin::Info--> */}
																			<div className="ms-1 fw-semibold">
																				{/* <!--begin::Desc--> */}
																				<Link to="" className="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</Link>
																				{/* <!--end::Desc--> */}
																				{/* <!--begin::Number--> */}
																				<div className="text-gray-400">18kb</div>
																				{/* <!--end::Number--> */}
																			</div>
																			{/* <!--end::Info--> */}
																		</div>
																		{/* <!--end::Item--> */}
																		{/* <!--begin::Item--> */}
																		<div className="d-flex flex-aligns-center">
																			{/* <!--begin::Icon--> */}
																			<img alt="../../demo34/dist/apps/projects/project.html" className="w-30px me-3" src={css_svg} />
																			{/* <!--end::Icon--> */}
																			{/* <!--begin::Info--> */}
																			<div className="ms-1 fw-semibold">
																				{/* <!--begin::Desc--> */}
																				<Link to="" className="fs-6 text-hover-primary fw-bold">Finance Reports</Link>
																				{/* <!--end::Desc--> */}
																				{/* <!--begin::Number--> */}
																				<div className="text-gray-400">20mb</div>
																				{/* <!--end::Number--> */}
																			</div>
																			{/* <!--end::Icon--> */}
																		</div>
																		{/* <!--end::Item--> */}
																	</div>
																</div>
																{/* <!--end::Timeline details--> */}
															</div>
															{/* <!--end::Timeline content--> */}
														</div>
														{/* <!--end::Timeline item--> */}
													</div>
													{/* <!--end::Timeline--> */}
												</div>
												)}
												{/* <!--end::Tab panel--> */}
												{/* <!--begin::Tap pane--> */}
												{activeNav == 2 && (
												<div className="card-body p-5 tab-pane active folderpage active" id="kt_tab_2" role="tabpanel">
												{/* <!--begin::Card--> */}
								<div className="card card-flush">
									{/* <!--begin::Card header--> */}
									<div className="card-header pt-8">
										<div className="card-title">
											{/* <!--begin::Search--> */}
											<div className="d-flex align-items-center position-relative my-1">
												<i className="ki-outline ki-magnifier fs-1 position-absolute ms-6"></i>
												<input type="text" data-kt-filemanager-table-filter="search" className="form-control form-control-solid w-250px ps-15" placeholder="Search Files & Folders" />
											</div>
											{/* <!--end::Search--> */}
										</div>
										{/* <!--begin::Card toolbar--> */}
										<div className="card-toolbar">
											{/* <!--begin::Toolbar--> */}
											<div className="d-flex justify-content-end" data-kt-filemanager-table-toolbar="base">
												{/* <!--begin::Export--> */}
												<button type="button" className="btn btn-flex btn-light-primary me-3" id="kt_file_manager_new_folder">
												<i className="ki-outline ki-add-folder fs-2"></i>New Folder</button>
												{/* <!--end::Export--> */}
												{/* <!--begin::Add customer--> */}
												<button type="button" className="btn btn-flex btnButton" onClick={() => setUploadFileModel(true)} data-bs-toggle='model' data-bs-target="#kt_modal_upload">
												<i className="ki-outline ki-folder-up fs-2"></i>Upload Files</button>
												{/* <!--end::Add customer--> */}
											</div>
											{/* <!--end::Toolbar--> */}
											{/* <!--begin::Group actions--> */}
											<div className="d-flex justify-content-end align-items-center d-none" data-kt-filemanager-table-toolbar="selected">
												<div className="fw-bold me-5">
												<span className="me-2" data-kt-filemanager-table-select="selected_count"></span>Selected</div>
												<button type="button" className="btn btn-danger" data-kt-filemanager-table-select="delete_selected">Delete Selected</button>
											</div>
											{/* <!--end::Group actions--> */}
										</div>
										{/* <!--end::Card toolbar--> */}
									</div>
									{/* <!--end::Card header--> */}
									{/* <!--begin::Card body--> */}
									<div className="card-body">
										{/* <!--begin::Table header--> */}
										<div className="d-flex flex-stack">
											{/* <!--begin::Folder path--> */}
											<div className="badge badge-lg badge-light-primary">
												<div className="d-flex align-items-center flex-wrap">
												<i className="ki-outline ki-abstract-32 fs-2 text-primary me-3"></i>
												<Link to="">Keenthemes</Link>
												<i className="ki-outline ki-right fs-2 text-primary mx-1"></i>
												<Link to="">themes</Link>
												<i className="ki-outline ki-right fs-2 text-primary mx-1"></i>
												<Link to="">html</Link>
												<i className="ki-outline ki-right fs-2 text-primary mx-1"></i>demo1</div>
											</div>
											{/* <!--end::Folder path--> */}
											{/* <!--begin::Folder Stats--> */}
											<div className="badge badge-lg badge-primary">
												<span id="kt_file_manager_items_counter">82 items</span>
											</div>
											{/* <!--end::Folder Stats--> */}
										</div>
										{/* <!--end::Table header--> */}
										{/* <!--begin::Table--> */}
										<table id="kt_file_manager_list" data-kt-filemanager-table="folders" className="table align-middle table-row-dashed fs-6 gy-5">
											<thead>
												<tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
													<th className="w-10px pe-2">
														<div className="form-check form-check-sm form-check-custom form-check-solid me-3">
															<input className="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_file_manager_list .form-check-input" value="1" />
														</div>
													</th>
													<th className="min-w-250px">Name</th>
													<th className="w-125px"></th>
												</tr>
											</thead>
											<tbody className="fw-semibold text-gray-600">
												<tr>
													<td>
														<div className="form-check form-check-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" value="1" />
														</div>
													</td>
													<td data-order="account">
														<div className="d-flex align-items-center">
															<span className="icon-wrapper">
																<i className="ki-outline ki-folder fs-2x text-primary me-4"></i>
															</span>
															<Link to="" className="text-gray-800 text-hover-primary" onClick={filepage}>Planning</Link>
														</div>
													</td>
													<td className="text-end" data-kt-filemanager-table="action_dropdown">
														<div className="d-flex justify-content-end">
															{/* <!--begin::Share link--> */}
															<div className="ms-2" data-kt-filemanger-table="copy_link">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-fasten fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">
																	{/* <!--begin::Card--> */}
																	<div className="card card-flush">
																		<div className="card-body p-5">
																			{/* <!--begin::Loader--> */}
																			<div className="d-flex" data-kt-filemanger-table="copy_link_generator">
																				{/* <!--begin::Spinner--> */}
																				<div className="me-5" data-kt-indicator="on">
																					<span className="indicator-progress">
																						<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
																					</span>
																				</div>
																				{/* <!--end::Spinner--> */}
																				{/* <!--begin::Label--> */}
																				<div className="fs-6 text-dark">Generating Share Link...</div>
																				{/* <!--end::Label--> */}
																			</div>
																			{/* <!--end::Loader--> */}
																			{/* <!--begin::Link--> */}
																			<div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
																				<div className="d-flex mb-3">
																					<i className="ki-outline ki-check fs-2 text-success me-3"></i>
																					<div className="fs-6 text-dark">Share Link Generated</div>
																				</div>
																				<input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
																				<div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
																				<Link to="" className="ms-2">Change permissions</Link></div>
																			</div>
																			{/* <!--end::Link--> */}
																		</div>
																	</div>
																	{/* <!--end::Card--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::Share link--> */}
															</div>
															{/* <!--begin::More--> */}
															<div className="ms-2">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-dots-square fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">View</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">Rename</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">Download Folder</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::More--> */}
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="form-check form-check-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" value="1" />
														</div>
													</td>
													<td data-order="apps">
														<div className="d-flex align-items-center">
															<span className="icon-wrapper">
																<i className="ki-outline ki-folder fs-2x text-primary me-4"></i>
															</span>
															<Link to="" className="text-gray-800 text-hover-primary" onClick={filepage}>Plumbing</Link>
														</div>
													</td>
													<td className="text-end" data-kt-filemanager-table="action_dropdown">
														<div className="d-flex justify-content-end">
															{/* <!--begin::Share link--> */}
															<div className="ms-2" data-kt-filemanger-table="copy_link">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-fasten fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">
																	{/* <!--begin::Card--> */}
																	<div className="card card-flush">
																		<div className="card-body p-5">
																			{/* <!--begin::Loader--> */}
																			<div className="d-flex" data-kt-filemanger-table="copy_link_generator">
																				{/* <!--begin::Spinner--> */}
																				<div className="me-5" data-kt-indicator="on">
																					<span className="indicator-progress">
																						<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
																					</span>
																				</div>
																				{/* <!--end::Spinner--> */}
																				{/* <!--begin::Label--> */}
																				<div className="fs-6 text-dark">Generating Share Link...</div>
																				{/* <!--end::Label--> */}
																			</div>
																			{/* <!--end::Loader--> */}
																			{/* <!--begin::Link--> */}
																			<div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
																				<div className="d-flex mb-3">
																					<i className="ki-outline ki-check fs-2 text-success me-3"></i>
																					<div className="fs-6 text-dark">Share Link Generated</div>
																				</div>
																				<input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
																				<div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
																				<Link to="../../demo34/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</Link></div>
																			</div>
																			{/* <!--end::Link--> */}
																		</div>
																	</div>
																	{/* <!--end::Card--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::Share link--> */}
															</div>
															{/* <!--begin::More--> */}
															<div className="ms-2">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-dots-square fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">View</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">Download Folder</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::More--> */}
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="form-check form-check-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" value="1" />
														</div>
													</td>
													<td data-order="widgets">
														<div className="d-flex align-items-center">
															<span className="icon-wrapper">
																<i className="ki-outline ki-folder fs-2x text-primary me-4"></i>
															</span>
															<Link to="" className="text-gray-800 text-hover-primary" onClick={filepage}>Electrical</Link>
														</div>
													</td>
													<td className="text-end" data-kt-filemanager-table="action_dropdown">
														<div className="d-flex justify-content-end">
															{/* <!--begin::Share link--> */}
															<div className="ms-2" data-kt-filemanger-table="copy_link">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-fasten fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">
																	{/* <!--begin::Card--> */}
																	<div className="card card-flush">
																		<div className="card-body p-5">
																			{/* <!--begin::Loader--> */}
																			<div className="d-flex" data-kt-filemanger-table="copy_link_generator">
																				{/* <!--begin::Spinner--> */}
																				<div className="me-5" data-kt-indicator="on">
																					<span className="indicator-progress">
																						<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
																					</span>
																				</div>
																				{/* <!--end::Spinner--> */}
																				{/* <!--begin::Label--> */}
																				<div className="fs-6 text-dark">Generating Share Link...</div>
																				{/* <!--end::Label--> */}
																			</div>
																			{/* <!--end::Loader--> */}
																			{/* <!--begin::Link--> */}
																			<div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
																				<div className="d-flex mb-3">
																					<i className="ki-outline ki-check fs-2 text-success me-3"></i>
																					<div className="fs-6 text-dark">Share Link Generated</div>
																				</div>
																				<input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
																				<div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
																				<Link to="../../demo34/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</Link></div>
																			</div>
																			{/* <!--end::Link--> */}
																		</div>
																	</div>
																	{/* <!--end::Card--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::Share link--> */}
															</div>
															{/* <!--begin::More--> */}
															<div className="ms-2">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-dots-square fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">View</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">Download Folder</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::More--> */}
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="form-check form-check-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" value="1" />
														</div>
													</td>
													<td data-order="assets">
														<div className="d-flex align-items-center">
															<span className="icon-wrapper">
																<i className="ki-outline ki-folder fs-2x text-primary me-4"></i>
															</span>
															<Link to="" className="text-gray-800 text-hover-primary" onClick={filepage}>Planning</Link>
														</div>
													</td>
													<td className="text-end" data-kt-filemanager-table="action_dropdown">
														<div className="d-flex justify-content-end">
															{/* <!--begin::Share link--> */}
															<div className="ms-2" data-kt-filemanger-table="copy_link">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-fasten fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">
																	{/* <!--begin::Card--> */}
																	<div className="card card-flush">
																		<div className="card-body p-5">
																			{/* <!--begin::Loader--> */}
																			<div className="d-flex" data-kt-filemanger-table="copy_link_generator">
																				{/* <!--begin::Spinner--> */}
																				<div className="me-5" data-kt-indicator="on">
																					<span className="indicator-progress">
																						<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
																					</span>
																				</div>
																				{/* <!--end::Spinner--> */}
																				{/* <!--begin::Label--> */}
																				<div className="fs-6 text-dark">Generating Share Link...</div>
																				{/* <!--end::Label--> */}
																			</div>
																			{/* <!--end::Loader--> */}
																			{/* <!--begin::Link--> */}
																			<div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
																				<div className="d-flex mb-3">
																					<i className="ki-outline ki-check fs-2 text-success me-3"></i>
																					<div className="fs-6 text-dark">Share Link Generated</div>
																				</div>
																				<input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
																				<div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
																				<Link to="../../demo34/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</Link></div>
																			</div>
																			{/* <!--end::Link--> */}
																		</div>
																	</div>
																	{/* <!--end::Card--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::Share link--> */}
															</div>
															{/* <!--begin::More--> */}
															<div className="ms-2">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-dots-square fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">View</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">Download Folder</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::More--> */}
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="form-check form-check-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" value="1" />
														</div>
													</td>
													<td data-order="documentation">
														<div className="d-flex align-items-center">
															<span className="icon-wrapper">
																<i className="ki-outline ki-folder fs-2x text-primary me-4"></i>
															</span>
															<Link to="" className="text-gray-800 text-hover-primary" onClick={filepage}>documentation</Link>
														</div>
													</td>
													<td className="text-end" data-kt-filemanager-table="action_dropdown">
														<div className="d-flex justify-content-end">
															{/* <!--begin::Share link--> */}
															<div className="ms-2" data-kt-filemanger-table="copy_link">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-fasten fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">
																	{/* <!--begin::Card--> */}
																	<div className="card card-flush">
																		<div className="card-body p-5">
																			{/* <!--begin::Loader--> */}
																			<div className="d-flex" data-kt-filemanger-table="copy_link_generator">
																				{/* <!--begin::Spinner--> */}
																				<div className="me-5" data-kt-indicator="on">
																					<span className="indicator-progress">
																						<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
																					</span>
																				</div>
																				{/* <!--end::Spinner--> */}
																				{/* <!--begin::Label--> */}
																				<div className="fs-6 text-dark">Generating Share Link...</div>
																				{/* <!--end::Label--> */}
																			</div>
																			{/* <!--end::Loader--> */}
																			{/* <!--begin::Link--> */}
																			<div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
																				<div className="d-flex mb-3">
																					<i className="ki-outline ki-check fs-2 text-success me-3"></i>
																					<div className="fs-6 text-dark">Share Link Generated</div>
																				</div>
																				<input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
																				<div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
																				<Link to="../../demo34/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</Link></div>
																			</div>
																			{/* <!--end::Link--> */}
																		</div>
																	</div>
																	{/* <!--end::Card--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::Share link--> */}
															</div>
															{/* <!--begin::More--> */}
															<div className="ms-2">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-dots-square fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">View</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">Download Folder</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::More--> */}
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="form-check form-check-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" value="1" />
														</div>
													</td>
													<td data-order="layouts">
														<div className="d-flex align-items-center">
															<span className="icon-wrapper">
																<i className="ki-outline ki-folder fs-2x text-primary me-4"></i>
															</span>
															<Link to="" className="text-gray-800 text-hover-primary" onClick={filepage}>Flooring</Link>
														</div>
													</td>
													<td className="text-end" data-kt-filemanager-table="action_dropdown">
														<div className="d-flex justify-content-end">
															{/* <!--begin::Share link--> */}
															<div className="ms-2" data-kt-filemanger-table="copy_link">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-fasten fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">
																	{/* <!--begin::Card--> */}
																	<div className="card card-flush">
																		<div className="card-body p-5">
																			{/* <!--begin::Loader--> */}
																			<div className="d-flex" data-kt-filemanger-table="copy_link_generator">
																				{/* <!--begin::Spinner--> */}
																				<div className="me-5" data-kt-indicator="on">
																					<span className="indicator-progress">
																						<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
																					</span>
																				</div>
																				{/* <!--end::Spinner--> */}
																				{/* <!--begin::Label--> */}
																				<div className="fs-6 text-dark">Generating Share Link...</div>
																				{/* <!--end::Label--> */}
																			</div>
																			{/* <!--end::Loader--> */}
																			{/* <!--begin::Link--> */}
																			<div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
																				<div className="d-flex mb-3">
																					<i className="ki-outline ki-check fs-2 text-success me-3"></i>
																					<div className="fs-6 text-dark">Share Link Generated</div>
																				</div>
																				<input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
																				<div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
																				<Link to="../../demo34/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</Link></div>
																			</div>
																			{/* <!--end::Link--> */}
																		</div>
																	</div>
																	{/* <!--end::Card--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::Share link--> */}
															</div>
															{/* <!--begin::More--> */}
															<div className="ms-2">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-dots-square fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">View</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">Download Folder</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::More--> */}
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="form-check form-check-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" value="1" />
														</div>
													</td>
													<td data-order="modals">
														<div className="d-flex align-items-center">
															<span className="icon-wrapper">
																<i className="ki-outline ki-folder fs-2x text-primary me-4"></i>
															</span>
															<Link to="" className="text-gray-800 text-hover-primary" onClick={filepage}>Roofing</Link>
														</div>
													</td>
													<td className="text-end" data-kt-filemanager-table="action_dropdown">
														<div className="d-flex justify-content-end">
															{/* <!--begin::Share link--> */}
															<div className="ms-2" data-kt-filemanger-table="copy_link">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-fasten fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">
																	{/* <!--begin::Card--> */}
																	<div className="card card-flush">
																		<div className="card-body p-5">
																			{/* <!--begin::Loader--> */}
																			<div className="d-flex" data-kt-filemanger-table="copy_link_generator">
																				{/* <!--begin::Spinner--> */}
																				<div className="me-5" data-kt-indicator="on">
																					<span className="indicator-progress">
																						<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
																					</span>
																				</div>
																				{/* <!--end::Spinner--> */}
																				{/* <!--begin::Label--> */}
																				<div className="fs-6 text-dark">Generating Share Link...</div>
																				{/* <!--end::Label--> */}
																			</div>
																			{/* <!--end::Loader--> */}
																			{/* <!--begin::Link--> */}
																			<div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
																				<div className="d-flex mb-3">
																					<i className="ki-outline ki-check fs-2 text-success me-3"></i>
																					<div className="fs-6 text-dark">Share Link Generated</div>
																				</div>
																				<input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
																				<div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
																				<Link to="../../demo34/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</Link></div>
																			</div>
																			{/* <!--end::Link--> */}
																		</div>
																	</div>
																	{/* <!--end::Card--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::Share link--> */}
															</div>
															{/* <!--begin::More--> */}
															<div className="ms-2">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-dots-square fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">View</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">Download Folder</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::More--> */}
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="form-check form-check-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" value="1" />
														</div>
													</td>
													<td data-order="authentication">
														<div className="d-flex align-items-center">
															<span className="icon-wrapper">
																<i className="ki-outline ki-folder fs-2x text-primary me-4"></i>
															</span>
															<Link to="" className="text-gray-800 text-hover-primary" onClick={filepage}>Masonry</Link>
														</div>
													</td>
													<td className="text-end" data-kt-filemanager-table="action_dropdown">
														<div className="d-flex justify-content-end">
															{/* <!--begin::Share link--> */}
															<div className="ms-2" data-kt-filemanger-table="copy_link">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-fasten fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">
																	{/* <!--begin::Card--> */}
																	<div className="card card-flush">
																		<div className="card-body p-5">
																			{/* <!--begin::Loader--> */}
																			<div className="d-flex" data-kt-filemanger-table="copy_link_generator">
																				{/* <!--begin::Spinner--> */}
																				<div className="me-5" data-kt-indicator="on">
																					<span className="indicator-progress">
																						<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
																					</span>
																				</div>
																				{/* <!--end::Spinner--> */}
																				{/* <!--begin::Label--> */}
																				<div className="fs-6 text-dark">Generating Share Link...</div>
																				{/* <!--end::Label--> */}
																			</div>
																			{/* <!--end::Loader--> */}
																			{/* <!--begin::Link--> */}
																			<div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
																				<div className="d-flex mb-3">
																					<i className="ki-outline ki-check fs-2 text-success me-3"></i>
																					<div className="fs-6 text-dark">Share Link Generated</div>
																				</div>
																				<input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
																				<div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
																				<Link to="../../demo34/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</Link></div>
																			</div>
																			{/* <!--end::Link--> */}
																		</div>
																	</div>
																	{/* <!--end::Card--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::Share link--> */}
															</div>
															{/* <!--begin::More--> */}
															<div className="ms-2">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-dots-square fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">View</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">Download Folder</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::More--> */}
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="form-check form-check-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" value="1" />
														</div>
													</td>
													<td data-order="apps">
														<div className="d-flex align-items-center">
															<span className="icon-wrapper">
																<i className="ki-outline ki-folder fs-2x text-primary me-4"></i>
															</span>
															<Link to="" className="text-gray-800 text-hover-primary" onClick={filepage}>Carpentry</Link>
														</div>
													</td>
													<td className="text-end" data-kt-filemanager-table="action_dropdown">
														<div className="d-flex justify-content-end">
															{/* <!--begin::Share link--> */}
															<div className="ms-2" data-kt-filemanger-table="copy_link">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-fasten fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">
																	{/* <!--begin::Card--> */}
																	<div className="card card-flush">
																		<div className="card-body p-5">
																			{/* <!--begin::Loader--> */}
																			<div className="d-flex" data-kt-filemanger-table="copy_link_generator">
																				{/* <!--begin::Spinner--> */}
																				<div className="me-5" data-kt-indicator="on">
																					<span className="indicator-progress">
																						<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
																					</span>
																				</div>
																				{/* <!--end::Spinner--> */}
																				{/* <!--begin::Label--> */}
																				<div className="fs-6 text-dark">Generating Share Link...</div>
																				{/* <!--end::Label--> */}
																			</div>
																			{/* <!--end::Loader--> */}
																			{/* <!--begin::Link--> */}
																			<div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
																				<div className="d-flex mb-3">
																					<i className="ki-outline ki-check fs-2 text-success me-3"></i>
																					<div className="fs-6 text-dark">Share Link Generated</div>
																				</div>
																				<input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
																				<div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
																				<Link to="../../demo34/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</Link></div>
																			</div>
																			{/* <!--end::Link--> */}
																		</div>
																	</div>
																	{/* <!--end::Card--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::Share link--> */}
															</div>
															{/* <!--begin::More--> */}
															<div className="ms-2">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-dots-square fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">View</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">Download Folder</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::More--> */}
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="form-check form-check-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" value="1" />
														</div>
													</td>
													<td data-order="widgets">
														<div className="d-flex align-items-center">
															<span className="icon-wrapper">
																<i className="ki-outline ki-folder fs-2x text-primary me-4"></i>
															</span>
															<Link to="" className="text-gray-800 text-hover-primary" onClick={filepage}>Pest Control</Link>
														</div>
													</td>
													<td className="text-end" data-kt-filemanager-table="action_dropdown">
														<div className="d-flex justify-content-end">
															{/* <!--begin::Share link--> */}
															<div className="ms-2" data-kt-filemanger-table="copy_link">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-fasten fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">
																	{/* <!--begin::Card--> */}
																	<div className="card card-flush">
																		<div className="card-body p-5">
																			{/* <!--begin::Loader--> */}
																			<div className="d-flex" data-kt-filemanger-table="copy_link_generator">
																				{/* <!--begin::Spinner--> */}
																				<div className="me-5" data-kt-indicator="on">
																					<span className="indicator-progress">
																						<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
																					</span>
																				</div>
																				{/* <!--end::Spinner--> */}
																				{/* <!--begin::Label--> */}
																				<div className="fs-6 text-dark">Generating Share Link...</div>
																				{/* <!--end::Label--> */}
																			</div>
																			{/* <!--end::Loader--> */}
																			{/* <!--begin::Link--> */}
																			<div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
																				<div className="d-flex mb-3">
																					<i className="ki-outline ki-check fs-2 text-success me-3"></i>
																					<div className="fs-6 text-dark">Share Link Generated</div>
																				</div>
																				<input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
																				<div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
																				<Link to="../../demo34/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</Link></div>
																			</div>
																			{/* <!--end::Link--> */}
																		</div>
																	</div>
																	{/* <!--end::Card--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::Share link--> */}
															</div>
															{/* <!--begin::More--> */}
															<div className="ms-2">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-dots-square fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">View</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">Download Folder</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::More--> */}
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="form-check form-check-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" value="1" />
														</div>
													</td>
													<td data-order="assets">
														<div className="d-flex align-items-center">
															<span className="icon-wrapper">
																<i className="ki-outline ki-folder fs-2x text-primary me-4"></i>
															</span>
															<Link to="" className="text-gray-800 text-hover-primary" onClick={filepage}>Tiling</Link>
														</div>
													</td>
													<td className="text-end" data-kt-filemanager-table="action_dropdown">
														<div className="d-flex justify-content-end">
															{/* <!--begin::Share link--> */}
															<div className="ms-2" data-kt-filemanger-table="copy_link">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-fasten fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">
																	{/* <!--begin::Card--> */}
																	<div className="card card-flush">
																		<div className="card-body p-5">
																			{/* <!--begin::Loader--> */}
																			<div className="d-flex" data-kt-filemanger-table="copy_link_generator">
																				{/* <!--begin::Spinner--> */}
																				<div className="me-5" data-kt-indicator="on">
																					<span className="indicator-progress">
																						<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
																					</span>
																				</div>
																				{/* <!--end::Spinner--> */}
																				{/* <!--begin::Label--> */}
																				<div className="fs-6 text-dark">Generating Share Link...</div>
																				{/* <!--end::Label--> */}
																			</div>
																			{/* <!--end::Loader--> */}
																			{/* <!--begin::Link--> */}
																			<div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
																				<div className="d-flex mb-3">
																					<i className="ki-outline ki-check fs-2 text-success me-3"></i>
																					<div className="fs-6 text-dark">Share Link Generated</div>
																				</div>
																				<input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
																				<div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
																				<Link to="../../demo34/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</Link></div>
																			</div>
																			{/* <!--end::Link--> */}
																		</div>
																	</div>
																	{/* <!--end::Card--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::Share link--> */}
															</div>
															{/* <!--begin::More--> */}
															<div className="ms-2">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-dots-square fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">View</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">Download Folder</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::More--> */}
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="form-check form-check-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" value="1" />
														</div>
													</td>
													<td data-order="documentation">
														<div className="d-flex align-items-center">
															<span className="icon-wrapper">
																<i className="ki-outline ki-folder fs-2x text-primary me-4"></i>
															</span>
															<Link to="" className="text-gray-800 text-hover-primary" onClick={filepage}>documentation</Link>
														</div>
													</td>
													<td className="text-end" data-kt-filemanager-table="action_dropdown">
														<div className="d-flex justify-content-end">
															{/* <!--begin::Share link--> */}
															<div className="ms-2" data-kt-filemanger-table="copy_link">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-fasten fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">
																	{/* <!--begin::Card--> */}
																	<div className="card card-flush">
																		<div className="card-body p-5">
																			{/* <!--begin::Loader--> */}
																			<div className="d-flex" data-kt-filemanger-table="copy_link_generator">
																				{/* <!--begin::Spinner--> */}
																				<div className="me-5" data-kt-indicator="on">
																					<span className="indicator-progress">
																						<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
																					</span>
																				</div>
																				{/* <!--end::Spinner--> */}
																				{/* <!--begin::Label--> */}
																				<div className="fs-6 text-dark">Generating Share Link...</div>
																				{/* <!--end::Label--> */}
																			</div>
																			{/* <!--end::Loader--> */}
																			{/* <!--begin::Link--> */}
																			<div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
																				<div className="d-flex mb-3">
																					<i className="ki-outline ki-check fs-2 text-success me-3"></i>
																					<div className="fs-6 text-dark">Share Link Generated</div>
																				</div>
																				<input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
																				<div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
																				<Link to="../../demo34/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</Link></div>
																			</div>
																			{/* <!--end::Link--> */}
																		</div>
																	</div>
																	{/* <!--end::Card--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::Share link--> */}
															</div>
															{/* <!--begin::More--> */}
															<div className="ms-2">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-dots-square fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">View</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">Download Folder</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::More--> */}
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="form-check form-check-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" value="1" />
														</div>
													</td>
													<td data-order="layouts">
														<div className="d-flex align-items-center">
															<span className="icon-wrapper">
																<i className="ki-outline ki-folder fs-2x text-primary me-4"></i>
															</span>
															<Link to="" className="text-gray-800 text-hover-primary" onClick={filepage}>layouts</Link>
														</div>
													</td>
													<td className="text-end" data-kt-filemanager-table="action_dropdown">
														<div className="d-flex justify-content-end">
															{/* <!--begin::Share link--> */}
															<div className="ms-2" data-kt-filemanger-table="copy_link">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-fasten fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">
																	{/* <!--begin::Card--> */}
																	<div className="card card-flush">
																		<div className="card-body p-5">
																			{/* <!--begin::Loader--> */}
																			<div className="d-flex" data-kt-filemanger-table="copy_link_generator">
																				{/* <!--begin::Spinner--> */}
																				<div className="me-5" data-kt-indicator="on">
																					<span className="indicator-progress">
																						<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
																					</span>
																				</div>
																				{/* <!--end::Spinner--> */}
																				{/* <!--begin::Label--> */}
																				<div className="fs-6 text-dark">Generating Share Link...</div>
																				{/* <!--end::Label--> */}
																			</div>
																			{/* <!--end::Loader--> */}
																			{/* <!--begin::Link--> */}
																			<div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
																				<div className="d-flex mb-3">
																					<i className="ki-outline ki-check fs-2 text-success me-3"></i>
																					<div className="fs-6 text-dark">Share Link Generated</div>
																				</div>
																				<input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
																				<div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
																				<Link to="../../demo34/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</Link></div>
																			</div>
																			{/* <!--end::Link--> */}
																		</div>
																	</div>
																	{/* <!--end::Card--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::Share link--> */}
															</div>
															{/* <!--begin::More--> */}
															<div className="ms-2">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-dots-square fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">View</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">Download Folder</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::More--> */}
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="form-check form-check-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" value="1" />
														</div>
													</td>
													<td data-order="modals">
														<div className="d-flex align-items-center">
															<span className="icon-wrapper">
																<i className="ki-outline ki-folder fs-2x text-primary me-4"></i>
															</span>
															<Link to="" className="text-gray-800 text-hover-primary" onClick={filepage}>modals</Link>
														</div>
													</td>
													<td className="text-end" data-kt-filemanager-table="action_dropdown">
														<div className="d-flex justify-content-end">
															{/* <!--begin::Share link--> */}
															<div className="ms-2" data-kt-filemanger-table="copy_link">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-fasten fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">
																	{/* <!--begin::Card--> */}
																	<div className="card card-flush">
																		<div className="card-body p-5">
																			{/* <!--begin::Loader--> */}
																			<div className="d-flex" data-kt-filemanger-table="copy_link_generator">
																				{/* <!--begin::Spinner--> */}
																				<div className="me-5" data-kt-indicator="on">
																					<span className="indicator-progress">
																						<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
																					</span>
																				</div>
																				{/* <!--end::Spinner--> */}
																				{/* <!--begin::Label--> */}
																				<div className="fs-6 text-dark">Generating Share Link...</div>
																				{/* <!--end::Label--> */}
																			</div>
																			{/* <!--end::Loader--> */}
																			{/* <!--begin::Link--> */}
																			<div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
																				<div className="d-flex mb-3">
																					<i className="ki-outline ki-check fs-2 text-success me-3"></i>
																					<div className="fs-6 text-dark">Share Link Generated</div>
																				</div>
																				<input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
																				<div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
																				<Link to="../../demo34/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</Link></div>
																			</div>
																			{/* <!--end::Link--> */}
																		</div>
																	</div>
																	{/* <!--end::Card--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::Share link--> */}
															</div>
															{/* <!--begin::More--> */}
															<div className="ms-2">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-dots-square fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">View</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">Download Folder</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::More--> */}
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="form-check form-check-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" value="1" />
														</div>
													</td>
													<td data-order="datatables">
														<div className="d-flex align-items-center">
															<span className="icon-wrapper">
																<i className="ki-outline ki-folder fs-2x text-primary me-4"></i>
															</span>
															<Link to="" className="text-gray-800 text-hover-primary" onClick={filepage}>datatables</Link>
														</div>
													</td>
													<td className="text-end" data-kt-filemanager-table="action_dropdown">
														<div className="d-flex justify-content-end">
															{/* <!--begin::Share link--> */}
															<div className="ms-2" data-kt-filemanger-table="copy_link">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-fasten fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">
																	{/* <!--begin::Card--> */}
																	<div className="card card-flush">
																		<div className="card-body p-5">
																			{/* <!--begin::Loader--> */}
																			<div className="d-flex" data-kt-filemanger-table="copy_link_generator">
																				{/* <!--begin::Spinner--> */}
																				<div className="me-5" data-kt-indicator="on">
																					<span className="indicator-progress">
																						<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
																					</span>
																				</div>
																				{/* <!--end::Spinner--> */}
																				{/* <!--begin::Label--> */}
																				<div className="fs-6 text-dark">Generating Share Link...</div>
																				{/* <!--end::Label--> */}
																			</div>
																			{/* <!--end::Loader--> */}
																			{/* <!--begin::Link--> */}
																			<div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
																				<div className="d-flex mb-3">
																					<i className="ki-outline ki-check fs-2 text-success me-3"></i>
																					<div className="fs-6 text-dark">Share Link Generated</div>
																				</div>
																				<input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
																				<div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
																				<Link to="../../demo34/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</Link></div>
																			</div>
																			{/* <!--end::Link--> */}
																		</div>
																	</div>
																	{/* <!--end::Card--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::Share link--> */}
															</div>
															{/* <!--begin::More--> */}
															<div className="ms-2">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-dots-square fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">View</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">Download Folder</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::More--> */}
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="form-check form-check-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" value="1" />
														</div>
													</td>
													<td data-order="index.html">
														<div className="d-flex align-items-center">
															<span className="icon-wrapper">
																<i className="ki-outline ki-files fs-2x text-primary me-4"></i>
															</span>
															<Link to="" className="text-gray-800 text-hover-primary">security.pdf</Link>
														</div>
													</td>
													<td className="text-end" data-kt-filemanager-table="action_dropdown">
														<div className="d-flex justify-content-end">
															{/* <!--begin::Share link--> */}
															<div className="ms-2" data-kt-filemanger-table="copy_link">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-fasten fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">
																	{/* <!--begin::Card--> */}
																	<div className="card card-flush">
																		<div className="card-body p-5">
																			{/* <!--begin::Loader--> */}
																			<div className="d-flex" data-kt-filemanger-table="copy_link_generator">
																				{/* <!--begin::Spinner--> */}
																				<div className="me-5" data-kt-indicator="on">
																					<span className="indicator-progress">
																						<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
																					</span>
																				</div>
																				{/* <!--end::Spinner--> */}
																				{/* <!--begin::Label--> */}
																				<div className="fs-6 text-dark">Generating Share Link...</div>
																				{/* <!--end::Label--> */}
																			</div>
																			{/* <!--end::Loader--> */}
																			{/* <!--begin::Link--> */}
																			<div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
																				<div className="d-flex mb-3">
																					<i className="ki-outline ki-check fs-2 text-success me-3"></i>
																					<div className="fs-6 text-dark">Share Link Generated</div>
																				</div>
																				<input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
																				<div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
																				<Link to="../../demo34/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</Link></div>
																			</div>
																			{/* <!--end::Link--> */}
																		</div>
																	</div>
																	{/* <!--end::Card--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::Share link--> */}
															</div>
															{/* <!--begin::More--> */}
															<div className="ms-2">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-dots-square fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">View</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">Download Folder</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::More--> */}
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="form-check form-check-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" value="1" />
														</div>
													</td>
													<td data-order="landing.html">
														<div className="d-flex align-items-center">
															<span className="icon-wrapper">
																<i className="ki-outline ki-files fs-2x text-primary me-4"></i>
															</span>
															<Link to="" className="text-gray-800 text-hover-primary">Plumbing.pdf</Link>
														</div>
													</td>
													<td className="text-end" data-kt-filemanager-table="action_dropdown">
														<div className="d-flex justify-content-end">
															{/* <!--begin::Share link--> */}
															<div className="ms-2" data-kt-filemanger-table="copy_link">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-fasten fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">
																	{/* <!--begin::Card--> */}
																	<div className="card card-flush">
																		<div className="card-body p-5">
																			{/* <!--begin::Loader--> */}
																			<div className="d-flex" data-kt-filemanger-table="copy_link_generator">
																				{/* <!--begin::Spinner--> */}
																				<div className="me-5" data-kt-indicator="on">
																					<span className="indicator-progress">
																						<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
																					</span>
																				</div>
																				{/* <!--end::Spinner--> */}
																				{/* <!--begin::Label--> */}
																				<div className="fs-6 text-dark">Generating Share Link...</div>
																				{/* <!--end::Label--> */}
																			</div>
																			{/* <!--end::Loader--> */}
																			{/* <!--begin::Link--> */}
																			<div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
																				<div className="d-flex mb-3">
																					<i className="ki-outline ki-check fs-2 text-success me-3"></i>
																					<div className="fs-6 text-dark">Share Link Generated</div>
																				</div>
																				<input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
																				<div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
																				<Link to="../../demo34/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</Link></div>
																			</div>
																			{/* <!--end::Link--> */}
																		</div>
																	</div>
																	{/* <!--end::Card--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::Share link--> */}
															</div>
															{/* <!--begin::More--> */}
															<div className="ms-2">
																<button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																	<i className="ki-outline ki-dots-square fs-5 m-0"></i>
																</button>
																{/* <!--begin::Menu--> */}
																<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">View</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link px-3">Download Folder</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																	{/* <!--begin::Menu item--> */}
																	<div className="menu-item px-3">
																		<Link to="" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</Link>
																	</div>
																	{/* <!--end::Menu item--> */}
																</div>
																{/* <!--end::Menu--> */}
																{/* <!--end::More--> */}
															</div>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
										{/* <!--end::Table--> */}
									</div>
									{/* <!--end::Card body--> */}
								</div>
								{/* <!--end::Card--> */}
								{/* <!--begin::Upload template--> */}
								<table className="d-none">
									<tr id="kt_file_manager_new_folder_row" data-kt-filemanager-template="upload">
										<td></td>
										<td id="kt_file_manager_add_folder_form" className="fv-row">
											<div className="d-flex align-items-center">
												{/* <!--begin::Folder icon--> */}
												<span id="kt_file_manager_folder_icon">
													<i className="ki-outline ki-folder fs-2x text-primary me-4"></i>
												</span>
												{/* <!--end::Folder icon--> */}
												{/* <!--begin:Input--> */}
												<input type="text" name="new_folder_name" placeholder="Enter the folder name" className="form-control mw-250px me-3" />
												{/* <!--end:Input--> */}
												{/* <!--begin:Submit button--> */}
												<button className="btn btn-icon btn-light-primary me-3" id="kt_file_manager_add_folder">
													<span className="indicator-label">
														<i className="ki-outline ki-check fs-1"></i>
													</span>
													<span className="indicator-progress">
														<span className="spinner-border spinner-border-sm align-middle"></span>
													</span>
												</button>
												{/* <!--end:Submit button--> */}
												{/* <!--begin:Cancel button--> */}
												<button className="btn btn-icon btn-light-danger" id="kt_file_manager_cancel_folder">
													<span className="indicator-label">
														<i className="ki-outline ki-cross fs-1"></i>
													</span>
													<span className="indicator-progress">
														<span className="spinner-border spinner-border-sm align-middle"></span>
													</span>
												</button>
												{/* <!--end:Cancel button--> */}
											</div>
										</td>
										<td></td>
									</tr>
								</table>
								{/* <!--end::Upload template--> */}
								{/* <!--begin::Rename template--> */}
								<div className="d-none" data-kt-filemanager-template="rename">
									<div className="fv-row">
										<div className="d-flex align-items-center">
											<span id="kt_file_manager_rename_folder_icon"></span>
											<input type="text" id="kt_file_manager_rename_input" name="rename_folder_name" placeholder="Enter the new folder name" className="form-control mw-250px me-3" value="" />
											<button className="btn btn-icon btn-light-primary me-3" id="kt_file_manager_rename_folder">
												<i className="ki-outline ki-check fs-1"></i>
											</button>
											<button className="btn btn-icon btn-light-danger" id="kt_file_manager_rename_folder_cancel">
												<span className="indicator-label">
													<i className="ki-outline ki-cross fs-1"></i>
												</span>
												<span className="indicator-progress">
													<span className="spinner-border spinner-border-sm align-middle"></span>
												</span>
											</button>
										</div>
									</div>
								</div>
								{/* <!--end::Rename template--> */}
												</div>
												)}
												{/* <!--end::Tap pane--> */}
												{/* <!-- begin::Tab panel --> */}
												{activeNav == 3 && (
												<div className="card-body p-5 tab-pane active" id="kt_tab_3" role="tabpanel">
												{/* <!--begin::Category--> */}
								<div className="card card-flush">
									{/* <!--begin::Card header--> */}
									<div className="card-header align-items-center py-5 gap-2 gap-md-5">
										{/* <!--begin::Card title--> */}
										<div className="card-title">
										</div>
										{/* <!--end::Card title--> */}
										{/* <!--begin::Card toolbar--> */}
										<div className="card-toolbar">
											{/* <!--begin::Add customer--> */}
											<i className="ki-outline ki-magnifier fs-3 position-absolute ms-4"></i>
											<input type="text" data-kt-ecommerce-category-filter="search" className="form-control form-control-solid w-250px ps-12" placeholder="Search" />
											{/* <!--end::Add customer--> */}
										</div>
										{/* <!--end::Card toolbar--> */}
									</div>
									{/* <!--end::Card header--> */}
									{/* <!--begin::Card body--> */}
									<div className="card-body pt-0">
										{/* <!--begin::Table--> */}
										<table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_ecommerce_category_table">
											<thead>
												<tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
													<th className="min-w-250px">Material List</th>
													<th className="min-w-150px">Task</th>
													<th className="text-end min-w-70px">Material Id</th>
												</tr>
											</thead>
											<tbody className="fw-semibold text-gray-600">
												<tr>
													<td>
														<div className="d-flex">
															<div className="ms-5">
																{/* <!--begin::Title--> */}
																<Link to="" className="text-gray-800 text-hover-primary fs-5 fw-bold mb-1" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">Underground Plumbing</Link>
																{/* <!--end::Title--> */}
																{/* <!--begin::Description--> */}
																<div className="text-muted fs-7 fw-bold">There are many variations of passages of Lorem Ipsum</div>
																{/* <!--end::Description--> */}
															</div>
														</div>
													</td>
													<td>
														{/* <!--begin::Badges--> */}
														<div className="badge badge-light-primary">Plumbing</div>
														{/* <!--end::Badges--> */}
													</td>
													<td className="text-end">
														<div className="badge">TR879C</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex">
															<div className="ms-5">
																{/* <!--begin::Title--> */}
																<Link to="" className="text-gray-800 text-hover-primary fs-5 fw-bold mb-1" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">DR 61</Link>
																{/* <!--end::Title--> */}
																{/* <!--begin::Description--> */}
																<div className="text-muted fs-7 fw-bold">The standard chunk of Lorem Ipsum used since the 1500s</div>
																{/* <!--end::Description--> */}
															</div>
														</div>
													</td>
													<td>
														{/* <!--begin::Badges--> */}
														<div className="badge badge-light-primary">Planning</div>
														{/* <!--end::Badges--> */}
													</td>
													<td className="text-end">
														<div className="badge">TR879C</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex">
															<div className="ms-5">
																{/* <!--begin::Title--> */}
																<Link to="" className="text-gray-800 text-hover-primary fs-5 fw-bold mb-1" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">Hi-ES 767</Link>
																{/* <!--end::Title--> */}
																{/* <!--begin::Description--> */}
																<div className="text-muted fs-7 fw-bold">Our big range of headphones makes it easy to upgrade your device at a great price.</div>
																{/* <!--end::Description--> */}
															</div>
														</div>
													</td>
													<td>
														{/* <!--begin::Badges--> */}
														<div className="badge badge-light-primary">Pre Construction</div>
														{/* <!--end::Badges--> */}
													</td>
													<td className="text-end">
														<div className="badge">TR879C</div>
													</td>
												</tr>
												<tr>
												<td>
														<div className="d-flex">
															<div className="ms-5">
																{/* <!--begin::Title--> */}
																<Link to="" className="text-gray-800 text-hover-primary fs-5 fw-bold mb-1" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">Underground Plumbing</Link>
																{/* <!--end::Title--> */}
																{/* <!--begin::Description--> */}
																<div className="text-muted fs-7 fw-bold">There are many variations of passages of Lorem Ipsum</div>
																{/* <!--end::Description--> */}
															</div>
														</div>
													</td>
													<td>
														{/* <!--begin::Badges--> */}
														<div className="badge badge-light-primary">Plumbing</div>
														{/* <!--end::Badges--> */}
													</td>
													<td className="text-end">
														<div className="badge">TR879C</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex">
															<div className="ms-5">
																{/* <!--begin::Title--> */}
																<Link to="" className="text-gray-800 text-hover-primary fs-5 fw-bold mb-1" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">DR 61</Link>
																{/* <!--end::Title--> */}
																{/* <!--begin::Description--> */}
																<div className="text-muted fs-7 fw-bold">The standard chunk of Lorem Ipsum used since the 1500s</div>
																{/* <!--end::Description--> */}
															</div>
														</div>
													</td>
													<td>
														{/* <!--begin::Badges--> */}
														<div className="badge badge-light-primary">Planning</div>
														{/* <!--end::Badges--> */}
													</td>
													<td className="text-end">
														<div className="badge">TR879C</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex">
															<div className="ms-5">
																{/* <!--begin::Title--> */}
																<Link to="" className="text-gray-800 text-hover-primary fs-5 fw-bold mb-1" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">Hi-ES 767</Link>
																{/* <!--end::Title--> */}
																{/* <!--begin::Description--> */}
																<div className="text-muted fs-7 fw-bold">Our big range of headphones makes it easy to upgrade your device at a great price.</div>
																{/* <!--end::Description--> */}
															</div>
														</div>
													</td>
													<td>
														{/* <!--begin::Badges--> */}
														<div className="badge badge-light-primary">Pre Construction</div>
														{/* <!--end::Badges--> */}
													</td>
													<td className="text-end">
														<div className="badge">TR879C</div>
													</td>
												</tr>
												<tr>
												<td>
														<div className="d-flex">
															<div className="ms-5">
																{/* <!--begin::Title--> */}
																<Link to="" className="text-gray-800 text-hover-primary fs-5 fw-bold mb-1" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">Underground Plumbing</Link>
																{/* <!--end::Title--> */}
																{/* <!--begin::Description--> */}
																<div className="text-muted fs-7 fw-bold">There are many variations of passages of Lorem Ipsum</div>
																{/* <!--end::Description--> */}
															</div>
														</div>
													</td>
													<td>
														{/* <!--begin::Badges--> */}
														<div className="badge badge-light-primary">Plumbing</div>
														{/* <!--end::Badges--> */}
													</td>
													<td className="text-end">
														<div className="badge">TR879C</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex">
															<div className="ms-5">
																{/* <!--begin::Title--> */}
																<Link to="" className="text-gray-800 text-hover-primary fs-5 fw-bold mb-1" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">DR 61</Link>
																{/* <!--end::Title--> */}
																{/* <!--begin::Description--> */}
																<div className="text-muted fs-7 fw-bold">The standard chunk of Lorem Ipsum used since the 1500s</div>
																{/* <!--end::Description--> */}
															</div>
														</div>
													</td>
													<td>
														{/* <!--begin::Badges--> */}
														<div className="badge badge-light-primary">Planning</div>
														{/* <!--end::Badges--> */}
													</td>
													<td className="text-end">
														<div className="badge">TR879C</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex">
															<div className="ms-5">
																{/* <!--begin::Title--> */}
																<Link to="" className="text-gray-800 text-hover-primary fs-5 fw-bold mb-1" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">Hi-ES 767</Link>
																{/* <!--end::Title--> */}
																{/* <!--begin::Description--> */}
																<div className="text-muted fs-7 fw-bold">Our big range of headphones makes it easy to upgrade your device at a great price.</div>
																{/* <!--end::Description--> */}
															</div>
														</div>
													</td>
													<td>
														{/* <!--begin::Badges--> */}
														<div className="badge badge-light-primary">Pre Construction</div>
														{/* <!--end::Badges--> */}
													</td>
													<td className="text-end">
														<div className="badge">TR879C</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex">
															<div className="ms-5">
																{/* <!--begin::Title--> */}
																<Link to="" className="text-gray-800 text-hover-primary fs-5 fw-bold mb-1" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">Sandals</Link>
																{/* <!--end::Title--> */}
																{/* <!--begin::Description--> */}
																<div className="text-muted fs-7 fw-bold">In season summer footwear with a huge range of options</div>
																{/* <!--end::Description--> */}
															</div>
														</div>
													</td>
													<td>
														{/* <!--begin::Badges--> */}
														<div className="badge badge-light-primary">Planning</div>
														{/* <!--end::Badges--> */}
													</td>
													<td className="text-end">
														<div className="badge">TR879C</div>
													</td>
												</tr>
											</tbody>
											{/* <!--end::Table body--> */}
										</table>
										{/* <!--end::Table--> */}
									</div>
									{/* <!--end::Card body--> */}
								</div>
								{/* <!--end::Category--> */}
												</div>
												)}
												{/* <!--end::Tap pane--> */}
												{/* <!--begin::Tap pane--> */}
												{activeNav == 4 && (
												<div className="card-body p-5 tab-pane active" id="kt_tab_4" role="tabpanel">
												{/* <!--begin::Header--> */}
												<div className="card-header border-0 p-0" style={{minHeight:"0px"}}>
													<h3 className="card-title align-items-start flex-column">
														<Link className="btn btnButton" to="../addbid/">Bid</Link>
													</h3>
													<div className="card-toolbar">
														<i className="ki-outline ki-magnifier fs-3 position-absolute ms-4"></i>
														<input type="text" data-kt-ecommerce-category-filter="search" className="form-control form-control-solid w-250px ps-12" placeholder="Search"/>
													</div>
												</div>
												{/* <!--end::Header--> */}
												{/* <!--begin::Table--> */}
												<div className="table-responsive">
															{/* <!--begin::Table--> */}
															<table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
																{/* <!--begin::Table head--> */}
																<thead>
																	<tr className="border-0">
																		<th className="min-w-50px text-muted fs-3">Project</th>
																		<th className="min-w-50px text-muted fs-3">Task</th>
																		<th className="min-w-110px text-muted fs-3">Timeline</th>
																		<th className="min-w-110px text-muted fs-3">Budget</th>
																		<th className="min-w-50px"></th>
																	</tr>
																</thead>
																{/* <!--end::Table head--> */}
																{/* <!--begin::Table body--> */}
																<tbody>
																	<tr>
																		<td className="d-flex align-items-center">
																			{/* <!--begin:: Avatar --> */}
																			<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
																				<div className="symbol-label">
																					<img src={blogo} alt="imagee" className="w-90 img-fluid"/>
																				</div>
																			</div>
																				{/* <!--end::Avatar--> */}
																			{/* <!--begin::User details--> */}
																			<div className="d-flex flex-column">
																				<Link to="../bids/">
																				<div className="fs-3 text-dark">Home Renovation</div>
																				<div className="fs-6 text-muted fw-bold">BTG-2356</div>
																				</Link>
																			</div>
																			{/* <!--begin::User details--> */}
																		</td>
																		<td className="text-muted fw-bold">Planning</td>
																		<td className="text-start text-muted fs-5">11/08/23 to 14/12/23 </td>
																		<td className="text-start text-muted fs-5">50,000/1,00,000 </td>
																		<td className="text-end">
																		</td>
																		<td className="text-end">
																			<Link to="../addbid/" className="btn  btnButton" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Edit Bid">Edit</Link>
																			<Link to="" className="btn  btnButton mx-1" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Retract Bid">Retract Bid</Link>
																		</td>
																	</tr>
																	<tr>
																		<td className="d-flex align-items-center">
																			{/* <!--begin:: Avatar --> */}
																			<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
																				<div className="symbol-label">
																					<img src={blogo} alt="imagee" className="w-90 img-fluid"/>
																				</div>
																			</div>
																				{/* <!--end::Avatar--> */}
																			{/* <!--begin::User details--> */}
																			<div className="d-flex flex-column">
																				<Link to="../bids/">
																				<div className="fs-3 text-dark">Residential Building</div>
																				<div className="fs-6 text-muted fw-bold">BTG-2356</div>
																				</Link>
																			</div>
																			{/* <!--begin::User details--> */}
																		</td>
																		<td className="text-muted fw-bold">Interior design</td>
																		<td className="text-start text-muted fs-5">01/08/23 to 20/12/23 </td>
																		<td className="text-start text-muted fs-5">80,000/120,000 </td>
																		<td className="text-end">
																		</td>
																		<td className="text-end">
																			<Link to="../addbid/" className="btn  btnButton" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Edit Bid">Edit</Link>
																			<Link to="" className="btn  btnButton mx-1" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Retract Bid">Retract Bid</Link>
																		</td>
																	</tr>
																	<tr>
																		<td className="d-flex align-items-center">
																			{/* <!--begin:: Avatar --> */}
																			<div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
																				<div className="symbol-label">
																					<img src={blogo} alt="imagee" className="w-90 img-fluid"/>
																				</div>
																			</div>
																				{/* <!--end::Avatar--> */}
																			{/* <!--begin::User details--> */}
																			<div className="d-flex flex-column">
																				<Link to="../bids/">
																				<div className="fs-3 text-dark">Federal Construction</div>
																				<div className="fs-6 text-muted fw-bold">BTG-2356</div>
																				</Link>
																			</div>
																			{/* <!--begin::User details--> */}
																		</td>
																		<td className="text-muted fw-bold">Pre Construction</td>
																		<td className="text-start text-muted fs-5">15/05/23 to 01/01/24 </td>
																		<td className="text-start text-muted fs-5">50,000/80,000 </td>
																		<td className="text-end">
																		</td>
																		<td className="text-end">
																			<Link to="../addbid/" className="btn  btnButton" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Edit Bid">Edit</Link>
																			<Link to="" className="btn  btnButton mx-1" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Retract Bid">Retract Bid</Link>
																		</td>
																	</tr>
																</tbody>
																{/* <!--end::Table body--> */}
															</table>
														</div>
														{/* <!--end::Table--> */}
												</div>
												)}
												{/* <!--end::Tap pane-->*/}
											</div>
											{/* <!--end::Tab Content--> */}
										</div>
										{/* <!--end::Card body--> */}
									</div>
									{/* <!--end::Row--> */}
									{/* <!--begin::Modal - Upload File--> */}
									{uploadFileModel == true && (

							<div className="modal fade" id="kt_modal_upload" tabindex="-1" aria-hidden="true">
										{/* <!--begin::Modal dialog--> */}
										<div className="modal-dialog modal-dialog-centered mw-650px">
											{/* <!--begin::Modal content--> */}
											<div className="modal-content">
												{/* <!--begin::Form--> */}
												<form className="form" action="none" id="kt_modal_upload_form">
													{/* <!--begin::Modal header--> */}
													<div className="modal-header">
														{/* <!--begin::Modal title--> */}
														<h2 className="fw-bold">Upload files</h2>
														{/* <!--end::Modal title--> */}
														{/* <!--begin::Close--> */}
														<div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
															<i className="ki-outline ki-cross fs-1"></i>
														</div>
														{/* <!--end::Close--> */}
													</div>
													{/* <!--end::Modal header--> */}
													{/* <!--begin::Modal body--> */}
													<div className="modal-body pt-10 pb-15 px-lg-17">
														{/* <!--begin::Input group--> */}
														<div className="form-group">
															{/* <!--begin::Dropzone--> */}
															<div className="dropzone dropzone-queue mb-2" id="kt_modal_upload_dropzone">
																{/* <!--begin::Controls--> */}
																<div className="dropzone-panel mb-4">
																	<Link className="dropzone-select btn btn-sm btn-primary me-2">Attach files</Link>
																	<Link className="dropzone-upload btn btn-sm btn-light-primary me-2">Upload All</Link>
																	<Link className="dropzone-remove-all btn btn-sm btn-light-primary">Remove All</Link>
																</div>
																{/* <!--end::Controls--> */}
																{/* <!--begin::Items--> */}
																<div className="dropzone-items wm-200px">
																	<div className="dropzone-item p-5" style={{display:"none"}}>
																		{/* <!--begin::File--> */}
																		<div className="dropzone-file">
																			<div className="dropzone-filename text-dark" title="some_image_file_name.jpg">
																				<span data-dz-name="">some_image_file_name.jpg</span>
																				<strong>(
																				<span data-dz-size="">340kb</span>)</strong>
																			</div>
																			<div className="dropzone-error mt-0" data-dz-errormessage=""></div>
																		</div>
																		{/* <!--end::File--> */}
																		{/* <!--begin::Progress--> */}
																		<div className="dropzone-progress">
																			<div className="progress bg-gray-300">
																				<div className="progress-bar bg-primary" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" data-dz-uploadprogress=""></div>
																			</div>
																		</div>
																		{/* <!--end::Progress--> */}
																		{/* <!--begin::Toolbar--> */}
																		<div className="dropzone-toolbar">
																			<span className="dropzone-start">
																				<i className="ki-outline ki-to-right fs-1"></i>
																			</span>
																			<span className="dropzone-cancel" data-dz-remove="" style={{display:"none"}}>
																				<i className="ki-outline ki-cross fs-2"></i>
																			</span>
																			<span className="dropzone-delete" data-dz-remove="">
																				<i className="ki-outline ki-cross fs-2"></i>
																			</span>
																		</div>
																		{/* <!--end::Toolbar--> */}
																	</div>
																</div>
																{/* <!--end::Items--> */}
															</div>
															{/* <!--end::Dropzone--> */}
															{/* <!--begin::Hint--> */}
															<span className="form-text fs-6 text-muted">Max file size is 1MB per file.</span>
															{/* <!--end::Hint--> */}
														</div>
														{/* <!--end::Input group--> */}
													</div>
													{/* <!--end::Modal body--> */}
												</form>
												{/* <!--end::Form--> */}
											</div>
										</div>
							</div>
							)}

							{/* <!--end::Modal - Upload File--> */}

                        </div>
                        {/* <!--end::Content--> */}
                    </div>
  )
}
function SubcontractorProjectDetail() {
    return <Layout data={<ProjectDetailData />} />
  }
  export default SubcontractorProjectDetail;
