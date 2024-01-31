import React, { useEffect, useState } from 'react'
import Layout from '../pages/layout';
import blogo from '../assets/images/b-logo.jpg'
import a300_5 from '../assets/images/Avatar/300-5.jpg'
import a300_6 from '../assets/images/Avatar/300-6.jpg'
import a300_9 from '../assets/images/Avatar/300-9.jpg'
import a300_10 from '../assets/images/Avatar/300-10.jpg'
import { Link } from 'react-router-dom';

function InvitedsubcontractorDate() {
    document.title = 'Buildify AI | Invited Sub Contractor';

    return (
        <>
            {/*  begin::Content wrapper */}
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
                                    <img className="mw-50px mw-lg-75px" src={blogo} alt="blogo" />
                                </div>
                                 {/* end::Image */}
                                 {/* begin::Wrapper */}
                                <div className="flex-grow-1">
                                     {/* begin::Head */}
                                    <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                         {/* begin::Details */}
                                        <div className="d-flex flex-column">
                                             {/* begin::Status */}
                                            <div className="d-flex align-items-center mb-1">
                                               <Link to="#" className="text-gray-800 text-hover-primary fs-2 fw-bold me-3">Home Renovation</Link>
                                                <span className="badge badge-light-success me-auto">In Progress</span>
                                            </div>
                                             {/* end::Status */}
                                        </div>
                                         {/* end::Details */}
                                    </div>
                                     {/* end::Head */}
                                     {/* begin::Info */}
                                    <div className="d-flex flex-wrap justify-content-start">
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
                                    </div>
                                     {/* end::Info */}
                                    <div className="text-gray-800 fs-3 fw-bold me-3"> Planning </div>
                                </div>
                                 {/* end::Wrapper */}
                            </div>
                             {/* end::Details */}
                        </div>
                    </div>
                     {/* end::Navbar */}
                     {/* begin::Card */}
                    <div className="card p-5">
                         {/* begin::Card header */}
                        <div className="card-header border-0 pt-6">
                             {/* begin::Card title */}
                            <div className="card-title">
                                 {/* begin::Search */}
                                <div className="d-flex align-items-center position-relative my-1">
                                    <i className="ki-outline ki-magnifier fs-3 position-absolute text-muted ms-5"></i>
                                    <input type="text" data-kt-user-table-filter="search" className="form-control form-control-solid w-250px ps-13" placeholder="Search" />
                                </div>
                                 {/* end::Search */}
                            </div>
                             {/* begin::Card title */}
                             {/* begin::Card toolbar */}
                            <div className="card-toolbar">
                                 {/* begin::Toolbar */}
                                <div className="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                                     {/* begin::Filter */}
                                    <button type="button" className="btn btn-light-primary me-3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                        <i className="ki-outline ki-filter fs-2"></i>Filter</button>
                                     {/* begin::Menu 1 */}
                                    <div className="menu menu-sub menu-sub-dropdown w-300px w-md-325px" data-kt-menu="true">
                                         {/* begin::Header */}
                                        <div className="px-7 py-5">
                                            <div className="fs-5 text-dark fw-bold">Filter Options</div>
                                        </div>
                                         {/* end::Header */}
                                         {/* begin::Separator */}
                                        <div className="separator border-gray-200"></div>
                                         {/* end::Separator */}
                                         {/* begin::Content */}
                                        <div className="px-7 py-5" data-kt-user-table-filter="form">
                                             {/* begin::Input group */}
                                            <div className="mb-10">
                                                <label className="form-label fs-6 fw-semibold">Role:</label>
                                                <select className="form-select form-select-solid fw-bold" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-kt-user-table-filter="role" data-hide-search="true">
                                                    <option></option>
                                                    <option value="Administrator">Rating</option>
                                                    <option value="Analyst">Pricing</option>
                                                </select>
                                            </div>
                                             {/* end::Input group */}
                                             {/* begin::Actions */}
                                            <div className="d-flex justify-content-end">
                                                <button type="reset" className="btn btn-light btn-active-light-primary fw-semibold me-2 px-6" data-kt-menu-dismiss="true" data-kt-user-table-filter="reset">Reset</button>
                                                <button type="submit" className="btn btn-primary fw-semibold px-6" data-kt-menu-dismiss="true" data-kt-user-table-filter="filter">Apply</button>
                                            </div>
                                             {/* end::Actions */}
                                        </div>
                                         {/* end::Content */}
                                    </div>
                                     {/* end::Menu 1 */}
                                     {/* end::Filter */}
                                     {/* begin::Add user */}
                                    <button type="button" className="btn btnButton" data-bs-toggle="modal" data-bs-target="#kt_modal_add_user">
                                        <i className="ki-outline ki-plus fs-2"></i>Add to Compare</button>
                                     {/* end::Add user */}
                                </div>
                                 {/* end::Toolbar */}
                            </div>
                             {/* end::Card toolbar */}
                        </div>
                         {/* end::Card header */}
                         {/* begin::Card body */}
                        <div className="card-body py-4">
                             {/* begin::Table */}
                            <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users">
                                <thead>
                                    <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                                        <th className="min-w-10px">
                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </th>
                                        <th className="min-w-125px">Sub Contractors</th>
                                        <th className="min-w-125px">Role</th>
                                        <th className="min-w-125px">Ratings</th>
                                        <th className="min-w-125px">Pricing</th>
                                        <th className="text-center min-w-125px">Communicate</th>
                                        <th className="text-center min-w-100px">Hire</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 fw-semibold">
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td className="d-flex align-items-center">
                                             {/* begin:: Avatar  */}
                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                               <Link to="../viewsubcontractor/">
                                                    <div className="symbol-label">
                                                        <img src={a300_6} alt="Emma Smith" className="w-100" />
                                                    </div>
                                                </Link>
                                            </div>
                                             {/* end::Avatar */}
                                             {/* begin::User details */}
                                            <div className="d-flex flex-column">
                                               <Link to="../viewsubcontractor/" className="text-gray-800 text-hover-primary mb-1">Emma Smith</Link>
                                                <span className='text-muted'>smith@kpmg.com</span>
                                            </div>
                                             {/* begin::User details */}
                                        </td>
                                        <td className='text-muted'>Sub Contractor</td>
                                        <td>
                                            <div className="badge badge-light fw-bold text-muted" style={{fontSize: '15px'}}><i className="fa-solid fa-star" style={{color: '#ffd900', fontSize: '25px'}}></i> 4.9</div><br />
                                                <span className="fs-7 text-muted"> From 9 Member </span>
                                        </td>
                                        <td className='text-muted'>$25.00/Hr</td>
                                        <td style={{textAlign: 'center'}}><Link to="../chat/"> <i className="fa-solid fa-message text-primary" style={{fontSize: '25px'}}></i> </Link></td>
                                        <td className="text-center">
                                            <button className="btn border border-primary">Hire</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td className="d-flex align-items-center">
                                             {/* begin:: Avatar  */}
                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                               <Link to="../viewsubcontractor/">
                                                    <div className="symbol-label">
                                                        <img src={a300_10} alt="Emma Smith" className="w-100" />
                                                    </div>
                                                </Link>
                                            </div>
                                             {/* end::Avatar */}
                                             {/* begin::User details */}
                                            <div className="d-flex flex-column">
                                               <Link to="../viewsubcontractor/" className="text-gray-800 text-hover-primary mb-1">Emma Smith</Link>
                                                <span className='text-muted'>smith@kpmg.com</span>
                                            </div>
                                             {/* begin::User details */}
                                        </td>
                                        <td className='text-muted'>Sub Contractor</td>
                                        <td>
                                            <div className="badge badge-light fw-bold text-muted" style={{fontSize: '15px'}}><i className="fa-solid fa-star" style={{color: '#ffd900', fontSize: '25px'}}></i> 4.9</div><br />
                                                <span className="fs-7 text-muted"> From 5 Member </span>
                                        </td>
                                        <td className='text-muted'>$25.00/Hr</td>
                                        <td style={{textAlign: 'center'}}><Link to="../chat/"> <i className="fa-solid fa-message text-primary" style={{fontSize: '25px'}}></i> </Link></td>
                                        <td className="text-center">
                                            <button className="btn border border-primary">Hire</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td className="d-flex align-items-center">
                                             {/* begin:: Avatar  */}
                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                               <Link to="../viewsubcontractor/">
                                                    <div className="symbol-label">
                                                        <img src={a300_9} alt="Emma Smith" className="w-100" />
                                                    </div>
                                                </Link>
                                            </div>
                                             {/* end::Avatar */}
                                             {/* begin::User details */}
                                            <div className="d-flex flex-column">
                                               <Link to="../viewsubcontractor/" className="text-gray-800 text-hover-primary mb-1">Brian Cox</Link>
                                                <span className='text-muted'>smith@kpmg.com</span>
                                            </div>
                                             {/* begin::User details */}
                                        </td>
                                        <td className='text-muted'>Sub Contractor</td>
                                        <td>
                                            <div className="badge badge-light fw-bold text-muted" style={{fontSize: '15px'}}><i className="fa-solid fa-star" style={{color: '#ffd900', fontSize: '25px'}}></i> 4.9</div><br />
                                                <span className="fs-7 text-muted"> From 8 Member </span>
                                        </td>
                                        <td className='text-muted'>N/A</td>
                                        <td style={{textAlign: 'center'}}><Link to="../chat/"> <i className="fa-solid fa-message text-primary" style={{fontSize: '25px'}}></i> </Link></td>
                                        <td className="text-center">

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td className="d-flex align-items-center">
                                             {/* begin:: Avatar  */}
                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                               <Link to="../viewsubcontractor/">
                                                    <div className="symbol-label">
                                                        <img src={a300_5} alt="Emma Smith" className="w-100" />
                                                    </div>
                                                </Link>
                                            </div>
                                             {/* end::Avatar */}
                                             {/* begin::User details */}
                                            <div className="d-flex flex-column">
                                               <Link to="../viewsubcontractor/" className="text-gray-800 text-hover-primary mb-1">Emma Smith</Link>
                                                <span className='text-muted'>smith@kpmg.com</span>
                                            </div>
                                             {/* begin::User details */}
                                        </td>
                                        <td className='text-muted'>Sub Contractor</td>
                                        <td>
                                            <div className="badge badge-light fw-bold text-muted" style={{fontSize: '15px'}}><i className="fa-solid fa-star" style={{color: '#ffd900', fontSize: '25px'}}></i> 4.9</div><br />
                                                <span className="fs-7 text-muted"> From 12 Member </span>
                                        </td>
                                        <td className='text-muted'>$25.00/Hr</td>
                                        <td style={{textAlign: 'center'}}><Link to="../chat/"> <i className="fa-solid fa-message text-primary" style={{fontSize: '25px'}}></i> </Link></td>
                                        <td className="text-center">
                                            <button className="btn border border-primary">Hire</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td className="d-flex align-items-center">
                                             {/* begin:: Avatar  */}
                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                               <Link to="../viewsubcontractor/">
                                                    <div className="symbol-label">
                                                        <img src={a300_9} alt="Emma Smith" className="w-100" />
                                                    </div>
                                                </Link>
                                            </div>
                                             {/* end::Avatar */}
                                             {/* begin::User details */}
                                            <div className="d-flex flex-column">
                                               <Link to="../viewsubcontractor/" className="text-gray-800 text-hover-primary mb-1">Brian Cox</Link>
                                                <span className='text-muted'>smith@kpmg.com</span>
                                            </div>
                                             {/* begin::User details */}
                                        </td>
                                        <td className='text-muted'>Sub Contractor</td>
                                        <td>
                                            <div className="badge badge-light fw-bold text-muted" style={{fontSize: '15px'}}><i className="fa-solid fa-star" style={{color: '#ffd900', fontSize: '25px'}}></i> 4.9</div><br/>
                                                <span className="fs-7 text-muted"> From 5 Member </span>
                                        </td>
                                        <td className='text-muted'>$25.00/Hr</td>
                                        <td style={{textAlign: 'center'}}><Link to="../chat/"> <i className="fa-solid fa-message text-primary" style={{fontSize: '25px'}}></i> </Link></td>
                                        <td className="text-center">
                                            <button className="btn border border-primary">Hire</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td className="d-flex align-items-center">
                                             {/* begin:: Avatar  */}
                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                               <Link to="../viewsubcontractor/">
                                                    <div className="symbol-label fs-3 bg-light-warning text-warning">C</div>
                                                </Link>
                                            </div>
                                             {/* end::Avatar */}
                                             {/* begin::User details */}
                                            <div className="d-flex flex-column">
                                               <Link to="../viewsubcontractor/" className="text-gray-800 text-hover-primary mb-1">Mikaela Collins</Link>
                                                <span className='text-muted'>mik@pex.com</span>
                                            </div>
                                             {/* begin::User details */}
                                        </td>
                                        <td className='text-muted'>Sub Contractor</td>
                                        <td>
                                            <div className="badge badge-light fw-bold text-muted" style={{fontSize: '15px'}}><i className="fa-solid fa-star" style={{color: '#ffd900', fontSize: '25px'}}></i> 4.9</div><br />
                                                <span className="fs-7 text-muted"> From 8 Member </span>
                                        </td>
                                        <td className='text-muted'>$25.00/Hr</td>
                                        <td style={{textAlign: 'center'}}><Link to="../chat/"> <i className="fa-solid fa-message text-primary" style={{fontSize: '25px'}}></i> </Link></td>
                                        <td className="text-center">
                                            <button className="btn border border-primary">Hire</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                             {/* end::Table */}
                        </div>
                         {/* end::Card body */}
                    </div>
                     {/* end::Card */}
                </div>
                 {/* end::Content */}
            </div>
             {/* end::Content wrapper */}
        </>
    )
}
function Invitedsubcontractor() {
    return <Layout data={<InvitedsubcontractorDate />} />
}
export default Invitedsubcontractor;