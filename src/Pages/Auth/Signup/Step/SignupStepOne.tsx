import React, { useEffect, useState } from "react";
import MInput from "../../../../Components/Common/Form/Input/MInput";
import FormLink from "../../../../Components/Common/Form/FormLink/FormLink";
import Button from "antd/es/button";
import FormTitle from "../../../../Components/Common/Form/FormTItle/FormTitle";
import LocalStorage from "../../../../utils/LocalStorage";
import SignupFormData from "../../../../constance/SignupFormData";

import Joi from "joi";
import Globals from "../../../../utils/Globals";
import HomeRoute from "../../../../routes/HomeRoute";



type propType = {
    btnClick: any
}



const SignupStepOne = (props: propType) => {

    const [emailValue, setEmailValue] = useState<string>("");
    const [passwordValue, setPasswordValue] = useState<string>("");
    const [confirmPasswordValue, setConfirmPasswordValue] = useState<string>("");
    const [errors, setError] = useState<any>({});
    


    function setSignupStepOneDefaultValues(){
        setTimeout(() => {
            const store = (LocalStorage.getItem(SignupFormData.storageKey));
            if(store)
            {
                setEmailValue(store.email);
                setPasswordValue(store.password);
                setConfirmPasswordValue(store.confirmPassword);
            }
        }, 600);
    }


    useEffect(() => {
        setSignupStepOneDefaultValues();
    }, []);





    const validate = (credintials: any) => {
        const schema = Joi.object({
            email: Joi.string().email({ tlds: { allow: false } }).required(),
            password: Joi.string().required().min(6),
            confirmPassword: Joi.any().valid(Joi.ref('password'))
                .required().messages({ "any.only" : "Password must match"})

        });
        return schema.validate(credintials, { abortEarly: false });
    };





    const submitButtonHandler = () => {
        const user: any = {
            email: emailValue,
            password: passwordValue,
            confirmPassword: confirmPasswordValue
        }


        // validation
        let error:any = validate(user).error;
        let newErr: any = {};

        if(error){
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


        const store = (LocalStorage.getItem(SignupFormData.storageKey));
        if(store)
        {
            store.email = user.email;
            store.password = user.password;
            store.confirmPassword = user.confirmPassword;
            LocalStorage.setItem(SignupFormData.storageKey, store);
        }
        else
        {
            LocalStorage.setItem(SignupFormData.storageKey, user);
        }

        props.btnClick(user);
    }




    return <React.Fragment>

        <FormTitle title="Create account" />


        <MInput
            label="Email"
            placeholder="Please Enter your email"
            id="email"
            type="email"
            value={emailValue}
            onChange={setEmailValue}
            error={errors.email}
       />

        <MInput
                label="Password"
                placeholder="Please set your Password"
                id="password"
                type="password"
                value={passwordValue}
                onChange={setPasswordValue}
                error={errors.password}
        />

        <MInput
                label="Confirm Password"
                placeholder="Confirm password"
                id="confirmPassword"
                type="password"
                value={confirmPasswordValue}
                onChange={setConfirmPasswordValue}
                error={errors.confirmPassword}
        />

        <FormLink 
            text="Have an account ?" 
            path={HomeRoute.login} 
            linkText="login" />

        <Button onClick={submitButtonHandler} type="primary" block>Continue</Button>


    </React.Fragment>
}

export default SignupStepOne;