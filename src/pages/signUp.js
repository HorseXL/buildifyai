import React, { useState, useRef } from 'react'
import agencyimg from "../assets/images/agency.png"
import googleimg from "../assets/images/google-icon.svg"
import appleimg from "../assets/images/apple-black.svg"
import logo from "../assets/images/Logo.svg"
import blank from "../assets/images/Avatar/blank.png"
import "../assets/css/style.bundle.css"
import {Link, useNavigate} from 'react-router-dom';
import {fetchFormData,toasterrormsg,} from "../config/Reausable"
import { ToastContainer, } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


export default function SignUp() {
    document.title = 'Buildify AI | Sign Up'

	const navigate = useNavigate();
	const inputfileref = useRef(null)
	const [isloading, setIsloading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showPassword1, setShowPassword1] = useState(false);
	const [profilePicture, setProfilePicture] = useState(Array);
	const [viewProfile, setViewProfile] = useState("");
	const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");
	const [repeatPassword,setRepeatPassword] = useState("");
	const [toc,setToc] = useState("");

	 // set error state
	const [errors,setErrors]  = useState([{
        profilePicture: '',
        email: '',
        password:'',
        repeatPassword:'',
		toc:''
	}]);

	// remove validation function
    const removeError = (err) =>{
        var tmp = [...errors];
        tmp[0][err] = "";
        setErrors(tmp);
    }
		
	// preview  profilePicture fucntion 
	const handleImageChange = (e) => {

		if (e && e.target.files.length > 0) {

			const selectedFiles = Array.from(e.target.files);
			const filePaths = selectedFiles.map((file) => file); // Store the selected file names as paths
			
			setViewProfile(URL.createObjectURL(filePaths[0])); // Store the created url of image
			setProfilePicture(filePaths[0]); // Store the array of image paths
			
		}
		
    };

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
		
	};
	const handleTogglePassword1 = () => {
		setShowPassword1(!showPassword1);
	};

	// sign up validation
	const signUpValidation = () =>{
		var isValid = true;
		var errorTmp = [...errors];
        
		if (profilePicture == "" || profilePicture == undefined || profilePicture == null) {
            errorTmp[0].profilePicture = 'Profile picture is required';
            isValid = false;
        } 

		if (email == "" || email == undefined || email == null) {
            errorTmp[0].email = 'Email is required';
            isValid = false;
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}(?:\.[A-Z]{2,})?$/i.test(email)){
            errorTmp[0].email = 'Please enter valid email.';
            isValid = false;
        }

		if (password == "" || password == undefined || password == null) {
            errorTmp[0].password = 'Password is required';
            isValid = false;
        } else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)){
            errorTmp[0].password = 'Use 8 or more characters with a mix of letters, numbers & symbols.';
            isValid = false;
        }

		if (repeatPassword == "" || repeatPassword == undefined || repeatPassword == null) {
            errorTmp[0].repeatPassword = 'Repeat Password Is Required.';
            isValid = false;
        }

		if (toc == "" || toc == undefined || toc == null) {
            errorTmp[0].toc = 'This Is Required.';
            isValid = false;
        }

		setErrors(errorTmp);
        return isValid;
	}

	//  signUp Api Call
	const signUpApi = async () => {
		// console.log(value.profilePicture[0]);
		if(signUpValidation()){

			setIsloading(true)
		  const formData = new FormData();
		  formData.append("email", email);
		  formData.append("profilePicture", profilePicture);
		  formData.append("password", password);
		  formData.append("confirmPassword", repeatPassword);
		  formData.append("accountType", "");
		
		  const response = await fetchFormData('post',"public/registration", formData);
		  if (response.status == 200) {
				
				window.localStorage.setItem('token',response.data[0].token);
				window.localStorage.setItem('email',response.data[0].email);
				window.localStorage.setItem('buildifyUserId',response.data[0].userId);
				navigate('../createaccount/');
			} else {
				setIsloading(false);
				toasterrormsg(response.message);
				console.log("Error uploading documents:", response);
			}
		}
		else{
			console.log(signUpValidation());
		}
	  };

  return (
  <>
   {/* <!--begin::Root--> */}
		<div className="d-flex flex-column flex-root bgImgLogin" id="kt_app_root">
			{/* <!--begin::Page bg image--> */}
			{/* <style>body { background-image: url('../assets/media/auth/bg10.jpeg'); } [data-bs-theme="dark"] body { background-image: url('../assets/media/auth/bg10-dark.jpeg'); }</style> */}
			{/* <!--end::Page bg image--> */}
			{/* <!--begin::Authentication - Sign-up --> */}
			<div className="d-flex flex-column flex-lg-row flex-column-fluid">
				{/* <!--begin::Aside--> */}
				<div className="d-flex flex-lg-row-fluid">
					{/* <!--begin::Content--> */}
					<div className="d-flex flex-column flex-center pb-0 pb-lg-10 p-10 w-100">
						{/* <!--begin::Image--> */}
						<img className="theme-light-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20" src={agencyimg} alt="" />
						{/* <img className="theme-dark-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20" src="../assets/media/auth/agency-dark.png" alt="" /> */}
						{/* <!--end::Image--> */}
						{/* <!--begin::Title--> */}
							<img className="theme-light-show mx-auto mw-100 w-250px" src={logo} alt="logo" />
						<h1 className="text-gray-800 fs-2qx fw-bold text-center mb-7">Fast, Efficient and Productive</h1>
						{/* <!--end::Title--> */}
						{/* <!--begin::Text--> */}
						{/* <div className="text-gray-600 fs-base text-center fw-semibold">In this kind of post, */}
						{/* <Link to="" className="opacity-75-hover text-primary me-1">the blogger</Link>introduces a person they’ve interviewed */}
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
								<div className="form w-100">
									{/* <!--begin::Heading--> */}
									<div className="text-center mb-11">
										{/* <!--begin::Title--> */}
										<h1 className="text-dark fw-bolder mb-3">Sign Up</h1>
										{/* <!--end::Title--> */}
										{/* <!--begin::Subtitle--> */}
										<div className="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div>
										{/* <!--end::Subtitle=--> */}
									</div>
									{/* <!--begin::Heading--> */}
									{/* <!--begin::Login options--> */}
									<div className="row g-3 mb-9">
										{/* <!--begin::Col--> */}
										<div className="col-md-6">
											{/* <!--begin::Google link=--> */}
											<Link to="" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
											<img alt="Logo"  src={googleimg} className="h-15px me-3" />Sign in with Google</Link>
											{/* <!--end::Google link=--> */}
										</div>
										{/* <!--end::Col--> */}
										{/* <!--begin::Col--> */}
										<div className="col-md-6">
											{/* <!--begin::Google link=--> */}
											<Link to="" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
											{/* <img alt="Logo" src={appleimg} className="theme-light-show h-15px me-3" /> */}
											<img alt="Logo" src={appleimg} className="theme-dark-show h-15px me-3" />Sign in with Apple
                                            </Link>
											{/* <!--end::Google link=--> */}
										</div>
										{/* <!--end::Col--> */}
									</div>
									{/* <!--end::Login options--> */}
									{/* <!--begin::Separator--> */}
									<div className="separator separator-content my-14">
										<span className="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
									</div>
									{/* <!--end::Separator--> */}
									{/* <!--begin::Input group--> */}
									<div className="form w-100">
										{/* <!--begin::Col--> */}
                                        <div className="col-lg-8 mb-8">
										<label className="form-label mb-5 required">Upload Profile Picture</label>
                                            {/* <!--begin::Image input--> */}
                                            <div className="image-input image-input-outline blankImg" data-kt-image-input="true">
                                                {/* <!--begin::Preview existing avatar--> */}
                                                <div className="image-input-wrapper w-125px h-125px avatar330-1" alt='profile' style={{backgroundImage:`url(${viewProfile != "" ? viewProfile : blank})`}}></div>
                                                {/* end::Preview existing avatar */}

                                                {/* <!--begin::Label--> */}
                                                <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                                    <i className="ki-outline ki-pencil fs-7"></i>
                                                    {/* <!--begin::Inputs--> */}
                                                    <input type="file" name="profilePicture" ref={inputfileref}  onChange={(e) => {handleImageChange(e);removeError("profilePicture");}} accept=".png, .jpg, .jpeg"/>
                                                    {/* <input type="hidden" name="avatar_remove"  /> */}
                                                    {/* <!--end::Inputs--> */}
                                                </label>
                                                {/* <!--end::Label--> */}
                                                {/* <!--begin::Cancel--> */}
                                                <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                                    <i className="ki-outline ki-cross fs-2"></i>
                                                </span>
                                                {/* <!--end::Cancel--> */}
                                                {/* <!--begin::Remove--> */}
                                                {/* <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar" onClick={() => handleRemove2(0)}>
                                                    <i className="ki-outline ki-cross fs-2"></i>
                                                </span> */}
                                                {/* <!--end::Remove--> */}
                                            </div>
                                            {/* <!--end::Image input--> */}
                                            {/* <!--begin::Hint--> */}
                                            <div className="form-text">Allowed file types: png, jpg, jpeg.</div>
											<div className='error_text'>{errors[0].profilePicture}</div>

                                            {/* <!--end::Hint--> */}
                                        </div>
                                        {/* <!--end::Col--> */}
									<div className="fv-row mb-8">
										{/* <!--begin::Email--> */}
										{/* <input type="text" placeholder="Email" name="email" autocomplete="off" className="form-control bg-transparent" /> */}

										{/* {/ <!--begin::Email--> /} */}
										<input
										type="text"
										placeholder="Email"
										name="email"
										autoComplete="off"
										className="form-control bg-transparent"
										value={email}
										onChange={(e) => {setEmail(e.target.value);removeError("email");}}
										/>
										{/* {/ Display error message if validation fails /} */}
										<div className='error_text'>{errors[0].email}</div>

										{/* {/ <!--end::Email--> /} */}

									</div>
									{/* <!--begin::Input group--> */}
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
													value={password}
													onChange={(e) => {setPassword(e.target.value);removeError("password");}}
													/>
													{/* {/ Display error message if validation fails /} */}
													<div className='error_text'>{errors[0].password}</div>
													
													{/* end::password */}
											</div>
											{/* <!--end::Input wrapper--> */}
											{/* <!--begin::Meter--> */}
											{/* <div className="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
												<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
												<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
												<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
												<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
											</div> */}
											{/* <!--end::Meter--> */}
										</div>
										{/* <!--end::Wrapper--> */}
										{/* <!--begin::Hint--> */}
										{/* <div className="text-muted">Use 8 or more characters with a mix of letters, numbers & symbols.</div> */}
										{/* <!--end::Hint--> */}
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
													onClick={handleTogglePassword1}
												>
													{showPassword1 ? (
													<FontAwesomeIcon icon={faEye} />
													) : (
													<FontAwesomeIcon icon={faEyeSlash} />
													)}
												</span>
													{/* begin::password */}
													<input
													type={showPassword1 ? 'text' : 'password'}
													placeholder="Repeat Password"
													name="repeat-password"
													autoComplete="off"
													className="form-control bg-transparent"
													value={repeatPassword}
													onChange={(e) => {setRepeatPassword(e.target.value);removeError("repeatPassword");}}
													/>
													<div className='error_text'>{errors[0].repeatPassword}</div>
													
													{/* end::password */}
											</div>
											{/* <!--end::Input wrapper--> */}
											{/* <!--begin::Meter--> */}
											{/* <div className="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
												<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
												<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
												<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
												<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
											</div> */}
											{/* <!--end::Meter--> */}
										</div>
										{/* <!--end::Wrapper--> */}
										{/* <!--begin::Hint--> */}
										{/* <div className="text-muted">Use 8 or more characters with a mix of letters, numbers & symbols.</div> */}
										{/* <!--end::Hint--> */}
									</div>
									{/* <!--end::Input group=--> */}
									{/* <!--begin::Accept--> */}
									<div className="fv-row mb-8">
										<label className="form-check form-check-inline">
											<input className="form-check-input" type="checkbox" name="toc" onChange={(e) => {setToc(e.target.value);removeError("toc");}} value="1"/>
											<span className="form-check-label fw-semibold text-gray-700 fs-base ms-1">I Accept the
											<Link to="" className="ms-1 link-primary">Terms</Link></span>
										</label><br/>
										<div className='error_text'>{errors[0].toc}</div>
									</div>
									{/* <!--end::Accept--> */}
									{/* <!--begin::Submit button--> */}
									<div className="d-grid mb-10">
										<button className="btn form-control btnButton" onClick={signUpApi}>
											{isloading &&(
										  		<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
											)}
										  <span className='mx-4'>Sign up</span>
										</button>
									</div>
									{/* <!--end::Submit button--> */}
									</div>
									{/* <!--begin::Sign up--> */}
									<div className="text-gray-500 text-center fw-semibold fs-6">Already have an Account?
									<Link to="../login/" className="link-primary fw-semibold">Sign in</Link></div>
									{/* <!--end::Sign up--> */}
								</div>
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
			{/* <!--end::Authentication - Sign-up--> */}
		</div>
		{/* <!--end::Root--> */}
		<ToastContainer />
    </>
  )
}
