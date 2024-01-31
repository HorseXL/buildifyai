import React from 'react'
import Layout from '../pages/layout';
import blogo from '../assets/images/b-logo.jpg'
import { Link } from 'react-router-dom';


function OverViewBiddDate() {
   document.title = 'Buildify AI | OverView Bid';
    return (
        <>
            {/*begin::Content wrapper*/}
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
                               {/* <div className="d-flex justify-content-end"><Link to="#" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Contract Download" className="btn btn-primary h-45px fs-5 fw-bold mb-1"><i className="fa-solid fa-download"></i></Link></div> */}
                            </div>
                        </div>
                    </div>
                   {/*end::Navbar*/}
                   {/*begin::Row*/}
                   {/*begin::Card*/}
                    <div className="card card-md-stretch me-xl-3 mb-md-0 mb-6">
                       {/*begin::Body*/}
                        <div className="card-body p-10 p-lg-15">
                           {/*begin::Timeline*/}
                            <div className="timeline">
                               {/*begin::Timeline item*/}
                                <div className="timeline-item">
                                   {/*begin::Timeline line*/}
                                    <div className="timeline-line w-40px"></div>
                                   {/*end::Timeline line*/}
                                   {/*begin::Timeline icon*/}
                                    <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                                        <div className="symbol-label bg-light">
                                            <i className="ki-outline ki-message-text-2 fs-2 text-muted"></i>
                                        </div>
                                    </div>
                                   {/*end::Timeline icon*/}
                                   {/*begin::Timeline content*/}
                                    <div className="timeline-content mb-10 mt-n1">
                                       {/*begin::Timeline heading*/}
                                        <div className="pe-3 mb-5">
                                           {/*begin::Title*/}
                                            <div className="fs-5 fw-semibold mb-2">In Scope</div>
                                           {/*end::Title*/}
                                        </div>
                                       {/*end::Timeline heading*/}
                                       {/*begin::Timeline details*/}
                                        <div className="overflow-auto pb-5">
                                           {/*begin::Record*/}
                                            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                                            </div>
                                           {/*end::Record*/}
                                        </div>
                                       {/*end::Timeline details*/}
                                    </div>
                                   {/*end::Timeline content*/}
                                </div>
                               {/*end::Timeline item*/}
                               {/*begin::Timeline item*/}
                                <div className="timeline-item">
                                   {/*begin::Timeline line*/}
                                    <div className="timeline-line w-40px"></div>
                                   {/*end::Timeline line*/}
                                   {/*begin::Timeline icon*/}
                                    <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                                        <div className="symbol-label bg-light">
                                            <i className="ki-outline ki-message-text-2 fs-2 text-muted"></i>
                                        </div>
                                    </div>
                                   {/*end::Timeline icon*/}
                                   {/*begin::Timeline content*/}
                                    <div className="timeline-content mb-10 mt-n1">
                                       {/*begin::Timeline heading*/}
                                        <div className="pe-3 mb-5">
                                           {/*begin::Title*/}
                                            <div className="fs-5 fw-semibold mb-2">Not In Scope</div>
                                           {/*end::Title*/}
                                        </div>
                                       {/*end::Timeline heading*/}
                                       {/*begin::Timeline details*/}
                                        <div className="overflow-auto pb-5">
                                           {/*begin::Record*/}
                                            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            </div>
                                           {/*end::Record*/}
                                        </div>
                                       {/*end::Timeline details*/}
                                    </div>
                                   {/*end::Timeline content*/}
                                </div>
                               {/*end::Timeline item*/}
                               {/*begin::Timeline item*/}
                                <div className="timeline-item">
                                   {/*begin::Timeline line*/}
                                    <div className="timeline-line w-40px"></div>
                                   {/*end::Timeline line*/}
                                   {/*begin::Timeline icon*/}
                                    <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                                        <div className="symbol-label bg-light">
                                            <i className="ki-outline ki-message-text-2 fs-2 text-muted"></i>
                                        </div>
                                    </div>
                                   {/*end::Timeline icon*/}
                                   {/*begin::Timeline content*/}
                                    <div className="timeline-content mb-10 mt-n1">
                                       {/*begin::Timeline heading*/}
                                        <div className="pe-3 mb-5">
                                           {/*begin::Title*/}
                                            <div className="fs-5 fw-semibold mb-2">Payment Terms</div>
                                           {/*end::Title*/}
                                        </div>
                                       {/*end::Timeline heading*/}
                                       {/*begin::Timeline details*/}
                                        <div className="overflow-auto pb-5">
                                           {/*begin::Record*/}
                                            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            </div>
                                           {/*end::Record*/}
                                        </div>
                                       {/*end::Timeline details*/}
                                    </div>
                                   {/*end::Timeline content*/}
                                </div>
                               {/*end::Timeline item*/}
                            </div>
                           {/*end::Timeline*/}
                           {/*begin::Actions*/}
                            <div className="text-center mt-5">
                                <Link to="../builderaddbid/"><button className="btn btnButtonCancel me-3">Cancel</button></Link>
                                <Link to="../builderdashboard/"><button type="submit" className="btn btnButton">
                                    <span className="indicator-label">Submit</span>
                                    <span className="indicator-progress">Please wait...
                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                </button></Link>
                            </div>
                           {/*end::Actions*/}
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
function BuilderOverviewbid() {
    return <Layout data={<OverViewBiddDate />} />
}
export default BuilderOverviewbid;