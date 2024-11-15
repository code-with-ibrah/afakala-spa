import React, { useEffect, useState } from "react";
import MForm from "../../../Components/Common/Form/MForm";



import "./LoginPage.css";
import LoginStepOne from "./Steps/LoginStepOne";
import LoginStepTwo from './Steps/LoginStepTwo';
import AuthPage from "../../../Components/Common/Page/Auth/AuthPage";
import LocalStorage from "../../../utils/LocalStorage";
import LoginFormData from "../../../constance/LoginFormData";
import Globals from "../../../utils/Globals";
import Joi from "joi";
import { toast } from "react-toastify";
import DashboardRoute from "../../../routes/DashboardRoute";
import { useNavigate } from "react-router-dom";



const LoginPage = () => {
    let [activeNumber, setActiveNumber] = useState<number>(0);
    const [password, setPassword] = useState<string>("");
    const [errors, setError] = useState<any>({});
    
    const navigator = useNavigate();
    

    const progressClick = (num: number) => {
        setActiveNumber(num);
    }


    const continueBtnOnClick = (data?: any) => {
        setActiveNumber(activeNumber++);
    }

 
    useEffect(()=>{
        
        continueBtnOnClick();

    }, [continueBtnOnClick, activeNumber]);






    const validate = (credintials: any) => {
        const schema = Joi.object({
            password: Joi.string().min(6).required(),
            email: Joi.string().email
        });
        return schema.validate(credintials, { abortEarly: false });
    };
    





    const submitHandler = () => {
        
        const user: any = { 
            password: password,
            email: ''
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

        if(errorExist) {
            return;
        }
        else{
            setError({});
        }


        const store = (LocalStorage.getItem(LoginFormData.storageKey));
        if(store)
        {
            store.password = user.password;
            LocalStorage.setItem(LoginFormData.storageKey, store);
        }
        else
        {
            LocalStorage.setItem(LoginFormData.storageKey, user);
        }


        // login successful logics
        navigator(DashboardRoute.home);

    }







    let currentPageElement  = null;

    switch(activeNumber){
        case 1:
            currentPageElement = <LoginStepOne 
                continueBtnClick={continueBtnOnClick} 
            />
            break;

        case 2:
            currentPageElement = <LoginStepTwo 
                continueBtnClick={submitHandler} 
                password={password} 
                passwordErrMsg={errors.password}            
            />
    }


    return <React.Fragment>
        
        <AuthPage>
            <MForm totalDot={2}  activeNumber={activeNumber} onProgressClick={progressClick}>
                
                {currentPageElement}

            </MForm>
        </AuthPage>




    </React.Fragment>

}

export default LoginPage;