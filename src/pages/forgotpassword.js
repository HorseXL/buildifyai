import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { fetchData,toasterrormsg,toastsuccessmsg } from '../config/Reausable';

import agencyimg from "../assets/images/agency.png";
import logo from "../assets/images/Logo.svg";
import { useForm } from 'react-hook-form';
import { ToastContainer } from "react-toastify";



export default function Forgotpassword() {
	document.title = 'Buildify AI | Forgot Password'
	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page
	  }, []);

	//   const [email,setEmail] = useState('');
	const [isloading, setIsloading] = useState(false);

	  const navigate = useNavigate();

	  const { 
			register, 
			handleSubmit, 
			formState: { errors } 
		} = useForm();
		
	  // forgot password api call
	  const forgotPasswordApi = async (value) => {
		setIsloading(true);
		let data = {"email": value.email};
    
    	var response = await fetchData('post',"public/forgetPassword",data);
		if(response.status === 200){
			window.localStorage.setItem('token',response.data[0].token);
			navigate("../otpverification/");
			console.log(response);
		}else{
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
				 {/* <!--begin::Aside--> */}
				{/* <!--begin::Body--> */}
				<div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12">
					{/* <!--begin::Wrapper--> */}
					<div className="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10">
						{/* <!--begin::Content--> */}
						<div className="d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px">
							{/* <!--begin::Wrapper--> */}
							<div className="d-flex flex-center flex-column flex-column-fluid pb-15 pb-lg-20">
								{/* <!--begin::Form--> */}
								<form className="form w-100" onSubmit={handleSubmit(forgotPasswordApi)}>
									{/* <!--begin::Heading--> */}
									<div className="text-center mb-10">
										{/* <!--begin::Title--> */}
										<h1 className="text-dark fw-bolder mb-3">Forgot Password ?</h1>
										{/* <!--end::Title--> */}
										{/* <!--begin::Link--> */}
										<div className="text-gray-500 fw-semibold fs-6">Enter your email to reset your password.</div>
										{/* <!--end::Link--> */}
									</div>
									{/* <!--begin::Heading--> */}
									{/* <!--begin::Input group=--> */}
									<div className="fv-row mb-8">
										{/* <!--begin::Email--> */}
										<input 
										type="text" 
										placeholder="Email" 
										name="email" 
										className="form-control bg-transparent" 
										value={register.email}
										
										{...register('email', { required: true,pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}(?:\.[A-Z]{2,})?$/i })}
										/>
										{/* Display error message if validation fails */}
										{errors.email && errors.email.type == "required" && (<span className='error_text'>Email Is Required.</span>)}
										{errors.email && errors.email.type == "pattern" && (<span className='error_text'>Enter Valid Email.</span>)}
										{/* <!--end::Email--> */}
									</div>
									{/* <!--begin::Actions--> */}
									<div className="d-flex flex-wrap justify-content-center pb-lg-0">
										<button className="btn me-4 btnButton" type='submit'>
											{isloading &&(
												<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
											)} 
											{/* <!--begin::Indicator label--> */}
											<span className="indicator-label">Submit</span>
											{/* <!--end::Indicator label--> */}
										</button>
										<Link to="/login" className="btn btnButtonCancel">Cancel</Link>
									</div>
									{/* <!--end::Actions--> */}
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
