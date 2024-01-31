import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../pages/layout';
import { fetchDataPrivate,toasterrormsg,fetchData } from '../config/Reausable';
import Select from "react-select";


function ProfileData() {
    document.title = 'Buildify AI | Profile'
    const navigate = useNavigate();

    const [profileDetails,setProfileDetails] = useState([])
    const [countryId, setCountryId] = useState(Object);

    const [countryName, setCountryName] = useState([]);
    const [stateId, setStateId] = useState(Object);

    const [stateName, setStateName] = useState([]);
    const [cityId, setCityId] = useState(Object);

    const [cityName, setCityName] = useState([]);
    const [category,setCategory] = useState([]);
    const [categorySelectedOptions,setCetegorySelectedOptions] = useState([]);
	
	const [profilePicture, setProfilePicture] = useState(Array);
    
	
    const handleImageChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        const filePaths = selectedFiles.map((file) => file); // Store the selected file names as paths
        
        setProfilePicture(URL.createObjectURL(filePaths[0])); // Store the array of image paths
    };

    useEffect(() => {
        const userId = window.localStorage.getItem("buildifyUserId");
        if (userId !== "" && userId !== null && userId !== undefined) {
            profileDetailsApi();
            countryApi();
            categoryApi(); 
        } else {
            navigate("/");
        }
    }, [navigate]);

    const profileDetailsApi = async () => {
        let data = {};

        var response = await fetchDataPrivate("GET","api/profileDetails", data);
        if (response.status === 200) {

            if (response.data.length != 0)
            {
                let details = response.data[0];
                setProfileDetails(details);

                let tmpCountry = {
                    "label":details.country[0].name,
                    "value":details.country[0].countryId
                }
                
                setCountryId(tmpCountry);
                stateApi(tmpCountry);
                let tmpState = {
                    "label":details.state[0].name,
                    "value":details.state[0].stateId
                }
                setStateId(tmpState);
                let tmpCity = {
                    "label":details.city[0].name,
                    "value":details.city[0].cityId
                }
                cityApi(tmpState);
                setCityId(tmpCity);
            }
                
        }else{
            console.log(response);
        } 
    }
    
    // category api
    const categoryApi = async () => {

        let data ={};
        var response = await fetchData("GET","public/categoryList", data);
        if (response.status === 200) {

            setCategory(response.data);
            
        } else {
            console.log(response);
            toasterrormsg(response.message);
        }
    }
    const categoryList = category.map(categoryOp => ({
        value: categoryOp.categoryId,
        label: categoryOp.name,
      }));

      //   country api call
    const countryApi = async () => {

        var response = await fetchData("GET","public/countryList", {});
        if (response.status === 200) {

            setCountryName(response.data);
            
        } else {
            console.log(response);
            toasterrormsg(response.message);
        }
    }

    const countryOption = countryName.map(countryOp => ({
        value: countryOp.countryId,
        label: countryOp.name,
      }));

      // state api call
      const stateApi = async (countryId) => {
        
        
        let data = {};
        var response = await fetchData('GET',`public/stateList/${countryId.value}`, data);
        if (response.status === 200) {

            setStateName(response.data);
            
        } else {
            console.log(response);
            toasterrormsg(response.message);
        }
    }

    // city api call
    const cityApi = async (stateId) => {

        // let data = {};
        var response = await fetchData('get',`public/cityList/${stateId.value != "" ? stateId.value : ""}`, {});
        if (response.status === 200) {

            setCityName(response.data);
            
        } else {
            console.log(response);
            toasterrormsg(response.message);
        }
    }
      const stateOption = stateName.map(stateOp => ({
        value: stateOp.stateId,
        label: stateOp.name,
      }));
      const cityOption = cityName.map(cityOp => ({
        value: cityOp.cityId,
        label: cityOp.name,
      }));
      
    let categoryValue = null;

    if(profileDetails.category && profileDetails.category.length > 0) {
        categoryValue = categoryList.find(option => option.value === profileDetails.category[0]?.categoryId);
    }

    return (
        <>
            {/* <!--begin::Content wrapper--> */}
            <div className="d-flex flex-column flex-column-fluid">
                {/* <!--begin::Content--> */}
                <div id="kt_app_content" className="app-content flex-column-fluid">
                    {/* <!--begin::Navbar--> */}
                    <div className="card mb-5 mb-xl-10">
                        <div className="card-body pt-9 pb-0">
                            {/* <!--begin::Details--> */}
                            <div className="d-flex flex-wrap flex-sm-nowrap">
                                {/* <!--begin: Pic--> */}
                                <div className="me-7 mb-4">
                                    <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                                        <img src={profileDetails.profilePicture} alt="avatar330_1" />
                                        <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"></div>
                                    </div>
                                </div>
                                {/* <!--end::Pic--> */}
                                {/* <!--begin::Info--> */}
                                <div className="flex-grow-1">
                                    {/* <!--begin::Title--> */}
                                    <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                        {/* <!--begin::User--> */}
                                        <div className="d-flex flex-column">
                                            {/* <!--begin::Name--> */}
                                            <div className="d-flex align-items-center mb-2">
                                                <Link to="#" className="text-gray-900 text-hover-primary fs-2 fw-bold me-1">{profileDetails.firstName} {profileDetails.lastName}</Link>
                                                <Link to="#">
                                                    <i className="ki-outline ki-verify fs-1 text-primary"></i>
                                                </Link>
                                            </div>
                                            {/* <!--end::Name--> */}
                                            {/* <!--begin::Info--> */}
                                            <div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                                                <Link to="#" className="d-flex align-items-center text-muted text-hover-primary me-5 mb-2">
                                                    <i className="ki-outline ki-profile-circle fs-4 me-1"></i>{profileDetails.accountType}</Link>
                                                {/* <Link to="#" className="d-flex align-items-center text-muted text-hover-primary me-5 mb-2">
                                                    <i className="ki-outline ki-geolocation fs-4 me-1"></i>SF, Bay Area</Link> */}
                                                <Link to="#" className="d-flex align-items-center text-muted text-hover-primary mb-2">
                                                    <i className="ki-outline ki-sms fs-4 me-1"></i>{profileDetails.email}</Link>
                                            </div>
                                            {/* <!--end::Info--> */}
                                        </div>
                                        {/* <!--end::User--> */}
                                        {/* <!--begin::Actions--> */}
                                        <div className="d-flex my-4">
                                            {/* <!--begin::Menu--> */}
                                            <div className="me-0">
                                                <button className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                    <i className="ki-solid ki-dots-horizontal fs-2x me-1"></i>
                                                </button>
                                                {/* <!--begin::Menu 3--> */}
                                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                                                    {/* <!--begin::Heading--> */}
                                                    <div className="menu-item px-3">
                                                        <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                                                    </div>
                                                    {/* <!--end::Heading--> */}
                                                    {/* <!--begin::Menu item--> */}
                                                    <div className="menu-item px-3">
                                                        <Link to="#" className="menu-link px-3">Create Invoice</Link>
                                                    </div>
                                                    {/* <!--end::Menu item--> */}
                                                    {/* <!--begin::Menu item--> */}
                                                    <div className="menu-item px-3">
                                                        <Link to="#" className="menu-link flex-stack px-3">Create Payment
                                                            <span className="ms-2" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference">
                                                                <i className="ki-outline ki-information fs-6"></i>
                                                            </span></Link>
                                                    </div>
                                                    {/* <!--end::Menu item--> */}
                                                    {/* <!--begin::Menu item--> */}
                                                    <div className="menu-item px-3">
                                                        <Link to="#" className="menu-link px-3">Generate Bill</Link>
                                                    </div>
                                                    {/* <!--end::Menu item--> */}
                                                    {/* <!--begin::Menu item--> */}
                                                    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                                                        <Link to="#" className="menu-link px-3">
                                                            <span className="menu-title">Subscription</span>
                                                            <span className="menu-arrow"></span>
                                                        </Link>
                                                        {/* <!--begin::Menu sub--> */}
                                                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                            {/* <!--begin::Menu item--> */}
                                                            <div className="menu-item px-3">
                                                                <Link to="#" className="menu-link px-3">Plans</Link>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}
                                                            {/* <!--begin::Menu item--> */}
                                                            <div className="menu-item px-3">
                                                                <Link to="#" className="menu-link px-3">Billing</Link>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}
                                                            {/* <!--begin::Menu item--> */}
                                                            <div className="menu-item px-3">
                                                                <Link to="#" className="menu-link px-3">Statements</Link>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}
                                                            {/* <!--begin::Menu separator--> */}
                                                            <div className="separator my-2"></div>
                                                            {/* <!--end::Menu separator--> */}
                                                            {/* <!--begin::Menu item--> */}
                                                            <div className="menu-item px-3">
                                                                <div className="menu-content px-3">
                                                                    {/* <!--begin::Switch--> */}
                                                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                                                        {/* <!--begin::Input--> */}
                                                                        <input className="form-check-input w-30px h-20px" type="checkbox" name="notifications" />
                                                                        {/* <!--end::Input--> */}
                                                                        {/* <!--end::Label--> */}
                                                                        <span className="form-check-label text-muted fs-6">Recuring</span>
                                                                        {/* <!--end::Label--> */}
                                                                    </label>
                                                                    {/* <!--end::Switch--> */}
                                                                </div>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}
                                                        </div>
                                                        {/* <!--end::Menu sub--> */}
                                                    </div>
                                                    {/* <!--end::Menu item--> */}
                                                    {/* <!--begin::Menu item--> */}
                                                    <div className="menu-item px-3 my-1">
                                                        <Link to="#" className="menu-link px-3">Settings</Link>
                                                    </div>
                                                    {/* <!--end::Menu item--> */}
                                                </div>
                                                {/* <!--end::Menu 3--> */}
                                            </div>
                                            {/* <!--end::Menu--> */}
                                        </div>
                                        {/* <!--end::Actions--> */}
                                    </div>
                                    {/* <!--end::Title--> */}
                                    {/* <!--begin::Stats--> */}
                                    <div className="d-flex flex-wrap flex-stack">
                                        {/* <!--begin::Wrapper--> */}
                                        <div className="d-flex flex-column flex-grow-1 pe-8">
                                            {/* <!--begin::Stats--> */}
                                            <div className="d-flex flex-wrap">
                                                {/* <!--begin::Stat--> */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                    {/* <!--begin::Number--> */}
                                                    <div className="d-flex align-items-center">
                                                        <i className="ki-outline ki-arrow-up fs-3 text-success me-2"></i>
                                                        <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-prefix="$">0</div>
                                                    </div>
                                                    {/* <!--end::Number--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <div className="fw-semibold fs-6 text-muted">Earnings</div>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Stat--> */}
                                                {/* <!--begin::Stat--> */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                    {/* <!--begin::Number--> */}
                                                    <div className="d-flex align-items-center">
                                                        <i className="ki-outline ki-arrow-down fs-3 text-danger me-2"></i>
                                                        <div className="fs-2 fw-bold" data-kt-countup="true">0</div>
                                                    </div>
                                                    {/* <!--end::Number--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <div className="fw-semibold fs-6 text-muted">Projects</div>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Stat--> */}
                                                {/* <!--begin::Stat--> */}
                                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                    {/* <!--begin::Number--> */}
                                                    <div className="d-flex align-items-center">
                                                        <i className="ki-outline ki-arrow-up fs-3 text-success me-2"></i>
                                                        <div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-prefix="%">0</div>
                                                    </div>
                                                    {/* <!--end::Number--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <div className="fw-semibold fs-6 text-muted">Success Rate</div>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Stat--> */}
                                            </div>
                                            {/* <!--end::Stats--> */}
                                        </div>
                                        {/* <!--end::Wrapper--> */}
                                        {/* <!--begin::Progress--> */}
                                        <div className="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
                                            <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                                                <span className="fw-semibold fs-6 text-muted">Profile Compleation</span>
                                                <span className="fw-bold fs-6">50%</span>
                                            </div>
                                            <div className="h-5px mx-3 w-100 bg-light mb-3">
                                                <div className="bg-success rounded h-5px" role="progressbar" style={{width: '50%'}} ></div>
                                            </div>
                                        </div>
                                        {/* <!--end::Progress--> */}
                                    </div>
                                    {/* <!--end::Stats--> */}
                                </div>
                                {/* <!--end::Info--> */}
                            </div>
                            {/* <!--end::Details--> */}
                            {/* <!--begin::Navs--> */}
                            <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
                                {/* <!--begin::Nav item--> */}
                                <li className="nav-item mt-2">
                                    <Link className="nav-link text-active-primary ms-0 me-10 py-5 active" to="#">Settings</Link>
                                </li>
                                {/* <!--end::Nav item--> */}
                            </ul>
                            {/* <!--begin::Navs--> */}
                        </div>
                    </div>
                    {/* <!--end::Navbar--> */}
                    {/* <!--begin::Basic info--> */}
                    <div className="card mb-5 mb-xl-10">
                        {/* <!--begin::Card header--> */}
                        <div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_profile_details" aria-expanded="true" aria-controls="kt_account_profile_details">
                            {/* <!--begin::Card title--> */}
                            <div className="card-title m-0">
                                <h3 className="fw-bold m-0">Profile Details</h3>
                            </div>
                            {/* <!--end::Card title--> */}
                        </div>
                        {/* <!--begin::Card header--> */}
                        {/* <!--begin::Content--> */}
                        <div id="kt_account_settings_profile_details" className="collapse show">
                            {/* <!--begin::Form--> */}
                            <form id="kt_account_profile_details_form" className="form">
                                {/* <!--begin::Card body--> */}
                                <div className="card-body border-top p-9">
                                    {/* <!--begin::Input group--> */}
                                    <div className="row mb-6">
                                        {/* <!--begin::Label--> */}
                                        <label className="col-lg-4 col-form-label fw-semibold fs-6">Avatar</label>
                                        {/* <!--end::Label--> */}
                                        {/* <!--begin::Col--> */}
                                        <div className="col-lg-8">
                                            {/* <!--begin::Image input--> */}
                                            <div className="image-input image-input-outline blankImg" data-kt-image-input="true">
                                                {/* <!--begin::Preview existing avatar--> */}
                                                <div className="image-input-wrapper w-125px h-125px" style={{backgroundImage:profilePicture != "" ? `url(${profilePicture})`:`url(${profileDetails.profilePicture})`}}></div>
                                                {/* <!--end::Preview existing avatar--> */}
                                                {/* <!--begin::Label--> */}
                                                <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                                    <i className="ki-outline ki-pencil fs-7"></i>
                                                    {/* <!--begin::Inputs--> */}
                                                     <input type="file" name="avatar" accept=".png, .jpg, .jpeg" onChange={handleImageChange} />
                                                    <input type="hidden" name="avatar_remove" />
                                                    {/* <!--end::Inputs--> */}
                                                </label>
                                                {/* <!--end::Label--> */}
                                            </div>
                                            {/* <!--end::Image input--> */}
                                            {/* <!--begin::Hint--> */}
                                            <div className="form-text">Allowed file types: png, jpg, jpeg.</div>
                                            {/* <!--end::Hint--> */}
                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    {/* <!--end::Input group--> */}
                                    {/* <!--begin::Input group--> */}
                                    <div className="row mb-6">
                                        {/* <!--begin::Label--> */}
                                        <label className="col-lg-4 col-form-label required fw-semibold fs-6">Full Name</label>
                                        {/* <!--end::Label--> */}
                                        {/* <!--begin::Col--> */}
                                        <div className="col-lg-8">
                                            {/* <!--begin::Row--> */}
                                            <div className="row">
                                                {/* <!--begin::Col--> */}
                                                <div className="col-lg-6 fv-row">
                                                    <input type="text" name="fname" className="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="First name" value={profileDetails.firstName} />
                                                </div>
                                                {/* <!--end::Col--> */}
                                                {/* <!--begin::Col--> */}
                                                <div className="col-lg-6 fv-row">
                                                    <input type="text" name="lname" className="form-control form-control-lg form-control-solid" placeholder="Last name" value={profileDetails.lastName} />
                                                </div>
                                                {/* <!--end::Col--> */}
                                            </div>
                                            {/* <!--end::Row--> */}
                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    {/* <!--end::Input group--> */}
                                    {/* <!--begin::Input group--> */}
                                    <div className="row mb-6">
                                        {/* <!--begin::Label--> */}
                                        <label className="col-lg-4 col-form-label fw-semibold fs-6">
                                            <span className="required">Contact Number</span>
                                        </label>
                                        {/* <!--end::Label--> */}
                                        {/* <!--begin::Col--> */}
                                        <div className="col-lg-8 fv-row">
                                            <input type="text" name="phone" className="form-control form-control-lg form-control-solid" placeholder="Phone number" value={profileDetails.mobileNumber} />
                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    <div className="row mb-6">
                                        {/* <!--begin::Label--> */}
                                        <label className="col-lg-4 col-form-label fw-semibold fs-6">
                                            <span className="required">Email</span>
                                        </label>
                                        {/* <!--end::Label--> */}
                                        {/* <!--begin::Col--> */}
                                        <div className="col-lg-8 fv-row">
                                            <input type="text" name="email" className="form-control form-control-lg form-control-solid" placeholder="Email" value={profileDetails.email} />
                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    <div className="row mb-6">
                                        {/* <!--begin::Label--> */}
                                        <label className="col-lg-4 col-form-label fw-semibold fs-6">
                                            <span className="required">Licence Number</span>
                                        </label>
                                        {/* <!--end::Label--> */}
                                        {/* <!--begin::Col--> */}
                                        <div className="col-lg-8 fv-row">
                                            <input type="textx" name="licenceNumber" className="form-control form-control-lg form-control-solid" placeholder="Licence Number" value={profileDetails.licenceNumber} />
                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    {/* <!--end::Input group--> */}
                                    {/* <!--begin::Input group--> */}
                                    <div className="row mb-6">
                                        {/* <!--begin::Label--> */}
                                        <label className="col-lg-4 col-form-label fw-semibold fs-6">
                                            <span className="required">Country</span>
                                        </label>
                                        {/* <!--end::Label--> */}
                                        {/* <!--begin::Col--> */}
                                        <div className="col-lg-8 fv-row">
                                        <Select 
                                                className='form-control form-control-lg form-control-solid' 
                                                options={countryOption} 
                                                name='country' 
                                                id='country' 
                                                placeholder="Select Country" 
                                                value={countryId}
                                                onChange={(e) => {

                                                    setCountryId(e);
                                                    stateApi(e);
                                                    setStateId(null);
                                                    setCityId(null);
                                                }}
                                                />
                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    <div className="row mb-6">
                                        {/* <!--begin::Label--> */}
                                        <label className="col-lg-4 col-form-label fw-semibold fs-6">
                                            <span className="required">Select State</span>
                                        </label>
                                        {/* <!--end::Label--> */}
                                        {/* <!--begin::Col--> */}
                                        <div className="col-lg-8 fv-row">
                                        <Select className='form-control form-control-lg form-control-solid' 
                                                options={stateOption} 
                                                name='state' 
                                                id='state' 
                                                placeholder="Select State" 
                                                value={stateId} 
                                                onChange={(e) => {setStateId(e);cityApi(e);setCityId(null)}}
                                                />
                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    <div className="row mb-6">
                                        {/* <!--begin::Label--> */}
                                        <label className="col-lg-4 col-form-label fw-semibold fs-6">
                                            <span className="required">Select City</span>
                                        </label>
                                        {/* <!--end::Label--> */}
                                        {/* <!--begin::Col--> */}
                                        <div className="col-lg-8 fv-row">
                                        <Select 
                                                className='form-control form-control-lg form-control-solid' 
                                                options={cityOption}
                                                name='city' 
                                                id='city' 
                                                placeholder="Select City" 
                                                value={cityId}
                                                onChange={(e) => {setCityId(e);}}
                                                />
                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    {/* <!--end::Input group--> */}
                                    {/* <!--begin::Input group--> */}
                                    <div className="row mb-6">
                                        {/* <!--begin::Label--> */}
                                        <label className="col-lg-4 col-form-label required fw-semibold fs-6">Address Line1</label>
                                        {/* <!--end::Label--> */}
                                        {/* <!--begin::Col--> */}
                                        <div className="col-lg-8 fv-row">
                                            <input type="text" name="addressLine1" className="form-control form-control-lg form-control-solid" placeholder="Address Line1" value={profileDetails.addressLine1} />
                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    <div className="row mb-6">
                                        {/* <!--begin::Label--> */}
                                        <label className="col-lg-4 col-form-label required fw-semibold fs-6">Address Line2</label>
                                        {/* <!--end::Label--> */}
                                        {/* <!--begin::Col--> */}
                                        <div className="col-lg-8 fv-row">
                                            <input type="text" name="addressLine2" className="form-control form-control-lg form-control-solid" placeholder="Address Line2" value={profileDetails.addressLine2} />
                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    <div className="row mb-6">
                                        {/* <!--begin::Label--> */}
                                        <label className="col-lg-4 col-form-label required fw-semibold fs-6">Zip Code</label>
                                        {/* <!--end::Label--> */}
                                        {/* <!--begin::Col--> */}
                                        <div className="col-lg-8 fv-row">
                                            <input type="text" name="zipcode" className="form-control form-control-lg form-control-solid" placeholder="Zip Code" value={profileDetails.zipcode} />
                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    <div className="row mb-6">
                                        {/* <!--begin::Label--> */}
                                        <label className="col-lg-4 col-form-label required fw-semibold fs-6">Business Name</label>
                                        {/* <!--end::Label--> */}
                                        {/* <!--begin::Col--> */}
                                        <div className="col-lg-8 fv-row">
                                            <input type="text" name="businessName" className="form-control form-control-lg form-control-solid" placeholder="Business Name" value={profileDetails.businessName} />
                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    <div className="row mb-6">
                                        {/* <!--begin::Label--> */}
                                        <label className="col-lg-4 col-form-label required fw-semibold fs-6">Business Date</label>
                                        {/* <!--end::Label--> */}
                                        {/* <!--begin::Col--> */}
                                        <div className="col-lg-8 fv-row">
                                            <input type="date" name="businessDate" className="form-control form-control-lg form-control-solid" placeholder="Business Date" value={profileDetails.businessDate} />
                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    <div className="row mb-6">
                                        {/* <!--begin::Label--> */}
                                        <label className="col-lg-4 col-form-label required fw-semibold fs-6">Select Category</label>
                                        {/* <!--end::Label--> */}
                                        {/* <!--begin::Col--> */}
                                        <div className="col-lg-8 fv-row">
                                        <Select 
                                                className='form-control form-control-lg form-control-solid' 
                                                name='category[]' 
                                                id='category' 
                                                placeholder="Select Category" 
                                                isMulti
                                                options={categoryList} 
                                                value={categoryValue}
                                                onChange={(e) => {setCetegorySelectedOptions(e);}}
                                                />
                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    {/* <!--end::Input group--> */}
                                </div>
                                {/* <!--end::Card body--> */}
                                {/* <!--begin::Actions--> */}
                                <div className="card-footer d-flex justify-content-end py-6 px-9">
                                    <button type="reset" className="btn btnButtonCancel me-2">Discard</button>
                                    <button type="submit" className="btn btnButton" id="kt_account_profile_details_submit">Save Changes</button>
                                </div>
                                {/* <!--end::Actions--> */}
                            </form>
                            {/* <!--end::Form--> */}
                        </div>
                        {/* <!--end::Content--> */}
                    </div>
                    {/* <!--end::Basic info--> */}
                </div>
                {/* <!--end::Content--> */}
            </div>
            {/* <!--end::Content wrapper--> */}
        </>
    )
}
function Profile() {
    return <Layout data={<ProfileData />} />
}
export default Profile;