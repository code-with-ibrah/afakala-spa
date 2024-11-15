import PasswordResetPage from './../PasswordResetPage';
import React, { useEffect, useState } from "react";
import MInput from "../../../../Components/Common/Form/Input/MInput";
import FormLink from "../../../../Components/Common/Form/FormLink/FormLink";
import Button from "antd/es/button";
import FormTitle from "../../../../Components/Common/Form/FormTItle/FormTitle";
import LocalStorage from "../../../../utils/LocalStorage";
import SignupFormData from "../../../../constance/SignupFormData";

import Joi from "joi";
import Globals from "../../../../utils/Globals";
import PasswordResetFormData from '../../../../constance/PasswordResetFormData';



type propType = {
    btnClick: any
}



const PasswordResetStepTwo = (props: propType) => {

    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [errors, setError] = useState<any>({});
    


    function setSignupStepOneDefaultValues(){
        setTimeout(() => {
            const store = (LocalStorage.getItem(PasswordResetFormData.storageKey));
            if(store)
            {
                setPassword(store.password);
                setConfirmPassword(store.confirmPassword);
            }
        }, 600);
    }


    useEffect(() => {
        setSignupStepOneDefaultValues();
    }, []);





    const validate = (credintials: any) => {
        const schema = Joi.object({
            password: Joi.string().required().min(6),
            confirmPassword: Joi.any().valid(Joi.ref('password'))
                .required().messages({ "any.only" : "Password must match"})
        });
        return schema.validate(credintials, { abortEarly: false });
    };





    const submitButtonHandler = () => {
        const user: any = {
            password: password,
            confirmPassword: confirmPassword
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


        const store = (LocalStorage.getItem(PasswordResetFormData.storageKey));
        if(store)
        {
            store.confirmPassword = user.confirmPassword;
            store.password = user.password;
            LocalStorage.setItem(PasswordResetFormData.storageKey, store);
        }
        else
        {
            LocalStorage.setItem(PasswordResetFormData.storageKey, user);
        }

        props.btnClick(user);
    }




    return <React.Fragment>

        <FormTitle title="Please enter your new password" />


        <MInput
            label="New Password"
            placeholder="*****************"
            id="newPassword"
            type="password"
            value={password}
            onChange={setPassword}
            error={errors.password}
       />

        <MInput
                label="Confirm Password"
                placeholder="*****************"
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={setConfirmPassword}
                error={errors.confirmPassword}
        />


        <Button onClick={submitButtonHandler} type="primary" block>
            Change Password
        </Button>


    </React.Fragment>
}


export default PasswordResetStepTwo;
