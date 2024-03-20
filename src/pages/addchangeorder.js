import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Layout from './layout';

import bLogo from "../assets/images/b-logo.jpg"
import homeIMG2 from "../assets/images/h2.jpg"
import vimeo from "../assets/images/vimeo.svg"

function AddchangeordersData() {

    document.title = 'Buildify AI | Business Finances'

    const navigate = useNavigate();
    // const [isAgree,setIsAgree] = useState(false)
    function saveDate() {
        // setIsAgree(true);
        localStorage.setItem("activeTab","Project Managment")
        localStorage.setItem("activeTabSub","Change Orders")
    }

    useEffect(() =>{
        const userId = window.localStorage.getItem("buildifyUserId");
        if (userId !== "" && userId !== null && userId !== undefined) {
            
        }else{
        navigate("/");
        }
   },[navigate]);
   function datepickerFunc() {
    let element = document.getElementsByClassName('scheduleDateClass')[0];
    element.click();
   }

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
                                                <span className="fs-2x fw-bold text-gray-800">Add Change Order</span>
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
                                            <div className="row col-lg-12 gx-10 mb-5">
                                                {/* <!--begin::Col--> */}
                                                <div className="col-lg-6">
                                                <label className="form-label fs-6 fw-bold text-gray-700 mb-3">Owner/Builder</label>
                                                    {/* <!--begin::Input group--> */}
                                                    <div class="position-relative text-end d-flex align-items-center">
                                            
                                                        {/*begin::Datepicker*/}
                                                        <input class="form-control form-control-solid ps-12 scheduleDateClass"
                                                            placeholder="Please Enter" type="text"/>
                                                    </div>   
                                                </div>
                                                <div className="col-lg-6">
                                                <label className="form-label fs-6 fw-bold text-gray-700 mb-3 col-6">Sub Contractor</label>
                                                    {/* <!--begin::Input group--> */}
                                                    <div class="position-relative text-end d-flex align-items-center">
                                            
                                                        {/*begin::Datepicker*/}
                                                        <input class="form-control form-control-solid ps-12 scheduleDateClass"
                                                            placeholder="Please Enter" type="text"/>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end::Wrapper--> */}
                                        <div className="row gx-10 my-5">
                                            {/* <div className="col-lg"></div>
                                            <div className="col-lg"></div> */}
                                            <div className="d-flex justify-content-center">
                                                {/* <Link class="btn btnButton mx-2" onClick={()=>setIsAgree(true)}>Save</Link> */}
                                                <Link class="btn btnButton mx-2">Save</Link>
                                            </div>
                                        </div>
                                    {/* {isAgree  && ( */}
                                        <>
                                         <div className="row col-lg-12 gx-10 mb-5">
                                         {/* <!--begin::Col--> */}
                                         <div className="col-lg-6">
                                         <label className="form-label fs-6 fw-bold text-gray-700 mb-3">Schedule/Completion Date</label>
                                                    {/* <!--begin::Input group--> */}
                                                    <div class="position-relative text-end d-flex align-items-center">
                                            
                                                        {/*begin::Datepicker*/}
                                                        <input class="form-control form-control-solid ps-12 scheduleDateClass"
                                                            placeholder="Select a date" name="due_date" type="date" id='scheduleDate'/>
                                                            <i class="ki-outline ki-calendar-8 fs-2 position-absolute mx-4 cursor-pointer" onClick={()=>datepickerFunc()} style={{right:"0"}}></i>
                                                        {/*end::Datepicker*/}
                                                    </div>     
                                         </div>
                                         <div className="col-lg-6">
                                         <label className="form-label fs-6 fw-bold text-gray-700 mb-3 col-6">How will the change order be paid?</label>
                                             {/* <!--begin::Input group--> */}
                                             <div class="position-relative text-end d-flex align-items-center">
                                     
                                                 {/*begin::Datepicker*/}
                                                 <input class="form-control form-control-solid ps-12 scheduleDateClass"
                                                     placeholder="Please Enter" type="text"/>
                                             </div> 
                                         </div>
                                        <div className="col-lg-6 mt-5">
                                         <label className="form-check-label fs-6 fw-bold text-gray-700 mb-3 col-6">These Changes Will:</label>
                                             {/* <!--begin::Input group--> */}
                                             <div class="position-relative text-end d-flex align-items-center">
                                                <label className="form-check-label">Increase:</label>
                                     
                                                 <input class="form-check-input" type="checkbox"/>
                                                <label className="form-check-label mt-0 mb-0 m-3">Decrease:</label>

                                                 <input class="form-check-input" type="checkbox"/>
                                             </div> 
                                         </div>
                                        <div className="col-lg-6 mt-5">
                                         <label className="form-check-label fs-6 fw-bold text-gray-700 mb-3 col-6">Ther Original Bid By:</label>
                                             {/* <!--begin::Input group--> */}
                                             <div class="position-relative text-end d-flex align-items-center">
                                                 <input class="form-control form-control-solid ps-12" placeholder='Please Enter' type="text"/>
                                             </div> 
                                         </div>
                                        <div className="col-lg-6">
                                         <label className="form-check-label fs-6 fw-bold text-gray-700 mb-3 col-6">Cost Code</label>
                                             {/* <!--begin::Input group--> */}
                                             <div class="position-relative text-end d-flex align-items-center">
                                                 <select class="form-control form-control-solid ps-12" placeholder='Please Enter' type="text">
                                                    <option value="">Please Select</option>
                                                    <option value="123456">123456</option>
                                                    <option value="654321">654321</option>
                                                    <option value="741258">741258</option>
                                                    <option value="852147">852147</option>
                                                    <option value="963258">963258</option>
                                                    <option value="897456">897456</option>
                                                 </select>
                                             </div> 
                                         </div>
                                     </div>
                                     <div className="row col-lg-12">
                                        <div className="col-lg-6">
                                         <label className="form-check-label fs-6 fw-bold text-gray-700 mb-3 col-6">Owner/Builder Sign:</label>
                                             {/* <!--begin::Input group--> */}
                                             <div class="position-relative text-end d-flex align-items-center">
                                                
                                            </div> 
                                         </div>
                                        <div className="col-lg-6">
                                         <label className="form-check-label fs-6 fw-bold text-gray-700 mb-3 col-6">Sub Contractor Sign:</label>
                                             {/* <!--begin::Input group--> */}
                                             <div class="position-relative text-end d-flex align-items-center">
                                                
                                            </div> 
                                         </div>
                                         </div>
                                    <div className="row gx-10 my-5">
                                            {/* <div className="col-lg"></div>
                                            <div className="col-lg"></div> */}
                                            <div className="d-flex justify-content-center">
                                                <Link to="/builderprojectdetails/" class="btn btnButton mx-2" onClick={()=>saveDate}>Save</Link>
                                            </div>
                                        </div>
                                         </>
                                    {/* )} */}
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
        </>
    )
}
function Addchangeorders() {
    return <Layout data={<AddchangeordersData />} />
}
export default Addchangeorders;