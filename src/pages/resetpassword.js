import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchDataPrivate,toasterrormsg,toastsuccessmsg } from '../config/Reausable';

import agencyimg from "../assets/images/agency.png"
import logo from "../assets/images/Logo.svg"
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


export default function Resetpassword() {
	document.title = 'Buildify AI | Reset Password'

	const [isloading, setIsloading] = useState(false);

	useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

	const [showPassword, setShowPassword] = useState(false);
	const [showPassword1, setShowPassword1] = useState(false);

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
		console.log(showPassword);
	};
	const handleTogglePassword1 = () => {
		setShowPassword1(!showPassword1);
	};

	
    // reset password api call
	const { 
		register, 
		handleSubmit, 
		formState: { errors } 
	} = useForm();

    const resetPasswordApi = async (value) => {

		setIsloading(true);
        let data = { 
			"password": value.password,		
			"confirmPassword": value.confirmPassword
		};

        var response = await fetchDataPrivate('post',"api/resetPassword", data);
        if (response.status === 200) {
            // window.localStorage.setItem('token',response.data[0].token);
			console.log(response.message);
            navigate("../login/");
        } else {
			setIsloading(false);
            console.log(response);
			toasterrormsg(response.message);
            
        }
    }
  return (
    <>
    {/* <!--begin::Root--> */}
		<div className="d-flex flex-column flex-root bgImgLogin" id="kt_app_root">
			{/* <!--begin::Page bg image--> */}
			{/* <style>body { background-image: url('../assets/media/auth/bg10.jpeg'); } [data-bs-theme="dark"] body { background-image: url('../assets/media/auth/bg10-dark.jpeg'); }</style> */}
			{/* <!--end::Page bg image--> */}
			{/* <!--begin::Authentication - Sign-in --> */}
			<div className="d-flex flex-column flex-lg-row flex-column-fluid">
				{/* <!--begin::Aside--> */}
				<div className="d-flex flex-lg-row-fluid">
					{/* <!--begin::Content--> */}
					<div className="d-flex flex-column flex-center pb-0 pb-lg-10 p-10 w-100">
						{/* <!--begin::Image--> */}
						<img className="theme-light-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20" src={agencyimg} alt="agencyimg" />
						{/* <img className="theme-dark-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20" src={agencydarkimg} alt="agencyimg" /> */}
						{/* <!--end::Image--> */}
						{/* <!--begin::Title--> */}
						<img className="theme-light-show mx-auto mw-100 w-250px" src={logo} alt="logo" />
						<h1 className="text-gray-800 fs-2qx fw-bold text-center mb-7">Fast, Efficient and Productive</h1>
						{/* <!--end::Title--> */}
						{/* <!--begin::Text--> */}
						{/* <div className="text-gray-600 fs-base text-center fw-semibold">In this kind of post, */}
						{/* <Link to="/" className="opacity-75-hover text-primary me-1">the blogger</Link>introduces a person they’ve interviewed */}
						{/* <br />and provides some background information about */}
						{/* <Link to="/" className="opacity-75-hover text-primary me-1">the interviewee</Link>and their */}
						{/* <br />work following this is a transcript of the interview.</div> */}
						{/* <!--end::Text--> */}
					</div>
					{/* <!--end::Content--> */}
				</div>
				{/* /* <!--begin::Aside-->
				<!--begin::Body--> */}
				<div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12">
					{/* <!--begin::Wrapper--> */}
					<div className="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10">
						{/* <!--begin::Content--> */}
						<div className="d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px">
							{/* <!--begin::Wrapper--> */}
							<div className="d-flex flex-center flex-column flex-column-fluid pb-15 pb-lg-20">
								{/* <!--begin::Form--> */}
								<form className="form w-100" onSubmit={handleSubmit(resetPasswordApi)}>
									{/* <!--begin::Heading--> */}
									<div className="text-center mb-10">
										{/* <!--begin::Title--> */}
										<h1 className="text-dark fw-bolder mb-3">Setup New Password</h1>
										{/* <!--end::Title--> */}
										{/* <!--begin::Link--> */}
										<div className="text-gray-500 fw-semibold fs-6">Have you already reset the password ?
										<Link to="/login" className="link-primary fw-bold">Sign in</Link></div>
										{/* <!--end::Link--> */}
									</div>
									{/* <!--begin::Heading--> */}
									{/* <!--begin::Input group--> */}
									<div className="fv-row mb-8" data-kt-password-meter="true">
										{/* <!--begin::Wrapper--> */}
										<div className="mb-1">
											{/* <!--begin::Input wrapper--> */}
											<div className="position-relative mb-3">
												<span
													className="btn btn-sm btn-icon position-absolute translate-middle end-0 me-n2" style={{marginTop: '22px', color: '#a1a5b7'}}
													onClick={handleTogglePassword}
												>
													{showPassword ? (
													<FontAwesomeIcon icon={faEye} />
													) : (
													<FontAwesomeIcon icon={faEyeSlash} />
													)}
												</span>
												<input 
												className="form-control bg-transparent" 
												type={showPassword ? 'text' : 'password'}
												placeholder="Password" 
												name="password" 
												value={register.password}
													{...register('password', { required: true,
														pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ })}
												/>
												{/* {/ Display error message if validation fails /} */}
												{errors.password && errors.password.type === "required" && (<span className='error_text'>Password Is Required.</span>)}
												{errors.password && errors.password.type === "pattern" && (<span className='error_text'>Use 8 or more characters with a mix of letters, numbers & symbols.</span>)}
											</div>
											{/* <!--end::Input wrapper--> */}
										</div>
										{/* <!--end::Wrapper--> */}
									</div>
									{/* <!--end::Input group=--> */}
									{/* <!--end::Input group=--> */}
									<div className="fv-row mb-8" data-kt-password-meter="true">
										{/* <!--begin::Wrapper--> */}
										<div className="mb-1">
											{/* <!--begin::Input wrapper--> */}
											<div className="position-relative mb-3">
												<span
													className="btn btn-sm btn-icon position-absolute translate-middle end-0 me-n2" style={{marginTop: '22px', color: '#a1a5b7'}}
													onClick={handleTogglePassword1}
												>
													{showPassword1 ? (
													<FontAwesomeIcon icon={faEye} />
													) : (
													<FontAwesomeIcon icon={faEyeSlash} />
													)}
												</span>
												{/* <!--begin::Repeat Password--> */}
												<input 
												type={showPassword1 ? 'text' : 'password'} 
												placeholder="Repeat Password" 
												name="confirmPassword" 
												className="form-control bg-transparent" 
												value={register.confirmPassword}
												{...register('confirmPassword', { required: true })}
												/>
												{/* {/ Display error message if validation fails /} */}
												{errors.confirmPassword && errors.confirmPassword.type == "required" && (<span className='error_text'>Repeat Password Is Required.</span>)}
												{/* <!--end::Repeat Password--> */}
											</div>
											{/* <!--end::Input wrapper--> */}
										</div>
										{/* <!--end::Wrapper--> */}
									</div>
									{/* <!--end::Input group=--> */}
									{/* <!--begin::Action--> */}
									<div className="d-grid mb-10">
										<button className="btn btnButton" type='submit'>
											{isloading &&(
												<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
											)} 
											{/* <!--begin::Indicator label--> */}
											<span className="indicator-label">Submit</span>
											{/* <!--end::Indicator label--> */}
										</button>
									</div>
									{/* <!--end::Action--> */}
								</form>
								{/* <!--end::Form--> */}
							</div>
							{/* <!--end::Wrapper--> */}
						</div>
						{/* <!--end::Content--> */}
					</div>
					{/* <!--end::Wrapper--> */}
				</div>
				{/* <!--end::Body--> */}
			</div>
			{/* <!--end::Authentication - Sign-in--> */}
		</div>
		{/* <!--end::Root--> */}
		<ToastContainer />

    </>

  )
}
