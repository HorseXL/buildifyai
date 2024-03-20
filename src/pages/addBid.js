import React from 'react'
import Layout from '../pages/layout';
import blogo from '../assets/images/b-logo.jpg'
import { Link} from 'react-router-dom';


function AddbidData() {
  return (
                        <>
			{/* <div class="d-flex flex-column flex-column-fluid"> */}
			<div id="kt_app_content" className="app-content flex-column-fluid">
						{/* <!--begin::Navbar--> */}
						<div className="card mb-6 mb-xl-9">
						{/* <!--end::Navbar--> */}
						{/* <!--begin::Row--> */}
						{/* <!--begin::Card--> */}
				<div class="card card-md-stretch me-xl-3 mb-md-0 mb-6">
					{/* <!--begin::Body--> */}
					<div class="card-body p-10 p-lg-15">
						{/* <!--begin::Header--> */}
						<div class="text-center flex-stack mb-7">
							{/* <!--begin::Title--> */}
							<h1 class="fw-bold text-dark">Write Your Bid</h1>
							{/* <!--end::Title--> */}
						</div>
						{/* <!--end::Header--> */}
						{/* <!--begin::Accordion--> */}
						{/* <!--begin::Input group--> */}
						<div class="d-flex flex-column mt-5 mb-8">
							<label class="fs-4 fw-semibold mb-2">In Scope</label>
							<div id="kt_ecommerce_add_product_description" name="kt_ecommerce_add_product_description" class="h-100px">
                                <textarea placeholder="Description" class="form-control mb-2"> </textarea>
                            </div>
						</div>
						{/* <!--end::Input group--> */}
						{/* <!--begin::Input group--> */}
						<div class="d-flex flex-column mt-5 mb-8">
							<label class="fs-4 fw-semibold mb-2">Not In Scope</label>
							<div id="kt_ecommerce_add_product_description1" name="" class="h-100px">
                                <textarea placeholder="Description" class="form-control mb-2"> </textarea>
                            </div>
						</div>
						{/* <!--end::Input group--> */}
						{/* <!--begin::Input group--> */}
						<div class="d-flex flex-column mt-5 mb-8">
							<label class="fs-4 fw-semibold mb-2">Payment Terms</label>
							<div id="kt_ecommerce_add_product_description2" name="kt_ecommerce_add_product_description" class="h-100px">
                                <textarea placeholder="Description" class="form-control mb-2"> </textarea>
                            </div>
						</div>
						{/* <!--end::Input group--> */}
						{/* <!--begin::Card header--> */}
						<div class="card-header mb-0 p-0">
							<div class="card-title mb-0">
								<label class="fs-4 fw-semibold">Upload File</label>
							</div>
						</div>
						{/* <!--end::Card header--> */}
						{/* <!--begin::Card body--> */}
						<div class="card-body mt-0 p-0">
							{/* <!--begin::Input group--> */}
							<div class="fv-row mb-2">
								{/* <!--begin::Dropzone--> */}
								<div class="dropzone" id="kt_ecommerce_add_product_media">
									{/* <!--begin::Message--> */}
									<div class="dz-message needsclick">
										{/* <!--begin::Icon--> */}
										<i class="ki-outline ki-file-up text-primary fs-3x"></i>
										{/* <!--end::Icon--> */}
										{/* <!--begin::Info--> */}
										<div class="ms-4">
											<h3 class="fs-5 fw-bold text-gray-900 mb-1">Drop files here or click to upload.</h3>
											<span class="fs-7 fw-semibold text-gray-400">Upload up to 10 files</span>
										</div>
										{/* <!--end::Info--> */}
									</div>
								</div>
								{/* <!--end::Dropzone--> */}
							</div>
							{/* <!--end::Input group--> */}
						</div>
						{/* <!--begin::Actions--> */}
						<div class="text-center mt-5">
						 	<Link to=""><button class="btn btn-light me-3">Cancel</button></Link>
							<Link to="../overviewbid/"><button type="submit" class="btn btnButton">
								<span class="indicator-label">Submit</span>
								<span class="indicator-progress">Please wait...
									<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
							</button></Link>
						</div>
						{/* <!--end::Actions--> */}
						{/* <!--end::Accordion--> */}
					</div>
					{/* <!--end::Body--> */}
				</div>
				{/* <!--end::Card--> */}
									{/* <!--end::Row--> */}
                            </div>
                            </div>
                            {/* </div> */}
                            </>
    
    
  )
}
function Addbid() {
    return <Layout data={<AddbidData />}/>
  }
  export default Addbid;
