import React,{useState} from 'react'
import { Link} from 'react-router-dom';
import Layout from './layout';
import avtar_300_1 from "../assets/images/Avatar/300-1.jpg"
import avtar_300_2 from "../assets/images/Avatar/300-2.jpg"
import avtar_300_5 from "../assets/images/Avatar/300-5.jpg"
import avtar_300_6 from "../assets/images/Avatar/300-6.jpg"
import avtar_300_9 from "../assets/images/Avatar/300-9.jpg"
import avtar_300_10 from "../assets/images/Avatar/300-10.jpg"
import question_mark from "../assets/images/question_mark.png"
import pdf_svg from "../assets/images/files/pdf.svg"
import doc_svg from "../assets/images/files/doc.svg"
import css_svg from "../assets/images/files/css.svg"
import blogo from '../assets/images/b-logo.jpg'
import SweetAlert from 'react-bootstrap-sweetalert';
import { logDOM } from '@testing-library/react';
import Modal from 'react-modal';
import Select from 'react-select';

function SalesLeadsData() {

	document.title = 'Buildify AI | Sales / Leads';

	const [activeNav, setActiveNav] = useState(1);
	const [uploadFileModel, setUploadFileModel] = useState(false);
	const [rejectModel, setRejectModel] = useState(false);
	const [reviewModel, setReviewModel] = useState(false);
	
    const changeNave = (id) => {
        setActiveNav(id);
    };

	const [approveSweetAlert,setApproveSweetAlert] = useState(false);
	const [showApproveRejectBtn,setShowApproveRejectBtn] = useState(true);
	const [showReviewBtn,setShowReviewBtn] = useState(false);

	const onConfirm = () =>{
		setShowReviewBtn(true);
		setShowApproveRejectBtn(false);
		setApproveSweetAlert(false);
	}

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%'
			
		},
	  };
  return (
		<div className="d-flex flex-column flex-column-fluid">
			{/* <!--begin::Content--> */}
			<div id="kt_app_content" className="app-content flex-column-fluid">


			{/* <!--begin::Row--> */}
			<div className="card mb-5 mb-xl-8">
				{/* <!--begin::Card body--> */}
				<div className="card-body">
					{/* <!--begin::Tab Content--> */}
					<div className="tab-content">
						{/* <!--begin::Tap panel--> */}
						{activeNav == 1 && (

						<div className="card-body p-5 tab-pane fade show active" id="kt_tab_1" role="tabpanel">
						<div className="">	
							<h3 className="fw-bold mb-10 d-flex text-gray-800">Sales / Leads</h3>
							{/* <div className="d-flex justify-content-end">
								<Link to="#" className="btn btnButton" data-bs-target="#kt_modal_new_comment">Add Comment</Link>
							</div> */}
						</div>
							{/* <!--begin::Timeline--> */}
							<div className="timeline">
								{/* <!--begin::Timeline item--> */}
								<div className="d-flex flex-column mb-5 mt-5 fv-row fs-6 fw-semibold fv-plugins-icon-container">
									<span className="fs-3">Notes </span>
									<div className='row col-lg-12'>
									<div className='col-9'>
										<textarea className="form-control" rows={1}></textarea>
										
									</div>
									<div className='col-2'>			
										<button className="btn btnButton col-4">+</button>
									</div>
									{/* <div className='col-lg-10'>
										<button className="btn btnButton col-lg-2 p-3" onClick={()=>setRejectModel(true)}>
											Turn Into Contract
										</button>
									</div> */}
									</div>
									
									<div className="fv-plugins-message-container invalid-feedback"></div></div>
									<div className="google-map-code">
										<iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{border: "0px"}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
									</div>
								</div>
								{/* <!--end::Timeline item--> */}
							{/* <!--end ::Timeline--> */}
						</div>
						)}
						{/* <!--end::Tab panel--> */}
						{/* <!--end::Tap panel-->*/}
					</div>
					{/* <!--end::Tab Content--> */}
				</div>
				{/* <!--end::Card body--> */}
			</div>
			{/* <!--end::Row--> */}
			</div>
			{/* <!--end::Content--> */}
			{/* <!--begin::Modal - Upload File--> */}
			{uploadFileModel == true && (

			<div className="modal fade" id="kt_modal_upload" tabIndex="-1" aria-hidden="true">
						{/* <!--begin::Modal dialog--> */}
						<div className="modal-dialog modal-dialog-centered mw-650px">
							{/* <!--begin::Modal content--> */}
							<div className="modal-content">
								{/* <!--begin::Form--> */}
								<div className="form" id="kt_modal_upload_form">
									{/* <!--begin::Modal header--> */}
									<div className="modal-header">
										{/* <!--begin::Modal title--> */}
										<h2 className="fw-bold">Upload files</h2>
										{/* <!--end::Modal title--> */}
										{/* <!--begin::Close--> */}
										<div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
											<i className="ki-outline ki-cross fs-1"></i>
										</div>
										{/* <!--end::Close--> */}
									</div>
									{/* <!--end::Modal header--> */}
									{/* <!--begin::Modal body--> */}
									<div className="modal-body pt-10 pb-15 px-lg-17">
										{/* <!--begin::Input group--> */}
										<div className="form-group">
											{/* <!--begin::Dropzone--> */}
											<div className="dropzone dropzone-queue mb-2" id="kt_modal_upload_dropzone">
												{/* <!--begin::Controls--> */}
												<div className="dropzone-panel mb-4">
													<Link className="dropzone-select btn btn-sm btn-primary me-2">Attach files</Link>
													<Link className="dropzone-upload btn btn-sm btn-light-primary me-2">Upload All</Link>
													<Link className="dropzone-remove-all btn btn-sm btn-light-primary">Remove All</Link>
												</div>
												{/* <!--end::Controls--> */}
												{/* <!--begin::Items--> */}
												<div className="dropzone-items wm-200px">
													<div className="dropzone-item p-5" style={{display:"none"}}>
														{/* <!--begin::File--> */}
														<div className="dropzone-file">
															<div className="dropzone-filename text-dark" title="some_image_file_name.jpg">
																<span data-dz-name="">some_image_file_name.jpg</span>
																<strong>(
																<span data-dz-size="">340kb</span>)</strong>
															</div>
															<div className="dropzone-error mt-0" data-dz-errormessage=""></div>
														</div>
														{/* <!--end::File--> */}
														{/* <!--begin::Progress--> */}
														<div className="dropzone-progress">
															<div className="progress bg-gray-300">
																<div className="progress-bar bg-primary" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" data-dz-uploadprogress=""></div>
															</div>
														</div>
														{/* <!--end::Progress--> */}
														{/* <!--begin::Toolbar--> */}
														<div className="dropzone-toolbar">
															<span className="dropzone-start">
																<i className="ki-outline ki-to-right fs-1"></i>
															</span>
															<span className="dropzone-cancel" data-dz-remove="" style={{display:"none"}}>
																<i className="ki-outline ki-cross fs-2"></i>
															</span>
															<span className="dropzone-delete" data-dz-remove="">
																<i className="ki-outline ki-cross fs-2"></i>
															</span>
														</div>
														{/* <!--end::Toolbar--> */}
													</div>
												</div>
												{/* <!--end::Items--> */}
											</div>
											{/* <!--end::Dropzone--> */}
											{/* <!--begin::Hint--> */}
											<span className="form-text fs-6 text-muted">Max file size is 1MB per file.</span>
											{/* <!--end::Hint--> */}
										</div>
										{/* <!--end::Input group--> */}
									</div>
									{/* <!--end::Modal body--> */}
								</div>
								{/* <!--end::Form--> */}
							</div>
						</div>
			</div>
			)}
			{/* <!--end::Modal - Upload File--> */}
			{/* <!--begin::Modal - Reject--> */}
			
			<Modal 
			isOpen={rejectModel}
			onRequestClose={() => setRejectModel(false)}
			style={customStyles}
			>
				<div className="modal fade show" id="kt_modal_new_reject" tabIndex="-1" style={{display:"block"}}>
					{/* <!--begin::Modal dialog--> */}
					<div className="modal-dialog modal-dialog-centered mw-650px">
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
							<div className="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
								{/* <!--begin:Form--> */}
								<div id="kt_modal_new_target_form" className="form fv-plugins-bootstrap5 fv-plugins-framework" >
									{/* <!--begin::Heading--> */}
									<div className="mb-13 text-center">
										{/* <!--begin::Title--> */}
										<h1 className="mb-3">Add Information</h1>
										{/* <!--end::Title--> */}
										{/* <!--begin::Description--> */}
										{/* <!--end::Description--> */}
									</div>
									{/* <!--end::Heading--> */}
									{/* <!--begin::Input group--> */}
									<div className="d-flex flex-column mb-5 mt-5 fv-row fs-6 fw-semibold fv-plugins-icon-container">
										<div className='row col-lg-12'>
										{/* <!--begin::Input group--> */}
											<div className='col-12'>
												<span >Name</span>
												<input className="form-control form-control-lg form-control-solid my-3" placeholder='Enter name'/>
											</div>
										{/* <!--End::Input group--> */}
										{/* <!--begin::Input group--> */}
											<div className='col-12'>
												<span >Email</span>
												<input className="form-control form-control-lg form-control-solid my-3" placeholder='Enter Email'/>
											</div>
										{/* <!--End::Input group--> */}
										{/* <!--begin::Input group--> */}
										<div className='col-12'>
												<span >Contact Number</span>
												<input className="form-control form-control-lg form-control-solid my-3" placeholder='Enter Contact Number'/>
											</div>
										{/* <!--End::Input group--> */}
										{/* <!--begin::Input group--> */}
											<div className='col-12'>
												<span >Address</span>
												<input className="form-control form-control-lg form-control-solid my-3" placeholder='Enter Address'/>
											</div>
										{/* <!--End::Input group--> */}
										{/* <!--begin::Input group--> */}
											<div className='col-12'>
												<span>Country</span>
												<Select className="form-control form-control-lg form-control-solid p-1" placeholder="Select Country"/>
											</div>
										{/* <!--End::Input group--> */}
										
										</div>
									<div className="fv-plugins-message-container invalid-feedback"></div></div>
									<div className="text-center">
										<button type="reset" className="btn btnLightPrimary mx-1" onClick={() => setRejectModel(false)}> Cancel</button>
										<button type="submit" id="kt_modal_new_target_submit" className="btn btnButton me-3 mx-1">
											<span className="indicator-label">Submit</span>
											<span className="indicator-progress">Submit..
											<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
										</button>
									</div>
									{/* <!--end::Actions--> */}
								</div>
								{/* <!--end:Form--> */}
							</div>
							{/* <!--end::Modal body--> */}
						</div>
						{/* <!--end::Modal content--> */}
					</div>
					{/* <!--end::Modal dialog--> */}
				</div>
			</Modal>
			{/* <!--end::Modal - Reject--> */}
			
			{/* <!--begin::Modal Review--> */}
			<Modal 
			isOpen={reviewModel}
			onRequestClose={() => setReviewModel(false)}
			style={customStyles}
			>
				<div className="modal fade show" id="kt_modal_new_review" tabindex="-1" style={{display:"block"}}>
					{/* <!--begin::Modal dialog--> */}
					<div className="modal-dialog modal-dialog-centered mw-450px">
						{/* <!--begin::Modal content--> */}
						<div className="modal-content rounded">
							{/* <!--begin::Modal header--> */}
							<div className="modal-header pb-0 border-0 justify-content-end">
								{/* <!--begin::Close--> */}
								<button className="btn btn-sm btn-icon btn-active-color-primary" onClick={() => setReviewModel(false)}>
									<i className="ki-outline ki-cross fs-1"></i>
								</button>
								{/* <!--end::Close--> */}
							</div>
							{/* <!--begin::Modal header--> */}
							{/* <!--begin::Modal body--> */}
							<div className="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
								{/* <!--begin:Form--> */}
								<div id="kt_modal_new_target_form" className="form fv-plugins-bootstrap5 fv-plugins-framework">
									{/* <!--begin::Heading--> */}
									<div className="mb-13 text-center">
										{/* <!--begin::Title--> */}
										<h1 className="mb-3">Rating</h1>
										{/* <!--end::Title--> */}
									</div>
									{/* <!--end::Heading--> */}
									{/* <!--begin::Input group--> */}
									<div className="row">
										<div className="col-lg-12 fs-6 fw-semibold">
											{/* <!--begin::Label--> */}
											<span className="text-gray-400 fw-semibold d-block fs-4">Rating</span>
											<div className="rating my-4">
												<div className="rating-label checked">
													<i className="ki-outline ki-star fs-1"></i>
												</div>
												<div className="rating-label checked">
													<i className="ki-outline ki-star fs-1"></i> 
												</div>
												<div className="rating-label checked">
													<i className="ki-outline ki-star fs-1"></i> 
												</div>
												<div className="rating-label checked">
													<i className="ki-outline ki-star fs-1"></i> 
												</div>
												<div className="rating-label checked">
													<i className="ki-outline ki-star fs-1"></i> 
												</div>
											</div>
											<span className="text-gray-400 fw-semibold d-block fs-4">Review</span>
											<textarea className="form-control mb-2 mt-3"></textarea>
										</div>
									</div>
									{/* <!--begin::Input group--> */}
									<div className="text-center mt-3">
										<button id="#" className="btn btnButton me-3">
											<span className="indicator-label">Submit</span>
											<span className="indicator-progress">Submit
											<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
										</button>
									</div>
									{/* <!--end::Actions--> */}
								</div>
								{/* <!--end:Form--> */}
							</div>
							{/* <!--end::Modal body--> */}
						</div>
						{/* <!--end::Modal content--> */}
					</div>
					{/* <!--end::Modal dialog--> */}
				</div>
			</Modal>
			{/* <!--end::Modal Review--> */}

		</div>
  )
}
function SalesLeads() {
    return <Layout data={<SalesLeadsData />} />
  }
  export default SalesLeads;
