import React, { useState } from "react";
import FormLink from "../../../../Components/Common/Form/FormLink/FormLink";
import MInput from "../../../../Components/Common/Form/Input/MInput";
import Button from "antd/es/button";
import FormTitle from "../../../../Components/Common/Form/FormTItle/FormTitle";
import LocalStorage from "../../../../utils/LocalStorage";
import LoginFormData from "../../../../constance/LoginFormData";
import Joi from "joi";
import Globals from "../../../../utils/Globals";
import { toast } from "react-toastify";
import HomeRoute from "../../../../routes/HomeRoute";
import { useNavigate } from "react-router-dom";
import DashboardRoute from "../../../../routes/DashboardRoute";







type propType = {
    continueBtnClick: any,
    password: string,
    passwordErrMsg: string
}

const LoginStepTwo = (props:propType) => {
    const [password, setPassword] = useState<string>("");
    const [errors, setError] = useState<any>({});
    const navigator = useNavigate();



    const validate = (credintials: any) => {
        const schema = Joi.object({
            password: Joi.string().min(6).required(),
            email: Joi.string().email({ tlds: { allow: false } }).required()
        });
        return schema.validate(credintials, { abortEarly: false });
    };







    const continueBtnClick = () => {
        const store = (LocalStorage.getItem(LoginFormData.storageKey));
        const user: any = { 
            email: store?.email,
            password: password
        };


        // validation
        let newErr: any = {};
        let error:any = validate(user).error;

        if(error){
            error.details.map((error: any) => {
                newErr[error.path[0]] = Globals.removeDoubleQuoteFromStr(error.message);
            });

            setError(newErr);
        }


        const errorExist = Object.keys(newErr).length;


        if(!store?.email){
            toast.error("Please fill the Email.");
            return;
        }

        if (errorExist) {
            return;
        }

        else{
            setError({});
        }


        if(store)
        {
            store.password = user.password;
            LocalStorage.setItem(LoginFormData.storageKey, store);
        }
        else
        {
            LocalStorage.setItem(LoginFormData.storageKey, user);
        }


        // handle form submission
        // data will be stored in the store variable 
        toast.success("login step two submit method working...");

        navigator(DashboardRoute.home);
    }












    return <React.Fragment>

        <FormTitle title="ALMOST THERE!"/>

            <MInput
                label="Password"
                placeholder="Please Enter Password"
                id="password"
                type="password"
                value={password} 
                onChange={setPassword} 
                error={errors.password}
           />

            <Button onClick={continueBtnClick} type="primary" block>Login</Button>

            <FormLink 
                text="" 
                path={HomeRoute.forgotPassword} 
                linkText="Forget Password" />

    </React.Fragment>
}

export default LoginStepTwo;