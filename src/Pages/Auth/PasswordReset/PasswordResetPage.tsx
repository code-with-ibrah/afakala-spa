import React, { useEffect, useState } from "react";
import PasswordResetStepOne from "./Steps/PasswordResetStepOne";
import MForm from "../../../Components/Common/Form/MForm";
import AuthPage from "../../../Components/Common/Page/Auth/AuthPage";
import PasswordResetStepTwo from "./Steps/PasswordResetStepTwo";
import PasswordOTPscreen from "./Steps/PasswordOTPscreen";
import DashboardRoute from "../../../routes/DashboardRoute";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


type propsType = {

}

const PasswordResetPage = (props: propsType) => {

let [activeNumber, setActiveNumber] = useState<number>(0);
const navigator = useNavigate();

const progressClick = (num: number) => {
    // setActiveNumber(num);
}


const continueBtnOnClick = (data?: any) => {
    setActiveNumber(activeNumber++);
}


useEffect(()=>{
    
    continueBtnOnClick();

}, [continueBtnOnClick, activeNumber]);




// function to verify the OTP
const verifyOTPHandler = () => {
    const verificationCompletedSuccessfully = true;


    if(verificationCompletedSuccessfully)
    {
        // toast.success("verification completed!");
        setActiveNumber(activeNumber++);
    }
    else
    {
        toast.error("invalid code entered");
    }

}



// function to resend OTP code
const resendOTPCodeHandler = () => {
    toast.success("OPT code is sent!");
}




// function to execute after setting new password
const changePasswordHandler = () => {
    
    navigator(DashboardRoute.home);
}





let currentPageElement  = null;

switch(activeNumber){
    case 1:
        currentPageElement = <PasswordResetStepOne 
        btnClick={continueBtnOnClick} 
        />
        break;

    case 2:
        currentPageElement = <PasswordOTPscreen 
            btnClick={verifyOTPHandler} 
            resendOTPClick={resendOTPCodeHandler}    
            />
    break;

    case 3:
        currentPageElement = <PasswordResetStepTwo 
        btnClick={changePasswordHandler} 
    />
 
}


return <React.Fragment>
    
    <AuthPage>
        <MForm totalDot={3}  activeNumber={activeNumber} onProgressClick={progressClick}>
            
            {currentPageElement}

        </MForm>
    </AuthPage>




</React.Fragment>
}


export default PasswordResetPage;