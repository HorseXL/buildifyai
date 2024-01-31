import React from 'react'
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


function AddtocompareDate() {
    document.title = 'Buildify AI | Sub Contractor';
    return (
        <>
            {/* begin::Content wrapper */}
            <div className="d-flex flex-column flex-column-fluid">
                {/* begin::Content */}
                <div id="kt_app_content" className="app-content flex-column-fluid">
                    {/* begin::Navbar */}
                    <div className="card mb-6 mb-xl-9">
                        <div className="card-body pt-9 pb-0">
                            {/* begin::Details */}
                            <div className="d-flex flex-wrap flex-sm-nowrap mb-6">
                                {/* begin::Image */}
                                <div className="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
                                    <img className="mw-50px mw-lg-75px" src={blogo} alt="image" />
                                </div>
                                {/* end::Image */}
                                {/* begin::Wrapper */}
                                <div className="flex-grow-1">
                                    {/* begin::Head */}
                                    <div className="d-flex justify-content-between align-items-start flex-wrap">
                                        {/* begin::Details */}
                                        <div className="d-flex flex-column">
                                            {/* begin::Status */}
                                            <div className="d-flex align-items-center mb-1">
                                                <Link to="#" className="text-gray-800 text-hover-primary fs-2 fw-bold me-3">Home Renovation</Link>
                                            </div>
                                            {/* end::Status */}
                                        </div>
                                        {/* end::Details */}
                                    </div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                    {/* end::Head */}
                                    {/* begin::Info */}
                                    <div className="d-flex flex-wrap justify-content-start mt-3">
                                        {/* begin::Stats */}
                                        <div className="d-flex flex-wrap">
                                            {/* begin::Stat */}
                                            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                {/* begin::Number */}
                                                <div className="d-flex align-items-center">
                                                    <div className="fs-4 fw-bold">29 Jan, 2023</div>
                                                </div>
                                                {/* end::Number */}
                                                {/* begin::Label */}
                                                <div className="fw-semibold fs-6 text-muted">Due Date</div>
                                                {/* end::Label */}
                                            </div>
                                            {/* end::Stat */}
                                            {/* begin::Stat */}
                                            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                {/* begin::Number */}
                                                <div className="d-flex align-items-center">
                                                    <div className="fs-4 fw-bold" data-kt-countup="true" data-kt-countup-value="75">75</div>
                                                </div>
                                                {/* end::Number */}
                                                {/* begin::Label */}
                                                <div className="fw-semibold fs-6 text-muted">Open Tasks</div>
                                                {/* end::Label */}
                                            </div>
                                            {/* end::Stat */}
                                            {/* begin::Stat */}
                                            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                {/* begin::Number */}
                                                <div className="d-flex align-items-center">
                                                    <div className="fs-4 fw-bold" data-kt-countup="true" data-kt-countup-value="15000" data-kt-countup-prefix="$">$15000</div>
                                                </div>
                                                {/* end::Number */}
                                                {/* begin::Label */}
                                                <div className="fw-semibold fs-6 text-muted">Budget Spent</div>
                                                {/* end::Label */}
                                            </div>
                                            {/* end::Stat */}
                                        </div>
                                        {/* end::Stats */}
                                        {/* begin::Users */}
                                        {/*  <div className="symbol-group symbol-hover mb-3">  */}
                                            {/* begin::User */}
                                            {/*  <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                                                <span className="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
                                            </div>  */}
                                            {/* end::User */}
                                            {/* begin::User */}
                                            {/*  <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michael Eberon">
                                                <img alt="Pic" src="../assets/media/avatars/300-11.jpg" />
                                            </div>  */}
                                            {/* end::User */}
                                            {/* begin::User */}
                                            {/*  <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michelle Swanston">
                                                <img alt="Pic" src="../assets/media/avatars/300-7.jpg" />
                                            </div>  */}
                                            {/* end::User */}
                                            {/* begin::User */}
                                            {/*  <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Francis Mitcham">
                                                <img alt="Pic" src="../assets/media/avatars/300-20.jpg" />
                                            </div>  */}
                                            {/* end::User */}
                                            {/* begin::User */}
                                            {/*  <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                                                <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                                            </div>  */}
                                            {/* end::User */}
                                            {/* begin::User */}
                                            {/*  <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                                                <img alt="Pic" src="../assets/media/avatars/300-2.jpg" />
                                            </div>  */}
                                            {/* end::User */}
                                            {/* begin::User */}
                                            {/*  <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Perry Matthew">
                                                <span className="symbol-label bg-info text-inverse-info fw-bold">P</span>
                                            </div>  */}
                                            {/* end::User */}
                                            {/* begin::User */}
                                            {/*  <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Barry Walter">
                                                <img alt="Pic" src="../assets/media/avatars/300-12.jpg" />
                                            </div>  */}
                                            {/* end::User */}
                                            {/* begin::All users */}
                                            {/*  <Link to="#" className="symbol symbol-35px symbol-circle" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users">
                                                <span className="symbol-label bg-dark text-inverse-dark fs-8 fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more users">+42</span>
                                            </Link>  */}
                                            {/* end::All users */}
                                            {/*  </div>  */}
                                        {/* end::Users */}
                                    </div>
                                    {/* end::Info */}
                                </div>
                                {/* end::Wrapper */}
                                {/*  <div className="d-flex justify-content-end"><Link to="../builder/" className="btn btn-primary h-45px fs-5 fw-bold mb-1">Invite Builder</Link></div>  */}
                            </div>
                            {/* end::Details */}
                        </div>
                    </div>
                    {/* end::Navbar */}
                    {/* begin::Toolbar */}
                    <div className="d-flex flex-wrap flex-stack pb-7">
                        {/* begin::Title */}
                        <div className="d-flex flex-wrap align-items-center my-1">
                            <h3 className="fw-bold me-5 my-1">Comparison</h3>
                            {/* begin::Search */}
                            <div className="d-flex align-items-center position-relative my-1">
                                <i className="ki-outline ki-magnifier fs-3 position-absolute text-muted ms-3"></i>
                                <input type="text" id="kt_filter_search" className="form-control form-control-sm border-body bg-body w-150px ps-10" placeholder="Search" />
                            </div>
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
                    <div className="tab-content">
                        {/* begin::Tab pane */}
                        <div id="kt_project_users_card_pane" className="tab-pane fade show active">
                            {/* begin::Row */}
                            <div className="row g-6 g-xl-9">
                                {/* begin::Col */}
                                <div className="col-md-6 col-xxl-4">
                                    {/* begin::Card */}
                                    <div className="card">
                                        {/* begin::Card body */}
                                        <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                                            {/* begin::Avatar */}
                                            <div className="symbol symbol-65px symbol-circle mb-5">
                                                <img src={a300_2} alt="image" />
                                                <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3"></div>
                                            </div>
                                            {/* end::Avatar */}
                                            {/* begin::Name */}
                                            <Link to="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Karina Clark</Link>
                                            {/* end::Name */}
                                            {/* begin::Position */}
                                            <div className="fw-semibold text-muted">Architecture Designer</div>
                                            <div className="mb-6">
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                            </div>
                                            {/* end::Position */}
                                            {/* begin::Info */}
                                            <div className="d-flex flex-center flex-wrap">
                                                {/* begin::Stats */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div className="fs-6 fw-bold text-gray-700">Nevada, USA</div>
                                                    <div className="fw-semibold text-muted">Location</div>
                                                </div>
                                                {/* end::Stats */}
                                                {/* begin::Stats */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div className="fs-6 fw-bold text-gray-700">23</div>
                                                    <div className="fw-semibold text-muted">Number of Projects</div>
                                                </div>
                                                {/* end::Stats */}
                                                {/* begin::Stats */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div className="fs-6 fw-bold text-gray-700">$36,400</div>
                                                    <div className="fw-semibold text-muted">Quote Price</div>
                                                </div>
                                                {/* end::Stats */}
                                            </div>
                                            {/* end::Info */}
                                            <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 fw-semibold text-muted">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.. <Link to="#">read more </Link>
                                            </div>
                                        </div>
                                        {/* end::Card body */}
                                    </div>
                                    {/* end::Card */}
                                </div>
                                {/* end::Col */}
                                {/* begin::Col */}
                                <div className="col-md-6 col-xxl-4">
                                    {/* begin::Card */}
                                    <div className="card">
                                        {/* begin::Card body */}
                                        <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                                            {/* begin::Avatar */}
                                            <div className="symbol symbol-65px symbol-circle mb-5">
                                                <span className="symbol-label fs-2x fw-semibold text-primary bg-light-primary">S</span>
                                                <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3"></div>
                                            </div>
                                            {/* end::Avatar */}
                                            {/* begin::Name */}
                                            <Link to="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Sean Bean</Link>
                                            {/* end::Name */}
                                            {/* begin::Position */}
                                            <div className="fw-semibold text-muted">Plumber</div>
                                            <div className="mb-6">
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                            </div>
                                            {/* end::Position */}
                                            {/* begin::Info */}
                                            <div className="d-flex flex-center flex-wrap">
                                                {/* begin::Stats */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div className="fs-6 fw-bold text-gray-700">Nevada, USA</div>
                                                    <div className="fw-semibold text-muted">Location</div>
                                                </div>
                                                {/* end::Stats */}
                                                {/* begin::Stats */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div className="fs-6 fw-bold text-gray-700">23</div>
                                                    <div className="fw-semibold text-muted">Number of Projects</div>
                                                </div>
                                                {/* end::Stats */}
                                                {/* begin::Stats */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div className="fs-6 fw-bold text-gray-700">$5000</div>
                                                    <div className="fw-semibold text-muted">Quote Price</div>
                                                </div>
                                                {/* end::Stats */}
                                            </div>
                                            {/* end::Info */}
                                            <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 fw-semibold text-muted">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.. <Link to="#">read more </Link>
                                            </div>
                                        </div>
                                        {/* end::Card body */}
                                    </div>
                                    {/* end::Card */}
                                </div>
                                {/* end::Col */}
                                {/* begin::Col */}
                                <div className="col-md-6 col-xxl-4">
                                    {/* begin::Card */}
                                    <div className="card">
                                        {/* begin::Card body */}
                                        <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                                            {/* begin::Avatar */}
                                            <div className="symbol symbol-65px symbol-circle mb-5">
                                                <img src={a300_1} alt="image" />
                                            </div>
                                            {/* end::Avatar */}
                                            {/* begin::Name */}
                                            <Link to="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Alan Johnson</Link>
                                            {/* end::Name */}
                                            {/* begin::Position */}
                                            <div className="fw-semibold text-muted">Surveyer</div>
                                            <div className="mb-6">
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                            </div>
                                            {/* end::Position */}
                                            {/* begin::Info */}
                                            <div className="d-flex flex-center flex-wrap">
                                                {/* begin::Stats */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div className="fs-6 fw-bold text-gray-700">Nevada, USA</div>
                                                    <div className="fw-semibold text-muted">Location</div>
                                                </div>
                                                {/* end::Stats */}
                                                {/* begin::Stats */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div className="fs-6 fw-bold text-gray-700">23</div>
                                                    <div className="fw-semibold text-muted">Number of Projects</div>
                                                </div>
                                                {/* end::Stats */}
                                                {/* begin::Stats */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div className="fs-6 fw-bold text-gray-700">$5000</div>
                                                    <div className="fw-semibold text-muted">Quote Price</div>
                                                </div>
                                                {/* end::Stats */}
                                            </div>
                                            {/* end::Info */}
                                            <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 fw-semibold text-muted">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.. <Link to="#">read more </Link>
                                            </div>
                                        </div>
                                        {/* end::Card body */}
                                    </div>
                                    {/* end::Card */}
                                </div>
                                {/* end::Col */}
                                {/* begin::Col */}
                                <div className="col-md-6 col-xxl-4">
                                    {/* begin::Card */}
                                    <div className="card">
                                        {/* begin::Card body */}
                                        <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                                            {/* begin::Avatar */}
                                            <div className="symbol symbol-65px symbol-circle mb-5">
                                                <img src={a300_14} alt="image" />
                                            </div>
                                            {/* end::Avatar */}
                                            {/* begin::Name */}
                                            <Link to="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Robert Doe</Link>
                                            {/* end::Name */}
                                            {/* begin::Position */}
                                            <div className="fw-semibold text-muted">Marketing Analytic at Avito Ltd.</div>
                                            <div className="mb-6">
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                            </div>
                                            {/* end::Position */}
                                            {/* begin::Info */}
                                            <div className="d-flex flex-center flex-wrap">
                                                {/* begin::Stats */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div className="fs-6 fw-bold text-gray-700">Nevada, USA</div>
                                                    <div className="fw-semibold text-muted">Location</div>
                                                </div>
                                                {/* end::Stats */}
                                                {/* begin::Stats */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div className="fs-6 fw-bold text-gray-700">23</div>
                                                    <div className="fw-semibold text-muted">Number of Projects</div>
                                                </div>
                                                {/* end::Stats */}
                                                {/* begin::Stats */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div className="fs-6 fw-bold text-gray-700">$5000</div>
                                                    <div className="fw-semibold text-muted">Quote Price</div>
                                                </div>
                                                {/* end::Stats */}
                                            </div>
                                            {/* end::Info */}
                                            <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 fw-semibold text-muted">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.. <Link to="#">read more </Link>
                                            </div>
                                        </div>
                                        {/* end::Card body */}
                                    </div>
                                    {/* end::Card */}
                                </div>
                                {/* end::Col */}
                                {/* begin::Col */}
                                <div className="col-md-6 col-xxl-4">
                                    {/* begin::Card */}
                                    <div className="card">
                                        {/* begin::Card body */}
                                        <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                                            {/* begin::Avatar */}
                                            <div className="symbol symbol-65px symbol-circle mb-5">
                                                <img src={a300_6} alt="image" />
                                            </div>
                                            {/* end::Avatar */}
                                            {/* begin::Name */}
                                            <Link to="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Olivia Wild</Link>
                                            {/* end::Name */}
                                            {/* begin::Position */}
                                            <div className="fw-semibold text-muted">Plumber</div>
                                            <div className="mb-6">
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                            </div>
                                            {/* end::Position */}
                                            {/* begin::Info */}
                                            <div className="d-flex flex-center flex-wrap">
                                                {/* begin::Stats */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div className="fs-6 fw-bold text-gray-700">Nevada, USA</div>
                                                    <div className="fw-semibold text-muted">Location</div>
                                                </div>
                                                {/* end::Stats */}
                                                {/* begin::Stats */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div className="fs-6 fw-bold text-gray-700">23</div>
                                                    <div className="fw-semibold text-muted">Number of Projects</div>
                                                </div>
                                                {/* end::Stats */}
                                                {/* begin::Stats */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div className="fs-6 fw-bold text-gray-700">$5000</div>
                                                    <div className="fw-semibold text-muted">Quote Price</div>
                                                </div>
                                                {/* end::Stats */}
                                            </div>
                                            {/* end::Info */}
                                            <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 fw-semibold text-muted">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.. <Link to="#">read more </Link>
                                            </div>
                                        </div>
                                        {/* end::Card body */}
                                    </div>
                                    {/* end::Card */}
                                </div>
                                {/* end::Col */}
                                {/* begin::Col */}
                                <div className="col-md-6 col-xxl-4">
                                    {/* begin::Card */}
                                    <div className="card">
                                        {/* begin::Card body */}
                                        <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                                            {/* begin::Avatar */}
                                            <div className="symbol symbol-65px symbol-circle mb-5">
                                                <span className="symbol-label fs-2x fw-semibold text-warning bg-light-warning">A</span>
                                                <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3"></div>
                                            </div>
                                            {/* end::Avatar */}
                                            {/* begin::Name */}
                                            <Link to="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Adam Williams</Link>
                                            {/* end::Name */}
                                            {/* begin::Position */}
                                            <div className="fw-semibold text-muted">Plumber</div>
                                            <div className="mb-6">
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                            </div>
                                            {/* end::Position */}
                                            {/* begin::Info */}
                                            <div className="d-flex flex-center flex-wrap">
                                                {/* begin::Stats */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div className="fs-6 fw-bold text-gray-700">Nevada, USA</div>
                                                    <div className="fw-semibold text-muted">Location</div>
                                                </div>
                                                {/* end::Stats */}
                                                {/* begin::Stats */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div className="fs-6 fw-bold text-gray-700">23</div>
                                                    <div className="fw-semibold text-muted">Number of Projects</div>
                                                </div>
                                                {/* end::Stats */}
                                                {/* begin::Stats */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div className="fs-6 fw-bold text-gray-700">$5000</div>
                                                    <div className="fw-semibold text-muted">Quote Price</div>
                                                </div>
                                                {/* end::Stats */}
                                            </div>
                                            {/* end::Info */}
                                            <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 fw-semibold text-muted">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.. <Link to="#">read more </Link>
                                            </div>
                                        </div>
                                        {/* end::Card body */}
                                    </div>
                                    {/* end::Card */}
                                </div>
                                {/* end::Col */}
                                {/* begin::Col */}
                                <div className="col-md-6 col-xxl-4">
                                    {/* begin::Card */}
                                    <div className="card">
                                        {/* begin::Card body */}
                                        <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                                            {/* begin::Avatar */}
                                            <div className="symbol symbol-65px symbol-circle mb-5">
                                                <span className="symbol-label fs-2x fw-semibold text-info bg-light-info">P</span>
                                                <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3"></div>
                                            </div>
                                            {/* end::Avatar */}
                                            {/* begin::Name */}
                                            <Link to="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Peter Marcus</Link>
                                            {/* end::Name */}
                                            {/* begin::Position */}
                                            <div className="fw-semibold text-muted">Architecture Designer</div>
                                            <div className="mb-6">
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                                <i className="fa-solid fa-star fs-4" style={{color: '#ffd900'}}></i>
                                            </div>
                                            {/* end::Position */}
                                            {/* begin::Info */}
                                            <div className="d-flex flex-center flex-wrap">
                                                {/* begin::Stats */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div className="fs-6 fw-bold text-gray-700">Nevada, USA</div>
                                                    <div className="fw-semibold text-muted">Location</div>
                                                </div>
                                                {/* end::Stats */}
                                                {/* begin::Stats */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div className="fs-6 fw-bold text-gray-700">23</div>
                                                    <div className="fw-semibold text-muted">Number of Projects</div>
                                                </div>
                                                {/* end::Stats */}
                                                {/* begin::Stats */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div className="fs-6 fw-bold text-gray-700">$5000</div>
                                                    <div className="fw-semibold text-muted">Quote Price</div>
                                                </div>
                                                {/* end::Stats */}
                                            </div>
                                            {/* end::Info */}
                                            <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 fw-semibold text-muted">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.. <Link to="#">read more </Link>
                                            </div>
                                        </div>
                                        {/* end::Card body */}
                                    </div>
                                    {/* end::Card */}
                                </div>
                                {/* end::Col */}
                            </div>
                            {/* end::Row */}
                            {/* begin::Pagination */}
                            <div className="d-flex flex-stack flex-wrap pt-10">
                                <div className="fs-6 fw-semibold text-gray-700">Showing 1 to 10 of 50 entries</div>
                                {/* begin::Pages */}
                                <ul className="pagination">
                                    <li className="page-item previous">
                                        <Link to="#" className="page-link">
                                            <i className="previous"></i>
                                        </Link>
                                    </li>
                                    <li className="page-item active">
                                        <Link to="#" className="page-link">1</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link to="#" className="page-link">2</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link to="#" className="page-link">3</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link to="#" className="page-link">4</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link to="#" className="page-link">5</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link to="#" className="page-link">6</Link>
                                    </li>
                                    <li className="page-item next">
                                        <Link to="#" className="page-link">
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
                {/* end::Content */}
            </div>
            {/* end::Content wrapper */}
        </>
    )
}
function Addtocompare() {
    return <Layout data={<AddtocompareDate />} />
}
export default Addtocompare;