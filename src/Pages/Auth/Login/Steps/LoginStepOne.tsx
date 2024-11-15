import React, { useEffect, useState } from "react";
import MInput from "../../../../Components/Common/Form/Input/MInput";
import Button from "antd/es/button";
import FormLink from "../../../../Components/Common/Form/FormLink/FormLink";
import FormTitle from "../../../../Components/Common/Form/FormTItle/FormTitle";
import Joi from "joi";
import LocalStorage from "../../../../utils/LocalStorage";
import LoginFormData from "../../../../constance/LoginFormData";
import Globals from "../../../../utils/Globals";
import HomeRoute from "../../../../routes/HomeRoute";



type propType = {
    continueBtnClick: any
}









const LoginStepOne = (props: propType) => {
    const [email, setEmail] = useState<string>("");
    const [errors, setError] = useState<any>({});



    function setSignupStepOneDefaultValues(){
        setTimeout(() => {
            const store = (LocalStorage.getItem(LoginFormData.storageKey));
            if(store)
            {
                setEmail(store.email);
            }
        }, 600);
    }


    useEffect(() => {
        setSignupStepOneDefaultValues();
    }, []);









    const validate = (credintials: any) => {
        const schema = Joi.object({
            email: Joi.string().email({ tlds: { allow: false } }).required()
        });
        return schema.validate(credintials, { abortEarly: false });
    };




    let newErr: any = {};

    const continueBtnClick = () => {

        const user: any = { email: email };


        // validation
        let error:any = validate(user).error;

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


        const store = (LocalStorage.getItem(LoginFormData.storageKey));
        if(store)
        {
            store.email = user.email;
            // store.password = user.password;
            LocalStorage.setItem(LoginFormData.storageKey, store);
        }
        else
        {
            LocalStorage.setItem(LoginFormData.storageKey, user);
        }

        props.continueBtnClick();
    }






    return <React.Fragment>

            <FormTitle title="LOGIN TO YOUR ACCOUNT" />

            <MInput
                label="Email"
                placeholder="Please Enter your email"
                id="email"
                type="email"
                value={email} 
                onChange={setEmail} 
                error={errors.email}
            />

            <Button onClick={continueBtnClick} type="primary" block>Continue</Button>

            <FormLink 
                text="" 
                path={HomeRoute.signup} 
                linkText="Create An Account" />

    </React.Fragment>
}

export default LoginStepOne;