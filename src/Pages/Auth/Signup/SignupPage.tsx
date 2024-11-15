import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SignupStepOne from "./Step/SignupStepOne";
import MForm from "../../../Components/Common/Form/MForm";
import SignupStepTwo from "./Step/SignupStepTwo";
import SignupStepThreePrivacy from "./Step/SignupStepThreePrivacy";
import LocalStorage from "../../../utils/LocalStorage";
import SignupFormData from "../../../constance/SignupFormData";
import AuthPage from "../../../Components/Common/Page/Auth/AuthPage";
import DashboardRoute from "../../../routes/DashboardRoute";
import Globals from "../../../utils/Globals";
import Joi from "joi";
import { useNavigate } from "react-router-dom";




const SignupPage = () => {

    let [activeNumber, setActiveNumber] = useState<number>(0);
    const navigator = useNavigate();

    const progressClick = (num: number) => {
        setActiveNumber(num);
    }


    const continueBtnOnClick = (data?: any) => {
        setActiveNumber(activeNumber++);
    }

 
    useEffect(()=>{
        continueBtnOnClick();

    }, [continueBtnOnClick, activeNumber])





    const validator = (credintials: any) => {
        const schema = Joi.object({
            email: Joi.string().email({ tlds: { allow: false } }).required(),
            password: Joi.string().required().min(6),
            name: Joi.string().required(),
            phone: Joi.string().required(),
            address: Joi.string().required(),
            confirmPassword: Joi.string().required()

        });
        return schema.validate(credintials, { abortEarly: false });
    };






    const submitHandler = () => {
        const user = (LocalStorage.getItem(SignupFormData.storageKey));

        // validation
        let error: any = validator(user).error;
        let newErr: any = {};

        if (error) {
            error.details.map((error: any) => {
                newErr[error.path[0]] = Globals.removeDoubleQuoteFromStr(error.message);
            });
        }


        const errorExist = Object.keys(newErr).length;

        if (user == undefined || errorExist) {
            toast.error("All previous form fields are required. Please fill them out.");
            return;
        }

        
        // when everything is set.
        // data from all form is stored in the user variable
        navigator(DashboardRoute.home);

    }







    let currentPageElement = null;

    switch(activeNumber){
        case 1:
            currentPageElement = <SignupStepOne
                btnClick={continueBtnOnClick}
            />
            break;

        case 2:
            currentPageElement = <SignupStepTwo
                btnClick={continueBtnOnClick}
            />
            break;
        
        case 3:
            currentPageElement = <SignupStepThreePrivacy 
                onSubmit={submitHandler}
            />
            break;

        default:
            currentPageElement = <SignupStepOne
                btnClick={continueBtnOnClick}
            />
    }




    return <React.Fragment>
        <AuthPage>
            
            <MForm totalDot={3} activeNumber={activeNumber} onProgressClick={progressClick} >

                {currentPageElement}

            </MForm>

        </AuthPage>
    </React.Fragment>

}

export default SignupPage;