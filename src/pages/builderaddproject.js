import React, { useEffect, useState } from 'react'
import Layout from '../pages/layout';
import defaultImg from '../assets/images/files/blank-image.svg'
import { Link } from 'react-router-dom';

function AddProjectDate() {
    document.title = 'Buildify AI | Add Project';

    const [image, setImage] = useState(Array);

    const handleImageChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        const filePaths = selectedFiles.map((file) => file); // Store the selected file names as paths
        
        setImage(URL.createObjectURL(filePaths[0])); // Store the array of image paths
    };
    return (
        <>
            {/* begin::Content wrapper*/}
            <div className="d-flex flex-column flex-column-fluid">
                {/*begin::Content*/}
                <div id="kt_app_content" className="app-content flex-column-fluid">
                    {/*begin::Form*/}
                    <form className="form d-flex flex-column flex-lg-row">
                        {/*begin::Aside column*/}
                        <div className="d-flex flex-column w-100 w-lg-300px mb-7 me-lg-10">
                            {/*begin::Thumbnail settings*/}
                            {/*end::Thumbnail settings*/}
                            {/*begin::Status*/}
                            <div className="card card-flush">
                                {/*begin::Card header*/}
                                <div className="card-header">
                                    {/*begin::Card title*/}
                                    <div className="card-title">
                                        <h2>Image</h2>
                                    </div>
                                    {/*end::Card title*/}
                                </div>
                                {/*end::Card header*/}
                                {/*begin::Card body*/}
                                <div className="card-body text-center pt-0">
                                    {/*begin::Image input*/}
                                    {/*begin::Image input placeholder*/}
                                    {/* <style>.image-input-placeholder {backgroundImage: url('../assets/media/svg/files/blank-image.svg'); } [data-bs-theme="dark"] .image-input-placeholder {background - image: url('assets/media/svg/files/blank-image-dark.svg'); }</style> */}
                                    {/*end::Image input placeholder*/}
                                    <div className="image-input image-input-outline blankImg" data-kt-image-input="true">
                                        {/* <!--begin::Preview existing avatar--> */}
                                        <div className="image-input-wrapper w-125px h-125px" style={{backgroundImage:image != "" ? `url(${image})`:`url(${defaultImg})`}}></div>
                                        {/* <!--end::Preview existing avatar--> */}
                                        {/* <!--begin::Label--> */}
                                        <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body defaultImg shadow" data-kt-image-input-action="change">
                                            <i className="ki-outline ki-pencil fs-7"></i>
                                            {/* <!--begin::Inputs--> */}
                                            <input type="file" name="avatar" accept=".png, .jpg, .jpeg" onChange={handleImageChange} />
                                            <input type="hidden" name="avatar_remove" />
                                            {/*end::Inputs*/}
                                        </label>
                                        {/*end::Label*/}
                                    </div>
                                    {/*end::Image input*/}
                                    {/*begin::Description*/}
                                    <div className="text-muted fs-7">Set the project thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted</div>
                                    {/*end::Description*/}
                                </div>
                                {/*end::Card body*/}
                                {/*begin::Card header*/}
                                <div className="card-header">
                                    {/*begin::Card title*/}
                                    <div className="card-title">
                                        <h2>Status</h2>
                                    </div>
                                    {/*end::Card title*/}
                                    {/*begin::Card toolbar*/}
                                    <div className="card-toolbar">
                                        <div className="rounded-circle bg-success w-15px h-15px" id="kt_ecommerce_add_product_status"></div>
                                    </div>
                                    {/*begin::Card toolbar*/}
                                </div>
                                {/*end::Card header*/}
                                {/*begin::Card body*/}
                                <div className="card-body pt-0">
                                    {/*begin::Select2*/}
                                    <select className="form-select" data-control="select2" data-hide-search="true" data-placeholder="Select an option" id="">
                                        <option></option>
                                        <option value="published" selected="selected">Published</option>
                                        <option value="draft">Draft</option>
                                        <option value="scheduled">Scheduled</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                    {/*end::Select2*/}
                                </div>
                                {/*end::Card body*/}
                                <div className="card-header">
                                    {/*begin::Card title*/}
                                    <div className="card-title">
                                        <h2>Project Categories</h2>
                                    </div>
                                    {/*end::Card title*/}
                                </div>
                                {/*end::Card header*/}
                                {/*begin::Card body*/}
                                <div className="card-body pt-0">
                                    {/*begin::Input group*/}
                                    {/*begin::Select2*/}
                                    <select className="form-select mb-2" data-control="select2" data-placeholder="Select an option" data-allow-clear="true">
                                        <option></option>
                                        <option value="Computers">Apartment</option>
                                        <option value="Watches">Commercial property</option>
                                        <option value="Headphones">Multifamily residential</option>
                                        <option value="Footwear">Single-family home</option>
                                        <option value="Cameras">Bungalow</option>
                                    </select>
                                    {/*end::Select2*/}
                                    {/*end::Input group*/}
                                    {/*begin::Button*/}
                                    <Link to="#" className="btn btn-light-primary btn-sm mb-10">
                                        <i className="ki-outline ki-plus fs-2"></i>Create new category</Link>
                                    {/*end::Button*/}
                                    {/*begin::Input group*/}
                                    {/*begin::Label*/}
                                    <div className="card-header">
                                        {/*begin::Card title*/}
                                        <div className="card-title">
                                            <h2>Tags</h2>
                                        </div>
                                        {/*end::Card title*/}
                                    </div>
                                    {/*end::Label*/}
                                    {/*begin::Input*/}
                                    <input id="kt_ecommerce_add_product_tags" name="" className="form-control mb-2" />
                                    {/*end::Input*/}
                                    {/*end::Input group*/}
                                </div>
                                {/*end::Card body*/}
                                {/*begin::Card header*/}
                                <div className="card-header">
                                    {/*begin::Card title*/}
                                    <div className="card-title">
                                        <h2>Require any assistance?</h2>
                                    </div>
                                    {/*end::Card title*/}
                                </div>
                                {/*end::Card header*/}
                                {/*begin::Card body*/}
                                <div className="card-body pt-0">
                                    <span className="text-muted" style={{ fontWeight: '500', fontSize: '12px' }}>Make sure you tell as much information about your project as you are comfortable disclosing - this will increase the quality of bids you receive and shorten the selection process.<br /> <br />
                                        For a realistic estimate, upload as much relevant information as possible (pictures, documents, specifications, links, etc)</span>
                                </div>
                                {/*end::Card body*/}
                            </div>
                            {/*end::Weekly sales*/}
                        </div>
                        {/*end::Aside column*/}
                        {/*begin::Main column*/}
                        <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
                            {/*begin::Tab content*/}
                            <div className="tab-content">
                                {/*begin::Tab pane*/}
                                <div className="tab-pane fade show active" id="kt_ecommerce_add_product_general">
                                    <div className="d-flex flex-column">
                                        {/*begin::General options*/}
                                        <div className="card card-flush py-4">
                                            {/*begin::Card header*/}
                                            <div className="card-header">
                                                <div className="card-title">
                                                    <h2>Project Details</h2>
                                                </div>
                                            </div>
                                            {/*end::Card header*/}
                                            {/*begin::Card body*/}
                                            <div className="card-body pt-0">
                                                {/*begin::Input group*/}
                                                <div className="mb-10 fv-row">
                                                    {/*begin::Label*/}
                                                    <label className="required fs-4 form-label">Project Name</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input type="text" name="" className="form-control mb-2" placeholder="Project Name" />
                                                    {/*end::Input*/}
                                                </div>
                                                {/*end::Input group*/}
                                            </div>
                                            {/*begin::Card body*/}
                                            <div className="card-body pt-0">
                                                {/*begin::Input group*/}
                                                <div className="mb-10 fv-row">
                                                    {/*begin::Label*/}
                                                    <label className="required fs-4 form-label">Short Description</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input type="text" name="" className="form-control mb-2" placeholder="Short Description" />
                                                    {/*end::Input*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div>
                                                    {/*begin::Label*/}
                                                    <label className="form-label fs-4">Scope of work </label>
                                                    {/*end::Label*/}
                                                    {/*begin::Editor*/}
                                                    <div id="kt_ecommerce_add_product_description" name="kt_ecommerce_add_product_description" className="">
                                                        <textarea rows="5" className="form-control mb-2"> </textarea>
                                                    </div>
                                                    {/*end::Editor*/}
                                                </div>
                                                {/*end::Input group*/}
                                            </div>
                                            {/*end::Card header*/}
                                            {/*begin::Card header*/}
                                            <div className="card-header">
                                                <div className="card-title">
                                                    <h2>Upload file for sample</h2>
                                                </div>
                                            </div>
                                            {/*end::Card header*/}
                                            {/*begin::Card body*/}
                                            <div className="card-body pt-0">
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
                                            {/*end::Card header*/}
                                            {/*begin::Card header*/}
                                            <div className="card-header">
                                                <div className="card-title">
                                                    <h2>Upload contract</h2>
                                                </div>
                                            </div>
                                            {/*end::Card header*/}
                                            {/*begin::Card body*/}
                                            <div className="card-body pt-0">
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
                                            {/*end::Card header*/}
                                            {/*begin::Card header*/}
                                            <div className="card-header">
                                                <div className="card-title">
                                                    <h2>Budget</h2>
                                                </div>
                                            </div>
                                            {/*end::Card header*/}
                                            {/*begin::Card body*/}
                                            <div className="card-body pt-0">
                                                {/*begin::Input group*/}
                                                <div className="mb-10 fv-row">
                                                    {/*begin::Label*/}
                                                    <label className="required form-label fs-4">Budget</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input type="text" name="" className="form-control mb-2" placeholder="Budget" />
                                                    {/*end::Input*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="mb-10 fv-row">
                                                    {/*begin::Label*/}
                                                    <label className="required form-label fs-4">Timeline</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input type="text" name="" className="form-control mb-2" placeholder="Timeline" />
                                                    {/*end::Input*/}
                                                </div>
                                                {/*end::Input group*/}
                                            </div>
                                            {/*end::Card header*/}
                                        </div>
                                        {/*end::Pricing*/}
                                    </div>
                                </div>
                                {/*end::Tab pane*/}
                            </div>
                            {/*end::Tab content*/}
                            <div className="d-flex justify-content-end">
                                {/*begin::Button*/}
                                <Link to="#" id="kt_ecommerce_add_product_cancel" className="btn btnButtonCancel me-5">Cancel</Link>
                                {/*end::Button*/}
                                {/*begin::Button id="kt_ecommerce_add_product_submit"*/}
                                <Link to="../builderpostproject/">
                                    <button type="submit" className="btn btnButton">
                                        <span className="indicator-label">Save Changes</span>
                                    </button>
                                </Link>
                                {/*end::Button*/}
                            </div>
                        </div>
                        {/*end::Main column*/}
                    </form>
                    {/*end::Form*/}
                </div>
                {/*end::Content*/}
            </div>
            {/*end::Content wrapper*/}
        </>
    )
}
function BuilderAddproject() {
    return <Layout data={<AddProjectDate />} />
}
export default BuilderAddproject;