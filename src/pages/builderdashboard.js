import React, { useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import Layout from '../pages/layout';

import bLogo from "../assets/images/b-logo.jpg"
import homeIMG2 from "../assets/images/h2.jpg"
import avatar1 from "../assets/images/300-11.jpg"
import avatar2 from "../assets/images/300-2.jpg"
import avatar3 from "../assets/images/300-12.jpg"

function DashboardData() {

  document.title = 'Buildify AI | Builder Dashboard'

  const navigate = useNavigate();

  useEffect(() =>{
    const userId = window.localStorage.getItem("buildifyUserId");
    if (userId !== "" && userId !== null && userId !== undefined) {
 
    }else{
     navigate("/");
    }
   },[navigate]);

  return (
    <>
      <div className="app-main flex-column flex-row-fluid" id="kt_app_main"></div>
      {/* <!--begin::Content wrapper--> */}
      <div className="d-flex flex-column flex-column-fluid" >
        {/* <!--begin::Content--> */}
        <div id="kt_app_content" className="app-content flex-column-fluid">
          {/* <!--begin::Row--> */}
          <div className="row g-5 g-xl-10 mb-xl-10">
            {/* <!--begin::Col--> */}
            <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-md-5 mb-xl-10">
              {/* <!--begin::Card widget 16--> */}
              <div className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-center border-0 mb-5 mb-xl-10" style={{ backgroundColor: '#080655' }}>
                {/* <!--begin::Header--> */}
                <div className="card-header pt-5">
                  {/* <!--begin::Title--> */}
                  <div className="card-title d-flex flex-column">
                    {/* <!--begin::Amount--> */}
                    <span className="fs-2hx fw-bold me-2 lh-1 ls-n2" style={{color: 'white'}}>69</span>
                    {/* <!--end::Amount--> */}
                    {/* <!--begin::Subtitle--> */}
                    <span className="text-white opacity-50 pt-1 fw-semibold fs-6">Active Projects</span>
                    {/* <!--end::Subtitle--> */}
                  </div>
                  {/* <!--end::Title--> */}
                </div>
                {/* <!--end::Header--> */}
                {/* <!--begin::Card body--> */}
                <div className="card-body d-flex align-items-end pt-0">
                  {/* <!--begin::Progress--> */}
                  <div className="d-flex align-items-center flex-column mt-3 w-100">
                    <div className="d-flex justify-content-between fw-bold fs-6 text-white opacity-50 w-100 mt-auto mb-2">
                      <span>43 Pending</span>
                      <span>72%</span>
                    </div>
                    <div className="h-8px mx-3 w-100 bg-light-danger rounded">
                      <div className="bg-danger rounded h-8px" role="progressbar" style={{ width: '72%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  {/* <!--end::Progress--> */}
                </div>
                {/* <!--end::Card body--> */}
              </div>
              {/* <!--end::Card widget 16--> */}
              {/* <!--begin::Card widget 7--> */}
              <div className="card card-flush mb-5 mb-xl-10">
                {/* <!--begin::Header--> */}
                <div className="card-header h-100 pt-5">
                  {/* <!--begin::Title--> */}
                  <div className="card-title d-flex flex-column">
                    {/* <!--begin::Amount--> */}
                    <span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">57</span>
                    {/* <!--end::Amount--> */}
                    {/* <!--begin::Subtitle--> */}
                    <span className="text-gray-400 pt-1 fw-semibold fs-6">Sub Contractors</span>
                    {/* <!--end::Subtitle--> */}
                  </div>
                  {/* <!--end::Title--> */}
                </div>
                {/* <!--end::Header--> */}
                {/* <!--begin::Card body--> */}
                <div className="card-body d-flex flex-column justify-content-end pe-0">
                  {/* <!--begin::Title--> */}
                  <span className="fs-6 fw-bolder text-gray-800 d-block mb-2">Team</span>
                  {/* <!--end::Title--> */}
                  {/* <!--begin::Users group--> */}
                  <div className="symbol-group symbol-hover flex-nowrap">
                    <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                      <span className="symbol-label bg-warning text-white fw-bold">A</span>
                    </div>
                    <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michael Eberon">
                      <img alt="Pic" src={avatar1} />
                    </div>
                    <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                      <span className="symbol-label bg-primary text-white fw-bold">S</span>
                    </div>
                    <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                      <img alt="Pic" src={avatar2} />
                    </div>
                    <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Perry Matthew">
                      <span className="symbol-label bg-danger text-white fw-bold">P</span>
                    </div>
                    <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Barry Walter">
                      <img alt="Pic" src={avatar3} />
                    </div>
                    <Link to="#" className="symbol symbol-35px symbol-circle" >
                      <span className="symbol-label bg-dark text-white fs-8 fw-bold">+42</span>
                    </Link>
                  </div>
                  {/* <!--end::Users group--> */}
                </div>
                {/* <!--end::Card body--> */}
              </div>
              {/* <!--end::Card widget 7--> */}
            </div>
            {/* <!--end::Col--> */}
            {/* <!--begin::Col--> */}
            <div className="col-lg-8 col-xl-8 col-xxl-8 mb-5 h-100 mb-xl-0">
              {/* <!--begin::Timeline widget 3--> */}
              <div className="card mb-5 mb-xl-8">
                {/* <!--begin::Header--> */}
                <div className="card-header border-0 pt-5">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bold fs-3 mb-1">Projects</span>
                  </h3>
                  <div className="card-toolbar">
                    <ul className="nav">
                      <li className="nav-item">
                        <Link className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1 active" data-bs-toggle="tab" to="#kt_table_widget_5_tab_1">Ongoing</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4" data-bs-toggle="tab" to="#kt_table_widget_5_tab_2">Completed</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!--end::Header--> */}
                {/* <!--begin::Body--> */}
                <div className="card-body py-3">
                  <div className="tab-content">
                    {/* <!--begin::Tap pane--> */}
                    <div className="tab-pane fade show active" id="kt_table_widget_5_tab_1">
                      {/* <!--begin::Table container--> */}
                      <div className="table-responsive">
                        {/* <!--begin::Table--> */}
                        <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                          {/* <!--begin::Table head--> */}
                          <thead>
                            <tr className="border-0">
                              <th className="p-0 min-w-200px"></th>
                              <th className="p-0 min-w-50px"></th>
                            </tr>
                          </thead>
                          {/* <!--end::Table head--> */}
                          {/* <!--begin::Table body--> */}
                          <tbody>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Home Renovation</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Planning, Plumbing
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+3</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-success">Active</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Residential Building</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2357</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Interior design, Architecture
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+5</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-success">Active</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={homeIMG2} className="w-90 img-fluid" alt="homeIMG2" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Federal Construction</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2359</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Pre Construction, Roadmap
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-success">Active</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Commercial Outlook</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2360</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Side Set, Beam
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+4</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-success">Active</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                          {/* <!--end::Table body--> */}
                        </table>
                      </div>
                      {/* <!--end::Table--> */}
                    </div>
                    {/* <!--end::Tap pane--> */}
                    <div className="tab-pane fade" id="kt_table_widget_5_tab_2">
                      {/* <!--begin::Table container--> */}
                      <div className="table-responsive">
                        {/* <!--begin::Table--> */}
                        <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                          {/* <!--begin::Table head--> */}
                          <thead>
                            <tr className="border-0">
                              <th className="p-0 min-w-200px"></th>
                              <th className="p-0 min-w-110px"></th>
                              <th className="p-0 min-w-50px"></th>
                            </tr>
                          </thead>
                          {/* <!--end::Table head--> */}
                          {/* <!--begin::Table body--> */}
                          <tbody>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Home Renovation</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Planning, Plumbing
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+3</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-primary">Completed</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Residential Building</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2357</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Interior design, Architecture
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+5</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-primary">Completed</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Federal Construction</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2358</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Pre Construction, Roadmap
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-primary">Completed</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={homeIMG2} className="w-90 img-fluid" alt="homeIMG2" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Commercial Outlook</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2359</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Side Set, Beam
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+4</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-primary">Completed</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">State Construction Project</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2360</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Cantilever, Survey
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-primary">Completed</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                          {/* <!--end::Table body--> */}
                        </table>
                      </div>
                      {/* <!--end::Table--> */}
                    </div>
                    {/* <!--end::Tap pane--> */}
                  </div>
                </div>
                {/* <!--end::Body--> */}
              </div>
              {/* <!--end::Timeline widget 3--> */}
            </div>
            {/* <!--end::Col--> */}
          </div>
          {/* <!--end::Row--> */}
          {/* <!--begin::Row--> */}
          <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
            {/* <!--begin::Col--> */}
            <div className="col-xl-12">
              {/* <!--begin::Table widget 14--> */}
              <div className="card mb-5 mb-xl-8">
                {/* <!--begin::Header--> */}
                <div className="card-header border-0 pt-5">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bold fs-3 mb-1">Projects</span>
                  </h3>
                  <div className="card-toolbar">
                    <ul className="nav">
                      <li className="nav-item">
                        <Link className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1 active" data-bs-toggle="tab" to="#kt_table_widget_14_tab_1">All</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1" data-bs-toggle="tab" to="#kt_table_widget_14_tab_5">Already Bidded</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1" data-bs-toggle="tab" to="#kt_table_widget_14_tab_2">Invited</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1" data-bs-toggle="tab" to="#kt_table_widget_14_tab_3">Accepted</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4" data-bs-toggle="tab" to="#kt_table_widget_14_tab_4">Rejected</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!--end::Header--> */}
                {/* <!--begin::Body--> */}
                <div className="card-body py-3">
                  <div className="tab-content">
                    {/* <!--begin::Tap pane--> */}
                    <div className="tab-pane fade show active" id="kt_table_widget_14_tab_1">
                      {/* <!--begin::Table container--> */}
                      <div className="table-responsive">
                        {/* <!--begin::Table--> */}
                        <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                          {/* <!--begin::Table head--> */}
                          <thead>
                            <tr className="border-0">
                              <th className="p-0 min-w-200px"></th>
                              <th className="p-0 min-w-110px"></th>
                              <th className="p-0 min-w-50px"></th>
                            </tr>
                          </thead>
                          {/* <!--end::Table head--> */}
                          {/* <!--begin::Table body--> */}
                          <tbody>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Home Renovation</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Planning, Plumbing
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+3</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btnButton">Bid</Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Residential Building</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Interior design, Architecture
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+5</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btnButton">Bid</Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={homeIMG2} className="w-90 img-fluid" alt="homeIMG2" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Federal Construction</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Pre Construction, Roadmap
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-success">Accepted</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Commercial Outlook</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Side Set, Beam
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+4</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-danger">Rejected</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">State Construction Project</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Cantilever, Survey
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btnButton">Bid</Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Residential Building</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Interior design, Architecture
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+5</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-primary">Invited</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={homeIMG2} className="w-90 img-fluid" alt="homeIMG2" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Federal Construction</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Pre Construction, Roadmap
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btnButton">Bid</Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Commercial Outlook</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Side Set, Beam
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+4</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btnButton">Bid</Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">State Construction Project</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Cantilever, Survey
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btnButton">Bid</Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                          {/* <!--end::Table body--> */}
                        </table>
                      </div>
                      {/* <!--end::Table--> */}
                    </div>
                    {/* <!--end::Tap pane--> */}
                    {/* <!--begin::Tap pane--> */}
                    <div className="tab-pane fade" id="kt_table_widget_14_tab_2">
                      {/* <!--begin::Table container--> */}
                      <div className="table-responsive">
                        {/* <!--begin::Table--> */}
                        <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                          {/* <!--begin::Table head--> */}
                          <thead>
                            <tr className="border-0">
                              <th className="p-0 min-w-200px"></th>
                              <th className="p-0 min-w-110px"></th>
                              <th className="p-0 min-w-50px"></th>
                            </tr>
                          </thead>
                          {/* <!--end::Table head--> */}
                          {/* <!--begin::Table body--> */}
                          <tbody>

                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Home Renovation</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Planning, Plumbing
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+3</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btnButton">Bid</Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Residential Building</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Interior design, Architecture
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+5</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btnButton">Bid</Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={homeIMG2} className="w-90 img-fluid" alt="homeIMG2" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Federal Construction</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Pre Construction, Roadmap
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btnButton">Bid</Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Commercial Outlook</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Side Set, Beam
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+4</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btnButton">Bid</Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Home Renovation</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Planning, Plumbing
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+3</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btnButton">Bid</Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Residential Building</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Interior design, Architecture
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+5</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btnButton">Bid</Link>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                          {/* <!--end::Table body--> */}
                        </table>
                      </div>
                      {/* <!--end::Table--> */}
                    </div>
                    {/* <!--end::Tap pane--> */}
                    {/* <!--begin::Tap pane--> */}
                    <div className="tab-pane fade" id="kt_table_widget_14_tab_3">
                      {/* <!--begin::Table container--> */}
                      <div className="table-responsive">
                        {/* <!--begin::Table--> */}
                        <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                          {/* <!--begin::Table head--> */}
                          <thead>
                            <tr className="border-0">
                              <th className="p-0 min-w-200px"></th>
                              <th className="p-0 min-w-110px"></th>
                              <th className="p-0 min-w-50px"></th>
                            </tr>
                          </thead>
                          {/* <!--end::Table head--> */}
                          {/* <!--begin::Table body--> */}
                          <tbody>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Home Renovation</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Planning, Plumbing
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+3</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-success">Accepted</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Residential Building</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Interior design, Architecture
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+5</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-success">Accepted</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={homeIMG2} className="w-90 img-fluid" alt="homeIMG2" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Federal Construction</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Pre Construction, Roadmap
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-success">Accepted</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Commercial Outlook</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Side Set, Beam
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+4</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-success">Accepted</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">State Construction Project</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Cantilever, Survey
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-success">Accepted</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Residential Building</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Interior design, Architecture
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+5</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-success">Accepted</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={homeIMG2} className="w-90 img-fluid" alt="homeIMG2" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Federal Construction</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Pre Construction, Roadmap
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-success">Accepted</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Commercial Outlook</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Side Set, Beam
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+4</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-success">Accepted</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">State Construction Project</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Cantilever, Survey
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-success">Accepted</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                          {/* <!--end::Table body--> */}
                        </table>
                      </div>
                      {/* <!--end::Table--> */}
                    </div>
                    {/* <!--end::Tap pane--> */}
                    {/* <!--begin::Tap pane--> */}
                    <div className="tab-pane fade" id="kt_table_widget_14_tab_4">
                      {/* <!--begin::Table container--> */}
                      <div className="table-responsive">
                        {/* <!--begin::Table--> */}
                        <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                          {/* <!--begin::Table head--> */}
                          <thead>
                            <tr className="border-0">
                              <th className="p-0 min-w-200px"></th>
                              <th className="p-0 min-w-110px"></th>
                              <th className="p-0 min-w-50px"></th>
                            </tr>
                          </thead>
                          {/* <!--end::Table head--> */}
                          {/* <!--begin::Table body--> */}
                          <tbody>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Home Renovation</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Planning, Plumbing
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+3</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-danger">Rejected</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Residential Building</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Interior design, Architecture
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+5</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-danger">Rejected</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={homeIMG2} className="w-90 img-fluid" alt="homeIMG2" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Federal Construction</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Pre Construction, Roadmap
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-danger">Rejected</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Commercial Outlook</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Side Set, Beam
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+4</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-danger">Rejected</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">State Construction Project</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Cantilever, Survey
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-danger">Rejected</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Residential Building</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Interior design, Architecture
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+5</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-danger">Rejected</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={homeIMG2} className="w-90 img-fluid" alt="homeIMG2" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Federal Construction</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Pre Construction, Roadmap
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-danger">Rejected</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Commercial Outlook</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Side Set, Beam
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+4</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-danger">Rejected</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">State Construction Project</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-end text-muted fw-bold">Cantilever, Survey
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                </Link>
                              </td>
                              <td className="text-end">
                                <span className="badge badge-light-danger">Rejected</span>
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Project Details">
                                  <i className="ki-outline ki-arrow-right fs-2"></i>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                          {/* <!--end::Table body--> */}
                        </table>
                      </div>
                      {/* <!--end::Table--> */}
                    </div>
                    {/* <!--end::Tap pane--> */}
                    {/* <!--begin::Tap pane--> */}
                    <div className="tab-pane fade" id="kt_table_widget_14_tab_5">
                      {/* <!--begin::Header--> */}
                      <div className="card-header border-0 p-0" style={{ minHeight: '0px' }}>
                        <h3 className="card-title align-items-start flex-column">
                          {/* <!-- <Link className="btn btnButton" to="#">Bid</Link> --> */}
                        </h3>
                        <div className="card-toolbar">
                          <i className="ki-outline ki-magnifier fs-3 position-absolute ms-4"></i>
                          <input type="text" data-kt-ecommerce-category-filter="search" className="form-control form-control-solid w-250px ps-12" placeholder="Search" />
                        </div>
                      </div>
                      {/* <!--end::Header--> */}
                      {/* <!--begin::Table--> */}
                      <div className="table-responsive">
                        {/* <!--begin::Table--> */}
                        <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                          {/* <!--begin::Table head--> */}
                          <thead>
                            <tr className="border-0">
                              <th className="min-w-50px text-muted fs-3">Project</th>
                              <th className="min-w-50px text-muted fs-3">Task</th>
                              <th className="min-w-110px text-muted fs-3">Timeline</th>
                              <th className="min-w-110px text-muted fs-3">Budget</th>
                              <th className="min-w-50px"></th>
                            </tr>
                          </thead>
                          {/* <!--end::Table head--> */}
                          {/* <!--begin::Table body--> */}
                          <tbody>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Home Renovation</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-muted fw-bold">Planning, Plumbing
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+3</span>
                                </Link>
                              </td>
                              <td className="text-start text-muted fs-5">11/08/23 to 14/12/23 </td>
                              <td className="text-start text-muted fs-5">50,000/1,00,000 </td>
                              <td className="text-end">
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btnButton me-1" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Edit Bid">Edit</Link>
                                <Link to="#" className="btn btnButton" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Retract Bid">Retract Bid</Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Residential Building</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-muted fw-bold">Interior design, Architecture
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+5</span>
                                </Link>
                              </td>
                              <td className="text-start text-muted fs-5">01/08/23 to 20/12/23 </td>
                              <td className="text-start text-muted fs-5">80,000/120,000 </td>
                              <td className="text-end">
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btnButton me-1" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Edit Bid">Edit</Link>
                                <Link to="#" className="btn btnButton" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Retract Bid">Retract Bid</Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                {/* <!--begin:: Avatar --> */}
                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                  <div className="symbol-label">
                                    <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                                  </div>
                                </div>
                                {/* <!--end::Avatar--> */}
                                {/* <!--begin::User details--> */}
                                <div className="d-flex flex-column">
                                  <Link to="#">
                                    <div className="fs-3 text-dark">Federal Construction</div>
                                    <div className="fs-6 text-muted fw-bold">BTG-2356</div>
                                  </Link>
                                </div>
                                {/* <!--begin::User details--> */}
                              </td>
                              <td className="text-muted fw-bold">Pre Construction, Roadmap
                                <Link to="#" className="" >
                                  <span className="text-muted fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more Tasks">+2</span>
                                </Link>
                              </td>
                              <td className="text-start text-muted fs-5">15/05/23 to 01/01/24 </td>
                              <td className="text-start text-muted fs-5">50,000/80,000 </td>
                              <td className="text-end">
                              </td>
                              <td className="text-end">
                                <Link to="#" className="btn btnButton me-1" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Edit Bid">Edit</Link>
                                <Link to="#" className="btn btnButton" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Retract Bid">Retract Bid</Link>
                              </td>
                            </tr>
                          </tbody>
                          {/* <!--end::Table body--> */}
                        </table>
                      </div>
                      {/* <!--end::Table--> */}
                    </div>
                    {/* <!--end::Tap pane--> */}
                  </div>
                </div>
                {/* <!--end::Body--> */}
              </div>
              {/* <!--end::Table widget 14--> */}
            </div>
            {/* <!--end::Col--> */}
          </div>
          {/* <!--end::Row--> */}
          <div className="row g-5 g-xl-10 mb-xl-10">
            <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              {/* <!--begin::List Widget 5--> */}
              <div className="card mb-5 mb-xl-8">
                {/* <!--begin::Header--> */}
                <div className="card-header align-items-center border-0 mt-4">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="fw-bold mb-2 text-dark">Notifications</span>
                  </h3>
                </div>
                {/* <!--end::Header--> */}
                {/* <!--begin::Body--> */}
                <div className="card-body">
                  {/* <!--begin::Timeline--> */}
                  {/* <!--begin::Item--> */}
                  <div className="d-flex flex-stack py-4">
                    {/* <!--begin::Section--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Symbol--> */}
                      <div className="symbol symbol-35px me-4">
                        <span className="symbol-label bg-light-primary">
                          <i className="fa-solid fa-user-plus fs-2 text-primary"></i>
                        </span>
                      </div>
                      {/* <!--end::Symbol--> */}
                      {/* <!--begin::Title--> */}
                      <div className="mb-0 me-2">
                        <Link to="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">You got a project invitation from max Plank</Link>
                        {/* <!-- <div className="text-gray-400 fs-7">Phase 1 development</div> --> */}
                      </div>
                      {/* <!--end::Title--> */}
                    </div>
                    {/* <!--end::Section--> */}
                    {/* <!--begin::Label--> */}
                    <span className="badge badge-light fs-8">1 hrs</span>
                    {/* <!--end::Label--> */}
                  </div>
                  {/* <!--end::Item--> */}
                  {/* <!--begin::Item--> */}
                  <div className="d-flex flex-stack py-4">
                    {/* <!--begin::Section--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Symbol--> */}
                      <div className="symbol symbol-35px me-4">
                        <span className="symbol-label bg-light-primary">
                          <i className="fa-solid fa-dollar-sign fs-2 text-primary"></i>
                        </span>
                      </div>
                      {/* <!--end::Symbol--> */}
                      {/* <!--begin::Title--> */}
                      <div className="mb-0 me-2">
                        <Link to="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">You got a request for payment release from Steve messon</Link>
                        {/* <!-- <div className="text-gray-400 fs-7">New frontend admin theme</div> --> */}
                      </div>
                      {/* <!--end::Title--> */}
                    </div>
                    {/* <!--end::Section--> */}
                    {/* <!--begin::Label--> */}
                    <span className="badge badge-light fs-8">2 hrs</span>
                    {/* <!--end::Label--> */}
                  </div>
                  {/* <!--end::Item--> */}
                  {/* <!--begin::Item--> */}
                  <div className="d-flex flex-stack py-4">
                    {/* <!--begin::Section--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Symbol--> */}
                      <div className="symbol symbol-35px me-4">
                        <span className="symbol-label bg-light-primary">
                          <i className="fa-solid fa-truck fs-2 text-primary"></i>
                        </span>
                      </div>
                      {/* <!--end::Symbol--> */}
                      {/* <!--begin::Title--> */}
                      <div className="mb-0 me-2">
                        <Link to="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">You got a material list from Ernest Ruby</Link>
                        {/* <!-- <div className="text-gray-400 fs-7">Corporeate staff profiles</div> --> */}
                      </div>
                      {/* <!--end::Title--> */}
                    </div>
                    {/* <!--end::Section--> */}
                    {/* <!--begin::Label--> */}
                    <span className="badge badge-light fs-8">5 hrs</span>
                    {/* <!--end::Label--> */}
                  </div>
                  {/* <!--end::Item--> */}
                  {/* <!--begin::Item--> */}
                  <div className="d-flex flex-stack py-4">
                    {/* <!--begin::Section--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Symbol--> */}
                      <div className="symbol symbol-35px me-4">
                        <span className="symbol-label bg-light-primary">
                          <i className="fa-solid fa-user-plus fs-2 text-primary"></i>
                        </span>
                      </div>
                      {/* <!--end::Symbol--> */}
                      {/* <!--begin::Title--> */}
                      <div className="mb-0 me-2">
                        <Link to="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">You got a project invitation from Stephen Clerk</Link>
                        {/* <!-- <div className="text-gray-400 fs-7">Phase 1 development</div> --> */}
                      </div>
                      {/* <!--end::Title--> */}
                    </div>
                    {/* <!--end::Section--> */}
                    {/* <!--begin::Label--> */}
                    <span className="badge badge-light fs-8">1 days</span>
                    {/* <!--end::Label--> */}
                  </div>
                  {/* <!--end::Item--> */}
                  {/* <!--begin::Item--> */}
                  <div className="d-flex flex-stack py-4">
                    {/* <!--begin::Section--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Symbol--> */}
                      <div className="symbol symbol-35px me-4">
                        <span className="symbol-label bg-light-primary">
                          <i className="fa-solid fa-dollar-sign fs-2 text-primary"></i>
                        </span>
                      </div>
                      {/* <!--end::Symbol--> */}
                      {/* <!--begin::Title--> */}
                      <div className="mb-0 me-2">
                        <Link to="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">You got a request for payment release from Tony wilbert</Link>
                        {/* <!-- <div className="text-gray-400 fs-7">New frontend admin theme</div> --> */}
                      </div>
                      {/* <!--end::Title--> */}
                    </div>
                    {/* <!--end::Section--> */}
                    {/* <!--begin::Label--> */}
                    <span className="badge badge-light fs-8">2 days</span>
                    {/* <!--end::Label--> */}
                  </div>
                  {/* <!--end::Item--> */}
                  {/* <!--end::Timeline--> */}
                </div>
                {/* <!--end: Card Body--> */}
              </div>
              {/* <!--end: List Widget 5--> */}
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              {/* <!--begin::List Widget 5--> */}
              <div className="card mb-5 mb-xl-8">
                {/* <!--begin::Header--> */}
                <div className="card-header align-items-center border-0 mt-4">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="fw-bold mb-2 text-dark">Activities</span>
                  </h3>
                  <div className="card-toolbar">
                    {/* <!--begin::Menu--> */}
                    <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                      <i className="ki-outline ki-category fs-6"></i>
                    </button>
                    {/* <!--begin::Menu 1--> */}
                    <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_641ace25bb3e4">
                      {/* <!--begin::Header--> */}
                      <div className="px-7 py-5">
                        <div className="fs-5 text-dark fw-bold">Filter Options</div>
                      </div>
                      {/* <!--end::Header--> */}
                      {/* <!--begin::Menu separator--> */}
                      <div className="separator border-gray-200"></div>
                      {/* <!--end::Menu separator--> */}
                      {/* <!--begin::Form--> */}
                      <div className="px-7 py-5">
                        {/* <!--begin::Input group--> */}
                        <div className="mb-10">
                          {/* <!--begin::Label--> */}
                          <label className="form-label fw-semibold">Status:</label>
                          {/* <!--end::Label--> */}
                          {/* <!--begin::Input--> */}
                          <div>
                            <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_641ace25bb3e4" data-allow-clear="true">
                              <option></option>
                              <option value="1">Approved</option>
                              <option value="2">Pending</option>
                              <option value="2">In Process</option>
                              <option value="2">Rejected</option>
                            </select>
                          </div>
                          {/* <!--end::Input--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
                        <div className="mb-10">
                          {/* <!--begin::Label--> */}
                          <label className="form-label fw-semibold">Notifications:</label>
                          {/* <!--end::Label--> */}
                          {/* <!--begin::Switch--> */}
                          <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox"  name="notifications" />
                            <label className="form-check-label">Enabled</label>
                          </div>
                          {/* <!--end::Switch--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Actions--> */}
                        <div className="d-flex justify-content-end">
                          <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                          <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                        </div>
                        {/* <!--end::Actions--> */}
                      </div>
                      {/* <!--end::Form--> */}
                    </div>
                    {/* <!--end::Menu 1--> */}
                    {/* <!--end::Menu--> */}
                  </div>
                </div>
                {/* <!--end::Header--> */}
                {/* <!--begin::Body--> */}
                <div className="card-body pt-5">
                  {/* <!--begin::Timeline--> */}
                  <div className="timeline">
                    {/* <!--begin::Item--> */}
                    <div className="timeline-item">
                      {/* <!--begin:: Avatar --> */}
                      <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <div className="symbol-label">
                          <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                        </div>
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Text--> */}
                      <div className="fw-mormal timeline-content text-muted ps-3">Lrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever...<Link className="text-primary" to="#">read more</Link></div>
                      {/* <!--end::Text--> */}
                    </div>
                    {/* <!--end::Item--> */}
                    {/* <!--begin::Item--> */}
                    <div className="timeline-item">
                      {/* <!--begin:: Avatar --> */}
                      <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <div className="symbol-label">
                          <img src={homeIMG2} className="w-90 img-fluid" alt="homeIMG2" />
                        </div>
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Text--> */}
                      <div className="fw-mormal timeline-content text-muted ps-3">Lrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever...<Link className="text-primary" to="#">read more</Link></div>
                      {/* <!--end::Text--> */}
                    </div>
                    {/* <!--end::Item--> */}
                    {/* <!--begin::Item--> */}
                    <div className="timeline-item">
                      {/* <!--begin:: Avatar --> */}
                      <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <div className="symbol-label">
                          <img src={bLogo} alt="BLogo" className="w-90 img-fluid" />
                        </div>
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Text--> */}
                      <div className="fw-mormal timeline-content text-muted ps-3">Lrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever...<Link className="text-primary" to="#">read more</Link></div>
                      {/* <!--end::Text--> */}
                    </div>
                    {/* <!--end::Item--> */}
                  </div>
                  {/* <!--end::Timeline--> */}
                </div>
                {/* <!--end: Card Body--> */}
              </div>
              {/* <!--end: List Widget 5--> */}
            </div>
          </div>
          {/* <!--begin::Row--> */}
          {/* <!-- <div className="row g-5 g-xl-10"> --> */}
          {/* <!--begin::Col--> */}
          {/* <!-- <div className="col-xl-12"> --> */}
          {/* <!--begin::Timeline Widget 4--> */}
          {/* <!-- <div className="card h-md-100"> --> */}
          {/* <!--begin::Card header--> */}
          {/* <!-- <div className="card-header position-relative py-0 border-bottom-1"> --> */}
          {/* <!--begin::Card title--> */}
          {/* <!-- <h3 className="card-title text-gray-800 fw-bold">Active Tasks</h3> --> */}
          {/* <!--end::Card title--> */}
          {/* <!--begin::Tabs--> */}
          {/* <!-- <ul className="nav nav-stretch nav-pills nav-pills-custom d-flex mt-4"> --> */}
          {/* <!--begin::Nav item--> */}
          {/* <!-- <li className="nav-item p-0 ms-0">
                    <Link className="nav-link btn btn-color-gray-400 flex-center px-3 active" data-kt-timeline-widget-4="tab" data-bs-toggle="tab" to="#kt_timeline_widget_4_tab_day"> --> */}
          {/* <!--begin::Title--> */}
          {/* <!-- <span className="nav-text fw-semibold fs-4 mb-3">Day</span> --> */}
          {/* <!--end::Title--> */}
          {/* <!--begin::Bullet--> */}
          {/* <!-- <span className="bullet-custom position-absolute z-index-2 w-100 h-1px top-100 bottom-n100 bg-primary rounded"></span> --> */}
          {/* <!--end::Bullet--> */}
          {/* <!-- </Link>
                  </li> --> */}
          {/* <!--end::Nav item--> */}
          {/* <!--begin::Nav item--> */}
          {/* <!-- <li className="nav-item p-0 ms-0">
                    <Link className="nav-link btn btn-color-gray-400 flex-center px-3" data-kt-timeline-widget-4="tab" data-bs-toggle="tab" to="#kt_timeline_widget_4_tab_week"> --> */}
          {/* <!--begin::Title--> */}
          {/* <!-- <span className="nav-text fw-semibold fs-4 mb-3">Week</span> --> */}
          {/* <!--end::Title--> */}
          {/* <!--begin::Bullet--> */}
          {/* <!-- <span className="bullet-custom position-absolute z-index-2 w-100 h-1px top-100 bottom-n100 bg-primary rounded"></span> --> */}
          {/* <!--end::Bullet--> */}
          {/* <!-- </Link>
                  </li> --> */}
          {/* <!--end::Nav item--> */}
          {/* <!--begin::Nav item--> */}
          {/* <!-- <li className="nav-item p-0 ms-0">
                    <Link className="nav-link btn btn-color-gray-400 flex-center px-3" data-kt-timeline-widget-4="tab" data-bs-toggle="tab" to="#kt_timeline_widget_4_tab_month"> --> */}
          {/* <!--begin::Title--> */}
          {/* <!-- <span className="nav-text fw-semibold fs-4 mb-3">Month</span> --> */}
          {/* <!--end::Title--> */}
          {/* <!--begin::Bullet--> */}
          {/* <!-- <span className="bullet-custom position-absolute z-index-2 w-100 h-1px top-100 bottom-n100 bg-primary rounded"></span> --> */}
          {/* <!--end::Bullet--> */}
          {/* <!-- </Link>
                  </li> --> */}
          {/* <!--end::Nav item--> */}
          {/* <!--begin::Nav item--> */}
          {/* <!-- <li className="nav-item p-0 ms-0">
                    <Link className="nav-link btn btn-color-gray-400 flex-center px-3" data-kt-timeline-widget-4="tab" data-bs-toggle="tab" to="#kt_timeline_widget_4_tab_2022"> --> */}
          {/* <!--begin::Title--> */}
          {/* <!-- <span className="nav-text fw-semibold fs-4 mb-3">2022</span> --> */}
          {/* <!--end::Title--> */}
          {/* <!--begin::Bullet--> */}
          {/* <!-- <span className="bullet-custom position-absolute z-index-2 w-100 h-1px top-100 bottom-n100 bg-primary rounded"></span> --> */}
          {/* <!--end::Bullet--> */}
          {/* <!-- </Link>
                  </li> --> */}
          {/* <!--end::Nav item--> */}
          {/* <!-- </ul> --> */}
          {/* <!--end::Tabs--> */}
          {/* <!-- </div> --> */}
          {/* <!--end::Card header--> */}
          {/* <!--begin::Card body--> */}
          {/* <!-- <div className="card-body pb-0"> --> */}
          {/* <!--begin::Tab content--> */}
          {/* <!-- <div className="tab-content"> --> */}
          {/* <!--begin::Tab pane--> */}
          {/* <!-- <div className="tab-pane active" id="kt_timeline_widget_4_tab_day" role="tabpanel" aria-labelledby="day-tab" data-kt-timeline-widget-4-blockui="true">
                    <div className="table-responsive pb-10"> --> */}
          {/* <!--begin::Timeline--> */}
          {/* <!-- <div id="kt_timeline_widget_4_1" className="vis-timeline-custom h-350px min-w-700px" data-kt-timeline-widget-4-image-root="../assets/media/"></div> --> */}
          {/* <!--end::Timeline--> */}
          {/* <!-- </div>
                  </div> --> */}
          {/* <!--end::Tab pane--> */}
          {/* <!--begin::Tab pane--> */}
          {/* <!-- <div className="tab-pane" id="kt_timeline_widget_4_tab_week" role="tabpanel" aria-labelledby="week-tab" data-kt-timeline-widget-4-blockui="true">
                    <div className="table-responsive pb-10"> --> */}
          {/* <!--begin::Timeline--> */}
          {/* <!-- <div id="kt_timeline_widget_4_2" className="vis-timeline-custom h-350px min-w-700px" data-kt-timeline-widget-4-image-root="../assets/media/"></div> --> */}
          {/* <!--end::Timeline--> */}
          {/* <!-- </div>
                  </div> --> */}
          {/* <!--end::Tab pane--> */}
          {/* <!--begin::Tab pane--> */}
          {/* <!-- <div className="tab-pane" id="kt_timeline_widget_4_tab_month" role="tabpanel" aria-labelledby="month-tab" data-kt-timeline-widget-4-blockui="true">
                    <div className="table-responsive pb-10"> --> */}
          {/* <!--begin::Timeline--> */}
          {/* <!-- <div id="kt_timeline_widget_4_3" className="vis-timeline-custom h-350px min-w-700px" data-kt-timeline-widget-4-image-root="../assets/media/"></div> --> */}
          {/* <!--end::Timeline--> */}
          {/* <!-- </div>
                  </div> --> */}
          {/* <!--end::Tab pane--> */}
          {/* <!--begin::Tab pane--> */}
          {/* <!-- <div className="tab-pane" id="kt_timeline_widget_4_tab_2022" role="tabpanel" aria-labelledby="week-tab" data-kt-timeline-widget-4-blockui="true">
                    <div className="table-responsive pb-10"> --> */}
          {/* <!--begin::Timeline--> */}
          {/* <!-- <div id="kt_timeline_widget_4_4" className="vis-timeline-custom h-350px min-w-700px" data-kt-timeline-widget-4-image-root="../assets/media/"></div> --> */}
          {/* <!--end::Timeline--> */}
          {/* <!-- </div>
                  </div> --> */}
          {/* <!--end::Tab pane--> */}
          {/* <!-- </div> --> */}
          {/* <!--end::Tab content--> */}
          {/* <!-- </div> --> */}
          {/* <!--end::Card body--> */}
          {/* <!-- </div> --> */}
          {/* <!--end::Timeline Widget 1--> */}
          {/* <!-- </div> --> */}
          {/* <!--end::Col--> */}
          {/* <!-- </div> --> */}
          {/* <!--end::Row--> */}
        </div>
        {/* <!--end::Content--> */}
      </div >
      {/* < !--end::Content wrapper-- > */}
    </>
  )
}
function BuilderDashboard() {
  return <Layout data={<DashboardData />} />
}
export default BuilderDashboard;