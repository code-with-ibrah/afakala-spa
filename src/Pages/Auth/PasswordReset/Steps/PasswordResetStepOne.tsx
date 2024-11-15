import React, { useEffect, useState } from "react";
import Button from "antd/es/button";
import Joi from "joi";
import MInput from "../../../../Components/Common/Form/Input/MInput";
import FormTitle from "../../../../Components/Common/Form/FormTItle/FormTitle";
import PasswordResetFormData from '../../../../constance/PasswordResetFormData';
import LocalStorage from "../../../../utils/LocalStorage";
import Globals from "../../../../utils/Globals";



type propType = {
    btnClick: any
}



const PasswordResetStepOne = (props: propType) => {

    const [emailPhone, setEmailPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errors, setError] = useState<any>({});
    


    function setSignupStepOneDefaultValues(){
        setTimeout(() => {
            const store = (LocalStorage.getItem(PasswordResetFormData.storageKey));
            if(store)
            {
                setEmailPhone(store.emailPhone);
                setPassword(store.password);
            }
        }, 600);
    }


    useEffect(() => {
        setSignupStepOneDefaultValues();
    }, []);





    const validate = (credintials: any) => {
        const schema = Joi.object({
            emailPhone: Joi.string().min(3).required(),
            password: Joi.string().required().min(6)
        });
        return schema.validate(credintials, { abortEarly: false });
    };





    const submitButtonHandler = () => {
        const user: any = {
            emailPhone: emailPhone,
            password: password
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
            store.emailPhone = user.emailPhone;
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

        <FormTitle title="Please enter your email or phone" />


        <MInput
            label="Email or Phone"
            placeholder="Please Enter your email or phone"
            id="emailPhone"
            type="text"
            value={emailPhone}
            onChange={setEmailPhone}
            error={errors.emailPhone}
       />

        <MInput
                label="Password"
                placeholder="***************"
                id="password"
                type="password"
                value={password}
                onChange={setPassword}
                error={errors.password}
        />


        <Button onClick={submitButtonHandler} type="primary" block>Continue</Button>


    </React.Fragment>
}


export default PasswordResetStepOne;
