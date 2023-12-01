import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../pages/layout';

import bLogo from "../assets/images/b-logo.jpg"
import homeIMG2 from "../assets/images/h2.jpg"
import illustrations from "../assets/images/3.svg"

function DashboardData() {

    document.title = 'Buildify AI | Sub Contractor Dashboard'

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
            {/* begin::Content wrapper */}
            <div className="d-flex flex-column flex-column-fluid">
                {/*begin::Content */}
                <div id="kt_app_content" className="app-content flex-column-fluid">
                    {/*begin::Row */}
                    <div className="row gy-5 g-xl-10">
                        {/*begin::Col */}
                        <div className="col-xl-4 mb-xl-10">
                            {/*begin::Engage widget 1 */}
                            <div className="card h-md-100" dir="ltr">
                                {/*begin::Body */}
                                <div className="card-body d-flex flex-column flex-center">
                                    {/*begin::Heading */}
                                    <div className="mb-2">
                                        {/*begin::Title */}
                                        <h1 className="fw-semibold text-gray-800 text-center lh-lg">Explore New Opportunities
                                            <br />
                                            <span className="fw-bolder">Start Bidding</span></h1>
                                        {/*end::Title */}
                                        {/*begin::Illustration */}
                                        <div className="py-10 text-center">
                                            <img src={illustrations} className="theme-light-show w-200px" alt="illustrations" />
                                        </div>
                                        {/*end::Illustration */}
                                    </div>
                                    {/*end::Heading */}
                                    {/*begin::Links */}
                                    <div className="text-center mb-1">
                                        {/*begin::Link */}
                                        <Link className="btn btn-sm btnButton me-2">Explore</Link>
                                        {/*end::Link */}
                                    </div>
                                    {/*end::Links */}
                                </div>
                                {/*end::Body */}
                            </div>
                            {/*end::Engage widget 1 */}
                        </div>
                        {/*end::Col */}
                        {/*begin::Col */}
                        <div className="col-xl-8 mb-5 mb-xl-10">
                            {/*begin::Row */}
                            <div className="row g-lg-5 g-xl-10">
                                {/*begin::Col */}
                                <div className="col-md-6 col-xl-6 mb-5 mb-xl-10">
                                    {/*begin::Card widget 10 */}
                                    <div className="card card-flush h-md-100 mb-lg-10">
                                        {/*begin::Header */}
                                        <div className="card-header pt-5">
                                            {/*begin::Title */}
                                            <div className="card-title d-flex flex-column">
                                                {/*begin::Amount */}
                                                <span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">69,700</span>
                                                {/*end::Amount */}
                                                {/*begin::Subtitle */}
                                                <span className="text-gray-400 pt-1 fw-semibold fs-6">Expected Earnings This Month</span>
                                                {/*end::Subtitle */}
                                            </div>
                                            {/*end::Title */}
                                        </div>
                                        {/*end::Header */}
                                        {/*begin::Card body */}
                                        <div className="card-body d-flex align-items-end pt-0">
                                            {/*begin::Wrapper */}
                                            <div className="d-flex align-items-center flex-wrap">
                                                {/*begin::Chart */}
                                                <div className="d-flex me-7 me-xxl-10">
                                                    <div id="kt_card_widget_10_chart" className="min-h-auto" style={{ height: '78px', width: '78px' }} data-kt-size="78" data-kt-line="11"></div>
                                                </div>
                                                {/*end::Chart */}
                                                {/*begin::Labels */}
                                                <div className="d-flex flex-column content-justify-center flex-grow-1">
                                                    {/*begin::Label */}
                                                    <div className="d-flex fs-6 fw-semibold align-items-center">
                                                        {/*begin::Bullet */}
                                                        <div className="bullet w-8px h-6px rounded-2 bg-success me-3"></div>
                                                        {/*end::Bullet */}
                                                        {/*begin::Label */}
                                                        <div className="fs-6 fw-semibold text-gray-400 flex-shrink-0">Used Truck freight</div>
                                                        {/*end::Label */}
                                                        {/*begin::Separator */}
                                                        <div className="separator separator-dashed min-w-10px flex-grow-1 mx-2"></div>
                                                        {/*end::Separator */}
                                                        {/*begin::Stats */}
                                                        <div className="ms-auto fw-bolder text-gray-700 text-end">45%</div>
                                                        {/*end::Stats */}
                                                    </div>
                                                    {/*end::Label */}
                                                    {/*begin::Label */}
                                                    <div className="d-flex fs-6 fw-semibold align-items-center my-1">
                                                        {/*begin::Bullet */}
                                                        <div className="bullet w-8px h-6px rounded-2 bg-primary me-3"></div>
                                                        {/*end::Bullet */}
                                                        {/*begin::Label */}
                                                        <div className="fs-6 fw-semibold text-gray-400 flex-shrink-0">Used Ship freight</div>
                                                        {/*end::Label */}
                                                        {/*begin::Separator */}
                                                        <div className="separator separator-dashed min-w-10px flex-grow-1 mx-2"></div>
                                                        {/*end::Separator */}
                                                        {/*begin::Stats */}
                                                        <div className="ms-auto fw-bolder text-gray-700 text-end">21%</div>
                                                        {/*end::Stats */}
                                                    </div>
                                                    {/*end::Label */}
                                                    {/*begin::Label */}
                                                    <div className="d-flex fs-6 fw-semibold align-items-center">
                                                        {/*begin::Bullet */}
                                                        <div className="bullet w-8px h-6px rounded-2 me-3" style={{ backgroundColor: '#E4E6EF' }}></div>
                                                        {/*end::Bullet */}
                                                        {/*begin::Label */}
                                                        <div className="fs-6 fw-semibold text-gray-400 flex-shrink-0">Used Plane freight</div>
                                                        {/*end::Label */}
                                                        {/*begin::Separator */}
                                                        <div className="separator separator-dashed min-w-10px flex-grow-1 mx-2"></div>
                                                        {/*end::Separator */}
                                                        {/*begin::Stats */}
                                                        <div className="ms-auto fw-bolder text-gray-700 text-end">34%</div>
                                                        {/*end::Stats */}
                                                    </div>
                                                    {/*end::Label */}
                                                </div>
                                                {/*end::Labels */}
                                            </div>
                                            {/*end::Wrapper */}
                                        </div>
                                        {/*end::Card body */}
                                    </div>
                                    {/*end::Card widget 10 */}
                                </div>
                                {/*end::Col */}
                                {/*begin::Col */}
                                <div className="col-md-6 col-xl-6 mb-md-5 mb-xl-10">
                                    {/*begin::Card widget 13 */}
                                    <div className="card overflow-hidden h-md-100 mb-5 mb-xl-10">
                                        {/*begin::Card body */}
                                        <div className="card-body d-flex justify-content-between flex-column px-0 pb-0">
                                            {/*begin::Statistics */}
                                            <div className="mb-4 px-9">
                                                {/*begin::Statistics */}
                                                <div className="d-flex align-items-center mb-2">
                                                    {/*begin::Value */}
                                                    <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">70,786</span>
                                                    {/*end::Value */}
                                                    {/*begin::Label */}
                                                    {/*end::Label */}
                                                </div>
                                                {/*end::Statistics */}
                                                {/*begin::Description */}
                                                <span className="fs-6 fw-semibold text-gray-400">Earnings </span>
                                                {/*end::Description */}
                                            </div>
                                            {/*end::Statistics */}
                                            {/*begin::Chart */}
                                            <div id="kt_card_widget_13_chart" className="min-h-auto" style={{ height: '125px' }}></div>
                                            {/*end::Chart */}
                                        </div>
                                        {/*end::Card body */}
                                    </div>
                                </div>
                                {/*end::Col */}
                            </div>
                            {/*end::Row */}
                        </div>
                        {/*end::Col */}
                    </div>
                    {/*end::Row */}
                    {/*begin::Row */}
                    <div className="row gy-5 g-xl-10">
                        {/*begin::Col */}
                        <div className="col-xl-4 mb-xl-10">
                            {/*begin::List widget 10 */}
                            <div className="card card-flush h-lg-100">
                                {/*begin::Header */}
                                <div className="card-header pt-7">
                                    {/*begin::Title */}
                                    <h3 className="card-title align-items-start flex-column">
                                        <span className="card-label fw-bold text-gray-800">To Do</span>
                                        <span className="text-gray-400 mt-1 fw-semibold fs-6">59 Active Tasks</span>
                                    </h3>
                                    {/*end::Title */}
                                    {/*begin::Toolbar */}
                                    <div className="card-toolbar">
                                        <Link to="#" className="btn btn-sm btn-light" data-bs-toggle='tooltip' data-bs-dismiss='click' data-bs-custom-classname="tooltip-inverse" title="Logistics App is coming soon">View All</Link>
                                    </div>
                                    {/*end::Toolbar */}
                                </div>
                                {/*end::Header */}
                                {/*begin::Body */}
                                <div className="card-body">
                                    {/*begin::Nav */}
                                    <ul className="nav nav-pills nav-pills-custom row position-relative mx-0 mb-9">
                                        {/*begin::Item */}
                                        <li className="nav-item col-4 mx-0 p-0">
                                            {/*begin::Link */}
                                            <Link className="nav-link active d-flex justify-content-center w-100 border-0 h-100" data-bs-toggle="pill" to="#kt_list_widget_10_tab_1">
                                                {/*begin::Subtitle */}
                                                <span className="nav-text text-gray-800 fw-bold fs-6 mb-3">All</span>
                                                {/*end::Subtitle */}
                                                {/*begin::Bullet */}
                                                <span className="bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px bg-primary rounded"></span>
                                                {/*end::Bullet */}
                                            </Link>
                                            {/*end::Link */}
                                        </li>
                                        {/*end::Item */}
                                        {/*begin::Item */}
                                        <li className="nav-item col-4 mx-0 px-0">
                                            {/*begin::Link */}
                                            <Link className="nav-link d-flex justify-content-center w-100 border-0 h-100" data-bs-toggle="pill" to="#kt_list_widget_10_tab_2">
                                                {/*begin::Subtitle */}
                                                <span className="nav-text text-gray-800 fw-bold fs-6 mb-3">Completed</span>
                                                {/*end::Subtitle */}
                                                {/*begin::Bullet */}
                                                <span className="bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px bg-primary rounded"></span>
                                                {/*end::Bullet */}
                                            </Link>
                                            {/*end::Link */}
                                        </li>
                                        {/*end::Item */}
                                        {/*begin::Item */}
                                        <li className="nav-item col-4 mx-0 px-0">
                                            {/*begin::Link */}
                                            <Link className="nav-link d-flex justify-content-center w-100 border-0 h-100" data-bs-toggle="pill" to="#kt_list_widget_10_tab_3">
                                                {/*begin::Subtitle */}
                                                <span className="nav-text text-gray-800 fw-bold fs-6 mb-3">Pending</span>
                                                {/*end::Subtitle */}
                                                {/*begin::Bullet */}
                                                <span className="bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px bg-primary rounded"></span>
                                                {/*end::Bullet */}
                                            </Link>
                                            {/*end::Link */}
                                        </li>
                                        {/*end::Item */}
                                        {/*begin::Bullet */}
                                        <span className="position-absolute z-index-1 bottom-0 w-100 h-4px bg-light rounded"></span>
                                        {/*end::Bullet */}
                                    </ul>
                                    {/*end::Nav */}
                                    {/*begin::Tab Content */}
                                    <div className="tab-content">
                                        {/*begin::Tap pane */}
                                        <div className="tab-pane fade show active" id="kt_list_widget_10_tab_1">
                                            {/*begin::Item */}
                                            <div className="m-0">
                                                {/*begin::Wrapper */}
                                                <div className="d-flex align-items-sm-center mb-5">
                                                    {/*begin::Symbol */}
                                                    <div className="symbol symbol-45px me-4">
                                                        <span className="symbol-label bg-primary text-white">
                                                            <i className="ki-outline ki-ship text-inverse-primary fs-1"></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol */}
                                                    {/*begin::Section */}
                                                    <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                                                        <div className="flex-grow-1 me-2">
                                                            <span className="text-gray-800 fw-bold d-block fs-4">08/09/23</span>
                                                        </div>
                                                        <span className="badge badge-lg badge-light-success fw-bold my-2">Completed</span>
                                                    </div>
                                                    {/*end::Section */}
                                                </div>
                                                {/*end::Wrapper */}
                                                {/*begin::Timeline */}
                                                <div className="timeline">
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center mb-7">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px mt-6 mb-n12"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                            <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                </div>
                                                {/*end::Timeline */}
                                            </div>
                                            {/*end::Item */}
                                            {/*begin::Separator */}
                                            <div className="separator separator-dashed my-6"></div>
                                            {/*end::Separator */}
                                            {/*begin::Item */}
                                            <div className="m-0">
                                                {/*begin::Wrapper */}
                                                <div className="d-flex align-items-sm-center mb-5">
                                                    {/*begin::Symbol */}
                                                    <div className="symbol symbol-45px me-4">
                                                        <span className="symbol-label bg-primary text-white">
                                                            <i className="ki-outline ki-truck text-inverse-primary fs-1"></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol */}
                                                    {/*begin::Section */}
                                                    <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                                                        <div className="flex-grow-1 me-2">
                                                            <span className="text-gray-800 fw-bold d-block fs-4">08/10/23</span>
                                                        </div>
                                                        <span className="badge badge-lg badge-light-primary fw-bold my-2">Pending</span>
                                                    </div>
                                                    {/*end::Section */}
                                                </div>
                                                {/*end::Wrapper */}
                                                {/*begin::Timeline */}
                                                <div className="timeline">
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center mb-7">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px mt-6 mb-n12"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                </div>
                                                {/*end::Timeline */}
                                            </div>
                                            {/*end::Item */}
                                            {/*begin::Separator */}
                                            <div className="separator separator-dashed my-6"></div>
                                            {/*end::Separator */}
                                            {/*begin::Item */}
                                            <div className="m-0">
                                                {/*begin::Wrapper */}
                                                <div className="d-flex align-items-sm-center mb-5">
                                                    {/*begin::Symbol */}
                                                    <div className="symbol symbol-45px me-4">
                                                        <span className="symbol-label bg-primary text-white">
                                                            <i className="ki-outline ki-delivery text-inverse-primary fs-1"></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol */}
                                                    {/*begin::Section */}
                                                    <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                                                        <div className="flex-grow-1 me-2">
                                                            <span className="text-gray-800 fw-bold d-block fs-4">08/09/23</span>
                                                        </div>
                                                        <span className="badge badge-lg badge-light-success fw-bold my-2">Completed</span>
                                                    </div>
                                                    {/*end::Section */}
                                                </div>
                                                {/*end::Wrapper */}
                                                {/*begin::Timeline */}
                                                <div className="timeline">
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center mb-7">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px mt-6 mb-n12"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                </div>
                                                {/*end::Timeline */}
                                            </div>
                                            {/*end::Item */}
                                            {/*begin::Separator */}
                                            <div className="separator separator-dashed my-6"></div>
                                            {/*end::Separator */}
                                            {/*begin::Item */}
                                            <div className="m-0">
                                                {/*begin::Wrapper */}
                                                <div className="d-flex align-items-sm-center mb-5">
                                                    {/*begin::Symbol */}
                                                    <div className="symbol symbol-45px me-4">
                                                        <span className="symbol-label bg-primary text-white">
                                                            <i className="ki-outline ki-airplane-square text-inverse-primary fs-1"></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol */}
                                                    {/*begin::Section */}
                                                    <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                                                        <div className="flex-grow-1 me-2">
                                                            <span className="text-gray-800 fw-bold d-block fs-4">08/09/23</span>
                                                        </div>
                                                        <span className="badge badge-lg badge-light-primary fw-bold my-2">Pending</span>
                                                    </div>
                                                    {/*end::Section */}
                                                </div>
                                                {/*end::Wrapper */}
                                                {/*begin::Timeline */}
                                                <div className="timeline">
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center mb-7">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px mt-6 mb-n12"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                </div>
                                                {/*end::Timeline */}
                                            </div>
                                            {/*end::Item */}
                                        </div>
                                        {/*end::Tap pane */}
                                        {/*begin::Tap pane */}
                                        <div className="tab-pane fade" id="kt_list_widget_10_tab_2">
                                            {/*begin::Item */}
                                            <div className="m-0">
                                                {/*begin::Wrapper */}
                                                <div className="d-flex align-items-sm-center mb-5">
                                                    {/*begin::Symbol */}
                                                    <div className="symbol symbol-45px me-4">
                                                        <span className="symbol-label bg-primary text-white">
                                                            <i className="ki-outline ki-airplane-square text-inverse-primary fs-1"></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol */}
                                                    {/*begin::Section */}
                                                    <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                                                        <div className="flex-grow-1 me-2">
                                                            <span className="text-gray-800 fw-bold d-block fs-4">08/09/23</span>
                                                        </div>
                                                        <span className="badge badge-lg badge-light-success fw-bold my-2">Completed</span>
                                                    </div>
                                                    {/*end::Section */}
                                                </div>
                                                {/*end::Wrapper */}
                                                {/*begin::Timeline */}
                                                <div className="timeline">
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center mb-7">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px mt-6 mb-n12"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                </div>
                                                {/*end::Timeline */}
                                            </div>
                                            {/*end::Item */}
                                            {/*begin::Separator */}
                                            <div className="separator separator-dashed my-6"></div>
                                            {/*end::Separator */}
                                            {/*begin::Item */}
                                            <div className="m-0">
                                                {/*begin::Wrapper */}
                                                <div className="d-flex align-items-sm-center mb-5">
                                                    {/*begin::Symbol */}
                                                    <div className="symbol symbol-45px me-4">
                                                        <span className="symbol-label bg-primary text-white">
                                                            <i className="ki-outline ki-truck text-inverse-primary fs-1"></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol */}
                                                    {/*begin::Section */}
                                                    <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                                                        <div className="flex-grow-1 me-2">
                                                            <span className="text-gray-800 fw-bold d-block fs-4">08/09/23</span>
                                                        </div>
                                                        <span className="badge badge-lg badge-light-success fw-bold my-2">Completed</span>
                                                    </div>
                                                    {/*end::Section */}
                                                </div>
                                                {/*end::Wrapper */}
                                                {/*begin::Timeline */}
                                                <div className="timeline">
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center mb-7">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px mt-6 mb-n12"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                </div>
                                                {/*end::Timeline */}
                                            </div>
                                            {/*end::Item */}
                                            {/*begin::Separator */}
                                            <div className="separator separator-dashed my-6"></div>
                                            {/*end::Separator */}
                                            {/*begin::Item */}
                                            <div className="m-0">
                                                {/*begin::Wrapper */}
                                                <div className="d-flex align-items-sm-center mb-5">
                                                    {/*begin::Symbol */}
                                                    <div className="symbol symbol-45px me-4">
                                                        <span className="symbol-label bg-primary text-white">
                                                            <i className="ki-outline ki-ship text-inverse-primary fs-1"></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol */}
                                                    {/*begin::Section */}
                                                    <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                                                        <div className="flex-grow-1 me-2">
                                                            <span className="text-gray-800 fw-bold d-block fs-4">08/09/23</span>
                                                        </div>
                                                        <span className="badge badge-lg badge-light-success fw-bold my-2">Completed</span>
                                                    </div>
                                                    {/*end::Section */}
                                                </div>
                                                {/*end::Wrapper */}
                                                {/*begin::Timeline */}
                                                <div className="timeline">
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center mb-7">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px mt-6 mb-n12"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                </div>
                                                {/*end::Timeline */}
                                            </div>
                                            {/*end::Item */}
                                            {/*begin::Separator */}
                                            <div className="separator separator-dashed my-6"></div>
                                            {/*end::Separator */}
                                            {/*begin::Item */}
                                            <div className="m-0">
                                                {/*begin::Wrapper */}
                                                <div className="d-flex align-items-sm-center mb-5">
                                                    {/*begin::Symbol */}
                                                    <div className="symbol symbol-45px me-4">
                                                        <span className="symbol-label bg-primary text-white">
                                                            <i className="ki-outline ki-ship text-inverse-primary fs-1"></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol */}
                                                    {/*begin::Section */}
                                                    <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                                                        <div className="flex-grow-1 me-2">
                                                            <span className="text-gray-800 fw-bold d-block fs-4">08/09/23</span>
                                                        </div>
                                                        <span className="badge badge-lg badge-light-success fw-bold my-2">Completed</span>
                                                    </div>
                                                    {/*end::Section */}
                                                </div>
                                                {/*end::Wrapper */}
                                                {/*begin::Timeline */}
                                                <div className="timeline">
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center mb-7">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px mt-6 mb-n12"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                </div>
                                                {/*end::Timeline */}
                                            </div>
                                            {/*end::Item */}
                                        </div>
                                        {/*end::Tap pane */}
                                        {/*begin::Tap pane */}
                                        <div className="tab-pane fade" id="kt_list_widget_10_tab_3">
                                            {/*begin::Item */}
                                            <div className="m-0">
                                                {/*begin::Wrapper */}
                                                <div className="d-flex align-items-sm-center mb-5">
                                                    {/*begin::Symbol */}
                                                    <div className="symbol symbol-45px me-4">
                                                        <span className="symbol-label bg-primary text-white">
                                                            <i className="ki-outline ki-ship text-inverse-primary fs-1"></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol */}
                                                    {/*begin::Section */}
                                                    <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                                                        <div className="flex-grow-1 me-2">
                                                            <span className="text-gray-800 fw-bold d-block fs-4">08/09/23</span>
                                                        </div>
                                                        <span className="badge badge-lg badge-light-primary fw-bold my-2">Pending</span>
                                                    </div>
                                                    {/*end::Section */}
                                                </div>
                                                {/*end::Wrapper */}
                                                {/*begin::Timeline */}
                                                <div className="timeline">
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center mb-7">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px mt-6 mb-n12"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                </div>
                                                {/*end::Timeline */}
                                            </div>
                                            {/*end::Item */}
                                            {/*begin::Separator */}
                                            <div className="separator separator-dashed my-6"></div>
                                            {/*end::Separator */}
                                            {/*begin::Item */}
                                            <div className="m-0">
                                                {/*begin::Wrapper */}
                                                <div className="d-flex align-items-sm-center mb-5">
                                                    {/*begin::Symbol */}
                                                    <div className="symbol symbol-45px me-4">
                                                        <span className="symbol-label bg-primary text-white">
                                                            <i className="ki-outline ki-airplane-square text-inverse-primary fs-1"></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol */}
                                                    {/*begin::Section */}
                                                    <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                                                        <div className="flex-grow-1 me-2">
                                                            <span className="text-gray-800 fw-bold d-block fs-4">08/09/23</span>
                                                        </div>
                                                        <span className="badge badge-lg badge-light-primary fw-bold my-2">Pending</span>
                                                    </div>
                                                    {/*end::Section */}
                                                </div>
                                                {/*end::Wrapper */}
                                                {/*begin::Timeline */}
                                                <div className="timeline">
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center mb-7">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px mt-6 mb-n12"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                </div>
                                                {/*end::Timeline */}
                                            </div>
                                            {/*end::Item */}
                                            {/*begin::Separator */}
                                            <div className="separator separator-dashed my-6"></div>
                                            {/*end::Separator */}
                                            {/*begin::Item */}
                                            <div className="m-0">
                                                {/*begin::Wrapper */}
                                                <div className="d-flex align-items-sm-center mb-5">
                                                    {/*begin::Symbol */}
                                                    <div className="symbol symbol-45px me-4">
                                                        <span className="symbol-label bg-primary text-white">
                                                            <i className="ki-outline ki-ship text-inverse-primary fs-1"></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol */}
                                                    {/*begin::Section */}
                                                    <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                                                        <div className="flex-grow-1 me-2">
                                                            <span className="text-gray-800 fw-bold d-block fs-4">08/09/23</span>
                                                        </div>
                                                        <span className="badge badge-lg badge-light-primary fw-bold my-2">Pending</span>
                                                    </div>
                                                    {/*end::Section */}
                                                </div>
                                                {/*end::Wrapper */}
                                                {/*begin::Timeline */}
                                                <div className="timeline">
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center mb-7">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px mt-6 mb-n12"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                </div>
                                                {/*end::Timeline */}
                                            </div>
                                            {/*end::Item */}
                                            {/*begin::Separator */}
                                            <div className="separator separator-dashed my-6"></div>
                                            {/*end::Separator */}
                                            {/*begin::Item */}
                                            <div className="m-0">
                                                {/*begin::Wrapper */}
                                                <div className="d-flex align-items-sm-center mb-5">
                                                    {/*begin::Symbol */}
                                                    <div className="symbol symbol-45px me-4">
                                                        <span className="symbol-label bg-primary text-white">
                                                            <i className="ki-outline ki-truck text-inverse-primary fs-1"></i>
                                                        </span>
                                                    </div>
                                                    {/*end::Symbol */}
                                                    {/*begin::Section */}
                                                    <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                                                        <div className="flex-grow-1 me-2">
                                                            <span className="text-gray-800 fw-bold d-block fs-4">08/09/23</span>
                                                        </div>
                                                        <span className="badge badge-lg badge-light-primary fw-bold my-2">Plumbing</span>
                                                    </div>
                                                    {/*end::Section */}
                                                </div>
                                                {/*end::Wrapper */}
                                                {/*begin::Timeline */}
                                                <div className="timeline">
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center mb-7">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px mt-6 mb-n12"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                    {/*begin::Timeline item */}
                                                    <div className="timeline-item align-items-center">
                                                        {/*begin::Timeline line */}
                                                        <div className="timeline-line w-40px"></div>
                                                        {/*end::Timeline line */}
                                                        {/*begin::Timeline icon */}
                                                        <div className="timeline-icon" style={{ marginLeft: '11px' }}>
                                                            <i className="ki-outline ki-cd fs-2 text-danger"></i>
                                                        </div>
                                                        {/*end::Timeline icon */}
                                                        {/*begin::Timeline content */}
                                                        <div className="timeline-content m-0">
                                                            {/*begin::Title */}
                                                           <span className="fs-6 text-muted  fw-semibold d-block">Disclosure with SDU</span>
                                                            {/*end::Title */}
                                                            {/*begin::Title */}
                                                            <span className="fs-6 fw-bold text-gray-800">Plumbing</span>
                                                            {/*end::Title */}
                                                        </div>
                                                        {/*end::Timeline content */}
                                                    </div>
                                                    {/*end::Timeline item */}
                                                </div>
                                                {/*end::Timeline */}
                                            </div>
                                            {/*end::Item */}
                                        </div>
                                        {/*end::Tap pane */}
                                    </div>
                                    {/*end::Tab Content */}
                                </div>
                                {/*end: Card Body */}
                            </div>
                            {/*end::List widget 10 */}
                        </div>
                        {/*end::Col */}
                        {/*begin::Col */}
                        <div className="col-xl-8 mb-5 mb-xl-10">
                            {/*begin::Row */}
                            <div className="row g-5 g-xl-10 h-xxl-50 mb-0 mb-xl-10">
                                {/*begin::Col */}
                                <div className="col-lg-12 col-xl-12 col-xxl-12 mb-5 h-100 mb-xl-0">
                                    {/*begin::Timeline widget 3 */}
                                    <div className="card mb-5 mb-xl-8">
                                        {/*begin::Header */}
                                        <div className="card-header border-0 pt-5">
                                            <h3 className="card-title align-items-start flex-column">
                                                <span className="card-label fw-bold fs-3 mb-1">Projects</span>
                                            </h3>
                                            <div className="card-toolbar">
                                                <ul className="nav">
                                                    <li className="nav-item">
                                                        <Link className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1 active" data-bs-toggle="tab" to="#kt_table_widget_5_tab_1">Ongoing</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4" data-bs-toggle="tab" to="#kt_table_widget_5_tab_2">Completed</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*end::Header */}
                                        {/*begin::Body */}
                                        <div className="card-body py-3">
                                            <div className="tab-content">
                                                {/*begin::Tap pane */}
                                                <div className="tab-pane fade show active" id="kt_table_widget_5_tab_1">
                                                    {/*begin::Table container */}
                                                    <div className="table-responsive">
                                                        {/*begin::Table */}
                                                        <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                                            {/*begin::Table head */}
                                                            <thead>
                                                                <tr className="border-0">
                                                                    <th className="p-0 min-w-200px"></th>
                                                                    <th className="p-0 min-w-50px"></th>
                                                                </tr>
                                                            </thead>
                                                            {/*end::Table head */}
                                                            {/*begin::Table body */}
                                                            <tbody>
                                                                <tr>
                                                                    <td className="d-flex align-items-center">
                                                                        {/*begin:: Avatar  */}
                                                                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                            <div className="symbol-label">
                                                                                <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Avatar */}
                                                                        {/*begin::User details */}
                                                                        <div className="d-flex flex-column">
                                                                            <Link to="#">
                                                                                <div className="fs-3 text-dark">Home Renovation</div>
                                                                                <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                            </Link>
                                                                        </div>
                                                                        {/*begin::User details */}
                                                                    </td>
                                                                    <td className="text-muted fw-bold">Planning
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
                                                                        {/*begin:: Avatar  */}
                                                                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                            <div className="symbol-label">
                                                                                <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Avatar */}
                                                                        {/*begin::User details */}
                                                                        <div className="d-flex flex-column">
                                                                            <Link to="#">
                                                                                <div className="fs-3 text-dark">Residential Building</div>
                                                                                <div className="fs-6 text-muted fw-bold">BTG-2357</div>
                                                                            </Link>
                                                                        </div>
                                                                        {/*begin::User details */}
                                                                    </td>
                                                                    <td className="text-muted fw-bold">Interior design
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
                                                                        {/*begin:: Avatar  */}
                                                                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                            <div className="symbol-label">
                                                                                <img src={homeIMG2} alt="BLogo" className="w-90 img-fluid" />
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Avatar */}
                                                                        {/*begin::User details */}
                                                                        <div className="d-flex flex-column">
                                                                            <Link to="#">
                                                                                <div className="fs-3 text-dark">Federal Construction</div>
                                                                                <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                            </Link>
                                                                        </div>
                                                                        {/*begin::User details */}
                                                                    </td>
                                                                    <td className="text-muted fw-bold">Pre Construction
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
                                                                        {/*begin:: Avatar  */}
                                                                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                            <div className="symbol-label">
                                                                                <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Avatar */}
                                                                        {/*begin::User details */}
                                                                        <div className="d-flex flex-column">
                                                                            <Link to="#">
                                                                                <div className="fs-3 text-dark">Commercial Outlook</div>
                                                                                <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                            </Link>
                                                                        </div>
                                                                        {/*begin::User details */}
                                                                    </td>
                                                                    <td className="text-muted fw-bold">Side Set
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
                                                            {/*end::Table body */}
                                                        </table>
                                                    </div>
                                                    {/*end::Table */}
                                                </div>
                                                {/*end::Tap pane */}
                                                <div className="tab-pane fade" id="kt_table_widget_5_tab_2">
                                                    {/*begin::Table container */}
                                                    <div className="table-responsive">
                                                        {/*begin::Table */}
                                                        <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                                            {/*begin::Table head */}
                                                            <thead>
                                                                <tr className="border-0">
                                                                    <th className="p-0 min-w-200px"></th>
                                                                    <th className="p-0 min-w-110px"></th>
                                                                    <th className="p-0 min-w-50px"></th>
                                                                </tr>
                                                            </thead>
                                                            {/*end::Table head */}
                                                            {/*begin::Table body */}
                                                            <tbody>
                                                                <tr>
                                                                    <td className="d-flex align-items-center">
                                                                        {/*begin:: Avatar  */}
                                                                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                            <div className="symbol-label">
                                                                                <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Avatar */}
                                                                        {/*begin::User details */}
                                                                        <div className="d-flex flex-column">
                                                                            <Link to="#">
                                                                                <div className="fs-3 text-dark">Home Renovation</div>
                                                                                <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                            </Link>
                                                                        </div>
                                                                        {/*begin::User details */}
                                                                    </td>
                                                                    <td className="text-muted fw-bold">Planning
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
                                                                        {/*begin:: Avatar  */}
                                                                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                            <div className="symbol-label">
                                                                                <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Avatar */}
                                                                        {/*begin::User details */}
                                                                        <div className="d-flex flex-column">
                                                                            <Link to="#">
                                                                                <div className="fs-3 text-dark">Residential Building</div>
                                                                                <div className="fs-6 text-muted fw-bold">BTG-2357</div>
                                                                            </Link>
                                                                        </div>
                                                                        {/*begin::User details */}
                                                                    </td>
                                                                    <td className="text-muted fw-bold">Interior design
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
                                                                        {/*begin:: Avatar  */}
                                                                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                            <div className="symbol-label">
                                                                                <img src={homeIMG2} alt="BLogo" className="w-90 img-fluid" />
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Avatar */}
                                                                        {/*begin::User details */}
                                                                        <div className="d-flex flex-column">
                                                                            <Link to="#">
                                                                                <div className="fs-3 text-dark">Federal Construction</div>
                                                                                <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                            </Link>
                                                                        </div>
                                                                        {/*begin::User details */}
                                                                    </td>
                                                                    <td className="text-muted fw-bold">Pre Construction
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
                                                                        {/*begin:: Avatar  */}
                                                                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                            <div className="symbol-label">
                                                                                <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Avatar */}
                                                                        {/*begin::User details */}
                                                                        <div className="d-flex flex-column">
                                                                            <Link to="#">
                                                                                <div className="fs-3 text-dark">Commercial Outlook</div>
                                                                                <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                            </Link>
                                                                        </div>
                                                                        {/*begin::User details */}
                                                                    </td>
                                                                    <td className="text-muted fw-bold">Side Set </td>
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
                                                                        {/*begin:: Avatar  */}
                                                                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                            <div className="symbol-label">
                                                                                <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                            </div>
                                                                        </div>
                                                                        {/*end::Avatar */}
                                                                        {/*begin::User details */}
                                                                        <div className="d-flex flex-column">
                                                                            <Link to="#">
                                                                                <div className="fs-3 text-dark">State Construction Project</div>
                                                                                <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                            </Link>
                                                                        </div>
                                                                        {/*begin::User details */}
                                                                    </td>
                                                                    <td className="text-muted fw-bold">Cantilever
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
                                                            {/*end::Table body */}
                                                        </table>
                                                    </div>
                                                    {/*end::Table */}
                                                </div>
                                                {/*end::Tap pane */}
                                            </div>
                                        </div>
                                        {/*end::Body */}
                                    </div>
                                    {/*end::Timeline widget 3 */}
                                </div>
                                {/*end::Col */}
                                {/*begin::Col */}
                                <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
                                    {/*begin::Col */}
                                    <div className="col-xl-12">
                                        {/*begin::Table widget 14 */}
                                        <div className="card mb-5 mb-xl-8">
                                            {/*begin::Header */}
                                            <div className="card-header border-0 pt-5">
                                                <h3 className="card-title align-items-start flex-column">
                                                    <span className="card-label fw-bold fs-3 mb-1">Projects</span>
                                                </h3>
                                                <div className="card-toolbar">
                                                    <ul className="nav">
                                                        <li className="nav-item">
                                                            <Link className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1 active" data-bs-toggle="tab" to="#kt_table_widget_14_tab_1">All</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1" data-bs-toggle="tab" to="#kt_table_widget_14_tab_5">Already Bidded</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1" data-bs-toggle="tab" to="#kt_table_widget_14_tab_2">Invited</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1" data-bs-toggle="tab" to="#kt_table_widget_14_tab_3">Accepted</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4" data-bs-toggle="tab" to="#kt_table_widget_14_tab_4">Rejected</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/*end::Header */}
                                            {/*begin::Body */}
                                            <div className="card-body py-3">
                                                <div className="tab-content">
                                                    {/*begin::Tap pane */}
                                                    <div className="tab-pane fade show active" id="kt_table_widget_14_tab_1">
                                                        {/*begin::Table container */}
                                                        <div className="table-responsive">
                                                            {/*begin::Table */}
                                                            <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                                                {/*begin::Table head */}
                                                                <thead>
                                                                    <tr className="border-0">
                                                                        <th className="p-0 min-w-200px"></th>
                                                                        <th className="p-0 min-w-110px"></th>
                                                                        <th className="p-0 min-w-50px"></th>
                                                                    </tr>
                                                                </thead>
                                                                {/*end::Table head */}
                                                                {/*begin::Table body */}
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Home Renovation</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Planning
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btnButton">Bid</Link>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Residential Building</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Interior design
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btnButton">Bid</Link>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={homeIMG2} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Federal Construction</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Pre Construction
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <span className="badge badge-light-success">Accepted</span>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Commercial Outlook</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Side Set
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <span className="badge badge-light-danger">Rejected</span>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">State Construction Project</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Cantilever
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btnButton">Bid</Link>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Residential Building</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Interior design
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <span className="badge badge-light-primary">Invited</span>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={homeIMG2} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Federal Construction</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Pre Construction
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btnButton">Bid</Link>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Commercial Outlook</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Side Set
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btnButton">Bid</Link>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">State Construction Project</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Cantilever
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btnButton">Bid</Link>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                                {/*end::Table body */}
                                                            </table>
                                                        </div>
                                                        {/*end::Table */}
                                                    </div>
                                                    {/*end::Tap pane */}
                                                    {/*begin::Tap pane */}
                                                    <div className="tab-pane fade" id="kt_table_widget_14_tab_2">
                                                        {/*begin::Table container */}
                                                        <div className="table-responsive">
                                                            {/*begin::Table */}
                                                            <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                                                {/*begin::Table head */}
                                                                <thead>
                                                                    <tr className="border-0">
                                                                        <th className="p-0 min-w-200px"></th>
                                                                        <th className="p-0 min-w-110px"></th>
                                                                        <th className="p-0 min-w-50px"></th>
                                                                    </tr>
                                                                </thead>
                                                                {/*end::Table head */}
                                                                {/*begin::Table body */}
                                                                <tbody>

                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Home Renovation</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Planning
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btnButton">Bid</Link>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Residential Building</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Interior design
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btnButton">Bid</Link>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={homeIMG2} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Federal Construction</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Pre Construction
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btnButton">Bid</Link>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Commercial Outlook</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Side Set
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btnButton">Bid</Link>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Home Renovation</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Planning
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btnButton">Bid</Link>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Residential Building</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Interior design
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btnButton">Bid</Link>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                                {/*end::Table body */}
                                                            </table>
                                                        </div>
                                                        {/*end::Table */}
                                                    </div>
                                                    {/*end::Tap pane */}
                                                    {/*begin::Tap pane */}
                                                    <div className="tab-pane fade" id="kt_table_widget_14_tab_3">
                                                        {/*begin::Table container */}
                                                        <div className="table-responsive">
                                                            {/*begin::Table */}
                                                            <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                                                {/*begin::Table head */}
                                                                <thead>
                                                                    <tr className="border-0">
                                                                        <th className="p-0 min-w-200px"></th>
                                                                        <th className="p-0 min-w-110px"></th>
                                                                        <th className="p-0 min-w-50px"></th>
                                                                    </tr>
                                                                </thead>
                                                                {/*end::Table head */}
                                                                {/*begin::Table body */}
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Home Renovation</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Planning
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <span className="badge badge-light-success">Accepted</span>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Residential Building</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Interior design
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <span className="badge badge-light-success">Accepted</span>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={homeIMG2} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Federal Construction</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Pre Construction
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <span className="badge badge-light-success">Accepted</span>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Commercial Outlook</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Side Set
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <span className="badge badge-light-success">Accepted</span>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">State Construction Project</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Cantilever
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <span className="badge badge-light-success">Accepted</span>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Residential Building</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Interior design
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <span className="badge badge-light-success">Accepted</span>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={homeIMG2} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Federal Construction</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Pre Construction
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <span className="badge badge-light-success">Accepted</span>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Commercial Outlook</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Side Set
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <span className="badge badge-light-success">Accepted</span>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">State Construction Project</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Cantilever
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <span className="badge badge-light-success">Accepted</span>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                                {/*end::Table body */}
                                                            </table>
                                                        </div>
                                                        {/*end::Table */}
                                                    </div>
                                                    {/*end::Tap pane */}
                                                    {/*begin::Tap pane */}
                                                    <div className="tab-pane fade" id="kt_table_widget_14_tab_4">
                                                        {/*begin::Table container */}
                                                        <div className="table-responsive">
                                                            {/*begin::Table */}
                                                            <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                                                {/*begin::Table head */}
                                                                <thead>
                                                                    <tr className="border-0">
                                                                        <th className="p-0 min-w-200px"></th>
                                                                        <th className="p-0 min-w-110px"></th>
                                                                        <th className="p-0 min-w-50px"></th>
                                                                    </tr>
                                                                </thead>
                                                                {/*end::Table head */}
                                                                {/*begin::Table body */}
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Home Renovation</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Planning
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <span className="badge badge-light-danger">Rejected</span>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Residential Building</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Interior design
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <span className="badge badge-light-danger">Rejected</span>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={homeIMG2} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Federal Construction</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Pre Construction</td>
                                                                        <td className="text-end">
                                                                            <span className="badge badge-light-danger">Rejected</span>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Commercial Outlook</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Side Set
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <span className="badge badge-light-danger">Rejected</span>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">State Construction Project</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Cantilever
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <span className="badge badge-light-danger">Rejected</span>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Residential Building</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Interior design
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <span className="badge badge-light-danger">Rejected</span>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={homeIMG2} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Federal Construction</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Pre Construction
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <span className="badge badge-light-danger">Rejected</span>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Commercial Outlook</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Side Set
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <span className="badge badge-light-danger">Rejected</span>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">State Construction Project</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-muted fw-bold">Cantilever
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <span className="badge badge-light-danger">Rejected</span>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                                {/*end::Table body */}
                                                            </table>
                                                        </div>
                                                        {/*end::Table */}
                                                    </div>
                                                    {/*end::Tap pane */}
                                                    {/*begin::Tap pane */}
                                                    <div className="tab-pane fade" id="kt_table_widget_14_tab_5">
                                                        {/*begin::Header */}
                                                        <div className="card-header border-0 p-0" style={{ minHeight: '0px' }}>
                                                            <h3 className="card-title align-items-start flex-column">
                                                                {/* <Link className="btn btnButton" to="#">Bid</Link>  */}
                                                            </h3>
                                                            <div className="card-toolbar">
                                                                <i className="ki-outline ki-magnifier fs-3 position-absolute ms-4"></i>
                                                                <input type="text" data-kt-ecommerce-category-filter="search" className="form-control form-control-solid w-250px ps-12" placeholder="Search" />
                                                            </div>
                                                        </div>
                                                        {/*end::Header */}
                                                        {/*begin::Table */}
                                                        <div className="table-responsive">
                                                            {/*begin::Table */}
                                                            <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                                                {/*begin::Table head */}
                                                                <thead>
                                                                    <tr className="border-0">
                                                                        <th className="min-w-50px text-muted fs-3">Project</th>
                                                                        <th className="min-w-50px"></th>
                                                                    </tr>
                                                                </thead>
                                                                {/*end::Table head */}
                                                                {/*begin::Table body */}
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Home Renovation</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btnButton me-1" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Edit Bid">Edit</Link>
                                                                            <Link to="#" className="btn btnButton" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Retract Bid">Retract Bid</Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Residential Building</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btnButton me-1" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Edit Bid">Edit</Link>
                                                                            <Link to="#" className="btn btnButton" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Retract Bid">Retract Bid</Link>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar  */}
                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <div className="symbol-label">
                                                                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Avatar */}
                                                                            {/*begin::User details */}
                                                                            <div className="d-flex flex-column">
                                                                                <Link to="#">
                                                                                    <div className="fs-3 text-dark">Federal Construction</div>
                                                                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                                                                </Link>
                                                                            </div>
                                                                            {/*begin::User details */}
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <Link to="#" className="btn btnButton me-1" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Edit Bid">Edit</Link>
                                                                            <Link to="#" className="btn btnButton" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Retract Bid">Retract Bid</Link>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                                {/*end::Table body */}
                                                            </table>
                                                        </div>
                                                        {/*end::Table */}
                                                    </div>
                                                    {/*end::Tap pane */}
                                                </div>
                                            </div>
                                            {/*end::Body */}
                                        </div>
                                        {/*end::Table widget 14 */}
                                    </div>
                                    {/*end::Col */}
                                </div>
                                {/*end::Col */}
                            </div>
                            {/*end::Row */}
                        </div>
                        {/*end::Col */}
                    </div>
                    {/*end::Row */}
                </div>
                {/* < !--end:: Content-- > */}
            </div>
            {/* < !--end::Content wrapper-- > */}
        </>
    )
}
function SubcontractorDashboard() {
    return <Layout data={<DashboardData />} />
}
export default SubcontractorDashboard;