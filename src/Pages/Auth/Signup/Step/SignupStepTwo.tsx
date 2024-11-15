import React, { useEffect, useState } from "react";
import MInput from "../../../../Components/Common/Form/Input/MInput";
import FormLink from "../../../../Components/Common/Form/FormLink/FormLink";
import Button from "antd/es/button";
import FormTitle from "../../../../Components/Common/Form/FormTItle/FormTitle";
import LocalStorage from "../../../../utils/LocalStorage";
import SignupFormData from "../../../../constance/SignupFormData";
import Joi from "joi";
import Globals from "../../../../utils/Globals";

type propsType = {
    btnClick: any
}

 
const SignupStepTwo = (props: propsType) => {

    const [nameValue, setNameValue] = useState<string>("");
    const [phoneValue, setPhoneValue] = useState<string>("");
    const [addressValue, setAddressValue] = useState<string>("");
    const [errors, setError] = useState<any>({});



    function setSignupStepOneDefaultValues(){
        setTimeout(() => {
            const store = (LocalStorage.getItem(SignupFormData.storageKey));
            if(store)
            {
                setNameValue(store.name);
                setPhoneValue(store.phone);
                setAddressValue(store.address);
            }
        }, 600);
    }


    useEffect(() => {
        setSignupStepOneDefaultValues();
    }, []);




    const validate = (credintials: any) => {
        const schema = Joi.object({
            name: Joi.string().min(3).required(),
            phone: Joi.string().required().min(10),
            address: Joi.string().min(3)
        });
        return schema.validate(credintials, { abortEarly: false });
    };





    const submitButtonHandler = () => {

        const user = (LocalStorage.getItem(SignupFormData.storageKey));

        const validationRecord = {
            name: nameValue,
            phone: phoneValue,
            address: addressValue 
        }

        // validation
        let error:any = validate(validationRecord).error;
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




        if(user)
        {
            user.name = nameValue;
            user.phone = phoneValue;
            user.address = addressValue;

            LocalStorage.setItem(SignupFormData.storageKey, user);
        }
        else 
        {
            LocalStorage.setItem(SignupFormData.storageKey, validationRecord);
        }



        props.btnClick(user);
    }



    






   
    
    return <React.Fragment>

        <FormTitle title="You are almost done!" />


        <MInput
            label="Name"
            placeholder="Enter full name"
            id="name"
            type="text" 
            value={nameValue}
            onChange={setNameValue}
            error={errors.name}
        />

        <MInput
                label="Phone"
                placeholder="Enter phone number"
                id="phone"
                type="tell"
                value={phoneValue}
                onChange={setPhoneValue}
                error={errors.phone}
        />

        <MInput
                label="Address"
                placeholder="Enter house / post address"
                id="address"
                type="text"
                value={addressValue}
                onChange={setAddressValue}
                error={errors.address}
        />

        <Button onClick={submitButtonHandler} type="primary" block>Continue</Button>


    </React.Fragment>
}



export default SignupStepTwo;