import React from 'react'
import Layout from '../pages/layout';
import a300_6 from '../assets/images/Avatar/300-6.jpg'
import a300_5 from '../assets/images/Avatar/300-5.jpg'
import a300_10 from '../assets/images/Avatar/300-10.jpg'
import a300_9 from '../assets/images/Avatar/300-9.jpg'
import sketchy from '../assets/images/4.png'
import { Link } from 'react-router-dom';


function SpecificationData() {
    document.title = 'Buildify AI | Sub Contractor';
    
    return (
        <>
    {/* <!--begin::Content--> */}
    <div class="d-flex flex-column flex-column-fluid">
    <div id="kt_app_content" class="app-content flex-column-fluid">
        {/* <!--begin::Card--> */}
        <div class="card mb-7">
            {/* <!--begin::Card body--> */}
            <div class="card-body p-0">
                {/* <!--begin::Authentication - Multi-steps--> */}
                <div class="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column stepper-multistep"
                    id="kt_create_account_stepper">
                    {/* <!--begin::Aside--> */}
                    <div class="d-flex flex-lg-row-auto w-lg-300px w-xl-300px specification_side_bar">
                        <div class="d-flex flex-column bottom-0 w-lg-300px w-xl-300px bgi-size-cover bgi-position-center specificationBG">
                            {/* <!--begin::Body--> */}
                            <div class="">
                                {/* <!--begin::Navbar--> */}
                                {/* <!--begin::Nav--> */}
                                <ul class=" nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
                                    {/* <!--begin::Nav item--> */}
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            style={{marginLeft:"1rem"}} onclick="changeNave('1')" id="nav_1">Personal
                                            Details</a>
                                    </li>
                                    {/* <!--end::Nav item--> */}
                                    {/* <!--begin::Nav item--> */}
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('2')" id="nav_2">Site Work</a>
                                    </li>
                                    {/* <!--end::Nav item--> */}
                                    {/* <!--begin::Nav item--> */}
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('3')" id="nav_3">Notes</a>
                                    </li>
                                    {/* <!--end::Nav item--> */}
                                    {/* <!--begin::Nav item--> */}
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('4')" id="nav_4">Block Foundation</a>
                                    </li>
                                    {/* <!--end::Nav item--> */}
                                    {/* <!--begin::Nav item--> */}
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('5')" id="nav_5">Lumber Package</a>
                                    </li>
                                    {/* <!--end::Nav item--> */}

                                    {/* <!--begin::Nav item--> */}
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('6')" id="nav_6">Framing Labor</a>
                                    </li>
                                    {/* <!--end::Nav item--> */}
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('7')" id="nav_7">Roofing</a>
                                    </li>
                                    {/* <!--end::Nav item--> */}
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('8')" id="nav_8">Windows</a>
                                    </li>
                                    {/* <!--begin::Nav item--> */}
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('9')" id="nav_9">Exterior Doors</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('10')" id="nav_10">Siding / Cornice</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('11')" id="nav_11">Masonry/Stucco</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('12')" id="nav_12">Plumbing
                                            Care</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('13')" id="nav_13">Bath</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('14')" id="nav_14">Kitchen</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('15')" id="nav_15">Laundry</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('16')" id="nav_16">Metal Fireplace(s)</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('16')" id="nav_16">HVAC</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('16')" id="nav_16">Electrical</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('16')" id="nav_16">Low Voltage & Communications</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('16')" id="nav_16">Insulation</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('16')" id="nav_16">Drywall</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('16')" id="nav_16">Garage Doors</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('16')" id="nav_16">Interior Painting</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('16')" id="nav_16">Exterior Painting</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('16')" id="nav_16">Rain Gutters</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('16')" id="nav_16">Exterior Decks</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('16')" id="nav_16">Cabinets</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('16')" id="nav_16">Appliances</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('16')" id="nav_16">Counter Tops</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('16')" id="nav_16">Walks & Patios</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('16')" id="nav_16">Interior Trim Materials</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('16')" id="nav_16">Finish Carpentry</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('16')" id="nav_16">Flooring</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('16')" id="nav_16">Ceramic Tile & Glass Block</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('16')" id="nav_16">Gates, Columns Fencing & Landscaping</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-active-primary fs-7 py-5 me-6 text-white pointer"
                                            onclick="changeNave('16')" id="nav_16">Wrought Iron</a>
                                    </li>
                                    {/* <!--end::Nav item--> */}
                                </ul>
                                {/* <!--end::Nav--> */}
                                {/* <!--end::Navbar--> */}
                            </div>
                        </div>
                    </div>
                    {/* <!--begin::Aside--> */}
                    {/* <!--begin::Body--> */}
                    <div class="d-flex flex-column flex-lg-row-fluid p-10">
                        <div class="tab-pane fade show active">
                            {/* <!--begin::Form--> */}
                            <form class="my-auto pb-5" method="POST" enctype="multipart/form-data"
                                id="createAccountForm" onsubmit="return false">
                                {/* <!--begin::Step 1--> */}
                                <div class="current" data-kt-stepper-element="content">
                                    {/* <!--begin::Wrapper--> */}
                                    <div class="w-100">
                                        {/* <!--begin::Heading--> */}
                                        <div class="pb-10 pb-lg-15 d-flex justify-content-center">
                                            {/* <!--begin::Title--> */}
                                            <h2 class="fw-bold d-flex align-items-center text-center text-dark">New
                                                Client
                                                Entry (Caller’s Information)
                                            </h2>
                                            {/* <!--end::Title--> */}
                                        </div>
                                        {/* <!--end::Heading--> */}
                                        {/* <!--begin::Input group--> */}
                                        <div class="mb-10 fv-row">
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Row--> */}
                                            <div class="row mb-2" data-kt-buttons="true">
                                                {/* <!--begin::Col--> */}
                                                <div class="col-lg-6">
                                                    {/* <!--begin::Option--> */}
                                                    <input type="text" class="form-control form-control-solid"
                                                        placeholder="Caller’s First Name" name="callerFirstName" value="" />
                                                </div>
                                                {/* <!--end::Col--> */}
                                                <div class="col-lg-6">
                                                    {/* <!--begin::Option--> */}
                                                    <input type="text" class="form-control form-control-solid"
                                                        placeholder="Caller’s Last Name" name="callerLastName" value="" />
                                                </div>
                                            </div>
                                            {/* <!--end::Row--> */}
                                        </div>
                                        {/* <!--end::Input group--> */}
                                        {/* <!--begin::Input group--> */}
                                        <div class="mb-10 fv-row">
                                            {/* <!--begin::Input--> */}
                                            <select class="form-select form-select-solid" name="marketingPhone" data-control="select2"
                                                data-placeholder="Select Marketing Phone#" data-hide-search="true">
                                                <option value="" selected="selected">Select Marketing Phone#</option>
                                                <option value="1">313 585 7674</option>
                                                <option value="2">313 585 7675</option>
                                                <option value="3">313 585 7676</option>
                                            </select>
                                            {/* <!--end::Input--> */}
                                            <span id="marketingPhoneError"></span>
                                        </div>
                                        {/* <!--end::Input group--> */}
                                        {/* <!--begin::Input group--> */}
                                        <div class="mb-10 fv-row">
                                            <div class="row mb-2" data-kt-buttons="true">
                                                {/* <!--begin::Col--> */}
                                                <div class="col-lg-6">
                                                    {/* <!--begin::Option--> */}
                                                    <select class="form-select form-select-solid" name="advertMarketingType" data-control="select2"
                                                        data-placeholder="Select Advert Marketing Type"
                                                        data-hide-search="true">
                                                        <option value="" selected="selected">Select Advert Marketing
                                                            Type
                                                        </option>
                                                        <option value="1">Print advertising</option>
                                                        <option value="2">Television advertising</option>
                                                        <option value="3">Mobile advertising</option>
                                                    </select>
                                                    <span id="advertMarketingTypeError"></span>
                                                </div>
                                                {/* <!--end::Col--> */}
                                                <div class="col-lg-6">
                                                    <select class="form-select form-select-solid" name="accountType" id="accountType" data-control="select2"
                                                        data-placeholder="Is Caller A Patient?" data-hide-search="true">
                                                        <option value="Patient" selected="selected">Patient</option>
                                                        <option value="Care Giver">Care Giver</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-10 fv-row">
                                            <div class="d-flex justify-content-center">
                                                {/* <!--begin::Title--> */}
                                                <a name="callsave" onclick="callBackInformation()" class="d-flex align-items-center btn btn-primary mx-3">Caller is
                                                    not ready to Register
                                                </a>
                                                <button type="submit" data-kt-ecommerce-settings-type="submit" name="save" class="d-flex align-items-center btn btn-primary mx-3">Continue
                                                    With Patient Registation
                                                </button>
                                                <input type="hidden" name="caregiverId" id="caregiverId" value="" />
                                                <input type="hidden" name="patientId" id="patientId" value="" />
                                                {/* <!--end::Title--> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--end::Wrapper--> */}
                                </div>
                                <div class="current hidetab" id="callBackInformation">
                                    {/* <!--begin::Wrapper--> */}
                                    <div class="w-100">
                                        {/* <!--begin::Heading--> */}
                                        <div class="pb-5 mt-5 d-flex justify-content-center">
                                            {/* <!--begin::Title--> */}
                                            <h2 class="fw-bold d-flex align-items-center text-center text-dark">Record
                                                Caller’s information for a possible follow-up.
                                            </h2>
                                            {/* <!--end::Title--> */}
                                        </div>
                                        {/* <!--end::Heading--> */}
                                        {/* <!--begin::Input group--> */}
                                        <div class="mb-5 fv-row">
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Row--> */}
                                            <div class="row mb-2" data-kt-buttons="true">
                                                {/* <!--begin::Col--> */}
                                                <div class="col-lg-6">
                                                    {/* <!--begin::Option--> */}
                                                    <input type="text" class="form-control form-control-solid"
                                                        placeholder="Call Back Phone#" name="callPhoneNo" value="" />
                                                </div>
                                                {/* <!--end::Col--> */}
                                                <div class="col-lg-6">
                                                    {/* <!--begin::Option--> */}
                                                    <input type="date" class="form-control form-control-solid"
                                                        placeholder="Call Back Date" name="callBackDate" value="" />
                                                </div>
                                            </div>
                                            {/* <!--end::Row--> */}
                                        </div>
                                        {/* <!--end::Input group--> */}
                                        {/* <!--begin::Input group--> */}
                                        <div class="mb-10 fv-row">
                                            {/* <!--begin::Input--> */}
                                            <textarea class="form-control form-control-solid" name="additionalNotes" rows="5"
                                                placeholder="Enter Additional Notes (If Necessary)"></textarea>
                                            {/* <!--end::Input--> */}
                                        </div>
                                        {/* <!--end::Input group--> */}
                                        <div class="mb-10 fv-row">
                                            <div class="d-flex justify-content-center">
                                                {/* <!--begin::Title--> */}
                                                <button class="d-flex align-items-center btn btn-primary mx-3">Save &
                                                    Next
                                                </button>
                                                {/* <!--end::Title--> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Step 1--> */}


                                {/* <!--end::Actions--> */}
                            </form>
                            {/* <!--end::Form--> */}
                        </div>
                        <div class="tab-pane fade hidetab" id="kt_tab_1">
                            {/* <!--begin::Form--> */}
                            <form class="my-auto pb-5" method="POST" enctype="multipart/form-data"
                                id="personalDetailsForm" onsubmit="return false">
                                {/* <!--begin::Step 1--> */}
                                <div class="current" data-kt-stepper-element="content">
                                    {/* <!--begin::Wrapper--> */}
                                    <div class="w-100">
                                        {/* <!--begin::Stat--> */}
                                        <div
                                            class="border border-gray-300 border-solid rounded min-w-125px py-5 px-5 mt-4 mb-3">
                                            {/* <!--begin::Details--> */}
                                            <div class="d-flex flex-wrap flex-sm-nowrap">
                                                {/* <!--begin: Pic--> */}
                                                <div class="me-7 mb-4">
                                                    <div
                                                        class="symbol symbol-100px symbol-lg-150px symbol-fixed position-relative">
                                                        <img src="<?= PUBLIC_PATH ?>/assets/media/avatars/300-1.jpg"
                                                            alt="image" />
                                                    </div>
                                                </div>
                                                {/* <!--end::Pic--> */}
                                                {/* <!--begin::Info--> */}
                                                <div class="flex-grow-1">
                                                    {/* <!--begin::Title--> */}
                                                    <div
                                                        class="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                                        {/* <!--begin::User--> */}
                                                        <div class="d-flex flex-column">
                                                            {/* <!--begin::Name--> */}
                                                            <div class="d-flex align-items-center mb-5">
                                                                <a href="#"
                                                                    class="text-gray-900 text-hover-primary fs-4 fw-bold me-1">[DHS]
                                                                    - File Status: Missing Paperwork / Medical Needs
                                                                    <br/> (In-Process) - 0 Day(s) ago</a>
                                                            </div>
                                                            {/* <!--end::Name--> */}
                                                            {/* <!--begin::Name--> */}
                                                            <div class="d-flex align-items-center mt-4">
                                                                <a href="#"
                                                                    class="text-gray-900 text-hover-primary fs-4 fw-bold me-1">Client#:
                                                                    <span id="clientId"></span> | Filed Date: 11-02-2022 | Case Open |
                                                                    <br/> End Date: Pending / Pending | Assign to / Date:
                                                                    Intake04 / 11-02-2022 | Intake Department</a>
                                                            </div>
                                                            {/* <!--end::Name--> */}
                                                        </div>
                                                        {/* <!--end::User--> */}
                                                    </div>
                                                    {/* <!--end::Title--> */}
                                                </div>
                                                {/* <!--end::Info--> */}
                                            </div>
                                            {/* <!--end::Details--> */}
                                        </div>
                                        {/* <!--begin::Stat--> */}
                                        {/* <!--begin::Heading--> */}
                                        <div class="pb-10 pb-lg-10 mt-5 d-flex justify-content-center">
                                            {/* <!--begin::Title--> */}
                                            <h2 class="fw-bold d-flex align-items-center text-center text-dark">Personal
                                                Details
                                            </h2>
                                            {/* <!--end::Title--> */}
                                        </div>
                                        {/* <!--end::Heading--> */}
                                        {/* <!--begin::Input group--> */}
                                        <div class="mb-5 fv-row">
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Row--> */}
                                            <div class="row mb-2" data-kt-buttons="true">
                                                {/* <!--begin::Col--> */}
                                                <div class="col-lg-2">
                                                </div>
                                                <label class="col-lg-2 col-form-label fw-semibold fs-6">First
                                                    Name</label>
                                                {/* <!--end::Col--> */}
                                                <div class="col-lg-6">
                                                    {/* <!--begin::Option--> */}
                                                    <input type="text" class="form-control form-control-solid"
                                                        placeholder="First Name" name="firstName" id="firstName" value="" />
                                                </div>
                                                <div class="col-lg-2">
                                                </div>
                                            </div>
                                            {/* <!--end::Row--> */}
                                        </div>
                                        {/* <!--end::Input group--> */}
                                        {/* <!--begin::Input group--> */}
                                        <div class="mb-5 fv-row">
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Row--> */}
                                            <div class="row mb-2" data-kt-buttons="true">
                                                {/* <!--begin::Col--> */}
                                                <div class="col-lg-2">
                                                </div>
                                                <label class="col-lg-2 col-form-label fw-semibold fs-6">Last
                                                    Name</label>
                                                {/* <!--end::Col--> */}
                                                <div class="col-lg-6">
                                                    {/* <!--begin::Option--> */}
                                                    <input type="text" class="form-control form-control-solid"
                                                        placeholder="Last Name" name="lastName" id="lastName" value="" />
                                                </div>
                                                <div class="col-lg-2">
                                                </div>
                                            </div>
                                            {/* <!--end::Row--> */}
                                        </div>
                                        {/* <!--end::Input group--> */}
                                        {/* <!--begin::Input group--> */}
                                        <div class="mb-5 fv-row">
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Row--> */}
                                            <div class="row mb-2" data-kt-buttons="true">
                                                {/* <!--begin::Col--> */}
                                                <div class="col-lg-2">
                                                </div>
                                                <label class="col-lg-2 col-form-label fw-semibold fs-6">Middle
                                                    Name:(Optional)</label>
                                                {/* <!--end::Col--> */}
                                                <div class="col-lg-6">
                                                    {/* <!--begin::Option--> */}
                                                    <input type="text" class="form-control form-control-solid"
                                                        placeholder="Middle Name" name="middleName" value="" />
                                                </div>
                                                <div class="col-lg-2">
                                                </div>
                                            </div>
                                            {/* <!--end::Row--> */}
                                        </div>
                                        {/* <!--begin::Heading--> */}
                                        <div class="pb-15 pb-lg-10 mt-5 d-flex justify-content-center">
                                            {/* <!--begin::Title--> */}
                                            <h2 class="fw-bold d-flex align-items-center text-center text-dark">Personal
                                                Misc Details
                                            </h2>
                                            {/* <!--end::Title--> */}
                                        </div>
                                        {/* <!--end::Heading--> */}
                                        {/* <!--begin::Input group--> */}
                                        <div class="mb-5 fv-row">
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Row--> */}
                                            <div class="row mb-2" data-kt-buttons="true">
                                                {/* <!--begin::Col--> */}
                                                <div class="col-lg-2">
                                                </div>
                                                <label class="col-lg-2 col-form-label fw-semibold fs-6">Date of
                                                    birth:</label>
                                                {/* <!--end::Col--> */}
                                                <div class="col-lg-6">
                                                    {/* <!--begin::Option--> */}
                                                    <input type="date" class="form-control form-control-solid"
                                                        name="dateofBirth" value=""/>
                                                </div>
                                                <div class="col-lg-2">
                                                </div>
                                            </div>
                                            {/* <!--end::Row--> */}
                                        </div>
                                        {/* <!--end::Input group--> */}
                                        {/* <!--begin::Input group--> */}
                                        <div class="mb-5 fv-row">
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Row--> */}
                                            <div class="row mb-2" data-kt-buttons="true">
                                                {/* <!--begin::Col--> */}
                                                <div class="col-lg-2">
                                                </div>
                                                <label class="col-lg-2 col-form-label fw-semibold fs-6">Gender:</label>
                                                {/* <!--end::Col--> */}
                                                <div class="col-lg-6">
                                                    {/* <!--begin::Option--> */}
                                                    <input class="form-check-input mt-2" type="radio" name="gender"
                                                        value="Male" /> <label class="m-2 mt-3">Male </label>

                                                    <input class="form-check-input mt-2" type="radio" name="gender"
                                                        value="Female" /> <label class="m-2 mt-3">Female </label>
                                                    <br/>
                                                    <span id="genderError"></span>
                                                </div>
                                                <div class="col-lg-2">
                                                </div>
                                            </div>
                                            {/* <!--end::Row--> */}
                                        </div>
                                        {/* <!--end::Input group--> */}
                                        {/* <!--begin::Input group--> */}
                                        <div class="mb-5 fv-row">
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Row--> */}
                                            <div class="row mb-2" data-kt-buttons="true">
                                                {/* <!--begin::Col--> */}
                                                <div class="col-lg-2">
                                                </div>
                                                <label class="col-lg-2 col-form-label fw-semibold fs-6">SSN:</label>
                                                {/* <!--end::Col--> */}
                                                <div class="col-lg-6">
                                                    {/* <!--begin::Option--> */}
                                                    <input type="text" class="form-control form-control-solid"
                                                        placeholder="SSN" name="ssn" value="" />
                                                </div>
                                                <div class="col-lg-2">
                                                </div>
                                            </div>
                                            {/* <!--end::Row--> */}
                                        </div>
                                        {/* <!--begin::Heading--> */}
                                        <div class="pb-15 pb-lg-10 mt-5 d-flex justify-content-center">
                                            {/* <!--begin::Title--> */}
                                            <h2 class="fw-bold d-flex align-items-center text-center text-dark">Personal
                                                Contact Information
                                            </h2>
                                            {/* <!--end::Title--> */}
                                        </div>
                                        {/* <!--end::Heading--> */}
                                        {/* <!--begin::Input group--> */}
                                        <div class="mb-5 fv-row">
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Row--> */}
                                            <div class="row mb-2" data-kt-buttons="true">
                                                {/* <!--begin::Col--> */}
                                                <div class="col-lg-2">
                                                </div>
                                                <label class="col-lg-2 col-form-label fw-semibold fs-6">Phone
                                                    No.:</label>
                                                {/* <!--end::Col--> */}
                                                <div class="col-lg-6">
                                                    {/* <!--begin::Option--> */}
                                                    <input type="text" placeholder="Phone No."
                                                        class="form-control form-control-solid" name="phoneNo"
                                                        value="" />
                                                </div>
                                                <div class="col-lg-2">
                                                </div>
                                            </div>
                                            {/* <!--end::Row--> */}
                                        </div>
                                        {/* <!--end::Input group--> */}
                                        {/* <!--begin::Input group--> */}
                                        <div class="mb-5 fv-row">
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Row--> */}
                                            <div class="row mb-2" data-kt-buttons="true">
                                                {/* <!--begin::Col--> */}
                                                <div class="col-lg-2">
                                                </div>
                                                <label class="col-lg-2 col-form-label fw-semibold fs-6">Fax
                                                    Number:</label>
                                                {/* <!--end::Col--> */}
                                                <div class="col-lg-6">
                                                    <input type="text" placeholder="Fax Number"
                                                        class="form-control form-control-solid" name="faxNumber"
                                                        value="" />
                                                </div>
                                                <div class="col-lg-2">
                                                </div>
                                            </div>
                                            {/* <!--end::Row--> */}
                                        </div>
                                        {/* <!--end::Input group--> */}
                                        {/* <!--begin::Input group--> */}
                                        <div class="mb-5 fv-row">
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Row--> */}
                                            <div class="row mb-2" data-kt-buttons="true">
                                                {/* <!--begin::Col--> */}
                                                <div class="col-lg-2">
                                                </div>
                                                <label class="col-lg-2 col-form-label fw-semibold fs-6">Email:</label>
                                                {/* <!--end::Col--> */}
                                                <div class="col-lg-6">
                                                    {/* <!--begin::Option--> */}
                                                    <input type="text" class="form-control form-control-solid"
                                                        placeholder="Email" name="email" value="" />
                                                </div>
                                                <div class="col-lg-2">
                                                </div>
                                            </div>
                                            {/* <!--end::Row--> */}
                                        </div>
                                        {/* <!--begin::Input group--> */}
                                        <div class="mb-5 fv-row">
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Row--> */}
                                            <div class="row mb-2" data-kt-buttons="true">
                                                {/* <!--begin::Col--> */}
                                                <div class="col-lg-2">
                                                </div>
                                                <label class="col-lg-2 col-form-label fw-semibold fs-6"></label>
                                                {/* <!--end::Col--> */}
                                                <div class="col-lg-6">
                                                    {/* <!--begin::Option--> */}
                                                    <input class="form-check-input mt-2" type="radio" name="dhsPrivaterRadio"
                                                        value="DHS" /> <label class="m-2 mt-3">DHS </label>

                                                    <input class="form-check-input mt-2" type="radio" name="dhsPrivaterRadio"
                                                        value="Mi Health Link" /> <label class="m-2 mt-3">Mi Health Link
                                                    </label>
                                                    <input class="form-check-input mt-2" type="radio" name="dhsPrivaterRadio"
                                                        value="Private" /> <label class="m-2 mt-3">Private </label>
                                                    <br/>
                                                    <span id="dhsPrivaterRadioError"></span>
                                                </div>
                                                <div class="col-lg-2">
                                                </div>
                                            </div>
                                            {/* <!--end::Row--> */}
                                        </div>
                                        <div class="mb-5 fv-row">
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Row--> */}
                                            <div class="row mb-2" data-kt-buttons="true">
                                                {/* <!--begin::Col--> */}
                                                <div class="col-lg-2">
                                                </div>
                                                <div class="col-lg-4">
                                                    <input type="text" class="form-control form-control-solid"
                                                        placeholder="Client #" name="client" value="" />
                                                </div>
                                                <div class="col-lg-4">
                                                    <input type="date" class="form-control form-control-solid"
                                                        placeholder="Application Date" name="applicationDate" value="" />
                                                </div>
                                                <div class="col-lg-2">
                                                </div>
                                            </div>
                                            {/* <!--end::Row--> */}
                                        </div>
                                        <div class="mt-15 fv-row">
                                            <div class="d-flex justify-content-center">
                                                {/* <!--begin::Title--> */}
                                                <a href="<?= SITE_URL ?>dashboard" class="d-flex align-items-center btn btn-light mx-3">Cancel
                                                </a>
                                                <button type="submit" data-kt-ecommerce-settings-type="submit" name="save" class="d-flex align-items-center btn btn-primary mx-3">
                                                    Save & Next
                                                </button>
                                                {/* <!--end::Title--> */}
                                            </div>
                                        </div>
                                        {/* <!--end::Input group--> */}
                                    </div>
                                    {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Actions--> */}
                            </form>
                            {/* <!--end::Form--> */}
                        </div>
                        <div class="tab-pane fade hidetab" id="kt_tab_2">
                            {/* <!--begin::Form--> */}
                            <form class="my-auto pb-5" method="POST" enctype="multipart/form-data"
                                id="addressDetailsForm" onsubmit="return false">
                                {/* <!--begin::Step 1--> */}
                                <div class="current" data-kt-stepper-element="content">
                                    {/* <!--begin::Wrapper--> */}
                                    <div class="w-100">
                                        {/* <!--begin::Heading--> */}
                                        <div class="pb-10 pb-lg-10 mt-5 d-flex justify-content-center">
                                            {/* <!--begin::Title--> */}
                                            <h2 class="fw-bold d-flex align-items-center text-center text-dark">Address
                                                Details
                                            </h2>
                                            {/* <!--end::Title--> */}
                                        </div>
                                        {/* <!--end::Heading--> */}
                                        {/* <!--begin::Input group--> */}
                                        <div class="mb-5 fv-row">
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Row--> */}
                                            <div class="row mb-2" data-kt-buttons="true">
                                                {/* <!--begin::Col--> */}
                                                <div class="col-lg-2">
                                                </div>
                                                <label class="col-lg-2 col-form-label fw-semibold fs-6">Address:</label>
                                                {/* <!--end::Col--> */}
                                                <div class="col-lg-6">
                                                    {/* <!--begin::Option--> */}
                                                    <input type="text" class="form-control form-control-solid"
                                                        placeholder="Address" name="address" value="" />
                                                </div>
                                                <div class="col-lg-2">
                                                </div>
                                            </div>
                                            {/* <!--end::Row--> */}
                                        </div>
                                        {/* <!--end::Input group--> */}
                                        {/* <!--begin::Input group--> */}
                                        <div class="mb-5 fv-row">
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Row--> */}
                                            <div class="row mb-2" data-kt-buttons="true">
                                                {/* <!--begin::Col--> */}
                                                <div class="col-lg-2">
                                                </div>
                                                <label
                                                    class="col-lg-2 col-form-label fw-semibold fs-6">Apt/Suit#:</label>
                                                {/* <!--end::Col--> */}
                                                <div class="col-lg-6">
                                                    {/* <!--begin::Option--> */}
                                                    <input type="text" class="form-control form-control-solid"
                                                        placeholder="Apt/Suit" name="aptSuit" value="" />
                                                </div>
                                                <div class="col-lg-2">
                                                </div>
                                            </div>
                                            {/* <!--end::Row--> */}
                                        </div>
                                        {/* <!--end::Input group--> */}
                                        {/* <!--begin::Input group--> */}
                                        <div class="mb-5 fv-row">
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Row--> */}
                                            <div class="row mb-2" data-kt-buttons="true">
                                                {/* <!--begin::Col--> */}
                                                <div class="col-lg-2">
                                                </div>
                                                <label class="col-lg-2 col-form-label fw-semibold fs-6">Country:</label>
                                                {/* <!--end::Col--> */}
                                                <div class="col-lg-6">
                                                    {/* <!--begin::Option--> */}
                                                    <select class="form-select form-select-solid" data-hide-search="true" name="countryId" id="countryId" data-placeholder="Select Country" onchange="getState()">
                                                    <option>Test</option>
                                                    </select>
                                                    <span id="countryIdError"></span>
                                                </div>
                                                <div class="col-lg-2">
                                                </div>
                                            </div>
                                            {/* // <!--end::Row--> */}
                                        </div>
                                        {/* // <!--begin::Input group-->
                                        // <!--begin::Input group--> */}
                                        <div class="mb-5 fv-row">
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Row--> */}
                                            <div class="row mb-2" data-kt-buttons="true">
                                                {/* <!--begin::Col--> */}
                                                <div class="col-lg-2">
                                                </div>
                                                <label class="col-lg-2 col-form-label fw-semibold fs-6">State:</label>
                                                {/* <!--end::Col--> */}
                                                <div class="col-lg-6">
                                                    {/* <!--begin::Option--> */}
                                                    <select class="form-select form-select-solid" data-hide-search="true" name="stateId" id="stateId" data-placeholder="Select State" onchange="getCity()">
                                                        <option></option>
                                                    </select>
                                                    <span id="stateIdError"></span>
                                                </div>
                                                <div class="col-lg-2">
                                                </div>
                                            </div>
                                            {/* <!--end::Row--> */}
                                        </div>
                                        {/* // <!--begin::Input group--> */}
                                        <div class="mb-5 fv-row">
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Row--> */}
                                            <div class="row mb-2" data-kt-buttons="true">
                                                {/* <!--begin::Col--> */}
                                                <div class="col-lg-2">
                                                </div>
                                                <label class="col-lg-2 col-form-label fw-semibold fs-6">City:</label>
                                                {/* <!--end::Col--> */}
                                                <div class="col-lg-6">
                                                    {/* <!--begin::Option--> */}
                                                    <select class="form-select form-select-solid" data-hide-search="true" name="cityId" id="cityId" data-placeholder="Select City">
                                                    </select>
                                                    <span id="cityIdError"></span>
                                                </div>
                                                <div class="col-lg-2">
                                                </div>
                                            </div>
                                            {/* <!--end::Row--> */}
                                        </div>
                                        {/* // <!--end::Input group-->
                                        // <!--begin::Input group--> */}
                                        <div class="mb-5 fv-row">
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Row--> */}
                                            <div class="row mb-2" data-kt-buttons="true">
                                                {/* <!--begin::Col--> */}
                                                <div class="col-lg-2">
                                                </div>
                                                <label class="col-lg-2 col-form-label fw-semibold fs-6">Zip
                                                    Code:</label>
                                                {/* <!--end::Col--> */}
                                                <div class="col-lg-6">
                                                    {/* <!--begin::Option--> */}
                                                    <input type="text" class="form-control form-control-solid"
                                                        placeholder="Zip Code" name="zipCode" value="" />
                                                </div>
                                                <div class="col-lg-2">
                                                </div>
                                            </div>
                                            {/* <!--end::Row--> */}
                                        </div>
                                        <div class="mt-15 fv-row">
                                            <div class="d-flex justify-content-center">
                                                {/* <!--begin::Title--> */}
                                                <a href="<?= SITE_URL ?>dashboard" class="d-flex align-items-center btn btn-light mx-3">Cancel
                                                </a>
                                                <button type="submit" data-kt-ecommerce-settings-type="submit" name="save" class="d-flex align-items-center btn btn-primary mx-3">Save &
                                                    Next
                                                </button>
                                                {/* <!--end::Title--> */}
                                            </div>
                                        </div>
                                        {/* // <!--end::Input group--> */}
                                    </div>
                                    {/* // <!--end::Wrapper--> */}
                                </div>
                                {/* // <!--end::Actions--> */}
                            </form>
                            {/* // <!--end::Form--> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="kt_modal_new_care_giver" tabindex="-1" style={{display:"none"}} aria-hidden="true">
            {/* <!--begin::Modal dialog--> */}
            <div class="modal-dialog modal-dialog-centered mw-750px">
                {/* <!--begin::Modal content--> */}
                <div class="modal-content rounded">
                    {/* <!--begin::Modal header--> */}
                    <div class="modal-header pb-0 border-0 justify-content-end">
                        {/* <!--begin::Close--> */}
                        <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                            <i class="ki-outline ki-cross fs-1"></i>
                        </div>
                        {/* <!--end::Close--> */}
                    </div>
                    {/* <!--begin::Modal header--> */}
                    {/* <!--begin::Modal body--> */}
                    <div class="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
                        {/* <!--begin:Form--> */}
                        <form class="my-auto pb-5" method="POST" enctype="multipart/form-data"
                                id="newCaregiver" onsubmit="return false">
                            {/* <!--begin::Heading--> */}
                            <div class="pb-10 pb-lg-10 mt-5 d-flex justify-content-center">
                                {/* <!--begin::Title--> */}
                                <h2 class="fw-bold d-flex align-items-center text-center text-dark">Utilities
                                </h2>
                                {/* <!--end::Title--> */}
                            </div>
                            {/* <!--end::Heading--> */}
                            {/* <!--begin::Input group--> */}
                            <div class="mb-5 fv-row">
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                <div class="row mb-2" data-kt-buttons="true">
                                    {/* <!--begin::Col--> */}
                                    <label class="col-lg-3 col-form-label fw-semibold fs-6">First Name</label>
                                    {/* <!--end::Col--> */}
                                    <div class="col-lg-9">
                                        {/* <!--begin::Option--> */}
                                        <input type="text" class="form-control form-control-solid"
                                            placeholder="First Name" name="newFirstName" value="" />
                                    </div>
                                </div>
                                {/* <!--end::Row--> */}
                            </div>
                            {/* <!--end::Input group--> */}
                            {/* <!--begin::Input group--> */}
                            <div class="mb-5 fv-row">
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                <div class="row mb-2" data-kt-buttons="true">
                                    {/* <!--begin::Col--> */}
                                    <label class="col-lg-3 col-form-label fw-semibold fs-6">Last Name</label>
                                    {/* <!--end::Col--> */}
                                    <div class="col-lg-9">
                                        {/* <!--begin::Option--> */}
                                        <input type="text" class="form-control form-control-solid"
                                            placeholder="Last Name" name="newLastName" value="" />
                                    </div>
                                </div>
                                {/* <!--end::Row--> */}
                            </div>
                            {/* <!--end::Input group--> */}
                            {/* <!--begin::Input group--> */}
                            <div class="mb-5 fv-row">
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                <div class="row mb-2" data-kt-buttons="true">
                                    {/* <!--begin::Col--> */}
                                    <label class="col-lg-3 col-form-label fw-semibold fs-6">Middle
                                        Name:(Optional)</label>
                                    {/* <!--end::Col--> */}
                                    <div class="col-lg-9">
                                        {/* <!--begin::Option--> */}
                                        <input type="text" class="form-control form-control-solid"
                                            placeholder="Middle Name" name="newMiddleName" value="" />
                                    </div>
                                </div>
                                {/* <!--end::Row--> */}
                            </div>
                            {/* <!--begin::Heading--> */}
                            <div class="pb-15 pb-lg-10 mt-5 d-flex justify-content-center">
                                {/* <!--begin::Title--> */}
                                <h2 class="fw-bold d-flex align-items-center text-center text-dark">Personal Misc
                                    Details
                                </h2>
                                {/* <!--end::Title--> */}
                            </div>
                            {/* <!--end::Heading--> */}
                            {/* <!--begin::Input group--> */}
                            <div class="mb-5 fv-row">
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                <div class="row mb-2" data-kt-buttons="true">
                                    {/* <!--begin::Col--> */}
                                    <label class="col-lg-3 col-form-label fw-semibold fs-6">Date of birth:</label>
                                    {/* <!--end::Col--> */}
                                    <div class="col-lg-9">
                                        {/* <!--begin::Option--> */}
                                        <input type="date" class="form-control form-control-solid" name="newdateofBirth"
                                            value=""  />
                                    </div>
                                </div>
                                {/* <!--end::Row--> */}
                            </div>
                            {/* <!--end::Input group--> */}
                            {/* <!--begin::Input group--> */}
                            <div class="mb-5 fv-row">
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                <div class="row mb-2" data-kt-buttons="true">
                                    {/* <!--begin::Col--> */}
                                    <label class="col-lg-3 col-form-label fw-semibold fs-6">Gender:</label>
                                    {/* <!--end::Col--> */}
                                    <div class="col-lg-9">
                                        {/* <!--begin::Option--> */}
                                        <input class="form-check-input mt-2" type="radio" name="newgender" value="Male" />
                                        <label class="m-2 mt-3">Male </label>

                                        <input class="form-check-input mt-2" type="radio" name="newgender"
                                            value="Female" /> <label class="m-2 mt-3">Female </label>
                                    </div>
                                    <span id="newgenderError"></span>
                                </div>
                                {/* <!--end::Row--> */}
                            </div>
                            {/* <!--end::Input group--> */}
                            {/* <!--begin::Input group--> */}
                            <div class="mb-5 fv-row">
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                <div class="row mb-2" data-kt-buttons="true">
                                    {/* <!--begin::Col--> */}
                                    <label class="col-lg-3 col-form-label fw-semibold fs-6">SSN:</label>
                                    {/* <!--end::Col--> */}
                                    <div class="col-lg-9">
                                        {/* <!--begin::Option--> */}
                                        <input type="text" class="form-control form-control-solid" placeholder="SSN"
                                            name="newssn" value="" />
                                    </div>
                                </div>
                                {/* <!--end::Row--> */}
                            </div>
                            <div class="mb-5 fv-row">
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                <div class="row mb-2" data-kt-buttons="true">
                                    {/* <!--begin::Col--> */}
                                    <label class="col-lg-3 col-form-label fw-semibold fs-6">Driver Lic#:</label>
                                    {/* <!--end::Col--> */}
                                    <div class="col-lg-9">
                                        {/* <!--begin::Option--> */}
                                        <input type="text" class="form-control form-control-solid" placeholder="Driver Lic"
                                            name="driverLic" value="" />
                                    </div>
                                </div>
                                {/* <!--end::Row--> */}
                            </div>
                            {/* <!-- <div class="mb-5 fv-row"> --> */}
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                {/* <!-- <div class="row mb-2" data-kt-buttons="true"> --> */}
                                    {/* <!--begin::Col--> */}
                                    {/* <!-- <label class="col-lg-3 col-form-label fw-semibold fs-6">Assigned Date:</label> --> */}
                                    {/* <!--end::Col--> */}
                                    {/* <!-- <div class="col-lg-9"> --> */}
                                        {/* <!--begin::Option--> */}
                                        <input type="date" class="form-control form-control-solid" name="assignedDate"
                                            value="" />
                                    {/* <!-- </div> --> */}
                                {/* <!-- </div> --> */}
                                {/* <!--end::Row--> */}
                            {/* <!-- </div> --> */}
                            {/* <!--begin::Heading--> */}
                            <div class="pb-15 pb-lg-10 mt-5 d-flex justify-content-center">
                                {/* <!--begin::Title--> */}
                                <h2 class="fw-bold d-flex align-items-center text-center text-dark">Personal Contact
                                    Information
                                </h2>
                                {/* <!--end::Title--> */}
                            </div>
                            {/* <!--end::Heading--> */}
                            {/* <!--begin::Input group--> */}
                            <div class="mb-5 fv-row">
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                <div class="row mb-2" data-kt-buttons="true">
                                    {/* <!--begin::Col--> */}
                                    <label class="col-lg-3 col-form-label fw-semibold fs-6">Phone No.:</label>
                                    {/* <!--end::Col--> */}
                                    <div class="col-lg-9">
                                        {/* <!--begin::Option--> */}
                                        <input type="text" placeholder="Phone No."
                                            class="form-control form-control-solid" name="newPhoneNo" value="" />
                                    </div>
                                </div>
                                {/* <!--end::Row--> */}
                            </div>
                            {/* <!--end::Input group--> */}
                            {/* <!--begin::Input group--> */}
                            <div class="mb-5 fv-row">
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                <div class="row mb-2" data-kt-buttons="true">
                                    {/* <!--begin::Col--> */}
                                    <label class="col-lg-3 col-form-label fw-semibold fs-6">Fax Number:</label>
                                    {/* <!--end::Col--> */}
                                    <div class="col-lg-9">
                                        <input type="text" placeholder="Fax Number"
                                            class="form-control form-control-solid" name="newfaxNumber" value="" />
                                    </div>
                                </div>
                                {/* <!--end::Row--> */}
                            </div>
                            {/* <!--end::Input group--> */}
                            {/* <!--begin::Input group--> */}
                            <div class="mb-5 fv-row">
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                <div class="row mb-2" data-kt-buttons="true">
                                    {/* <!--begin::Col--> */}
                                    <label class="col-lg-3 col-form-label fw-semibold fs-6">Email:</label>
                                    {/* <!--end::Col--> */}
                                    <div class="col-lg-9">
                                        {/* <!--begin::Option--> */}
                                        <input type="text" class="form-control form-control-solid" placeholder="Email"
                                            name="newEmail" value="" />
                                    </div>
                                </div>
                                {/* <!--end::Row--> */}
                            </div>
                            <div class="mt-15 fv-row">
                                <div class="d-flex justify-content-center">
                                    {/* <!--begin::Title--> */}
                                    <a data-bs-dismiss="modal" class="d-flex align-items-center btn btn-light mx-3">Cancel
                                    </a>
                                    <button class="d-flex align-items-center btn btn-primary mx-3">Save & Next
                                    </button>
                                    {/* <!--end::Title--> */}
                                </div>
                            </div>
                            {/* <!--end::Input group--> */}
                        </form>
                        {/* <!--end:Form--> */}
                    </div>
                    {/* <!--end::Modal body--> */}
                </div>
                {/* <!--end::Modal content--> */}
            </div>
            {/* <!--end::Modal dialog--> */}
        </div>
        <div class="modal fade" id="kt_modal_new_case_worker" tabindex="-1" style={{display:"none"}} aria-hidden="true">
            {/* <!--begin::Modal dialog--> */}
            <div class="modal-dialog modal-dialog-centered mw-750px">
                {/* <!--begin::Modal content--> */}
                <div class="modal-content rounded">
                    {/* <!--begin::Modal header--> */}
                    <div class="modal-header pb-0 border-0 justify-content-end">
                        {/* <!--begin::Close--> */}
                        <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                            <i class="ki-outline ki-cross fs-1"></i>
                        </div>
                        {/* <!--end::Close--> */}
                    </div>
                    {/* <!--begin::Modal header--> */}
                    {/* <!--begin::Modal body--> */}
                    <div class="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
                        {/* <!--begin:Form--> */}
                        <form class="my-auto pb-5" method="POST" enctype="multipart/form-data"
                                id="newCaseworker" onsubmit="return false">
                            {/* <!--begin::Heading--> */}
                            <div class="pb-10 pb-lg-10 mt-5 d-flex justify-content-center">
                                {/* <!--begin::Title--> */}
                                <h2 class="fw-bold d-flex align-items-center text-center text-dark">Utilities
                                </h2>
                                {/* <!--end::Title--> */}
                            </div>
                            {/* <!--end::Heading--> */}
                            {/* <!--begin::Input group--> */}
                            <div class="mb-5 fv-row">
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                <div class="row mb-2" data-kt-buttons="true">
                                    {/* <!--begin::Col--> */}
                                    <label class="col-lg-3 col-form-label fw-semibold fs-6">First Name</label>
                                    {/* <!--end::Col--> */}
                                    <div class="col-lg-9">
                                        {/* <!--begin::Option--> */}
                                        <input type="text" class="form-control form-control-solid"
                                            placeholder="First Name" name="caseworkerFirstName" value="" />
                                    </div>
                                </div>
                                {/* <!--end::Row--> */}
                            </div>
                            {/* <!--end::Input group--> */}
                            {/* <!--begin::Input group--> */}
                            <div class="mb-5 fv-row">
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                <div class="row mb-2" data-kt-buttons="true">
                                    {/* <!--begin::Col--> */}
                                    <label class="col-lg-3 col-form-label fw-semibold fs-6">Last Name</label>
                                    {/* <!--end::Col--> */}
                                    <div class="col-lg-9">
                                        {/* <!--begin::Option--> */}
                                        <input type="text" class="form-control form-control-solid"
                                            placeholder="Last Name" name="caseworkerLastName" value="" />
                                    </div>
                                </div>
                                {/* <!--end::Row--> */}
                            </div>
                            {/* <!--end::Input group--> */}
                            {/* <!--begin::Input group--> */}
                            <div class="mb-5 fv-row">
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                <div class="row mb-2" data-kt-buttons="true">
                                    {/* <!--begin::Col--> */}
                                    <label class="col-lg-3 col-form-label fw-semibold fs-6">Middle
                                        Name:(Optional)</label>
                                    {/* <!--end::Col--> */}
                                    <div class="col-lg-9">
                                        {/* <!--begin::Option--> */}
                                        <input type="text" class="form-control form-control-solid"
                                            placeholder="Middle Name" name="caseworkerMiddleName" value="" />
                                    </div>
                                </div>
                                {/* <!--end::Row--> */}
                            </div>
                            {/* <!--begin::Heading--> */}
                            <div class="pb-15 pb-lg-10 mt-5 d-flex justify-content-center">
                                {/* <!--begin::Title--> */}
                                <h2 class="fw-bold d-flex align-items-center text-center text-dark">Personal Misc
                                    Details
                                </h2>
                                {/* <!--end::Title--> */}
                            </div>
                            {/* <!--end::Heading--> */}
                            {/* <!--begin::Input group--> */}
                            <div class="mb-5 fv-row">
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                <div class="row mb-2" data-kt-buttons="true">
                                    {/* <!--begin::Col--> */}
                                    <label class="col-lg-3 col-form-label fw-semibold fs-6">Date of birth:</label>
                                    {/* <!--end::Col--> */}
                                    <div class="col-lg-9">
                                        {/* <!--begin::Option--> */}
                                        <input type="date" class="form-control form-control-solid" name="caseworkerdateofBirth"
                                            value="" />
                                    </div>
                                </div>
                                {/* <!--end::Row--> */}
                            </div>
                            {/* <!--end::Input group--> */}
                            {/* <!--begin::Input group--> */}
                            <div class="mb-5 fv-row">
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                <div class="row mb-2" data-kt-buttons="true">
                                    {/* <!--begin::Col--> */}
                                    <label class="col-lg-3 col-form-label fw-semibold fs-6">Gender:</label>
                                    {/* <!--end::Col--> */}
                                    <div class="col-lg-9">
                                        {/* <!--begin::Option--> */}
                                        <input class="form-check-input mt-2" type="radio" name="caseworkergender" value="Male" />
                                        <label class="m-2 mt-3">Male </label>

                                        <input class="form-check-input mt-2" type="radio" name="caseworkergender"
                                            value="Female" /> <label class="m-2 mt-3">Female </label>
                                            <span id="workergenderError"></span>
                                    </div>
                                </div>
                                {/* <!--end::Row--> */}
                            </div>
                            {/* <!--end::Input group--> */}
                            {/* <!--begin::Input group--> */}
                            <div class="mb-5 fv-row">
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                <div class="row mb-2" data-kt-buttons="true">
                                    {/* <!--begin::Col--> */}
                                    <label class="col-lg-3 col-form-label fw-semibold fs-6">SSN:</label>
                                    {/* <!--end::Col--> */}
                                    <div class="col-lg-9">
                                        {/* <!--begin::Option--> */}
                                        <input type="text" class="form-control form-control-solid" placeholder="SSN"
                                            name="caseworkerssn" value="" />
                                    </div>
                                </div>
                                {/* <!--end::Row--> */}
                            </div>
                            <div class="mb-5 fv-row">
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                <div class="row mb-2" data-kt-buttons="true">
                                    {/* <!--begin::Col--> */}
                                    <label class="col-lg-3 col-form-label fw-semibold fs-6">Driver Lic#:</label>
                                    {/* <!--end::Col--> */}
                                    <div class="col-lg-9">
                                        {/* <!--begin::Option--> */}
                                        <input type="text" class="form-control form-control-solid" placeholder="Driver Lic"
                                            name="caseworkerdriverLic" value="" />
                                    </div>
                                </div>
                                {/* <!--end::Row--> */}
                            </div>
                            {/* <!-- <div class="mb-5 fv-row"> --> */}
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                {/* <!-- <div class="row mb-2" data-kt-buttons="true"> --> */}
                                    {/* <!--begin::Col--> */}
                                    {/* <!-- <label class="col-lg-3 col-form-label fw-semibold fs-6">Assigned Date:</label> --> */}
                                    {/* <!--end::Col--> */}
                                    {/* <!-- <div class="col-lg-9"> --> */}
                                        {/* <!--begin::Option--> */}
                                        <input type="date" class="form-control form-control-solid" name="assignedDate"
                                            value="" />
                                    {/* <!-- </div> --> */}
                                {/* <!-- </div> --> */}
                                {/* <!--end::Row--> */}
                            {/* <!-- </div> --> */}
                            {/* <!--begin::Heading--> */}
                            <div class="pb-15 pb-lg-10 mt-5 d-flex justify-content-center">
                                {/* <!--begin::Title--> */}
                                <h2 class="fw-bold d-flex align-items-center text-center text-dark">Personal Contact
                                    Information
                                </h2>
                                {/* <!--end::Title--> */}
                            </div>
                            {/* <!--end::Heading--> */}
                            {/* <!--begin::Input group--> */}
                            <div class="mb-5 fv-row">
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                <div class="row mb-2" data-kt-buttons="true">
                                    {/* <!--begin::Col--> */}
                                    <label class="col-lg-3 col-form-label fw-semibold fs-6">Phone No.:</label>
                                    {/* <!--end::Col--> */}
                                    <div class="col-lg-9">
                                        {/* <!--begin::Option--> */}
                                        <input type="text" placeholder="Phone No."
                                            class="form-control form-control-solid" name="caseworkerPhoneNo" value="" />
                                    </div>
                                </div>
                                {/* <!--end::Row--> */}
                            </div>
                            {/* <!--end::Input group--> */}
                            {/* <!--begin::Input group--> */}
                            <div class="mb-5 fv-row">
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                <div class="row mb-2" data-kt-buttons="true">
                                    {/* <!--begin::Col--> */}
                                    <label class="col-lg-3 col-form-label fw-semibold fs-6">Fax Number:</label>
                                    {/* <!--end::Col--> */}
                                    <div class="col-lg-9">
                                        <input type="text" placeholder="Fax Number"
                                            class="form-control form-control-solid" name="caseworkerfaxNumber" value="" />
                                    </div>
                                </div>
                                {/* <!--end::Row--> */}
                            </div>
                            {/* <!--end::Input group--> */}
                            {/* <!--begin::Input group--> */}
                            <div class="mb-5 fv-row">
                                {/* <!--end::Label--> */}
                                {/* <!--begin::Row--> */}
                                <div class="row mb-2" data-kt-buttons="true">
                                    {/* <!--begin::Col--> */}
                                    <label class="col-lg-3 col-form-label fw-semibold fs-6">Email:</label>
                                    {/* <!--end::Col--> */}
                                    <div class="col-lg-9">
                                        {/* <!--begin::Option--> */}
                                        <input type="text" class="form-control form-control-solid" placeholder="Email"
                                            name="caseworkerEmail" value="" />
                                    </div>
                                </div>
                                {/* <!--end::Row--> */}
                            </div>
                            <div class="mt-15 fv-row">
                                <div class="d-flex justify-content-center">
                                    {/* <!--begin::Title--> */}
                                    <a data-bs-dismiss="modal" class="d-flex align-items-center btn btn-light mx-3">Cancel
                                    </a>
                                    <button class="d-flex align-items-center btn btn-primary mx-3">Save & Next
                                    </button>
                                    {/* <!--end::Title--> */}
                                </div>
                            </div>
                            {/* <!--end::Input group--> */}
                        </form>
                        {/* <!--end:Form--> */}
                    </div>
                    {/* <!--end::Modal body--> */}
                </div>
                {/* <!--end::Modal content--> */}
            </div>
            {/* <!--end::Modal dialog--> */}
        </div>
        </div>
        </div>
        </>
    )
}
function Specificationdetail() {
    return <Layout data={<SpecificationData />} />
}
export default Specificationdetail;