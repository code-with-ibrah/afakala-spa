import Button from "antd/es/button";
import React, { useState } from "react";
import FormTitle from "../../../../Components/Common/Form/FormTItle/FormTitle";
import LocalStorage from "../../../../utils/LocalStorage";
import SignupFormData from "../../../../constance/SignupFormData";



type propsType = {
    onSubmit: any
}



const SignupStepThreePrivacy = (props: propsType) => {

    const defaultPolicy = "How to conduct effective user research for product design";
    const [value, setValue] = useState<string>(defaultPolicy);



    return <React.Fragment>
        
        <FormTitle title="Privacy Policy" />

        <textarea 
            value={value}
            onChange={(e)=> setValue(e.target.value)}
            rows={7}
            name="terms" 
            readOnly
            id="terms" 
            className="w-full border p-2 text-gray-500"/>


        <Button onClick={props.onSubmit} type="primary" block >Agree & Continue</Button>

    </React.Fragment>
}


export default SignupStepThreePrivacy;