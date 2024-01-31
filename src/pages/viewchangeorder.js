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


function ViewChangeOrderData() {
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
                {/* <div id="kt_app_content" className="app-content flex-column-fluid"> */}
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
                                   <Link to="/addchangeorder" className="btn btnButton">
                                        <i className="ki-outline ki-plus fs-2"></i>Add Change Order
                                    </Link>
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
												<th className="min-w-175px text-primary">Owner/Builder</th>
												<th className="min-w-175px text-primary">Sub Contractor</th>
												<th className="min-w-175px text-primary">Completion Date</th>
												<th className="min-w-175px text-primary">Payment Type</th>
												<th className="min-w-175px text-primary">Changes Will</th>
												<th className="min-w-125px text-primary">Bid By</th>
												<th className="min-w-125px text-primary">Cost Code</th>
											</tr>
										</thead>
										{/* <!--end::Thead--> */}
										{/* <!--begin::Tbody--> */}
										<tbody className="fs-6 fw-semibold text-gray-600">
											<tr>
												<td className="ps-9">Chris Kirk</td>
												<td>JT 	Poston</td>
												<td className="">2024-02-20</td>
												<td className="">Online</td>
												<td className="">Decrease</td>
												<td className="">JT Poston</td>
												<td className="">123456</td>
											</tr>
											<tr>
												<td className="ps-9">Grayson Murray</td>
												<td>Jordan Spieth</td>
												<td className="">2024-02-29</td>
												<td className="">Cod</td>
												<td className="">Increase</td>
												<td className="">Jordan Spieth</td>
												<td className="">963258</td>
											</tr>
										</tbody>
										{/* <!--end::Tbody--> */}
									</table>
									{/* <!--end::Table--> */}
								</div>
							</div>
							{/* <Modal 
								shouldCloseOnOverlayClick={true}
								isOpen={rejectModel}
								onRequestClose={() => setRejectModel(false)}
								style={customStyles}
															>
				
							</Modal> */}
						</div>
						{/* <!--end::Tab Content--> */}
					</div>
					{/* <!--end::Statements--> */}
                </div>
                {/*  end::Content  */}
            {/* </div> */}
			
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
function ViewChangeOrder() {
    return <Layout data={<ViewChangeOrderData />} />
}
export default ViewChangeOrder;