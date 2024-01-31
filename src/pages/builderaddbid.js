import React from 'react'
import Layout from '../pages/layout';
import blogo from '../assets/images/b-logo.jpg'
import { Link } from 'react-router-dom';


function AddbidData() {
    document.title = 'Buildify AI | Add Bid';
    return (
        <>
            {/* begin::Content wrapper*/}
            <div className="d-flex flex-column flex-column-fluid">
                {/*begin::Content*/}
                <div id="kt_app_content" className="app-content flex-column-fluid">
                    {/*begin::Navbar*/}
                    <div className="card mb-6 mb-xl-9">
                        <div className="card-body pt-9 pb-0">
                            {/*begin::Details*/}
                            <div className="d-flex flex-wrap flex-sm-nowrap mb-6">
                                {/*begin::Image*/}
                                <div className="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
                                    <img className="mw-50px mw-lg-75px" src={blogo} alt="blogo" />
                                </div>
                                {/*end::Image*/}
                                {/*begin::Wrapper*/}
                                <div className="flex-grow-1">
                                    {/*begin::Head*/}
                                    <div className="d-flex justify-content-between align-items-start flex-wrap">
                                        {/*begin::Details*/}
                                        <div className="d-flex flex-column">
                                            {/*begin::Status*/}
                                            <div className="d-flex align-items-center mb-1">
                                                <Link to="#" className="text-gray-800 text-hover-primary fs-2 fw-bold me-3">Home Renovation</Link>
                                            </div>
                                            {/*end::Status*/}
                                        </div>
                                        {/*end::Details*/}
                                    </div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                    {/*end::Head*/}
                                    {/*begin::Info*/}
                                    <div className="d-flex flex-wrap justify-content-start mt-3">
                                        {/*begin::Stats*/}
                                        <div className="d-flex flex-wrap">
                                            {/*begin::Stat*/}
                                            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                {/*begin::Number*/}
                                                <div className="d-flex align-items-center">
                                                    <div className="fs-4 fw-bold">29 Jan, 2023</div>
                                                </div>
                                                {/*end::Number*/}
                                                {/*begin::Label*/}
                                                <div className="fw-semibold fs-6 text-muted">Due Date</div>
                                                {/*end::Label*/}
                                            </div>
                                            {/*end::Stat*/}
                                            {/*begin::Stat*/}
                                            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                {/*begin::Number*/}
                                                <div className="d-flex align-items-center">
                                                    <div className="fs-4 fw-bold" data-kt-countup="true" data-kt-countup-value="75">75</div>
                                                </div>
                                                {/*end::Number*/}
                                                {/*begin::Label*/}
                                                <div className="fw-semibold fs-6 text-muted">Open Tasks</div>
                                                {/*end::Label*/}
                                            </div>
                                            {/*end::Stat*/}
                                            {/*begin::Stat*/}
                                            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                {/*begin::Number*/}
                                                <div className="d-flex align-items-center">
                                                    <div className="fs-4 fw-bold" data-kt-countup="true" data-kt-countup-value="15000" data-kt-countup-prefix="$">$15000</div>
                                                </div>
                                                {/*end::Number*/}
                                                {/*begin::Label*/}
                                                <div className="fw-semibold fs-6 text-muted">Budget</div>
                                                {/*end::Label*/}
                                            </div>
                                            {/*end::Stat*/}
                                        </div>
                                        {/*end::Stats*/}
                                        {/*begin::Users*/}
                                        {/* <div className="symbol-group symbol-hover mb-3"> */}
                                        {/*begin::User*/}
                                        {/* <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                                                <span className="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
                                            </div> */}
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        {/* <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michael Eberon">
                                                <img alt="Pic" src="../assets/media/avatars/300-11.jpg" />
                                            </div> */}
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        {/* <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michelle Swanston">
                                                <img alt="Pic" src="../assets/media/avatars/300-7.jpg" />
                                            </div> */}
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        {/* <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Francis Mitcham">
                                                <img alt="Pic" src="../assets/media/avatars/300-20.jpg" />
                                            </div> */}
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        {/* <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                                                <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                                            </div> */}
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        {/* <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                                                <img alt="Pic" src="../assets/media/avatars/300-2.jpg" />
                                            </div> */}
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        {/* <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Perry Matthew">
                                                <span className="symbol-label bg-info text-inverse-info fw-bold">P</span>
                                            </div> */}
                                        {/*end::User*/}
                                        {/*begin::User*/}
                                        {/* <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Barry Walter">
                                                <img alt="Pic" src="../assets/media/avatars/300-12.jpg" />
                                            </div> */}
                                        {/*end::User*/}
                                        {/*begin::All users*/}
                                        {/* <Link to="#" className="symbol symbol-35px symbol-circle" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users">
                                                <span className="symbol-label bg-dark text-inverse-dark fs-8 fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more users">+42</span>
                                            </Link> */}
                                        {/*end::All users*/}
                                        {/* </div> */}
                                        {/*end::Users*/}
                                    </div>
                                    {/*end::Info*/}
                                </div>
                                {/*end::Wrapper*/}
                                <div className="d-flex justify-content-end"><Link to="#" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Contract Sign" className="btn btnButton h-45px fs-5 fw-bold mb-1"><i className="fa-solid p-0 fa-file-signature"></i></Link></div>
                            </div>
                        </div>
                    </div>
                    {/*end::Navbar*/}
                    {/*begin::Row*/}
                    {/*begin::Card*/}
                    <div className="card card-md-stretch me-xl-3 mb-md-0 mb-6">
                        {/*begin::Body*/}
                        <div className="card-body p-10 p-lg-15">
                            {/*begin::Header*/}
                            <div className="flex-stack mb-7">
                                <div>
                                    <select name="status" data-control="select2" data-hide-search="true" className="form-select form-select-solid fw-bold w-250px">
									    <option value="1" selected="selected">Select Template</option>
									    <option value="2">Slab Home</option>
									    <option value="3">Crawlspace Home</option>
									</select>
                                </div>
                            </div>
                            <div className="text-center flex-stack mb-7">
                                {/*begin::Title*/}
                                <h1 className="fw-bold text-dark">Write Your Bid</h1>
                                {/*end::Title*/}
                            </div>
                            {/*end::Header*/}
                            {/*begin::Accordion*/}
                            {/*begin::Input group*/}
                            <div className="d-flex flex-column mt-5 mb-8">
                                <label className="fs-4 fw-semibold mb-2">In Scope</label>
                                <div id="kt_ecommerce_add_product_description" name="kt_ecommerce_add_product_description" className="h-100px">
                                    <textarea placeholder="Description" className="form-control mb-2"> </textarea>
                                </div>
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="d-flex flex-column mt-5 mb-8">
                                <label className="fs-4 fw-semibold mb-2">Not In Scope</label>
                                <div id="kt_ecommerce_add_product_description1" name="" className="h-100px">
                                    <textarea placeholder="Description" className="form-control mb-2"> </textarea>
                                </div>
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="d-flex flex-column mt-5 mb-8">
                                <label className="fs-4 fw-semibold mb-2">Payment Terms</label>
                                <div id="kt_ecommerce_add_product_description2" name="kt_ecommerce_add_product_description" className="h-100px">
                                    <textarea placeholder="Description" className="form-control mb-2"> </textarea>
                                </div>
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Card header*/}
                            <div className="card-header mb-0 p-0">
                                <div className="card-title mb-0">
                                    <label className="fs-4 fw-semibold">Upload File</label>
                                </div>
                            </div>
                            {/*end::Card header*/}
                            {/*begin::Card body*/}
                            <div className="card-body mt-0 p-0">
                                {/*begin::Input group*/}
                                <div className="fv-row mb-2">
                                    {/*begin::Dropzone*/}
                                    <div className="dropzone" id="kt_ecommerce_add_product_media">
                                        {/*begin::Message*/}
                                        <div className="dz-message needsclick">
                                            {/*begin::Icon*/}
                                            <i className="ki-outline ki-file-up text-primary fs-3x"></i>
                                            {/*end::Icon*/}
                                            {/*begin::Info*/}
                                            <div className="ms-4">
                                                <h3 className="fs-5 fw-bold text-gray-900 mb-1">Drop files here or click to upload.</h3>
                                                <span className="fs-7 fw-semibold text-gray-400">Upload up to 10 files</span>
                                            </div>
                                            {/*end::Info*/}
                                        </div>
                                    </div>
                                    {/*end::Dropzone*/}
                                </div>
                                {/*end::Input group*/}
                            </div>
                            {/*begin::Actions*/}
                            <div className="text-center mt-5">
                                <Link to="../builderdashboard/"><button className="btn btnButtonCancel me-3">Cancel</button></Link>
                                <Link to="../builderoverviewbid/"><button type="submit" className="btn btnButton">
                                    <span className="indicator-label">Submit</span>
                                    <span className="indicator-progress">Please wait...
                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                </button></Link>
                            </div>
                            {/*end::Actions*/}
                            {/*end::Accordion*/}
                        </div>
                        {/*end::Body*/}
                    </div>
                    {/*end::Card*/}
                    {/*end::Row*/}
                </div>
                {/*end::Content*/}
            </div>
            {/*end::Content wrapper*/}

        </>
    )
}
function BuilderAddbid() {
    return <Layout data={<AddbidData />} />
}
export default BuilderAddbid;
