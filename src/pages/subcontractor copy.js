import React from 'react'
import Layout from '../pages/layout';
import a300_6 from '../assets/images/Avatar/300-6.jpg'
import a300_5 from '../assets/images/Avatar/300-5.jpg'
import a300_10 from '../assets/images/Avatar/300-10.jpg'
import a300_9 from '../assets/images/Avatar/300-9.jpg'
import sketchy from '../assets/images/4.png'
import { Link } from 'react-router-dom';


function SubcontractorDate() {
    document.title = 'Buildify AI | Sub Contractor';
    return (
        <>
            {/*  begin::Content wrapper  */}
            <div className="d-flex flex-column flex-column-fluid">
                {/*  begin::Content  */}
                <div id="kt_app_content" className="app-content flex-column-fluid">
                    {/*  begin::Card  */}
                    <div className="card p-5">
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
                                   <Link to="#" className="btn btnButton mx-2" data-bs-toggle="modal" data-bs-target="#kt_modal_customer_search">Invite Sub Contractors</Link>
                                    {/*  begin::Filter  */}
                                    <button type="button" className="btn btn-light-primary me-3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                        <i className="ki-outline ki-filter fs-2"></i>Filter</button>
                                    {/*  begin::Menu 1  */}
                                    <div className="menu menu-sub menu-sub-dropdown w-300px w-md-325px" data-kt-menu="true">
                                        {/*  begin::Header  */}
                                        <div className="px-7 py-5">
                                            <div className="fs-5 text-dark fw-bold">Filter Options</div>
                                        </div>
                                        {/*  end::Header  */}
                                        {/*  begin::Separator  */}
                                        <div className="separator border-gray-200"></div>
                                        {/*  end::Separator  */}
                                        {/*  begin::Content  */}
                                        <div className="px-7 py-5" data-kt-user-table-filter="form">
                                            {/*  begin::Input group  */}
                                            <div className="mb-10">
                                                <label className="form-label fs-6 fw-semibold">Role:</label>
                                                <select className="form-select form-select-solid fw-bold" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-kt-user-table-filter="role" data-hide-search="true">
                                                    <option></option>
                                                    <option value="Administrator">Pricing</option>
                                                    <option value="Analyst">Ratings</option>
                                                </select>
                                            </div>
                                            {/*  end::Input group  */}
                                            {/*  begin::Actions  */}
                                            <div className="d-flex justify-content-end">
                                                <button type="reset" className="btn btn-light btn-active-light-primary fw-semibold me-2 px-6" data-kt-menu-dismiss="true" data-kt-user-table-filter="reset">Reset</button>
                                                <button type="submit" className="btn btnButton fw-semibold px-6" data-kt-menu-dismiss="true" data-kt-user-table-filter="filter">Apply</button>
                                            </div>
                                            {/*  end::Actions  */}
                                        </div>
                                        {/*  end::Content  */}
                                    </div>
                                    {/*  end::Menu 1  */}
                                    {/*  end::Filter  */}
                                    {/*  begin::Add user  */}
                                   <Link to="../addtocompare/" className="btn btnButton">
                                        <i className="ki-outline ki-plus fs-2"></i>Add to Compare</Link>
                                    {/*  end::Add user  */}
                                </div>
                                {/*  end::Toolbar  */}
                            </div>
                            {/*  end::Card toolbar  */}
                        </div>
                        {/*  end::Card header  */}
                        {/*  begin::Card body  */}
                        <div className="card-body py-4">
                            {/*  begin::Table  */}
                            <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users">
                                <thead>
                                    <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                                        <th className="min-w-10px">
                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </th>
                                        <th className="min-w-125px">Sub Contractors</th>
                                        <th className="min-w-125px">Role</th>
                                        <th className="min-w-125px">Ratings</th>
                                        <th className="min-w-125px">Pricing</th>
                                        <th className="text-center min-w-125px">Communicate</th>
                                        <th className="text-center min-w-100px">Invite</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 fw-semibold">
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td className="d-flex align-items-center">
                                            {/*  begin:: Avatar   */}
                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                               <Link to="../viewsubcontractor/">
                                                    <div className="symbol-label">
                                                        <img src={a300_6} alt="Emma Smith" className="w-100" />
                                                    </div>
                                                </Link>
                                            </div>
                                            {/*  end::Avatar  */}
                                            {/*  begin::User details  */}
                                            <div className="d-flex flex-column">
                                               <Link to="../viewsubcontractor/" className="text-gray-800 text-hover-primary mb-1">Emma Smith</Link>
                                                <span className='text-muted'>smith@kpmg.com</span>
                                            </div>
                                            {/*  begin::User details  */}
                                        </td>
                                        <td className='text-muted'>Sub Contractor</td>
                                        <td>
                                            <div className="badge badge-light fw-bold text-muted" style={{fontSize:'15px'}}><i className="fa-solid fa-star" style={{color: '#ffd900', fontSize: '25px'}}></i> 4.9</div><br />
                                                <span className="fs-7 text-muted"> From 9 Member </span>
                                        </td>
                                        <td className='text-muted'>$25.00/Hr</td>
                                        <td style={{textAlign: 'center'}}><Link to="../chat/"> <i className="fa-solid fa-message text-primary" style={{fontSize:'25px'}}></i> </Link></td>
                                        <td className="text-center">
                                            <button className="btn btnButton">Invite</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td className="d-flex align-items-center">
                                            {/*  begin:: Avatar   */}
                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                               <Link to="../viewsubcontractor/">
                                                    <div className="symbol-label">
                                                        <img src={a300_10} alt="Emma Smith" className="w-100" />
                                                    </div>
                                                </Link>
                                            </div>
                                            {/*  end::Avatar  */}
                                            {/*  begin::User details  */}
                                            <div className="d-flex flex-column">
                                               <Link to="../viewsubcontractor/" className="text-gray-800 text-hover-primary mb-1">Emma Smith</Link>
                                                <span className='text-muted'>smith@kpmg.com</span>
                                            </div>
                                            {/*  begin::User details  */}
                                        </td>
                                        <td className='text-muted'>Sub Contractor</td>
                                        <td>
                                            <div className="badge badge-light fw-bold text-muted" style={{fontSize: '15px'}}><i className="fa-solid fa-star" style={{color: '#ffd900', fontSize: '25px'}}></i> 4.5</div><br />
                                                <span className="fs-7 text-muted"> From 5 Member </span>
                                        </td>
                                        <td className='text-muted'>$25.00/Hr</td>
                                        <td style={{textAlign: 'center'}}><Link to="../chat/"> <i className="fa-solid fa-message text-primary" style={{fontSize: '25px'}}></i> </Link></td>
                                        <td className="text-center">
                                            <button className="btn btnButton">Invite</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td className="d-flex align-items-center">
                                            {/*  begin:: Avatar   */}
                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                               <Link to="../viewsubcontractor/">
                                                    <div className="symbol-label">
                                                        <img src={a300_9} alt="Emma Smith" className="w-100" />
                                                    </div>
                                                </Link>
                                            </div>
                                            {/*  end::Avatar  */}
                                            {/*  begin::User details  */}
                                            <div className="d-flex flex-column">
                                               <Link to="../viewsubcontractor/" className="text-gray-800 text-hover-primary mb-1">Brian Cox</Link>
                                                <span className='text-muted'>smith@kpmg.com</span>
                                            </div>
                                            {/*  begin::User details  */}
                                        </td>
                                        <td className='text-muted'>Sub Contractor</td>
                                        <td>
                                            <div className="badge badge-light fw-bold text-muted" style={{fontSize: '15px'}}><i className="fa-solid fa-star" style={{color: '#ffd900', fontSize: '25px'}}></i> 4.9</div><br />
                                                <span className="fs-7 text-muted"> From 15 Member </span>
                                        </td>
                                        <td className='text-muted'>$25.00/Hr</td>
                                        <td style={{textAlign: 'center'}}><Link to="../chat/"> <i className="fa-solid fa-message text-primary" style={{fontSize: '25px'}}></i> </Link></td>
                                        <td className="text-center">
                                            <button className="btn btnButton">Invited</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td className="d-flex align-items-center">
                                            {/*  begin:: Avatar   */}
                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                               <Link to="../viewsubcontractor/">
                                                    <div className="symbol-label">
                                                        <img src={a300_5} alt="Emma Smith" className="w-100" />
                                                    </div>
                                                </Link>
                                            </div>
                                            {/*  end::Avatar  */}
                                            {/*  begin::User details  */}
                                            <div className="d-flex flex-column">
                                               <Link to="../viewsubcontractor/" className="text-gray-800 text-hover-primary mb-1">Emma Smith</Link>
                                                <span className='text-muted'>smith@kpmg.com</span>
                                            </div>
                                            {/*  begin::User details  */}
                                        </td>
                                        <td className='text-muted'>Sub Contractor</td>
                                        <td>
                                            <div className="badge badge-light fw-bold text-muted" style={{fontSize: '15px'}}><i className="fa-solid fa-star" style={{color: '#ffd900', fontSize: '25px'}}></i> 4.6</div><br />
                                                <span className="fs-7 text-muted"> From 20 Member </span>
                                        </td>
                                        <td className='text-muted'>$25.00/Hr</td>
                                        <td style={{textAlign: 'center'}}><Link to="../chat/"> <i className="fa-solid fa-message text-primary" style={{fontSize: '25px'}}></i> </Link></td>
                                        <td className="text-center">
                                            <button className="btn btnButton">Invite</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td className="d-flex align-items-center">
                                            {/*  begin:: Avatar   */}
                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                               <Link to="../viewsubcontractor/">
                                                    <div className="symbol-label">
                                                        <img src={a300_9} alt="Emma Smith" className="w-100" />
                                                    </div>
                                                </Link>
                                            </div>
                                            {/*  end::Avatar  */}
                                            {/*  begin::User details  */}
                                            <div className="d-flex flex-column">
                                               <Link to="../viewsubcontractor/" className="text-gray-800 text-hover-primary mb-1">Brian Cox</Link>
                                                <span className='text-muted'>smith@kpmg.com</span>
                                            </div>
                                            {/*  begin::User details  */}
                                        </td>
                                        <td className='text-muted'>Sub Contractor</td>
                                        <td>
                                            <div className="badge badge-light fw-bold text-muted" style={{fontSize: '15px'}}><i className="fa-solid fa-star" style={{color: '#ffd900', fontSize: '25px'}}></i> 4.9</div><br />
                                                <span className="fs-7 text-muted"> From 10 Member </span>
                                        </td>
                                        <td className='text-muted'>$25.00/Hr</td>
                                        <td style={{textAlign: 'center'}}><Link to="../chat/"> <i className="fa-solid fa-message text-primary" style={{fontSize: '25px'}}></i> </Link></td>
                                        <td className="text-center">
                                            <button className="btn btnButton">Invited</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td className="d-flex align-items-center">
                                            {/*  begin:: Avatar   */}
                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                               <Link to="../viewsubcontractor/">
                                                    <div className="symbol-label fs-3 bg-light-warning text-warning">C</div>
                                                </Link>
                                            </div>
                                            {/*  end::Avatar  */}
                                            {/*  begin::User details  */}
                                            <div className="d-flex flex-column">
                                               <Link to="../viewsubcontractor/" className="text-gray-800 text-hover-primary mb-1">Mikaela Collins</Link>
                                                <span className='text-muted'>mik@pex.com</span>
                                            </div>
                                            {/*  begin::User details  */}
                                        </td>
                                        <td className='text-muted'>Sub Contractor</td>
                                        <td>
                                            <div className="badge badge-light fw-bold text-muted" style={{fontSize: '15px'}}><i className="fa-solid fa-star" style={{color: '#ffd900', fontSize: '25px'}}></i> 4.9</div><br />
                                                <span className="fs-7 text-muted"> From 12 Member </span>
                                        </td>
                                        <td className='text-muted'>$25.00/Hr</td>
                                        <td style={{textAlign: 'center'}}><Link to="../chat/"> <i className="fa-solid fa-message text-primary" style={{fontSize: '25px'}}></i> </Link></td>
                                        <td className="text-center">
                                            <button className="btn btnButton">Invite</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/*  end::Table  */}
                        </div>
                        {/*  end::Card body  */}
                    </div>
                    {/*  end::Card  */}
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
function Subcontractor() {
    return <Layout data={<SubcontractorDate />} />
}
export default Subcontractor;