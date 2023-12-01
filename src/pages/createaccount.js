// import React from 'react'
import React, { useState, useEffect, useRef } from 'react';
import { fetchDataPrivate,toasterrormsg,toastsuccessmsg,fetchData } from '../config/Reausable';
import mobileImg from "../assets/images/smartphone-2.svg";
import logo from "../assets/images/logoWhite.png";
import {Link, useNavigate} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserSecret, faScrewdriverWrench, faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Select from "react-select";


export default function Createaccount() {
	
    const navigate = useNavigate();

    useEffect(() =>{
        const userId = window.localStorage.getItem("buildifyUserId");
        if (userId !== "" && userId !== null && userId !== undefined) {
                
        }else{
        navigate("/");
        }
   },[]);

    // state start
    const [selectedRadio, setSelectedRadio] = useState('OWNER');
    window.localStorage.setItem('accountType',selectedRadio)
    
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [mobileNumber,setMobileNumber] = useState("");
    const [mobileNumber2,setMobileNumber2] = useState("");
    const [licenceNumber,setLicenceNumber] = useState("");
    const [description,setDescription] = useState("");
    const [contactNo,setContactNo] = useState("");
    const [contactNo2,setContactNo2] = useState("");
    // const [code_1, setCode_1] = useState('');
    // const [code_2, setCode_2] = useState('');
    // const [code_3, setCode_3] = useState('');
    // const [code_4, setCode_4] = useState('');
    // const [code_5, setCode_5] = useState('');
    // const [code_6, setCode_6] = useState('');

    // const otp = `${code_1}${code_2}${code_3}${code_4}${code_5}${code_6}`;
    const [inputRefs, setInputRefs] = useState([
        
        {
          "value": "",
          "ref": useRef(null)
        },
        {
          "value": "",
          "ref": useRef(null)
        },
        {
          "value": "",
          "ref": useRef(null)
        },
        {
          "value": "",
          "ref": useRef(null)
        },
        {
          "value": "",
          "ref": useRef(null)
        },
        {
          "value": "",
          "ref": useRef(null)
        },
        
      ])
    const otp = inputRefs.map(obj => obj.value).join('');
    

    const [category,setCategory] = useState([]);
    const [categorySelectedOptions,setCetegorySelectedOptions] = useState([]);
	const [countryId, setCountryId] = useState(null);
    const [countryName, setCountryName] = useState([]);
	const [stateId, setStateId] = useState(null);
    const [stateName, setStateName] = useState([]);
	const [cityId, setCityId] = useState(null);
    const [cityName, setCityName] = useState([]);
    const [businessName,setBusinessName] = useState("");
	const [businessStartDate, setBusinessStartDate] = useState("");
	const [businessAddressLine1, setBusinessAddressLine1] = useState("");
	const [businessAddressLine2, setBusinessAddressLine2] = useState("");
	const [zipode, setZipcode] = useState("");
	const [website, setWebsite] = useState("");
    
    // set error state
    const [errors,setErrors]  = useState([{
        firstName: '',
        lastName: '',
        mobileNumber:'',
        mobileNumber2:'',
        contactNo: '',
        contactNo2: '',
        licenceNumber:'',
        description:'',
        businessName:'',
        category:'',
        businessStartDate:'',
        country:'',
        state:'',
        city:'',
        businessAddressLine1:'',
        businessAddressLine2:'',
        zipcode:'',
        website:''
        }]);
       
    // remove validation function
    const removeError = (err) =>{
        var tmp = [...errors];
        tmp[0][err] = "";
        setErrors(tmp);
    }

    const categoryApi = async () => {

        var response = await fetchData('get',"public/categoryList", {});
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

        var response = await fetchData('get',"public/countryList", {});
        if (response.status === 200) {

            setCountryName(response.data);
            
        } else {
            console.log(response);
            toasterrormsg(response.message);
        }
    }

    // state api call
    const stateApi = async (countryId) => {

        // let data = {};
        var response = await fetchData('get',`public/stateList/${countryId != "" ? countryId : ""}`, {});
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
        var response = await fetchData('get',`public/cityList/${stateId != "" ? stateId : ""}`, {});
        if (response.status === 200) {

            setCityName(response.data);
            
        } else {
            console.log(response);
            toasterrormsg(response.message);
        }
    }
    

    const countryOption = countryName.map(countryOp => ({
        value: countryOp.countryId,
        label: countryOp.name,
      }));
    const stateOption = stateName.map(stateOp => ({
        value: stateOp.stateId,
        label: stateOp.name,
      }));
    
    const cityOption = cityName.map(cityOp => ({
        value: cityOp.cityId,
        label: cityOp.name,
      }));

    //  set account type api call here

    const handleContinue = async() => {

        let setAccountType = {
            "accountType": selectedRadio
        };

        var response = await fetchDataPrivate('post',"api/setAccountType",setAccountType);

        if(response.status === 200){

            const step1Content = document.querySelector('[data-kt-stepper-element="content"]');
            const step2Content = document.querySelector('[data-kt-stepper-element="content"][check="step2"]');
            
            if (step1Content && step2Content) {
                step1Content.style.display = 'none';
                step2Content.style.display = 'block';
            }
            if (selectedRadio === "OWNER") {
                const ownerstep1 = document.getElementById('ownerstep1');
                const ownerstep2 = document.getElementById('ownerstep2');
                ownerstep1.classList.remove('current');
                ownerstep1.classList.add('completed');
                ownerstep2.classList.remove('pending');
                ownerstep2.classList.add('current');
            } else if (selectedRadio === "BUILDER" || selectedRadio === "SUBCONTRACTOR") {
                const builderstep1 = document.getElementById('builderstep1');
                const builderstep2 = document.getElementById('builderstep2');
                builderstep1.classList.remove('current');
                builderstep1.classList.add('completed');
                builderstep2.classList.remove('pending');
                builderstep2.classList.add('current');
            }
        }
        else{
            console.log(response);
            toasterrormsg(response.message);
            
        }
    };
    const handlePrevious = () => {
        const step1Content = document.querySelector('[data-kt-stepper-element="content"]');
        // const step1btn = document.getElementById('acc_type');
        const step2Content = document.querySelector('[data-kt-stepper-element="content"][check="step2"]');
        
        if (step1Content && step2Content) {
            step1Content.style.display = 'block';
            // step1btn.style.backgroundColor = 'none'
            step2Content.style.display = 'none';
        }
		if (selectedRadio === "OWNER") {
            const ownerstep1 = document.getElementById('ownerstep1');
            const ownerstep2 = document.getElementById('ownerstep2');
            ownerstep1.classList.remove('completed');
            ownerstep1.classList.add('current');
            ownerstep2.classList.remove('current');
            ownerstep2.classList.add('pending');
        } else if (selectedRadio === "BUILDER" || selectedRadio === "SUBCONTRACTOR") {
            const builderstep1 = document.getElementById('builderstep1');
            const builderstep2 = document.getElementById('builderstep2');
            builderstep1.classList.remove('completed');
            builderstep1.classList.add('current');
            builderstep2.classList.remove('current');
            builderstep2.classList.add('pending');
        }
    };
    

    // owner account info validation
    const ownerAccInfoValidation = () => {
        var isValid = true;
        var errorTmp = [...errors];
        
        if (firstName == "" || firstName == undefined || firstName == null) {
            errorTmp[0].firstName = 'First Name is required';
            isValid = false;
        } else if(!/^[\p{L}\s]*$/u.test(firstName)){
            errorTmp[0].firstName = 'Special Characters or Numbers not allowed.';
            isValid = false;
        }

        if (lastName == "" || lastName == undefined || lastName == null) {
            errorTmp[0].lastName = 'Last Name is required';
            isValid = false;
        } else if(!/^[\p{L}\s]*$/u.test(lastName)){
            errorTmp[0].lastName = 'Special Characters or Numbers not allowed.';
            isValid = false;
        }


        if (contactNo == "" || contactNo == undefined || contactNo == null) {
            errorTmp[0].contactNo = 'Contact Number is required';
            isValid = false;
        } else if(!Number(contactNo)){
            errorTmp[0].contactNo = 'Only Numbers is allowed.';
            isValid = false;
        }else if((contactNo != "" && contactNo != undefined || contactNo != null) && contactNo.length < 8){
            errorTmp[0].contactNo = 'Minimum 8 Digit Required';
            isValid = false;
        }

        // if((contactNo2 != "" && contactNo2 != undefined || contactNo2 != null) && contactNo2.length < 8){
        //     errorTmp[0].contactNo2 = 'Minimum 8 Digit Required';
        //     isValid = false;
        // }

        setErrors(errorTmp);
        return isValid;
    };
    
    // owner account info api call
    const handleContinue2 = async() => {
        
        if (ownerAccInfoValidation()) {

            let ownerAccountInfo = {
                    "firstName": firstName,
                    "lastName": lastName,
                    "mobileNumber": contactNo,
                    "mobileNumber2": contactNo2,
                    "licenceNumber": "",
                    "countryId": "",
                    "stateId": "",
                    "description": "",
                    "businessName": "",
                    "priceType": "",
                    "price": ""
                };

            var response = await fetchDataPrivate('post',"api/setaccountInfo",ownerAccountInfo);

            if(response.status === 200){
                

                const step1Content = document.querySelector('[data-kt-stepper-element="content"][check="step2"]');
                // const step1btn = document.getElementById('acc_type');
                const step2Content = document.querySelector('[data-kt-stepper-element="content"][check="step4"]');
                
                if (step1Content && step2Content) {
                    step1Content.style.display = 'none';
                    // step1btn.style.backgroundColor = 'none'
                    step2Content.style.display = 'block';
                }
				if (selectedRadio === "OWNER") {
                const ownerstep2 = document.getElementById('ownerstep2');
                const ownerstep4 = document.getElementById('ownerstep4');
                ownerstep2.classList.remove('current');
                ownerstep2.classList.add('completed');
                ownerstep4.classList.remove('pending');
                ownerstep4.classList.add('current');
            }
            }else{
                console.log(response);
                toasterrormsg(response.message);
                
            }
            
        }

    };
    const handlePrevious2 = () => {
        const step1Content = document.querySelector('[data-kt-stepper-element="content"][check="step3"]');
        // const step1btn = document.getElementById('acc_type');
        const step2Content = document.querySelector('[data-kt-stepper-element="content"][check="step2"]');
        
        if (step1Content && step2Content) {
            step1Content.style.display = 'none';
            step2Content.style.display = 'block';
        }
			// if (selectedRadio === "OWNER") {
                
            // } else 
            if (selectedRadio === "BUILDER" || selectedRadio === "SUBCONTRACTOR") {
                const builderstep2 = document.getElementById('builderstep2');
                const builderstep3 = document.getElementById('builderstep3');
                builderstep2.classList.remove('completed');
                builderstep2.classList.add('current');
                builderstep3.classList.remove('current');
                builderstep3.classList.add('three');
            }
    };
    // verify otp call
    const handleContinue3 = async() => {

        let verifyOtp = { "otp": otp };

        var response = await fetchDataPrivate('post',"api/verifyOTP", verifyOtp);
        if (response.status === 200) {
            window.localStorage.setItem('accountType',response.data[0].accountType);
            
            const step1Content = document.querySelector('[data-kt-stepper-element="content"][check="step5"]');
            
            // const step1btn = document.getElementById('acc_type');
            const step2Content = document.querySelector('[data-kt-stepper-element="content"][check="step4"]');
             
            if (step1Content && step2Content) {
                step1Content.style.display = 'block';
                step2Content.style.display = 'none';
            }
			if (selectedRadio === "OWNER") {
                const ownerstep4 = document.getElementById('ownerstep4');
                const ownerstep5 = document.getElementById('ownerstep5');
                ownerstep4.classList.remove('current');
                ownerstep4.classList.add('completed');
                ownerstep5.classList.remove('pending');
                ownerstep5.classList.add('current');
            }
            if (selectedRadio === "BUILDER" || selectedRadio === "SUBCONTRACTOR") {
                const builderstep4 = document.getElementById('builderstep4');
                const builderstep5 = document.getElementById('builderstep5');
                builderstep4.classList.remove('current');
                builderstep4.classList.add('completed');
                builderstep5.classList.remove('pending');
                builderstep5.classList.add('current');
            }
        } else {
            toasterrormsg(response.message);
        }
    };
    const handlePrevious3 = () => {
        const step1Content = document.querySelector('[data-kt-stepper-element="content"][check="step4"]');
        // const step1btn = document.getElementById('acc_type');
        const step2Content = document.querySelector('[data-kt-stepper-element="content"][check="step2"]');
        
        if (step1Content && step2Content) {
            step1Content.style.display = 'none';
            step2Content.style.display = 'block';
        }
		if (selectedRadio === "OWNER") {
            const ownerstep2 = document.getElementById('ownerstep2');
            const ownerstep4 = document.getElementById('ownerstep4');
            ownerstep2.classList.remove('completed');
            ownerstep2.classList.add('current');
            ownerstep4.classList.remove('current');
            ownerstep4.classList.add('pending');
        } else if (selectedRadio === "BUILDER" || selectedRadio === "SUBCONTRACTOR") {
            const builderstep2 = document.getElementById('builderstep2');
            const builderstep3 = document.getElementById('builderstep3');
            builderstep2.classList.remove('completed');
            builderstep2.classList.add('current');
            builderstep3.classList.remove('current');
            builderstep3.classList.add('pending');
        }
    };
    const handlePrevious4 = () => {
        const step1Content = document.querySelector('[data-kt-stepper-element="content"][check="step5"]');
        // const step1btn = document.getElementById('acc_type');
        const step2Content = document.querySelector('[data-kt-stepper-element="content"][check="step4"]');
        
        if (step1Content && step2Content) {
            step1Content.style.display = 'none';
            step2Content.style.display = 'block';
        }
		if (selectedRadio === "OWNER") {
            const ownerstep4 = document.getElementById('ownerstep4');
            const ownerstep5 = document.getElementById('ownerstep5');
            ownerstep4.classList.remove('completed');
            ownerstep4.classList.add('current');
            ownerstep5.classList.remove('current');
            ownerstep5.classList.add('pending');
        }else if (selectedRadio === "BUILDER" || selectedRadio === "SUBCONTRACTOR") {
            const builderstep4 = document.getElementById('builderstep4');
            const builderstep5 = document.getElementById('builderstep5');
            builderstep4.classList.remove('completed');
            builderstep4.classList.add('current');
            builderstep5.classList.remove('current');
            builderstep5.classList.add('pending');
        }
    };
    
    // builder and sub contractor account info validation
    const builderAccInfoValidation = () => {

        var isValid = true;
        var errorTmp = [...errors];
        
        if (firstName == "" || firstName == undefined || firstName == null) {
            errorTmp[0].firstName = 'First Name is required';
            isValid = false;
        } else if(!/^[\p{L}\s]*$/u.test(firstName)){
            errorTmp[0].firstName = 'Special Characters or Numbers not allowed.';
            isValid = false;
        }

        if (lastName == "" || lastName == undefined || lastName == null) {
            errorTmp[0].lastName = 'Last Name is required';
            isValid = false;
        } else if(!/^[\p{L}\s]*$/u.test(lastName)){
            errorTmp[0].lastName = 'Special Characters or Numbers not allowed.';
            isValid = false;
        }

        if (licenceNumber == "" || licenceNumber == undefined || licenceNumber == null) {
            errorTmp[0].licenceNumber = 'License Number is required';
            isValid = false;
        }

        if (mobileNumber == "" || mobileNumber == undefined || mobileNumber == null) {
            errorTmp[0].mobileNumber = 'Contact Number is required';
            isValid = false;
        } else if(!Number(mobileNumber)){
            errorTmp[0].mobileNumber = 'Only Numbers is allowed.';
            isValid = false;
        }else if((mobileNumber != "" || mobileNumber != undefined || mobileNumber != null) && mobileNumber.length < 8){
            errorTmp[0].mobileNumber = 'Minimum 8 Digit Required';
            isValid = false;
        }

        if(mobileNumber2 > 0 && mobileNumber2.length < 8){
            errorTmp[0].mobileNumber2 = 'Minimum 8 Digit Required';
            isValid = false;
        }
        
        if (description == "" || description == undefined || description == null) {
            errorTmp[0].description = 'Description is required';
            isValid = false;
        }
        
        setErrors(errorTmp);
        return isValid;
    };

    // builder and sub contractor account info api call
    const handleContinue5 = async() => {

        if(builderAccInfoValidation()){

            let builderAccountInfo = {
                "firstName": firstName,
                "lastName": lastName,
                "mobileNumber": mobileNumber,
                "mobileNumber2": mobileNumber2,
                "licenceNumber": licenceNumber,
                "countryId": "",
                "stateId": "",
                "description": description,
                "businessName": "",
                "priceType": "",
                "price": ""
            };
    
            var response = await fetchDataPrivate('post',"api/setaccountInfo",builderAccountInfo);
    
            if(response.status === 200){
                    
    
                const step1Content = document.querySelector('[data-kt-stepper-element="content"][check="step3"]');
                // const step1btn = document.getElementById('acc_type');
                const step2Content = document.querySelector('[data-kt-stepper-element="content"][check="step2"]');
                
                if (step1Content && step2Content) {
                    step1Content.style.display = 'block';
                    // step1btn.style.backgroundColor = 'none'
                    step2Content.style.display = 'none';
                }
				 if (selectedRadio === "BUILDER" || selectedRadio === "SUBCONTRACTOR") {
					const builderstep2 = document.getElementById('builderstep2');
					const builderstep3 = document.getElementById('builderstep3');
					builderstep2.classList.remove('current');
					builderstep2.classList.add('completed');
					builderstep3.classList.remove('pending');
					builderstep3.classList.add('current');
				}
            }else{
                console.log(response);
                toasterrormsg(response.message);
            }
        }
        

    };
    const handlePrevious6 = () => {
        const step1Content = document.querySelector('[data-kt-stepper-element="content"][check="step3"]');
        
        // const step1btn = document.getElementById('acc_type');
        const step2Content = document.querySelector('[data-kt-stepper-element="content"][check="step4"]');
         
        if (step1Content && step2Content) {
            step1Content.style.display = 'block';
            step2Content.style.display = 'none';
        }
		if (selectedRadio === "BUILDER" || selectedRadio === "SUBCONTRACTOR") {
            const builderstep3 = document.getElementById('builderstep3');
            const builderstep4 = document.getElementById('builderstep4');
            builderstep3.classList.remove('completed');
            builderstep3.classList.add('current');
            builderstep4.classList.remove('current');
            builderstep4.classList.add('pending');
        }
    };

    // builder and sub contractor business info validation
    const builderBusinessInfoValidation = () => {

        var isValid = true;
        var errorTmp = [...errors];
        
        if (businessName == "" || businessName == undefined || businessName == null) {
            errorTmp[0].businessName = 'Business Name is required';
            isValid = false;
        }

        if (categorySelectedOptions == "" || categorySelectedOptions == undefined || categorySelectedOptions == null) {
            errorTmp[0].category = 'Please Select Category';
            isValid = false;
        } 

        if (businessStartDate == "" || businessStartDate == undefined || businessStartDate == null) {
            errorTmp[0].businessStartDate = 'Please Select Date';
            isValid = false;
        }

        if (countryId == "" || countryId == undefined || countryId == null) {
            errorTmp[0].country = 'Please Select Country';
            isValid = false;
        }
        
        if (stateId == "" || stateId == undefined || stateId == null) {
            errorTmp[0].state = 'Please Select State';
            isValid = false;
        }

        if (cityId == "" || cityId == undefined || cityId == null) {
            errorTmp[0].city = 'Please Select City';
            isValid = false;
        }
        
        if (businessAddressLine1 == "" || businessAddressLine1 == undefined || businessAddressLine1 == null) {
            errorTmp[0].businessAddressLine1 = 'Address is required';
            isValid = false;
        }

        if (zipode == "" || zipode == undefined || zipode == null) {
            errorTmp[0].zipcode = 'Zipcode is required';
            isValid = false;
        }

        setErrors(errorTmp);
        return isValid;
    };

    // builder and sub contractor business info api call
    const handleContinue6 = async() => {

        if(builderBusinessInfoValidation()){

            let builderBusinessInfo = {
                "countryId": `${countryId.value}`,
                "stateId": `${stateId.value}`,
                "cityId": `${cityId.value}`,
                "categoryId": categorySelectedOptions.map(option => option.value).join(","),
                "businessDate": businessStartDate,
                "addressLine1": businessAddressLine1,
                "addressLine2": businessAddressLine2,
                "website": website,
                "zipcode": zipode,
                "businessName": businessName,
            };
    
            var response = await fetchDataPrivate('post',"api/setBusinessDetails",builderBusinessInfo);
            console.log("builderBusinessInfo ==",builderBusinessInfo);

    
            if(response.status === 200){
                
                console.log(response);
                const step1Content = document.querySelector('[data-kt-stepper-element="content"][check="step4"]');
                
                // const step1btn = document.getElementById('acc_type');
                const step2Content = document.querySelector('[data-kt-stepper-element="content"][check="step3"]');
                
                if (step1Content && step2Content) {
                    step1Content.style.display = 'block';
                    step2Content.style.display = 'none';
                }
				if (selectedRadio === "BUILDER" || selectedRadio === "SUBCONTRACTOR") {
                const builderstep3 = document.getElementById('builderstep3');
                const builderstep4 = document.getElementById('builderstep4');
                builderstep3.classList.remove('current');
                builderstep3.classList.add('completed');
                builderstep4.classList.remove('pending');
                builderstep4.classList.add('current');
            }
            }
            else{
                console.log(response);
                toasterrormsg(response.message);
            }
        }
        
    };

    // resend otp api call

    const resendOTPApi = async () => {

        var response = await fetchDataPrivate('post',"api/resendOTP", {});
        if (response.status === 200) {
            // window.localStorage.setItem('token',response.data[0].token);
            toastsuccessmsg(response.message);
        } else {
            toasterrormsg(response.message);
        }
    }

    const handleKeyDown = (e, currentIndex) => {
    
        if (e.key === 'Backspace') {
          // 👇️ your logic here
    
          // Your input change logic here
          const newInputValues = [...inputRefs];
          newInputValues[currentIndex].value = ""
    
          setInputRefs(newInputValues);

          if (currentIndex > 0) {
            // Focus on the next input
            
            newInputValues[currentIndex - 1].ref.current.focus();
          }
    
        }
        else {
    
          if (e.key.length == 1) {
            const newInputValues = [...inputRefs];
            newInputValues[currentIndex].value = e.key;
    
            setInputRefs(newInputValues);
            console.log("newInputValues ",newInputValues);
    
            if (currentIndex < inputRefs.length - 1) {
              // Focus on the next input
              inputRefs[currentIndex + 1].ref.current.focus();
            }
          }
        }
      };

    useEffect(() => {
        ownerhide(selectedRadio);
        categoryApi();
        countryApi();
    }, [selectedRadio]);

    function ownerhide(selectedRadio) {
        const ownerForm = document.querySelector(".OwnerForm");
        const builderForm = document.querySelector(".BuilderForm");

        if (selectedRadio === "OWNER") {
            ownerForm.style.display = "block";
            builderForm.style.display = "none";
        } else if (selectedRadio === "BUILDER" || selectedRadio === "SUBCONTRACTOR") {
            ownerForm.style.display = "none";
            builderForm.style.display = "block";
        }
    }

    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.value);
    };

    document.title = 'Buildify AI | Create Account'

    return (
        <>
            {/* <!--begin::Root--> */}
            <div className="d-flex flex-column flex-root" id="kt_app_root">
                {/* <!--begin::Authentication - Multi-steps--> */}
                <div className="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column stepper-multistep"
                    id="kt_create_account_stepper">
                    {/* <!--begin::Aside--> */}
                    <div className="d-flex flex-column flex-lg-row-auto w-lg-350px w-xl-500px">
                        <div className="d-flex flex-column position-lg-fixed top-0 bottom-0 w-lg-350px w-xl-500px scroll-y bgi-size-cover bgi-position-center createaccoutn">
                            {/* <!--begin::Header--> */}
                            <div className="d-flex flex-center py-10 py-lg-20 mt-lg-20">
                                {/* <!--begin::Logo--> */}
                                <Link to="/">
                                    <img alt="Logo" src={logo} className="h-70px" />
                                </Link>
                                {/* <!--end::Logo--> */}
                            </div>
                            {/* <!--end::Header--> */}
                            {/* <!--begin::Body--> */}
                            <div className="d-flex flex-row-fluid justify-content-center p-10">
                                {/* <!--begin::Nav--> */}
                            { selectedRadio == "OWNER" ? 
                                <div className="stepper-nav OwnerStap">
                                    {/* <!--begin::Step 1--> */}
                                    <div className="stepper-item current" id="ownerstep1" data-kt-stepper-element="nav">
                                        {/* <!--begin::Wrapper--> */}
                                        <div className="stepper-wrapper">
                                            {/* <!--begin::Icon--> */}
                                            <div className="stepper-icon rounded-3" id='acc_type'>
                                                <i className="ki-outline ki-check fs-2 stepper-check"></i>
                                                <span className="stepper-number">1</span>
                                            </div>
                                            {/* <!--end::Icon--> */}
                                            {/* <!--begin::Label--> */}
                                            <div className="stepper-label">
                                                <h3 className="stepper-title fs-2">Account Type</h3>
                                                <div className="stepper-desc fw-normal">Select your account type</div>
                                            </div>
                                            {/* <!--end::Label--> */}
                                        </div>
                                        {/* <!--end::Wrapper--> */}
                                        {/* <!--begin::Line--> */}
                                        <div className="stepper-line h-40px"></div>
                                        {/* <!--end::Line--> */}
                                    </div>
                                    {/* <!--end::Step 1--> */}
                                    {/* <!--begin::Step 2--> */}
                                    <div className="stepper-item" id="ownerstep2" data-kt-stepper-element="nav">
                                        {/* <!--begin::Wrapper--> */}
                                        <div className="stepper-wrapper">
                                            {/* <!--begin::Icon--> */}
                                            <div className="stepper-icon rounded-3">
                                                <i className="ki-outline ki-check fs-2 stepper-check"></i>
                                                <span className="stepper-number">2</span>
                                            </div>
                                            {/* <!--end::Icon--> */}
                                            {/* <!--begin::Label--> */}
                                            <div className="stepper-label">
                                                <h3 className="stepper-title fs-2">Account Info</h3>
                                                <div className="stepper-desc fw-normal">Setup your account settings</div>
                                            </div>
                                            {/* <!--end::Label--> */}
                                        </div>
                                        {/* <!--end::Wrapper--> */}
                                        {/* <!--begin::Line--> */}
                                        <div className="stepper-line h-40px"></div>
                                        {/* <!--end::Line--> */}
                                    </div>
                                    {/* <!--end::Step 2--> */}

                                    {/* <!--begin::Step 4--> */}
                                    <div className="stepper-item" id="ownerstep4" data-kt-stepper-element="nav">
                                        {/* <!--begin::Wrapper--> */}
                                        <div className="stepper-wrapper">
                                            {/* <!--begin::Icon--> */}
                                            <div className="stepper-icon">
                                                <i className="ki-outline ki-check fs-2 stepper-check"></i>
                                                <span id="step4" className="stepper-number">3</span>
                                            </div>
                                            {/* <!--end::Icon--> */}
                                            {/* <!--begin::Label--> */}
                                            <div className="stepper-label">
                                                <h3 className="stepper-title">Verification Code</h3>
                                                <div className="stepper-desc fw-normal">The code is sent to Email</div>
                                            </div>
                                            {/* <!--end::Label--> */}
                                        </div>
                                        {/* <!--end::Wrapper--> */}
                                        {/* <!--begin::Line--> */}
                                        <div className="stepper-line h-40px"></div>
                                        {/* <!--end::Line--> */}
                                    </div>
                                    {/* <!--end::Step 4--> */}
                                    {/* <!--begin::Step 5--> */}
                                    <div className="stepper-item" id="ownerstep5" data-kt-stepper-element="nav">
                                        {/* <!--begin::Wrapper--> */}
                                        <div className="stepper-wrapper">
                                            {/* <!--begin::Icon--> */}
                                            <div className="stepper-icon">
                                                <i className="ki-outline ki-check fs-2 stepper-check"></i>
                                                <span id="step5" className="stepper-number">4</span>
                                            </div>
                                            {/* <!--end::Icon--> */}
                                            {/* <!--begin::Label--> */}
                                            <div className="stepper-label">
                                                <h3 className="stepper-title">Completed</h3>
                                                <div className="stepper-desc fw-normal">Your account is created</div>
                                            </div>
                                            {/* <!--end::Label--> */}
                                        </div>
                                        {/* <!--end::Wrapper--> */}
                                    </div>
                                    {/* <!--end::Step 5--> */}
                                </div>
                            :

                                <div className="stepper-nav nonOwnerStap">
                                    {/* <!--begin::Step 1--> */}
                                    <div className="stepper-item current" id="builderstep1" data-kt-stepper-element="nav">
                                        {/* <!--begin::Wrapper--> */}
                                        <div className="stepper-wrapper">
                                            {/* <!--begin::Icon--> */}
                                            <div className="stepper-icon rounded-3">
                                                <i className="ki-outline ki-check fs-2 stepper-check"></i>
                                                <span className="stepper-number">1</span>
                                            </div>
                                            {/* <!--end::Icon--> */}
                                            {/* <!--begin::Label--> */}
                                            <div className="stepper-label">
                                                <h3 className="stepper-title fs-2">Account Type</h3>
                                                <div className="stepper-desc fw-normal">Select your account type</div>
                                            </div>
                                            {/* <!--end::Label--> */}
                                        </div>
                                        {/* <!--end::Wrapper--> */}
                                        {/* <!--begin::Line--> */}
                                        <div className="stepper-line h-40px"></div>
                                        {/* <!--end::Line--> */}
                                    </div>
                                    {/* <!--end::Step 1--> */}
                                    {/* <!--begin::Step 2--> */}
                                    <div className="stepper-item" id="builderstep2" data-kt-stepper-element="nav">
                                        {/* <!--begin::Wrapper--> */}
                                        <div className="stepper-wrapper">
                                            {/* <!--begin::Icon--> */}
                                            <div className="stepper-icon rounded-3">
                                                <i className="ki-outline ki-check fs-2 stepper-check"></i>
                                                <span className="stepper-number">2</span>
                                            </div>
                                            {/* <!--end::Icon--> */}
                                            {/* <!--begin::Label--> */}
                                            <div className="stepper-label">
                                                <h3 className="stepper-title fs-2">Account Info</h3>
                                                <div className="stepper-desc fw-normal">Setup your account settings</div>
                                            </div>
                                            {/* <!--end::Label--> */}
                                        </div>
                                        {/* <!--end::Wrapper--> */}
                                        {/* <!--begin::Line--> */}
                                        <div className="stepper-line h-40px"></div>
                                        {/* <!--end::Line--> */}
                                    </div>
                                    {/* <!--end::Step 2--> */}
                                    {/* <!--begin::Step 3--> */}
                                    <div className="stepper-item three" id="builderstep3" data-kt-stepper-element="nav">
                                        {/* <!--begin::Wrapper--> */}
                                        <div className="stepper-wrapper">
                                            {/* <!--begin::Icon--> */}
                                            <div className="stepper-icon">
                                                <i className="ki-outline ki-check fs-2 stepper-check"></i>
                                                <span id="step3" className="stepper-number">3</span>
                                            </div>
                                            {/* <!--end::Icon--> */}
                                            {/* <!--begin::Label--> */}
                                            <div className="stepper-label">
                                                <h3 className="stepper-title fs-2">Business Details</h3>
                                                <div className="stepper-desc fw-normal">Setup your business details</div>
                                            </div>
                                            {/* <!--end::Label--> */}
                                        </div>
                                        {/* <!--end::Wrapper--> */}
                                        {/* <!--begin::Line--> */}
                                        <div className="stepper-line h-40px"></div>
                                        {/* <!--end::Line--> */}
                                    </div>
                                    {/* <!--end::Step 3--> */}
                                    {/* <!--begin::Step 4--> */}
                                    <div className="stepper-item" id="builderstep4" data-kt-stepper-element="nav">
                                        {/* <!--begin::Wrapper--> */}
                                        <div className="stepper-wrapper">
                                            {/* <!--begin::Icon--> */}
                                            <div className="stepper-icon">
                                                <i className="ki-outline ki-check fs-2 stepper-check"></i>
                                                <span id="step4" className="stepper-number">4</span>
                                            </div>
                                            {/* <!--end::Icon--> */}
                                            {/* <!--begin::Label--> */}
                                            <div className="stepper-label">
                                                <h3 className="stepper-title">Verification Code</h3>
                                                <div className="stepper-desc fw-normal">The code is sent to Email</div>
                                            </div>
                                            {/* <!--end::Label--> */}
                                        </div>
                                        {/* <!--end::Wrapper--> */}
                                        {/* <!--begin::Line--> */}
                                        <div className="stepper-line h-40px"></div>
                                        {/* <!--end::Line--> */}
                                    </div>
                                    {/* <!--end::Step 4--> */}
                                    {/* <!--begin::Step 5--> */}
                                    <div className="stepper-item" id="builderstep5" data-kt-stepper-element="nav">
                                        {/* <!--begin::Wrapper--> */}
                                        <div className="stepper-wrapper">
                                            {/* <!--begin::Icon--> */}
                                            <div className="stepper-icon">
                                                <i className="ki-outline ki-check fs-2 stepper-check"></i>
                                                <span id="step5" className="stepper-number">5</span>
                                            </div>
                                            {/* <!--end::Icon--> */}
                                            {/* <!--begin::Label--> */}
                                            <div className="stepper-label">
                                                <h3 className="stepper-title">Completed</h3>
                                                <div className="stepper-desc fw-normal">Your account is created</div>
                                            </div>
                                            {/* <!--end::Label--> */}
                                        </div>
                                        {/* <!--end::Wrapper--> */}
                                    </div>
                                    {/* <!--end::Step 5--> */}
                                </div>
                            }

                                {/* <!--end::Nav--> */}
                            </div>
                            {/* <!--end::Body--> */}
                            {/* <!--begin::Footer--> */}
                            {/* <div className="d-flex flex-center flex-wrap px-5 py-10"> */}
                                {/* <!--begin::Links--> */}
                                {/* <div className="d-flex fw-normal"> */}
                                    {/* <Link to="/" className="text-success px-5" target="_blank">Terms</Link> */}
                                    {/* <Link to="/" className="text-success px-5" target="_blank">Contact Us</Link> */}
                                {/* </div> */}
                                {/* <!--end::Links--> */}
                            {/* </div> */}
                            {/* <!--end::Footer--> */}
                        </div>
                    </div>
                    {/* <!--begin::Aside--> */}
                    {/* <!--begin::Body--> */}
                    <div className="d-flex flex-column flex-lg-row-fluid py-10">
                        {/* <!--begin::Content--> */}
                        <div className="d-flex flex-center flex-column flex-column-fluid">
                            {/* <!--begin::Wrapper--> */}
                            <div className="w-lg-650px w-xl-700px p-10 p-lg-15 mx-auto">
                                {/* <!--begin::Form--> */}
                            {/* <form className="my-auto pb-5" method="POST" noValidate="noValidate" id="kt_create_account_form"> */}
                                <div className="my-auto pb-5">
                                    {/* <!--begin::Step 1--> */}
                                    <div className="current" data-kt-stepper-element="content">
                                        {/* <!--begin::Wrapper--> */}
                                        <div className="w-100">
                                            {/* <!--begin::Heading--> */}
                                            <div className="pb-10 pb-lg-15">
                                                {/* <!--begin::Title--> */}
                                                <h2 className="fw-bold d-flex align-items-center text-dark">Choose Account Type
                                                </h2>
                                                {/* <!--end::Title--> */}
                                                {/* <!--begin::Notice--> */}
                                                <div className="text-muted fw-semibold fs-6">If you need more info, please check out
                                                    <Link to="/" className="link-primary fw-bold">Help Page</Link>.
                                                </div>
                                                {/* <!--end::Notice--> */}
                                            </div>
                                            {/* <!--end::Heading--> */}
                                            {/* <!--begin::Input group--> */}
                                            <div className="fv-row">
                                                {/* <!--begin::Row--> */}
                                                <div className="row">
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-lg-6" onClick={() => ownerhide('OWNER')}>
                                                        {/* <!--begin::Option--> */}
                                                        <input type="radio" className="btn-check" name="account_type" value="OWNER"
                                                             checked={selectedRadio === 'OWNER'} id="Owner" onChange={handleRadioChange} />
                                                        <label
                                                            className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-10"
                                                            htmlFor="Owner">
                                                             <i className="fa-solid fa-house fs-3x me-5"></i>
                                                            {/* <!--begin::Info--> */}
                                                            <span className="d-block fw-semibold text-start">
                                                                <span className="text-dark fw-bold d-block fs-4 mb-2">I'm Owner</span>
                                                            </span>
                                                            {/* <!--end::Info--> */}
                                                        </label>
                                                        {/* <!--end::Option--> */}
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-lg-6" onClick={() => ownerhide('BUILDER')}>
                                                        {/* <!--begin::Option--> */}
                                                        <input type="radio" className="btn-check" name="account_type"
                                                            value="BUILDER" id="Builder"  checked={selectedRadio === 'BUILDER'} onChange={handleRadioChange} />
                                                        <label
                                                            className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center"
                                                            htmlFor="Builder">
                                                            <i className="fa-solid fa-user-secret fs-3x me-5"></i>
                                                            {/* <!--begin::Info--> */}
                                                            <span className="d-block fw-semibold text-start">
                                                                <span className="text-dark fw-bold d-block fs-4 mb-2">I'm Builder</span>
                                                            </span>
                                                            {/* <!--end::Info--> */}
                                                        </label>
                                                        {/* <!--end::Option--> */}
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                </div>
                                                {/* <!--end::Row--> */}
                                                {/* <!--begin::Row--> */}
                                                <div className="row">
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-lg-6" onClick={() => ownerhide('SUBCONTRACTOR')}>
                                                        {/* <!--begin::Option--> */}
                                                        <input type="radio" className="btn-check" name="account_type"
                                                            value="SUBCONTRACTOR" id="subcontractor"  checked={selectedRadio == 'SUBCONTRACTOR'} onChange={handleRadioChange} />
                                                        <label
                                                            className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center"
                                                            htmlFor="subcontractor">
                                                           <i className="fa-solid fa-screwdriver-wrench fs-3x me-5"></i>
                                                            {/* <!--begin::Info--> */}
                                                            <span className="d-block fw-semibold text-start">
                                                                <span className="text-dark fw-bold d-block fs-4 mb-2">I'm Sub
                                                                    Contractor</span>
                                                            </span>
                                                            {/* <!--end::Info--> */}
                                                        </label>
                                                        {/* <!--end::Option--> */}
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                </div>
                                                {/* <!--end::Row--> */}
                                            </div>
                                            {/* <!--end::Input group--> */}
                                            <div className="row col-lg-12 pt-5"> 
                                        <div className="col-lg-9"></div> 
                                            <div className='col-lg-3 pt-5 mt-5'>
                                                <button type="button" name="continue" onClick={handleContinue} id="continueBtn" className="btn btn-lg btnButton mt-5"
                                                data-kt-stepper-action="next">Continue
                                                <FontAwesomeIcon icon={faArrowRight} className='fs-7 ms-1' /></button>
                                        </div>
                                            </div>
                                        </div>
                                        {/* <!--end::Wrapper--> */}
                                    </div>
                                    
                                    {/* <!--end::Step 1--> */}

                                    {/* <!--begin::Step 2--> */}
                                    <div check="step2" data-kt-stepper-element="content">
                                        {/* <!--begin::Wrapper--> */}
                                        <div className="w-100 OwnerForm" style={{ display: selectedRadio == 'OWNER' ? 'block' : 'none' }}>
                                            {/* <!--begin::Heading--> */}
                                            <div className="pb-10 pb-lg-15">
                                                {/* <!--begin::Title--> */}

                                                <h2 className="fw-bold text-dark">Account Info</h2>
                                                {/* <!--end::Title--> */}
                                                {/* <!--begin::Notice--> */}
                                                <div className="text-muted fw-semibold fs-6">If you need more info, please check out
                                                    <Link to="/" className="link-primary fw-bold">Help Page</Link>.
                                                </div>
                                                {/* <!--end::Notice--> */}
                                            </div>
                                            {/* <!--end::Heading--> */}
                                            {/* <!--begin::Input group--> */}
                                            <div className="mb-10 fv-row">
                                                {/* <!--end::Label--> */}
                                                {/* <!--begin::Row--> */}
                                                <div className="row mb-2" data-kt-buttons="true">
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-lg-6">
                                                        {/* <!--begin::Option--> */}
                                                        <label className="form-label mb-3 required"> First Name </label>
                                                        <input type="text" className="form-control form-control-solid" 
                                                            placeholder="Enter First Name" name="firstName" value={firstName} onChange={(e) => {setFirstName(e.target.value);removeError("firstName");}} />
                                                        <div className='error_text'>{errors[0].firstName}</div>
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                    <div className="col-lg-6">
                                                        {/* <!--begin::Option--> */}
                                                        <label className="form-label mb-3 required"> Last Name </label>
                                                        <input type="text" className="form-control form-control-solid"
                                                            placeholder="Enter Last Name" name="lastName" value={lastName} onChange={(e) => {setLastName(e.target.value);removeError("lastName");}} />
                                                        <div className='error_text'>{errors[0].lastName}</div>
                                                    </div>
                                                </div>
                                                {/* <!--end::Row--> */}
                                            </div>
                                            {/* <!--end::Input group--> */}
                                            {/* <!--begin::Input group--> */}
                                            <div className="mb-10 fv-row">
                                                {/* <!--begin::Label--> */}
                                                <label className="form-label mb-3 required">Contact Number</label>
                                                {/* <!--end::Label--> */}
                                                {/* <!--begin::Input--> */}
                                                <input type="text" className="form-control form-control-lg form-control-solid"
                                                    name="" placeholder="Enter Contact Number" maxLength="10" minLength="8" value={contactNo} onChange={(e) => {setContactNo(e.target.value);removeError("contactNo");}} />
                                                <div className='error_text'>{errors[0].contactNo}</div>
                                                {/* <!--end::Input--> */}
                                            </div>
                                            <div className="mb-10 fv-row">
                                                {/* <!--begin::Label--> */}
                                                <label className="form-label mb-3">Contact Number 2</label>
                                                {/* <!--end::Label--> */}
                                                {/* <!--begin::Input--> */}
                                                <input type="text" className="form-control form-control-lg form-control-solid"
                                                    name="" placeholder="Enter Contact Number 2" maxLength="10" minLength="8" value={contactNo2} onChange={(e) => {setContactNo2(e.target.value)}} />
                                                {/* <!--end::Input--> */}
                                                {/* <div className='error_text'>{errors[0].contactNo2}</div> */}
                                            </div>
                                            <div className='row col-lg-12'>
                                                <div className='col-lg-3 pt-5 mt-5'>
                                                    <button type="button" name="continue" onClick={handlePrevious} id="continueBtn" className="btn btn-lg btnButtonCancel mt-5"
                                                    data-kt-stepper-action="next">
                                                    <FontAwesomeIcon icon={faArrowLeft} className='fs-7 ms-1' /> Previous</button>
                                                </div>
                                                <div className="col-lg-6"></div> 
                                                <div className='col-lg-3 pt-5 mt-5'>
                                                    <button type="button" name="continue" onClick={handleContinue2} id="continueBtn" className="btn btn-lg btnButton mt-5"
                                                    data-kt-stepper-action="next">Continue
                                                    <FontAwesomeIcon icon={faArrowRight} className='fs-7 ms-1' /></button>
                                                </div>
                                            </div>
                                            {/* <!--end::Input group--> */}
                                        </div>
                                        {/* <!--end::Wrapper--> */}
                                    
                                        {/* <!--begin::Wrapper--> */}
                                        <div className="w-100 BuilderForm" id='sub_con'>
                                            {/* <!--begin::Heading--> */}
                                            <div className="pb-10 pb-lg-15">
                                                {/* <!--begin::Title--> */}

                                                <h2 className="fw-bold text-dark">Account Info</h2>
                                                {/* <!--end::Title--> */}
                                                {/* <!--begin::Notice--> */}
                                                <div className="text-muted fw-semibold fs-6">If you need more info, please check out
                                                    <Link to="/" className="link-primary fw-bold">Help Page</Link>.</div>
                                                {/* <!--end::Notice--> */}
                                            </div>
                                            {/* <!--end::Heading--> */}
                                            <div className="mb-10 fv-row">
                                                {/* <!--end::Label--> */}
                                                {/* <!--begin::Row--> */}
                                                <div className="row mb-2" data-kt-buttons="true">
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-lg-6">
                                                        {/* <!--begin::Option--> */}
                                                        <label className="form-label mb-3 required"> First Name </label>
                                                        <input type="text" className="form-control form-control-solid" placeholder="Enter First Name" name="firstName" value={firstName} onChange={(e) => {setFirstName(e.target.value);removeError("firstName");}} />
                                                        <div className='error_text'>{errors[0].firstName}</div>
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                    <div className="col-lg-6">
                                                        {/* <!--begin::Option--> */}
                                                        <label className="form-label mb-3 required"> Last Name </label>
                                                        <input type="text" className="form-control form-control-solid" placeholder="Enter Last Name" name="lastName" value={lastName} onChange={(e) => {setLastName(e.target.value);removeError("lastName");}} />
                                                        <div className='error_text'>{errors[0].lastName}</div>
                                                    </div>
                                                </div>
                                                {/* <!--end::Row--> */}
                                            </div>
                                            {/* <!--end::Input group--> */}
                                            <div className="mb-10 fv-row">
                                                {/* <!--end::Label--> */}
                                                {/* <!--begin::Row--> */}
                                                <div className="row mb-2" data-kt-buttons="true">
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-lg-6">
                                                        <label className="form-label mb-3 required"> License Number </label>
                                                        <input type="text" className="form-control form-control-solid" placeholder="Enter License Number" name="licenceNumber" value={licenceNumber} onChange={(e) => {setLicenceNumber(e.target.value);removeError("licenceNumber");}} />
                                                        <div className='error_text'>{errors[0].licenceNumber}</div>
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-lg-6">
                                                        <label className="form-label mb-3 required"> Contact Number </label>
                                                        <input type="text" className="form-control form-control-lg form-control-solid" maxLength="10" minLength="8" name="mobileNumber" placeholder="Enter Contact Number" value={mobileNumber} onChange={(e) => {setMobileNumber(e.target.value);removeError("mobileNumber");}}  />
                                                        <div className='error_text'>{errors[0].mobileNumber}</div>
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                </div>
                                                {/* <!--end::Row--> */}
                                            </div>
                                            {/* <!--begin::Input group--> */}
                                            <div className="mb-10 fv-row">
                                                {/* <!--begin::Label--> */}
                                                <label className="form-label mb-3"> Contact Number 2</label>
                                                {/* <!--end::Label--> */}
                                                {/* <!--begin::Input--> */}
                                                <input type="text" className="form-control form-control-lg form-control-solid" maxLength="10" minLength="8" name="mobileNumber2" placeholder="Enter Contact Number 2" value={mobileNumber2} onChange={(e) => {setMobileNumber2(e.target.value);removeError("mobileNumber2")}}  />
                                                {/* <!--end::Input--> */}
                                                <div className='error_text'>{errors[0].mobileNumber2}</div>
                                            </div>
                                            {/* <!--end::Input group--> */}
                                            {/* <!--begin::Input group--> */}
                                            <div className="mb-10 fv-row">
                                                {/* <!--begin::Label--> */}
                                                <label className="form-label mb-3 required"> Description </label>
                                                {/* <!--end::Label--> */}
                                                {/* <!--begin::Input--> */}
                                                <input type="text" className="form-control form-control-lg form-control-solid" name="description" placeholder="Enter Description" value={description} onChange={(e) => {setDescription(e.target.value);removeError("description");}} />
                                                <div className='error_text'>{errors[0].description}</div>
                                                {/* <!--end::Input--> */}
                                            </div>
                                            {/* <!--end::Input group--> */}
                                            <div className='row col-lg-12'>
                                                <div className='col-lg-3 pt-5 mt-5'>
                                                    <button type="button" name="continue" onClick={handlePrevious} id="continueBtn" className="btn btn-lg btnButtonCancel mt-5"
                                                    data-kt-stepper-action="next"><FontAwesomeIcon icon={faArrowLeft} className='fs-7 ms-1' /> Previous</button>
                                                </div>
                                                <div className="col-lg-6"></div> 
                                                <div className='col-lg-3 pt-5 mt-5'>
                                                    <button type="button" name="continue" onClick={handleContinue5} id="continueBtn" className="btn btn-lg btnButton mt-5"
                                                    data-kt-stepper-action="next">Continue
                                                    <FontAwesomeIcon icon={faArrowRight} className='fs-7 ms-1' /></button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end::Wrapper--> */}
                                    
                                    </div>
                                    {/* <!--end::Step 2--> */}
                                    {/* <!--begin::Step 3--> */}
                                    <div className="step3" check="step3" data-kt-stepper-element="content">
                                        {/* <!--begin::Wrapper--> */}
                                        <div className="w-100 ">
                                            {/* <!--begin::Heading--> */}
                                            <div className="pb-10 pb-lg-12">
                                                {/* <!--begin::Title--> */}
                                                <h2 className="fw-bold text-dark">Business Details</h2>
                                                {/* <!--end::Title--> */}
                                                {/* <!--begin::Notice--> */}
                                                <div className="text-muted fw-semibold fs-6">If you need more info, please check out
                                                    <Link to="/" className="link-primary fw-bold">Help Page</Link>.
                                                </div>
                                                {/* <!--end::Notice--> */}
                                            </div>
                                            {/* <!--end::Heading--> */}
                                            <div className="mb-10 fv-row">
                                                {/* <!--begin::Label--> */}
                                                <label className="form-label mb-3 required">Business Name </label>
                                                {/* <!--end::Label--> */}
                                                {/* <!--begin::Input--> */}
                                                <input type="text" className="form-control form-control-lg form-control-solid" name="businessName" placeholder="Enter Business Name" value={businessName} onChange={(e) => {setBusinessName(e.target.value);removeError("businessName");}}  />
                                                <div className='error_text'>{errors[0].businessName}</div>
                                                {/* <!--end::Input--> */}
                                            </div>
                                            {/* <!--begin::Input group--> */}
                                            {/* <!--begin::Input group--> */}
                                            <div className="fv-row mb-10">
                                                {/* <!--begin::Label--> */}
                                                <label className="form-label required">Select Category</label>
                                                {/* <!--end::Label--> */}
                                                {/* <!--begin::Input--> */}
                                                <Select 
                                                className='form-control form-control-lg form-control-solid' 
                                                name='category[]' 
                                                id='category' 
                                                placeholder="Select Category" 
                                                isMulti
                                                options={categoryList} 
                                                value={categorySelectedOptions} 
                                                onChange={(e) => {setCetegorySelectedOptions(e);removeError("category");}}
                                                />
                                                <div className='error_text'>{errors[0].category}</div>
                                                {/* <!--end::Input--> */}
                                            </div>
                                            {/* <!--begin::Input group--> */}
                                            <div className="fv-row mb-10">
                                                {/* <!--begin::Label--> */}
                                                <label className="form-label required">Business Start Date </label>
                                                {/* <!--end::Label--> */}
                                                {/* <!--begin::Input--> */}
                                                <input name="businessStartDate" type="date"
                                                    className="form-control form-control-lg form-control-solid"
                                                    value={businessStartDate} 
                                                    onChange={(e) => {setBusinessStartDate(e.target.value);removeError("businessStartDate");}}
                                                    />
                                                <div className='error_text'>{errors[0].businessStartDate}</div>
                                                {/* <!--end::Input--> */}
                                            </div>
                                            {/* <!--end::Input group--> */}
                                            {/* <!--begin::Input group--> */}
                                            <div className="fv-row mb-10">
                                                {/* <!--begin::Label--> */}
                                                <label className="form-label required">Select Country</label>
                                                {/* <!--end::Label--> */}
                                                {/* <!--begin::Input--> */}
                                                <Select 
                                                className='form-control form-control-lg form-control-solid' 
                                                options={countryOption} 
                                                name='country' 
                                                id='country' 
                                                placeholder="Select Country"
                                                value={countryId}
                                                onChange={(e) => {setCountryId(e);removeError("country");stateApi(e.value);setStateId(null);setCityId(null)}}
                                                />
                                                <div className='error_text'>{errors[0].country}</div>
                                                {/* <!--end::Input--> */}
                                            </div>
                                            {/* <!--begin::Input group--> */}
                                            <div className="fv-row mb-10">
                                                {/* <!--begin::Label--> */}
                                                <label className="form-label required">Select State</label>
                                                {/* <!--end::Label--> */}
                                                {/* <!--begin::Input--> */}
                                                <Select className='form-control form-control-lg form-control-solid' 
                                                options={stateOption} 
                                                name='state' 
                                                id='state' 
                                                placeholder="Select State" 
                                                value={stateId} 
                                                onChange={(e) => {setStateId(e);removeError("state");cityApi(e.value);setCityId(null)}}
                                                />
                                                <div className='error_text'>{errors[0].state}</div>
                                                {/* <!--end::Input--> */}
                                            </div>
                                            {/* <!--begin::Input group--> */}
                                            <div className="fv-row mb-10">
                                                {/* <!--begin::Label--> */}
                                                <label className="form-label required">Select City</label>
                                                {/* <!--end::Label--> */}
                                                {/* <!--begin::Input--> */}
                                                <Select 
                                                className='form-control form-control-lg form-control-solid' 
                                                options={cityOption}
                                                name='city' 
                                                id='city' 
                                                placeholder="Select City" 
                                                value={cityId}
                                                onChange={(e) => {setCityId(e);removeError("city");}}
                                                />
                                                <div className='error_text'>{errors[0].city}</div>
                                                {/* <!--end::Input--> */}
                                            </div>
                                            <div className="fv-row mb-10">
                                                {/* <!--begin::Label--> */}
                                                <label className="form-label required">Business address line 1</label>
                                                {/* <!--end::Label--> */}
                                                {/* <!--begin::Input--> */}
                                                <input name="addressLine1" type="text"
                                                    placeholder='Enter Address 1'
                                                    className="form-control form-control-lg form-control-solid"
                                                    value={businessAddressLine1} 
                                                    onChange={(e) => {setBusinessAddressLine1(e.target.value);removeError("businessAddressLine1");}}
                                                     />
                                                    <div className='error_text'>{errors[0].businessAddressLine1}</div>
                                                {/* <!--end::Input--> */}
                                            </div>
                                            <div className="fv-row mb-10">
                                                {/* <!--begin::Label--> */}
                                                <label className="form-label">Business address line 2</label>
                                                {/* <!--end::Label--> */}
                                                {/* <!--begin::Input--> */}
                                                <input name="addressLine2" type="text"
                                                    placeholder='Enter Address 2'
                                                    className="form-control form-control-lg form-control-solid"
                                                    value={businessAddressLine2} 
                                                    onChange={(e) => setBusinessAddressLine2(e.target.value)}
                                                     />
                                                {/* <!--end::Input--> */}
                                            </div>
                                            <div className="fv-row mb-10">
                                                {/* <!--begin::Label--> */}
                                                <label className="form-label required">Zip</label>
                                                {/* <!--end::Label--> */}
                                                {/* <!--begin::Input--> */}
                                                <input name="zipcode" type="text"
                                                    placeholder='Enter Zip'
                                                    className="form-control form-control-lg form-control-solid"
                                                    value={zipode} 
                                                    onChange={(e) => {setZipcode(e.target.value);removeError("zipcode");}}
                                                     />
                                                    <div className='error_text'>{errors[0].zipcode}</div>
                                                {/* <!--end::Input--> */}
                                            </div>
                                            <div className="fv-row mb-10">
                                                {/* <!--begin::Label--> */}
                                                <label className="form-label">Web</label>
                                                {/* <!--end::Label--> */}
                                                {/* <!--begin::Input--> */}
                                                <input name="website" type="text"
                                                    placeholder='Enter Web'
                                                    className="form-control form-control-lg form-control-solid"
                                                    value={website} 
                                                    onChange={(e) => {setWebsite(e.target.value)}}
                                                    />
                                                {/* <!--end::Input--> */}
                                            </div>
                                            <div className='row col-lg-12'>
                                                <div className='col-lg-3 pt-5 mt-5'>
                                                    <button type="button" name="previous" onClick={handlePrevious2} id="previousBtn" className="btn btn-lg btnButtonCancel mt-5"
                                                    data-kt-stepper-action="next"><FontAwesomeIcon icon={faArrowLeft} className='fs-7 ms-1' /> Previous</button>
                                                </div>
                                                <div className="col-lg-6"></div> 
                                                <div className='col-lg-3 pt-5 mt-5'>
                                                    <button type="button" name="continue" onClick={handleContinue6} id="continueBtn" className="btn btn-lg btnButton mt-5"
                                                    data-kt-stepper-action="next">Continue
                                                    <FontAwesomeIcon icon={faArrowRight} className='fs-7 ms-1' /></button>
                                                </div>
                                            </div>
                                            {/* <!--end::Input group--> */}
                                        </div>
                                        {/* <!--end::Wrapper--> */}
                                    </div>
                                    {/* <!--end::Step 3--> */}
                                    {/* <!--begin::Step 4--> */}
                                    <div className="" check="step4" data-kt-stepper-element="content">
                                        {/* <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12"> */}
                                            {/* <!--begin::Wrapper--> */}
                                            {/* <div className="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10"> */}
                                                {/* <!--begin::Content--> */}
                                                <div
                                                    className="w-100">
                                                    {/* <!--begin::Wrapper--> */}
                                                    <div
                                                        className="d-flex flex-center flex-column flex-column-fluid pb-15 pb-lg-20">
                                                        {/* <!--begin::Form--> */}
                                                        {/* <!--begin::Icon--> */}
                                                        <div className="text-center mb-10">
                                                            <img alt="Logo" className="mh-125px"
                                                                src={mobileImg} />
                                                        </div>
                                                        {/* <!--end::Icon--> */}
                                                        {/* <!--begin::Heading--> */}
                                                        <div className="text-center mb-10">
                                                            {/* <!--begin::Title--> */}
                                                            <h1 className="text-dark mb-3">Two-Factor Verification</h1>
                                                            {/* <!--end::Title--> */}
                                                            {/* <!--begin::Sub-title--> */}
                                                            <div className="text-muted fw-semibold fs-5 mb-5">Enter the verification
                                                                code we sent to email</div>
                                                            {/* <!--end::Sub-title--> */}
                                                            {/* <!--begin::Mobile no--> */}
                                                            {/* <div className="fw-bold text-dark fs-3">******7859</div> */}
                                                            {/* <!--end::Mobile no--> */}
                                                        </div>
                                                        {/* <!--end::Heading--> */}
                                                        {/* <!--begin::Section--> */}
                                                        <div className="mb-10">
                                                            {/* <!--begin::Label--> */}
                                                            <div className="fw-bold text-start text-dark fs-6 mb-1 ms-1">Type your 6
                                                                digit security code</div>
                                                            {/* <!--end::Label--> */}
                                                            {/* <!--begin::Input group--> */}
                                                            <div className="d-flex flex-wrap flex-stack">
                                                                {/* <input type="text" name="code_1" maxLength="1" className="form-control bg-transparent h-50px w-50px fs-2qx text-center mx-1 my-2" value={code_1} onChange={(e) => {setCode_1(e.target.value);handleInputChange(e, setCode_1)}} onKeyPress={handleKeyPress} onKeyDown={(e) => handleInputChange(e, setCode_1)}/>
                                                                <input type="text" name="code_2" maxLength="1" className="form-control bg-transparent h-50px w-50px fs-2qx text-center mx-1 my-2" value={code_2} onChange={(e) => {setCode_2(e.target.value);handleInputChange(e, setCode_2)}} onKeyPress={handleKeyPress} onKeyDown={(e) => handleInputChange(e, setCode_2)}/>
                                                                <input type="text" name="code_3" maxLength="1" className="form-control bg-transparent h-50px w-50px fs-2qx text-center mx-1 my-2" value={code_3} onChange={(e) => {setCode_3(e.target.value);handleInputChange(e, setCode_3)}} onKeyPress={handleKeyPress} onKeyDown={(e) => handleInputChange(e, setCode_3)}/>
                                                                <input type="text" name="code_4" maxLength="1" className="form-control bg-transparent h-50px w-50px fs-2qx text-center mx-1 my-2" value={code_4} onChange={(e) => {setCode_4(e.target.value);handleInputChange(e, setCode_4)}} onKeyPress={handleKeyPress} onKeyDown={(e) => handleInputChange(e, setCode_4)}/>
                                                                <input type="text" name="code_5" maxLength="1" className="form-control bg-transparent h-50px w-50px fs-2qx text-center mx-1 my-2" value={code_5} onChange={(e) => {setCode_5(e.target.value);handleInputChange(e, setCode_5)}} onKeyPress={handleKeyPress} onKeyDown={(e) => handleInputChange(e, setCode_5)}/>
                                                                <input type="text" name="code_6" maxLength="1" className="form-control bg-transparent h-50px w-50px fs-2qx text-center mx-1 my-2" value={code_6} onChange={(e) => {setCode_6(e.target.value);handleInputChange(e, setCode_6)}} onKeyPress={handleKeyPress} onKeyDown={(e) => handleInputChange(e, setCode_6)}/> */}
                                                                 {
                                                                    inputRefs.map((value, index) =>
                                                                    (
                                                                    // <InputCompo val={value} index={index} />
                                                                    <input
                                                                        key={index}
                                                                        name="code_6"
                                                                        maxLength="1"
                                                                        type="text"
                                                                        className="form-control bg-transparent h-50px w-50px fs-2qx text-center mx-1 my-2"
                                                                        value={value.value}
                                                                        ref={value.ref}
                                                                        // onChange={(e) => handleInputChange(e, index)}
                                                                        onKeyDown={(e) => {handleKeyDown(e, index);}}
                                                                    />

                                                                    )
                                                                    )}
                                                            </div>
                                                            {/* <!--begin::Input group--> */}
                                                        </div>
                                                        {/* <!--end::Section--> */}
                                                        {/* <!--begin::Notice--> */}
                                                        <div className="text-center fw-semibold fs-5">
                                                            <span className="text-muted me-1">Didn’t get the code ?</span>
                                                            <Link onClick={() => { resendOTPApi() }} className="link-primary fs-5 me-1">Resend</Link>
                                                        </div>

                                                        
                                                        {/* <!--end::Notice--> */}
                                                    </div>
                                                    <div className='row col-lg-12'>
                                                        <div className='col-lg-3 pt-5 mt-5'>
                                                            <button type="button" name="continue" onClick={selectedRadio == "OWNER" ? handlePrevious3 : handlePrevious6} id="continueBtn" className="btn btn-lg btnButtonCancel mt-5"
                                                            data-kt-stepper-action="next"><FontAwesomeIcon icon={faArrowLeft} className='fs-7 ms-1' /> Previous</button>
                                                        </div>
                                                        <div className="col-lg-6"></div> 
                                                        <div className='col-lg-3 pt-5 mt-5'>
                                                            <Link type="button" name="continue" onClick={handleContinue3} id="continueBtn" className="btn btn-lg btnButton mt-5"
                                                            data-kt-stepper-action="next">Continue 
                                                            <FontAwesomeIcon icon={faArrowRight} className='fs-7 ms-1' /></Link>
                                                        </div>
                                                    </div>
                                                     
                                                    {/* <!--end::Wrapper--> */}
                                                </div>
                                                {/* <!--end::Content--> */}
                                            {/* </div> */}
                                            {/* <!--end::Wrapper--> */}
                                        {/* </div> */}
                                        {/* <!--end::Body--> */}
                                    </div>
                                    {/* <!--end::Step 4--> */}
                                    {/* <!--begin::Step 5--> */}
                                    <div  check="step5"  data-kt-stepper-element="content">
                                        {/* <!--begin::Wrapper--> */}
                                        <div className="w-100">
                                            {/* <!--begin::Heading--> */}
                                            <div className="pb-8 pb-lg-10">
                                                {/* <!--begin::Title--> */}
                                                <h2 className="fw-bold text-dark">Your Are Done!</h2>
                                                {/* <!--end::Title--> */}
                                                {/* <!--begin::Notice--> */}
                                                <div className="text-muted fw-semibold fs-6">If you need more info, please
                                                    <Link to="../login/" className="link-primary fw-bold">Sign In</Link>.
                                                </div>
                                                {/* <!--end::Notice--> */}
                                            </div>
                                            {/* <!--end::Heading--> */}
                                            {/* <!--begin::Body--> */}
                                            <div className="mb-0">
                                                {/* <!--begin::Text--> */}
                                                <div className="fs-6 text-gray-600 mb-5">Writing headlines for blog posts is as much
                                                    an art as it is a science and probably warrants its own post, but for all
                                                    advise is with what works for your great & amazing audience.</div>
                                                {/* <!--end::Text--> */}
                                                {/* <!--begin::Alert--> */}
                                                {/* <!--begin::Notice--> */}
                                                <div
                                                    className="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
                                                    {/* <!--begin::Icon--> */}
                                                    <i className="ki-outline ki-information fs-2tx text-warning me-4"></i>
                                                    {/* <!--end::Icon--> */}
                                                    {/* <!--begin::Wrapper--> */}
                                                    <div className="d-flex flex-stack flex-grow-1">
                                                        {/* <!--begin::Content--> */}
                                                        <div className="fw-semibold">
                                                            <h4 className="text-gray-900 fw-bold">We need your attention!</h4>
                                                            <div className="fs-6 text-gray-700">To start using great tools, please,
                                                                <Link to="../../demo34/dist/utilities/wizards/vertical.html"
                                                                    className="fw-bold">Create Team Platform</Link>
                                                            </div>
                                                            
                                                        </div>
                                                        
                                                        {/* <!--end::Content--> */}
                                                    </div>
                                                    
                                                    {/* <!--end::Wrapper--> */}
                                                </div>
                                                <div className='row col-lg-12'>
                                            <div className='col-lg-3 pt-5 mt-5'>
                                                <button type="button" name="continue" onClick={handlePrevious4} id="continueBtn" className="btn btn-lg btnButtonCancel mt-5"
                                                data-kt-stepper-action="next"><FontAwesomeIcon icon={faArrowLeft} className='fs-7 ms-1' /> Previous</button>
                                        </div>
                                            <div className="col-lg-6"></div> 
                                            <div className='col-lg-3 pt-5 mt-5'>
                                                <Link to={selectedRadio == "OWNER" ? `/ownerdashboard/` : selectedRadio == "BUILDER" ? '/builderdashboard/' : '/subcontractordashboard/'} type="button" name="continue" id="continueBtn" className="btn btn-lg btnButton mt-5"
                                                data-kt-stepper-action="next">Continue 
                                                <FontAwesomeIcon icon={faArrowRight} className='fs-7 ms-1' /></Link>
                                        </div>
                                                </div>
                                                
                                                {/* <!--end::Notice--> */}
                                                {/* <!--end::Alert--> */}
                                            </div>
                                           
                                            {/* <!--end::Body--> */}
                                        </div>
                                        {/* <!--end::Wrapper--> */}
                                        
                                    </div>
                                    
                                    
                                    {/* <!--end::Step 5--> */}
                                    {/* <!--begin::Actions--> */}
                                    <div className="d-flex flex-stack pt-15">
                                        <input type="hidden" id="disp" value={0} />
                                        <div className="mr-2">
                                            <button type="button" className="btn btn-lg btn-light-primary me-3"
                                                data-kt-stepper-action="previous">
                                                <FontAwesomeIcon icon={faArrowLeft} className='fs-7 ms-1' /> Previous</button>
                                        </div>
                                        <div>
                                            <button type="button" className="btn btn-lg btn-primary"
                                                data-kt-stepper-action="submit">
                                                <span className="indicator-label">Submit 
                                                <FontAwesomeIcon icon={faArrowRight} className='fs-7 ms-1' /></span>
                                                <span className="indicator-progress">Please wait...
                                                    <span
                                                        className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                            </button>
                                            {/* <button type="button" name="continue" id="continueBtn" className="btn btn-lg btn-primary"
                                                data-kt-stepper-action="next">Continue
                                                <i className="ki-outline ki-arrow-right fs-4 ms-1"></i></button> */}
                                        </div>
                                    </div>
                                    {/* <!--end::Actions--> */}
                                </div>
                                {/* <!--end::Form--> */}
                            </div>
                            {/* <!--end::Wrapper--> */}
                        </div>
                        {/* <!--end::Content--> */}
                    </div>
                    {/* <!--end::Body--> */}
                </div>
                {/* <!--end::Authentication - Multi-steps--> */}
            </div>
            {/* <!--end::Root--> */}
		<ToastContainer />

</>
    )
}