import React, { useEffect, useState } from 'react';
import agencyimg from "../assets/images/agency.png"
import googleimg from "../assets/images/google-icon.svg"
import appleimg from "../assets/images/apple-black.svg"
import logo from "../assets/images/Logo.svg"
import {Link, useNavigate} from 'react-router-dom';
import { fetchDataPrivate,toasterrormsg,toastsuccessmsg } from '../config/Reausable';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { auth, provider } from "./Firebase";
// import {signInWithPopup} from 'firebase/auth';


export default function Login() {
	document.title = 'Buildify AI | Login'
	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page
	  }, []);

	//   const [email,setEmail] = useState('');
	//   const [password,setPassword] = useState('');
	const [isloading, setIsloading] = useState(false);

	const navigate = useNavigate();

	const [showPassword, setShowPassword] = useState(false);

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
		console.log(showPassword);
	};

	const { 
		register, 
		handleSubmit, 
		formState: { errors } 
	} = useForm();
	
	// login api call
	const signInApi = async (value) => {

		setIsloading(true)
		let data = {
			"email": value.email,
			"password": value.password
			};

		var response = await fetchDataPrivate('post',"public/login",data);
		
		if(response.status === 200){
			window.localStorage.setItem('token',response.data[0].token);
			window.localStorage.setItem('buildifyUserId',response.data[0].userId);
          	window.localStorage.setItem('email',response.data[0].email);
          	window.localStorage.setItem('accountType',response.data[0].accountType);
			window.localStorage.setItem('activeTab','dashboard');
			window.localStorage.setItem('activeTabSub', '');
			// check account type
			if(response.data[0].accountType == "SUBCONTRACTOR"){
				navigate("../subcontractordashboard/");
			}
			else if(response.data[0].accountType == "BUILDER"){

				navigate("../builderdashboard/");
			} 
			else{
				navigate("../ownerdashboard/");
			}
		}else{
			setIsloading(false)
			console.log(response);
			toasterrormsg(response.message);
		}
		
	};

	// google Sign In api call here

	// const signInWithGoogle = () => {

	// 	provider.setCustomParameters({ prompt: 'select_account' });

	// 	signInWithPopup(auth, provider)
	// 	.then((result) => {
	// 	// console.log("Successfully signed in with Google:", result);
	// 	var userEmail = result.user.email;
	// 	var federatedId = result.user.reloadUserInfo.providerUserInfo[0].federatedId;
	// 	window.localStorage.setItem('email',userEmail);

	// 	const socialMediaLogin = async () =>{
	// 		let data = {
	// 			"appVersion":"1.0",
	// 			"device": "en_US",
	// 			"email": userEmail,
	// 			"id": federatedId,
	// 			"loginType": "googleId",
	// 			"os": "Android",
	// 			"osVersion": "RMX2020_11_C.12"
	// 		};
	// 		var response = await fetchData('post',"socialMediaLogin",data);

	// 		if(response.status === 200){

	// 			window.localStorage.setItem('token',response.data[0].token);
	// 			window.localStorage.setItem('buildifyUserId',response.data[0].userId);
	// 			navigate("../builderdashboard/");
	// 		}
	// 		else{
	// 			console.log(response);
	// 		}

	// 	}
	// 	socialMediaLogin();
	// 	})
	// 	.catch((error) => {
	// 	console.log("Sign-in error:", error);
	// 	});
	// }
	  
	
	// login api call
	//   const signInApi = async () => {
		
	// 	let data = {"email": email,
	// 				"password": password
	// 				};
    
    // 	var response = await fetchDataPrivate('post',"login",data);
	// 	console.log(response);
	// 	if(response.status === 200){
	// 		window.localStorage.setItem('token',response.data[0].token);
	// 		navigate("./builderdashboard/");
	// 	}else{
	// 		console.log(response);
	// 		console.log(response.message);
	// 	}
	//   }

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
						<h4 className="text-gray-800 fs-2qx fw-bold text-center mb-7">Fast, Efficient and Productive</h4>
						{/* end::Title */}
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
				{/* <!--begin::Aside-->
				<!--begin::Body--> */}
				<div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12">
					{/* <!--begin::Wrapper--> */}
					<div className="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10">
						{/* <!--begin::Content--> */}
						<div className="d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px">
							{/* <!--begin::Wrapper--> */}
							<div className="d-flex flex-center flex-column flex-column-fluid pb-15 pb-lg-20">
								{/* <!--begin::Form--> */}
								<form className="form w-100" onSubmit={handleSubmit(signInApi)}>
									{/* <!--begin::Heading--> */}
									<div className="text-center mb-11">
										{/* <!--begin::Title--> */}
										<h1 className="text-dark fw-bolder mb-3">Sign In</h1>
										{/* <!--end::Title-->
										<!--begin::Subtitle--> */}
										<div className="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div>
										{/* <!--end::Subtitle=--> */}
									</div>
									{/* <!--begin::Heading--> 
									<!--begin::Login options--> */}
									<div className="row g-3 mb-9">
										{/* <!--begin::Col--> */}
										<div className="col-md-6">
											{/* <!--begin::Google link=--> */}
											<button 
											type='button' 
											className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100" 
											// onClick={signInWithGoogle}
											>
											<img alt="Logo" src={googleimg} className="h-15px me-3" />Sign in with Google</button>
											{/* <!--end::Google link=--> */}
										</div>
										{/* <!--end::Col--> */}
										{/* <!--begin::Col--> */}
										<div className="col-md-6">
											{/* <!--begin::Google link=--> */}
											<button 
											type='button' 
											className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
											// onClick={signInWithApple}
											>
											<img alt="Logo" src={appleimg} className="theme-light-show h-15px me-3" />
                                            Sign in with Apple
											</button>
											{/* <!--end::Google link=--> */}
    
										</div>
										{/* <!--end::Col--> */}
									</div>
									{/* <!--end::Login options--> */}
									{/* <!--begin::Separator--> */}
									<div className="separator separator-content my-14">
										<span className="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
									</div>
									{/* <!--end::Separator-->
									<!--begin::Input group=--> */}
									<div className="fv-row mb-8">
										{/* <!--begin::Email--> */}
										<input
										type="text"
										placeholder="Email"
										name="email"
										autoComplete="off"
										className="form-control bg-transparent"
										value={register.email}
										
										{...register('email', { required: true,pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}(?:\.[A-Z]{2,})?$/i })}
										/>
										{/* Display error message if validation fails */}
										{errors.email && errors.email.type == "required" && (<span className='error_text'>Email Is Required.</span>)}
										{errors.email && errors.email.type == "pattern" && (<span className='error_text'>Enter Valid Email.</span>)}
										{/* <!--end::Email--> */}
									</div>
									{/* <!--end::Input group=--> */}
									<div className="fv-row mb-8" data-kt-password-meter="true">
										{/* <!--begin::Wrapper--> */}
										<div className="mb-1">
											{/* <!--begin::Input wrapper--> */}
											<div className="position-relative mb-3">
												{/* <input className="form-control bg-transparent" type="password" placeholder="Password" name="password" autocomplete="off" /> */}
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
													{/* begin::password */}
													<input 
													type={showPassword ? 'text' : 'password'}
													placeholder="Password" 
													name="password" 
													autoComplete="off" 
													className="form-control bg-transparent" 
													value={register.password}  
													
													{...register('password', { required: true,
														pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ })}
													/>
													{/* Display error message if validation fails */}
													{errors.password && errors.password.type === "required" && (<span className='error_text'>Password Is Required.</span>)}
													{errors.password && errors.password.type === "pattern" && (<span className='error_text'>Use 8 or more characters with a mix of letters, numbers & symbols.</span>)}
													{/* <!--end::Password--> */}
											</div>
											{/* <!--end::Input wrapper--> */}
										</div>
										{/* <!--end::Wrapper--> */}
									</div>
									{/* <!--end::Input group=-->
									<!--begin::Wrapper--> */}
									<div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
										<div></div>
										{/* <!--begin::Link--> */}
										<Link to="/forgotpassword" className="link-primary">Forgot Password ?</Link>
										{/* <!--end::Link--> */}
									</div>
									{/* <!--end::Wrapper-->
									<!--begin::Submit button--> */}
									<div className="d-grid mb-10">
										<button className="form-control bg-primary" type='Submit' style={{color: 'white'}}>
										{isloading &&(

											<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
										)}
											{/* <!--begin::Indicator label--> */}
											<span className="indicator-label">Sign In</span>
											{/* <!--end::Indicator label--> */}
										</button>
									</div>
									{/* <!--end::Submit button--> */}
									{/* <!--begin::Sign up--> */}
									<div className="text-gray-500 text-center fw-semibold fs-6">Not a Member yet?
									<Link to="/signup" className="link-primary">Sign up</Link></div>
									{/* <!--end::Sign up--> */}
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
