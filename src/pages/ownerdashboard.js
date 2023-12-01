import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../pages/layout';

import bLogo from "../assets/images/b-logo.jpg"
import homeIMG2 from "../assets/images/h2.jpg"
import vimeo from "../assets/images/vimeo.svg"

function DashboardData() {

    document.title = 'Buildify AI | Owner Dashboard'

    const navigate = useNavigate();

    useEffect(() =>{
        const userId = window.localStorage.getItem("buildifyUserId");
        if (userId !== "" && userId !== null && userId !== undefined) {
            
        }else{
        navigate("/");
        }
   },[navigate]);

    return (
        <>
            <div className="d-flex flex-column flex-column-fluid" >
                {/*  <!--begin::Content-->  */}
                <div id="kt_app_content" className="app-content flex-column-fluid">
                    {/*  <!--begin::Row-->  */}
                    <div className="row g-5 g-xl-8">
                        {/*  <!--begin::Col-->  */}
                        <div className="col-xl-4">
                            {/*  <!--begin::Misc Widget 1-->  */}
                            <div className="row mb-5 mb-xl-8 g-5 g-xl-8">
                                {/*  <!--begin::Col-->  */}
                                <div className="col-6">
                                    {/*  <!--begin::Card-->  */}
                                    <div className="card card-stretch">
                                        {/*  <!--begin::Link-->  */}
                                        <Link to="#" className="btn btn-flex btn-text-gray-800 btn-icon-gray-400 btn-active-color-primary bg-body flex-column justfiy-content-start align-items-start text-start w-100 p-10">
                                            <i className="ki-outline ki-gift fs-2tx mb-5 ms-n1 text-muted"></i>
                                            <span className="fs-4 fw-bold">Your Projects </span>
                                            <span>3</span>
                                        </Link>
                                        {/*  <!--end::Link-->  */}
                                    </div>
                                    {/*  <!--end::Card-->  */}
                                </div>
                                {/*  <!--end::Col-->  */}
                                {/*  <!--begin::Col-->  */}
                                <div className="col-6">
                                    {/*  <!--begin::Card-->  */}
                                    <div className="card card-stretch">
                                        {/*  <!--begin::Link-->  */}
                                        <Link to="#" className="btn btn-flex btn-text-gray-800 btn-icon-gray-400 btn-active-color-primary bg-body flex-column justfiy-content-start align-items-start text-start w-100 p-10">
                                            <i className="ki-outline ki-technology-2 fs-2tx mb-5 ms-n1 text-muted"></i>
                                            <span className="fs-4 fw-bold">Ongoing Projects</span>
                                            <span>2</span>
                                        </Link>
                                        {/*  <!--end::Link-->  */}
                                    </div>
                                    {/*  <!--end::Card-->  */}
                                </div>
                                {/*  <!--end::Col-->  */}
                                {/*  <!--begin::Col-->  */}
                                <div className="col-6">
                                    {/*  <!--begin::Card-->  */}
                                    <div className="card card-stretch">
                                        {/*  <!--begin::Link-->  */}
                                        <Link to="#" className="btn btn-flex btn-text-gray-800 btn-icon-gray-400 btn-active-color-primary bg-body flex-column justfiy-content-start align-items-start text-start w-100 p-10">
                                            <i className="ki-outline ki-fingerprint-scanning fs-2tx mb-5 ms-n1 text-muted"></i>
                                            <span className="fs-4 fw-bold">Completed Projects</span>
                                            <span>1</span>
                                        </Link>
                                        {/*  <!--end::Link-->  */}
                                    </div>
                                    {/*  <!--end::Card-->  */}
                                </div>
                                {/*  <!--end::Col-->  */}
                                {/*  <!--begin::Col-->  */}
                                <div className="col-6">
                                    {/*  <!--begin::Card-->  */}
                                    <div className="card card-stretch">
                                        {/*  <!--begin::Link-->  */}
                                        <Link to="#" className="btn btn-flex btn-text-gray-800 btn-icon-gray-400 btn-active-color-primary bg-body flex-column justfiy-content-start align-items-start text-start w-100 p-10">
                                            <i className="ki-outline ki-abstract-26 fs-2tx mb-5 ms-n1 text-muted"></i>
                                            <span className="fs-4 fw-bold">Bids Received</span>
                                            <span>15</span><br />
                                        </Link>
                                        {/*  <!--end::Link-->  */}
                                    </div>
                                    {/*  <!--end::Card-->  */}
                                </div>
                                {/* <!--end::Col--> */}
                            </div>
                            {/* <!--end::Misc Widget 1--> */}
                            {/* <!--begin::List Widget 5--> */}
                            <div className="card mb-5 mb-xl-8">
                                {/* <!--begin::Header--> */}
                                <div className="card-header align-items-center border-0 mt-4">
                                    <h3 className="card-title align-items-start flex-column">
                                        <span className="fw-bold mb-2 text-dark">Activities</span>
                                    </h3>
                                    <div className="card-toolbar">
                                        {/* <!--begin::Menu--> */}
                                        <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            <i className="ki-outline ki-category fs-6"></i>
                                        </button>
                                        {/* <!--begin::Menu 1--> */}
                                        <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_641ace25bb3e4">
                                            {/* <!--begin::Header--> */}
                                            <div className="px-7 py-5">
                                                <div className="fs-5 text-dark fw-bold">Filter Options</div>
                                            </div>
                                            {/* <!--end::Header--> */}
                                            {/* <!--begin::Menu separator--> */}
                                            <div className="separator border-gray-200"></div>
                                            {/* <!--end::Menu separator--> */}
                                            {/* <!--begin::Form--> */}
                                            <div className="px-7 py-5">
                                                {/* <!--begin::Input group--> */}
                                                <div className="mb-10">
                                                    {/* <!--begin::Label--> */}
                                                    <label className="form-label fw-semibold">Status:</label>
                                                    {/* <!--end::Label--> */}
                                                    {/* <!--begin::Input--> */}
                                                    <div>
                                                        <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_641ace25bb3e4" data-allow-clear="true">
                                                            <option></option>
                                                            <option value="1">Approved</option>
                                                            <option value="2">Pending</option>
                                                            <option value="2">In Process</option>
                                                            <option value="2">Rejected</option>
                                                        </select>
                                                    </div>
                                                    {/* <!--end::Input--> */}
                                                </div>
                                                {/* <!--end::Input group--> */}
                                                {/* <!--begin::Input group--> */}
                                                <div className="mb-10">
                                                    {/* <!--begin::Label--> */}
                                                    <label className="form-label fw-semibold">Notifications:</label>
                                                    {/* <!--end::Label--> */}
                                                    {/* <!--begin::Switch--> */}
                                                    <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                                        <input className="form-check-input" type="checkbox" value="" name="notifications" />
                                                        <label className="form-check-label">Enabled</label>
                                                    </div>
                                                    {/* <!--end::Switch--> */}
                                                </div>
                                                {/* <!--end::Input group--> */}
                                                {/* <!--begin::Actions--> */}
                                                <div className="d-flex justify-content-end">
                                                    <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                                                    <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                                                </div>
                                                {/* <!--end::Actions--> */}
                                            </div>
                                            {/* <!--end::Form--> */}
                                        </div>
                                        {/* <!--end::Menu 1--> */}
                                        {/* <!--end::Menu--> */}
                                    </div>
                                </div>
                                {/* <!--end::Header--> */}
                                {/* <!--begin::Body--> */}
                                <div className="card-body pt-5">
                                    {/* <!--begin::Timeline--> */}
                                    <div className="timeline">
                                        {/* <!--begin::Item--> */}
                                        <div className="timeline-item">
                                            {/* <!--begin:: Avatar --> */}
                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                <div className="symbol-label">
                                                    <img src={bLogo} alt="imagee" className="w-90 img-fluid" />
                                                </div>
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                            {/* <!--begin::Text--> */}
                                            <div className="fw-mormal timeline-content text-muted ps-3">Lrem Ipsum is simply dummy text of the printing and typesetting industry...<Link className="text-primary" to="#">read more</Link></div>
                                            {/* <!--end::Text--> */}
                                        </div>
                                        {/* <!--end::Item--> */}
                                        {/* <!--begin::Item--> */}
                                        <div className="timeline-item">
                                            {/* <!--begin:: Avatar --> */}
                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                <div className="symbol-label">
                                                    <img src={homeIMG2} alt="imagee" className="w-90 img-fluid" />
                                                </div>
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                            {/* <!--begin::Text--> */}
                                            <div className="fw-mormal timeline-content text-muted ps-3">Lrem Ipsum is simply dummy text of the printing and typesetting industry...<Link className="text-primary" to="#">read more</Link></div>
                                            {/* <!--end::Text--> */}
                                        </div>
                                        {/* <!--end::Item--> */}
                                        {/* <!--begin::Item--> */}
                                        <div className="timeline-item">
                                            {/* <!--begin:: Avatar --> */}
                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                <div className="symbol-label">
                                                    <img src={bLogo} alt="imagee" className="w-90 img-fluid" />
                                                </div>
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                            {/* <!--begin::Text--> */}
                                            <div className="fw-mormal timeline-content text-muted ps-3">Lrem Ipsum is simply dummy text of the printing and typesetting industry...<Link className="text-primary" to="#">read more</Link></div>
                                            {/* <!--end::Text--> */}
                                        </div>
                                        {/* <!--end::Item--> */}
                                    </div>
                                    {/* <!--end::Timeline--> */}
                                </div>
                                {/* <!--end: Card Body--> */}
                            </div>
                            {/* <!--end: List Widget 5--> */}
                            {/* <!--begin::List Widget 5--> */}
                            <div className="card mb-5 mb-xl-8">
                                {/* <!--begin::Header--> */}
                                <div className="card-header align-items-center border-0 mt-4">
                                    <h3 className="card-title align-items-start flex-column">
                                        <span className="fw-bold mb-2 text-dark">Notifications</span>
                                    </h3>
                                </div>
                                {/* <!--end::Header--> */}
                                {/* <!--begin::Body--> */}
                                <div className="card-body">
                                    {/* <!--begin::Timeline--> */}
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
                                                <span className="symbol-label bg-light-sucesss">
                                                    <i className="fa-solid fa-check fs-2" style={{color: '#50cd89'}}></i>
                                                </span>
                                            </div>
                                            {/* <!--end::Symbol--> */}
                                            {/* <!--begin::Title--> */}
                                            <div className="mb-0 me-2">
                                                <Link to="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Max plank has accepted your invitation </Link>
                                                {/* <!-- <div className="text-gray-400 fs-7">New frontend admin theme</div> --> */}
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
                                    {/* <!--end::Timeline--> */}
                                </div>
                                {/* <!--end: Card Body--> */}
                            </div>
                            {/* <!--end: List Widget 5--> */}

                        </div>
                        {/* <!--end::Col--> */}
                        {/* <!--begin::Col--> */}
                        <div className="col-xl-8 ps-xl-12">
                            {/* <!--begin::Engage widget 1--> */}
                            <div className="card bgi-position-y-bottom bgi-position-x-end bgi-no-repeat bgi-size-cover min-h-250px bg-body mb-5 mb-xl-8 ownerdashboard"  dir="ltr">
                                {/* <!--begin::Body--> */}
                                <div className="card-body d-flex flex-column justify-content-center ps-lg-12">
                                    {/* <!--begin::Title--> */}
                                    <h3 className="text-dark fs-2qx fw-bold mb-7">We are working
                                        <br />to boost lovely mood</h3>
                                    {/* <!--end::Title--> */}
                                    {/* <!--begin::Action--> */}
                                    <div className="m-0">
                                        <Link to='#' className="btn fw-semibold px-6 py-3 createProject">Create a New Project</Link>
                                    </div>
                                    {/* <!--begin::Action--> */}
                                </div>
                                {/* <!--end::Body--> */}
                            </div>
                            {/* <!--end::Engage widget 1--> */}
                            {/* <!--begin::Tables Widget 5--> */}
                            <div className="card mb-5 mb-xl-8">
                                {/* <!--begin::Header--> */}
                                <div className="card-header border-0 pt-5">
                                    <h3 className="card-title align-items-start flex-column">
                                        <span className="card-label fw-bold fs-3 mb-1">Current Projects</span>
                                    </h3>
                                    <div className="card-toolbar">
                                        <ul className="nav">
                                            <li className="nav-item">
                                                <Link className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1 active" data-bs-toggle="tab" to="#kt_table_widget_5_tab_1">Active</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1" data-bs-toggle="tab" to="#kt_table_widget_5_tab_2">In Progress</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4" data-bs-toggle="tab" to="#kt_table_widget_5_tab_3">Completed</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!--end::Header--> */}
                                {/* <!--begin::Body--> */}
                                <div className="card-body py-3">
                                    <div className="tab-content">
                                        {/* <!--begin::Tap pane--> */}
                                        <div className="tab-pane fade show active" id="kt_table_widget_5_tab_1">
                                            {/* <!--begin::Table container--> */}
                                            <div className="table-responsive">
                                                {/* <!--begin::Table--> */}
                                                <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                                    {/* <!--begin::Table head--> */}
                                                    <thead>
                                                        <tr className="border-0">
                                                            <th className="p-0 min-w-200px"></th>
                                                            <th className="p-0 min-w-110px"></th>
                                                            <th className="p-0 min-w-50px"></th>
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
                                                                        <img src={bLogo} alt="imagee" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">Home Renovation</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Planning, Plumbing
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+3</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-success">Active</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={bLogo} alt="imagee" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">Residential Building</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2357</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Interior design, Architecture
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+5</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-success">Active</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={homeIMG2} alt="imagee" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">Federal Construction</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2358</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Pre Construction, Roadmap
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-success">Active</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={bLogo} alt="imagee" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">Commercial Outlook</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2359</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Side Set, Beam
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+4</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-success">Active</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={bLogo} alt="imagee" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">State Construction Project</div>
                                                                        <div className="fs-6 text-muted fw-bold">XF-2358</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Cantilever, Survey
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-success">Active</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={bLogo} alt="imagee" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">Residential Building</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2360</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Interior design, Architecture
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+5</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-success">Active</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={vimeo} alt="Emma Smith" className="w-90" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">Federal Construction</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2361</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Pre Construction, Roadmap
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-success">Active</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={bLogo} alt="imagee" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">Commercial Outlook</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2362</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Side Set, Beam
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+4</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-success">Active</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={bLogo} alt="Emma Smith" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">State Construction Project</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2370</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Cantilever, Survey
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-success">Active</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    {/* <!--end::Table body--> */}
                                                </table>
                                            </div>
                                            {/* <!--end::Table--> */}
                                        </div>
                                        {/* <!--end::Tap pane--> */}
                                        {/* <!--begin::Tap pane--> */}
                                        <div className="tab-pane fade" id="kt_table_widget_5_tab_2">
                                            {/* <!--begin::Table container--> */}
                                            <div className="table-responsive">
                                                {/* <!--begin::Table--> */}
                                                <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                                    {/* <!--begin::Table head--> */}
                                                    <thead>
                                                        <tr className="border-0">
                                                            <th className="p-0 min-w-200px"></th>
                                                            <th className="p-0 min-w-110px"></th>
                                                            <th className="p-0 min-w-50px"></th>
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
                                                                        <img src={bLogo} alt="imagee" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">Home Renovation</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Planning, Plumbing
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+3</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-warning">In Progress</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={bLogo} alt="imagee" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">Residential Building</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2357</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Interior design, Architecture
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+5</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-warning">In Progress</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={homeIMG2} alt="imagee" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">Federal Construction</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2358</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Pre Construction, Roadmap
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-warning">In Progress</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={bLogo} alt="imagee" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">Commercial Outlook</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2359</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Side Set, Beam
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+4</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-warning">In Progress</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={bLogo} alt="imagee" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">State Construction Project</div>
                                                                        <div className="fs-6 text-muted fw-bold">XF-2358</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Cantilever, Survey
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-warning">In Progress</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={bLogo} alt="imagee" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">Residential Building</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2360</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Interior design, Architecture
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+5</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-warning">In Progress</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={vimeo} alt="Emma Smith" className="w-90" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">Federal Construction</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2361</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Pre Construction, Roadmap
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-warning">In Progress</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={bLogo} alt="imagee" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">Commercial Outlook</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2362</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Side Set, Beam
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+4</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-warning">In Progress</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={bLogo} alt="Emma Smith" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">State Construction Project</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2370</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Cantilever, Survey
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-warning">In Progress</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    {/* <!--end::Table body--> */}
                                                </table>
                                            </div>
                                            {/* <!--end::Table--> */}
                                        </div>
                                        {/* <!--end::Tap pane--> */}
                                        {/* <!--begin::Tap pane--> */}
                                        <div className="tab-pane fade" id="kt_table_widget_5_tab_3">
                                            {/* <!--begin::Table container--> */}
                                            <div className="table-responsive">
                                                {/* <!--begin::Table--> */}
                                                <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                                    {/* <!--begin::Table head--> */}
                                                    <thead>
                                                        <tr className="border-0">
                                                            <th className="p-0 min-w-200px"></th>
                                                            <th className="p-0 min-w-110px"></th>
                                                            <th className="p-0 min-w-50px"></th>
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
                                                                        <img src={bLogo} alt="imagee" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">Home Renovation</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Planning, Plumbing
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+3</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-primary">Completed</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={bLogo} alt="imagee" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">Residential Building</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2357</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Interior design, Architecture
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+5</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-primary">Completed</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={homeIMG2} alt="imagee" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">Federal Construction</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2358</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Pre Construction, Roadmap
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-primary">Completed</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={bLogo} alt="imagee" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">Commercial Outlook</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2359</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Side Set, Beam
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+4</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-primary">Completed</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={bLogo} alt="imagee" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">State Construction Project</div>
                                                                        <div className="fs-6 text-muted fw-bold">XF-2358</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Cantilever, Survey
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-primary">Completed</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={bLogo} alt="imagee" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">Residential Building</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2360</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Interior design, Architecture
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+5</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-primary">Completed</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={vimeo} alt="Emma Smith" className="w-90" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">Federal Construction</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2361</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Pre Construction, Roadmap
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-primary">Completed</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={bLogo} alt="imagee" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">Commercial Outlook</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2362</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Side Set, Beam
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+4</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-primary">Completed</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="d-flex align-items-center">
                                                                {/* <!--begin:: Avatar --> */}
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    <div className="symbol-label">
                                                                        <img src={bLogo} alt="Emma Smith" className="w-90 img-fluid" />
                                                                    </div>
                                                                </div>
                                                                {/* <!--end::Avatar--> */}
                                                                {/* <!--begin::User details--> */}
                                                                <div className="d-flex flex-column">
                                                                    <Link to="#">
                                                                        <div className="fs-3 text-dark">State Construction Project</div>
                                                                        <div className="fs-6 text-muted fw-bold">BTG-2370</div>
                                                                    </Link>
                                                                </div>
                                                                {/* <!--begin::User details--> */}
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Cantilever, Survey
                                                                <Link to="#" className="" >
                                                                    <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                                                </Link>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-primary">Completed</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                    <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    {/* <!--end::Table body--> */}
                                                </table>
                                            </div>
                                            {/* <!--end::Table--> */}
                                        </div>
                                        {/* <!--end::Tap pane--> */}
                                    </div>
                                </div>
                                {/* <!--end::Body--> */}
                            </div>
                            {/* <!--end::Tables Widget 5--> */}
                            {/* <!--begin::Row--> */}
                            {/* <!-- <div className="row g-5 g-xl-8">
                                <h3 className="card-title align-items-start flex-column" style="width:75%">
                                    <span className="card-label fw-bold fs-3 mb-1">Tasks</span>
                                </h3>
                                <button type="button" className="btn btn-primary" style="width:15%;" data-kt-menu-placement="bottom-end">
                                    View More
                                </button> --> */}
                                {/* <!--begin::Col--> */}
                                {/* <!-- <div className="col-xl-6"> --> */}
                                    {/* <!--begin::Mixed Widget 8--> */}
                                    {/* <!-- <div className="card h-xl-100 mb-xl-8"> --> */}
                                        {/* <!--begin::Body--> */}
                                        {/* <!-- <div className="card-body"> --> */}
                                            {/* <!--begin::Heading--> */}
                                            {/* <!-- <div className="d-flex flex-stack"> --> */}
                                                {/* <!--begin:Info--> */}
                                                {/* <!-- <div className="d-flex align-items-center"> --> */}
                                                    {/* <!--begin:Image--> */}
                                                    {/* <!-- <div className="symbol symbol-60px me-5">
                                                        <span className="symbol-label bg-danger-light">
                                                            <img src="../images/home.png" className="h-50 align-self-center" alt="" />
                                                        </span>
                                                    </div> --> */}
                                                    {/* <!--end:Image--> */}
                                                    {/* <!--begin:Title--> */}
                                                    {/* <!-- <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
                                                        <Link to="#" className="text-dark fw-bold text-hover-primary fs-5">Planning</Link>
                                                        <span className="text-muted fw-bold">Due: 27 Apr 2020</span>
                                                    </div> --> */}
                                                    {/* <!--end:Title--> */}
                                                    {/* <!-- </div> --> */}
                                                {/* <!--begin:Info--> */}
                                                {/* <!-- </div> --> */}
                                            {/* <!--end::Heading--> */}
                                            {/* <!--begin:Stats--> */}
                                            {/* <!-- <div className="d-flex flex-column w-100 mt-12">
                                                <span className="text-dark me-2 fw-bold pb-3">Progress</span>
                                                <div className="progress h-5px w-100">
                                                    <div className="progress-bar bg-danger" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div> --> */}
                                            {/* <!--end:Stats--> */}
                                            {/* <!--begin:Team--> */}
                                            {/* <!-- <div className="d-flex flex-column mt-10">
                                                <div className="text-dark me-2 fw-bold pb-4">Team</div>
                                                <div className="d-flex">
                                                    <Link to="#" className="symbol symbol-35px me-2" data-bs-toggle="tooltip" title="Ana Stone">
                                                        <img src="../assets/media/avatars/300-6.jpg" alt="" />
                                                    </Link>
                                                    <Link to="#" className="symbol symbol-35px me-2" data-bs-toggle="tooltip" title="Mark Larson">
                                                        <img src="../assets/media/avatars/300-5.jpg" alt="" />
                                                    </Link>
                                                    <Link to="#" className="symbol symbol-35px me-2" data-bs-toggle="tooltip" title="Sam Harris">
                                                        <img src="../assets/media/avatars/300-9.jpg" alt="" />
                                                    </Link>
                                                    <Link to="#" className="symbol symbol-35px" data-bs-toggle="tooltip" title="Alice Micto">
                                                        <img src="../assets/media/avatars/300-10.jpg" alt="" />
                                                    </Link>
                                                </div>
                                            </div> --> */}
                                            {/* <!--end:Team--> */}
                                            {/* <!-- </div> --> */}
                                        {/* <!--end::Body--> */}
                                        {/* <!-- </div> --> */}
                                    {/* <!--end::Mixed Widget 8--> */}
                                    {/* <!-- </div> --> */}
                                {/* <!--end::Col--> */}
                                {/* <!--begin::Col--> */}
                                {/* <!-- <div className="col-xl-6"> --> */}
                                    {/* <!--begin::Mixed Widget 8--> */}
                                    {/* <!-- <div className="card h-xl-100 mb-xl-8"> --> */}
                                        {/* <!--begin::Body--> */}
                                        {/* <!-- <div className="card-body"> --> */}
                                            {/* <!--begin::Heading--> */}
                                            {/* <!-- <div className="d-flex flex-stack"> --> */}
                                                {/* <!--begin:Info--> */}
                                                {/* <!-- <div className="d-flex align-items-center"> --> */}
                                                    {/* <!--begin:Image--> */}
                                                    {/* <!-- <div className="symbol symbol-60px me-5">
                                                        <span className="symbol-label bg-primary-light">
                                                            <img src="../images/home.png" className="h-50 align-self-center" alt="" />
                                                        </span>
                                                    </div> --> */}
                                                    {/* <!--end:Image--> */}
                                                    {/* <!--begin:Title--> */}
                                                    {/* <!-- <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
                                                        <Link to="#" className="text-dark fw-bold text-hover-primary fs-5">Pre- construction</Link>
                                                        <span className="text-muted fw-bold">Due: 27 Apr 2020</span>
                                                    </div> --> */}
                                                    {/* <!--end:Title--> */}
                                                    {/* <!-- </div> --> */}
                                                {/* <!--begin:Info--> */}
                                                {/* <!--end::Menu--> */}
                                                {/* <!-- </div> --> */}
                                            {/* <!--end::Heading--> */}
                                            {/* <!--begin:Stats--> */}
                                            {/* <!-- <div className="d-flex flex-column w-100 mt-12">
                                                <span className="text-dark me-2 fw-bold pb-3">Progress</span>
                                                <div className="progress h-5px w-100">
                                                    <div className="progress-bar bg-primary" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div> --> */}
                                            {/* <!--end:Stats--> */}
                                            {/* <!--begin:Team--> */}
                                            {/* <!-- <div className="d-flex flex-column mt-10">
                                                <div className="text-dark me-2 fw-bold pb-4">Team</div>
                                                <div className="d-flex">
                                                    <Link to="#" className="symbol symbol-35px me-2" data-bs-toggle="tooltip" title="Ana Stone">
                                                        <img src="../assets/media/avatars/300-6.jpg" alt="" />
                                                    </Link>
                                                    <Link to="#" className="symbol symbol-35px me-2" data-bs-toggle="tooltip" title="Mark Larson">
                                                        <img src="../assets/media/avatars/300-5.jpg" alt="" />
                                                    </Link>
                                                    <Link to="#" className="symbol symbol-35px me-2" data-bs-toggle="tooltip" title="Sam Harris">
                                                        <img src="../assets/media/avatars/300-9.jpg" alt="" />
                                                    </Link>
                                                    <Link to="#" className="symbol symbol-35px" data-bs-toggle="tooltip" title="Alice Micto">
                                                        <img src="../assets/media/avatars/300-10.jpg" alt="" />
                                                    </Link>
                                                </div>
                                            </div> --> */}
                                            {/* <!--end:Team--> */}
                                            {/* <!-- </div> --> */}
                                        {/* <!--end::Body--> */}
                                        {/* <!-- </div> --> */}
                                    {/* <!--end::Mixed Widget 8--> */}
                                    {/* <!-- </div> --> */}
                                {/* <!--end::Col--> */}
                                {/* <!-- </div> --> */}
                            {/* <!--end::Row--> */}
                        </div>
                        {/* <!--end::Col--> */}
                    </div>
                    {/* <!--end::Row--> */}
                </div>
                {/* <!--end::Content--> */}
            </div>
            {/* <!--end::Content wrapper--> */}
        </>
    )
}
function OwnerDashboard() {
    return <Layout data={<DashboardData />} />
}
export default OwnerDashboard;