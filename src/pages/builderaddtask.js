import React from 'react'
import Layout from '../pages/layout';
import blogo from '../assets/images/b-logo.jpg'
import { Link } from 'react-router-dom';
import pdf_svg from "../assets/images/files/pdf.svg"
import doc_svg from "../assets/images/files/doc.svg"
import css_svg from "../assets/images/files/css.svg"


function AddtaskDate() {
    document.title = 'Buildify AI | Add Task';
    const accountType = window.localStorage.getItem("accountType");

    return (
        <>
            {/*begin::Content wrapper*/}
            <div class="d-flex flex-column flex-column-fluid">
               {/*begin::Content*/}
                <div id="kt_app_content" class="app-content flex-column-fluid">
                   {/*begin::Navbar*/}
                    <div class="card mb-6 mb-xl-9">
                        <div class="card-body pt-9 pb-0">
                           {/*begin::Details*/}
                            <div class="d-flex flex-wrap flex-sm-nowrap mb-6">
                               {/*begin::Image*/}
                                <div class="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
                                    <img class="mw-50px mw-lg-75px" src={blogo} alt="image" />
                                </div>
                               {/*end::Image*/}
                               {/*begin::Wrapper*/}
                                <div class="flex-grow-1">
                                   {/*begin::Head*/}
                                    <div class="d-flex justify-content-between align-items-start flex-wrap">
                                       {/*begin::Details*/}
                                        <div class="d-flex flex-column">
                                           {/*begin::Status*/}
                                            <div class="d-flex align-items-center mb-1">
                                                <Link to="#" class="text-gray-800 text-hover-primary fs-2 fw-bold me-3">Home Renovation</Link>
                                            </div>
                                           {/*end::Status*/}
                                        </div>
                                       {/*end::Details*/}
                                    </div>
                                    <div class="fs-6 text-muted fw-bold">BTG-2356</div>
                                   {/*end::Head*/}
                                   {/*begin::Info*/}
                                    <div class="d-flex flex-wrap justify-content-start mt-3">
                                       {/*begin::Stats*/}
                                        <div class="d-flex flex-wrap">
                                           {/*begin::Stat*/}
                                            <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                               {/*begin::Number*/}
                                                <div class="d-flex align-items-center">
                                                    <div class="fs-4 fw-bold">29 Jan, 2023</div>
                                                </div>
                                               {/*end::Number*/}
                                               {/*begin::Label*/}
                                                <div class="fw-semibold fs-6 text-muted">Due Date</div>
                                               {/*end::Label*/}
                                            </div>
                                           {/*end::Stat*/}
                                           {/*begin::Stat*/}
                                            <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                               {/*begin::Number*/}
                                                <div class="d-flex align-items-center">
                                                    <div class="fs-4 fw-bold" data-kt-countup="true" data-kt-countup-value="75">75</div>
                                                </div>
                                               {/*end::Number*/}
                                               {/*begin::Label*/}
                                                <div class="fw-semibold fs-6 text-muted">Open Tasks</div>
                                               {/*end::Label*/}
                                            </div>
                                           {/*end::Stat*/}
                                           {/*begin::Stat*/}
                                            <div class={`${accountType == "SUBCONTRACTOR" ? "d-none" : "d-block"} border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3`}>
                                               {/*begin::Number*/}
                                                <div class="d-flex align-items-center">
                                                    <div class="fs-4 fw-bold" data-kt-countup="true" data-kt-countup-value="15000" data-kt-countup-prefix="$">$15000</div>
                                                </div>
                                               {/*end::Number*/}
                                               {/*begin::Label*/}
                                                <div class="fw-semibold fs-6 text-muted">Budget Spent</div>
                                               {/*end::Label*/}
                                            </div>
                                           {/*end::Stat*/}
                                        </div>
                                       {/*end::Stats*/}
                                       {/*begin::Users*/}
                                       {/* <div class="symbol-group symbol-hover mb-3"> */}
                                           {/*begin::User*/}
                                           {/* <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                                                <span class="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
                                            </div> */}
                                           {/*end::User*/}
                                           {/*begin::User*/}
                                           {/* <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michael Eberon">
                                                <img alt="Pic" src="../assets/media/avatars/300-11.jpg" />
                                            </div> */}
                                           {/*end::User*/}
                                           {/*begin::User*/}
                                           {/* <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michelle Swanston">
                                                <img alt="Pic" src="../assets/media/avatars/300-7.jpg" />
                                            </div> */}
                                           {/*end::User*/}
                                           {/*begin::User*/}
                                           {/* <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Francis Mitcham">
                                                <img alt="Pic" src="../assets/media/avatars/300-20.jpg" />
                                            </div> */}
                                           {/*end::User*/}
                                           {/*begin::User*/}
                                           {/* <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                                                <span class="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                                            </div> */}
                                           {/*end::User*/}
                                           {/*begin::User*/}
                                           {/* <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                                                <img alt="Pic" src="../assets/media/avatars/300-2.jpg" />
                                            </div> */}
                                           {/*end::User*/}
                                           {/*begin::User*/}
                                           {/* <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Perry Matthew">
                                                <span class="symbol-label bg-info text-inverse-info fw-bold">P</span>
                                            </div> */}
                                           {/*end::User*/}
                                           {/*begin::User*/}
                                           {/* <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Barry Walter">
                                                <img alt="Pic" src="../assets/media/avatars/300-12.jpg" />
                                            </div> */}
                                           {/*end::User*/}
                                           {/*begin::All users*/}
                                           {/* <Link to="#" class="symbol symbol-35px symbol-circle" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users">
                                                <span class="symbol-label bg-dark text-inverse-dark fs-8 fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more users">+42</span>
                                            </Link> */}
                                           {/*end::All users*/}
                                           {/* </div> */}
                                       {/*end::Users*/}
                                    </div>
                                   {/*end::Info*/}
                                </div>
                               {/*end::Wrapper*/}
                                <div class="d-flex justify-content-end"><Link to="../builder/" class="btn btnButton h-45px fs-5 fw-bold mb-1">Invite Builder</Link></div>
                            </div>
                        </div>
                    </div>
                   {/*end::Navbar*/}
                   {/*begin::Row*/}
                    <div class="row gy-0 mb-6 mb-xl-12">
                       {/*begin::Col*/}
                        <div class="col-md-12">
                           {/*begin::Card*/}
                            <div class="card card-md-stretch me-xl-3 mb-md-0 mb-6">
                               {/*begin::Body*/}
                                <div class="card-body p-10 p-lg-15">
                                   {/*begin::Header*/}
                                    <div class="text-center flex-stack mb-7">
                                       {/*begin::Title*/}
                                        <h1 class="fw-bold text-dark">Add Task</h1>
                                       {/*end::Title*/}
                                    </div>
                                   {/*end::Header*/}
                                   {/*begin::Accordion*/}
                                    <div class="row">
                                        <div class="col-lg-4">
                                           {/*begin::Label*/}
                                            <label class="d-flex align-items-center fs-6 fw-semibold mb-2">
                                                <span class="required fs-4">Select Task Category</span>
                                            </label>
                                           {/*end::Label*/}
                                            <select name="" class="form-control mb-2">
                                                <option>Select Tasks Category </option>
                                                <option>Plumbing</option>
                                                <option>Electrical</option>
                                                <option>Interior designing</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-4">
                                           {/*begin::Label*/}
                                            <label class="d-flex align-items-center fs-6 fw-semibold mb-2">
                                                <span class="required fs-4">Task Name</span>
                                            </label>
                                           {/*end::Label*/}
                                            <input type="text" name="" class="form-control mb-2" placeholder="Task Name" />
                                        </div>
                                        <div class="col-lg-4">
                                           {/*begin::Label*/}
                                            <label class="d-flex align-items-center fs-6 fw-semibold mb-2">
                                                <span class="required fs-4">Assign Task</span>
                                            </label>
                                           {/*end::Label*/}
                                            <select name="" class="form-control mb-2">
                                                <option>Please Select</option>
                                                <option>Olivia Wild</option>
                                                <option>Sean Bean</option>
                                                <option>Peter Marcus</option>
                                                <option>Adam Williams</option>
                                            </select>
                                        </div>
                                    </div>
                                   {/*begin::Input group*/}
                                   {/*begin::Input group*/}
                                    <div class="d-flex flex-column mt-5 mb-8">
                                        <label class="fs-4 fw-semibold mb-2 required">Task Description</label>
                                        <textarea class="form-control form-control-solid" rows="3" name="target_details"
                                            placeholder="Type Task Description"></textarea>
                                    </div>
                                   {/*end::Input group*/}
                                    <div class="row">
                                        <div class="col-lg-4">
                                           {/*begin::Label*/}
                                            <label class="d-flex align-items-center fs-6 fw-semibold mb-2">
                                                <span class="required fs-4">Estimated Budget</span>
                                            </label>
                                           {/*end::Label*/}
                                            <input type="text" name="" class="form-control mb-2" placeholder="Task Estimated Budget" />
                                        </div>
                                        <div class="col-lg-4">
                                           {/*begin::Label*/}
                                            <label class="d-flex align-items-center fs-6 fw-semibold mb-2">
                                                <span class="required fs-4">Start Date</span>
                                            </label>
                                           {/*end::Label*/}
                                            <div class="position-relative text-end d-flex align-items-center">
                                               {/*begin::Icon*/}
                                               {/*end::Icon*/}
                                               {/*begin::Datepicker*/}
                                               <input class="form-control form-control-solid ps-12 scheduleDateClass"
                                                            placeholder="Select a date" name="due_date" type="date" id='scheduleDate'/>
                                                            <i class="ki-outline ki-calendar-8 fs-2 position-absolute mx-4 cursor-pointer"  style={{right:"0"}}></i>
                                                   {/*end::Datepicker*/}
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                           {/*begin::Label*/}
                                            <label class="d-flex align-items-center fs-6 fw-semibold mb-2">
                                                <span class="required fs-4">End Date</span>
                                            </label>
                                           {/*end::Label*/}
                                            <div class="position-relative d-flex align-items-center">
                                               {/*begin::Icon*/}
                                                {/* <i class="ki-outline ki-calendar-8 fs-2 position-absolute mx-4"></i> */}
                                               {/*end::Icon*/}
                                               {/*begin::Datepicker*/}
                                               <input class="form-control form-control-solid ps-12 scheduleDateClass"
                                                            placeholder="Select a date" name="due_date" type="date" id='scheduleDate'/>
                                                            <i class="ki-outline ki-calendar-8 fs-2 position-absolute mx-4 cursor-pointer"  style={{right:"0"}}></i>
                                                   {/*end::Datepicker*/}
                                            </div>
                                        </div>
                                    </div>
                                   {/*begin::Actions*/}
                                    <div class="text-center mt-5">
                                        <button type="reset" id="kt_modal_new_target_cancel"
                                            class="btn btnButtonCancel me-3">Cancel</button>
                                        <button type="submit" id="kt_modal_new_target_submit" class="btn btnButton">
                                            <span class="indicator-label">Submit</span>
                                            <span class="indicator-progress">Please wait...
                                                <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                        </button>
                                    </div>
                                   {/*end::Actions*/}
                                   {/*end::Accordion*/}
                                </div>
                               {/*end::Body*/}
                            </div>
                           {/*end::Card*/}
                        </div>
                       {/*end::Col*/}
                       {/*begin::Col*/}
                        <div class="col-md-12 mt-15">
                           {/*begin::Card*/}
                            <div class="card card-md-stretch me-xl-3 mb-md-0 mb-6">
                               {/*begin::Body*/}
                                <div class="card-body p-10 p-lg-15">
                                    <div class="text-center flex-stack mb-7">
                                       {/*begin::Title*/}
                                        <h1 class="fw-bold text-dark">All Task</h1>
                                       {/*end::Title*/}
                                    </div>
                                   {/*begin::Table container*/}
                                   {/*begin::Header*/}
                                    <div class="card-header border-0 p-0" style={{minHeight: '0px'}}>
                                        <h3 class="card-title align-items-start flex-column">
                                        </h3>
                                        <div class="card-toolbar">
                                            <i class="ki-outline ki-magnifier fs-3 text-muted position-absolute ms-4"></i>
                                            <input type="text" data-kt-ecommerce-category-filter="search" class="form-control form-control-solid w-250px ps-12" placeholder="Search" />
                                        </div>
                                    </div>
                                   {/*end::Header*/}
                                    <div class="table-responsive">
                                       {/*begin::Table*/}
                                        <table class="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                           {/*begin::Table head*/}
                                            <thead>
                                                <tr class="border-0">
                                                    <th class="min-w-50px text-muted fs-3">Category</th>
                                                    <th class="min-w-50px text-muted fs-3">Task</th>
                                                    <th class="min-w-110px text-muted fs-3">Timeline</th>
                                                    <th class="min-w-110px text-muted fs-3">Budget</th>
                                                    <th class="text-end min-w-110px text-muted fs-3">Status</th>
                                                    <th class="min-w-50px"></th>
                                                    <th class="min-w-50px"></th>
                                                    <th class="text-center min-w-110px text-muted fs-3">Assign Task</th>
                                                </tr>
                                            </thead>
                                           {/*end::Table head*/}
                                           {/*begin::Table body*/}
                                            <tbody>
                                                <tr>
                                                    <td class="fs-5 text-dark">Planning</td>
                                                    <td class="fs-5 text-dark">Planning</td>
                                                    <td class="text-start text-dark fs-5">11/08/23 to 14/12/23 </td>
                                                    <td class="text-start text-dark fs-5">50,000/1,00,000 </td>
                                                    <td class="text-end">
                                                        <span class="badge badge-light-success">Active</span>
                                                    </td>
                                                    <td class="text-end">
                                                        <Link to="../subcontractor/" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Invite Sub Contrator">
                                                            <i class="fa-solid fa-user-plus fs-2"></i>
                                                        </Link>
                                                    </td>
                                                    <td class="text-end">
                                                        <Link to="#" class="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Action">
                                                            <i class="fa-solid fa-ellipsis-vertical fs-5 ms-1"></i>
                                                        </Link>
                                                       {/*begin::Menu*/}
                                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                                                           {/*begin::Menu item*/}
                                                            <div class="menu-item px-3">
                                                                <Link to="#" class="menu-link px-3">
                                                                    Edit
                                                                </Link>
                                                            </div>
                                                           {/*end::Menu item*/}
                                                           {/*begin::Menu item*/}
                                                            <div class="menu-item px-3">
                                                                <Link to="#" class="menu-link px-3">
                                                                    Delete
                                                                </Link>
                                                            </div>
                                                           {/*end::Menu item*/}
                                                        </div>
                                                       {/*end::Menu*/}
                                                    </td>
                                                    <td class="text-center fs-5 text-dark">Olivia Wild</td>
                                                </tr>
                                                <tr>
                                                    <td class="fs-5 text-dark">Plumbing</td>
                                                    <td class="fs-5 text-dark">Planning</td>
                                                    <td class="text-start text-dark fs-5">01/05/23 to 01/05/24 </td>
                                                    <td class="text-start text-dark fs-5">80,000/1,20,000 </td>
                                                    <td class="text-end">
                                                        <span class="badge badge-light-success">Active</span>
                                                    </td>
                                                    <td class="text-end">
                                                        <Link to="../subcontractor/" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Invite Sub Contrator">
                                                            <i class="fa-solid fa-user-plus fs-2"></i>
                                                        </Link>
                                                    </td>
                                                    <td class="text-end">
                                                        <Link to="#" class="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Action">
                                                            <i class="fa-solid fa-ellipsis-vertical fs-5 ms-1"></i>
                                                        </Link>
                                                       {/*begin::Menu*/}
                                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                                                           {/*begin::Menu item*/}
                                                            <div class="menu-item px-3">
                                                                <Link to="#" class="menu-link px-3">
                                                                    Edit
                                                                </Link>
                                                            </div>
                                                           {/*end::Menu item*/}
                                                           {/*begin::Menu item*/}
                                                            <div class="menu-item px-3">
                                                                <Link to="#" class="menu-link px-3">
                                                                    Delete
                                                                </Link>
                                                            </div>
                                                           {/*end::Menu item*/}
                                                        </div>
                                                       {/*end::Menu*/}
                                                    </td>
                                                    <td class="text-center text-dark fs-5">Sean Bean</td>
                                                </tr>
                                                <tr>
                                                    <td class="fs-5 text-dark">Electrical</td>
                                                    <td class="fs-5 text-dark">Planning</td>
                                                    <td class="text-start text-dark fs-5">20/01/23 to 30/05/24 </td>
                                                    <td class="text-start text-dark fs-5">30,000/60,000 </td>
                                                    <td class="text-end">
                                                        <span class="badge badge-light-success">Active</span>
                                                    </td>
                                                    <td class="text-end">
                                                        <Link to="../subcontractor/" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Invite Sub Contrator">
                                                            <i class="fa-solid fa-user-plus fs-2"></i>
                                                        </Link>
                                                    </td>
                                                    <td class="text-end">
                                                        <Link to="#" class="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Action">
                                                            <i class="fa-solid fa-ellipsis-vertical fs-5 ms-1"></i>
                                                        </Link>
                                                       {/*begin::Menu*/}
                                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                                                           {/*begin::Menu item*/}
                                                            <div class="menu-item px-3">
                                                                <Link to="#" class="menu-link px-3">
                                                                    Edit
                                                                </Link>
                                                            </div>
                                                           {/*end::Menu item*/}
                                                           {/*begin::Menu item*/}
                                                            <div class="menu-item px-3">
                                                                <Link to="#" class="menu-link px-3">
                                                                    Delete
                                                                </Link>
                                                            </div>
                                                           {/*end::Menu item*/}
                                                        </div>
                                                       {/*end::Menu*/}
                                                    </td>
                                                    <td class="text-center text-dark fs-5">Adam Williams</td>
                                                </tr>
                                            </tbody>
                                           {/*end::Table body*/}
                                        </table>
                                    </div>
                                   {/*end::Table*/}
                                </div>
                               {/*end::Body*/}
                            </div>
                           {/*end::Card*/}
                        </div>
                       {/*end::Col*/}
                    </div>
                   {/*end::Row*/}
                </div>
               {/*end::Content*/}
            </div>
           {/*end::Content wrapper*/}
        </>
    )
}
function BuilderAddtask() {
    return <Layout data={<AddtaskDate />} />
}
export default BuilderAddtask;