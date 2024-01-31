import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../pages/layout';

import a300_9 from '../assets/images/Avatar/300-9.jpg'
import pdf_svg from "../assets/images/files/pdf.svg"
import doc_svg from "../assets/images/files/doc.svg"
import css_svg from "../assets/images/files/css.svg"

function ViewbidData() {

    document.title = 'Buildify AI | View Bid'

    const navigate = useNavigate();

    useEffect(() => {
        const userId = window.localStorage.getItem("buildifyUserId");
        if (userId !== "" && userId !== null && userId !== undefined) {

        } else {
            navigate("/");
        }
    }, [navigate]);

    return (
        <>
            {/* begin::Content wrapper */}
            <div className="d-flex flex-column flex-column-fluid">
                {/* begin::Content */}
                <div id="kt_app_content" className="app-content flex-column-fluid">
                    {/* begin::Contacts App- View Contact */}
                    <div className="row g-7">
                        {/* begin::Content */}
                        <div className="col-xl-12">
                            {/* begin::Contacts */}
                            <div className="card card-flush pl-5 h-lg-100" id="kt_contacts_main">
                                {/* begin::Card header */}
                                <div className="card-header pt-7" id="kt_chat_contacts_header">
                                    {/* begin::Card title */}
                                    <div className="card-title">
                                        <i className="ki-outline ki-badge fs-1 me-2"></i>
                                        <h2>Bid details</h2>
                                    </div>
                                    {/* end::Card title */}
                                    {/* begin::Card toolbar */}
                                    <div className="card-toolbar gap-3">
                                        {/* begin::Chat */}
                                        <button className="btn btn-sm btn-light btn-active-light-primary" data-kt-drawer-show="true" data-kt-drawer-target="#kt_drawer_chat">
                                            <i className="ki-outline ki-message-text-2 fs-2"></i>Chat</button>
                                        {/* end::Chat */}
                                        {/* begin::Chat */}
                                        <Link to="#" className="btn btn-sm btn-light btn-active-light-primary">
                                            <i className="ki-outline ki-messages fs-2"></i>Message</Link>
                                        {/* end::Chat */}
                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                                            {/* begin::Menu item */}
                                            <div className="menu-item px-3">
                                                <Link to="#" className="menu-link px-3">Edit</Link>
                                            </div>
                                            {/* end::Menu item */}
                                            {/* begin::Menu item */}
                                            <div className="menu-item px-3">
                                                <Link to="#" className="menu-link px-3" id="kt_contact_delete" data-kt-redirect="../../demo34/dist/apps/contacts/getting-started.html">Delete</Link>
                                            </div>
                                            {/* end::Menu item */}
                                        </div>
                                        {/* end::Menu */}
                                        {/* end::Action menu */}
                                    </div>
                                    {/* end::Card toolbar */}
                                </div>
                                {/* end::Card header */}
                                {/* begin::Card body */}
                                <div className="card-body pt-5">
                                    {/* begin::Profile */}
                                    <div className="d-flex gap-7 align-items-center">
                                        {/* begin::Avatar */}
                                        <div className="symbol symbol-circle symbol-100px">
                                            <img src={a300_9} alt="a300_9" />
                                        </div>
                                        {/* end::Avatar */}
                                        {/* begin::Contact details */}
                                        <div className="d-flex flex-column gap-2">
                                            {/* begin::Name */}
                                            <h3 className="mb-0">Emma Smith</h3>
                                            {/* end::Name */}
                                            {/* begin::Email */}
                                            <div className="d-flex align-items-center gap-2">
                                                <i className="ki-outline ki-sms fs-2"></i>
                                                <Link to="#" className="text-muted text-hover-primary">smith@kpmg.com</Link>
                                            </div>
                                            {/* end::Email */}
                                            {/* begin::Phone */}
                                            <div className="d-flex align-items-center gap-2">
                                                <i className="ki-outline ki-phone fs-2"></i>
                                                <Link to="#" className="text-muted text-hover-primary">+6141 234 567</Link>
                                            </div>
                                            {/* end::Phone */}
                                        </div>
                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                            {/* begin::Number */}
                                            <div className="d-flex align-items-center">
                                                <div className="fs-4 fw-bold counted" data-kt-countup="true" data-kt-countup-value="15000" data-kt-countup-prefix="$" data-kt-initialized="1">$15,000</div>
                                            </div>
                                            {/* end::Number */}
                                            {/* begin::Label */}
                                            <div className="fw-semibold fs-6 text-muted">Propesed Amount</div>
                                            {/* end::Label */}
                                        </div>
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
                                        {/* end::Contact details */}
                                    </div>
                                    {/* end::Profile */}
                                    {/* begin:::Tabs */}
                                    <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x fs-6 fw-semibold mt-6 mb-8 gap-2">
                                        {/* begin:::Tab item */}
                                        <li className="nav-item">
                                            <Link className="nav-link text-active-primary d-flex align-items-center pb-4 active" data-bs-toggle="tab" to="#">
                                                <i className="ki-outline ki-home fs-4 me-1"></i>Details</Link>
                                        </li>
                                    </ul>
                                    {/* end:::Tabs */}
                                    {/* begin::Tab content */}
                                    <div className="tab-content" id="">
                                        {/* begin:::Tab pane */}
                                        <div className="tab-pane fade show active" id="kt_contact_view_general" role="tabpanel">
                                            {/* begin::Additional details */}
                                            <div className="d-flex flex-column gap-5 mt-7">
                                                {/* begin::Company name */}
                                                <div className="d-flex flex-column gap-1">
                                                    <div className="fw-bold fs-4 text-black">Cover letter</div>
                                                    <div className="fs-5 text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</div>
                                                </div>
                                                {/* end::Company name */}
                                                {/* begin::City */}
                                                <div className="d-flex flex-column gap-1">
                                                    <div className="fw-bold fs-4 text-black">Attachments</div>
                                                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                                                        {/* begin::Item */}
                                                        <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                            {/* begin::Icon */}
                                                            <img alt="pdf" className="w-30px me-3" src={pdf_svg} />
                                                            {/* end::Icon */}
                                                            {/* begin::Info */}
                                                            <div className="ms-1 fw-semibold">
                                                                {/* begin::Desc */}
                                                                <Link to="#" className="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</Link>
                                                                {/* end::Desc */}
                                                                {/* begin::Number */}
                                                                <div className="text-muted">1.9mb</div>
                                                                {/* end::Number */}
                                                            </div>
                                                            {/* begin::Info */}
                                                        </div>
                                                        {/* end::Item */}
                                                        {/* begin::Item */}
                                                        <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                            {/* begin::Icon */}
                                                            <img alt="doc" className="w-30px me-3" src={doc_svg} />
                                                            {/* end::Icon */}
                                                            {/* begin::Info */}
                                                            <div className="ms-1 fw-semibold">
                                                                {/* begin::Desc */}
                                                                <Link to="#" className="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</Link>
                                                                {/* end::Desc */}
                                                                {/* begin::Number */}
                                                                <div className="text-muted">18kb</div>
                                                                {/* end::Number */}
                                                            </div>
                                                            {/* end::Info */}
                                                        </div>
                                                        {/* end::Item */}
                                                        {/* begin::Item */}
                                                        <div className="d-flex flex-aligns-center">
                                                            {/* begin::Icon */}
                                                            <img alt="css" className="w-30px me-3" src={css_svg} />
                                                            {/* end::Icon */}
                                                            {/* begin::Info */}
                                                            <div className="ms-1 fw-semibold">
                                                                {/* begin::Desc */}
                                                                <Link to="#" className="fs-6 text-hover-primary fw-bold">Finance Reports</Link>
                                                                {/* end::Desc */}
                                                                {/* begin::Number */}
                                                                <div className="text-muted">20mb</div>
                                                                {/* end::Number */}
                                                            </div>
                                                            {/* end::Icon */}
                                                        </div>
                                                        {/* end::Item */}
                                                    </div>
                                                </div>
                                                {/* end::City */}
                                                {/* begin::Country */}
                                                <div className="d-flex flex-column gap-1">
                                                    <div className="fw-bold fs-6">
                                                        <input className="form-check-input" type="checkbox" /> By signing below, you agree to the Terms of service including User Agreement of BuildifyAI
                                                    </div>
                                                </div>
                                                {/* end::Country */}
                                                <div className="d-flex justify-content-end">
                                                    {/* begin::Button */}
                                                    <Link to="#" id="kt_ecommerce_add_product_cancel" className="btn btnButtonCancel me-5">Decline</Link>
                                                    {/* end::Button */}
                                                    {/* begin::Button id="kt_ecommerce_add_product_submit" */}
                                                    <Link to="#">
                                                        <button type="submit" className="btn btnButton">
                                                            <span className="indicator-label">Approve Quote</span>
                                                        </button>
                                                    </Link>
                                                    {/* end::Button */}
                                                </div>
                                            </div>
                                            {/* end::Additional details */}
                                        </div>
                                        {/* end:::Tab pane */}
                                    </div>
                                    {/* end::Tab content */}
                                </div>
                                {/* end::Card body */}
                            </div>
                            {/* end::Contacts */}
                        </div>
                        {/* end::Content */}
                    </div>
                    {/* end::Contacts App- View Contact */}
                </div>
                {/* end::Content */}
            </div>
            {/* end::Content wrapper */}
        </>
    )
}
function Viewbid() {
    return <Layout data={<ViewbidData />} />
}
export default Viewbid;