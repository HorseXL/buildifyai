import React, { useState } from 'react'
import Layout from './layout';
import a300_6 from '../assets/images/Avatar/300-6.jpg'
import a300_5 from '../assets/images/Avatar/300-5.jpg'
import a300_10 from '../assets/images/Avatar/300-10.jpg'
import a300_9 from '../assets/images/Avatar/300-9.jpg'
import sketchy from '../assets/images/4.png'
import { Link } from 'react-router-dom';
import  Select  from 'react-select';
import Modal from 'react-modal';


function ViewSalesLeadsData() {
    document.title = 'Buildify AI | Sub Contractor';
	const [rejectModel, setRejectModel] = useState(false);
	const [reviewModel, setReviewModel] = useState(false);
	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			maxHeight: '180vh',
			
		},
	  };
    return (
        <>
            {/*  begin::Content wrapper  */}
            <div className="d-flex flex-column flex-column-fluid">
                {/*  begin::Content  */}
                <div id="kt_app_content" className="app-content flex-column-fluid">
                    {/* <!--begin::Statements--> */}
					<div className="card">
						{/*  begin::Card header  */}
                        <div className="card-header border-0 pt-6">
                            {/*  begin::Card title  */}
                            <div className="card-title">
                                {/*  begin::Search  */}
                                <div className="d-flex align-items-center position-relative my-1">
                                    <i className="ki-outline ki-magnifier text-muted fs-3 position-absolute ms-5"></i>
                                    <input type="text" data-kt-user-table-filter="search" className="form-control form-control-solid w-250px ps-13" placeholder="Search" />
                                </div>
                                {/*  end::Search  */}
                            </div>
                            {/*  begin::Card title  */}
                            {/*  begin::Card toolbar  */}
                            <div className="card-toolbar">
                                {/*  begin::Toolbar  */}
                                <div className="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                                   
                                    {/*  begin::Add user  */}
                                   <Link to="../addsalesleads/" className="btn btnButton">
                                        <i className="ki-outline ki-plus fs-2"></i>Add Leads</Link>
                                    {/*  end::Add user  */}
                                </div>
                                {/*  end::Toolbar  */}
                            </div>
                            {/*  end::Card toolbar  */}
                        </div>
                        {/*  end::Card header  */}
						{/* <!--begin::Tab Content--> */}
						<div id="kt_referred_users_tab_content" className="tab-content">
							{/* <!--begin::Tab panel--> */}
							<div id="kt_referrals_1" className="card-body p-0 tab-pane fade show active" role="tabpanel">
								<div className="table-responsive">
									{/* <!--begin::Table--> */}
									<table className="table align-middle table-row-bordered table-row-solid gy-4 gs-9">
										{/* <!--begin::Thead--> */}
										<thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
											<tr>
												<th className="min-w-175px">First name</th>
												<th className="min-w-175px">Last Name</th>
												<th className="min-w-175px">Email</th>
												<th className="min-w-125px">Contact Number</th>
												<th className="min-w-125px">Address</th>
											</tr>
										</thead>
										{/* <!--end::Thead--> */}
										{/* <!--begin::Tbody--> */}
										<tbody className="fs-6 fw-semibold text-gray-600">
											<tr>
												<td className="ps-9">Sean</td>
												<td className="ps-0">Bean</td>
												<td>sean@dellito.com</td>
												<td className="">9632587410</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary" onClick={()=>setRejectModel(true)}>View</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Olivia</td>
												<td className="ps-0">Wild</td>
												<td>olivia@wild.com</td>
												<td className="">9513578520</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary" onClick={()=>setRejectModel(true)}>View</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Peter</td>
												<td className="ps-0">Marcus</td>
												<td>peter@Marcus.com</td>
												<td className="">7412369850</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary" onClick={()=>setRejectModel(true)}>View</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Adam</td>
												<td className="ps-0">Williams</td>
												<td>adam@williams.com</td>
												<td className="">8520741963</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary" onClick={()=>setRejectModel(true)}>View</button>
												</td>
											</tr>
										</tbody>
										{/* <!--end::Tbody--> */}
									</table>
									{/* <!--end::Table--> */}
								</div>
							</div>
							<Modal 
								shouldCloseOnOverlayClick={true}
								isOpen={rejectModel}
								onRequestClose={() => setRejectModel(false)}
								style={customStyles}
															>
				<div className="modal fade show" id="kt_modal_new_reject"  tabIndex="-1" style={{display:"block"}}>
					{/* <!--begin::Modal dialog--> */}
					<div className="modal-dialog modal-dialog-centered mw-850px h-100">
						{/* <!--begin::Modal content--> */}
						<div className="modal-content rounded">
							{/* <!--begin::Modal header--> */}
							<div className="modal-header pb-0 border-0 justify-content-end">
								{/* <!--begin::Close--> */}
								<button className="btn btn-sm btn-icon btn-active-color-primary" onClick={() => setRejectModel(false)}>
									<i className="ki-outline ki-cross fs-1"></i>
								</button>
								{/* <!--end::Close--> */}
							</div>
							{/* <!--begin::Modal header--> */}
							{/* <!--begin::Modal body--> */}
							<div className="modal-body">
								<div className="fv-plugins-message-container invalid-feedback"></div>
									<div className="google-map-code">
										<iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="auto" frameborder="0" style={{border: "0px"}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
									</div>
							</div>
							{/* <!--end::Modal body--> */}
						</div>
						{/* <!--end::Modal content--> */}
					</div>
					{/* <!--end::Modal dialog--> */}
				</div>
							</Modal>
						</div>
						{/* <!--end::Tab Content--> */}
					</div>
					{/* <!--end::Statements--> */}
                </div>
                {/*  end::Content  */}
            </div>
			
            {/*  end::Content wrapper  */}
            {/*  begin::Modal - Users Search  */}
            <div className="modal fade" id="kt_modal_customer_search" tabindex="-1" aria-hidden="true">
                {/*  begin::Modal dialog  */}
                <div className="modal-dialog modal-dialog-centered mw-650px">
                    {/*  begin::Modal content  */}
                    <div className="modal-content">
                        {/*  begin::Modal header  */}
                        <div className="modal-header pb-0 border-0 justify-content-end">
                            {/*  begin::Close  */}
                            <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
                                <i className="ki-outline ki-cross fs-1"></i>
                            </div>
                            {/*  end::Close  */}
                        </div>
                        {/*  begin::Modal header  */}
                        {/*  begin::Modal body  */}
                        <div className="modal-body mx-5 mx-xl-18 pt-0 pb-15">
                            {/*  begin::Content  */}
                            <div className="text-center mb-12">
                                <h1 className="fw-bold mb-3">Invite Sub Contractors</h1>
                                <div className="text-muted fw-semibold fs-5">Share below link to your Sub Contractors and Invite them to Build Together</div>
                            </div>
                            {/*  end::Content  */}
                            {/*  begin::Search  */}
                            <div id="kt_modal_customer_search_handler" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="inline">
                                {/*  begin::Form  */}
                                <div className="text-gray-400 fs-5">https://buildifyai.com/<Link className="text-hover-primary" to="#"><i className="fa-solid fa-share fs-2"></i></Link></div>
                                {/*  begin::Wrapper  */}
                                <div className="py-5">
                                    {/*  begin::Suggestions  */}
                                    <div data-kt-search-element="suggestions">
                                        {/*  begin::Illustration  */}
                                        <div className="text-center px-4 pt-10">
                                            <img src={sketchy} alt="sketchy" className="mw-100 mh-200px" />
                                        </div>
                                        {/*  end::Illustration  */}
                                    </div>
                                    {/*  end::Suggestions  */}
                                </div>
                                {/*  end::Wrapper  */}
                            </div>
                            {/*  end::Search  */}
                        </div>
                        {/*  end::Modal body  */}
                    </div>
                    {/*  end::Modal content  */}
                </div>
                {/*  end::Modal dialog  */}
            </div>
            {/*  end::Modal - Users Search  */}
        </>
    )
}
function ViewSalesLeads() {
    return <Layout data={<ViewSalesLeadsData />} />
}
export default ViewSalesLeads;