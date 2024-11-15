import React, { useState } from "react";
import Button from "antd/es/button";
import FormTitle from "../../../../Components/Common/Form/FormTItle/FormTitle";
import MInput from "../../../../Components/Common/Form/Input/MInput";
import HomeRoute from "../../../../routes/HomeRoute";
import FormLink from "../../../../Components/Common/Form/FormLink/FormLink";
import Globals from "../../../../utils/Globals";
import LocalStorage from "../../../../utils/LocalStorage";
import PasswordResetFormData from "../../../../constance/PasswordResetFormData";
import Joi from "joi";





type propsType = {
    btnClick: any,
    resendOTPClick: any
}



const PasswordOTPscreen = (props: propsType) => {

    const [otpValue, setOPT] = useState<string>("");
    const [errors, setError] = useState<any>({});



    // get the email or the phone entered in the previous field
    const emailPhone = LocalStorage
        .getItem(PasswordResetFormData.storageKey)
        .emailPhone;



    
    const validate = (credintials: any) => {
        const schema = Joi.object({
            otp: Joi.string().min(3).required()
        });
        return schema.validate(credintials, { abortEarly: false });
    };



 




    const submitHandler = () => {

         // validation
         const data = { otp: otpValue }
         let error:any = validate(data).error;
         let newErr: any = {};
 
         if(error)
         {
             error.details.map((error: any) => {
                 newErr[error.path[0]] = Globals.removeDoubleQuoteFromStr(error.message);
             });
 
             setError(newErr);
         }
 
 
         const errorExist = Object.keys(newErr).length;
 
         if(errorExist) {
             return;
         }
         else{
             setError({});
         }

        

        props.btnClick();
    }
    


    return <React.Fragment>

            <FormTitle title={`OTP is sent to * * * * * * * * 35`} />


            <MInput
                label="Enter Code"
                placeholder = "OTP Code"
                id="otp"
                type="text"
                value={otpValue}
                onChange={setOPT}
                error={errors.otp}
            />

            <FormLink 
                text="" 
                path={HomeRoute.forgotPassword} 
                linkText={"Resend OTP"}
                onClick={props.resendOTPClick}
            />

            <Button onClick={submitHandler} type="primary" block>Continue</Button>



    </React.Fragment>
}

export default PasswordOTPscreen;