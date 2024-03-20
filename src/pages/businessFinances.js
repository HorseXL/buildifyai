import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Layout from './layout';

import bLogo from "../assets/images/b-logo.jpg"
import homeIMG2 from "../assets/images/h2.jpg"
import vimeo from "../assets/images/vimeo.svg"

function BusinessFinancesData() {

    document.title = 'Buildify AI | Business Finances'

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
            <div className="d-flex flex-column flex-column-fluid" style={{width:"100%"}}>
                {/*  <!--begin::Content-->  */}
                <div id="kt_app_content" className="app-content flex-column-fluid w-100">
                    {/* <!--begin::Layout--> */}
                    <div className="d-flex flex-column flex-lg-row">
                        {/* <!--begin::Content--> */}
                        <div className="flex-lg-row-fluid mb-10 mb-lg-0 me-lg-7 me-xl-10">
                            {/* <!--begin::Card--> */}
                            <div className="card">
                                {/* <!--begin::Card body--> */}
                                <div className="card-body p-12">
                                    {/* <!--begin::Form--> */}
                                    <form action="" id="kt_invoice_form">
                                        {/* <!--begin::Wrapper--> */}
                                        <div className="d-flex flex-column align-items-start flex-xxl-row">
                                            {/* <!--begin::Input group--> */}
                                            <div className="d-flex flex-center flex-equal fw-row text-nowrap order-1 order-xxl-2 me-4">
                                                <span className="fs-2x fw-bold text-gray-800">Invoice Information</span>
                                            </div>
                                            {/* <!--end::Input group--> */}
                                        </div>
                                        {/* <!--end::Top--> */}
                                        {/* <!--begin::Separator--> */}
                                        <div className="separator separator-dashed my-10"></div>
                                        {/* <!--end::Separator--> */}
                                        {/* <!--begin::Wrapper--> */}
                                        <div className="mb-0">
                                            {/* <!--begin::Row--> */}
                                            <div className="row gx-10 mb-5">
                                                {/* <!--begin::Col--> */}
                                                <div className="col-lg-6">
                                                    <label className="form-label fs-6 fw-bold text-gray-700 mb-3">Title</label>
                                                    {/* <!--begin::Input group--> */}
                                                    <div className="mb-5">
                                                        <input type="text" className="form-control form-control-solid" placeholder="Enter Title" />
                                                    </div>
                                                    {/* <!--end::Input group--> */}
                                                    <label className="form-label fs-6 fw-bold text-gray-700 mb-3">Date Paid</label>
                                                    {/* <!--begin::Input group--> */}
                                                    <div className="mb-5">
                                                        <input type="date" className="form-control form-control-solid"/>
                                                    </div>
                                                    {/* <!--end::Input group--> */}
                                                </div>
                                                {/* <!--end::Col--> */}
                                                {/* <!--begin::Col--> */}
                                                <div className="col-lg-6">
                                                    <label className="form-label fs-6 fw-bold text-gray-700 mb-3">ID #</label>
                                                    {/* <!--begin::Input group--> */}
                                                    <div className="mb-5">
                                                        <input type="text" className="form-control form-control-solid" placeholder="Enter ID" />
                                                    </div>
                                                    {/* <!--end::Input group--> */}
                                                    
                                                </div>
                                                {/* <!--end::Col--> */}
                                            </div>
                                            {/* <!--end::Row--> */}
                                            {/* <!--begin::Row--> */}
                                            <div className="row mb-5">
                                            <label class="fs-6 form-label fw-bold text-dark">Deadline</label>
                                                {/* <!--begin::Radio group--> */}
                                                <div class="nav-group nav-group-fluid">
                                                    {/* <!--begin::Option--> */}
                                                    <label>
                                                        <input type="radio" class="btn-check" name="type" value="date" checked="checked" />
                                                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">Choose Date</span>
                                                    </label>
                                                    {/* <!--end::Option--> */}
                                                    {/* <!--begin::Option--> */}
                                                    <label>
                                                        <input type="radio" class="btn-check" name="type" value="schedule" />
                                                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">Link to Schedule Item</span>
                                                    </label>
                                                    {/* <!--end::Option--> */}
                                                </div>
                                                {/* <!--end::Radio group--> */}
                                            </div>
                                            {/* <!--end::Row--> */}
                                            {/* <!--begin::Row--> */}
                                            <div className="row mb-5">
                                                <div className="col-lg-6">
                                                    <label className="form-label fs-6 fw-bold text-gray-700 mb-3">Deadline</label>
                                                    {/* <!--begin::Input group--> */}
                                                    <div className="mb-5">
                                                        <input type="date" className="form-control form-control-solid"/>
                                                    </div>
                                                    {/* <!--end::Input group--> */}
                                                </div>
                                                <div className="col-lg-6">
                                                    <label className="form-label fs-6 fw-bold text-gray-700 mb-3">Time</label>
                                                    {/* <!--begin::Input group--> */}
                                                    <div className="mb-5">
                                                        <input type="time" className="form-control form-control-solid" />
                                                    </div>
                                                    {/* <!--end::Input group--> */}
                                                </div>
                                            </div>
                                            {/* <!--end::Row--> */}
                                            {/* <!--begin::Row--> */}
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <label className="form-label fs-3 fw-bold text-gray-700">Owner Price</label>
                                                </div>
                                            </div>
                                            {/* <!--end::Row--> */}
                                            {/* <!--begin::Separator--> */}
                                            <div className="separator separator-dashed mb-10"></div>
                                            {/* <!--end::Separator--> */}
                                            {/* <!--begin::Row--> */}
                                            <div className="row mb-5">
                                                    {/* <!--begin::Label--> */}
                                                    <label className="form-label fw-bold fs-6 text-gray-700">Taxes</label>
                                                    {/* <!--end::Label--> */}
                                                <div className="col-lg-8">
                                                    {/* <!--begin::Select--> */}
                                                    <select name="currnecy" aria-label="Select a Timezone" data-control="select2" data-placeholder="Select Taxes" className="form-select form-select-solid">
                                                        <option value="No Tax">No Tax</option>
                                                    </select>
                                                    {/* <!--end::Select--> */}
                                                </div>
                                                <div className="col-lg-4">
                                                    <Link className="btn btn-link py-1 my-2">Manage Taxes</Link>
                                                </div>
                                            </div>
                                            {/* <!--end::Row--> */}
                                            {/* <!--begin::Row--> */}
                                            <div className="row my-10">
                                                {/* <!--begin::Radio group--> */}
                                                <div class="nav-group nav-group-fluid">
                                                    {/* <!--begin::Option--> */}
                                                    <label>
                                                        <input type="radio" class="btn-check" name="type1" value="flatFree" checked="checked" />
                                                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">Flat Free</span>
                                                    </label>
                                                    {/* <!--end::Option--> */}
                                                    {/* <!--begin::Option--> */}
                                                    <label>
                                                        <input type="radio" class="btn-check" name="type1" value="lineItems" />
                                                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bold px-4">Line Items</span>
                                                    </label>
                                                    {/* <!--end::Option--> */}
                                                </div>
                                                {/* <!--end::Radio group--> */}
                                            </div>
                                            {/* <!--end::Row--> */}
                                            {/* <!--begin::Row--> */}
                                            <div className="row gx-10 mb-5">
                                                {/* <!--begin::Col--> */}
                                                <div className="col-lg-12">
                                                    <label className="form-label fs-6 fw-bold text-gray-700 mb-3">Owner Price</label>
                                                    {/* <!--begin::Input group--> */}
                                                    <div className="mb-5">
                                                        <input type="text" className="form-control form-control-solid" placeholder="Enter Price" />
                                                    </div>
                                                    {/* <!--end::Input group--> */}
                                                </div>
                                                    <label className="form-label text-end fs-6 fw-bold text-gray-700 mb-3">Total Price: $0.00</label>
                                                {/* <!--end::Col--> */}
                                            </div>
                                            {/* <!--end::Row--> */}
                                            {/* <!--begin::Separator--> */}
                                            <div className="separator separator-dashed mb-10"></div>
                                            {/* <!--end::Separator--> */}
                                            {/* <!--begin::Row--> */}
                                            <div className="row gx-10 mb-5">
                                                {/* <!--begin::Col--> */}
                                                <div className="col-lg-12 my-2">
                                                    <label className="form-label fs-6 fw-bold text-gray-700 mb-3">Amount Paid</label>
                                                    
                                                    <p className="form-label fs-6 fw-bold text-gray-700 mb-3">$0.00</p>
                                                </div>
                                                <div className="col-lg-12 my-2">
                                                    <label className="form-label fs-6 fw-bold text-gray-700 mb-3">Balance Due</label>
                                                    
                                                    <p className="form-label fs-6 fw-bold text-gray-700 mb-3">$0.00</p>
                                                </div>
                                                {/* <!--end::Col--> */}
                                            </div>
                                            {/* <!--end::Row--> */}
                                            {/* <!--begin::Row--> */}
                                            <div className="row gx-10 mb-5">
                                                {/* <!--begin::Col--> */}
                                                <div className="col-lg-12 my-2">
                                                    <label className="form-label fs-6 fw-bold text-gray-700 mb-3">Payment History</label>
                                                    <hr />
                                                    <p className="form-label fs-7 text-gray-700 mb-3">Payments applied to this Invoice will be listed here</p>
                                                    
                                                </div>
                                                {/* <!--end::Col--> */}
                                            </div>
                                            {/* <!--end::Row--> */}
                                            {/* <!--begin::Input group--> */}
                                            <div class="d-flex flex-column mt-5 mb-8">
                                                <label class="fs-4 fw-semibold mb-2">Invoice Description</label>
                                                <textarea name="description" className="form-control form-control-solid" rows="3" placeholder="Enter Invoice Description"></textarea>
                                            </div>
						                    {/* <!--end::Input group--> */}
                                            {/* <!--begin::Notes--> */}
                                            <div className="mb-0">
                                                <label className="form-label fs-6 fw-bold text-gray-700">Internal Notes</label>
                                                <textarea name="notes" className="form-control form-control-solid" rows="3" placeholder="Enter Note"></textarea>
                                            </div>
                                            {/* <!--end::Notes--> */}
                                        </div>
                                        {/* <!--end::Wrapper--> */}
                                        <div className="row gx-10 my-5">
                                            <div className="col-lg"></div>
                                            <div className="col-lg"></div>
                                            <div className="col d-flex justify-content-end">
                                                <Link class="btn btnButton mx-2" to="/viewbusinessfinances/">Save & Release</Link>
                                                <Link class="btn btnButton mx-2" to="/viewbusinessfinances/">Save</Link>
                                            </div>
                                        </div>
                                    </form>
                                    {/* <!--end::Form--> */}
                                </div>
                                {/* <!--end::Card body--> */}
                            </div>
                            {/* <!--end::Card--> */}
                        </div>
                        {/* <!--end::Content--> */}
                        {/* <!--begin::Sidebar--> */}
                        <div className="flex-lg-auto min-w-lg-300px">
                            {/* <!--begin::Card--> */}
                            <div className="card" data-kt-sticky="true" data-kt-sticky-name="invoice" data-kt-sticky-offset="{default: false, lg: '200px'}" data-kt-sticky-width="{lg: '250px', lg: '300px'}" data-kt-sticky-left="auto" data-kt-sticky-top="150px" data-kt-sticky-animation="false" data-kt-sticky-zindex="95">
                                {/* <!--begin::Card body--> */}
                                <div className="card-body p-10">
                                    {/* <!--begin::Input group--> */}
                                    <div className="mb-10">
                                        {/* <!--begin::Label--> */}
                                        <label className="form-label fw-bold fs-6 text-gray-700">Messaging</label>
                                        {/* <!--end::Label--> */}
                                    </div>
                                    {/* <!--end::Input group--> */}
                                    {/* <!--begin::Separator--> */}
                                    <div className="separator separator-dashed mb-8"></div>
                                    {/* <!--end::Separator--> */}
                                    {/* <!--begin::Input group--> */}
                                    <div className="mb-8">
                                        {/* <!--begin::Label--> */}
                                        <label className="form-label fw-bold fs-6 text-gray-700">Messaging available after save</label>
                                        {/* <!--end::Label--> */}
                                    </div>
                                    {/* <!--end::Input group--> */}
                                </div>
                                {/* <!--end::Card body--> */}
                            </div>
                            {/* <!--end::Card--> */}
                            {/* <!--begin::Card--> */}
                            <div className="card my-5" data-kt-sticky="true" data-kt-sticky-name="invoice" data-kt-sticky-offset="{default: false, lg: '200px'}" data-kt-sticky-width="{lg: '250px', lg: '300px'}" data-kt-sticky-left="auto" data-kt-sticky-top="150px" data-kt-sticky-animation="false" data-kt-sticky-zindex="95">
                                {/* <!--begin::Card body--> */}
                                <div className="card-body p-10">
                                    {/* <!--begin::Input group--> */}
                                    <div className="mb-10">
                                        {/* <!--begin::Label--> */}
                                        <label className="form-label fw-bold fs-6 text-gray-700">Attachments</label>
                                        {/* <!--end::Label--> */}
                                    </div>
                                    {/* <!--end::Input group--> */}
                                    {/* <!--begin::Separator--> */}
                                    <div className="separator separator-dashed mb-8"></div>
                                    {/* <!--end::Separator--> */}
                                    {/* <!--begin::Input group--> */}
                                    <div className="mb-8">
                                        {/* <!--begin::Row--> */}
                                        <div className="row mb-5">
                                            {/* <!--begin::Col--> */}
                                            <div className="col">
                                                <div class="form-group mt-5">
                                                    <button type="button" data-repeater-create="" class="btn btn-sm btn-light-primary mx-1">
                                                    <i class="ki-outline ki-plus fs-2"></i>Add</button>
                                                    <button type="button" data-repeater-create="" class="btn btn-sm btn-light-primary mx-1">
                                                    <i class="ki-outline ki-plus fs-2"></i>Create New Doc</button>
                                                </div>
                                            </div>
                                            {/* <!--end::Col--> */}
                                        </div>
                                        {/* <!--end::Row--> */}
                                    </div>
                                    {/* <!--end::Input group--> */}
                                </div>
                                {/* <!--end::Card body--> */}
                            </div>
                            {/* <!--end::Card--> */}
                        </div>
                        {/* <!--end::Sidebar--> */}
                    </div>
                    {/* <!--end::Layout--> */}
                </div>
                {/* <!--end::Content--> */}
            </div>
            {/* <!--end::Content wrapper--> */}
        </>
    )
}
function BusinessFinances() {
    return <Layout data={<BusinessFinancesData />} />
}
export default BusinessFinances;