import React, { useEffect, useRef } from 'react'
import Layout from './layout';
import a300_6 from '../assets/images/Avatar/300-6.jpg'
import a300_5 from '../assets/images/Avatar/300-5.jpg'
import a300_10 from '../assets/images/Avatar/300-10.jpg'
import a300_9 from '../assets/images/Avatar/300-9.jpg'
import sketchy from '../assets/images/4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Chart from 'chart.js/auto';
import { Link } from 'react-router-dom';
// import ApexCharts, {ApexOptions} from 'apexcharts'
import ApexCharts from 'apexcharts';


function ViewBusinessFinancesData() {
	const chartRef = useRef<HTMLDivElement | null>(null)
    document.title = 'Buildify AI | Sub Contractor';

	
	useEffect(() => {
        if (chartRef.current) {
            const options = {
                chart: {
                    type: 'bar',
                },
                series: [{
                    name: 'Sales',
                    data: [65, 59, 80, 81, 56, 55, 40],
                }],
                xaxis: {
                    categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                },
            };

            const chart = new ApexCharts(chartRef.current, options);
            chart.render();
        }
    }, []);
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
                                   <Link to="../businessfinances/" className="btn btnButton">
                                        <i className="ki-outline ki-plus fs-2"></i>Create Invoice</Link>
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
									<table className="table align-middle table-row-bordered table-row-solid gy-4 gs-9 ">
										{/* <!--begin::Thead--> */}
										<thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
											<tr>
												<th className="min-w-75px">S No</th>
												<th className="min-w-150px">Invoice ID</th>
												<th className="min-w-200px">Owner</th>
												<th className="min-w-175px">Date</th>
												<th className="min-w-350px">Title</th>
												<th className="min-w-125px">Amount</th>
												<th className="min-w-125px">Status</th>
												<th className="min-w-125px">Invoice</th>
												<th className="min-w-300px">Action</th>
											</tr>
										</thead>
										{/* <!--end::Thead--> */}
										{/* <!--begin::Tbody--> */}
										<tbody className="fs-6 fw-semibold text-gray-600">
											<tr>
												<td className="">1</td>
												<td className="">102445788</td>
												{/* <td className=" ps-9 text-primary"><img src={a300_5} alt="sketchy" className="mw-20 mh-50px border_circle_radius" /></td> */}
												<td className='min-w-220px'> 
													<div class="d-flex align-items-center lh-1"> 
														<div class="me-2"> 
															<span class="avatar avatar-md avatar-rounded"> 
															<img src={a300_5} alt="sketchy" className="mw-20 mh-50px border_circle_radius" />
															</span> 
														</div> 
													<div> 
													<span class="d-block fw-semibold mb-1">Kane William</span> 
													<span class="text-muted fs-12">william154@demo</span> 
													</div> 
													</div>
												</td>
												<td className=" ps-0">Nov 01, 2023</td>
												<td className=''>Darknight transparency 36 Icons Pack</td>
												<td className=" text-success">$38.00</td>
												<td> 
													<button className="btn btn-sm badge bg-success">Paid</button>
												 </td>
												<td className=" text-center">
													<button className=" btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
												<td className=''>
													<div className="btn p-0">
														<button className="btn edit-btn-icon btn-sm btn-icon btn-info-light"><FontAwesomeIcon icon={faPencilAlt} className='text-primary'/></button>
														<button className="btn delete-btn-icon btn-icon btn-sm btn-danger-light"><FontAwesomeIcon icon={faTrashAlt} className='text-danger'/></button>
													</div>
												</td>
											</tr>
											<tr>
												<td className="">2</td>
												<td className="">423445721</td>
												<td> 
													<div class="d-flex align-items-center lh-1"> 
														<div class="me-2"> 
															<span class="avatar avatar-md avatar-rounded"> 
															<img src={a300_5} alt="sketchy" className="mw-20 mh-50px border_circle_radius" />
															</span> 
														</div> 
													<div> 
													<span class="d-block fw-semibold mb-1">Kane William</span> 
													<span class="text-muted fs-12">william154@demo</span> 
													</div> 
													</div>
												</td>
												<td className=" ps-0">Oct 24, 2023</td>
												<td className=''>Seller Fee</td>
												<td className=" text-danger">$-2.60</td>
												<td> 
													<button className="btn btn-sm badge bg-primary">Overdue</button>
												 </td>
												<td className=" text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
												<td className=''>
													<div className="btn p-0">
														<button className="btn edit-btn-icon btn-sm btn-icon btn-info-light"><FontAwesomeIcon icon={faPencilAlt} className='text-primary'/></button>
														<button className="btn delete-btn-icon btn-icon btn-sm btn-danger-light"><FontAwesomeIcon icon={faTrashAlt} className='text-danger'/></button>
													</div>
												</td>
											</tr>
											<tr>
												<td className="">3</td>
												<td className="">312445984</td>
												<td> 
													<div class="d-flex align-items-center lh-1"> 
														<div class="me-2"> 
															<span class="avatar avatar-md avatar-rounded"> 
															<img src={a300_5} alt="sketchy" className="mw-20 mh-50px border_circle_radius" />
															</span> 
														</div> 
													<div> 
													<span class="d-block fw-semibold mb-1">Kane William</span> 
													<span class="text-muted fs-12">william154@demo</span> 
													</div> 
													</div>
												</td>
												<td className=" ps-0">Oct 08, 2023</td>
												<td className=''>Cartoon Mobile Emoji Phone Pack</td>
												<td className=" text-success">$76.00</td>
												<td> 
													<button className="btn btn-sm badge bg-warning">Pending</button>
												 </td>
												<td className=" text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
												<td className=''>
													<div className="btn p-0">
														<button className="btn edit-btn-icon btn-sm btn-icon btn-info-light"><FontAwesomeIcon icon={faPencilAlt} className='text-primary'/></button>
														<button className="btn delete-btn-icon btn-icon btn-sm btn-danger-light"><FontAwesomeIcon icon={faTrashAlt} className='text-danger'/></button>
													</div>
												</td>
											</tr>
											<tr>
												<td className="">4</td>
												<td className="">312445984</td>
												<td> 
													<div class="d-flex align-items-center lh-1"> 
														<div class="me-2"> 
															<span class="avatar avatar-md avatar-rounded"> 
															<img src={a300_5} alt="sketchy" className="mw-20 mh-50px border_circle_radius" />
															</span> 
														</div> 
													<div> 
													<span class="d-block fw-semibold mb-1">Kane William</span> 
													<span class="text-muted fs-12">william154@demo</span> 
													</div> 
													</div>
												</td>
												<td className=" ps-0">Sep 15, 2023</td>
												<td className=''>Iphone 12 Pro Mockup Mega Bundle</td>
												<td className=" text-success">$5.00</td>
												<td> 
													<button className="btn btn-sm badge bg-primary">Overdue</button>
												 </td>
												<td className=" text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
												<td className=''>
													<div className="btn p-0">
														<button className="btn edit-btn-icon btn-sm btn-icon btn-info-light"><FontAwesomeIcon icon={faPencilAlt} className='text-primary'/></button>
														<button className="btn delete-btn-icon btn-icon btn-sm btn-danger-light"><FontAwesomeIcon icon={faTrashAlt} className='text-danger'/></button>
													</div>
												</td>
											</tr>
											<tr>
												<td className="">5</td>
												<td className="">523445943</td>
												<td> 
													<div class="d-flex align-items-center lh-1"> 
														<div class="me-2"> 
															<span class="avatar avatar-md avatar-rounded"> 
															<img src={a300_5} alt="sketchy" className="mw-20 mh-50px border_circle_radius" />
															</span> 
														</div> 
													<div> 
													<span class="d-block fw-semibold mb-1">Kane William</span> 
													<span class="text-muted fs-12">william154@demo</span> 
													</div> 
													</div>
												</td>
												<td className=" ps-0">May 30, 2023</td>
												<td className=' '>Seller Fee</td>
												<td className=" text-danger">$-1.30</td>
												<td> 
												<button className="btn btn-sm badge bg-success">Paid</button>
												 </td>
												<td className=" text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
												<td className=''>
													<div className="btn p-0">
														<button className="btn edit-btn-icon btn-sm btn-icon btn-info-light"><FontAwesomeIcon icon={faPencilAlt} className='text-primary'/></button>
														<button className="btn delete-btn-icon btn-icon btn-sm btn-danger-light"><FontAwesomeIcon icon={faTrashAlt} className='text-danger'/></button>
													</div>
												</td>
											</tr>
											<tr>
												<td className="">6</td>
												<td className="">231445943</td>
												<td> 
													<div class="d-flex align-items-center lh-1"> 
														<div class="me-2"> 
															<span class="avatar avatar-md avatar-rounded"> 
															<img src={a300_5} alt="sketchy" className="mw-20 mh-50px border_circle_radius" />
															</span> 
														</div> 
													<div> 
													<span class="d-block fw-semibold mb-1">Kane William</span> 
													<span class="text-muted fs-12">william154@demo</span> 
													</div> 
													</div>
												</td>
												<td className=" ps-0">Apr 22, 2023</td>
												<td className=' '>Parcel Shipping / Delivery Service App</td>
												<td className=" text-success">$204.00</td>
												<td> 
													<button className="btn btn-sm badge bg-warning">Pending</button>
												 </td>
												<td className=" text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
												<td className=''>
													<div className="btn p-0">
														<button className="btn edit-btn-icon btn-sm btn-icon btn-info-light"><FontAwesomeIcon icon={faPencilAlt} className='text-primary'/></button>
														<button className="btn delete-btn-icon btn-icon btn-sm btn-danger-light"><FontAwesomeIcon icon={faTrashAlt} className='text-danger'/></button>
													</div>
												</td>
											</tr>
											<tr>
												<td className="">7</td>
												<td className="">426445943</td>
												<td> 
													<div class="d-flex align-items-center lh-1"> 
														<div class="me-2"> 
															<span class="avatar avatar-md avatar-rounded"> 
															<img src={a300_5} alt="sketchy" className="mw-20 mh-50px border_circle_radius" />
															</span> 
														</div> 
													<div> 
													<span class="d-block fw-semibold mb-1">Kane William</span> 
													<span class="text-muted fs-12">william154@demo</span> 
													</div> 
													</div>
												</td>
												<td className=" ps-0">Feb 09, 2023</td>
												<td className=' '>Visual Design Illustration</td>
												<td className=" text-success">$31.00</td>
												<td> 
													<button className="btn btn-sm badge bg-primary">Overdue</button>
												 </td>
												<td className=" text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
												<td className=''>
													<div className="btn p-0">
														<button className="btn edit-btn-icon btn-sm btn-icon btn-info-light"><FontAwesomeIcon icon={faPencilAlt} className='text-primary'/></button>
														<button className="btn delete-btn-icon btn-icon btn-sm btn-danger-light"><FontAwesomeIcon icon={faTrashAlt} className='text-danger'/></button>
													</div>
												</td>
											</tr>
											<tr>
												<td className="">8</td>
												<td className=" ">984445943</td>
												<td> 
													<div class="d-flex align-items-center lh-1"> 
														<div class="me-2"> 
															<span class="avatar avatar-md avatar-rounded"> 
															<img src={a300_5} alt="sketchy" className="mw-20 mh-50px border_circle_radius" />
															</span> 
														</div> 
													<div> 
													<span class="d-block fw-semibold mb-1">Kane William</span> 
													<span class="text-muted fs-12">william154@demo</span> 
													</div> 
													</div>
												</td>
												<td className="  ps-0">Nov 01, 2023</td>
												<td className='  '>Abstract Vusial Pack</td>
												<td className=" text-success">$52.00</td>
												<td> 
													<button className="btn btn-sm badge bg-success">Paid</button>
												 </td>
												<td className=" text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
												<td className=''>
													<div className="btn p-0">
														<button className="btn edit-btn-icon btn-sm btn-icon btn-info-light"><FontAwesomeIcon icon={faPencilAlt} className='text-primary'/></button>
														<button className="btn delete-btn-icon btn-icon btn-sm btn-danger-light"><FontAwesomeIcon icon={faTrashAlt} className='text-danger'/></button>
													</div>
												</td>
											</tr>
											<tr>
												<td className="">9</td>
												<td className="">324442313</td>
												<td> 
													<div class="d-flex align-items-center lh-1"> 
														<div class="me-2"> 
															<span class="avatar avatar-md avatar-rounded"> 
															<img src={a300_5} alt="sketchy" className="mw-20 mh-50px border_circle_radius" />
															</span> 
														</div> 
													<div> 
													<span class="d-block fw-semibold mb-1">Kane William</span> 
													<span class="text-muted fs-12">william154@demo</span> 
													</div> 
													</div>
												</td>
												<td className=" ps-0">Jan 04, 2023</td>
												<td className=''>Seller Fee</td>
												<td className=" text-danger">$-0.80</td>
												<td> 
													<button className="btn btn-sm badge bg-warning">Pending</button>
												 </td>
												<td className=" text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
												<td className=''>
													<div className="btn p-0">
														<button className="btn edit-btn-icon btn-sm btn-icon btn-info-light"><FontAwesomeIcon icon={faPencilAlt} className='text-primary'/></button>
														<button className="btn delete-btn-icon btn-icon btn-sm btn-danger-light"><FontAwesomeIcon icon={faTrashAlt} className='text-danger'/></button>
													</div>
												</td>
											</tr>
										</tbody>
										{/* <!--end::Tbody--> */}
									</table>
									{/* <!--end::Table--> */}

									<div ref={chartRef} className='mixed-widget-5-chart card-rounded-top'></div>

								
								</div>
							</div>
							{/* <!--end::Tab panel--> */}
							{/* <!--begin::Tab panel--> */}
							<div id="kt_referrals_2" className="card-body p-0 tab-pane fade" role="tabpanel">
								<div className="table-responsive">
									{/* <!--begin::Table--> */}
									<table className="table align-middle table-row-bordered table-row-solid gy-4 gs-9">
										{/* <!--begin::Thead--> */}
										<thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
											<tr>
												<th className="min-w-175px ps-9">Date</th>
												<th className="min-w-150px px-0">Order ID</th>
												<th className="min-w-350px">Details</th>
												<th className="min-w-125px">Amount</th>
												<th className="min-w-125px text-center">Invoice</th>
											</tr>
										</thead>
										{/* <!--end::Thead--> */}
										{/* <!--begin::Tbody--> */}
										<tbody className="fs-6 fw-semibold text-gray-600">
											<tr>
												<td className="ps-9">May 30, 2020</td>
												<td className="ps-0">523445943</td>
												<td>Seller Fee</td>
												<td className="text-danger">$-1.30</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Apr 22, 2020</td>
												<td className="ps-0">231445943</td>
												<td>Parcel Shipping / Delivery Service App</td>
												<td className="text-success">$204.00</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Feb 09, 2020</td>
												<td className="ps-0">426445943</td>
												<td>Visual Design Illustration</td>
												<td className="text-success">$31.00</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Nov 01, 2020</td>
												<td className="ps-0">984445943</td>
												<td>Abstract Vusial Pack</td>
												<td className="text-success">$52.00</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Jan 04, 2020</td>
												<td className="ps-0">324442313</td>
												<td>Seller Fee</td>
												<td className="text-danger">$-0.80</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Nov 01, 2020</td>
												<td className="ps-0">102445788</td>
												<td>Darknight transparency 36 Icons Pack</td>
												<td className="text-success">$38.00</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Oct 24, 2020</td>
												<td className="ps-0">423445721</td>
												<td>Seller Fee</td>
												<td className="text-danger">$-2.60</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Oct 08, 2020</td>
												<td className="ps-0">312445984</td>
												<td>Cartoon Mobile Emoji Phone Pack</td>
												<td className="text-success">$76.00</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Sep 15, 2020</td>
												<td className="ps-0">312445984</td>
												<td>Iphone 12 Pro Mockup Mega Bundle</td>
												<td className="text-success">$5.00</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
										</tbody>
										{/* <!--end::Tbody--> */}
									</table>
									{/* <!--end::Table--> */}
								</div>
							</div>
							{/* <!--end::Tab panel--> */}
							{/* <!--begin::Tab panel--> */}
							<div id="kt_referrals_3" className="card-body p-0 tab-pane fade" role="tabpanel">
								<div className="table-responsive">
									{/* <!--begin::Table--> */}
									<table className="table align-middle table-row-bordered table-row-solid gy-4 gs-9">
										{/* <!--begin::Thead--> */}
										<thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
											<tr>
												<th className="min-w-175px ps-9">Date</th>
												<th className="min-w-150px px-0">Order ID</th>
												<th className="min-w-350px">Details</th>
												<th className="min-w-125px">Amount</th>
												<th className="min-w-125px text-center">Invoice</th>
											</tr>
										</thead>
										{/* <!--end::Thead--> */}
										{/* <!--begin::Tbody--> */}
										<tbody className="fs-6 fw-semibold text-gray-600">
											<tr>
												<td className="ps-9">Feb 09, 2020</td>
												<td className="ps-0">426445943</td>
												<td>Visual Design Illustration</td>
												<td className="text-success">$31.00</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Nov 01, 2020</td>
												<td className="ps-0">984445943</td>
												<td>Abstract Vusial Pack</td>
												<td className="text-success">$52.00</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Jan 04, 2020</td>
												<td className="ps-0">324442313</td>
												<td>Seller Fee</td>
												<td className="text-danger">$-0.80</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Sep 15, 2020</td>
												<td className="ps-0">312445984</td>
												<td>Iphone 12 Pro Mockup Mega Bundle</td>
												<td className="text-success">$5.00</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Nov 01, 2020</td>
												<td className="ps-0">102445788</td>
												<td>Darknight transparency 36 Icons Pack</td>
												<td className="text-success">$38.00</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Oct 24, 2020</td>
												<td className="ps-0">423445721</td>
												<td>Seller Fee</td>
												<td className="text-danger">$-2.60</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Oct 08, 2020</td>
												<td className="ps-0">312445984</td>
												<td>Cartoon Mobile Emoji Phone Pack</td>
												<td className="text-success">$76.00</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">May 30, 2020</td>
												<td className="ps-0">523445943</td>
												<td>Seller Fee</td>
												<td className="text-danger">$-1.30</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Apr 22, 2020</td>
												<td className="ps-0">231445943</td>
												<td>Parcel Shipping / Delivery Service App</td>
												<td className="text-success">$204.00</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
										</tbody>
										{/* <!--end::Tbody--> */}
									</table>
									{/* <!--end::Table--> */}
								</div>
							</div>
							{/* <!--end::Tab panel--> */}
							{/* <!--begin::Tab panel--> */}
							<div id="kt_referrals_4" className="card-body p-0 tab-pane fade" role="tabpanel">
								<div className="table-responsive">
									{/* <!--begin::Table--> */}
									<table className="table align-middle table-row-bordered table-row-solid gy-4 gs-9">
										{/* <!--begin::Thead--> */}
										<thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
											<tr>
												<th className="min-w-175px ps-9">Date</th>
												<th className="min-w-150px px-0">Order ID</th>
												<th className="min-w-350px">Details</th>
												<th className="min-w-125px">Amount</th>
												<th className="min-w-125px text-center">Invoice</th>
											</tr>
										</thead>
										{/* <!--end::Thead--> */}
										{/* <!--begin::Tbody--> */}
										<tbody className="fs-6 fw-semibold text-gray-600">
											<tr>
												<td className="ps-9">Nov 01, 2020</td>
												<td className="ps-0">102445788</td>
												<td>Darknight transparency 36 Icons Pack</td>
												<td className="text-success">$38.00</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Oct 24, 2020</td>
												<td className="ps-0">423445721</td>
												<td>Seller Fee</td>
												<td className="text-danger">$-2.60</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Nov 01, 2020</td>
												<td className="ps-0">102445788</td>
												<td>Darknight transparency 36 Icons Pack</td>
												<td className="text-success">$38.00</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Oct 24, 2020</td>
												<td className="ps-0">423445721</td>
												<td>Seller Fee</td>
												<td className="text-danger">$-2.60</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Feb 09, 2020</td>
												<td className="ps-0">426445943</td>
												<td>Visual Design Illustration</td>
												<td className="text-success">$31.00</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Nov 01, 2020</td>
												<td className="ps-0">984445943</td>
												<td>Abstract Vusial Pack</td>
												<td className="text-success">$52.00</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Jan 04, 2020</td>
												<td className="ps-0">324442313</td>
												<td>Seller Fee</td>
												<td className="text-danger">$-0.80</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Oct 08, 2020</td>
												<td className="ps-0">312445984</td>
												<td>Cartoon Mobile Emoji Phone Pack</td>
												<td className="text-success">$76.00</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
											<tr>
												<td className="ps-9">Oct 08, 2020</td>
												<td className="ps-0">312445984</td>
												<td>Cartoon Mobile Emoji Phone Pack</td>
												<td className="text-success">$76.00</td>
												<td className="text-center">
													<button className="btn btn-light btn-sm btn-active-light-primary">Download</button>
												</td>
											</tr>
										</tbody>
										{/* <!--end::Tbody--> */}
									</table>
									{/* <!--end::Table--> */}
								</div>
							</div>
							{/* <!--end::Tab panel--> */}
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
function ViewBusinessFinances() {
    return <Layout data={<ViewBusinessFinancesData />} />
}

export default ViewBusinessFinances;