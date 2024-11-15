import React from "react";
import DashboardContainer from "../../../Components/Common/Page/Dashboard/DashboardContainer";
import Form, { FormProps } from "antd/es/form";
import Input from "antd/es/input";
import Button from "antd/es/button";
import TextArea from "antd/es/input/TextArea";


import "./RequestFeature.css";




type FieldType = {
    name?: string;
    description?: string,
};





const RequestFeature = () => {


    // form validated submission 
    const onFinish: FormProps<FieldType>['onFinish'] = (data) => {
        console.log('Success:', data);
    };

    
    // form validation failed submission
    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    return <React.Fragment>
        
        <DashboardContainer activeTab={4}>

            <div className="welcome-wrapper">
                <p className="user-name">Request a Feature</p>
            </div>



            <div className="reques-feature__form-wrapper">

            <Form
                name="basic"
                
                // labelCol={{ span: 8 }}
                // wrapperCol={{ span: 16 }}
                // style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">

                <Form.Item<FieldType>
                    label="Name"
                    name="name"
                    style={{color: "white"}}
                    rules={[{ required: true, message: 'Please input your Name!' }]}>
                    <Input placeholder="John Smith" />
                </Form.Item>



                <Form.Item<FieldType>
                    label="Description"
                    name="description"
                    rules={[
                        {required: true, message: 'Please fill the description'},
                        {min: 4, message: "Characters should be at least 4"},
                    ]} >

                    <TextArea
                        rows={4}
                        placeholder="Please input your Description"
                        allowClear
                    />
                </Form.Item>



                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            </div>


        </DashboardContainer>
        
    </React.Fragment>
}

export default RequestFeature;