import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Layout from './layout';

import bLogo from "../assets/images/b-logo.jpg"
import homeIMG2 from "../assets/images/h2.jpg"
import vimeo from "../assets/images/vimeo.svg"
import  Select  from 'react-select';

function AddteammemberData() {

    document.title = 'Buildify AI | Business Finances'

    const navigate = useNavigate();

    useEffect(() =>{
        const userId = window.localStorage.getItem("buildifyUserId");
        if (userId !== "" && userId !== null && userId !== undefined) {
            
        }else{
        navigate("/");
        }
   },[navigate]);
   var roleOptions = [
    { value: "Manager", label: "Manager" },
    { value: "Employee", label: "Employee" }
  ];

    return (
        <>
            <div className="d-flex flex-column flex-column-fluid" >
                {/*  <!--begin::Content-->  */}
                <div id="kt_app_content" className="app-content flex-column-fluid">
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
                                                <span className="fs-2x fw-bold text-gray-800">Add Team Member</span>
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
                                                    <label className="form-label fs-6 fw-bold text-gray-700 mb-3">First name</label>
                                                    {/* <!--begin::Input group--> */}
                                                    <div className="mb-5">
                                                        <input type="text" className="form-control form-control-solid" placeholder="Enter First Name" />
                                                    </div>
                                                    {/* <!--end::Input group--> */}
                                                    <label className="form-label fs-6 fw-bold text-gray-700 mb-3">Email</label>
                                                    {/* <!--begin::Input group--> */}
                                                    <div className="mb-5">
                                                        <input type="text" placeholder='Enter Email' className="form-control form-control-solid"/>
                                                    </div>
                                                    {/* <!--end::Input group--> */}
                                                </div>
                                                {/* <!--end::Col--> */}
                                                {/* <!--begin::Col--> */}
                                                <div className="col-lg-6">
                                                    <label className="form-label fs-6 fw-bold text-gray-700 mb-3">Last Name</label>
                                                    {/* <!--begin::Input group--> */}
                                                    <div className="mb-5">
                                                        <input type="text" className="form-control form-control-solid" placeholder="Enter Last Name" />
                                                    </div>
                                                    {/* <!--end::Input group--> */}
                                                    <label className="form-label fs-6 fw-bold text-gray-700 mb-3">Contact Number</label>
                                                    {/* <!--begin::Input group--> */}
                                                    <div className="mb-5">
                                                        <input type="text" placeholder='Enter Contact Number' className="form-control form-control-solid"/>
                                                    </div>
                                                    {/* <!--end::Input group--> */}
                                                    
                                                </div>
                                                <div className="col-lg-6">
    <label className="form-label fs-6 fw-bold text-gray-700 mb-3">Contact Number 2</label>
    {/* <!--begin::Input group--> */}
    <div className="mb-5">
        <div className="input-group">
            {/* Country Code Dropdown */}
            <select className="form-control form-control-solid" style={{maxWidth:"92px"}}>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option> 
            </select>
            
            {/* Contact Number Input */}
            <input type="text" className="form-control form-control-solid" placeholder="Contact Number 2"/>
            <button type="text" className="btn btnButton mx-2" placeholder="Contact Number 2">Verify Number</button>
        </div>
    </div>
</div>

                                                <div className="col-lg-6">
                                                    <label className="form-label fs-6 fw-bold text-gray-700 mb-3">Address</label>
                                                    {/* <!--begin::Input group--> */}
                                                    <div className="mb-5">
                                                        <input type="text" className="form-control form-control-solid" placeholder="Enter Address" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 row">
                                                    <label className="form-label fs-6 fw-bold text-gray-700 mb-3">Role</label>
                                                    {/* <!--begin::Input group--> */}
                                                    <div className="mb-5 col-9">
                                                        <Select options={roleOptions} type="text" className="form-control-solid" placeholder="Enter Address" />
                                                    </div>
                                                    <div className="mt-2 col-3">
                                                        <Link className='col-1'>Manage Role</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end::Wrapper--> */}
                                        <div className="row gx-10 my-5">
                                            <div className="col-lg"></div>
                                            <div className="col-lg"></div>
                                            <div className="col d-flex justify-content-end">
                                                <Link to="/manageteam" class="btn btnButton mx-2">Save</Link>
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
                    </div>
                    {/* <!--end::Layout--> */}
                </div>
                {/* <!--end::Content--> */}
            </div>
            {/* <!--end::Content wrapper--> */}
        </>
    )
}
function Addteammember() {
    return <Layout data={<AddteammemberData />} />
}
export default Addteammember;